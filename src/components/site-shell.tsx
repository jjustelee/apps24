import Link from "next/link";
import type { ReactNode } from "react";
import { getCommonText } from "@/features/tools/copy";
import { LocaleSwitcher } from "./locale-switcher";
import { type Locale } from "@/lib/site";

type SiteShellProps = {
  locale: Locale;
  title: string;
  description: string;
  children: ReactNode;
};

export async function SiteShell({ locale, title, description, children }: SiteShellProps) {
  const common = await getCommonText(locale);
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="site-brand" href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          apps24.io
        </Link>

        <nav className="locale-nav" aria-label="Locale switcher">
          <LocaleSwitcher currentLocale={locale} />
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="footer-container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", fontSize: "0.95rem", fontWeight: 500 }}>
            <Link href={`/${locale}/about`} style={{ color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {common.about}
            </Link>
            <Link href={`/${locale}/privacy`} style={{ color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {common.privacy}
            </Link>
            <Link href={`/${locale}/terms`} style={{ color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              {common.terms}
            </Link>
            <Link href={`/${locale}/contact`} style={{ color: "var(--text-muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {common.contact}
            </Link>
          </div>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", opacity: 0.8 }}>
            © {new Date().getFullYear()} apps24.io.
          </span>
        </div>
      </footer>
    </div>
  );
}
