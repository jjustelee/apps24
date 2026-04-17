import { LOCALES, type Locale } from "@/lib/site";

export type PercentageCalculatorMode = "value" | "increase" | "decrease" | "discount";

export type PercentageCalculatorLongtailSlug =
  | "what-is-x-percent-of-y"
  | "percent-increase"
  | "percent-decrease"
  | "discount-calculator";

export type PercentageCalculatorPreset = {
  mode: PercentageCalculatorMode;
  val1: string;
  val2: string;
};

export type PercentageCalculatorLongtailText = {
  title: string;
  description: string;
};

export type PercentageCalculatorLongtailLink = PercentageCalculatorLongtailText & {
  slug: PercentageCalculatorLongtailSlug;
  href: string;
};

const LONGTAILS: Record<
  PercentageCalculatorLongtailSlug,
  {
    preset: PercentageCalculatorPreset;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  }
> = {
  "what-is-x-percent-of-y": {
    preset: { mode: "value", val1: "200", val2: "25" },
    title: {
      en: "What is X% of Y?",
      ko: "X%는 Y의 얼마인가요?",
      fr: "Quel est X % de Y ?",
      ja: "YのX%はいくつ？",
      zh: "Y的X%是多少？",
      "zh-TW": "Y的X%是多少？",
      pt: "Quanto é X% de Y?",
      es: "¿Cuánto es X% de Y?",
      de: "Wie viel sind X % von Y?",
      ar: "كم يساوي X% من Y؟",
    },
    description: {
      en: "Calculate the percentage value of any number instantly.",
      ko: "어떤 값의 퍼센트가 얼마인지 바로 계산합니다.",
      fr: "Calculez instantanément la valeur d'un pourcentage.",
      ja: "任意の値の何パーセントかをすばやく計算します。",
      zh: "快速计算任意数值的百分比结果。",
      "zh-TW": "快速計算任意數值的百分比結果。",
      pt: "Calcule o valor percentual de qualquer número na hora.",
      es: "Calcula al instante el valor porcentual de cualquier número.",
      de: "Berechnen Sie sofort den Prozentwert einer Zahl.",
      ar: "احسب قيمة النسبة المئوية لأي رقم فورًا.",
    },
  },
  "percent-increase": {
    preset: { mode: "increase", val1: "80", val2: "100" },
    title: {
      en: "Percent Increase Calculator",
      ko: "증가율 계산기",
      fr: "Calculateur d'augmentation en pourcentage",
      ja: "増加率計算",
      zh: "百分比增长计算器",
      "zh-TW": "百分比增加計算器",
      pt: "Calculadora de aumento percentual",
      es: "Calculadora de aumento porcentual",
      de: "Prozentsteigerung berechnen",
      ar: "حاسبة الزيادة المئوية",
    },
    description: {
      en: "Find how much one value increased compared with another.",
      ko: "한 값이 다른 값보다 얼마나 늘었는지 계산합니다.",
      fr: "Calculez de combien une valeur a augmenté par rapport à une autre.",
      ja: "ある値が別の値に比べてどれだけ増えたかを計算します。",
      zh: "计算一个数值相较于另一个数值增长了多少。",
      "zh-TW": "計算一個數值相較於另一個數值增加了多少。",
      pt: "Veja quanto um valor aumentou em relação a outro.",
      es: "Calcula cuánto aumentó un valor respecto a otro.",
      de: "Ermitteln Sie, wie stark ein Wert im Vergleich zu einem anderen gestiegen ist.",
      ar: "اعرف مقدار زيادة قيمة مقارنةً بقيمة أخرى.",
    },
  },
  "percent-decrease": {
    preset: { mode: "decrease", val1: "100", val2: "80" },
    title: {
      en: "Percent Decrease Calculator",
      ko: "감소율 계산기",
      fr: "Calculateur de baisse en pourcentage",
      ja: "減少率計算",
      zh: "百分比减少计算器",
      "zh-TW": "百分比減少計算器",
      pt: "Calculadora de redução percentual",
      es: "Calculadora de disminución porcentual",
      de: "Prozentverringerung berechnen",
      ar: "حاسبة النقصان المئوية",
    },
    description: {
      en: "Find how much one value decreased compared with another.",
      ko: "한 값이 다른 값보다 얼마나 줄었는지 계산합니다.",
      fr: "Calculez de combien une valeur a diminué par rapport à une autre.",
      ja: "ある値が別の値に比べてどれだけ減ったかを計算します。",
      zh: "计算一个数值相较于另一个数值减少了多少。",
      "zh-TW": "計算一個數值相較於另一個數值減少了多少。",
      pt: "Veja quanto um valor diminuiu em relação a outro.",
      es: "Calcula cuánto disminuyó un valor respecto a otro.",
      de: "Ermitteln Sie, wie stark ein Wert im Vergleich zu einem anderen gefallen ist.",
      ar: "اعرف مقدار نقصان قيمة مقارنةً بقيمة أخرى.",
    },
  },
  "discount-calculator": {
    preset: { mode: "discount", val1: "200", val2: "30" },
    title: {
      en: "Discount Calculator",
      ko: "할인 계산기",
      fr: "Calculateur de remise",
      ja: "割引計算",
      zh: "折扣计算器",
      "zh-TW": "折扣計算器",
      pt: "Calculadora de desconto",
      es: "Calculadora de descuento",
      de: "Rabattrechner",
      ar: "حاسبة الخصم",
    },
    description: {
      en: "Calculate the final price after a percentage discount.",
      ko: "퍼센트 할인을 적용한 최종 가격을 계산합니다.",
      fr: "Calculez le prix final après une remise en pourcentage.",
      ja: "割引率を適用した最終価格を計算します。",
      zh: "计算应用折扣后的最终价格。",
      "zh-TW": "計算套用折扣後的最終價格。",
      pt: "Calcule o preço final após um desconto percentual.",
      es: "Calcula el precio final después de un descuento porcentual.",
      de: "Berechnen Sie den Endpreis nach einem prozentualen Rabatt.",
      ar: "احسب السعر النهائي بعد تطبيق خصم مئوي.",
    },
  },
};

export const PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as PercentageCalculatorLongtailSlug[];

export function isPercentageCalculatorLongtailSlug(value: string): value is PercentageCalculatorLongtailSlug {
  return value in LONGTAILS;
}

export function getPercentageCalculatorLongtailPreset(slug: string): PercentageCalculatorPreset | undefined {
  return isPercentageCalculatorLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getPercentageCalculatorLongtailText(locale: Locale, slug: string): PercentageCalculatorLongtailText | undefined {
  if (!isPercentageCalculatorLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];

  return {
    title: entry.title[locale],
    description: entry.description[locale],
  };
}

export function getPercentageCalculatorLongtailLinks(locale: Locale): PercentageCalculatorLongtailLink[] {
  return PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS.map((slug) => {
    const text = getPercentageCalculatorLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/percentage-calculator/${slug}`,
      ...text,
    };
  });
}

export function getPercentageCalculatorLongtailStaticParams() {
  return PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS.flatMap((mode) =>
    LOCALES.map((locale) => ({
      locale,
      mode,
    })),
  );
}
