import type { Article } from "../content";

export const EXTRA_GUIDE_SLUGS = ["percent-points-vs-change", "css-units-rem-em", "password-length-vs-variety", "qr-wifi-vcard-format"] as const;
export type ExtraGuideSlug = (typeof EXTRA_GUIDE_SLUGS)[number];
export type ExtraArticles = Record<ExtraGuideSlug, Article>;
