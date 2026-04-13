"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const PRESET_COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Warm", value: "#fff3c4" },
  { name: "Red", value: "#ef4444" },
  { name: "Orange", value: "#f97316" },
  { name: "Yellow", value: "#facc15" },
  { name: "Green", value: "#22c55e" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Indigo", value: "#4f46e5" },
  { name: "Violet", value: "#8b5cf6" },
  { name: "Black", value: "#000000" },
];

export function ScreenLampTool({}: ToolRendererProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const hideCursorTimer = useRef<number | null>(null);
  const [color, setColor] = useState(PRESET_COLORS[0].value);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      const active = document.fullscreenElement === stageRef.current;
      setIsFullscreen(active);
      if (!active) {
        setHideCursor(false);
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      if (hideCursorTimer.current) {
        window.clearTimeout(hideCursorTimer.current);
      }
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!isFullscreen) {
      return;
    }

    const revealCursor = () => {
      setHideCursor(false);
      if (hideCursorTimer.current) {
        window.clearTimeout(hideCursorTimer.current);
      }
      hideCursorTimer.current = window.setTimeout(() => setHideCursor(true), 1000);
    };

    revealCursor();
    const element = stageRef.current;
    element?.addEventListener("mousemove", revealCursor);
    element?.addEventListener("touchstart", revealCursor);

    return () => {
      if (hideCursorTimer.current) {
        window.clearTimeout(hideCursorTimer.current);
      }
      element?.removeEventListener("mousemove", revealCursor);
      element?.removeEventListener("touchstart", revealCursor);
    };
  }, [isFullscreen]);

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await stageRef.current?.requestFullscreen();
  }

  return (
    <div className="tool-stack">
      <div
        ref={stageRef}
        aria-label="Screen lamp preview"
        style={{
          minHeight: isFullscreen ? "100vh" : "420px",
          borderRadius: isFullscreen ? 0 : "20px",
          border: isFullscreen ? 0 : "1px solid var(--line)",
          background: color,
          cursor: isFullscreen && hideCursor ? "none" : "default",
          boxShadow: isFullscreen ? "none" : "var(--shadow)",
        }}
      />

      <div className="tool-form">
        <div className="tool-field">
          <span className="tool-label">Preset colors</span>
          <div className="tool-swatch-grid">
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className="tool-swatch"
                aria-label={preset.name}
                aria-pressed={color.toLowerCase() === preset.value}
                onClick={() => setColor(preset.value)}
                style={{ background: preset.value }}
              />
            ))}
          </div>
        </div>

        <div className="tool-field">
          <label className="tool-label" htmlFor="screenlamp-color">
            Custom color
          </label>
          <input
            id="screenlamp-color"
            className="tool-input"
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            style={{ minHeight: "3rem", padding: "0.35rem" }}
          />
        </div>

        <div className="tool-actions">
          <button type="button" className="tool-button" onClick={toggleFullscreen}>
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>

        <p className="tool-note">
          Pick a color, then open fullscreen. The cursor is hidden while fullscreen is
          active and restored automatically when you exit.
        </p>
      </div>
    </div>
  );
}
