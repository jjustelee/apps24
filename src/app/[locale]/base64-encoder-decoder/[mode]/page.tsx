import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { Base64ConverterTool } from "@/features/tools/implementations/base64-converter";
import {
  getBase64EncoderLongtailStaticParams,
  getBase64EncoderLongtailText,
  isBase64EncoderLongtailSlug,
} from "@/features/tools/base64-encoder-longtails";
import { isLocale, type Locale } from "@/lib/site";

type Base64LongtailPageProps = {
  params: Promise<{ locale: string; mode: string }>;
};

export function generateStaticParams() {
  return getBase64EncoderLongtailStaticParams();
}

export async function generateMetadata({ params }: Base64LongtailPageProps): Promise<Metadata> {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isBase64EncoderLongtailSlug(mode)) {
    return {};
  }

  const text = getBase64EncoderLongtailText(locale as Locale, mode);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/base64-encoder-decoder/${mode}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "base64", mode],
  };
}

export default async function Base64LongtailPage({ params }: Base64LongtailPageProps) {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isBase64EncoderLongtailSlug(mode)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("base64-encoder-decoder", validLocale);
  const text = getBase64EncoderLongtailText(validLocale, mode);

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
        longtailIntro={text.intro}
        seo={text.description}
      >
        <Base64ConverterTool key={mode} locale={validLocale} tool={tool} commonText={common} />
      </ToolShell>
    </>
  );
}
