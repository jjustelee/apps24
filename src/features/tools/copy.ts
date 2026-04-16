import type { ToolDefinition } from "@/features/tools/types";
import type { Locale } from "@/lib/site";
import type { ToolText, CommonText } from "./types_locales";

export type { ToolText, CommonText };

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("./locales/en"),
  ko: () => import("./locales/ko"),
  fr: () => import("./locales/fr"),
  ja: () => import("./locales/ja"),
  zh: () => import("./locales/zh"),
  "zh-TW": () => import("./locales/zh-TW"),
  pt: () => import("./locales/pt"),
  es: () => import("./locales/es"),
  de: () => import("./locales/de"),
  ar: () => import("./locales/ar"),
};

export async function getDictionary(locale: Locale) {
  const load = dictionaries[locale] || dictionaries.en;
  return (await load()).default;
}

export async function getToolText(locale: Locale, tool: ToolDefinition): Promise<ToolText> {
  const dict = await getDictionary(locale);
  const enDict = locale === "en" ? dict : await getDictionary("en");
  
  return (
    dict.tools[tool.id] ??
    enDict.tools[tool.id] ?? {
      title: tool.titleKey,
      description: tool.descriptionKey,
    }
  );
}

export async function getCommonText(locale: Locale): Promise<CommonText> {
  const dict = await getDictionary(locale);
  const enDict = locale === "en" ? dict : await getDictionary("en");
  return dict.common ?? enDict.common;
}
