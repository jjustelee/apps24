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

export async function ToolShell({
  locale,
  tool,
  title,
  description,
  seo,
  children,
}: ToolShellProps) {
  const common = await getCommonText(locale);
  const toolText = await getToolText(locale, tool);
  const formatTitle = (template: string) => template.replace("{0}", title);

  return (
    <div className="tool-shell">
      <ToolSidebar locale={locale} activeSlug={tool.slug} />

      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "4rem" }}>
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
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{formatTitle(common.whatIs)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem" }}>{toolText.longDescription}</p>
            </div>
          )}

          {toolText.usageContext && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.whenToUse}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem" }}>{toolText.usageContext}</p>
            </div>
          )}

          {toolText.howToUse && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{formatTitle(common.howToUseTitle)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem", whiteSpace: "pre-wrap" }}>{toolText.howToUse}</p>
            </div>
          )}

          {toolText.whyUse && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{formatTitle(common.whyUseTitle)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem" }}>{toolText.whyUse}</p>
            </div>
          )}

          {toolText.popularConversions && toolText.popularConversions.length > 0 && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{common.popularConversionsTitle}</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
                {toolText.popularConversions.map((conv, i) => (
                  <li key={i} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                    {conv}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {toolText.faq && toolText.faq.length > 0 && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.faqTitle}</h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {toolText.faq.map((item, i) => (
                  <div key={i} className="faq-item" style={{ padding: "1.5rem", background: "var(--accent-soft)", borderRadius: "16px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--accent)" }}>Q: {item.q}</h3>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "var(--text)", margin: 0 }}>A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {toolText.relatedTools && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{common.relatedToolsTitle}</h2>
              <Link 
                href={toolText.relatedTools.includes("Percent") ? `/${locale}/percentage-calculator` : "#"} 
                className="tool-button secondary"
                style={{ display: "inline-flex", padding: "1rem 2rem", borderRadius: "15px" }}
              >
                {toolText.relatedTools}
              </Link>
            </div>
          )}

          <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "3rem 0" }} />

          {seo && (
            <div className="tool-seo-rich-content" style={{ marginBottom: "2rem", padding: "1.5rem", background: "var(--panel-glass)", borderRadius: "16px", border: "1px solid var(--panel-border)" }}>
              <h2 style={{ fontSize: "1.1rem", color: "var(--accent)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{common.howItWorks}</h2>
              <p style={{ lineHeight: "1.7", color: "var(--muted)", fontSize: "1rem" }}>
                {seo}
              </p>
            </div>
          )}

          <div style={{ padding: "2rem", background: "var(--bg)", borderRadius: "20px", marginTop: "2rem" }}>
            <p className="tool-muted" style={{ fontSize: "1rem", lineHeight: "1.7", margin: "0 0 1rem 0" }}>
              <strong>{title}</strong> {common.aboutPrefix} {description}
            </p>
            <p className="tool-muted" style={{ fontSize: "0.9rem", margin: 0, opacity: 0.8 }}>
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
