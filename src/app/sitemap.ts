/** Sitemap configuration for apps24.io */
import type { MetadataRoute } from "next";
import { getLocalizedUrl, LOCALES } from "@/lib/site";
import { CATEGORY_GROUPS } from "@/features/tools/categories";
import { getStaticToolParams } from "@/features/tools/registry";
import { PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS } from "@/features/tools/percentage-calculator-longtails";
import { UNIT_CONVERTER_LONGTAIL_SLUGS } from "@/features/tools/unit-converter-longtails";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = LOCALES.map((locale) => ({
    url: getLocalizedUrl(locale),
    lastModified: new Date(),
  }));

  const toolEntries = getStaticToolParams().map(({ locale, slug }) => ({
    url: getLocalizedUrl(locale, `/${slug}`),
    lastModified: new Date(),
  }));

  const contactEntries = LOCALES.map((locale) => ({
    url: getLocalizedUrl(locale, "/contact"),
    lastModified: new Date(),
  }));

  const legalEntries = LOCALES.flatMap((locale) => [
    { url: getLocalizedUrl(locale, "/about"), lastModified: new Date() },
    { url: getLocalizedUrl(locale, "/privacy"), lastModified: new Date() },
    { url: getLocalizedUrl(locale, "/terms"), lastModified: new Date() },
  ]);

  const categoryEntries = LOCALES.flatMap((locale) =>
    CATEGORY_GROUPS.map((group) => ({
      url: getLocalizedUrl(locale, `/${group.slug}`),
      lastModified: new Date(),
    })),
  );

  const unitConverterEntries = LOCALES.flatMap((locale) =>
    UNIT_CONVERTER_LONGTAIL_SLUGS.map((conversion) => ({
      url: getLocalizedUrl(locale, `/unit-converter/${conversion}`),
      lastModified: new Date(),
    })),
  );

  const percentageCalculatorEntries = LOCALES.flatMap((locale) =>
    PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS.map((mode) => ({
      url: getLocalizedUrl(locale, `/percentage-calculator/${mode}`),
      lastModified: new Date(),
    })),
  );

  return [...homeEntries, ...contactEntries, ...legalEntries, ...categoryEntries, ...unitConverterEntries, ...percentageCalculatorEntries, ...toolEntries];
}
