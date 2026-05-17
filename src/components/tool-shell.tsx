import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolDefinition } from "@/features/tools/types";
import { getCommonText, getToolText } from "@/features/tools/copy";
import { getImageCompressorLongtailLinks } from "@/features/tools/image-compressor-longtails";
import { getBase64EncoderLongtailLinks } from "@/features/tools/base64-encoder-longtails";
import { getJsonFormatterLongtailLinks } from "@/features/tools/json-formatter-longtails";
import { getQrGeneratorLongtailLinks } from "@/features/tools/qrgenerator-longtails";
import { getBarcodeGeneratorLongtailLinks } from "@/features/tools/barcode-generator-longtails";
import { getPixelConverterLongtailLinks } from "@/features/tools/pixel-converter-longtails";
import { getBackgroundRemoverLongtailLinks } from "@/features/tools/background-remover-longtails";
import { getUnitConverterLongtailLinks } from "@/features/tools/unit-converter-longtails";
import { getPercentageCalculatorLongtailLinks } from "@/features/tools/percentage-calculator-longtails";
import { getHighIntentUseCaseCopy } from "@/features/tools/high-intent-use-cases";
import type { Locale } from "@/lib/site";
import { ToolSidebar } from "@/components/tool-sidebar";

type ToolReviewCopy = {
  title: string;
  intro: string;
  checklistTitle: string;
  checklistItems: string[];
  categoryNotes: Partial<Record<ToolDefinition["category"], string>>;
};

const TOOL_REVIEW_COPY: Record<Locale, ToolReviewCopy> = {
  en: {
    title: "Before you use the result",
    intro: "Apps24 tools are designed for quick browser-based tasks, but the final output should still be reviewed in the context where you plan to use it.",
    checklistTitle: "Practical checks",
    checklistItems: [
      "Confirm the input is correct before relying on the generated or converted result.",
      "Use the copy or download controls only after checking that the result matches your purpose.",
      "For business, publishing, or production work, test the result in the final destination as well.",
    ],
    categoryNotes: {
      image: "Image tools may change file size, format, transparency, or visual detail, so compare the output with the original before publishing.",
      text: "Text tools can change formatting and spacing, so review the final wording before using it in forms, articles, or metadata.",
      utility: "Data and formatting tools can reveal syntax or encoding issues, but you should still validate important data in your own workflow.",
      security: "Generated passwords should be stored in a trusted password manager and should not be reused across accounts.",
      generator: "Generated QR codes and barcodes should be scanned or tested before printing, packaging, or sharing publicly.",
      measurement: "Measurement and conversion tools provide practical estimates, but physical or regulated work may require verified instruments.",
      time: "Time tools depend on the browser and device session, so use dedicated equipment for critical alarms or timing.",
      display: "Display tools depend on screen brightness, color settings, and device size, so check visibility in the actual environment.",
      network: "Network lookup results can vary by provider, VPN, proxy, or mobile network routing.",
    },
  },
  ko: {
    title: "결과를 사용하기 전에",
    intro: "Apps24 도구는 빠른 브라우저 작업을 위해 설계되었지만, 최종 결과는 실제로 사용할 맥락에서 한 번 더 확인하는 것이 좋습니다.",
    checklistTitle: "실전 확인 사항",
    checklistItems: [
      "생성 또는 변환 결과를 신뢰하기 전에 입력값이 정확한지 먼저 확인하세요.",
      "복사 또는 다운로드는 결과가 목적에 맞는지 확인한 뒤 사용하세요.",
      "업무, 게시, 운영 환경에 사용할 경우 최종 적용 위치에서도 다시 테스트하세요.",
    ],
    categoryNotes: {
      image: "이미지 도구는 파일 크기, 형식, 투명도, 세부 표현을 바꿀 수 있으므로 게시 전 원본과 결과를 비교하세요.",
      text: "텍스트 도구는 서식과 공백을 바꿀 수 있으므로 양식, 글, 메타데이터에 사용하기 전에 문장을 확인하세요.",
      utility: "데이터와 서식 도구는 문법 또는 인코딩 문제를 찾는 데 도움이 되지만, 중요한 데이터는 자체 작업 흐름에서도 검증하세요.",
      security: "생성한 비밀번호는 신뢰할 수 있는 비밀번호 관리자에 저장하고 여러 계정에서 재사용하지 않는 것이 좋습니다.",
      generator: "생성한 QR 코드와 바코드는 인쇄, 포장, 공개 공유 전에 실제로 스캔 또는 테스트하세요.",
      measurement: "측정과 변환 도구는 실용적인 추정값을 제공하지만, 물리 작업이나 규정이 있는 작업에는 검증된 장비가 필요할 수 있습니다.",
      time: "시간 도구는 브라우저와 기기 세션에 의존하므로 중요한 알람이나 타이밍에는 전용 장비를 사용하세요.",
      display: "디스플레이 도구는 화면 밝기, 색상 설정, 기기 크기에 따라 달라질 수 있으므로 실제 환경에서 가시성을 확인하세요.",
      network: "네트워크 조회 결과는 제공업체, VPN, 프록시, 모바일 네트워크 라우팅에 따라 달라질 수 있습니다.",
    },
  },
  fr: {
    title: "Avant d'utiliser le résultat",
    intro: "Les outils Apps24 sont conçus pour des tâches rapides dans le navigateur, mais le résultat final doit être vérifié dans le contexte où vous comptez l'utiliser.",
    checklistTitle: "Vérifications pratiques",
    checklistItems: [
      "Vérifiez que l'entrée est correcte avant de vous fier au résultat généré ou converti.",
      "Utilisez les actions copier ou télécharger seulement après avoir vérifié que le résultat convient à votre objectif.",
      "Pour un usage professionnel, une publication ou une production, testez aussi le résultat dans sa destination finale.",
    ],
    categoryNotes: {
      image: "Les outils d'image peuvent modifier la taille, le format, la transparence ou les détails visuels; comparez donc la sortie avec l'original avant publication.",
      text: "Les outils de texte peuvent modifier la mise en forme et les espaces; relisez le texte final avant de l'utiliser.",
      utility: "Les outils de données et de formatage aident à repérer des problèmes de syntaxe ou d'encodage, mais les données importantes doivent être validées dans votre propre flux.",
      security: "Les mots de passe générés doivent être conservés dans un gestionnaire fiable et ne doivent pas être réutilisés.",
      generator: "Les QR codes et codes-barres générés doivent être scannés ou testés avant impression, emballage ou diffusion.",
      measurement: "Les outils de mesure et conversion fournissent des estimations pratiques, mais les usages réglementés peuvent exiger des instruments vérifiés.",
      time: "Les outils de temps dépendent du navigateur et de l'appareil; utilisez un équipement dédié pour les alertes critiques.",
      display: "Les outils d'affichage dépendent de la luminosité, des couleurs et de la taille d'écran; vérifiez la visibilité sur place.",
      network: "Les résultats réseau peuvent varier selon le fournisseur, le VPN, le proxy ou le routage mobile.",
    },
  },
  ja: {
    title: "結果を使う前に",
    intro: "Apps24のツールは短いブラウザ作業向けですが、最終結果は実際に使う場面で確認してください。",
    checklistTitle: "実用上の確認事項",
    checklistItems: [
      "生成または変換結果を使う前に、入力内容が正しいか確認してください。",
      "コピーやダウンロードは、結果が目的に合っていることを確認してから行ってください。",
      "業務、公開、制作で使う場合は、最終的な利用先でもテストしてください。",
    ],
    categoryNotes: {
      image: "画像ツールはファイルサイズ、形式、透明度、細部表現を変える場合があるため、公開前に元画像と比較してください。",
      text: "テキストツールは書式や空白を変える場合があるため、フォーム、記事、メタデータに使う前に確認してください。",
      utility: "データや書式ツールは構文やエンコードの問題確認に役立ちますが、重要なデータは自分の環境でも検証してください。",
      security: "生成したパスワードは信頼できるパスワード管理ツールに保存し、複数のアカウントで使い回さないでください。",
      generator: "生成したQRコードやバーコードは、印刷や共有の前に実際に読み取れるかテストしてください。",
      measurement: "測定や変換ツールは実用的な目安を提供しますが、規格や安全に関わる作業では検証済みの機器が必要です。",
      time: "時間ツールはブラウザと端末状態に依存するため、重要なアラームや計時には専用機器を使ってください。",
      display: "表示ツールは画面の明るさ、色設定、端末サイズに左右されるため、実際の環境で見え方を確認してください。",
      network: "ネットワーク照会結果は、プロバイダー、VPN、プロキシ、モバイル回線の経路によって変わることがあります。",
    },
  },
  zh: {
    title: "使用结果之前",
    intro: "Apps24 工具适合快速浏览器任务，但最终结果仍应结合实际使用场景检查。",
    checklistTitle: "实用检查",
    checklistItems: [
      "在依赖生成或转换结果前，请先确认输入内容正确。",
      "只有在确认结果符合目的后，再使用复制或下载操作。",
      "用于业务、发布或生产环境时，还应在最终使用位置再次测试。",
    ],
    categoryNotes: {
      image: "图片工具可能改变文件大小、格式、透明度或视觉细节，发布前请与原图比较。",
      text: "文本工具可能改变格式和空格，用于表单、文章或元数据前请检查最终文字。",
      utility: "数据和格式工具可帮助发现语法或编码问题，但重要数据仍应在自己的流程中验证。",
      security: "生成的密码应保存在可信的密码管理器中，不应在多个账户重复使用。",
      generator: "生成的二维码和条形码在打印、包装或公开分享前应先扫描或测试。",
      measurement: "测量和转换工具提供实用估算，涉及物理或合规要求的工作可能需要经过验证的工具。",
      time: "时间工具依赖浏览器和设备会话，关键提醒或计时应使用专用设备。",
      display: "显示工具受屏幕亮度、颜色设置和设备尺寸影响，应在实际环境中检查可见性。",
      network: "网络查询结果可能因服务商、VPN、代理或移动网络路由而变化。",
    },
  },
  "zh-TW": {
    title: "使用結果之前",
    intro: "Apps24 工具適合快速瀏覽器任務，但最終結果仍應結合實際使用情境檢查。",
    checklistTitle: "實用檢查",
    checklistItems: [
      "在依賴產生或轉換結果前，請先確認輸入內容正確。",
      "確認結果符合目的後，再使用複製或下載操作。",
      "用於業務、發布或正式環境時，仍應在最終使用位置再次測試。",
    ],
    categoryNotes: {
      image: "圖片工具可能改變檔案大小、格式、透明度或視覺細節，發布前請與原圖比較。",
      text: "文字工具可能改變格式和空格，用於表單、文章或中繼資料前請檢查最終文字。",
      utility: "資料和格式工具可協助發現語法或編碼問題，但重要資料仍應在自己的流程中驗證。",
      security: "產生的密碼應保存在可信的密碼管理器中，不應在多個帳號重複使用。",
      generator: "產生的 QR Code 和條碼在列印、包裝或公開分享前應先掃描或測試。",
      measurement: "測量和轉換工具提供實用估算，涉及實體或合規要求的工作可能需要經過驗證的工具。",
      time: "時間工具依賴瀏覽器和裝置狀態，關鍵提醒或計時應使用專用設備。",
      display: "顯示工具受螢幕亮度、色彩設定和裝置尺寸影響，應在實際環境中檢查可見性。",
      network: "網路查詢結果可能因服務商、VPN、代理或行動網路路由而變化。",
    },
  },
  pt: {
    title: "Antes de usar o resultado",
    intro: "As ferramentas do Apps24 foram criadas para tarefas rápidas no navegador, mas o resultado final ainda deve ser revisado no contexto em que será usado.",
    checklistTitle: "Verificações práticas",
    checklistItems: [
      "Confirme se a entrada está correta antes de confiar no resultado gerado ou convertido.",
      "Use copiar ou baixar somente depois de verificar se o resultado atende ao objetivo.",
      "Para negócios, publicação ou produção, teste também o resultado no destino final.",
    ],
    categoryNotes: {
      image: "Ferramentas de imagem podem alterar tamanho, formato, transparência ou detalhes visuais; compare o resultado com o original antes de publicar.",
      text: "Ferramentas de texto podem alterar formatação e espaços; revise o texto final antes de usá-lo.",
      utility: "Ferramentas de dados e formatação ajudam a encontrar problemas de sintaxe ou codificação, mas dados importantes devem ser validados no seu próprio fluxo.",
      security: "Senhas geradas devem ser salvas em um gerenciador confiável e não devem ser reutilizadas.",
      generator: "QR codes e códigos de barras gerados devem ser escaneados ou testados antes de impressão, embalagem ou compartilhamento.",
      measurement: "Ferramentas de medição e conversão oferecem estimativas práticas, mas trabalhos regulados podem exigir instrumentos verificados.",
      time: "Ferramentas de tempo dependem do navegador e do dispositivo; use equipamento dedicado para alarmes críticos.",
      display: "Ferramentas de exibição dependem de brilho, cores e tamanho da tela; verifique a visibilidade no ambiente real.",
      network: "Resultados de rede podem variar conforme provedor, VPN, proxy ou roteamento móvel.",
    },
  },
  es: {
    title: "Antes de usar el resultado",
    intro: "Las herramientas de Apps24 están diseñadas para tareas rápidas del navegador, pero el resultado final debe revisarse en el contexto donde se usará.",
    checklistTitle: "Comprobaciones prácticas",
    checklistItems: [
      "Confirme que la entrada sea correcta antes de confiar en el resultado generado o convertido.",
      "Use copiar o descargar solo después de comprobar que el resultado cumple su objetivo.",
      "Para negocios, publicación o producción, pruebe también el resultado en el destino final.",
    ],
    categoryNotes: {
      image: "Las herramientas de imagen pueden cambiar tamaño, formato, transparencia o detalles visuales; compare el resultado con el original antes de publicar.",
      text: "Las herramientas de texto pueden cambiar formato y espacios; revise el texto final antes de usarlo.",
      utility: "Las herramientas de datos y formato ayudan a detectar problemas de sintaxis o codificación, pero los datos importantes deben validarse en su propio flujo.",
      security: "Las contraseñas generadas deben guardarse en un gestor confiable y no reutilizarse.",
      generator: "Los códigos QR y de barras generados deben escanearse o probarse antes de imprimir, empaquetar o compartir.",
      measurement: "Las herramientas de medición y conversión ofrecen estimaciones prácticas, pero trabajos regulados pueden requerir instrumentos verificados.",
      time: "Las herramientas de tiempo dependen del navegador y del dispositivo; use equipo dedicado para alarmas críticas.",
      display: "Las herramientas de visualización dependen del brillo, color y tamaño de pantalla; revise la visibilidad en el entorno real.",
      network: "Los resultados de red pueden variar según proveedor, VPN, proxy o enrutamiento móvil.",
    },
  },
  de: {
    title: "Bevor Sie das Ergebnis verwenden",
    intro: "Apps24-Tools sind für schnelle Browser-Aufgaben gedacht, das Ergebnis sollte aber im geplanten Nutzungskontext geprüft werden.",
    checklistTitle: "Praktische Prüfungen",
    checklistItems: [
      "Prüfen Sie die Eingabe, bevor Sie sich auf ein generiertes oder konvertiertes Ergebnis verlassen.",
      "Nutzen Sie Kopieren oder Herunterladen erst, wenn das Ergebnis zum Zweck passt.",
      "Für Geschäft, Veröffentlichung oder Produktion sollte das Ergebnis auch am endgültigen Ziel getestet werden.",
    ],
    categoryNotes: {
      image: "Bildtools können Dateigröße, Format, Transparenz oder Details verändern; vergleichen Sie das Ergebnis vor Veröffentlichung mit dem Original.",
      text: "Texttools können Formatierung und Abstände verändern; prüfen Sie den Endtext vor der Verwendung.",
      utility: "Daten- und Formatierungstools helfen bei Syntax- oder Kodierungsproblemen, wichtige Daten sollten aber im eigenen Ablauf validiert werden.",
      security: "Generierte Passwörter sollten in einem vertrauenswürdigen Passwortmanager gespeichert und nicht wiederverwendet werden.",
      generator: "Generierte QR-Codes und Barcodes sollten vor Druck, Verpackung oder öffentlicher Weitergabe getestet werden.",
      measurement: "Mess- und Umrechnungstools liefern praktische Schätzungen, regulierte Arbeiten können geprüfte Instrumente erfordern.",
      time: "Zeittools hängen von Browser und Gerät ab; für kritische Alarme oder Zeitmessung sollte Spezialausrüstung genutzt werden.",
      display: "Anzeigetools hängen von Helligkeit, Farbeinstellungen und Gerätegröße ab; prüfen Sie die Sichtbarkeit vor Ort.",
      network: "Netzwerkergebnisse können je nach Anbieter, VPN, Proxy oder mobiler Route variieren.",
    },
  },
  ar: {
    title: "قبل استخدام النتيجة",
    intro: "تم تصميم أدوات Apps24 للمهام السريعة داخل المتصفح، لكن يجب مراجعة النتيجة النهائية في السياق الذي ستستخدمها فيه.",
    checklistTitle: "فحوصات عملية",
    checklistItems: [
      "تأكد من صحة الإدخال قبل الاعتماد على النتيجة التي تم إنشاؤها أو تحويلها.",
      "استخدم النسخ أو التنزيل فقط بعد التأكد من أن النتيجة تناسب هدفك.",
      "للأعمال أو النشر أو الاستخدام الإنتاجي، اختبر النتيجة أيضاً في وجهتها النهائية.",
    ],
    categoryNotes: {
      image: "قد تغيّر أدوات الصور الحجم أو الصيغة أو الشفافية أو التفاصيل، لذلك قارن النتيجة بالأصل قبل النشر.",
      text: "قد تغيّر أدوات النص التنسيق والمسافات، لذلك راجع النص النهائي قبل استخدامه في النماذج أو المقالات أو البيانات الوصفية.",
      utility: "تساعد أدوات البيانات والتنسيق على كشف مشكلات الصياغة أو الترميز، لكن البيانات المهمة يجب التحقق منها في سير عملك.",
      security: "ينبغي حفظ كلمات المرور التي يتم إنشاؤها في مدير كلمات مرور موثوق وعدم إعادة استخدامها.",
      generator: "يجب اختبار رموز QR والباركود التي يتم إنشاؤها قبل الطباعة أو التغليف أو المشاركة العامة.",
      measurement: "توفر أدوات القياس والتحويل تقديرات عملية، لكن الأعمال المنظمة أو الفيزيائية قد تحتاج إلى أدوات موثقة.",
      time: "تعتمد أدوات الوقت على المتصفح والجهاز، لذلك استخدم معدات مخصصة للتنبيهات أو التوقيت الحرج.",
      display: "تعتمد أدوات العرض على سطوع الشاشة وإعدادات اللون وحجم الجهاز، لذلك تحقق من الوضوح في البيئة الفعلية.",
      network: "قد تختلف نتائج الشبكة حسب المزوّد أو VPN أو الوكيل أو توجيه شبكة الهاتف.",
    },
  },
};

type ToolShellProps = {
  locale: Locale;
  tool: ToolDefinition;
  title: string;
  description: string;
  longtailIntro?: string;
  seo?: string;
  children: ReactNode;
};

export async function ToolShell({
  locale,
  tool,
  title,
  description,
  longtailIntro,
  seo,
  children,
}: ToolShellProps) {
  const common = await getCommonText(locale);
  const toolText = await getToolText(locale, tool);
  const reviewCopy = TOOL_REVIEW_COPY[locale] ?? TOOL_REVIEW_COPY.en;
  const categoryReviewNote = reviewCopy.categoryNotes[tool.category];
  const highIntentUseCases = getHighIntentUseCaseCopy(locale, tool.id, title);
  const formatTitle = (template: string) => template.replace("{0}", title);
  const unitConverterLinks = tool.id === "unitconverter" ? getUnitConverterLongtailLinks(locale) : [];
  const percentageCalculatorLinks = tool.id === "percentagecalculator" ? getPercentageCalculatorLongtailLinks(locale) : [];
  const qrGeneratorLinks = tool.id === "qrgenerator" ? getQrGeneratorLongtailLinks(locale) : [];
  const imageCompressorLinks = tool.id === "imagecompressor" ? getImageCompressorLongtailLinks(locale) : [];
  const pixelConverterLinks = tool.id === "pixelconverter" ? getPixelConverterLongtailLinks(locale) : [];
  const backgroundRemoverLinks = tool.id === "backgroundremover" ? getBackgroundRemoverLongtailLinks(locale) : [];
  const base64EncoderLinks = tool.id === "base64encoder" ? getBase64EncoderLongtailLinks(locale) : [];
  const jsonFormatterLinks = tool.id === "jsonformatter" ? getJsonFormatterLongtailLinks(locale) : [];
  const barcodeGeneratorLinks = tool.id === "barcodegenerator" ? getBarcodeGeneratorLongtailLinks(locale) : [];
  const popularConversions = toolText.popularConversions ?? [];
  const longtailSectionTitle = tool.id === "base64encoder" || tool.id === "jsonformatter" || tool.id === "barcodegenerator"
    || tool.id === "backgroundremover"
    ? common.relatedToolsTitle
    : common.popularConversionsTitle;
  const categoryLabel = (() => {
    switch (tool.category) {
      case "text":
        return common.textCategory;
      case "utility":
        return common.utilityCategory;
      case "image":
        return common.imageCategory;
      case "security":
        return common.securityCategory;
      case "time":
        return common.timeCategory;
      case "display":
        return common.displayCategory;
      case "measurement":
        return common.measurementCategory;
      case "generator":
        return common.generatorCategory;
      case "network":
        return common.networkCategory || tool.category;
      default:
        return tool.category;
    }
  })();
  const relatedToolHrefById: Partial<Record<string, string>> = {
    dummytext: `/${locale}/wordcounter`,
    wordcounter: `/${locale}/dummytext`,
    countdown: `/${locale}/digitalclock`,
    digitalclock: `/${locale}/countdown`,
    screenlamp: `/${locale}/digitalclock`,
    qrgenerator: `/${locale}/barcodegenerator`,
    barcodegenerator: `/${locale}/qrgenerator`,
    backgroundremover: `/${locale}/image-compressor`,
    signboard: `/${locale}/screenlamp`,
    pixelconverter: `/${locale}/unit-converter`,
    percentagecalculator: `/${locale}/unit-converter`,
    unitconverter: `/${locale}/percentage-calculator`,
    base64encoder: `/${locale}/json-formatter`,
    jsonformatter: `/${locale}/base64-encoder-decoder`,
    iplookup: `/${locale}/json-formatter`,
  };
  const relatedToolHref = relatedToolHrefById[tool.id];

  return (
    <div className="tool-shell">
      <ToolSidebar locale={locale} activeSlug={tool.slug} currentTitle={title} />

      <main className="tool-main-content">
        <header className="tool-header">
          <nav className="tool-breadcrumb">
            <Link className="back-link" href={`/${locale}`}>
              ← {common.backToTools}
            </Link>
          </nav>
          <div className="tool-badge">{categoryLabel}</div>
          <h1 className="tool-title">{title}</h1>
          <p className="tool-note">{description}</p>
        </header>

        {longtailIntro && (
          <section className="tool-context-card">
            <h2>{common.whenToUse}</h2>
            <p>{longtailIntro}</p>
          </section>
        )}

        <section className="tool-workspace" aria-label={title}>
          {children}
        </section>

        <section className="tool-rich-content-section">
          {toolText.longDescription && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{formatTitle(common.whatIs)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem" }}>{toolText.longDescription}</p>
            </div>
          )}

          {toolText.usageContext && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.whenToUse}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem" }}>{toolText.usageContext}</p>
            </div>
          )}

          {toolText.examples && toolText.examples.length > 0 && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.examplesTitle}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {toolText.examples.map((example) => (
                  <li key={example} style={{ padding: "1rem 1.1rem", background: "var(--surface-soft)", border: "1px solid var(--line)", borderRadius: "14px", color: "var(--muted)", lineHeight: "1.7" }}>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {highIntentUseCases && (
            <div className="tool-use-cases content-block" style={{ marginBottom: "2.5rem" }}>
              <div>
                <h2>{highIntentUseCases.title}</h2>
                <p>{highIntentUseCases.intro}</p>
              </div>
              <ul>
                {highIntentUseCases.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {toolText.howToUse && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{formatTitle(common.howToUseTitle)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem", whiteSpace: "pre-wrap" }}>{toolText.howToUse}</p>
            </div>
          )}

          {toolText.whyUse && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{formatTitle(common.whyUseTitle)}</h2>
              <p style={{ lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem" }}>{toolText.whyUse}</p>
            </div>
          )}

          <div className="tool-review-notes content-block" style={{ marginBottom: "2.5rem" }}>
            <div>
              <h2>{reviewCopy.title}</h2>
              <p>{reviewCopy.intro}</p>
            </div>
            <div className="tool-review-notes-grid">
              <article>
                <h3>{reviewCopy.checklistTitle}</h3>
                <ul>
                  {reviewCopy.checklistItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              {categoryReviewNote ? (
                <article>
                  <h3>{categoryLabel}</h3>
                  <p>{categoryReviewNote}</p>
                </article>
              ) : null}
            </div>
          </div>

          {(unitConverterLinks.length > 0 || percentageCalculatorLinks.length > 0 || qrGeneratorLinks.length > 0 || imageCompressorLinks.length > 0 || pixelConverterLinks.length > 0 || backgroundRemoverLinks.length > 0 || base64EncoderLinks.length > 0 || jsonFormatterLinks.length > 0 || barcodeGeneratorLinks.length > 0 || popularConversions.length > 0) && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{longtailSectionTitle}</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
                {tool.id === "unitconverter"
                  ? unitConverterLinks.map((link, i) => (
                    <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                      <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                        {toolText.popularConversions?.[i] ?? link.title}
                      </Link>
                    </li>
                  ))
                  : tool.id === "percentagecalculator"
                    ? percentageCalculatorLinks.map((link) => (
                      <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                        <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                          {link.title}
                        </Link>
                      </li>
                    ))
                    : tool.id === "qrgenerator"
                      ? qrGeneratorLinks.map((link) => (
                        <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                          <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                            {link.title}
                          </Link>
                        </li>
                      ))
                      : tool.id === "imagecompressor"
                        ? imageCompressorLinks.map((link) => (
                          <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                            <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                              {link.title}
                            </Link>
                          </li>
                        ))
                        : tool.id === "pixelconverter"
                          ? pixelConverterLinks.map((link) => (
                          <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                            <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                              {link.title}
                            </Link>
                          </li>
                        ))
                        : tool.id === "backgroundremover"
                          ? backgroundRemoverLinks.map((link) => (
                            <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                              <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                                {link.title}
                              </Link>
                            </li>
                          ))
                        : tool.id === "base64encoder"
                        ? base64EncoderLinks.map((link) => (
                          <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                            <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                              {link.title}
                            </Link>
                          </li>
                        ))
                        : tool.id === "jsonformatter"
                          ? jsonFormatterLinks.map((link) => (
                            <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                              <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                                {link.title}
                              </Link>
                            </li>
                          ))
                          : tool.id === "barcodegenerator"
                            ? barcodeGeneratorLinks.map((link) => (
                              <li key={link.slug} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                                <Link href={link.href} style={{ display: "block", color: "inherit" }}>
                                  {link.title}
                                </Link>
                              </li>
                            ))
                  : popularConversions.map((conv, i) => (
                    <li key={i} style={{ padding: "0.75rem 1rem", background: "var(--surface-soft)", borderRadius: "10px", color: "var(--text-soft)", border: "1px solid var(--line)" }}>
                      {conv}
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {toolText.faq && toolText.faq.length > 0 && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" }}>{common.faqTitle}</h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {toolText.faq.map((item, i) => (
                  <div key={i} className="faq-item" style={{ padding: "1.5rem", background: "var(--accent-soft)", borderRadius: "16px" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--accent)" }}>Q: {item.q}</h3>
                    <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "var(--text)", margin: 0 }}>A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {toolText.relatedTools && (
            <div className="content-block" style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{common.relatedToolsTitle}</h2>
              {relatedToolHref ? (
                <Link
                  href={relatedToolHref}
                  className="tool-button secondary"
                  style={{ display: "inline-flex", padding: "1rem 2rem", borderRadius: "15px" }}
                >
                  {toolText.relatedTools}
                </Link>
              ) : (
                <span
                  className="tool-button secondary"
                  style={{ display: "inline-flex", padding: "1rem 2rem", borderRadius: "15px" }}
                >
                  {toolText.relatedTools}
                </span>
              )}
            </div>
          )}

          <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "3rem 0" }} />

          {seo && (
            <div className="tool-seo-rich-content" style={{ marginBottom: "2rem", padding: "1.5rem", background: "var(--panel-glass)", borderRadius: "16px", border: "1px solid var(--panel-border)" }}>
              <h2 style={{ fontSize: "1.1rem", color: "var(--accent)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{common.howItWorks}</h2>
              <p style={{ lineHeight: "1.7", color: "var(--muted)", fontSize: "1rem" }}>
                {seo}
              </p>
            </div>
          )}

        </section>
      </main>
    </div>
  );
}
