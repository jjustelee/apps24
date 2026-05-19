import { LOCALES, type Locale, getLocalizedUrl } from "@/lib/site";

export function buildLocaleAlternates(locale: Locale, path = "", locales: readonly Locale[] = LOCALES) {
  return {
    canonical: getLocalizedUrl(locale, path),
    languages: {
      ...Object.fromEntries(
        locales.map((candidate) => [candidate, getLocalizedUrl(candidate, path)]),
      ),
      "x-default": getLocalizedUrl(locale, path),
    },
  };
}
