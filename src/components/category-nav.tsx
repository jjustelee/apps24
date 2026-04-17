import Link from "next/link";
import { getCategoryCopy, getCategoryGroups } from "@/features/tools/categories";
import type { Locale } from "@/lib/site";

type CategoryNavProps = {
  locale: Locale;
  mode: "home" | "route";
  activeSlug?: string;
};

export function CategoryNav({ locale, mode, activeSlug }: CategoryNavProps) {
  const groups = getCategoryGroups(locale);
  const copy = getCategoryCopy(locale);

  return (
    <nav className="category-nav" aria-label={copy.sectionTitle}>
      {groups.map((group) => {
        const isActive = activeSlug === group.slug;
        const className = `category-chip ${isActive ? "active" : ""}`;

        if (mode === "home") {
          return (
            <a key={group.id} href={`#${group.slug}`} className={className}>
              {group.shortLabel}
            </a>
          );
        }

        return (
          <Link key={group.id} href={group.href} className={className} aria-current={isActive ? "page" : undefined}>
            {group.shortLabel}
          </Link>
        );
      })}
    </nav>
  );
}
