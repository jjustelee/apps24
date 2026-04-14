import Link from "next/link";
import { getVisibleTools } from "@/features/tools/registry";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { type Locale } from "@/lib/site";

type ToolSidebarProps = {
  locale: Locale;
  activeSlug: string;
};

export function ToolSidebar({ locale, activeSlug }: ToolSidebarProps) {
  const tools = getVisibleTools(locale);
  const common = getCommonText(locale);

  return (
    <aside className="tool-sidebar">
      <h3 className="sidebar-title">{common.allTools}</h3>
      <nav className="tool-sidebar-nav">
        {tools.map((tool) => {
          const text = getToolText(locale, tool);
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
