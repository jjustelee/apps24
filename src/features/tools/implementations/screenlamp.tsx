"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const AUTO_HIDE_DELAY_MS = 2200;
const STORAGE_KEY_COLOR = "apps24.screenlamp.color";

const PRESET_COLORS = [
  { key: "white", name: "White", value: "#ffffff" },
  { key: "warm", name: "Warm", value: "#fff3c4" },
  { key: "red", name: "Red", value: "#ef4444" },
  { key: "orange", name: "Orange", value: "#f97316" },
  { key: "yellow", name: "Yellow", value: "#facc15" },
  { key: "green", name: "Green", value: "#22c55e" },
  { key: "blue", name: "Blue", value: "#3b82f6" },
  { key: "indigo", name: "Indigo", value: "#4f46e5" },
  { key: "violet", name: "Violet", value: "#8b5cf6" },
  { key: "black", name: "Black", value: "#000000" },
] as const;

export function ScreenLampTool({ commonText, toolText }: ToolRendererProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);

  const presetColorLabels = (toolText?.presetColorLabels as Record<string, string> | undefined) ?? {};
  const previewLabel = typeof toolText?.previewLabel === "string" ? toolText.previewLabel : undefined;
  const [color, setColor] = useState<string>(PRESET_COLORS[0].value);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // Load color from localStorage
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedColor = localStorage.getItem(STORAGE_KEY_COLOR);
      if (savedColor) setColor(savedColor);
      setSettingsLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  // Save color to localStorage
  useEffect(() => {
    if (settingsLoaded) {
      localStorage.setItem(STORAGE_KEY_COLOR, color);
    }
  }, [color, settingsLoaded]);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === stageRef.current);
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
    const element = stageRef.current;
    element?.addEventListener("mousemove", revealUI);
    element?.addEventListener("touchstart", revealUI);

    return () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      element?.removeEventListener("mousemove", revealUI);
      element?.removeEventListener("touchstart", revealUI);
    };
  }, [isFullscreen]);

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await stageRef.current?.requestFullscreen();
    }
  }

  // Calculate text color for buttons based on background
  const isDarkBg = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 128;
  };

  const uiTextColor = isDarkBg(color) ? "#f8fafc" : "#0f172a";

  return (
    <div className="tool-stack" style={{ position: "relative" }}>
      <div
        ref={stageRef}
        role="region"
        aria-label={previewLabel ?? "Screen lamp preview"}
        style={{
          minHeight: isFullscreen ? "100vh" : "max(400px, 50vh)",
          borderRadius: isFullscreen ? 0 : "24px",
          border: isFullscreen ? 0 : "1px solid rgba(128,128,128,0.1)",
          background: color,
          cursor: isFullscreen && !showUI ? "none" : "default",
          boxShadow: isFullscreen ? "none" : "0 20px 50px rgba(0,0,0,0.1)",
          transition: "background-color 0.5s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Fullscreen UI Controls */}
        <div
          style={{
            opacity: showUI || !isFullscreen ? 1 : 0,
            pointerEvents: showUI || !isFullscreen ? "auto" : "none",
            position: isFullscreen ? "absolute" : "static",
            bottom: isFullscreen ? "5vh" : undefined,
            marginTop: isFullscreen ? 0 : "2rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            transition: "opacity 0.3s ease",
            padding: "2rem",
            color: isFullscreen ? uiTextColor : "inherit",
          }}
        >
          {/* Preset Colors */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem", opacity: 0.8, fontWeight: 500 }}>{commonText.presetColors}</span>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              {PRESET_COLORS.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setColor(preset.value)}
                  style={{
                    width: isFullscreen ? "40px" : "32px",
                    height: isFullscreen ? "40px" : "32px",
                    borderRadius: "50%",
                    background: preset.value,
                    border: color === preset.value 
                      ? (isDarkBg(preset.value) ? "3px solid #fff" : "3px solid #000")
                      : "2px solid rgba(128,128,128,0.2)",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "transform 0.2s, border-width 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  aria-label={presetColorLabels?.[preset.key] ?? preset.name}
                  title={presetColorLabels?.[preset.key] ?? preset.name}
                />
              ))}
            </div>
          </div>

          {/* Custom Color Selection */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", alignItems: "center" }}>
            <label 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.6rem", 
                cursor: "pointer",
                background: isFullscreen ? "rgba(128,128,128,0.1)" : "var(--bg-soft)",
                padding: "8px 20px",
                borderRadius: "30px",
                border: "1px solid rgba(128,128,128,0.1)",
                backdropFilter: isFullscreen ? "blur(10px)" : "none",
              }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{commonText.customColor}</span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  width: "28px",
                  height: "28px",
                  padding: 0,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              />
            </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <button 
              type="button" 
              className="tool-button secondary" 
              onClick={toggleFullscreen}
              style={{
                background: isFullscreen ? (isDarkBg(color) ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)") : undefined,
                color: isFullscreen ? uiTextColor : undefined,
                border: isFullscreen ? `1px solid ${isDarkBg(color) ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : undefined,
                backdropFilter: isFullscreen ? "blur(10px)" : "none",
                padding: "10px 32px",
                borderRadius: "14px",
              }}
            >
              {isFullscreen ? commonText.exitFullscreen : commonText.fullscreen}
            </button>
            {!isFullscreen && (
              <p className="tool-note" style={{ maxWidth: "400px", margin: 0 }}>
                {commonText.footerNote2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
