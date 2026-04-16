"use client";

import { useEffect, useState } from "react";
import type { ToolRendererProps } from "./index";
import { Copy, RefreshCw, ClipboardCheck, Key } from "lucide-react";
import type { Locale } from "@/lib/site";

function createPassword(
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
) {
  const chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };

  let allowed = "";
  if (includeUppercase) allowed += chars.uppercase;
  if (includeLowercase) allowed += chars.lowercase;
  if (includeNumbers) allowed += chars.numbers;
  if (includeSymbols) allowed += chars.symbols;

  if (!allowed) {
    allowed = chars.lowercase;
  }

  let result = "";
  const randomArray = new Uint32Array(length);
  window.crypto.getRandomValues(randomArray);

  for (let i = 0; i < length; i++) {
    result += allowed[randomArray[i] % allowed.length];
  }

  return result;
}

export function PasswordGeneratorTool({ locale, commonText: common }: ToolRendererProps) {
  
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [generationTick, setGenerationTick] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPassword(
        createPassword(
          length,
          includeUppercase,
          includeLowercase,
          includeNumbers,
          includeSymbols,
        ),
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, [generationTick, length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleGenerate = () => {
    setGenerationTick((current) => current + 1);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-container card-glass">
      <div className="password-display">
        <div className="password-text">{password}</div>
        <button onClick={handleCopy} className="icon-button" title={common.copyAll}>
          {copied ? <ClipboardCheck size={24} color="#10b981" /> : <Copy size={24} />}
        </button>
      </div>

      <div className="controls-grid">
        <div className="control-group slider-group">
          <label>
            {common.length}: <span className="length-value">{length}</span>
          </label>
          <input 
            type="range" 
            className="slider"
            min="8" 
            max="64" 
            value={length} 
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>

        <div className="checkbox-grid">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={includeUppercase} 
              onChange={(e) => setIncludeUppercase(e.target.checked)} 
            />
            <span className="checkmark"></span>
            {common.includeUppercase} (A-Z)
          </label>
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={includeLowercase} 
              onChange={(e) => setIncludeLowercase(e.target.checked)} 
            />
            <span className="checkmark"></span>
            {common.includeLowercase} (a-z)
          </label>
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={includeNumbers} 
              onChange={(e) => setIncludeNumbers(e.target.checked)} 
            />
            <span className="checkmark"></span>
            {common.includeNumbers} (0-9)
          </label>
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={includeSymbols} 
              onChange={(e) => setIncludeSymbols(e.target.checked)} 
            />
            <span className="checkmark"></span>
            {common.includeSymbols} (!@#$)
          </label>
        </div>
      </div>

      <div className="action-row">
        <button onClick={handleGenerate} className="button-primary generate-btn">
          <RefreshCw size={18} />
          {common.generatePassword}
        </button>
      </div>

      <style jsx>{`
        .tool-container {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .password-display {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--line);
          border-radius: 1rem;
          padding: 1.5rem;
          gap: 1rem;
          word-break: break-all;
        }
        .password-text {
          font-family: monospace;
          font-size: 1.5rem;
          color: var(--accent);
          letter-spacing: 2px;
          flex-grow: 1;
        }
        .icon-button {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text);
        }
        .controls-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .slider-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .slider-group label {
          font-weight: 600;
          color: var(--text);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .length-value {
          color: var(--accent);
          font-size: 1.1rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
        }
        .slider {
          width: 100%;
          accent-color: var(--accent);
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
          -webkit-appearance: none;
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent);
          cursor: pointer;
        }
        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid var(--line);
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          color: var(--text);
          font-size: 0.95rem;
          user-select: none;
        }
        .checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--accent);
          cursor: pointer;
        }
        .action-row {
          display: flex;
          justify-content: center;
        }
        .generate-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        .generate-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
