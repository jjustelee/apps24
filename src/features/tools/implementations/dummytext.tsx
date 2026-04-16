"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { useParams } from "next/navigation";
import type { Locale } from "@/lib/site";

const SENTENCES: Record<string, string[]> = {
  en: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Integer vitae lorem sed arcu volutpat gravida.",
    "Praesent luctus sapien at sem facilisis, non faucibus mi posuere.",
    "Donec vitae neque at justo posuere aliquet.",
    "Suspendisse potenti, curabitur vitae nibh vel mauris faucibus luctus.",
    "Aliquam erat volutpat, sed dignissim risus euismod sed.",
    "Curabitur ac nisl ac nisi vulputate fringilla.",
    "Phasellus interdum massa non quam molestie, a fringilla diam pulvinar.",
  ],
  ko: [
    "모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.",
    "국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.",
    "모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 차별받지 아니한다.",
    "정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.",
    "국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다.",
    "대한민국은 민주공화국이다. 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.",
    "국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다.",
    "대통령의 임기는 5년으로 하며, 단임으로 한다.",
    "법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.",
  ],
  ja: [
    "すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である。",
    "人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。",
    "何人も、人種、皮膚の色、性、言語、宗教、政治上その他の意見、国民的若しくは社会的出身によって差別を受けることはない。",
    "すべて人は、生命、自由及び身体の安全に対する権利を有する。",
    "何人も、奴隷にされ、又は苦役に服することはない。奴隷制度及び奴隷売買は、いかなる形においても禁止する。",
    "法の下の平等。すべて国民は、法の下に平等であつて、人種、信条、性別、社会的身分又は門地により差別されない。",
  ],
  fr: [
    "Tous les êtres humains naissent libres et égaux en dignité et en droits.",
    "Ils sont doués de raison et de conscience et doivent agir les uns envers les autres dans un esprit de fraternité.",
    "Chacun peut se prévaloir de tous les droits et de toutes les libertés proclamés dans la présente Déclaration.",
    "Tout individu a droit à la vie, à la liberté et à la sûreté de sa personne.",
    "Nul ne sera tenu en esclavage ni en servitude; l'esclavage et la traite des esclaves sont interdits sous toutes leurs formes.",
    "Nul ne sera soumis à la torture, ni à des peines ou traitements cruels, inhumains ou dégradants.",
  ],
  zh: [
    "人人生而自由，在尊严和权利上一律平等。",
    "他们赋有理性和良心，并应以兄弟关系的精神相对待。",
    "人人有资格享有本宣言所载的一切权利和自由，不分种族、肤色、性别、语言、宗教。",
    "人人有权享有生命、自由和人身安全。",
    "任何人不得加以奴役或隶属；一切形式的奴役和奴隶贩卖，均应予以禁止。",
    "任何人不得加以酷刑，或施以残忍的、不人道的或侮辱性的待遇或刑罚。",
  ],
  "zh-TW": [
    "人人生而自由，在尊嚴和權利上一律平等。",
    "他們賦有理性和良心，並應以兄弟關係的精神相對待。",
    "人人有資格享有本宣言所載的一切權利和自由，不分種族、膚色、性別、語言、宗教。",
    "人人有權享有生命、自由和人身安全。",
    "任何人不得加以奴役或隸屬；一切形式의 奴役和奴隸販賣，均應予以禁止。",
    "任何人不得加以酷刑，或施以殘忍的、不人道的或侮辱性的待遇或刑罰。",
  ],
  es: [
    "Todos los seres humanos nacen libres e iguales en dignidad y derechos.",
    "Dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros.",
    "Toda persona tiene todos los derechos y libertades proclamados en esta Declaración, sin distinción alguna.",
    "Todo individuo tiene derecho a la vida, a la libertad y a la seguridad de su persona.",
    "Nadie estará sometido a esclavitud ni a servidumbre, la esclavitud y la trata de esclavos están prohibidas.",
    "Nadie será sometido a torturas ni a penas o tratos crueles, inhumanos o degradantes.",
  ],
  de: [
    "Alle Menschen sind frei und gleich an Würde und Rechten geboren.",
    "Sie sind mit Vernunft und Gewissen begabt und sollen einander im Geist der Brüderlichkeit begegnen.",
    "Jeder hat Anspruch auf die in dieser Erklärung verkündeten Rechte und Freiheiten, ohne irgendeinen Unterschied.",
    "Jeder hat das Recht auf Leben, Freiheit und Sicherheit der Person.",
    "Niemand darf in Slaverei oder Leibeigenschaft gehalten werden; Sklaverei und Sklavenhandel sind verboten.",
    "Niemand darf der Folter oder grausamer, unmenschlicher oder erniedrigender Behandlung unterworfen werden.",
  ],
  pt: [
    "Todos os seres humanos nascem livres e iguais em dignidade e em direitos.",
    "Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade.",
    "Todos os seres humanos podem invocar os direitos e as liberdades proclamados na presente Declaração.",
    "Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal.",
    "Ninguém será mantido em escravatura ou em servidão; a escravatura e o trato dos escravos são proibidos.",
    "Ninguém será submetido a torturas nem a penas ou tratamentos cruéis, desumanos ou degradantes.",
  ],
  ar: [
    "يولد جميع الناس أحرارًا متساوين في الكرامة والحقوق.",
    "وقد وهبوا عقلًا وضميرًا وعليهم أن يعامل بعضهم بعضًا بروح الإخاء.",
    "لكل إنسان حق التمتع بكافة الحقوق والحريات الواردة في هذا الإعلان، دون أي تمييز.",
    "لكل فرد الحق في الحياة والحرية وفي أمانه على شخصه.",
    "لا يجوز استرقاق أو استعباد أي شخص، ويحظر الرق وتجارة الرقيق بكافة أوضاعهما.",
    "لا يجوز إخضاع أحد للتعذيب ولا للعقوبات أو المعاملات القاسية أو الوحشية أو الحاطة بالكرامة.",
  ],
};

const STORAGE_KEY_LANG = "apps24.dummytext.lang";
const STORAGE_KEY_LENGTH = "apps24.dummytext.length";

export function DummyTextTool({ tool, commonText: common }: ToolRendererProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "en";
  
  // Strongly prioritize the current page locale over saved settings
  const [lang, setLang] = useState<string>(locale);
  const [length, setLength] = useState(1);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // Effect to handle initial load and locale changes
  useEffect(() => {
    const timer = window.setTimeout(() => {
      // 1. Always start paragraphs with current locale text
      setLang(locale);

      // 2. Load preferred length (paragraphs) from storage
      const savedLen = localStorage.getItem(STORAGE_KEY_LENGTH);
      if (savedLen) setLength(Number(savedLen));

      setSettingsLoaded(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [locale]);

  useEffect(() => {
    if (settingsLoaded) {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
      localStorage.setItem(STORAGE_KEY_LENGTH, String(length));
    }
  }, [lang, length, settingsLoaded]);
  
  const sentencesSource = SENTENCES[lang] || SENTENCES.en;
  
  const generateParagraphs = (count: number) => {
    return Array.from({ length: count }, (_, pi) => {
      const offset = (pi * 3) % sentencesSource.length;
      const pLength = 4 + (pi % 3);
      
      return Array.from({ length: pLength }, (_, si) => 
        sentencesSource[(offset + si) % sentencesSource.length]
      ).join(" ");
    });
  };

  const paragraphs = generateParagraphs(length);

  // Available options: Current Page Locale first, then English (if page is not EN)
  const availableLangs = locale === "en" ? ["en"] : [locale, "en"];
  
  const getLangLabel = (l: string) => {
    const key = `${l.replace("-", "")}Label` as keyof typeof common;
    return (common[key] as string) || l.toUpperCase();
  };

  return (
    <div className="tool-stack">
      <div className="tool-form">
        <div className="tool-field">
          <label className="tool-label">{common.languageSelect}</label>
          <div style={{ display: "flex", gap: "10px" }}>
            {availableLangs.map((l) => (
              <button 
                key={l}
                className={`tool-button ${lang === l ? "" : "secondary"}`} 
                onClick={() => setLang(l)}
              >
                {getLangLabel(l)}
              </button>
            ))}
          </div>
        </div>

        <div className="tool-field">
          <label className="tool-label" htmlFor="dummytext-length">
            {common.paragraphs}
          </label>
          <input
            id="dummytext-length"
            className="tool-input"
            type="number"
            min="1"
            max="100"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="tool-output" aria-live="polite">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>{common.generatedText}</h3>
          <button 
            className="tool-button secondary" 
            style={{ padding: "8px 16px", fontSize: "0.95rem" }}
            onClick={() => {
              navigator.clipboard.writeText(paragraphs.join("\n\n"));
            }}
          >
            {common.copyAll}
          </button>
        </div>
        <div className="tool-output-card" style={{ whiteSpace: "pre-wrap", padding: "1.5rem" }}>
          {paragraphs.map((paragraph, index) => (
            <p key={`${lang}-${length}-${index}`} style={{ marginBottom: index === paragraphs.length - 1 ? 0 : "1.5rem" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
