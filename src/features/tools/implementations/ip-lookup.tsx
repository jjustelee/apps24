"use client";

import { useState, useEffect, useCallback } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

/**
 * [백엔드 개발진 참고용 주석]
 * 1. IP 조회 API: 현재 클라이언트에서 무료 공개 API(ipwho.is)를 호출합니다.
 *    이 엔드포인트는 IP, 위치, ISP, 타임존 정보를 한 번에 제공하며 CORS도 허용합니다.
 * 2. VPN 감지: 실제 VPN 감지는 서버 사이드에서 IP reputation DB를 조회해야 정확합니다.
 *    현재는 클라이언트 타임존과 IP 응답 타임존 비교로 추정합니다.
 * 3. 브라우저/OS 정보: navigator.userAgent를 통해 추출하므로 백엔드에서는
 *    요청 헤더의 User-Agent를 파싱하여 동일 정보를 제공할 수 있습니다.
 */

// IP 정보 데이터 타입
interface IpInfo {
  ip: string;
  country: string;
  region: string;
  city: string;
  timezone: string;
  isp: string;
  hostname: string;
  ipv4: string;
  ipv6: string;
}

// 브라우저/OS UA 파싱 함수
function parseBrowser(ua: string): string {
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("OPR") || ua.includes("Opera")) return "Opera";
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  return "Unknown";
}

function parseOS(ua: string): string {
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac OS")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  return "Unknown";
}

function parseDeviceType(ua: string): string {
  if (/Mobi|Android|iPhone/i.test(ua)) return "Mobile";
  if (/iPad|Tablet/i.test(ua)) return "Tablet";
  return "Desktop";
}

// 라벨 번역 맵
function getLabels(locale: string) {
  const isKo = locale === "ko";
  const isJa = locale === "ja";
  
  if (isKo) return {
    connectionInfo: "현재 접속 정보",
    connectionDesc: "페이지에 접속하자마자 확인되는 핵심 정보입니다.",
    currentIp: "현재 IP 주소",
    ipDesc: "연결된 네트워크 기준으로 감지된 공용 IP 주소입니다.",
    quickSummary: "빠른 요약",
    quickSummaryDesc: "핵심 정보를 간단히 정리해서 보여주는 보조 영역입니다.",
    refresh: "새로고침",
    copyIp: "IP 복사",
    copied: "복사됨!",
    country: "국가",
    region: "지역",
    city: "도시",
    timezone: "시간대",
    isp: "ISP",
    hostname: "호스트명",
    ipv4: "IPv4",
    ipv6: "IPv6",
    browser: "브라우저",
    os: "운영체제",
    deviceType: "기기 유형",
    language: "언어",
    locationInfo: "위치 정보",
    networkInfo: "네트워크 정보",
    deviceInfo: "기기 정보",
    secureConnection: "보안 연결",
    vpnNotDetected: "VPN 감지 안 됨",
    vpnDetected: "VPN 감지됨",
    ipv6Available: "IPv6 사용 가능",
    ipv6Unavailable: "IPv6 없음",
    loading: "정보 조회 중...",
    error: "IP 정보를 가져올 수 없습니다.",
    retry: "다시 시도",
  };
  
  if (isJa) return {
    connectionInfo: "現在の接続情報",
    connectionDesc: "ページにアクセスする際にすぐに確認できる重要な情報です。",
    currentIp: "現在のIPアドレス",
    ipDesc: "接続されたネットワークに基づいて検出されたパブリックIPアドレスです。",
    quickSummary: "クイックサマリー",
    quickSummaryDesc: "重要な情報を簡潔にまとめた補助エリアです。",
    refresh: "更新",
    copyIp: "IPコピー",
    copied: "コピー済み！",
    country: "国",
    region: "地域",
    city: "都市",
    timezone: "タイムゾーン",
    isp: "ISP",
    hostname: "ホスト名",
    ipv4: "IPv4",
    ipv6: "IPv6",
    browser: "ブラウザ",
    os: "OS",
    deviceType: "デバイスタイプ",
    language: "言語",
    locationInfo: "位置情報",
    networkInfo: "ネットワーク情報",
    deviceInfo: "デバイス情報",
    secureConnection: "安全な接続",
    vpnNotDetected: "VPN未検出",
    vpnDetected: "VPN検出",
    ipv6Available: "IPv6利用可能",
    ipv6Unavailable: "IPv6なし",
    loading: "情報を取得中...",
    error: "IP情報を取得できません。",
    retry: "再試行",
  };

  // 영어 / 기본
  return {
    connectionInfo: "Connection Info",
    connectionDesc: "Key information detected as soon as you access this page.",
    currentIp: "Your IP Address",
    ipDesc: "Public IP address detected based on your connected network.",
    quickSummary: "Quick Summary",
    quickSummaryDesc: "Key details organized in a simple, glanceable layout.",
    refresh: "Refresh",
    copyIp: "Copy IP",
    copied: "Copied!",
    country: "Country",
    region: "Region",
    city: "City",
    timezone: "Timezone",
    isp: "ISP",
    hostname: "Hostname",
    ipv4: "IPv4",
    ipv6: "IPv6",
    browser: "Browser",
    os: "OS",
    deviceType: "Device Type",
    language: "Language",
    locationInfo: "Location Info",
    networkInfo: "Network Info",
    deviceInfo: "Device Info",
    secureConnection: "Secure Connection",
    vpnNotDetected: "VPN Not Detected",
    vpnDetected: "VPN Detected",
    ipv6Available: "IPv6 Available",
    ipv6Unavailable: "No IPv6",
    loading: "Fetching info...",
    error: "Unable to fetch IP information.",
    retry: "Retry",
  };
}

// 정보 카드 컴포넌트
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      padding: "14px 18px",
      background: "var(--bg)",
      borderRadius: "16px",
      border: "1px solid var(--line)",
    }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--accent)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </div>
      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", wordBreak: "break-all" }}>
        {value || "—"}
      </div>
    </div>
  );
}

// 뱃지 컴포넌트
function Badge({ text, color = "green" }: { text: string; color?: "green" | "red" | "blue" }) {
  const colors = {
    green: { bg: "#dcfce7", text: "#166534", border: "#bbf7d0" },
    red: { bg: "#fef2f2", text: "#991b1b", border: "#fecaca" },
    blue: { bg: "#dbeafe", text: "#1e40af", border: "#bfdbfe" },
  };
  const c = colors[color];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "5px 14px",
      borderRadius: "999px",
      fontSize: "0.75rem",
      fontWeight: 700,
      background: c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      whiteSpace: "nowrap",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.text, display: "inline-block" }} />
      {text}
    </span>
  );
}

export function IpLookupTool({ locale }: ToolRendererProps) {
  const L = getLabels(locale);
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  // 브라우저 정보 (클라이언트에서만 실행)
  const [browserName, setBrowserName] = useState("");
  const [osName, setOsName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [langCode, setLangCode] = useState("");
  const [isSecure, setIsSecure] = useState(false);
  const [vpnSuspected, setVpnSuspected] = useState(false);

  const fetchIp = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/ip-lookup", { cache: "no-store" });
      if (!res.ok) throw new Error("fetch failed");
      const data = await res.json();
      if (!data?.success) throw new Error("ip lookup failed");

      const info: IpInfo = {
        ip: data.ip || "",
        country: data.country || "",
        region: data.region || "",
        city: data.city || "",
        timezone: data.timezone?.id || data.timezone || "",
        isp: data.connection?.isp || data.connection?.org || "",
        hostname: data.connection?.domain || `host-${(data.ip || "").replace(/\./g, "-")}`,
        ipv4: data.type === "IPv4" ? data.ip : "",
        ipv6: data.type === "IPv6" ? data.ip : "",
      };
      setIpInfo(info);

      // VPN 추정: 브라우저 타임존 vs API 타임존
      const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (info.timezone && browserTz && info.timezone !== browserTz) {
        setVpnSuspected(true);
      } else {
        setVpnSuspected(false);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIp();
    // 브라우저 정보 세팅
    const ua = navigator.userAgent;
    setBrowserName(parseBrowser(ua));
    setOsName(parseOS(ua));
    setDeviceType(parseDeviceType(ua));
    setLangCode(navigator.language || "en");
    setIsSecure(window.location.protocol === "https:");
  }, [fetchIp]);

  const handleCopy = () => {
    if (ipInfo?.ip) {
      navigator.clipboard.writeText(ipInfo.ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 로딩 상태
  if (loading) {
    return (
      <div className="tool-stack" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300, gap: 12 }}>
        <div style={{ width: 24, height: 24, border: "3px solid var(--accent)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <span style={{ fontWeight: 700, color: "var(--muted)" }}>{L.loading}</span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // 에러 상태
  if (error || !ipInfo) {
    return (
      <div className="tool-stack" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300, gap: 16 }}>
        <span style={{ fontSize: "2.5rem" }}>⚠️</span>
        <span style={{ fontWeight: 700, color: "var(--muted)" }}>{L.error}</span>
        <button onClick={fetchIp} className="tool-button">{L.retry}</button>
      </div>
    );
  }

  return (
    <div className="tool-stack" style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "100%", overflow: "hidden" }}>

      {/* 상단: 현재 접속 정보 + 빠른 요약 (2열 그리드) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="ip-main-grid">
        <style>{`@media (min-width: 768px) { .ip-main-grid { grid-template-columns: 1.4fr 1fr !important; } }`}</style>

        {/* 좌측: 현재 접속 정보 카드 */}
        <div style={{
          background: "var(--panel-glass)",
          border: "1px solid var(--panel-border)",
          borderRadius: "var(--radius)",
          padding: "clamp(20px, 4vw, 40px)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 6px", color: "var(--text)" }}>{L.connectionInfo}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{L.connectionDesc}</p>
          </div>

          {/* IP 강조 영역 */}
          <div style={{
            background: "var(--bg)",
            borderRadius: "20px",
            border: "1px solid var(--line)",
            padding: "clamp(20px, 3vw, 32px)",
            textAlign: "center",
          }}>
            <div style={{
              display: "inline-block",
              padding: "4px 16px",
              marginBottom: "12px",
              background: "var(--accent-soft)",
              color: "var(--accent)",
              borderRadius: "999px",
              fontSize: "0.7rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}>
              {L.currentIp}
            </div>
            <div style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              wordBreak: "break-all",
            }}>
              {ipInfo.ip}
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: "10px 0 0", lineHeight: 1.5 }}>
              {L.ipDesc}
            </p>
          </div>

          {/* 액션 버튼 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <button onClick={fetchIp} className="tool-button" style={{ padding: "12px 24px", borderRadius: "14px", fontSize: "0.9rem" }}>
              {L.refresh}
            </button>
            <button onClick={handleCopy} style={{
              padding: "12px 24px",
              borderRadius: "14px",
              fontSize: "0.9rem",
              fontWeight: 700,
              background: "var(--panel-glass)",
              color: "var(--text)",
              border: "1px solid var(--panel-border)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}>
              {copied ? L.copied : L.copyIp}
            </button>
          </div>

          {/* 상태 뱃지 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {isSecure && <Badge text={L.secureConnection} color="green" />}
            <Badge text={vpnSuspected ? L.vpnDetected : L.vpnNotDetected} color={vpnSuspected ? "red" : "red"} />
            <Badge text={ipInfo.ipv6 ? L.ipv6Available : L.ipv6Unavailable} color="blue" />
          </div>
        </div>

        {/* 우측: 빠른 요약 카드 */}
        <div style={{
          background: "var(--panel-glass)",
          border: "1px solid var(--panel-border)",
          borderRadius: "var(--radius)",
          padding: "clamp(20px, 4vw, 40px)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 900, margin: "0 0 6px", color: "var(--text)" }}>{L.quickSummary}</h2>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{L.quickSummaryDesc}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
            <InfoCard label={L.country} value={ipInfo.country} />
            <InfoCard label={L.isp} value={ipInfo.isp} />
            <InfoCard label={L.timezone} value={ipInfo.timezone} />
            <InfoCard label={L.browser} value={browserName} />
          </div>
        </div>
      </div>

      {/* 하단: 위치 / 네트워크 / 기기 정보 (3열 그리드) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="ip-detail-grid">
        <style>{`@media (min-width: 768px) { .ip-detail-grid { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>

        {/* 위치 정보 */}
        <div style={{
          background: "var(--panel-glass)",
          border: "1px solid var(--panel-border)",
          borderRadius: "var(--radius)",
          padding: "clamp(20px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 900, margin: 0, color: "var(--text)" }}>{L.locationInfo}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <InfoCard label={L.country} value={ipInfo.country} />
            <InfoCard label={L.region} value={ipInfo.region} />
            <InfoCard label={L.city} value={ipInfo.city} />
            <InfoCard label={L.timezone} value={ipInfo.timezone} />
          </div>
        </div>

        {/* 네트워크 정보 */}
        <div style={{
          background: "var(--panel-glass)",
          border: "1px solid var(--panel-border)",
          borderRadius: "var(--radius)",
          padding: "clamp(20px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 900, margin: 0, color: "var(--text)" }}>{L.networkInfo}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <InfoCard label={L.isp} value={ipInfo.isp} />
            <InfoCard label={L.hostname} value={ipInfo.hostname} />
            <InfoCard label={L.ipv4} value={ipInfo.ipv4} />
            <InfoCard label={L.ipv6} value={ipInfo.ipv6 || "—"} />
          </div>
        </div>

        {/* 기기 정보 */}
        <div style={{
          background: "var(--panel-glass)",
          border: "1px solid var(--panel-border)",
          borderRadius: "var(--radius)",
          padding: "clamp(20px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 900, margin: 0, color: "var(--text)" }}>{L.deviceInfo}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <InfoCard label={L.browser} value={browserName} />
            <InfoCard label={L.os} value={osName} />
            <InfoCard label={L.deviceType} value={deviceType} />
            <InfoCard label={L.language} value={langCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
