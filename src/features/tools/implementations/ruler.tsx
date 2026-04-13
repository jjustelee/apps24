"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const CREDIT_CARD_WIDTH_CM = 8.56;
const CREDIT_CARD_WIDTH_IN = 3.3700787;
const DEFAULT_CARD_WIDTH_PX = 324;
const MIN_CARD_WIDTH_PX = 180;
const MAX_CARD_WIDTH_PX = 560;
const MIN_MEASURE_WIDTH = 80;
const MAX_MEASURE_WIDTH = 1200;
const CALIBRATION_STORAGE_KEY = "apps24:ruler:cardWidthPx";
const UNIT_STORAGE_KEY = "apps24:ruler:unit";

type Size = {
  width: number;
  height: number;
};

type Point = {
  x: number;
  y: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatValue(value: number) {
  return Number.isFinite(value) ? value.toFixed(2) : "0.00";
}

function getUnitLabel(unit: "cm" | "in") {
  return unit === "cm" ? "cm" : "in";
}

export function RulerTool({ tool }: ToolRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [stageSize, setStageSize] = useState<Size>({ width: 720, height: 420 });
  const [origin, setOrigin] = useState<Point>({ x: 120, y: 210 });
  const [measureWidth, setMeasureWidth] = useState(360);
  const [cardWidthPx, setCardWidthPx] = useState(DEFAULT_CARD_WIDTH_PX);
  const [draggingMeasure, setDraggingMeasure] = useState(false);
  const [draggingCard, setDraggingCard] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  const pixelsPerCm = cardWidthPx / CREDIT_CARD_WIDTH_CM;
  const pixelsPerIn = cardWidthPx / CREDIT_CARD_WIDTH_IN;
  const measuredValue = unit === "cm" ? measureWidth / pixelsPerCm : measureWidth / pixelsPerIn;
  const measureStart = clamp(origin.x - measureWidth, 0, stageSize.width);
  const measureEnd = clamp(origin.x + measureWidth, 0, stageSize.width);
  const handleLeft = clamp(measureEnd - 9, 8, stageSize.width - 26);
  const handleTop = clamp(origin.y - 9, 8, stageSize.height - 26);

  useEffect(() => {
    try {
      const storedUnit = window.localStorage.getItem(UNIT_STORAGE_KEY);
      if (storedUnit === "cm" || storedUnit === "in") {
        setUnit(storedUnit);
      }

      const storedCardWidth = Number(window.localStorage.getItem(CALIBRATION_STORAGE_KEY));
      if (Number.isFinite(storedCardWidth)) {
        setCardWidthPx(clamp(storedCardWidth, MIN_CARD_WIDTH_PX, MAX_CARD_WIDTH_PX));
      }
    } finally {
      setSettingsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!settingsLoaded) {
      return;
    }

    try {
      window.localStorage.setItem(CALIBRATION_STORAGE_KEY, String(cardWidthPx));
      window.localStorage.setItem(UNIT_STORAGE_KEY, unit);
    } catch {
      // Ignore storage failures and keep the ruler usable.
    }
  }, [cardWidthPx, settingsLoaded, unit]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      setStageSize({
        width: Math.max(320, Math.round(rect.width)),
        height: Math.max(360, Math.round(rect.height)),
      });
      setOrigin((current) => ({
        x: clamp(current.x, 0, rect.width),
        y: clamp(current.y, 0, rect.height),
      }));
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(stageSize.width * ratio);
    canvas.height = Math.round(stageSize.height * ratio);
    canvas.style.width = `${stageSize.width}px`;
    canvas.style.height = `${stageSize.height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, stageSize.width, stageSize.height);

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, stageSize.width, stageSize.height);

    context.strokeStyle = "#eef1f6";
    context.lineWidth = 1;
    for (let x = 0; x <= stageSize.width; x += 20) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, stageSize.height);
      context.stroke();
    }
    for (let y = 0; y <= stageSize.height; y += 20) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(stageSize.width, y);
      context.stroke();
    }

    context.strokeStyle = "#0f62fe";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(measureStart, origin.y);
    context.lineTo(measureEnd, origin.y);
    context.stroke();

    context.fillStyle = "#0f62fe";
    context.beginPath();
    context.arc(origin.x, origin.y, 7, 0, Math.PI * 2);
    context.arc(measureStart, origin.y, 6, 0, Math.PI * 2);
    context.arc(measureEnd, origin.y, 6, 0, Math.PI * 2);
    context.fill();

    context.strokeStyle = "#111827";
    context.lineWidth = 1;
    const tickUnitPx = unit === "cm" ? pixelsPerCm : pixelsPerIn;
    const minorStep = tickUnitPx / 10;
    const firstTickIndex = Math.ceil((measureStart - origin.x) / minorStep);
    const lastTickIndex = Math.floor((measureEnd - origin.x) / minorStep);

    for (let tickIndex = firstTickIndex; tickIndex <= lastTickIndex; tickIndex += 1) {
      const x = origin.x + tickIndex * minorStep;
      const isMajor = tickIndex % 10 === 0;
      const isHalf = tickIndex % 5 === 0;
      const isZero = tickIndex === 0;
      const tickHeight = isZero ? 40 : isMajor ? 32 : isHalf ? 22 : 14;
      context.beginPath();
      context.moveTo(x, origin.y - tickHeight);
      context.lineTo(x, origin.y + tickHeight);
      context.stroke();

      if (isMajor) {
        context.fillStyle = "#111827";
        context.font = "12px sans-serif";
        if (tickIndex === 0) {
          context.textAlign = "center";
          context.fillText("0", x, origin.y - tickHeight - 8);
        } else if (tickIndex < 0) {
          context.textAlign = "right";
          context.fillText(String(tickIndex / 10), x - 4, origin.y - tickHeight - 8);
        } else {
          context.textAlign = "left";
          context.fillText(String(tickIndex / 10), x + 4, origin.y - tickHeight - 8);
        }
      }
    }
    context.textAlign = "left";

    context.fillStyle = "#111827";
    context.font = "700 18px sans-serif";
    context.fillText(
      `${formatValue(measuredValue)} ${getUnitLabel(unit)}`,
      clamp(origin.x + 14, 12, stageSize.width - 130),
      clamp(origin.y + 58, 32, stageSize.height - 16),
    );
  }, [
    measureEnd,
    measureStart,
    measuredValue,
    pixelsPerCm,
    pixelsPerIn,
    origin.x,
    origin.y,
    stageSize.height,
    stageSize.width,
    unit,
  ]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (draggingMeasure) {
        const rect = stageRef.current?.getBoundingClientRect();
        if (!rect) {
          return;
        }
        const nextWidth = event.clientX - rect.left - origin.x;
        setMeasureWidth(
          clamp(
            nextWidth,
            MIN_MEASURE_WIDTH,
            Math.max(MIN_MEASURE_WIDTH, Math.min(MAX_MEASURE_WIDTH, stageSize.width - origin.x)),
          ),
        );
      }

      if (draggingCard) {
        const rect = stageRef.current?.getBoundingClientRect();
        if (!rect) {
          return;
        }
        const nextWidth = event.clientX - rect.left - 24;
        setCardWidthPx(clamp(nextWidth, MIN_CARD_WIDTH_PX, Math.min(MAX_CARD_WIDTH_PX, stageSize.width - 48)));
      }
    };

    const onUp = () => {
      setDraggingMeasure(false);
      setDraggingCard(false);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [draggingCard, draggingMeasure, origin.x, stageSize.width]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === stageRef.current);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const setZeroPoint = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (draggingMeasure || draggingCard) {
      return;
    }
    setOrigin({
      x: event.clientX - event.currentTarget.getBoundingClientRect().left,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top,
    });
  };

  const toggleFullscreen = async () => {
    if (!stageRef.current) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await stageRef.current.requestFullscreen();
  };

  const resetCalibration = () => {
    setCardWidthPx(DEFAULT_CARD_WIDTH_PX);
  };

  return (
    <div className="tool-stack">
      <div className="tool-actions">
        <button
          className={`tool-button${unit === "cm" ? "" : " secondary"}`}
          type="button"
          onClick={() => setUnit("cm")}
        >
          Centimeters
        </button>
        <button
          className={`tool-button${unit === "in" ? "" : " secondary"}`}
          type="button"
          onClick={() => setUnit("in")}
        >
          Inches
        </button>
        <button className="tool-button secondary" type="button" onClick={toggleFullscreen}>
          {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        </button>
        <button className="tool-button secondary" type="button" onClick={resetCalibration}>
          Reset calibration
        </button>
      </div>

      <div className="tool-stat-grid" aria-live="polite">
        <div className="tool-stat">
          <strong>
            {formatValue(measuredValue)} {getUnitLabel(unit)}
          </strong>
          <span>Measured length</span>
        </div>
        <div className="tool-stat">
          <strong>{Math.round(measureWidth)} px</strong>
          <span>Canvas pixels</span>
        </div>
        <div className="tool-stat">
          <strong>{Math.round(cardWidthPx)} px</strong>
          <span>Credit card width</span>
        </div>
      </div>

      <div ref={stageRef} className="tool-canvas-wrap">
        <canvas
          ref={canvasRef}
          className="tool-canvas"
          aria-label={`Interactive ${tool.slug} canvas`}
          onPointerDown={setZeroPoint}
        />
        <button
          aria-label="Resize ruler measurement"
          className="tool-resize-handle"
          type="button"
          style={{ left: handleLeft, top: handleTop, right: "auto", bottom: "auto" }}
          onPointerDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setDraggingMeasure(true);
          }}
        />
      </div>

      <div className="tool-output-card">
        <p className="tool-note">
          Calibrate the ruler by matching the card below to a real credit card, then use the
          canvas. Click anywhere on the canvas to place the zero mark at that point and see
          ticks on both sides. The calibration is saved on this device.
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: 132,
            marginTop: 12,
            borderRadius: 18,
            border: "1px dashed var(--line)",
            background: "var(--panel-soft)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 24,
              top: 24,
              width: cardWidthPx,
              height: cardWidthPx / 1.586,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, rgba(15, 98, 254, 0.92), rgba(17, 24, 39, 0.88))",
              boxShadow: "0 16px 32px rgba(17, 24, 39, 0.16)",
              color: "white",
              padding: 18,
            }}
          >
            <span className="tool-badge" style={{ background: "rgba(255,255,255,0.18)", color: "white" }}>
              85.6 mm
            </span>
            <p style={{ margin: "20px 0 0", fontWeight: 700 }}>Credit card calibration</p>
          </div>
          <button
            aria-label="Resize credit card calibration"
            className="tool-resize-handle"
            type="button"
            style={{
              left: cardWidthPx + 13,
              top: cardWidthPx / 1.586 + 13,
              right: "auto",
              bottom: "auto",
            }}
            onPointerDown={(event) => {
              event.preventDefault();
              setDraggingCard(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
