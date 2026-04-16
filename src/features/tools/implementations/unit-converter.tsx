"use client";

import { useState, useCallback, useMemo } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { useParams } from "next/navigation";
import type { Locale } from "@/lib/site";

/**
 * [백엔드 개발진 참고용 주석]
 * 1. 정밀도 관리: 현재 클라이언트 사이드에서는 자바스크립트의 Number를 사용하고 있으나, 
 *    정밀한 금융/과학 계산용 백엔드 API 구현 시에는 Big.js 또는 Decimal 자료형 사용을 권고합니다.
 * 2. 확장 가능성: 단위 변환 로직을 백엔드 RPC로 이전할 경우, 아래 CONVERSION_MAP의 계수들을 
 *    DB에서 관리하면 새로운 단위 추가 시 배포 없이 실시간 업데이트가 가능합니다.
 * 3. 데이터 검증: API 수신 시 fromUnit과 toUnit이 동일한 category에 속하는지 체크하는 벨리데이터가 필요합니다.
 */

type UnitCategory = "length" | "weight" | "temperature" | "area" | "volume" | "time";

interface UnitData {
  ratio: number;
}

const CONVERSION_MAP: Record<UnitCategory, Record<string, UnitData>> = {
  length: {
    m: { ratio: 1 },
    km: { ratio: 1000 },
    cm: { ratio: 0.01 },
    mm: { ratio: 0.001 },
    mile: { ratio: 1609.344 },
    yard: { ratio: 0.9144 },
    foot: { ratio: 0.3048 },
    inch: { ratio: 0.0254 },
  },
  weight: {
    kg: { ratio: 1 },
    g: { ratio: 0.001 },
    mg: { ratio: 0.000001 },
    ton: { ratio: 1000 },
    lb: { ratio: 0.45359237 },
    oz: { ratio: 0.028349523125 },
  },
  temperature: {
    celsius: { ratio: 1 },
    fahrenheit: { ratio: 1 }, // Special
    kelvin: { ratio: 1 }, // Special
  },
  area: {
    m2: { ratio: 1 },
    km2: { ratio: 1000000 },
    cm2: { ratio: 0.0001 },
    hectare: { ratio: 10000 },
    acre: { ratio: 4046.8564224 },
    pyung: { ratio: 3.305785 },
    ft2: { ratio: 0.09290304 },
  },
  volume: {
    liter: { ratio: 1 },
    ml: { ratio: 0.001 },
    m3: { ratio: 1000 },
    gallon_us: { ratio: 3.785411784 },
    gallon_uk: { ratio: 4.54609 },
    cup_us: { ratio: 0.2365882365 },
    floz_us: { ratio: 0.0295735295625 },
  },
  time: {
    sec: { ratio: 1 },
    min: { ratio: 60 },
    hour: { ratio: 3600 },
    day: { ratio: 86400 },
    week: { ratio: 604800 },
    month: { ratio: 2629746 },
    year: { ratio: 31556952 },
  },
};

export function UnitConverterTool({ tool, commonText: common }: ToolRendererProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "en";

  const [category, setCategory] = useState<UnitCategory>("length");
  const [fromUnit, setFromUnit] = useState<string>("m");
  const [toUnit, setToUnit] = useState<string>("km");
  const [inputValue, setInputValue] = useState<string>("1");
  const [precision, setPrecision] = useState<number>(4);

  const units = useMemo(() => Object.keys(CONVERSION_MAP[category]), [category]);

  const handleCategoryChange = (newCat: UnitCategory) => {
    setCategory(newCat);
    const newUnits = Object.keys(CONVERSION_MAP[newCat]);
    if (newCat === "length") {
      setFromUnit("inch");
      setToUnit("cm");
    } else if (newCat === "weight") {
      setFromUnit("kg");
      setToUnit("lb");
    } else if (newCat === "temperature") {
      setFromUnit("celsius");
      setToUnit("fahrenheit");
    } else {
      setFromUnit(newUnits[0]);
      setToUnit(newUnits[1] || newUnits[0]);
    }
  };

  const getFormula = (cat: UnitCategory, from: string, to: string) => {
    if (cat === "temperature") {
      if (from === "celsius" && to === "fahrenheit") return "(°C × 9/5) + 32";
      if (from === "fahrenheit" && to === "celsius") return "(°F − 32) × 5/9";
      if (from === "celsius" && to === "kelvin") return "°C + 273.15";
      if (from === "kelvin" && to === "celsius") return "K − 273.15";
      if (from === "fahrenheit" && to === "kelvin") return "(°F − 32) × 5/9 + 273.15";
      if (from === "kelvin" && to === "fahrenheit") return "(K − 273.15) × 9/5 + 32";
      return "1:1";
    }
    const fromRatio = CONVERSION_MAP[cat][from].ratio;
    const toRatio = CONVERSION_MAP[cat][to].ratio;
    const multiplier = fromRatio / toRatio;
    return `Value × ${multiplier.toPrecision(6).replace(/\.?0+$/, "")}`;
  };

  const convertValue = useCallback((val: string, from: string, to: string, cat: UnitCategory, prec: number): string => {
    const num = parseFloat(val);
    if (isNaN(num)) return "";

    if (cat === "temperature") {
      let celsius = 0;
      if (from === "celsius") celsius = num;
      else if (from === "fahrenheit") celsius = (num - 32) * 5 / 9;
      else if (from === "kelvin") celsius = num - 273.15;

      let result = 0;
      if (to === "celsius") result = celsius;
      else if (to === "fahrenheit") result = (celsius * 9 / 5) + 32;
      else if (to === "kelvin") result = celsius + 273.15;
      
      return result.toFixed(prec).replace(/\.?0+$/, "");
    }

    const fromData = CONVERSION_MAP[cat][from];
    const toData = CONVERSION_MAP[cat][to];
    const result = (num * fromData.ratio) / toData.ratio;
    return result.toFixed(prec).replace(/\.?0+$/, "");
  }, []);

  const unitLabels: Record<string, string> = useMemo(() => ({
    m: "Meter (m)", km: "Kilometer (km)", cm: "Centimeter (cm)", mm: "Millimeter (mm)",
    mile: "Mile (mi)", yard: "Yard (yd)", foot: "Foot (ft)", inch: "Inch (in)",
    kg: "Kilogram (kg)", g: "Gram (g)", mg: "Milligram (mg)", ton: "Ton (t)", lb: "Pound (lb)", oz: "Ounce (oz)",
    celsius: "Celsius (°C)", fahrenheit: "Fahrenheit (°F)", kelvin: "Kelvin (K)",
    m2: "Square Meter (m²)", km2: "Square Kilometer (km²)", cm2: "Square Centimeter (cm²)", 
    hectare: "Hectare (ha)", acre: "Acre (ac)", pyung: locale === "ko" ? "평 (坪)" : "Pyung", ft2: "Square Foot (ft²)",
    liter: "Liter (L)", ml: "Milliliter (mL)", m3: "Cubic Meter (m³)", gallon_us: "Gallon (US)", gallon_uk: "Gallon (UK)",
    cup_us: "Cup (US)", floz_us: "Fluid Ounce (US)",
    sec: "Second", min: "Minute", hour: "Hour", day: "Day", week: "Week", month: "Month", year: "Year",
  }), [locale]);

  const resultValue = convertValue(inputValue, fromUnit, toUnit, category, precision);

  const handleSwap = () => {
    const prevFrom = fromUnit;
    setFromUnit(toUnit);
    setToUnit(prevFrom);
  };

  const handleCopy = () => {
    const text = `${inputValue} ${fromUnit} = ${resultValue} ${toUnit}`;
    navigator.clipboard.writeText(text);
    alert(locale === "ko" ? "결과가 복사되었습니다!" : "Result copied!");
  };

  const categoriesSet: { key: UnitCategory; label: string }[] = useMemo(() => [
    { key: "length", label: common.unitLength || "Length" },
    { key: "weight", label: common.unitWeight || "Weight" },
    { key: "temperature", label: common.unitTemperature || "Temperature" },
    { key: "area", label: common.unitArea || "Area" },
    { key: "volume", label: common.unitVolume || "Volume" },
    { key: "time", label: "Time" },
  ], [common]);

  return (
    <div className="tool-stack">
      {/* Category Selection Tabs */}
      <div className="category-tabs-container mb-8">
        <div className="flex flex-wrap md:flex-nowrap gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-2xl backdrop-blur-sm border border-[var(--panel-border)] overflow-x-auto no-scrollbar">
          {categoriesSet.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`flex-1 min-w-[100px] px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
                category === cat.key 
                ? "bg-white dark:bg-white/10 shadow-lg text-[var(--accent)] scale-100" 
                : "text-[var(--text-soft)] hover:bg-black/5 hover:dark:bg-white/5 scale-[0.98]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Conversion Panel */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-6 lg:gap-0 items-center bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[40px] p-6 lg:p-12 shadow-2xl transition-all duration-500 hover:shadow-[var(--accent)]/10">
          
          {/* From Container */}
          <div className="flex flex-col gap-6 w-full lg:flex-1">
            <div className="flex flex-row items-center gap-4 px-2">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30 whitespace-nowrap">INPUT SOURCE</span>
              <div className="h-[1px] flex-1 bg-[var(--panel-border)] opacity-30"></div>
              <span className="inline-flex items-center text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/20 px-3 py-1.5 rounded-full shadow-sm">
                {unitLabels[fromUnit]?.split('(')[1]?.replace(')', '') || "UNIT"}
              </span>
            </div>
            <div className="relative group/input p-8 bg-black/5 dark:bg-white/5 rounded-[36px] border border-transparent focus-within:border-[var(--accent)]/30 transition-all shadow-inner">
              <input
                type="number"
                className="w-full bg-transparent text-5xl md:text-6xl font-black p-0 border-none outline-none focus:ring-0 placeholder:opacity-5 text-[var(--text)] transition-transform focus:scale-[1.01]"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="0"
              />
            </div>
            <div className="px-2">
              <select 
                className="tool-input w-full !p-5 bg-black/10 dark:bg-white/10 border-[var(--panel-border)] rounded-[26px] text-base font-bold cursor-pointer hover:bg-black/20 hover:border-[var(--accent)]/30 transition-all active:scale-[0.98] shadow-sm" 
                value={fromUnit} 
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {units.map(u => <option key={u} value={u}>{unitLabels[u] || u}</option>)}
              </select>
            </div>
          </div>

          {/* Swap Middle Divider - Perfectly Centered */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-6 py-6 lg:py-0 w-full lg:w-[80px]">
            <div className="hidden lg:block w-[1px] h-28 bg-gradient-to-b from-transparent via-[var(--panel-border)] to-transparent opacity-50"></div>
            <button 
              onClick={handleSwap}
              className="group/swap bg-[var(--accent)] text-white w-16 h-16 rounded-[26px] flex items-center justify-center transition-all duration-500 hover:rotate-180 hover:scale-110 shadow-2xl shadow-[var(--accent)]/30 active:scale-90 z-20"
              title="Swap Units"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16V4M7 4L3 8M7 4L11 8" />
                <path d="M17 8V20M17 20L21 16M17 20L13 16" />
              </svg>
            </button>
            <div className="hidden lg:block w-[1px] h-28 bg-gradient-to-b from-transparent via-[var(--panel-border)] to-transparent opacity-50"></div>
            <div className="lg:hidden h-[1px] flex-1 bg-[var(--panel-border)] opacity-30"></div>
          </div>

          {/* To Container */}
          <div className="flex flex-col gap-6 w-full lg:flex-1">
            <div className="flex flex-row items-center gap-4 px-2">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30 whitespace-nowrap">CONVERTED RESULT</span>
              <div className="h-[1px] flex-1 bg-[var(--panel-border)] opacity-30"></div>
              <span className="inline-flex items-center text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/20 px-3 py-1.5 rounded-full shadow-sm">
                {unitLabels[toUnit]?.split('(')[1]?.replace(')', '') || "UNIT"}
              </span>
            </div>
            <div className="relative group/result p-8 bg-[var(--accent-soft)]/20 rounded-[36px] border border-[var(--accent)]/10 transition-all hover:bg-[var(--accent-soft)]/40 shadow-inner">
              <div 
                className="w-full bg-transparent text-5xl md:text-6xl font-black p-0 min-h-[4.5rem] flex items-center text-[var(--accent)] transition-all duration-300 overflow-x-auto no-scrollbar"
                onClick={handleCopy}
                style={{ cursor: 'pointer' }}
              >
                {resultValue || "0"}
              </div>
              <button 
                onClick={handleCopy}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-[20px] bg-white/90 dark:bg-black/60 opacity-0 group-hover/result:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-xl border border-[var(--panel-border)] text-[var(--accent)] z-20"
                title="Copy Result"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
            <div className="px-2">
              <select 
                className="tool-input w-full !p-5 bg-black/10 dark:bg-white/10 border-[var(--panel-border)] rounded-[26px] text-base font-bold cursor-pointer hover:bg-black/20 hover:border-[var(--accent)]/30 transition-all active:scale-[0.98] shadow-sm" 
                value={toUnit} 
                onChange={(e) => setToUnit(e.target.value)}
              >
                {units.map(u => <option key={u} value={u}>{unitLabels[u] || u}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Controls & Info Area */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Precision & Formula */}
        <div className="flex flex-col gap-6 p-8 bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[40px] shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30">Decimal Precision</span>
            <div className="inline-flex p-1.5 bg-black/5 dark:bg-white/5 rounded-2xl border border-[var(--panel-border)] shadow-inner">
              {[0, 2, 4, 6].map(p => (
                <button
                  key={p}
                  onClick={() => setPrecision(p)}
                  className={`min-w-[56px] px-5 py-2.5 rounded-[14px] text-xs font-black transition-all duration-500 ${precision === p ? "bg-[var(--accent)] text-white shadow-xl scale-105 z-10" : "text-[var(--text-soft)] opacity-40 hover:opacity-100 hover:bg-black/5"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5 bg-[var(--accent-soft)]/10 rounded-[28px] border border-[var(--accent)]/5 flex items-center justify-between group/formula transition-all hover:bg-[var(--accent-soft)]/20 shadow-sm">
            <div className="flex flex-col gap-2 overflow-hidden">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Mathematical Formula</span>
              <div className="text-base font-mono text-[var(--accent)] font-bold truncate tracking-tight">
                {getFormula(category, fromUnit, toUnit)}
              </div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
          </div>
        </div>

        {/* Action Quick Buttons */}
        <div className="flex flex-col gap-5 justify-center">
          <button 
            onClick={handleCopy}
            className="group/copy tool-button primary full-width !h-20 !rounded-[32px] shadow-2xl shadow-[var(--accent)]/20 flex items-center justify-center gap-4 transition-all hover:scale-[1.03] active:scale-95"
          >
            <div className="p-3 bg-white/20 rounded-2xl transition-transform group-hover/copy:rotate-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </div>
            <span className="text-xl font-black tracking-tight">Copy Converted Result</span>
          </button>
          <button 
            onClick={() => { setInputValue("1"); }}
            className="tool-button secondary full-width !h-16 !rounded-[28px] border-[var(--panel-border)] font-black text-sm opacity-50 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 transition-all tracking-wider"
          >
            RESET ALL FIELDS
          </button>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-4 px-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-30"></div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] animate-pulse"></div>
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] whitespace-nowrap">
            {common.unitAccuracyNote || "Precision Guaranteed"}
          </p>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-30"></div>
      </div>
    </div>
  );
}
