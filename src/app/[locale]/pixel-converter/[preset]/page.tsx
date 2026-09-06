import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isPixelConverterLongtailSlug, getPixelConverterLongtailStaticParams } from "@/features/tools/pixel-converter-longtails";

export function generateStaticParams() {
  return getPixelConverterLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; preset: string }>;
}) {
  const { locale, preset } = await params;
  if (!isLocale(locale) || !isPixelConverterLongtailSlug(preset)) notFound();
  permanentRedirect(`/${locale}/pixel-converter?preset=${encodeURIComponent(preset)}`);
}
