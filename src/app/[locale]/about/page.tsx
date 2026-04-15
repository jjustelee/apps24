import { LEGAL_TEXTS } from "@/features/tools/legal";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";
import Link from "next/link";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;
  const common = getCommonText(validLocale);
  const about = legal.about;

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
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{about.title}</h1>
        </header>

        <section className="legal-content" style={{ lineHeight: "1.8" }}>
          {/* 서론 */}
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "var(--text)" }}>
            {about.intro}
          </p>

          {/* 제공 도구 목록 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            {about.whatWeOffer.heading}
          </h2>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
            {about.whatWeOffer.items.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
                {item}
              </li>
            ))}
          </ul>

          {/* 접근 방식 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            {about.approach.heading}
          </h2>
          <div style={{ marginBottom: "2rem" }}>
            {about.approach.items.map((item, i) => (
              <div key={i} style={{ marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.3rem", color: "var(--text)" }}>
                  {i + 1}. {item.title}
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--text-muted, var(--text))", margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* 대상 사용자 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            {about.whoItsFor.heading}
          </h2>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
            {about.whoItsFor.items.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
                {item}
              </li>
            ))}
          </ul>

          {/* 만든 이유 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            {about.whyWeBuilt.heading}
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
            {about.whyWeBuilt.body}
          </p>

          {/* 목표 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            {about.goal.heading}
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
            {about.goal.body}
          </p>
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
