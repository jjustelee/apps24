"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import type { ToolRendererProps } from "./index";
import { Copy, Trash2, AlertTriangle, ClipboardCheck, Braces, Code } from "lucide-react";
import { getJsonFormatterLongtailPreset, isJsonFormatterLongtailSlug } from "@/features/tools/json-formatter-longtails";

function formatJsonValue(value: string) {
  return JSON.stringify(JSON.parse(value), null, 2);
}

function validateJsonValue(value: string) {
  JSON.parse(value);
}

export function JsonFormatterTool({ commonText: common }: ToolRendererProps) {
  const params = useParams();
  const modeSlug = typeof params.mode === "string" ? params.mode : undefined;
  const preset = modeSlug && isJsonFormatterLongtailSlug(modeSlug) ? getJsonFormatterLongtailPreset(modeSlug) : undefined;
  const [input, setInput] = useState(() => {
    if (!preset) return "";

    try {
      return preset.action === "format" ? formatJsonValue(preset.text) : preset.text;
    } catch {
      return preset.text;
    }
  });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(() => {
    if (!preset) return null;

    try {
      if (preset.action === "format") {
        formatJsonValue(preset.text);
      } else {
        validateJsonValue(preset.text);
      }
      return null;
    } catch (caughtError: unknown) {
      return caughtError instanceof Error ? caughtError.message : "Invalid JSON";
    }
  });

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      setInput(formatJsonValue(input));
      setError(null);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Invalid JSON");
    }
  };

  const handleValidate = () => {
    if (!input.trim()) {
      setError(null);
      return;
    }
    try {
      validateJsonValue(input);
      setError(null);
      // Optional: show a small success indication
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Invalid JSON");
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
    setCopied(false);
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
