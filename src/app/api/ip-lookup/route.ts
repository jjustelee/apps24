import { NextResponse } from "next/server";
import { getPublicClientIp, isPublicIp, normalizeIp } from "@/lib/ip-address";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const requested = new URL(request.url).searchParams.get("ip");
  const ip = requested === null ? getPublicClientIp(request.headers) : normalizeIp(requested);
  const headers = { "Cache-Control": "no-store" };

  if (!isPublicIp(ip)) {
    // A server-side IP lookup would report the hosting server, not the visitor.
    return NextResponse.json({ success: false, message: "Public client IP unavailable" }, { status: 422, headers });
  }

  let details: { country?: string; city?: string; region?: string; org?: string; timezone?: string } = {};
  try {
    const response = await fetch(`https://ipinfo.io/${encodeURIComponent(ip)}/json`, {
      cache: "no-store", headers: { Accept: "application/json" }, signal: AbortSignal.timeout(8000),
    });
    if (response.ok) {
      const result = await response.json();
      if (result && typeof result === "object" && !Array.isArray(result)) details = result;
    }
  } catch { /* The observed IP remains useful when geolocation is unavailable. */ }
  const field = (value: unknown) => typeof value === "string" ? value : "";

  return NextResponse.json({
    success: true,
    ip,
    type: ip.includes(":") ? "IPv6" : "IPv4",
    country_code: field(details.country),
    region: field(details.region),
    city: field(details.city),
    connection: { isp: field(details.org).replace(/^AS\d+\s+/i, "") },
    timezone: { id: field(details.timezone) },
  }, { headers });
}
