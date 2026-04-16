"use client";

import { useEffect, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { useParams } from "next/navigation";
import type { Locale } from "@/lib/site";

const SAMPLE_TEXT =
  "Apps24 helps you work faster with small browser tools. Paste your text here to count characters, words, and lines instantly.";
const STORAGE_KEY_POSITION = "apps24.wordcounter.position";

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

export function WordCounterTool({ tool, commonText: common }: ToolRendererProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "en";

  const [text, setText] = useState("");
  const [position, setPosition] = useState("0");
  const [isFocused, setIsFocused] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedPos = localStorage.getItem(STORAGE_KEY_POSITION);
      if (savedPos !== null) setPosition(savedPos);
      setSettingsLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (settingsLoaded) {
      localStorage.setItem(STORAGE_KEY_POSITION, position);
    }
  }, [position, settingsLoaded]);

  const characterCount = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;
  const numericPosition = Number.parseInt(position, 10);
  
  // Highlighting logic inside the mirror layer
  const renderHighlightedText = () => {
    if (!text) return <span className="tool-muted">{common.placeholder}</span>;
    
    if (isNaN(numericPosition) || numericPosition < 1 || numericPosition > characterCount) {
      return text;
    }

    const index = numericPosition - 1;
    const before = text.slice(0, index);
    const target = text.charAt(index);
    const after = text.slice(index + 1);

    return (
      <>
        {before}
        <mark
          style={{
            background: "#fef08a", // Soft Yellow (Highlighter)
            color: "inherit",
            borderRadius: "2px",
            padding: "0.1rem 0",
            boxShadow: "none",
          }}
        >
          {target === "\n" ? " " : target}
        </mark>
        {after}
      </>
    );
  };

  const setEditorText = (nextText: string) => {
    setText(nextText);
    setPosition(nextText ? "1" : "");
  };

  return (
    <div className="tool-stack">
      {/* 1. Improved Input Area with Mirroring */}
      <div 
        className="tool-editor-container" 
        style={{ 
          position: "relative", 
          minHeight: "280px", 
          marginBottom: "1.5rem",
          background: "var(--surface)",
          border: `2px solid ${isFocused ? "var(--accent)" : "var(--line)"}`,
          borderRadius: "16px",
          transition: "all 0.2s ease",
          boxShadow: isFocused ? "var(--shadow-lg)" : "var(--shadow-sm)",
          overflow: "hidden"
        }}
      >
        {/* Mirror Layer (Displays the highlight) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            padding: "1.5rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontFamily: "inherit",
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "transparent", // Hide the text, keep the marks visible
            pointerEvents: "none",
            zIndex: 1,
            overflow: "auto"
          }}
        >
          {renderHighlightedText()}
        </div>

        {/* Real Input Layer */}
        <textarea
          className="tool-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={common.placeholder}
          style={{
            position: "relative",
            width: "100%",
            minHeight: "280px",
            padding: "1.5rem",
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--text)",
            fontFamily: "inherit",
            fontSize: "1rem",
            lineHeight: "1.6",
            resize: "vertical",
            zIndex: 2,
          }}
        />
      </div>

      <div className="tool-actions" style={{ marginBottom: "2.5rem" }}>
        <button className="tool-button secondary" type="button" onClick={() => setEditorText("")}>
          {common.clear}
        </button>
      </div>

      {/* 2. Organized Stats List */}
      <div className="tool-stat-list" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div className="stat-item" style={{ fontSize: "1.05rem", borderBottom: "1px solid var(--line)", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>1. {common.charCountWithSpaces}:</span>
          <strong className="accent-text" style={{ fontSize: "1.25rem" }}>{characterCount}</strong>
        </div>
        
        <div className="stat-item" style={{ fontSize: "1.05rem", borderBottom: "1px solid var(--line)", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>2. {common.charCountWithoutSpaces}:</span>
          <strong className="accent-text" style={{ fontSize: "1.25rem" }}>{charactersWithoutSpaces}</strong>
        </div>

        <div className="stat-item" style={{ fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span>3. {common.whichPosition}</span>
          <input
            id="character-position"
            className="tool-input"
            inputMode="numeric"
            min={1}
            max={Math.max(1, characterCount)}
            type="number"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            placeholder={common.positionPlaceholder}
            style={{ width: "200px", marginTop: "0.25rem" }}
          />
        </div>
      </div>

      {/* 4. Footer Help */}
      <p className="tool-note" style={{ marginTop: "2rem", fontSize: "0.95rem", opacity: 0.8 }}>
        {common.highlightHelp}
      </p>
    </div>
  );
}
