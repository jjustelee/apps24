import Link from "next/link";
import { getLocaleName } from "@/lib/i18n";
import { LOCALES, type Locale } from "@/lib/site";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  path: string;
};

export function LocaleSwitcher({ currentLocale, path }: LocaleSwitcherProps) {
  return (
    <div className="locale-switcher">
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${path}`}
          aria-current={locale === currentLocale ? "page" : undefined}
        >
          {getLocaleName(locale)}
        </Link>
      ))}
    </div>
  );
}

