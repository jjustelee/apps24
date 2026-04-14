"use client";

import { useState } from "react";
import { getCommonText } from "@/features/tools/copy";
import type { ToolRendererProps } from "./index";
import { Copy, Trash2, Type, ArrowDown, ClipboardCheck } from "lucide-react";

export function CaseConverterTool({ locale }: ToolRendererProps) {
  const common = getCommonText(locale as any);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCaseChange = (type: 'upper' | 'lower' | 'title') => {
    let result = input;
    if (type === 'upper') {
      result = input.toUpperCase();
    } else if (type === 'lower') {
      result = input.toLowerCase();
    } else if (type === 'title') {
      result = input.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
    setInput(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="tool-container card-glass">
      <div className="input-section">
        <textarea
          className="textarea-glass"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={common.placeholder}
          rows={10}
        />
      </div>

      <div className="controls-section">
        <div className="button-group">
          <button onClick={() => handleCaseChange('upper')} className="button-glass">
            <Type size={18} />
            UPPERCASE
          </button>
          <button onClick={() => handleCaseChange('lower')} className="button-glass">
            <Type size={18} />
            lowercase
          </button>
          <button onClick={() => handleCaseChange('title')} className="button-glass">
            <Type size={18} />
            Title Case
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
        .textarea-glass {
          width: 100%;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          color: var(--text);
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.6;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s;
        }
        .textarea-glass:focus {
          border-color: var(--accent);
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
