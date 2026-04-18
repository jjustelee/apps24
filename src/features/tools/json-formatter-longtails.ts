import { LOCALES, type Locale } from "@/lib/site";

export type JsonFormatterLongtailSlug = "format-json" | "validate-json";

export type JsonFormatterLongtailPreset = {
  text: string;
  action: "format" | "validate";
};

export type JsonFormatterLongtailText = {
  title: string;
  description: string;
  intro: string;
};

export type JsonFormatterLongtailLink = JsonFormatterLongtailText & {
  slug: JsonFormatterLongtailSlug;
  href: string;
};

const LONGTAILS: Record<
  JsonFormatterLongtailSlug,
  {
    preset: JsonFormatterLongtailPreset;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    intro: Record<Locale, string>;
  }
> = {
  "format-json": {
    preset: { text: '{"name":"Apps24","type":"tools","active":true}', action: "format" },
    title: {
      en: "JSON Formatter",
      ko: "JSON 포맷터",
      fr: "Formateur JSON",
      ja: "JSONフォーマッター",
      zh: "JSON 格式化器",
      "zh-TW": "JSON 格式化器",
      pt: "Formatador JSON",
      es: "Formateador JSON",
      de: "JSON-Formatter",
      ar: "منسق JSON",
    },
    description: {
      en: "Pretty-print JSON so it is easier to read.",
      ko: "읽기 쉬운 형태로 JSON을 정렬합니다.",
      fr: "Mettez en forme le JSON pour le rendre plus lisible.",
      ja: "JSONを見やすい形式に整えます。",
      zh: "将 JSON 格式化为更易读的样式。",
      "zh-TW": "將 JSON 格式化為更易讀的樣式。",
      pt: "Formate o JSON para deixá-lo mais fácil de ler.",
      es: "Da formato al JSON para que sea más fácil de leer.",
      de: "Formatieren Sie JSON so, dass es leichter lesbar ist.",
      ar: "نسّق JSON ليصبح أسهل في القراءة.",
    },
    intro: {
      en: "Use this when raw JSON is hard to scan and you want a prettified version before reviewing, diffing, or sharing it. Example: `{\"name\":\"Apps24\"}` becomes neatly indented JSON.",
      ko: "원시 JSON이 읽기 어렵고 검토, 비교, 공유 전에 보기 좋은 형태가 필요할 때 쓰세요. 예: `{\"name\":\"Apps24\"}`를 들여쓴 JSON으로 바꿉니다.",
      fr: "Utilisez-le lorsque le JSON brut est difficile à lire et que vous voulez une version mise en forme avant de l'examiner, le comparer ou le partager. Exemple : `{\"name\":\"Apps24\"}` devient un JSON bien indenté.",
      ja: "生のJSONが見づらく、確認・比較・共有の前に整えたいときに使います。例: `{\"name\":\"Apps24\"}` を見やすく整えます。",
      zh: "当原始 JSON 不易阅读、而你想在检查、对比或分享前先排版整理时使用它。示例：`{\"name\":\"Apps24\"}` 会变成缩进清晰的 JSON。",
      "zh-TW": "當原始 JSON 不易閱讀、而你想在檢查、比對或分享前先排版整理時使用它。範例：`{\"name\":\"Apps24\"}` 會變成縮排清楚的 JSON。",
      pt: "Use isto quando o JSON bruto estiver difícil de ler e você quiser uma versão formatada antes de revisar, comparar ou compartilhar. Exemplo: `{\"name\":\"Apps24\"}` fica com JSON bem indentado.",
      es: "Úsalo cuando el JSON bruto sea difícil de leer y quieras una versión formateada antes de revisarlo, compararlo o compartirlo. Ejemplo: `{\"name\":\"Apps24\"}` queda como JSON bien sangrado.",
      de: "Nutzen Sie dies, wenn rohes JSON schwer lesbar ist und Sie vor dem Prüfen, Vergleichen oder Teilen eine schön formatierte Version möchten. Beispiel: `{\"name\":\"Apps24\"}` wird sauber eingerückt dargestellt.",
      ar: "استخدمه عندما يكون JSON الخام صعب القراءة وتريد نسخة منسقة قبل مراجعته أو مقارنته أو مشاركته. مثال: يصبح `{\"name\":\"Apps24\"}` JSON منسقًا بوضوح.",
    },
  },
  "validate-json": {
    preset: { text: '{"name":"Apps24","type":"tools",}', action: "validate" },
    title: {
      en: "JSON Validator",
      ko: "JSON 검증기",
      fr: "Validateur JSON",
      ja: "JSONバリデーター",
      zh: "JSON 验证器",
      "zh-TW": "JSON 驗證器",
      pt: "Validador JSON",
      es: "Validador JSON",
      de: "JSON-Validierer",
      ar: "مدقق JSON",
    },
    description: {
      en: "Check JSON syntax and find errors quickly.",
      ko: "JSON 문법을 확인하고 오류를 빠르게 찾습니다.",
      fr: "Vérifiez la syntaxe JSON et repérez rapidement les erreurs.",
      ja: "JSONの構文を確認し、エラーをすばやく見つけます。",
      zh: "检查 JSON 语法并快速找出错误。",
      "zh-TW": "檢查 JSON 語法並快速找出錯誤。",
      pt: "Verifique a sintaxe do JSON e encontre erros rapidamente.",
      es: "Comprueba la sintaxis JSON y encuentra errores rápidamente.",
      de: "Prüfen Sie die JSON-Syntax und finden Sie Fehler schnell.",
      ar: "تحقق من بنية JSON واعثر على الأخطاء بسرعة.",
    },
    intro: {
      en: "Use this when you want to catch syntax mistakes like trailing commas, broken quotes, or missing brackets before sending an API payload. Example: `{\"name\":\"Apps24\",}` is flagged immediately.",
      ko: "API 페이로드를 보내기 전에 뒤에 붙은 쉼표, 깨진 따옴표, 빠진 괄호 같은 문법 오류를 잡고 싶을 때 쓰세요. 예: `{\"name\":\"Apps24\",}`는 바로 오류로 표시됩니다.",
      fr: "Utilisez-le pour repérer avant l'envoi d'un payload API des erreurs de syntaxe comme une virgule finale, des guillemets cassés ou des crochets manquants. Exemple : `{\"name\":\"Apps24\",}` est signalé immédiatement.",
      ja: "APIペイロードを送る前に、末尾のカンマ、壊れた引用符、足りない括弧などの構文ミスを見つけたいときに使います。例: `{\"name\":\"Apps24\",}` はすぐにエラーとして示されます。",
      zh: "当你想在发送 API 载荷前发现尾随逗号、引号错误或缺少括号等语法问题时使用它。示例：`{\"name\":\"Apps24\",}` 会立即被标记出来。",
      "zh-TW": "當你想在送出 API 負載前發現尾逗號、引號錯誤或缺少括號等語法問題時使用它。範例：`{\"name\":\"Apps24\",}` 會立即被標示出來。",
      pt: "Use isto quando quiser encontrar erros de sintaxe como vírgulas finais, aspas quebradas ou colchetes ausentes antes de enviar um payload de API. Exemplo: `{\"name\":\"Apps24\",}` é sinalizado na hora.",
      es: "Úsalo cuando quieras detectar errores de sintaxis como comas finales, comillas rotas o corchetes faltantes antes de enviar un payload de API. Ejemplo: `{\"name\":\"Apps24\",}` se marca de inmediato.",
      de: "Nutzen Sie dies, wenn Sie vor dem Senden eines API-Payloads Syntaxfehler wie abschließende Kommas, kaputte Anführungszeichen oder fehlende Klammern finden möchten. Beispiel: `{\"name\":\"Apps24\",}` wird sofort markiert.",
      ar: "استخدمه عندما تريد اكتشاف أخطاء البنية مثل الفاصلة الزائدة أو علامات الاقتباس المكسورة أو الأقواس المفقودة قبل إرسال حمولة API. مثال: يتم تمييز `{\"name\":\"Apps24\",}` فورًا.",
    },
  },
};

export const JSON_FORMATTER_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as JsonFormatterLongtailSlug[];

export function isJsonFormatterLongtailSlug(value: string): value is JsonFormatterLongtailSlug {
  return value in LONGTAILS;
}

export function getJsonFormatterLongtailPreset(slug: string): JsonFormatterLongtailPreset | undefined {
  return isJsonFormatterLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getJsonFormatterLongtailText(locale: Locale, slug: string): JsonFormatterLongtailText | undefined {
  if (!isJsonFormatterLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: entry.title[locale],
    description: entry.description[locale],
    intro: entry.intro[locale],
  };
}

export function getJsonFormatterLongtailLinks(locale: Locale): JsonFormatterLongtailLink[] {
  return JSON_FORMATTER_LONGTAIL_SLUGS.map((slug) => {
    const text = getJsonFormatterLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/json-formatter/${slug}`,
      ...text,
    };
  });
}

export function getJsonFormatterLongtailStaticParams() {
  return JSON_FORMATTER_LONGTAIL_SLUGS.flatMap((mode) =>
    LOCALES.map((locale) => ({
      locale,
      mode,
    })),
  );
}
