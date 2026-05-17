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

const HOME_REVIEW_COPY: Record<
  Locale,
  {
    featuredTitle: string;
    featuredDescription: string;
    bestForLabel: string;
    useCasesTitle: string;
    useCasesDescription: string;
    useCases: string[];
    trustTitle: string;
    trustDescription: string;
    trustItems: string[];
    policyTitle: string;
    policyDescription: string;
  }
> = {
  en: {
    featuredTitle: "Popular tools for everyday web tasks",
    featuredDescription: "Start with the tools people most often need for images, text, data, security, and quick calculations.",
    bestForLabel: "Useful for",
    useCasesTitle: "What Apps24 helps you finish",
    useCasesDescription: "Each tool is focused on one practical task, so visitors can understand the purpose of the page and get a result quickly.",
    useCases: [
      "Compress images and prepare web-friendly files before publishing.",
      "Create QR codes and barcodes for links, labels, packaging, and events.",
      "Format JSON, decode Base64, compare text, and check network details.",
      "Generate passwords, calculate percentages, convert units, and count text length.",
    ],
    trustTitle: "Browser-based tools with clear handling",
    trustDescription: "Apps24 is built to be easy to review, easy to navigate, and clear about how tools process data.",
    trustItems: [
      "Most tools run directly in the browser without requiring an account.",
      "Image and text utilities are designed for short, user-initiated tasks.",
      "Network tools may call an API only when live IP or lookup data is needed.",
      "Privacy, terms, contact, and about pages are available from every language page.",
    ],
    policyTitle: "Site information and policies",
    policyDescription: "Review the site background, privacy information, terms, and contact page before using the tools.",
  },
  ko: {
    featuredTitle: "자주 쓰는 웹 작업용 대표 툴",
    featuredDescription: "이미지, 텍스트, 데이터, 보안, 빠른 계산에 필요한 핵심 도구부터 바로 사용할 수 있습니다.",
    bestForLabel: "추천 사용",
    useCasesTitle: "Apps24로 처리할 수 있는 작업",
    useCasesDescription: "각 도구는 하나의 실용적인 작업에 집중해, 방문자가 페이지 목적을 바로 이해하고 결과를 빠르게 얻도록 설계되었습니다.",
    useCases: [
      "게시 전 이미지를 압축하고 웹에 적합한 파일로 준비합니다.",
      "링크, 라벨, 패키지, 행사 안내용 QR 코드와 바코드를 만듭니다.",
      "JSON 정리, Base64 변환, 텍스트 비교, 네트워크 정보를 확인합니다.",
      "비밀번호 생성, 퍼센트 계산, 단위 변환, 글자 수 확인을 빠르게 처리합니다.",
    ],
    trustTitle: "브라우저 기반 처리와 명확한 안내",
    trustDescription: "Apps24는 검토하기 쉽고, 탐색하기 쉽고, 각 도구의 데이터 처리 방식을 이해하기 쉽게 구성되어 있습니다.",
    trustItems: [
      "대부분의 도구는 계정 없이 브라우저에서 직접 작동합니다.",
      "이미지와 텍스트 도구는 사용자가 직접 실행하는 짧은 작업에 맞춰 설계되었습니다.",
      "네트워크 도구는 실시간 IP 또는 조회 데이터가 필요할 때만 API를 사용할 수 있습니다.",
      "개인정보처리방침, 이용약관, 문의, 소개 페이지는 모든 언어 페이지에서 접근할 수 있습니다.",
    ],
    policyTitle: "사이트 정보와 정책",
    policyDescription: "도구를 사용하기 전에 사이트 소개, 개인정보 안내, 이용약관, 문의 페이지를 확인할 수 있습니다.",
  },
  fr: {
    featuredTitle: "Outils populaires pour les tâches web courantes",
    featuredDescription: "Commencez par les outils les plus utiles pour les images, le texte, les données, la sécurité et les calculs rapides.",
    bestForLabel: "Utile pour",
    useCasesTitle: "Ce qu’Apps24 vous aide à terminer",
    useCasesDescription: "Chaque outil se concentre sur une tâche pratique afin que les visiteurs comprennent vite son objectif et obtiennent un résultat.",
    useCases: [
      "Compresser des images et préparer des fichiers adaptés au web.",
      "Créer des QR codes et des codes-barres pour liens, étiquettes, emballages et événements.",
      "Formater du JSON, décoder du Base64, comparer du texte et vérifier des informations réseau.",
      "Générer des mots de passe, calculer des pourcentages, convertir des unités et compter le texte.",
    ],
    trustTitle: "Outils de navigateur avec traitement clair",
    trustDescription: "Apps24 est conçu pour être facile à vérifier, à parcourir et à comprendre dans sa façon de traiter les données.",
    trustItems: [
      "La plupart des outils fonctionnent directement dans le navigateur sans compte.",
      "Les outils d’image et de texte sont conçus pour des tâches courtes déclenchées par l’utilisateur.",
      "Les outils réseau peuvent appeler une API uniquement lorsque des données IP en direct sont nécessaires.",
      "Les pages confidentialité, conditions, contact et à propos sont accessibles dans chaque langue.",
    ],
    policyTitle: "Informations et politiques du site",
    policyDescription: "Consultez l’historique du site, la confidentialité, les conditions et la page de contact avant d’utiliser les outils.",
  },
  ja: {
    featuredTitle: "日常のWeb作業でよく使うツール",
    featuredDescription: "画像、テキスト、データ、セキュリティ、簡単な計算に役立つ主要ツールから始められます。",
    bestForLabel: "主な用途",
    useCasesTitle: "Apps24で完了できる作業",
    useCasesDescription: "各ツールは実用的なひとつの作業に集中しており、ページの目的を理解しやすく、すばやく結果を得られます。",
    useCases: [
      "公開前に画像を圧縮し、Web向けファイルを準備します。",
      "リンク、ラベル、パッケージ、イベント用のQRコードやバーコードを作成します。",
      "JSON整形、Base64変換、テキスト比較、ネットワーク情報確認を行います。",
      "パスワード生成、割合計算、単位変換、文字数確認をすばやく処理します。",
    ],
    trustTitle: "ブラウザベースで分かりやすい処理",
    trustDescription: "Apps24は、確認しやすく、移動しやすく、各ツールのデータ処理が理解しやすい構成です。",
    trustItems: [
      "ほとんどのツールはアカウントなしでブラウザ上で直接動作します。",
      "画像とテキストのツールは、ユーザーが開始する短い作業向けに設計されています。",
      "ネットワークツールは、ライブIPや照会データが必要な場合にのみAPIを使用することがあります。",
      "プライバシー、利用規約、お問い合わせ、概要ページは各言語ページからアクセスできます。",
    ],
    policyTitle: "サイト情報とポリシー",
    policyDescription: "ツールを使う前に、サイト概要、プライバシー情報、利用規約、お問い合わせページを確認できます。",
  },
  zh: {
    featuredTitle: "日常网页任务常用工具",
    featuredDescription: "从图片、文本、数据、安全和快速计算等最常用的工具开始。",
    bestForLabel: "适用于",
    useCasesTitle: "Apps24 可以帮助你完成什么",
    useCasesDescription: "每个工具都专注于一个实际任务，让访问者能快速理解页面用途并获得结果。",
    useCases: [
      "发布前压缩图片并准备适合网页的文件。",
      "为链接、标签、包装和活动创建二维码与条形码。",
      "格式化 JSON、解码 Base64、比较文本并检查网络信息。",
      "生成密码、计算百分比、转换单位并统计文本长度。",
    ],
    trustTitle: "基于浏览器并清楚说明处理方式",
    trustDescription: "Apps24 便于审核、导航清晰，并说明各类工具如何处理数据。",
    trustItems: [
      "大多数工具无需账户，可直接在浏览器中运行。",
      "图片和文本工具面向用户主动执行的短任务。",
      "网络工具仅在需要实时 IP 或查询数据时使用 API。",
      "隐私政策、条款、联系和关于页面可从每种语言页面访问。",
    ],
    policyTitle: "网站信息与政策",
    policyDescription: "使用工具前，可以查看网站背景、隐私信息、条款和联系页面。",
  },
  "zh-TW": {
    featuredTitle: "日常網頁任務常用工具",
    featuredDescription: "從圖片、文字、資料、安全和快速計算等最常用的工具開始。",
    bestForLabel: "適用於",
    useCasesTitle: "Apps24 可以幫你完成什麼",
    useCasesDescription: "每個工具都專注於一個實用任務，讓訪客能快速理解頁面用途並取得結果。",
    useCases: [
      "發布前壓縮圖片並準備適合網頁的檔案。",
      "為連結、標籤、包裝和活動建立 QR Code 與條碼。",
      "格式化 JSON、解碼 Base64、比較文字並檢查網路資訊。",
      "產生密碼、計算百分比、轉換單位並統計文字長度。",
    ],
    trustTitle: "以瀏覽器為基礎並清楚說明處理方式",
    trustDescription: "Apps24 便於審查、導覽清楚，並說明各類工具如何處理資料。",
    trustItems: [
      "大多數工具不需要帳號，可直接在瀏覽器中運作。",
      "圖片和文字工具面向使用者主動執行的短任務。",
      "網路工具僅在需要即時 IP 或查詢資料時使用 API。",
      "隱私政策、條款、聯絡和關於頁面可從每種語言頁面存取。",
    ],
    policyTitle: "網站資訊與政策",
    policyDescription: "使用工具前，可以查看網站背景、隱私資訊、條款與聯絡頁面。",
  },
  pt: {
    featuredTitle: "Ferramentas populares para tarefas web diárias",
    featuredDescription: "Comece pelas ferramentas mais usadas para imagens, texto, dados, segurança e cálculos rápidos.",
    bestForLabel: "Útil para",
    useCasesTitle: "O que o Apps24 ajuda você a concluir",
    useCasesDescription: "Cada ferramenta foca uma tarefa prática para que os visitantes entendam o objetivo da página e obtenham um resultado rápido.",
    useCases: [
      "Compactar imagens e preparar arquivos adequados para a web antes da publicação.",
      "Criar QR codes e códigos de barras para links, etiquetas, embalagens e eventos.",
      "Formatar JSON, decodificar Base64, comparar textos e verificar detalhes de rede.",
      "Gerar senhas, calcular porcentagens, converter unidades e contar texto.",
    ],
    trustTitle: "Ferramentas no navegador com tratamento claro",
    trustDescription: "O Apps24 foi feito para ser fácil de revisar, navegar e entender como cada ferramenta processa dados.",
    trustItems: [
      "A maioria das ferramentas funciona diretamente no navegador sem exigir conta.",
      "Ferramentas de imagem e texto são projetadas para tarefas curtas iniciadas pelo usuário.",
      "Ferramentas de rede podem chamar uma API apenas quando dados de IP em tempo real são necessários.",
      "Páginas de privacidade, termos, contato e sobre estão disponíveis em cada idioma.",
    ],
    policyTitle: "Informações e políticas do site",
    policyDescription: "Consulte a origem do site, privacidade, termos e contato antes de usar as ferramentas.",
  },
  es: {
    featuredTitle: "Herramientas populares para tareas web diarias",
    featuredDescription: "Empiece por las herramientas más usadas para imágenes, texto, datos, seguridad y cálculos rápidos.",
    bestForLabel: "Útil para",
    useCasesTitle: "Qué le ayuda a terminar Apps24",
    useCasesDescription: "Cada herramienta se centra en una tarea práctica para que los visitantes entiendan el propósito de la página y obtengan un resultado rápido.",
    useCases: [
      "Comprimir imágenes y preparar archivos adecuados para la web antes de publicar.",
      "Crear códigos QR y de barras para enlaces, etiquetas, embalajes y eventos.",
      "Formatear JSON, decodificar Base64, comparar texto y revisar detalles de red.",
      "Generar contraseñas, calcular porcentajes, convertir unidades y contar texto.",
    ],
    trustTitle: "Herramientas de navegador con manejo claro",
    trustDescription: "Apps24 está diseñado para ser fácil de revisar, navegar y entender en cuanto al tratamiento de datos.",
    trustItems: [
      "La mayoría de las herramientas funcionan directamente en el navegador sin cuenta.",
      "Las utilidades de imagen y texto están diseñadas para tareas breves iniciadas por el usuario.",
      "Las herramientas de red pueden llamar a una API solo cuando se necesitan datos de IP en vivo.",
      "Las páginas de privacidad, términos, contacto y acerca de están disponibles en cada idioma.",
    ],
    policyTitle: "Información y políticas del sitio",
    policyDescription: "Revise la información del sitio, privacidad, términos y contacto antes de usar las herramientas.",
  },
  de: {
    featuredTitle: "Beliebte Tools für tägliche Webaufgaben",
    featuredDescription: "Beginnen Sie mit den meistgenutzten Tools für Bilder, Text, Daten, Sicherheit und schnelle Berechnungen.",
    bestForLabel: "Nützlich für",
    useCasesTitle: "Was Apps24 Ihnen erleichtert",
    useCasesDescription: "Jedes Tool konzentriert sich auf eine praktische Aufgabe, damit Besucher den Zweck verstehen und schnell ein Ergebnis erhalten.",
    useCases: [
      "Bilder komprimieren und webtaugliche Dateien vor der Veröffentlichung vorbereiten.",
      "QR-Codes und Barcodes für Links, Etiketten, Verpackungen und Events erstellen.",
      "JSON formatieren, Base64 dekodieren, Texte vergleichen und Netzwerkdaten prüfen.",
      "Passwörter generieren, Prozente berechnen, Einheiten umrechnen und Textlängen zählen.",
    ],
    trustTitle: "Browserbasierte Tools mit klarer Verarbeitung",
    trustDescription: "Apps24 ist so aufgebaut, dass es leicht zu prüfen, zu navigieren und in der Datenverarbeitung verständlich ist.",
    trustItems: [
      "Die meisten Tools laufen direkt im Browser und erfordern kein Konto.",
      "Bild- und Texttools sind für kurze, vom Nutzer gestartete Aufgaben gedacht.",
      "Netzwerktools können eine API nur dann verwenden, wenn Live-IP- oder Lookup-Daten nötig sind.",
      "Datenschutz, Nutzungsbedingungen, Kontakt und Über-uns-Seiten sind in jeder Sprache erreichbar.",
    ],
    policyTitle: "Website-Informationen und Richtlinien",
    policyDescription: "Prüfen Sie Hintergrund, Datenschutz, Bedingungen und Kontaktseite, bevor Sie die Tools verwenden.",
  },
  ar: {
    featuredTitle: "أدوات شائعة لمهام الويب اليومية",
    featuredDescription: "ابدأ بالأدوات الأكثر استخداماً للصور والنصوص والبيانات والأمان والحسابات السريعة.",
    bestForLabel: "مفيد لـ",
    useCasesTitle: "ما الذي يساعدك Apps24 على إنجازه",
    useCasesDescription: "تركز كل أداة على مهمة عملية واحدة حتى يفهم الزائر الغرض من الصفحة ويحصل على نتيجة بسرعة.",
    useCases: [
      "ضغط الصور وتجهيز ملفات مناسبة للويب قبل النشر.",
      "إنشاء رموز QR والباركود للروابط والملصقات والتغليف والفعاليات.",
      "تنسيق JSON وفك Base64 ومقارنة النصوص وفحص تفاصيل الشبكة.",
      "توليد كلمات المرور وحساب النسب وتحويل الوحدات وعدّ النص.",
    ],
    trustTitle: "أدوات تعمل في المتصفح مع معالجة واضحة",
    trustDescription: "تم بناء Apps24 ليكون سهل المراجعة والتصفح وواضحاً في طريقة معالجة البيانات.",
    trustItems: [
      "تعمل معظم الأدوات مباشرة في المتصفح دون الحاجة إلى حساب.",
      "أدوات الصور والنصوص مصممة لمهام قصيرة يبدأها المستخدم.",
      "قد تستخدم أدوات الشبكة API فقط عند الحاجة إلى بيانات IP مباشرة.",
      "صفحات الخصوصية والشروط والتواصل وحول متاحة من كل لغة.",
    ],
    policyTitle: "معلومات الموقع والسياسات",
    policyDescription: "راجع خلفية الموقع والخصوصية والشروط وصفحة التواصل قبل استخدام الأدوات.",
  },
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
                  {text.examples?.length ? (
                    <div className="home-featured-examples">
                      <span>{reviewCopy.bestForLabel}</span>
                      <ul>
                        {text.examples.slice(0, 2).map((example) => (
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

          <section className="home-adsense-support">
            <div className="home-info-panel">
              <h3>{reviewCopy.useCasesTitle}</h3>
              <p>{reviewCopy.useCasesDescription}</p>
              <ul>
                {reviewCopy.useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </div>

            <div className="home-info-panel">
              <h3>{reviewCopy.trustTitle}</h3>
              <p>{reviewCopy.trustDescription}</p>
              <ul>
                {reviewCopy.trustItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="home-policy-panel">
              <div>
                <h3>{reviewCopy.policyTitle}</h3>
                <p>{reviewCopy.policyDescription}</p>
              </div>
              <div className="home-policy-links">
                <Link href={`/${validLocale}/about`}>{commonText.about}</Link>
                <Link href={`/${validLocale}/privacy`}>{commonText.privacy}</Link>
                <Link href={`/${validLocale}/terms`}>{commonText.terms}</Link>
                <Link href={`/${validLocale}/contact`}>{commonText.contact}</Link>
              </div>
            </div>
          </section>
        </ToolSearch>
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
