import { getVisibleTools } from "@/features/tools/registry";
import type { ToolDefinition, ToolCategoryGroup } from "@/features/tools/types";
import type { Locale } from "@/lib/site";

export type CategoryCopy = {
  sectionTitle: string;
  sectionDescription: string;
  viewAll: string;
};

export type CategoryGroupDefinition = {
  id: ToolCategoryGroup;
  slug: string;
  order: number;
  title: Record<Locale, string>;
  shortLabel: Record<Locale, string>;
  description: Record<Locale, string>;
};

export type LocalizedCategoryGroup = Omit<CategoryGroupDefinition, "title" | "shortLabel" | "description"> & {
  title: string;
  shortLabel: string;
  description: string;
  href: string;
  tools: ToolDefinition[];
};

export const CATEGORY_COPY: Record<Locale, CategoryCopy> = {
  en: {
    sectionTitle: "Browse by Category",
    sectionDescription: "Jump straight to the tools you need or open a hub to see the full group.",
    viewAll: "View all",
  },
  ko: {
    sectionTitle: "카테고리별 탐색",
    sectionDescription: "필요한 도구로 바로 이동하거나 허브 페이지에서 관련 도구를 모두 확인하세요.",
    viewAll: "모두 보기",
  },
  fr: {
    sectionTitle: "Parcourir par catégorie",
    sectionDescription: "Accédez vite aux bons outils ou ouvrez un hub pour voir tout le groupe.",
    viewAll: "Voir tout",
  },
  ja: {
    sectionTitle: "カテゴリから探す",
    sectionDescription: "必要なツールにすぐ移動するか、ハブページで関連ツールをまとめて確認できます。",
    viewAll: "すべてを見る",
  },
  zh: {
    sectionTitle: "按分类浏览",
    sectionDescription: "快速跳转到所需工具，或打开分类页查看完整工具组。",
    viewAll: "查看全部",
  },
  "zh-TW": {
    sectionTitle: "依分類瀏覽",
    sectionDescription: "快速跳到需要的工具，或打開分類頁查看完整工具組。",
    viewAll: "查看全部",
  },
  pt: {
    sectionTitle: "Navegar por categoria",
    sectionDescription: "Vá direto para as ferramentas certas ou abra um hub para ver o grupo completo.",
    viewAll: "Ver todos",
  },
  es: {
    sectionTitle: "Explorar por categoría",
    sectionDescription: "Ve directo a las herramientas correctas o abre un hub para ver el grupo completo.",
    viewAll: "Ver todo",
  },
  de: {
    sectionTitle: "Nach Kategorie durchsuchen",
    sectionDescription: "Springen Sie direkt zu den richtigen Tools oder öffnen Sie einen Hub, um die Gruppe vollständig zu sehen.",
    viewAll: "Alle anzeigen",
  },
  ar: {
    sectionTitle: "تصفح حسب الفئة",
    sectionDescription: "انتقل مباشرة إلى الأدوات المناسبة أو افتح صفحة الفئة لرؤية المجموعة كاملة.",
    viewAll: "عرض الكل",
  },
};

export const CATEGORY_GROUPS: readonly CategoryGroupDefinition[] = [
  {
    id: "write-text-tools",
    slug: "write-text-tools",
    order: 5,
    title: {
      en: "Text Tools",
      ko: "텍스트 도구",
      fr: "Outils texte",
      ja: "テキスト",
      zh: "文本工具",
      "zh-TW": "文字工具",
      pt: "Ferramentas de texto",
      es: "Herramientas de texto",
      de: "Text-Tools",
      ar: "أدوات النص",
    },
    shortLabel: {
      en: "Text",
      ko: "텍스트",
      fr: "Texte",
      ja: "テキスト",
      zh: "文本",
      "zh-TW": "文字",
      pt: "Texto",
      es: "Texto",
      de: "Text",
      ar: "نص",
    },
    description: {
      en: "Tools for writing, counting, comparing, and preparing text.",
      ko: "글자 수 세기, 비교, 변환, 정리에 쓰는 도구들입니다.",
      fr: "Outils pour compter, comparer, convertir et préparer du texte.",
      ja: "テキストの集計、比較、変換、整理に使うツールです。",
      zh: "用于统计、比较、转换和整理文本的工具。",
      "zh-TW": "用於統計、比較、轉換與整理文字的工具。",
      pt: "Ferramentas para contar, comparar, converter e preparar texto.",
      es: "Herramientas para contar, comparar, convertir y preparar texto.",
      de: "Werkzeuge zum Zählen, Vergleichen, Umwandeln und Vorbereiten von Text.",
      ar: "أدوات لعد النص ومقارنته وتحويله وتجهيزه.",
    },
  },
  {
    id: "images-pdf-tools",
    slug: "images-pdf-tools",
    order: 1,
    title: {
      en: "Image Tools",
      ko: "이미지 도구",
      fr: "Outils image",
      ja: "画像",
      zh: "图片工具",
      "zh-TW": "圖片工具",
      pt: "Ferramentas de imagem",
      es: "Herramientas de imagen",
      de: "Bild-Tools",
      ar: "أدوات الصور",
    },
    shortLabel: {
      en: "Image",
      ko: "이미지",
      fr: "Image",
      ja: "画像",
      zh: "图片",
      "zh-TW": "圖片",
      pt: "Imagem",
      es: "Imagen",
      de: "Bild",
      ar: "صورة",
    },
    description: {
      en: "Tools for compressing, converting, resizing, and preparing image or PDF files.",
      ko: "이미지와 PDF를 압축, 변환, 정리하는 도구들입니다.",
      fr: "Outils pour compresser, convertir, redimensionner et préparer des images ou des PDF.",
      ja: "画像やPDFを圧縮・変換・調整するためのツールです。",
      zh: "用于压缩、转换、调整和准备图片或 PDF 文件的工具。",
      "zh-TW": "用於壓縮、轉換、調整與準備圖片或 PDF 檔案的工具。",
      pt: "Ferramentas para comprimir, converter, redimensionar e preparar imagens ou PDFs.",
      es: "Herramientas para comprimir, convertir, redimensionar y preparar imágenes o archivos PDF.",
      de: "Werkzeuge zum Komprimieren, Umwandeln, Skalieren und Vorbereiten von Bild- oder PDF-Dateien.",
      ar: "أدوات لضغط الصور أو ملفات PDF وتحويلها وتجهيزها.",
    },
  },
  {
    id: "code-data-tools",
    slug: "code-data-tools",
    order: 4,
    title: {
      en: "Code Tools",
      ko: "코드 도구",
      fr: "Outils code",
      ja: "コード",
      zh: "代码工具",
      "zh-TW": "程式工具",
      pt: "Ferramentas de código",
      es: "Herramientas de código",
      de: "Code-Tools",
      ar: "أدوات الكود",
    },
    shortLabel: {
      en: "Code",
      ko: "코드",
      fr: "Code",
      ja: "コード",
      zh: "代码",
      "zh-TW": "程式",
      pt: "Código",
      es: "Código",
      de: "Code",
      ar: "كود",
    },
    description: {
      en: "Tools for formatting, validating, converting, and inspecting structured data.",
      ko: "구조화된 데이터와 코드를 포맷, 검증, 확인하는 도구들입니다.",
      fr: "Outils pour formater, valider, convertir et inspecter des données structurées.",
      ja: "構造化データやコードの整形、検証、確認に使うツールです。",
      zh: "用于格式化、验证、转换和检查结构化数据与代码的工具。",
      "zh-TW": "用於格式化、驗證、轉換與檢查結構化資料和程式碼的工具。",
      pt: "Ferramentas para formatar, validar, converter e inspecionar dados estruturados.",
      es: "Herramientas para formatear, validar, convertir e inspeccionar datos estructurados.",
      de: "Werkzeuge zum Formatieren, Validieren, Umwandeln und Prüfen strukturierter Daten.",
      ar: "أدوات لتنسيق البيانات المنظمة والتحقق منها وتحويلها وفحصها.",
    },
  },
  {
    id: "convert-calculate-tools",
    slug: "convert-calculate-tools",
    order: 2,
    title: {
      en: "Convert Tools",
      ko: "변환 도구",
      fr: "Outils conversion",
      ja: "変換",
      zh: "转换工具",
      "zh-TW": "轉換工具",
      pt: "Ferramentas de conversão",
      es: "Herramientas de conversión",
      de: "Umrechnungs-Tools",
      ar: "أدوات التحويل",
    },
    shortLabel: {
      en: "Convert",
      ko: "변환",
      fr: "Conversion",
      ja: "変換",
      zh: "转换",
      "zh-TW": "轉換",
      pt: "Conversão",
      es: "Conversión",
      de: "Umrechnung",
      ar: "تحويل",
    },
    description: {
      en: "Tools for unit conversion, percentages, measurements, and everyday calculations.",
      ko: "단위, 퍼센트, 일상 계산을 위한 도구들입니다.",
      fr: "Outils pour les conversions, les pourcentages, les mesures et les calculs du quotidien.",
      ja: "単位変換、割合、日常の計算に使うツールです。",
      zh: "用于单位换算、百分比、测量和日常计算的工具。",
      "zh-TW": "用於單位換算、百分比、測量與日常計算的工具。",
      pt: "Ferramentas para conversão de unidades, percentuais, medidas e cálculos do dia a dia.",
      es: "Herramientas para conversiones, porcentajes, medidas y cálculos diarios.",
      de: "Werkzeuge für Umrechnungen, Prozente, Messungen und Alltagsrechnungen.",
      ar: "أدوات لتحويل الوحدات والنسب والقياسات والحسابات اليومية.",
    },
  },
  {
    id: "generator-tools",
    slug: "generator-tools",
    order: 3,
    title: {
      en: "Create Tools",
      ko: "생성 도구",
      fr: "Outils création",
      ja: "作成",
      zh: "生成工具",
      "zh-TW": "產生工具",
      pt: "Ferramentas de criação",
      es: "Herramientas de creación",
      de: "Erstellen-Tools",
      ar: "أدوات الإنشاء",
    },
    shortLabel: {
      en: "Create",
      ko: "생성",
      fr: "Création",
      ja: "作成",
      zh: "生成",
      "zh-TW": "產生",
      pt: "Criação",
      es: "Creación",
      de: "Erstellen",
      ar: "إنشاء",
    },
    description: {
      en: "Tools for generating QR codes, barcodes, passwords, and sample content.",
      ko: "QR 코드, 바코드, 비밀번호, 예시 콘텐츠를 만드는 도구들입니다.",
      fr: "Outils pour générer des QR codes, des codes-barres, des mots de passe et du contenu d'exemple.",
      ja: "QRコード、バーコード、パスワード、サンプルコンテンツを生成するツールです。",
      zh: "用于生成二维码、条码、密码和示例内容的工具。",
      "zh-TW": "用於產生 QR 碼、條碼、密碼與範例內容的工具。",
      pt: "Ferramentas para gerar QR codes, códigos de barras, senhas e conteúdo de exemplo.",
      es: "Herramientas para generar códigos QR, códigos de barras, contraseñas y contenido de ejemplo.",
      de: "Werkzeuge zum Erstellen von QR-Codes, Barcodes, Passwörtern und Beispielinhalten.",
      ar: "أدوات لإنشاء رموز QR والباركود وكلمات المرور ومحتوى تجريبي.",
    },
  },
  {
    id: "time-display-tools",
    slug: "time-display-tools",
    order: 6,
    title: {
      en: "Time Tools",
      ko: "시간 도구",
      fr: "Outils temps",
      ja: "時間",
      zh: "时间工具",
      "zh-TW": "時間工具",
      pt: "Ferramentas de tempo",
      es: "Herramientas de tiempo",
      de: "Zeit-Tools",
      ar: "أدوات الوقت",
    },
    shortLabel: {
      en: "Time",
      ko: "시간",
      fr: "Temps",
      ja: "時間",
      zh: "时间",
      "zh-TW": "時間",
      pt: "Tempo",
      es: "Tiempo",
      de: "Zeit",
      ar: "وقت",
    },
    description: {
      en: "Tools for timers, clocks, and screen or display checks.",
      ko: "타이머, 시계, 화면 점검을 위한 도구들입니다.",
      fr: "Outils pour les minuteurs, les horloges et les vérifications d'écran.",
      ja: "タイマー、時計、画面チェックのためのツールです。",
      zh: "用于计时器、时钟和屏幕检查的工具。",
      "zh-TW": "用於計時器、時鐘與螢幕檢查的工具。",
      pt: "Ferramentas para temporizadores, relógios e testes de tela.",
      es: "Herramientas para temporizadores, relojes y comprobaciones de pantalla.",
      de: "Werkzeuge für Timer, Uhren und Bildschirmtests.",
      ar: "أدوات للمؤقتات والساعات وفحص الشاشة.",
    },
  },
];

const CATEGORY_GROUP_BY_SLUG = new Map(CATEGORY_GROUPS.map((group) => [group.slug, group] as const));

export function getCategoryCopy(locale: Locale): CategoryCopy {
  return CATEGORY_COPY[locale] ?? CATEGORY_COPY.en;
}

export function getCategoryGroupBySlug(slug: string) {
  return CATEGORY_GROUP_BY_SLUG.get(slug);
}

export function getCategoryGroups(locale: Locale): LocalizedCategoryGroup[] {
  return [...CATEGORY_GROUPS]
    .sort((a, b) => a.order - b.order)
    .map((group) => ({
      ...group,
      title: group.title[locale] ?? group.title.en,
      shortLabel: group.shortLabel[locale] ?? group.shortLabel.en,
      description: group.description[locale] ?? group.description.en,
      href: `/${locale}/${group.slug}`,
      tools: getCategoryGroupTools(locale, group.id),
    }));
}

export function getCategoryGroupTools(locale: Locale, groupId: ToolCategoryGroup) {
  return getVisibleTools(locale).filter((tool) => tool.categoryGroup === groupId);
}

export function getCategoryGroupLabel(locale: Locale, groupId: ToolCategoryGroup) {
  const group = CATEGORY_GROUPS.find((item) => item.id === groupId);
  if (!group) {
    return groupId;
  }

  return group.title[locale] ?? group.title.en;
}
