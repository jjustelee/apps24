import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { JsonFormatterTool } from "@/features/tools/implementations/json-formatter";
import {
  getJsonFormatterLongtailStaticParams,
  getJsonFormatterLongtailText,
  isJsonFormatterLongtailSlug,
} from "@/features/tools/json-formatter-longtails";
import { isLocale, type Locale } from "@/lib/site";

type JsonFormatterLongtailPageProps = {
  params: Promise<{ locale: string; mode: string }>;
};

export function generateStaticParams() {
  return getJsonFormatterLongtailStaticParams();
}

export async function generateMetadata({ params }: JsonFormatterLongtailPageProps): Promise<Metadata> {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isJsonFormatterLongtailSlug(mode)) {
    return {};
  }

  const text = getJsonFormatterLongtailText(locale as Locale, mode);

  if (!text) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/json-formatter/${mode}`),
    title: text.title,
    description: text.description,
    keywords: [text.title, text.description, "json formatter", mode],
  };
}

export default async function JsonFormatterLongtailPage({ params }: JsonFormatterLongtailPageProps) {
  const { locale, mode } = await params;

  if (!isLocale(locale) || !isJsonFormatterLongtailSlug(mode)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug("json-formatter", validLocale);
  const text = getJsonFormatterLongtailText(validLocale, mode);

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
        <JsonFormatterTool key={mode} locale={validLocale} tool={tool} commonText={common} />
      </ToolShell>
    </>
  );
}
