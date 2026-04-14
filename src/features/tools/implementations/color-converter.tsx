"use client";

import { useState } from "react";
import { getCommonText } from "@/features/tools/copy";
import type { ToolRendererProps } from "./index";
import { Copy, RefreshCw, AlertCircle } from "lucide-react";

// Helper functions
function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result && hex.length === 4) {
    result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
    if (result) {
      result = [result[0], result[1]+result[1], result[2]+result[2], result[3]+result[3]];
    }
  }
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function ColorConverterTool({ locale }: ToolRendererProps) {
  const common = getCommonText(locale as any);
  
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState("rgb(59, 130, 246)");
  const [hsl, setHsl] = useState("hsl(217, 90%, 60%)");
  const [error, setError] = useState("");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const updateColors = (newHex: string) => {
    let cleanHex = newHex.trim();
    if (!cleanHex.startsWith("#")) cleanHex = "#" + cleanHex;
    
    setHex(newHex);
    setError("");

    const rgbVal = hexToRgb(cleanHex);
    if (rgbVal) {
      setRgb(`rgb(${rgbVal.r}, ${rgbVal.g}, ${rgbVal.b})`);
      const hslVal = rgbToHsl(rgbVal.r, rgbVal.g, rgbVal.b);
      setHsl(`hsl(${hslVal.h}, ${hslVal.s}%, ${hslVal.l}%)`);
    } else {
      if (newHex.length > 3) {
        setError("Invalid HEX code");
      }
      setRgb("Invalid");
      setHsl("Invalid");
    }
  };

  const handleColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateColors(e.target.value);
  };

  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateColors(e.target.value);
  };

  const handleCopy = async (text: string, type: string) => {
    if (text === "Invalid") return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="tool-container card-glass">
      {/* 
        [백엔드 프론트엔드 연동 고려사항]
        색상 변환 로직(HEX <-> RGB <-> HSL)은 순수 수학적 비트 연산이므로 프론트엔드 자체 리소스로도 1ms 이내로 처리가 완료됩니다.
        따라서 변환 자체를 백엔드로 보낼 필요는 없습니다.
        단, MVP 이후 "유저별 최근 검색 색상 클라우드 동기화", "컬러 팔레트 커뮤니티 전송" 등의 기능을 구축할 경우에는,
        변환된 color string을 DB에 저장하기 위한 API(Postgres/Redis) 전송 레이어를 이 컴포넌트에 연결하여 사용합니다.
      */}
      <div 
        className="color-preview" 
        style={{ backgroundColor: !error && rgb !== "Invalid" ? hex : "var(--surface)" }}
      ></div>

      <div className="input-group">
        <label className="section-label">Select Color or Type HEX</label>
        <div className="hex-input-wrapper">
          <input 
            type="color" 
            className="color-picker" 
            value={!error && hex.startsWith('#') && (hex.length === 7 || hex.length === 4) ? hex : "#000000"} 
            onChange={handleColorPick} 
          />
          <input 
            type="text" 
            className="input-glass hex-code-input" 
            value={hex} 
            onChange={handleHexInput} 
            placeholder="#3b82f6" 
            maxLength={7}
          />
        </div>
        {error && <div className="error-msg"><AlertCircle size={14} /> {error}</div>}
      </div>

      <div className="results-group">
        
        <div className="result-row">
          <div className="result-label">HEX</div>
          <div className="result-value">{hex}</div>
          <button onClick={() => handleCopy(hex, "hex")} className="button-copy">
            <Copy size={14} />
            {copiedType === "hex" ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="result-row">
          <div className="result-label">RGB</div>
          <div className="result-value">{rgb}</div>
          <button onClick={() => handleCopy(rgb, "rgb")} className="button-copy">
            <Copy size={14} />
            {copiedType === "rgb" ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="result-row">
          <div className="result-label">HSL</div>
          <div className="result-value">{hsl}</div>
          <button onClick={() => handleCopy(hsl, "hsl")} className="button-copy">
            <Copy size={14} />
            {copiedType === "hsl" ? "Copied" : "Copy"}
          </button>
        </div>
        
      </div>
      
      <div style={{ marginTop: "0.5rem" }}>
         <button onClick={() => updateColors("#3b82f6")} className="button-ghost w-full">
            <RefreshCw size={16} />
            Reset
          </button>
      </div>

      <style jsx>{`
        .tool-container {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .color-preview {
          width: 100%;
          height: 120px;
          border-radius: 0.75rem;
          border: 1px solid var(--line);
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
          transition: background-color 0.2s ease;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .section-label {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.95rem;
          padding-left: 0.25rem;
        }
        .hex-input-wrapper {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .color-picker {
          width: 50px;
          height: 50px;
          padding: 0;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          background: transparent;
          flex-shrink: 0;
        }
        .color-picker::-webkit-color-swatch-wrapper {
          padding: 0;
        }
        .color-picker::-webkit-color-swatch {
          border: 1px solid var(--line);
          border-radius: 0.5rem;
        }
        .input-glass {
          flex: 1;
          height: 50px;
          padding: 0 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--line);
          border-radius: 0.5rem;
          color: var(--text);
          font-family: monospace;
          font-size: 1.1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-glass:focus {
          border-color: var(--accent);
        }
        .error-msg {
          color: #ef4444;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding-left: 0.25rem;
        }
        .results-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          padding: 1rem;
        }
        .result-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(128,128,128,0.1);
        }
        .result-row:last-child {
          border-bottom: none;
        }
        .result-label {
          width: 50px;
          font-weight: 700;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        .result-value {
          flex: 1;
          font-family: monospace;
          color: var(--text);
          font-size: 1.05rem;
        }
        .button-copy {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.8rem;
          border-radius: 0.4rem;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.05);
          color: var(--text);
          font-size: 0.85rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .button-copy:hover {
          background: rgba(255,255,255,0.1);
        }
        .button-ghost {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 0.5rem;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--text-muted);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .button-ghost.w-full {
          width: 100%;
        }
        .button-ghost:hover {
          border-color: var(--text-muted);
          color: var(--text);
        }
        @media (max-width: 640px) {
          .result-row {
            flex-wrap: wrap;
          }
          .button-copy {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
