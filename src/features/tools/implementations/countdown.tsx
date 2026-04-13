"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const NIGHT_MODE_KEY = "apps24.countdown.nightMode";
const BEEP_FREQUENCY = 880;
const BEEP_DURATION_MS = 450;

type CountdownStatus = "idle" | "running" | "paused" | "complete";
type TimePart = "hours" | "minutes" | "seconds";

function clampTimePart(value: string, max: number) {
  const numeric = Number.parseInt(value, 10);
  if (Number.isNaN(numeric)) {
    return 0;
  }

  return Math.min(Math.max(numeric, 0), max);
}

function formatPart(value: number) {
  return value.toString().padStart(2, "0");
}

function formatDuration(totalSeconds: number) {
  const safeSeconds = Math.max(0, totalSeconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  return `${formatPart(hours)}:${formatPart(minutes)}:${formatPart(seconds)}`;
}

function playCompletionBeep() {
  const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = BEEP_FREQUENCY;
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + BEEP_DURATION_MS / 1000);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + BEEP_DURATION_MS / 1000);
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

export function CountdownTool(props: ToolRendererProps) {
  void props;

  const containerRef = useRef<HTMLDivElement>(null);
  const targetTimeRef = useRef<number | null>(null);
  const pausedSecondsRef = useRef(0);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [status, setStatus] = useState<CountdownStatus>("idle");
  const [nightMode, setNightMode] = useState(false);
  const [nightModeLoaded, setNightModeLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setNightMode(window.localStorage.getItem(NIGHT_MODE_KEY) === "true");
      setNightModeLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (nightModeLoaded) {
      window.localStorage.setItem(NIGHT_MODE_KEY, String(nightMode));
    }
  }, [nightMode, nightModeLoaded]);

  useEffect(() => {
    if (status !== "running") {
      return;
    }

    const timer = window.setInterval(() => {
      if (!targetTimeRef.current) {
        return;
      }

      const nextSeconds = Math.max(0, Math.ceil((targetTimeRef.current - Date.now()) / 1000));
      setRemainingSeconds(nextSeconds);

      if (nextSeconds === 0) {
        window.clearInterval(timer);
        targetTimeRef.current = null;
        pausedSecondsRef.current = 0;
        setStatus("complete");
        playCompletionBeep();
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, [status]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function getInputSeconds() {
    return (
      clampTimePart(hours, 99) * 3600 +
      clampTimePart(minutes, 59) * 60 +
      clampTimePart(seconds, 59)
    );
  }

  function syncInputFromSeconds(totalSeconds: number) {
    const nextHours = Math.floor(totalSeconds / 3600);
    const nextMinutes = Math.floor((totalSeconds % 3600) / 60);
    const nextSeconds = totalSeconds % 60;

    setHours(formatPart(nextHours));
    setMinutes(formatPart(nextMinutes));
    setSeconds(formatPart(nextSeconds));
  }

  function startOrResume() {
    const duration = status === "paused" ? pausedSecondsRef.current : getInputSeconds();
    if (duration <= 0) {
      setRemainingSeconds(0);
      setStatus("complete");
      playCompletionBeep();
      return;
    }

    setRemainingSeconds(duration);
    targetTimeRef.current = Date.now() + duration * 1000;
    pausedSecondsRef.current = duration;
    setStatus("running");
  }

  function pause() {
    if (status !== "running") {
      return;
    }

    pausedSecondsRef.current = remainingSeconds;
    targetTimeRef.current = null;
    setStatus("paused");
  }

  function reset() {
    const duration = getInputSeconds();
    targetTimeRef.current = null;
    pausedSecondsRef.current = duration;
    setRemainingSeconds(duration);
    setStatus("idle");
  }

  function handlePartChange(part: TimePart, nextValue: string, max: number) {
    const sanitized = nextValue.replace(/\D/g, "").slice(0, 2);
    const clamped = sanitized === "" ? "" : String(clampTimePart(sanitized, max)).padStart(2, "0");

    if (part === "hours") {
      setHours(clamped);
    } else if (part === "minutes") {
      setMinutes(clamped);
    } else {
      setSeconds(clamped);
    }

    const nextHours = part === "hours" ? clamped : hours;
    const nextMinutes = part === "minutes" ? clamped : minutes;
    const nextSeconds = part === "seconds" ? clamped : seconds;
    const nextTotal =
      clampTimePart(nextHours, 99) * 3600 +
      clampTimePart(nextMinutes, 59) * 60 +
      clampTimePart(nextSeconds, 59);

    if (status !== "running") {
      pausedSecondsRef.current = nextTotal;
      setRemainingSeconds(nextTotal);
      if (status === "complete") {
        setStatus("idle");
      }
    }
  }

  function handleBlur() {
    const duration = getInputSeconds();
    syncInputFromSeconds(duration);
    if (status !== "running") {
      pausedSecondsRef.current = duration;
      setRemainingSeconds(duration);
    }
  }

  const isRunning = status === "running";
  const displayStatus =
    status === "complete"
      ? "Complete"
      : status === "running"
        ? "Running"
        : status === "paused"
          ? "Paused"
          : "Ready";

  return (
    <div
      ref={containerRef}
      className="tool-stack"
      style={{
        background: nightMode ? "#0f172a" : "transparent",
        color: nightMode ? "#f8fafc" : "inherit",
        borderRadius: 18,
        padding: nightMode ? "1rem" : 0,
      }}
    >
      <div className="tool-form">
        <div className="tool-stat" aria-live="polite" style={{ textAlign: "center" }}>
          <strong style={{ fontSize: "clamp(3rem, 12vw, 7rem)", fontVariantNumeric: "tabular-nums" }}>
            {formatDuration(remainingSeconds)}
          </strong>
          <span>{displayStatus}</span>
        </div>

        <div className="tool-stat-grid">
          <label className="tool-field">
            <span className="tool-label">Hours</span>
            <input
              className="tool-input"
              inputMode="numeric"
              value={hours}
              disabled={isRunning}
              onBlur={handleBlur}
              onChange={(event) => handlePartChange("hours", event.target.value, 99)}
            />
          </label>
          <label className="tool-field">
            <span className="tool-label">Minutes</span>
            <input
              className="tool-input"
              inputMode="numeric"
              value={minutes}
              disabled={isRunning}
              onBlur={handleBlur}
              onChange={(event) => handlePartChange("minutes", event.target.value, 59)}
            />
          </label>
          <label className="tool-field">
            <span className="tool-label">Seconds</span>
            <input
              className="tool-input"
              inputMode="numeric"
              value={seconds}
              disabled={isRunning}
              onBlur={handleBlur}
              onChange={(event) => handlePartChange("seconds", event.target.value, 59)}
            />
          </label>
        </div>

        <div className="tool-actions">
          {isRunning ? (
            <button className="tool-button" type="button" onClick={pause}>
              Pause
            </button>
          ) : (
            <button className="tool-button" type="button" onClick={startOrResume}>
              {status === "paused" ? "Resume" : "Start"}
            </button>
          )}
          <button className="tool-button secondary" type="button" onClick={reset}>
            Reset
          </button>
          <button
            className="tool-button secondary"
            type="button"
            onClick={() => setNightMode((current) => !current)}
          >
            {nightMode ? "Day Mode" : "Night Mode"}
          </button>
          <button
            className="tool-button secondary"
            type="button"
            onClick={() => toggleFullscreen(containerRef.current)}
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>

        <p className="tool-note">
          Set hours, minutes, and seconds, then start the timer. Night mode is saved on this
          device.
        </p>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
