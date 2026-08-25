import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./lib/site";

const MATCHABLE_LOCALES = [...LOCALES].sort((a, b) => b.length - a.length);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const matchedLocale = LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (matchedLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", matchedLocale);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const acceptLanguage = request.headers.get("accept-language");
  let selectedLocale = DEFAULT_LOCALE;

  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(",")
      .map((entry) => entry.split(";")[0].trim().toLowerCase());

    for (const preferredLocale of preferredLocales) {
      const match = MATCHABLE_LOCALES.find((locale) => {
        const candidate = locale.toLowerCase();
        return preferredLocale === candidate || preferredLocale.startsWith(`${candidate}-`);
      });

      if (match) {
        selectedLocale = match;
        break;
      }
    }
  }

  const url = new URL(`/${selectedLocale}${pathname === "/" ? "" : pathname}`, request.url);
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)"],
};
