import type { Metadata } from "next";
import { LEGAL_TEXTS } from "@/features/tools/legal";
import { getCommonText } from "@/features/tools/copy";
import { buildLocaleAlternates } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/site";
import Link from "next/link";

const PRIVACY_REVIEW_COPY: Record<
  Locale,
  {
    lastUpdated: string;
    reviewTitle: string;
    reviewBody: string;
    adSettings: string;
    googlePolicy: string;
  }
> = {
  en: {
    lastUpdated: "Last updated: May 17, 2026",
    reviewTitle: "Advertising, cookies, and user choices",
    reviewBody: "Apps24 explains when browser storage, third-party lookup services, or Google advertising services may be used. If ads are enabled, users can manage personalized advertising and review Google's privacy terms from the links below.",
    adSettings: "Google ad settings",
    googlePolicy: "Google privacy and terms",
  },
  ko: {
    lastUpdated: "최종 업데이트: 2026년 5월 17일",
    reviewTitle: "광고, 쿠키, 사용자 선택권",
    reviewBody: "Apps24는 브라우저 저장소, 제3자 조회 서비스, Google 광고 서비스가 언제 사용될 수 있는지 설명합니다. 광고가 활성화된 경우 사용자는 아래 링크에서 개인 맞춤 광고를 관리하고 Google 개인정보 및 약관을 확인할 수 있습니다.",
    adSettings: "Google 광고 설정",
    googlePolicy: "Google 개인정보 및 약관",
  },
  fr: {
    lastUpdated: "Dernière mise à jour : 17 mai 2026",
    reviewTitle: "Publicité, cookies et choix des utilisateurs",
    reviewBody: "Apps24 explique quand le stockage du navigateur, les services de recherche tiers ou les services publicitaires Google peuvent être utilisés. Si les annonces sont activées, les utilisateurs peuvent gérer la publicité personnalisée et consulter les règles de confidentialité de Google ci-dessous.",
    adSettings: "Paramètres des annonces Google",
    googlePolicy: "Confidentialité et conditions Google",
  },
  ja: {
    lastUpdated: "最終更新日: 2026年5月17日",
    reviewTitle: "広告、Cookie、ユーザーの選択",
    reviewBody: "Apps24では、ブラウザ保存、第三者の照会サービス、Google広告サービスが使われる可能性がある場面を説明しています。広告が有効な場合、ユーザーは以下のリンクからパーソナライズ広告を管理し、Googleのプライバシーと規約を確認できます。",
    adSettings: "Google広告設定",
    googlePolicy: "Googleプライバシーと規約",
  },
  zh: {
    lastUpdated: "最后更新：2026 年 5 月 17 日",
    reviewTitle: "广告、Cookie 与用户选择",
    reviewBody: "Apps24 会说明浏览器存储、第三方查询服务或 Google 广告服务可能在何时使用。如果启用广告，用户可以通过以下链接管理个性化广告并查看 Google 隐私权和条款。",
    adSettings: "Google 广告设置",
    googlePolicy: "Google 隐私权和条款",
  },
  "zh-TW": {
    lastUpdated: "最後更新：2026 年 5 月 17 日",
    reviewTitle: "廣告、Cookie 與使用者選擇",
    reviewBody: "Apps24 會說明瀏覽器儲存、第三方查詢服務或 Google 廣告服務可能在何時使用。如果啟用廣告，使用者可以透過以下連結管理個人化廣告並查看 Google 隱私權和條款。",
    adSettings: "Google 廣告設定",
    googlePolicy: "Google 隱私權和條款",
  },
  pt: {
    lastUpdated: "Última atualização: 17 de maio de 2026",
    reviewTitle: "Publicidade, cookies e escolhas do usuário",
    reviewBody: "O Apps24 explica quando o armazenamento do navegador, serviços terceiros de consulta ou serviços de publicidade do Google podem ser usados. Se anúncios forem ativados, os usuários podem gerenciar anúncios personalizados e revisar os termos de privacidade do Google nos links abaixo.",
    adSettings: "Configurações de anúncios do Google",
    googlePolicy: "Privacidade e termos do Google",
  },
  es: {
    lastUpdated: "Última actualización: 17 de mayo de 2026",
    reviewTitle: "Publicidad, cookies y opciones del usuario",
    reviewBody: "Apps24 explica cuándo pueden usarse el almacenamiento del navegador, servicios externos de consulta o servicios publicitarios de Google. Si los anuncios están activos, los usuarios pueden gestionar la publicidad personalizada y revisar la privacidad y condiciones de Google desde los enlaces siguientes.",
    adSettings: "Configuración de anuncios de Google",
    googlePolicy: "Privacidad y condiciones de Google",
  },
  de: {
    lastUpdated: "Zuletzt aktualisiert: 17. Mai 2026",
    reviewTitle: "Werbung, Cookies und Nutzerauswahl",
    reviewBody: "Apps24 erklärt, wann Browserspeicher, externe Lookup-Dienste oder Google-Werbedienste verwendet werden können. Wenn Anzeigen aktiviert sind, können Nutzer personalisierte Werbung verwalten und die Datenschutz- und Nutzungsbedingungen von Google über die folgenden Links prüfen.",
    adSettings: "Google-Anzeigeneinstellungen",
    googlePolicy: "Google Datenschutz und Nutzungsbedingungen",
  },
  ar: {
    lastUpdated: "آخر تحديث: 17 مايو 2026",
    reviewTitle: "الإعلانات وملفات تعريف الارتباط وخيارات المستخدم",
    reviewBody: "يوضح Apps24 متى يمكن استخدام تخزين المتصفح أو خدمات البحث الخارجية أو خدمات إعلانات Google. عند تفعيل الإعلانات، يمكن للمستخدمين إدارة الإعلانات المخصصة ومراجعة خصوصية وشروط Google من الروابط أدناه.",
    adSettings: "إعدادات إعلانات Google",
    googlePolicy: "خصوصية وشروط Google",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;

  return {
    alternates: buildLocaleAlternates(validLocale, "/privacy"),
    title: legal.privacy.title,
    description: legal.privacy.content[0]?.body ?? legal.privacy.title,
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as Locale;
  const legal = LEGAL_TEXTS[validLocale] || LEGAL_TEXTS.en;
  const common = await getCommonText(validLocale);
  const reviewCopy = PRIVACY_REVIEW_COPY[validLocale] ?? PRIVACY_REVIEW_COPY.en;

  return (
    <div className="content-page-wrapper" style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
      <main className="tool-main-content">
        <header className="tool-header" style={{ marginBottom: "2.5rem" }}>
          <nav style={{ marginBottom: "0.5rem" }}>
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">{common.privacy}</div>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{legal.privacy.title}</h1>
          <p style={{ marginTop: "0.75rem", color: "var(--muted)", fontSize: "0.95rem" }}>
            {reviewCopy.lastUpdated}
          </p>
        </header>

        <section className="legal-content">
          {legal.privacy.content.map((item, i) => (
            <div key={i} style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--accent)" }}>{item.section}</h2>
              <p style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "var(--text)" }}>{item.body}</p>
            </div>
          ))}

          <aside
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              border: "1px solid var(--line)",
              borderRadius: "1rem",
              background: "var(--accent-soft)",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>
              {reviewCopy.reviewTitle}
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "1rem", color: "var(--muted)", marginBottom: "1rem" }}>
              {reviewCopy.reviewBody}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="https://adssettings.google.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="tool-button secondary"
              >
                {reviewCopy.adSettings}
              </a>
              <a
                href="https://policies.google.com/privacy"
                rel="noopener noreferrer"
                target="_blank"
                className="tool-button secondary"
              >
                {reviewCopy.googlePolicy}
              </a>
            </div>
          </aside>
        </section>

        <footer style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <Link href={`/${locale}`} className="tool-button">
            {common.backToTools}
          </Link>
        </footer>
      </main>
    </div>
  );
}
