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
  seo?: string;
  children: ReactNode;
};

export function ToolShell({
  locale,
  tool,
  title,
  description,
  seo,
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
          {seo && (
            <div className="tool-seo-rich-content" style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.25rem", color: "var(--accent)", marginBottom: "0.75rem" }}>{common.seoTitle}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--text-muted)", fontSize: "1rem", whiteSpace: "pre-wrap" }}>
                {seo}
              </p>
            </div>
          )}

          <p className="tool-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: "0 0 1rem 0" }}>
            {description} {common.aboutPrefix}
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
