import type { Locale } from "@/lib/site";
import type { ToolText } from "./types_locales";

type ReviewedToolId = "ruler" | "wordcounter" | "jsonformatter" | "imagecompressor" | "iplookup";
type ReviewedContent = Pick<ToolText, "description" | "longDescription" | "usageContext" | "examples" | "howToUse" | "faq" | "seo">;

const REFERENCES: Record<ReviewedToolId, Record<string, string>> = {
  "ruler": {
    "W3C: CSS absolute lengths": "https://www.w3.org/TR/css-values-4/#absolute-lengths",
    "ISO/IEC 7810: ID-1": "https://webstore.iec.ch/en/publication/11595"
  },
  "wordcounter": {
    "MDN: Intl.Segmenter": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter"
  },
  "jsonformatter": {
    "RFC 8259: JSON": "https://www.rfc-editor.org/rfc/rfc8259"
  },
  "imagecompressor": {
    "MDN: HTMLCanvasElement.toBlob": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob"
  },
  "iplookup": {
    "IPinfo API": "https://ipinfo.io/developers",
    "ipify API": "https://www.ipify.org/"
  }
};

export const REVIEWED_CONTENT: Record<Locale, Record<ReviewedToolId, ReviewedContent>> = {
  "en": {
    "ruler": {
      "description": "Measure small objects on screen after matching the ruler to a physical card. Screen measurements are approximate and require calibration.",
      "longDescription": "A CSS centimeter is not necessarily a physical centimeter on your monitor. Apps24 converts a reference card’s on-screen width into a scale: pixels per centimeter = card width in CSS pixels ÷ 8.56. The reference is an 85.60 × 53.98 mm card; a differently sized card will produce incorrect measurements.",
      "usageContext": "Use this for a quick estimate of a small object when a physical ruler is unavailable. Do not use it for manufacturing tolerances, medical measurements or other precision-critical decisions.",
      "examples": [
        "A reference width of 171 px gives about 19.98 px/cm. A 5 cm span then occupies about 99.88 px.",
        "At 1 inch = 2.54 cm, the inch scale uses the same calibration. Small divisions are decimal tenths of an inch, not sixteenths."
      ],
      "howToUse": "1. Hold a standard-size card gently against the screen without entering or uploading card details.\n2. Adjust the outline until its width matches the card, then confirm calibration.\n3. Place the object at zero and read the endpoint. Double-click the ruler to move zero.\n4. Recheck calibration after zooming, changing displays or reopening the page.",
      "faq": [
        {
          "q": "Does a saved setting guarantee accuracy?",
          "a": "No. Only the previous outline width is saved locally. Display scaling and zoom can change, so the page asks you to confirm the match again."
        },
        {
          "q": "Why does the result differ from a real ruler?",
          "a": "Card alignment, screen scaling and viewing angle introduce error. Use a physical ruler if the measurement matters."
        }
      ],
      "seo": "The ruler draws calibrated tick positions in a browser canvas. It cannot automatically determine your screen’s physical pixel density."
    },
    "wordcounter": {
      "description": "Count words and visible characters, with and without whitespace. See the counting method before using a result for a submission limit.",
      "longDescription": "The word total uses the browser’s language-aware word segmentation. Character totals use grapheme clusters: a combined accent or a joined emoji can be one visible character even when it contains several Unicode code points. The total with spaces includes spaces and line breaks; the other total excludes whitespace.",
      "usageContext": "Check a draft, caption or application response while editing. If a destination sets a strict limit, check its own counter too: it may count UTF-16 code units or bytes instead of visible characters.",
      "examples": [
        "Hello world: 2 words, 11 characters with the space, 10 without it.",
        "The combined sequence e + ◌́ is one visible character. A family emoji such as 👨‍👩‍👧‍👦 is also one grapheme cluster in supported browsers."
      ],
      "howToUse": "1. Paste or type your text; the counts update immediately.\n2. Compare word count and the two character totals.\n3. Enter a character position to highlight that character. Positions follow the same visible-character count.",
      "faq": [
        {
          "q": "Why can word counts differ between editors?",
          "a": "Editors use different rules for punctuation, numbers, hyphenated words and languages without spaces. Browser segmentation can also vary by version."
        },
        {
          "q": "Is my text uploaded?",
          "a": "This counter processes text in your browser. If language-aware segmentation is unavailable, a notice explains the simpler whitespace-based word count and code-point character count."
        }
      ],
      "seo": "Word and grapheme segmentation uses Intl.Segmenter when available. This is a writing aid, not a guarantee that every platform will accept the same length."
    },
    "jsonformatter": {
      "description": "Format JSON or check its syntax without rounding large numbers during formatting. Validation does not verify an application’s data schema.",
      "longDescription": "Formatting changes whitespace outside string values, not the data tokens. Apps24 first checks JSON syntax, then indents the original tokens instead of serializing parsed JavaScript numbers. This preserves numeric spelling, property order and duplicate property names in the formatted text.",
      "usageContext": "Use it to inspect API responses and configuration files. Syntax success only means the text is valid JSON: it does not prove that a URL works, a field is required, a value is safe or a business rule is satisfied.",
      "examples": [
        "Invalid: {\"name\":\"Apps24\",}. Remove the trailing comma: {\"name\":\"Apps24\"}.",
        "The integer 9007199254740993 remains unchanged when formatted; converting it to a JavaScript Number elsewhere may lose precision."
      ],
      "howToUse": "1. Paste JSON or load the sample.\n2. Choose validation to check syntax, or formatting to add indentation.\n3. Read the success or error message. Correct syntax errors manually; the tool does not guess missing values.",
      "faq": [
        {
          "q": "Are duplicate property names safe?",
          "a": "The formatter preserves them, but consumers may keep only the last value or reject them. Use unique names for interoperable data."
        },
        {
          "q": "Are comments and single-quoted strings accepted?",
          "a": "No. Standard JSON uses double-quoted names and strings and does not allow comments or trailing commas. JSON5 is a different format."
        }
      ],
      "seo": "Parsing checks syntax locally. Token-based formatting preserves source values, while schema and domain validation remain the responsibility of the receiving application."
    },
    "imagecompressor": {
      "description": "Resize and re-encode multiple images in your browser. Compare each result before downloading; smaller output is not guaranteed.",
      "longDescription": "Images are processed sequentially with the browser’s canvas encoder. JPG and WebP use the quality setting. PNG ignores that setting in this implementation: to reduce PNG size, reduce dimensions or choose WebP. This is not a palette-quantization or specialist lossless PNG optimizer.",
      "usageContext": "Prepare images for an upload limit or a web page. Try WebP when the destination accepts it. Keep PNG or WebP when transparency matters; exporting JPG replaces transparent areas with white.",
      "examples": [
        "At 50% scale, a 2000 × 1000 image becomes 1000 × 500: one quarter of the pixels, not necessarily one quarter of the file size.",
        "A 1 MB input and a 1.1 MB output represent −10% savings: the result grew. Keep the original or adjust the settings."
      ],
      "howToUse": "1. Select one or several images.\n2. Set output format, dimensions and, for JPG/WebP, quality.\n3. Wait for processing, inspect each file’s preview and byte size, then download the desired results.",
      "faq": [
        {
          "q": "Does lower quality always give a smaller file?",
          "a": "Not necessarily compared with the original. Existing compression, detail and encoder behavior affect size. PNG quality is disabled because this encoder ignores it."
        },
        {
          "q": "Are originals changed or uploaded?",
          "a": "The tool reads local files and creates new results in the browser; originals are not overwritten. Temporary preview URLs are released when files are replaced or the tool is closed."
        }
      ],
      "seo": "Canvas re-encoding can change image metadata and cannot preserve an animation as a complete animated file. Keep the original for archival or editing work."
    },
    "iplookup": {
      "description": "See the public IP observed for your connection and available approximate network details. Missing location data is not proof of a connection problem.",
      "longDescription": "The tool first uses the public client address reported to this site by its hosting proxy. If that address is unavailable, your browser requests an address from ipify. IPinfo supplies available network and approximate location details. If IPinfo fails, the observed IP remains visible and missing fields are marked unavailable.",
      "usageContext": "Compare the public address before and after switching Wi-Fi, mobile data or a VPN. An address can be shared by many devices through NAT, so it is not a unique device identifier.",
      "examples": [
        "A city supplied by an IP database may refer to the provider’s network rather than your home. It is not GPS location.",
        "An IPv4 result describes this lookup connection. It does not establish that your device lacks IPv6."
      ],
      "howToUse": "1. Wait for the lookup to finish.\n2. Read the public IP and available details; copy the address if needed.\n3. After changing networks, refresh and compare. Browser and operating-system labels are inferred from browser information.",
      "faq": [
        {
          "q": "Can this tool confirm that a VPN is active?",
          "a": "No. A different IP or timezone is not sufficient proof. The page does not label a VPN as detected."
        },
        {
          "q": "Which information goes to external services?",
          "a": "IPinfo receives the queried public IP. The browser contacts ipify only for the fallback lookup. Never treat the returned city or provider name as a verified personal location."
        }
      ],
      "seo": "Only the protocol used by the observed address is shown. The page does not invent a hostname, infer both address families or substitute the hosting server’s IP."
    }
  },
  "ko": {
    "ruler": {
      "description": "실물 카드에 맞춰 보정한 뒤 화면에서 작은 물체의 길이를 추정하세요. 화면 측정에는 오차가 있으므로 먼저 보정이 필요합니다.",
      "longDescription": "화면의 CSS 1cm가 실제 1cm와 일치하는 것은 아닙니다. Apps24는 기준 카드의 화면 너비를 8.56으로 나눠 1cm당 픽셀 수를 계산합니다. 기준은 85.60 × 53.98mm 크기의 카드이며, 다른 크기의 카드를 사용하면 측정값이 틀려집니다.",
      "usageContext": "실물 자가 없을 때 작은 물체의 대략적인 크기를 확인하는 용도입니다. 제작 공차, 의료 측정 등 정밀도가 중요한 판단에는 사용하지 마세요.",
      "examples": [
        "카드 너비를 171px로 맞추면 약 19.98px/cm가 됩니다. 이때 5cm 구간은 약 99.88px입니다.",
        "1인치는 2.54cm입니다. 인치 눈금의 작은 칸은 1/10인치이며, 일반 실물 자의 1/16인치 눈금과 다릅니다."
      ],
      "howToUse": "1. 규격 카드를 화면에 가볍게 대세요. 카드 번호를 입력하거나 사진을 올릴 필요는 없습니다.\n2. 윤곽선 너비를 실제 카드에 맞춘 뒤 보정을 확인하세요.\n3. 물체를 0에 맞춰 끝점을 읽으세요. 자를 두 번 클릭하면 0의 위치를 옮길 수 있습니다.\n4. 확대·축소, 모니터 변경, 페이지 재접속 후 다시 확인하세요.",
      "faq": [
        {
          "q": "저장된 설정을 쓰면 정확한가요?",
          "a": "이전 윤곽선 너비만 브라우저에 저장됩니다. 화면 배율이 바뀔 수 있으므로 현재 화면에서 다시 맞는지 확인해야 합니다."
        },
        {
          "q": "실물 자와 결과가 다른 이유는 무엇인가요?",
          "a": "카드 정렬, 화면 배율, 보는 각도에 따라 오차가 생깁니다. 정확한 길이가 필요하면 실물 자를 사용하세요."
        }
      ],
      "seo": "브라우저 캔버스에 보정 비율로 눈금을 그립니다. 화면의 실제 픽셀 밀도를 자동으로 알아내거나 물리적인 측정 정확도를 보장하지는 않습니다."
    },
    "wordcounter": {
      "description": "단어 수와 공백 포함·제외 글자 수를 확인하세요. 제출 제한에 사용할 때는 아래 집계 방식도 확인해 주세요.",
      "longDescription": "단어 수는 브라우저의 언어별 단어 분리 기능으로 계산합니다. 글자 수는 화면에 보이는 문자 단위인 그래핌을 사용하므로, 결합 악센트나 여러 문자가 합쳐진 이모지가 한 글자로 셀 수 있습니다. 공백 포함 수에는 띄어쓰기와 줄바꿈이 들어가며, 공백 제외 수에서는 공백 문자를 뺍니다.",
      "usageContext": "자기소개서, 게시물, 원고를 작성하며 길이를 확인할 때 유용합니다. 제출처가 UTF-16 코드 단위나 바이트로 제한한다면 결과가 다를 수 있으므로 최종 제출 화면의 집계도 확인하세요.",
      "examples": [
        "Hello world는 단어 2개, 공백 포함 11글자, 공백 제외 10글자입니다.",
        "e와 결합 악센트 ◌́를 합친 문자는 한 글자입니다. 👨‍👩‍👧‍👦 같은 가족 이모지도 지원 브라우저에서는 하나의 그래핌입니다."
      ],
      "howToUse": "1. 텍스트를 입력하거나 붙여 넣으면 즉시 집계됩니다.\n2. 단어 수와 공백 포함·제외 글자 수를 비교하세요.\n3. 글자 위치를 입력하면 해당 글자 하나를 강조합니다. 위치도 같은 그래핌 기준을 사용합니다.",
      "faq": [
        {
          "q": "문서 편집기와 단어 수가 다른 이유는 무엇인가요?",
          "a": "문장부호, 숫자, 하이픈, 띄어쓰기가 없는 언어를 나누는 규칙이 다릅니다. 브라우저 버전에 따른 차이도 생길 수 있습니다."
        },
        {
          "q": "입력한 글이 서버로 전송되나요?",
          "a": "이 도구는 브라우저에서 텍스트를 집계합니다. 언어별 분리 기능을 지원하지 않으면 공백 기준 단어 수와 코드 포인트 기준 글자 수를 사용한다는 안내를 표시합니다."
        }
      ],
      "seo": "Intl.Segmenter가 지원되면 언어별 단어와 그래핌을 분리합니다. 글쓰기 보조 도구이며, 모든 플랫폼의 글자 제한 기준과 같다는 뜻은 아닙니다."
    },
    "jsonformatter": {
      "description": "JSON 문법을 검사하고 큰 숫자를 바꾸지 않고 들여쓰기를 정리합니다. 문법 검사는 데이터 스키마 검증과 다릅니다.",
      "longDescription": "포맷팅은 문자열 밖의 공백을 정리하며 데이터 토큰을 바꾸지 않습니다. 문법을 먼저 확인한 뒤 원문 토큰에 들여쓰기를 적용하므로 큰 숫자 표기, 속성 순서, 중복된 속성 이름을 결과에 유지합니다.",
      "usageContext": "API 응답이나 설정 파일을 읽기 쉽게 확인할 때 사용하세요. 문법이 올바르다는 결과는 필수 항목, 실제로 작동하는 URL, 보안, 업무 규칙까지 검증했다는 의미가 아닙니다.",
      "examples": [
        "{\"name\":\"Apps24\",}는 마지막 쉼표 때문에 잘못된 JSON입니다. {\"name\":\"Apps24\"}로 고칠 수 있습니다.",
        "9007199254740993은 정리 후에도 그대로 유지됩니다. 다만 다른 프로그램에서 JavaScript Number로 변환하면 정밀도가 손실될 수 있습니다."
      ],
      "howToUse": "1. JSON을 붙여 넣거나 예시를 불러오세요.\n2. 검증으로 문법을 확인하거나 포맷팅으로 들여쓰기를 정리하세요.\n3. 성공 또는 오류 안내를 확인하세요. 누락된 값은 추측해서 채우지 않으므로 직접 수정해야 합니다.",
      "faq": [
        {
          "q": "속성 이름이 중복되어도 안전한가요?",
          "a": "원문에는 유지하지만, 사용하는 프로그램이 마지막 값만 읽거나 오류로 처리할 수 있습니다. 호환성을 위해 속성 이름은 중복되지 않게 작성하세요."
        },
        {
          "q": "주석이나 작은따옴표를 사용할 수 있나요?",
          "a": "표준 JSON은 속성 이름과 문자열에 큰따옴표를 사용하며, 주석과 마지막 쉼표를 허용하지 않습니다. JSON5는 별도 형식입니다."
        }
      ],
      "seo": "문법 검사는 로컬에서 수행합니다. 토큰 기반 포맷팅은 원문의 값을 보존하며, 스키마와 업무 규칙은 데이터를 사용하는 프로그램에서 별도로 검증해야 합니다."
    },
    "imagecompressor": {
      "description": "여러 이미지를 브라우저에서 크기 조정하고 다시 저장합니다. 다운로드 전에 파일별 결과를 확인하세요. 용량 감소가 항상 보장되지는 않습니다.",
      "longDescription": "브라우저 캔버스 인코더로 이미지를 한 장씩 순차 처리합니다. 품질은 JPG와 WebP에 적용되지만, 현재 PNG 인코더에는 적용되지 않습니다. PNG 용량을 줄이려면 해상도를 낮추거나 WebP를 선택하세요. 전문 PNG 무손실 최적화나 색상 수 축소 기능은 아닙니다.",
      "usageContext": "업로드 용량 제한이나 웹페이지용 이미지를 준비할 때 사용하세요. 제출처가 허용하면 WebP를 시도할 수 있습니다. 투명 배경이 필요하면 PNG나 WebP를 유지하세요. JPG 출력은 투명 영역을 흰색으로 바꿉니다.",
      "examples": [
        "2000 × 1000 이미지를 50%로 조정하면 1000 × 500이 되어 픽셀 수는 1/4입니다. 파일 용량도 반드시 1/4이 되는 것은 아닙니다.",
        "1MB 원본이 1.1MB가 되면 절감률은 −10%입니다. 용량이 증가했다는 뜻이므로 원본을 유지하거나 설정을 바꾸세요."
      ],
      "howToUse": "1. 이미지 한 개 또는 여러 개를 선택하세요.\n2. 출력 형식과 크기, JPG/WebP의 품질을 설정하세요.\n3. 처리가 끝나면 파일별 미리보기와 용량을 비교하고 필요한 결과를 내려받으세요.",
      "faq": [
        {
          "q": "품질을 낮추면 원본보다 항상 작아지나요?",
          "a": "원본의 압축 상태, 이미지의 세밀함, 인코더에 따라 달라집니다. PNG는 품질 설정을 무시하므로 해당 슬라이더를 비활성화합니다."
        },
        {
          "q": "원본이 변경되거나 서버에 업로드되나요?",
          "a": "브라우저에서 새 결과 파일을 만들며 원본 파일을 덮어쓰지 않습니다. 파일 교체나 도구 종료 시 임시 미리보기 URL을 정리합니다."
        }
      ],
      "seo": "캔버스 재인코딩 과정에서 메타데이터가 달라질 수 있으며, 애니메이션 전체를 보존하는 도구가 아닙니다. 보관이나 추가 편집을 위해 원본을 남겨두세요."
    },
    "iplookup": {
      "description": "현재 연결에서 확인한 공인 IP와 제공 가능한 대략적인 네트워크 정보를 표시합니다. 위치 정보가 없다고 연결 오류인 것은 아닙니다.",
      "longDescription": "먼저 호스팅 프록시가 이 사이트에 전달한 공인 사용자 주소를 확인합니다. 주소를 얻지 못하면 사용자 브라우저가 ipify에 요청합니다. IPinfo가 제공하는 네트워크·대략적인 위치 정보를 함께 표시하며, IPinfo 조회가 실패해도 확인한 IP는 유지하고 누락 항목은 확인 불가로 표시합니다.",
      "usageContext": "Wi-Fi, 모바일 데이터 또는 VPN을 바꾸기 전후의 공인 IP를 비교할 때 사용하세요. NAT를 통해 여러 기기가 같은 주소를 공유할 수 있으므로 IP는 고유한 기기 식별자가 아닙니다.",
      "examples": [
        "IP 데이터베이스의 도시는 집 주소가 아니라 통신사 네트워크 위치일 수 있습니다. GPS 위치가 아닙니다.",
        "IPv4 결과는 이번 조회 연결의 주소 형식을 뜻합니다. 기기가 IPv6를 지원하지 않는다는 의미는 아닙니다."
      ],
      "howToUse": "1. 조회가 끝날 때까지 기다리세요.\n2. 공인 IP와 확인 가능한 항목을 읽고 필요하면 주소를 복사하세요.\n3. 네트워크를 바꾼 뒤 새로고침하여 비교하세요. 브라우저와 운영체제 이름은 브라우저 정보로 추정합니다.",
      "faq": [
        {
          "q": "VPN 사용 여부를 확정할 수 있나요?",
          "a": "아니요. IP나 시간대가 다르다는 사실만으로 판단할 수 없으므로 VPN 감지 표시를 하지 않습니다."
        },
        {
          "q": "외부 서비스로 전달되는 정보는 무엇인가요?",
          "a": "IPinfo에는 조회할 공인 IP가 전달됩니다. 대체 조회가 필요할 때만 브라우저가 ipify에 접속합니다. 표시된 도시나 통신사를 검증된 개인 위치로 해석하지 마세요."
        }
      ],
      "seo": "확인한 주소의 프로토콜만 표시합니다. 호스트 이름을 임의로 만들거나 IPv4·IPv6를 모두 확인했다고 추정하지 않으며, 호스팅 서버의 IP로 대체하지 않습니다."
    }
  },
  "fr": {
    "ruler": {
      "description": "Estimez la longueur de petits objets à l’écran après calibration avec une carte physique. Une mesure à l’écran reste approximative.",
      "longDescription": "Un centimètre CSS ne correspond pas forcément à un centimètre réel. L’échelle est calculée en divisant la largeur affichée de la carte, en pixels CSS, par 8,56. La référence est une carte de 85,60 × 53,98 mm ; une carte d’une autre taille fausse la mesure.",
      "usageContext": "Pour une estimation rapide sans règle physique, pas pour des tolérances de fabrication, des mesures médicales ou une décision exigeant de la précision.",
      "examples": [
        "Une largeur de 171 px donne environ 19,98 px/cm : 5 cm occupent environ 99,88 px.",
        "Un pouce vaut 2,54 cm. Les petites graduations en pouces sont des dixièmes, pas des seizièmes."
      ],
      "howToUse": "1. Placez doucement une carte au format standard contre l’écran, sans saisir ni envoyer ses données.\n2. Ajustez la largeur du contour puis confirmez la calibration.\n3. Alignez l’objet sur zéro. Un double-clic déplace l’origine.\n4. Vérifiez à nouveau après un zoom, un changement d’écran ou une nouvelle visite.",
      "faq": [
        {
          "q": "Le réglage enregistré garantit-il la précision ?",
          "a": "Non. Seule la largeur précédente est conservée localement. Le zoom et la mise à l’échelle peuvent changer ; confirmez à nouveau la correspondance."
        },
        {
          "q": "Pourquoi une règle physique donne-t-elle un autre résultat ?",
          "a": "L’alignement, l’angle de vue et l’affichage introduisent des erreurs. Utilisez une règle physique pour une mesure importante."
        }
      ],
      "seo": "Le canevas du navigateur dessine les graduations selon la calibration. Il ne connaît pas automatiquement la densité physique des pixels de votre écran."
    },
    "wordcounter": {
      "description": "Comptez les mots et les caractères visibles, avec et sans espaces. Vérifiez la méthode avant d’appliquer une limite de longueur.",
      "longDescription": "Les mots sont segmentés selon la langue par le navigateur. Les caractères sont comptés en graphèmes : une lettre avec un accent combiné ou un emoji composé peut compter pour un seul caractère. Le total avec espaces inclut les espaces et les sauts de ligne ; l’autre exclut les caractères d’espacement.",
      "usageContext": "Pour réviser un texte, une légende ou un formulaire. Vérifiez aussi le compteur du site destinataire : il peut compter des unités UTF-16 ou des octets plutôt que des caractères visibles.",
      "examples": [
        "Hello world : 2 mots, 11 caractères avec l’espace, 10 sans.",
        "e suivi de l’accent combinant ◌́ forme un graphème, tout comme 👨‍👩‍👧‍👦 dans les navigateurs compatibles."
      ],
      "howToUse": "1. Saisissez ou collez le texte.\n2. Comparez les mots et les deux totaux de caractères.\n3. Indiquez une position pour surligner le caractère correspondant. Les positions utilisent aussi les graphèmes.",
      "faq": [
        {
          "q": "Pourquoi les éditeurs donnent-ils des totaux différents ?",
          "a": "Les règles varient pour la ponctuation, les nombres, les mots composés et les langues sans espaces. La version du navigateur peut aussi jouer."
        },
        {
          "q": "Le texte est-il envoyé au serveur ?",
          "a": "Le calcul se fait dans votre navigateur. Sans segmentation linguistique, un avertissement indique le comptage simplifié par espaces et points de code."
        }
      ],
      "seo": "Intl.Segmenter distingue les mots et les graphèmes lorsqu’il est disponible. Ce compteur ne garantit pas l’acceptation d’un texte par toutes les plateformes."
    },
    "jsonformatter": {
      "description": "Formatez du JSON sans arrondir les grands nombres et vérifiez sa syntaxe. Cette vérification ne valide pas un schéma applicatif.",
      "longDescription": "Après vérification syntaxique, l’outil indente les tokens du texte original au lieu de sérialiser des nombres JavaScript. Il préserve donc l’écriture des nombres, l’ordre des propriétés et les noms en double. Seuls les espaces hors des chaînes sont réorganisés.",
      "usageContext": "Pour lire une réponse API ou un fichier de configuration. Une syntaxe valide ne prouve pas que les champs requis existent, qu’une URL fonctionne ou que les données respectent les règles métier.",
      "examples": [
        "Incorrect : {\"name\":\"Apps24\",}. Supprimez la virgule finale : {\"name\":\"Apps24\"}.",
        "9007199254740993 reste inchangé après formatage. Une conversion ultérieure en Number JavaScript peut perdre de la précision."
      ],
      "howToUse": "1. Collez le JSON ou chargez l’exemple.\n2. Validez la syntaxe ou appliquez le formatage.\n3. Lisez le message et corrigez manuellement les erreurs. L’outil ne devine pas les valeurs manquantes.",
      "faq": [
        {
          "q": "Les noms de propriétés en double sont-ils sûrs ?",
          "a": "Ils sont conservés, mais un programme peut ne garder que la dernière valeur ou les refuser. Préférez des noms uniques."
        },
        {
          "q": "Les commentaires et les guillemets simples sont-ils acceptés ?",
          "a": "Non. JSON exige des guillemets doubles et interdit les commentaires et les virgules finales. JSON5 est un autre format."
        }
      ],
      "seo": "La syntaxe est contrôlée localement. Le formatage préserve les tokens ; la validation du schéma et des règles métier reste distincte."
    },
    "imagecompressor": {
      "description": "Redimensionnez et réencodez plusieurs images dans le navigateur. Comparez chaque résultat : une réduction du poids n’est pas garantie.",
      "longDescription": "Les images sont traitées successivement par l’encodeur canvas du navigateur. La qualité agit sur JPG et WebP, pas sur PNG. Pour alléger un PNG, réduisez ses dimensions ou choisissez WebP. Cet outil n’effectue pas d’optimisation PNG spécialisée ni de quantification de palette.",
      "usageContext": "Pour préparer un envoi ou une page web. Essayez WebP si la destination l’accepte. Pour garder la transparence, utilisez PNG ou WebP ; JPG remplace les zones transparentes par du blanc.",
      "examples": [
        "À 50 %, une image de 2000 × 1000 devient 1000 × 500 : quatre fois moins de pixels, mais pas nécessairement quatre fois moins d’octets.",
        "Passer de 1 Mo à 1,1 Mo donne −10 % d’économie : le fichier a grossi."
      ],
      "howToUse": "1. Sélectionnez une ou plusieurs images.\n2. Réglez le format, les dimensions et la qualité pour JPG/WebP.\n3. Attendez la fin, comparez les aperçus et les tailles, puis téléchargez.",
      "faq": [
        {
          "q": "Une qualité plus basse suffit-elle toujours ?",
          "a": "Non. La compression initiale, les détails et l’encodeur influencent le résultat. Le réglage est désactivé en PNG car il est ignoré."
        },
        {
          "q": "Les originaux sont-ils modifiés ou envoyés ?",
          "a": "De nouveaux fichiers sont créés localement, sans écraser les originaux. Les URL temporaires sont libérées au remplacement des fichiers ou à la fermeture de l’outil."
        }
      ],
      "seo": "Le réencodage peut modifier les métadonnées et ne conserve pas une animation complète. Gardez les originaux pour l’archivage ou les retouches."
    },
    "iplookup": {
      "description": "Consultez l’IP publique observée pour votre connexion et les informations réseau approximatives disponibles. Une localisation absente ne signifie pas une panne.",
      "longDescription": "L’outil utilise d’abord l’adresse publique transmise au site par son proxy d’hébergement. À défaut, votre navigateur interroge ipify. IPinfo fournit les détails réseau et la localisation approximative. Si ce service échoue, l’IP reste affichée et les champs manquants sont signalés.",
      "usageContext": "Comparez l’adresse après un changement de Wi-Fi, de réseau mobile ou de VPN. Plusieurs appareils peuvent partager une IP via NAT : ce n’est pas un identifiant unique d’appareil.",
      "examples": [
        "La ville peut désigner le réseau du fournisseur, pas votre domicile. Ce n’est pas une position GPS.",
        "Un résultat IPv4 décrit cette requête, sans prouver l’absence d’IPv6 sur votre appareil."
      ],
      "howToUse": "1. Attendez le résultat.\n2. Consultez les champs disponibles et copiez l’adresse si nécessaire.\n3. Actualisez après un changement de réseau. Les noms du navigateur et du système sont déduits des informations du navigateur.",
      "faq": [
        {
          "q": "Le site peut-il confirmer un VPN ?",
          "a": "Non. Une IP ou un fuseau horaire différent ne suffit pas. Aucun verdict de détection VPN n’est affiché."
        },
        {
          "q": "Que reçoivent les services externes ?",
          "a": "IPinfo reçoit l’IP publique recherchée. ipify est contacté par le navigateur uniquement en secours. La ville n’est pas une localisation personnelle vérifiée."
        }
      ],
      "seo": "Seul le protocole de l’adresse observée est indiqué. Aucun nom d’hôte n’est inventé et l’IP du serveur d’hébergement n’est jamais utilisée comme adresse du visiteur."
    }
  },
  "de": {
    "ruler": {
      "description": "Schätzen Sie kleine Längen am Bildschirm nach einem Abgleich mit einer echten Karte. Bildschirmmessungen benötigen eine Kalibrierung und bleiben näherungsweise.",
      "longDescription": "Ein CSS-Zentimeter ist nicht unbedingt ein realer Zentimeter. Der Maßstab ergibt sich aus der Kartenbreite in CSS-Pixeln geteilt durch 8,56. Als Referenz dient eine Karte mit 85,60 × 53,98 mm; andere Kartengrößen führen zu falschen Messungen.",
      "usageContext": "Für eine schnelle Schätzung ohne echtes Lineal, nicht für Fertigungstoleranzen, medizinische Messungen oder andere präzisionskritische Entscheidungen.",
      "examples": [
        "171 px Kartenbreite ergeben etwa 19,98 px/cm. Eine Strecke von 5 cm belegt etwa 99,88 px.",
        "Ein Zoll entspricht 2,54 cm. Die kleinen Zollstriche zeigen Zehntel, nicht Sechzehntel."
      ],
      "howToUse": "1. Legen Sie eine Karte im Standardformat vorsichtig an den Bildschirm. Kartendaten werden nicht eingegeben oder hochgeladen.\n2. Passen Sie den Umriss an und bestätigen Sie die Kalibrierung.\n3. Richten Sie das Objekt an Null aus. Ein Doppelklick verschiebt den Nullpunkt.\n4. Nach Zoom, Bildschirmwechsel oder erneutem Öffnen neu prüfen.",
      "faq": [
        {
          "q": "Garantiert ein gespeicherter Wert Genauigkeit?",
          "a": "Nein. Nur die frühere Umrissbreite wird lokal gespeichert. Zoom und Skalierung können sich ändern, daher muss der Abgleich erneut bestätigt werden."
        },
        {
          "q": "Warum weicht ein echtes Lineal ab?",
          "a": "Ausrichtung, Blickwinkel und Bildschirmskalierung verursachen Fehler. Für wichtige Messungen verwenden Sie ein physisches Lineal."
        }
      ],
      "seo": "Die Teilstriche werden im Browser-Canvas anhand des Maßstabs gezeichnet. Die tatsächliche Pixeldichte des Monitors wird nicht automatisch ermittelt."
    },
    "wordcounter": {
      "description": "Zählen Sie Wörter und sichtbare Zeichen mit und ohne Leerraum. Beachten Sie die Zählmethode bei verbindlichen Längenlimits.",
      "longDescription": "Wörter werden durch die sprachabhängige Segmentierung des Browsers gezählt. Zeichen werden als Grapheme gezählt: ein kombinierter Akzent oder ein zusammengesetztes Emoji kann ein sichtbares Zeichen bilden. Die Zählung mit Leerraum enthält auch Zeilenumbrüche; die andere entfernt Leerraumzeichen.",
      "usageContext": "Für Entwürfe, Bildunterschriften und Formulare. Prüfen Sie auch den Zähler am Zielort: Dort können UTF-16-Codeeinheiten oder Bytes statt sichtbarer Zeichen zählen.",
      "examples": [
        "Hello world: 2 Wörter, 11 Zeichen mit Leerzeichen, 10 ohne.",
        "e mit dem kombinierenden Akzent ◌́ bildet ein Graphem. Auch 👨‍👩‍👧‍👦 zählt in unterstützten Browsern als eines."
      ],
      "howToUse": "1. Text eingeben oder einfügen.\n2. Wörter und beide Zeichenzahlen vergleichen.\n3. Eine Position eingeben, um das entsprechende Zeichen zu markieren. Auch Positionen verwenden Grapheme.",
      "faq": [
        {
          "q": "Warum zählen Textprogramme unterschiedlich?",
          "a": "Regeln für Satzzeichen, Zahlen, Bindestriche und Sprachen ohne Leerzeichen unterscheiden sich. Auch Browserversionen können abweichen."
        },
        {
          "q": "Wird mein Text hochgeladen?",
          "a": "Die Berechnung erfolgt im Browser. Fehlt die Sprachsegmentierung, erklärt ein Hinweis die Ersatzmethode mit Leerraum und Codepunkten."
        }
      ],
      "seo": "Intl.Segmenter trennt Wörter und Grapheme, sofern verfügbar. Der Zähler ist eine Schreibhilfe, keine Zusage für die Limits jeder Plattform."
    },
    "jsonformatter": {
      "description": "JSON formatieren, ohne große Zahlen zu runden, und die Syntax prüfen. Eine Schema- oder Fachprüfung ist damit nicht verbunden.",
      "longDescription": "Nach der Syntaxprüfung werden die ursprünglichen Tokens eingerückt, statt JavaScript-Zahlen neu zu serialisieren. Zahlenschreibweise, Eigenschaftsreihenfolge und doppelte Namen bleiben erhalten. Nur Leerraum außerhalb von Zeichenketten wird angepasst.",
      "usageContext": "Für API-Antworten und Konfigurationsdateien. Gültige Syntax bestätigt weder Pflichtfelder noch funktionierende URLs, Sicherheit oder fachliche Regeln.",
      "examples": [
        "Ungültig: {\"name\":\"Apps24\",}. Ohne abschließendes Komma: {\"name\":\"Apps24\"}.",
        "9007199254740993 bleibt beim Formatieren unverändert. Eine spätere Umwandlung in JavaScript Number kann Präzision verlieren."
      ],
      "howToUse": "1. JSON einfügen oder das Beispiel laden.\n2. Syntax prüfen oder formatieren.\n3. Meldung lesen und Fehler selbst korrigieren. Fehlende Werte werden nicht erraten.",
      "faq": [
        {
          "q": "Sind doppelte Eigenschaftsnamen unproblematisch?",
          "a": "Sie bleiben im Text erhalten, aber andere Programme können nur den letzten Wert übernehmen oder die Daten ablehnen. Eindeutige Namen sind vorzuziehen."
        },
        {
          "q": "Sind Kommentare und einfache Anführungszeichen erlaubt?",
          "a": "Nein. Standard-JSON verwendet doppelte Anführungszeichen und erlaubt weder Kommentare noch abschließende Kommas. JSON5 ist ein anderes Format."
        }
      ],
      "seo": "Die Syntaxprüfung erfolgt lokal. Tokenbasiertes Formatieren bewahrt die Quelldaten; Schema- und Fachprüfungen bleiben Aufgabe der empfangenden Anwendung."
    },
    "imagecompressor": {
      "description": "Mehrere Bilder im Browser verkleinern und neu kodieren. Vergleichen Sie jedes Ergebnis; kleinere Dateien sind nicht garantiert.",
      "longDescription": "Der Canvas-Encoder verarbeitet Bilder nacheinander. Qualität wirkt bei JPG und WebP, nicht bei PNG. Für kleinere PNG-Dateien reduzieren Sie die Abmessungen oder wählen WebP. Dies ist kein spezialisierter verlustfreier PNG-Optimierer mit Palettenquantisierung.",
      "usageContext": "Für Uploadlimits oder Webseiten. WebP eignet sich, wenn das Ziel es akzeptiert. PNG oder WebP erhalten Transparenz; JPG ersetzt transparente Bereiche durch Weiß.",
      "examples": [
        "50 % aus 2000 × 1000 ergibt 1000 × 500: ein Viertel der Pixel, nicht zwingend ein Viertel der Dateigröße.",
        "1 MB Eingabe und 1,1 MB Ausgabe bedeuten −10 % Ersparnis: Die Datei ist größer geworden."
      ],
      "howToUse": "1. Ein oder mehrere Bilder auswählen.\n2. Format, Abmessungen und bei JPG/WebP die Qualität einstellen.\n3. Verarbeitung abwarten, Vorschau und Größe je Datei prüfen, dann herunterladen.",
      "faq": [
        {
          "q": "Wird jede Datei bei niedriger Qualität kleiner?",
          "a": "Nicht unbedingt gegenüber dem Original. Vorhandene Kompression, Bilddetails und Encoder beeinflussen das Ergebnis. Bei PNG ist Qualität deaktiviert, da sie ignoriert wird."
        },
        {
          "q": "Werden Originale verändert oder hochgeladen?",
          "a": "Neue Dateien entstehen lokal; Originale werden nicht überschrieben. Temporäre Vorschau-URLs werden beim Dateiaustausch oder Schließen des Werkzeugs freigegeben."
        }
      ],
      "seo": "Neukodierung kann Metadaten verändern und bewahrt keine vollständige Animation. Originale für Archivierung und weitere Bearbeitung aufheben."
    },
    "iplookup": {
      "description": "Die beobachtete öffentliche IP und verfügbare ungefähre Netzwerkdaten anzeigen. Fehlende Ortsdaten bedeuten nicht automatisch einen Verbindungsfehler.",
      "longDescription": "Zuerst wird die öffentliche Client-Adresse verwendet, die der Hosting-Proxy an die Website meldet. Fehlt sie, fragt Ihr Browser ipify ab. IPinfo liefert verfügbare Netzwerk- und ungefähre Ortsdaten. Bei dessen Ausfall bleibt die IP sichtbar; fehlende Felder werden als nicht verfügbar gekennzeichnet.",
      "usageContext": "Vergleichen Sie die Adresse beim Wechsel zwischen WLAN, Mobilfunk und VPN. Über NAT können mehrere Geräte dieselbe IP teilen; sie ist keine eindeutige Gerätekennung.",
      "examples": [
        "Die angezeigte Stadt kann den Standort des Providernetzes statt Ihres Zuhauses beschreiben. Sie ist kein GPS-Standort.",
        "Ein IPv4-Ergebnis betrifft diese Abfrage und beweist nicht, dass das Gerät kein IPv6 unterstützt."
      ],
      "howToUse": "1. Abfrage abwarten.\n2. Verfügbare Angaben lesen und die Adresse bei Bedarf kopieren.\n3. Nach einem Netzwerkwechsel aktualisieren. Browser und Betriebssystem werden aus Browserinformationen abgeleitet.",
      "faq": [
        {
          "q": "Kann ein VPN sicher erkannt werden?",
          "a": "Nein. Eine andere IP oder Zeitzone reicht nicht aus. Es wird kein VPN-Erkennungsurteil angezeigt."
        },
        {
          "q": "Welche Daten erhalten externe Dienste?",
          "a": "IPinfo erhält die abgefragte öffentliche IP. ipify wird nur für die Ersatzabfrage vom Browser kontaktiert. Ortsangaben sind kein verifizierter persönlicher Standort."
        }
      ],
      "seo": "Nur das Protokoll der beobachteten Adresse wird angezeigt. Es werden weder Hostnamen erfunden noch die Hosting-Server-IP als Besucheradresse ausgegeben."
    }
  },
  "es": {
    "ruler": {
      "description": "Estima longitudes pequeñas en pantalla tras calibrar con una tarjeta física. Las medidas en pantalla son aproximadas.",
      "longDescription": "Un centímetro CSS no equivale necesariamente a uno físico. La escala se obtiene dividiendo el ancho de la tarjeta en píxeles CSS entre 8,56. La referencia es una tarjeta de 85,60 × 53,98 mm; otro tamaño dará medidas incorrectas.",
      "usageContext": "Para una estimación rápida cuando no tienes una regla física, no para fabricación, mediciones médicas u otras decisiones que exijan precisión.",
      "examples": [
        "Un ancho de 171 px equivale a unos 19,98 px/cm. Así, 5 cm ocupan unos 99,88 px.",
        "Una pulgada son 2,54 cm. Las divisiones pequeñas son décimas de pulgada, no dieciseisavos."
      ],
      "howToUse": "1. Acerca suavemente una tarjeta estándar a la pantalla sin introducir ni subir sus datos.\n2. Ajusta el contorno y confirma la calibración.\n3. Alinea el objeto con el cero. Haz doble clic para mover el origen.\n4. Repite la comprobación al cambiar el zoom, la pantalla o al volver a abrir la página.",
      "faq": [
        {
          "q": "¿El ajuste guardado garantiza precisión?",
          "a": "No. Solo se guarda localmente el ancho anterior. El zoom y la escala pueden cambiar, por lo que debes confirmar el ajuste de nuevo."
        },
        {
          "q": "¿Por qué difiere de una regla física?",
          "a": "La alineación, el ángulo de visión y la escala de pantalla introducen errores. Usa una regla física para medidas importantes."
        }
      ],
      "seo": "Las marcas se dibujan en el canvas del navegador con la escala calibrada. La densidad física de píxeles no se detecta automáticamente."
    },
    "wordcounter": {
      "description": "Cuenta palabras y caracteres visibles, con y sin espacios. Revisa el método antes de aplicar un límite de longitud.",
      "longDescription": "Las palabras se separan mediante la segmentación lingüística del navegador. Los caracteres se cuentan como grafemas: una letra con acento combinado o un emoji compuesto puede ser un solo carácter visible. El total con espacios incluye saltos de línea; el otro excluye los caracteres de espacio en blanco.",
      "usageContext": "Para borradores, pies de foto y formularios. Comprueba también el contador de destino: puede contar unidades UTF-16 o bytes en lugar de caracteres visibles.",
      "examples": [
        "Hello world: 2 palabras, 11 caracteres con el espacio y 10 sin él.",
        "e seguido del acento combinante ◌́ forma un grafema. 👨‍👩‍👧‍👦 también es uno en navegadores compatibles."
      ],
      "howToUse": "1. Escribe o pega el texto.\n2. Compara las palabras y ambos totales de caracteres.\n3. Introduce una posición para destacar ese carácter. Las posiciones también siguen el conteo por grafemas.",
      "faq": [
        {
          "q": "¿Por qué otros editores dan otro total?",
          "a": "Las reglas para signos, números, guiones e idiomas sin espacios varían. La versión del navegador también puede influir."
        },
        {
          "q": "¿Se sube el texto?",
          "a": "El cálculo se realiza en tu navegador. Si no hay segmentación lingüística, un aviso explica el método alternativo basado en espacios y puntos de código."
        }
      ],
      "seo": "Se utiliza Intl.Segmenter para palabras y grafemas cuando está disponible. Es una ayuda de escritura, no una garantía sobre los límites de otras plataformas."
    },
    "jsonformatter": {
      "description": "Formatea JSON sin redondear números grandes y comprueba su sintaxis. La validación no comprueba el esquema de una aplicación.",
      "longDescription": "Tras comprobar la sintaxis, se sangran los tokens originales sin volver a serializar números de JavaScript. Se conservan la escritura numérica, el orden de propiedades y los nombres duplicados. Solo se reorganiza el espacio fuera de las cadenas.",
      "usageContext": "Para revisar respuestas API y archivos de configuración. Una sintaxis válida no confirma campos obligatorios, enlaces funcionales, seguridad ni reglas de negocio.",
      "examples": [
        "Incorrecto: {\"name\":\"Apps24\",}. Quita la coma final: {\"name\":\"Apps24\"}.",
        "9007199254740993 no cambia al formatear. Una conversión posterior a Number de JavaScript puede perder precisión."
      ],
      "howToUse": "1. Pega JSON o carga el ejemplo.\n2. Valida la sintaxis o aplica formato.\n3. Lee el mensaje y corrige los errores manualmente. No se adivinan valores ausentes.",
      "faq": [
        {
          "q": "¿Son seguros los nombres de propiedad duplicados?",
          "a": "Se conservan, pero otros programas pueden quedarse solo con el último valor o rechazarlos. Es preferible usar nombres únicos."
        },
        {
          "q": "¿Admite comentarios y comillas simples?",
          "a": "No. JSON estándar usa comillas dobles y no permite comentarios ni comas finales. JSON5 es otro formato."
        }
      ],
      "seo": "La sintaxis se comprueba localmente. El formato conserva los tokens originales; el esquema y las reglas de negocio necesitan validación independiente."
    },
    "imagecompressor": {
      "description": "Redimensiona y recodifica varias imágenes en el navegador. Compara cada resultado: no se garantiza un archivo más pequeño.",
      "longDescription": "El codificador canvas del navegador procesa las imágenes una a una. La calidad afecta a JPG y WebP, no a PNG. Para reducir PNG, baja sus dimensiones o elige WebP. No es un optimizador PNG especializado sin pérdida ni un cuantizador de paleta.",
      "usageContext": "Para límites de subida o imágenes web. Prueba WebP si el destino lo acepta. Conserva PNG o WebP si necesitas transparencia; JPG sustituye las áreas transparentes por blanco.",
      "examples": [
        "Al 50 %, 2000 × 1000 pasa a 1000 × 500: una cuarta parte de píxeles, pero no necesariamente del tamaño del archivo.",
        "De 1 MB a 1,1 MB supone −10 % de ahorro: el archivo ha crecido."
      ],
      "howToUse": "1. Selecciona una o varias imágenes.\n2. Ajusta formato, dimensiones y calidad para JPG/WebP.\n3. Espera, compara la vista previa y el tamaño de cada archivo y descarga.",
      "faq": [
        {
          "q": "¿Bajar la calidad siempre reduce el original?",
          "a": "No necesariamente. La compresión previa, el detalle y el codificador influyen. En PNG el control se desactiva porque no tiene efecto."
        },
        {
          "q": "¿Se modifican o suben los originales?",
          "a": "Se crean nuevos archivos localmente sin sobrescribirlos. Las URL temporales se liberan al reemplazar archivos o cerrar la herramienta."
        }
      ],
      "seo": "La recodificación puede cambiar metadatos y no conserva una animación completa. Guarda los originales para archivo o edición."
    },
    "iplookup": {
      "description": "Consulta la IP pública observada y los datos aproximados de red disponibles. La falta de ubicación no demuestra un fallo de conexión.",
      "longDescription": "Primero se usa la dirección pública que el proxy del alojamiento comunica al sitio. Si no está disponible, tu navegador consulta ipify. IPinfo aporta los detalles de red y ubicación aproximada. Si falla, la IP observada sigue visible y los campos ausentes se indican como no disponibles.",
      "usageContext": "Compara la dirección al cambiar entre Wi-Fi, datos móviles o VPN. NAT permite que varios dispositivos compartan una IP; no es un identificador único de dispositivo.",
      "examples": [
        "La ciudad puede corresponder a la red del proveedor, no a tu domicilio. No es una ubicación GPS.",
        "Un resultado IPv4 describe esta consulta; no demuestra que el dispositivo carezca de IPv6."
      ],
      "howToUse": "1. Espera la consulta.\n2. Revisa los campos disponibles y copia la dirección si lo necesitas.\n3. Actualiza tras cambiar de red. El navegador y el sistema se deducen de la información del navegador.",
      "faq": [
        {
          "q": "¿Puede confirmar una VPN?",
          "a": "No. Otra IP o zona horaria no es prueba suficiente. No se muestra un veredicto de detección de VPN."
        },
        {
          "q": "¿Qué reciben los servicios externos?",
          "a": "IPinfo recibe la IP pública consultada. El navegador contacta con ipify solo como alternativa. La ciudad no es una ubicación personal verificada."
        }
      ],
      "seo": "Solo se muestra el protocolo de la dirección observada. No se inventan nombres de host ni se sustituye la IP del visitante por la del servidor."
    }
  },
  "pt": {
    "ruler": {
      "description": "Estime pequenos comprimentos na tela após calibrar com um cartão físico. Medições na tela são aproximadas.",
      "longDescription": "Um centímetro CSS não corresponde necessariamente a um centímetro real. A escala é a largura do cartão em pixels CSS dividida por 8,56. A referência é um cartão de 85,60 × 53,98 mm; outro tamanho gera medidas incorretas.",
      "usageContext": "Para estimativas rápidas sem régua física, não para tolerâncias de fabricação, medições médicas ou decisões que exigem precisão.",
      "examples": [
        "Uma largura de 171 px produz cerca de 19,98 px/cm. Assim, 5 cm ocupam cerca de 99,88 px.",
        "Uma polegada equivale a 2,54 cm. As divisões menores são décimos de polegada, não dezesseis avos."
      ],
      "howToUse": "1. Encoste delicadamente um cartão padrão na tela, sem digitar ou enviar seus dados.\n2. Ajuste o contorno e confirme a calibração.\n3. Alinhe o objeto ao zero. Um clique duplo move a origem.\n4. Confira novamente após mudar zoom, tela ou reabrir a página.",
      "faq": [
        {
          "q": "A configuração salva garante precisão?",
          "a": "Não. Apenas a largura anterior é salva localmente. Zoom e escala podem mudar; confirme novamente a correspondência."
        },
        {
          "q": "Por que uma régua física dá outro resultado?",
          "a": "Alinhamento, ângulo de visão e escala da tela introduzem erros. Use uma régua física para medidas importantes."
        }
      ],
      "seo": "As marcações são desenhadas no canvas do navegador com a escala calibrada. A densidade física de pixels da tela não é detectada automaticamente."
    },
    "wordcounter": {
      "description": "Conte palavras e caracteres visíveis, com e sem espaços. Confira o método antes de aplicar um limite de tamanho.",
      "longDescription": "As palavras usam a segmentação linguística do navegador. Caracteres são contados como grafemas: uma letra com acento combinado ou emoji composto pode ser um único caractere visível. A contagem com espaços inclui quebras de linha; a outra exclui caracteres de espaço em branco.",
      "usageContext": "Para rascunhos, legendas e formulários. Confira também o contador do destino: ele pode usar unidades UTF-16 ou bytes em vez de caracteres visíveis.",
      "examples": [
        "Hello world: 2 palavras, 11 caracteres com o espaço e 10 sem.",
        "e seguido do acento combinante ◌́ é um grafema. 👨‍👩‍👧‍👦 também conta como um em navegadores compatíveis."
      ],
      "howToUse": "1. Digite ou cole o texto.\n2. Compare palavras e as duas contagens de caracteres.\n3. Informe uma posição para destacar o caractere correspondente. As posições também seguem os grafemas.",
      "faq": [
        {
          "q": "Por que outros editores contam diferente?",
          "a": "Regras para pontuação, números, hífens e idiomas sem espaços variam. A versão do navegador também pode influenciar."
        },
        {
          "q": "O texto é enviado ao servidor?",
          "a": "O cálculo ocorre no navegador. Sem segmentação linguística, um aviso explica a alternativa por espaços e pontos de código."
        }
      ],
      "seo": "Intl.Segmenter separa palavras e grafemas quando disponível. O contador ajuda na escrita, mas não garante que toda plataforma use o mesmo limite."
    },
    "jsonformatter": {
      "description": "Formate JSON sem arredondar números grandes e verifique a sintaxe. Isso não valida o esquema de uma aplicação.",
      "longDescription": "Após verificar a sintaxe, a ferramenta indenta os tokens originais sem serializar novamente números JavaScript. Preserva a escrita dos números, a ordem das propriedades e nomes duplicados. Apenas os espaços fora de strings são reorganizados.",
      "usageContext": "Para examinar respostas de API e configurações. Sintaxe válida não confirma campos obrigatórios, URLs funcionais, segurança ou regras de negócio.",
      "examples": [
        "Incorreto: {\"name\":\"Apps24\",}. Remova a vírgula final: {\"name\":\"Apps24\"}.",
        "9007199254740993 permanece igual após formatar. Uma conversão posterior para Number em JavaScript pode perder precisão."
      ],
      "howToUse": "1. Cole JSON ou carregue o exemplo.\n2. Valide a sintaxe ou formate.\n3. Leia a mensagem e corrija os erros manualmente. Valores ausentes não são adivinhados.",
      "faq": [
        {
          "q": "Nomes de propriedade duplicados são seguros?",
          "a": "São preservados, mas outros programas podem manter só o último valor ou rejeitá-los. Prefira nomes únicos."
        },
        {
          "q": "Aceita comentários e aspas simples?",
          "a": "Não. JSON padrão usa aspas duplas e não permite comentários nem vírgulas finais. JSON5 é outro formato."
        }
      ],
      "seo": "A sintaxe é verificada localmente. A formatação preserva os tokens; o esquema e as regras de negócio exigem validação separada."
    },
    "imagecompressor": {
      "description": "Redimensione e recodifique várias imagens no navegador. Compare cada resultado: arquivos menores não são garantidos.",
      "longDescription": "O codificador canvas processa as imagens sequencialmente. A qualidade afeta JPG e WebP, mas não PNG. Para reduzir PNG, diminua as dimensões ou escolha WebP. Não é um otimizador PNG especializado sem perdas nem um quantizador de paleta.",
      "usageContext": "Para limites de upload e imagens de páginas web. Experimente WebP se o destino aceitar. Mantenha PNG ou WebP para transparência; JPG substitui áreas transparentes por branco.",
      "examples": [
        "Em 50%, 2000 × 1000 vira 1000 × 500: um quarto dos pixels, não necessariamente do tamanho do arquivo.",
        "De 1 MB para 1,1 MB representa −10% de economia: o arquivo aumentou."
      ],
      "howToUse": "1. Selecione uma ou várias imagens.\n2. Ajuste formato, dimensões e qualidade para JPG/WebP.\n3. Aguarde, compare prévias e tamanhos por arquivo e baixe os resultados.",
      "faq": [
        {
          "q": "Qualidade menor sempre reduz o original?",
          "a": "Não necessariamente. Compressão anterior, detalhes e codificador influenciam. Em PNG, o controle é desativado porque não tem efeito."
        },
        {
          "q": "Os originais são alterados ou enviados?",
          "a": "Novos arquivos são criados localmente, sem sobrescrever os originais. URLs temporárias são liberadas ao substituir arquivos ou fechar a ferramenta."
        }
      ],
      "seo": "A recodificação pode alterar metadados e não preserva uma animação completa. Guarde os originais para arquivo ou edição."
    },
    "iplookup": {
      "description": "Veja o IP público observado e os dados aproximados de rede disponíveis. Localização ausente não comprova falha de conexão.",
      "longDescription": "Primeiro é usado o endereço público informado ao site pelo proxy de hospedagem. Se indisponível, seu navegador consulta ipify. IPinfo fornece detalhes de rede e localização aproximada. Se esse serviço falhar, o IP permanece visível e os campos ausentes são marcados como indisponíveis.",
      "usageContext": "Compare o endereço ao alternar Wi-Fi, dados móveis ou VPN. Vários aparelhos podem compartilhar um IP por NAT; ele não é um identificador único do dispositivo.",
      "examples": [
        "A cidade pode indicar a rede do provedor, não sua residência. Não é localização GPS.",
        "Um resultado IPv4 descreve esta consulta, sem provar que o aparelho não tem IPv6."
      ],
      "howToUse": "1. Aguarde a consulta.\n2. Leia os campos disponíveis e copie o endereço se necessário.\n3. Atualize após trocar de rede. Navegador e sistema são inferidos das informações do navegador.",
      "faq": [
        {
          "q": "É possível confirmar uma VPN?",
          "a": "Não. Outro IP ou fuso horário não é prova suficiente. A página não declara detecção de VPN."
        },
        {
          "q": "O que os serviços externos recebem?",
          "a": "IPinfo recebe o IP público consultado. O navegador contata ipify somente como alternativa. A cidade não é uma localização pessoal verificada."
        }
      ],
      "seo": "Somente o protocolo do endereço observado é mostrado. Nenhum hostname é inventado e o IP do servidor não substitui o endereço do visitante."
    }
  },
  "ja": {
    "ruler": {
      "description": "実物のカードに合わせて校正し、画面上で小さな物の長さを推定します。画面での測定は概算です。",
      "longDescription": "CSSの1cmが実際の1cmとは限りません。カードの画面上の幅をCSSピクセルで測り、8.56で割って1cm当たりのピクセル数を求めます。基準は85.60 × 53.98mmのカードです。違うサイズのカードでは測定がずれます。",
      "usageContext": "実物の定規がないときの目安に使えます。製造公差、医療上の測定など、精度が重要な判断には使わないでください。",
      "examples": [
        "カード幅が171pxなら約19.98px/cmです。この場合、5cmの区間は約99.88pxになります。",
        "1インチは2.54cmです。インチの小目盛りは1/10インチで、1/16インチではありません。"
      ],
      "howToUse": "1. 標準サイズのカードを画面にそっと当てます。番号の入力や写真の送信は不要です。\n2. 輪郭の幅を実物に合わせ、校正を確認します。\n3. 物をゼロに合わせて端を読みます。定規をダブルクリックすると原点を移動できます。\n4. ズーム、画面変更、再訪問後は再確認します。",
      "faq": [
        {
          "q": "保存した設定なら正確ですか？",
          "a": "いいえ。前回の幅だけをブラウザ内に保存します。拡大率や画面設定が変わるため、現在の画面で再確認が必要です。"
        },
        {
          "q": "実物の定規と異なるのはなぜですか？",
          "a": "位置合わせ、見る角度、画面倍率で誤差が生じます。重要な測定には実物の定規を使ってください。"
        }
      ],
      "seo": "ブラウザのキャンバスに校正比率で目盛りを描きます。画面の物理的なピクセル密度を自動検出するものではありません。"
    },
    "wordcounter": {
      "description": "単語数と、空白を含む・含まない表示文字数を数えます。提出制限に使う前に集計方法を確認してください。",
      "longDescription": "単語はブラウザの言語別分割機能で数えます。文字数は書記素単位なので、結合アクセント付きの文字や複数の文字からなる絵文字が1文字になることがあります。空白込みには空白と改行を含め、空白なしでは空白文字を除きます。",
      "usageContext": "原稿、投稿、応募フォームの長さ確認に使えます。提出先がUTF-16コード単位やバイトを数える場合は結果が異なるため、提出画面でも確認してください。",
      "examples": [
        "Hello worldは2単語、空白込み11文字、空白なし10文字です。",
        "eと結合アクセント◌́の組み合わせは1書記素です。👨‍👩‍👧‍👦も対応ブラウザでは1書記素になります。"
      ],
      "howToUse": "1. テキストを入力または貼り付けます。\n2. 単語数と2種類の文字数を比較します。\n3. 文字位置を指定すると、その文字を強調します。位置も書記素で数えます。",
      "faq": [
        {
          "q": "他のエディタと単語数が違うのはなぜですか？",
          "a": "句読点、数字、ハイフン、空白のない言語の分割規則が異なります。ブラウザのバージョンでも差が出る場合があります。"
        },
        {
          "q": "テキストは送信されますか？",
          "a": "集計はブラウザ内で行います。言語別分割に非対応の場合は、空白による単語分割とコードポイントによる文字数を使う旨を表示します。"
        }
      ],
      "seo": "対応環境ではIntl.Segmenterで単語と書記素を分割します。執筆補助であり、すべてのサービスの文字制限と一致する保証はありません。"
    },
    "jsonformatter": {
      "description": "大きな数値を丸めずにJSONを整形し、構文を検査します。アプリケーションのスキーマ検証とは異なります。",
      "longDescription": "構文確認後、JavaScriptの数値を再シリアライズせず、元のトークンにインデントを付けます。数値表記、プロパティの順序、重複した名前を保ち、文字列の外側の空白だけを整理します。",
      "usageContext": "APIレスポンスや設定ファイルの確認に使えます。構文が正しくても、必須項目、URLの動作、安全性、業務ルールまで確認されたわけではありません。",
      "examples": [
        "{\"name\":\"Apps24\",}は末尾のカンマが不正です。{\"name\":\"Apps24\"}に修正できます。",
        "9007199254740993は整形後も変わりません。ただし、別の処理でJavaScriptのNumberへ変換すると精度を失う場合があります。"
      ],
      "howToUse": "1. JSONを貼り付けるかサンプルを開きます。\n2. 構文検証または整形を選びます。\n3. 結果を読み、エラーは手動で修正します。欠けた値を推測して補うことはしません。",
      "faq": [
        {
          "q": "プロパティ名の重複は安全ですか？",
          "a": "元の名前は保持しますが、利用側が最後の値だけを採用したり拒否したりする場合があります。名前は一意にすることをおすすめします。"
        },
        {
          "q": "コメントやシングルクォートは使えますか？",
          "a": "標準JSONはダブルクォートを使い、コメントや末尾のカンマを許可しません。JSON5は別形式です。"
        }
      ],
      "seo": "構文はローカルで確認します。トークン単位の整形で原文の値を保ち、スキーマや業務ルールは利用側で別途検証します。"
    },
    "imagecompressor": {
      "description": "複数の画像をブラウザで縮小・再エンコードします。容量が必ず減るとは限らないため、各結果を確認してください。",
      "longDescription": "ブラウザのキャンバスエンコーダで1枚ずつ順番に処理します。品質設定はJPGとWebPに適用され、PNGでは無視されます。PNGを小さくするには寸法を縮めるかWebPを選んでください。専門的なPNG可逆最適化や減色処理ではありません。",
      "usageContext": "アップロード制限やウェブ用画像の準備に使えます。提出先が対応していればWebPを試せます。透明部分が必要ならPNGかWebPを使い、JPGでは透明部分が白になる点に注意してください。",
      "examples": [
        "2000 × 1000を50%にすると1000 × 500で画素数は1/4ですが、ファイル容量も1/4になるとは限りません。",
        "1MBが1.1MBになった場合、削減率は−10%で、容量が増えたことを意味します。"
      ],
      "howToUse": "1. 画像を1枚または複数選びます。\n2. 形式、寸法、JPG/WebPの品質を設定します。\n3. 完了後、ファイルごとのプレビューと容量を比較してダウンロードします。",
      "faq": [
        {
          "q": "低品質なら必ず元より小さくなりますか？",
          "a": "元の圧縮状態、細部、エンコーダによります。PNGでは品質が無視されるため操作を無効にしています。"
        },
        {
          "q": "元画像を変更・送信しますか？",
          "a": "ブラウザ内で新しい結果を作り、元ファイルは上書きしません。ファイル交換やツール終了時に一時プレビューURLを解放します。"
        }
      ],
      "seo": "再エンコードでメタデータが変わる場合があり、アニメーション全体は保存できません。保管や編集には元画像を残してください。"
    },
    "iplookup": {
      "description": "今回の接続で確認できた公開IPと、おおよそのネットワーク情報を表示します。位置情報がないこと自体は接続障害ではありません。",
      "longDescription": "まずホスティングのプロキシがサイトへ渡す公開クライアントIPを使います。取得できない場合はブラウザからipifyへ問い合わせます。IPinfoがネットワークと概略位置を提供し、失敗時も確認できたIPは残して不足項目を取得不可と表示します。",
      "usageContext": "Wi-Fi、モバイル回線、VPNを切り替えた前後の比較に使えます。NATで複数の機器がIPを共有できるため、固有の機器IDではありません。",
      "examples": [
        "都市名は自宅ではなく通信事業者のネットワーク位置の場合があります。GPS位置ではありません。",
        "IPv4という結果は今回の問い合わせを表し、機器がIPv6に非対応という意味ではありません。"
      ],
      "howToUse": "1. 問い合わせ完了を待ちます。\n2. 取得できた項目を確認し、必要ならIPをコピーします。\n3. 回線を変更したら更新します。ブラウザとOS名はブラウザ情報から推定します。",
      "faq": [
        {
          "q": "VPN利用を断定できますか？",
          "a": "いいえ。IPや時間帯の違いだけでは証明できないため、VPN検出の判定は表示しません。"
        },
        {
          "q": "外部サービスには何を送りますか？",
          "a": "IPinfoには調べる公開IPを渡します。代替問い合わせ時のみブラウザがipifyに接続します。都市名は検証済みの個人位置ではありません。"
        }
      ],
      "seo": "確認したアドレスのプロトコルだけを表示します。ホスト名を作ったり、ホスティングサーバーのIPを訪問者のIPとして表示したりしません。"
    }
  },
  "zh": {
    "ruler": {
      "description": "先用实体卡片校准，再估测屏幕上小物体的长度。屏幕测量仅供参考。",
      "longDescription": "CSS 中的 1cm 不一定等于实际的 1cm。工具将卡片在屏幕上的 CSS 像素宽度除以 8.56，得到每厘米的像素数。参考卡片尺寸为 85.60 × 53.98mm，其他尺寸的卡片会导致测量错误。",
      "usageContext": "适合没有实体尺子时快速估测，不适用于制造公差、医疗测量或其他要求精密的判断。",
      "examples": [
        "卡片宽度为 171px 时，约为 19.98px/cm；5cm 对应约 99.88px。",
        "1 英寸等于 2.54cm。英寸模式的小刻度是十分之一英寸，不是十六分之一英寸。"
      ],
      "howToUse": "1. 将标准尺寸卡片轻轻贴近屏幕，无需输入卡号或上传照片。\n2. 调整轮廓宽度与卡片一致，再确认校准。\n3. 将物体对齐零点并读取末端。双击尺子可移动零点。\n4. 缩放、更换屏幕或再次打开页面后重新核对。",
      "faq": [
        {
          "q": "保存的设置能保证准确吗？",
          "a": "不能。浏览器只保存上次的轮廓宽度。屏幕缩放可能变化，需要在当前屏幕再次确认。"
        },
        {
          "q": "为什么与实体尺子不同？",
          "a": "对齐方式、观看角度和屏幕缩放都会产生误差。重要测量请使用实体尺子。"
        }
      ],
      "seo": "工具在浏览器画布上按校准比例绘制刻度，无法自动测得屏幕的真实物理像素密度。"
    },
    "wordcounter": {
      "description": "统计词数及含空白、不含空白的可见字符数。用于提交限制前，请先了解计数方法。",
      "longDescription": "词数使用浏览器的语言分词功能。字符按字素簇统计，因此组合重音或由多个字符组成的表情可能只算一个可见字符。含空白总数包括空格和换行，另一项会排除空白字符。",
      "usageContext": "适合检查草稿、说明文字和表单长度。目标平台可能按 UTF-16 代码单元或字节计算，请同时核对最终提交页面的计数。",
      "examples": [
        "Hello world：2 个词，含空格 11 个字符，不含空格 10 个字符。",
        "e 加组合重音 ◌́ 构成一个字素簇；支持的浏览器也会将 👨‍👩‍👧‍👦 视为一个字素簇。"
      ],
      "howToUse": "1. 输入或粘贴文本。\n2. 比较词数及两种字符总数。\n3. 输入字符位置可高亮该字符，位置同样按字素簇计算。",
      "faq": [
        {
          "q": "为什么与其他编辑器的词数不同？",
          "a": "标点、数字、连字符及没有空格的语言可能使用不同分词规则。浏览器版本也可能影响结果。"
        },
        {
          "q": "文字会上传吗？",
          "a": "统计在浏览器内完成。若不支持语言分词，会提示改用空白分词和 Unicode 代码点计数。"
        }
      ],
      "seo": "支持时使用 Intl.Segmenter 分隔词语和字素簇。这是写作辅助工具，不保证与所有平台的长度规则一致。"
    },
    "jsonformatter": {
      "description": "格式化 JSON 时不舍入大数字，并检查语法。语法检查不等于应用数据模式验证。",
      "longDescription": "工具先验证语法，再对原始标记添加缩进，而不是重新序列化 JavaScript 数字，因此保留数字写法、属性顺序和重复属性名。只调整字符串之外的空白。",
      "usageContext": "适合阅读 API 响应和配置文件。语法正确并不代表必填字段齐全、网址有效、数据安全或符合业务规则。",
      "examples": [
        "错误：{\"name\":\"Apps24\",}。删除尾部逗号后为 {\"name\":\"Apps24\"}。",
        "9007199254740993 在格式化后保持原样，但在其他代码中转换为 JavaScript Number 可能损失精度。"
      ],
      "howToUse": "1. 粘贴 JSON 或加载示例。\n2. 选择语法检查或格式化。\n3. 阅读结果并手动修改错误。工具不会猜测并补齐缺失值。",
      "faq": [
        {
          "q": "重复属性名安全吗？",
          "a": "文本会保留重复名称，但使用方可能只保留最后一个值或拒绝数据。建议使用唯一名称。"
        },
        {
          "q": "支持注释和单引号吗？",
          "a": "标准 JSON 使用双引号，不允许注释或尾部逗号。JSON5 是另一种格式。"
        }
      ],
      "seo": "语法在本地检查。基于标记的格式化保留原始值，数据模式和业务规则需要由接收程序单独验证。"
    },
    "imagecompressor": {
      "description": "在浏览器中批量调整尺寸并重新编码图片。请逐一比较结果，文件不一定变小。",
      "longDescription": "图片通过浏览器 canvas 编码器依次处理。质量设置影响 JPG 和 WebP，但 PNG 会忽略此设置。若需缩小 PNG，请降低尺寸或选择 WebP。此工具不是专业的 PNG 无损优化器，也不进行调色板量化。",
      "usageContext": "适合准备有上传限制的文件或网页图片。目标支持时可尝试 WebP。需要透明背景时保留 PNG 或 WebP；JPG 会将透明区域改为白色。",
      "examples": [
        "2000 × 1000 缩放到 50% 后为 1000 × 500，像素数变为四分之一，文件体积却不一定如此。",
        "1MB 变为 1.1MB 时节省率为 −10%，表示文件增大。"
      ],
      "howToUse": "1. 选择一张或多张图片。\n2. 设置输出格式、尺寸以及 JPG/WebP 的质量。\n3. 等待完成，比较每个文件的预览和体积后下载。",
      "faq": [
        {
          "q": "降低质量一定比原图小吗？",
          "a": "不一定。原始压缩程度、细节和编码器都会影响结果。PNG 不使用质量设置，因此该控件会禁用。"
        },
        {
          "q": "会修改或上传原图吗？",
          "a": "在浏览器内生成新文件，不覆盖原图。更换文件或关闭工具时释放临时预览 URL。"
        }
      ],
      "seo": "重新编码可能改变元数据，也不能保留完整动画。存档或继续编辑时请保留原始文件。"
    },
    "iplookup": {
      "description": "查看此次连接观察到的公网 IP 及可用的大致网络信息。缺少位置数据并不代表连接故障。",
      "longDescription": "工具先使用托管代理传给网站的公网客户端地址。无法取得时，由浏览器请求 ipify。IPinfo 提供可用的网络和大致位置信息；若查询失败，仍显示已确认的 IP，并将缺失字段标为无法获取。",
      "usageContext": "可比较切换 Wi-Fi、移动网络或 VPN 前后的公网地址。NAT 可让多个设备共享地址，因此 IP 不是唯一设备标识。",
      "examples": [
        "城市可能表示运营商网络的位置，而不是你的住所；它不是 GPS 定位。",
        "IPv4 结果仅表示本次查询连接，不能证明设备不支持 IPv6。"
      ],
      "howToUse": "1. 等待查询结束。\n2. 阅读可用字段，按需复制地址。\n3. 更换网络后刷新。浏览器及操作系统名称根据浏览器信息推测。",
      "faq": [
        {
          "q": "可以确认 VPN 是否启用吗？",
          "a": "不能。不同 IP 或时区不足以证明 VPN 状态，因此页面不显示 VPN 检测结论。"
        },
        {
          "q": "外部服务会收到什么？",
          "a": "IPinfo 收到被查询的公网 IP。只有备用查询需要时浏览器才访问 ipify。城市不是经过验证的个人位置。"
        }
      ],
      "seo": "只显示已观察地址的协议，不编造主机名，也不会用托管服务器的 IP 冒充访问者地址。"
    }
  },
  "zh-TW": {
    "ruler": {
      "description": "先用實體卡片校準，再估測螢幕上小物體的長度。螢幕測量僅供參考。",
      "longDescription": "CSS 的 1cm 不一定等於實際的 1cm。工具將卡片在螢幕上的 CSS 像素寬度除以 8.56，得到每公分的像素數。參考卡片尺寸為 85.60 × 53.98mm；其他尺寸會導致測量錯誤。",
      "usageContext": "適合沒有實體尺時快速估測，不適用於製造公差、醫療測量或其他要求精密的判斷。",
      "examples": [
        "卡片寬度為 171px 時，約為 19.98px/cm；5cm 對應約 99.88px。",
        "1 英吋等於 2.54cm。英吋模式的小刻度是十分之一英吋，不是十六分之一英吋。"
      ],
      "howToUse": "1. 將標準尺寸卡片輕輕靠近螢幕，無需輸入卡號或上傳照片。\n2. 調整輪廓寬度與卡片一致，再確認校準。\n3. 將物體對齊零點並讀取末端。按兩下尺面可移動零點。\n4. 縮放、更換螢幕或重新開啟頁面後再次核對。",
      "faq": [
        {
          "q": "儲存的設定能保證準確嗎？",
          "a": "不能。瀏覽器只儲存上次的輪廓寬度。螢幕縮放可能改變，需要在目前螢幕再次確認。"
        },
        {
          "q": "為什麼與實體尺不同？",
          "a": "對齊方式、觀看角度及螢幕縮放都會產生誤差。重要測量請使用實體尺。"
        }
      ],
      "seo": "工具在瀏覽器畫布上依校準比例繪製刻度，無法自動測得螢幕真實的物理像素密度。"
    },
    "wordcounter": {
      "description": "統計詞數及含空白、不含空白的可見字元數。用於提交限制前，請先了解計數方式。",
      "longDescription": "詞數使用瀏覽器的語言分詞功能。字元以字素叢集計算，因此組合重音或由多個字元構成的表情符號可能只算一個可見字元。含空白總數包括空格與換行，另一項則排除空白字元。",
      "usageContext": "適合檢查草稿、說明文字與表單長度。目標平台可能以 UTF-16 編碼單元或位元組計算，請同時核對最終提交頁面的計數。",
      "examples": [
        "Hello world：2 個詞，含空格 11 個字元，不含空格 10 個字元。",
        "e 加上組合重音 ◌́ 構成一個字素叢集；支援的瀏覽器也會將 👨‍👩‍👧‍👦 視為一個字素叢集。"
      ],
      "howToUse": "1. 輸入或貼上文字。\n2. 比較詞數及兩種字元總數。\n3. 輸入字元位置可醒目標示該字元，位置同樣以字素叢集計算。",
      "faq": [
        {
          "q": "為什麼其他編輯器的詞數不同？",
          "a": "標點、數字、連字號及沒有空格的語言可能採用不同分詞規則。瀏覽器版本也可能影響結果。"
        },
        {
          "q": "文字會上傳嗎？",
          "a": "統計在瀏覽器內完成。若不支援語言分詞，會提示改用空白分詞及 Unicode 碼位計數。"
        }
      ],
      "seo": "支援時使用 Intl.Segmenter 分隔詞語與字素叢集。這是寫作輔助工具，不保證與所有平台的長度規則相同。"
    },
    "jsonformatter": {
      "description": "格式化 JSON 時不捨入大數字，並檢查語法。語法檢查不等於應用程式的資料結構驗證。",
      "longDescription": "工具先驗證語法，再對原始語彙單元加入縮排，而非重新序列化 JavaScript 數字，因此保留數字寫法、屬性順序與重複屬性名稱。只調整字串之外的空白。",
      "usageContext": "適合閱讀 API 回應與設定檔。語法正確不代表必填欄位齊全、網址有效、資料安全或符合業務規則。",
      "examples": [
        "錯誤：{\"name\":\"Apps24\",}。刪除尾端逗號後為 {\"name\":\"Apps24\"}。",
        "9007199254740993 在格式化後保持原樣，但在其他程式碼中轉換為 JavaScript Number 可能損失精確度。"
      ],
      "howToUse": "1. 貼上 JSON 或載入範例。\n2. 選擇語法檢查或格式化。\n3. 閱讀結果並手動修改錯誤。工具不會猜測並補齊缺少的值。",
      "faq": [
        {
          "q": "重複屬性名稱安全嗎？",
          "a": "文字會保留重複名稱，但使用端可能只保留最後一個值或拒絕資料。建議使用唯一名稱。"
        },
        {
          "q": "支援註解與單引號嗎？",
          "a": "標準 JSON 使用雙引號，不允許註解或尾端逗號。JSON5 是另一種格式。"
        }
      ],
      "seo": "語法在本機檢查。依原始語彙單元格式化以保留數值，資料結構與業務規則需由接收程式另外驗證。"
    },
    "imagecompressor": {
      "description": "在瀏覽器中批次調整尺寸並重新編碼圖片。請逐一比較結果，檔案不一定變小。",
      "longDescription": "圖片透過瀏覽器 canvas 編碼器依序處理。品質設定影響 JPG 與 WebP，但 PNG 會忽略此設定。若需縮小 PNG，請降低尺寸或選擇 WebP。此工具不是專業 PNG 無損最佳化工具，也不進行調色盤量化。",
      "usageContext": "適合準備有上傳限制的檔案或網頁圖片。目標支援時可嘗試 WebP。需要透明背景時保留 PNG 或 WebP；JPG 會將透明區域改為白色。",
      "examples": [
        "2000 × 1000 縮放至 50% 後為 1000 × 500，像素數變為四分之一，檔案容量卻不一定如此。",
        "1MB 變成 1.1MB 時節省率為 −10%，表示檔案變大。"
      ],
      "howToUse": "1. 選擇一張或多張圖片。\n2. 設定輸出格式、尺寸及 JPG/WebP 的品質。\n3. 等待完成，比較每個檔案的預覽和容量後下載。",
      "faq": [
        {
          "q": "降低品質一定比原圖小嗎？",
          "a": "不一定。原始壓縮程度、細節與編碼器都會影響結果。PNG 不使用品質設定，因此該控制項會停用。"
        },
        {
          "q": "會修改或上傳原圖嗎？",
          "a": "在瀏覽器內產生新檔案，不覆寫原圖。更換檔案或關閉工具時釋放暫時預覽 URL。"
        }
      ],
      "seo": "重新編碼可能改變中繼資料，也不能保留完整動畫。封存或繼續編輯時請保留原始檔案。"
    },
    "iplookup": {
      "description": "查看本次連線觀察到的公用 IP 及可用的概略網路資訊。缺少位置資料不代表連線故障。",
      "longDescription": "工具先使用託管代理傳給網站的公用用戶端位址。無法取得時，由瀏覽器向 ipify 查詢。IPinfo 提供可用的網路與概略位置資訊；若查詢失敗，仍顯示已確認的 IP，並將缺少欄位標為無法取得。",
      "usageContext": "可比較切換 Wi-Fi、行動網路或 VPN 前後的公用位址。NAT 可讓多個裝置共用位址，因此 IP 不是唯一裝置識別碼。",
      "examples": [
        "城市可能代表業者網路的位置，而非你的住處；它不是 GPS 定位。",
        "IPv4 結果僅代表本次查詢連線，不能證明裝置不支援 IPv6。"
      ],
      "howToUse": "1. 等待查詢完成。\n2. 閱讀可用欄位，按需複製位址。\n3. 更換網路後重新整理。瀏覽器與作業系統名稱依瀏覽器資訊推測。",
      "faq": [
        {
          "q": "可以確認 VPN 是否啟用嗎？",
          "a": "不能。不同 IP 或時區不足以證明 VPN 狀態，因此頁面不顯示 VPN 偵測結論。"
        },
        {
          "q": "外部服務會收到什麼？",
          "a": "IPinfo 收到查詢的公用 IP。只有備用查詢需要時瀏覽器才存取 ipify。城市並非經過驗證的個人位置。"
        }
      ],
      "seo": "只顯示已觀察位址的通訊協定，不虛構主機名稱，也不會用託管伺服器的 IP 代替訪客位址。"
    }
  },
  "ar": {
    "ruler": {
      "description": "قدّر أطوال الأجسام الصغيرة على الشاشة بعد المعايرة ببطاقة فعلية. القياسات على الشاشة تقريبية.",
      "longDescription": "السنتيمتر في CSS لا يساوي بالضرورة سنتيمترًا حقيقيًا. يُحسب المقياس بقسمة عرض البطاقة ببكسلات CSS على 8.56. المرجع بطاقة بمقاس 85.60 × 53.98 مم؛ استخدام بطاقة بمقاس آخر يؤدي إلى قياس غير صحيح.",
      "usageContext": "لتقدير سريع عند غياب مسطرة فعلية، وليس لتفاوتات التصنيع أو القياسات الطبية أو القرارات التي تتطلب دقة عالية.",
      "examples": [
        "عرض 171 بكسل يعطي نحو 19.98 بكسل/سم. عندها يشغل طول 5 سم نحو 99.88 بكسل.",
        "البوصة تساوي 2.54 سم. التدريجات الصغيرة هي أعشار البوصة، وليست أجزاء من ستة عشر."
      ],
      "howToUse": "1. قرّب بطاقة قياسية برفق من الشاشة دون إدخال بياناتها أو رفع صورتها.\n2. اضبط عرض الإطار ليطابقها ثم أكد المعايرة.\n3. حاذِ الجسم مع الصفر واقرأ نهايته. النقر المزدوج يغيّر موضع الصفر.\n4. أعد التحقق بعد التكبير أو تغيير الشاشة أو فتح الصفحة مجددًا.",
      "faq": [
        {
          "q": "هل يضمن الإعداد المحفوظ الدقة؟",
          "a": "لا. يُحفظ العرض السابق محليًا فقط. قد يتغير التكبير أو مقياس العرض، ولذلك يجب تأكيد المطابقة مجددًا."
        },
        {
          "q": "لماذا تختلف النتيجة عن المسطرة الفعلية؟",
          "a": "تؤثر المحاذاة وزاوية النظر ومقياس الشاشة في النتيجة. استخدم مسطرة فعلية للقياسات المهمة."
        }
      ],
      "seo": "تُرسم التدريجات على لوحة المتصفح وفق المقياس المعاير. لا تُكتشف كثافة بكسلات الشاشة الفيزيائية تلقائيًا."
    },
    "wordcounter": {
      "description": "احسب الكلمات والمحارف المرئية مع المسافات وبدونها. راجع طريقة العد قبل تطبيق حد للنص.",
      "longDescription": "تُعد الكلمات باستخدام تقسيم المتصفح الملائم للغة. وتُعد المحارف بوحدات كتابية مرئية؛ فقد يكون الحرف مع علامة مركبة أو الرمز التعبيري المركب وحدة واحدة. يشمل العدد مع المسافات فواصل الأسطر، بينما يستبعد العدد الآخر محارف الفراغ.",
      "usageContext": "لمراجعة المسودات والتعليقات والنماذج. تحقق أيضًا من عدّاد جهة الإرسال؛ فقد يعتمد وحدات UTF-16 أو البايتات بدلًا من المحارف المرئية.",
      "examples": [
        "Hello world: كلمتان، و11 محرفًا مع المسافة، و10 بدونها.",
        "الحرف e مع العلامة المركبة ◌́ يشكّل وحدة مرئية واحدة، وكذلك 👨‍👩‍👧‍👦 في المتصفحات الداعمة."
      ],
      "howToUse": "1. اكتب النص أو الصقه.\n2. قارن عدد الكلمات وعددي المحارف.\n3. أدخل موضعًا لإبراز المحرف المقابل. تستخدم المواضع أيضًا الوحدات المرئية نفسها.",
      "faq": [
        {
          "q": "لماذا يختلف العدد بين المحررات؟",
          "a": "تختلف قواعد علامات الترقيم والأرقام والشرطات واللغات التي لا تفصل كلماتها بمسافات. وقد يؤثر إصدار المتصفح أيضًا."
        },
        {
          "q": "هل يُرفع النص إلى الخادم؟",
          "a": "يُحسب داخل المتصفح. عند غياب التقسيم اللغوي يظهر تنبيه يشرح البديل القائم على المسافات ونقاط ترميز Unicode."
        }
      ],
      "seo": "يُستخدم Intl.Segmenter لتقسيم الكلمات والوحدات المرئية عند توفره. الأداة مساعدة للكتابة ولا تضمن تطابق الحدود في جميع المنصات."
    },
    "jsonformatter": {
      "description": "نسّق JSON دون تقريب الأعداد الكبيرة وافحص الصياغة. فحص الصياغة لا يتحقق من مخطط بيانات التطبيق.",
      "longDescription": "بعد فحص الصياغة، تُضاف المسافات البادئة إلى الرموز الأصلية دون إعادة تسلسل أعداد JavaScript. لذلك تبقى كتابة الأعداد وترتيب الخصائص والأسماء المكررة كما هي. يُعاد ترتيب الفراغ خارج السلاسل النصية فقط.",
      "usageContext": "لقراءة استجابات API وملفات الإعداد. صحة الصياغة لا تثبت وجود الحقول المطلوبة أو عمل الروابط أو سلامة البيانات أو توافقها مع قواعد العمل.",
      "examples": [
        "غير صحيح: {\"name\":\"Apps24\",}. احذف الفاصلة الأخيرة: {\"name\":\"Apps24\"}.",
        "يبقى 9007199254740993 دون تغيير بعد التنسيق، لكن تحويله لاحقًا إلى Number في JavaScript قد يفقد الدقة."
      ],
      "howToUse": "1. الصق JSON أو حمّل المثال.\n2. اختر فحص الصياغة أو التنسيق.\n3. اقرأ الرسالة وصحح الأخطاء يدويًا. لا تُخمّن القيم المفقودة.",
      "faq": [
        {
          "q": "هل أسماء الخصائص المكررة آمنة؟",
          "a": "تُحفظ في النص، لكن بعض البرامج تعتمد القيمة الأخيرة فقط أو ترفضها. يُفضّل استخدام أسماء فريدة."
        },
        {
          "q": "هل تُقبل التعليقات وعلامات الاقتباس المفردة؟",
          "a": "لا. يستخدم JSON القياسي الاقتباس المزدوج ولا يسمح بالتعليقات أو الفواصل النهائية. JSON5 صيغة مختلفة."
        }
      ],
      "seo": "يُفحص النص محليًا. يحافظ التنسيق على الرموز الأصلية، بينما يتطلب المخطط وقواعد العمل تحققًا منفصلًا لدى التطبيق المستقبِل."
    },
    "imagecompressor": {
      "description": "غيّر أبعاد عدة صور وأعد ترميزها في المتصفح. قارن كل نتيجة؛ انخفاض حجم الملف ليس مضمونًا.",
      "longDescription": "يعالج مُرمّز canvas الصور بالتتابع. تؤثر الجودة في JPG وWebP، بينما يتجاهلها PNG. لتقليل PNG صغّر الأبعاد أو اختر WebP. ليست الأداة محسّن PNG متخصصًا دون فقدان ولا تجري تكميمًا للوحة الألوان.",
      "usageContext": "لتجهيز صور لحدود الرفع أو صفحات الويب. جرّب WebP إن كانت الجهة تقبله. احتفظ بـPNG أو WebP للشفافية؛ يحوّل JPG المناطق الشفافة إلى الأبيض.",
      "examples": [
        "عند 50% تتحول صورة 2000 × 1000 إلى 1000 × 500: ربع البكسلات، وليس بالضرورة ربع حجم الملف.",
        "تحول 1 ميغابايت إلى 1.1 ميغابايت يعني توفيرًا بنسبة −10%، أي أن الملف كبر."
      ],
      "howToUse": "1. اختر صورة أو عدة صور.\n2. اضبط الصيغة والأبعاد والجودة عند استخدام JPG/WebP.\n3. انتظر الانتهاء وقارن معاينة كل ملف وحجمه ثم نزّل النتائج.",
      "faq": [
        {
          "q": "هل خفض الجودة يصغّر الملف دائمًا؟",
          "a": "ليس بالضرورة مقارنة بالأصل. يؤثر الضغط السابق والتفاصيل والمُرمّز. يُعطّل تحكم الجودة في PNG لأنه لا يؤثر."
        },
        {
          "q": "هل تُعدّل الملفات الأصلية أو تُرفع؟",
          "a": "تُنشأ نتائج جديدة محليًا دون استبدال الأصل. تُحرر روابط المعاينة المؤقتة عند تبديل الملفات أو إغلاق الأداة."
        }
      ],
      "seo": "قد يغيّر الترميز البيانات الوصفية ولا يحفظ الحركة كاملة في الصور المتحركة. احتفظ بالأصل للأرشفة أو التحرير."
    },
    "iplookup": {
      "description": "اعرض عنوان IP العام المرصود واتصالات الشبكة التقريبية المتاحة. غياب الموقع لا يثبت وجود عطل في الاتصال.",
      "longDescription": "تستخدم الأداة أولًا عنوان العميل العام الذي يمرره وكيل الاستضافة إلى الموقع. إن تعذر الحصول عليه، يطلبه المتصفح من ipify. يوفّر IPinfo تفاصيل الشبكة والموقع التقريبي. عند فشله يبقى العنوان المرصود ظاهرًا وتُعلّم الحقول المفقودة بأنها غير متاحة.",
      "usageContext": "قارن العنوان عند التبديل بين Wi-Fi وبيانات الهاتف وVPN. قد تتشارك أجهزة عديدة عنوانًا عبر NAT، لذا فهو ليس معرّفًا فريدًا للجهاز.",
      "examples": [
        "قد تشير المدينة إلى شبكة مزوّد الخدمة لا إلى منزلك. ليست موقع GPS.",
        "نتيجة IPv4 تصف هذا الاستعلام ولا تثبت أن الجهاز لا يدعم IPv6."
      ],
      "howToUse": "1. انتظر اكتمال الاستعلام.\n2. اقرأ المعلومات المتاحة وانسخ العنوان عند الحاجة.\n3. حدّث بعد تغيير الشبكة. يُستنتج اسما المتصفح والنظام من معلومات المتصفح.",
      "faq": [
        {
          "q": "هل يمكن تأكيد تشغيل VPN؟",
          "a": "لا. اختلاف IP أو المنطقة الزمنية ليس دليلًا كافيًا، لذلك لا تعرض الصفحة حكمًا باكتشاف VPN."
        },
        {
          "q": "ماذا تتلقى الخدمات الخارجية؟",
          "a": "يتلقى IPinfo عنوان IP العام المطلوب. يتصل المتصفح بـipify فقط عند الحاجة إلى الاستعلام البديل. المدينة ليست موقعًا شخصيًا موثّقًا."
        }
      ],
      "seo": "يُعرض بروتوكول العنوان المرصود فقط. لا يُختلق اسم مضيف ولا يُستبدل عنوان الزائر بعنوان خادم الاستضافة."
    }
  }
};

export function getReviewedToolText(locale: Locale, toolId: string): Partial<ToolText> {
  if (!Object.hasOwn(REFERENCES, toolId)) return {};
  const id = toolId as ReviewedToolId;
  return { ...REVIEWED_CONTENT[locale][id], whyUse: "", relatedTools: "", references: REFERENCES[id] };
}
