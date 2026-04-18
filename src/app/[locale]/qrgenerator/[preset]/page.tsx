import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { BarcodeGeneratorTool } from "@/features/tools/implementations/barcode-generator";
import {
  getQrGeneratorLongtailStaticParams,
  getQrGeneratorLongtailText,
  isQrGeneratorLongtailSlug,
} from "@/features/tools/qrgenerator-longtails";
import { isLocale, type Locale } from "@/lib/site";

type QrGeneratorLongtailPageProps = {
  params: Promise<{ locale: string; preset: string }>;
};

export function generateStaticParams() {
  return getQrGeneratorLongtailStaticParams();
}

export async function generateMetadata({ params }: QrGeneratorLongtailPageProps): Promise<Metadata> {
  const { locale, preset } = await params;

  if (!isLocale(locale) || !isQrGeneratorLongtailSlug(preset)) {
    return {};
  }

  const text = getQrGeneratorLongtailText(locale as Locale, preset);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/qrgenerator/${preset}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "qr code", preset],
  };
}

export default async function QrGeneratorLongtailPage({ params }: QrGeneratorLongtailPageProps) {
  const { locale, preset } = await params;

  if (!isLocale(locale) || !isQrGeneratorLongtailSlug(preset)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("qrgenerator", validLocale);
  const text = getQrGeneratorLongtailText(validLocale, preset);

  if (!tool || !text) {
    notFound();
  }

  const common = await getCommonText(validLocale);
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
        seo={text.description}
      >
        <BarcodeGeneratorTool locale={validLocale} tool={tool} commonText={common} />
      </ToolShell>
    </>
  );
}
