import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isJsonFormatterLongtailSlug, getJsonFormatterLongtailStaticParams } from "@/features/tools/json-formatter-longtails";

export function generateStaticParams() {
  return getJsonFormatterLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; mode: string }>;
}) {
  const { locale, mode } = await params;
  if (!isLocale(locale) || !isJsonFormatterLongtailSlug(mode)) notFound();
  permanentRedirect(`/${locale}/json-formatter?preset=${encodeURIComponent(mode)}`);
}
