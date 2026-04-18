import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { BackgroundRemoverTool } from "@/features/tools/implementations/background-remover";
import {
  getBackgroundRemoverLongtailPreset,
  getBackgroundRemoverLongtailStaticParams,
  getBackgroundRemoverLongtailText,
  isBackgroundRemoverLongtailSlug,
} from "@/features/tools/background-remover-longtails";
import { isLocale, type Locale } from "@/lib/site";

type BackgroundRemoverLongtailPageProps = {
  params: Promise<{ locale: string; preset: string }>;
};

export function generateStaticParams() {
  return getBackgroundRemoverLongtailStaticParams();
}

export async function generateMetadata({ params }: BackgroundRemoverLongtailPageProps): Promise<Metadata> {
  const { locale, preset } = await params;

  if (!isLocale(locale) || !isBackgroundRemoverLongtailSlug(preset)) {
    return {};
  }

  const text = getBackgroundRemoverLongtailText(locale as Locale, preset);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/background-remover/${preset}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "background remover", preset],
  };
}

export default async function BackgroundRemoverLongtailPage({ params }: BackgroundRemoverLongtailPageProps) {
  const { locale, preset } = await params;

  if (!isLocale(locale) || !isBackgroundRemoverLongtailSlug(preset)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("background-remover", validLocale);
  const text = getBackgroundRemoverLongtailText(validLocale, preset);
  const toolData = getBackgroundRemoverLongtailPreset(preset);

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
        longtailIntro={text.intro}
        seo={text.description}
      >
        <BackgroundRemoverTool
          locale={validLocale}
          tool={tool}
          toolData={toolData}
          commonText={common}
        />
      </ToolShell>
    </>
  );
}
