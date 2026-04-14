import { LEGAL_TEXTS } from "@/features/tools/legal";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";
import Link from "next/link";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <div className="tool-badge">CONTACT</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{legal.contact.title}</h1>
        </header>

        <section className="legal-content" style={{ textAlign: "center", padding: "2rem 0" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ lineHeight: "1.8", fontSize: "1.2rem", color: "var(--text)", marginBottom: "2rem" }}>
              {legal.contact.content}
            </p>
            <a 
              href={`mailto:${legal.contact.email}`} 
              className="tool-button" 
              style={{ padding: "1.25rem 3rem", fontSize: "1.2rem" }}
            >
              {legal.contact.email}
            </a>
          </div>
        </section>

        <footer style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <Link href={`/${locale}`} className="tool-button secondary">
            {common.backToTools}
          </Link>
        </footer>
      </main>
    </div>
  );
}
