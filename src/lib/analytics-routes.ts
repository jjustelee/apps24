import { getCategoryGroups } from "@/features/tools/categories";
import { getStaticToolParams } from "@/features/tools/registry";
import { GUIDES } from "@/features/guides/content";
import type { Locale } from "./site";

export function getAnalyticsPaths(locale: Locale) {
  return [
    `/${locale}`,
    ...["about", "contact", "privacy", "terms", "guides"].map(slug => `/${locale}/${slug}`),
    ...getCategoryGroups(locale).map(group => `/${locale}/${group.slug}`),
    ...getStaticToolParams().filter(tool => tool.locale === locale).map(tool => `/${locale}/${tool.slug}`),
    ...GUIDES.map(guide => `/${locale}/guides/${guide.slug}`),
  ];
}
