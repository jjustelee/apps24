import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { PixelConverterTool } from "@/features/tools/implementations/pixel-converter";
import {
  getPixelConverterLongtailPreset,
  getPixelConverterLongtailText,
  getPixelConverterLongtailStaticParams,
  isPixelConverterLongtailSlug,
} from "@/features/tools/pixel-converter-longtails";
import { isLocale, type Locale } from "@/lib/site";

type PixelConverterLongtailPageProps = {
  params: Promise<{ locale: string; preset: string }>;
};

export function generateStaticParams() {
  return getPixelConverterLongtailStaticParams();
}

export async function generateMetadata({ params }: PixelConverterLongtailPageProps): Promise<Metadata> {
  const { locale, preset } = await params;

  if (!isLocale(locale) || !isPixelConverterLongtailSlug(preset)) {
    return {};
  }

  const text = getPixelConverterLongtailText(locale as Locale, preset);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/pixel-converter/${preset}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "pixel converter", preset],
  };
}

export default async function PixelConverterLongtailPage({ params }: PixelConverterLongtailPageProps) {
  const { locale, preset } = await params;

  if (!isLocale(locale) || !isPixelConverterLongtailSlug(preset)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("pixel-converter", validLocale);
  const text = getPixelConverterLongtailText(validLocale, preset);
  const toolData = getPixelConverterLongtailPreset(preset);

  if (!tool || !text || !toolData) {
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
        <PixelConverterTool
          locale={validLocale}
          tool={tool}
          toolData={toolData}
          commonText={common}
        />
      </ToolShell>
    </>
  );
}
