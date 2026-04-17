import type { Metadata } from "next";
import { LEGAL_TEXTS } from "@/features/tools/legal";
import { getCommonText } from "@/features/tools/copy";
import { buildLocaleAlternates } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/site";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;

  return {
    alternates: buildLocaleAlternates(validLocale, "/terms"),
    title: legal.terms.title,
    description: legal.terms.content[0]?.body ?? legal.terms.title,
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;
  const common = await getCommonText(validLocale);

  return (
    <div className="content-page-wrapper" style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "2.5rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">{common.terms}</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{legal.terms.title}</h1>
        </header>

        <section className="legal-content">
          {legal.terms.content.map((item, i) => (
            <div key={i} style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--accent)" }}>{item.section}</h2>
              <p style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "var(--text)" }}>{item.body}</p>
            </div>
          ))}
        </section>

        <footer style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <Link href={`/${locale}`} className="tool-button">
            {common.backToTools}
          </Link>
        </footer>
      </main>
    </div>
  );
}
