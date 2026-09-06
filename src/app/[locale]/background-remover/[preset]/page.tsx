import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/site";
import { isBackgroundRemoverLongtailSlug, getBackgroundRemoverLongtailStaticParams } from "@/features/tools/background-remover-longtails";

export function generateStaticParams() {
  return getBackgroundRemoverLongtailStaticParams();
}

export default async function PresetRedirect({ params }: {
  params: Promise<{ locale: string; preset: string }>;
}) {
  const { locale, preset } = await params;
  if (!isLocale(locale) || !isBackgroundRemoverLongtailSlug(preset)) notFound();
  permanentRedirect(`/${locale}/background-remover?preset=${encodeURIComponent(preset)}`);
}
