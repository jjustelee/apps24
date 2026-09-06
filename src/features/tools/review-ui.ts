import type { Locale } from "@/lib/site";

type ReviewUi = {
  words: string;
  countingMethod: string;
  fallbackMethod: string;
  jsonValid: string;
  jsonInvalid: string;
  jsonHint: string;
  rulerAdjust: string;
  rulerMatch: string;
  rulerStatus: string;
  rulerUncalibrated: string;
  rulerNote: string;
  rulerExample: string;
};

export const REVIEW_UI: Record<Locale, ReviewUi> = {
  "en": {
    "words": "Words",
    "countingMethod": "Characters are counted as visible Unicode characters; spaces and line breaks count too. Words follow language-aware segmentation. Other editors may use different rules.",
    "fallbackMethod": "This browser uses a simpler fallback: Unicode code points for characters and whitespace-separated words.",
    "jsonValid": "Valid JSON",
    "jsonInvalid": "Invalid JSON",
    "jsonHint": "Validation checks JSON syntax, not required fields or a schema. Fix the reported error and validate again.",
    "rulerAdjust": "Match the card",
    "rulerMatch": "Place a standard payment card over the outline. Adjust the width until both edges match, then confirm. No photo or card details are needed. If the whole card does not fit, turn your phone to landscape or use a larger screen.",
    "rulerStatus": "Calibration confirmed",
    "rulerUncalibrated": "Calibration required",
    "rulerNote": "Recalibrate after browser zoom, changing displays or rotating the device. Measurements are estimates; use a physical ruler when precision matters.",
    "rulerExample": "A 171 px card outline gives 171 ÷ 8.56 ≈ 19.98 px/cm. A 5 cm length then spans about 99.88 px."
  },
  "ko": {
    "words": "단어 수",
    "countingMethod": "글자 수는 눈에 보이는 유니코드 문자 단위이며 공백과 줄바꿈도 포함합니다. 단어는 언어별 경계를 기준으로 셉니다. 다른 편집기의 집계 기준과 다를 수 있습니다.",
    "fallbackMethod": "이 브라우저에서는 글자를 유니코드 코드 포인트로, 단어를 공백 기준으로 나누어 계산합니다.",
    "jsonValid": "유효한 JSON입니다",
    "jsonInvalid": "유효하지 않은 JSON입니다",
    "jsonHint": "JSON 문법만 검사합니다. 필수 항목이나 스키마는 검사하지 않습니다. 표시된 오류를 수정한 뒤 다시 검사하세요.",
    "rulerAdjust": "카드 크기 맞추기",
    "rulerMatch": "일반 결제 카드를 화면의 윤곽선에 대고 양쪽 끝이 일치하도록 너비를 조절한 뒤 확인하세요. 사진이나 카드 정보를 입력할 필요는 없습니다. 카드 전체가 화면에 들어오지 않으면 휴대폰을 가로로 돌리거나 더 큰 화면을 사용하세요.",
    "rulerStatus": "보정 확인됨",
    "rulerUncalibrated": "보정이 필요합니다",
    "rulerNote": "브라우저 확대, 화면 변경, 기기 회전 후 다시 보정하세요. 측정값은 참고용이며 정밀한 작업에는 실제 자를 사용하세요.",
    "rulerExample": "카드 윤곽선이 171 px이면 171 ÷ 8.56 ≈ 19.98 px/cm입니다. 5 cm 길이는 약 99.88 px로 표시됩니다."
  },
  "fr": {
    "words": "Mots",
    "countingMethod": "Les caractères sont comptés par unités Unicode visibles, espaces et sauts de ligne compris. Les mots suivent les frontières linguistiques. Les règles peuvent différer selon l’éditeur.",
    "fallbackMethod": "Ce navigateur compte les points de code Unicode et sépare les mots par les espaces.",
    "jsonValid": "JSON valide",
    "jsonInvalid": "JSON invalide",
    "jsonHint": "La validation vérifie la syntaxe JSON, pas les champs obligatoires ni un schéma. Corrigez l’erreur indiquée, puis relancez la validation.",
    "rulerAdjust": "Ajuster à la carte",
    "rulerMatch": "Posez une carte de paiement standard sur le contour. Ajustez la largeur jusqu’à aligner les deux bords, puis confirmez. Aucune photo ni donnée de carte n’est nécessaire. Si la carte entière ne tient pas, tournez le téléphone en paysage ou utilisez un écran plus grand.",
    "rulerStatus": "Étalonnage confirmé",
    "rulerUncalibrated": "Étalonnage nécessaire",
    "rulerNote": "Réétalonnez après un zoom, un changement d’écran ou une rotation. Les mesures sont indicatives ; utilisez une règle physique pour les travaux précis.",
    "rulerExample": "Un contour de 171 px donne 171 ÷ 8,56 ≈ 19,98 px/cm. Une longueur de 5 cm occupe alors environ 99,88 px."
  },
  "de": {
    "words": "Wörter",
    "countingMethod": "Zeichen werden als sichtbare Unicode-Zeichen gezählt, einschließlich Leerzeichen und Zeilenumbrüchen. Wörter werden sprachabhängig getrennt. Andere Programme können anders zählen.",
    "fallbackMethod": "Dieser Browser zählt Unicode-Codepunkte und trennt Wörter an Leerraum.",
    "jsonValid": "Gültiges JSON",
    "jsonInvalid": "Ungültiges JSON",
    "jsonHint": "Die Prüfung betrifft die JSON-Syntax, nicht Pflichtfelder oder ein Schema. Beheben Sie den angezeigten Fehler und prüfen Sie erneut.",
    "rulerAdjust": "An Karte anpassen",
    "rulerMatch": "Legen Sie eine übliche Zahlungskarte auf den Umriss. Passen Sie die Breite an beide Kanten an und bestätigen Sie. Kein Foto und keine Kartendaten nötig. Passt die ganze Karte nicht auf den Bildschirm, drehen Sie das Handy ins Querformat oder nutzen Sie einen größeren Bildschirm.",
    "rulerStatus": "Kalibrierung bestätigt",
    "rulerUncalibrated": "Kalibrierung erforderlich",
    "rulerNote": "Nach Zoom, Bildschirmwechsel oder Drehung neu kalibrieren. Messwerte sind Schätzungen; für Präzisionsarbeit ein echtes Lineal verwenden.",
    "rulerExample": "Ein 171 px breiter Umriss ergibt 171 ÷ 8,56 ≈ 19,98 px/cm. 5 cm entsprechen dann etwa 99,88 px."
  },
  "es": {
    "words": "Palabras",
    "countingMethod": "Los caracteres se cuentan como unidades Unicode visibles, incluidos espacios y saltos de línea. Las palabras se segmentan según el idioma. Otros editores pueden usar reglas distintas.",
    "fallbackMethod": "Este navegador cuenta puntos de código Unicode y separa las palabras por espacios.",
    "jsonValid": "JSON válido",
    "jsonInvalid": "JSON no válido",
    "jsonHint": "La validación comprueba la sintaxis JSON, no los campos obligatorios ni un esquema. Corrige el error indicado y vuelve a validar.",
    "rulerAdjust": "Ajustar a la tarjeta",
    "rulerMatch": "Coloca una tarjeta de pago estándar sobre el contorno. Ajusta el ancho hasta alinear ambos bordes y confirma. No necesitas fotos ni datos de la tarjeta. Si no cabe toda la tarjeta, gira el teléfono a horizontal o usa una pantalla mayor.",
    "rulerStatus": "Calibración confirmada",
    "rulerUncalibrated": "Calibración necesaria",
    "rulerNote": "Vuelve a calibrar al cambiar el zoom, la pantalla o la orientación. Las medidas son aproximadas; usa una regla física para trabajos precisos.",
    "rulerExample": "Un contorno de 171 px da 171 ÷ 8,56 ≈ 19,98 px/cm. Una longitud de 5 cm ocupa unos 99,88 px."
  },
  "pt": {
    "words": "Palavras",
    "countingMethod": "Os caracteres são contados como unidades Unicode visíveis, incluindo espaços e quebras de linha. As palavras são segmentadas conforme o idioma. Outros editores podem usar regras diferentes.",
    "fallbackMethod": "Este navegador conta pontos de código Unicode e separa palavras por espaços.",
    "jsonValid": "JSON válido",
    "jsonInvalid": "JSON inválido",
    "jsonHint": "A validação verifica a sintaxe JSON, não campos obrigatórios ou um esquema. Corrija o erro indicado e valide novamente.",
    "rulerAdjust": "Ajustar ao cartão",
    "rulerMatch": "Coloque um cartão de pagamento padrão sobre o contorno. Ajuste a largura até alinhar as duas bordas e confirme. Não é preciso enviar foto ou dados do cartão. Se o cartão inteiro não couber, gire o celular para a horizontal ou use uma tela maior.",
    "rulerStatus": "Calibração confirmada",
    "rulerUncalibrated": "Calibração necessária",
    "rulerNote": "Calibre novamente após mudar o zoom, a tela ou a orientação. As medidas são aproximadas; use uma régua física para trabalhos precisos.",
    "rulerExample": "Um contorno de 171 px resulta em 171 ÷ 8,56 ≈ 19,98 px/cm. Um comprimento de 5 cm ocupa cerca de 99,88 px."
  },
  "ja": {
    "words": "単語数",
    "countingMethod": "文字数は見た目上のUnicode文字単位で数え、空白や改行も含みます。単語は言語ごとの境界で区切ります。他の編集ソフトとは集計方法が異なる場合があります。",
    "fallbackMethod": "このブラウザではUnicodeコードポイントで文字を数え、空白で単語を区切ります。",
    "jsonValid": "有効なJSONです",
    "jsonInvalid": "無効なJSONです",
    "jsonHint": "JSON構文のみを検証します。必須項目やスキーマは検証しません。表示されたエラーを修正して再度検証してください。",
    "rulerAdjust": "カードに合わせる",
    "rulerMatch": "標準サイズの決済カードを画面の枠に重ね、両端が一致するように幅を調整して確定してください。写真やカード情報は不要です。 カード全体が収まらない場合は、端末を横向きにするか大きな画面を使ってください。",
    "rulerStatus": "補正を確認しました",
    "rulerUncalibrated": "補正が必要です",
    "rulerNote": "ズーム、画面変更、端末の回転後は再補正してください。測定値は目安です。精密な作業には実物の定規を使ってください。",
    "rulerExample": "枠の幅が171 pxの場合、171 ÷ 8.56 ≈ 19.98 px/cmとなり、5 cmは約99.88 pxで表示されます。"
  },
  "zh": {
    "words": "词数",
    "countingMethod": "字符按可见的 Unicode 字符单元统计，包括空格和换行。词语按语言边界划分，不同编辑器的统计规则可能不同。",
    "fallbackMethod": "此浏览器按 Unicode 码点统计字符，并按空白划分词语。",
    "jsonValid": "JSON 有效",
    "jsonInvalid": "JSON 无效",
    "jsonHint": "仅验证 JSON 语法，不检查必填字段或结构规范。请修复提示的错误后重新验证。",
    "rulerAdjust": "匹配卡片大小",
    "rulerMatch": "将标准支付卡放在屏幕轮廓上，调整宽度直到两侧边缘对齐，再确认。无需照片或卡片信息。 如果屏幕放不下整张卡片，请将手机转为横屏或使用更大的屏幕。",
    "rulerStatus": "已确认校准",
    "rulerUncalibrated": "需要校准",
    "rulerNote": "调整浏览器缩放、更换屏幕或旋转设备后请重新校准。测量仅供参考，精密工作请使用实体尺。",
    "rulerExample": "轮廓宽度为 171 px 时，171 ÷ 8.56 ≈ 19.98 px/cm，5 cm 的长度约占 99.88 px。"
  },
  "zh-TW": {
    "words": "詞數",
    "countingMethod": "字元依可見的 Unicode 字元單位計算，包含空白與換行。詞語依語言邊界切分，不同編輯器的統計規則可能不同。",
    "fallbackMethod": "此瀏覽器依 Unicode 碼位計算字元，並以空白切分詞語。",
    "jsonValid": "JSON 有效",
    "jsonInvalid": "JSON 無效",
    "jsonHint": "僅驗證 JSON 語法，不檢查必填欄位或結構規範。請修正提示的錯誤後重新驗證。",
    "rulerAdjust": "配合卡片大小",
    "rulerMatch": "將標準支付卡放在螢幕輪廓上，調整寬度直到兩側邊緣對齊，再確認。不需要照片或卡片資訊。 如果螢幕放不下整張卡片，請將手機轉為橫向或使用更大的螢幕。",
    "rulerStatus": "已確認校準",
    "rulerUncalibrated": "需要校準",
    "rulerNote": "調整瀏覽器縮放、更換螢幕或旋轉裝置後請重新校準。測量僅供參考，精密工作請使用實體尺。",
    "rulerExample": "輪廓寬度為 171 px 時，171 ÷ 8.56 ≈ 19.98 px/cm，5 cm 的長度約佔 99.88 px。"
  },
  "ar": {
    "words": "عدد الكلمات",
    "countingMethod": "تُحسب الأحرف بوحدات Unicode المرئية، بما فيها المسافات وفواصل الأسطر. وتُقسّم الكلمات حسب اللغة. قد تختلف قواعد العد في المحررات الأخرى.",
    "fallbackMethod": "يحسب هذا المتصفح نقاط Unicode ويفصل الكلمات حسب المسافات.",
    "jsonValid": "JSON صالح",
    "jsonInvalid": "JSON غير صالح",
    "jsonHint": "يفحص التحقق صياغة JSON فقط، وليس الحقول المطلوبة أو المخطط. أصلح الخطأ الظاهر ثم أعد التحقق.",
    "rulerAdjust": "مطابقة حجم البطاقة",
    "rulerMatch": "ضع بطاقة دفع قياسية فوق الإطار على الشاشة. اضبط العرض حتى تتطابق الحافتان ثم أكّد. لا حاجة إلى صورة أو بيانات البطاقة. إذا لم تتسع الشاشة للبطاقة كاملة، أدر الهاتف أفقيًا أو استخدم شاشة أكبر.",
    "rulerStatus": "تم تأكيد المعايرة",
    "rulerUncalibrated": "المعايرة مطلوبة",
    "rulerNote": "أعد المعايرة بعد تغيير التكبير أو الشاشة أو تدوير الجهاز. القياسات تقديرية؛ استخدم مسطرة فعلية للأعمال الدقيقة.",
    "rulerExample": "إذا كان عرض الإطار 171 px فإن 171 ÷ 8.56 ≈ 19.98 px/cm. ويظهر طول 5 cm بنحو 99.88 px."
  }
};
