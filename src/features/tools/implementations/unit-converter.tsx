"use client";

import { useState, useCallback, useMemo } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { getCommonText } from "@/features/tools/copy";
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

type UnitCategory = "length" | "weight" | "area" | "volume" | "temperature" | "speed" | "digital";

interface ConversionData {
  ratio: number; // base unit 기준 비율
  offset?: number; // 온도의 경우 offset 필요 (ex: Celsius to Kelvin)
}

const CONVERSION_MAP: Record<UnitCategory, Record<string, ConversionData>> = {
  length: {
    m: { ratio: 1 },
    km: { ratio: 1000 },
    cm: { ratio: 0.01 },
    mm: { ratio: 0.001 },
    mile: { ratio: 1609.344 },
    yard: { ratio: 0.9144 },
    foot: { ratio: 0.3048 },
    inch: { ratio: 0.0254 },
    nmi: { ratio: 1852 },
  },
  weight: {
    kg: { ratio: 1 },
    g: { ratio: 0.001 },
    mg: { ratio: 0.000001 },
    ton: { ratio: 1000 },
    lb: { ratio: 0.45359237 },
    oz: { ratio: 0.028349523125 },
    st: { ratio: 6.35029318 },
  },
  area: {
    m2: { ratio: 1 },
    km2: { ratio: 1000000 },
    cm2: { ratio: 0.0001 },
    pyung: { ratio: 3.305785 },
    acre: { ratio: 4046.8564224 },
    hectare: { ratio: 10000 },
    ft2: { ratio: 0.09290304 },
    yd2: { ratio: 0.83612736 },
  },
  volume: {
    liter: { ratio: 1 },
    ml: { ratio: 0.001 },
    m3: { ratio: 1000 },
    gallon_us: { ratio: 3.785411784 },
    gallon_uk: { ratio: 4.54609 },
    cup_us: { ratio: 0.2365882365 },
    floz_us: { ratio: 0.0295735295625 },
    floz_uk: { ratio: 0.0284130625 },
  },
  temperature: {
    celsius: { ratio: 1, offset: 0 },
    fahrenheit: { ratio: 0.5555555555555556, offset: -17.77777777777778 },
    kelvin: { ratio: 1, offset: -273.15 },
  },
  speed: {
    "km/h": { ratio: 1 },
    "m/s": { ratio: 3.6 },
    mph: { ratio: 1.609344 },
    knot: { ratio: 1.852 },
  },
  digital: {
    B: { ratio: 1 },
    KB: { ratio: 1024 },
    MB: { ratio: 1024 * 1024 },
    GB: { ratio: 1024 * 1024 * 1024 },
    TB: { ratio: 1024 * 1024 * 1024 * 1024 },
  },
};

export function UnitConverterTool({ tool }: ToolRendererProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "en";
  const common = getCommonText(locale);

  const [category, setCategory] = useState<UnitCategory>("length");
  const [fromUnit, setFromUnit] = useState<string>("m");
  const [toUnit, setToUnit] = useState<string>("km");
  const [inputValue, setInputValue] = useState<string>("1");

  const units = useMemo(() => Object.keys(CONVERSION_MAP[category]), [category]);

  const handleCategoryChange = (newCat: UnitCategory) => {
    setCategory(newCat);
    const newUnits = Object.keys(CONVERSION_MAP[newCat]);
    setFromUnit(newUnits[0]);
    setToUnit(newUnits[1] || newUnits[0]);
  };

  const convertValue = useCallback((val: string, from: string, to: string, cat: UnitCategory): string => {
    const num = parseFloat(val);
    if (isNaN(num)) return "";

    if (cat === "temperature") {
      // Temperature special handling
      let celsius = 0;
      if (from === "celsius") celsius = num;
      else if (from === "fahrenheit") celsius = (num - 32) * 5 / 9;
      else if (from === "kelvin") celsius = num - 273.15;

      let result = 0;
      if (to === "celsius") result = celsius;
      else if (to === "fahrenheit") result = (celsius * 9 / 5) + 32;
      else if (to === "kelvin") result = celsius + 273.15;
      
      return Number(result.toFixed(4)).toString();
    }

    const fromData = CONVERSION_MAP[cat][from];
    const toData = CONVERSION_MAP[cat][to];
    
    // Base unit value calculation
    const baseValue = num * fromData.ratio;
    // Target unit value calculation
    const result = baseValue / toData.ratio;
    
    // Formatting: 10 digits total precision to avoid long floating strings
    return Number(result.toPrecision(10)).toString();
  }, []);

  const unitLabels: Record<string, string> = useMemo(() => ({
    // Length
    nmi: locale === "ko" ? "해리 (nmi)" : "Nautical Mile (nmi)",
    // Weight
    st: locale === "ko" ? "스톤 (st)" : "Stone (st)",
    ton: locale === "ko" ? "톤 (t)" : "Metric Ton (t)",
    // Area
    pyung: locale === "ko" ? "평 (坪)" : "Pyung",
    m2: locale === "ko" ? "제곱미터 (m²)" : "sq meters (m²)",
    km2: locale === "ko" ? "제곱킬로미터 (km²)" : "sq kilometers (km²)",
    ft2: locale === "ko" ? "제곱피트 (ft²)" : "sq feet (ft²)",
    yd2: locale === "ko" ? "제곱야드 (yd²)" : "sq yards (yd²)",
    // Volume
    gallon_us: locale === "ko" ? "갤런 (미국)" : "Gallon (US)",
    gallon_uk: locale === "ko" ? "갤런 (영국)" : "Gallon (UK)",
    cup_us: locale === "ko" ? "컵 (미국)" : "Cup (US)",
    floz_us: locale === "ko" ? "액량 온스 (미국)" : "Fluid Ounce (US)",
    floz_uk: locale === "ko" ? "액량 온스 (영국)" : "Fluid Ounce (UK)",
    liter: locale === "ko" ? "리터 (L)" : "Liter (L)",
  }), [locale]);

  const getUnitLabel = (u: string) => unitLabels[u] || u;

  const resultValue = convertValue(inputValue, fromUnit, toUnit, category);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const categories: { key: UnitCategory; label: string }[] = useMemo(() => [
    { key: "length", label: common.unitLength || "Length" },
    { key: "weight", label: common.unitWeight || "Weight" },
    { key: "area", label: common.unitArea || "Area" },
    { key: "volume", label: common.unitVolume || "Volume" },
    { key: "temperature", label: common.unitTemperature || "Temperature" },
    { key: "speed", label: common.unitSpeed || "Speed" },
    { key: "digital", label: common.unitDigital || "Digital" },
  ], [common]);

  return (
    <div className="tool-stack">
      {/* Category Tabs */}
      <div 
        style={{ 
          display: "flex", 
          gap: "0.5rem", 
          overflowX: "auto", 
          paddingBottom: "1rem",
          scrollbarWidth: "none"
        }}
        className="no-scrollbar"
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`tool-button ${category === cat.key ? "primary" : "secondary"}`}
            style={{ 
              whiteSpace: "nowrap", 
              padding: "0.6rem 1.2rem",
              fontSize: "0.9rem",
              borderRadius: "12px"
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Converter UI */}
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr auto 1fr", 
          gap: "1.5rem", 
          alignItems: "center",
          marginTop: "1.5rem",
          padding: "2rem",
          background: "var(--panel-glass)",
          borderRadius: "24px",
          border: "1px solid var(--panel-border)"
        }}
      >
        {/* From Side */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label className="tool-muted" style={{ fontSize: "0.9rem" }}>{common.from || "From"}</label>
          <input
            type="number"
            className="tool-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ fontSize: "1.5rem", padding: "1rem" }}
          />
          <select 
            className="tool-input" 
            value={fromUnit} 
            onChange={(e) => setFromUnit(e.target.value)}
            style={{ padding: "0.75rem" }}
          >
            {units.map(u => <option key={u} value={u}>{getUnitLabel(u)}</option>)}
          </select>
        </div>

        {/* Swap Button */}
        <button 
          onClick={handleSwap}
          className="tool-button secondary"
          style={{ width: "48px", height: "48px", borderRadius: "50%", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          ⇄
        </button>

        {/* To Side */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label className="tool-muted" style={{ fontSize: "0.9rem" }}>{common.to || "To"}</label>
          <div 
            className="tool-input" 
            style={{ 
              fontSize: "1.5rem", 
              padding: "1rem", 
              minHeight: "4rem", 
              display: "flex", 
              alignItems: "center",
              background: "var(--surface-soft)",
              color: "var(--accent)",
              fontWeight: 700
            }}
          >
            {resultValue || "0"}
          </div>
          <select 
            className="tool-input" 
            value={toUnit} 
            onChange={(e) => setToUnit(e.target.value)}
            style={{ padding: "0.75rem" }}
          >
            {units.map(u => <option key={u} value={u}>{getUnitLabel(u)}</option>)}
          </select>
        </div>
      </div>

      {/* Accuracy Note */}
      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic" }}>
        {common.unitAccuracyNote || "* High precision conversion using standard scientific constants. Result limited to 10 decimal points for readability."}
      </p>
    </div>
  );
}
