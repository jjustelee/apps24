/** Sitemap configuration for apps24.io */
import type { MetadataRoute } from "next";
import { getLocalizedUrl, LOCALES } from "@/lib/site";
import { getCategoryGroups } from "@/features/tools/categories";
import { getStaticToolParams } from "@/features/tools/registry";
import { GUIDES } from "@/features/guides/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = LOCALES.map((locale) => ({
    url: getLocalizedUrl(locale),
  }));

  const toolEntries = getStaticToolParams().map(({ locale, slug }) => ({
    url: getLocalizedUrl(locale, `/${slug}`),
  }));

  const contactEntries = LOCALES.map((locale) => ({
    url: getLocalizedUrl(locale, "/contact"),
  }));

  const legalEntries = LOCALES.flatMap((locale) => [
    { url: getLocalizedUrl(locale, "/about") },
    { url: getLocalizedUrl(locale, "/privacy") },
    { url: getLocalizedUrl(locale, "/terms") },
  ]);

  const categoryEntries = LOCALES.flatMap((locale) =>
    getCategoryGroups(locale).map((group) => ({
      url: getLocalizedUrl(locale, `/${group.slug}`),
    })),
  );

  const guideEntries = LOCALES.flatMap(locale => [
    { url: getLocalizedUrl(locale, "/guides") },
    ...GUIDES.map(guide => ({ url: getLocalizedUrl(locale, `/guides/${guide.slug}`) })),
  ]);
  return [...homeEntries, ...contactEntries, ...legalEntries, ...categoryEntries, ...toolEntries, ...guideEntries];
}
