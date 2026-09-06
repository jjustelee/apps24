import Script from "next/script";
import { getGoogleAdsenseAccount } from "@/lib/adsense";

// Keep error, navigation, display-only and preset pages outside ad inventory.
const AD_ELIGIBLE_TOOLS = new Set(["ruler", "wordcounter", "jsonformatter", "imagecompressor", "iplookup"]);

export function ToolAds({ toolId }: { toolId: string }) {
  const account = getGoogleAdsenseAccount();
  if (process.env.NEXT_PUBLIC_ADSENSE_ENABLED !== "true" || !account || !AD_ELIGIBLE_TOOLS.has(toolId)) return null;

  return <Script id="apps24-adsense" strategy="afterInteractive" async crossOrigin="anonymous"
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${account}`} />;
}
