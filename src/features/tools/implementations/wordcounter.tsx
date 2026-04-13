"use client";

import { useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const SAMPLE_TEXT =
  "Apps24 helps you work faster with small browser tools. Paste your text here to count characters, words, and lines instantly.";

function countWords(text: string) {
  const words = text.trim().match(/\S+/g);
  return words ? words.length : 0;
}

function getLineCount(text: string) {
  if (!text) {
    return 0;
  }

  return text.split(/\r\n|\r|\n/).length;
}

function getHighlightedPreview(text: string, position: number) {
  if (!text || position < 1 || position > text.length) {
    return {
      before: text.slice(0, 80),
      target: "",
      after: text.length > 80 ? text.slice(80, 160) : "",
    };
  }

  const index = position - 1;
  const start = Math.max(0, index - 42);
  const end = Math.min(text.length, index + 43);

  return {
    before: text.slice(start, index),
    target: text.charAt(index),
    after: text.slice(index + 1, end),
  };
}

export function WordCounterTool({ tool }: ToolRendererProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("");
  const [position, setPosition] = useState("1");

  const characterCount = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;
  const wordCount = countWords(text);
  const lineCount = getLineCount(text);
  const numericPosition = Number.parseInt(position, 10);
  const validPosition =
    Number.isFinite(numericPosition) && numericPosition >= 1 && numericPosition <= characterCount;
  const preview = getHighlightedPreview(text, numericPosition);

  const syncText = () => {
    setText(editorRef.current?.innerText ?? "");
  };

  const setEditorText = (nextText: string) => {
    if (editorRef.current) {
      editorRef.current.innerText = nextText;
    }
    setText(nextText);
    setPosition(nextText ? "1" : "");
  };

  return (
    <div className="tool-stack">
      <div
        ref={editorRef}
        className="tool-editor"
        contentEditable
        role="textbox"
        aria-label={`${tool.slug} text input`}
        aria-multiline="true"
        suppressContentEditableWarning
        onInput={syncText}
        data-placeholder="Paste or type text here"
      />

      <div className="tool-actions">
        <button className="tool-button secondary" type="button" onClick={() => setEditorText(SAMPLE_TEXT)}>
          Sample text
        </button>
        <button className="tool-button secondary" type="button" onClick={() => setEditorText("")}>
          Clear
        </button>
      </div>

      <div className="tool-stat-grid" aria-live="polite">
        <div className="tool-stat">
          <strong>{characterCount}</strong>
          <span>Characters</span>
        </div>
        <div className="tool-stat">
          <strong>{charactersWithoutSpaces}</strong>
          <span>Characters without spaces</span>
        </div>
        <div className="tool-stat">
          <strong>{wordCount}</strong>
          <span>Words</span>
        </div>
        <div className="tool-stat">
          <strong>{lineCount}</strong>
          <span>Lines</span>
        </div>
      </div>

      <div className="tool-output">
        <div className="tool-field">
          <label className="tool-label" htmlFor="character-position">
            Highlight character position
          </label>
          <input
            id="character-position"
            className="tool-input"
            inputMode="numeric"
            min={1}
            max={Math.max(1, characterCount)}
            type="number"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            placeholder="1"
          />
        </div>

        <div className="tool-output-card" aria-live="polite">
          {text ? (
            <p style={{ margin: 0, lineHeight: 1.8, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
              {preview.before}
              {preview.target ? (
                <mark
                  style={{
                    borderRadius: 6,
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    fontWeight: 800,
                    padding: "0.1rem 0.25rem",
                  }}
                >
                  {preview.target === "\n" ? "\\n" : preview.target}
                </mark>
              ) : null}
              {preview.after}
            </p>
          ) : (
            <p className="tool-muted">Enter text to preview a highlighted character position.</p>
          )}
        </div>

        <p className="tool-note">
          {validPosition
            ? `Position ${numericPosition} is highlighted in the preview.`
            : characterCount
              ? `Enter a number from 1 to ${characterCount}.`
              : "Counts update live as you type."}
        </p>
      </div>
    </div>
  );
}
