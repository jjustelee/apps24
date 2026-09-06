import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isPercentageCalculatorLongtailSlug, getPercentageCalculatorLongtailStaticParams } from "@/features/tools/percentage-calculator-longtails";

export function generateStaticParams() {
  return getPercentageCalculatorLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; mode: string }>;
}) {
  const { locale, mode } = await params;
  if (!isLocale(locale) || !isPercentageCalculatorLongtailSlug(mode)) notFound();
  permanentRedirect(`/${locale}/percentage-calculator?preset=${encodeURIComponent(mode)}`);
}
