import type { Metadata } from "next";
import bwipjs from "bwip-js/node";
import { notFound } from "next/navigation";
import { ToolShell } from "@/components/tool-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { getStaticToolParams, getToolBySlug } from "@/features/tools/registry";
import { getToolText } from "@/features/tools/copy";
import { toolRenderers } from "@/features/tools/implementations";
import { isLocale, type Locale } from "@/lib/site";

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

  const text = getToolText(locale as Locale, tool);

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/${slug}`),
    title: text.title,
    description: text.description,
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

  const text = getToolText(validLocale, tool);

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

  return (
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
  );
}
