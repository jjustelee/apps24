import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isUnitConverterLongtailSlug, getUnitConverterLongtailStaticParams } from "@/features/tools/unit-converter-longtails";

export function generateStaticParams() {
  return getUnitConverterLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; conversion: string }>;
}) {
  const { locale, conversion } = await params;
  if (!isLocale(locale) || !isUnitConverterLongtailSlug(conversion)) notFound();
  permanentRedirect(`/${locale}/unit-converter?preset=${encodeURIComponent(conversion)}`);
}
