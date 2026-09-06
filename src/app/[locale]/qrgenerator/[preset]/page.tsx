import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isQrGeneratorLongtailSlug, getQrGeneratorLongtailStaticParams } from "@/features/tools/qrgenerator-longtails";

export function generateStaticParams() {
  return getQrGeneratorLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; preset: string }>;
}) {
  const { locale, preset } = await params;
  if (!isLocale(locale) || !isQrGeneratorLongtailSlug(preset)) notFound();
  permanentRedirect(`/${locale}/qrgenerator?preset=${encodeURIComponent(preset)}`);
}
