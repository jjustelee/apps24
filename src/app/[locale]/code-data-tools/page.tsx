import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryHubPage } from "@/components/category-hub-page";
import { getCategoryGroups } from "@/features/tools/categories";
import { buildLocaleAlternates } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/site";

const categorySlug = "code-data-tools";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const localizedGroup = getCategoryGroups(locale as Locale).find((group) => group.slug === categorySlug);

  if (!localizedGroup) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale as Locale, `/${categorySlug}`),
    title: localizedGroup.title,
    description: localizedGroup.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <CategoryHubPage locale={locale as Locale} categorySlug={categorySlug} />;
}
