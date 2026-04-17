import type { Metadata } from "next";
import { headers } from "next/headers";
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
    "A multilingual utility platform for practical browser tools.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-locale") ?? "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta name="impact-site-verification" content="63357a1c-cdb1-4be0-b902-123c9758b597" />
      </head>
      <body>{children}</body>
    </html>
  );
}
