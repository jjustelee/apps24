import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { ImageCompressorTool } from "@/features/tools/implementations/image-compressor";
import {
  getImageCompressorLongtailStaticParams,
  getImageCompressorLongtailText,
  isImageCompressorLongtailSlug,
} from "@/features/tools/image-compressor-longtails";
import { isLocale, type Locale } from "@/lib/site";

type ImageCompressorLongtailPageProps = {
  params: Promise<{ locale: string; mode: string }>;
};

export function generateStaticParams() {
  return getImageCompressorLongtailStaticParams();
}

export async function generateMetadata({ params }: ImageCompressorLongtailPageProps): Promise<Metadata> {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isImageCompressorLongtailSlug(mode)) {
    return {};
  }

  const text = getImageCompressorLongtailText(locale as Locale, mode);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/image-compressor/${mode}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "image compressor", mode],
  };
}

export default async function ImageCompressorLongtailPage({ params }: ImageCompressorLongtailPageProps) {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isImageCompressorLongtailSlug(mode)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("image-compressor", validLocale);
  const text = getImageCompressorLongtailText(validLocale, mode);

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
        <ImageCompressorTool locale={validLocale} tool={tool} commonText={common} />
      </ToolShell>
    </>
  );
}
