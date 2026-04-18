import Link from "next/link";
import { getCategoryGroups } from "@/features/tools/categories";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { getToolBySlug } from "@/features/tools/registry";
import { type Locale } from "@/lib/site";

type ToolSidebarProps = {
  locale: Locale;
  activeSlug: string;
  currentTitle: string;
};

export async function ToolSidebar({ locale, activeSlug, currentTitle }: ToolSidebarProps) {
  const groups = getCategoryGroups(locale);
  const activeTool = getToolBySlug(activeSlug, locale);
  const activeGroupId = activeTool?.categoryGroup;
  const common = await getCommonText(locale);

  const toolsWithText = await Promise.all(
    groups.flatMap((group) => group.tools).map(async (tool) => ({
      tool,
      text: await getToolText(locale, tool),
    }))
  );
  const toolTextMap = new Map(toolsWithText.map(({ tool, text }) => [tool.id, text] as const));
  const activeGroup = groups.find((group) => group.id === activeGroupId);
  const orderedGroups = activeGroup
    ? [activeGroup, ...groups.filter((group) => group.id !== activeGroup.id)]
    : groups;

  const renderGroup = (group: (typeof groups)[number]) => {
    const isActiveGroup = group.id === activeGroupId;

    return (
      <details key={group.id} className={`sidebar-group ${isActiveGroup ? "active" : ""}`} open={isActiveGroup}>
        <summary className="sidebar-group-summary">
          <span className="sidebar-group-chip">{group.shortLabel}</span>
          <span className="sidebar-summary-value">{group.title}</span>
          <span className="sidebar-group-description">{group.description}</span>
        </summary>
        <nav className="tool-sidebar-nav sidebar-group-nav">
          {group.tools.map((tool) => {
            const text = toolTextMap.get(tool.id);
            const isActive = tool.slug === activeSlug;

            return (
              <Link
                key={tool.id}
                href={`/${locale}/${tool.slug}`}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {text?.title ?? tool.slug}
              </Link>
            );
          })}
        </nav>
      </details>
    );
  };

  return (
    <>
      <aside className="tool-sidebar tool-sidebar-desktop">
        <h3 className="sidebar-title">{common.allTools}</h3>
        <div className="sidebar-group-list">
          {orderedGroups.map(renderGroup)}
        </div>
      </aside>

      <details className="tool-sidebar tool-sidebar-mobile">
        <summary className="sidebar-summary">
          <span className="sidebar-summary-label">{common.allTools}</span>
          <span className="sidebar-summary-value">{currentTitle}</span>
        </summary>
        <div className="sidebar-group-list">
          {orderedGroups.map(renderGroup)}
        </div>
      </details>
    </>
  );
}
