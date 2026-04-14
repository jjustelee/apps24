import { LEGAL_TEXTS } from "@/features/tools/legal";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";
import Link from "next/link";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;
  const common = getCommonText(validLocale);

  return (
    <div className="content-page-wrapper" style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "2.5rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">ABOUT</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{legal.about.title}</h1>
        </header>

        <section className="legal-content" style={{ lineHeight: "1.8" }}>
          {legal.about.content.map((paragraph, i) => (
            <p key={i} style={{ marginBottom: "1.5rem", fontSize: "1.1rem", color: "var(--text)" }}>
              {paragraph}
            </p>
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
