import { LOCALES, type Locale } from "@/lib/site";
import type { ToolDefinition } from "@/features/tools/types";

export const TOOLS: ToolDefinition[] = [
  {
    id: "ruler",
    slug: "ruler",
    category: "measurement",
    titleKey: "tools.ruler.title",
    descriptionKey: "tools.ruler.description",
    icon: "R",
    order: 1,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "ruler",
  },
  {
    id: "wordcounter",
    slug: "wordcounter",
    category: "text",
    titleKey: "tools.wordcounter.title",
    descriptionKey: "tools.wordcounter.description",
    icon: "WC",
    order: 2,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "wordCounter",
  },
  {
    id: "countdown",
    slug: "countdown",
    category: "time",
    titleKey: "tools.countdown.title",
    descriptionKey: "tools.countdown.description",
    icon: "CT",
    order: 3,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "countdown",
  },
  {
    id: "digitalclock",
    slug: "digitalclock",
    category: "time",
    titleKey: "tools.digitalclock.title",
    descriptionKey: "tools.digitalclock.description",
    icon: "CLK",
    order: 4,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "digitalClock",
  },
  {
    id: "screenlamp",
    slug: "screenlamp",
    category: "display",
    titleKey: "tools.screenlamp.title",
    descriptionKey: "tools.screenlamp.description",
    icon: "SL",
    order: 5,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "screenLamp",
  },
  {
    id: "qrgenerator",
    slug: "qrgenerator",
    category: "generator",
    titleKey: "tools.qrgenerator.title",
    descriptionKey: "tools.qrgenerator.description",
    icon: "QR",
    order: 6,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "barcodeGenerator",
  },
  {
    id: "barcodegenerator",
    slug: "barcodegenerator",
    category: "generator",
    titleKey: "tools.barcodegenerator.title",
    descriptionKey: "tools.barcodegenerator.description",
    icon: "BC",
    order: 7,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "barcodeGenerator",
  },
  {
    id: "dummytext",
    slug: "dummytext",
    category: "utility",
    titleKey: "tools.dummytext.title",
    descriptionKey: "tools.dummytext.description",
    icon: "TXT",
    order: 8,
    featured: true,
    status: "stable",
    locales: [...LOCALES],
    implementationKey: "dummyText",
  },
];

export function getVisibleTools(locale?: Locale) {
  return TOOLS.filter((tool) => {
    const localeOk = locale ? tool.locales.includes(locale) : true;
    return tool.status !== "hidden" && localeOk;
  }).sort((a, b) => a.order - b.order);
}

export function getToolBySlug(slug: string, locale?: Locale) {
  return TOOLS.find((tool) => {
    const localeOk = locale ? tool.locales.includes(locale) : true;
    return tool.slug === slug && localeOk;
  });
}

export function getStaticToolParams() {
  return TOOLS.flatMap((tool) =>
    LOCALES.flatMap((locale) =>
      tool.locales.includes(locale) ? [{ locale, slug: tool.slug }] : [],
    ),
  );
}
