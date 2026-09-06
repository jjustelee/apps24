"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import type { ToolRendererProps } from "./index";
import { Copy, Trash2, AlertTriangle, ClipboardCheck, Braces, Code } from "lucide-react";
import { getJsonFormatterLongtailPreset, isJsonFormatterLongtailSlug } from "@/features/tools/json-formatter-longtails";
import { REVIEW_UI } from "@/features/tools/review-ui";
import { formatJsonText } from "@/lib/json-format";

function formatJsonValue(value: string) {
  return formatJsonText(value);
}

function validateJsonValue(value: string) {
  JSON.parse(value);
}

export function JsonFormatterTool({ locale, commonText: common, searchParams }: ToolRendererProps) {
  const copy = REVIEW_UI[locale];
  const params = useParams();
  const modeSlug = typeof searchParams?.preset === "string" ? searchParams.preset : typeof params.mode === "string" ? params.mode : undefined;
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
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (copiedTimer.current) clearTimeout(copiedTimer.current);
  }, []);
  const [valid, setValid] = useState(false);
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
      setValid(true);
    } catch (error: unknown) {
      setValid(false);
      setError(error instanceof Error ? error.message : "Invalid JSON");
    }
  };

  const handleValidate = () => {
    if (!input.trim()) {
      setError(null);
      setValid(false);
      return;
    }
    try {
      validateJsonValue(input);
      setError(null);
      setValid(true);
    } catch (error: unknown) {
      setValid(false);
      setError(error instanceof Error ? error.message : "Invalid JSON");
    }
  };

  const handleCopy = async () => {
    if (!input) return;
    try {
      await navigator.clipboard.writeText(input);
      setCopied(true);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  };

  const handleClear = () => {
    setInput("");
    setError(null);
    setCopied(false);
    setValid(false);
  };

  return (
    <div className="tool-container card-glass">
      <div className="input-section">
        <textarea
          dir="ltr"
          aria-label={common.placeholder}
          className="textarea-glass"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setValid(false);
            setCopied(false);
            if (error) setError(null);
          }}
          placeholder={common.placeholder}
          rows={15}
          spellCheck={false}
        />
        {error && (
          <div className="error-message" role="alert">
            <AlertTriangle size={16} />
            <span>{copy.jsonInvalid}: {error}</span>
          </div>
        )}
        {valid && <p role="status" className="tool-note">{copy.jsonValid}</p>}
      </div>

      <p className="tool-note">{copy.jsonHint}</p>

      <div className="controls-section">
        <div className="button-group">
          <button onClick={handleFormat} disabled={!input.trim()} className="button-glass">
            <Braces size={18} />
            {common.format}
          </button>
          <button onClick={handleValidate} disabled={!input.trim()} className="button-glass">
            <Code size={18} />
            {common.validate}
          </button>
          <button className="button-glass" onClick={() => {
            setInput('{"name":"Apps24","id":9007199254740993}');
            setError(null);
            setValid(false);
            setCopied(false);
          }}>{common.sample}</button>
        </div>

        <div className="action-group">
          <button onClick={handleCopy} disabled={!input} className="button-primary">
            {copied ? <ClipboardCheck size={18} /> : <Copy size={18} />}
            {copied ? common.copied : common.copyAll}
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
