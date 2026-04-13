import Link from "next/link";
import type { ReactNode } from "react";
import { getLocaleName } from "@/lib/i18n";
import { LOCALES, type Locale } from "@/lib/site";

type SiteShellProps = {
  locale: Locale;
  title: string;
  description: string;
  children: ReactNode;
};

export function SiteShell({ locale, title, description, children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <Link className="site-brand" href={`/${locale}`}>
            apps24
          </Link>
          <p className="site-kicker">Multilingual utility platform</p>
        </div>

        <nav className="locale-nav" aria-label="Locale switcher">
          {LOCALES.map((candidate) => (
            <Link
              key={candidate}
              href={`/${candidate}`}
              aria-current={candidate === locale ? "page" : undefined}
            >
              {getLocaleName(candidate)}
            </Link>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <section className="hero">
          <p className="eyebrow">apps24</p>
          <h1>{title}</h1>
          <p className="lede">{description}</p>
        </section>

        {children}
      </main>

      <footer className="site-footer">
        <span>Built for Vercel + Cloudflare DNS</span>
      </footer>
    </div>
  );
}
