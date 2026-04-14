import type { MetadataRoute } from "next";
import { getLocalizedUrl, LOCALES } from "@/lib/site";
import { getStaticToolParams } from "@/features/tools/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = LOCALES.map((locale) => ({
    url: getLocalizedUrl(locale),
    lastModified: new Date(),
  }));

  const toolEntries = getStaticToolParams().map(({ locale, slug }) => ({
    url: getLocalizedUrl(locale, `/${slug}`),
    lastModified: new Date(),
  }));

  const legalEntries = LOCALES.flatMap((locale) => [
    { url: getLocalizedUrl(locale, "/about"), lastModified: new Date() },
    { url: getLocalizedUrl(locale, "/privacy"), lastModified: new Date() },
    { url: getLocalizedUrl(locale, "/terms"), lastModified: new Date() },
  ]);

  return [...homeEntries, ...contactEntries, ...legalEntries, ...toolEntries];
}

