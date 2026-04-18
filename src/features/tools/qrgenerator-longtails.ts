import { LOCALES, type Locale } from "@/lib/site";

export type QrGeneratorLongtailSlug = "url" | "wifi" | "vcard";

export type QrGeneratorPreset = {
  text: string;
};

export type QrGeneratorLongtailText = {
  title: string;
  description: string;
};

export type QrGeneratorLongtailLink = QrGeneratorLongtailText & {
  slug: QrGeneratorLongtailSlug;
  href: string;
};

const LONGTAILS: Record<
  QrGeneratorLongtailSlug,
  {
    preset: QrGeneratorPreset;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  }
> = {
  url: {
    preset: { text: "https://example.com" },
    title: {
      en: "Website QR Code",
      ko: "웹사이트 QR 코드",
      fr: "QR code pour site web",
      ja: "WebサイトQRコード",
      zh: "网站二维码",
      "zh-TW": "網站 QR 碼",
      pt: "QR code para site",
      es: "Código QR para sitio web",
      de: "QR-Code für Website",
      ar: "رمز QR للموقع",
    },
    description: {
      en: "Generate a QR code for a website link instantly.",
      ko: "웹사이트 링크용 QR 코드를 바로 만듭니다.",
      fr: "Générez instantanément un QR code pour un lien de site web.",
      ja: "Webサイトのリンク用QRコードをすばやく作成します。",
      zh: "快速生成网站链接二维码。",
      "zh-TW": "快速產生網站連結 QR 碼。",
      pt: "Gere um QR code para um link de site na hora.",
      es: "Genera al instante un código QR para un enlace web.",
      de: "Erstellen Sie sofort einen QR-Code für einen Weblink.",
      ar: "أنشئ رمز QR لرابط موقع ويب فورًا.",
    },
  },
  wifi: {
    preset: { text: "WIFI:T:WPA;S:ExampleWiFi;P:password123;;" },
    title: {
      en: "WiFi QR Code",
      ko: "WiFi QR 코드",
      fr: "QR code Wi-Fi",
      ja: "Wi‑Fi QRコード",
      zh: "WiFi 二维码",
      "zh-TW": "WiFi QR 碼",
      pt: "QR code de Wi‑Fi",
      es: "Código QR de Wi‑Fi",
      de: "WLAN-QR-Code",
      ar: "رمز QR لشبكة Wi‑Fi",
    },
    description: {
      en: "Generate a QR code for WiFi login details.",
      ko: "WiFi 접속 정보용 QR 코드를 만듭니다.",
      fr: "Générez un QR code pour les informations de connexion Wi-Fi.",
      ja: "Wi‑Fiの接続情報用QRコードを作成します。",
      zh: "快速生成 WiFi 登录信息二维码。",
      "zh-TW": "快速產生 WiFi 登入資訊 QR 碼。",
      pt: "Gere um QR code para os dados de acesso ao Wi‑Fi.",
      es: "Genera un código QR para los datos de acceso Wi‑Fi.",
      de: "Erstellen Sie einen QR-Code für WLAN-Zugangsdaten.",
      ar: "أنشئ رمز QR لبيانات تسجيل الدخول إلى Wi‑Fi.",
    },
  },
  vcard: {
    preset: {
      text: "BEGIN:VCARD\nVERSION:3.0\nFN:Jane Doe\nTEL:+1-555-0100\nEMAIL:jane@example.com\nEND:VCARD",
    },
    title: {
      en: "vCard QR Code",
      ko: "vCard QR 코드",
      fr: "QR code vCard",
      ja: "vCard QRコード",
      zh: "vCard 二维码",
      "zh-TW": "vCard QR 碼",
      pt: "QR code vCard",
      es: "Código QR vCard",
      de: "vCard-QR-Code",
      ar: "رمز QR لبطاقة vCard",
    },
    description: {
      en: "Generate a QR code for contact details.",
      ko: "연락처 정보용 QR 코드를 만듭니다.",
      fr: "Générez un QR code pour les coordonnées de contact.",
      ja: "連絡先情報用のQRコードを作成します。",
      zh: "快速生成联系方式二维码。",
      "zh-TW": "快速產生聯絡資訊 QR 碼。",
      pt: "Gere um QR code para dados de contato.",
      es: "Genera un código QR para datos de contacto.",
      de: "Erstellen Sie einen QR-Code für Kontaktdaten.",
      ar: "أنشئ رمز QR لبيانات جهة الاتصال.",
    },
  },
};

export const QR_GENERATOR_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as QrGeneratorLongtailSlug[];

export function isQrGeneratorLongtailSlug(value: string): value is QrGeneratorLongtailSlug {
  return value in LONGTAILS;
}

export function getQrGeneratorLongtailPreset(slug: string): QrGeneratorPreset | undefined {
  return isQrGeneratorLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getQrGeneratorLongtailText(locale: Locale, slug: string): QrGeneratorLongtailText | undefined {
  if (!isQrGeneratorLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: entry.title[locale],
    description: entry.description[locale],
  };
}

export function getQrGeneratorLongtailLinks(locale: Locale): QrGeneratorLongtailLink[] {
  return QR_GENERATOR_LONGTAIL_SLUGS.map((slug) => {
    const text = getQrGeneratorLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/qrgenerator/${slug}`,
      ...text,
    };
  });
}

export function getQrGeneratorLongtailStaticParams() {
  return QR_GENERATOR_LONGTAIL_SLUGS.flatMap((preset) =>
    LOCALES.map((locale) => ({
      locale,
      preset,
    })),
  );
}
