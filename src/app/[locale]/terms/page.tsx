import { LEGAL_TEXTS } from "@/features/tools/legal";
import type { Locale } from "@/lib/site";
import Link from "next/link";

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const legal = LEGAL_TEXTS[locale as Locale] || LEGAL_TEXTS.en;

  return (
    <div className="tool-stack" style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <header style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", marginBottom: "1rem" }}>{legal.terms.title}</h1>
        <div style={{ width: "60px", height: "4px", background: "var(--accent)", margin: "0 auto", borderRadius: "2px" }}></div>
      </header>

      <div className="tool-output-card" style={{ padding: "2.5rem", lineHeight: "1.8" }}>
        {legal.terms.content.map((item, i) => (
          <section key={i} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--accent)" }}>
              {i + 1}. {item.section}
            </h2>
            <p style={{ color: "var(--text)", fontSize: "1rem" }}>{item.body}</p>
          </section>
        ))}
      </div>

      <footer style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href={`/${locale}`} className="tool-button secondary">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
