"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";

const DEFAULT_CARD_WIDTH_CM = 8.56;
const REFERENCE_CARD_WIDTH_PX = 324;
const MIN_STAGE_HEIGHT = 400;
const MAX_STAGE_WIDTH = 1200;
const CALIBRATION_STORAGE_KEY = "apps24:ruler:cardWidthCm";
const UNIT_STORAGE_KEY = "apps24:ruler:unit";

type Size = {
  width: number;
  height: number;
};

type Point = {
  x: number;
  y: number;
};

function formatValue(value: number) {
  return Number.isFinite(value) ? value.toFixed(2) : "0.00";
}

export function RulerTool({ locale, tool }: ToolRendererProps) {
  const common = getCommonText(locale as Locale);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [stageSize, setStageSize] = useState<Size>({ width: 800, height: 500 });
  const [origin, setOrigin] = useState<Point>({ x: 400, y: 250 });
  const [calibrationInput, setCalibrationInput] = useState(String(DEFAULT_CARD_WIDTH_CM));
  const [cardWidthCm, setCardWidthCm] = useState(DEFAULT_CARD_WIDTH_CM);
  const [draggingResize, setDraggingResize] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Store pre-fullscreen size to restore it correctly
  const preFsSizeRef = useRef<Size>({ width: 800, height: 500 });

  const pixelsPerCm = REFERENCE_CARD_WIDTH_PX / cardWidthCm;
  const pixelsPerIn = pixelsPerCm * 2.54;

  useEffect(() => {
    try {
      const storedUnit = window.localStorage.getItem(UNIT_STORAGE_KEY);
      if (storedUnit === "cm" || storedUnit === "in") setUnit(storedUnit);

      const storedCardWidth = Number(window.localStorage.getItem(CALIBRATION_STORAGE_KEY));
      if (Number.isFinite(storedCardWidth) && storedCardWidth > 0) {
        setCardWidthCm(storedCardWidth);
        setCalibrationInput(formatValue(storedCardWidth));
      }
    } finally {
      setSettingsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!settingsLoaded) return;
    window.localStorage.setItem(CALIBRATION_STORAGE_KEY, String(cardWidthCm));
    window.localStorage.setItem(UNIT_STORAGE_KEY, unit);
  }, [cardWidthCm, settingsLoaded, unit]);

  useEffect(() => {
    if (!isFullscreen) {
      setShowControls(true);
      return;
    }

    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleResize = () => {
      if (isFullscreen) {
        setStageSize({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    if (isFullscreen) {
      // Save current size BEFORE switching to fullscreen dimensions
      preFsSizeRef.current = { width: stageSize.width, height: stageSize.height };
      
      handleResize();
      window.addEventListener("resize", handleResize);
    } else {
      // Restore the exact size from before fullscreen
      setStageSize({
        width: Math.min(MAX_STAGE_WIDTH, preFsSizeRef.current.width),
        height: preFsSizeRef.current.height
      });
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(stageSize.width * ratio);
    canvas.height = Math.round(stageSize.height * ratio);
    
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, stageSize.width, stageSize.height);

    const currentPixelsPerUnit = unit === "cm" ? pixelsPerCm : pixelsPerIn;
    const minorStep = currentPixelsPerUnit / 10;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, stageSize.width, stageSize.height);
    
    context.strokeStyle = "#e5e7eb";
    context.lineWidth = 0.5;

    const gridOffsetX = origin.x % currentPixelsPerUnit;
    for (let x = gridOffsetX; x <= stageSize.width; x += currentPixelsPerUnit) {
      context.beginPath(); context.moveTo(x, 0); context.lineTo(x, stageSize.height); context.stroke();
    }
    const gridOffsetY = origin.y % currentPixelsPerUnit;
    for (let y = gridOffsetY; y <= stageSize.height; y += currentPixelsPerUnit) {
      context.beginPath(); context.moveTo(0, y); context.lineTo(stageSize.width, y); context.stroke();
    }

    const drawAxis = (isVertical: boolean) => {
      const length = isVertical ? stageSize.height : stageSize.width;
      const start = isVertical ? -origin.y : -origin.x;
      const end = isVertical ? stageSize.height - origin.y : stageSize.width - origin.x;

      context.strokeStyle = "#374151";
      context.lineWidth = 1;
      context.beginPath();
      if (isVertical) {
        context.moveTo(origin.x, 0); context.lineTo(origin.x, stageSize.height);
      } else {
        context.moveTo(0, origin.y); context.lineTo(stageSize.width, origin.y);
      }
      context.stroke();

      for (let px = start; px <= end; px += minorStep) {
        const tickIndex = Math.round(px / minorStep);
        if (tickIndex === 0) continue;

        const isMajor = tickIndex % 10 === 0;
        const isHalf = tickIndex % 5 === 0;
        const tickLen = isMajor ? 30 : isHalf ? 20 : 10;
        
        const pos = (isVertical ? origin.y : origin.x) + px;
        if (pos < 0 || pos > (isVertical ? stageSize.height : stageSize.width)) continue;
        
        context.beginPath();
        if (isVertical) {
          context.moveTo(origin.x - tickLen / 2, pos);
          context.lineTo(origin.x + tickLen / 2, pos);
        } else {
          context.moveTo(pos, origin.y - tickLen / 2);
          context.lineTo(pos, origin.y + tickLen / 2);
        }
        context.stroke();

        if (isMajor) {
          context.fillStyle = "#111827";
          context.font = "500 11px Inter, sans-serif";
          const val = Math.abs(tickIndex / 10);
          if (isVertical) {
            context.textAlign = "right";
            context.fillText(String(val), origin.x - 20, pos + 4);
          } else {
            context.textAlign = "center";
            context.fillText(String(val), pos, origin.y - 20);
          }
        }
      }
    };

    drawAxis(false);
    drawAxis(true);

    context.fillStyle = "#dc2626";
    context.font = "bold 14px Inter, sans-serif";
    context.textAlign = "left";
    context.fillText("0", origin.x + 10, origin.y - 10);
    
    context.beginPath();
    context.arc(origin.x, origin.y, 4, 0, Math.PI * 2);
    context.fill();

  }, [origin, stageSize, unit, pixelsPerCm, pixelsPerIn]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (draggingResize && stageRef.current && !isFullscreen) {
        const rect = stageRef.current.getBoundingClientRect();
        const newWidth = Math.min(MAX_STAGE_WIDTH, Math.max(320, e.clientX - rect.left));
        const newHeight = Math.max(MIN_STAGE_HEIGHT, e.clientY - rect.top);
        setStageSize({ width: newWidth, height: newHeight });
      }
    };
    const onUp = () => setDraggingResize(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [draggingResize, isFullscreen]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const toggleFs = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await stageRef.current?.requestFullscreen();
    }
  };

  const calibrate = () => {
    const val = Number(calibrationInput);
    if (val > 0) {
      setCardWidthCm(val);
      setCalibrationInput(formatValue(val));
    }
  };

  const currentUnitLabel = unit === "cm" ? "CM" : "INCH";

  return (
    <div className="tool-stack">
      {!isFullscreen && (
        <>
          <div className="tool-output-card" style={{ border: "none", background: "transparent", padding: 0 }}>
            <p className="tool-meta">{common.rulerHowTo}</p>
            <h2 style={{ fontSize: "1.5rem", color: "var(--accent)", marginBottom: "1rem" }}>{tool.titleKey}</h2>
            <ol className="ruler-guide-list" style={{ marginLeft: "1.5rem", lineHeight: "1.8", color: "var(--text)" }}>
              <li>{common.rulerStep1}</li>
              <li>{common.rulerStep2}</li>
              <li>{common.rulerStep3}</li>
            </ol>
          </div>

          <hr style={{ border: "none", borderTop: "1px dashed var(--line)", margin: "1rem 0" }} />

          <div className="tool-form" style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
            <div className="tool-field" style={{ marginBottom: "1.5rem" }}>
              <div className="tool-badge" style={{ display: "inline-block", marginBottom: "1rem", background: "var(--accent)", color: "white", borderRadius: "20px", padding: "4px 12px", fontSize: "0.75rem", fontWeight: 700 }}>
                Current Unit: {currentUnitLabel}
              </div>
              <label className="tool-label" htmlFor="ruler-card-width" style={{ display: "block" }}>{common.rulerEnterCardWidth} ({unit}):</label>
              <p className="tool-note">{common.rulerExample}</p>
              <input
                id="ruler-card-width"
                className="tool-input"
                inputMode="decimal"
                value={calibrationInput}
                onChange={(e) => setCalibrationInput(e.target.value)}
                style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700 }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button className="tool-button" onClick={calibrate}>{common.calibrate}</button>
              <button className="tool-button secondary" onClick={() => setUnit(unit === "cm" ? "in" : "cm")}>
                {common.changeTo} {unit === "cm" ? "inch" : "cm"}
              </button>
              <button className="tool-button secondary" onClick={toggleFs}>{common.fullscreen}</button>
            </div>
          </div>
        </>
      )}

      <div 
        ref={stageRef} 
        className="tool-canvas-wrap" 
        style={{ 
          position: isFullscreen ? "fixed" : "relative", 
          top: 0,
          left: 0,
          width: isFullscreen ? "100vw" : `${stageSize.width}px`,
          height: isFullscreen ? "100vh" : `${stageSize.height}px`,
          maxWidth: isFullscreen ? "none" : "100%",
          margin: isFullscreen ? 0 : "2rem auto",
          background: "white",
          boxShadow: isFullscreen ? "none" : "var(--shadow)",
          border: isFullscreen ? "none" : "1px solid var(--panel-border)",
          borderRadius: isFullscreen ? 0 : "8px",
          overflow: "hidden",
          zIndex: isFullscreen ? 9999 : 1
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ cursor: "crosshair", display: "block", width: "100%", height: "100%" }}
          onPointerDown={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setOrigin({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
        />

        {isFullscreen && (
          <>
            <div style={{ position: "absolute", top: "20px", left: "20px", background: "rgba(0,0,0,0.7)", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, opacity: showControls ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }}>
              Unit: {currentUnitLabel}
            </div>
            <div style={{ position: "absolute", top: "20px", right: "20px", display: "flex", gap: "10px", opacity: showControls ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: showControls ? "auto" : "none" }}>
              <button className="tool-button secondary" style={{ background: "rgba(255,255,255,0.9)", border: "none" }} onClick={() => setUnit(unit === "cm" ? "in" : "cm")}>
                {unit.toUpperCase()}
              </button>
              <button className="tool-button" onClick={toggleFs}>
                {common.exitFullscreen}
              </button>
            </div>
          </>
        )}

        {!isFullscreen && (
          <div
            onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); setDraggingResize(true); }}
            style={{ position: "absolute", bottom: 0, right: 0, width: "20px", height: "20px", background: "#3b82f6", cursor: "nwse-resize", zIndex: 10, borderRadius: "4px 0 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div style={{ width: "4px", height: "4px", background: "white", borderRadius: "50%" }}></div>
          </div>
        )}
      </div>
      
      {!isFullscreen && (
        <p className="tool-note" style={{ textAlign: "center", marginTop: "1rem" }}>
          {common.rulerTip}
        </p>
      )}
    </div>
  );
}
