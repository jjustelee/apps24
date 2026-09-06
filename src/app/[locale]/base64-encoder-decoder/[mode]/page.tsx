import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isBase64EncoderLongtailSlug, getBase64EncoderLongtailStaticParams } from "@/features/tools/base64-encoder-longtails";

export function generateStaticParams() {
  return getBase64EncoderLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; mode: string }>;
}) {
  const { locale, mode } = await params;
  if (!isLocale(locale) || !isBase64EncoderLongtailSlug(mode)) notFound();
  permanentRedirect(`/${locale}/base64-encoder-decoder?preset=${encodeURIComponent(mode)}`);
}
