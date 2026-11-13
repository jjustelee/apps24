import type { Article, Guide } from "./content";
import type { Locale } from "@/lib/site";
import type { ExtraGuideSlug } from "./extra/types";
import { EXTRA_EN } from "./extra/en";
import { EXTRA_KO } from "./extra/ko";
import { EXTRA_FR } from "./extra/fr";
import { EXTRA_DE } from "./extra/de";
import { EXTRA_ES } from "./extra/es";
import { EXTRA_PT } from "./extra/pt";
import { EXTRA_JA } from "./extra/ja";
import { EXTRA_ZH } from "./extra/zh";
import { EXTRA_ZH_TW } from "./extra/zh-tw";
import { EXTRA_AR } from "./extra/ar";

const copy = (slug: ExtraGuideSlug): Record<Locale, Article> => ({
  en: EXTRA_EN[slug], ko: EXTRA_KO[slug], fr: EXTRA_FR[slug], de: EXTRA_DE[slug], es: EXTRA_ES[slug], pt: EXTRA_PT[slug],
  ja: EXTRA_JA[slug], zh: EXTRA_ZH[slug], "zh-TW": EXTRA_ZH_TW[slug], ar: EXTRA_AR[slug],
});

/** Texts round-tripped by scripts/verify-qr-formats.py; module counts are asserted in tests/guides.test.mjs. */
export const QR_FORMAT_SAMPLES = {
  wifi: "WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;",
  hidden: "WIFI:T:WPA;S:Office;P:sunny-2026;H:true;;",
  escaped: "WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;",
  vcard: "BEGIN:VCARD\nVERSION:3.0\nN:Kim;Mina\nFN:Mina Kim\nTEL:+82-10-0000-0000\nEMAIL:mina@example.com\nEND:VCARD",
};

const REPO = "https://github.com/jjustelee/apps24/blob/main";

export const EXTRA_GUIDES: Guide[] = [
  { slug: "percent-points-vs-change", toolId: "percentagecalculator", toolSlug: "percentage-calculator", copy: copy("percent-points-vs-change"),
    rows: [["40% → 50%", "+10 points", "+25%"], ["100 → 125", "+25", "+25%"], ["125 → 100", "−25", "−20%"], ["100 − 20% − 10%", "72", "−28%"]],
    sources: { "Apps24 percentage formulas": `${REPO}/src/lib/percentage.ts` } },
  { slug: "css-units-rem-em", toolId: "pixelconverter", toolSlug: "pixel-converter", copy: copy("css-units-rem-em"),
    rows: [["24px", "root 16px", "1.5rem"], ["24px", "root 10px", "2.4rem"], ["1.25em × 1.25em", "nested", "1.5625"], ["360px", "viewport 1440px", "25vw"], ["12pt", "96 ÷ 72", "16px"]],
    sources: { "CSS Values and Units Module Level 4 (W3C)": "https://www.w3.org/TR/css-values-4/" } },
  { slug: "password-length-vs-variety", toolId: "passwordgenerator", toolSlug: "password-generator", copy: copy("password-length-vs-variety"),
    rows: [["10 × log2(91)", "65.1 bits"], ["16 × log2(26)", "75.2 bits"], ["16 × log2(62)", "95.3 bits"], ["16 × log2(91)", "104.12 bits"], ["16, all four types (exact)", "103.86 bits"]],
    sources: { "NIST SP 800-63B": "https://pages.nist.gov/800-63-3/sp800-63b.html", "Crypto.getRandomValues (MDN)": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues" } },
  { slug: "qr-wifi-vcard-format", toolId: "qrgenerator", toolSlug: "qrgenerator", copy: copy("qr-wifi-vcard-format"),
    rows: [[QR_FORMAT_SAMPLES.wifi, "38", "29 × 29"], [QR_FORMAT_SAMPLES.hidden, "41", "29 × 29"], [QR_FORMAT_SAMPLES.escaped, "41", "29 × 29"], ["BEGIN:VCARD … END:VCARD", "100", "41 × 41"]],
    reproduction: "/guides/qr-format-results.json",
    sources: { "ZXing barcode contents (Wi-Fi format)": "https://github.com/zxing/zxing/wiki/Barcode-Contents", "vCard 3.0 (RFC 2426)": "https://www.rfc-editor.org/rfc/rfc2426", "Apps24 reproducible check": `${REPO}/scripts/verify-qr-formats.py` } },
];
