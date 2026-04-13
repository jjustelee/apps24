"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const AUTO_HIDE_DELAY_MS = 2200;

function formatClock(date: Date) {
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const period = hours24 >= 12 ? "PM" : "AM";

  return {
    dateText: new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date),
    period,
    timeText: `${hours12.toString().padStart(2, "0")}:${minutes}:${seconds}`,
  };
}

async function toggleFullscreen(element: HTMLElement | null) {
  if (!element) {
    return;
  }

  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }

  await element.requestFullscreen?.();
}

export function DigitalClockTool(props: ToolRendererProps) {
  void props;

  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);
  const [now, setNow] = useState(() => new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenButton, setShowFullscreenButton] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
      setShowFullscreenButton(true);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) {
      return;
    }

    function revealButton() {
      setShowFullscreenButton(true);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
      hideTimerRef.current = window.setTimeout(() => {
        setShowFullscreenButton(false);
      }, AUTO_HIDE_DELAY_MS);
    }

    revealButton();
    const element = containerRef.current;
    element?.addEventListener("mousemove", revealButton);
    element?.addEventListener("touchstart", revealButton);

    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
      element?.removeEventListener("mousemove", revealButton);
      element?.removeEventListener("touchstart", revealButton);
    };
  }, [isFullscreen]);

  const { dateText, period, timeText } = formatClock(now);

  return (
    <div
      ref={containerRef}
      className="tool-stack"
      style={{
        alignItems: "center",
        background: isFullscreen ? "#020617" : "transparent",
        color: isFullscreen ? "#f8fafc" : "inherit",
        justifyItems: "center",
        minHeight: isFullscreen ? "100vh" : "min(58vh, 520px)",
        padding: isFullscreen ? "clamp(1.5rem, 5vw, 4rem)" : "1rem",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div className="tool-preview" aria-live="polite" style={{ justifyItems: "center" }}>
        <span className="tool-badge">{period}</span>
        <strong
          style={{
            fontSize: "clamp(4rem, 16vw, 11rem)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-0.08em",
            lineHeight: 1,
          }}
        >
          {timeText}
        </strong>
        <p className="tool-note" style={{ margin: 0, color: isFullscreen ? "#cbd5e1" : undefined }}>
          {dateText}
        </p>
      </div>

      <button
        className="tool-button secondary"
        type="button"
        onClick={() => toggleFullscreen(containerRef.current)}
        style={{
          opacity: showFullscreenButton ? 1 : 0,
          pointerEvents: showFullscreenButton ? "auto" : "none",
          position: isFullscreen ? "absolute" : "static",
          right: isFullscreen ? "1.25rem" : undefined,
          top: isFullscreen ? "1.25rem" : undefined,
          transition: "opacity 180ms ease",
        }}
      >
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
    </div>
  );
}
