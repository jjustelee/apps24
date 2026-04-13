import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolDefinition } from "@/features/tools/types";
import type { Locale } from "@/lib/site";

type ToolShellProps = {
  locale: Locale;
  tool: ToolDefinition;
  title: string;
  description: string;
  children: ReactNode;
};

export function ToolShell({ locale, tool, title, description, children }: ToolShellProps) {
  return (
    <section className="tool-page">
      <div className="tool-page-header">
        <Link className="back-link" href={`/${locale}`}>
          ← Back to tools
        </Link>
        <p className="tool-meta">{tool.category}</p>
        <h2>{title}</h2>
        <p className="lede">{description}</p>
      </div>

      <div className="tool-shell">
        <div className="tool-shell-main">{children}</div>
        <aside className="tool-shell-side">
          <p className="tool-shell-note">
            This {tool.category} tool is driven by the registry, so new tools can
            reuse the same shell without changing the route structure.
          </p>
        </aside>
      </div>
    </section>
  );
}
