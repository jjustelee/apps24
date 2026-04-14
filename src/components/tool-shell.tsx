import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolDefinition } from "@/features/tools/types";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";
import { ToolSidebar } from "@/components/tool-sidebar";

type ToolShellProps = {
  locale: Locale;
  tool: ToolDefinition;
  title: string;
  description: string;
  children: ReactNode;
};

export function ToolShell({
  locale,
  tool,
  title,
  description,
  children,
}: ToolShellProps) {
  const common = getCommonText(locale);

  return (
    <div className="tool-shell">
      <ToolSidebar locale={locale} activeSlug={tool.slug} />

      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "2rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">
            {tool.category === "text" ? common.textCategory : 
             tool.category === "utility" ? common.utilityCategory : 
             tool.category}
          </div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{title}</h1>
          <p className="tool-note">{description}</p>
        </header>

        <div className="tool-implementation-area">{children}</div>

        <section className="tool-footer-note" style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
          <h2 style={{ fontSize: "1rem", margin: "0 0 0.5rem 0", color: "var(--text)" }}>About {title}</h2>
          <p className="tool-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: "0 0 1rem 0" }}>
            {description} This free online utility is optimized for your language and designed to be fast, reliable, and completely browser-based.
          </p>
          <p className="tool-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
            <span dangerouslySetInnerHTML={{ __html: common.footerNote1.replace("this tool", `<strong>${title}</strong>`) }} />
            <br />
            {common.footerNote2}
          </p>
        </section>
      </main>
    </div>
  );
}
