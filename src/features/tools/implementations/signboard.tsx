"use client";

import { useEffect, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const STORAGE_KEYS = {
  message: "apps24.signboard.message",
  backgroundColor: "apps24.signboard.backgroundColor",
  textColor: "apps24.signboard.textColor",
  fontSize: "apps24.signboard.fontSize",
} as const;

const DEFAULT_BACKGROUND_COLOR = "#111827";
const DEFAULT_TEXT_COLOR = "#f8fafc";
const DEFAULT_FONT_SIZE = 72;

type SignboardText = {
  messageLabel: string;
  messagePlaceholder: string;
  backgroundColorLabel: string;
  textColorLabel: string;
  fontSizeLabel: string;
  previewLabel: string;
  previewHint: string;
};

function getTextValue(toolText: ToolRendererProps["toolText"], key: keyof SignboardText, fallback: string) {
  const value = toolText?.[key];
  return typeof value === "string" ? value : fallback;
}

export function SignboardTool({ commonText, toolText }: ToolRendererProps) {
  const text = {
    messageLabel: getTextValue(toolText, "messageLabel", "Message"),
    messagePlaceholder: getTextValue(toolText, "messagePlaceholder", "Enter the message you want to display."),
    backgroundColorLabel: getTextValue(toolText, "backgroundColorLabel", "Background color"),
    textColorLabel: getTextValue(toolText, "textColorLabel", "Text color"),
    fontSizeLabel: getTextValue(toolText, "fontSizeLabel", commonText.fontSize),
    previewLabel: getTextValue(toolText, "previewLabel", "Preview"),
    previewHint: getTextValue(toolText, "previewHint", "Your signboard appears here."),
  };

  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedMessage = window.localStorage.getItem(STORAGE_KEYS.message);
      const savedBackgroundColor = window.localStorage.getItem(STORAGE_KEYS.backgroundColor);
      const savedTextColor = window.localStorage.getItem(STORAGE_KEYS.textColor);
      const savedFontSize = window.localStorage.getItem(STORAGE_KEYS.fontSize);

      if (savedMessage !== null) setMessage(savedMessage);
      if (savedBackgroundColor) setBackgroundColor(savedBackgroundColor);
      if (savedTextColor) setTextColor(savedTextColor);
      if (savedFontSize) {
        const parsed = Number.parseInt(savedFontSize, 10);
        if (Number.isFinite(parsed)) setFontSize(parsed);
      }
    } finally {
      setSettingsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!settingsLoaded) return;

    window.localStorage.setItem(STORAGE_KEYS.message, message);
    window.localStorage.setItem(STORAGE_KEYS.backgroundColor, backgroundColor);
    window.localStorage.setItem(STORAGE_KEYS.textColor, textColor);
    window.localStorage.setItem(STORAGE_KEYS.fontSize, String(fontSize));
  }, [backgroundColor, fontSize, message, settingsLoaded, textColor]);

  const previewMessage = message.trim();

  const resetAll = () => {
    setMessage("");
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR);
    setTextColor(DEFAULT_TEXT_COLOR);
    setFontSize(DEFAULT_FONT_SIZE);
  };

  return (
    <div className="tool-stack">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.85fr)] gap-6">
        <section className="rounded-[36px] border border-[var(--panel-border)] bg-[var(--panel-glass)] p-6 lg:p-8 shadow-2xl">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="tool-badge">{text.previewLabel}</div>
            <p className="tool-note !mb-0">{text.previewHint}</p>
          </div>

          <div
            className="mt-6 flex min-h-[360px] items-center justify-center overflow-hidden rounded-[32px] border border-black/5 p-8 shadow-inner"
            style={{
              backgroundColor,
              color: textColor,
            }}
          >
            {previewMessage ? (
              <div
                className="w-full max-w-5xl text-center font-black leading-[1.1] break-words whitespace-pre-wrap"
                style={{ fontSize: `${fontSize}px` }}
              >
                {previewMessage}
              </div>
            ) : (
              <div
                className="max-w-[26rem] text-center text-lg font-semibold"
                style={{ color: textColor, opacity: 0.68 }}
              >
                {text.previewHint}
              </div>
            )}
          </div>
        </section>

        <section className="rounded-[36px] border border-[var(--panel-border)] bg-[var(--panel-glass)] p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                {text.messageLabel}
              </label>
              <textarea
                className="tool-input min-h-[170px] w-full resize-y rounded-[24px] border border-[var(--panel-border)] bg-white/70 dark:bg-black/20 p-4 text-[1rem] leading-7 shadow-inner"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={text.messagePlaceholder}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 dark:bg-black/15 p-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                  {text.backgroundColorLabel}
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="h-12 w-12 cursor-pointer rounded-[14px] border border-[var(--panel-border)] bg-transparent p-1"
                    aria-label={text.backgroundColorLabel}
                  />
                  <span className="font-semibold text-[var(--text)]">{backgroundColor}</span>
                </div>
              </label>

              <label className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 dark:bg-black/15 p-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                  {text.textColorLabel}
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="h-12 w-12 cursor-pointer rounded-[14px] border border-[var(--panel-border)] bg-transparent p-1"
                    aria-label={text.textColorLabel}
                  />
                  <span className="font-semibold text-[var(--text)]">{textColor}</span>
                </div>
              </label>
            </div>

            <div className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 dark:bg-black/15 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                  {text.fontSizeLabel}
                </span>
                <span className="text-sm font-bold text-[var(--text)]">{fontSize}px</span>
              </div>
              <input
                type="range"
                min={24}
                max={180}
                step={1}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="mt-4 w-full accent-[var(--accent)]"
                aria-label={text.fontSizeLabel}
              />
            </div>

            <button type="button" className="tool-button secondary w-full" onClick={resetAll}>
              {commonText.reset}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
