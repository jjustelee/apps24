import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDE_UI } from "@/features/guides/content";
import { GuideLinks } from "@/components/guide-links";
import { getCommonText } from "@/features/tools/copy";
import { isLocale, LOCALES } from "@/lib/site";
import { buildLocaleAlternates } from "@/lib/seo";

export function generateStaticParams() { return LOCALES.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: GUIDE_UI[locale].title, description: GUIDE_UI[locale].intro, alternates: buildLocaleAlternates(locale, "/guides") };
}
export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const common = await getCommonText(locale);
  return <div className="guide-page">
    <Link href={`/${locale}`} className="back-link">{common.backToTools}</Link>
    <h1>{GUIDE_UI[locale].title}</h1>
    <GuideLinks locale={locale} />
    <p>{GUIDE_UI[locale].method}</p>
    <Link href={`/${locale}/contact`}>{common.contact}</Link>
  </div>;
}
