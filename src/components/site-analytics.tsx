"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ANALYTICS_COPY } from "@/features/analytics/copy";
import {
  buildAnalyticsPage, initializeAnalytics, readAnalyticsConsent,
  saveAnalyticsConsent, sendAnalyticsPageView, subscribeAnalyticsConsent,
} from "@/lib/analytics";
import type { Locale } from "@/lib/site";

type Props = { locale: Locale; measurementId: string; allowedPaths: string[] };

export function SiteAnalytics({ locale, measurementId, allowedPaths }: Props) {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    listener => subscribeAnalyticsConsent(listener, measurementId), readAnalyticsConsent, () => null,
  );
  const [editing, setEditing] = useState(false);
  const [ready, setReady] = useState(false);
  const lastPage = useRef<string | null>(null);
  const previousPage = useRef<string | null>(null);
  const copy = ANALYTICS_COPY[locale];
  const trackable = allowedPaths.includes(pathname);

  useEffect(() => {
    if (consent === "granted" && trackable) initializeAnalytics(measurementId);
    else {
      window[`ga-disable-${measurementId}`] = true;
      lastPage.current = null;
    }
    return () => { window[`ga-disable-${measurementId}`] = true; };
  }, [consent, measurementId, trackable]);

  useEffect(() => {
    if (!ready || consent !== "granted" || !trackable || lastPage.current === pathname) return;
    const page = buildAnalyticsPage(pathname, window.location.origin, previousPage.current ?? document.referrer, allowedPaths);
    if (!page || !sendAnalyticsPageView(measurementId, page)) return;
    lastPage.current = pathname;
    previousPage.current = page.page_location;
  }, [allowedPaths, consent, measurementId, pathname, ready, trackable]);

  function choose(value: "granted" | "denied") {
    saveAnalyticsConsent(value, measurementId);
    setEditing(false);
  }

  return <>
    <button type="button" className="analytics-settings" onClick={() => setEditing(true)}>{copy.settings}</button>
    {(consent === null || editing) && <section className="analytics-banner" aria-labelledby="analytics-consent-title">
      <div>
        <h2 id="analytics-consent-title">{copy.title}</h2>
        <p>{copy.description} <Link href={`/${locale}/privacy`}>{copy.privacy}</Link></p>
      </div>
      <div className="analytics-actions">
        <button type="button" onClick={() => choose("denied")}>{copy.decline}</button>
        <button type="button" onClick={() => choose("granted")}>{copy.allow}</button>
        {consent !== null && <button type="button" className="analytics-close" onClick={() => setEditing(false)}>{copy.close}</button>}
      </div>
    </section>}
    {consent === "granted" && trackable && <Script
      id="apps24-ga4"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
      onReady={() => setReady(true)}
    />}
  </>;
}
