"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const DEFAULT_CARD_WIDTH_CM = 8.56;
const REFERENCE_CARD_WIDTH_PX = 324;
const MIN_MEASURE_WIDTH = 80;
const MAX_MEASURE_WIDTH = 1200;
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
  const [calibrationInput, setCalibrationInput] = useState(String(DEFAULT_CARD_WIDTH_CM));
  const [cardWidthCm, setCardWidthCm] = useState(DEFAULT_CARD_WIDTH_CM);
  const [draggingMeasure, setDraggingMeasure] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  const pixelsPerCm = REFERENCE_CARD_WIDTH_PX / cardWidthCm;
  const pixelsPerIn = pixelsPerCm * 2.54;
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
      if (Number.isFinite(storedCardWidth) && storedCardWidth > 0) {
        setCardWidthCm(storedCardWidth);
        setCalibrationInput(formatValue(storedCardWidth));
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
      window.localStorage.setItem(CALIBRATION_STORAGE_KEY, String(cardWidthCm));
      window.localStorage.setItem(UNIT_STORAGE_KEY, unit);
    } catch {
      // Ignore storage failures and keep the ruler usable.
    }
  }, [cardWidthCm, settingsLoaded, unit]);

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
    };

    const onUp = () => {
      setDraggingMeasure(false);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [draggingMeasure, origin.x, stageSize.width]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === stageRef.current);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const setZeroPoint = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (draggingMeasure) {
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

  const calibrate = () => {
    const nextWidth = Number(calibrationInput);
    if (!Number.isFinite(nextWidth) || nextWidth <= 0) {
      return;
    }

    const normalizedWidth = Number(nextWidth.toFixed(2));
    setCardWidthCm(normalizedWidth);
    setCalibrationInput(formatValue(normalizedWidth));
  };

  const resetCalibration = () => {
    setCardWidthCm(DEFAULT_CARD_WIDTH_CM);
    setCalibrationInput(formatValue(DEFAULT_CARD_WIDTH_CM));
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
          <strong>{formatValue(cardWidthCm)} cm</strong>
          <span>Calibration width</span>
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
        <div className="ruler-guide">
          <div>
            <p className="tool-meta">How to Use the Online Ruler</p>
            <h3 className="ruler-guide-title">Measure Objects with the Online Ruler</h3>
            <p className="tool-note">Please calibrate the ruler before use.</p>
          </div>

          <ol className="ruler-guide-list">
            <li>Place a credit card horizontally at the zero mark.</li>
            <li>Enter the measured width of the card and click Calibrate.</li>
            <li>Now you can measure the desired object.</li>
          </ol>

          <div className="ruler-guide-grid">
            <div className="ruler-reference-card">
              <div className="ruler-reference-card-visual">
                <span
                  className="tool-badge"
                  style={{ background: "rgba(255,255,255,0.18)", color: "white" }}
                >
                  Card reference
                </span>
                <p style={{ margin: "20px 0 0", fontWeight: 700 }}>
                  Enter the measured width in centimeters
                </p>
              </div>
            </div>

            <form
              className="tool-form ruler-guide-form"
              onSubmit={(event) => {
                event.preventDefault();
                calibrate();
              }}
            >
              <div className="tool-field">
                <label className="tool-label" htmlFor="ruler-card-width">
                  Enter credit card width (cm)
                </label>
                <input
                  id="ruler-card-width"
                  className="tool-input"
                  inputMode="decimal"
                  placeholder="10.4"
                  value={calibrationInput}
                  onChange={(event) => setCalibrationInput(event.target.value)}
                />
              </div>

              <p className="tool-note">Example: If the width is 10.4 cm, enter 10.4.</p>

              <button className="tool-button" type="submit">
                Calibrate
              </button>

              <button className="tool-button secondary" type="button" onClick={resetCalibration}>
                Reset calibration
              </button>
            </form>
          </div>

          <p className="tool-note">
            Tip: Use the blue handle at the bottom-right corner of the canvas to resize it.
          </p>
        </div>
      </div>
    </div>
  );
}
