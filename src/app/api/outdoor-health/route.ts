import { NextResponse } from "next/server";

export const runtime = "nodejs";

type OpenMeteoAirQualityResponse = {
  latitude?: number;
  longitude?: number;
  timezone?: string;
  current_units?: Record<string, string>;
  current?: {
    time?: string;
    pm10?: number | null;
    pm2_5?: number | null;
    ozone?: number | null;
    uv_index?: number | null;
    grass_pollen?: number | null;
    birch_pollen?: number | null;
    alder_pollen?: number | null;
    mugwort_pollen?: number | null;
    ragweed_pollen?: number | null;
  };
};

const AIR_QUALITY_ENDPOINT = "https://air-quality-api.open-meteo.com/v1/air-quality";
const CURRENT_VARIABLES = [
  "pm10",
  "pm2_5",
  "ozone",
  "uv_index",
  "grass_pollen",
  "birch_pollen",
  "alder_pollen",
  "mugwort_pollen",
  "ragweed_pollen",
].join(",");

function toNumber(value: string | null, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeReading(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = Math.min(90, Math.max(-90, toNumber(searchParams.get("lat"), 37.5665)));
  const longitude = Math.min(180, Math.max(-180, toNumber(searchParams.get("lon"), 126.978)));

  const apiUrl = new URL(AIR_QUALITY_ENDPOINT);
  apiUrl.searchParams.set("latitude", String(latitude));
  apiUrl.searchParams.set("longitude", String(longitude));
  apiUrl.searchParams.set("current", CURRENT_VARIABLES);
  apiUrl.searchParams.set("timezone", "Asia/Seoul");

  try {
    const response = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`Open-Meteo request failed: ${response.status}`);
    }

    const data = (await response.json()) as OpenMeteoAirQualityResponse;
    const current = data.current ?? {};
    const units = data.current_units ?? {};

    return NextResponse.json(
      {
        success: true,
        location: {
          latitude: data.latitude ?? latitude,
          longitude: data.longitude ?? longitude,
          timezone: data.timezone ?? "Asia/Seoul",
        },
        provider: {
          name: "Open-Meteo Air Quality API",
          url: "https://open-meteo.com/en/docs/air-quality-api",
        },
        sourceUpdatedAt: current.time ?? null,
        fetchedAt: new Date().toISOString(),
        readings: {
          pm10: { value: normalizeReading(current.pm10), unit: units.pm10 ?? "μg/m³" },
          pm25: { value: normalizeReading(current.pm2_5), unit: units.pm2_5 ?? "μg/m³" },
          ozone: { value: normalizeReading(current.ozone), unit: units.ozone ?? "μg/m³" },
          uv: { value: normalizeReading(current.uv_index), unit: units.uv_index ?? "" },
          pollen: {
            grass: normalizeReading(current.grass_pollen),
            birch: normalizeReading(current.birch_pollen),
            alder: normalizeReading(current.alder_pollen),
            mugwort: normalizeReading(current.mugwort_pollen),
            ragweed: normalizeReading(current.ragweed_pollen),
            unit: units.grass_pollen ?? "grains/m³",
          },
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "대기 건강 지표를 가져올 수 없습니다.",
      },
      { status: 502 },
    );
  }
}
