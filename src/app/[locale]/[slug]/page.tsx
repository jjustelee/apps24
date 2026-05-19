import type { Metadata } from "next";
import bwipjs from "bwip-js/node";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getStaticToolParams, getToolBySlug } from "@/features/tools/registry";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { toolRenderers } from "@/features/tools/implementations";
import { getLocalizedUrl, isLocale, type Locale } from "@/lib/site";

type ToolPageProps = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return getStaticToolParams();
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const tool = getToolBySlug(slug, locale as Locale);

  if (!tool) {
    return {};
  }

  const text = await getToolText(locale as Locale, tool);

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/${slug}`, tool.locales),
    title: text.title,
    description: text.description,
    keywords: tool.keywords,
  };
}

export default async function ToolPage({ params, searchParams }: ToolPageProps) {
  const { locale, slug } = await params;
  const resolvedSearchParams = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tool = getToolBySlug(slug, validLocale);

  if (!tool) {
    notFound();
  }

  const text = await getToolText(validLocale, tool);
  const common = await getCommonText(validLocale);
  const toolUrl = getLocalizedUrl(validLocale, `/${tool.slug}`);

  const Renderer = toolRenderers[tool.implementationKey];
  const toolData =
    tool.implementationKey === "barcodeGenerator"
      ? {
          formats: bwipjs.symbolList.map(({ bcid, desc }) => ({
            value: bcid,
            label: desc,
          })),
        }
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": text.title,
        "description": text.description,
        "applicationCategory": tool.category,
        "operatingSystem": "Any",
        "url": toolUrl,
        "inLanguage": validLocale,
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Apps24",
          "url": getLocalizedUrl(validLocale),
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Apps24",
            "item": getLocalizedUrl(validLocale),
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": text.title,
            "item": toolUrl,
          },
        ],
      },
      ...(text.faq?.length
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": text.faq.map((item) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a,
                },
              })),
            },
          ]
        : []),
    ],
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
        seo={text.seo}
      >
        {Renderer ? (
          <Renderer
            locale={validLocale}
            tool={tool}
            searchParams={resolvedSearchParams}
            toolData={toolData}
            commonText={common}
            toolText={text}
          />
        ) : (
          <div className="empty-state">
            <strong>Implementation not added yet.</strong>
            <span>
              Add <code>{tool.implementationKey}</code> to{" "}
              <code>src/features/tools/implementations</code> and register it in the
              renderer map.
            </span>
          </div>
        )}
      </ToolShell>
    </>
  );
}
