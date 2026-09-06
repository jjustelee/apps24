import { isImageCompressorLongtailSlug } from "./image-compressor-longtails";
import { isUnitConverterLongtailSlug } from "./unit-converter-longtails";
import { isPixelConverterLongtailSlug } from "./pixel-converter-longtails";
import { isBase64EncoderLongtailSlug } from "./base64-encoder-longtails";
import { isJsonFormatterLongtailSlug } from "./json-formatter-longtails";
import { isPercentageCalculatorLongtailSlug } from "./percentage-calculator-longtails";
import { isQrGeneratorLongtailSlug } from "./qrgenerator-longtails";
import { isBackgroundRemoverLongtailSlug } from "./background-remover-longtails";
import { isBarcodeGeneratorLongtailSlug } from "./barcode-generator-longtails";

const VALIDATORS: Record<string, (value: string) => boolean> = {
  "image-compressor": isImageCompressorLongtailSlug,
  "unit-converter": isUnitConverterLongtailSlug,
  "pixel-converter": isPixelConverterLongtailSlug,
  "base64-encoder-decoder": isBase64EncoderLongtailSlug,
  "json-formatter": isJsonFormatterLongtailSlug,
  "percentage-calculator": isPercentageCalculatorLongtailSlug,
  "qrgenerator": isQrGeneratorLongtailSlug,
  "background-remover": isBackgroundRemoverLongtailSlug,
  "barcodegenerator": isBarcodeGeneratorLongtailSlug,
};

export function getValidPreset(slug: string, value: string | string[] | undefined) {
  return typeof value === "string" && Object.hasOwn(VALIDATORS, slug) && VALIDATORS[slug](value) ? value : undefined;
}
