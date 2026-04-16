"use client";

import { useState, useCallback, useMemo } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { useParams } from "next/navigation";
import type { Locale } from "@/lib/site";

/**
 * [백엔드 개발진 참고용 주석]
 * 1. 계산 정확도: 퍼센트 계산 시 부동 소수점 오차를 최소화하기 위해 소수점 자릿수 처리를 클라이언트에서 하고 있습니다.
 * 2. 확장 가능성: 복리 계산기나 재무 관련 더 복잡한 계산이 필요할 경우 백엔드 API 연동을 고려할 수 있습니다.
 */

type CalcMode = "value" | "increase" | "decrease" | "discount";

export function PercentageCalculatorTool({ locale, tool, toolText, commonText: common }: ToolRendererProps) {
  const t = toolText!;
  const [mode, setMode] = useState<CalcMode>("value");
  const [val1, setVal1] = useState<string>("200");
  const [val2, setVal2] = useState<string>("25");
  const [copied, setCopied] = useState(false);

  const modes: { key: CalcMode; label: string; desc: string; formula: string; l1: string; l2: string }[] = useMemo(() => [
    { 
      key: "value", 
      label: t.modeLabels.value, 
      desc: locale === "ko" ? "기준값에서 특정 퍼센트가 얼마인지 계산합니다." : "Calculate what the percentage of a value is.",
      formula: locale === "ko" ? "기준값 × 퍼센트 ÷ 100" : "Base Value × Percentage ÷ 100",
      l1: t.inputLabels.totalValue, 
      l2: t.inputLabels.percentage 
    },
    { 
      key: "increase", 
      label: t.modeLabels.increase, 
      desc: locale === "ko" ? "기준값에서 대상값으로 얼마만큼 늘어났는지 계산합니다." : "Calculate the percentage increase from one value to another.",
      formula: locale === "ko" ? "(대상값 - 기준값) ÷ 기준값 × 100" : "(Target - Base) ÷ Base × 100",
      l1: t.inputLabels.originalValue, 
      l2: t.inputLabels.newValue 
    },
    { 
      key: "decrease", 
      label: t.modeLabels.decrease, 
      desc: locale === "ko" ? "기준값에서 대상값으로 얼마만큼 줄어들었는지 계산합니다." : "Calculate the percentage decrease from one value to another.",
      formula: locale === "ko" ? "(기준값 - 대상값) ÷ 기준값 × 100" : "(Base - Target) ÷ Base × 100",
      l1: t.inputLabels.originalValue, 
      l2: t.inputLabels.newValue 
    },
    { 
      key: "discount", 
      label: t.modeLabels.discount, 
      desc: locale === "ko" ? "원가에서 특정 할인율이 적용된 최종 가격을 계산합니다." : "Calculate the final price after a percentage discount.",
      formula: locale === "ko" ? "원가 × (1 - 할인율 ÷ 100)" : "Price × (1 - Discount ÷ 100)",
      l1: t.inputLabels.originalPrice, 
      l2: t.inputLabels.discountPercentage 
    },
  ], [t, locale]);

  const activeMode = modes.find(m => m.key === mode)!;

  const results = useMemo(() => {
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    if (isNaN(n1) || isNaN(n2)) return null;

    let result = 0;
    let summary = "";

    switch (mode) {
      case "value":
        result = (n1 * n2) / 100;
        summary = `${n1}${t.ofText} ${n2}%${t.isText} ${result.toLocaleString()}${t.percentText}`;
        break;
      case "increase":
        result = n1 === 0 ? 0 : ((n2 - n1) / n1) * 100;
        summary = `${n1}${t.fromText} ${n2}${t.toText} ${result.toFixed(2)}% ${t.increaseText}`;
        break;
      case "decrease":
        result = n1 === 0 ? 0 : ((n1 - n2) / n1) * 100;
        summary = `${n1}${t.fromText} ${n2}${t.toText} ${result.toFixed(2)}% ${t.decreaseText}`;
        break;
      case "discount":
        const discountAmount = (n1 * n2) / 100;
        result = n1 - discountAmount;
        summary = `${n1}원에서 ${n2}% ${t.discount} -> ${result.toLocaleString()}원 (${t.savedAmount}: ${discountAmount.toLocaleString()}원)`;
        break;
    }

    return { result, summary };
  }, [mode, val1, val2, t]);

  const handleCopy = () => {
    if (results) {
      navigator.clipboard.writeText(results.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setVal1("");
    setVal2("");
  };

  return (
    <div className="tool-stack max-w-full overflow-hidden p-0.5">
      {/* Mode Selection Tabs */}
      <div className="w-full overflow-hidden mb-8 sm:mb-12">
        <div className="flex flex-row overflow-x-auto no-scrollbar gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-3xl backdrop-blur-sm border border-[var(--panel-border)] scroll-smooth">
          {modes.map((m) => {
            const isActive = mode === m.key;
            return (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`whitespace-nowrap flex-shrink-0 min-w-[100px] sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 font-black text-xs sm:text-sm relative ${
                  isActive 
                  ? "bg-[#4B48D9] text-white shadow-lg scale-100 z-10" 
                  : "bg-white dark:bg-white/5 text-[var(--text-soft)] hover:bg-black/5 scale-[0.98] opacity-80"
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Calculation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 sm:gap-8 items-stretch pt-2 w-full min-w-0">
        
        {/* Left: Input Panel */}
        <div className="flex flex-col gap-6 sm:gap-10 bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[32px] sm:rounded-[40px] p-5 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden min-w-0 w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-3xl font-black text-[#2D336B] dark:text-white">
              {locale === "ko" ? "입력값" : "Input Values"}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[var(--text-soft)] opacity-70">
              {activeMode.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-w-0">
            <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
              <label className="text-[10px] sm:text-sm font-black text-[var(--text)] opacity-80 pl-1 uppercase tracking-wider">
                {activeMode.l1}
              </label>
              <div className="relative group/input p-3 sm:p-4 bg-white dark:bg-black/20 rounded-xl sm:rounded-2xl border border-[var(--panel-border)] focus-within:border-[#4B48D9] transition-all shadow-sm shadow-black/[0.02] min-w-0">
                <input
                  type="number"
                  className="w-full bg-transparent text-xl sm:text-3xl font-black p-1 sm:p-2 border-none outline-none focus:ring-0 text-[var(--text)]"
                  value={val1}
                  onChange={(e) => setVal1(e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
              <label className="text-[10px] sm:text-sm font-black text-[var(--text)] opacity-80 pl-1 uppercase tracking-wider">
                {activeMode.l2}
              </label>
              <div className="relative group/input flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white dark:bg-black/20 rounded-xl sm:rounded-2xl border border-[var(--panel-border)] focus-within:border-[#4B48D9] transition-all shadow-sm shadow-black/[0.02] min-w-0">
                <input
                  type="number"
                  className="flex-1 bg-transparent text-xl sm:text-3xl font-black p-1 sm:p-2 border-none outline-none focus:ring-0 text-[var(--text)] min-w-0"
                  value={val2}
                  onChange={(e) => setVal2(e.target.value)}
                  placeholder="0"
                />
                {(mode === "value" || mode === "discount") && (
                  <span className="text-lg sm:text-2xl font-black text-[var(--text-soft)] opacity-40 pr-1 sm:pr-2">%</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
            <button 
              className="w-full sm:flex-none py-4 sm:py-5 px-6 sm:px-10 rounded-xl sm:rounded-2xl bg-[#4B48D9] text-white font-black text-base sm:text-lg transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-[#4B48D9]/30"
            >
              {locale === "ko" ? "계산하기" : "Calculate"}
            </button>
            <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
              <button 
                onClick={handleReset} 
                className="flex-1 sm:flex-none py-4 sm:py-5 px-3 sm:px-8 rounded-xl sm:rounded-2xl bg-black/5 dark:bg-white/5 text-[var(--text-soft)] font-black transition-all hover:bg-black/10 dark:hover:bg-white/10 border border-[var(--panel-border)] text-xs sm:text-base"
              >
                {locale === "ko" ? "초기화" : "Clear"}
              </button>
              <button 
                onClick={handleCopy} 
                disabled={!results}
                className={`flex-[1.5] sm:flex-none py-4 sm:py-5 px-3 sm:px-8 rounded-xl sm:rounded-2xl bg-black/5 dark:bg-white/5 text-[var(--text-soft)] font-black transition-all border border-[var(--panel-border)] flex items-center justify-center gap-2 text-xs sm:text-base ${!results ? "opacity-30" : "hover:bg-black/10 active:scale-95"}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span className="whitespace-nowrap">
                  {copied ? (locale === "ko" ? "복사됨!" : "Copied!") : (locale === "ko" ? "결과 복사" : "Copy Result")}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Result Panel */}
        <div className="bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[32px] sm:rounded-[40px] p-5 sm:p-10 lg:p-12 shadow-2xl flex flex-col items-stretch relative overflow-hidden min-w-0">
          <div className="flex flex-col gap-4 sm:gap-6 min-w-0">
            <span className="inline-flex max-w-fit px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#EAEAFF] dark:bg-white/10 text-[9px] sm:text-[11px] font-black text-[#4B48D9] dark:text-white uppercase tracking-wider">
              {locale === "ko" ? "계산 결과" : "RESULT"}
            </span>
            <div className="flex flex-col justify-center min-h-[80px] sm:min-h-[140px] w-full overflow-hidden">
              {results ? (
                <div className="flex items-baseline gap-2 animate-in slide-in-from-bottom-2 duration-500 w-full overflow-hidden">
                  <span className="text-4xl sm:text-7xl md:text-9xl font-black text-[#2D336B] dark:text-white tracking-tighter truncate max-w-full">
                    {results.result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                  {(mode === "increase" || mode === "decrease") && (
                    <span className="text-xl sm:text-4xl font-black text-[#4B48D9]">%</span>
                  )}
                </div>
              ) : (
                <span className="text-4xl sm:text-7xl md:text-9xl font-black text-[var(--text)] opacity-10">0</span>
              )}
            </div>
            
            <div className="w-full h-[1px] bg-[var(--panel-border)] opacity-50 my-1 sm:my-2" />
            
            <p className={`text-base sm:text-xl font-bold text-[var(--text)] transition-opacity duration-300 break-words leading-tight sm:leading-snug min-w-0 ${results ? "opacity-90" : "opacity-10"}`}>
              {results?.summary || "..."}
            </p>
          </div>

          <div className="mt-6 sm:mt-auto pt-4 sm:pt-10 min-w-0">
            <div className="p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-black/[0.03] dark:bg-white/[0.03] border border-[var(--panel-border)] flex flex-col gap-4 sm:gap-6 min-w-0">
              <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-[var(--text-soft)] opacity-60 uppercase">
                  {locale === "ko" ? "현재 모드" : "CURRENT MODE"}
                </span>
                <span className="text-sm sm:text-lg font-black text-[var(--text)] truncate">
                  {activeMode.label}
                </span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-[var(--text-soft)] opacity-60 uppercase">
                  {locale === "ko" ? "계산식" : "FORMULA"}
                </span>
                <span className="text-xs sm:text-base font-bold text-[var(--text)] opacity-80 break-words leading-relaxed">
                  {activeMode.formula}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accuracy Footer */}
      <div className="mt-10 sm:mt-16 flex items-center justify-center gap-6 px-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-20"></div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#4B48D9] shadow-[0_0_15px_#4B48D9] animate-pulse"></div>
          <p className="text-[9px] sm:text-[10px] font-black opacity-25 uppercase tracking-[0.3em] sm:tracking-[0.5em] whitespace-nowrap">
            {common.unitAccuracyNote || (locale === "ko" ? "결과 정확도 보증" : "High Precision Guaranteed")}
          </p>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-20"></div>
      </div>
    </div>
  );
}
