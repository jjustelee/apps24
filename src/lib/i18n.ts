import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/site";

export { DEFAULT_LOCALE, LOCALES, isLocale };
export type { Locale };

export function normalizeLocale(value: string | undefined | null): Locale {
  if (value && isLocale(value)) {
    return value;
  }

  return DEFAULT_LOCALE;
}

export function getLocaleName(locale: Locale) {
  switch (locale) {
    case "en":
      return "English";
    case "ko":
      return "한국어";
    case "fr":
      return "Français";
    case "ja":
      return "日本語";
    case "zh":
      return "中文";
    case "zh-TW":
      return "繁體中文";
    case "pt":
      return "Português";
    case "es":
      return "Español";
    case "de":
      return "Deutsch";
    case "ar":
      return "العربية";
    default:
      return locale;
  }
}

