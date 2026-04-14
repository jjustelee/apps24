import type { Locale } from "@/lib/site";

export type LegalContent = {
  about: { title: string; content: string[] };
  privacy: { title: string; content: { section: string; body: string }[] };
  terms: { title: string; content: { section: string; body: string }[] };
  contact: { title: string; content: string; email: string };
};

export const LEGAL_TEXTS: Record<Locale, LegalContent> = {
  en: {
    about: {
      title: "About apps24",
      content: [
        "apps24 is a premium suite of high-performance web utilities designed to simplify your daily digital tasks. Our mission is to provide clean, fast, and secure tools that respect user privacy while offering state-of-the-art design and usability.",
        "From measuring screen objects with precision to generating complex QR codes, all our tools are built with the latest web technologies to ensure a seamless experience across all devices.",
        "We believe that powerful tools don't have to be complicated. Our commitment is to maintain an ad-supported but non-intrusive environment where you can focus on getting things done."
      ]
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        { section: "Introduction", body: "At apps24, we prioritize your privacy. This policy outlines how we handle data when you use our services." },
        { section: "Data Collection", body: "We do not collect personal identification information. All tool processing (like Word Counting or QR generation) happens locally in your browser." },
        { section: "Log Files", body: "Like other websites, we use log files for traffic analysis and maintenance. This includes IP addresses, browser types, and timestamps, which are not linked to personally identifiable information." },
        { section: "Cookies and Web Beacons", body: "We use cookies to store user preferences (like night mode or calibration settings) locally on your device via localStorage." },
        { section: "Google AdSense", body: "As a third-party vendor, Google uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to apps24 and other sites on the Internet." },
        { section: "Contact", body: "If you have questions about our privacy practices, please reach out to us." }
      ]
    },
    terms: {
      title: "Terms of Service",
      content: [
        { section: "Acceptance of Terms", body: "By accessing apps24, you agree to be bound by these terms of service and all applicable laws and regulations." },
        { section: "Use License", body: "The tools on this site are provided for personal and commercial use. You may not modify, reverse engineer, or redistribute our code without explicit permission." },
        { section: "Disclaimer", body: "The materials on apps24 are provided on an 'as is' basis. We make no warranties, expressed or implied, regarding the accuracy or reliability of the tools." },
        { section: "Limitations", body: "In no event shall apps24 be liable for any damages arising out of the use or inability to use the tools on the site." }
      ]
    },
    contact: {
      title: "Contact Us",
      content: "Have questions, suggestions, or feedback? We'd love to hear from you. Please send us an email and we will get back to you as soon as possible.",
      email: "apps24.io@gmail.com"
    }
  },
  ko: {
    about: {
      title: "apps24 소개",
      content: [
        "apps24는 일상적인 디지털 작업을 단순화하기 위해 설계된 고성능 웹 유틸리티 스위트입니다. 우리의 미션은 최첨단 디자인과 사용성을 제공하면서도 사용자 개인정보를 존중하는 깨끗하고 빠르며 안전한 도구를 제공하는 것입니다.",
        "화면 물체를 정밀하게 측정하는 자부터 복잡한 QR 코드 생성까지, 모든 도구는 모든 기기에서 매끄러운 경험을 보장하기 위해 최신 웹 기술로 제작되었습니다.",
        "우리는 강력한 도구가 반드시 복잡할 필요는 없다고 믿습니다. 우리의 약속은 광고가 포함되되 방해되지 않는 환경을 유지하여 사용자가 작업에 핵심적으로 집중할 수 있도록 돕는 것입니다."
      ]
    },
    privacy: {
      title: "개인정보처리방침",
      content: [
        { section: "소개", body: "apps24는 사용자의 개인정보를 소중하게 생각합니다. 본 정책은 서비스 이용 시 데이터를 어떻게 처리하는지 설명합니다." },
        { section: "데이터 수집", body: "우리는 개인 식별 정보를 수집하지 않습니다. 글자 수 세기나 QR 생성과 같은 모든 도구 처리는 로컬 브라우저에서 직접 수행됩니다." },
        { section: "로그 파일", body: "여느 웹사이트와 마찬가지로 트래픽 분석 및 유지보수를 위해 로그 파일을 사용합니다. 여기에는 IP 주소, 브라우저 유형, 타임스탬프가 포함되나, 이는 개인 식별 정보와 연결되지 않습니다." },
        { section: "쿠키 및 웹 비킨", body: "우리는 사용자의 설정(나이트 모드, 보정값 등)을 localStorage를 통해 로컬 기기에 저장하기 위해 쿠키와 유사한 기술을 사용합니다." },
        { section: "Google 애드센스", body: "제3자 제공업체인 구글은 쿠키를 사용하여 본 사이트에 광고를 게재합니다. 구글의 DART 쿠키 사용을 통해 사용자의 방문 기록을 기반으로 맞춤형 광고를 제공할 수 있습니다." },
        { section: "문의", body: "개인정보 보호 정책에 대해 궁금한 점이 있으시면 언제든지 문의해 주세요." }
      ]
    },
    terms: {
      title: "이용약관",
      content: [
        { section: "약관 동의", body: "apps24에 접속함으로써 귀하는 본 이용약관 및 모든 관련 법규를 준수할 것에 동의하게 됩니다." },
        { section: "이용 라이선스", body: "본 사이트의 도구는 개인적 및 상업적 용도로 제공됩니다. 명시적인 허가 없이 코드를 수정, 역설계 또는 재배포할 수 없습니다." },
        { section: "면책 조항", body: "apps24의 자료는 '있는 그대로' 제공됩니다. 도구의 정확성이나 신뢰성에 대해 명시적 또는 묵시적인 보증을 하지 않습니다." },
        { section: "책임 제한", body: "apps24는 사이트의 도구 이용 또는 이용 불능으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다." }
      ]
    },
    contact: {
      title: "문의하기",
      content: "질문, 제안 또는 피드백이 있으신가요? 여러분의 의견을 기다립니다. 이메일을 보내주시면 최대한 빨리 답변해 드리겠습니다.",
      email: "apps24.io@gmail.com"
    }
  },
  // English fallbacks for other languages to ensure AdSense approval eligibility
  fr: { ...null as any }, ja: { ...null as any }, zh: { ...null as any }, "zh-TW": { ...null as any }, pt: { ...null as any }, es: { ...null as any }, de: { ...null as any }, ar: { ...null as any }
};

// Fill fallbacks with English for multilingual compliance
[ "fr", "ja", "zh", "zh-TW", "pt", "es", "de", "ar"].forEach((l) => {
  LEGAL_TEXTS[l as Locale] = LEGAL_TEXTS.en;
});

// Update specific localized titles for top-tier AdSense approval languages
LEGAL_TEXTS.ja = { ...LEGAL_TEXTS.en, about: { ...LEGAL_TEXTS.en.about, title: "apps24について" }, privacy: { ...LEGAL_TEXTS.en.privacy, title: "プライバシーポリシー" }, terms: { ...LEGAL_TEXTS.en.terms, title: "利用規約" }, contact: { ...LEGAL_TEXTS.en.contact, title: "お問い合わせ" } };
LEGAL_TEXTS.zh = { ...LEGAL_TEXTS.en, about: { ...LEGAL_TEXTS.en.about, title: "关于 apps24" }, privacy: { ...LEGAL_TEXTS.en.privacy, title: "隐私政策" }, terms: { ...LEGAL_TEXTS.en.terms, title: "服务条款" }, contact: { ...LEGAL_TEXTS.en.contact, title: "联系我们" } };
