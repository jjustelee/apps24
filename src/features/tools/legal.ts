import type { Locale } from "@/lib/site";

export type LegalContent = {
  about: {
    title: string;
    intro: string;
    whatWeOffer: { heading: string; items: string[] };
    approach: { heading: string; items: { title: string; body: string }[] };
    whoItsFor: { heading: string; items: string[] };
    whyWeBuilt: { heading: string; body: string };
    goal: { heading: string; body: string };
    /** 하위 호환용 (구 UI에서 content 배열을 참조할 경우) */
    content: string[];
  };
  privacy: { title: string; content: { section: string; body: string }[] };
  terms: { title: string; content: { section: string; body: string }[] };
  contact: {
    title: string;
    intro: string;
    welcomeItems: string[];
    emailHeading: string;
    email: string;
    reportDescription: string;
    reportItems: string[];
    responseHeading: string;
    responseBody: string;
    suggestionsHeading: string;
    suggestionsBody: string;
    businessHeading: string;
    businessBody: string;
    beforeContactHeading: string;
    beforeContactItems: string[];
    closing: string;
    /** 하위 호환용 */
    content: string;
  };
};

export const LEGAL_TEXTS: Record<Locale, LegalContent> = {
  en: {
    about: {
      title: "Platform Overview and Service Vision",
      intro: "Apps24 is a high-performance, multilingual utility platform designed to enhance digital productivity for global users. We provide a comprehensive suite of essential tools accessible directly via web browsers, eliminating the need for software installation or registration.",
      whatWeOffer: {
        heading: "Platform Strategy and Vision",
        items: [
          "Minimizing complexity in digital task management",
          "Ensuring seamless user experience across devices",
          "Adhering to principles of Simplicity, Efficiency, and Universal Accessibility",
          "Providing a standardized tool environment for global digital citizens",
        ],
      },
      approach: {
        heading: "Core Strategic Competencies",
        items: [
          { title: "Performance Optimization", body: "Built on a lightweight architecture to guarantee superior execution speeds across all device environments while minimizing network resource consumption." },
          { title: "Multilingual Infrastructure", body: "Optimized localization for over 10 major languages, establishing global accessibility and consistent service standards." },
          { title: "Intuitive UI/UX Design", body: "Implementation of modern design systems, including Glassmorphism, to allow immediate task execution without a complex learning curve." },
        ],
      },
      whoItsFor: {
        heading: "Primary User Archetypes",
        items: [
          "Students managing text, files, and academic formatting",
          "Developers validating JSON, encoding, and technical data structures",
          "Marketers executing campaign distribution and content preparation",
          "Designers managing color palettes, assets, and visual materials",
          "Small Businesses generating labels, QR codes, and operational utilities",
        ],
      },
      whyWeBuilt: {
        heading: "Technical Architecture and Privacy",
        body: "Data security is the paramount priority of Apps24. Our core utilities are designed for Client-Side Processing, ensuring that data remains within the user's browser environment without server-side transmission.",
      },
      goal: {
        heading: "Future Strategic Outlook",
        body: "Apps24 is committed to strategic expansion through continuous technical review and user requirement analysis, solidifying its position as a global standard for utility platforms.",
      },
      content: [
        "Apps24 is a multilingual online tools website built to make everyday digital tasks faster, simpler, and easier to access from any device.",
        "We provide lightweight browser-based tools for text formatting, image compression, JSON validation, password generation, QR codes, and more.",
        "Our goal is to build a trusted library of useful online tools that people can return to whenever they need a quick solution.",
      ],
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        { section: "Introduction", body: "At Apps24, we prioritize your privacy. This policy outlines how we handle data when you use our services." },
        { section: "Data Collection", body: "Most tools process data locally in your browser. Some features may request limited data from third-party services when live results are needed." },
        { section: "Log Files", body: "Like other websites, we use log files for traffic analysis and maintenance. This includes IP addresses, browser types, and timestamps, which are not linked to personally identifiable information." },
        { section: "Browser Storage", body: "Some tools store user preferences locally on your device using browser storage such as localStorage." },
        { section: "Third-Party Services", body: "Features such as IP lookup may use external providers to display network and location details." },
        { section: "Contact", body: "If you have questions about our privacy practices, please reach out to us." },
      ],
    },
    terms: {
      title: "Terms of Service",
      content: [
        { section: "Acceptance of Terms", body: "By accessing Apps24, you agree to be bound by these terms of service and all applicable laws and regulations." },
        { section: "Use License", body: "The tools on this site are provided for personal and commercial use. You may not modify, reverse engineer, or redistribute our code without explicit permission." },
        { section: "Disclaimer", body: "The materials on Apps24 are provided on an 'as is' basis. We make no warranties regarding the accuracy or reliability of the tools." },
        { section: "Limitations", body: "In no event shall Apps24 be liable for any damages arising out of the use or inability to use the tools on the site." },
      ],
    },
    contact: {
      title: "Contact Apps24",
      intro: "If you have questions, feedback, or suggestions, feel free to contact us.",
      welcomeItems: [
        "Tool errors or bugs",
        "Incorrect output or formatting issues",
        "Feature suggestions",
        "Language or translation improvements",
        "Business inquiries",
        "General feedback about the website",
      ],
      emailHeading: "Email Support",
      email: "support@apps24.io",
      reportDescription: "If you are reporting an issue, please include as much detail as possible:",
      reportItems: [
        "The tool name",
        "The page URL",
        "The browser or device you used",
        "A short description of the issue",
        "A screenshot if available",
      ],
      responseHeading: "Response Time",
      responseBody: "We aim to review inquiries as quickly as possible. Please allow a reasonable amount of time for a response, especially for feature requests or non-urgent questions.",
      suggestionsHeading: "Suggestions and Feedback",
      suggestionsBody: "We are continuously improving Apps24 and adding new tools. If there is a tool you would like to see on the site, or if you have ideas to improve usability, we would be glad to hear from you.",
      businessHeading: "Business and Partnership Inquiries",
      businessBody: "For business-related communication, partnership discussions, or website-related proposals, please contact us by email with a clear subject line so we can review your request more efficiently.",
      beforeContactHeading: "Before You Contact Us",
      beforeContactItems: ["About Us", "Privacy Policy", "Terms of Service"],
      closing: "Thank you for visiting Apps24.",
      content: "If you have questions, feedback, or suggestions, feel free to contact us at support@apps24.io.",
    },
  },

  ko: {
    about: {
      title: "플랫폼 개요 및 서비스 비전",
      intro: "Apps24는 글로벌 사용자의 디지털 생산성 향상을 목적으로 설계된 고성능 다국어 유틸리티 플랫폼입니다. 본 플랫폼은 별도의 소프트웨어 설치나 회원 가입 절차 없이, 웹 브라우저 환경에서 즉각적으로 활용 가능한 필수 도구들을 통합적으로 제공합니다.",
      whatWeOffer: {
        heading: "플랫폼 운영 전략 및 비전",
        items: [
          "디지털 작업의 복잡성 최소화 및 생산성 극대화",
          "기기 환경에 구애받지 않는 단절 없는 사용자 경험 제공",
          "간결함, 신속성, 범용적 접근성 원칙 준수",
          "글로벌 디지털 시민을 위한 표준화된 도구 환경 구축",
        ],
      },
      approach: {
        heading: "핵심 전략적 역량",
        items: [
          { title: "성능 최적화 (Performance)", body: "초경량 아키텍처를 기반으로 설계되어 모든 기기 환경에서 최상의 구동 속도를 보장하고 네트워크 리소스 소모를 최소화합니다." },
          { title: "다국어 인프라 (Localization)", body: "10개 이상의 주요 언어권에 최적화된 현지화를 통해 글로벌 접근성을 확보하고 일관된 서비스 표준을 제시합니다." },
          { title: "직관적 UI/UX 설계", body: "글래스모피즘을 포함한 최신 디자인 시스템을 도입하여 복잡한 학습 없이 즉각적인 도구 활용이 가능하도록 구현되었습니다." },
        ],
      },
      whoItsFor: {
        heading: "주요 사용자 페르소나",
        items: [
          "텍스트 및 파일 서식 관리와 학업 효율화를 추구하는 학생",
          "JSON, 인코딩 등 기술적 데이터 구조를 검증하는 개발자",
          "캠페인 배포 및 콘텐츠 준비 업무를 수행하는 마케팅 전문가",
          "컬러 팔레트 및 시각 자산을 관리하는 디자이너",
          "라벨, QR 코드 등 운영 유틸리티를 생성하는 소규모 사업자",
        ],
      },
      whyWeBuilt: {
        heading: "기술 아키텍처 및 보안",
        body: "사용자의 데이터 보안은 Apps24의 최우선 가치입니다. 당사의 핵심 유틸리티는 클라이언트 사이드 프로세싱(Client-Side Processing) 방식에 따라 설계되어, 데이터가 서버로 전송되지 않고 브라우저 내에서 독립적으로 처리됩니다.",
      },
      goal: {
        heading: "지속 가능한 전략적 전망",
        body: "Apps24는 지속적인 기술 검토와 사용자 요구사항 분석을 통해 서비스 범위를 전략적으로 확장하여, 글로벌 표준 유틸리티 플랫폼으로서의 입지를 공고히 할 것입니다.",
      },
      content: [
        "Apps24는 어느 기기에서든 일상적인 디지털 작업을 더 빠르고 간단하게 해결할 수 있도록 만들어진 다국어 온라인 도구 사이트입니다.",
        "텍스트 변환, 이미지 압축, JSON 유효성 검사, 비밀번호 생성, QR 코드 등 다양한 브라우저 기반 도구를 제공합니다.",
        "빠른 해결책이 필요할 때마다 사람들이 돌아올 수 있는 신뢰할 수 있는 온라인 도구 라이브러리를 구축하는 것이 저희의 목표입니다.",
      ],
    },
    privacy: {
      title: "개인정보처리방침",
      content: [
        { section: "소개", body: "Apps24는 사용자의 개인정보를 소중하게 생각합니다. 본 정책은 서비스 이용 시 데이터를 어떻게 처리하는지 설명합니다." },
        { section: "데이터 수집", body: "대부분의 도구는 브라우저 내에서 로컬로 처리되지만, 일부 기능은 실시간 결과 제공을 위해 외부 서비스를 호출할 수 있습니다." },
        { section: "로그 파일", body: "트래픽 분석 및 유지보수를 위해 로그 파일을 사용합니다. IP 주소, 브라우저 유형, 타임스탬프가 포함되나 개인 식별 정보와 연결되지 않습니다." },
        { section: "브라우저 저장소", body: "일부 도구는 localStorage와 같은 브라우저 저장소를 사용해 사용자 환경설정을 로컬 기기에 저장합니다." },
        { section: "제3자 서비스", body: "IP 조회와 같은 기능은 네트워크 및 위치 정보를 표시하기 위해 외부 제공업체의 데이터를 사용할 수 있습니다." },
        { section: "문의", body: "개인정보 보호 정책에 대해 궁금하신 점이 있으시면 언제든지 문의해 주세요." },
      ],
    },
    terms: {
      title: "이용약관",
      content: [
        { section: "약관 동의", body: "Apps24에 접속함으로써 귀하는 본 이용약관 및 관련 법규를 준수할 것에 동의하게 됩니다." },
        { section: "이용 라이선스", body: "본 사이트의 도구는 개인적 및 상업적 용도로 제공됩니다. 명시적 허가 없이 코드를 수정, 역설계 또는 재배포할 수 없습니다." },
        { section: "면책 조항", body: "Apps24의 자료는 '있는 그대로' 제공됩니다. 도구의 정확성이나 신뢰성에 대한 보증을 하지 않습니다." },
        { section: "책임 제한", body: "Apps24는 사이트 도구 이용 또는 이용 불능으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다." },
      ],
    },
    contact: {
      title: "Apps24 문의",
      intro: "질문, 피드백 또는 제안이 있으시면 언제든지 문의해 주세요.",
      welcomeItems: [
        "도구 오류 또는 버그",
        "잘못된 출력 또는 형식 문제",
        "기능 제안",
        "언어 또는 번역 개선",
        "비즈니스 문의",
        "웹사이트에 대한 일반 피드백",
      ],
      emailHeading: "이메일 지원",
      email: "support@apps24.io",
      reportDescription: "문제를 신고하실 경우 가능한 한 자세한 정보를 포함해 주세요:",
      reportItems: [
        "도구 이름",
        "페이지 URL",
        "사용한 브라우저 또는 기기",
        "문제에 대한 간략한 설명",
        "가능하면 스크린샷",
      ],
      responseHeading: "응답 시간",
      responseBody: "저희는 최대한 빠르게 문의를 검토하겠습니다. 기능 요청이나 긴급하지 않은 질문의 경우 합리적인 응답 시간을 허용해 주세요.",
      suggestionsHeading: "제안 및 피드백",
      suggestionsBody: "저희는 Apps24를 지속적으로 개선하고 새로운 도구를 추가하고 있습니다. 사이트에 추가되었으면 하는 도구가 있거나 사용성 개선 아이디어가 있으시면 기꺼이 듣겠습니다.",
      businessHeading: "비즈니스 및 파트너십 문의",
      businessBody: "비즈니스 관련 연락, 파트너십 논의 또는 웹사이트 관련 제안의 경우 명확한 제목줄을 포함한 이메일로 문의해 주시면 더 효율적으로 검토하겠습니다.",
      beforeContactHeading: "문의 전 확인사항",
      beforeContactItems: ["소개", "개인정보처리방침", "이용약관"],
      closing: "Apps24를 방문해 주셔서 감사합니다.",
      content: "질문, 피드백 또는 제안이 있으시면 support@apps24.io로 문의해 주세요.",
    },
  },

  fr: {
    about: {
      title: "À propos d'Apps24",
      intro: "Apps24 est un site d'outils en ligne multilingue conçu pour rendre les tâches numériques quotidiennes plus rapides, plus simples et accessibles depuis n'importe quel appareil. Nous avons créé Apps24 pour les personnes qui ont besoin d'outils pratiques sans téléchargements, inscriptions ou workflows compliqués. Que vous soyez étudiant, marketeur, développeur, designer, propriétaire d'entreprise ou simple internaute, notre objectif est de vous aider à accomplir rapidement des tâches petites mais importantes.",
      whatWeOffer: {
        heading: "Ce que nous proposons",
        items: [
          "Mise en forme et conversion de texte",
          "Compression et optimisation d'images",
          "Mise en forme et validation JSON",
          "Génération de mots de passe",
          "Génération de codes QR et de codes-barres",
          "Utilitaires de couleur et d'encodage",
        ],
      },
      approach: {
        heading: "Notre approche",
        items: [
          { title: "Simple et rapide", body: "Nos outils sont conçus pour fonctionner rapidement avec une interface claire et des étapes minimales." },
          { title: "Sans friction inutile", body: "Dans la mesure du possible, les utilisateurs doivent pouvoir ouvrir une page, utiliser l'outil immédiatement et obtenir des résultats sans créer de compte." },
          { title: "Utile dans toutes les langues", body: "Apps24 est conçu comme une plateforme multilingue pour que davantage d'utilisateurs puissent accéder à des outils pratiques dans leur langue préférée." },
          { title: "Respect de la vie privée", body: "Beaucoup de nos outils traitent les données directement dans le navigateur dans la mesure du possible, permettant aux utilisateurs d'accomplir des tâches sans transfert de données inutile." },
        ],
      },
      whoItsFor: {
        heading: "Pour qui est Apps24",
        items: [
          "Étudiants travaillant avec du texte, des fichiers et de la mise en forme",
          "Développeurs vérifiant JSON, l'encodage et les données techniques",
          "Marketeurs créant des liens de campagne et préparant du contenu",
          "Designers gérant les couleurs, les ressources et les visuels",
          "Petites entreprises créant des étiquettes, des codes QR et des utilitaires simples",
          "Utilisateurs généraux cherchant des outils en ligne rapides et gratuits",
        ],
      },
      whyWeBuilt: {
        heading: "Pourquoi nous avons créé Apps24",
        body: "De nombreux outils en ligne sont soit surchargés de publicités, difficiles à utiliser, soit trop limités pour être vraiment utiles. Nous voulions créer une expérience plus propre centrée sur l'utilité, la rapidité et l'accessibilité. Apps24 est en expansion continue et nous prévoyons de continuer à ajouter des outils web pratiques qui résolvent de vrais problèmes.",
      },
      goal: {
        heading: "Notre objectif",
        body: "Notre objectif est de construire une bibliothèque d'outils en ligne utiles à laquelle les gens peuvent revenir chaque fois qu'ils ont besoin d'une solution rapide. Si vous avez des suggestions ou trouvez un problème, nous accueillons vos retours.",
      },
      content: [
        "Apps24 est un site d'outils en ligne multilingue conçu pour rendre les tâches numériques quotidiennes plus rapides et plus simples.",
        "Nous proposons des outils légers basés sur le navigateur pour la mise en forme de texte, la compression d'images, la validation JSON, et plus encore.",
        "Notre objectif est de construire une bibliothèque fiable d'outils en ligne utiles.",
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      content: [
        { section: "Introduction", body: "Chez Apps24, nous accordons la priorité à votre vie privée. Cette politique décrit comment nous traitons les données lorsque vous utilisez nos services." },
        { section: "Collecte de données", body: "La plupart des outils traitent les données localement dans votre navigateur. Certaines fonctionnalités peuvent demander des données limitées à des services tiers lorsque des résultats en direct sont nécessaires." },
        { section: "Fichiers journaux", body: "Comme d'autres sites, nous utilisons des fichiers journaux pour l'analyse du trafic et la maintenance. Cela inclut les adresses IP, les types de navigateurs et les horodatages, qui ne sont pas liés à des informations personnellement identifiables." },
        { section: "Stockage du navigateur", body: "Certains outils enregistrent les préférences localement sur votre appareil à l'aide du stockage du navigateur, comme localStorage." },
        { section: "Services tiers", body: "Des fonctionnalités comme la recherche d'adresse IP peuvent utiliser des fournisseurs externes pour afficher les détails du réseau et de la localisation." },
        { section: "Contact", body: "Si vous avez des questions sur nos pratiques de confidentialité, veuillez nous contacter." },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      content: [
        { section: "Acceptation des conditions", body: "En accédant à Apps24, vous acceptez d'être lié par ces conditions d'utilisation et toutes les lois et réglementations applicables." },
        { section: "Licence d'utilisation", body: "Les outils de ce site sont fournis pour un usage personnel et commercial. Vous ne pouvez pas modifier, décompiler ou redistribuer notre code sans permission explicite." },
        { section: "Avertissement", body: "Les ressources d'Apps24 sont fournies 'en l'état'. Nous ne faisons aucune garantie concernant l'exactitude ou la fiabilité des outils." },
        { section: "Limitations", body: "En aucun cas Apps24 ne pourra être tenu responsable des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser les outils du site." },
      ],
    },
    contact: {
      title: "Contacter Apps24",
      intro: "Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter.",
      welcomeItems: [
        "Erreurs ou bugs d'outils",
        "Problèmes de sortie incorrecte ou de mise en forme",
        "Suggestions de fonctionnalités",
        "Améliorations linguistiques ou de traduction",
        "Demandes commerciales",
        "Commentaires généraux sur le site",
      ],
      emailHeading: "Support par e-mail",
      email: "support@apps24.io",
      reportDescription: "Si vous signalez un problème, veuillez inclure autant de détails que possible :",
      reportItems: [
        "Le nom de l'outil",
        "L'URL de la page",
        "Le navigateur ou l'appareil utilisé",
        "Une courte description du problème",
        "Une capture d'écran si disponible",
      ],
      responseHeading: "Délai de réponse",
      responseBody: "Nous essayons de traiter les demandes aussi rapidement que possible. Veuillez prévoir un délai raisonnable pour une réponse, notamment pour les demandes de fonctionnalités ou les questions non urgentes.",
      suggestionsHeading: "Suggestions et commentaires",
      suggestionsBody: "Nous améliorons continuellement Apps24 et ajoutons de nouveaux outils. Si vous souhaitez voir un outil sur le site ou avez des idées pour améliorer la convivialité, nous serions ravis de vous entendre.",
      businessHeading: "Demandes commerciales et partenariats",
      businessBody: "Pour les communications liées aux affaires, les discussions de partenariat ou les propositions relatives au site, veuillez nous contacter par e-mail avec un objet clair.",
      beforeContactHeading: "Avant de nous contacter",
      beforeContactItems: ["À propos de nous", "Politique de confidentialité", "Conditions d'utilisation"],
      closing: "Merci de visiter Apps24.",
      content: "Si vous avez des questions ou suggestions, contactez-nous à support@apps24.io.",
    },
  },

  ja: {
    about: {
      title: "Apps24について",
      intro: "Apps24は、日常のデジタル作業をより速く、シンプルに、どんなデバイスからでもアクセスしやすくするために作られた多言語オンラインツールサイトです。ダウンロードやサインアップ、複雑なワークフローなしに実用的なツールを必要とする方々のために作りました。学生、マーケター、開発者、デザイナー、ビジネスオーナー、一般インターネットユーザーを問わず、小さくても重要なタスクを素早く解決できるようお手伝いするのが私たちの目標です。",
      whatWeOffer: {
        heading: "提供するツール",
        items: [
          "テキストの書式変換",
          "画像の圧縮と最適化",
          "JSONの書式化と検証",
          "パスワード生成",
          "QRコードとバーコードの生成",
          "カラーとエンコーディングのユーティリティ",
        ],
      },
      approach: {
        heading: "私たちのアプローチ",
        items: [
          { title: "シンプルで高速", body: "クリーンなインターフェースと最小限のステップで素早く動作するよう設計されています。" },
          { title: "不要な摩擦なし", body: "可能な限り、アカウントを作成せずにページを開いてすぐに使い、結果を得られるようにしています。" },
          { title: "多言語対応", body: "Apps24は多言語プラットフォームとして設計されており、より多くのユーザーが好みの言語で実用的なツールにアクセスできます。" },
          { title: "プライバシーに配慮した設計", body: "多くのツールは可能な限りブラウザ内で直接データを処理するよう設計されており、不要なデータ転送なしにタスクを完了できます。" },
        ],
      },
      whoItsFor: {
        heading: "Apps24の対象ユーザー",
        items: [
          "テキスト、ファイル、書式を扱う学生",
          "JSON、エンコーディング、技術データを確認する開発者",
          "キャンペーンリンクの作成やコンテンツ準備を行うマーケター",
          "色、アセット、ビジュアル素材を扱うデザイナー",
          "ラベル、QRコード、シンプルなユーティリティを作成する中小企業",
          "高速で無料のオンラインツールを探している一般ユーザー",
        ],
      },
      whyWeBuilt: {
        heading: "Apps24を作った理由",
        body: "多くのオンラインツールは広告まみれで使いにくく、あるいは本当に役立つには制限が多すぎます。私たちは実用性、速度、アクセシビリティを中心としたよりクリーンな体験を作りたいと考えました。Apps24は継続的に拡張しており、実際の問題をシンプルに解決する実用的なウェブツールを追加し続ける予定です。",
      },
      goal: {
        heading: "私たちの目標",
        body: "クイックな解決策が必要なときにいつでも戻ってこられる信頼できるオンラインツールライブラリを構築することが目標です。新しいツールの提案やサイトの問題を発見された場合は、ぜひフィードバックをお寄せください。",
      },
      content: [
        "Apps24は、日常のデジタル作業をより速く、シンプルに、どんなデバイスからでもアクセスしやすくするために作られた多言語オンラインツールサイトです。",
        "テキスト変換、画像圧縮、JSON検証、パスワード生成、QRコードなど多様なブラウザベースツールを提供します。",
        "クイックな解決策が必要なときにいつでも戻ってこられる信頼できるオンラインツールライブラリを構築することが目標です。",
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      content: [
        { section: "はじめに", body: "Apps24はあなたのプライバシーを優先しています。このポリシーはサービス利用時のデータ取り扱い方法を説明します。" },
        { section: "データ収集", body: "ほとんどのツールはブラウザ内でローカル処理されますが、一部の機能ではライブ結果を表示するために外部サービスへ限定的なデータを送信する場合があります。" },
        { section: "ログファイル", body: "トラフィック分析とメンテナンスのためにログファイルを使用します。IPアドレス、ブラウザの種類、タイムスタンプが含まれますが、個人識別情報とは連携しません。" },
        { section: "ブラウザ保存", body: "一部のツールは、localStorage などのブラウザ保存領域を使って設定を端末に保存します。" },
        { section: "第三者サービス", body: "IP検索のような機能では、ネットワーク情報や位置情報を表示するために外部プロバイダーを利用する場合があります。" },
        { section: "お問い合わせ", body: "プライバシー慣行についてご質問があれば、お気軽にお問い合わせください。" },
      ],
    },
    terms: {
      title: "利用規約",
      content: [
        { section: "規約への同意", body: "Apps24にアクセスすることで、本利用規約および適用されるすべての法律・規制に拘束されることに同意します。" },
        { section: "使用ライセンス", body: "本サイトのツールは個人および商業目的で提供されます。明示的な許可なしにコードを変更、リバースエンジニアリング、再配布することはできません。" },
        { section: "免責事項", body: "Apps24の素材は「現状のまま」提供されます。ツールの正確性や信頼性について保証しません。" },
        { section: "制限事項", body: "Apps24はサイトのツールの使用または使用不能から生じるいかなる損害についても責任を負いません。" },
      ],
    },
    contact: {
      title: "Apps24へのお問い合わせ",
      intro: "ご質問、フィードバック、ご提案がございましたら、お気軽にお問い合わせください。",
      welcomeItems: [
        "ツールのエラーやバグ",
        "誤った出力や書式の問題",
        "機能の提案",
        "言語や翻訳の改善",
        "ビジネスに関するお問い合わせ",
        "ウェブサイトに関する一般的なフィードバック",
      ],
      emailHeading: "メールサポート",
      email: "support@apps24.io",
      reportDescription: "問題を報告される場合は、できるだけ詳しい情報をお知らせください：",
      reportItems: [
        "ツール名",
        "ページURL",
        "使用したブラウザまたはデバイス",
        "問題の簡単な説明",
        "可能であればスクリーンショット",
      ],
      responseHeading: "回答時間",
      responseBody: "お問い合わせはできるだけ早く確認いたします。機能リクエストや緊急でないご質問については、適切な回答時間をご了承ください。",
      suggestionsHeading: "ご提案とフィードバック",
      suggestionsBody: "Apps24は継続的に改善し、新しいツールを追加しています。サイトに追加してほしいツールや使いやすさの改善アイデアがあれば、ぜひお聞かせください。",
      businessHeading: "ビジネス・パートナーシップのお問い合わせ",
      businessBody: "ビジネス関連の連絡、パートナーシップの議論、またはウェブサイト関連の提案については、明確な件名を付けてメールでお問い合わせください。",
      beforeContactHeading: "お問い合わせ前に",
      beforeContactItems: ["概要", "プライバシーポリシー", "利用規約"],
      closing: "Apps24をご利用いただきありがとうございます。",
      content: "ご質問やご提案はsupport@apps24.ioまでお問い合わせください。",
    },
  },

  zh: {
    about: {
      title: "关于 Apps24",
      intro: "Apps24 是一个多语言在线工具网站，旨在让任何设备上的日常数字任务变得更快、更简单、更易访问。我们为那些需要实用工具而不需要下载、注册或复杂工作流程的人创建了 Apps24。无论您是学生、营销人员、开发者、设计师、企业主还是普通互联网用户，我们的目标是帮助您快速解决小但重要的任务。",
      whatWeOffer: {
        heading: "我们提供的工具",
        items: [
          "文本格式化与转换",
          "图像压缩与优化",
          "JSON 格式化与验证",
          "密码生成",
          "QR 码与条形码生成",
          "颜色与编码工具",
        ],
      },
      approach: {
        heading: "我们的理念",
        items: [
          { title: "简单快速", body: "我们的工具设计为使用简洁的界面和最少的步骤快速运行。" },
          { title: "无不必要障碍", body: "尽可能让用户打开页面即可使用工具并获得结果，无需创建账户。" },
          { title: "多语言实用", body: "Apps24 被设计为多语言平台，让更多用户能够以其首选语言访问实用工具。" },
          { title: "注重隐私的设计", body: "我们许多工具尽可能在浏览器中直接处理数据，帮助用户完成任务而无需不必要的数据传输。" },
        ],
      },
      whoItsFor: {
        heading: "Apps24 适合哪些用户",
        items: [
          "处理文本、文件和格式的学生",
          "检查 JSON、编码和技术数据的开发者",
          "创建营销链接和准备内容的营销人员",
          "处理颜色、素材和视觉材料的设计师",
          "创建标签、QR 码和简单工具的小型企业",
          "寻找快速免费在线工具的普通用户",
        ],
      },
      whyWeBuilt: {
        heading: "我们为什么创建 Apps24",
        body: "许多在线工具要么充斥广告、难以使用，要么功能太有限而无法真正有帮助。我们希望围绕实用性、速度和可访问性构建更简洁的体验。Apps24 在不断扩展，我们计划继续添加以简单方式解决实际问题的实用网络工具。",
      },
      goal: {
        heading: "我们的目标",
        body: "我们的目标是建立一个值得信赖的实用在线工具库，让人们在需要快速解决方案时随时可以回来使用。如果您有新工具的建议或发现网站问题，我们欢迎您的反馈。",
      },
      content: [
        "Apps24 是一个多语言在线工具网站，旨在让日常数字任务变得更快、更简单。",
        "我们提供轻量级的浏览器工具，用于文本格式化、图像压缩、JSON 验证、密码生成、QR 码等。",
        "我们的目标是建立一个值得信赖的实用在线工具库。",
      ],
    },
    privacy: {
      title: "隐私政策",
      content: [
        { section: "简介", body: "Apps24 优先保护您的隐私。本政策概述了我们在您使用我们的服务时如何处理数据。" },
        { section: "数据收集", body: "大多数工具都会在您的浏览器中本地处理数据，但某些功能在需要实时结果时可能会向第三方服务请求有限数据。" },
        { section: "日志文件", body: "与其他网站一样，我们使用日志文件进行流量分析和维护，包括 IP 地址、浏览器类型和时间戳，这些信息不与个人身份信息关联。" },
        { section: "浏览器存储", body: "某些工具会使用 localStorage 等浏览器存储，在您的设备上本地保存偏好设置。" },
        { section: "第三方服务", body: "像 IP 查询这样的功能可能会使用外部提供商来显示网络和位置信息。" },
        { section: "联系", body: "如果您对我们的隐私惯例有疑问，请联系我们。" },
      ],
    },
    terms: {
      title: "服务条款",
      content: [
        { section: "条款接受", body: "通过访问 Apps24，您同意受本服务条款及所有适用法律法规的约束。" },
        { section: "使用许可", body: "本网站的工具供个人和商业使用提供。未经明确许可，您不得修改、逆向工程或重新分发我们的代码。" },
        { section: "免责声明", body: "Apps24 的资料按'原样'提供。我们不对工具的准确性或可靠性作任何保证。" },
        { section: "限制", body: "Apps24 对因使用或无法使用本网站工具而产生的任何损害概不负责。" },
      ],
    },
    contact: {
      title: "联系 Apps24",
      intro: "如果您有问题、反馈或建议，请随时联系我们。",
      welcomeItems: [
        "工具错误或漏洞",
        "输出错误或格式问题",
        "功能建议",
        "语言或翻译改进",
        "商业咨询",
        "关于网站的一般反馈",
      ],
      emailHeading: "电子邮件支持",
      email: "support@apps24.io",
      reportDescription: "如果您要反映问题，请尽可能提供详细信息：",
      reportItems: [
        "工具名称",
        "页面 URL",
        "您使用的浏览器或设备",
        "问题的简短描述",
        "如有可能，请附截图",
      ],
      responseHeading: "回复时间",
      responseBody: "我们尽量尽快审查查询。对于功能请求或非紧急问题，请允许合理的回复时间。",
      suggestionsHeading: "建议与反馈",
      suggestionsBody: "我们正在不断改进 Apps24 并添加新工具。如果您希望在网站上看到某个工具，或者有改善可用性的想法，我们很乐意听取。",
      businessHeading: "商业与合作伙伴咨询",
      businessBody: "对于商业相关沟通、合作伙伴讨论或网站相关提案，请通过电子邮件联系我们，并附上清晰的主题行，以便我们更有效地审查您的请求。",
      beforeContactHeading: "联系我们之前",
      beforeContactItems: ["关于我们", "隐私政策", "服务条款"],
      closing: "感谢您访问 Apps24。",
      content: "如有问题或建议，请通过 support@apps24.io 联系我们。",
    },
  },

  "zh-TW": {
    about: {
      title: "關於 Apps24",
      intro: "Apps24 是一個多語言線上工具網站，旨在讓任何裝置上的日常數位任務變得更快、更簡單、更易於存取。我們為那些需要實用工具而無需下載、註冊或複雜工作流程的人創建了 Apps24。無論您是學生、行銷人員、開發者、設計師、企業主還是一般網路使用者，我們的目標是幫助您快速解決重要的任務。",
      whatWeOffer: {
        heading: "我們提供的工具",
        items: [
          "文字格式化與轉換",
          "圖片壓縮與最佳化",
          "JSON 格式化與驗證",
          "密碼產生",
          "QR 碼與條碼產生",
          "顏色與編碼工具",
        ],
      },
      approach: {
        heading: "我們的理念",
        items: [
          { title: "簡單快速", body: "我們的工具設計為使用簡潔的介面和最少的步驟快速運行。" },
          { title: "無不必要障礙", body: "盡可能讓使用者打開頁面即可使用工具並獲得結果，無需建立帳戶。" },
          { title: "多語言實用性", body: "Apps24 被設計為多語言平台，讓更多使用者能以其偏好的語言存取實用工具。" },
          { title: "注重隱私的設計", body: "我們許多工具盡可能在瀏覽器中直接處理資料，幫助使用者完成任務而無需不必要的資料傳輸。" },
        ],
      },
      whoItsFor: {
        heading: "Apps24 適合哪些使用者",
        items: [
          "處理文字、檔案和格式的學生",
          "檢查 JSON、編碼和技術資料的開發者",
          "建立行銷連結和準備內容的行銷人員",
          "處理顏色、素材和視覺材料的設計師",
          "建立標籤、QR 碼和簡單工具的小型企業",
          "尋找快速免費線上工具的一般使用者",
        ],
      },
      whyWeBuilt: {
        heading: "我們為什麼創建 Apps24",
        body: "許多線上工具要麼充斥廣告、難以使用，要麼功能太有限而無法真正有幫助。我們希望圍繞實用性、速度和可存取性打造更簡潔的體驗。Apps24 在不斷擴展，我們計劃繼續新增以簡單方式解決實際問題的實用網路工具。",
      },
      goal: {
        heading: "我們的目標",
        body: "我們的目標是建立一個值得信賴的實用線上工具庫，讓人們在需要快速解決方案時隨時可以回來使用。如果您有新工具的建議或發現網站問題，我們歡迎您的回饋。",
      },
      content: [
        "Apps24 是一個多語言線上工具網站，旨在讓日常數位任務變得更快、更簡單。",
        "我們提供輕量級的瀏覽器工具，用於文字格式化、圖片壓縮、JSON 驗證、密碼產生、QR 碼等。",
        "我們的目標是建立一個值得信賴的實用線上工具庫。",
      ],
    },
    privacy: {
      title: "隱私政策",
      content: [
        { section: "簡介", body: "Apps24 優先保護您的隱私。本政策概述了我們在您使用我們的服務時如何處理資料。" },
        { section: "資料收集", body: "大多數工具都會在您的瀏覽器中本機處理資料，但某些功能在需要即時結果時可能會向第三方服務請求少量資料。" },
        { section: "日誌檔案", body: "與其他網站一樣，我們使用日誌檔案進行流量分析和維護，包括 IP 位址、瀏覽器類型和時間戳，這些資訊不與個人身份資訊關聯。" },
        { section: "瀏覽器儲存", body: "某些工具會使用 localStorage 等瀏覽器儲存，在您的裝置上本地保存偏好設定。" },
        { section: "第三方服務", body: "像 IP 查詢這類功能可能會使用外部供應商來顯示網路與位置資訊。" },
        { section: "聯絡", body: "如果您對我們的隱私慣例有疑問，請聯絡我們。" },
      ],
    },
    terms: {
      title: "服務條款",
      content: [
        { section: "條款接受", body: "透過存取 Apps24，您同意受本服務條款及所有適用法律法規的約束。" },
        { section: "使用授權", body: "本網站的工具供個人和商業使用提供。未經明確許可，您不得修改、逆向工程或重新散布我們的程式碼。" },
        { section: "免責聲明", body: "Apps24 的資料按「原樣」提供。我們不對工具的準確性或可靠性作任何保證。" },
        { section: "限制", body: "Apps24 對因使用或無法使用本網站工具而產生的任何損害概不負責。" },
      ],
    },
    contact: {
      title: "聯絡 Apps24",
      intro: "如果您有問題、回饋或建議，請隨時聯絡我們。",
      welcomeItems: [
        "工具錯誤或漏洞",
        "輸出錯誤或格式問題",
        "功能建議",
        "語言或翻譯改進",
        "商業諮詢",
        "關於網站的一般回饋",
      ],
      emailHeading: "電子郵件支援",
      email: "support@apps24.io",
      reportDescription: "如果您要回報問題，請盡可能提供詳細資訊：",
      reportItems: [
        "工具名稱",
        "頁面 URL",
        "您使用的瀏覽器或裝置",
        "問題的簡短描述",
        "如有可能，請附截圖",
      ],
      responseHeading: "回覆時間",
      responseBody: "我們盡量盡快審查查詢。對於功能請求或非緊急問題，請允許合理的回覆時間。",
      suggestionsHeading: "建議與回饋",
      suggestionsBody: "我們正在不斷改進 Apps24 並新增新工具。如果您希望在網站上看到某個工具，或者有改善可用性的想法，我們很樂意聽取。",
      businessHeading: "商業與合作夥伴諮詢",
      businessBody: "對於商業相關溝通、合作夥伴討論或網站相關提案，請透過電子郵件聯絡我們，並附上清晰的主旨，以便我們更有效地審查您的請求。",
      beforeContactHeading: "聯絡我們之前",
      beforeContactItems: ["關於我們", "隱私政策", "服務條款"],
      closing: "感謝您訪問 Apps24。",
      content: "如有問題或建議，請透過 support@apps24.io 聯絡我們。",
    },
  },

  pt: {
    about: {
      title: "Sobre o Apps24",
      intro: "O Apps24 é um site de ferramentas online multilíngue desenvolvido para tornar as tarefas digitais do dia a dia mais rápidas, simples e acessíveis de qualquer dispositivo. Criamos o Apps24 para pessoas que precisam de ferramentas práticas sem downloads, cadastros ou fluxos de trabalho complicados. Seja você estudante, profissional de marketing, desenvolvedor, designer, empresário ou usuário comum da internet, nosso objetivo é ajudá-lo a resolver tarefas pequenas, mas importantes, de forma rápida.",
      whatWeOffer: {
        heading: "O que oferecemos",
        items: [
          "Formatação e conversão de texto",
          "Compressão e otimização de imagens",
          "Formatação e validação de JSON",
          "Geração de senhas",
          "Geração de códigos QR e de barras",
          "Utilitários de cores e codificação",
        ],
      },
      approach: {
        heading: "Nossa abordagem",
        items: [
          { title: "Simples e rápido", body: "Nossas ferramentas são projetadas para funcionar rapidamente com uma interface limpa e etapas mínimas." },
          { title: "Sem fricção desnecessária", body: "Sempre que possível, os usuários devem poder abrir uma página, usar a ferramenta imediatamente e obter resultados sem criar uma conta." },
          { title: "Útil em vários idiomas", body: "O Apps24 é projetado como uma plataforma multilíngue para que mais usuários possam acessar ferramentas práticas em seu idioma preferido." },
          { title: "Privacidade em primeiro lugar", body: "Muitas de nossas ferramentas são projetadas para processar dados diretamente no navegador sempre que possível, ajudando os usuários a concluir tarefas sem transferência de dados desnecessária." },
        ],
      },
      whoItsFor: {
        heading: "Para quem é o Apps24",
        items: [
          "Estudantes que trabalham com texto, arquivos e formatação",
          "Desenvolvedores verificando JSON, codificação e dados técnicos",
          "Profissionais de marketing criando links de campanha e preparando conteúdo",
          "Designers lidando com cores, ativos e materiais visuais",
          "Pequenas empresas criando etiquetas, códigos QR e utilitários simples",
          "Usuários gerais em busca de ferramentas online rápidas e gratuitas",
        ],
      },
      whyWeBuilt: {
        heading: "Por que criamos o Apps24",
        body: "Muitas ferramentas online estão sobrecarregadas de anúncios, são difíceis de usar ou limitadas demais para serem genuinamente úteis. Queríamos criar uma experiência mais limpa centrada em utilidade, velocidade e acessibilidade. O Apps24 está em expansão contínua e planejamos continuar adicionando ferramentas web práticas que resolvam problemas reais de forma simples.",
      },
      goal: {
        heading: "Nosso objetivo",
        body: "Nosso objetivo é construir uma biblioteca confiável de ferramentas online úteis para que as pessoas possam voltar sempre que precisarem de uma solução rápida. Se você tiver sugestões para novas ferramentas ou encontrar um problema no site, agradecemos seu feedback.",
      },
      content: [
        "O Apps24 é um site de ferramentas online multilíngue desenvolvido para tornar as tarefas digitais do dia a dia mais rápidas e simples.",
        "Oferecemos ferramentas leves baseadas em navegador para formatação de texto, compressão de imagens, validação de JSON, geração de senhas, códigos QR e muito mais.",
        "Nosso objetivo é construir uma biblioteca confiável de ferramentas online úteis.",
      ],
    },
    privacy: {
      title: "Política de Privacidade",
      content: [
        { section: "Introdução", body: "No Apps24, priorizamos sua privacidade. Esta política descreve como tratamos os dados quando você usa nossos serviços." },
        { section: "Coleta de dados", body: "A maioria das ferramentas processa dados localmente no seu navegador. Alguns recursos podem solicitar dados limitados a serviços de terceiros quando resultados em tempo real forem necessários." },
        { section: "Arquivos de log", body: "Como outros sites, usamos arquivos de log para análise de tráfego e manutenção. Isso inclui endereços IP, tipos de navegadores e carimbos de data/hora, que não estão vinculados a informações pessoalmente identificáveis." },
        { section: "Armazenamento do navegador", body: "Algumas ferramentas salvam preferências localmente no seu dispositivo usando armazenamento do navegador, como localStorage." },
        { section: "Serviços de terceiros", body: "Recursos como a consulta de IP podem usar provedores externos para exibir detalhes de rede e localização." },
        { section: "Contato", body: "Se você tiver perguntas sobre nossas práticas de privacidade, entre em contato conosco." },
      ],
    },
    terms: {
      title: "Termos de Serviço",
      content: [
        { section: "Aceitação dos termos", body: "Ao acessar o Apps24, você concorda em se sujeitar a estes termos de serviço e a todas as leis e regulamentos aplicáveis." },
        { section: "Licença de uso", body: "As ferramentas deste site são fornecidas para uso pessoal e comercial. Você não pode modificar, fazer engenharia reversa ou redistribuir nosso código sem permissão explícita." },
        { section: "Isenção de responsabilidade", body: "Os materiais no Apps24 são fornecidos 'como estão'. Não oferecemos garantias sobre a precisão ou confiabilidade das ferramentas." },
        { section: "Limitações", body: "Em nenhum caso o Apps24 será responsável por quaisquer danos decorrentes do uso ou da impossibilidade de usar as ferramentas do site." },
      ],
    },
    contact: {
      title: "Contato Apps24",
      intro: "Se você tiver perguntas, feedback ou sugestões, sinta-se à vontade para nos contatar.",
      welcomeItems: [
        "Erros ou bugs nas ferramentas",
        "Saída incorreta ou problemas de formatação",
        "Sugestões de recursos",
        "Melhorias de idioma ou tradução",
        "Consultas comerciais",
        "Feedback geral sobre o site",
      ],
      emailHeading: "Suporte por e-mail",
      email: "support@apps24.io",
      reportDescription: "Se você está reportando um problema, inclua o máximo de detalhes possíveis:",
      reportItems: [
        "O nome da ferramenta",
        "A URL da página",
        "O navegador ou dispositivo que você usou",
        "Uma breve descrição do problema",
        "Uma captura de tela, se disponível",
      ],
      responseHeading: "Tempo de resposta",
      responseBody: "Procuramos revisar as consultas o mais rápido possível. Por favor, aguarde um tempo razoável para uma resposta, especialmente para solicitações de recursos ou perguntas não urgentes.",
      suggestionsHeading: "Sugestões e feedback",
      suggestionsBody: "Estamos continuamente melhorando o Apps24 e adicionando novas ferramentas. Se houver uma ferramenta que você gostaria de ver no site, ou se você tiver ideias para melhorar a usabilidade, ficamos felizes em ouvi-lo.",
      businessHeading: "Consultas comerciais e de parceria",
      businessBody: "Para comunicação relacionada a negócios, discussões de parceria ou propostas relacionadas ao site, entre em contato conosco por e-mail com um assunto claro para que possamos revisar sua solicitação com mais eficiência.",
      beforeContactHeading: "Antes de nos contatar",
      beforeContactItems: ["Sobre nós", "Política de Privacidade", "Termos de Serviço"],
      closing: "Obrigado por visitar o Apps24.",
      content: "Se tiver perguntas ou sugestões, entre em contato conosco em support@apps24.io.",
    },
  },

  es: {
    about: {
      title: "Acerca de Apps24",
      intro: "Apps24 es un sitio web de herramientas en línea multilingüe diseñado para hacer que las tareas digitales cotidianas sean más rápidas, simples y accesibles desde cualquier dispositivo. Creamos Apps24 para personas que necesitan herramientas prácticas sin descargas, registros ni flujos de trabajo complicados. Ya sea que sea estudiante, mercadólogo, desarrollador, diseñador, empresario o usuario de internet, nuestro objetivo es ayudarle a resolver tareas pequeñas pero importantes rápidamente.",
      whatWeOffer: {
        heading: "Lo que ofrecemos",
        items: [
          "Formato y conversión de texto",
          "Compresión y optimización de imágenes",
          "Formato y validación de JSON",
          "Generación de contraseñas",
          "Generación de códigos QR y de barras",
          "Utilidades de color y codificación",
        ],
      },
      approach: {
        heading: "Nuestro enfoque",
        items: [
          { title: "Simple y rápido", body: "Nuestras herramientas están diseñadas para funcionar rápidamente con una interfaz limpia y pasos mínimos." },
          { title: "Sin fricción innecesaria", body: "En la medida de lo posible, los usuarios deben poder abrir una página, usar la herramienta inmediatamente y obtener resultados sin crear una cuenta." },
          { title: "Útil en varios idiomas", body: "Apps24 está diseñado como una plataforma multilingüe para que más usuarios puedan acceder a herramientas prácticas en su idioma preferido." },
          { title: "Diseño consciente de la privacidad", body: "Muchas de nuestras herramientas están diseñadas para procesar datos directamente en el navegador siempre que sea posible, ayudando a los usuarios a completar tareas sin transferencia de datos innecesaria." },
        ],
      },
      whoItsFor: {
        heading: "Para quién es Apps24",
        items: [
          "Estudiantes que trabajan con texto, archivos y formato",
          "Desarrolladores que verifican JSON, codificación y datos técnicos",
          "Mercadólogos que crean enlaces de campaña y preparan contenido",
          "Diseñadores que manejan colores, activos y materiales visuales",
          "Pequeñas empresas que crean etiquetas, códigos QR y utilidades simples",
          "Usuarios generales que buscan herramientas en línea rápidas y gratuitas",
        ],
      },
      whyWeBuilt: {
        heading: "Por qué construimos Apps24",
        body: "Muchas herramientas en línea están sobrecargadas de anuncios, son difíciles de usar o demasiado limitadas para ser genuinamente útiles. Queríamos crear una experiencia más limpia centrada en la utilidad, la velocidad y la accesibilidad. Apps24 se expande continuamente y planeamos seguir agregando herramientas web prácticas que resuelvan problemas reales de manera simple.",
      },
      goal: {
        heading: "Nuestro objetivo",
        body: "Nuestro objetivo es construir una biblioteca confiable de herramientas útiles en línea a la que las personas puedan volver cada vez que necesiten una solución rápida. Si tiene sugerencias para nuevas herramientas o encuentra un problema en el sitio, agradecemos sus comentarios.",
      },
      content: [
        "Apps24 es un sitio web de herramientas en línea multilingüe diseñado para hacer las tareas digitales cotidianas más rápidas y simples.",
        "Ofrecemos herramientas ligeras basadas en navegador para formato de texto, compresión de imágenes, validación de JSON, generación de contraseñas, códigos QR y más.",
        "Nuestro objetivo es construir una biblioteca confiable de herramientas útiles en línea.",
      ],
    },
    privacy: {
      title: "Política de Privacidad",
      content: [
        { section: "Introducción", body: "En Apps24, priorizamos su privacidad. Esta política describe cómo manejamos los datos cuando usa nuestros servicios." },
        { section: "Recopilación de datos", body: "La mayoría de las herramientas procesa los datos localmente en su navegador. Algunas funciones pueden solicitar datos limitados a servicios de terceros cuando se necesitan resultados en vivo." },
        { section: "Archivos de registro", body: "Como otros sitios web, usamos archivos de registro para análisis de tráfico y mantenimiento. Esto incluye direcciones IP, tipos de navegadores y marcas de tiempo, que no están vinculadas a información de identificación personal." },
        { section: "Almacenamiento del navegador", body: "Algunas herramientas guardan preferencias localmente en su dispositivo usando el almacenamiento del navegador, como localStorage." },
        { section: "Servicios de terceros", body: "Funciones como la búsqueda de IP pueden usar proveedores externos para mostrar detalles de red y ubicación." },
        { section: "Contacto", body: "Si tiene preguntas sobre nuestras prácticas de privacidad, contáctenos." },
      ],
    },
    terms: {
      title: "Términos de Servicio",
      content: [
        { section: "Aceptación de términos", body: "Al acceder a Apps24, acepta regirse por estos términos de servicio y todas las leyes y regulaciones aplicables." },
        { section: "Licencia de uso", body: "Las herramientas de este sitio se proporcionan para uso personal y comercial. No puede modificar, aplicar ingeniería inversa ni redistribuir nuestro código sin permiso explícito." },
        { section: "Aviso legal", body: "Los materiales en Apps24 se proporcionan 'tal cual'. No ofrecemos garantías sobre la precisión o fiabilidad de las herramientas." },
        { section: "Limitaciones", body: "En ningún caso Apps24 será responsable de daños que surjan por el uso o la imposibilidad de usar las herramientas del sitio." },
      ],
    },
    contact: {
      title: "Contactar Apps24",
      intro: "Si tiene preguntas, comentarios o sugerencias, no dude en contactarnos.",
      welcomeItems: [
        "Errores o fallos en las herramientas",
        "Resultados incorrectos o problemas de formato",
        "Sugerencias de funciones",
        "Mejoras de idioma o traducción",
        "Consultas comerciales",
        "Comentarios generales sobre el sitio web",
      ],
      emailHeading: "Soporte por correo electrónico",
      email: "support@apps24.io",
      reportDescription: "Si está reportando un problema, incluya la mayor cantidad de detalles posible:",
      reportItems: [
        "El nombre de la herramienta",
        "La URL de la página",
        "El navegador o dispositivo que utilizó",
        "Una breve descripción del problema",
        "Una captura de pantalla si está disponible",
      ],
      responseHeading: "Tiempo de respuesta",
      responseBody: "Intentamos revisar las consultas lo más rápido posible. Por favor, permita un tiempo de respuesta razonable, especialmente para solicitudes de funciones o preguntas no urgentes.",
      suggestionsHeading: "Sugerencias y comentarios",
      suggestionsBody: "Estamos mejorando continuamente Apps24 y agregando nuevas herramientas. Si hay una herramienta que le gustaría ver en el sitio, o si tiene ideas para mejorar la usabilidad, nos complacería escucharle.",
      businessHeading: "Consultas comerciales y de asociación",
      businessBody: "Para comunicaciones relacionadas con negocios, discusiones de asociación o propuestas relacionadas con el sitio web, contáctenos por correo electrónico con una línea de asunto clara para que podamos revisar su solicitud de manera más eficiente.",
      beforeContactHeading: "Antes de contactarnos",
      beforeContactItems: ["Sobre nosotros", "Política de Privacidad", "Términos de Servicio"],
      closing: "Gracias por visitar Apps24.",
      content: "Si tiene preguntas o sugerencias, contáctenos en support@apps24.io.",
    },
  },

  de: {
    about: {
      title: "Über Apps24",
      intro: "Apps24 ist eine mehrsprachige Online-Tools-Website, die entwickelt wurde, um alltägliche digitale Aufgaben von jedem Gerät aus schneller, einfacher und zugänglicher zu machen. Wir haben Apps24 für Menschen erstellt, die praktische Tools ohne Downloads, Registrierungen oder komplizierte Workflows benötigen. Ob Sie Student, Vermarkter, Entwickler, Designer, Unternehmer oder normaler Internetnutzer sind – unser Ziel ist es, Ihnen zu helfen, kleine, aber wichtige Aufgaben schnell zu erledigen.",
      whatWeOffer: {
        heading: "Was wir anbieten",
        items: [
          "Textformatierung und -konvertierung",
          "Bildkomprimierung und -optimierung",
          "JSON-Formatierung und -Validierung",
          "Passwortgenerierung",
          "QR-Code- und Barcode-Generierung",
          "Farb- und Kodierungsdienstprogramme",
        ],
      },
      approach: {
        heading: "Unser Ansatz",
        items: [
          { title: "Einfach und schnell", body: "Unsere Tools sind so konzipiert, dass sie mit einer übersichtlichen Oberfläche und minimalen Schritten schnell funktionieren." },
          { title: "Keine unnötige Reibung", body: "Wo möglich, sollten Benutzer eine Seite öffnen, das Tool sofort nutzen und Ergebnisse erhalten können, ohne ein Konto erstellen zu müssen." },
          { title: "Nützlich in mehreren Sprachen", body: "Apps24 ist als mehrsprachige Plattform konzipiert, damit mehr Benutzer auf praktische Tools in ihrer bevorzugten Sprache zugreifen können." },
          { title: "Datenschutzbewusstes Design", body: "Viele unserer Tools sind darauf ausgelegt, Daten wann immer möglich direkt im Browser zu verarbeiten, damit Benutzer Aufgaben ohne unnötige Datenübertragung erledigen können." },
        ],
      },
      whoItsFor: {
        heading: "Für wen ist Apps24",
        items: [
          "Studenten, die mit Text, Dateien und Formatierung arbeiten",
          "Entwickler, die JSON, Codierung und technische Daten überprüfen",
          "Vermarkter, die Kampagnenlinks erstellen und Inhalte vorbereiten",
          "Designer, die Farben, Assets und visuelle Materialien verwalten",
          "Kleine Unternehmen, die Etiketten, QR-Codes und einfache Dienstprogramme erstellen",
          "Allgemeine Benutzer, die schnelle, kostenlose Online-Tools suchen",
        ],
      },
      whyWeBuilt: {
        heading: "Warum wir Apps24 gebaut haben",
        body: "Viele Online-Tools sind entweder mit Werbung überladen, schwer zu bedienen oder zu begrenzt, um wirklich hilfreich zu sein. Wir wollten eine sauberere Erfahrung schaffen, die auf Nützlichkeit, Geschwindigkeit und Zugänglichkeit ausgerichtet ist. Apps24 expandiert kontinuierlich und wir planen, weiterhin praktische Web-Tools hinzuzufügen, die echte Probleme auf einfache Weise lösen.",
      },
      goal: {
        heading: "Unser Ziel",
        body: "Unser Ziel ist es, eine vertrauenswürdige Bibliothek nützlicher Online-Tools aufzubauen, zu der die Menschen zurückkehren können, wann immer sie eine schnelle Lösung benötigen. Wenn Sie Vorschläge für neue Tools haben oder ein Problem auf der Website finden, freuen wir uns über Ihr Feedback.",
      },
      content: [
        "Apps24 ist eine mehrsprachige Online-Tools-Website, die entwickelt wurde, um alltägliche digitale Aufgaben schneller und einfacher zu machen.",
        "Wir bieten leichtgewichtige browserbasierte Tools für Textformatierung, Bildkomprimierung, JSON-Validierung, Passwortgenerierung, QR-Codes und mehr.",
        "Unser Ziel ist es, eine vertrauenswürdige Bibliothek nützlicher Online-Tools aufzubauen.",
      ],
    },
    privacy: {
      title: "Datenschutzrichtlinie",
      content: [
        { section: "Einführung", body: "Bei Apps24 steht Ihre Privatsphäre an erster Stelle. Diese Richtlinie beschreibt, wie wir Daten behandeln, wenn Sie unsere Dienste nutzen." },
        { section: "Datenerfassung", body: "Die meisten Tools verarbeiten Daten lokal in Ihrem Browser. Einige Funktionen können bei Bedarf für Live-Ergebnisse begrenzte Daten von Drittanbietern anfordern." },
        { section: "Log-Dateien", body: "Wie andere Websites verwenden wir Log-Dateien für Verkehrsanalyse und Wartung. Dies umfasst IP-Adressen, Browsertypen und Zeitstempel, die nicht mit persönlich identifizierbaren Informationen verknüpft sind." },
        { section: "Browser-Speicher", body: "Einige Tools speichern Einstellungen lokal auf Ihrem Gerät mithilfe von Browser-Speicher wie localStorage." },
        { section: "Drittanbieter-Dienste", body: "Funktionen wie die IP-Suche können externe Anbieter verwenden, um Netzwerk- und Standortdetails anzuzeigen." },
        { section: "Kontakt", body: "Wenn Sie Fragen zu unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte." },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      content: [
        { section: "Annahme der Bedingungen", body: "Durch den Zugriff auf Apps24 stimmen Sie zu, an diese Nutzungsbedingungen und alle geltenden Gesetze und Vorschriften gebunden zu sein." },
        { section: "Nutzungslizenz", body: "Die Tools auf dieser Website werden für den persönlichen und kommerziellen Gebrauch bereitgestellt. Sie dürfen unseren Code ohne ausdrückliche Genehmigung nicht modifizieren, zurückentwickeln oder weiterverteilen." },
        { section: "Haftungsausschluss", body: "Die Materialien auf Apps24 werden 'wie besehen' bereitgestellt. Wir geben keine Garantien hinsichtlich der Genauigkeit oder Zuverlässigkeit der Tools." },
        { section: "Einschränkungen", body: "In keinem Fall ist Apps24 für Schäden verantwortlich, die aus der Nutzung oder Unfähigkeit entstehen, die Tools auf der Website zu nutzen." },
      ],
    },
    contact: {
      title: "Apps24 kontaktieren",
      intro: "Wenn Sie Fragen, Feedback oder Vorschläge haben, zögern Sie nicht, uns zu kontaktieren.",
      welcomeItems: [
        "Tool-Fehler oder Bugs",
        "Falsche Ausgabe oder Formatierungsprobleme",
        "Funktionsvorschläge",
        "Sprach- oder Übersetzungsverbesserungen",
        "Geschäftliche Anfragen",
        "Allgemeines Feedback zur Website",
      ],
      emailHeading: "E-Mail-Support",
      email: "support@apps24.io",
      reportDescription: "Wenn Sie ein Problem melden, geben Sie bitte so viele Details wie möglich an:",
      reportItems: [
        "Der Tool-Name",
        "Die Seiten-URL",
        "Der verwendete Browser oder das verwendete Gerät",
        "Eine kurze Beschreibung des Problems",
        "Ein Screenshot, falls verfügbar",
      ],
      responseHeading: "Antwortzeit",
      responseBody: "Wir bemühen uns, Anfragen so schnell wie möglich zu bearbeiten. Bitte erlauben Sie eine angemessene Zeit für eine Antwort, insbesondere bei Funktionsanfragen oder nicht dringenden Fragen.",
      suggestionsHeading: "Vorschläge und Feedback",
      suggestionsBody: "Wir verbessern Apps24 kontinuierlich und fügen neue Tools hinzu. Wenn Sie ein Tool sehen möchten, das auf der Website fehlt, oder Ideen zur Verbesserung der Benutzerfreundlichkeit haben, hören wir Sie gerne.",
      businessHeading: "Geschäftliche und Partnerschaftsanfragen",
      businessBody: "Für geschäftsbezogene Kommunikation, Partnerschaftsdiskussionen oder websitebezogene Vorschläge kontaktieren Sie uns bitte per E-Mail mit einer klaren Betreffzeile, damit wir Ihre Anfrage effizienter bearbeiten können.",
      beforeContactHeading: "Bevor Sie uns kontaktieren",
      beforeContactItems: ["Über uns", "Datenschutzrichtlinie", "Nutzungsbedingungen"],
      closing: "Vielen Dank für Ihren Besuch bei Apps24.",
      content: "Wenn Sie Fragen oder Vorschläge haben, kontaktieren Sie uns unter support@apps24.io.",
    },
  },

  ar: {
    about: {
      title: "حول Apps24",
      intro: "Apps24 هو موقع أدوات إلكترونية متعدد اللغات مُصمَّم لجعل المهام الرقمية اليومية أسرع وأبسط وأكثر سهولة في الوصول من أي جهاز. أنشأنا Apps24 للأشخاص الذين يحتاجون إلى أدوات عملية دون تنزيلات أو تسجيل أو سير عمل معقدة. سواء كنت طالباً أو مسوّقاً أو مطوراً أو مصمماً أو صاحب عمل أو مستخدماً عادياً للإنترنت، هدفنا هو مساعدتك على حل المهام الصغيرة لكن المهمة بسرعة.",
      whatWeOffer: {
        heading: "ما نقدمه",
        items: [
          "تنسيق النصوص وتحويلها",
          "ضغط الصور وتحسينها",
          "تنسيق JSON والتحقق منه",
          "توليد كلمات المرور",
          "توليد رموز QR والباركود",
          "أدوات الألوان والترميز",
        ],
      },
      approach: {
        heading: "نهجنا",
        items: [
          { title: "بسيط وسريع", body: "أدواتنا مصممة للعمل بسرعة مع واجهة نظيفة وخطوات قليلة." },
          { title: "بدون احتكاك غير ضروري", body: "حيثما أمكن، يجب أن يتمكن المستخدمون من فتح صفحة واستخدام الأداة فوراً والحصول على نتائج دون إنشاء حساب." },
          { title: "مفيد عبر اللغات", body: "تم تصميم Apps24 كمنصة متعددة اللغات لكي يتمكن المزيد من المستخدمين من الوصول إلى الأدوات العملية بلغتهم المفضلة." },
          { title: "تصميم واعٍ للخصوصية", body: "تم تصميم كثير من أدواتنا لمعالجة البيانات مباشرة في المتصفح كلما أمكن ذلك، مما يساعد المستخدمين على إنجاز المهام دون نقل بيانات غير ضروري." },
        ],
      },
      whoItsFor: {
        heading: "لمن Apps24",
        items: [
          "الطلاب الذين يعملون مع النصوص والملفات والتنسيق",
          "المطورون الذين يتحققون من JSON والتشفير والبيانات التقنية",
          "المسوّقون الذين ينشئون روابط الحملات ويجهزون المحتوى",
          "المصممون الذين يتعاملون مع الألوان والأصول والمواد المرئية",
          "الشركات الصغيرة التي تنشئ الملصقات ورموز QR والأدوات البسيطة",
          "المستخدمون العامون الباحثون عن أدوات سريعة ومجانية عبر الإنترنت",
        ],
      },
      whyWeBuilt: {
        heading: "لماذا بنينا Apps24",
        body: "أدوات كثيرة على الإنترنت إما مثقلة بالإعلانات أو صعبة الاستخدام أو محدودة الوظائف. أردنا بناء تجربة أنظف تتمحور حول الفائدة والسرعة وسهولة الوصول. Apps24 يتوسع باستمرار ونخطط للاستمرار في إضافة أدوات ويب عملية تحل مشكلات حقيقية بطريقة بسيطة.",
      },
      goal: {
        heading: "هدفنا",
        body: "هدفنا هو بناء مكتبة موثوقة من الأدوات المفيدة عبر الإنترنت يمكن للناس العودة إليها في أي وقت يحتاجون فيه إلى حل سريع. إذا كانت لديك اقتراحات لأدوات جديدة أو وجدت مشكلة في الموقع، فنحن نرحب بتعليقاتك.",
      },
      content: [
        "Apps24 هو موقع أدوات إلكترونية متعدد اللغات مُصمَّم لجعل المهام الرقمية اليومية أسرع وأبسط.",
        "نقدم أدوات خفيفة تعمل في المتصفح لتنسيق النصوص وضغط الصور والتحقق من JSON وتوليد كلمات المرور ورموز QR والمزيد.",
        "هدفنا هو بناء مكتبة موثوقة من الأدوات المفيدة عبر الإنترنت.",
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      content: [
        { section: "مقدمة", body: "في Apps24، نولي أولوية لخصوصيتك. توضح هذه السياسة كيفية تعاملنا مع البيانات عند استخدام خدماتنا." },
        { section: "جمع البيانات", body: "تتم معالجة معظم الأدوات محليًا داخل متصفحك. قد تطلب بعض الميزات بيانات محدودة من خدمات خارجية عند الحاجة إلى نتائج مباشرة." },
        { section: "ملفات السجل", body: "مثل المواقع الأخرى، نستخدم ملفات السجل لتحليل حركة المرور والصيانة. يشمل ذلك عناوين IP وأنواع المتصفحات والطوابع الزمنية، وهي ليست مرتبطة بمعلومات تعريف شخصية." },
        { section: "تخزين المتصفح", body: "تقوم بعض الأدوات بحفظ التفضيلات محليًا على جهازك باستخدام تخزين المتصفح مثل localStorage." },
        { section: "خدمات الطرف الثالث", body: "قد تستخدم ميزات مثل البحث عن عنوان IP مزودين خارجيين لعرض تفاصيل الشبكة والموقع." },
        { section: "التواصل", body: "إذا كانت لديك أسئلة حول ممارسات الخصوصية لدينا، يرجى التواصل معنا." },
      ],
    },
    terms: {
      title: "شروط الخدمة",
      content: [
        { section: "قبول الشروط", body: "بالوصول إلى Apps24، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها." },
        { section: "ترخيص الاستخدام", body: "تُقدَّم الأدوات الموجودة على هذا الموقع للاستخدام الشخصي والتجاري. لا يجوز تعديل كودنا أو إجراء هندسة عكسية عليه أو إعادة توزيعه دون إذن صريح." },
        { section: "إخلاء المسؤولية", body: "تُقدَّم مواد Apps24 'كما هي'. لا نقدم أي ضمانات تتعلق بدقة أو موثوقية الأدوات." },
        { section: "القيود", body: "لن تكون Apps24 مسؤولة بأي حال عن الأضرار الناجمة عن استخدام أو عدم القدرة على استخدام الأدوات الموجودة على الموقع." },
      ],
    },
    contact: {
      title: "التواصل مع Apps24",
      intro: "إذا كانت لديك أسئلة أو تعليقات أو اقتراحات، فلا تتردد في التواصل معنا.",
      welcomeItems: [
        "أخطاء أو مشكلات في الأدوات",
        "مخرجات غير صحيحة أو مشكلات في التنسيق",
        "اقتراحات ميزات",
        "تحسينات لغوية أو في الترجمة",
        "استفسارات تجارية",
        "تعليقات عامة حول الموقع",
      ],
      emailHeading: "الدعم عبر البريد الإلكتروني",
      email: "support@apps24.io",
      reportDescription: "إذا كنت تبلغ عن مشكلة، يُرجى تضمين أكبر قدر من التفاصيل:",
      reportItems: [
        "اسم الأداة",
        "رابط الصفحة",
        "المتصفح أو الجهاز المستخدم",
        "وصف مختصر للمشكلة",
        "لقطة شاشة إن أمكن",
      ],
      responseHeading: "وقت الاستجابة",
      responseBody: "نسعى إلى مراجعة الاستفسارات في أسرع وقت ممكن. يُرجى السماح بوقت معقول للرد، خاصةً لطلبات الميزات أو الأسئلة غير العاجلة.",
      suggestionsHeading: "الاقتراحات والتعليقات",
      suggestionsBody: "نحن نحسّن Apps24 باستمرار ونضيف أدوات جديدة. إذا كانت هناك أداة تودّ رؤيتها على الموقع، أو إذا كانت لديك أفكار لتحسين سهولة الاستخدام، فسنكون سعداء بسماعك.",
      businessHeading: "استفسارات الأعمال والشراكات",
      businessBody: "للتواصل المتعلق بالأعمال أو مناقشات الشراكة أو المقترحات المتعلقة بالموقع، يُرجى التواصل معنا عبر البريد الإلكتروني مع سطر موضوع واضح لنتمكن من مراجعة طلبك بكفاءة أكبر.",
      beforeContactHeading: "قبل التواصل معنا",
      beforeContactItems: ["من نحن", "سياسة الخصوصية", "شروط الخدمة"],
      closing: "شكراً لزيارتك Apps24.",
      content: "إذا كانت لديك أسئلة أو اقتراحات، يُرجى التواصل معنا عبر support@apps24.io.",
    },
  },
};
