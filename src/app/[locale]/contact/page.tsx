import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildLocaleAlternates } from "@/lib/seo";
import { isLocale } from "@/lib/site";

type ContactProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    alternates: buildLocaleAlternates(locale, "/contact"),
    title: "Contact",
    description: "Get in touch about apps24, migrations, or new tools.",
  };
}

export default async function ContactPage({ params }: ContactProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <section className="panel">
      <h2>Contact</h2>
      <p className="lede">
        Add your contact channel here when you are ready. For now, this route is in
        place so legacy navigation stays stable.
      </p>
      <p>
        <Link href={`/${locale}`}>Back to home</Link>
      </p>
    </section>
  );
}
