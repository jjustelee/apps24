"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleName } from "@/lib/i18n";
import { LOCALES, type Locale } from "@/lib/site";

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 현재 경로에서 로케일 부분을 제외한 나머지 경로 추출
  // 예: /en/wordcounter -> /wordcounter
  const segments = pathname.split("/");
  const pathWithoutLocale = "/" + segments.slice(2).join("/");

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="locale-switcher-container" ref={dropdownRef}>
      <button 
        className={`locale-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="locale-icon">🌐</span>
        <span className="locale-label">{getLocaleName(currentLocale)}</span>
        <span className="locale-chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="locale-dropdown">
          <div className="locale-dropdown-content">
            {LOCALES.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${pathWithoutLocale !== "/" ? pathWithoutLocale : ""}`}
                className={`locale-item ${locale === currentLocale ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="item-label">{getLocaleName(locale)}</span>
                {locale === currentLocale && <span className="item-check">✓</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* 
        백엔드 및 SEO 참고 사항:
        1. 각 Link는 실제 URL을 가집니다. 이는 검색 엔진이 모든 언어 버전을 크롤링할 수 있게 도와줍니다.
        2. 클라이언트 사이드 네비게이션을 사용하여 페이지 전환 시 무거운 리로드를 피하면서도 
           URL 구조를 유지하여 백엔드 분석 툴에서 언어별 유입을 정확히 파악할 수 있게 합니다.
      */}
    </div>
  );
}

