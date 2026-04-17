"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

const NIGHT_MODE_KEY = "apps24.countdown.nightMode";
const HOURS_KEY = "apps24.countdown.hours";
const MINUTES_KEY = "apps24.countdown.minutes";
const SECONDS_KEY = "apps24.countdown.seconds";
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

export function CountdownTool({ commonText: common }: ToolRendererProps) {
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
      
      const savedH = window.localStorage.getItem(HOURS_KEY);
      const savedM = window.localStorage.getItem(MINUTES_KEY);
      const savedS = window.localStorage.getItem(SECONDS_KEY);
      
      if (savedH !== null) setHours(savedH);
      if (savedM !== null) setMinutes(savedM);
      if (savedS !== null) setSeconds(savedS);
      
      if (savedH || savedM || savedS) {
        const total = clampTimePart(savedH || "00", 99) * 3600 +
                      clampTimePart(savedM || "00", 59) * 60 +
                      clampTimePart(savedS || "00", 59);
        setRemainingSeconds(total);
        pausedSecondsRef.current = total;
      }

      setNightModeLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (nightModeLoaded) {
      window.localStorage.setItem(NIGHT_MODE_KEY, String(nightMode));
      window.localStorage.setItem(HOURS_KEY, hours);
      window.localStorage.setItem(MINUTES_KEY, minutes);
      window.localStorage.setItem(SECONDS_KEY, seconds);
    }
  }, [nightMode, nightModeLoaded, hours, minutes, seconds]);

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
    // 숫자가 아닌 문자는 제거
    const digits = nextValue.replace(/\D/g, "");
    
    // 입력된 숫자의 마지막 2자리를 선택 (기존 00에서 뒤에 숫자를 입력하면 그 숫자가 반영되도록 함)
    // 백엔드 참고: 입력 필드에서는 문자열로 처리하지만, 실제 비즈니스 로직(예: DB 저장) 전에는 
    // 반드시 정수형으로 변환하여 유효성 검사(0~max)를 수행해야 합니다.
    const shortValue = digits.length > 2 ? digits.slice(-2) : digits;
    const clamped = shortValue === "" ? "" : String(clampTimePart(shortValue, max)).padStart(2, "0");

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
      {/* 추후 백엔드와 연동 시 유의사항: 
          서버측에 타이머 시작/종료 시간(Timestamp) 기록 시, 클라이언트와 서버 간의 시간차를 보정(NTP Sync 등)하는 로직이 필요합니다. 
          현재는 100% 클라이언트 브라우저 기반으로 동작합니다. */}
      <div className="tool-form" style={{ position: "relative" }}>
        <div className="tool-stat" aria-live="polite" style={{ 
          textAlign: "center", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: isFullscreen ? "100vh" : "auto" 
        }}>
          <strong style={{ fontSize: isFullscreen ? "20vw" : "clamp(3rem, 12vw, 7rem)", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
            {formatDuration(remainingSeconds)}
          </strong>
          {!isFullscreen && <span style={{ marginTop: "1rem" }}>{displayStatus}</span>}
        </div>

        {isFullscreen && (
           <button
             className="tool-button secondary"
             type="button"
             onClick={() => toggleFullscreen(containerRef.current)}
             style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0, transition: 'opacity 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
             onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
           >
             {common.exitFullscreen}
           </button>
        )}

        {!isFullscreen && (
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
            <label className="tool-field" style={{ flex: "0 1 100px" }}>
              <span style={{ textAlign: "center", fontSize: "0.9rem", fontWeight: 700, opacity: 0.8 }}>Hours</span>
              <input
                className="tool-input"
                style={{ textAlign: "center", fontSize: "1.25rem", padding: "0.5rem" }}
                inputMode="numeric"
                value={hours}
                disabled={isRunning}
                onBlur={handleBlur}
                onChange={(event) => handlePartChange("hours", event.target.value, 99)}
              />
            </label>
            <label className="tool-field" style={{ flex: "0 1 100px" }}>
              <span style={{ textAlign: "center", fontSize: "0.9rem", fontWeight: 700, opacity: 0.8 }}>Minutes</span>
              <input
                className="tool-input"
                style={{ textAlign: "center", fontSize: "1.25rem", padding: "0.5rem" }}
                inputMode="numeric"
                value={minutes}
                disabled={isRunning}
                onBlur={handleBlur}
                onChange={(event) => handlePartChange("minutes", event.target.value, 59)}
              />
            </label>
            <label className="tool-field" style={{ flex: "0 1 100px" }}>
              <span style={{ textAlign: "center", fontSize: "0.9rem", fontWeight: 700, opacity: 0.8 }}>Seconds</span>
              <input
                className="tool-input"
                style={{ textAlign: "center", fontSize: "1.25rem", padding: "0.5rem" }}
                inputMode="numeric"
                value={seconds}
                disabled={isRunning}
                onBlur={handleBlur}
                onChange={(event) => handlePartChange("seconds", event.target.value, 59)}
              />
            </label>
          </div>
        )}

        {!isFullscreen && (
          <div className="tool-actions" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
            {isRunning ? (
              <button className="tool-button" type="button" onClick={pause} style={{ minWidth: "120px" }}>
                Pause
              </button>
            ) : (
              <button className="tool-button" type="button" onClick={startOrResume} style={{ minWidth: "120px" }}>
                {status === "paused" ? "Resume" : "Start"}
              </button>
            )}
            <button className="tool-button secondary" type="button" onClick={reset} style={{ minWidth: "120px" }}>
              Reset
            </button>
            <button
              className="tool-button secondary"
              type="button"
              onClick={() => setNightMode((current) => !current)}
              style={{ minWidth: "120px" }}
            >
              {nightMode ? "Day Mode" : "Night Mode"}
            </button>
            <button
              className="tool-button secondary"
              type="button"
              onClick={() => toggleFullscreen(containerRef.current)}
              style={{ minWidth: "120px" }}
            >
              {common.fullscreen}
            </button>
          </div>
        )}

        {!isFullscreen && (
          <p className="tool-note" style={{ textAlign: "center" }}>
            Set hours, minutes, and seconds, then start the timer. Night mode is saved on this device.
          </p>
        )}
      </div>
    </div>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
