import { LOCALES, type Locale, getLocalizedUrl } from "@/lib/site";

export function buildLocaleAlternates(locale: Locale, path = "") {
  return {
    canonical: getLocalizedUrl(locale, path),
    languages: Object.fromEntries(
      LOCALES.map((candidate) => [candidate, getLocalizedUrl(candidate, path)]),
    ),
  };
}

