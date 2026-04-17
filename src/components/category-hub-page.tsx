import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/category-nav";
import { ToolCard } from "@/components/tool-card";
import {
  getCategoryGroupBySlug,
  getCategoryGroupTools,
  getCategoryGroups,
} from "@/features/tools/categories";
import { getCommonText, getToolText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";

type CategoryHubPageProps = {
  locale: Locale;
  categorySlug: string;
};

export async function CategoryHubPage({ locale, categorySlug }: CategoryHubPageProps) {
  const common = await getCommonText(locale);
  const groupDefinition = getCategoryGroupBySlug(categorySlug);

  if (!groupDefinition) {
    notFound();
  }

  const localizedGroup = getCategoryGroups(locale).find((group) => group.slug === categorySlug);

  if (!localizedGroup) {
    notFound();
  }

  const tools = getCategoryGroupTools(locale, groupDefinition.id);
  const toolsWithText = await Promise.all(
    tools.map(async (tool) => ({
      tool,
      text: await getToolText(locale, tool),
    })),
  );

  return (
    <div className="content-page-wrapper" style={{ maxWidth: "1120px", margin: "0 auto", width: "100%" }}>
      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "2rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">{localizedGroup.shortLabel}</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{localizedGroup.title}</h1>
          <p className="tool-note">{localizedGroup.description}</p>
        </header>

        <CategoryNav locale={locale} mode="route" activeSlug={localizedGroup.slug} />

        <section style={{ marginTop: "2rem" }}>
          <div className="tool-grid">
            {toolsWithText.map(({ tool, text }) => (
              <ToolCard
                key={tool.id}
                href={`/${locale}/${tool.slug}`}
                title={text.title}
                description={text.description}
                icon={tool.icon}
              />
            ))}
          </div>
        </section>

        <footer style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <Link href={`/${locale}`} className="tool-button secondary">
            {common.backToTools}
          </Link>
        </footer>
      </main>
    </div>
  );
}
