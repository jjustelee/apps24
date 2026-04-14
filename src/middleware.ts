import { NextRequest, NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "./lib/site";

/**
 * 전 세계 사용자의 브라우저 언어 설정을 감지하여 
 * 가장 적합한 다국어 페이지(/[locale])로 자동 연결하는 미들웨어입니다.
 * 
 * 백엔드 운영 고려 사항:
 * - Edge Runtime에서 실행되므로 속도가 매우 빠릅니다.
 * - 특정 국가에서 접속 시 법적 공지 등이 필요하다면 여기서 헤더를 분석하여 처리할 수 있습니다.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. 이미 URL에 언어 코드(예: /ko, /en)가 포함되어 있는지 확인
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 2. 브라우저의 'Accept-Language' 헤더를 분석하여 선호 언어 추출
  const acceptLanguage = request.headers.get("accept-language");
  let selectedLocale = DEFAULT_LOCALE;

  if (acceptLanguage) {
    // 예: "ko-KR,ko;q=0.9,en-US;q=0.8" -> ["ko-KR", "ko", "en-US"]
    const preferredLocales = acceptLanguage
      .split(",")
      .map((entry) => entry.split(";")[0].trim());

    for (const pref of preferredLocales) {
      // 우리가 지원하는 10개 언어(LOCALES) 중 일치하는 것이 있는지 확인
      const match = LOCALES.find((l) => pref.toLowerCase().startsWith(l.toLowerCase()));
      if (match) {
        selectedLocale = match;
        break;
      }
    }
  }

  // 3. 감지된 언어 경로로 리다이렉트 (예: /ruler -> /ko/ruler)
  const url = new URL(`/${selectedLocale}${pathname === "/" ? "" : pathname}`, request.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * 아래와 같은 경로는 자동 감지에서 제외합니다:
     * - api: API 라우트
     * - _next: Next.js 내부 정적 파일
     * - favicon.ico, sitemap.xml, robots.txt 등 (파일 확장자가 있는 경로)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
