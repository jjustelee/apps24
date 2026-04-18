"use client";

import { useMemo, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

type Unit = "px" | "rem" | "em" | "percent" | "vw" | "vh" | "pt" | "in" | "cm" | "mm";

type ReferenceValues = {
  rootFontSize: string;
  currentFontSize: string;
  percentBase: string;
  viewportWidth: string;
  viewportHeight: string;
};

type PixelConverterPreset = {
  inputValue?: string;
  fromUnit?: Unit;
  toUnit?: Unit;
  references?: Partial<ReferenceValues>;
};

const DEFAULT_INPUT = "16";
const DEFAULT_REFERENCES: ReferenceValues = {
  rootFontSize: "16",
  currentFontSize: "16",
  percentBase: "16",
  viewportWidth: "1440",
  viewportHeight: "900",
};

const UNITS: Unit[] = ["px", "rem", "em", "percent", "vw", "vh", "pt", "in", "cm", "mm"];

const UNIT_LABELS: Record<Unit, string> = {
  px: "px",
  rem: "rem",
  em: "em",
  percent: "%",
  vw: "vw",
  vh: "vh",
  pt: "pt",
  in: "in",
  cm: "cm",
  mm: "mm",
};

const getPositiveNumber = (value: string, fallback: number) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const formatNumber = (value: number, precision: number) => {
  if (!Number.isFinite(value)) return "";
  const formatted = value.toFixed(precision).replace(/\.?0+$/, "");
  return formatted === "-0" ? "0" : formatted;
};

const getPxPerUnit = (unit: Unit, references: ReferenceValues) => {
  const rootFontSize = getPositiveNumber(references.rootFontSize, 16);
  const currentFontSize = getPositiveNumber(references.currentFontSize, 16);
  const percentBase = getPositiveNumber(references.percentBase, 16);
  const viewportWidth = getPositiveNumber(references.viewportWidth, 1440);
  const viewportHeight = getPositiveNumber(references.viewportHeight, 900);

  switch (unit) {
    case "px":
      return 1;
    case "rem":
      return rootFontSize;
    case "em":
      return currentFontSize;
    case "percent":
      return percentBase / 100;
    case "vw":
      return viewportWidth / 100;
    case "vh":
      return viewportHeight / 100;
    case "pt":
      return 96 / 72;
    case "in":
      return 96;
    case "cm":
      return 96 / 2.54;
    case "mm":
      return 96 / 25.4;
    default:
      return 1;
  }
};

const convertValue = (value: string, from: Unit, to: Unit, references: ReferenceValues, precision: number) => {
  const input = Number.parseFloat(value);
  if (!Number.isFinite(input)) return "";

  const pxValue = input * getPxPerUnit(from, references);
  const result = pxValue / getPxPerUnit(to, references);
  return formatNumber(result, precision);
};

const getFormula = (from: Unit, to: Unit, references: ReferenceValues, precision: number) => {
  const oneUnit = convertValue("1", from, to, references, precision);
  if (!oneUnit) return "";
  return `1 ${UNIT_LABELS[from]} = ${oneUnit} ${UNIT_LABELS[to]}`;
};

const getOptionLabel = (unit: Unit) => {
  switch (unit) {
    case "px":
      return "Pixels (px)";
    case "rem":
      return "Root em (rem)";
    case "em":
      return "Em (em)";
    case "percent":
      return "Percent (%)";
    case "vw":
      return "Viewport width (vw)";
    case "vh":
      return "Viewport height (vh)";
    case "pt":
      return "Points (pt)";
    case "in":
      return "Inches (in)";
    case "cm":
      return "Centimeters (cm)";
    case "mm":
      return "Millimeters (mm)";
    default:
      return unit;
  }
};

export function PixelConverterTool({ commonText: common, toolText, toolData }: ToolRendererProps) {
  const preset = toolData && typeof toolData === "object" ? (toolData as PixelConverterPreset) : undefined;

  const [inputValue, setInputValue] = useState(preset?.inputValue ?? DEFAULT_INPUT);
  const [fromUnit, setFromUnit] = useState<Unit>(preset?.fromUnit ?? "px");
  const [toUnit, setToUnit] = useState<Unit>(preset?.toUnit ?? "rem");
  const [precision, setPrecision] = useState(4);
  const [references, setReferences] = useState<ReferenceValues>({
    ...DEFAULT_REFERENCES,
    ...(preset?.references ?? {}),
  });

  const getText = (key: string, fallback: string) => {
    const value = toolText?.[key];
    return typeof value === "string" ? value : fallback;
  };

  const text = {
    referenceValuesTitle: getText("referenceValuesTitle", "Reference values"),
    rootFontSizeLabel: getText("rootFontSizeLabel", "Root font size (1rem)"),
    currentFontSizeLabel: getText("currentFontSizeLabel", "Current font size (1em)"),
    percentBaseLabel: getText("percentBaseLabel", "100% equals"),
    viewportWidthLabel: getText("viewportWidthLabel", "Viewport width"),
    viewportHeightLabel: getText("viewportHeightLabel", "Viewport height"),
    formulaTitle: getText("formulaTitle", "Conversion formula"),
    resultLabel: getText("resultLabel", "Converted result"),
    swapLabel: getText("swapLabel", "Swap units"),
    referenceNote: getText("referenceNote", "em, %, vw, and vh use the reference values below."),
  };

  const resultValue = convertValue(inputValue, fromUnit, toUnit, references, precision);
  const summary = useMemo(() => {
    const fromValue = inputValue.trim() || "0";
    return `${fromValue} ${UNIT_LABELS[fromUnit]} = ${resultValue || "0"} ${UNIT_LABELS[toUnit]}`;
  }, [fromUnit, inputValue, resultValue, toUnit]);
  const formula = useMemo(() => getFormula(fromUnit, toUnit, references, precision), [fromUnit, precision, references, toUnit]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const handleCopy = async () => {
    if (!resultValue) return;
    await navigator.clipboard.writeText(summary);
    alert(common.copied);
  };

  const resetAll = () => {
    setInputValue(DEFAULT_INPUT);
    setFromUnit("px");
    setToUnit("rem");
    setPrecision(4);
    setReferences(DEFAULT_REFERENCES);
  };

  const updateReference = (key: keyof ReferenceValues) => (value: string) => {
    setReferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="tool-stack">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_88px_1fr] gap-6 lg:gap-0 items-center bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[40px] p-6 lg:p-12 shadow-2xl">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row items-center gap-4 px-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30 whitespace-nowrap">{common.from}</span>
            <div className="h-[1px] flex-1 bg-[var(--panel-border)] opacity-30" />
            <span className="inline-flex items-center text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/20 px-3 py-1.5 rounded-full shadow-sm">
              {UNIT_LABELS[fromUnit]}
            </span>
          </div>

          <div className="relative group/input p-8 bg-black/5 dark:bg-white/5 rounded-[36px] border border-transparent focus-within:border-[var(--accent)]/30 transition-all shadow-inner">
            <input
              type="number"
              step="any"
              className="w-full bg-transparent text-5xl md:text-6xl font-black p-0 border-none outline-none focus:ring-0 placeholder:opacity-5 text-[var(--text)] transition-transform focus:scale-[1.01]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="16"
            />
          </div>

          <div className="px-2">
            <select
              className="tool-input w-full !p-5 bg-black/10 dark:bg-white/10 border-[var(--panel-border)] rounded-[26px] text-base font-bold cursor-pointer hover:bg-black/20 hover:border-[var(--accent)]/30 transition-all active:scale-[0.98] shadow-sm"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as Unit)}
            >
              {UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {getOptionLabel(unit)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-center justify-center gap-6 py-6 lg:py-0 w-full lg:w-[88px]">
          <div className="hidden lg:block w-[1px] h-28 bg-gradient-to-b from-transparent via-[var(--panel-border)] to-transparent opacity-50" />
          <button
            onClick={handleSwap}
            className="group/swap bg-[var(--accent)] text-white w-16 h-16 rounded-[26px] flex items-center justify-center transition-all duration-500 hover:rotate-180 hover:scale-110 shadow-2xl shadow-[var(--accent)]/30 active:scale-90 z-20"
            title={text.swapLabel}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 16V4M7 4L3 8M7 4L11 8" />
              <path d="M17 8V20M17 20L21 16M17 20L13 16" />
            </svg>
          </button>
          <div className="hidden lg:block w-[1px] h-28 bg-gradient-to-b from-transparent via-[var(--panel-border)] to-transparent opacity-50" />
          <div className="lg:hidden h-[1px] flex-1 bg-[var(--panel-border)] opacity-30" />
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row items-center gap-4 px-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30 whitespace-nowrap">{text.resultLabel}</span>
            <div className="h-[1px] flex-1 bg-[var(--panel-border)] opacity-30" />
            <span className="inline-flex items-center text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent)]/20 px-3 py-1.5 rounded-full shadow-sm">
              {UNIT_LABELS[toUnit]}
            </span>
          </div>

          <div className="relative group/result p-8 bg-[var(--accent-soft)]/20 rounded-[36px] border border-[var(--accent)]/10 transition-all hover:bg-[var(--accent-soft)]/40 shadow-inner">
            <div className="w-full bg-transparent text-5xl md:text-6xl font-black p-0 min-h-[4.5rem] flex items-center text-[var(--accent)] transition-all duration-300 overflow-x-auto no-scrollbar">
              {resultValue || "0"}
            </div>
            <button
              onClick={handleCopy}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-[20px] bg-white/90 dark:bg-black/60 opacity-0 group-hover/result:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-xl border border-[var(--panel-border)] text-[var(--accent)] z-20"
              title={common.copy}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>

          <div className="px-2">
            <select
              className="tool-input w-full !p-5 bg-black/10 dark:bg-white/10 border-[var(--panel-border)] rounded-[26px] text-base font-bold cursor-pointer hover:bg-black/20 hover:border-[var(--accent)]/30 transition-all active:scale-[0.98] shadow-sm"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as Unit)}
            >
              {UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {getOptionLabel(unit)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 p-8 bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[40px] shadow-xl">
          <div className="flex items-center justify-between gap-4 px-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30">{text.referenceValuesTitle}</span>
            <div className="inline-flex p-1.5 bg-black/5 dark:bg-white/5 rounded-2xl border border-[var(--panel-border)] shadow-inner">
              {[0, 2, 4, 6].map((value) => (
                <button
                  key={value}
                  onClick={() => setPrecision(value)}
                  className={`min-w-[56px] px-5 py-2.5 rounded-[14px] text-xs font-black transition-all duration-500 ${
                    precision === value
                      ? "bg-[var(--accent)] text-white shadow-xl scale-105 z-10"
                      : "text-[var(--text-soft)] opacity-40 hover:opacity-100 hover:bg-black/5"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 p-4 rounded-[24px] bg-black/5 dark:bg-white/5 border border-[var(--panel-border)]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{text.rootFontSizeLabel}</span>
              <input
                type="number"
                step="any"
                className="tool-input !px-4 !py-3 bg-transparent border-[var(--panel-border)] rounded-[18px]"
                value={references.rootFontSize}
                onChange={(e) => updateReference("rootFontSize")(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 p-4 rounded-[24px] bg-black/5 dark:bg-white/5 border border-[var(--panel-border)]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{text.currentFontSizeLabel}</span>
              <input
                type="number"
                step="any"
                className="tool-input !px-4 !py-3 bg-transparent border-[var(--panel-border)] rounded-[18px]"
                value={references.currentFontSize}
                onChange={(e) => updateReference("currentFontSize")(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 p-4 rounded-[24px] bg-black/5 dark:bg-white/5 border border-[var(--panel-border)]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{text.percentBaseLabel}</span>
              <input
                type="number"
                step="any"
                className="tool-input !px-4 !py-3 bg-transparent border-[var(--panel-border)] rounded-[18px]"
                value={references.percentBase}
                onChange={(e) => updateReference("percentBase")(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 p-4 rounded-[24px] bg-black/5 dark:bg-white/5 border border-[var(--panel-border)]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{text.viewportWidthLabel}</span>
              <input
                type="number"
                step="any"
                className="tool-input !px-4 !py-3 bg-transparent border-[var(--panel-border)] rounded-[18px]"
                value={references.viewportWidth}
                onChange={(e) => updateReference("viewportWidth")(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-2 p-4 rounded-[24px] bg-black/5 dark:bg-white/5 border border-[var(--panel-border)] sm:col-span-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{text.viewportHeightLabel}</span>
              <input
                type="number"
                step="any"
                className="tool-input !px-4 !py-3 bg-transparent border-[var(--panel-border)] rounded-[18px]"
                value={references.viewportHeight}
                onChange={(e) => updateReference("viewportHeight")(e.target.value)}
              />
            </label>
          </div>

          <p className="text-sm leading-7 text-[var(--text-soft)]">{text.referenceNote}</p>
        </div>

        <div className="flex flex-col gap-6 justify-center p-8 bg-[var(--panel-glass)] border border-[var(--panel-border)] rounded-[40px] shadow-xl">
          <div className="p-5 bg-[var(--accent-soft)]/10 rounded-[28px] border border-[var(--accent)]/5 flex items-center justify-between group/formula transition-all hover:bg-[var(--accent-soft)]/20 shadow-sm">
            <div className="flex flex-col gap-2 overflow-hidden">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">{text.formulaTitle}</span>
              <div className="text-base font-mono text-[var(--accent)] font-bold truncate tracking-tight">
                {formula || "—"}
              </div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="group/copy tool-button primary full-width !h-20 !rounded-[32px] shadow-2xl shadow-[var(--accent)]/20 flex items-center justify-center gap-4 transition-all hover:scale-[1.03] active:scale-95"
          >
            <div className="p-3 bg-white/20 rounded-2xl transition-transform group-hover/copy:rotate-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight">{common.copy}</span>
          </button>

          <button
            onClick={resetAll}
            className="tool-button secondary full-width !h-16 !rounded-[28px] border-[var(--panel-border)] font-black text-sm opacity-50 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 transition-all tracking-wider"
          >
            {common.reset}
          </button>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-4 px-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-30" />
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] animate-pulse" />
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] whitespace-nowrap">
            {common.unitAccuracyNote || "Precision guaranteed"}
          </p>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--panel-border)] to-transparent opacity-30" />
      </div>
    </div>
  );
}
