import type { Locale } from "@/lib/site";
import type { DeepBlock, DeepContent } from "./types";
import { DEEP_EN } from "./en";
import { DEEP_KO } from "./ko";
import { DEEP_FR } from "./fr";
import { DEEP_DE } from "./de";
import { DEEP_ES } from "./es";
import { DEEP_PT } from "./pt";
import { DEEP_JA } from "./ja";
import { DEEP_ZH } from "./zh";
import { DEEP_ZH_TW } from "./zh-tw";
import { DEEP_AR } from "./ar";

const CONTENT: Record<Locale, DeepContent> = {
  en: DEEP_EN, ko: DEEP_KO, fr: DEEP_FR, de: DEEP_DE, es: DEEP_ES, pt: DEEP_PT,
  ja: DEEP_JA, zh: DEEP_ZH, "zh-TW": DEEP_ZH_TW, ar: DEEP_AR,
};

/** Sections written and checked for a locale only; other locales show none rather than untranslated text. */
export function getDeepContent(locale: Locale, toolId: string): DeepBlock[] {
  return CONTENT[locale]?.[toolId] ?? [];
}
