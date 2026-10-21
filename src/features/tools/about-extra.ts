import type { Locale } from "@/lib/site";

export type AboutExtra = {
  operatorHeading: string;
  operatorBody: string;
  operatorNameLabel: string;
  dataHeading: string;
  dataItems: [string, string, string, string];
  qualityHeading: string;
};

/** Verified against the implementations: see src/app/api/* and each tool's fetch calls. */
export const ABOUT_EXTRA: Record<Locale, AboutExtra> = {
  en: {
    operatorHeading: "Who runs Apps24",
    operatorBody: "Apps24 is published at apps24.io. The tools, guides and policies are written and maintained by the site operator, and corrections are handled through support@apps24.io.",
    operatorNameLabel: "Operator",
    dataHeading: "Where your data goes",
    dataItems: [
      "Browser only: ruler, character counter, JSON formatter, case converter, password generator, Base64, color converter, unit and percentage calculators, text comparison, dummy text, image compressor, pixel converter, clock, countdown, screen lamp and signboard.",
      "Background remover: the image is processed in your browser. The AI model file is downloaded from a public model host the first time you use it.",
      "QR code and barcode generators: the text you enter is sent to the Apps24 server so it can draw the image.",
      "Live-data tools (IP lookup, currency converter, outdoor health index): the request goes to the third-party providers named in the Privacy Policy. No file is uploaded.",
    ],
    qualityHeading: "How we check and correct",
  },
  ko: {
    operatorHeading: "Apps24 운영 정보",
    operatorBody: "Apps24는 apps24.io에서 운영됩니다. 도구, 가이드, 정책 문서는 사이트 운영자가 작성·관리하며 오류 정정은 support@apps24.io로 접수합니다.",
    operatorNameLabel: "운영자",
    dataHeading: "입력한 데이터가 가는 곳",
    dataItems: [
      "브라우저에서만 처리: 자, 글자 수 세기, JSON 포맷터, 대소문자 변환, 비밀번호 생성기, Base64, 색상 변환, 단위·퍼센트 계산기, 텍스트 비교, 더미 텍스트, 이미지 압축, 픽셀 변환, 시계, 카운트다운, 스크린 램프, 전광판.",
      "배경 제거: 이미지는 브라우저에서 처리됩니다. AI 모델 파일은 처음 사용할 때 공개 모델 호스트에서 내려받습니다.",
      "QR 코드·바코드 생성기: 입력한 텍스트가 이미지를 그리기 위해 Apps24 서버로 전송됩니다.",
      "실시간 데이터 도구(IP 조회, 환율 변환기, 외출 건강 지수): 개인정보처리방침에 적힌 외부 제공업체로 요청이 전송됩니다. 파일은 업로드되지 않습니다.",
    ],
    qualityHeading: "검증과 정정 방법",
  },
  fr: {
    operatorHeading: "Qui exploite Apps24",
    operatorBody: "Apps24 est publié sur apps24.io. Les outils, guides et règles sont rédigés et tenus à jour par l'exploitant du site ; les corrections passent par support@apps24.io.",
    operatorNameLabel: "Exploitant",
    dataHeading: "Où vont vos données",
    dataItems: [
      "Dans le navigateur uniquement : règle, compteur de caractères, formateur JSON, changement de casse, générateur de mots de passe, Base64, convertisseur de couleurs, calculatrices d'unités et de pourcentages, comparaison de textes, faux texte, compresseur d'images, convertisseur de pixels, horloge, minuteur, lampe d'écran et enseigne.",
      "Suppression d'arrière-plan : l'image est traitée dans votre navigateur. Le fichier du modèle d'IA est téléchargé depuis un hébergeur public de modèles à la première utilisation.",
      "Générateurs de QR codes et de codes-barres : le texte saisi est envoyé au serveur d'Apps24 pour dessiner l'image.",
      "Outils de données en direct (recherche d'IP, convertisseur de devises, indice santé en extérieur) : la requête est envoyée aux fournisseurs tiers indiqués dans la politique de confidentialité. Aucun fichier n'est envoyé.",
    ],
    qualityHeading: "Comment nous vérifions et corrigeons",
  },
  ja: {
    operatorHeading: "Apps24の運営について",
    operatorBody: "Apps24はapps24.ioで公開されています。ツール、ガイド、各種ポリシーはサイト運営者が作成・管理し、誤りの訂正はsupport@apps24.ioで受け付けます。",
    operatorNameLabel: "運営者",
    dataHeading: "入力データの送信先",
    dataItems: [
      "ブラウザ内のみで処理:定規、文字数カウント、JSONフォーマッター、大文字小文字変換、パスワード生成、Base64、色コード変換、単位・パーセント計算、テキスト比較、ダミーテキスト、画像圧縮、ピクセル変換、時計、カウントダウン、スクリーンランプ、電光掲示板。",
      "背景除去:画像はブラウザ内で処理されます。AIモデルのファイルは初回利用時に公開モデルホストからダウンロードされます。",
      "QRコード・バーコード生成:画像を描画するため、入力したテキストがApps24のサーバーに送信されます。",
      "ライブデータ系ツール(IP検索、為替換算、外出健康指数):プライバシーポリシーに記載の外部事業者へリクエストが送られます。ファイルはアップロードされません。",
    ],
    qualityHeading: "確認と訂正の方法",
  },
  zh: {
    operatorHeading: "Apps24 的运营方",
    operatorBody: "Apps24 发布于 apps24.io。工具、指南和政策由网站运营者撰写并维护,错误更正请发送至 support@apps24.io。",
    operatorNameLabel: "运营者",
    dataHeading: "您的数据去向",
    dataItems: [
      "仅在浏览器中处理:尺子、字数统计、JSON 格式化、大小写转换、密码生成器、Base64、颜色转换、单位与百分比计算器、文本对比、占位文本、图片压缩、像素转换、时钟、倒计时、屏幕灯和电子招牌。",
      "背景移除:图片在浏览器中处理。AI 模型文件会在首次使用时从公开的模型托管服务下载。",
      "二维码和条形码生成器:您输入的文本会发送到 Apps24 服务器以绘制图像。",
      "实时数据工具(IP 查询、汇率换算、外出健康指数):请求会发送到隐私政策中列出的第三方服务商。不会上传任何文件。",
    ],
    qualityHeading: "我们如何核对与更正",
  },
  "zh-TW": {
    operatorHeading: "Apps24 的營運方",
    operatorBody: "Apps24 發布於 apps24.io。工具、指南與政策由網站營運者撰寫並維護,錯誤更正請寄至 support@apps24.io。",
    operatorNameLabel: "營運者",
    dataHeading: "您的資料去向",
    dataItems: [
      "僅在瀏覽器中處理:尺規、字數統計、JSON 格式化、大小寫轉換、密碼產生器、Base64、色彩轉換、單位與百分比計算器、文字比對、佔位文字、圖片壓縮、像素轉換、時鐘、倒數計時、螢幕燈與電子看板。",
      "去背:圖片在瀏覽器中處理。AI 模型檔案會在首次使用時從公開的模型代管服務下載。",
      "QR Code 與條碼產生器:您輸入的文字會傳送到 Apps24 伺服器以繪製圖像。",
      "即時資料工具(IP 查詢、匯率換算、外出健康指數):請求會送往隱私權政策中列出的第三方服務商。不會上傳任何檔案。",
    ],
    qualityHeading: "我們如何查核與更正",
  },
  pt: {
    operatorHeading: "Quem opera o Apps24",
    operatorBody: "O Apps24 é publicado em apps24.io. As ferramentas, os guias e as políticas são escritos e mantidos pelo operador do site, e as correções são recebidas em support@apps24.io.",
    operatorNameLabel: "Operador",
    dataHeading: "Para onde vão os seus dados",
    dataItems: [
      "Somente no navegador: régua, contador de caracteres, formatador de JSON, conversor de maiúsculas e minúsculas, gerador de senhas, Base64, conversor de cores, calculadoras de unidades e de porcentagem, comparação de textos, texto fictício, compressor de imagens, conversor de pixels, relógio, contagem regressiva, lâmpada de tela e letreiro.",
      "Remoção de fundo: a imagem é processada no navegador. O arquivo do modelo de IA é baixado de um host público de modelos no primeiro uso.",
      "Geradores de QR code e de código de barras: o texto digitado é enviado ao servidor do Apps24 para desenhar a imagem.",
      "Ferramentas de dados em tempo real (consulta de IP, conversor de moedas, índice de saúde ao ar livre): a solicitação vai para os provedores terceiros citados na Política de Privacidade. Nenhum arquivo é enviado.",
    ],
    qualityHeading: "Como verificamos e corrigimos",
  },
  es: {
    operatorHeading: "Quién gestiona Apps24",
    operatorBody: "Apps24 se publica en apps24.io. Las herramientas, guías y políticas las redacta y mantiene el operador del sitio, y las correcciones se atienden en support@apps24.io.",
    operatorNameLabel: "Operador",
    dataHeading: "Adónde van tus datos",
    dataItems: [
      "Solo en el navegador: regla, contador de caracteres, formateador de JSON, cambio de mayúsculas, generador de contraseñas, Base64, conversor de colores, calculadoras de unidades y porcentajes, comparador de textos, texto de relleno, compresor de imágenes, conversor de píxeles, reloj, cuenta atrás, lámpara de pantalla y letrero.",
      "Eliminación de fondo: la imagen se procesa en tu navegador. El archivo del modelo de IA se descarga de un alojamiento público de modelos la primera vez que lo usas.",
      "Generadores de códigos QR y de barras: el texto que escribes se envía al servidor de Apps24 para dibujar la imagen.",
      "Herramientas de datos en vivo (consulta de IP, conversor de divisas, índice de salud al aire libre): la solicitud va a los proveedores externos indicados en la Política de privacidad. No se sube ningún archivo.",
    ],
    qualityHeading: "Cómo comprobamos y corregimos",
  },
  de: {
    operatorHeading: "Wer Apps24 betreibt",
    operatorBody: "Apps24 wird unter apps24.io veröffentlicht. Tools, Ratgeber und Richtlinien werden vom Betreiber der Website verfasst und gepflegt; Korrekturen nehmen wir unter support@apps24.io entgegen.",
    operatorNameLabel: "Betreiber",
    dataHeading: "Wohin Ihre Daten gehen",
    dataItems: [
      "Nur im Browser: Lineal, Zeichenzähler, JSON-Formatierer, Groß-/Kleinschreibung, Passwortgenerator, Base64, Farbumrechner, Einheiten- und Prozentrechner, Textvergleich, Blindtext, Bildkomprimierung, Pixelrechner, Uhr, Countdown, Bildschirmlampe und Laufschrift-Anzeige.",
      "Hintergrundentfernung: Das Bild wird in Ihrem Browser verarbeitet. Die KI-Modelldatei wird bei der ersten Nutzung von einem öffentlichen Modell-Host geladen.",
      "QR-Code- und Barcode-Generatoren: Der eingegebene Text wird an den Apps24-Server gesendet, damit das Bild gezeichnet werden kann.",
      "Live-Daten-Tools (IP-Abfrage, Währungsrechner, Outdoor-Gesundheitsindex): Die Anfrage geht an die in der Datenschutzerklärung genannten Drittanbieter. Es werden keine Dateien hochgeladen.",
    ],
    qualityHeading: "Wie wir prüfen und korrigieren",
  },
  ar: {
    operatorHeading: "من يدير Apps24",
    operatorBody: "يُنشر Apps24 على apps24.io. يكتب مشغّل الموقع الأدوات والأدلة والسياسات ويتولى صيانتها، وتُعالَج التصحيحات عبر support@apps24.io.",
    operatorNameLabel: "المشغّل",
    dataHeading: "إلى أين تذهب بياناتك",
    dataItems: [
      "داخل المتصفح فقط: المسطرة، عدّاد الأحرف، منسّق JSON، تغيير حالة الأحرف، مولّد كلمات المرور، Base64، محوّل الألوان، حاسبات الوحدات والنسب المئوية، مقارنة النصوص، النص التجريبي، ضاغط الصور، محوّل البكسل، الساعة، العدّ التنازلي، مصباح الشاشة ولوحة الإعلانات.",
      "إزالة الخلفية: تُعالَج الصورة داخل متصفحك. يُنزَّل ملف نموذج الذكاء الاصطناعي من مستضيف نماذج عام عند أول استخدام.",
      "مولّدا رمز QR والباركود: يُرسَل النص الذي تدخله إلى خادم Apps24 لرسم الصورة.",
      "أدوات البيانات المباشرة (البحث عن IP، محوّل العملات، مؤشر الصحة في الهواء الطلق): يُرسَل الطلب إلى مزوّدين خارجيين مذكورين في سياسة الخصوصية. لا تُرفع أي ملفات.",
    ],
    qualityHeading: "كيف نتحقق ونصحّح",
  },
};
