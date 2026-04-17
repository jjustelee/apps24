import type { Locale } from "@/lib/site";

export type UnitConverterCategory = "length" | "weight" | "temperature" | "area" | "volume" | "time";

export type UnitConverterLongtailSlug =
  | "inch-to-cm"
  | "kg-to-lbs"
  | "celsius-to-fahrenheit"
  | "mile-to-km"
  | "liter-to-gallon-us";

export type UnitConverterPreset = {
  category: UnitConverterCategory;
  fromUnit: string;
  toUnit: string;
  inputValue: string;
};

export type UnitConverterLongtailText = {
  title: string;
  description: string;
};

export type UnitConverterLongtailLink = UnitConverterLongtailText & {
  slug: UnitConverterLongtailSlug;
  href: string;
};

type UnitLabelKey =
  | "inch"
  | "centimeter"
  | "kilogram"
  | "pound"
  | "celsius"
  | "fahrenheit"
  | "mile"
  | "kilometer"
  | "liter"
  | "gallonUs";

type LocaleUnitLabels = Record<UnitLabelKey, string>;

type LongtailVariant = {
  preset: UnitConverterPreset;
  fromLabel: UnitLabelKey;
  toLabel: UnitLabelKey;
};

const UNIT_LABELS: Record<Locale, LocaleUnitLabels> = {
  en: {
    inch: "inches",
    centimeter: "centimeters",
    kilogram: "kilograms",
    pound: "pounds",
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    mile: "miles",
    kilometer: "kilometers",
    liter: "liters",
    gallonUs: "gallons (US)",
  },
  ko: {
    inch: "인치",
    centimeter: "센티미터",
    kilogram: "킬로그램",
    pound: "파운드",
    celsius: "섭씨",
    fahrenheit: "화씨",
    mile: "마일",
    kilometer: "킬로미터",
    liter: "리터",
    gallonUs: "미국 갤런",
  },
  fr: {
    inch: "pouces",
    centimeter: "centimètres",
    kilogram: "kilogrammes",
    pound: "livres",
    celsius: "degrés Celsius",
    fahrenheit: "degrés Fahrenheit",
    mile: "miles",
    kilometer: "kilomètres",
    liter: "litres",
    gallonUs: "gallons US",
  },
  ja: {
    inch: "インチ",
    centimeter: "センチメートル",
    kilogram: "キログラム",
    pound: "ポンド",
    celsius: "摂氏",
    fahrenheit: "華氏",
    mile: "マイル",
    kilometer: "キロメートル",
    liter: "リットル",
    gallonUs: "USガロン",
  },
  zh: {
    inch: "英寸",
    centimeter: "厘米",
    kilogram: "千克",
    pound: "磅",
    celsius: "摄氏度",
    fahrenheit: "华氏度",
    mile: "英里",
    kilometer: "公里",
    liter: "升",
    gallonUs: "美制加仑",
  },
  "zh-TW": {
    inch: "英吋",
    centimeter: "公分",
    kilogram: "公斤",
    pound: "磅",
    celsius: "攝氏",
    fahrenheit: "華氏",
    mile: "英里",
    kilometer: "公里",
    liter: "公升",
    gallonUs: "美制加侖",
  },
  pt: {
    inch: "polegadas",
    centimeter: "centímetros",
    kilogram: "quilogramas",
    pound: "libras",
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    mile: "milhas",
    kilometer: "quilômetros",
    liter: "litros",
    gallonUs: "galão (EUA)",
  },
  es: {
    inch: "pulgadas",
    centimeter: "centímetros",
    kilogram: "kilogramos",
    pound: "libras",
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    mile: "millas",
    kilometer: "kilómetros",
    liter: "litros",
    gallonUs: "galón (EE. UU.)",
  },
  de: {
    inch: "Zoll",
    centimeter: "Zentimeter",
    kilogram: "Kilogramm",
    pound: "Pfund",
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    mile: "Meilen",
    kilometer: "Kilometer",
    liter: "Liter",
    gallonUs: "US-Gallone",
  },
  ar: {
    inch: "الإنش",
    centimeter: "السنتيمتر",
    kilogram: "الكيلوغرام",
    pound: "الرطل",
    celsius: "السيلسيوس",
    fahrenheit: "الفهرنهايت",
    mile: "الميل",
    kilometer: "الكيلومتر",
    liter: "اللتر",
    gallonUs: "الجالون الأمريكي",
  },
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
  en: "Convert {from} to {to} instantly.",
  ko: "{from}를 {to}로 바로 변환합니다.",
  fr: "Convertissez {from} en {to} instantanément.",
  ja: "{from}を{to}にすばやく変換します。",
  zh: "将{from}快速换算为{to}。",
  "zh-TW": "將{from}快速換算為{to}。",
  pt: "Converta {from} em {to} instantaneamente.",
  es: "Convierte {from} a {to} al instante.",
  de: "Wandle {from} sofort in {to} um.",
  ar: "حوّل {from} إلى {to} فورًا.",
};

export const UNIT_CONVERTER_LONGTAILS: Record<UnitConverterLongtailSlug, LongtailVariant> = {
  "inch-to-cm": {
    preset: { category: "length", fromUnit: "inch", toUnit: "cm", inputValue: "1" },
    fromLabel: "inch",
    toLabel: "centimeter",
  },
  "kg-to-lbs": {
    preset: { category: "weight", fromUnit: "kg", toUnit: "lb", inputValue: "1" },
    fromLabel: "kilogram",
    toLabel: "pound",
  },
  "celsius-to-fahrenheit": {
    preset: { category: "temperature", fromUnit: "celsius", toUnit: "fahrenheit", inputValue: "0" },
    fromLabel: "celsius",
    toLabel: "fahrenheit",
  },
  "mile-to-km": {
    preset: { category: "length", fromUnit: "mile", toUnit: "km", inputValue: "1" },
    fromLabel: "mile",
    toLabel: "kilometer",
  },
  "liter-to-gallon-us": {
    preset: { category: "volume", fromUnit: "liter", toUnit: "gallon_us", inputValue: "1" },
    fromLabel: "liter",
    toLabel: "gallonUs",
  },
};

export const UNIT_CONVERTER_LONGTAIL_SLUGS = Object.keys(UNIT_CONVERTER_LONGTAILS) as UnitConverterLongtailSlug[];

export function isUnitConverterLongtailSlug(value: string): value is UnitConverterLongtailSlug {
  return value in UNIT_CONVERTER_LONGTAILS;
}

export function getUnitConverterLongtailPreset(slug: string): UnitConverterPreset | undefined {
  return isUnitConverterLongtailSlug(slug) ? UNIT_CONVERTER_LONGTAILS[slug].preset : undefined;
}

export function getUnitConverterLongtailText(locale: Locale, slug: string): UnitConverterLongtailText | undefined {
  if (!isUnitConverterLongtailSlug(slug)) return undefined;

  const variant = UNIT_CONVERTER_LONGTAILS[slug];
  const labels = UNIT_LABELS[locale];
  const title = TITLE_TEMPLATES[locale]
    .replace("{from}", labels[variant.fromLabel])
    .replace("{to}", labels[variant.toLabel]);
  const description = DESCRIPTION_TEMPLATES[locale]
    .replace("{from}", labels[variant.fromLabel])
    .replace("{to}", labels[variant.toLabel]);

  return { title, description };
}

export function getUnitConverterLongtailLinks(locale: Locale): UnitConverterLongtailLink[] {
  return UNIT_CONVERTER_LONGTAIL_SLUGS.flatMap((slug) => {
    const text = getUnitConverterLongtailText(locale, slug);

    if (!text) {
      return [];
    }

    return [
      {
        slug,
        href: `/${locale}/unit-converter/${slug}`,
        ...text,
      },
    ];
  });
}

export function getUnitConverterLongtailStaticParams() {
  return Object.keys(UNIT_CONVERTER_LONGTAILS).flatMap((conversion) =>
    (Object.keys(UNIT_LABELS) as Locale[]).map((locale) => ({
      locale,
      conversion: conversion as UnitConverterLongtailSlug,
    })),
  );
}
