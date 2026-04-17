import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { PercentageCalculatorTool } from "@/features/tools/implementations/percentage-calculator";
import {
  getPercentageCalculatorLongtailStaticParams,
  getPercentageCalculatorLongtailText,
  isPercentageCalculatorLongtailSlug,
} from "@/features/tools/percentage-calculator-longtails";
import { isLocale, type Locale } from "@/lib/site";

type PercentageCalculatorLongtailPageProps = {
  params: Promise<{ locale: string; mode: string }>;
};

export function generateStaticParams() {
  return getPercentageCalculatorLongtailStaticParams();
}

export async function generateMetadata({ params }: PercentageCalculatorLongtailPageProps): Promise<Metadata> {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isPercentageCalculatorLongtailSlug(mode)) {
    return {};
  }

  const text = getPercentageCalculatorLongtailText(locale as Locale, mode);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/percentage-calculator/${mode}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "percentage calculator", mode],
  };
}

export default async function PercentageCalculatorLongtailPage({ params }: PercentageCalculatorLongtailPageProps) {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isPercentageCalculatorLongtailSlug(mode)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("percentage-calculator", validLocale);
  const text = getPercentageCalculatorLongtailText(validLocale, mode);

  if (!tool || !text) {
    notFound();
  }

  const common = await getCommonText(validLocale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": text.title,
    "description": text.description,
    "applicationCategory": tool.category,
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolShell
        locale={validLocale}
        tool={tool}
        title={text.title}
        description={text.description}
        seo={text.description}
      >
        <PercentageCalculatorTool locale={validLocale} tool={tool} commonText={common} />
      </ToolShell>
    </>
  );
}
