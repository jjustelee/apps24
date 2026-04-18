import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/category-nav";
import { ToolCard } from "@/components/tool-card";
import {
  getCategoryGroupBySlug,
  getCategoryGroupTools,
  getCategoryGroups,
} from "@/features/tools/categories";
import { getCommonText, getToolText } from "@/features/tools/copy";
import { getImageCompressorLongtailLinks } from "@/features/tools/image-compressor-longtails";
import { getBase64EncoderLongtailLinks } from "@/features/tools/base64-encoder-longtails";
import { getJsonFormatterLongtailLinks } from "@/features/tools/json-formatter-longtails";
import { getQrGeneratorLongtailLinks } from "@/features/tools/qrgenerator-longtails";
import { getBarcodeGeneratorLongtailLinks } from "@/features/tools/barcode-generator-longtails";
import { getPercentageCalculatorLongtailLinks } from "@/features/tools/percentage-calculator-longtails";
import { getUnitConverterLongtailLinks } from "@/features/tools/unit-converter-longtails";
import type { Locale } from "@/lib/site";

type CategoryHubPageProps = {
  locale: Locale;
  categorySlug: string;
};

export async function CategoryHubPage({ locale, categorySlug }: CategoryHubPageProps) {
  const common = await getCommonText(locale);
  const groupDefinition = getCategoryGroupBySlug(categorySlug);

  if (!groupDefinition) {
    notFound();
  }

  const localizedGroup = getCategoryGroups(locale).find((group) => group.slug === categorySlug);

  if (!localizedGroup) {
    notFound();
  }

  const tools = getCategoryGroupTools(locale, groupDefinition.id);
  const toolsWithText = await Promise.all(
    tools.map(async (tool) => ({
      tool,
      text: await getToolText(locale, tool),
    })),
  );
  const unitConverterLinks = categorySlug === "convert-calculate-tools" ? getUnitConverterLongtailLinks(locale) : [];
  const percentageCalculatorLinks = categorySlug === "convert-calculate-tools" ? getPercentageCalculatorLongtailLinks(locale) : [];
  const qrGeneratorLinks = categorySlug === "generator-tools" ? getQrGeneratorLongtailLinks(locale) : [];
  const imageCompressorLinks = categorySlug === "images-pdf-tools" ? getImageCompressorLongtailLinks(locale) : [];
  const base64EncoderLinks = categorySlug === "code-data-tools" ? getBase64EncoderLongtailLinks(locale) : [];
  const jsonFormatterLinks = categorySlug === "code-data-tools" ? getJsonFormatterLongtailLinks(locale) : [];
  const barcodeGeneratorLinks = categorySlug === "generator-tools" ? getBarcodeGeneratorLongtailLinks(locale) : [];
  const unitConverterTitle = toolsWithText.find(({ tool }) => tool.id === "unitconverter")?.text.title;
  const percentageCalculatorTitle = toolsWithText.find(({ tool }) => tool.id === "percentagecalculator")?.text.title;
  const qrGeneratorTitle = toolsWithText.find(({ tool }) => tool.id === "qrgenerator")?.text.title;
  const imageCompressorTitle = toolsWithText.find(({ tool }) => tool.id === "imagecompressor")?.text.title;
  const base64EncoderTitle = toolsWithText.find(({ tool }) => tool.id === "base64encoder")?.text.title;
  const jsonFormatterTitle = toolsWithText.find(({ tool }) => tool.id === "jsonformatter")?.text.title;
  const barcodeGeneratorTitle = toolsWithText.find(({ tool }) => tool.id === "barcodegenerator")?.text.title;

  return (
    <div className="content-page-wrapper" style={{ maxWidth: "1120px", margin: "0 auto", width: "100%" }}>
      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "2rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">{localizedGroup.shortLabel}</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{localizedGroup.title}</h1>
          <p className="tool-note">{localizedGroup.description}</p>
        </header>

        <CategoryNav locale={locale} mode="route" activeSlug={localizedGroup.slug} />

        <section style={{ marginTop: "2rem" }}>
          <div className="tool-grid">
            {toolsWithText.map(({ tool, text }) => (
              <ToolCard
                key={tool.id}
                href={`/${locale}/${tool.slug}`}
                title={text.title}
                description={text.description}
                icon={tool.icon}
              />
            ))}
          </div>
        </section>

        {(unitConverterLinks.length > 0 || percentageCalculatorLinks.length > 0 || qrGeneratorLinks.length > 0 || imageCompressorLinks.length > 0 || base64EncoderLinks.length > 0 || jsonFormatterLinks.length > 0 || barcodeGeneratorLinks.length > 0) && (
          <section style={{ marginTop: "3rem", display: "grid", gap: "2.5rem" }}>
            {unitConverterLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {unitConverterTitle || common.popularConversionsTitle}
                </h2>
                <div className="tool-grid">
                  {unitConverterLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="↔"
                    />
                  ))}
                </div>
              </div>
            )}

            {percentageCalculatorLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {percentageCalculatorTitle || common.popularConversionsTitle}
                </h2>
                <div className="tool-grid">
                  {percentageCalculatorLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="％"
                    />
                  ))}
                </div>
              </div>
            )}

            {qrGeneratorLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {qrGeneratorTitle || common.popularConversionsTitle}
                </h2>
                <div className="tool-grid">
                  {qrGeneratorLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="QR"
                    />
                  ))}
                </div>
              </div>
            )}

            {imageCompressorLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {imageCompressorTitle || common.popularConversionsTitle}
                </h2>
                <div className="tool-grid">
                  {imageCompressorLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="IMG"
                    />
                  ))}
                </div>
              </div>
            )}

            {base64EncoderLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {base64EncoderTitle || common.relatedToolsTitle}
                </h2>
                <div className="tool-grid">
                  {base64EncoderLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="b64"
                    />
                  ))}
                </div>
              </div>
            )}

            {jsonFormatterLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {jsonFormatterTitle || common.relatedToolsTitle}
                </h2>
                <div className="tool-grid">
                  {jsonFormatterLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="{}"
                    />
                  ))}
                </div>
              </div>
            )}

            {barcodeGeneratorLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {barcodeGeneratorTitle || common.relatedToolsTitle}
                </h2>
                <div className="tool-grid">
                  {barcodeGeneratorLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="BC"
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <footer style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <Link href={`/${locale}`} className="tool-button secondary">
            {common.backToTools}
          </Link>
        </footer>
      </main>
    </div>
  );
}
