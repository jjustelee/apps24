export const ANALYTICS_CONSENT_KEY = "apps24-analytics-consent-v1";
export const ANALYTICS_CONSENT_EVENT = "apps24-analytics-consent-change";
export type AnalyticsConsent = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function getGa4MeasurementId() {
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
  return process.env.NEXT_PUBLIC_GA4_ENABLED === "true" && id && /^G-[A-Z0-9]+$/.test(id) ? id : null;
}

export function buildAnalyticsPage(path: string, origin: string, referrer: string, allowedPaths: readonly string[]) {
  const url = new URL(path, origin);
  if (url.origin !== new URL(origin).origin || !allowedPaths.includes(url.pathname)) return null;
  let safeReferrer = "";
  if (referrer) {
    try {
      const previous = new URL(referrer);
      if (previous.protocol === "https:" || previous.protocol === "http:") {
        safeReferrer = previous.origin;
        if (previous.origin === url.origin && allowedPaths.includes(previous.pathname)) safeReferrer += previous.pathname;
      }
    } catch { /* Invalid referrers are omitted. */ }
  }
  // Only published routes are measured; neither query values nor dynamic titles leave the browser.
  return { page_location: url.origin + url.pathname, page_title: url.pathname, page_referrer: safeReferrer };
}

let sessionConsent: AnalyticsConsent = null;

export function readAnalyticsConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : sessionConsent;
  } catch { return sessionConsent; }
}

function stopAnalytics(id: string) {
  window[`ga-disable-${id}`] = true;
  const names = ["_ga", `_ga_${id.slice(2)}`];
  const domains = new Set([window.location.hostname, window.location.hostname.replace(/^www\./, "")]);
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/`;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}`;
  }
}

export function saveAnalyticsConsent(consent: Exclude<AnalyticsConsent, null>, id: string) {
  if (consent === "denied") stopAnalytics(id);
  sessionConsent = null;
  try { window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent); } catch { sessionConsent = consent; }
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT));
}

export function subscribeAnalyticsConsent(listener: () => void, id: string) {
  const notify = () => {
    if (readAnalyticsConsent() !== "granted") stopAnalytics(id);
    listener();
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === ANALYTICS_CONSENT_KEY || event.key === null) {
      sessionConsent = null;
      notify();
    }
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(ANALYTICS_CONSENT_EVENT, notify);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(ANALYTICS_CONSENT_EVENT, notify);
  };
}

export function initializeAnalytics(id: string) {
  window[`ga-disable-${id}`] = false;
  if (!window.gtag) {
    window.dataLayer ??= [];
    // Google tag commands use an Arguments object, not a normal array.
    // eslint-disable-next-line prefer-rest-params
    window.gtag = function() { window.dataLayer!.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    });
    window.gtag("js", new Date());
  }
  window.gtag("consent", "update", {
    analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
}

export const GA4_PAGE_CONFIG = {
  send_page_view: false,
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
};

export function sendAnalyticsPageView(id: string, page: NonNullable<ReturnType<typeof buildAnalyticsPage>>) {
  if (readAnalyticsConsent() !== "granted" || window[`ga-disable-${id}`] || !window.gtag) return false;
  window.gtag("config", id, { ...GA4_PAGE_CONFIG, ...page });
  window.gtag("event", "page_view", { send_to: id, ...page });
  return true;
}
