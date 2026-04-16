"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
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

export function RulerTool({ locale, tool, commonText: common, toolText }: ToolRendererProps) {
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

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (isFullscreen) {
        setStageSize({ width: window.innerWidth, height: window.innerHeight });
      } else if (containerRef.current) {
        const measuredWidth = containerRef.current.offsetWidth || window.innerWidth;
        const newWidth = Math.min(MAX_STAGE_WIDTH, measuredWidth - 4); 
        
        // Only auto-update width if it wasn't manually changed or if it's too wide for the container
        setStageSize(prev => {
          const updatedWidth = Math.min(newWidth, prev.width || newWidth);
          return {
            width: updatedWidth,
            height: prev.height > 0 ? prev.height : 400
          };
        });
        
        setOrigin(prev => ({
          x: Math.min(prev.x, Math.max(0, newWidth - 20)),
          y: Math.min(prev.y, Math.max(0, stageSize.height - 20))
        }));
      }
    };

    // Initial sizing and add listeners
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("fullscreenchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleResize);
    };
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
    <div ref={containerRef} className="tool-stack">
      {!isFullscreen && (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "6rem" }}>
          
          {/* 빠른 사용 가이드 (Quick Guide) */}
          <div style={{ background: "var(--panel-glass)", border: "1px solid var(--panel-border)", borderRadius: "var(--radius)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>
              {common.rulerHowTo}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { step: '1', text: common.rulerStep1 },
                { step: '2', text: common.rulerStep2 },
                { step: '3', text: common.rulerStep3 }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "1rem", alignItems: "center", background: "var(--bg)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--line)" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 800, flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <div style={{ color: "var(--text-soft)", fontSize: "1rem", lineHeight: "1.6", fontWeight: 500 }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 보정 방법 가이드 (Calibration Method Guide) */}
          <div style={{ background: "var(--panel-glass)", border: "1px solid var(--panel-border)", borderRadius: "var(--radius)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
                {common.calibrationTitle}
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: "1.7" }}>
                {common.calibrationDesc}
              </p>
            </div>

            <div style={{ 
              background: "var(--bg)", 
              border: "1px solid var(--line)", 
              borderRadius: "16px", 
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              height: "200px", // Height increased slightly to fit realistic proportions
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {/* Simplified Ruler Illustration (Scale: 1cm = 25px) */}
              <div style={{ position: "relative", width: "350px", height: "1px", background: "var(--text)", marginTop: "60px" }}>
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} style={{ position: "absolute", left: `${i * 25}px`, bottom: "0" }}>
                    <div style={{ width: "2px", height: "20px", background: "var(--text)" }}></div>
                    <span style={{ position: "absolute", top: "25px", left: "-4px", fontSize: "0.75rem", fontWeight: 800 }}>{i}</span>
                    {i < 12 && <div style={{ position: "absolute", left: "12.5px", bottom: "0", width: "1px", height: "10px", background: "var(--text)", opacity: 0.5 }}></div>}
                  </div>
                ))}
                
                {/* 0 Mark Highlight */}
                <div style={{ position: "absolute", left: "-2px", top: "-30px", color: "var(--accent)", fontWeight: 900, fontSize: "1.2rem", zIndex: 3 }}>0</div>
                
                {/* Card aligned at 0 with realistic proportion (8.56cm * 25px = 214px) */}
                <div style={{ 
                  position: "absolute",
                  left: "0",
                  bottom: "1px", // Touches the ruler line
                  width: "214px", 
                  height: "135px", 
                  background: "#1e293b", 
                  borderRadius: "8px", 
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  zIndex: 2,
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  opacity: 0.95
                }}>
                  <div style={{ width: "28px", height: "20px", background: "#facc15", borderRadius: "3px", boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)" }}></div>
                  <div style={{ width: "80%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "4px" }}></div>
                  <div style={{ width: "50%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}></div>
                </div>
              </div>
            </div>
            
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", fontStyle: "italic", textAlign: "center", marginTop: "1.5rem" }}>
              {common.guideMessage}
            </p>
          </div>

          {/* 측정 도구 / 보정 폼 (Measurement Tool / Calibration) */}
          <div style={{ background: "var(--panel-glass)", border: "1px solid var(--panel-border)", borderRadius: "var(--radius)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            
            {/* 단위 선택 탭 */}
            <div style={{ display: "flex", background: "var(--bg)", borderRadius: "12px", padding: "4px", marginBottom: "1.5rem", border: "1px solid var(--line)" }}>
              {["cm", "in"].map((u) => (
                <button 
                  key={u}
                  onClick={() => setUnit(u as any)}
                  style={{ 
                    flex: 1, 
                    padding: "0.75rem", 
                    borderRadius: "8px", 
                    border: "none", 
                    background: unit === u ? "var(--accent)" : "transparent", 
                    color: unit === u ? "white" : "var(--text)", 
                    fontWeight: 700, 
                    fontSize: "0.9rem",
                    cursor: "pointer", 
                    transition: "all 0.2s" 
                  }}
                >
                  {u.toUpperCase()}
                </button>
              ))}
            </div>

            <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "1rem", borderRadius: "12px", textAlign: "center", fontWeight: 800, letterSpacing: "0.05em", fontSize: "0.9rem", marginBottom: "2rem" }}>
              {common.currentUnit}: {unit.toUpperCase()}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label htmlFor="ruler-card-width" style={{ display: "block", fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--text)" }}>
                {common.rulerEnterCardWidth}
              </label>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1rem" }}>
                {common.rulerExample}
              </p>
              <input
                id="ruler-card-width"
                type="text"
                inputMode="decimal"
                value={calibrationInput}
                onChange={(e) => setCalibrationInput(e.target.value)}
                style={{ width: "100%", padding: "1.25rem", textAlign: "center", fontSize: "1.5rem", fontWeight: 800, borderRadius: "12px", border: "1px solid var(--line)", background: "var(--bg)", color: "var(--text)" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
              <button onClick={calibrate} style={{ background: "var(--accent)", color: "white", padding: "1rem", borderRadius: "12px", border: "none", fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                {common.calibrate}
              </button>
              <button onClick={() => setUnit(unit === "cm" ? "in" : "cm")} style={{ background: "var(--bg)", color: "var(--text)", border: "1px solid var(--line)", padding: "1rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                {common.changeTo} {unit === "cm" ? "inch" : "cm"}
              </button>
              <button onClick={toggleFs} style={{ background: "var(--bg)", color: "var(--text)", border: "1px solid var(--line)", padding: "1rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                {common.fullscreen}
              </button>
            </div>

            <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: "12px" }}>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                <strong>{common.notice}:</strong> {common.rulerTip}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* 실제 연산 및 캔버스 영역 (Interactive Tool) */}
      <div style={{ marginTop: "2rem" }}>
        <div 
          ref={stageRef} 
          className="tool-canvas-wrap" 
          style={{ 
            position: isFullscreen ? "fixed" : "relative", 
            top: 0,
            left: 0,
            width: isFullscreen ? "100vw" : "100%",
            height: isFullscreen ? "100vh" : `${stageSize.height}px`,
            maxWidth: isFullscreen ? "none" : `${stageSize.width}px`,
            margin: isFullscreen ? 0 : "0 auto",
            background: "white",
            boxShadow: isFullscreen ? "none" : "var(--shadow)",
            border: isFullscreen ? "none" : "1px solid var(--panel-border)",
            borderRadius: isFullscreen ? 0 : "16px",
            overflow: "hidden",
            zIndex: isFullscreen ? 9999 : 1
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ cursor: "crosshair", display: "block", width: "100%", height: "100%" }}
            onDoubleClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setOrigin({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          />

          {isFullscreen && (
            <>
              <div style={{ position: "absolute", top: "20px", left: "20px", background: "rgba(0,0,0,0.7)", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, opacity: showControls ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }}>
                {common.currentUnit}: {currentUnitLabel}
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
              style={{ 
                position: "absolute", 
                bottom: 0, 
                right: 0, 
                width: "24px", 
                height: "24px", 
                background: "var(--accent)", 
                cursor: "nwse-resize", 
                zIndex: 10, 
                borderRadius: "8px 0 0 0", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                touchAction: "none"
              }}
            >
              <div style={{ width: "6px", height: "6px", background: "white", borderRadius: "50%", opacity: 0.8 }}></div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
