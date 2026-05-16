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
import { getPixelConverterLongtailLinks } from "@/features/tools/pixel-converter-longtails";
import { getBackgroundRemoverLongtailLinks } from "@/features/tools/background-remover-longtails";
import { getUnitConverterLongtailLinks } from "@/features/tools/unit-converter-longtails";
import { getLocalizedUrl, type Locale } from "@/lib/site";

type CategoryHubPageProps = {
  locale: Locale;
  categorySlug: string;
};

const CATEGORY_REVIEW_COPY: Record<
  Locale,
  {
    overviewTitle: string;
    overviewIntro: string;
    overviewBody: string;
    toolFitTitle: string;
    workflowTitle: string;
    workflowDescription: string;
    workflowTemplate: string;
    trustTitle: string;
    trustItems: string[];
  }
> = {
  en: {
    overviewTitle: "What this category is for",
    overviewIntro: "{category} brings together {count} focused tools for short, practical browser tasks.",
    overviewBody: "Use this page to compare the available tools before opening one. Each tool page includes its own instructions, examples, and notes so visitors can understand when the tool is useful and what to check before relying on the result.",
    toolFitTitle: "Which tool should you choose?",
    workflowTitle: "Common ways people use these tools",
    workflowDescription: "The tools in this category are intended for task-based workflows rather than long setup processes.",
    workflowTemplate: "Open {tool} when you need to {description}",
    trustTitle: "Content and data handling notes",
    trustItems: [
      "Most tools are designed to work directly in the browser without requiring an account.",
      "Tool pages explain the purpose of the utility, practical examples, and usage steps.",
      "Generated or converted results should be reviewed before use in publishing, production, or business workflows.",
    ],
  },
  ko: {
    overviewTitle: "이 카테고리의 목적",
    overviewIntro: "{category}에는 짧고 실용적인 브라우저 작업을 위한 {count}개의 도구가 정리되어 있습니다.",
    overviewBody: "이 페이지에서는 도구를 열기 전에 어떤 도구가 필요한지 비교할 수 있습니다. 각 도구 페이지에는 사용 목적, 예시, 사용 방법, 결과를 활용하기 전에 확인할 점이 함께 안내됩니다.",
    toolFitTitle: "어떤 도구를 선택해야 하나요?",
    workflowTitle: "자주 사용하는 작업 흐름",
    workflowDescription: "이 카테고리의 도구들은 복잡한 설정이 아니라 하나의 작업을 빠르게 끝내는 흐름에 맞춰져 있습니다.",
    workflowTemplate: "{description} 필요할 때 {tool}을 사용할 수 있습니다.",
    trustTitle: "콘텐츠 및 데이터 처리 안내",
    trustItems: [
      "대부분의 도구는 계정 없이 브라우저에서 직접 작동하도록 설계되었습니다.",
      "도구 페이지에는 유틸리티의 목적, 실제 예시, 사용 단계가 설명되어 있습니다.",
      "생성 또는 변환된 결과는 게시, 운영, 업무에 사용하기 전에 직접 확인하는 것이 좋습니다.",
    ],
  },
  fr: {
    overviewTitle: "À quoi sert cette catégorie",
    overviewIntro: "{category} regroupe {count} outils ciblés pour des tâches pratiques et rapides dans le navigateur.",
    overviewBody: "Cette page aide à comparer les outils disponibles avant d'en ouvrir un. Chaque page d'outil contient ses propres instructions, exemples et notes pour comprendre son usage et les points à vérifier avant d'utiliser le résultat.",
    toolFitTitle: "Quel outil choisir ?",
    workflowTitle: "Utilisations courantes",
    workflowDescription: "Les outils de cette catégorie sont pensés pour des tâches précises plutôt que pour des processus longs.",
    workflowTemplate: "Ouvrez {tool} lorsque vous devez {description}",
    trustTitle: "Notes sur le contenu et le traitement des données",
    trustItems: [
      "La plupart des outils fonctionnent directement dans le navigateur sans compte.",
      "Les pages d'outils expliquent l'objectif, des exemples pratiques et les étapes d'utilisation.",
      "Les résultats générés ou convertis doivent être vérifiés avant une publication, une production ou un usage professionnel.",
    ],
  },
  ja: {
    overviewTitle: "このカテゴリの目的",
    overviewIntro: "{category}には、短く実用的なブラウザ作業向けの{count}個のツールがまとまっています。",
    overviewBody: "このページでは、ツールを開く前に用途を比較できます。各ツールページには、目的、例、使い方、結果を利用する前に確認すべき点が掲載されています。",
    toolFitTitle: "どのツールを選ぶべきか",
    workflowTitle: "よくある使い方",
    workflowDescription: "このカテゴリのツールは、長い設定ではなく、具体的な作業をすばやく完了するためのものです。",
    workflowTemplate: "{description}必要があるときは{tool}を開きます。",
    trustTitle: "コンテンツとデータ処理の注意点",
    trustItems: [
      "ほとんどのツールは、アカウントなしでブラウザ上で直接動作するよう設計されています。",
      "各ツールページでは、目的、実用例、利用手順を説明しています。",
      "生成または変換された結果は、公開、制作、業務利用の前に確認してください。",
    ],
  },
  zh: {
    overviewTitle: "此分类的用途",
    overviewIntro: "{category} 汇集了 {count} 个面向短任务的实用浏览器工具。",
    overviewBody: "你可以先在此页面比较工具，再打开具体工具页。每个工具页都会说明用途、示例、使用步骤，以及在依赖结果前需要检查的事项。",
    toolFitTitle: "应该选择哪个工具？",
    workflowTitle: "常见使用方式",
    workflowDescription: "此分类中的工具面向具体任务，而不是复杂的设置流程。",
    workflowTemplate: "当你需要{description}时，可以打开 {tool}。",
    trustTitle: "内容与数据处理说明",
    trustItems: [
      "大多数工具无需账户，可直接在浏览器中运行。",
      "工具页面会说明用途、实际示例和使用步骤。",
      "生成或转换的结果在用于发布、生产或业务流程前应自行检查。",
    ],
  },
  "zh-TW": {
    overviewTitle: "此分類的用途",
    overviewIntro: "{category} 集合了 {count} 個面向短任務的實用瀏覽器工具。",
    overviewBody: "你可以先在此頁面比較工具，再開啟具體工具頁。每個工具頁都會說明用途、範例、使用步驟，以及在依賴結果前需要檢查的事項。",
    toolFitTitle: "應該選擇哪個工具？",
    workflowTitle: "常見使用方式",
    workflowDescription: "此分類中的工具面向具體任務，而不是複雜的設定流程。",
    workflowTemplate: "當你需要{description}時，可以開啟 {tool}。",
    trustTitle: "內容與資料處理說明",
    trustItems: [
      "大多數工具不需要帳號，可直接在瀏覽器中運作。",
      "工具頁面會說明用途、實際範例和使用步驟。",
      "產生或轉換的結果在用於發布、生產或業務流程前應自行檢查。",
    ],
  },
  pt: {
    overviewTitle: "Para que serve esta categoria",
    overviewIntro: "{category} reúne {count} ferramentas focadas para tarefas práticas e rápidas no navegador.",
    overviewBody: "Use esta página para comparar as ferramentas disponíveis antes de abrir uma delas. Cada página de ferramenta inclui instruções, exemplos e notas para entender quando ela é útil e o que revisar antes de confiar no resultado.",
    toolFitTitle: "Qual ferramenta escolher?",
    workflowTitle: "Formas comuns de uso",
    workflowDescription: "As ferramentas desta categoria foram feitas para fluxos baseados em tarefas, sem processos longos de configuração.",
    workflowTemplate: "Abra {tool} quando precisar {description}",
    trustTitle: "Notas sobre conteúdo e tratamento de dados",
    trustItems: [
      "A maioria das ferramentas funciona diretamente no navegador sem exigir conta.",
      "As páginas explicam o objetivo da ferramenta, exemplos práticos e etapas de uso.",
      "Resultados gerados ou convertidos devem ser revisados antes de uso em publicação, produção ou negócios.",
    ],
  },
  es: {
    overviewTitle: "Para qué sirve esta categoría",
    overviewIntro: "{category} reúne {count} herramientas enfocadas en tareas prácticas y rápidas del navegador.",
    overviewBody: "Use esta página para comparar las herramientas disponibles antes de abrir una. Cada página de herramienta incluye instrucciones, ejemplos y notas para entender cuándo es útil y qué revisar antes de confiar en el resultado.",
    toolFitTitle: "¿Qué herramienta elegir?",
    workflowTitle: "Formas comunes de uso",
    workflowDescription: "Las herramientas de esta categoría están pensadas para flujos basados en tareas, no para procesos largos de configuración.",
    workflowTemplate: "Abra {tool} cuando necesite {description}",
    trustTitle: "Notas sobre contenido y tratamiento de datos",
    trustItems: [
      "La mayoría de las herramientas funcionan directamente en el navegador sin cuenta.",
      "Las páginas explican el propósito de la utilidad, ejemplos prácticos y pasos de uso.",
      "Los resultados generados o convertidos deben revisarse antes de usarlos en publicación, producción o negocios.",
    ],
  },
  de: {
    overviewTitle: "Wofür diese Kategorie gedacht ist",
    overviewIntro: "{category} bündelt {count} fokussierte Tools für kurze, praktische Aufgaben im Browser.",
    overviewBody: "Diese Seite hilft, verfügbare Tools zu vergleichen, bevor Sie eines öffnen. Jede Tool-Seite enthält eigene Anleitungen, Beispiele und Hinweise, damit Besucher den Nutzen und notwendige Prüfungen vor der Verwendung verstehen.",
    toolFitTitle: "Welches Tool sollten Sie wählen?",
    workflowTitle: "Häufige Arbeitsabläufe",
    workflowDescription: "Die Tools in dieser Kategorie sind für aufgabenbasierte Abläufe gedacht, nicht für lange Einrichtungsprozesse.",
    workflowTemplate: "Öffnen Sie {tool}, wenn Sie {description}",
    trustTitle: "Hinweise zu Inhalt und Datenverarbeitung",
    trustItems: [
      "Die meisten Tools laufen direkt im Browser und erfordern kein Konto.",
      "Tool-Seiten erklären Zweck, praktische Beispiele und Nutzungsschritte.",
      "Generierte oder konvertierte Ergebnisse sollten vor Veröffentlichung, Produktion oder geschäftlicher Nutzung geprüft werden.",
    ],
  },
  ar: {
    overviewTitle: "الغرض من هذه الفئة",
    overviewIntro: "تجمع {category} عدد {count} من الأدوات المركزة للمهام العملية القصيرة داخل المتصفح.",
    overviewBody: "استخدم هذه الصفحة لمقارنة الأدوات المتاحة قبل فتح أداة محددة. تتضمن كل صفحة أداة تعليمات وأمثلة وملاحظات تساعد الزائر على فهم فائدتها وما يجب التحقق منه قبل الاعتماد على النتيجة.",
    toolFitTitle: "أي أداة تختار؟",
    workflowTitle: "طرق الاستخدام الشائعة",
    workflowDescription: "أدوات هذه الفئة مصممة لسير عمل قائم على مهمة محددة بدلاً من عمليات إعداد طويلة.",
    workflowTemplate: "افتح {tool} عندما تحتاج إلى {description}",
    trustTitle: "ملاحظات حول المحتوى ومعالجة البيانات",
    trustItems: [
      "تعمل معظم الأدوات مباشرة في المتصفح دون الحاجة إلى حساب.",
      "تشرح صفحات الأدوات هدف الأداة والأمثلة العملية وخطوات الاستخدام.",
      "ينبغي مراجعة النتائج التي يتم إنشاؤها أو تحويلها قبل استخدامها في النشر أو الإنتاج أو الأعمال.",
    ],
  },
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
  const pixelConverterLinks = categorySlug === "images-pdf-tools" ? getPixelConverterLongtailLinks(locale) : [];
  const backgroundRemoverLinks = categorySlug === "images-pdf-tools" ? getBackgroundRemoverLongtailLinks(locale) : [];
  const base64EncoderLinks = categorySlug === "code-data-tools" ? getBase64EncoderLongtailLinks(locale) : [];
  const jsonFormatterLinks = categorySlug === "code-data-tools" ? getJsonFormatterLongtailLinks(locale) : [];
  const barcodeGeneratorLinks = categorySlug === "generator-tools" ? getBarcodeGeneratorLongtailLinks(locale) : [];
  const unitConverterTitle = toolsWithText.find(({ tool }) => tool.id === "unitconverter")?.text.title;
  const percentageCalculatorTitle = toolsWithText.find(({ tool }) => tool.id === "percentagecalculator")?.text.title;
  const qrGeneratorTitle = toolsWithText.find(({ tool }) => tool.id === "qrgenerator")?.text.title;
  const imageCompressorTitle = toolsWithText.find(({ tool }) => tool.id === "imagecompressor")?.text.title;
  const pixelConverterTitle = toolsWithText.find(({ tool }) => tool.id === "pixelconverter")?.text.title;
  const backgroundRemoverTitle = toolsWithText.find(({ tool }) => tool.id === "backgroundremover")?.text.title;
  const base64EncoderTitle = toolsWithText.find(({ tool }) => tool.id === "base64encoder")?.text.title;
  const jsonFormatterTitle = toolsWithText.find(({ tool }) => tool.id === "jsonformatter")?.text.title;
  const barcodeGeneratorTitle = toolsWithText.find(({ tool }) => tool.id === "barcodegenerator")?.text.title;
  const reviewCopy = CATEGORY_REVIEW_COPY[locale] ?? CATEGORY_REVIEW_COPY.en;
  const introText = reviewCopy.overviewIntro
    .replace("{category}", localizedGroup.title)
    .replace("{count}", String(toolsWithText.length));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": localizedGroup.title,
    "description": localizedGroup.description,
    "hasPart": toolsWithText.map(({ tool, text }) => ({
      "@type": "SoftwareApplication",
      "name": text.title,
      "description": text.description,
      "applicationCategory": tool.category,
      "url": getLocalizedUrl(locale, `/${tool.slug}`),
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    })),
  };

  return (
    <div className="content-page-wrapper" style={{ maxWidth: "1120px", margin: "0 auto", width: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        <section className="category-editorial-section">
          <div className="category-editorial-intro">
            <h2>{reviewCopy.overviewTitle}</h2>
            <p>{introText}</p>
            <p>{reviewCopy.overviewBody}</p>
          </div>

          <div className="category-tool-fit">
            <h2>{reviewCopy.toolFitTitle}</h2>
            <div className="category-tool-fit-grid">
              {toolsWithText.slice(0, 6).map(({ tool, text }) => (
                <article key={tool.id} className="category-tool-fit-card">
                  <h3>{text.title}</h3>
                  <p>{text.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="category-review-grid">
            <article className="category-review-card">
              <h2>{reviewCopy.workflowTitle}</h2>
              <p>{reviewCopy.workflowDescription}</p>
              <ul>
                {toolsWithText.slice(0, 4).map(({ tool, text }) => (
                  <li key={tool.id}>
                    {reviewCopy.workflowTemplate
                      .replace("{tool}", text.title)
                      .replace("{description}", text.description)}
                  </li>
                ))}
              </ul>
            </article>

            <article className="category-review-card">
              <h2>{reviewCopy.trustTitle}</h2>
              <ul>
                {reviewCopy.trustItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

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

        {(unitConverterLinks.length > 0 || percentageCalculatorLinks.length > 0 || qrGeneratorLinks.length > 0 || imageCompressorLinks.length > 0 || pixelConverterLinks.length > 0 || backgroundRemoverLinks.length > 0 || base64EncoderLinks.length > 0 || jsonFormatterLinks.length > 0 || barcodeGeneratorLinks.length > 0) && (
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

            {pixelConverterLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {pixelConverterTitle || common.popularConversionsTitle}
                </h2>
                <div className="tool-grid">
                  {pixelConverterLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="PX"
                    />
                  ))}
                </div>
              </div>
            )}

            {backgroundRemoverLinks.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>
                  {backgroundRemoverTitle || common.relatedToolsTitle}
                </h2>
                <div className="tool-grid">
                  {backgroundRemoverLinks.map((link) => (
                    <ToolCard
                      key={link.slug}
                      href={link.href}
                      title={link.title}
                      description={link.description}
                      icon="BG"
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
