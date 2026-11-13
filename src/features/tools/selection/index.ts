import type { Locale } from "@/lib/site";
import { SELECTION_EN } from "./en";
import { SELECTION_KO } from "./ko";
import { SELECTION_FR } from "./fr";
import { SELECTION_DE } from "./de";
import { SELECTION_ES } from "./es";
import { SELECTION_PT } from "./pt";
import { SELECTION_JA } from "./ja";
import { SELECTION_ZH } from "./zh";
import { SELECTION_ZH_TW } from "./zh-tw";
import { SELECTION_AR } from "./ar";

const SELECTION: Record<Locale, Record<string, string>> = {
  en: SELECTION_EN, ko: SELECTION_KO, fr: SELECTION_FR, de: SELECTION_DE, es: SELECTION_ES, pt: SELECTION_PT,
  ja: SELECTION_JA, zh: SELECTION_ZH, "zh-TW": SELECTION_ZH_TW, ar: SELECTION_AR,
};

export function getSelectionText(locale: Locale, toolId: string): string | undefined {
  return SELECTION[locale]?.[toolId];
}
