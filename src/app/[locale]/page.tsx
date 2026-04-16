import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolCard } from "@/components/tool-card";
import { buildLocaleAlternates } from "@/lib/seo";
import { getVisibleTools } from "@/features/tools/registry";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { isLocale, type Locale } from "@/lib/site";

type LocaleHomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleHomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const commonText = await getCommonText(locale as Locale);

  return {
    alternates: buildLocaleAlternates(locale),
    title: commonText.homeTitle || "Home",
    description: commonText.homeSubtitle || "Discover fast, multilingual utility tools designed for search traffic and future expansion.",
  };
}

export default async function LocaleHome({ params }: LocaleHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const tools = getVisibleTools(validLocale);
  const commonText = await getCommonText(validLocale);

  const toolsWithText = await Promise.all(
    tools.map(async (tool) => ({
      tool,
      text: await getToolText(validLocale, tool),
    }))
  );

  return (
    <>
      <section className="hero">
        <h1>{commonText.homeTitle || "Fast Multilingual Tools"}</h1>
      </section>

      <section className="panel">
        {tools.length > 0 ? (
          <div className="tool-grid">
            {toolsWithText.map(({ tool, text }) => {
              return (
                <ToolCard
                  key={tool.id}
                  href={`/${validLocale}/${tool.slug}`}
                  title={text.title}
                  description={text.description}
                  icon={tool.icon}
                />
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <strong>No tools yet.</strong>
            <span>
              Add the first tool in <code>src/features/tools/registry.ts</code> and then
              add its implementation in <code>src/features/tools/implementations</code>.
            </span>
            <span>
              A future tool page will automatically appear at{" "}
              <code>/{validLocale}/your-tool-slug</code>.
            </span>
            <Link href={`/${validLocale}/contact`}>Contact page</Link>
          </div>
        )}
      </section>

      <section className="tool-main-content">
        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
              {commonText.homeAboutTitle || "About Apps24"}
            </h2>
            <p style={{ marginBottom: "1rem", color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeIntro1 || "Apps24 is a multilingual online tools website built for people who want fast, simple, and practical utilities without unnecessary steps."}
            </p>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeIntro2 || "Instead of downloading software or creating an account for small tasks, users can open a page, use a tool immediately, and get the result in just a few clicks."}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>
              {commonText.homeWhatYouCanDoTitle || "What You Can Do on Apps24"}
            </h3>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeWhatYouCanDoBody || "Apps24 brings together a growing collection of useful browser-based tools for text, images, formatting, visual utilities, and technical workflows. You can compress images, convert text case, validate JSON, generate passwords, compare text differences, encode and decode Base64, create QR codes, generate barcodes, and more."}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>
              {commonText.homeWhyUsersChooseTitle || "Why Users Choose Apps24"}
            </h3>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--muted)", lineHeight: "1.7" }}>
              {(commonText.homeWhyUsersChoosePoints || [
                "simple interfaces that are easy to use",
                "fast browser-based tools for quick tasks",
                "multilingual access for global users",
                "practical utilities for real-world needs",
              ]).map((point) => (
                <li key={point} style={{ marginBottom: "0.5rem" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>
              {commonText.homeOngoingFocusTitle || "Our Ongoing Focus"}
            </h3>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeOngoingFocusBody || "Apps24 is designed for everyday digital tasks in work, study, and online activity. Most tools work directly in the browser on desktop and mobile, making them easy to access and simple to use while the site continues to grow with new tools and better content."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
