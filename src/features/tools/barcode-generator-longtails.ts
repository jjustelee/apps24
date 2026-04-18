import { LOCALES, type Locale } from "@/lib/site";

export type BarcodeGeneratorLongtailSlug = "code128" | "code39" | "ean13";

export type BarcodeGeneratorLongtailPreset = {
  format: "code128" | "code39" | "ean13";
  text: string;
};

export type BarcodeGeneratorLongtailText = {
  title: string;
  description: string;
  intro: string;
};

export type BarcodeGeneratorLongtailLink = BarcodeGeneratorLongtailText & {
  slug: BarcodeGeneratorLongtailSlug;
  href: string;
};

const LONGTAILS: Record<
  BarcodeGeneratorLongtailSlug,
  {
    preset: BarcodeGeneratorLongtailPreset;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    intro: Record<Locale, string>;
  }
> = {
  code128: {
    preset: { format: "code128", text: "ABC12345" },
    title: {
      en: "Code 128 Barcode",
      ko: "Code 128 바코드",
      fr: "Code-barres Code 128",
      ja: "Code 128 バーコード",
      zh: "Code 128 条形码",
      "zh-TW": "Code 128 條碼",
      pt: "Código de barras Code 128",
      es: "Código de barras Code 128",
      de: "Code-128-Barcode",
      ar: "رمز شريطي Code 128",
    },
    description: {
      en: "Create Code 128 barcodes for mixed text and labels.",
      ko: "혼합 문자 라벨과 코드용 Code 128 바코드를 생성합니다.",
      fr: "Créez des codes-barres Code 128 pour du texte mixte et des étiquettes.",
      ja: "英数字のラベルやコード向けにCode 128バーコードを作成します。",
      zh: "为混合文本和标签创建 Code 128 条形码。",
      "zh-TW": "為混合文字與標籤建立 Code 128 條碼。",
      pt: "Crie códigos de barras Code 128 para texto misto e etiquetas.",
      es: "Crea códigos de barras Code 128 para texto mixto y etiquetas.",
      de: "Erstellen Sie Code-128-Barcodes für gemischten Text und Etiketten.",
      ar: "أنشئ رموزًا شريطية Code 128 للنصوص المختلطة والملصقات.",
    },
    intro: {
      en: "Use this when labels need letters and numbers together, such as inventory IDs, shipping codes, or internal tracking labels. Example: `ABC12345` fits neatly as a Code 128 barcode.",
      ko: "재고 ID, 배송 코드, 내부 추적 라벨처럼 문자와 숫자를 함께 써야 하는 라벨에 쓰세요. 예: `ABC12345`는 Code 128 바코드에 잘 맞습니다.",
      fr: "Utilisez-le lorsque les étiquettes doivent combiner lettres et chiffres, comme des identifiants d'inventaire, des codes d'expédition ou des suivis internes. Exemple : `ABC12345` convient parfaitement comme code-barres Code 128.",
      ja: "在庫ID、配送コード、内部追跡ラベルのように、文字と数字を一緒に使うラベルに向いています。例: `ABC12345` はCode 128バーコードにぴったりです。",
      zh: "当标签需要同时包含字母和数字，例如库存编号、运输代码或内部追踪标签时使用它。示例：`ABC12345` 很适合作为 Code 128 条形码。",
      "zh-TW": "當標籤需要同時包含字母與數字，例如庫存編號、運輸代碼或內部追蹤標籤時使用它。範例：`ABC12345` 很適合作為 Code 128 條碼。",
      pt: "Use isto quando as etiquetas precisarem de letras e números juntos, como IDs de inventário, códigos de envio ou rótulos de rastreamento interno. Exemplo: `ABC12345` fica ótimo como código de barras Code 128.",
      es: "Úsalo cuando las etiquetas necesiten letras y números juntos, como IDs de inventario, códigos de envío o etiquetas de seguimiento interno. Ejemplo: `ABC12345` encaja muy bien como código de barras Code 128.",
      de: "Nutzen Sie dies, wenn Etiketten Buchstaben und Zahlen gemeinsam brauchen, etwa bei Lager-IDs, Versandcodes oder internen Tracking-Etiketten. Beispiel: `ABC12345` passt gut als Code-128-Barcode.",
      ar: "استخدمه عندما تحتاج الملصقات إلى أحرف وأرقام معًا، مثل معرّفات المخزون أو رموز الشحن أو ملصقات التتبع الداخلية. مثال: يناسب `ABC12345` رمز Code 128 الشريطي بشكل جيد.",
    },
  },
  code39: {
    preset: { format: "code39", text: "CODE39-123" },
    title: {
      en: "Code 39 Barcode",
      ko: "Code 39 바코드",
      fr: "Code-barres Code 39",
      ja: "Code 39 バーコード",
      zh: "Code 39 条形码",
      "zh-TW": "Code 39 條碼",
      pt: "Código de barras Code 39",
      es: "Código de barras Code 39",
      de: "Code-39-Barcode",
      ar: "رمز شريطي Code 39",
    },
    description: {
      en: "Create Code 39 barcodes for uppercase labels and short codes.",
      ko: "대문자 라벨과 짧은 코드용 Code 39 바코드를 생성합니다.",
      fr: "Créez des codes-barres Code 39 pour des étiquettes en majuscules et de courts codes.",
      ja: "大文字ラベルや短いコード向けにCode 39バーコードを作成します。",
      zh: "为大写标签和短代码创建 Code 39 条形码。",
      "zh-TW": "為大寫標籤與短代碼建立 Code 39 條碼。",
      pt: "Crie códigos de barras Code 39 para etiquetas em maiúsculas e códigos curtos.",
      es: "Crea códigos de barras Code 39 para etiquetas en mayúsculas y códigos cortos.",
      de: "Erstellen Sie Code-39-Barcodes für Großbuchstaben-Etiketten und kurze Codes.",
      ar: "أنشئ رموزًا شريطية Code 39 للملصقات المكتوبة بالأحرف الكبيرة والرموز القصيرة.",
    },
    intro: {
      en: "Use this when uppercase labels and short operational codes are enough, such as simple warehouse tags or internal workflow IDs. Example: `CODE39-123` works well for this format.",
      ko: "간단한 창고 태그나 내부 작업 ID처럼 대문자 라벨과 짧은 운영 코드만 있으면 충분할 때 쓰세요. 예: `CODE39-123`는 이 형식에 잘 맞습니다.",
      fr: "Utilisez-le lorsque des étiquettes en majuscules et de courts codes opérationnels suffisent, comme des étiquettes d'entrepôt simples ou des IDs de workflow internes. Exemple : `CODE39-123` convient bien à ce format.",
      ja: "シンプルな倉庫タグや内部ワークフローIDのように、大文字ラベルと短い運用コードで足りるときに使います。例: `CODE39-123` はこの形式に向いています。",
      zh: "当大写标签和简短的操作代码就足够时使用，例如简单的仓库标签或内部工作流编号。示例：`CODE39-123` 很适合这种格式。",
      "zh-TW": "當大寫標籤與簡短的作業代碼就足夠時使用，例如簡單的倉庫標籤或內部工作流程編號。範例：`CODE39-123` 很適合這種格式。",
      pt: "Use isto quando etiquetas em maiúsculas e códigos operacionais curtos forem suficientes, como tags simples de armazém ou IDs internos de fluxo de trabalho. Exemplo: `CODE39-123` funciona bem nesse formato.",
      es: "Úsalo cuando basten etiquetas en mayúsculas y códigos operativos cortos, como etiquetas simples de almacén o IDs internos de flujo de trabajo. Ejemplo: `CODE39-123` funciona bien en este formato.",
      de: "Nutzen Sie dies, wenn Großbuchstaben-Etiketten und kurze Betriebscodes ausreichen, etwa für einfache Lageretiketten oder interne Workflow-IDs. Beispiel: `CODE39-123` eignet sich gut für dieses Format.",
      ar: "استخدمه عندما تكفي الملصقات المكتوبة بالأحرف الكبيرة والرموز التشغيلية القصيرة، مثل بطاقات المستودع البسيطة أو معرّفات سير العمل الداخلية. مثال: يناسب `CODE39-123` هذا التنسيق جيدًا.",
    },
  },
  ean13: {
    preset: { format: "ean13", text: "5901234123457" },
    title: {
      en: "EAN-13 Barcode",
      ko: "EAN-13 바코드",
      fr: "Code-barres EAN-13",
      ja: "EAN-13 バーコード",
      zh: "EAN-13 条形码",
      "zh-TW": "EAN-13 條碼",
      pt: "Código de barras EAN-13",
      es: "Código de barras EAN-13",
      de: "EAN-13-Barcode",
      ar: "رمز شريطي EAN-13",
    },
    description: {
      en: "Create EAN-13 product barcodes for retail numbers.",
      ko: "소매 상품 번호용 EAN-13 바코드를 생성합니다.",
      fr: "Créez des codes-barres EAN-13 pour les numéros produits de vente au détail.",
      ja: "小売商品の13桁番号向けにEAN-13バーコードを作成します。",
      zh: "为零售商品编号创建 EAN-13 条形码。",
      "zh-TW": "為零售商品編號建立 EAN-13 條碼。",
      pt: "Crie códigos de barras EAN-13 para números de produtos de varejo.",
      es: "Crea códigos de barras EAN-13 para números de productos minoristas.",
      de: "Erstellen Sie EAN-13-Barcodes für Einzelhandels-Produktnummern.",
      ar: "أنشئ رموزًا شريطية EAN-13 لأرقام المنتجات للبيع بالتجزئة.",
    },
    intro: {
      en: "Use this when you need a retail-ready 13-digit barcode for product numbers on shelves, packaging, or store systems. Example: `5901234123457` matches the standard EAN-13 format.",
      ko: "선반, 포장, 매장 시스템에 들어가는 소매용 13자리 바코드가 필요할 때 쓰세요. 예: `5901234123457`는 표준 EAN-13 형식에 맞습니다.",
      fr: "Utilisez-le lorsque vous avez besoin d'un code-barres à 13 chiffres prêt pour la vente au détail, pour les numéros de produits en rayon, sur l'emballage ou dans les systèmes de magasin. Exemple : `5901234123457` respecte le format EAN-13 standard.",
      ja: "棚、パッケージ、店舗システム向けに、13桁の小売用バーコードが必要なときに使います。例: `5901234123457` は標準のEAN-13形式です。",
      zh: "当你需要用于货架、包装或商店系统的 13 位零售条形码时使用它。示例：`5901234123457` 符合标准 EAN-13 格式。",
      "zh-TW": "當你需要用於貨架、包裝或商店系統的 13 位零售條碼時使用它。範例：`5901234123457` 符合標準 EAN-13 格式。",
      pt: "Use isto quando precisar de um código de barras de 13 dígitos pronto para varejo em números de produtos na prateleira, embalagem ou sistemas de loja. Exemplo: `5901234123457` segue o formato EAN-13 padrão.",
      es: "Úsalo cuando necesites un código de barras de 13 dígitos listo para venta al por menor en productos de estantería, empaque o sistemas de tienda. Ejemplo: `5901234123457` cumple con el formato EAN-13 estándar.",
      de: "Nutzen Sie dies, wenn Sie einen 13-stelligen Barcode für den Einzelhandel für Produktnummern im Regal, auf Verpackungen oder in Shopsystemen brauchen. Beispiel: `5901234123457` entspricht dem Standardformat EAN-13.",
      ar: "استخدمه عندما تحتاج إلى رمز شريطي مكوّن من 13 رقمًا وجاهز للبيع بالتجزئة لأرقام المنتجات على الرفوف أو التغليف أو أنظمة المتجر. مثال: يطابق `5901234123457` تنسيق EAN-13 القياسي.",
    },
  },
};

export const BARCODE_GENERATOR_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as BarcodeGeneratorLongtailSlug[];

export function isBarcodeGeneratorLongtailSlug(value: string): value is BarcodeGeneratorLongtailSlug {
  return value in LONGTAILS;
}

export function getBarcodeGeneratorLongtailPreset(slug: string): BarcodeGeneratorLongtailPreset | undefined {
  return isBarcodeGeneratorLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getBarcodeGeneratorLongtailText(locale: Locale, slug: string): BarcodeGeneratorLongtailText | undefined {
  if (!isBarcodeGeneratorLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: entry.title[locale],
    description: entry.description[locale],
    intro: entry.intro[locale],
  };
}

export function getBarcodeGeneratorLongtailLinks(locale: Locale): BarcodeGeneratorLongtailLink[] {
  return BARCODE_GENERATOR_LONGTAIL_SLUGS.map((slug) => {
    const text = getBarcodeGeneratorLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/barcodegenerator/${slug}`,
      ...text,
    };
  });
}

export function getBarcodeGeneratorLongtailStaticParams() {
  return BARCODE_GENERATOR_LONGTAIL_SLUGS.flatMap((format) =>
    LOCALES.map((locale) => ({
      locale,
      format,
    })),
  );
}
