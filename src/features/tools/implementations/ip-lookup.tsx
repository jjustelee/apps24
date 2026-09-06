"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { IP_COPY } from "@/features/tools/ip-copy";

type IpInfo = {
  ip: string;
  type: string;
  country_code?: string;
  region?: string;
  city?: string;
  timezone?: { id?: string };
  connection?: { isp?: string };
};

export function IpLookupTool({ locale }: ToolRendererProps) {
  const copy = IP_COPY[locale];
  const [info, setInfo] = useState<IpInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [revision, setRevision] = useState(0);
  const [device, setDevice] = useState({ browser: "", os: "", kind: "", language: "", protocol: "" });
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const tablet = /iPad|Tablet/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    const android = /Android/.test(ua);
    setDevice({
      browser: /Edg/.test(ua) ? "Edge" : /OPR|Opera/.test(ua) ? "Opera" : /Firefox|FxiOS/.test(ua) ? "Firefox" : /Chrome|CriOS/.test(ua) ? "Chrome" : /Safari/.test(ua) ? "Safari" : "",
      os: /iPhone|iPad/.test(ua) || tablet && /Macintosh/.test(ua) ? "iOS / iPadOS" : android ? "Android" : /Windows/.test(ua) ? "Windows" : /Mac OS/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "",
      kind: tablet || android && !/Mobile/.test(ua) ? "tablet" : /Mobi|iPhone|Android/i.test(ua) ? "mobile" : "desktop",
      language: navigator.language,
      protocol: location.protocol.replace(":", "").toUpperCase(),
    });
    return () => { if (copiedTimer.current) clearTimeout(copiedTimer.current); };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]);
    const load = async () => {
      setLoading(true);
      setError(false);
      setCopied(false);
      try {
        let response = await fetch("/api/ip-lookup", { cache: "no-store", signal });
        if (response.status === 422) {
          const direct = await fetch("https://api64.ipify.org?format=json", { cache: "no-store", signal });
          if (!direct.ok) throw new Error("IP lookup unavailable");
          const data = await direct.json();
          if (typeof data.ip !== "string" || !data.ip) throw new Error("Missing IP");
          response = await fetch(`/api/ip-lookup?ip=${encodeURIComponent(data.ip)}`, { cache: "no-store", signal });
        }
        if (!response.ok) throw new Error("IP lookup unavailable");
        const data = await response.json();
        if (!data.success || typeof data.ip !== "string" || !data.ip) throw new Error("Missing IP");
        if (!controller.signal.aborted) setInfo(data);
      } catch {
        if (!controller.signal.aborted) { setInfo(null); setError(true); }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    void load();
    return () => controller.abort();
  }, [revision]);

  let country = info?.country_code || "";
  if (country) {
    try { country = new Intl.DisplayNames([locale], { type: "region" }).of(country) || country; } catch { /* Show code if unrecognized. */ }
  }
  const rows = [
    [copy.country, country], [copy.region, info?.region], [copy.city, info?.city],
    [copy.timezone, info?.timezone?.id], [copy.isp, info?.connection?.isp],
    [copy.browser, device.browser], [copy.os, device.os],
    [copy.device, device.kind === "mobile" ? copy.mobile : device.kind === "tablet" ? copy.tablet : device.kind ? copy.desktop : ""],
    [copy.language, device.language], [copy.protocol, device.protocol],
  ];
  const handleCopy = async () => {
    if (!info) return;
    try {
      await navigator.clipboard.writeText(info.ip);
      setCopied(true);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  };

  return (
    <div className="tool-stack">
      <section className="ip-summary">
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        {loading ? <p role="status">{copy.loading}</p> : error ? <p role="alert">{copy.error}</p> : (
          <p className="ip-address" dir="ltr">{info?.ip} <small>{info?.type}</small></p>
        )}
        <div className="tool-actions">
          <button type="button" className="tool-button" disabled={loading} onClick={() => setRevision(value => value + 1)}>{copy.refresh}</button>
          <button type="button" className="tool-button secondary" disabled={loading || !info} onClick={handleCopy}>{copied ? copy.copied : copy.copy}</button>
        </div>
      </section>
      {info && !loading && <section aria-label={copy.details}>
        <h2>{copy.details}</h2>
        <dl className="ip-details">{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || copy.unavailable}</dd></div>)}</dl>
      </section>}
      <p className="tool-note">{copy.locationNote}</p>
      <p className="tool-note">{copy.vpnNote}</p>
      <p className="tool-note">{copy.source}</p>
      <style jsx>{`
        .ip-summary { padding: clamp(1rem, 4vw, 2rem); border: 1px solid var(--line); border-radius: 16px; background: var(--surface-soft); }
        .ip-summary p { line-height: 1.7; }
        .ip-address { font-size: clamp(1.25rem, 4vw, 2rem); overflow-wrap: anywhere; font-weight: 800; }
        .ip-address small { font-size: .85rem; white-space: nowrap; }
        .ip-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 1rem; }
        .ip-details div { padding: 1rem; border: 1px solid var(--line); border-radius: 12px; min-width: 0; }
        dt { color: var(--muted); font-size: .9rem; margin-bottom: .5rem; }
        dd { margin: 0; font-weight: 600; overflow-wrap: anywhere; }
      `}</style>
    </div>
  );
}
