"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";

const AUTO_HIDE_DELAY_MS = 2200;
const STORAGE_KEY_BG = "apps24.digitalclock.bgColor";
const STORAGE_KEY_FORMAT = "apps24.digitalclock.is24Hour";
const STORAGE_KEY_SIZE = "apps24.digitalclock.fontSizeScale";

const PRESET_COLORS = [
  { id: "slate", value: "#020617" },
  { id: "white", value: "#ffffff" },
  { id: "indigo", value: "#1e1b4b" },
  { id: "emerald", value: "#064e3b" },
  { id: "rose", value: "#4c0519" },
  { id: "amber", value: "#451a03" },
  { id: "purple", value: "#3b0764" },
];

function getContrastColor(hexColor: string) {
  const r = parseInt(hexColor.slice(1, 3), 16) || 0;
  const g = parseInt(hexColor.slice(3, 5), 16) || 0;
  const b = parseInt(hexColor.slice(5, 7), 16) || 0;
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#0f172a" : "#f8fafc";
}

function formatClock(date: Date, locale: string, is24Hour: boolean) {
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24Hour,
  });

  const parts = timeFormatter.formatToParts(date);
  const periodPart = parts.find((p) => p.type === "dayPeriod");
  const timeText = parts
    .filter((p) => p.type !== "dayPeriod")
    .map((p) => p.value)
    .join("")
    .trim();

  return {
    dateText: dateFormatter.format(date),
    period: periodPart ? periodPart.value : "",
    timeText: timeText,
  };
}

async function toggleFullscreen(element: HTMLElement | null) {
  if (!element) return;
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await element.requestFullscreen?.();
  }
}

export function DigitalClockTool({ locale }: ToolRendererProps) {
  const commonText = getCommonText(locale as Locale);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);
  
  const [now, setNow] = useState(() => new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showUI, setShowUI] = useState(true);
  
  const [bgColor, setBgColor] = useState(PRESET_COLORS[0].value);
  const [is24Hour, setIs24Hour] = useState(false);
  const [fontSizeScale, setFontSizeScale] = useState(1.1);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedBg = localStorage.getItem(STORAGE_KEY_BG);
    const savedFormat = localStorage.getItem(STORAGE_KEY_FORMAT);
    const savedSize = localStorage.getItem(STORAGE_KEY_SIZE);

    if (savedBg) setBgColor(savedBg);
    if (savedFormat) setIs24Hour(savedFormat === "true");
    if (savedSize) setFontSizeScale(parseFloat(savedSize));
    
    setSettingsLoaded(true);
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    if (settingsLoaded) {
      localStorage.setItem(STORAGE_KEY_BG, bgColor);
      localStorage.setItem(STORAGE_KEY_FORMAT, String(is24Hour));
      localStorage.setItem(STORAGE_KEY_SIZE, String(fontSizeScale));
    }
  }, [bgColor, is24Hour, fontSizeScale, settingsLoaded]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
      setShowUI(true);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;

    function revealUI() {
      setShowUI(true);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => setShowUI(false), AUTO_HIDE_DELAY_MS);
    }

    revealUI();
    const element = containerRef.current;
    element?.addEventListener("mousemove", revealUI);
    element?.addEventListener("touchstart", revealUI);

    return () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      element?.removeEventListener("mousemove", revealUI);
      element?.removeEventListener("touchstart", revealUI);
    };
  }, [isFullscreen]);

  const { dateText, period, timeText } = formatClock(now, locale, is24Hour);
  const textColor = isFullscreen ? getContrastColor(bgColor) : "inherit";

  return (
    <div
      ref={containerRef}
      className={`tool-stack ${isFullscreen ? 'fullscreen' : ''}`}
      style={{
        alignItems: "center",
        background: isFullscreen ? bgColor : "transparent",
        color: textColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: isFullscreen ? "100vh" : "max(400px, 50vh)",
        padding: isFullscreen ? "2rem" : "1rem",
        position: "relative",
        textAlign: "center",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <div 
        className="tool-preview" 
        aria-live="polite" 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "1rem",
          transform: isFullscreen ? `scale(${fontSizeScale})` : 'none',
          transition: 'transform 0.3s ease-out'
        }}
      >
        {period && (
          <span 
            className="tool-badge" 
            style={{ 
              animation: "fadeIn 1s ease-in-out", 
              background: isFullscreen ? (textColor === "#0f172a" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)") : undefined,
              color: textColor !== "inherit" ? textColor : undefined 
            }}
          >
            {period}
          </span>
        )}
        <strong
          style={{
            fontSize: isFullscreen ? "20vw" : "clamp(4.5rem, 18vw, 12rem)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            textShadow: isFullscreen ? (textColor === "#0f172a" ? "0 4px 12px rgba(0,0,0,0.05)" : "0 10px 40px rgba(0,0,0,0.4)") : "none",
          }}
        >
          {timeText}
        </strong>
        <p className="tool-note" style={{ margin: 0, opacity: 0.7, fontSize: isFullscreen ? "1.5rem" : "1.1rem", color: textColor !== "inherit" ? textColor : undefined }}>
          {dateText}
        </p>
      </div>

      <div
        className="tool-controls"
        style={{
          opacity: showUI || !isFullscreen ? 1 : 0,
          pointerEvents: showUI || !isFullscreen ? "auto" : "none",
          position: isFullscreen ? "absolute" : "static",
          bottom: isFullscreen ? "4vh" : undefined,
          marginTop: isFullscreen ? 0 : "3rem",
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        {/* Color Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
            {PRESET_COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => setBgColor(color.value)}
                style={{
                  width: "30px", height: "30px",
                  borderRadius: "50%",
                  backgroundColor: color.value,
                  border: bgColor === color.value ? (textColor === "#0f172a" ? "2px solid #000" : "2px solid #fff") : "1px solid rgba(128,128,128,0.2)",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", cursor: "pointer", opacity: 0.8 }}>
            <span>{commonText.customColor}</span>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              style={{ width: "24px", height: "24px", border: "none", background: "none", cursor: "pointer", padding: 0 }}
            />
          </label>
        </div>

        {/* Display Settings Section */}
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", background: isFullscreen ? "rgba(128,128,128,0.05)" : "var(--bg)", padding: "1rem 1.5rem", borderRadius: "20px", border: "1px solid rgba(128,128,128,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
             <button 
               onClick={() => setIs24Hour(!is24Hour)}
               className={`tool-button ${!is24Hour ? '' : 'secondary'}`}
               style={{ padding: "6px 16px", fontSize: "0.8rem", borderRadius: "12px", minWidth: "80px" }}
             >
               {is24Hour ? commonText.twentyFourHour : commonText.twelveHour}
             </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>{commonText.fontSize}</span>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <button onClick={() => setFontSizeScale(s => Math.max(0.5, s - 0.1))} style={{ width: "30px", height: "30px", borderRadius: "8px", border: "1px solid rgba(128,128,128,0.3)", background: "none", color: "inherit", cursor: "pointer" }}>-</button>
              <button onClick={() => setFontSizeScale(s => Math.min(2.0, s + 0.1))} style={{ width: "30px", height: "30px", borderRadius: "8px", border: "1px solid rgba(128,128,128,0.3)", background: "none", color: "inherit", cursor: "pointer" }}>+</button>
            </div>
          </div>
        </div>

        <button
          className="tool-button secondary"
          type="button"
          onClick={() => toggleFullscreen(containerRef.current)}
          style={{
            marginTop: "0.5rem",
            padding: "10px 24px",
            background: isFullscreen ? (textColor === "#0f172a" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)") : undefined,
            color: textColor !== "inherit" ? textColor : undefined,
          }}
        >
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}
