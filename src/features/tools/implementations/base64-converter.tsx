"use client";

import { useState } from "react";
import { getCommonText } from "@/features/tools/copy";
import type { ToolRendererProps } from "./index";
import { Copy, Trash2, ShieldAlert } from "lucide-react";

export function Base64ConverterTool({ locale }: ToolRendererProps) {
  const common = getCommonText(locale as any);
  
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleEncode = () => {
    try {
      setError("");
      // utf-8 encode
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (e) {
      setError("Invalid format for encoding.");
    }
  };

  const handleDecode = () => {
    try {
      setError("");
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
    } catch (e) {
      setError("Invalid Base64 string. Cannot decode.");
      setOutput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="tool-container card-glass">
      {/* 
        [백엔드 프론트엔드 연동 고려사항]
        현재 Base64 인코딩/디코딩은 브라우저 내장 함수(btoa, atob)를 통해 클라이언트 측 메모리 상에서 처리됩니다.
        만약 처리해야 할 데이터가 기가바이트(GB) 단위의 파일이거나 문자열일 경우, 클라이언트의 메모리 초과로 브라우저 탭이 멈출 수 있습니다.
        이런 상황이 예상된다면 프론트엔드에서는 스트림 형태로 청크(Chunk)를 쪼개어 Next.js API (또는 Go/Node.js 백엔드)로 전송하고,
        백엔드에서 파이핑(Piping) 스트림으로 Base64 변환 후 결과를 반환하도록 아키텍처를 고도화해야 합니다.
      */}
      <div className="input-section">
        <label className="section-label">Input</label>
        <textarea
          className="textarea-glass"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          placeholder="Paste or type text here..."
        />
        {error && <div className="error-msg"><ShieldAlert size={14} /> {error}</div>}
      </div>

      <div className="controls-row">
        <button onClick={handleEncode} className="button-primary">
          Encode
        </button>
        <button onClick={handleDecode} className="button-primary">
          Decode
        </button>
        <button onClick={handleCopy} className="button-glass">
          <Copy size={16} />
          {copied ? "Copied!" : "Copy"}
        </button>
        <button onClick={handleClear} className="button-ghost">
          <Trash2 size={16} />
          Clear
        </button>
      </div>

      <div className="output-section">
        <label className="section-label">Result</label>
        <textarea
          className="textarea-glass readonly"
          value={output}
          readOnly
          placeholder="Result will appear here..."
        />
      </div>

      <style jsx>{`
        .tool-container {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-section, .output-section {
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
        .textarea-glass {
          width: 100%;
          min-height: 200px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          color: var(--text);
          font-family: monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s;
        }
        .textarea-glass:focus {
          border-color: var(--accent);
        }
        .textarea-glass.readonly {
          background: rgba(0, 0, 0, 0.05);
          cursor: text;
        }
        .error-msg {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          padding-left: 0.25rem;
        }
        .controls-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .button-primary, .button-glass, .button-ghost {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          flex: 1;
          min-width: 120px;
        }
        .button-primary {
          background: var(--accent);
          color: white;
          border: none;
        }
        .button-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .button-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--line);
          color: var(--text);
        }
        .button-glass:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .button-ghost {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--text-muted);
        }
        .button-ghost:hover {
          border-color: #ef4444;
          color: #ef4444;
        }
        @media (max-width: 640px) {
          .controls-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
