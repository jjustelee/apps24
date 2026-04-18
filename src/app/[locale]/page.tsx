import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/category-nav";
import { ToolCard } from "@/components/tool-card";
import { getCategoryCopy, getCategoryGroups } from "@/features/tools/categories";
import { buildLocaleAlternates } from "@/lib/seo";
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
    title: commonText.homeTitle || "Web Utility Suite",
    description: commonText.homeSubtitle || "A browser-based collection of tools for text editing, image handling, QR code generation, barcode generation, JSON validation, unit conversion, and other everyday web tasks.",
  };
}

export default async function LocaleHome({ params }: LocaleHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const commonText = await getCommonText(validLocale);
  const categoryCopy = getCategoryCopy(validLocale);
  const categories = await Promise.all(
    getCategoryGroups(validLocale).map(async (group) => {
      const toolsWithText = await Promise.all(
        group.tools.map(async (tool) => ({
          tool,
          text: await getToolText(validLocale, tool),
        })),
      );

      return {
        ...group,
        toolsWithText,
      };
    }),
  );

  return (
    <>
      <section className="hero">
        <h1>{commonText.homeTitle || "Web Utility Suite"}</h1>
        <p>{commonText.homeSubtitle || "A browser-based collection of tools for text editing, image handling, QR code generation, barcode generation, JSON validation, unit conversion, and other everyday web tasks."}</p>
      </section>

      <section className="home-category-browser">
        <div className="home-category-browser-header">
          <div>
            <h2>{categoryCopy.sectionTitle}</h2>
            <p>{categoryCopy.sectionDescription}</p>
          </div>
        </div>

        <CategoryNav locale={validLocale} mode="home" />

        <div className="home-category-list">
          {categories.map((group) => (
            <section key={group.id} id={group.slug} className="home-category-section">
              <div className="home-category-section-header">
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <Link href={group.href} className="category-view-link">
                  {categoryCopy.viewAll}
                </Link>
              </div>

              <div id={`${group.slug}-tools`} className="tool-grid home-category-grid">
                {group.toolsWithText.slice(0, 4).map(({ tool, text }) => (
                  <ToolCard
                    key={tool.id}
                    href={`/${validLocale}/${tool.slug}`}
                    title={text.title}
                    description={text.description}
                    icon={tool.icon}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="tool-main-content">
        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>
              {commonText.homeAboutTitle || "About Apps24"}
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeIntro1 || "Open a tool, run the task, and get the result without extra steps."}
            </p>
            <p style={{ fontSize: "1.1rem", margin: 0, color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeIntro2 || "Built for practical workflows, fast access, and clear results on desktop and mobile."}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
              {commonText.homeWhatYouCanDoTitle || "What You Can Do on Apps24"}
            </h3>
            <p style={{ fontSize: "1.1rem", margin: 0, color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeWhatYouCanDoBody || "Apps24 brings together a growing collection of useful browser-based tools for text, images, formatting, visual utilities, and technical workflows. You can compress images, convert text case, validate JSON, generate passwords, compare text differences, encode and decode Base64, create QR codes, generate barcodes, and more."}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
              {commonText.homeWhyUsersChooseTitle || "Why Users Choose Apps24"}
            </h3>
            <ul style={{ fontSize: "1.1rem", margin: 0, paddingLeft: "1.25rem", color: "var(--muted)", lineHeight: "1.7" }}>
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
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
              {commonText.homeOngoingFocusTitle || "Our Ongoing Focus"}
            </h3>
            <p style={{ fontSize: "1.1rem", margin: 0, color: "var(--muted)", lineHeight: "1.7" }}>
              {commonText.homeOngoingFocusBody || "Apps24 is designed for everyday digital tasks in work, study, and online activity. Most tools work directly in the browser on desktop and mobile, making them easy to access and simple to use while the site continues to grow with new tools and better content."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
