import { LEGAL_TEXTS } from "@/features/tools/legal";
import { getCommonText } from "@/features/tools/copy";
import type { Locale } from "@/lib/site";
import Link from "next/link";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;
  const common = getCommonText(validLocale);
  const contact = legal.contact;

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
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{contact.title}</h1>
        </header>

        <section className="legal-content" style={{ lineHeight: "1.8" }}>
          {/* 서론 */}
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", color: "var(--text)" }}>
            {contact.intro}
          </p>

          {/* 문의 가능 항목 */}
          <ul style={{ marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
            {contact.welcomeItems.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
                {item}
              </li>
            ))}
          </ul>

          {/* 이메일 섹션 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            {contact.emailHeading}
          </h2>
          <div style={{ marginBottom: "2rem", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--line)", textAlign: "center" }}>
            <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "var(--text)" }}>
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                style={{ fontWeight: 700, color: "var(--accent, #6366f1)", textDecoration: "none" }}
              >
                {contact.email}
              </a>
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="tool-button"
              style={{ display: "inline-block", padding: "0.875rem 2.5rem", fontSize: "1.1rem" }}
            >
              {contact.email}
            </a>
          </div>

          {/* 신고 시 포함할 내용 */}
          <p style={{ marginBottom: "0.75rem", fontSize: "1rem", color: "var(--text)" }}>
            {contact.reportDescription}
          </p>
          <ul style={{ marginBottom: "2.5rem", paddingLeft: "1.5rem" }}>
            {contact.reportItems.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
                {item}
              </li>
            ))}
          </ul>

          {/* 응답 시간 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>
            {contact.responseHeading}
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
            {contact.responseBody}
          </p>

          {/* 제안 및 피드백 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>
            {contact.suggestionsHeading}
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
            {contact.suggestionsBody}
          </p>

          {/* 비즈니스 문의 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>
            {contact.businessHeading}
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
            {contact.businessBody}
          </p>

          {/* 문의 전 확인사항 */}
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>
            {contact.beforeContactHeading}
          </h2>
          <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
            {contact.beforeContactItems.map((item, i) => (
              <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "var(--text-muted, var(--text))" }}>
                {item}
              </li>
            ))}
          </ul>

          {/* 마무리 인사 */}
          <p style={{ fontSize: "1rem", color: "var(--text)", fontWeight: 600 }}>
            {contact.closing}
          </p>
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
