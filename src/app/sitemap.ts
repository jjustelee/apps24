/** Sitemap configuration for apps24.io */
import type { MetadataRoute } from "next";
import { getLocalizedUrl, LOCALES } from "@/lib/site";
import { CATEGORY_GROUPS } from "@/features/tools/categories";
import { getStaticToolParams } from "@/features/tools/registry";
import { BASE64_ENCODER_LONGTAIL_SLUGS } from "@/features/tools/base64-encoder-longtails";
import { JSON_FORMATTER_LONGTAIL_SLUGS } from "@/features/tools/json-formatter-longtails";
import { IMAGE_COMPRESSOR_LONGTAIL_SLUGS } from "@/features/tools/image-compressor-longtails";
import { BARCODE_GENERATOR_LONGTAIL_SLUGS } from "@/features/tools/barcode-generator-longtails";
import { QR_GENERATOR_LONGTAIL_SLUGS } from "@/features/tools/qrgenerator-longtails";
import { PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS } from "@/features/tools/percentage-calculator-longtails";
import { PIXEL_CONVERTER_LONGTAIL_SLUGS } from "@/features/tools/pixel-converter-longtails";
import { BACKGROUND_REMOVER_LONGTAIL_SLUGS } from "@/features/tools/background-remover-longtails";
import { UNIT_CONVERTER_LONGTAIL_SLUGS } from "@/features/tools/unit-converter-longtails";

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

  const unitConverterEntries = LOCALES.flatMap((locale) =>
    UNIT_CONVERTER_LONGTAIL_SLUGS.map((conversion) => ({
      url: getLocalizedUrl(locale, `/unit-converter/${conversion}`),
    })),
  );

  const percentageCalculatorEntries = LOCALES.flatMap((locale) =>
    PERCENTAGE_CALCULATOR_LONGTAIL_SLUGS.map((mode) => ({
      url: getLocalizedUrl(locale, `/percentage-calculator/${mode}`),
    })),
  );

  const qrGeneratorEntries = LOCALES.flatMap((locale) =>
    QR_GENERATOR_LONGTAIL_SLUGS.map((preset) => ({
      url: getLocalizedUrl(locale, `/qrgenerator/${preset}`),
    })),
  );

  const imageCompressorEntries = LOCALES.flatMap((locale) =>
    IMAGE_COMPRESSOR_LONGTAIL_SLUGS.map((mode) => ({
      url: getLocalizedUrl(locale, `/image-compressor/${mode}`),
    })),
  );

  const backgroundRemoverEntries = LOCALES.flatMap((locale) =>
    BACKGROUND_REMOVER_LONGTAIL_SLUGS.map((preset) => ({
      url: getLocalizedUrl(locale, `/background-remover/${preset}`),
    })),
  );

  const pixelConverterEntries = LOCALES.flatMap((locale) =>
    PIXEL_CONVERTER_LONGTAIL_SLUGS.map((preset) => ({
      url: getLocalizedUrl(locale, `/pixel-converter/${preset}`),
    })),
  );

  const base64EncoderEntries = LOCALES.flatMap((locale) =>
    BASE64_ENCODER_LONGTAIL_SLUGS.map((mode) => ({
      url: getLocalizedUrl(locale, `/base64-encoder-decoder/${mode}`),
    })),
  );

  const jsonFormatterEntries = LOCALES.flatMap((locale) =>
    JSON_FORMATTER_LONGTAIL_SLUGS.map((mode) => ({
      url: getLocalizedUrl(locale, `/json-formatter/${mode}`),
    })),
  );

  const barcodeGeneratorEntries = LOCALES.flatMap((locale) =>
    BARCODE_GENERATOR_LONGTAIL_SLUGS.map((format) => ({
      url: getLocalizedUrl(locale, `/barcodegenerator/${format}`),
    })),
  );

  return [...homeEntries, ...contactEntries, ...legalEntries, ...categoryEntries, ...unitConverterEntries, ...percentageCalculatorEntries, ...qrGeneratorEntries, ...imageCompressorEntries, ...backgroundRemoverEntries, ...pixelConverterEntries, ...base64EncoderEntries, ...jsonFormatterEntries, ...barcodeGeneratorEntries, ...toolEntries];
}
