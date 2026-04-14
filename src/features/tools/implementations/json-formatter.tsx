"use client";

import { useState } from "react";
import { getCommonText } from "@/features/tools/copy";
import type { ToolRendererProps } from "./index";
import { Copy, Trash2, CheckCircle, AlertTriangle, ClipboardCheck, Braces, Code } from "lucide-react";

export function JsonFormatterTool({ locale }: ToolRendererProps) {
  const common = getCommonText(locale as any);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  };

  const handleValidate = () => {
    if (!input.trim()) {
      setError(null);
      return;
    }
    try {
      JSON.parse(input);
      setError(null);
      // Optional: show a small success indication
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  };

  const handleCopy = () => {
    if (!input) return;
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setError(null);
  };

  return (
    <div className="tool-container card-glass">
      <div className="input-section">
        <textarea
          className="textarea-glass"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError(null);
          }}
          placeholder={common.placeholder}
          rows={15}
          spellCheck={false}
        />
        {error && (
          <div className="error-message">
            <AlertTriangle size={16} />
            {error}
          </div>
        )}
      </div>

      <div className="controls-section">
        <div className="button-group">
          <button onClick={handleFormat} className="button-glass">
            <Braces size={18} />
            {common.format}
          </button>
          <button onClick={handleValidate} className="button-glass">
            <Code size={18} />
            {common.validate}
          </button>
        </div>

        <div className="action-group">
          <button onClick={handleCopy} className="button-primary">
            {copied ? <ClipboardCheck size={18} /> : <Copy size={18} />}
            {common.copyAll}
          </button>
          <button onClick={handleClear} className="button-ghost">
            <Trash2 size={18} />
            {common.clear}
          </button>
        </div>
      </div>

      <style jsx>{`
        .tool-container {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-section {
          position: relative;
        }
        .textarea-glass {
          width: 100%;
          padding: 1.25rem;
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
        .error-message {
          margin-top: 0.75rem;
          padding: 0.75rem 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 0.5rem;
          color: #ef4444;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .controls-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .button-group, .action-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .button-glass, .button-primary, .button-ghost {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .button-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--line);
          color: var(--text);
        }
        .button-glass:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent);
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
        .button-ghost {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--text-muted);
        }
        .button-ghost:hover {
          border-color: #ef4444;
          color: #ef4444;
        }
      `}</style>
    </div>
  );
}
