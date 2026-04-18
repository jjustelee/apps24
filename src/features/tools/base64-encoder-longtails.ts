import { LOCALES, type Locale } from "@/lib/site";

export type Base64EncoderLongtailSlug = "text-to-base64" | "base64-to-text";

export type Base64EncoderLongtailPreset = {
  text: string;
  action: "encode" | "decode";
};

export type Base64EncoderLongtailText = {
  title: string;
  description: string;
  intro: string;
};

export type Base64EncoderLongtailLink = Base64EncoderLongtailText & {
  slug: Base64EncoderLongtailSlug;
  href: string;
};

const LONGTAILS: Record<
  Base64EncoderLongtailSlug,
  {
    preset: Base64EncoderLongtailPreset;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    intro: Record<Locale, string>;
  }
> = {
  "text-to-base64": {
    preset: { text: "Apps24", action: "encode" },
    title: {
      en: "Text to Base64",
      ko: "텍스트를 Base64로",
      fr: "Texte vers Base64",
      ja: "テキストをBase64へ",
      zh: "文本转 Base64",
      "zh-TW": "文字轉 Base64",
      pt: "Texto para Base64",
      es: "Texto a Base64",
      de: "Text zu Base64",
      ar: "النص إلى Base64",
    },
    description: {
      en: "Convert plain text into Base64 instantly.",
      ko: "일반 텍스트를 Base64로 즉시 변환합니다.",
      fr: "Convertissez instantanément du texte simple en Base64.",
      ja: "プレーンテキストをBase64にすばやく変換します。",
      zh: "将普通文本立即转换为 Base64。",
      "zh-TW": "將一般文字立即轉換為 Base64。",
      pt: "Converta texto simples para Base64 na hora.",
      es: "Convierte texto plano a Base64 al instante.",
      de: "Wandeln Sie Klartext sofort in Base64 um.",
      ar: "حوّل النص العادي إلى Base64 فورًا.",
    },
    intro: {
      en: "Use this when a service needs encoded text, when you are sending data in a header or URL-safe payload, or when you want a short string in a predictable Base64 form. Example: `Apps24` becomes `QXBwczI0`.",
      ko: "서비스가 인코딩된 텍스트를 요구할 때, 헤더나 URL 안전 페이로드로 전송할 때, 또는 짧은 문자열을 Base64 형태로 맞춰 두고 싶을 때 쓰세요. 예: `Apps24`는 `QXBwczI0`가 됩니다.",
      fr: "Utilisez-le lorsqu'un service attend du texte encodé, pour envoyer des données dans un en-tête ou un payload compatible URL, ou pour obtenir une chaîne courte au format Base64. Exemple : `Apps24` devient `QXBwczI0`.",
      ja: "サービスがエンコード済みテキストを求めるとき、ヘッダーやURL安全なペイロードで送るとき、または短い文字列をBase64で扱いたいときに使います。例: `Apps24` は `QXBwczI0` になります。",
      zh: "当服务需要编码后的文本、你要在请求头或 URL 安全载荷中传输数据，或者希望把短字符串整理成可预测的 Base64 形式时使用它。示例：`Apps24` 会变成 `QXBwczI0`。",
      "zh-TW": "當服務需要編碼後的文字、你要在標頭或 URL 安全負載中傳送資料，或希望把短字串整理成可預測的 Base64 形式時使用它。範例：`Apps24` 會變成 `QXBwczI0`。",
      pt: "Use isto quando um serviço precisa de texto codificado, quando você envia dados em um cabeçalho ou payload seguro para URL, ou quando quer uma string curta em formato Base64 previsível. Exemplo: `Apps24` vira `QXBwczI0`.",
      es: "Úsalo cuando un servicio necesite texto codificado, cuando envíes datos en un encabezado o payload seguro para URL, o cuando quieras una cadena corta en formato Base64 predecible. Ejemplo: `Apps24` se convierte en `QXBwczI0`.",
      de: "Nutzen Sie dies, wenn ein Dienst kodierten Text erwartet, wenn Sie Daten in einem Header oder URL-sicheren Payload senden oder wenn Sie eine kurze Zeichenfolge in einem vorhersehbaren Base64-Format möchten. Beispiel: `Apps24` wird zu `QXBwczI0`.",
      ar: "استخدمه عندما يتطلب أحد الخدمات نصًا مُرمّزًا، أو عند إرسال البيانات في ترويسة أو حمولة آمنة للـ URL، أو عندما تريد سلسلة قصيرة بصيغة Base64 متوقعة. مثال: تتحول `Apps24` إلى `QXBwczI0`.",
    },
  },
  "base64-to-text": {
    preset: { text: "QXBwczI0", action: "decode" },
    title: {
      en: "Base64 to Text",
      ko: "Base64를 텍스트로",
      fr: "Base64 vers texte",
      ja: "Base64をテキストへ",
      zh: "Base64 转文本",
      "zh-TW": "Base64 轉文字",
      pt: "Base64 para texto",
      es: "Base64 a texto",
      de: "Base64 zu Text",
      ar: "Base64 إلى نص",
    },
    description: {
      en: "Decode Base64 strings back into readable text.",
      ko: "Base64 문자열을 읽을 수 있는 텍스트로 디코딩합니다.",
      fr: "Décodez des chaînes Base64 en texte lisible.",
      ja: "Base64文字列を読みやすいテキストに戻します。",
      zh: "将 Base64 字符串解码回可读文本。",
      "zh-TW": "將 Base64 字串解碼回可讀文字。",
      pt: "Decodifique strings Base64 de volta para texto legível.",
      es: "Decodifica cadenas Base64 para volver a texto legible.",
      de: "Dekodieren Sie Base64-Zeichenfolgen zurück in lesbaren Text.",
      ar: "فك ترميز سلاسل Base64 إلى نص قابل للقراءة.",
    },
    intro: {
      en: "Use this when you received a Base64 string and need the readable text back, such as a copied token, embedded data, or a payload from another app. Example: `QXBwczI0` decodes to `Apps24`.",
      ko: "복사한 토큰, 내장 데이터, 다른 앱의 페이로드처럼 Base64 문자열을 다시 읽을 수 있는 텍스트로 돌려야 할 때 쓰세요. 예: `QXBwczI0`는 `Apps24`로 디코딩됩니다.",
      fr: "Utilisez-le lorsque vous recevez une chaîne Base64 et que vous devez retrouver le texte lisible, comme un jeton copié, des données intégrées ou un payload d'une autre application. Exemple : `QXBwczI0` se décode en `Apps24`.",
      ja: "コピーしたトークン、埋め込みデータ、他のアプリからのペイロードなど、Base64文字列を読みやすいテキストに戻したいときに使います。例: `QXBwczI0` は `Apps24` に戻せます。",
      zh: "当你收到 Base64 字符串并需要把它还原成可读文本时使用，例如复制来的令牌、嵌入数据或其他应用的载荷。示例：`QXBwczI0` 可解码为 `Apps24`。",
      "zh-TW": "當你收到 Base64 字串並需要把它還原成可讀文字時使用，例如複製來的權杖、嵌入資料或其他應用的負載。範例：`QXBwczI0` 可解碼為 `Apps24`。",
      pt: "Use isto quando você recebeu uma string Base64 e precisa voltar ao texto legível, como um token copiado, dados incorporados ou um payload de outro app. Exemplo: `QXBwczI0` decodifica para `Apps24`.",
      es: "Úsalo cuando recibes una cadena Base64 y necesitas volver al texto legible, como un token copiado, datos incrustados o un payload de otra app. Ejemplo: `QXBwczI0` se decodifica como `Apps24`.",
      de: "Nutzen Sie dies, wenn Sie eine Base64-Zeichenfolge erhalten und wieder lesbaren Text brauchen, etwa ein kopiertes Token, eingebettete Daten oder einen Payload aus einer anderen App. Beispiel: `QXBwczI0` wird zu `Apps24` dekodiert.",
      ar: "استخدمه عندما تتلقى سلسلة Base64 وتحتاج إلى النص القابل للقراءة مرة أخرى، مثل رمز منسوخ أو بيانات مضمّنة أو حمولة من تطبيق آخر. مثال: يفك الترميز `QXBwczI0` إلى `Apps24`.",
    },
  },
};

export const BASE64_ENCODER_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as Base64EncoderLongtailSlug[];

export function isBase64EncoderLongtailSlug(value: string): value is Base64EncoderLongtailSlug {
  return value in LONGTAILS;
}

export function getBase64EncoderLongtailPreset(slug: string): Base64EncoderLongtailPreset | undefined {
  return isBase64EncoderLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getBase64EncoderLongtailText(locale: Locale, slug: string): Base64EncoderLongtailText | undefined {
  if (!isBase64EncoderLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: entry.title[locale],
    description: entry.description[locale],
    intro: entry.intro[locale],
  };
}

export function getBase64EncoderLongtailLinks(locale: Locale): Base64EncoderLongtailLink[] {
  return BASE64_ENCODER_LONGTAIL_SLUGS.map((slug) => {
    const text = getBase64EncoderLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/base64-encoder-decoder/${slug}`,
      ...text,
    };
  });
}

export function getBase64EncoderLongtailStaticParams() {
  return BASE64_ENCODER_LONGTAIL_SLUGS.flatMap((mode) =>
    LOCALES.map((locale) => ({
      locale,
      mode,
    })),
  );
}
