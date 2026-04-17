import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { UnitConverterTool } from "@/features/tools/implementations/unit-converter";
import {
  getUnitConverterLongtailStaticParams,
  getUnitConverterLongtailText,
  isUnitConverterLongtailSlug,
} from "@/features/tools/unit-converter-longtails";
import { isLocale, type Locale } from "@/lib/site";

type UnitConverterLongtailPageProps = {
  params: Promise<{ locale: string; conversion: string }>;
};

export function generateStaticParams() {
  return getUnitConverterLongtailStaticParams();
}

export async function generateMetadata({ params }: UnitConverterLongtailPageProps): Promise<Metadata> {
  const { locale, conversion } = await params;

  if (!isLocale(locale) || !isUnitConverterLongtailSlug(conversion)) {
    return {};
  }

  const text = getUnitConverterLongtailText(locale as Locale, conversion);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/unit-converter/${conversion}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, conversion, "unit converter"],
  };
}

export default async function UnitConverterLongtailPage({ params }: UnitConverterLongtailPageProps) {
  const { locale, conversion } = await params;

  if (!isLocale(locale) || !isUnitConverterLongtailSlug(conversion)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("unit-converter", validLocale);
  const text = getUnitConverterLongtailText(validLocale, conversion);

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
        <UnitConverterTool locale={validLocale} tool={tool} commonText={common} />
      </ToolShell>
    </>
  );
}
