import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolDefinition } from "@/features/tools/types";
import { getCommonText, getToolText } from "@/features/tools/copy";
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
  const toolText = getToolText(locale, tool);
  const formatTitle = (template: string) => template.replace("{0}", title);

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

        <section className="tool-rich-content-section" style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
          {toolText.longDescription && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{formatTitle(common.whatIs)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.05rem" }}>{toolText.longDescription}</p>
            </div>
          )}

          {toolText.usageContext && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{common.whenToUse}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.05rem" }}>{toolText.usageContext}</p>
            </div>
          )}

          {toolText.howToUse && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{formatTitle(common.howToUseTitle)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.05rem", whiteSpace: "pre-wrap" }}>{toolText.howToUse}</p>
            </div>
          )}

          {toolText.faq && toolText.faq.length > 0 && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.faqTitle}</h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {toolText.faq.map((item, i) => (
                  <div key={i} className="faq-item" style={{ padding: "1.5rem", background: "var(--accent-soft)", borderRadius: "16px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--accent)" }}>Q: {item.q}</h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--text)", margin: 0 }}>A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "3rem 0" }} />

          {seo && (
            <div className="tool-seo-rich-content" style={{ marginBottom: "2rem", padding: "1.5rem", background: "var(--panel-glass)", borderRadius: "16px", border: "1px solid var(--panel-border)" }}>
              <h2 style={{ fontSize: "1.1rem", color: "var(--accent)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{common.howItWorks}</h2>
              <p style={{ lineHeight: "1.7", color: "var(--muted)", fontSize: "0.95rem" }}>
                {seo}
              </p>
            </div>
          )}

          <div style={{ padding: "2rem", background: "var(--bg)", borderRadius: "20px", marginTop: "2rem" }}>
            <p className="tool-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7", margin: "0 0 1rem 0" }}>
              <strong>{title}</strong> {common.aboutPrefix} {description}
            </p>
            <p className="tool-muted" style={{ fontSize: "0.85rem", margin: 0, opacity: 0.8 }}>
              {common.footerNote1.replace("this tool", title)}
              <br />
              {common.footerNote2}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
