"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { REVIEW_UI } from "@/features/tools/review-ui";
import { CARD_ASPECT_RATIO, DEFAULT_CARD_PIXELS, pixelsPerCentimeter, rulerTicks } from "@/lib/ruler-scale";

const STORAGE_KEY = "apps24:ruler:calibration-v2";

export function RulerTool({ locale, commonText: common }: ToolRendererProps) {
  const copy = REVIEW_UI[locale];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [cardPixels, setCardPixels] = useState(DEFAULT_CARD_PIXELS);
  const [calibrated, setCalibrated] = useState(false);
  const [origin, setOrigin] = useState({ x: 30, y: 50 });
  const [size, setSize] = useState({ width: 600, height: 320, ratio: 1 });
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  useEffect(() => {
    // Restore browser-only settings after hydration; they cannot be read during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanFullscreen(Boolean(document.fullscreenEnabled));
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && Number.isFinite(saved.width) && saved.width >= 80 && saved.width <= 1000) {
        setCardPixels(saved.width);
        // A saved width is useful, but the user must confirm it on the current display.
      }
    } catch { /* Calibration also works without storage. */ }
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const update = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      setSize({ width: canvas.clientWidth, height: canvas.clientHeight, ratio: window.devicePixelRatio || 1 });
    };
    const observer = new ResizeObserver(update);
    observer.observe(stage);
    const invalidate = () => { setCalibrated(false); update(); };
    const onFullscreen = () => { setFullscreen(document.fullscreenElement === stage); update(); };
    window.addEventListener("resize", invalidate);
    window.visualViewport?.addEventListener("resize", invalidate);
    document.addEventListener("fullscreenchange", onFullscreen);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", invalidate);
      window.visualViewport?.removeEventListener("resize", invalidate);
      document.removeEventListener("fullscreenchange", onFullscreen);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || size.width <= 0 || size.height <= 0) return;
    canvas.width = Math.round(size.width * size.ratio);
    canvas.height = Math.round(size.height * size.ratio);
    context.setTransform(size.ratio, 0, 0, size.ratio, 0, 0);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, size.width, size.height);
    const x0 = Math.min(origin.x, size.width - 20);
    const y0 = Math.min(origin.y, size.height - 20);
    const scale = pixelsPerCentimeter(cardPixels) * (unit === "in" ? 2.54 : 1);
    context.font = "12px sans-serif";
    context.strokeStyle = "#334155";
    context.fillStyle = "#0f172a";
    context.lineWidth = 1;

    const axis = (vertical: boolean) => {
      const ticks = rulerTicks(vertical ? y0 : x0, vertical ? size.height : size.width, scale);
      context.beginPath();
      context.moveTo(vertical ? x0 : 0, vertical ? 0 : y0);
      context.lineTo(vertical ? x0 : size.width, vertical ? size.height : y0);
      context.stroke();
      for (const { index, position } of ticks) {
        if (index === 0) continue;
        const major = index % 10 === 0;
        const length = major ? 20 : index % 5 === 0 ? 14 : 8;
        context.beginPath();
        context.moveTo(vertical ? x0 : position, vertical ? position : y0);
        context.lineTo(vertical ? x0 + length : position, vertical ? position : y0 + length);
        context.stroke();
        if (major) {
          context.textAlign = vertical ? "left" : "center";
          context.fillText(String(index / 10), vertical ? x0 + 24 : position, vertical ? position + 4 : y0 - 10);
        }
      }
    };
    axis(false);
    axis(true);
    context.fillStyle = "#dc2626";
    context.beginPath();
    context.arc(x0, y0, 3, 0, Math.PI * 2);
    context.fill();
    context.textAlign = "left";
    context.fillText("0", x0 + 6, y0 - 8);
  }, [size, origin, cardPixels, unit]);

  const confirm = () => {
    setCalibrated(true);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ width: cardPixels })); } catch { /* Storage is optional. */ }
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await stageRef.current?.requestFullscreen();
    } catch { setFullscreen(false); }
  };

  return (
    <div className="tool-stack">
      <section className="ruler-calibration" aria-labelledby="ruler-calibration-title">
        <h2 id="ruler-calibration-title">{copy.rulerAdjust}</h2>
        <p>{copy.rulerMatch}</p>
        <div className="ruler-card-scroll">
          <div aria-hidden="true" className="ruler-reference-card" style={{ width: cardPixels, height: cardPixels / CARD_ASPECT_RATIO }}>
            85.60 × 53.98 mm
          </div>
        </div>
        <label htmlFor="ruler-card-width">{common.width}: {cardPixels} px</label>
        <input id="ruler-card-width" type="range" min="80" max="1000" step="1" value={cardPixels}
          onChange={event => { setCardPixels(Number(event.target.value)); setCalibrated(false); }} />
        <div className="tool-actions">
          <button type="button" className="tool-button" onClick={confirm}>{common.calibrate}</button>
          <span role="status">{calibrated ? copy.rulerStatus : copy.rulerUncalibrated}</span>
        </div>
      </section>
      <div className="tool-actions">
        {(["cm", "in"] as const).map(value => (
          <button key={value} type="button" className="tool-button secondary" aria-pressed={unit === value} onClick={() => setUnit(value)}>
            {value}
          </button>
        ))}
        <button type="button" className="tool-button secondary" onClick={() => setOrigin({ x: 30, y: 50 })}>{common.reset}</button>
        {canFullscreen && <button type="button" className="tool-button secondary" onClick={toggleFullscreen}>{common.fullscreen}</button>}
      </div>
      <div ref={stageRef} className="ruler-stage">
        <canvas ref={canvasRef} aria-label={common.currentUnit + ": " + unit}
          onDoubleClick={event => {
            const rect = event.currentTarget.getBoundingClientRect();
            setOrigin({ x: event.clientX - rect.left, y: event.clientY - rect.top });
          }} />
        {fullscreen && <button type="button" className="tool-button ruler-exit" onClick={toggleFullscreen}>{common.exitFullscreen}</button>}
      </div>
      <p className="tool-note">{copy.rulerNote}</p>
      <p className="tool-note">{copy.rulerExample}</p>
      <style jsx>{`
        .ruler-calibration { padding: 1.25rem; border: 1px solid var(--line); border-radius: 16px; display: grid; gap: 1rem; min-width: 0; }
        .ruler-calibration h2, .ruler-calibration p { margin: 0; }
        .ruler-calibration p { color: var(--muted); line-height: 1.7; }
        .ruler-calibration input { width: 100%; accent-color: var(--accent); }
        .ruler-card-scroll { overflow-x: auto; max-width: 100%; padding: 4px; }
        .ruler-reference-card { box-sizing: border-box; border: 2px solid var(--accent); border-radius: 12px; display: grid; place-items: center; background: var(--accent-soft); color: var(--text); font-size: 12px; }
        .ruler-stage { height: 320px; width: 100%; position: relative; overflow: hidden; border-radius: 12px; background: white; }
        .ruler-stage canvas { display: block; width: 100%; height: 100%; cursor: crosshair; }
        .ruler-stage:fullscreen { height: 100vh; width: 100vw; border-radius: 0; }
        .ruler-exit { position: absolute; top: 12px; right: 12px; }
        button[aria-pressed="true"] { background: var(--accent); color: white; }
      `}</style>
    </div>
  );
}
