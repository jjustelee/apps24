import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isBarcodeGeneratorLongtailSlug, getBarcodeGeneratorLongtailStaticParams } from "@/features/tools/barcode-generator-longtails";

export function generateStaticParams() {
  return getBarcodeGeneratorLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; format: string }>;
}) {
  const { locale, format } = await params;
  if (!isLocale(locale) || !isBarcodeGeneratorLongtailSlug(format)) notFound();
  permanentRedirect(`/${locale}/barcodegenerator?preset=${encodeURIComponent(format)}`);
}
