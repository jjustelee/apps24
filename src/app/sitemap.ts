/** Sitemap configuration for apps24.io */
import type { MetadataRoute } from "next";
import { getLocalizedUrl, LOCALES } from "@/lib/site";
import { CATEGORY_GROUPS } from "@/features/tools/categories";
import { getStaticToolParams } from "@/features/tools/registry";

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
    [...CATEGORY_GROUPS]
      .sort((a, b) => a.order - b.order)
      .map((group) => ({
        url: getLocalizedUrl(locale, `/${group.slug}`),
      })),
  );

  return [...homeEntries, ...contactEntries, ...legalEntries, ...categoryEntries, ...toolEntries];
}
