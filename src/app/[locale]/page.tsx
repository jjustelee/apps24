import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/category-nav";
import { ToolCard } from "@/components/tool-card";
import { ToolSearch } from "@/components/tool-search";
import { getCategoryCopy, getCategoryGroups } from "@/features/tools/categories";
import { buildLocaleAlternates } from "@/lib/seo";
import { getToolText, getCommonText } from "@/features/tools/copy";
import { isLocale, type Locale } from "@/lib/site";
import { GuideLinks } from "@/components/guide-links";

type LocaleHomeProps = {
  params: Promise<{ locale: string }>;
};

const FEATURED_TOOL_IDS = [
  "imagecompressor",
  "backgroundremover",
  "qrgenerator",
  "barcodegenerator",
  "jsonformatter",
  "passwordgenerator",
  "iplookup",
  "unitconverter",
  "percentagecalculator",
  "wordcounter",
];

const HOME_REVIEW_COPY: Record<Locale, { featuredTitle: string; featuredDescription: string; bestForLabel: string }> = {
  en: { featuredTitle: "Popular tools for everyday web tasks", featuredDescription: "Start with the tools people most often need for images, text, data, security, and quick calculations.", bestForLabel: "Useful for" },
  ko: { featuredTitle: "자주 쓰는 웹 작업용 대표 툴", featuredDescription: "이미지, 텍스트, 데이터, 보안, 빠른 계산에 필요한 핵심 도구부터 바로 사용할 수 있습니다.", bestForLabel: "추천 사용" },
  fr: { featuredTitle: "Outils populaires pour les tâches web courantes", featuredDescription: "Commencez par les outils les plus utiles pour les images, le texte, les données, la sécurité et les calculs rapides.", bestForLabel: "Utile pour" },
  ja: { featuredTitle: "日常のWeb作業でよく使うツール", featuredDescription: "画像、テキスト、データ、セキュリティ、簡単な計算に役立つ主要ツールから始められます。", bestForLabel: "主な用途" },
  zh: { featuredTitle: "日常网页任务常用工具", featuredDescription: "从图片、文本、数据、安全和快速计算等最常用的工具开始。", bestForLabel: "适用于" },
  "zh-TW": { featuredTitle: "日常網頁任務常用工具", featuredDescription: "從圖片、文字、資料、安全和快速計算等最常用的工具開始。", bestForLabel: "適用於" },
  pt: { featuredTitle: "Ferramentas populares para tarefas web diárias", featuredDescription: "Comece pelas ferramentas mais usadas para imagens, texto, dados, segurança e cálculos rápidos.", bestForLabel: "Útil para" },
  es: { featuredTitle: "Herramientas populares para tareas web diarias", featuredDescription: "Empiece por las herramientas más usadas para imágenes, texto, datos, seguridad y cálculos rápidos.", bestForLabel: "Útil para" },
  de: { featuredTitle: "Beliebte Tools für tägliche Webaufgaben", featuredDescription: "Beginnen Sie mit den meistgenutzten Tools für Bilder, Text, Daten, Sicherheit und schnelle Berechnungen.", bestForLabel: "Nützlich für" },
  ar: { featuredTitle: "أدوات شائعة لمهام الويب اليومية", featuredDescription: "ابدأ بالأدوات الأكثر استخداماً للصور والنصوص والبيانات والأمان والحسابات السريعة.", bestForLabel: "مفيد لـ" },
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
  const reviewCopy = HOME_REVIEW_COPY[validLocale] ?? HOME_REVIEW_COPY.en;
  const allToolsWithText = categories.flatMap((group) =>
    group.toolsWithText.map(({ tool, text }) => ({
      tool,
      text,
      group,
    })),
  );
  const searchTools = allToolsWithText.map(({ tool, text, group }) => ({
      id: tool.id,
      href: `/${validLocale}/${tool.slug}`,
      title: text.title,
      description: text.description,
      icon: tool.icon,
      category: tool.category,
      groupTitle: group.title,
      keywords: tool.keywords,
      tags: tool.tags,
    }),
  );
  const featuredTools = FEATURED_TOOL_IDS
    .map((id) => allToolsWithText.find(({ tool }) => tool.id === id))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return (
    <>
      <section className="home-hero-panel">
        <div className="home-hero-copy">
          <span className="home-eyebrow">{categoryCopy.sectionTitle}</span>
          <h1>{commonText.homeTitle || "Web Utility Suite"}</h1>
          <p>{commonText.homeSubtitle || "A browser-based collection of tools for text editing, image handling, QR code generation, barcode generation, JSON validation, unit conversion, and other everyday web tasks."}</p>
        </div>
      </section>

      <section className="home-category-browser" aria-label={categoryCopy.sectionTitle}>
        <ToolSearch locale={validLocale} tools={searchTools}>
          <section className="home-featured-tools">
            <div className="home-featured-header">
              <div>
                <h3>{reviewCopy.featuredTitle}</h3>
                <p>{reviewCopy.featuredDescription}</p>
              </div>
            </div>

            <div className="home-featured-grid">
              {featuredTools.map(({ tool, text }) => (
                <Link
                  key={tool.id}
                  href={`/${validLocale}/${tool.slug}`}
                  className="home-featured-card"
                  aria-label={text.title}
                >
                  <div className="home-featured-card-top">
                    <span className="tool-card-icon" aria-hidden="true">
                      {tool.icon}
                    </span>
                    <div>
                      <h4>{text.title}</h4>
                      <p>{text.description}</p>
                    </div>
                  </div>
                  {text.cardExamples?.length ? (
                    <div className="home-featured-examples">
                      <span>{reviewCopy.bestForLabel}</span>
                      <ul>
                        {text.cardExamples.slice(0, 2).map((example) => (
                          <li key={example}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="home-featured-context">{text.usageContext || text.longDescription}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>

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

        </ToolSearch>
      </section>

      <GuideLinks locale={validLocale} />
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


        </div>
      </section>
    </>
  );
}
