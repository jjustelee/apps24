import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolDefinition } from "@/features/tools/types";
import { getCommonText, getToolText } from "@/features/tools/copy";
import { getImageCompressorLongtailLinks } from "@/features/tools/image-compressor-longtails";
import { getBase64EncoderLongtailLinks } from "@/features/tools/base64-encoder-longtails";
import { getJsonFormatterLongtailLinks } from "@/features/tools/json-formatter-longtails";
import { getQrGeneratorLongtailLinks } from "@/features/tools/qrgenerator-longtails";
import { getBarcodeGeneratorLongtailLinks } from "@/features/tools/barcode-generator-longtails";
import { getUnitConverterLongtailLinks } from "@/features/tools/unit-converter-longtails";
import { getPercentageCalculatorLongtailLinks } from "@/features/tools/percentage-calculator-longtails";
import type { Locale } from "@/lib/site";
import { ToolSidebar } from "@/components/tool-sidebar";

type ToolShellProps = {
  locale: Locale;
  tool: ToolDefinition;
  title: string;
  description: string;
  longtailIntro?: string;
  seo?: string;
  children: ReactNode;
};

export async function ToolShell({
  locale,
  tool,
  title,
  description,
  longtailIntro,
  seo,
  children,
}: ToolShellProps) {
  const common = await getCommonText(locale);
  const toolText = await getToolText(locale, tool);
  const formatTitle = (template: string) => template.replace("{0}", title);
  const unitConverterLinks = tool.id === "unitconverter" ? getUnitConverterLongtailLinks(locale) : [];
  const percentageCalculatorLinks = tool.id === "percentagecalculator" ? getPercentageCalculatorLongtailLinks(locale) : [];
  const qrGeneratorLinks = tool.id === "qrgenerator" ? getQrGeneratorLongtailLinks(locale) : [];
  const imageCompressorLinks = tool.id === "imagecompressor" ? getImageCompressorLongtailLinks(locale) : [];
  const base64EncoderLinks = tool.id === "base64encoder" ? getBase64EncoderLongtailLinks(locale) : [];
  const jsonFormatterLinks = tool.id === "jsonformatter" ? getJsonFormatterLongtailLinks(locale) : [];
  const barcodeGeneratorLinks = tool.id === "barcodegenerator" ? getBarcodeGeneratorLongtailLinks(locale) : [];
  const popularConversions = toolText.popularConversions ?? [];
  const longtailSectionTitle = tool.id === "base64encoder" || tool.id === "jsonformatter" || tool.id === "barcodegenerator"
    ? common.relatedToolsTitle
    : common.popularConversionsTitle;
  const categoryLabel = (() => {
    switch (tool.category) {
      case "text":
        return common.textCategory;
      case "utility":
        return common.utilityCategory;
      case "image":
        return common.imageCategory;
      case "security":
        return common.securityCategory;
      case "time":
        return common.timeCategory;
      case "display":
        return common.displayCategory;
      case "measurement":
        return common.measurementCategory;
      case "generator":
        return common.generatorCategory;
      case "network":
        return common.networkCategory || tool.category;
      default:
        return tool.category;
    }
  })();
  const relatedToolHrefById: Partial<Record<string, string>> = {
    dummytext: `/${locale}/wordcounter`,
    wordcounter: `/${locale}/dummytext`,
    countdown: `/${locale}/digitalclock`,
    digitalclock: `/${locale}/countdown`,
    screenlamp: `/${locale}/digitalclock`,
    qrgenerator: `/${locale}/barcodegenerator`,
    barcodegenerator: `/${locale}/qrgenerator`,
    percentagecalculator: `/${locale}/unit-converter`,
    unitconverter: `/${locale}/percentage-calculator`,
    base64encoder: `/${locale}/json-formatter`,
    jsonformatter: `/${locale}/base64-encoder-decoder`,
    iplookup: `/${locale}/json-formatter`,
  };
  const relatedToolHref = relatedToolHrefById[tool.id];

  return (
    <div className="tool-shell">
      <ToolSidebar locale={locale} activeSlug={tool.slug} currentTitle={title} />

      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "4rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">{categoryLabel}</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{title}</h1>
          <p className="tool-note">{description}</p>
        </header>

        {longtailIntro && (
          <section
            style={{
              marginBottom: "2rem",
              padding: "1.25rem 1.5rem",
              background: "var(--surface-soft)",
              borderRadius: "16px",
              border: "1px solid var(--line)",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>
              {common.whenToUse}
            </h2>
            <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1rem", margin: 0 }}>
              {longtailIntro}
            </p>
          </section>
        )}

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

          {toolText.examples && toolText.examples.length > 0 && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.examplesTitle}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {toolText.examples.map((example) => (
                  <li key={example} style={{ padding: "1rem 1.1rem", background: "var(--surface-soft)", border: "1px solid var(--line)", borderRadius: "14px", color: "var(--muted)", lineHeight: "1.7" }}>
                    {example}
                  </li>
                ))}
              </ul>
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

          {(unitConverterLinks.length > 0 || percentageCalculatorLinks.length > 0 || qrGeneratorLinks.length > 0 || imageCompressorLinks.length > 0 || base64EncoderLinks.length > 0 || jsonFormatterLinks.length > 0 || barcodeGeneratorLinks.length > 0 || popularConversions.length > 0) && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{longtailSectionTitle}</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
                {tool.id === "unitconverter"
                  ? unitConverterLinks.map((link, i) => (
                    <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                      <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                        {toolText.popularConversions?.[i] ?? link.title}
                      </Link>
                    </li>
                  ))
                  : tool.id === "percentagecalculator"
                    ? percentageCalculatorLinks.map((link) => (
                      <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                        <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                          {link.title}
                        </Link>
                      </li>
                    ))
                    : tool.id === "qrgenerator"
                      ? qrGeneratorLinks.map((link) => (
                        <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                          <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                            {link.title}
                          </Link>
                        </li>
                      ))
                      : tool.id === "imagecompressor"
                      ? imageCompressorLinks.map((link) => (
                          <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                            <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                              {link.title}
                            </Link>
                          </li>
                        ))
                      : tool.id === "base64encoder"
                        ? base64EncoderLinks.map((link) => (
                          <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                            <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                              {link.title}
                            </Link>
                          </li>
                        ))
                        : tool.id === "jsonformatter"
                          ? jsonFormatterLinks.map((link) => (
                            <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                              <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                                {link.title}
                              </Link>
                            </li>
                          ))
                          : tool.id === "barcodegenerator"
                            ? barcodeGeneratorLinks.map((link) => (
                              <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                                <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                                  {link.title}
                                </Link>
                              </li>
                            ))
                  : popularConversions.map((conv, i) => (
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
              {relatedToolHref ? (
                <Link
                  href={relatedToolHref}
                  className="tool-button secondary"
                  style={{ display: "inline-flex", padding: "1rem 2rem", borderRadius: "15px" }}
                >
                  {toolText.relatedTools}
                </Link>
              ) : (
                <span
                  className="tool-button secondary"
                  style={{ display: "inline-flex", padding: "1rem 2rem", borderRadius: "15px" }}
                >
                  {toolText.relatedTools}
                </span>
              )}
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
              {common.footerNote1}
              <br />
              {common.footerNote2}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
