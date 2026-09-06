import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isImageCompressorLongtailSlug, getImageCompressorLongtailStaticParams } from "@/features/tools/image-compressor-longtails";

export function generateStaticParams() {
  return getImageCompressorLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; mode: string }>;
}) {
  const { locale, mode } = await params;
  if (!isLocale(locale) || !isImageCompressorLongtailSlug(mode)) notFound();
  permanentRedirect(`/${locale}/image-compressor?preset=${encodeURIComponent(mode)}`);
}
