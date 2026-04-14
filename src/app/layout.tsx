import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A multilingual utility platform for simple tools, search traffic, and future monetization.",
  other: {
    "google-adsense-account": "ca-pub-XXXXXXXXXXXXXXX",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
