import type { ToolDefinition } from "@/features/tools/types";
import type { Locale } from "@/lib/site";

type ToolText = {
  title: string;
  description: string;
  seo?: string;
  longDescription?: string;
  usageContext?: string;
  howToUse?: string;
  faq?: { q: string; a: string }[];
};

type CommonText = {
  copyAll: string;
  clear: string;
  sample: string;
  placeholder: string;
  paragraphs: string;
  generatedText: string;
  charCountWithSpaces: string;
  charCountWithoutSpaces: string;
  whichPosition: string;
  backToTools: string;
  copied: string;
  languageSelect: string;
  highlightHelp: string;
  allTools: string;
  footerNote1: string;
  footerNote2: string;
  koLabel: string;
  enLabel: string;
  textCategory: string;
  utilityCategory: string;
  positionPlaceholder: string;
  twelveHour: string;
  twentyFourHour: string;
  fontSize: string;
  customColor: string;
  presetColors: string;
  homeTitle: string;
  homeSubtitle: string;
  rulerHowTo: string;
  rulerStep1: string;
  rulerStep2: string;
  rulerStep3: string;
  rulerEnterCardWidth: string;
  rulerExample: string;
  rulerTip: string;
  calibrate: string;
  changeTo: string;
  exitFullscreen: string;
  fullscreen: string;
  frLabel: string;
  jaLabel: string;
  zhLabel: string;
  zhTWLabel: string;
  ptLabel: string;
  esLabel: string;
  deLabel: string;
  arLabel: string;
  about: string;
  privacy: string;
  terms: string;
  contact: string;
  seoTitle: string;
  aboutPrefix: string;
  imageCategory: string;
  securityCategory: string;
  timeCategory: string;
  displayCategory: string;
  measurementCategory: string;
  generatorCategory: string;
  uploadImage: string;
  compress: string;
  convertToWebP: string;
  download: string;
  reset: string;
  original: string;
  compressed: string;
  size: string;
  format: string;
  validate: string;
  generatePassword: string;
  length: string;
  includeUppercase: string;
  includeLowercase: string;
  includeNumbers: string;
  includeSymbols: string;
  compare: string;
};

const TOOL_TEXTS: Record<Locale, { tools: Record<string, ToolText>; common: CommonText }> = {
  en: {
    tools: {
      imagecompressor: {
        title: "Image Compressor / WebP Converter",
        description: "Reduce image file size and convert to WebP for better web performance.",
        seo: "Compress and convert to webp.",
        longDescription: "Our free Image Compressor helps you reduce image file size in seconds without installing any software. You can also convert supported images to WebP format for better web performance and smaller file sizes. This tool is useful for bloggers, online store owners, students, marketers, and anyone who needs faster-loading images for websites, email attachments, or document uploads.",
        usageContext: "Compressing images is helpful when you want to improve page speed, reduce storage usage, or meet file size limits for websites, forms, and emails. Smaller images can also improve the user experience on mobile devices and slower internet connections. WebP is a modern image format designed to provide smaller file sizes while keeping good visual quality. If you manage a website or blog, converting large images to WebP can help improve loading speed and overall performance.",
        howToUse: "1. Upload your image file.\n2. Choose to compress the image or convert it to WebP.\n3. Preview the result and download the optimized file.",
        faq: [
          { q: "Is this tool free to use?", a: "Yes. You can compress and convert images online for free." },
          { q: "What file types are supported?", a: "Supported file types may vary by browser and tool version, but common web image formats such as JPG and PNG are typically supported." },
          { q: "Will image quality change after compression?", a: "Some compression methods may slightly reduce image quality, but the goal is to keep the image visually useful while reducing the file size." },
          { q: "Why should I convert images to WebP?", a: "WebP files are often smaller than JPG or PNG, which makes them useful for websites, blogs, and other online content." }
        ]
      },
      caseconverter: {
        title: "Case Converter",
        description: "Change text between uppercase, lowercase, and title case.",
        seo: "Convert text to uppercase or lowercase.",
        longDescription: "Case Converter is a simple online tool that changes text between uppercase, lowercase, and title case. It is useful for editing titles, fixing formatting, preparing documents, and cleaning text for websites, emails, and reports. Instead of rewriting text manually, you can paste your content, choose the format you want, and copy the result instantly.",
        usageContext: "This tool is helpful when you need to fix headlines, prepare article titles, format marketing copy, clean imported text, or standardize content before publishing. It can also save time when editing large blocks of text.",
        howToUse: "1. Paste or type your text into the input box.\n2. Select the format you want, such as uppercase, lowercase, or title case.\n3. Copy the converted result.",
        faq: [
          { q: "What is title case?", a: "Title case is a writing style where important words begin with capital letters. It is commonly used for article titles, headings, and page titles." },
          { q: "Can I convert long text?", a: "Yes. You can convert short or long text directly in the tool." },
          { q: "Is this useful for SEO titles or headings?", a: "Yes. It can help you format page titles, headings, and other content more consistently." },
          { q: "Does this tool work for languages other than English?", a: "It works best for alphabet-based languages, especially English, French, and German, though results may vary depending on capitalization rules." }
        ]
      },
      jsonformatter: {
        title: "JSON Formatter & Validator",
        description: "Clean up, organize, and validate JSON data.",
        seo: "Format invalid JSON.",
        longDescription: "JSON Formatter & Validator helps you clean up, organize, and check JSON data online. It is useful for developers, testers, students, and API users who need readable JSON output or want to find syntax errors quickly. If your JSON is difficult to read or not working correctly, this tool makes it easier to format the content and validate whether the structure is correct.",
        usageContext: "Raw JSON is often hard to read, especially when it is compressed into a single line. Formatting adds proper indentation and structure, making it easier to debug, review, and share. A small syntax mistake in JSON can break an API request, configuration file, or app feature. Validation helps detect problems such as missing commas, invalid brackets, or incorrect quotation marks before you use the data elsewhere.",
        howToUse: "1. Paste your JSON into the input box.\n2. Click the format or validate button.\n3. Review the formatted result or check the error message.",
        faq: [
          { q: "What is JSON?", a: "JSON stands for JavaScript Object Notation. It is a common format used to store and exchange structured data." },
          { q: "Can this tool fix invalid JSON automatically?", a: "It can help you identify formatting and structure issues, but some errors may need to be corrected manually." },
          { q: "Why is my JSON invalid?", a: "Common reasons include missing commas, extra commas, incorrect brackets, or using single quotes instead of double quotes." },
          { q: "Is this tool only for developers?", a: "No. It is also useful for students, analysts, and anyone working with JSON data." }
        ]
      },
      passwordgenerator: { title: "Password Generator", description: "Create secure passwords", seo: "Generate random passwords." },
      textdiffchecker: {
        title: "Text Diff Checker",
        description: "Compare texts",
        seo: "Find differences between texts.",
        longDescription: "Text Diff Checker identifies the exact differences between two pieces of text. It highlights additions, deletions, and modifications, making it easy to track changes across versions.",
        usageContext: "Highly useful for developers comparing code, editors reviewing drafts, or anyone needing to verify text consistency.",
        howToUse: "1. Paste the original text in the left panel.\n2. Paste the modified text in the right panel.\n3. Review the highlighted differences instantly.",
        faq: [{"q":"Does it support line-by-line comparison?","a":"Yes, the tool performs a detailed diff analysis to show exactly what changed in each line."}]
      },
      base64encoder: {
        title: "Base64 Encoder & Decoder",
        description: "Encode and Decode Base64 Online",
        seo: "Fast and reliable Base64 encoder and decoder. Convert text to Base64 format and decode Base64 strings instantly in your browser.",
        longDescription: "Base64 Encoder & Decoder is a reliable utility for converting text to Base64 format and vice versa. It uses standard encoding algorithms suitable for data transmission and various development tasks.",
        usageContext: "Commonly used for embedding images in HTML/CSS, transferring binary data over text-based protocols, or simple data obfuscation.",
        howToUse: "1. Enter the text you wish to encode or decode.\n2. Click the 'Encode' or 'Decode' button.\n3. Copy the resulting string from the output area.",
        faq: [{"q":"Is Base64 a form of encryption?","a":"No, Base64 is an encoding scheme meant for data representation, not for security or privacy."}]
      },
      colorconverter: {
        title: "Color Code Converter",
        description: "Convert HEX, RGB, and HSL Colors",
        seo: "Quickly convert color code formats. Input HEX, RGB, or use the color picker to instantly get HSL and RGB values with our browser-based tool.",
        longDescription: "Color Code Converter is a must-have tool for web designers and developers. It allows for seamless translation between HEX, RGB, and HSL color formats with a real-time preview.",
        usageContext: "Use it while designing websites or apps to quickly find the equivalent codes for your color palettes.",
        howToUse: "1. Enter a color code in any format (HEX, RGB, HSL) or use the color picker.\n2. View the converted values instantly.\n3. Click Copy next to any value to use it in your project.",
        faq: [{"q":"Does it support transparency (Alpha)?","a":"The current version focuses on standard colors. RGBA support is planned for future updates."}]
      },
      ruler: {
        title: "Online Ruler",
        description: "Measure screen distances with zero-point placement, credit-card calibration, and cm/inch toggles.",
        longDescription: "The Online Ruler is a high-precision measurement tool that allows you to measure objects directly on your screen. It features zero-point adjustment and calibration against standard objects like credit cards to ensure accuracy regardless of your screen resolution or size.",
        usageContext: "Perfect for designers, hobbyists, or anyone needing quick measurements of small physical objects or screen elements when a physical ruler isn't handy.",
        howToUse: "1. Select your preferred unit (cm or inch).\n2. Calibrate by entering the width of a standard object (like a credit card).\n3. Double-click on the ruler to set a zero point.\n4. Place your object against the screen to measure.",
        faq: [{"q":"How accurate is the screen ruler?","a":"Accuracy depends on calibration. Since screen sizes and resolutions vary, calibrating with a physical object (like a credit card) is essential for precision."}]
      },
      wordcounter: {
        title: "Word Counter",
        description: "Count characters, spaces, and character positions as you type.",
        longDescription: "Word Counter is a real-time text analysis tool that calculates the number of words, characters, and spaces in your text. It also provides detailed breakdowns such as character count without spaces and specific character positioning.",
        usageContext: "Essential for writers, students, and SEO professionals who need to meet specific length requirements for essays, articles, social media posts, or meta descriptions.",
        howToUse: "1. Type or paste your text into the input field.\n2. View the automatically updated counts below.\n3. Use the character position finder to locate specific indices in your text.",
        faq: [{"q":"Is there a limit to the text size?","a":"Our word counter can handle large volumes of text (up to hundreds of thousands of characters) efficiently within your browser."}]
      },
      countdown: {
        title: "Countdown Timer",
        description: "Set a timer, pause it, resume it, and keep track in fullscreen or night mode.",
        longDescription: "Our Countdown Timer is a versatile time management tool designed for productivity and focus. It features a clean, distraction-free interface with full-screen and night mode options.",
        usageContext: "Ideal for Pomodoro sessions, meditation, cooking, or managing presentation times.",
        howToUse: "1. Set the desired time using the input fields.\n2. Click Start to begin the countdown.\n3. Use Pause or Reset as needed.\n4. Toggle Night Mode or Fullscreen for better focus.",
        faq: [{"q":"Does the timer keep running if I switch tabs?","a":"Yes, the timer continues to run in the background as long as the tab remains open."}]
      },
      digitalclock: {
        title: "Digital Clock",
        description: "Check the current time in real time with a fullscreen view.",
        longDescription: "Digital Clock provides a sleek, high-visibility time display for any environment. It supports both 12-hour and 24-hour formats and includes a full-screen mode for use as a desk clock.",
        usageContext: "Great for use in offices, classrooms, or as a bedside clock using a tablet or laptop screen.",
        howToUse: "1. View the current time in the central display.\n2. Switch between 12H and 24H formats.\n3. Enable Fullscreen mode for a large, clear display.",
        faq: [{"q":"Is the time synced accurately?","a":"Yes, the clock uses your device's system time, which is typically synchronized with network time servers."}]
      },
      screenlamp: {
        title: "Screen Lights",
        description: "Turn the screen into a solid color light with fullscreen and custom color choices.",
        longDescription: "Screen Lights turns your entire display into a source of soft, uniform light. You can choose from preset colors or select a custom hue to create the perfect ambiance or use it for emergency lighting.",
        usageContext: "Useful as a soft reading light, a photography backlight, or for testing screen pixels (dead pixel check).",
        howToUse: "1. Choose a preset color or use the color picker for a custom hue.\n2. Adjust the lighting as needed.\n3. Use Fullscreen mode for maximum effect.",
        faq: [{"q":"Can this act as a blue light filter?","a":"By choosing a warm orange or red hue, you can reduce blue light emission from your screen manually."}]
      },
      qrgenerator: {
        title: "QR Code Generator",
        description: "Create QR codes for text, links, and contact details.",
        longDescription: "QR Code Generator lets you create QR codes for text, links, contact details, and other simple content. It is useful for businesses, events, classrooms, restaurants, packaging, and personal sharing. You can generate a QR code in seconds and download it for digital or printed use.",
        usageContext: "QR codes are commonly used for website links, menu access, event check-ins, contact sharing, payment instructions, and product labels. A QR code makes it easier for users to open a page or access information without typing long text manually. This can reduce friction and improve response rates in both online and offline environments.",
        howToUse: "1. Enter the text, URL, or content you want to encode.\n2. Generate the QR code.\n3. Download and use the image where needed.",
        faq: [
          { q: "Can I create a QR code for a website link?", a: "Yes. You can generate a QR code for a URL and share it in printed or digital form." },
          { q: "Can I use QR codes for business materials?", a: "Yes. QR codes are often used on flyers, posters, business cards, packaging, and menus." },
          { q: "Do QR codes expire?", a: "A standard QR code generated from fixed content does not expire on its own. However, the destination content must remain available if you want scans to keep working." },
          { q: "Is this tool free to use?", a: "Yes. You can generate QR codes online without installing extra software." }
        ]
      },
      barcodegenerator: {
        title: "Barcode Generator",
        description: "Create barcodes for products, labels, and inventory.",
        longDescription: "Barcode Generator helps you create barcodes for products, labels, inventory, packaging, and internal tracking. It is useful for small businesses, warehouses, offices, schools, and anyone who needs quick barcode generation online. You can enter your value, choose a barcode type, and download the generated barcode image.",
        usageContext: "Barcodes are widely used in retail, inventory control, shipping, asset tracking, and document labeling. They make it easier to identify items quickly and reduce manual entry errors. Choosing the correct format helps ensure compatibility with scanners and workflows.",
        howToUse: "1. Enter the number or text required for your barcode.\n2. Select the barcode format.\n3. Generate and download the barcode image.",
        faq: [
          { q: "What is a barcode generator?", a: "A barcode generator creates a machine-readable code based on text or numbers you enter." },
          { q: "Which barcode format should I choose?", a: "The best format depends on where the barcode will be used. Retail products, inventory labels, and shipping systems may require different barcode standards." },
          { q: "Can I print the generated barcode?", a: "Yes. After generating the barcode, you can download and print it for labels, packaging, or internal use." },
          { q: "Is this tool suitable for small businesses?", a: "Yes. It is useful for small stores, warehouses, offices, and other teams that need fast barcode creation." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "Generate placeholder paragraphs with a chosen length." },
    },
    common: {
      copyAll: "Copy All",
      clear: "Clear",
      sample: "Sample text",
      placeholder: "Paste or type text here...",
      paragraphs: "Paragraphs",
      generatedText: "Generated Text",
      charCountWithSpaces: "Character count (with spaces)",
      charCountWithoutSpaces: "Character count (without spaces)",
      whichPosition: "Which character position would you like to find?",
      backToTools: "Back to all tools",
      copied: "Copied to clipboard!",
      languageSelect: "Select Content Language",
      highlightHelp: "* The character at the specified index is highlighted in real-time within the text area above.",
      allTools: "All Tools",
      footerNote1: "This tool is part of the apps24 utility suite.",
      footerNote2: "All processing happens locally in your browser for maximum privacy and speed.",
      koLabel: "Korean",
      enLabel: "English",
      textCategory: "Text",
      utilityCategory: "Utility",
      positionPlaceholder: "Position",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Size",
      customColor: "Custom",
      presetColors: "Presets",
      homeTitle: "Fast Multilingual Tools",
      homeSubtitle: "Simple utilities for quick tasks, perfectly localized for your language.",
      rulerHowTo: "How to Use the Online Ruler",
      rulerStep1: "Place a credit card horizontally at the zero mark.",
      rulerStep2: "Enter the measured width of the card and click 'Calibrate'.",
      rulerStep3: "Now you can measure the desired object.",
      rulerEnterCardWidth: "Enter the credit card width",
      rulerExample: "Example: If the width is 10.4 cm, enter 10.4",
      rulerTip: "Tip: Double-click (or double-tap) anywhere on the ruler to set it as the zero point (0,0). Use the blue handle at the bottom-right to resize.",
      calibrate: "Calibrate",
      changeTo: "Change to",
      exitFullscreen: "Exit full screen",
      fullscreen: "Full screen",
      frLabel: "French",
      jaLabel: "Japanese",
      zhLabel: "Chinese (Simplified)",
      zhTWLabel: "Chinese (Traditional)",
      ptLabel: "Portuguese",
      esLabel: "Spanish",
      deLabel: "German",
      arLabel: "Arabic",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool is optimized...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  ko: {
    tools: {
      imagecompressor: {
        title: "이미지 압축기 / WebP 변환기",
        description: "이미지 파일 크기를 줄이고 웹 성능 향상을 위해 WebP로 변환하세요.",
        seo: "이미지 압축 및 WebP 변환.",
        longDescription: "무료 이미지 압축기를 사용하여 소프트웨어 설치 없이 몇 초 만에 이미지 파일 크기를 줄일 수 있습니다. 또한 지원되는 이미지를 WebP 형식으로 변환하여 더 나은 웹 성능과 더 작은 파일 크기를 얻을 수 있습니다. 이 도구는 블로거, 온라인 쇼핑몰 운영자, 학생, 마케터 및 웹사이트, 이메일 첨부 파일 또는 문서 업로드를 위해 더 빠르게 로딩되는 이미지가 필요한 모든 사람에게 유용합니다.",
        usageContext: "이미지 압축은 페이지 속도를 개선하고 저장 공간 사용량을 줄이거나 웹사이트, 양식 및 이메일의 파일 크기 제한을 충족하려는 경우에 유용합니다. 작은 이미지는 모바일 기기 및 느린 인터넷 연결에서도 사용자 경험을 개선할 수 있습니다. WebP는 시각적 품질을 유지하면서 더 작은 파일 크기를 제공하도록 설계된 현대적인 이미지 형식입니다. 웹사이트나 블로그를 관리하는 경우 대용량 이미지를 WebP로 변환하면 로딩 속도와 전반적인 성능을 개선하는 데 도움이 될 수 있습니다.",
        howToUse: "1. 이미지 파일을 업로드합니다.\n2. 이미지 압축 또는 WebP 변환을 선택합니다.\n3. 결과를 미리 보고 최적화된 파일을 다운로드합니다.",
        faq: [
          { q: "이 도구는 무료인가요?", a: "네. 온라인에서 무료로 이미지를 압축하고 변환할 수 있습니다." },
          { q: "어떤 파일 형식이 지원되나요?", a: "지원되는 파일 형식은 브라우저와 도구 버전에 따라 다를 수 있지만, 일반적으로 JPG 및 PNG와 같은 일반적인 웹 이미지 형식이 지원됩니다." },
          { q: "압축 후 이미지 품질이 변하나요?", a: "일부 압축 방식은 이미지 품질을 약간 저하시킬 수 있지만, 목표는 파일 크기를 줄이면서 이미지를 시각적으로 유용하게 유지하는 것입니다." },
          { q: "왜 이미지를 WebP로 변환해야 하나요?", a: "WebP 파일은 종종 JPG나 PNG보다 작아서 웹사이트, 블로그 및 기타 온라인 콘텐츠에 유용합니다." }
        ]
      },
      caseconverter: {
        title: "대소문자 변환기",
        description: "텍스트를 대문자, 소문자, 제목 케이스로 변환하세요.",
        seo: "대소문자 변환 및 텍스트 가공.",
        longDescription: "대소문자 변환기는 텍스트를 대문자, 소문자, 제목 케이스 간에 변환해 주는 간단한 온라인 도구입니다. 제목 편집, 서식 수정, 문서 준비, 웹사이트/이메일/보고서용 텍스트 정리 등에 유용합니다. 텍스트를 수동으로 다시 작성하는 대신 콘텐츠를 붙여넣고 원하는 서식을 선택하여 즉시 결과를 복사할 수 있습니다.",
        usageContext: "이 도구는 헤드라인 수정, 기사 제목 준비, 마케팅 문구 서식 지정, 가져온 텍스트 정리 또는 게시 전 콘텐츠 표준화에 도움이 됩니다. 또한 대량의 텍스트를 편집할 때 시간을 절약할 수 있습니다.",
        howToUse: "1. 입력 상자에 텍스트를 붙여넣거나 입력합니다.\n2. 대문자, 소문자 또는 제목 케이스와 같이 원하는 서식을 선택합니다.\n3. 변환된 결과를 복사합니다.",
        faq: [
          { q: "제목 케이스(Title Case)란 무엇인가요?", a: "제목 케이스는 중요한 단어의 첫 글자를 대문자로 쓰는 작법 스타일입니다. 주로 기사 제목, 헤드라인, 페이지 제목에 사용됩니다." },
          { q: "긴 텍스트도 변환할 수 있나요?", a: "네. 도구에서 직접 짧거나 긴 텍스트를 모두 변환할 수 있습니다." },
          { q: "SEO 제목이나 헤드라인에 유용합니까?", a: "네. 페이지 제목, 헤드라인 및 기타 콘텐츠를 보다 일관되게 형식화하는 데 도움이 될 수 있습니다." },
          { q: "영어 이외의 언어에도 작동하나요?", a: "알파벳 기반 언어(특히 영어, 프랑스어, 독일어)에서 가장 잘 작동하지만, 대문자 규칙에 따라 결과가 다를 수 있습니다." }
        ]
      },
      jsonformatter: {
        title: "JSON 포맷터 및 검증기",
        description: "JSON 데이터를 정리하고 구조를 검증하세요.",
        seo: "JSON 포맷팅 및 유효성 검사.",
        longDescription: "JSON 포맷터 및 검증기는 온라인에서 JSON 데이터를 정리, 구성 및 확인하는 데 도움을 줍니다. 읽기 쉬운 JSON 출력이 필요하거나 구문 오류를 빠르게 찾으려는 개발자, 테스터, 학생 및 API 사용자에게 유용합니다. JSON을 읽기 어렵거나 제대로 작동하지 않는 경우, 이 도구를 사용하면 콘텐츠 서식을 쉽게 지정하고 구조가 올바른지 확인할 수 있습니다.",
        usageContext: "원시(Raw) JSON은 특히 한 줄로 압축되어 있을 때 읽기 어렵습니다. 포맷팅을 통해 적절한 들여쓰기와 구조를 추가하면 디버깅, 검토 및 공유가 더 쉬워집니다. JSON의 작은 구문 실수는 API 요청, 설정 파일 또는 앱 기능을 중단시킬 수 있습니다. 검증은 데이터를 다른 곳에 사용하기 전에 누락된 쉼표, 잘못된 대괄호 또는 잘못된 따옴표와 같은 문제를 감지하는 데 도움이 됩니다.",
        howToUse: "1. 입력 상자에 JSON을 붙여넣습니다.\n2. 포맷(Format) 또는 검증(Validate) 버튼을 클릭합니다.\n3. 포맷된 결과를 검토하거나 오류 메시지를 확인합니다.",
        faq: [
          { q: "JSON이란 무엇인가요?", a: "JSON은 JavaScript Object Notation의 약자입니다. 구조화된 데이터를 저장하고 교환하는 데 사용되는 일반적인 형식입니다." },
          { q: "이 도구가 잘못된 JSON을 자동으로 수정할 수 있나요?", a: "서식 및 구조 문제를 식별하는 데 도움을 줄 수 있지만, 일부 오류는 수동으로 수정해야 할 수도 있습니다." },
          { q: "내 JSON이 왜 유효하지 않나요?", a: "일반적인 원인으로는 누락된 쉼표, 추가 쉼표, 잘못된 대괄호 또는 큰따옴표 대신 작은따옴표를 사용하는 경우가 있습니다." },
          { q: "이 도구는 개발자 전용인가요?", a: "아니요. 학생, 분석가 및 JSON 데이터로 작업하는 모든 사람에게 유용합니다." }
        ]
      },
      passwordgenerator: { title: "비밀번호 생성기", description: "강력하고 안전한 비밀번호를 생성하세요.", seo: "무작위 비밀번호 생성기." },
      textdiffchecker: {
        title: "텍스트 비교기",
        description: "두 텍스트의 차이점을 한눈에 확인하세요.",
        seo: "텍스트 디프 체크 및 비교.",
        longDescription: "텍스트 비교기는 두 텍스트 사이의 정확한 차이점을 식별합니다. 추가, 삭제 및 수정된 내용을 강조 표시하여 버전 간 변경 내용을 쉽게 추적할 수 있습니다.",
        usageContext: "코드를 비교하는 개발자, 초안을 검토하는 편집자 또는 텍스트 일관성을 확인해야 하는 모든 분께 매우 유용합니다.",
        howToUse: "1. 왼쪽 패널에 원본 텍스트를 붙여넣습니다.\n2. 오른쪽 패널에 수정된 텍스트를 붙여넣습니다.\n3. 강조 표시된 차이점을 즉시 확인합니다.",
        faq: [{"q":"한 줄씩 비교 기능을 지원하나요?","a":"네, 각 줄에서 변경된 내용을 정확히 보여주기 위해 상세한 비교 분석을 수행합니다."}]
      },
      base64encoder: {
        title: "Base64 인코더 / 디코더",
        description: "온라인 Base64 텍스트 인코딩 및 디코딩",
        seo: "빠르고 안정적인 Base64 인코더 및 디코더입니다. 브라우저에서 텍스트를 즉시 Base64로 변환하거나 해독해보세요.",
        longDescription: "Base64 인코더 및 디코더는 텍스트를 Base64 형식으로 변환하거나 그 반대로 변환하는 신뢰할 수 있는 유틸리티입니다. 데이터 전송 및 다양한 개발 작업에 적합한 표준 인코딩 알고리즘을 사용합니다.",
        usageContext: "HTML/CSS에 이미지를 포함하거나, 텍스트 기반 프로토콜을 통한 바이너리 데이터 전송, 또는 간단한 데이터 난독화에 흔히 사용됩니다.",
        howToUse: "1. 인코딩하거나 디코딩하려는 텍스트를 입력합니다.\n2. 'Encode' 또는 'Decode' 버튼을 클릭합니다.\n3. 결과창에서 변환된 문자열을 복사합니다.",
        faq: [{"q":"Base64는 암호화의 일종인가요?","a":"아니요, Base64는 보안이나 프라이버시를 위한 것이 아니라 데이터 표현을 위한 인코딩 방식입니다."}]
      },
      colorconverter: {
        title: "색상 코드 변환기",
        description: "HEX, RGB, HSL 색상 코드 실시간 변환",
        seo: "HEX, RGB 코드를 입력하거나 컬러 피커로 색을 선택해 HSL 등의 값을 즉시 확인하고 복사하세요.",
        longDescription: "색상 코드 변환기는 웹 디자이너와 개발자에게 꼭 필요한 도구입니다. 실시간 미리보기와 함께 HEX, RGB, HSL 색상 형식 사이의 완벽한 변환을 지원합니다.",
        usageContext: "웹사이트나 앱을 디자인하는 동안 컬러 팔레트의 동등한 코드를 빠르게 찾는 데 사용하세요.",
        howToUse: "1. 어떤 형식이든 색상 코드를 입력하거나 컬러 피커를 사용합니다.\n2. 즉시 변환된 값들을 확인합니다.\n3. 프로젝트에 사용하려는 값 옆의 'Copy'를 클릭합니다.",
        faq: [{"q":"투명도(Alpha)를 지원하나요?","a":"현재 버전은 표준 색상에 집중하고 있습니다. RGBA 지원은 향후 업데이트 예정입니다."}]
      },
      ruler: {
        title: "온라인 자",
        description: "영점 설정, 신용카드 보정, cm/inch 전환으로 화면 길이를 측정합니다.",
        longDescription: "온라인 자는 화면에서 직접 물체를 측정할 수 있게 해주는 고정밀 측정 도구입니다. 0점 조절 기능과 신용카드와 같은 표준 물체를 이용한 보정 기능을 갖추고 있어 화면 해상도나 크기에 상관없이 정확한 측정이 가능합니다.",
        usageContext: "디자이너, 취미 생활자 또는 실제 자가 없을 때 작은 물리적 물체나 화면 요소를 빠르게 측정해야 하는 모든 분께 완벽한 도구입니다.",
        howToUse: "1. 선호하는 단위(cm 또는 인치)를 선택합니다.\n2. 신용카드와 같은 표준 물체의 너비를 입력하여 보정합니다.\n3. 자 위의 아무 곳이나 더블 클릭하여 0점을 설정합니다.\n4. 측정할 물체를 화면에 대고 측정합니다.",
        faq: [{"q":"화면 자의 정확도는 어느 정도인가요?","a":"정확도는 보정에 달렸습니다. 화면 크기와 해상도가 다양하므로 실제 물체(신용카드 등)를 이용한 보정이 정밀한 측정에 필수적입니다."}]
      },
      wordcounter: {
        title: "글자 수 세기",
        description: "입력한 텍스트의 글자 수와 공백 포함/제외 수를 즉시 계산합니다.",
        longDescription: "글자 수 세기는 텍스트의 단어, 글자, 공백 수를 계산하는 실시간 텍스트 분석 도구입니다. 공백을 제외한 글자 수 및 특정 글자 위치 찾기 등 상세한 분석 결과도 제공합니다.",
        usageContext: "에세이, 기사, 소셜 미디어 게시물 또는 메타 설명의 특정 길이 요구 사항을 맞춰야 하는 작가, 학생 및 SEO 전문가에게 필수적입니다.",
        howToUse: "1. 입력 필드에 텍스트를 입력하거나 붙여넣습니다.\n2. 하단에서 자동 업데이트되는 카운트를 확인합니다.\n3. 글자 위치 찾기 기능을 사용하여 텍스트 내의 특정 인덱스를 찾습니다.",
        faq: [{"q":"텍스트 크기에 제한이 있나요?","a":"저희 글자 수 세기는 수십만 자에 달하는 대용량 텍스트도 브라우저 내에서 효율적으로 처리할 수 있습니다."}]
      },
      countdown: {
        title: "카운트다운 타이머",
        description: "시간을 설정하고 일시정지, 재개, 전체화면, 나이트 모드를 사용할 수 있습니다.",
        longDescription: "카운트다운 타이머는 생산성과 집중력을 위해 설계된 다목적 시간 관리 도구입니다. 전체 화면 및 나이트 모드 옵션과 함께 깔끔하고 방해가 없는 인터페이스를 제공합니다.",
        usageContext: "뽀모도로 세션, 명상, 요리 또는 발표 시간 관리에 이상적입니다.",
        howToUse: "1. 입력 필드를 사용하여 원하는 시간을 설정합니다.\n2. 'Start'를 클릭하여 카운트다운을 시작합니다.\n3. 필요한 경우 일시정지 또는 초기화를 사용합니다.\n4. 더 나은 집중을 위해 나이트 모드나 전체 화면으로 전환합니다.",
        faq: [{"q":"탭을 전환해도 타이머가 계속 작동하나요?","a":"네, 탭이 열려 있는 한 타이머는 백그라운드에서 계속 작동합니다."}]
      },
      digitalclock: {
        title: "디지털 시계",
        description: "현재 시간을 실시간으로 확인하고 전체화면으로 볼 수 있습니다.",
        longDescription: "디지털 시계는 어떤 환경에서도 잘 보이는 세련된 시간 디스플레이를 제공합니다. 12시간제와 24시간제를 모두 지원하며, 탁상시계로 활용 가능한 전체 화면 모드를 포함합니다.",
        usageContext: "사무실, 교실 또는 태블릿/노트북 화면을 이용한 침대 옆 시계로 사용하기 좋습니다.",
        howToUse: "1. 중앙 디스플레이에서 현재 시간을 확인합니다.\n2. 12H와 24H 형식 사이를 전환합니다.\n3. 크고 선명한 화면을 위해 전체 화면 모드를 활성화합니다.",
        faq: [{"q":"시간이 정확하게 동기화되나요?","a":"네, 시계는 기기의 시스템 시간을 사용하며, 이는 일반적으로 네트워크 시간 서버와 동기화됩니다."}]
      },
      screenlamp: {
        title: "스크린 라이트",
        description: "전체화면과 사용자 색상으로 화면 전체를 단색 조명으로 바꿉니다.",
        longDescription: "스크린 라이트는 전체 디스플레이를 부드럽고 균일한 광원으로 바꿔줍니다. 프리셋 색상을 선택하거나 커스텀 색상을 골라 완벽한 분위기를 조성하거나 비상 조명으로 사용할 수 있습니다.",
        usageContext: "부드러운 독서등, 촬영용 백라이트 또는 화면 픽셀 테스트(불량 화소 체크) 시 유용합니다.",
        howToUse: "1. 프리셋 색상을 선택하거나 컬러 피커를 사용하여 원하는 색상을 고릅니다.\n2. 필요에 따라 조명을 조정합니다.\n3. 최대 효과를 위해 전체 화면 모드를 사용합니다.",
        faq: [{"q":"블루라이트 차단 기능이 있나요?","a":"따뜻한 오렌지색이나 빨간색 계열을 선택하여 화면에서의 블루라이트 방출을 수동으로 줄일 수 있습니다."}]
      },
      qrgenerator: {
        title: "QR 코드 생성기",
        description: "텍스트, 링크, 연락처 등을 위한 QR 코드를 생성하세요.",
        longDescription: "QR 코드 생성기를 사용하면 텍스트, 링크, 연락처 정보 및 기타 간단한 콘텐츠에 대한 QR 코드를 만들 수 있습니다. 비즈니스, 이벤트, 교실, 레스토랑, 패키징 및 개인적인 공유에 유용합니다. 몇 초 만에 QR 코드를 생성하고 디지털 또는 인쇄용으로 다운로드할 수 있습니다.",
        usageContext: "QR 코드는 웹사이트 링크, 메뉴 액세스, 이벤트 체크인, 연락처 공유, 결제 지침 및 제품 라벨에 흔히 사용됩니다. QR 코드를 사용하면 사용자가 긴 텍스트를 수동으로 입력하지 않고도 페이지를 열거나 정보에 액세스할 수 있습니다. 이는 온/오프라인 환경 모두에서 마찰을 줄이고 응답률을 높일 수 있습니다.",
        howToUse: "1. 인코딩하려는 텍스트, URL 또는 콘텐츠를 입력합니다.\n2. QR 코드를 생성합니다.\n3. 이미지를 다운로드하여 필요한 곳에 사용합니다.",
        faq: [
          { q: "웹사이트 링크용 QR 코드를 만들 수 있나요?", a: "네. URL에 대한 QR 코드를 생성하여 인쇄물이나 디지털 형태로 공유할 수 있습니다." },
          { q: "비즈니스 자료에 QR 코드를 사용할 수 있나요?", a: "네. QR 코드는 전단지, 포스터, 명함, 패키징 및 메뉴에 자주 사용됩니다." },
          { q: "QR 코드가 만료되나요?", a: "고정된 콘텐츠로 생성된 표준 QR 코드는 자체적으로 만료되지 않습니다. 하지만 스캔이 계속 작동하려면 연결된 콘텐츠가 계속 유지되어야 합니다." },
          { q: "이 도구는 무료인가요?", a: "네. 추가 소프트웨어를 설치하지 않고도 온라인에서 QR 코드를 무료로 생성할 수 있습니다." }
        ]
      },
      barcodegenerator: {
        title: "바코드 생성기",
        description: "제품, 재고 관리 및 추적을 위한 바코드를 생성하세요.",
        longDescription: "바코드 생성기는 제품, 라벨, 재고, 패키징 및 내부 추적을 위한 바코드를 생성하는 데 도움을 줍니다. 소규모 비즈니스, 창고, 사무실, 학교 및 온라인에서 빠른 바코드 생성이 필요한 모든 사람에게 유용합니다. 값을 입력하고 바코드 유형을 선택한 다음 생성된 바코드 이미지를 다운로드할 수 있습니다.",
        usageContext: "바코드는 소매, 재고 관리, 배송, 자산 추적 및 문서 라벨링에 널리 사용됩니다. 아이템을 빠르게 식별하고 수동 입력 오류를 줄이는 데 도움이 됩니다. 올바른 형식을 선택하면 스캐너 및 워크플로와의 호환성을 보장할 수 있습니다.",
        howToUse: "1. 바코드에 필요한 숫자나 텍스트를 입력합니다.\n2. 바코드 서식을 선택합니다.\n3. 바코드 이미지를 생성하고 다운로드합니다.",
        faq: [
          { q: "바코드 생성기란 무엇인가요?", a: "바코드 생성기는 입력한 텍스트나 숫자를 기반으로 기계가 읽을 수 있는 코드를 만듭니다." },
          { q: "어떤 바코드 서식을 선택해야 하나요?", a: "가장 적합한 형식은 바코드가 사용될 위치에 따라 다릅니다. 소매 제품, 재고 라벨 및 배송 시스템에는 서로 다른 바코드 표준이 필요할 수 있습니다." },
          { q: "생성된 바코드를 인쇄할 수 있나요?", a: "네. 바코드를 생성한 후 라벨, 패키징 또는 내부용으로 다운로드하여 인쇄할 수 있습니다." },
          { q: "소규모 비즈니스에 적합한가요?", a: "네. 빠른 바코드 생성이 필요한 소규모 매장, 창고, 사무실 및 기타 팀에 유용합니다." }
        ]
      },
      dummytext: { title: "로렘 입숨", description: "문단 수를 정해 자리표시자 텍스트를 생성합니다." },
    },
    common: {
      copyAll: "전체 복사",
      clear: "지우기",
      sample: "샘플 텍스트",
      placeholder: "여기에 텍스트를 입력하거나 붙여넣으세요...",
      paragraphs: "문단 수",
      generatedText: "생성된 텍스트",
      charCountWithSpaces: "글자 수 (공백 포함)",
      charCountWithoutSpaces: "글자 수 (공백 제외)",
      whichPosition: "찾고 싶은 글자 위치는 어디인가요?",
      backToTools: "전체 도구로 돌아가기",
      copied: "클립보드에 복사되었습니다!",
      languageSelect: "콘텐츠 언어 선택",
      highlightHelp: "* 지정된 인덱스의 글자가 상단 입력창 내에서 실시간으로 강조되어 표시됩니다.",
      allTools: "모든 도구",
      footerNote1: "이 도구는 apps24 유틸리티 제품군의 일부입니다.",
      footerNote2: "모든 처리는 개인 정보 보호와 속도를 위해 브라우저에서 로컬로 수행됩니다.",
      koLabel: "한국어",
      enLabel: "영어",
      textCategory: "텍스트",
      utilityCategory: "유틸리티",
      positionPlaceholder: "위치",
      twelveHour: "12시간",
      twentyFourHour: "24시간",
      fontSize: "크기",
      customColor: "선택",
      presetColors: "프리셋",
      homeTitle: "빠른 다국어 도구 모음",
      homeSubtitle: "간단한 작업을 위한 유틸리티, 당신의 언어에 완벽하게 맞춰져 있습니다.",
      rulerHowTo: "온라인 자 사용법",
      rulerStep1: "신용카드를 가로로 0점 표시 부분에 놓습니다.",
      rulerStep2: "카드의 실제 너비를 입력하고 '보정' 버튼을 누릅니다.",
      rulerStep3: "이제 원하는 물체를 측정할 수 있습니다.",
      rulerEnterCardWidth: "신용카드 너비를 입력하세요",
      rulerExample: "예시: 너비가 10.4 cm인 경우 10.4 입력",
      rulerTip: "팁: 자 위의 아무 곳이나 더블 클릭(또는 더블 탭)하면 그 지점이 0점으로 설정됩니다. 우측 하단 파란색 핸들로 크기를 조절하세요.",
      calibrate: "보정하기",
      changeTo: "단위 변경:",
      exitFullscreen: "전체화면 종료",
      fullscreen: "전체화면",
      frLabel: "프랑스어",
      jaLabel: "일본어",
      zhLabel: "중국어(간체)",
      zhTWLabel: "중국어(번체)",
      ptLabel: "포르투갈어",
      esLabel: "스페인어",
      deLabel: "독일어",
      arLabel: "아랍어",
      about: "소개",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      contact: "문의하기",
      seoTitle: "전문가 가이드",
      aboutPrefix: "이 무료 온라인 도구는...",
      imageCategory: "이미지",
      securityCategory: "보안",
      timeCategory: "시간",
      displayCategory: "디스플레이",
      measurementCategory: "측정",
      generatorCategory: "생성기",
      uploadImage: "업로드",
      compress: "압축",
      convertToWebP: "WebP 변환",
      download: "다운로드",
      reset: "초기화",
      original: "원본",
      compressed: "압축됨",
      size: "크기",
      format: "JSON 포맷팅",
      validate: "검증",
      generatePassword: "비밀번호 생성",
      length: "길이",
      includeUppercase: "대문자",
      includeLowercase: "소문자",
      includeNumbers: "숫자",
      includeSymbols: "기호",
      compare: "비교",
    },
  },
  fr: {
    tools: {
      imagecompressor: {
        title: "Compresseur d'images / Convertisseur WebP",
        description: "Réduisez la taille des fichiers image et convertissez en WebP pour de meilleures performances web.",
        seo: "Compresser et convertir en WebP.",
        longDescription: "Notre compresseur d'images gratuit vous aide à réduire la taille des fichiers image en quelques secondes, sans installer de logiciel. Vous pouvez également convertir des images en format WebP pour de meilleures performances web. Cet outil est utile pour les blogueurs, les propriétaires de boutiques en ligne, les étudiants, les spécialistes du marketing et toute personne ayant besoin d'images à chargement rapide.",
        usageContext: "La compression d'images est utile lorsque vous souhaitez améliorer la vitesse des pages, réduire l'utilisation du stockage ou respecter les limites de taille de fichier pour les sites Web et les e-mails. Des images plus petites améliorent également l'expérience utilisateur sur les appareils mobiles. WebP est un format d'image moderne conçu pour offrir des fichiers plus petits tout en conservant une bonne qualité visuelle.",
        howToUse: "1. Téléchargez votre fichier image.\n2. Choisissez de compresser l'image ou de la convertir en WebP.\n3. Prévisualisez le résultat et téléchargez le fichier optimisé.",
        faq: [
          { q: "Cet outil est-il gratuit ?", a: "Oui. Vous pouvez compresser et convertir des images en ligne gratuitement." },
          { q: "Quels types de fichiers sont pris en charge ?", a: "Les formats d'image web courants tels que JPG et PNG sont généralement pris en charge." },
          { q: "La qualité de l'image changera-t-elle après la compression ?", a: "Certaines méthodes de compression peuvent légèrement réduire la qualité, mais l'objectif est de conserver l'image visuellement utile tout en réduisant la taille du fichier." },
          { q: "Pourquoi convertir les images en WebP ?", a: "Les fichiers WebP sont souvent plus petits que JPG ou PNG, ce qui les rend utiles pour les sites Web et les blogs." }
        ]
      },
      caseconverter: {
        title: "Convertisseur de casse",
        description: "Changez le texte en majuscules, minuscules ou format titre.",
        seo: "Convertir le texte en majuscules ou minuscules.",
        longDescription: "Le Convertisseur de casse est un outil en ligne simple qui transforme le texte en majuscules, minuscules ou format titre. Il est utile pour éditer des titres, corriger la mise en forme, préparer des documents et nettoyer du texte pour des sites Web, des e-mails et des rapports.",
        usageContext: "Cet outil est utile pour corriger les titres, préparer des titres d'articles, formater du texte marketing, nettoyer du texte importé ou standardiser du contenu avant publication.",
        howToUse: "1. Collez ou saisissez votre texte dans la zone de saisie.\n2. Sélectionnez le format souhaité : majuscules, minuscules ou format titre.\n3. Copiez le résultat converti.",
        faq: [
          { q: "Qu'est-ce que le format titre (Title Case) ?", a: "Le format titre est un style d'écriture où les mots importants commencent par une majuscule. Il est couramment utilisé pour les titres d'articles et les en-têtes." },
          { q: "Puis-je convertir un texte long ?", a: "Oui. Vous pouvez convertir des textes courts ou longs directement dans l'outil." },
          { q: "Est-ce utile pour les titres SEO ?", a: "Oui. Cela peut vous aider à formater les titres de page et les en-têtes de manière cohérente." },
          { q: "Cet outil fonctionne-t-il pour des langues autres que l'anglais ?", a: "Il fonctionne mieux pour les langues à alphabet latin, notamment le français, l'anglais et l'allemand." }
        ]
      },
      jsonformatter: {
        title: "Formateur et validateur JSON",
        description: "Nettoyez, organisez et validez des données JSON.",
        seo: "Formater et valider du JSON.",
        longDescription: "Le Formateur et validateur JSON vous aide à nettoyer, organiser et vérifier des données JSON en ligne. Il est utile pour les développeurs, les testeurs, les étudiants et les utilisateurs d'API qui ont besoin d'une sortie JSON lisible ou souhaitent trouver rapidement des erreurs de syntaxe.",
        usageContext: "Le JSON brut est souvent difficile à lire, surtout lorsqu'il est compressé sur une seule ligne. Le formatage ajoute une indentation et une structure appropriées, facilitant le débogage et le partage. Une petite erreur de syntaxe dans JSON peut casser une requête API ou un fichier de configuration.",
        howToUse: "1. Collez votre JSON dans la zone de saisie.\n2. Cliquez sur le bouton de formatage ou de validation.\n3. Consultez le résultat formaté ou vérifiez le message d'erreur.",
        faq: [
          { q: "Qu'est-ce que le JSON ?", a: "JSON signifie JavaScript Object Notation. C'est un format courant pour stocker et échanger des données structurées." },
          { q: "Cet outil peut-il corriger automatiquement un JSON invalide ?", a: "Il peut aider à identifier les problèmes de formatage, mais certaines erreurs doivent être corrigées manuellement." },
          { q: "Pourquoi mon JSON est-il invalide ?", a: "Les raisons courantes incluent des virgules manquantes, des crochets incorrects ou l'utilisation de guillemets simples au lieu de doubles." },
          { q: "Cet outil est-il réservé aux développeurs ?", a: "Non. Il est également utile pour les étudiants, les analystes et toute personne travaillant avec des données JSON." }
        ]
      },
      passwordgenerator: { title: "Générateur de mot de passe", description: "Créez des mots de passe sécurisés", seo: "Générer des mots de passe aléatoires." },
      textdiffchecker: { title: "Comparateur de texte", description: "Comparer des textes", seo: "Trouver des différences entre deux textes." },
      base64encoder: { title: "Encodeur / Décodeur Base64", description: "Encoder et Décoder Base64 en ligne", seo: "Encodeur et décodeur Base64 rapide et fiable. Convertissez instantanément du texte en Base64 dans votre navigateur." },
      colorconverter: { title: "Convertisseur de Code Couleur", description: "Convertir HEX, RGB et HSL", seo: "Convertissez rapidement les formats de codes couleurs. Entrez HEX, RGB ou utilisez le sélecteur de couleurs pour obtenir instantanément des valeurs HSL." },
      ruler: {
        title: "Règle en ligne",
        description: "Mesurez les distances à l'écran avec étalonnage par carte de crédit.",
        longDescription: "The Online Ruler is a high-precision measurement tool that allows you to measure objects directly on your screen. It features zero-point adjustment and calibration against standard objects like credit cards to ensure accuracy regardless of your screen resolution or size.",
        usageContext: "Perfect for designers, hobbyists, or anyone needing quick measurements of small physical objects or screen elements when a physical ruler isn't handy.",
        howToUse: "1. Select your preferred unit (cm or inch).\n2. Calibrate by entering the width of a standard object (like a credit card).\n3. Double-click on the ruler to set a zero point.\n4. Place your object against the screen to measure.",
        faq: [{"q":"How accurate is the screen ruler?","a":"Accuracy depends on calibration. Since screen sizes and resolutions vary, calibrating with a physical object (like a credit card) is essential for precision."}]
      },
      wordcounter: {
        title: "Compteur de mots",
        description: "Comptez les caractères et les mots en temps réel.",
        longDescription: "Word Counter is a real-time text analysis tool that calculates the number of words, characters, and spaces in your text. It also provides detailed breakdowns such as character count without spaces and specific character positioning.",
        usageContext: "Essential for writers, students, and SEO professionals who need to meet specific length requirements for essays, articles, social media posts, or meta descriptions.",
        howToUse: "1. Type or paste your text into the input field.\n2. View the automatically updated counts below.\n3. Use the character position finder to locate specific indices in your text.",
        faq: [{"q":"Is there a limit to the text size?","a":"Our word counter can handle large volumes of text (up to hundreds of thousands of characters) efficiently within your browser."}]
      },
      countdown: { title: "Compte à rebours", description: "Réglez une minuterie avec mode plein écran et nuit." },
      digitalclock: { title: "Horloge numérique", description: "Consultez l'heure actuelle en temps réel." },
      screenlamp: { title: "Lampe d'écran", description: "Transformez votre écran en une source lumineuse colorée." },
      qrgenerator: {
        title: "Générateur de QR Code",
        description: "Créez des QR codes pour des liens, du texte et des contacts.",
        longDescription: "Le générateur de QR Code vous permet de créer des QR codes pour du texte, des liens, des coordonnées et d'autres contenus simples. Il est utile pour les entreprises, les événements, les restaurants et le partage personnel. Vous pouvez générer un QR code en quelques secondes et le télécharger pour une utilisation numérique ou imprimée.",
        usageContext: "Les QR codes sont couramment utilisés pour les liens vers des sites Web, l'accès aux menus, le partage de contacts et les étiquettes produit. Un QR code facilite l'ouverture d'une page ou l'accès à des informations sans avoir à taper manuellement de longs textes, réduisant ainsi les frictions en ligne et hors ligne.",
        howToUse: "1. Entrez le texte, l'URL ou le contenu que vous souhaitez encoder.\n2. Générez le QR code.\n3. Téléchargez et utilisez l'image là où vous en avez besoin.",
        faq: [
          { q: "Puis-je créer un QR code pour un lien de site Web ?", a: "Oui. Vous pouvez générer un QR code pour une URL et le partager sous forme imprimée ou numérique." },
          { q: "Puis-je utiliser des QR codes pour des supports commerciaux ?", a: "Oui. Les QR codes sont souvent utilisés sur les flyers, les affiches, les cartes de visite, les emballages et les menus." },
          { q: "Les QR codes expirent-ils ?", a: "Un QR code standard généré à partir d'un contenu fixe n'expire pas en soi. Cependant, le contenu de destination doit rester disponible pour que les scans continuent à fonctionner." },
          { q: "Cet outil est-il gratuit ?", a: "Oui. Vous pouvez générer des QR codes en ligne sans installer de logiciel supplémentaire." }
        ]
      },
      barcodegenerator: {
        title: "Générateur de code-barres",
        description: "Créez des codes-barres pour les produits, étiquettes et inventaires.",
        longDescription: "Le générateur de code-barres vous aide à créer des codes-barres pour les produits, les étiquettes, l'inventaire, les emballages et le suivi interne. Il est utile pour les petites entreprises, les entrepôts, les bureaux et toute personne ayant besoin d'une génération rapide de codes-barres en ligne.",
        usageContext: "Les codes-barres sont largement utilisés dans le commerce de détail, le contrôle des stocks, l'expédition et l'étiquetage de documents. Ils permettent d'identifier les articles rapidement et de réduire les erreurs de saisie manuelle. Choisir le bon format garantit la compatibilité avec les scanners.",
        howToUse: "1. Entrez le numéro ou le texte requis pour votre code-barres.\n2. Sélectionnez le format du code-barres.\n3. Générez et téléchargez l'image du code-barres.",
        faq: [
          { q: "Qu'est-ce qu'un générateur de code-barres ?", a: "Un générateur de code-barres crée un code lisible par machine basé sur le texte ou les chiffres que vous saisissez." },
          { q: "Quel format de code-barres dois-je choisir ?", a: "Le meilleur format dépend de l'endroit où le code-barres sera utilisé. Les produits de vente au détail, les étiquettes d'inventaire et les systèmes d'expédition peuvent nécessiter des normes différentes." },
          { q: "Puis-je imprimer le code-barres généré ?", a: "Oui. Après avoir généré le code-barres, vous pouvez le télécharger et l'imprimer pour des étiquettes ou un usage interne." },
          { q: "Cet outil est-il adapté aux petites entreprises ?", a: "Oui. Il est utile pour les petits magasins, entrepôts, bureaux et autres équipes qui ont besoin de créer des codes-barres rapidement." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "Générez des paragraphes de texte de remplacement." },
    },
    common: {
      copyAll: "Tout copier",
      clear: "Effacer",
      sample: "Texte d'exemple",
      placeholder: "Collez ou tapez votre texte ici...",
      paragraphs: "Paragraphes",
      generatedText: "Texte généré",
      charCountWithSpaces: "Nombre de caractères (avec espaces)",
      charCountWithoutSpaces: "Nombre de caractères (sans espaces)",
      whichPosition: "Quelle position de caractère voulez-vous trouver?",
      backToTools: "Retour aux outils",
      copied: "Copié dans le presse-papiers!",
      languageSelect: "Choisir la langue du contenu",
      highlightHelp: "* Le caractère à l'index spécifié est mis en évidence en temps réel dans la zone de texte ci-dessus.",
      allTools: "Toutes les outils",
      footerNote1: "Cet outil fait partie de la suite utilitaire apps24.",
      footerNote2: "Tout le traitement se fait localement dans votre navigateur pour une confidentialité et une rapidité maximales.",
      koLabel: "Coréen",
      enLabel: "Anglais",
      textCategory: "Texte",
      utilityCategory: "Utilitaire",
      positionPlaceholder: "Position",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Taille",
      customColor: "Couleur",
      presetColors: "Préréglages",
      homeTitle: "Outils multilingues rapides",
      homeSubtitle: "Des utilitaires simples pour des tâches rapides, parfaitement localisés pour votre langue.",
      rulerHowTo: "Comment utiliser la règle en ligne",
      rulerStep1: "Placez une carte de crédit horizontalement sur la marque zéro.",
      rulerStep2: "Entrez la largeur mesurée de la carte et cliquez sur 'Calibrer'.",
      rulerStep3: "Vous pouvez maintenant mesurer l'objet souhaité.",
      rulerEnterCardWidth: "Entrez la largeur de la carte de crédit",
      rulerExample: "Exemple : Si la largeur est de 10,4 cm, entrez 10,4",
      rulerTip: "Conseil : Utilisez la poignée bleue dans le coin inférieur droit du canevas pour le redimensionner.",
      calibrate: "Calibrer",
      changeTo: "Passer à",
      exitFullscreen: "Quitter le plein écran",
      fullscreen: "Plein écran",
      frLabel: "Français",
      jaLabel: "Japonais",
      zhLabel: "Chinois (Simplifié)",
      zhTWLabel: "Chinois (Traditionnel)",
      ptLabel: "Portugais",
      esLabel: "Espagnol",
      deLabel: "Allemand",
      arLabel: "Arabe",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  ja: {
    tools: {
      imagecompressor: {
        title: "画像圧縮 / WebP変換",
        description: "画像サイズを縮小し、Webパフォーマンスを向上させるためにWebPに変換します。",
        seo: "画像を圧縮してWebPに変換。",
        longDescription: "無料の画像圧縮ツールを使用すると、ソフトウェアをインストールすることなく、数秒で画像ファイルサイズを縮小できます。また、サポートされている画像をWebP形式に変換して、Webパフォーマンスを向上させ、ファイルサイズを小さくすることもできます。このツールは、ブロガー、オンラインショップのオーナー、学生、マーケティング担当者など、ウェブサイトやメール、書類アップロード用の高速読み込み画像が必要な方に適しています。",
        usageContext: "画像の圧縮は、ページの読み込み速度を向上させたり、ストレージの使用量を削減したり、ウェブサイト、フォーム、メールのファイルサイズ制限を満たしたい場合に役立ちます。サイズの小さい画像は、モバイルデバイスや低速なインターネット環境でもユーザーエクスペリエンスを向上させます。WebPは、画質を維持しながらファイルサイズを小さくするために設計された最新の画像形式です。",
        howToUse: "1. 画像ファイルをアップロードします。\n2. 画像を圧縮するか、WebPに変換するかを選択します。\n3. 結果をプレビューし、最適化されたファイルをダウンロードします。",
        faq: [
          { q: "このツールは無料で利用できますか？", a: "はい。オンラインで無料で画像を圧縮および変換できます。" },
          { q: "サポートされているファイル形式は何ですか？", a: "ブラウザによって異なりますが、一般的にJPGやPNGなどの一般的なWeb画像形式がサポートされています。" },
          { q: "圧縮後に画質は変わりますか？", a: "一部の圧縮方法では画質がわずかに低下する場合がありますが、ファイルサイズを縮小しながら、視覚的に有用な状態を維持することを優先します。" },
          { q: "なぜ画像をWebPに変換する必要があるのですか？", a: "WebPファイルは多くの場合JPGやPNGよりも小さく、ウェブサイトやブログの読み込み速度向上に寄与します。" }
        ]
      },
      caseconverter: {
        title: "大文字・小文字変換",
        description: "テキストを大文字、小文字、タイトルケースに変換します。",
        seo: "テキストを大文字または小文字に変換。",
        longDescription: "Case Converterは、テキストを大文字、小文字、タイトルケース（単語の先頭を大文字にする形式）に変換するシンプルなオンラインツールです。タイトルの編集、書式の修正、ドキュメントの準備、ウェブサイトやメール、レポート用のテキスト整理に役立ちます。手動で書き直す代わりに、コンテンツを貼り付けて形式を選択するだけで、すぐに結果をコピーできます。",
        usageContext: "このツールは、見出しの修正、記事タイトルの準備、マーケティングコピーの構成、インポートしたテキストの整理、公開前のコンテンツ標準化に役立ちます。",
        howToUse: "1. 入力ボックスにテキストを貼り付けるか入力します。\n2. 大文字、小文字、タイトルケースなど、希望の形式を選択します。\n3. 変換された結果をコピーします。",
        faq: [
          { q: "タイトルケースとは何ですか？", a: "タイトルケースは、重要な単語の先頭を大文字にする書き方です。記事のタイトルや見出しで一般的に使用されます。" },
          { q: "長いテキストを変換できますか？", a: "はい。短いテキストから長いテキストまで、ツールで直接変換できます。" },
          { q: "SEOのタイトルや見出しに役立ちますか？", a: "はい。ページタイトルや見出しの一貫性を保つのに役立ちます。" },
          { q: "英語以外の言語でも動作しますか？", a: "アルファベットベースの言語で最適に動作しますが、大文字化の規則によって結果が異なる場合があります。" }
        ]
      },
      jsonformatter: {
        title: "JSONフォーマット・バリデーター",
        description: "JSONデータの整形、整理、および検証を行います。",
        seo: "無効なJSONを整形。",
        longDescription: "JSON Formatter & Validatorは、オンラインでJSONデータを整理、確認するのに役立ちます。読みやすいJSON出力が必要な開発者、テスター、学生、APIユーザー、または構文エラーをすばやく見つけたい方に適しています。JSONが読み書きしにくい場合や正しく動作しない場合に、構造を整形して検証を容易にします。",
        usageContext: "生のJSONは、特に1行に圧縮されている場合、読みにくいことがよくあります。整形すると適切なインデントと構造が追加され、デバッグや共有が容易になります。JSONのわずかな構文ミスがAPIリクエストやアプリの機能を損なう可能性があるため、検証は重要です。",
        howToUse: "1. 入力ボックスにJSONを貼り付けます。\n2. 整形（Format）または検証（Validate）ボタンをクリックします。\n3. 整形された結果を確認し、エラーメッセージをチェックします。",
        faq: [
          { q: "JSONとは何ですか？", a: "JSONはJavaScript Object Notationの略です。構造化されたデータを保存・交換するための一般的な形式です。" },
          { q: "このツールは無効なJSONを自動的に修正できますか？", a: "構造上の問題を特定するのに役立ちますが、一部のエラーは手動で修正する必要があります。" },
          { q: "なぜJSONが無効なのですか？", a: "カンマの不足、余分なカンマ、不適切な括弧、またはダブルクォートの代わりにシングルクォートを使用していることが一般的な原因です。" },
          { q: "このツールは開発者専用ですか？", a: "いいえ。学生、アナリスト、JSONデータを使用するすべての人に役立ちます。" }
        ]
      },
      passwordgenerator: { title: "Password Generator", description: "Create secure passwords", seo: "Generate random passwords." },
      textdiffchecker: { title: "Text Diff Checker", description: "Compare texts", seo: "Find differences between texts." },
      base64encoder: { title: "Base64 エンコーダ / デコーダ", description: "オンラインでBase64をエンコード・デコード", seo: "高速で信頼性の高いBase64エンコーダおよびデコーダ。ブラウザで即座にテキストをBase64形式に変換または解読できます。" },
      colorconverter: { title: "カラーコード変換", description: "HEX、RGB、HSLカラーを変換", seo: "カラーコード形式をすばやく変換します。HEX、RGBを入力するか、カラーピッカーを使用して、即座にHSLおよびRGB値を取得します。" },
      ruler: {
        title: "定規オンライン",
        description: "カード調整機能付きで画面上の長さを測定します。",
        longDescription: "온라인 자는 화면에서 직접 물체를 측정할 수 있게 해주는 고정밀 측정 도구입니다. 0점 조절 기능과 신용카드와 같은 표준 물체를 이용한 보정 기능을 갖추고 있어 화면 해상도나 크기에 상관없이 정확한 측정이 가능합니다.",
        usageContext: "디자이너, 취미 생활자 또는 실제 자가 없을 때 작은 물리적 물체나 화면 요소를 빠르게 측정해야 하는 모든 분께 완벽한 도구입니다.",
        howToUse: "1. 선호하는 단위(cm 또는 인치)를 선택합니다.\n2. 신용카드와 같은 표준 물체의 너비를 입력하여 보정합니다.\n3. 자 위의 아무 곳이나 더블 클릭하여 0점을 설정합니다.\n4. 측정할 물체를 화면에 대고 측정합니다.",
        faq: [{"q":"화면 자의 정확도는 어느 정도인가요?","a":"정확도는 보정에 달렸습니다. 화면 크기와 해상도가 다양하므로 실제 물체(신용카드 등)를 이용한 보정이 정밀한 측정에 필수적입니다."}]
      },
      wordcounter: {
        title: "文字数カウント",
        description: "リアルタイムで文字数や単語数をカウントします。",
        longDescription: "글자 수 세기는 텍스트의 단어, 글자, 공백 수를 계산하는 실시간 텍스트 분석 도구입니다. 공백을 제외한 글자 수 및 특정 글자 위치 찾기 등 상세한 분석 결과도 제공합니다.",
        usageContext: "에세이, 기사, 소셜 미디어 게시물 또는 메타 설명의 특정 길이 요구 사항을 맞춰야 하는 작가, 학생 및 SEO 전문가에게 필수적입니다.",
        howToUse: "1. 입력 필드에 텍스트를 입력하거나 붙여넣습니다.\n2. 하단에서 자동 업데이트되는 카운트를 확인합니다.\n3. 글자 위치 찾기 기능을 사용하여 텍스트 내의 특정 인덱스를 찾습니다.",
        faq: [{"q":"텍스트 크기에 제한이 있나요?","a":"저희 글자 수 세기는 수십만 자에 달하는 대용량 텍스트도 브라우저 내에서 효율적으로 처리할 수 있습니다."}]
      },
      countdown: { title: "カウントダウン", description: "タイマーの設定、一時停止、再開が可能です。" },
      digitalclock: { title: "デジタル時計", description: "現在時間をリアルタイムで確認でき、全画面で表示可能です。" },
      screenlamp: { title: "スクリーンライト", description: "画面を単色の照明として使用できます。" },
      qrgenerator: {
        title: "QRコード作成",
        description: "リンク、テキスト、連絡先用のQRコードを作成します。",
        longDescription: "QRコード作成ツールを使用すると、テキスト、リンク、連絡先情報などのコンテンツからQRコードを作成できます。ビジネス、イベント、レストラン、個人的な共有に役立ちます。数秒でコードを生成し、デジタルまたは印刷用にダウンロードできます。",
        usageContext: "QRコードは、ウェブサイトへのリンク、メニューへのアクセス、連絡先の共有によく使用されます。長いテキストを入力することなく、ユーザーが情報にアクセスできるようにします。",
        howToUse: "1. エンコードしたいテキスト、URL、またはコンテンツを入力します。\n2. QRコードを生成します。\n3. 画像をダウンロードして必要な場所で使用します。",
        faq: [
          { q: "ウェブサイトのリンク用のQRコードを作成できますか？", a: "はい。URLのQRコードを生成して、印刷物やデジタル形式で共有できます。" },
          { q: "ビジネス資料にQRコードを使用できますか？", a: "はい。チラシ、ポスター、名刺、メニューなどでよく使用されます。" },
          { q: "QRコードに有効期限はありますか？", a: "固定コンテンツから生成された標準的なQRコードに有効期限はありません。" },
          { q: "このツールは無料で利用できますか？", a: "はい。追加のソフトウェアをインストールすることなく、オンラインで無料で生成できます。" }
        ]
      },
      barcodegenerator: {
        title: "バーコード作成",
        description: "製品、在庫、追跡用のバーコードを作成します。",
        longDescription: "バーコード作成ツールは、製品、ラベル、在庫、および内部追跡用のバーコードを作成するのに役立ちます。値を入力し、バーコードの種類を選択して、生成された画像をダウンロードできます。",
        usageContext: "バーコードは小売、在庫管理、出荷などで広く使用されています。アイテムをすばやく識別し、入力ミスを減らすのに役立ちます。",
        howToUse: "1. バーコードに必要な数字またはテキストを入力します。\n2. バーコードの形式を選択します。\n3. 画像を生成してダウンロードします。",
        faq: [
          { q: "バーコードジェネレーターとは何ですか？", a: "入力したテキストや数字に基づいて、機械が読み取れるコードを作成するツールです。" },
          { q: "どのバーコード形式を選択すればよいですか？", a: "使用場所によって異なります。小売製品用の標準などがあります。" },
          { q: "生成されたバーコードを印刷できますか？", a: "はい。ダウンロードして、ラベルやパッケージ用に印刷できます。" },
          { q: "小規模ビジネスに適していますか？", a: "はい。迅速にバーコードを作成する必要があるチームに役立ちます。" }
        ]
      },
      dummytext: { title: "ダミーテキスト", description: "プレースホルダー用の文章を生成します。" },
    },
    common: {
      copyAll: "すべてコピー",
      clear: "クリア",
      sample: "サンプルテキスト",
      placeholder: "ここにテキストを入力または貼り付けてください...",
      paragraphs: "段落数",
      generatedText: "生成된 텍스트",
      charCountWithSpaces: "文字数 (空白含む)",
      charCountWithoutSpaces: "文字数 (空白なし)",
      whichPosition: "どの文字位置を確認しますか？",
      backToTools: "ツール一覧に戻る",
      copied: "クリップボード에 복사되었습니다！",
      languageSelect: "コンテンツの言語を選択",
      highlightHelp: "* 指定されたインデックスの文字が、上のテキストエリア内でリアルタイムに強調表示されます。",
      allTools: "すべてのツール",
      footerNote1: "このツールはapps24ユーティリティスイートの一部です。",
      footerNote2: "すべての処理は、最大限의 プライバシーと速度のためにブラウザ内でローカルに行われます。",
      koLabel: "韓国語",
      enLabel: "英語",
      textCategory: "テキスト",
      utilityCategory: "ユーティリティ",
      positionPlaceholder: "位置",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "サイズ",
      customColor: "色",
      presetColors: "プリセット",
      homeTitle: "高速多言語ツール",
      homeSubtitle: "あなたの言語に完璧にローカライズされた、迅速なタスクのためのシンプルなユーティリティ。",
      rulerHowTo: "オンライン定規の使い方",
      rulerStep1: "クレジットカードを0の目盛りに水平に置いてください。",
      rulerStep2: "カードの測定された幅を入力し、「調整」をクリックします。",
      rulerStep3: "これで目的の対象物を測定できます。",
      rulerEnterCardWidth: "クレジットカードの幅を入力してください",
      rulerExample: "例：幅が10.4 cmの場合、10.4と入力してください",
      rulerTip: "ヒント：キャンバスの右下隅にある青いハンドルを使用してサイズを変更してください。",
      calibrate: "調整",
      changeTo: "単位変更:",
      exitFullscreen: "全画面表示を終了",
      fullscreen: "全画面表示",
      frLabel: "フランス語",
      jaLabel: "日本語",
      zhLabel: "中国語（簡体字）",
      zhTWLabel: "中国語（繁体字）",
      ptLabel: "ポルトガル語",
      esLabel: "スペイン語",
      deLabel: "ドイツ語",
      arLabel: "アラビア語",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  zh: {
    tools: {
      imagecompressor: {
        title: "图片压缩 / WebP 转换器",
        description: "在线压缩图片并转换为 WebP 格式，提升网页性能。",
        seo: "在线压缩图片并转换为 WebP。",
        longDescription: "我们的免费图片压缩工具可在几秒钟内减小图片文件大小，无需安装任何软件。您还可以将图片转换为 WebP 格式，以获得更好的网页性能和更小的文件大小。该工具适用于博主、网店店主、学生、营销人员以及需要快速加载图片的任何人。",
        usageContext: "当您希望提高页面速度、减少存储占用或满足网站和电子邮件的文件大小限制时，压缩图片非常有用。更小的图片也能改善移动设备上的用户体验。WebP 是一种现代图片格式，旨在保持良好视觉质量的同时提供更小的文件大小。",
        howToUse: "1. 上传您的图片文件。\n2. 选择压缩图片或转换为 WebP。\n3. 预览结果并下载优化后的文件。",
        faq: [
          { q: "此工具免费吗？", a: "是的。您可以在线免费压缩和转换图片。" },
          { q: "支持哪些文件类型？", a: "通常支持 JPG 和 PNG 等常见网络图片格式。" },
          { q: "压缩后图片质量会改变吗？", a: "某些压缩方式可能会略微降低图片质量，但目标是在减小文件大小的同时保持图片视觉效果。" },
          { q: "为什么要将图片转换为 WebP？", a: "WebP 文件通常比 JPG 或 PNG 更小，有助于提升网站和博客的加载速度。" }
        ]
      },
      caseconverter: {
        title: "大小写转换器",
        description: "将文本转换为大写、小写或标题格式。",
        seo: "在线文本大小写转换工具。",
        longDescription: "大小写转换器是一款简单的在线工具，可将文本在大写、小写和标题格式之间转换。适用于编辑标题、修正格式、准备文档以及为网站、电子邮件和报告整理文本。",
        usageContext: "此工具可帮助您修正标题、准备文章标题、格式化营销文案、清理导入的文本或在发布前统一内容格式。",
        howToUse: "1. 在输入框中粘贴或输入文本。\n2. 选择所需格式，如大写、小写或标题格式。\n3. 复制转换后的结果。",
        faq: [
          { q: "什么是标题格式（Title Case）？", a: "标题格式是一种写作风格，重要单词的首字母大写，常用于文章标题和页面标题。" },
          { q: "可以转换长文本吗？", a: "是的。您可以直接在工具中转换短文本或长文本。" },
          { q: "对 SEO 标题有用吗？", a: "是的。它可以帮助您更一致地格式化页面标题和标题内容。" },
          { q: "此工具支持英语以外的语言吗？", a: "它在基于字母的语言（尤其是英语、法语和德语）中效果最佳，但结果可能因大写规则而异。" }
        ]
      },
      jsonformatter: {
        title: "JSON 格式化与验证工具",
        description: "在线整理、格式化和验证 JSON 数据。",
        seo: "在线 JSON 格式化和验证。",
        longDescription: "JSON 格式化与验证工具可帮助您在线整理、组织和检查 JSON 数据。适用于需要可读 JSON 输出或快速查找语法错误的开发者、测试人员、学生和 API 用户。",
        usageContext: "原始 JSON 通常难以阅读，尤其是压缩成单行时。格式化可添加适当的缩进和结构，便于调试和共享。JSON 中的小语法错误可能会导致 API 请求或配置文件出现问题。验证可在使用数据前检测此类问题。",
        howToUse: "1. 将 JSON 粘贴到输入框中。\n2. 点击格式化或验证按钮。\n3. 查看格式化结果或检查错误信息。",
        faq: [
          { q: "什么是 JSON？", a: "JSON 是 JavaScript Object Notation 的缩写，是一种用于存储和交换结构化数据的常见格式。" },
          { q: "此工具能自动修复无效的 JSON 吗？", a: "它可以帮助识别格式和结构问题，但某些错误可能需要手动修正。" },
          { q: "为什么我的 JSON 无效？", a: "常见原因包括缺少逗号、多余的逗号、括号不正确或使用了单引号而非双引号。" },
          { q: "此工具只适合开发者吗？", a: "不是。它同样适用于学生、分析师和任何处理 JSON 数据的人。" }
        ]
      },
      passwordgenerator: { title: "密码生成器", description: "生成安全的随机密码。", seo: "随机密码生成器。" },
      textdiffchecker: { title: "文本对比工具", description: "快速对比两段文本的差异。", seo: "查找两段文本的差异。" },
      base64encoder: { title: "Base64 编码 / 解码器", description: "在线进行Base64编码与解码", seo: "快速可靠的Base64编码和解码器。在浏览器中即时将文本转换为Base64格式并解码。" },
      colorconverter: { title: "颜色代码转换器", description: "转换 HEX、RGB 和 HSL 颜色", seo: "快速转换颜色代码格式。输入HEX、RGB或使用颜色选择器即时获取HSL和RGB值。" },
      ruler: { title: "在线标尺", description: "使用信用卡校准测量屏幕距离。" },
      wordcounter: { title: "字数统计", description: "实时统计字符和单词数量。" },
      countdown: { title: "倒计时", description: "设置计时器，支持全屏和夜间模式。" },
      digitalclock: { title: "数字时钟", description: "实时查看当前时间。" },
      screenlamp: { title: "屏幕灯", description: "将屏幕变为单色照明灯。" },
      qrgenerator: {
        title: "二维码生成器",
        description: "为文本、链接和联系方式创建二维码。",
        longDescription: "二维码生成器可让您为文本、链接、联系方式和其他简单内容创建二维码。适用于企业、活动、餐厅和个人分享。您可以在几秒钟内生成二维码并下载供数字或印刷使用。",
        usageContext: "二维码常用于网站链接、菜单访问、活动签到、联系方式共享、支付说明和产品标签。二维码让用户无需手动输入即可快速访问信息，有效减少线上线下的操作摩擦。",
        howToUse: "1. 输入您要编码的文本、URL 或内容。\n2. 生成二维码。\n3. 下载图片并在所需位置使用。",
        faq: [
          { q: "我可以为网站链接创建二维码吗？", a: "是的。您可以为 URL 生成二维码，并以印刷或数字形式分享。" },
          { q: "二维码可用于商业材料吗？", a: "是的。二维码常用于传单、海报、名片、包装和菜单。" },
          { q: "二维码会过期吗？", a: "从固定内容生成的标准二维码本身不会过期，但目标内容必须保持可访问。" },
          { q: "此工具免费吗？", a: "是的。您可以在线免费生成二维码，无需安装额外软件。" }
        ]
      },
      barcodegenerator: {
        title: "条形码生成器",
        description: "为产品、标签和库存创建条形码。",
        longDescription: "条形码生成器可帮助您为产品、标签、库存、包装和内部追踪创建条形码。适用于小企业、仓库、办公室、学校以及任何需要快速在线生成条形码的用户。",
        usageContext: "条形码广泛应用于零售、库存控制、物流运输、资产追踪和文件标注。它们可以更快速地识别物品并减少手动录入错误。选择正确的格式可确保与扫描仪和工作流程的兼容性。",
        howToUse: "1. 输入条形码所需的数字或文本。\n2. 选择条形码格式。\n3. 生成并下载条形码图片。",
        faq: [
          { q: "什么是条形码生成器？", a: "条形码生成器根据您输入的文本或数字创建机器可读的代码。" },
          { q: "我应该选择哪种条形码格式？", a: "最佳格式取决于条形码的使用场景。零售产品、库存标签和物流系统可能需要不同的条形码标准。" },
          { q: "可以打印生成的条形码吗？", a: "是的。生成条形码后，您可以下载并打印用于标签、包装或内部使用。" },
          { q: "此工具适合小企业吗？", a: "是的。它适用于需要快速创建条形码的小商店、仓库、办公室和其他团队。" }
        ]
      },
      dummytext: { title: "乱数假文", description: "生成占位段落文本。" },
    },
    common: {
      copyAll: "全部复制",
      clear: "清除",
      sample: "示例文本",
      placeholder: "在此处粘贴或输入文本...",
      paragraphs: "段落数",
      generatedText: "生成的文本",
      charCountWithSpaces: "字符数 (含空格)",
      charCountWithoutSpaces: "字符数 (不含空格)",
      whichPosition: "您想查找哪个字符位置？",
      backToTools: "返回工具列表",
      copied: "已复制到剪贴板！",
      languageSelect: "选择内容语言",
      highlightHelp: "* 指定索引处的字符将在上面的文本区域中实时突出显示。",
      allTools: "所有工具",
      footerNote1: "此工具是 apps24 实用工具套件的一部分。",
      footerNote2: "所有处理均在您的浏览器中本地完成，以实现最大的隐私和速度。",
      koLabel: "韩语",
      enLabel: "英语",
      textCategory: "文本",
      utilityCategory: "实用程序",
      positionPlaceholder: "位置",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "大小",
      customColor: "颜色",
      presetColors: "预设",
      homeTitle: "快速多语言工具",
      homeSubtitle: "为快速任务设计的简单实用程序，完全针对您的语言进行了本地化。",
      rulerHowTo: "如何使用在线标尺",
      rulerStep1: "将信用卡水平放在零刻度处。",
      rulerStep2: "输入测得的卡片宽度并点击“校准”。",
      rulerStep3: "现在您可以测量所需的物体。",
      rulerEnterCardWidth: "输入信用卡宽度",
      rulerExample: "例如：如果宽度为 10.4 厘米，输入 10.4",
      rulerTip: "提示：使用画布右下角的蓝色手柄调整其大小。",
      calibrate: "校准",
      changeTo: "切换至",
      exitFullscreen: "退出全屏",
      fullscreen: "全屏",
      frLabel: "法语",
      jaLabel: "日语",
      zhLabel: "中文 (简体)",
      zhTWLabel: "中文 (繁体)",
      ptLabel: "葡萄牙语",
      esLabel: "西班牙语",
      deLabel: "德语",
      arLabel: "阿拉伯语",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  "zh-TW": {
    tools: {
      imagecompressor: {
        title: "圖片壓縮 / WebP 轉換器",
        description: "線上壓縮圖片並轉換為 WebP 格式，提升網頁效能。",
        seo: "線上壓縮圖片並轉換為 WebP。",
        longDescription: "我們的免費圖片壓縮工具可在幾秒鐘內縮小圖片檔案大小，無需安裝任何軟體。您還可以將圖片轉換為 WebP 格式，以獲得更佳的網頁效能和更小的檔案大小。此工具適用於部落客、網路商店業主、學生、行銷人員以及需要快速載入圖片的任何人。",
        usageContext: "當您希望提升頁面速度、減少儲存空間或符合網站及電子郵件的檔案大小限制時，壓縮圖片非常有用。較小的圖片也能改善行動裝置使用者體驗。WebP 是一種現代圖片格式，旨在保持良好視覺品質的同時提供更小的檔案大小。",
        howToUse: "1. 上傳您的圖片檔案。\n2. 選擇壓縮圖片或轉換為 WebP。\n3. 預覽結果並下載最佳化後的檔案。",
        faq: [
          { q: "此工具免費嗎？", a: "是的。您可以免費在線壓縮和轉換圖片。" },
          { q: "支援哪些檔案類型？", a: "通常支援 JPG 和 PNG 等常見網路圖片格式。" },
          { q: "壓縮後圖片品質會改變嗎？", a: "某些壓縮方式可能略微降低圖片品質，但目標是在縮小檔案大小的同時保持圖片視覺效果。" },
          { q: "為什麼要將圖片轉換為 WebP？", a: "WebP 檔案通常比 JPG 或 PNG 更小，有助於提升網站和部落格的載入速度。" }
        ]
      },
      caseconverter: {
        title: "大小寫轉換器",
        description: "將文字轉換為大寫、小寫或標題格式。",
        seo: "線上文字大小寫轉換工具。",
        longDescription: "大小寫轉換器是一款簡單的線上工具，可將文字在大寫、小寫和標題格式之間轉換。適用於編輯標題、修正格式、準備文件，以及整理網站、電子郵件和報告用的文字。",
        usageContext: "此工具可幫助您修正標題、準備文章標題、格式化行銷文案、清理匯入的文字或在發佈前統一內容格式。",
        howToUse: "1. 在輸入框中貼上或輸入文字。\n2. 選擇所需格式，如大寫、小寫或標題格式。\n3. 複製轉換後的結果。",
        faq: [
          { q: "什麼是標題格式（Title Case）？", a: "標題格式是一種寫作風格，重要單字的首字母大寫，常用於文章標題和頁面標題。" },
          { q: "可以轉換長文字嗎？", a: "是的。您可以直接在工具中轉換短文字或長文字。" },
          { q: "對 SEO 標題有用嗎？", a: "是的。它可以幫助您更一致地格式化頁面標題和標題內容。" },
          { q: "此工具支援英語以外的語言嗎？", a: "它在基於字母的語言（尤其是英語、法語和德語）中效果最佳，但結果可能因大寫規則而異。" }
        ]
      },
      jsonformatter: {
        title: "JSON 格式化與驗證工具",
        description: "線上整理、格式化和驗證 JSON 資料。",
        seo: "線上 JSON 格式化和驗證。",
        longDescription: "JSON 格式化與驗證工具可幫助您線上整理、組織和檢查 JSON 資料。適用於需要可讀 JSON 輸出或快速找出語法錯誤的開發者、測試人員、學生和 API 使用者。",
        usageContext: "原始 JSON 通常難以閱讀，尤其是壓縮成單行時。格式化可添加適當的縮排和結構，便於除錯和共享。JSON 中的小語法錯誤可能導致 API 請求或設定檔出現問題。驗證可在使用資料前偵測此類問題。",
        howToUse: "1. 將 JSON 貼到輸入框中。\n2. 點擊格式化或驗證按鈕。\n3. 查看格式化結果或檢查錯誤訊息。",
        faq: [
          { q: "什麼是 JSON？", a: "JSON 是 JavaScript Object Notation 的縮寫，是一種用於儲存和交換結構化資料的常見格式。" },
          { q: "此工具能自動修復無效的 JSON 嗎？", a: "它可以幫助識別格式和結構問題，但某些錯誤可能需要手動修正。" },
          { q: "為什麼我的 JSON 無效？", a: "常見原因包括缺少逗號、多餘的逗號、括號不正確或使用了單引號而非雙引號。" },
          { q: "此工具只適合開發者嗎？", a: "不是。它同樣適用於學生、分析師和任何處理 JSON 資料的人。" }
        ]
      },
      passwordgenerator: { title: "密碼產生器", description: "產生安全的隨機密碼。", seo: "隨機密碼產生器。" },
      textdiffchecker: { title: "文字比較工具", description: "快速比較兩段文字的差異。", seo: "查找兩段文字的差異。" },
      base64encoder: { title: "Base64 編碼 / 解碼器", description: "線上進行Base64編碼與解碼", seo: "快速可靠的Base64編碼和解碼器。在瀏覽器中即時將文本轉換為Base64格式並解碼。" },
      colorconverter: { title: "顏色代碼轉換器", description: "轉換 HEX、RGB 和 HSL 顏色", seo: "快速轉換顏色代碼格式。輸入HEX、RGB或使用顏色選擇器即時獲取HSL和RGB值。" },
      ruler: { title: "線上尺子", description: "使用信用卡校準測量螢幕距離。" },
      wordcounter: { title: "字數統計", description: "即時統計字元和單字數量。" },
      countdown: { title: "倒數計時", description: "設置計時器，支援全螢幕和夜間模式。" },
      digitalclock: { title: "數位時鐘", description: "即時查看目前時間。" },
      screenlamp: { title: "螢幕燈", description: "將螢幕變為單色照明燈。" },
      qrgenerator: {
        title: "QR 碼產生器",
        description: "為文字、連結和聯絡方式建立 QR 碼。",
        longDescription: "QR 碼產生器可讓您為文字、連結、聯絡方式和其他簡單內容建立 QR 碼。適用於企業、活動、餐廳和個人分享。您可以在幾秒鐘內產生 QR 碼並下載供數位或列印使用。",
        usageContext: "QR 碼常用於網站連結、菜單存取、活動簽到、聯絡方式分享、付款說明和產品標籤。QR 碼讓使用者無需手動輸入即可快速存取資訊，有效減少線上線下的操作摩擦。",
        howToUse: "1. 輸入您要編碼的文字、URL 或內容。\n2. 產生 QR 碼。\n3. 下載圖片並在所需位置使用。",
        faq: [
          { q: "我可以為網站連結建立 QR 碼嗎？", a: "是的。您可以為 URL 產生 QR 碼，並以列印或數位形式分享。" },
          { q: "QR 碼可用於商業材料嗎？", a: "是的。QR 碼常用於傳單、海報、名片、包裝和菜單。" },
          { q: "QR 碼會過期嗎？", a: "從固定內容產生的標準 QR 碼本身不會過期，但目標內容必須保持可存取。" },
          { q: "此工具免費嗎？", a: "是的。您可以免費在線產生 QR 碼，無需安裝額外軟體。" }
        ]
      },
      barcodegenerator: {
        title: "條碼產生器",
        description: "為產品、標籤和庫存建立條碼。",
        longDescription: "條碼產生器可幫助您為產品、標籤、庫存、包裝和內部追蹤建立條碼。適用於小型企業、倉庫、辦公室、學校以及任何需要快速在線產生條碼的使用者。",
        usageContext: "條碼廣泛應用於零售、庫存控制、物流運輸、資產追蹤和文件標注。它們可以更快速地識別物品並減少手動輸入錯誤。選擇正確的格式可確保與掃描器和工作流程的相容性。",
        howToUse: "1. 輸入條碼所需的數字或文字。\n2. 選擇條碼格式。\n3. 產生並下載條碼圖片。",
        faq: [
          { q: "什麼是條碼產生器？", a: "條碼產生器根據您輸入的文字或數字建立機器可讀的代碼。" },
          { q: "我應該選擇哪種條碼格式？", a: "最佳格式取決於條碼的使用場景。零售產品、庫存標籤和物流系統可能需要不同的條碼標準。" },
          { q: "可以列印產生的條碼嗎？", a: "是的。產生條碼後，您可以下載並列印用於標籤、包裝或內部使用。" },
          { q: "此工具適合小型企業嗎？", a: "是的。它適用於需要快速建立條碼的小商店、倉庫、辦公室和其他團隊。" }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "建立佔位段落文字。" },
    },
    common: {
      copyAll: "全部複製",
      clear: "清除",
      sample: "範例文字",
      placeholder: "在此處貼上或輸入文字...",
      paragraphs: "段落數",
      generatedText: "生成的文字",
      charCountWithSpaces: "字元數 (含空格)",
      charCountWithoutSpaces: "字元數 (不含空格)",
      whichPosition: "您想查找哪個字元位置？",
      backToTools: "返回工具列表",
      copied: "已複製到剪貼簿！",
      languageSelect: "選擇內容語言",
      highlightHelp: "* 指定索引處의 字元將在上面的文字區域中即時突出顯示。",
      allTools: "所有工具",
      footerNote1: "此工具是 apps24 實用工具套件的一部分。",
      footerNote2: "所有處理均在您的瀏覽器中本地完成，以實現最大的隱私和速度。",
      koLabel: "韓語",
      enLabel: "英語",
      textCategory: "文本",
      utilityCategory: "公用程式",
      positionPlaceholder: "位置",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "大小",
      customColor: "顏色",
      presetColors: "預設",
      homeTitle: "快速多語言工具",
      homeSubtitle: "為快速任務設計的簡單實用程序，完全針對您的語言進行了本地化。",
      rulerHowTo: "如何使用線上標尺",
      rulerStep1: "將信用卡水平放在零刻度處。",
      rulerStep2: "輸入測得的卡片寬度並點擊“校準”。",
      rulerStep3: "現在您可以測量所需的物體。",
      rulerEnterCardWidth: "輸入信用卡寬度",
      rulerExample: "例如：如果寬度為 10.4 厘米，輸入 10.4",
      rulerTip: "提示：使用畫布右下角的藍色手柄調整其大小。",
      calibrate: "校準",
      changeTo: "切換至",
      exitFullscreen: "退出全屏",
      fullscreen: "全屏",
      frLabel: "法語",
      jaLabel: "日語",
      zhLabel: "中文 (簡體)",
      zhTWLabel: "中文 (繁體)",
      ptLabel: "葡萄牙語",
      esLabel: "西班牙語",
      deLabel: "德語",
      arLabel: "阿拉伯語",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  pt: {
    tools: {
      imagecompressor: {
        title: "Compressor de Imagens / Conversor WebP",
        description: "Reduza o tamanho dos arquivos de imagem e converta para WebP para melhor desempenho na web.",
        seo: "Comprimir e converter para WebP online.",
        longDescription: "Nosso compressor de imagens gratuito ajuda você a reduzir o tamanho dos arquivos de imagem em segundos, sem instalar nenhum software. Você também pode converter imagens para o formato WebP para melhor desempenho na web. Esta ferramenta é útil para blogueiros, donos de lojas online, estudantes, profissionais de marketing e qualquer pessoa que precise de imagens de carregamento rápido.",
        usageContext: "Comprimir imagens é útil quando você deseja melhorar a velocidade das páginas, reduzir o uso de armazenamento ou atender aos limites de tamanho de arquivo para sites e e-mails. Imagens menores também melhoram a experiência do usuário em dispositivos móveis. WebP é um formato moderno projetado para fornecer arquivos menores mantendo boa qualidade visual.",
        howToUse: "1. Envie seu arquivo de imagem.\n2. Escolha comprimir a imagem ou convertê-la para WebP.\n3. Visualize o resultado e baixe o arquivo otimizado.",
        faq: [
          { q: "Esta ferramenta é gratuita?", a: "Sim. Você pode comprimir e converter imagens online gratuitamente." },
          { q: "Quais tipos de arquivo são suportados?", a: "Formatos comuns de imagem web como JPG e PNG são geralmente suportados." },
          { q: "A qualidade da imagem mudará após a compressão?", a: "Alguns métodos de compressão podem reduzir ligeiramente a qualidade, mas o objetivo é manter a imagem visualmente útil enquanto reduz o tamanho do arquivo." },
          { q: "Por que converter imagens para WebP?", a: "Os arquivos WebP geralmente são menores do que JPG ou PNG, tornando-os úteis para sites, blogs e outros conteúdos online." }
        ]
      },
      caseconverter: {
        title: "Conversor de Maiúsculas e Minúsculas",
        description: "Converta texto para maiúsculas, minúsculas ou formato de título.",
        seo: "Converter texto online para maiúsculas ou minúsculas.",
        longDescription: "O Conversor de Maiúsculas e Minúsculas é uma ferramenta online simples que transforma texto entre maiúsculas, minúsculas e formato de título. É útil para editar títulos, corrigir formatação, preparar documentos e limpar texto para sites, e-mails e relatórios.",
        usageContext: "Esta ferramenta é útil para corrigir manchetes, preparar títulos de artigos, formatar textos de marketing, limpar texto importado ou padronizar conteúdo antes da publicação.",
        howToUse: "1. Cole ou digite seu texto na caixa de entrada.\n2. Selecione o formato desejado: maiúsculas, minúsculas ou formato de título.\n3. Copie o resultado convertido.",
        faq: [
          { q: "O que é formato de título (Title Case)?", a: "O formato de título é um estilo de escrita onde palavras importantes começam com letra maiúscula. É comumente usado para títulos de artigos e cabeçalhos." },
          { q: "Posso converter textos longos?", a: "Sim. Você pode converter textos curtos ou longos diretamente na ferramenta." },
          { q: "É útil para títulos de SEO?", a: "Sim. Pode ajudá-lo a formatar títulos de página e cabeçalhos de forma mais consistente." },
          { q: "Esta ferramenta funciona para idiomas além do inglês?", a: "Funciona melhor para idiomas baseados em alfabeto, especialmente inglês, francês e alemão." }
        ]
      },
      jsonformatter: {
        title: "Formatador e Validador JSON",
        description: "Limpe, organize e valide dados JSON online.",
        seo: "Formatar e validar JSON online.",
        longDescription: "O Formatador e Validador JSON ajuda você a limpar, organizar e verificar dados JSON online. É útil para desenvolvedores, testadores, estudantes e usuários de API que precisam de saída JSON legível ou querem encontrar erros de sintaxe rapidamente.",
        usageContext: "JSON bruto é frequentemente difícil de ler, especialmente quando comprimido em uma única linha. A formatação adiciona indentação e estrutura adequadas, facilitando a depuração e o compartilhamento. Um pequeno erro de sintaxe no JSON pode quebrar uma requisição de API ou arquivo de configuração.",
        howToUse: "1. Cole seu JSON na caixa de entrada.\n2. Clique no botão de formatar ou validar.\n3. Revise o resultado formatado ou verifique a mensagem de erro.",
        faq: [
          { q: "O que é JSON?", a: "JSON significa JavaScript Object Notation. É um formato comum usado para armazenar e trocar dados estruturados." },
          { q: "Esta ferramenta pode corrigir JSON inválido automaticamente?", a: "Pode ajudar a identificar problemas de formatação e estrutura, mas alguns erros podem precisar ser corrigidos manualmente." },
          { q: "Por que meu JSON é inválido?", a: "Razões comuns incluem vírgulas ausentes, vírgulas extras, colchetes incorretos ou uso de aspas simples em vez de duplas." },
          { q: "Esta ferramenta é apenas para desenvolvedores?", a: "Não. Também é útil para estudantes, analistas e qualquer pessoa que trabalhe com dados JSON." }
        ]
      },
      passwordgenerator: { title: "Gerador de Senhas", description: "Crie senhas seguras e aleatórias.", seo: "Gerador de senhas aleatórias." },
      textdiffchecker: { title: "Comparador de Texto", description: "Compare textos e encontre diferenças.", seo: "Encontrar diferenças entre textos." },
      base64encoder: { title: "Codificador / Decodificador Base64", description: "Codificar e Decodificar Base64 Online", seo: "Codificador e decodificador Base64 rápido e confiável. Converta texto para Base64 e decodifique no seu navegador." },
      colorconverter: { title: "Conversor de Código de Cor", description: "Converter cores HEX, RGB e HSL", seo: "Converta rapidamente formatos de código de cores. Insira HEX ou RGB para obter instantaneamente valores HSL no navegador." },
      ruler: { title: "Régua Online", description: "Meça distâncias na tela com calibração." },
      wordcounter: { title: "Contador de Palavras", description: "Conte caracteres e palavras em tempo real." },
      countdown: { title: "Cronômetro", description: "Defina temporizadores com modo tela cheia." },
      digitalclock: { title: "Relógio Digital", description: "Verifique a hora atual em tempo real." },
      screenlamp: { title: "Luz de Tela", description: "Transforme sua tela em uma luz colorida." },
      qrgenerator: {
        title: "Gerador de QR Code",
        description: "Crie QR codes para links, textos e contatos.",
        longDescription: "O Gerador de QR Code permite criar QR codes para texto, links, informações de contato e outros conteúdos simples. É útil para empresas, eventos, restaurantes, embalagens e compartilhamento pessoal. Você pode gerar um QR code em segundos e baixá-lo para uso digital ou impresso.",
        usageContext: "QR codes são comumente usados para links de sites, acesso a menus, check-ins de eventos, compartilhamento de contatos, instruções de pagamento e etiquetas de produtos. Um QR code facilita o acesso dos usuários a informações sem digitar textos longos manualmente.",
        howToUse: "1. Digite o texto, URL ou conteúdo que deseja codificar.\n2. Gere o QR code.\n3. Baixe e use a imagem onde necessário.",
        faq: [
          { q: "Posso criar um QR code para um link de site?", a: "Sim. Você pode gerar um QR code para uma URL e compartilhá-lo em forma impressa ou digital." },
          { q: "Posso usar QR codes em materiais comerciais?", a: "Sim. QR codes são frequentemente usados em folhetos, pôsteres, cartões de visita, embalagens e menus." },
          { q: "Os QR codes expiram?", a: "Um QR code padrão gerado a partir de conteúdo fixo não expira por si só. No entanto, o conteúdo de destino deve permanecer disponível para que as leituras continuem funcionando." },
          { q: "Esta ferramenta é gratuita?", a: "Sim. Você pode gerar QR codes online sem instalar software adicional." }
        ]
      },
      barcodegenerator: {
        title: "Gerador de Código de Barras",
        description: "Crie códigos de barras para produtos, etiquetas e inventário.",
        longDescription: "O Gerador de Código de Barras ajuda você a criar códigos de barras para produtos, etiquetas, inventário, embalagens e rastreamento interno. É útil para pequenas empresas, armazéns, escritórios, escolas e qualquer pessoa que precise de geração rápida de códigos de barras online.",
        usageContext: "Códigos de barras são amplamente usados em varejo, controle de inventário, remessa, rastreamento de ativos e rotulagem de documentos. Eles facilitam a identificação rápida de itens e reduzem erros de entrada manual. Escolher o formato correto garante compatibilidade com scanners e fluxos de trabalho.",
        howToUse: "1. Insira o número ou texto necessário para seu código de barras.\n2. Selecione o formato do código de barras.\n3. Gere e baixe a imagem do código de barras.",
        faq: [
          { q: "O que é um gerador de código de barras?", a: "Um gerador de código de barras cria um código legível por máquina com base no texto ou números que você insere." },
          { q: "Qual formato de código de barras devo escolher?", a: "O melhor formato depende de onde o código de barras será usado. Produtos de varejo, etiquetas de inventário e sistemas de remessa podem exigir padrões diferentes." },
          { q: "Posso imprimir o código de barras gerado?", a: "Sim. Após gerar o código de barras, você pode baixá-lo e imprimi-lo para etiquetas, embalagens ou uso interno." },
          { q: "Esta ferramenta é adequada para pequenas empresas?", a: "Sim. É útil para pequenas lojas, armazéns, escritórios e outras equipes que precisam criar códigos de barras rapidamente." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "Gere parágrafos de texto fictício." },
    },
    common: {
      copyAll: "Copiar tudo",
      clear: "Limpar",
      sample: "Texto de exemplo",
      placeholder: "Cole ou digite o texto aqui...",
      paragraphs: "Parágrafos",
      generatedText: "Texto gerado",
      charCountWithSpaces: "Contagem de caracteres (com espaços)",
      charCountWithoutSpaces: "Contagem de caracteres (sem espaços)",
      whichPosition: "Qual posição de caractere você deseja encontrar?",
      backToTools: "Voltar para ferramentas",
      copied: "Copiado para a área de transferência!",
      languageSelect: "Selecionar idioma do conteúdo",
      highlightHelp: "* O caractere no índice especificado é realçado em tempo real na área de texto acima.",
      allTools: "Todas as ferramentas",
      footerNote1: "Esta ferramenta faz parte da suite de utilitários apps24.",
      footerNote2: "Todo o processamento ocorre localmente no seu navegador para máxima privacidade e velocidade.",
      koLabel: "Coreano",
      enLabel: "Inglês",
      textCategory: "Texto",
      utilityCategory: "Utilitário",
      positionPlaceholder: "Posição",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Tamanho",
      customColor: "Cor",
      presetColors: "Predefinições",
      homeTitle: "Ferramentas Multilíngues Rápidas",
      homeSubtitle: "Utilitários simples para tarefas rápidas, perfeitamente localizados para o seu idioma.",
      rulerHowTo: "Como usar a régua online",
      rulerStep1: "Coloque um cartão de crédito horizontalmente na marca zero.",
      rulerStep2: "Insira a largura medida do cartão e clique em 'Calibrar'.",
      rulerStep3: "Agora você pode medir o objeto desejado.",
      rulerEnterCardWidth: "Insira a largura do cartão de crédito",
      rulerExample: "Exemplo: Se a largura for 10,4 cm, insira 10,4",
      rulerTip: "Dica: Use a alça azul no canto inferior direito da tela para redimensioná-la.",
      calibrate: "Calibrar",
      changeTo: "Mudar para",
      exitFullscreen: "Sair da tela cheia",
      fullscreen: "Tela cheia",
      frLabel: "Francês",
      jaLabel: "Japonês",
      zhLabel: "Chinês (Simplificado)",
      zhTWLabel: "Chinês (Tradicional)",
      ptLabel: "Português",
      esLabel: "Espanhol",
      deLabel: "Alemão",
      arLabel: "Árabe",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  es: {
    tools: {
      imagecompressor: {
        title: "Compresor de Imágenes / Conversor WebP",
        description: "Reduzca el tamaño de los archivos de imagen y convierta a WebP para un mejor rendimiento web.",
        seo: "Comprimir y convertir a WebP en línea.",
        longDescription: "Nuestro compresor de imágenes gratuito le ayuda a reducir el tamaño de los archivos de imagen en segundos, sin instalar ningún software. También puede convertir imágenes al formato WebP para un mejor rendimiento web. Esta herramienta es útil para bloggers, propietarios de tiendas en línea, estudiantes, especialistas en marketing y cualquier persona que necesite imágenes de carga rápida.",
        usageContext: "Comprimir imágenes es útil cuando desea mejorar la velocidad de la página, reducir el uso de almacenamiento o cumplir con los límites de tamaño de archivo para sitios web y correos electrónicos. Las imágenes más pequeñas también mejoran la experiencia del usuario en dispositivos móviles. WebP es un formato moderno diseñado para proporcionar archivos más pequeños manteniendo una buena calidad visual.",
        howToUse: "1. Suba su archivo de imagen.\n2. Elija comprimir la imagen o convertirla a WebP.\n3. Previsualice el resultado y descargue el archivo optimizado.",
        faq: [
          { q: "¿Esta herramienta es gratuita?", a: "Sí. Puede comprimir y convertir imágenes en línea de forma gratuita." },
          { q: "¿Qué tipos de archivo son compatibles?", a: "Por lo general, se admiten formatos de imagen web comunes como JPG y PNG." },
          { q: "¿Cambiará la calidad de la imagen después de la compresión?", a: "Algunos métodos de compresión pueden reducir ligeramente la calidad, pero el objetivo es mantener la imagen visualmente útil mientras se reduce el tamaño del archivo." },
          { q: "¿Por qué convertir imágenes a WebP?", a: "Los archivos WebP suelen ser más pequeños que JPG o PNG, lo que los hace útiles para sitios web, blogs y otros contenidos en línea." }
        ]
      },
      caseconverter: {
        title: "Conversor de Mayúsculas y Minúsculas",
        description: "Convierta texto a mayúsculas, minúsculas o formato de título.",
        seo: "Convertir texto a mayúsculas o minúsculas en línea.",
        longDescription: "El Conversor de Mayúsculas y Minúsculas es una herramienta en línea simple que transforma texto entre mayúsculas, minúsculas y formato de título. Es útil para editar títulos, corregir el formato, preparar documentos y limpiar texto para sitios web, correos electrónicos e informes.",
        usageContext: "Esta herramienta es útil para corregir titulares, preparar títulos de artículos, formatear texto de marketing, limpiar texto importado o estandarizar contenido antes de publicar.",
        howToUse: "1. Pegue o escriba su texto en el cuadro de entrada.\n2. Seleccione el formato deseado: mayúsculas, minúsculas o formato de título.\n3. Copie el resultado convertido.",
        faq: [
          { q: "¿Qué es el formato de título (Title Case)?", a: "El formato de título es un estilo de escritura donde las palabras importantes comienzan con mayúscula. Se usa comúnmente en títulos de artículos y encabezados." },
          { q: "¿Puedo convertir textos largos?", a: "Sí. Puede convertir textos cortos o largos directamente en la herramienta." },
          { q: "¿Es útil para títulos SEO?", a: "Sí. Puede ayudarle a formatear títulos de página y encabezados de forma más consistente." },
          { q: "¿Esta herramienta funciona para idiomas distintos al inglés?", a: "Funciona mejor para idiomas basados en alfabeto, especialmente inglés, francés y alemán." }
        ]
      },
      jsonformatter: {
        title: "Formateador y Validador JSON",
        description: "Limpie, organice y valide datos JSON en línea.",
        seo: "Formatear y validar JSON en línea.",
        longDescription: "El Formateador y Validador JSON le ayuda a limpiar, organizar y verificar datos JSON en línea. Es útil para desarrolladores, probadores, estudiantes y usuarios de API que necesitan una salida JSON legible o quieren encontrar errores de sintaxis rápidamente.",
        usageContext: "El JSON sin procesar suele ser difícil de leer, especialmente cuando está comprimido en una sola línea. El formateo añade una sangría y estructura adecuadas, facilitando la depuración y el intercambio. Un pequeño error de sintaxis en JSON puede romper una solicitud de API o un archivo de configuración.",
        howToUse: "1. Pegue su JSON en el cuadro de entrada.\n2. Haga clic en el botón de formatear o validar.\n3. Revise el resultado formateado o compruebe el mensaje de error.",
        faq: [
          { q: "¿Qué es JSON?", a: "JSON significa JavaScript Object Notation. Es un formato común utilizado para almacenar e intercambiar datos estructurados." },
          { q: "¿Esta herramienta puede corregir automáticamente un JSON inválido?", a: "Puede ayudar a identificar problemas de formato y estructura, pero algunos errores pueden necesitar corregirse manualmente." },
          { q: "¿Por qué mi JSON es inválido?", a: "Las razones comunes incluyen comas faltantes, comas adicionales, corchetes incorrectos o el uso de comillas simples en lugar de dobles." },
          { q: "¿Esta herramienta es solo para desarrolladores?", a: "No. También es útil para estudiantes, analistas y cualquier persona que trabaje con datos JSON." }
        ]
      },
      passwordgenerator: { title: "Generador de Contraseñas", description: "Cree contraseñas seguras y aleatorias.", seo: "Generador de contraseñas aleatorias." },
      textdiffchecker: { title: "Comparador de Texto", description: "Compare textos y encuentre diferencias.", seo: "Encontrar diferencias entre textos." },
      base64encoder: { title: "Codificador / Decodificador Base64", description: "Codificar y Decodificar Base64 en Línea", seo: "Codificador y decodificador Base64 rápido y confiable. Convierta texto al instante." },
      colorconverter: { title: "Conversor de Código de Color", description: "Convertir colores HEX, RGB y HSL", seo: "Convierta rápidamente formatos de código de colores. Introduzca HEX, RGB o elija un color para sus valores HSL." },
      ruler: { title: "Regla en Línea", description: "Mida distancias en pantalla con calibración." },
      wordcounter: { title: "Contador de Palabras", description: "Cuente caracteres y palabras en tiempo real." },
      countdown: { title: "Cuenta Regresiva", description: "Configure temporizadores con modo pantalla completa." },
      digitalclock: { title: "Reloj Digital", description: "Consulte la hora actual en tiempo real." },
      screenlamp: { title: "Luz de Pantalla", description: "Convierta su pantalla en una luz de color." },
      qrgenerator: {
        title: "Generador de Código QR",
        description: "Cree códigos QR para enlaces, texto y contactos.",
        longDescription: "El Generador de Código QR le permite crear códigos QR para texto, enlaces, datos de contacto y otros contenidos simples. Es útil para empresas, eventos, restaurantes, embalajes y uso personal. Puede generar un código QR en segundos y descargarlo para uso digital o impreso.",
        usageContext: "Los códigos QR se utilizan comúnmente para enlaces de sitios web, acceso a menús, registros de eventos, intercambio de contactos, instrucciones de pago y etiquetas de productos. Un código QR facilita que los usuarios abran una página o accedan a información sin escribir texto manualmente.",
        howToUse: "1. Ingrese el texto, URL o contenido que desea codificar.\n2. Genere el código QR.\n3. Descargue y use la imagen donde sea necesario.",
        faq: [
          { q: "¿Puedo crear un código QR para un enlace de sitio web?", a: "Sí. Puede generar un código QR para una URL y compartirlo en forma impresa o digital." },
          { q: "¿Puedo usar códigos QR en materiales comerciales?", a: "Sí. Los códigos QR se usan frecuentemente en folletos, carteles, tarjetas de visita, embalajes y menús." },
          { q: "¿Los códigos QR caducan?", a: "Un código QR estándar generado a partir de contenido fijo no caduca por sí solo. Sin embargo, el contenido de destino debe permanecer disponible para que los escaneos sigan funcionando." },
          { q: "¿Esta herramienta es gratuita?", a: "Sí. Puede generar códigos QR en línea sin instalar software adicional." }
        ]
      },
      barcodegenerator: {
        title: "Generador de Códigos de Barras",
        description: "Cree códigos de barras para productos, etiquetas e inventario.",
        longDescription: "El Generador de Códigos de Barras le ayuda a crear códigos de barras para productos, etiquetas, inventario, embalajes y seguimiento interno. Es útil para pequeñas empresas, almacenes, oficinas, escuelas y cualquier persona que necesite generación rápida de códigos de barras en línea.",
        usageContext: "Los códigos de barras se utilizan ampliamente en el comercio minorista, el control de inventario, el envío, el seguimiento de activos y el etiquetado de documentos. Facilitan la identificación rápida de artículos y reducen los errores de entrada manual. Elegir el formato correcto garantiza la compatibilidad con los lectores y los flujos de trabajo.",
        howToUse: "1. Ingrese el número o texto necesario para su código de barras.\n2. Seleccione el formato de código de barras.\n3. Genere y descargue la imagen del código de barras.",
        faq: [
          { q: "¿Qué es un generador de códigos de barras?", a: "Un generador de códigos de barras crea un código legible por máquina basado en el texto o los números que usted ingresa." },
          { q: "¿Qué formato de código de barras debo elegir?", a: "El mejor formato depende de dónde se utilizará el código de barras. Los productos minoristas, las etiquetas de inventario y los sistemas de envío pueden requerir diferentes estándares." },
          { q: "¿Puedo imprimir el código de barras generado?", a: "Sí. Después de generar el código de barras, puede descargarlo e imprimirlo para etiquetas, embalajes o uso interno." },
          { q: "¿Esta herramienta es adecuada para pequeñas empresas?", a: "Sí. Es útil para pequeñas tiendas, almacenes, oficinas y otros equipos que necesitan crear códigos de barras rápidamente." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "Genere párrafos de texto de relleno." },
    },
    common: {
      copyAll: "Copiar todo",
      clear: "Limpiar",
      sample: "Texto de ejemplo",
      placeholder: "Pegue o escriba el texto aquí...",
      paragraphs: "Párrafos",
      generatedText: "Texto generado",
      charCountWithSpaces: "Recuento de caracteres (con espacios)",
      charCountWithoutSpaces: "Recuento de caracteres (sin espacios)",
      whichPosition: "¿Qué posición de carácter desea buscar?",
      backToTools: "Volver a herramientas",
      copied: "¡Copiado al portapapeles!",
      languageSelect: "Seleccionar idioma del contenido",
      highlightHelp: "* El carácter en el índice especificado se resalta en tiempo real dentro del área de texto de arriba.",
      allTools: "Todas las herramientas",
      footerNote1: "Esta herramienta es parte de la suite de utilidades apps24.",
      footerNote2: "Todo el procesamiento se realiza localmente en su navegador para una máxima privacidad y velocidad.",
      koLabel: "Coreano",
      enLabel: "Inglés",
      textCategory: "Texto",
      utilityCategory: "Utilidad",
      positionPlaceholder: "Posición",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Tamaño",
      customColor: "Color",
      presetColors: "Preajustes",
      homeTitle: "Herramientas Multilingües Rápidas",
      homeSubtitle: "Utilidades sencillas para tareas rápidas, perfectamente localizadas para su idioma.",
      rulerHowTo: "Cómo usar la regla en línea",
      rulerStep1: "Coloque una tarjeta de crédito horizontalmente en la marca cero.",
      rulerStep2: "Ingrese el ancho medido de la tarjeta y haga clic en 'Calibrar'.",
      rulerStep3: "Ahora puede medir el objeto deseado.",
      rulerEnterCardWidth: "Ingrese el ancho de la tarjeta de crédito",
      rulerExample: "Ejemplo: si el ancho es de 10,4 cm, ingrese 10,4",
      rulerTip: "Sugerencia: use el asa azul en la esquina inferior derecha del lienzo para cambiar su tamaño.",
      calibrate: "Calibrar",
      changeTo: "Cambiar a",
      exitFullscreen: "Salir de pantalla completa",
      fullscreen: "Pantalla completa",
      frLabel: "Francés",
      jaLabel: "Japonés",
      zhLabel: "Chino (Simplificado)",
      zhTWLabel: "Chino (Tradicional)",
      ptLabel: "Português",
      esLabel: "Español",
      deLabel: "Alemán",
      arLabel: "Árabe",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  de: {
    tools: {
      imagecompressor: {
        title: "Bildkompressor / WebP-Konverter",
        description: "Reduzieren Sie die Bildgröße und konvertieren Sie zu WebP für bessere Web-Performance.",
        seo: "Bilder komprimieren und zu WebP konvertieren.",
        longDescription: "Unser kostenloser Bildkompressor hilft Ihnen dabei, Bilddateigrößen in Sekunden zu reduzieren, ohne Software installieren zu müssen. Sie können Bilder auch in das WebP-Format konvertieren, um eine bessere Web-Performance und kleinere Dateigrößen zu erzielen. Dieses Tool eignet sich für Blogger, Online-Shop-Besitzer, Studenten, Marketer und alle, die schnell ladende Bilder benötigen.",
        usageContext: "Das Komprimieren von Bildern ist hilfreich, wenn Sie die Seitenladegeschwindigkeit verbessern, den Speicherplatz reduzieren oder Dateigrößenlimits für Websites und E-Mails einhalten möchten. Kleinere Bilder verbessern auch die Benutzererfahrung auf mobilen Geräten. WebP ist ein modernes Bildformat, das kleinere Dateigrößen bei guter visueller Qualität bietet.",
        howToUse: "1. Laden Sie Ihre Bilddatei hoch.\n2. Wählen Sie, ob Sie das Bild komprimieren oder in WebP konvertieren möchten.\n3. Sehen Sie sich das Ergebnis an und laden Sie die optimierte Datei herunter.",
        faq: [
          { q: "Ist dieses Tool kostenlos?", a: "Ja. Sie können Bilder online kostenlos komprimieren und konvertieren." },
          { q: "Welche Dateitypen werden unterstützt?", a: "Gängige Web-Bildformate wie JPG und PNG werden in der Regel unterstützt." },
          { q: "Ändert sich die Bildqualität nach der Komprimierung?", a: "Einige Komprimierungsmethoden können die Bildqualität leicht reduzieren, aber das Ziel ist es, das Bild visuell nützlich zu halten, während die Dateigröße reduziert wird." },
          { q: "Warum sollte ich Bilder in WebP konvertieren?", a: "WebP-Dateien sind oft kleiner als JPG oder PNG, was sie für Websites, Blogs und andere Online-Inhalte nützlich macht." }
        ]
      },
      caseconverter: {
        title: "Groß-/Kleinschreibung Konverter",
        description: "Text in Großbuchstaben, Kleinbuchstaben oder Titelschreibweise umwandeln.",
        seo: "Text online in Groß- oder Kleinbuchstaben konvertieren.",
        longDescription: "Der Groß-/Kleinschreibung Konverter ist ein einfaches Online-Tool, das Text zwischen Großbuchstaben, Kleinbuchstaben und Titelschreibweise umwandelt. Es ist nützlich für die Bearbeitung von Titeln, die Korrektur von Formatierungen, die Vorbereitung von Dokumenten und die Bereinigung von Text für Websites, E-Mails und Berichte.",
        usageContext: "Dieses Tool ist hilfreich, wenn Sie Überschriften korrigieren, Artikeltitel vorbereiten, Marketingtexte formatieren, importierten Text bereinigen oder Inhalte vor der Veröffentlichung standardisieren möchten.",
        howToUse: "1. Fügen Sie Ihren Text in das Eingabefeld ein oder geben Sie ihn ein.\n2. Wählen Sie das gewünschte Format: Großbuchstaben, Kleinbuchstaben oder Titelschreibweise.\n3. Kopieren Sie das konvertierte Ergebnis.",
        faq: [
          { q: "Was ist Titelschreibweise (Title Case)?", a: "Titelschreibweise ist ein Schreibstil, bei dem wichtige Wörter mit einem Großbuchstaben beginnen. Es wird häufig für Artikeltitel und Überschriften verwendet." },
          { q: "Kann ich langen Text konvertieren?", a: "Ja. Sie können kurze oder lange Texte direkt im Tool konvertieren." },
          { q: "Ist das für SEO-Titel nützlich?", a: "Ja. Es kann Ihnen helfen, Seitentitel und Überschriften konsistenter zu formatieren." },
          { q: "Funktioniert dieses Tool für andere Sprachen als Englisch?", a: "Es funktioniert am besten für alphabetbasierte Sprachen, insbesondere Englisch, Französisch und Deutsch." }
        ]
      },
      jsonformatter: {
        title: "JSON-Formatierer und Validator",
        description: "JSON-Daten online bereinigen, organisieren und validieren.",
        seo: "JSON online formatieren und validieren.",
        longDescription: "Der JSON-Formatierer und Validator hilft Ihnen dabei, JSON-Daten online zu bereinigen, zu organisieren und zu überprüfen. Er ist nützlich für Entwickler, Tester, Studenten und API-Benutzer, die eine lesbare JSON-Ausgabe benötigen oder Syntaxfehler schnell finden möchten.",
        usageContext: "Rohes JSON ist oft schwer zu lesen, besonders wenn es in eine einzige Zeile komprimiert ist. Das Formatieren fügt eine ordentliche Einrückung und Struktur hinzu, was das Debuggen und Teilen erleichtert. Ein kleiner Syntaxfehler in JSON kann eine API-Anfrage oder Konfigurationsdatei beschädigen. Die Validierung hilft dabei, solche Probleme zu erkennen.",
        howToUse: "1. Fügen Sie Ihr JSON in das Eingabefeld ein.\n2. Klicken Sie auf die Schaltfläche zum Formatieren oder Validieren.\n3. Überprüfen Sie das formatierte Ergebnis oder sehen Sie die Fehlermeldung.",
        faq: [
          { q: "Was ist JSON?", a: "JSON steht für JavaScript Object Notation. Es ist ein gängiges Format zum Speichern und Austauschen strukturierter Daten." },
          { q: "Kann dieses Tool ungültiges JSON automatisch reparieren?", a: "Es kann helfen, Formatierungs- und Strukturprobleme zu identifizieren, aber einige Fehler müssen möglicherweise manuell korrigiert werden." },
          { q: "Warum ist mein JSON ungültig?", a: "Häufige Ursachen sind fehlende Kommas, zusätzliche Kommas, falsche Klammern oder die Verwendung von einfachen Anführungszeichen anstelle von doppelten." },
          { q: "Ist dieses Tool nur für Entwickler?", a: "Nein. Es ist auch für Studenten, Analysten und alle nützlich, die mit JSON-Daten arbeiten." }
        ]
      },
      passwordgenerator: { title: "Passwort-Generator", description: "Sichere zufällige Passwörter erstellen.", seo: "Zufälligen Passwort-Generator." },
      textdiffchecker: { title: "Text-Vergleicher", description: "Texte vergleichen und Unterschiede finden.", seo: "Unterschiede zwischen Texten finden." },
      base64encoder: { title: "Base64 Encoder / Decoder", description: "Base64 online verschlüsseln und entschlüsseln", seo: "Schneller und zuverlässiger Base64-Encoder und -Decoder. Konvertieren Sie Text im Browser sofort." },
      colorconverter: { title: "Farbcode-Konverter", description: "HEX, RGB und HSL konvertieren", seo: "Farbcodeformate schnell konvertieren. Geben Sie HEX oder RGB ein, um sofort HSL-Werte zu erhalten." },
      ruler: { title: "Online-Lineal", description: "Messen Sie Bildschirmabstände mit Kalibrierung." },
      wordcounter: { title: "Wortzähler", description: "Zählen Sie Zeichen und Wörter in Echtzeit." },
      countdown: { title: "Countdown-Timer", description: "Stellen Sie Timer mit Vollbildmodus ein." },
      digitalclock: { title: "Digitale Uhr", description: "Überprüfen Sie die aktuelle Uhrzeit in Echtzeit." },
      screenlamp: { title: "Bildschirmlicht", description: "Verwandeln Sie Ihren Bildschirm in ein farbiges Licht." },
      qrgenerator: {
        title: "QR-Code-Generator",
        description: "Erstellen Sie QR-Codes für Links, Text und Kontakte.",
        longDescription: "Der QR-Code-Generator ermöglicht es Ihnen, QR-Codes für Text, Links, Kontaktdaten und andere einfache Inhalte zu erstellen. Er ist nützlich für Unternehmen, Veranstaltungen, Restaurants, Verpackungen und den persönlichen Gebrauch. Sie können in Sekunden einen QR-Code generieren und ihn für digitale oder gedruckte Verwendung herunterladen.",
        usageContext: "QR-Codes werden häufig für Website-Links, Menüzugriff, Event-Check-ins, Kontaktaustausch, Zahlungsanweisungen und Produktetiketten verwendet. Ein QR-Code macht es Benutzern leichter, eine Seite zu öffnen oder auf Informationen zuzugreifen, ohne langen Text manuell einzugeben.",
        howToUse: "1. Geben Sie den Text, die URL oder den Inhalt ein, den Sie kodieren möchten.\n2. Generieren Sie den QR-Code.\n3. Laden Sie das Bild herunter und verwenden Sie es wo benötigt.",
        faq: [
          { q: "Kann ich einen QR-Code für einen Website-Link erstellen?", a: "Ja. Sie können einen QR-Code für eine URL generieren und ihn in gedruckter oder digitaler Form teilen." },
          { q: "Kann ich QR-Codes für Geschäftsmaterialien verwenden?", a: "Ja. QR-Codes werden häufig auf Flyern, Postern, Visitenkarten, Verpackungen und Speisekarten verwendet." },
          { q: "Laufen QR-Codes ab?", a: "Ein Standard-QR-Code aus festem Inhalt läuft nicht von selbst ab. Der Zielinhalt muss jedoch verfügbar bleiben, damit Scans weiterhin funktionieren." },
          { q: "Ist dieses Tool kostenlos?", a: "Ja. Sie können QR-Codes online generieren, ohne zusätzliche Software zu installieren." }
        ]
      },
      barcodegenerator: {
        title: "Barcode-Generator",
        description: "Erstellen Sie Barcodes für Produkte, Etiketten und Inventar.",
        longDescription: "Der Barcode-Generator hilft Ihnen dabei, Barcodes für Produkte, Etiketten, Inventar, Verpackungen und interne Verfolgung zu erstellen. Er ist nützlich für kleine Unternehmen, Lager, Büros, Schulen und alle, die schnelle Online-Barcode-Erstellung benötigen.",
        usageContext: "Barcodes werden im Einzelhandel, in der Bestandskontrolle, im Versand, im Asset-Tracking und in der Dokumentenbeschriftung weit verbreitet eingesetzt. Sie erleichtern die schnelle Identifizierung von Artikeln und reduzieren manuelle Eingabefehler. Die Wahl des richtigen Formats gewährleistet die Kompatibilität mit Scannern und Arbeitsabläufen.",
        howToUse: "1. Geben Sie die für Ihren Barcode erforderliche Zahl oder den Text ein.\n2. Wählen Sie das Barcode-Format.\n3. Generieren und laden Sie das Barcode-Bild herunter.",
        faq: [
          { q: "Was ist ein Barcode-Generator?", a: "Ein Barcode-Generator erstellt einen maschinenlesbaren Code basierend auf Text oder Zahlen, die Sie eingeben." },
          { q: "Welches Barcode-Format soll ich wählen?", a: "Das beste Format hängt davon ab, wo der Barcode verwendet wird. Einzelhandelsprodukte, Inventaretiketten und Versandsysteme können unterschiedliche Standards erfordern." },
          { q: "Kann ich den generierten Barcode drucken?", a: "Ja. Nach der Generierung des Barcodes können Sie ihn herunterladen und für Etiketten, Verpackungen oder den internen Gebrauch ausdrucken." },
          { q: "Ist dieses Tool für kleine Unternehmen geeignet?", a: "Ja. Es ist nützlich für kleine Geschäfte, Lager, Büros und andere Teams, die schnell Barcodes erstellen müssen." }
        ]
      },
      dummytext: { title: "Blindtext", description: "Generieren Sie Platzhaltertexte." },
    },
    common: {
      copyAll: "Alles kopieren",
      clear: "Löschen",
      sample: "Beispieltext",
      placeholder: "Text hier einfügen oder tippen...",
      paragraphs: "Absätze",
      generatedText: "Generierter Text",
      charCountWithSpaces: "Zeichenanzahl (mit Leerzeichen)",
      charCountWithoutSpaces: "Zeichenanzahl (ohne Leerzeichen)",
      whichPosition: "Welche Zeichenposition möchten Sie finden?",
      backToTools: "Zurück zu den Tools",
      copied: "In die Zwischenablage kopiert!",
      languageSelect: "Inhaltssprache auswählen",
      highlightHelp: "* Das Zeichen am angegebenen Index wird in Echtzeit im obigen Textbereich hervorgehoben.",
      allTools: "Alle Tools",
      footerNote1: "Dieses Tool ist Teil der apps24-Utility-Suite.",
      footerNote2: "Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser für maximale Privatsphäre und Geschwindigkeit.",
      koLabel: "Koreanisch",
      enLabel: "Englisch",
      textCategory: "Text",
      utilityCategory: "Dienstprogramm",
      positionPlaceholder: "Position",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Größe",
      customColor: "Farbe",
      presetColors: "Voreinstellungen",
      homeTitle: "Schnelle mehrsprachige Tools",
      homeSubtitle: "Einfache Dienstprogramme für schnelle Aufgaben, perfekt auf Ihre Sprache lokalisiert.",
      rulerHowTo: "So verwenden Sie das Online-Lineal",
      rulerStep1: "Legen Sie eine Kreditkarte horizontal auf die Nullmarkierung.",
      rulerStep2: "Geben Sie die gemessene Breite der Karte ein und klicken Sie auf 'Kalibrieren'.",
      rulerStep3: "Jetzt können Sie das gewünschte Objekt messen.",
      rulerEnterCardWidth: "Geben Sie die Kreditkartenbreite ein",
      rulerExample: "Beispiel: Wenn die Breite 10,4 cm beträgt, geben Sie 10,4 ein",
      rulerTip: "Tipp: Verwenden Sie den blauen Griff in der unteren rechten Ecke der Zeichenfläche, um deren Größe zu ändern.",
      calibrate: "Kalibrieren",
      changeTo: "Wechseln zu",
      exitFullscreen: "Vollbild beenden",
      fullscreen: "Vollbild",
      frLabel: "Französisch",
      jaLabel: "Japanisch",
      zhLabel: "Chinesisch (Vereinfacht)",
      zhTWLabel: "Chinesisch (Traditionell)",
      ptLabel: "Portugiesisch",
      esLabel: "Spanisch",
      deLabel: "Deutsch",
      arLabel: "Arabisch",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
  ar: {
    tools: {
      imagecompressor: {
        title: "ضاغط الصور / محوّل WebP",
        description: "قلّل حجم ملفات الصور وحوّلها إلى WebP لأداء ويب أفضل.",
        seo: "ضغط الصور وتحويلها إلى WebP عبر الإنترنت.",
        longDescription: "تساعدك أداة ضغط الصور المجانية على تقليل حجم ملفات الصور في ثوانٍ دون الحاجة لتثبيت أي برنامج. يمكنك أيضاً تحويل الصور إلى تنسيق WebP للحصول على أداء ويب أفضل وأحجام ملفات أصغر. هذه الأداة مفيدة للمدونين وأصحاب المتاجر الإلكترونية والطلاب والمسوّقين وأي شخص يحتاج إلى صور أسرع تحميلاً.",
        usageContext: "يُعدّ ضغط الصور مفيداً عندما تريد تحسين سرعة الصفحة أو تقليل استخدام التخزين أو الالتزام بحدود حجم الملفات للمواقع والبريد الإلكتروني. كما تعمل الصور الأصغر على تحسين تجربة المستخدم على الأجهزة المحمولة. WebP تنسيق صور حديث مصمَّم لتوفير أحجام ملفات أصغر مع الحفاظ على جودة بصرية جيدة.",
        howToUse: "1. ارفع ملف الصورة.\n2. اختر ضغط الصورة أو تحويلها إلى WebP.\n3. اعرض النتيجة وحمّل الملف المحسَّن.",
        faq: [
          { q: "هل هذه الأداة مجانية؟", a: "نعم. يمكنك ضغط الصور وتحويلها عبر الإنترنت مجاناً." },
          { q: "ما أنواع الملفات المدعومة؟", a: "يتم دعم تنسيقات صور الويب الشائعة كـ JPG وPNG عادةً." },
          { q: "هل ستتغير جودة الصورة بعد الضغط؟", a: "قد تُقلّل بعض طرق الضغط الجودة قليلاً، لكن الهدف هو الحفاظ على الفائدة البصرية للصورة مع تقليل حجمها." },
          { q: "لماذا أُحوّل الصور إلى WebP؟", a: "ملفات WebP أصغر حجماً في الغالب من JPG أو PNG، مما يجعلها مفيدة للمواقع والمدونات والمحتوى الإلكتروني." }
        ]
      },
      caseconverter: {
        title: "محوّل حالة الأحرف",
        description: "حوّل النص إلى أحرف كبيرة أو صغيرة أو تنسيق العناوين.",
        seo: "تحويل النص إلى أحرف كبيرة أو صغيرة عبر الإنترنت.",
        longDescription: "محوّل حالة الأحرف أداة إلكترونية بسيطة تُحوّل النص بين الأحرف الكبيرة والصغيرة وتنسيق العناوين. مفيد لتحرير العناوين وتصحيح التنسيق وإعداد المستندات وتنظيف النصوص للمواقع والبريد الإلكتروني والتقارير.",
        usageContext: "هذه الأداة مفيدة لتصحيح العناوين الرئيسية وإعداد عناوين المقالات وتنسيق النصوص التسويقية وتنظيف النصوص المستوردة أو توحيد المحتوى قبل النشر.",
        howToUse: "1. الصق نصك أو اكتبه في حقل الإدخال.\n2. اختر التنسيق المطلوب: أحرف كبيرة أو صغيرة أو تنسيق العنوان.\n3. انسخ النتيجة المحوَّلة.",
        faq: [
          { q: "ما هو تنسيق العنوان (Title Case)؟", a: "تنسيق العنوان أسلوب كتابي تبدأ فيه الكلمات المهمة بحرف كبير، ويُستخدم عادةً في عناوين المقالات والصفحات." },
          { q: "هل يمكنني تحويل نصوص طويلة؟", a: "نعم. يمكنك تحويل نصوص قصيرة أو طويلة مباشرة في الأداة." },
          { q: "هل هي مفيدة لعناوين تحسين محركات البحث؟", a: "نعم. يمكن أن تساعدك في تنسيق عناوين الصفحات والرؤوس بشكل أكثر اتساقاً." },
          { q: "هل تعمل الأداة مع لغات غير الإنجليزية؟", a: "تعمل بشكل أفضل مع اللغات المبنية على الأبجدية، وخاصةً الإنجليزية والفرنسية والألمانية." }
        ]
      },
      jsonformatter: {
        title: "مُنسِّق JSON ومُتحقِّق منه",
        description: "نظّف بيانات JSON ورتّبها وتحقّق منها عبر الإنترنت.",
        seo: "تنسيق JSON والتحقق منه عبر الإنترنت.",
        longDescription: "يساعدك مُنسِّق JSON ومُتحقِّق منه على تنظيف بيانات JSON وترتيبها والتحقق منها عبر الإنترنت. مفيد للمطوّرين والمختبِرين والطلاب ومستخدمي API الذين يحتاجون إلى مخرجات JSON مقروءة أو يريدون اكتشاف أخطاء الصياغة بسرعة.",
        usageContext: "غالباً ما يكون JSON الخام صعب القراءة، خاصةً عند ضغطه في سطر واحد. التنسيق يضيف مسافات بادئة وبنية مناسبة، مما يسهّل التصحيح والمشاركة. يمكن لخطأ صياغي صغير في JSON أن يُعطّل طلب API أو ملف إعداد. يساعد التحقق على اكتشاف مثل هذه المشكلات.",
        howToUse: "1. الصق JSON في حقل الإدخال.\n2. انقر على زر التنسيق أو التحقق.\n3. راجع النتيجة المنسَّقة أو تحقق من رسالة الخطأ.",
        faq: [
          { q: "ما هو JSON؟", a: "JSON اختصار لـ JavaScript Object Notation، وهو تنسيق شائع لتخزين البيانات المنظمة وتبادلها." },
          { q: "هل يمكن للأداة إصلاح JSON غير الصالح تلقائياً؟", a: "يمكن المساعدة في تحديد مشاكل التنسيق والبنية، لكن بعض الأخطاء قد تحتاج إلى تصحيح يدوي." },
          { q: "لماذا يكون JSON غير صالح؟", a: "أسباب شائعة تشمل فقدان فاصلة، وجود فاصلة زائدة، أقواس خاطئة، أو استخدام علامات اقتباس مفردة بدلاً من مزدوجة." },
          { q: "هل هذه الأداة للمطوّرين فقط؟", a: "لا. مفيدة أيضاً للطلاب والمحللين وكل من يتعامل مع بيانات JSON." }
        ]
      },
      passwordgenerator: { title: "مولد كلمات المرور", description: "إنشاء كلمات مرور آمنة وعشوائية.", seo: "مولد كلمات مرور عشوائية." },
      textdiffchecker: { title: "مقارن النصوص", description: "قارن نصين واكتشف الفروق بينهما.", seo: "إيجاد الاختلافات بين النصوص." },
      base64encoder: { title: "تشفير / فك تشفير Base64", description: "تشفير وفك تشفير Base64 عبر الإنترنت", seo: "مشفر ومفكك Base64 سريع وموثوق. قم بتحويل النص إلى Base64 وفك التشفير على الفور." },
      colorconverter: { title: "محول كود الألوان", description: "تحويل ألوان HEX و RGB و HSL", seo: "تحويل تنسيقات رموز الألوان بسرعة. أدخل HEX أو RGB للحصول على قيم HSL على الفور." },
      ruler: { title: "مسطرة عبر الإنترنت", description: "قياس المسافات على الشاشة مع المعايرة." },
      wordcounter: { title: "عداد الكلمات", description: "عد الحروف والكلمات في الوقت الفعلي." },
      countdown: { title: "مؤقت العد التنازلي", description: "ضبط المؤقتات مع وضع ملء الشاشة." },
      digitalclock: { title: "ساعة رقمية", description: "التحقق من الوقت الحالي في الوقت الفعلي." },
      screenlamp: { title: "إضاءة الشاشة", description: "تحويل شاشتك إلى ضوء ملون." },
      qrgenerator: {
        title: "مولد رمز QR",
        description: "أنشئ رموز QR للنصوص والروابط والاتصالات.",
        longDescription: "يتيح لك مولد رمز QR إنشاء رموز QR للنصوص والروابط وبيانات الاتصال والمحتويات البسيطة الأخرى. مفيد للشركات والفعاليات والمطاعم والتغليف والمشاركة الشخصية. يمكنك إنشاء رمز QR في ثوانٍ وتنزيله للاستخدام الرقمي أو المطبوع.",
        usageContext: "تُستخدم رموز QR عادةً لروابط المواقع والوصول إلى القوائم وتسجيل الوصول في الفعاليات ومشاركة الاتصالات وتعليمات الدفع وملصقات المنتجات. يُسهّل رمز QR وصول المستخدمين إلى المعلومات دون الحاجة لكتابة نصوص طويلة يدوياً.",
        howToUse: "1. أدخل النص أو الرابط أو المحتوى الذي تريد ترميزه.\n2. أنشئ رمز QR.\n3. نزّل الصورة واستخدمها حيث تحتاج.",
        faq: [
          { q: "هل يمكنني إنشاء رمز QR لرابط موقع؟", a: "نعم. يمكنك إنشاء رمز QR لرابط URL ومشاركته مطبوعاً أو رقمياً." },
          { q: "هل يمكن استخدام رموز QR في مواد الأعمال؟", a: "نعم. تُستخدم رموز QR كثيراً على المنشورات والملصقات وبطاقات الأعمال والتغليف والقوائم." },
          { q: "هل تنتهي صلاحية رموز QR؟", a: "رمز QR القياسي المُنشأ من محتوى ثابت لا ينتهي من تلقاء نفسه. غير أن المحتوى الهدف يجب أن يظل متاحاً لاستمرار عمل المسح." },
          { q: "هل هذه الأداة مجانية؟", a: "نعم. يمكنك إنشاء رموز QR عبر الإنترنت دون تثبيت برامج إضافية." }
        ]
      },
      barcodegenerator: {
        title: "مولد الباركود",
        description: "أنشئ باركودات للمنتجات والملصقات والمخزون.",
        longDescription: "يساعدك مولد الباركود على إنشاء باركودات للمنتجات والملصقات والمخزون والتغليف والتتبع الداخلي. مفيد للشركات الصغيرة والمستودعات والمكاتب والمدارس وأي شخص يحتاج إلى إنشاء باركود سريع عبر الإنترنت.",
        usageContext: "تُستخدم الباركودات على نطاق واسع في التجزئة وضبط المخزون والشحن وتتبع الأصول وملصقات المستندات. تسهّل التعرّف السريع على العناصر وتُقلّل من أخطاء الإدخال اليدوي. اختيار التنسيق الصحيح يضمن التوافق مع الماسحات وسير العمل.",
        howToUse: "1. أدخل الرقم أو النص المطلوب لباركودك.\n2. اختر تنسيق الباركود.\n3. أنشئ صورة الباركود ونزّلها.",
        faq: [
          { q: "ما هو مولد الباركود؟", a: "مولد الباركود يُنشئ رمزاً قابلاً للقراءة الآلية بناءً على النص أو الأرقام التي تُدخلها." },
          { q: "أي تنسيق باركود يجب أن أختار؟", a: "يعتمد أفضل تنسيق على مكان استخدام الباركود. قد تتطلب منتجات التجزئة وملصقات المخزون وأنظمة الشحن معايير مختلفة." },
          { q: "هل يمكنني طباعة الباركود المُنشأ؟", a: "نعم. بعد إنشاء الباركود، يمكنك تنزيله وطباعته للملصقات أو التغليف أو الاستخدام الداخلي." },
          { q: "هل هذه الأداة مناسبة للشركات الصغيرة؟", a: "نعم. مفيدة للمتاجر الصغيرة والمستودعات والمكاتب وغيرها من الفرق التي تحتاج إلى إنشاء باركود بسرعة." }
        ]
      },
      dummytext: { title: "نص لوريم إيبسوم", description: "توليد فقرات نصية بديلة." },
    },
    common: {
      copyAll: "نسخ الكل",
      clear: "مسح",
      sample: "نص تجريبي",
      placeholder: "الصق أو اكتب النص هنا...",
      paragraphs: "فقرات",
      generatedText: "النص الناتج",
      charCountWithSpaces: "عدد الحروف (مع المسافات)",
      charCountWithoutSpaces: "عدد الحروف (بدون مسافات)",
      whichPosition: "ما هو موقع الحرف الذي تريد العثور عليه؟",
      backToTools: "العودة إلى الأدوات",
      copied: "تم النسخ إلى الحافظة!",
      languageSelect: "اختر لغة المحتوى",
      highlightHelp: "* يتم تمييز الحرف الموجود في الفهرس المحدد في الوقت الفعلي داخل منطقة النص أعلاه.",
      allTools: "جميع الأدوات",
      footerNote1: "هذه الأداة هي جزء من مجموعة أدوات apps24.",
      footerNote2: "تتم جميع عمليات المعالجة محليًا في متصفحك لضمان أقصى قدر من الخصوصية والسرعة.",
      koLabel: "الكورية",
      enLabel: "الإنجليزية",
      textCategory: "نص",
      utilityCategory: "أداة",
      positionPlaceholder: "الموقع",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "الحجم",
      customColor: "لون",
      presetColors: "الإعدادات المسبقة",
      homeTitle: "أدوات سريعة متعددة اللغات",
      homeSubtitle: "أدوات مساعدة بسيطة للمهام السريعة، معربة بالكامل للغتك.",
      rulerHowTo: "كيفية استخدام المسطرة عبر الإنترنت",
      rulerStep1: "ضع بطاقة ائتمان أفقيًا عند علامة الصفر.",
      rulerStep2: "أدخل العرض المقاس للبطاقة وانقر على 'معايرة'.",
      rulerStep3: "الآن يمكنك قياس الشيء المطلوب.",
      rulerEnterCardWidth: "أدخل عرض بطاقة الائتمان",
      rulerExample: "مثال: إذا كان العرض 10.4 سم، أدخل 10.4",
      rulerTip: "نصيحة: استخدم المقبض الأزرق في الزاوية اليمنى السفلية من اللوحة لتغيير حجمها.",
      calibrate: "معايرة",
      changeTo: "تغيير إلى",
      exitFullscreen: "خروج من ملء الشاشة",
      fullscreen: "ملء الشاشة",
      frLabel: "الفرنسية",
      jaLabel: "اليابانية",
      zhLabel: "الصينية (المبسطة)",
      zhTWLabel: "الصينية (التقليدية)",
      ptLabel: "البرتغالية",
      esLabel: "الإسبانية",
      deLabel: "الألمانية",
      arLabel: "العربية",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      seoTitle: "Professional Guide",
      aboutPrefix: "This free online tool...",
      imageCategory: "Image",
      securityCategory: "Security",
      timeCategory: "Time",
      displayCategory: "Display",
      measurementCategory: "Measurement",
      generatorCategory: "Generator",
      uploadImage: "Upload",
      compress: "Compress",
      convertToWebP: "Convert WebP",
      download: "Download",
      reset: "Reset",
      original: "Original",
      compressed: "Compressed",
      size: "Size",
      format: "Format JSON",
      validate: "Validate",
      generatePassword: "Generate Password",
      length: "Length",
      includeUppercase: "Uppercase",
      includeLowercase: "Lowercase",
      includeNumbers: "Numbers",
      includeSymbols: "Symbols",
      compare: "Compare",
    },
  },
};

export function getToolText(locale: Locale, tool: ToolDefinition): ToolText {
  return (
    TOOL_TEXTS[locale]?.tools[tool.id] ??
    TOOL_TEXTS.en?.tools[tool.id] ?? {
      title: tool.titleKey,
      description: tool.descriptionKey,
    }
  );
}

export function getCommonText(locale: Locale): CommonText {
  return TOOL_TEXTS[locale]?.common ?? TOOL_TEXTS.en.common;
}
