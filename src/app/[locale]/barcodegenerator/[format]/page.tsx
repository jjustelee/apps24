import type { Metadata } from "next";
import bwipjs from "bwip-js/node";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { BarcodeGeneratorTool } from "@/features/tools/implementations/barcode-generator";
import {
  getBarcodeGeneratorLongtailStaticParams,
  getBarcodeGeneratorLongtailText,
  isBarcodeGeneratorLongtailSlug,
} from "@/features/tools/barcode-generator-longtails";
import { isLocale, type Locale } from "@/lib/site";

type BarcodeGeneratorLongtailPageProps = {
  params: Promise<{ locale: string; format: string }>;
};

export function generateStaticParams() {
  return getBarcodeGeneratorLongtailStaticParams();
}

export async function generateMetadata({ params }: BarcodeGeneratorLongtailPageProps): Promise<Metadata> {
  const { locale, format } = await params;

  if (!isLocale(locale) || !isBarcodeGeneratorLongtailSlug(format)) {
    return {};
  }

  const text = getBarcodeGeneratorLongtailText(locale as Locale, format);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/barcodegenerator/${format}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "barcode", format],
  };
}

export default async function BarcodeGeneratorLongtailPage({ params }: BarcodeGeneratorLongtailPageProps) {
  const { locale, format } = await params;

  if (!isLocale(locale) || !isBarcodeGeneratorLongtailSlug(format)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("barcodegenerator", validLocale);
  const text = getBarcodeGeneratorLongtailText(validLocale, format);

  if (!tool || !text) {
    notFound();
  }

  const common = await getCommonText(validLocale);
  const toolData = {
    formats: bwipjs.symbolList.map(({ bcid, desc }) => ({
      value: bcid,
      label: desc,
    })),
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: text.title,
    description: text.description,
    applicationCategory: tool.category,
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
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
        longtailIntro={text.intro}
        seo={text.description}
      >
        <BarcodeGeneratorTool key={format} locale={validLocale} tool={tool} toolData={toolData} commonText={common} />
      </ToolShell>
    </>
  );
}
