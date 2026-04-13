"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const CREDIT_CARD_WIDTH_CM = 8.56;
const CREDIT_CARD_WIDTH_IN = 3.3700787;
const MIN_MEASURE_WIDTH = 80;
const MAX_MEASURE_WIDTH = 1200;

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
  const [center, setCenter] = useState<Point>({ x: 360, y: 210 });
  const [measureWidth, setMeasureWidth] = useState(360);
  const [cardWidthPx, setCardWidthPx] = useState(324);
  const [draggingMeasure, setDraggingMeasure] = useState(false);
  const [draggingCard, setDraggingCard] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const pixelsPerCm = cardWidthPx / CREDIT_CARD_WIDTH_CM;
  const pixelsPerIn = cardWidthPx / CREDIT_CARD_WIDTH_IN;
  const measuredValue = unit === "cm" ? measureWidth / pixelsPerCm : measureWidth / pixelsPerIn;
  const measureLeft = clamp(center.x - measureWidth / 2, 0, stageSize.width);
  const measureRight = clamp(center.x + measureWidth / 2, 0, stageSize.width);
  const handleLeft = clamp(measureRight - 9, 8, stageSize.width - 26);
  const handleTop = clamp(center.y - 9, 8, stageSize.height - 26);

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
      setCenter((current) => ({
        x: clamp(current.x, 40, Math.max(80, rect.width - 40)),
        y: clamp(current.y, 40, Math.max(80, rect.height - 40)),
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
    context.moveTo(measureLeft, center.y);
    context.lineTo(measureRight, center.y);
    context.stroke();

    context.fillStyle = "#0f62fe";
    context.beginPath();
    context.arc(measureLeft, center.y, 6, 0, Math.PI * 2);
    context.arc(measureRight, center.y, 6, 0, Math.PI * 2);
    context.fill();

    context.strokeStyle = "#111827";
    context.lineWidth = 1;
    const tickUnitPx = unit === "cm" ? pixelsPerCm : pixelsPerIn;
    const minorStep = tickUnitPx / 10;
    const start = Math.min(measureLeft, measureRight);
    const end = Math.max(measureLeft, measureRight);
    let tickIndex = 0;

    for (let x = start; x <= end + 0.5; x += minorStep) {
      const isMajor = tickIndex % 10 === 0;
      const isHalf = tickIndex % 5 === 0;
      const tickHeight = isMajor ? 32 : isHalf ? 22 : 14;
      context.beginPath();
      context.moveTo(x, center.y - tickHeight);
      context.lineTo(x, center.y + tickHeight);
      context.stroke();

      if (isMajor) {
        context.fillStyle = "#111827";
        context.font = "12px sans-serif";
        context.fillText(String(tickIndex / 10), x + 4, center.y - tickHeight - 8);
      }
      tickIndex += 1;
    }

    context.fillStyle = "#111827";
    context.font = "700 18px sans-serif";
    context.fillText(
      `${formatValue(measuredValue)} ${getUnitLabel(unit)}`,
      clamp(center.x - 58, 12, stageSize.width - 130),
      clamp(center.y + 58, 32, stageSize.height - 16),
    );
  }, [
    center.x,
    center.y,
    measureLeft,
    measureRight,
    measuredValue,
    pixelsPerCm,
    pixelsPerIn,
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
        const nextWidth = Math.abs(event.clientX - rect.left - center.x) * 2;
        setMeasureWidth(clamp(nextWidth, MIN_MEASURE_WIDTH, Math.min(MAX_MEASURE_WIDTH, stageSize.width)));
      }

      if (draggingCard) {
        const rect = stageRef.current?.getBoundingClientRect();
        if (!rect) {
          return;
        }
        const nextWidth = event.clientX - rect.left - 24;
        setCardWidthPx(clamp(nextWidth, 180, Math.min(560, stageSize.width - 48)));
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
  }, [center.x, draggingCard, draggingMeasure, stageSize.width]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === stageRef.current);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const recenter = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (draggingMeasure || draggingCard) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    setCenter({
      x: clamp(event.clientX - rect.left, 40, stageSize.width - 40),
      y: clamp(event.clientY - rect.top, 40, stageSize.height - 40),
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
          onPointerDown={recenter}
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
          canvas. Click anywhere on the canvas to recenter the ruler.
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
