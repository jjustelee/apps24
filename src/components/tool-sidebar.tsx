import Link from "next/link";
import { getVisibleTools } from "@/features/tools/registry";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { type Locale } from "@/lib/site";

type ToolSidebarProps = {
  locale: Locale;
  activeSlug: string;
};

export async function ToolSidebar({ locale, activeSlug }: ToolSidebarProps) {
  const tools = getVisibleTools(locale);
  const common = await getCommonText(locale);

  const toolsWithText = await Promise.all(
    tools.map(async (tool) => ({
      tool,
      text: await getToolText(locale, tool),
    }))
  );

  return (
    <aside className="tool-sidebar">
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
  );
}
