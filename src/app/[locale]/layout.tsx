import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { buildLocaleAlternates } from "@/lib/seo";
import { LOCALES, isLocale, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale),
    title: `Home`,
    description: "Utility tools organized for fast browsing and expansion.",
  };
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <SiteShell
      locale={validLocale}
      title="Utility tools for global search"
      description="A clean base for small tools, multilingual pages, and future ad-supported growth."
    >
      {children}
    </SiteShell>
  );
}
