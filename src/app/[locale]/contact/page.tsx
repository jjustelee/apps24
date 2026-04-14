import { LEGAL_TEXTS } from "@/features/tools/legal";
import type { Locale } from "@/lib/site";
import Link from "next/link";
import { isLocale } from "@/lib/site";
import { notFound } from "next/navigation";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!isLocale(locale)) {
    notFound();
  }

  const legal = LEGAL_TEXTS[locale as Locale] || LEGAL_TEXTS.en;

  return (
    <div className="tool-stack" style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <header style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", marginBottom: "1rem" }}>{legal.contact.title}</h1>
        <div style={{ width: "60px", height: "4px", background: "var(--accent)", margin: "0 auto", borderRadius: "2px" }}></div>
      </header>

      <div className="tool-output-card" style={{ padding: "2.5rem", textAlign: "center", lineHeight: "1.8" }}>
        <p style={{ fontSize: "1.2rem", color: "var(--text)", marginBottom: "2rem" }}>{legal.contact.content}</p>
        
        <div style={{ 
          background: "var(--surface)", 
          padding: "2rem", 
          borderRadius: "12px", 
          display: "inline-block",
          border: "1px solid var(--line)"
        }}>
          <span style={{ display: "block", fontSize: "0.9rem", color: "var(--accent)", fontWeight: 700, marginBottom: "0.5rem", textTransform: "uppercase" }}>
            Official Support Email
          </span>
          <a 
            href={`mailto:${legal.contact.email}`}
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", textDecoration: "none" }}
          >
            {legal.contact.email}
          </a>
        </div>
      </div>

      <footer style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link href={`/${locale}`} className="tool-button secondary">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
