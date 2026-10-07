import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, GUIDE_UI, getGuide } from "@/features/guides/content";
import { isLocale, LOCALES } from "@/lib/site";
import { buildLocaleAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; guide: string }> };
export function generateStaticParams() { return LOCALES.flatMap(locale => GUIDES.map(guide => ({ locale, guide: guide.slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, guide: slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(locale) || !guide) return {};
  return { title: guide.copy[locale].title, description: guide.copy[locale].intro, alternates: buildLocaleAlternates(locale, `/guides/${slug}`) };
}
export default async function GuidePage({ params }: Props) {
  const { locale, guide: slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(locale) || !guide) notFound();
  const copy = GUIDE_UI[locale];
  const article = guide.copy[locale];
  return <article className="guide-page">
    <nav><Link href={`/${locale}/guides`}>{copy.title}</Link></nav>
    <header><h1>{article.title}</h1><p>{article.intro}</p></header>
    <section><h2>{copy.example}</h2><div className="guide-table-wrap"><table><tbody>
      {guide.rows.map((row, index) => <tr key={index}>{row.map((cell, col) => <td key={col}><code dir="ltr">{cell}</code></td>)}</tr>)}
    </tbody></table></div></section>
    {guide.assets && <div className="guide-media">{guide.assets.map((asset, index) => {
      const caption = article.captions?.[index] ?? guide.rows[index][0];
      return <figure key={asset.src}><a href={asset.src} download>
        <Image src={asset.src} alt={caption} width={asset.width} height={asset.height} unoptimized />
        <figcaption>{caption}</figcaption>
      </a></figure>;
    })}</div>}
    <section><h2>{copy.interpretation}</h2><p>{article.interpretation}</p></section>
    <section><h2>{copy.action}</h2><p>{article.action}</p><Link className="tool-button" href={`/${locale}/${guide.toolSlug}`}>{copy.tool}</Link></section>
    <section><h2>{copy.limit}</h2><p>{article.limit}</p>
      {guide.slug === "png-quality-and-file-size" && <a href="/guides/png-fixture.js" download>png-fixture.js</a>}
      {guide.reproduction && <a href={guide.reproduction} download>{guide.reproduction.split("/").pop()}</a>}
    </section>
    <section><h2>{copy.sources}</h2><ul>{Object.entries(guide.sources).map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{label}</a></li>)}</ul></section>
    <p>{copy.method}</p>
  </article>;
}
