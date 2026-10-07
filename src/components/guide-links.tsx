import Link from "next/link";
import { GUIDES, GUIDE_UI } from "@/features/guides/content";
import type { Locale } from "@/lib/site";

export function GuideLinks({ locale, toolId }: { locale: Locale; toolId?: string }) {
  const guides = GUIDES.filter(guide => !toolId || guide.toolId === toolId);
  if (!guides.length) return null;
  const copy = GUIDE_UI[locale];
  return <section className="guide-links">
    <h2><Link href={`/${locale}/guides`}>{copy.title}</Link></h2>
    <p>{copy.intro}</p>
    <div className="guide-link-grid">{guides.map(guide => <Link key={guide.slug} href={`/${locale}/guides/${guide.slug}`}>
      <h3>{guide.copy[locale].title}</h3><p>{guide.copy[locale].intro}</p>
    </Link>)}</div>
  </section>;
}
