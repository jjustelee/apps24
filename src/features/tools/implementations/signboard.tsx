"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, WandSparkles } from "lucide-react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const STORAGE_KEYS = {
  message: "apps24.signboard.message",
  backgroundColor: "apps24.signboard.backgroundColor",
  textColor: "apps24.signboard.textColor",
  fontSize: "apps24.signboard.fontSize",
  effect: "apps24.signboard.effect",
} as const;

const DEFAULT_BACKGROUND_COLOR = "#111827";
const DEFAULT_TEXT_COLOR = "#f8fafc";
const DEFAULT_FONT_SIZE = 72;
const DEFAULT_EFFECT = "static" as const;

type SignboardEffect = "static" | "scroll" | "blink" | "glow";

type SignboardText = {
  messageLabel: string;
  messagePlaceholder: string;
  backgroundColorLabel: string;
  textColorLabel: string;
  fontSizeLabel: string;
  effectLabel: string;
  staticEffect: string;
  scrollEffect: string;
  blinkEffect: string;
  glowEffect: string;
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
    effectLabel: getTextValue(toolText, "effectLabel", "Text effect"),
    staticEffect: getTextValue(toolText, "staticEffect", "Static"),
    scrollEffect: getTextValue(toolText, "scrollEffect", "Scroll"),
    blinkEffect: getTextValue(toolText, "blinkEffect", "Blink"),
    glowEffect: getTextValue(toolText, "glowEffect", "Glow"),
    previewLabel: getTextValue(toolText, "previewLabel", "Preview"),
    previewHint: getTextValue(toolText, "previewHint", "Your signboard appears here."),
  };

  const displayRef = useRef<HTMLElement | null>(null);

  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [effect, setEffect] = useState<SignboardEffect>(DEFAULT_EFFECT);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    try {
      const savedMessage = window.localStorage.getItem(STORAGE_KEYS.message);
      const savedBackgroundColor = window.localStorage.getItem(STORAGE_KEYS.backgroundColor);
      const savedTextColor = window.localStorage.getItem(STORAGE_KEYS.textColor);
      const savedFontSize = window.localStorage.getItem(STORAGE_KEYS.fontSize);
      const savedEffect = window.localStorage.getItem(STORAGE_KEYS.effect);

      if (savedMessage !== null) setMessage(savedMessage);
      if (savedBackgroundColor) setBackgroundColor(savedBackgroundColor);
      if (savedTextColor) setTextColor(savedTextColor);
      if (savedFontSize) {
        const parsed = Number.parseInt(savedFontSize, 10);
        if (Number.isFinite(parsed)) setFontSize(parsed);
      }
      if (savedEffect === "static" || savedEffect === "scroll" || savedEffect === "blink" || savedEffect === "glow") {
        setEffect(savedEffect);
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
    window.localStorage.setItem(STORAGE_KEYS.effect, effect);
  }, [backgroundColor, effect, fontSize, message, settingsLoaded, textColor]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === displayRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    handleFullscreenChange();

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreen]);

  const previewMessage = message.trim();
  const marqueeMessage = previewMessage.replace(/\s+/g, " ");
  const marqueeDuration = Math.max(8, Math.min(24, marqueeMessage.length * 0.35));
  const previewModeLabel =
    effect === "scroll" ? text.scrollEffect :
    effect === "blink" ? text.blinkEffect :
    effect === "glow" ? text.glowEffect :
    text.staticEffect;

  const isDarkBg = (hex: string) => {
    const r = Number.parseInt(hex.slice(1, 3), 16) || 0;
    const g = Number.parseInt(hex.slice(3, 5), 16) || 0;
    const b = Number.parseInt(hex.slice(5, 7), 16) || 0;
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  };

  const uiTextColor = isDarkBg(backgroundColor) ? "#f8fafc" : "#0f172a";

  const previewBoxStyle = {
    backgroundColor,
    color: textColor,
  } as const;

  const textStyle = {
    fontSize: `${fontSize}px`,
    color: textColor,
    letterSpacing: effect === "scroll" ? "0.12em" : effect === "blink" ? "0.08em" : "0.02em",
    textShadow:
      effect === "glow"
        ? `0 0 10px ${textColor}88, 0 0 24px ${textColor}66, 0 0 42px ${textColor}44`
        : "none",
  } as const;
  const marqueeStyle = {
    ...textStyle,
    animation: `signboard-marquee ${marqueeDuration}s linear infinite`,
  } as const;
  const blinkStyle = {
    ...textStyle,
    animation: "signboard-blink 1.4s steps(2, end) infinite",
  } as const;

  const resetAll = () => {
    setMessage("");
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR);
    setTextColor(DEFAULT_TEXT_COLOR);
    setFontSize(DEFAULT_FONT_SIZE);
    setEffect(DEFAULT_EFFECT);
  };

  const toggleFullscreen = async () => {
    if (!displayRef.current) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await displayRef.current.requestFullscreen();
  };

  const previewContent = (() => {
    if (!previewMessage) {
      return (
        <div
          className={`text-center text-lg font-semibold leading-7 ${isFullscreen ? "max-w-[36rem]" : "max-w-[26rem]"}`}
          style={{ color: textColor, opacity: 0.72 }}
        >
          {text.previewHint}
        </div>
      );
    }

    if (effect === "scroll") {
      return (
        <div className="w-full overflow-hidden">
          <div
            className="flex min-w-max items-center gap-16 whitespace-nowrap font-black leading-none"
            style={marqueeStyle}
          >
            <span>{marqueeMessage}</span>
            <span aria-hidden="true">{marqueeMessage}</span>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`w-full text-center font-black leading-[1.05] break-words whitespace-pre-wrap ${isFullscreen ? "max-w-none" : "max-w-6xl"}`}
        style={effect === "blink" ? blinkStyle : textStyle}
      >
        {previewMessage}
      </div>
    );
  })();

  const effectOptions: Array<{ key: SignboardEffect; label: string }> = [
    { key: "static", label: text.staticEffect },
    { key: "scroll", label: text.scrollEffect },
    { key: "blink", label: text.blinkEffect },
    { key: "glow", label: text.glowEffect },
  ];

  return (
    <div className="tool-stack">
      <section
        ref={displayRef}
        className={`rounded-[36px] border border-[var(--panel-border)] bg-[var(--panel-glass)] shadow-2xl ${isFullscreen ? "fixed inset-0 z-50 flex h-screen w-screen flex-col rounded-none border-0 p-0 shadow-none" : "p-5 md:p-6"}`}
        style={isFullscreen ? { backgroundColor } : undefined}
      >
        {!isFullscreen && (
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="tool-badge">{text.previewLabel}</div>
              <p className="tool-note !mb-0 mt-2">{text.previewHint}</p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
              <WandSparkles size={14} className="text-[var(--accent)]" />
              <span>{previewModeLabel}</span>
            </div>
          </div>
        )}

        <div
          className={`relative flex flex-1 items-center justify-center overflow-hidden border border-black/5 shadow-inner ${isFullscreen ? "min-h-0 rounded-none border-0 p-4 md:p-6 shadow-none" : "min-h-[min(58vh, 620px)] rounded-[32px] p-6 md:p-8"}`}
          style={previewBoxStyle}
        >
          {previewContent}

          {isFullscreen && (
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-black/45"
              style={{ color: uiTextColor }}
              onClick={toggleFullscreen}
            >
              <Minimize2 size={16} />
              {commonText.exitFullscreen}
            </button>
          )}
        </div>
      </section>

      {!isFullscreen && (
        <section className="rounded-[36px] border border-[var(--panel-border)] bg-[var(--panel-glass)] p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              onClick={toggleFullscreen}
            >
              <Maximize2 size={16} />
              {commonText.fullscreen}
            </button>

            <button type="button" className="tool-button secondary" onClick={resetAll}>
              {commonText.reset}
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                {text.messageLabel}
              </label>
              <textarea
                className="tool-input min-h-[170px] w-full resize-y rounded-[24px] border border-[var(--panel-border)] bg-white/70 p-4 text-[1rem] leading-7 shadow-inner dark:bg-black/20"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={text.messagePlaceholder}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 p-4 dark:bg-black/15">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                  {text.backgroundColorLabel}
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(event) => setBackgroundColor(event.target.value)}
                    className="h-12 w-12 cursor-pointer rounded-[14px] border border-[var(--panel-border)] bg-transparent p-1"
                    aria-label={text.backgroundColorLabel}
                  />
                  <span className="font-semibold text-[var(--text)]">{backgroundColor}</span>
                </div>
              </label>

              <label className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 p-4 dark:bg-black/15">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                  {text.textColorLabel}
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(event) => setTextColor(event.target.value)}
                    className="h-12 w-12 cursor-pointer rounded-[14px] border border-[var(--panel-border)] bg-transparent p-1"
                    aria-label={text.textColorLabel}
                  />
                  <span className="font-semibold text-[var(--text)]">{textColor}</span>
                </div>
              </label>
            </div>

            <div className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 p-4 dark:bg-black/15">
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
                onChange={(event) => setFontSize(Number(event.target.value))}
                className="mt-4 w-full accent-[var(--accent)]"
                aria-label={text.fontSizeLabel}
              />
            </div>

            <div className="rounded-[24px] border border-[var(--panel-border)] bg-white/60 p-4 dark:bg-black/15">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--muted)]">
                  <WandSparkles size={14} className="text-[var(--accent)]" />
                  {text.effectLabel}
                </span>
                <span className="text-xs font-bold text-[var(--muted)]">{previewModeLabel}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {effectOptions.map((option) => {
                  const active = effect === option.key;

                  return (
                    <button
                      key={option.key}
                      type="button"
                      className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm"
                          : "border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                      onClick={() => setEffect(option.key)}
                      aria-pressed={active}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes signboard-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes signboard-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0.18;
          }
        }

        .signboard-marquee {
          animation: signboard-marquee 12s linear infinite;
        }

        .signboard-blink {
          animation: signboard-blink 1.4s steps(2, end) infinite;
        }

      `}</style>
    </div>
  );
}
