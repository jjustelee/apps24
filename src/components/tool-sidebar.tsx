import Link from "next/link";
import { getVisibleTools } from "@/features/tools/registry";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { type Locale } from "@/lib/site";

type ToolSidebarProps = {
  locale: Locale;
  activeSlug: string;
  currentTitle: string;
};

export async function ToolSidebar({ locale, activeSlug, currentTitle }: ToolSidebarProps) {
  const tools = getVisibleTools(locale);
  const common = await getCommonText(locale);

  const toolsWithText = await Promise.all(
    tools.map(async (tool) => ({
      tool,
      text: await getToolText(locale, tool),
    }))
  );

  return (
    <>
      <aside className="tool-sidebar tool-sidebar-desktop">
        <h3 className="sidebar-title">{common.allTools}</h3>
        <nav className="tool-sidebar-nav">
          {toolsWithText.map(({ tool, text }) => {
            const isActive = tool.slug === activeSlug;

            return (
              <Link
                key={tool.id}
                href={`/${locale}/${tool.slug}`}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {text.title}
              </Link>
            );
          })}
        </nav>
      </aside>

      <details className="tool-sidebar tool-sidebar-mobile">
        <summary className="sidebar-summary">
          <span className="sidebar-summary-label">{common.allTools}</span>
          <span className="sidebar-summary-value">{currentTitle}</span>
        </summary>
        <nav className="tool-sidebar-nav">
          {toolsWithText.map(({ tool, text }) => {
            const isActive = tool.slug === activeSlug;

            return (
              <Link
                key={tool.id}
                href={`/${locale}/${tool.slug}`}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {text.title}
              </Link>
            );
          })}
        </nav>
      </details>
    </>
  );
}
