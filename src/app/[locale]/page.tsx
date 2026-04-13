import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolCard } from "@/components/tool-card";
import { buildLocaleAlternates } from "@/lib/seo";
import { getVisibleTools } from "@/features/tools/registry";
import { getToolText } from "@/features/tools/copy";
import { isLocale, type Locale } from "@/lib/site";

type LocaleHomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleHomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale),
    title: "Home",
    description:
      "Discover fast, multilingual utility tools designed for search traffic and future expansion.",
  };
}

export default async function LocaleHome({ params }: LocaleHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tools = getVisibleTools(validLocale);

  return (
    <section className="panel">
      {tools.length > 0 ? (
        <div className="tool-grid">
          {tools.map((tool) => {
            const text = getToolText(validLocale, tool);

            return (
              <ToolCard
                key={tool.id}
                href={`/${validLocale}/${tool.slug}`}
                title={text.title}
                description={text.description}
                icon={tool.icon}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <strong>No tools yet.</strong>
          <span>
            Add the first tool in <code>src/features/tools/registry.ts</code> and then
            add its implementation in <code>src/features/tools/implementations</code>.
          </span>
          <span>
            A future tool page will automatically appear at{" "}
            <code>/{validLocale}/your-tool-slug</code>.
          </span>
          <Link href={`/${validLocale}/contact`}>Contact page</Link>
        </div>
      )}
    </section>
  );
}
