import { LOCALES, type Locale, getLocalizedUrl } from "@/lib/site";

export function buildLocaleAlternates(locale: Locale, path = "", locales: readonly Locale[] = LOCALES) {
  const availableLocales = locales.length ? locales : [locale];
  const defaultLocale = availableLocales.includes("en")
    ? "en"
    : availableLocales.includes(locale)
      ? locale
      : availableLocales[0];

  return {
    canonical: getLocalizedUrl(locale, path),
    languages: {
      ...Object.fromEntries(
        availableLocales.map((candidate) => [candidate, getLocalizedUrl(candidate, path)]),
      ),
      "x-default": getLocalizedUrl(defaultLocale, path),
    },
  };
}
