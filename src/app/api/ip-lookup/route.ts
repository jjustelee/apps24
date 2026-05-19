import { NextResponse } from "next/server";

export const runtime = "nodejs";

type IpInfoResponse = {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
  timezone?: string;
};

function getIpVersion(ip: string) {
  return ip.includes(":") ? "IPv6" : "IPv4";
}

function normalizeIp(value: string) {
  return value
    .trim()
    .replace(/^::ffff:/, "")
    .replace(/^\[|\]$/g, "");
}

function isPrivateOrLocalIp(ip: string) {
  const normalized = normalizeIp(ip).toLowerCase();

  if (!normalized || normalized === "unknown") return true;
  if (normalized === "::1" || normalized === "localhost") return true;
  if (normalized.startsWith("fc") || normalized.startsWith("fd") || normalized.startsWith("fe80:")) return true;

  const parts = normalized.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return false;

  const [a, b] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168)
  );
}

function getClientIp(request: Request) {
  const headers = request.headers;
  const candidates = [
    headers.get("x-vercel-forwarded-for"),
    headers.get("x-forwarded-for"),
    headers.get("x-real-ip"),
    headers.get("cf-connecting-ip"),
    headers.get("true-client-ip"),
  ]
    .flatMap((value) => (value ? value.split(",") : []))
    .map(normalizeIp)
    .filter(Boolean);

  return candidates.find((ip) => !isPrivateOrLocalIp(ip)) ?? candidates[0] ?? "";
}

function getCountryName(countryCode?: string) {
  if (!countryCode) return "";

  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode.toUpperCase()) ?? countryCode;
  } catch {
    return countryCode;
  }
}

function getOrgName(org?: string) {
  return org?.replace(/^AS\d+\s+/i, "").trim() ?? "";
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getPublicIpFallback() {
  const data = await fetchJson<{ ip?: string }>("https://api64.ipify.org?format=json");
  return data.ip ? normalizeIp(data.ip) : "";
}

async function getIpDetails(ip: string) {
  const data = await fetchJson<IpInfoResponse>(`https://ipinfo.io/${encodeURIComponent(ip)}/json`);
  const resolvedIp = normalizeIp(data.ip ?? ip);
  const orgName = getOrgName(data.org);

  if (!resolvedIp) {
    throw new Error("Missing IP address");
  }

  return {
    success: true,
    ip: resolvedIp,
    type: getIpVersion(resolvedIp),
    country: getCountryName(data.country),
    country_code: data.country ?? "",
    region: data.region ?? "",
    city: data.city ?? "",
    connection: {
      org: orgName,
      isp: orgName,
      domain: "",
    },
    timezone: {
      id: data.timezone ?? "",
    },
  };
}

export async function GET(request: Request) {
  try {
    let ip = getClientIp(request);

    if (!ip || isPrivateOrLocalIp(ip)) {
      ip = await getPublicIpFallback();
    }

    if (!ip) {
      throw new Error("Could not resolve public IP");
    }

    const data = await getIpDetails(ip);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "IP 정보를 가져올 수 없습니다.",
      },
      { status: 502 },
    );
  }
}
