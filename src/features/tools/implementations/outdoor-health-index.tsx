"use client";

import { useEffect, useMemo, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

type HealthLevel = "good" | "normal" | "caution" | "bad" | "veryBad" | "unknown";
type MetricKey = "pm25" | "pm10" | "ozone" | "uv" | "pollen";

type OutdoorHealthResponse = {
  success: boolean;
  message?: string;
  provider?: {
    name: string;
    url: string;
  };
  sourceUpdatedAt?: string | null;
  fetchedAt?: string;
  readings?: {
    pm10: Reading;
    pm25: Reading;
    ozone: Reading;
    uv: Reading;
    pollen: {
      grass: number | null;
      birch: number | null;
      alder: number | null;
      mugwort: number | null;
      ragweed: number | null;
      unit: string;
    };
  };
};

type Reading = {
  value: number | null;
  unit: string;
};

type Metric = {
  key: MetricKey;
  title: string;
  label: string;
  valueText: string;
  detail?: string;
  level: HealthLevel;
  source: string;
  tip: string;
};

const LOCATIONS = [
  { name: "서울", lat: 37.5665, lon: 126.978 },
  { name: "부산", lat: 35.1796, lon: 129.0756 },
  { name: "대구", lat: 35.8714, lon: 128.6014 },
  { name: "인천", lat: 37.4563, lon: 126.7052 },
  { name: "광주", lat: 35.1595, lon: 126.8526 },
  { name: "대전", lat: 36.3504, lon: 127.3845 },
  { name: "울산", lat: 35.5384, lon: 129.3114 },
  { name: "세종", lat: 36.4801, lon: 127.289 },
  { name: "경기", lat: 37.2636, lon: 127.0286 },
  { name: "강원", lat: 37.8813, lon: 127.7298 },
  { name: "충북", lat: 36.6424, lon: 127.489 },
  { name: "충남", lat: 36.6016, lon: 126.6608 },
  { name: "전북", lat: 35.8242, lon: 127.148 },
  { name: "전남", lat: 34.8161, lon: 126.463 },
  { name: "경북", lat: 36.5684, lon: 128.7294 },
  { name: "경남", lat: 35.2279, lon: 128.6819 },
  { name: "제주", lat: 33.4996, lon: 126.5312 },
];

const LEVEL_META: Record<HealthLevel, { label: string; rank: number; summary: string }> = {
  good: {
    label: "좋음",
    rank: 1,
    summary: "야외활동에 큰 제약은 없어 보입니다.",
  },
  normal: {
    label: "보통",
    rank: 2,
    summary: "대부분의 활동은 가능하지만 민감군은 몸 상태를 확인하세요.",
  },
  caution: {
    label: "주의",
    rank: 3,
    summary: "장시간 야외활동은 줄이고 보호용품 사용을 고려하세요.",
  },
  bad: {
    label: "나쁨",
    rank: 4,
    summary: "장시간 또는 무리한 야외활동을 줄이는 것을 권장합니다.",
  },
  veryBad: {
    label: "매우 나쁨",
    rank: 5,
    summary: "야외활동은 가능한 짧게 하고 민감군은 실내 활동 위주로 조정하세요.",
  },
  unknown: {
    label: "확인 필요",
    rank: 0,
    summary: "현재 일부 데이터를 확인할 수 없습니다. 공식 예보를 함께 확인하세요.",
  },
};

const METRIC_PRIORITY: MetricKey[] = ["pm25", "pm10", "ozone", "uv", "pollen"];

function classifyPm10(value: number | null): HealthLevel {
  if (value === null) return "unknown";
  if (value <= 30) return "good";
  if (value <= 80) return "normal";
  if (value <= 150) return "bad";
  return "veryBad";
}

function classifyPm25(value: number | null): HealthLevel {
  if (value === null) return "unknown";
  if (value <= 15) return "good";
  if (value <= 35) return "normal";
  if (value <= 75) return "bad";
  return "veryBad";
}

function ozoneUgToPpm(value: number | null) {
  if (value === null) return null;
  return (value * 24.45) / (48 * 1000);
}

function classifyOzone(ugValue: number | null): HealthLevel {
  const ppm = ozoneUgToPpm(ugValue);
  if (ppm === null) return "unknown";
  if (ppm <= 0.03) return "good";
  if (ppm <= 0.09) return "normal";
  if (ppm <= 0.15) return "bad";
  return "veryBad";
}

function classifyUv(value: number | null): HealthLevel {
  if (value === null) return "unknown";
  if (value < 3) return "good";
  if (value < 6) return "normal";
  if (value < 8) return "caution";
  if (value < 11) return "bad";
  return "veryBad";
}

function classifyPollen(value: number | null): HealthLevel {
  if (value === null) return "unknown";
  if (value <= 0) return "good";
  if (value <= 20) return "normal";
  if (value <= 100) return "bad";
  return "veryBad";
}

function formatDateTime(value?: string | null) {
  if (!value) return "확인 불가";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value.replace("T", " ");
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul",
  }).format(date);
}

function numberText(value: number | null, digits = 1) {
  return value === null ? "확인 불가" : value.toFixed(digits).replace(/\.0$/, "");
}

function getPollenMax(readings: OutdoorHealthResponse["readings"]) {
  if (!readings) return null;
  const values = [
    readings.pollen.grass,
    readings.pollen.birch,
    readings.pollen.alder,
    readings.pollen.mugwort,
    readings.pollen.ragweed,
  ].filter((value): value is number => typeof value === "number");

  return values.length ? Math.max(...values) : null;
}

function buildMetrics(data: OutdoorHealthResponse | null): Metric[] {
  const readings = data?.readings;
  const pm25 = readings?.pm25.value ?? null;
  const pm10 = readings?.pm10.value ?? null;
  const ozoneUg = readings?.ozone.value ?? null;
  const ozonePpm = ozoneUgToPpm(ozoneUg);
  const uv = readings?.uv.value ?? null;
  const pollenMax = getPollenMax(readings);

  return [
    {
      key: "pm25",
      title: "초미세먼지",
      label: "PM2.5",
      valueText: `${numberText(pm25)} ${readings?.pm25.unit ?? "μg/m³"}`,
      level: classifyPm25(pm25),
      source: "해석 기준: AirKorea 통합대기환경지수",
      tip:
        classifyPm25(pm25) === "bad" || classifyPm25(pm25) === "veryBad"
          ? "장시간 야외활동과 격한 운동은 줄이고, 필요 시 보건용 마스크 착용을 고려하세요."
          : "민감군은 기침, 목 불편감 등 몸 상태를 확인하며 활동하세요.",
    },
    {
      key: "pm10",
      title: "미세먼지",
      label: "PM10",
      valueText: `${numberText(pm10)} ${readings?.pm10.unit ?? "μg/m³"}`,
      level: classifyPm10(pm10),
      source: "해석 기준: AirKorea 통합대기환경지수",
      tip:
        classifyPm10(pm10) === "bad" || classifyPm10(pm10) === "veryBad"
          ? "도로변·공사장 주변을 피하고, 장시간 또는 무리한 야외활동을 줄이는 것을 권장합니다."
          : "일반적인 활동은 가능하지만 민감군은 몸 상태에 따라 활동량을 조절하세요.",
    },
    {
      key: "ozone",
      title: "오존",
      label: "O3",
      valueText: ozonePpm === null ? "확인 불가" : `${ozonePpm.toFixed(3)} ppm`,
      detail: ozoneUg === null ? undefined : `제공값 ${numberText(ozoneUg)} ${readings?.ozone.unit ?? "μg/m³"} 환산`,
      level: classifyOzone(ozoneUg),
      source: "해석 기준: AirKorea 통합대기환경지수",
      tip:
        classifyOzone(ozoneUg) === "bad" || classifyOzone(ozoneUg) === "veryBad"
          ? "한낮 장시간 야외활동을 줄이고, 눈 따가움이나 호흡 불편이 있으면 실내에서 쉬세요."
          : "한낮과 오후 시간대에는 상태 변화를 확인하세요.",
    },
    {
      key: "uv",
      title: "자외선",
      label: "UV",
      valueText: numberText(uv, 1),
      level: classifyUv(uv),
      source: "해석 기준: 기상청 생활기상지수",
      tip:
        classifyUv(uv) === "caution" || classifyUv(uv) === "bad" || classifyUv(uv) === "veryBad"
          ? "한낮에는 그늘을 이용하고 자외선 차단제, 모자, 선글라스 사용을 권장합니다."
          : "장시간 외출 시 자외선 차단제와 모자 사용을 고려하세요.",
    },
    {
      key: "pollen",
      title: "꽃가루",
      label: "Pollen",
      valueText: pollenMax === null ? "확인 불가" : `${numberText(pollenMax)} ${readings?.pollen.unit ?? "grains/m³"}`,
      detail: pollenMax === null ? "현재 제공원에서 한국 지역 꽃가루 값이 제공되지 않을 수 있습니다." : "제공원 꽃가루 예보값 기준",
      level: classifyPollen(pollenMax),
      source: "참고 기준: 기상청 꽃가루농도위험지수",
      tip:
        pollenMax === null
          ? "꽃가루 알레르기가 있다면 기상청 꽃가루 예보와 개인 증상을 함께 확인하세요."
          : "알레르기 민감군은 야외활동 후 손과 얼굴을 씻고, 필요 시 마스크나 선글라스 사용을 고려하세요.",
    },
  ];
}

function getOverallLevel(metrics: Metric[]) {
  const available = metrics.filter((metric) => metric.level !== "unknown");
  if (!available.length) return "unknown";

  return available.reduce((highest, metric) =>
    LEVEL_META[metric.level].rank > LEVEL_META[highest].rank ? metric.level : highest,
  available[0].level);
}

function getMainCauses(metrics: Metric[], overallLevel: HealthLevel) {
  if (overallLevel === "unknown") return [];

  return [...metrics]
    .filter((metric) => metric.level !== "unknown" && LEVEL_META[metric.level].rank >= Math.max(2, LEVEL_META[overallLevel].rank))
    .sort((a, b) => {
      const rankDiff = LEVEL_META[b.level].rank - LEVEL_META[a.level].rank;
      if (rankDiff !== 0) return rankDiff;
      return METRIC_PRIORITY.indexOf(a.key) - METRIC_PRIORITY.indexOf(b.key);
    })
    .slice(0, 3);
}

export function OutdoorHealthIndexTool({ toolText }: ToolRendererProps) {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [data, setData] = useState<OutdoorHealthResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setIsLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          lat: String(selectedLocation.lat),
          lon: String(selectedLocation.lon),
        });
        const response = await fetch(`/api/outdoor-health?${params}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        const result = (await response.json()) as OutdoorHealthResponse;

        if (!response.ok || !result.success) {
          throw new Error(result.message ?? "데이터를 불러오지 못했습니다.");
        }

        setData(result);
      } catch (loadError) {
        if ((loadError as Error).name !== "AbortError") {
          setError("현재 대기 건강 지표를 불러오지 못했습니다. 잠시 후 다시 시도하세요.");
          setData(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadData();
    return () => controller.abort();
  }, [selectedLocation]);

  const metrics = useMemo(() => buildMetrics(data), [data]);
  const overallLevel = getOverallLevel(metrics);
  const overall = LEVEL_META[overallLevel];
  const causes = getMainCauses(metrics, overallLevel);

  return (
    <div className="outdoor-health">
      <section className="outdoor-health-hero" aria-label="외출 건강 지수 요약">
        <div>
          <span className="outdoor-health-kicker">대기 건강 체크</span>
          <h2>{toolText?.title ?? "외출 건강 지수"}</h2>
          <p>
            미세먼지, 초미세먼지, 오존, 자외선, 꽃가루 지표를 한 화면에서 확인하고 외출 전 참고할 수
            있는 생활 팁을 제공합니다.
          </p>
        </div>
        <label className="outdoor-location-select">
          <span>지역 선택</span>
          <select
            value={selectedLocation.name}
            onChange={(event) => {
              const nextLocation = LOCATIONS.find((location) => location.name === event.target.value);
              if (nextLocation) setSelectedLocation(nextLocation);
            }}
          >
            {LOCATIONS.map((location) => (
              <option key={location.name} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </label>
      </section>

      {error ? (
        <div className="outdoor-health-error" role="status">
          {error}
        </div>
      ) : null}

      <div className="outdoor-health-grid" aria-busy={isLoading}>
        <section className={`outdoor-status-card level-${overallLevel}`}>
          <div className="outdoor-status-topline">
            <span>종합 외출 상태</span>
            <strong>{selectedLocation.name}</strong>
          </div>
          <div className="outdoor-status-main">
            <span>{overall.label}</span>
            <p>{isLoading ? "지표를 불러오는 중입니다." : overall.summary}</p>
          </div>
          <div className="outdoor-update-box">
            <span>업데이트</span>
            <strong>{isLoading ? "조회 중" : `${formatDateTime(data?.sourceUpdatedAt)} 기준`}</strong>
            <small>일부 지표는 관측값이 아닌 예보값이며, 제공 기관의 갱신 주기에 따라 달라질 수 있습니다.</small>
          </div>
          <div className="outdoor-cause-list" aria-label="주요 영향 지표">
            {causes.length ? (
              causes.map((metric) => (
                <span key={metric.key}>
                  {metric.title} {LEVEL_META[metric.level].label}
                </span>
              ))
            ) : (
              <span>주요 영향 지표 확인 중</span>
            )}
          </div>
        </section>

        <section className="outdoor-metric-panel" aria-label="지표별 결과">
          <div className="outdoor-metric-panel-heading">
            <span>실시간 지표 대시보드</span>
            <strong>{isLoading ? "조회 중" : `${metrics.filter((metric) => metric.level !== "unknown").length}개 지표 확인`}</strong>
          </div>
          {metrics.map((metric) => (
            <article key={metric.key} className={`outdoor-metric-card level-${metric.level}`}>
              <div className="outdoor-metric-title">
                <span className="outdoor-metric-label">{metric.label}</span>
                <h3>{metric.title}</h3>
              </div>
              <div className="outdoor-metric-value">
                <strong>{isLoading ? "조회 중" : metric.valueText}</strong>
                {metric.detail ? <small>{metric.detail}</small> : null}
              </div>
              <div className="outdoor-metric-status">
                <span aria-hidden="true" />
                <strong>{LEVEL_META[metric.level].label}</strong>
              </div>
              <p className="outdoor-metric-tip">{metric.tip}</p>
              <small>{metric.source}</small>
            </article>
          ))}
        </section>
      </div>

      <section className="outdoor-info-section" aria-label="외출 전 확인하면 좋은 대기 건강 지표">
        <div className="outdoor-section-heading">
          <span>정보 안내</span>
          <h2>외출 전 확인하면 좋은 대기·건강 지표</h2>
          <p>
            같은 수치라도 개인 건강 상태와 활동 시간에 따라 체감 영향이 달라질 수 있습니다. 아래 설명은 각
            지표를 이해하는 데 도움을 주기 위한 생활 참고 정보입니다.
          </p>
        </div>

        <div className="outdoor-info-grid">
          <article>
            <h3>초미세먼지 PM2.5</h3>
            <p>입자가 매우 작아 민감군에게 부담이 될 수 있습니다. 나쁨 이상일 때는 장시간 야외운동을 줄이는 것이 좋습니다.</p>
          </article>
          <article>
            <h3>미세먼지 PM10</h3>
            <p>도로변, 공사장, 건조한 날씨에 영향을 받을 수 있습니다. 외출 후 손과 얼굴을 씻고 실내 유입을 줄이세요.</p>
          </article>
          <article>
            <h3>오존 O3</h3>
            <p>햇빛이 강한 낮 시간대에 높아질 수 있습니다. 눈 따가움이나 호흡 불편이 있으면 활동 강도를 낮추세요.</p>
          </article>
          <article>
            <h3>자외선 UV</h3>
            <p>높음 이상에서는 자외선 차단제, 모자, 선글라스처럼 노출을 줄이는 준비가 도움이 됩니다.</p>
          </article>
          <article>
            <h3>꽃가루</h3>
            <p>알레르기 민감군은 수치가 낮아도 증상이 생길 수 있습니다. 예보와 개인 증상을 함께 확인하는 것이 안전합니다.</p>
          </article>
        </div>
      </section>

      <section className="outdoor-source-section" aria-label="참고 기준 및 출처">
        <h2>참고 기준 및 출처</h2>
        <div className="outdoor-source-grid">
          <a href="https://m.airkorea.or.kr/info/cai" target="_blank" rel="noreferrer">
            AirKorea 통합대기환경지수
          </a>
          <a href="https://www.weather.go.kr/w/forecast/life/index-info.do" target="_blank" rel="noreferrer">
            기상청 생활기상지수
          </a>
          <a href="https://www.data.go.kr/data/15085289/openapi.do" target="_blank" rel="noreferrer">
            기상청 꽃가루농도위험지수 API
          </a>
          <a href={data?.provider?.url ?? "https://open-meteo.com/en/docs/air-quality-api"} target="_blank" rel="noreferrer">
            데이터 제공원: {data?.provider?.name ?? "Open-Meteo Air Quality API"}
          </a>
        </div>
        <p>
          이 정보는 공식 대기질·생활기상 지표를 바탕으로 한 생활 참고용 안내입니다. 개인의 건강 상태,
          질환, 의학적 판단을 대체하지 않습니다. 증상이 있거나 민감군에 해당하는 경우 전문가의 조언을
          따르세요.
        </p>
      </section>
    </div>
  );
}
