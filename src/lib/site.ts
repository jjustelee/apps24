export const SITE_NAME = "apps24";

export const DEFAULT_LOCALE = "en";

export const LOCALES = [
  "en",
  "ko",
  "fr",
  "ja",
  "zh",
  "zh-TW",
  "pt",
  "es",
  "de",
  "ar",
] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl;

  // Fallback to production domain to avoid Vercel preview/deployment URLs in Sitemap
  return process.env.NODE_ENV === "production" 
    ? "https://www.apps24.io" 
    : "http://localhost:3000";
}

export function getLocalizedPath(locale: Locale, path = "") {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${path ? suffix : ""}`;
}

export function getLocalizedUrl(locale: Locale, path = "") {
  return `${getSiteUrl()}${getLocalizedPath(locale, path)}`;
}

