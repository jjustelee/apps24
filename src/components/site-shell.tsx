import Link from "next/link";
import type { ReactNode } from "react";
import { LocaleSwitcher } from "./locale-switcher";
import { type Locale } from "@/lib/site";

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
        <Link className="site-brand" href={`/${locale}`}>
          apps24
        </Link>

        <nav className="locale-nav" aria-label="Locale switcher">
          <LocaleSwitcher currentLocale={locale} />
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} apps24</span>
      </footer>
    </div>
  );
}
