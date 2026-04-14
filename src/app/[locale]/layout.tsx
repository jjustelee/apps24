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

  const commonText = await import("@/features/tools/copy").then((m) =>
    m.getCommonText(locale as Locale)
  );

  return {
    alternates: buildLocaleAlternates(locale),
    title: {
      template: "%s | apps24",
      default: commonText.homeTitle || "apps24 - Fast Multilingual Tools",
    },
    description: commonText.homeSubtitle || "Simple multilingual utilities for quick tasks.",
    keywords: ["online tools", "utilities", "free tools", "web apps"],
    openGraph: {
      title: "apps24",
      description: commonText.homeSubtitle,
      siteName: "apps24",
    },
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
      title="Fast multilingual tools"
      description="Simple utilities for quick tasks, organized by language."
    >
      {children}
    </SiteShell>
  );
}
