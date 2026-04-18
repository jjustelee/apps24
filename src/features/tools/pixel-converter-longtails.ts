import { LOCALES, type Locale } from "@/lib/site";

export type PixelConverterLongtailSlug =
  | "px-to-rem"
  | "px-to-em"
  | "px-to-percent"
  | "px-to-vw"
  | "px-to-vh"
  | "px-to-pt"
  | "px-to-inch"
  | "px-to-cm"
  | "px-to-mm";

export type PixelConverterPreset = {
  inputValue: string;
  fromUnit: "px";
  toUnit: "rem" | "em" | "percent" | "vw" | "vh" | "pt" | "in" | "cm" | "mm";
  references: {
    rootFontSize?: string;
    currentFontSize?: string;
    percentBase?: string;
    viewportWidth?: string;
    viewportHeight?: string;
  };
};

export type PixelConverterLongtailText = {
  title: string;
  description: string;
};

export type PixelConverterLongtailLink = PixelConverterLongtailText & {
  slug: PixelConverterLongtailSlug;
  href: string;
};

const TITLE_TEMPLATES: Record<Locale, string> = {
  en: "{from} to {to} converter",
  ko: "{from}를 {to}로 변환",
  fr: "Convertisseur {from} vers {to}",
  ja: "{from}から{to}への変換",
  zh: "{from}转{to}转换器",
  "zh-TW": "{from}轉{to}轉換器",
  pt: "Conversor de {from} para {to}",
  es: "Conversor de {from} a {to}",
  de: "{from} in {to} umrechnen",
  ar: "تحويل {from} إلى {to}",
};

const DESCRIPTION_TEMPLATES: Record<Locale, string> = {
  en: "Convert {from} to {to} with adjustable CSS reference values.",
  ko: "조절 가능한 CSS 기준값으로 {from}를 {to}로 변환합니다.",
  fr: "Convertissez {from} en {to} avec des valeurs de référence CSS ajustables.",
  ja: "CSSの基準値を調整しながら{from}を{to}に変換します。",
  zh: "使用可调整的 CSS 参考值将 {from} 转换为 {to}。",
  "zh-TW": "使用可調整的 CSS 參考值將 {from} 轉換為 {to}。",
  pt: "Converta {from} em {to} com valores de referência CSS ajustáveis.",
  es: "Convierte {from} a {to} con valores de referencia CSS ajustables.",
  de: "Wandle {from} mit anpassbaren CSS-Referenzwerten in {to} um.",
  ar: "حوّل {from} إلى {to} باستخدام قيم مرجعية قابلة للتعديل في CSS.",
};

const LONGTAILS: Record<
  PixelConverterLongtailSlug,
  {
    preset: PixelConverterPreset;
    toLabel: Record<Locale, string>;
  }
> = {
  "px-to-rem": {
    preset: { inputValue: "16", fromUnit: "px", toUnit: "rem", references: { rootFontSize: "16" } },
    toLabel: { en: "rem", ko: "rem", fr: "rem", ja: "rem", zh: "rem", "zh-TW": "rem", pt: "rem", es: "rem", de: "rem", ar: "rem" },
  },
  "px-to-em": {
    preset: { inputValue: "16", fromUnit: "px", toUnit: "em", references: { currentFontSize: "16" } },
    toLabel: { en: "em", ko: "em", fr: "em", ja: "em", zh: "em", "zh-TW": "em", pt: "em", es: "em", de: "em", ar: "em" },
  },
  "px-to-percent": {
    preset: { inputValue: "16", fromUnit: "px", toUnit: "percent", references: { percentBase: "16" } },
    toLabel: {
      en: "percent",
      ko: "퍼센트",
      fr: "pourcentage",
      ja: "パーセント",
      zh: "百分比",
      "zh-TW": "百分比",
      pt: "porcentagem",
      es: "porcentaje",
      de: "Prozent",
      ar: "النسبة المئوية",
    },
  },
  "px-to-vw": {
    preset: { inputValue: "144", fromUnit: "px", toUnit: "vw", references: { viewportWidth: "1440" } },
    toLabel: { en: "vw", ko: "vw", fr: "vw", ja: "vw", zh: "vw", "zh-TW": "vw", pt: "vw", es: "vw", de: "vw", ar: "vw" },
  },
  "px-to-vh": {
    preset: { inputValue: "90", fromUnit: "px", toUnit: "vh", references: { viewportHeight: "900" } },
    toLabel: { en: "vh", ko: "vh", fr: "vh", ja: "vh", zh: "vh", "zh-TW": "vh", pt: "vh", es: "vh", de: "vh", ar: "vh" },
  },
  "px-to-pt": {
    preset: { inputValue: "16", fromUnit: "px", toUnit: "pt", references: {} },
    toLabel: { en: "pt", ko: "pt", fr: "pt", ja: "pt", zh: "pt", "zh-TW": "pt", pt: "pt", es: "pt", de: "pt", ar: "pt" },
  },
  "px-to-inch": {
    preset: { inputValue: "96", fromUnit: "px", toUnit: "in", references: {} },
    toLabel: {
      en: "inch",
      ko: "인치",
      fr: "pouces",
      ja: "インチ",
      zh: "英寸",
      "zh-TW": "英吋",
      pt: "polegadas",
      es: "pulgadas",
      de: "Zoll",
      ar: "إنش",
    },
  },
  "px-to-cm": {
    preset: { inputValue: "37.8", fromUnit: "px", toUnit: "cm", references: {} },
    toLabel: { en: "cm", ko: "cm", fr: "cm", ja: "cm", zh: "cm", "zh-TW": "cm", pt: "cm", es: "cm", de: "cm", ar: "cm" },
  },
  "px-to-mm": {
    preset: { inputValue: "3.78", fromUnit: "px", toUnit: "mm", references: {} },
    toLabel: { en: "mm", ko: "mm", fr: "mm", ja: "mm", zh: "mm", "zh-TW": "mm", pt: "mm", es: "mm", de: "mm", ar: "mm" },
  },
};

export const PIXEL_CONVERTER_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as PixelConverterLongtailSlug[];

export function isPixelConverterLongtailSlug(value: string): value is PixelConverterLongtailSlug {
  return value in LONGTAILS;
}

export function getPixelConverterLongtailPreset(slug: string): PixelConverterPreset | undefined {
  return isPixelConverterLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getPixelConverterLongtailText(locale: Locale, slug: string): PixelConverterLongtailText | undefined {
  if (!isPixelConverterLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: TITLE_TEMPLATES[locale]
      .replace("{from}", "px")
      .replace("{to}", entry.toLabel[locale]),
    description: DESCRIPTION_TEMPLATES[locale]
      .replace("{from}", "px")
      .replace("{to}", entry.toLabel[locale]),
  };
}

export function getPixelConverterLongtailLinks(locale: Locale): PixelConverterLongtailLink[] {
  return PIXEL_CONVERTER_LONGTAIL_SLUGS.map((slug) => {
    const text = getPixelConverterLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/pixel-converter/${slug}`,
      ...text,
    };
  });
}

export function getPixelConverterLongtailStaticParams() {
  return PIXEL_CONVERTER_LONGTAIL_SLUGS.flatMap((preset) =>
    LOCALES.map((locale) => ({
      locale,
      preset,
    })),
  );
}
