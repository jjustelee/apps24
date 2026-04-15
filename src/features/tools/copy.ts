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
  homeIntro1: string;
  homeIntro2: string;
  homeAboutTitle: string;
  homeWhatYouCanDoTitle: string;
  homeWhatYouCanDoBody: string;
  homeWhyUsersChooseTitle: string;
  homeWhyUsersChoosePoints: string[];
  homeOngoingFocusTitle: string;
  homeOngoingFocusBody: string;
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
  whatIs: string;
  whenToUse: string;
  howToUseTitle: string;
  faqTitle: string;
  howItWorks: string;
  unitLength: string;
  unitWeight: string;
  unitArea: string;
  unitVolume: string;
  unitTemperature: string;
  unitSpeed: string;
  unitDigital: string;
  from: string;
  to: string;
  unitAccuracyNote: string;
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
      passwordgenerator: {
        title: "Password Generator",
        description: "Create strong random passwords instantly in your browser.",
        seo: "Generate strong random passwords instantly in your browser. This free password generator helps users create secure passwords with customizable length and character options for safer online accounts.",
        longDescription: "Password Generator is a simple online tool that helps users create strong and random passwords for personal, work, and business accounts. It is designed for people who want a faster and safer way to generate passwords instead of reusing weak or predictable combinations. This tool is useful for creating passwords for email accounts, websites, apps, online stores, social media platforms, and other services that require secure login credentials.",
        usageContext: "Use this tool when creating a new account, replacing an old password, or improving the security of accounts that currently use short or repeated passwords. It is also helpful for users who manage multiple accounts and want stronger password options for each service.",
        howToUse: "1. Choose the password length.\n2. Select the character types you want to include, such as uppercase letters, lowercase letters, numbers, and symbols.\n3. Click the Generate Password button to create a new password.\n4. Copy the generated password and save it in a secure place, such as a trusted password manager.",
        faq: [
          { q: "Why should I use a password generator?", a: "A password generator helps create stronger and less predictable passwords than passwords made manually. This reduces the risk of weak or repeated credentials." },
          { q: "What makes a password stronger?", a: "In general, longer passwords with a mix of letters, numbers, and symbols are harder to guess than short or simple passwords." },
          { q: "Can I use the same password for multiple websites?", a: "It is safer to use a different password for each account. Reusing the same password across services can increase security risks if one account is compromised." },
          { q: "Where should I store generated passwords?", a: "The safest option is usually a trusted password manager. You may also store them in another secure and private system that you control." }
        ]
      },
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
        description: "Convert plain text to Base64 or decode Base64 strings instantly.",
        seo: "Fast and reliable Base64 encoder and decoder. Convert plain text to Base64 format or decode Base64 strings instantly with a lightweight browser-based tool.",
        longDescription: "Base64 Encoder & Decoder is a browser-based utility that converts plain text into Base64 format and decodes Base64 strings back into readable text. It is useful for development, testing, data handling, and simple encoding tasks that require a text-based representation of content. This tool is especially helpful when working with APIs, encoded strings, embedded content, or technical workflows where Base64 values appear frequently.",
        usageContext: "Use this tool when you need to encode text for transfer through text-based systems, inspect Base64 values, decode encoded content, or quickly check how plain text changes when converted into Base64 format.",
        howToUse: "1. Enter or paste your text into the input area.\n2. Click Encode to convert plain text to Base64, or click Decode to convert Base64 text back to readable content.\n3. Review the result in the output area.\n4. Click Copy if you want to use the result elsewhere.",
        faq: [
          { q: "Is Base64 a form of encryption?", a: "No. Base64 is an encoding method used for data representation, not a security or encryption system." },
          { q: "When is Base64 commonly used?", a: "It is often used in APIs, email content, HTML or CSS embedding, data transport, and technical documentation where binary or structured content needs to be expressed as text." },
          { q: "Can this tool decode any Base64 string?", a: "It can decode valid Base64 text. If the input is incomplete or invalid, the result may fail or return unreadable output." },
          { q: "Is this tool only for developers?", a: "No. It can also be useful for students, analysts, marketers, and other users who need to inspect or transform encoded text." }
        ]
      },
      colorconverter: {
        title: "Color Code Converter",
        description: "Convert HEX, RGB, and HSL color values instantly.",
        seo: "Convert HEX, RGB, and HSL color values instantly with a simple browser-based color code converter. This tool is useful for web design, UI systems, front-end development, and digital branding workflows.",
        longDescription: "Color Code Converter is an online tool that helps users convert color values between HEX, RGB, and HSL formats. It is useful for web design, UI work, front-end development, branding, and any project where color values need to stay consistent across tools and platforms. By entering one color format or selecting a color visually, users can instantly see the matching values in other common formats.",
        usageContext: "Use this tool when you need to convert a color from one format to another, check matching values for design systems, copy color codes into CSS or design tools, or compare colors across different digital workflows.",
        howToUse: "1. Enter a HEX value or use the color picker to choose a color.\n2. View the converted values for HEX, RGB, and HSL instantly.\n3. Click Copy next to any value you want to use in your project.\n4. Click Reset if you want to start with a new color.",
        faq: [
          { q: "What is the difference between HEX, RGB, and HSL?", a: "HEX is commonly used in web design, RGB is based on red, green, and blue light values, and HSL represents hue, saturation, and lightness for more intuitive color adjustment." },
          { q: "Who is this tool useful for?", a: "It is useful for designers, developers, marketers, students, and anyone working with digital colors in websites, apps, presentations, or brand materials." },
          { q: "Can I use these values in CSS?", a: "Yes. HEX, RGB, and HSL are all commonly used in CSS and other web design workflows." },
          { q: "Does this tool support quick color checking?", a: "Yes. You can select a color visually and immediately review the converted values without leaving the page." }
        ]
      },
      unitconverter: {
        title: "Unit Converter",
        description: "Convert units for length, weight, area, volume, temperature, and more in real-time.",
        seo: "Free online unit converter for metric and imperial systems. Convert inches to cm, kg to lbs, celsius to fahrenheit, and more instantly.",
        longDescription: "Our Unit Converter is a high-precision tool designed to help you quickly switch between different systems of measurement across the globe. Whether you are dealing with Metric or Imperial units, this tool provides accurate results for length, mass, area, volume, temperature, speed, and digital storage. From common everyday conversions like miles to kilometers, to specialized needs like US vs UK Gallons or Korean 'Pyung', we've got you covered with scientific accuracy.",
        usageContext: "Did you know that a US Gallon and a UK Gallon are different sizes? Our tool distinguishes between these and other regional units (like Fluid Ounces) to ensure you have the correct data for travel, international shopping, or engineering projects. It is essential for anyone who needs fast and reliable conversions without searching for manual formulas.",
        howToUse: "1. Select a category from the top tabs (e.g., Length, Weight).\n2. Enter the value you want to convert in the 'From' input box.\n3. Choose your current unit and the unit you want to convert to from the dropdown menus.\n4. View the result instantly in the 'To' box. Use the swap button (â) to reverse the conversion direction.",
        faq: [
          { q: "How accurate are the conversions?", a: "We use standard scientific conversion factors. Calculations are performed with high precision and results are displayed up to 10 decimal places for clarity." },
          { q: "Does it support both metric and imperial systems?", a: "Yes. You can convert between common units like meters and feet, kilograms and pounds, or liters and gallons." },
          { q: "Why is temperature conversion different?", a: "Unlike most units that use simple ratios, temperature scales (like Celsius to Fahrenheit) include offsets. Our tool correctly applies these formulas for exact results." },
          { q: "Can I use it on my mobile phone?", a: "Yes. The unit converter is fully responsive and works perfectly on mobile browsers for quick on-the-go measurements." }
        ]
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
      homeSubtitle: "Apps24 is a multilingual online tools website built for fast, simple, practical utilities without unnecessary steps.",
      homeIntro1: "Apps24 is a multilingual online tools website built for people who want fast, simple, and practical utilities without unnecessary steps. Instead of downloading software or creating an account for small tasks, users can open a page, use a tool immediately, and get the result in just a few clicks.",
      homeIntro2: "Our goal is to make everyday digital tasks easier for a wide range of users. Whether you are a student counting words, a marketer preparing links or content, a developer checking JSON or Base64 data, a designer working with colors, or a business owner creating QR codes and barcodes, Apps24 provides lightweight tools that are quick to access and easy to understand.",
      homeAboutTitle: "About Apps24",
      homeWhatYouCanDoTitle: "What You Can Do on Apps24",
      homeWhatYouCanDoBody: "Apps24 brings together a growing collection of useful browser-based tools for text, images, formatting, visual utilities, and technical workflows. You can compress images, convert text case, validate JSON, generate passwords, compare text differences, encode and decode Base64, create QR codes, generate barcodes, and more. These tools are designed for short, focused tasks, so you can solve one problem at a time with a clean layout and a simple workflow.",
      homeWhyUsersChooseTitle: "Why Users Choose Apps24",
      homeWhyUsersChoosePoints: [
        "simple interfaces that are easy to use",
        "fast browser-based tools for quick tasks",
        "multilingual access for global users",
        "practical utilities for real-world needs",
      ],
      homeOngoingFocusTitle: "Built for Everyday Use",
      homeOngoingFocusBody: "Apps24 is designed for a wide range of digital tasks that come up in daily work, study, and online activity. Some users need technical tools for structured data or encoding. Others need content tools for writing, formatting, or publishing. Some need practical generators for QR codes, barcodes, and passwords. By combining these utilities in one place, Apps24 helps users save time and avoid unnecessary software. Most tools work directly in the browser on desktop and mobile, and the site continues to grow with new tools and better content.",
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
      whatIs: "What is {0}?",
      whenToUse: "When to use this tool?",
      howToUseTitle: "How to use {0}",
      faqTitle: "Frequently Asked Questions",
      howItWorks: "How it works",
      unitLength: "Length",
      unitWeight: "Weight",
      unitArea: "Area",
      unitVolume: "Volume",
      unitTemperature: "Temperature",
      unitSpeed: "Speed",
      unitDigital: "Digital",
      from: "From",
      to: "To",
      unitAccuracyNote: "* High precision conversion using standard scientific constants. Result limited to 10 decimal points for readability.",
    },
  },
  ko: {
    tools: {
      imagecompressor: {
        title: "이미지 압축기 & WebP 변환기",
        description: "이미지 파일 크기를 최적화하고 차세대 형식인 WebP로 변환하여 실서버 성능을 향상시키십시오.",
        seo: "이미지 압축 및 WebP 변환을 통한 웹 성능 최적화 가이드.",
        longDescription: "Apps24의 이미지 압축기는 시각적 품질 손실을 최소화하면서 파일 크기를 획기적으로 줄여주는 전문적인 최적화 도구입니다. 특히 구글이 권장하는 차세대 이미지 형식인 WebP 변환 기능을 제공하여, 기존 JPG나 PNG 대비 최대 30~50% 더 작은 용량으로 동일한 화질을 유지할 수 있습니다. 이는 웹사이트의 로딩 속도를 높여 구글 검색 엔진 최적화(SEO) 점수를 높이고, 사용자 이탈률을 줄이는 데 결정적인 역할을 합니다. 별도의 소프트웨어 설치 없이 브라우저 내에서 직접 처리되므로 개인정보 보호 측면에서도 안전합니다.",
        usageContext: "대용량 이미지는 모바일 사용자의 데이터 사용량을 늘리고 페이지 로딩 속도를 저하시킵니다. 블로그 포스팅, 쇼핑몰 상세 페이지, 혹은 고화질 포트폴리오 사이트를 운영하신다면 WebP 변환과 압축은 필수적인 과정입니다. 또한 이메일 첨부 파일 용량 제한을 해결하거나, 클라우드 저장 공간을 절약하고 싶을 때도 매우 유용합니다. 웹 표준에 맞춘 최적화된 이미지는 서버 대역폭 비용 절감에도 기여합니다.",
        howToUse: "1. '업로드' 버튼을 클릭하거나 이미지 파일을 드래그하여 입력 영역에 놓습니다.\n2. 원하는 압축 수준과 WebP 변환 여부를 선택합니다.\n3. 압축이 완료되면 '원본 대비 절감률'을 확인하고 최적화된 파일을 다운로드합니다.\n4. 여러 장의 이미지를 동시에 처리하여 작업 시간을 단축할 수 있습니다.",
        faq: [
          { q: "WebP 형식을 사용해야 하는 이유는 무엇인가요?", a: "WebP는 동일 화질 대비 용량이 훨씬 작아 페이지 로딩을 가속화하며, 투명도(Alpha)와 애니메이션 효과를 모두 지원하는 현대적인 형식입니다. 구글 검색 랭킹에도 긍정적인 영향을 줍니다." },
          { q: "압축 과정에서 제 사진이 서버에 저장되나요?", a: "아니요. Apps24의 모든 최적화 작업은 사용자의 브라우저 로컬 환경에서 수행됩니다. 외부 서버로 이미지가 전송되지 않으므로 보안 걱정 없이 사용하실 수 있습니다." },
          { q: "손실 압축(Lossy)과 무손실 압축(Lossless)의 차이는 무엇인가요?", a: "손실 압축은 눈에 띄지 않는 미세한 데이터를 제거하여 용량을 대폭 줄이는 방식이고, 무손실은 데이터를 그대로 유지하며 용량만 미세하게 조정합니다. 웹용으로는 보통 손실 압축이 더 효율적입니다." },
          { q: "지원되는 파일 형식은 어떻게 되나요?", a: "가장 널리 쓰이는 JPG, JPEG, PNG 형식을 지원하며 결과물은 필요에 따라 WebP로 변환되어 제공됩니다." },
          { q: "이미지 크기(Resolution)도 조정되나요?", a: "현재 버전은 파일 크기(Weight) 압축에 집중하고 있으며, 해상도는 원본을 유지하여 픽셀 깨짐을 방지합니다." }
        ]
      },
      caseconverter: {
        title: "대소문자 변환기 (Case Converter)",
        description: "텍스트의 서식을 대문자, 소문자, 제목형 등으로 클릭 한 번에 표준화하십시오.",
        seo: "전문적인 가독성을 위한 대소문자 변환 및 텍스트 표준화 도구.",
        longDescription: "콘텐츠 제작에 있어 일관된 대소문자 사용은 가독성과 전문성을 결정짓는 핵심 요소입니다. Apps24의 대소문자 변환기는 단순히 문자를 바꾸는 것을 넘어, 영문 기사 제목 작성에 쓰이는 'Title Case'와 문장 시작만 대문자로 바꾸는 'Sentence Case' 등 다양한 옵션을 제공합니다. 특히 프로그래밍 시 유용한 camelCase, snake_case 변환 기능과 대량의 텍스트에서 불필요한 서식을 제거하는 기능은 마케터, 원고 에디터, 그리고 개발자 모두에게 생산성 혁신을 가져다줍니다.",
        usageContext: "해외 마케팅 문구를 영문으로 작성할 때 헤드라인의 대소문자 규칙을 맞추는 것은 매우 까다로운 작업입니다. 또한 시스템 로그에서 대문자 텍스트를 소문자로 변환하거나, 보고서 작성 전 텍스트의 형식을 통일할 때 유용합니다. 불필요하게 대문자로만 작성된 스팸성 느낌의 텍스트를 가독성 좋은 문장으로 순식간에 교정할 수 있어 브랜드 신뢰도를 높이는 데 도움이 됩니다.",
        howToUse: "1. 변환하고자 하는 텍스트를 입력창에 붙여넣습니다.\n2. 상단 버튼 중 원하는 케이스(UPPERCASE, lowercase, Title Case 등)를 클릭합니다.\n3. 변환된 결과를 확인하고 '복사' 버튼을 눌러 원하는 곳에 사용합니다.\n4. 서식 제거 기능을 통해 텍스트 본연의 데이터만 추출할 수도 있습니다.",
        faq: [
          { q: "Title Case 규칙은 정확한가요?", a: "네. 주로 영문법에서 권장되는 '전치사나 접속사를 제외한 주요 단어의 첫 글자를 대문자로 표시'하는 규칙을 준수하여 변환됩니다." },
          { q: "한국어 텍스트에도 적용되나요?", a: "한국어는 대소문자 구분이 없으므로 변환 결과에 영향을 주지 않지만, 영문이 혼용된 텍스트의 경우 영문 부분만 규칙에 맞게 변환됩니다." },
          { q: "프로그래밍용 케이스도 지원하나요?", a: "네. 변수명 작성 시 자주 쓰이는 snake_case(언더바 연결)나 camelCase(낙타 표기법) 옵션을 제공하여 개발 효율을 높여드립니다." },
          { q: "매우 긴 논문급 텍스트도 처리가 가능한가요?", a: "브라우저 리소스가 허용하는 한 수만 자 이상의 텍스트도 순식간에 처리하도록 최적화되어 있습니다." },
          { q: "변환된 텍스트의 이력이 남나요?", a: "보안을 위해 변환된 결과는 브라우저를 닫으면 휘발되며, 별도로 서버에 로그를 남기지 않습니다." }
        ]
      },
      jsonformatter: {
        title: "JSON 포맷터 & 검증기 (JSON Formatter & Validator)",
        description: "복잡한 JSON 데이터를 정리하고 유효성을 검사하여 데이터 가독성과 정확성을 확보하십시오.",
        seo: "효율적인 데이터 디버깅을 위한 JSON 포맷팅 및 구문 검사 도구.",
        longDescription: "현대 소프트웨어 개발과 데이터 통신에서 가장 널리 쓰이는 표준인 JSON(JavaScript Object Notation). 하지만 한 줄로 길게 늘어진 원시 데이터는 사람이 읽고 분석하기에 매우 어렵습니다. Apps24의 JSON 포맷터는 이러한 데이터를 순식간에 계층 구조로 시각화하여 데이터 간의 관계를 한눈에 파악할 수 있도록 돕습니다. 또한 구문 오류(Syntax Error)를 실시간으로 감지하여 누락된 콤마, 잘못된 따옴표 등 사소하지만 치명적인 실수를 찾아내는 강력한 검증 기능을 제공합니다.",
        usageContext: "API 개발 시 응답 데이터를 확인하거나, 설정 파일(config.json)의 오류를 수정할 때 필수적입니다. 데이터 분석가들이 복잡한 중첩 구조의 데이터를 파악해야 할 때나, 학교 과제에서 JSON 형식을 공부하는 학생들에게도 유용한 학습 도구가 됩니다. 데이터의 가독성을 높여 팀원 간의 원활한 소통을 돕고 디버깅 시간을 단축시키는 비즈니스 도구로 활용해 보세요.",
        howToUse: "1. 포맷팅이나 검증이 필요한 JSON 데이터를 입력창에 붙여넣습니다.\n2. 'JSON 포맷팅' 버튼을 클릭하여 들여쓰기가 적용된 깔끔한 구조로 변환합니다.\n3. 데이터에 오류가 의심된다면 '검증' 버튼을 눌러 정확한 오류 위치와 원인을 확인합니다.\n4. 정돈된 데이터를 복사하여 코드나 보고서에 즉시 적용하십시오.",
        faq: [
          { q: "JSON이 유효하지 않다(Invalid)고 나옵니다. 이유가 무엇인가요?", a: "가장 흔한 이유는 마지막 항목 뒤의 불필요한 콤마(Trailing comma), 큰따옴표 대신 작은따옴표 사용, 혹은 대괄호[]와 중괄호{}의 짝이 맞지 않는 경우입니다." },
          { q: "입력한 데이터가 서버에 저장되나요?", a: "절대 그렇지 않습니다. 모든 데이터 처리는 클라이언트 사이드(사용자 브라우저)에서 수행되므로 민감한 데이터도 안심하고 처리하실 수 있습니다." },
          { q: "대용량 JSON 파일도 처리가 가능한가요?", a: "네. 최적화된 엔진을 통해 수메가바이트(MB) 단위의 텍스트 데이터도 브라우저 리소스 내에서 무난하게 처리합니다." },
          { q: "XML이나 다른 형식으로도 변환되나요?", a: "현재는 JSON 고유의 포맷팅과 검증에 집중하고 있으며, 향후 다양한 형식 변환 기능을 업데이트할 예정입니다." },
          { q: "포맷팅된 모양을 커스터마이징 할 수 있나요?", a: "표준 2칸 또는 4칸 들여쓰기를 기본으로 제공하여 가장 보편적이고 가독성이 좋은 형태를 유지합니다." }
        ]
      },
      passwordgenerator: {
        title: "보안 비밀번호 생성기 (Password Generator)",
        description: "현대적인 보안 요구 사항을 충족하는 무작위 비밀번호를 생성하여 계정 보안을 강화하십시오.",
        seo: "해킹 방지를 위한 강력한 무작위 비밀번호 생성 및 보안 가이드.",
        longDescription: "점점 지능화되는 사이버 공격으로부터 당신의 소중한 정보를 지키는 첫 번째 방어선은 바로 '예측 불가능한 비밀번호'입니다. Apps24의 비밀번호 생성기는 브라우저의 고밀도 난수 생성 엔진(CSPRNG)을 사용하여 사람이 유추할 수 없는 완전한 무작위 조합을 만듭니다. 대문자, 소문자, 숫자, 특수문자를 조합하고 길이를 조정하여 금융 서비스, SNS, 업무용 계정 등 각 플랫폼의 보안 요구 조건에 맞는 최상의 비밀번호를 즉시 생성할 수 있습니다.",
        usageContext: "새로운 온라인 서비스에 가입할 때나, 기존의 취약한 비밀번호(생일, 전화번호 등)를 교체할 때 사용하십시오. 특히 동일한 비밀번호를 여러 곳에 재사용하는 위험한 습관을 버리고, 각 사이트마다 고유하고 강력한 비밀번호를 부여하는 것이 보안의 시작입니다. 앱 개발자라면 테스트 계정의 임시 비밀번호를 생성하는 용도로도 활용하기 좋습니다.",
        howToUse: "1. 원하는 비밀번호의 길이를 슬라이더나 수치 입력으로 설정합니다 (보통 12자 이상 권장).\n2. 포함할 문자 구성 요소(대문자, 소문자, 숫자, 기호)를 체크하여 보안 강도를 조정합니다.\n3. '생성' 버튼을 눌러 조건에 맞는 비밀번호를 만듭니다.\n4. 생성된 비밀번호를 복사하여 안전한 비밀번호 관리 앱이나 별도의 오프라인 저장소에 보관하십시오.",
        faq: [
          { q: "강력한 비밀번호의 기준은 무엇인가요?", a: "최소 12자 이상이며, 세 종류 이상의 문자(영어 대/소문자, 숫자, 특수문자)가 혼합된 형태여야 물리적인 무작위 대입 공격(Brute-force)으로부터 안전합니다." },
          { q: "생성기를 통해 만든 비밀번호는 안전한가요?", a: "사용자의 기기 내에서만 생성되며 서버로 전송되지 않으므로, 생성 과정에서의 유출 위험은 전혀 없습니다." },
          { q: "비밀번호를 기억하기 너무 어렵습니다. 어떻게 해야 하나요?", a: "무작위 비밀번호는 기억하는 것이 불가능에 가깝습니다. 따라서 '비밀번호 관리자(Password Manager)' 도구를 함께 사용하여 안전하게 저장하고 관리하는 것을 권장합니다." },
          { q: "특수한 기호도 포함할 수 있나요?", a: "네. @, #, $, %, ^ 등 표준 키보드에서 제공하는 모든 특수 기호를 옵션으로 선택하여 포함할 수 있습니다." },
          { q: "생성된 비밀번호의 보안 점수를 알 수 있나요?", a: "구성 요소와 길이에 따라 자동으로 '낮음', '중간', '안전' 등의 직관적인 보안 등급을 실시간으로 계산해 보여줍니다." }
        ]
      },
      textdiffchecker: {
        title: "텍스트 비교기 (Text Diff Checker)",
        description: "두 텍스트 간의 미세한 차이를 실시간으로 분석하여 변경 사항을 완벽하게 파악하십시오.",
        seo: "정확한 문서 대조 및 코드 변경 점검을 위한 텍스트 비교 도구.",
        longDescription: "수천 줄의 텍스트에서 바뀐 글자 하나를 찾는 것은 모래사장에서 바늘 찾기와 같습니다. Apps24의 텍스트 비교기는 두 문서의 차이점을 라인별, 글자별로 정밀 분석하여 추가된 부분은 녹색, 삭제된 부분은 빨간색으로 가독성 높게 표시해 줍니다. 단순한 텍스트 대조를 넘어, 프로그래밍 코드의 변경 이력을 확인하거나 계약서의 문구 수정을 검토할 때 발생할 수 있는 인간의 실수를 원천적으로 방지하는 전문적인 비교 엔진을 탑재하고 있습니다.",
        usageContext: "코드 수정 전후의 로직을 비교하는 개발자, 번역 원고의 수정본을 대조하는 에디터, 혹은 약관이나 계약서의 구문 변화를 감시해야 하는 법무 담당자에게 필수적인 도구입니다. 복사하여 붙여넣기만 하면 두 텍스트의 일치 여부를 즉시 % 단위로 확인할 수 있으며, 불필요한 공백이나 줄바꿈 차이까지 섬세하게 잡아내어 완벽한 문서 관리를 돕습니다.",
        howToUse: "1. '원본 텍스트' 영역에 기준이 되는 텍스트를 붙여넣습니다.\n2. '비교 텍스트' 영역에 수정된 버전의 텍스트를 입력합니다.\n3. '비교하기' 버튼을 누르면 실시간으로 차이점이 강조된 분석 결과가 하단에 표시됩니다.\n4. 옵션 설정을 통해 대소문자 구분 여부나 공백 무시 여부를 직접 조정하여 정밀도를 높일 수 있습니다.",
        faq: [
          { q: "비교 가능한 텍스트 길이에 제한이 있나요?", a: "일반적인 문서 수준의 텍스트는 물론, 수만 줄의 소스 코드도 브라우저 리소스 내에서 무난하게 처리 가능합니다." },
          { q: "공백이나 줄바꿈 차이도 감지하나요?", a: "네. 설정에 따라 공백 하나, 줄바꿈 한 줄의 차이까지 모두 시각적으로 확인하실 수 있습니다." },
          { q: "비교 결과 보고서를 저장할 수 있나요?", a: "현재는 화면에서 즉시 확인하는 방식이며, 필요시 화면을 캡처하거나 텍스트를 복사하여 기록으로 남길 수 있습니다." },
          { q: "프로그래밍 언어 문법도 지원하나요?", a: "본 도구는 텍스트 기반의 범용 비교기이므로 모든 프로그래밍 언어의 텍스트 차이를 구분하는 데 적합합니다." },
          { q: "서로 다른 언어의 텍스트도 비교되나요?", a: "텍스트 문자 단위로 대조하므로 언어에 상관없이 글자 하나하나의 차이를 정확히 찾아냅니다." }
        ]
      },
      base64encoder: {
        title: "Base64 인코더 & 디코더 (Base64 Encoder & Decoder)",
        description: "데이터의 텍스트 변환 및 전송을 위한 Base64 인코딩/디코딩 기능을 빠르고 안전하게 이용하십시오.",
        seo: "API 통신 및 데이터 전송을 위한 표준 Base64 변환 도구 가이드.",
        longDescription: "Base64는 8비트 이진 데이터를 64진법의 텍스트로 변환하는 가장 대중적인 인코딩 방식입니다. 주로 네트워크를 통해 바이너리 데이터(이미지, 실행 파일 등)를 전송하거나, URL에 포함할 수 없는 문자를 안전하게 전달해야 할 때 사용됩니다. Apps24의 Base64 도구는 표준 RFC 규격을 준수하여 어떤 시스템과도 호환되는 정밀한 변환 결과를 제공합니다. 데이터의 무결성을 유지하면서 텍스트 기반 시스템에서 바이너리 데이터를 자유롭게 다룰 수 있도록 돕습니다.",
        usageContext: "웹 개발 시 이미지를 HTML/CSS에 직접 내장(Data URI)하거나, API 인증을 위한 Authorization 헤더 값을 생성할 때 필수적입니다. 또한 암호화된 메시지를 전송하기 전 텍스트 형태로 변환하거나, 특수 문자가 포함된 데이터를 전송 오류 없이 전달하고 싶을 때 유용합니다. 개발자들의 디버깅 업무뿐만 아니라 기술적인 데이터 구조를 이해하려는 학생들에게도 훌륭한 학습 도구가 됩니다.",
        howToUse: "1. 인코딩(변환)할 일반 텍스트나 디코딩(복원)할 Base64 문자열을 입력창에 넣습니다.\n2. 수행하고자 하는 작업에 맞춰 '인코딩' 또는 '디코딩' 버튼을 클릭합니다.\n3. 하단 결과 영역에 즉시 변환된 값이 나타납니다.\n4. '복사' 버튼을 사용하여 결과값을 개발 환경이나 통신 도구에 적용하십시오.",
        faq: [
          { q: "Base64 인코딩을 하면 데이터 크기가 늘어나나요?", a: "네. 이진 데이터를 텍스트로 표현하는 과정에서 원본 대비 약 33% 정도 용량이 증가하게 됩니다." },
          { q: "Base64는 암호화(Encryption)인가요?", a: "아니요. Base64는 단순한 인코딩 방식이므로 누구나 디코딩이 가능합니다. 기밀 유지가 필요한 데이터는 반드시 별도의 암호화 과정을 거쳐야 합니다." },
          { q: "이미지 파일도 Base64로 변환할 수 있나요?", a: "현재는 텍스트 기반의 인코딩/디코딩을 지원하며, 이미지 인코딩 기능은 향후 업데이트될 예정입니다." },
          { q: "URL용 Base64와 일반 Base64의 차이는 무엇인가요?", a: "URL에서는 +, / 문자가 특수 기능을 하므로 이를 -, _로 대체하는 방식이 쓰입니다. 본 도구는 가장 표준적인 Base64 형식을 따릅니다." },
          { q: "인코딩 결과 뒤에 있는 == 기호는 무엇인가요?", a: "패딩(Padding)이라고 하며, 데이터의 길이를 3바이트 단위로 맞추기 위해 사용되는 표준 형식입니다." }
        ]
      },
      colorconverter: {
        title: "색상 코드 변환기 (Color Code Converter)",
        description: "HEX, RGB, HSL 등 디자인과 개발에 필요한 모든 색상 체계를 자유롭게 변환하고 팔레트를 구축하십시오.",
        seo: "웹 표준 준수 및 디자인 생산성 향상을 위한 전문 색상 코드 변환 도구.",
        longDescription: "성공적인 디자인의 핵심은 정확한 색상 전달에 있습니다. 디자이너가 사용하는 HEX 코드와 개발자가 CSS에서 사용하는 RGB/HSL 값 사이의 간극을 Apps24가 완벽하게 메워드립니다. 본 도구는 색상 추출뿐만 아니라, 선택한 색상의 채도와 밝기를 직관적으로 조절할 수 있는 인터페이스를 제공하여 브랜드 가이드라인에 맞는 정확한 색상 라이브러리를 구축할 수 있도록 돕습니다. 웹 접근성을 고려한 대비 차이 확인이나 어두운 모드 전용 색상 선택 시에도 강력한 조력자가 됩니다.",
        usageContext: "포토샵이나 피그마에서 추출한 색상을 웹 코드로 변환하거나, 로고 제작 시 브랜드 컬러의 다양한 형식을 정의할 때 활용하십시오. 특히 HSL 형식을 사용하면 색상의 느낌(톤)을 유지하면서 밝기만 조절하는 UI 작업이 매우 쉬워집니다. 프론트엔드 개발자들이 스타일시트(CSS)를 작성할 때나, 파워포인트 등 문서 작성 중 특정 브랜드 색상을 정확히 입력해야 할 때 필수적인 유틸리티입니다.",
        howToUse: "1. 화면의 컬러 피커를 클릭하여 원하는 색상을 시각적으로 선택하거나, 알고 있는 HEX 코드를 직접 입력합니다.\n2. 색상을 선택하는 즉시 RGB, HSL, CMYK 등의 변환된 값이 실시간으로 업데이트됩니다.\n3. 각 형식 옆의 '복사' 버튼을 눌러 코드나 디자인 도구에 바로 적용합니다.\n4. 하단의 색상 미리보기를 통해 실제 화면에서 어떻게 보일지 확인하십시오.",
        faq: [
          { q: "HEX 코드와 RGB의 차이는 무엇인가요?", a: "HEX는 16진수 방식을 사용한 짧은 문자열이고, RGB는 빛의 삼원색(빨강, 초록, 파랑) 값을 0~255 숫자로 표현한 것입니다. 결과적으로 같은 색상을 나타냅니다." },
          { q: "왜 HSL 형식을 사용하나요?", a: "HSL은 색상(Hue), 채도(Saturation), 밝기(Lightness)를 다루므로, 숫자를 조절하는 것만으로 '더 밝게'나 '더 선명하게' 같은 시각적 보정이 매우 직관적이기 때문입니다." },
          { q: "웹 안전 색상(Web Safe Colors)이란 무엇인가요?", a: "과거 낮은 해상도의 모니터에서도 왜곡 없이 표현되던 216가지 표준 색상을 의미하지만, 최근에는 하드웨어 성능이 좋아져 모든 색상을 자유롭게 사용하셔도 무방합니다." },
          { q: "투명도(Alpha) 값도 포함되나요?", a: "현재 기본 변환에는 3차원 값이 제공되며, RGBA와 같은 투명도 지원 형식은 향후 추가될 예정입니다." },
          { q: "콘트라스트(대비) 확인도 가능한가요?", a: "선택한 배경색 위에 흰색 또는 검은색 글자가 잘 보일지 여부를 시각적으로 미리 확인할 수 있습니다." }
        ]
      },
      unitconverter: {
        title: "단위 변환기 (Professional Unit Converter)",
        description: "전 세계 다양한 측정 표준 간의 차이를 완벽하게 해결하고 일상과 전문 업무의 효율을 높이십시오.",
        seo: "미터법, 야드파운드법 등 국가별 도량형 차이를 해결하는 정밀 단위 변환 가이드.",
        longDescription: "우리가 사는 세상은 미터법(Metric)과 야드파운드법(Imperial)이라는 두 가지 주요 도량형이 공존하고 있습니다. Apps24의 전문 단위 변환기는 이러한 시스템 간의 간극을 메우기 위해 설계된 고정밀 계산 도구입니다. 단순히 숫자를 바꾸는 것을 넘어, 과학적 상수를 기반으로 길이, 무게, 넓이, 부피, 온도, 속도 및 디지털 데이터까지 7가지 카테고리의 수십 가지 단위를 지원합니다. 특히 한국 부동산 거래 시 필수적인 '평(坪)' 단위와 미국의 '마일(mile)', '부셸(bushel)' 등 지역 특화 단위까지 포함되어 있어 전 세계 어디서든 유용하게 사용할 수 있습니다.",
        usageContext: "해외 직구를 통해 구매한 의류의 사이즈를 확인하거나, 요리 레시피에 나오는 생소한 부피 단위를 변환해야 할 때 가장 강력한 위력을 발휘합니다. 또한 기술 도면을 다루는 엔지니어, 해외 여행 중 날씨 정보를 파악하려는 여행자, 혹은 학교 과제를 수행하는 학생들에게도 정확한 수치를 제공합니다. 특히 '미국 갤런'과 '영국 갤런'처럼 명칭은 같지만 실질적인 양이 다른 복잡한 단위들도 명확히 구분하여 제공하므로 실수 없는 계산이 가능합니다.",
        howToUse: "1. 상단 탭에서 변환하고자 하는 카테고리(예: 길이, 무게)를 선택합니다.\n2. 왼쪽 '입력' 칸에 변환할 숫자를 입력합니다.\n3. 드롭다운 메뉴를 통해 현재 사용 중인 단위와 변환하고 싶은 대상 단위를 각각 선택합니다.\n4. 하단결과 창에 실시간으로 표시되는 정확한 변환 값을 확인하고 필요한 경우 '복사' 버튼을 누릅니다.\n5. 중앙의 ⇄ 버튼을 누르면 입력 단위를 즉시 스왑(Swap)할 수 있습니다.",
        faq: [
          { q: "미터법과 야드파운드법의 차이는 무엇인가요?", a: "미터법은 10진법을 기반으로 하는 국제 표준(SI)이며, 야드파운드법은 인치, 피트, 마일 등을 사용하는 미국식 표준입니다. 본 도구는 두 체계 간의 정확한 환산을 지원합니다." },
          { q: "온도 변환 시 오차는 없나요?", a: "온도는 '시작점'과 '비율'이 모두 다르기 때문에 단순 곱셈이 아닌 정밀한 보정 수식을 사용합니다. 섭씨 0도는 화씨 32도와 같으며, 본 도구는 소수점 10자리까지 정확하게 계산합니다." },
          { q: "한국에서만 쓰는 '평' 단위는 어떤 기준으로 계산되나요?", a: "전통적인 '평'은 약 3.3058 제곱미터를 의미합니다. 부동산 평면도 분석이나 토지 면적 계산 시 원클릭으로 변환할 수 있습니다." },
          { q: "데이터 단위(GB, TB)는 1000인가요, 1024인가요?", a: "컴퓨터 시스템의 표준인 1024진법(Binary)을 기본으로 사용하여, 실제 운영체제에서 표시되는 용량과 일치하는 결과를 제공합니다." },
          { q: "소수점 자릿수 조절이 가능한가요?", a: "가독성을 위해 기본적으로 소수점 10자리까지 표시되며, 매우 작거나 큰 수의 경우 과학적 표기법을 대신하여 정확한 수치를 전달합니다." }
        ]
      },
      ruler: {
        title: "고정밀 온라인 자 (Professional Screen Ruler)",
        description: "화면 해상도와 관계없이 신용카드 보정 기능을 통해 실제 사물의 길이를 소수점 단위까지 정밀하게 측정하십시오.",
        seo: "실제 자가 없을 때 유용한 브라우저 기반 고정밀 화면 측정 도구 가이드.",
        longDescription: "물리적인 자가 갑자기 필요할 때, Apps24의 온라인 자는 가장 완벽한 대안이 됩니다. 단순히 화면에 눈금을 표시하는 것을 넘어, 전 세계 공통 규격인 '신용카드'를 이용한 역동적 보정(Dynamic Calibration) 시스템을 탑재하고 있습니다. 이를 통해 사용자의 모니터 크기나 해상도 설정에 상관없이 실제 1cm와 1인치를 정확하게 구현해 냅니다. 0점 설정을 위한 더블 클릭 기능과 가로/세로 전환 기능을 통해 작은 부품, 우편물 크기, 혹은 디자인 작업물 등을 정밀하게 측정할 수 있습니다.",
        usageContext: "택배 상자의 규격을 확인하거나, 온라인으로 구매하려는 액세서리의 실제 크기를 가늠해 볼 때 유용합니다. 또한 개발자나 디자이너가 화면상의 특정 요소의 물리적 크기를 파악해야 할 때, 혹은 수학교구 대용으로 학생들이 길이를 공부할 때도 훌륭한 도구가 됩니다. 스마트폰이나 태블릿처럼 화면 밀도가 높은 기기에서도 보정 기능을 통해 신뢰할 수 있는 수치를 얻을 수 있습니다.",
        howToUse: "1. 표준 신용카드나 체크카드를 준비하여 화면의 자 눈금 위에 가로로 평평하게 올려 놓습니다.\n2. 카드의 실제 가로 길이를 입력창에 넣고 '보정하기'를 클릭하여 눈금을 실제 크기에 맞춥니다.\n3. 측정하려는 물체를 화면에 대고 눈금을 확인합니다. 자의 아무 곳이나 '더블 클릭'하면 그 지점이 0점이 되어 편리하게 시작점을 잡을 수 있습니다.\n4. 필요에 따라 cm와 inch 단위를 전환하며 측정값을 확인하십시오.",
        faq: [
          { q: "보정 없이 바로 사용해도 되나요?", a: "기기마다 픽셀 밀도(PPI)가 다르기 때문에 보정 없이 사용하면 오차가 발생할 수 있습니다. 정확한 측정을 위해 반드시 한 번의 보정 과정을 거치는 것을 권장합니다." },
          { q: "신용카드 외에 다른 보정 방법은 없나요?", a: "표준 카드의 실제 가로 길이(약 8.56cm)를 입력하는 것이 가장 정확합니다. 카드가 없다면 실제 자로 화면의 1cm를 재어 값을 입력해도 보정이 가능합니다." },
          { q: "모바일 기기에서도 사용 가능한가호?", a: "네. 반응형 웹 기술을 적용하여 스마트폰에서도 보정 후 실제 크기로 측정하실 수 있습니다." },
          { q: "측정 가능한 최대 길이는 얼마인가요?", a: "사용자의 모니터 물리적 가로 너비까지 측정할 수 있습니다. 듀얼 모니터를 사용 중이라면 창을 확장하여 더 길게 측정할 수도 있습니다." },
          { q: "0점(Origin)을 어떻게 초기화하나요?", a: "자의 맨 왼쪽 끝을 탭하거나, 자의 임의 지점을 다시 더블 클릭하여 언제든지 새로운 0점을 설정할 수 있습니다." }
        ]
      },
      wordcounter: {
        title: "글자 수 세기 & 텍스트 분석기 (Word Counter & Analyzer)",
        description: "공백 포함/제외 글자 수와 단어 수, 그리고 실시간 인덱스 확인까지 한눈에 파악하여 완벽한 원고를 작성하십시오.",
        seo: "네이버 블로그, 자기소개서, SEO 메타태그 작성을 위한 실시간 글자 수 세기 도구.",
        longDescription: "글쓰기의 가치는 내용만큼이나 '형식의 제약'을 맞추는 데에서도 나옵니다. Apps24의 글자 수 세기는 단순한 숫자 카운팅을 넘어, 공백 포함/제외 수치를 실시간으로 분리 제공하여 네이버 블로그 포스팅, 대학 자기소개서, 공공기관 제출 서류 등 엄격한 글자 수 제한이 있는 모든 상황에 완벽하게 대응합니다. 특히 특정 글자가 몇 번째 위치에 있는지 알려주는 '인덱스 추적' 기능은 프로그래밍 데이터 분석이나 특정 키워드 위치 확인 시 매우 유용하게 활용됩니다.",
        usageContext: "구글 SEO 메타 설명(약 160자 이내)이나 유튜브 제목(70자 이내) 최적화 작업 시 필수적입니다. 또한 방송 대본 작성 시 분량을 가늠하거나, 외국어 에세이 작성 시 단어 수 제한을 지켜야 하는 학생들에게도 권장됩니다. 한글과 영문, 숫자가 혼용된 텍스트에서도 정확한 카운팅을 보장하며, 붙여넣기 시 불필요한 서식을 제거하고 순수하게 텍스트만 분석하므로 결과의 신뢰도가 높습니다.",
        howToUse: "1. 분석하고자 하는 텍스트를 입력창에 자유롭게 타이핑하거나 붙여넣습니다.\n2. 실시간으로 업데이트되는 상단의 '공백 포함', '공백 제외' 글자 수와 '단어 수'를 확인합니다.\n3. 특정 위치의 글자를 찾고 싶다면 '글자 위치 찾기' 입력창에 인덱스 번호를 넣어 강조 표시를 확인합니다.\n4. '전체 복사' 또는 '지우기' 버튼을 사용하여 다음 작업을 준비합니다.",
        faq: [
          { q: "한글 한 글자는 몇 글자로 카운트되나요?", a: "표준 방식에 따라 한글, 영문, 숫자, 특수문자 모두 1글자로 카운트합니다. 바이트(Byte) 단위 계산과는 차이가 있을 수 있습니다." },
          { q: "입력할 수 있는 텍스트 양에 제한이 있나요?", a: "브라우저 성능에 따라 다르지만 보통 소설 한 권 분량의 텍스트도 지연 없이 즉시 분석할 수 있도록 최적화되어 있습니다." },
          { q: "공백 제외 카운트에는 줄바꿈도 제외되나요?", a: "네. 공백 제외 카운트는 띄어쓰기, 탭, 줄바꿈 등 모든 투명 문자를 제외한 순수 텍스트 문자열의 길이를 측정합니다." },
          { q: "단어 수의 기준은 무엇인가요?", a: "공백(Space)을 기준으로 나뉘는 독립된 문자 그룹의 개수를 단어 수로 계산합니다." },
          { q: "입력한 내용이 어딘가로 전송되나요?", a: "아니요. 모든 텍스트 처리는 로컬 브라우저 메모리상에서만 수행되며, 페이지를 새로고침하면 안전하게 삭제됩니다." }
        ]
      },
      countdown: {
        title: "몰입형 카운트다운 타이머 (Immersion Timer)",
        description: "뽀모도로 학습법, 요리, 발표 연습 등 시간을 정밀하게 관리하고 성과를 극대화하십시오.",
        seo: "집중력 향상을 위한 나이트 모드 및 전체 화면 지원 온라인 타이머 가이드.",
        longDescription: "성공적인 시간 관리의 핵심은 '시각적 압박'을 긍정적인 동기부여로 바꾸는 것입니다. Apps24의 카운트다운 타이머는 단순한 알람을 넘어, 작업에 완전히 몰입할 수 있도록 나이트 모드와 전체 화면 기능을 지원합니다. 뽀모도로(Pomodoro) 학습법을 실천하는 학생부터, 요리 시간을 정확히 체크해야 하는 셰프, 그리고 발표 시간을 엄수해야 하는 연사들을 위해 설계되었습니다. 브라우저 탭을 이동해도 백그라운드에서 정확하게 작동하며, 시인성이 뛰어난 디자인으로 멀리서도 남은 시간을 한눈에 확인할 수 있습니다.",
        usageContext: "25분 집중, 5분 휴식의 뽀모도로 기법을 사용하여 업무 생산성을 높여보세요. 또한 홈트레이닝 중 휴식 시간을 엄격히 제한하거나, 라면이나 파스타를 삶는 등 정밀한 요리 시간이 필요할 때 손쉬운 도우미가 됩니다. 전체 화면 모드를 켜면 공부방이나 사무실에서 공유 타이머로도 활용하기 좋습니다. 밤에는 나이트 모드를 활성화하여 눈의 피로를 최소화하며 집중할 수 있습니다.",
        howToUse: "1. 시간, 분, 초 단위로 타이머의 목표 시간을 설정합니다.\n2. '시작(Start)' 버튼을 눌러 카운트다운을 개시합니다. 상황에 따라 '일시정지'를 사용할 수 있습니다.\n3. 필요한 경우 '나이트 모드'를 켜서 배경을 어둡게 하거나, '전체 화면' 버튼을 눌러 시계만 크게 띄웁니다.\n4. 시간이 완료되면 알림음과 함께 작업 종료를 알립니다. '초기화(Reset)'를 눌러 다시 시작할 수 있습니다.",
        faq: [
          { q: "탭을 닫아도 타이머가 계속 작동하나요?", a: "아니요. 브라우저 탭을 닫으면 타이머 작동이 멈칩니다. 하지만 탭을 연 채로 다른 페이지를 보는 백그라운드 상태에서는 계속 작동합니다." },
          { q: "알림 소리를 끄거나 조절할 수 있나요?", a: "현재 시스템의 볼륨 설정을 따르고 있으며, 향후 무음 모드 및 다양한 알림음 선택 기능이 추가될 예정입니다." },
          { q: "최대 설정 가능한 시간은 얼마인가요?", a: "99시간 59분 59초까지 설정 가능하여 장시간의 작업이나 발표 관리에도 충분합니다." },
          { q: "나이트 모드는 어떤 장점이 있나요?", a: "검은색 배경에 대비가 낮은 색상을 사용하여 눈의 피로를 줄여주며, 배터리 소모(OLED 화면 기준)를 절약하는 효과가 있습니다." },
          { q: "모바일에서 화면이 꺼지면 타이머도 멈추나요?", a: "모바일 브라우저 정책에 따라 화면이 잠기면 백그라운드 작동이 제한될 수 있으므로, 작동 중에는 화면 켜짐 상태를 유지하는 것을 권장합니다." }
        ]
      },
      digitalclock: {
        title: "풀스크린 디지털 시계 (Digital Desk Clock)",
        description: "현재 시간을 실감나고 세련된 디자인으로 확인하고 당신의 공간을 스마트하게 꾸며보십시오.",
        seo: "인테리어 소품 및 시간 관리를 위한 세로/가로 전체 화면 디지털 시계.",
        longDescription: "디지털 기기는 많지만, 멀리서도 한눈에 들어오는 직관적인 '진짜 시계'는 의외로 찾기 어렵습니다. Apps24의 디지털 시계는 당신의 태블릿, 노트북, 혹은 남는 스마트폰을 세련된 탁상시계로 변환시켜 줍니다. 12시간제와 24시간제 선택 기능을 제공하며, 군더더기 없는 미니멀리즘 디자인을 채택하여 사무실 책상 위나 침대 옆 협탁 어디에도 잘 어울립니다. 또한 서버 시간과 동기화되어 가장 정확한 표준 시각을 제공하므로 중요한 일정이나 수강 신청 전에 사용하기에도 부족함이 없습니다.",
        usageContext: "공부방에서 수험생들의 시간 관리용으로 사용하거나, 오피스 환경에서 대형 모니터 한쪽에 띄워놓고 프로젝트 일정을 관리할 때 유용합니다. 어두운 밤에는 나이트 모드를 활용하여 수면에 방해되지 않는 은은한 무드등 겸 시계로 활용해 보세요. 전체 화면 모드를 켜면 남는 구형 아이패드나 갤럭시탭을 멋진 인테리어 시계로 재활용할 수 있어 환경 보호와 실용성을 동시에 챙길 수 있습니다.",
        howToUse: "1. 도구 페이지에 접속하는 즉시 실시간 현재 시간이 표시됩니다.\n2. 개인의 선호에 맞게 12H(오전/오후)와 24H 형식 중 하나를 선택합니다.\n3. '전체 화면' 모드를 눌러 눈에 띄게 큰 시계 화면으로 전환합니다.\n4. 화면의 '나이트 모드'나 색상 변경 옵션(향후 지원)을 통해 주변 환경과 어울리는 조도를 맞춥니다.",
        faq: [
          { q: "시계의 오차는 어느 정도인가요?", a: "사용 기기의 시스템 시간을 기반으로 작동하며, 일반적으로 네트워크 시간 서버(NTP)와 동기화된 매우 정밀한 시각을 보여줍니다." },
          { q: "나이트 모드에서 밝기 조절이 가능한가요?", a: "현재는 배경을 어둡게 처리하는 기능을 지원하며, 실제 밝기는 기기 자체의 화면 밝기 설정을 통해 조절하실 수 있습니다." },
          { q: "초 단위까지 볼 수 있나요?", a: "네. 시간과 분뿐만 아니라 초 단위 변화까지 생생하게 표시하여 정밀한 시간 확인이 필요할 때 도움을 드립니다." },
          { q: "스마트폰 가로 모드도 지원하나요?", a: "네. 기기를 가로로 눕히면 자동으로 레이아웃이 변경되어 더 넓게 시간을 확인하실 수 있습니다." },
          { q: "배터리 소모가 심하지 않은가요?", a: "정적인 디자인과 최적화된 코드로 리소스 사용을 최소화하여 배터리 효율을 높였습니다." }
        ]
      },
      screenlamp: {
        title: "무드 스크린 라이트 (Ambiance Screen Light)",
        description: "당신의 화면을 부드러운 단색 광원으로 변환하여 독서등, 촬영 조명, 혹은 감성적인 무드등으로 활용하십시오.",
        seo: "눈의 피로를 줄여주는 야간 독서등 및 화면 불량 화소 체크용 조명 도구 가이드.",
        longDescription: "빛은 공간의 분위기를 바꾸는 가장 강력한 도구입니다. Apps24의 스크린 라이트는 사용자의 디스플레이를 균일한 색상의 부드러운 상자로 변환시켜 줍니다. 아주 차가운 화이트부터 따뜻한 오렌지, 그리고 감각적인 네온 컬러까지 자유롭게 선택할 수 있습니다. 특히 물리적인 스탠드가 없는 야간에 은은한 독서등으로 활용하거나, 유튜브 영상 촬영 시 보조 조명(Backlight)으로 사용하여 피사체의 윤곽을 살리는 데 탁월한 효과를 발휘합니다. 전체 화면 모드와 결합하면 당신의 기기는 즉시 강력한 조명 장비가 됩니다.",
        usageContext: "캠핑장에서 텐트 안을 밝히는 은은한 랜턴 대용이나, 늦은 밤 가족들을 깨우지 않고 스마트폰만으로 책을 읽을 때 유용합니다. 또한 디자이너들이 모니터의 색상 표현력을 테스트하거나, 중고 기기 거래 시 '불량 화소(Dead Pixel)'를 체크하기 위해 흰색/검은색/빨간색 등을 띄워보는 용도로도 널리 쓰입니다. 눈이 피로할 때는 가장 따뜻한 색온도를 선택하여 블루라이트의 영향을 최소화하면서 작업을 이어갈 수 있습니다.",
        howToUse: "1. 화면 상단의 프리셋 컬러 중 하나를 선택하거나, 컬러 피커를 사용하여 당신만의 커스텀 색상을 지정합니다.\n2. 조명의 색상을 정했다면 '전체 화면' 버튼을 클릭하여 화면 전체를 빛으로 채웁니다.\n3. 모바일 기기의 경우 화면 밝기 설정을 최대치로 올리면 조명 효과가 극대화됩니다.\n4. 사용을 마친 후에는 화면을 탭하거나 ESC 키를 눌러 모드에서 나옵니다.",
        faq: [
          { q: "실제 조명 기구처럼 밝은가요?", a: "기기의 디스플레이 최대 밝기에 따라 다르지만, 어두운 방안이나 야간 야외 활동 시 주변을 식별하거나 독서하기에 충분한 광량을 제공합니다." },
          { q: "블루라이트를 직접 차단해 주나요?", a: "따뜻한 계열(주황, 빨강)의 색상을 선택하면 화면에서 방출되는 차가운 청색광의 비중을 물리적으로 낮추어 시력을 보호하는 효과가 있습니다." },
          { q: "화면 잔상이 남을까 걱정됩니다. 괜찮을까요?", a: "단시간 사용으로는 문제가 없으나, 동일한 고휘도 색상을 장시간(수 시간 이상) 방치할 경우 OLED 화면의 경우 번인(Burn-in) 위험이 있을 수 있으니 주의가 필요합니다." },
          { q: "불량 화소 체크는 어떻게 하나요?", a: "흰색, 빨간색, 초록색, 파란색, 검은색 등을 순서대로 전체 화면으로 띄워보며 한 지점만 색상이 다르거나 빛이 안 들어오는 곳이 있는지 육안으로 확인하면 됩니다." },
          { q: "특정 색상을 예약해서 켤 수 있나요?", a: "현재는 수동 선택 방식이며, 추후 타이머 기능과 연동하여 특정 시간에 조명이 꺼지거나 바뀌는 기능이 추가될 예정입니다." }
        ]
      },
      qrgenerator: {
        title: "고속 QR 코드 생성기 (Quick QR Code Generator)",
        description: "URL, 텍스트, 연락처 등 원하는 모든 데이터를 스마트하게 인코딩하여 즉시 공유 가능한 QR 코드를 만드십시오.",
        seo: "비즈니스 마케팅 및 오프라인 정보 전달을 위한 고해상도 QR 코드 생성 도구.",
        longDescription: "오프라인과 온라인을 연결하는 가장 빠르고 직관적인 통로인 QR(Quick Response) 코드. Apps24의 QR 코드 생성기는 별도의 회원 가입 없이 누구나 고해상도의 QR 코드를 무료로 생성할 수 있는 도구입니다. 웹사이트 주소(URL)는 물론, 복잡한 와이파이 비밀번호, 이벤트 정보, 혹은 긴 문장도 코드 안에 담아낼 수 있습니다. 생성된 코드는 스캔과 동시에 즉각적인 반응을 보장하며, 화질 저하 없는 다운로드 기능을 통해 웹사이트 게시물이나 인쇄용 홍보물 제작 시 바로 사용할 수 있습니다.",
        usageContext: "식당에서 메뉴판 링크를 제공하거나, 비즈니스 행사에서 본인의 디지털 명함을 공유할 때 필수적입니다. 또한 배송 안내장, 전단지, 학생들의 포트폴리오 사이트 접속 등 다양한 마케팅 시나리오에서 마찰 없이 사용자를 연결해 줍니다. 특히 SNS 프로필 주소를 텍스트로 적는 대신 QR 코드로 표시하면 팔로워 유입 확률을 획기적으로 높일 수 있습니다. 강력한 무료 생성기로 당신의 비즈니스 연결을 자동화해 보세요.",
        howToUse: "1. '내용 입력' 칸에 QR 코드에 담고 싶은 링크(URL)나 일반 텍스트를 입력합니다.\n2. 입력과 동시에 화면의 QR 코드가 실시간으로 업데이트됩니다.\n3. 생성된 코드가 정상적으로 작동하는지 본인의 스마트폰 카메라로 테스트 스캔을 해봅니다.\n4. '다운로드' 버튼을 눌러 이미지 파일로 저장한 후, 인쇄물이나 웹사이트에 적용하십시오.",
        faq: [
          { q: "생성된 QR 코드에 유효 기간이 있나요?", a: "아니요. Apps24에서 생성된 QR 코드는 영구적입니다. 다만, 연결된 웹사이트 주소가 바뀌거나 삭제되면 스캔 후 접속이 안 될 수 있으니 주의하십시오." },
          { q: "상업적인 용도로 사용해도 비용이 발생하나요?", a: "완전 무료입니다. 비즈니스 홍보물, 제품 패키지, 메뉴판 등 상업적 목적으로 자유롭게 사용하시고 배포하셔도 됩니다." },
          { q: "얼마나 많은 데이터를 넣을 수 있나요?", a: "수백 자 이상의 긴 텍스트도 가능하지만, 데이터가 많아질수록 QR 코드의 패턴이 촘촘해져 스캔 속도가 느려질 수 있으므로 가능하면 짧은 링크 시스템을 활용하는 것이 좋습니다." },
          { q: "QR 코드의 색상을 바꿀 수 있나요?", a: "현재는 가장 높은 인식률을 보장하는 검은색과 흰색 조합을 기본으로 제공하며, 향후 디자인 커스터마이징 기능이 업데이트될 예정입니다." },
          { q: "스캔이 잘 안 되는 경우는 왜 그런가요?", a: "코드 주변의 여백이 너무 좁거나, 인쇄 상태가 흐릿한 경우, 혹은 너무 많은 텍스트가 들어가 패턴이 지나치게 복잡한 경우에 발생할 수 있습니다." }
        ]
      },
      barcodegenerator: {
        title: "스마트 바코드 생성기 (Efficient Barcode Generator)",
        description: "재고 관리, 도서 분류, 물류 추적 등 다양한 표준 규격의 바코드를 생성하여 시스템 효율을 극대화하십시오.",
        seo: "소규모 사업장 및 재고 관리를 위한 표준 규격 바코드 제작 가이드.",
        longDescription: "현대 물류와 유통의 근간이 되는 바코드 시스템. Apps24의 바코드 생성기는 소규모 판매자나 창고 관리자들이 고가의 장비 없이도 표준화된 바코드를 생성할 수 있도록 특화된 도구입니다. 숫자와 문자를 기계가 읽을 수 있는 선과 공간의 패턴으로 변환하여, 스마트폰의 카메라나 레이저 스캐너를 통해 제품을 즉각 식별할 수 있습니다. 단순한 숫자 나열을 넘어, 국제 표준 규격에 맞는 가독성을 확보하여 물류 현장에서 발생할 수 있는 데이터 오입력 사고를 미연에 방지합니다.",
        usageContext: "자체 제작 상품에 식별 번호를 부여하여 효율적으로 재고를 관리하거나, 도서관의 책 분류표 작성, 혹은 사무실 비품의 자산 번호를 관리할 때 필수적입니다. 엑셀로 관리하던 재고를 바코드화하면 입출고 시간이 획기적으로 단축됩니다. 카페나 음식점의 포인트 카드 번호 생성, 이벤트 쿠폰의 고유 번호 부여 등 실생활의 다양한 마케팅 및 자동화 활동에서도 강력한 성능을 발휘합니다.",
        howToUse: "1. 바코드 밑에 표시될 숫자나 문자를 입력창에 넣습니다.\n2. 원하는 바코드 형식(CODE128 등)을 선택합니다 (가장 범용적인 형식이 기본값입니다).\n3. 화면에 생성된 바코드가 선명하게 보이는지 확인합니다.\n4. 이미지 파일을 다운로드하여 라벨지에 인쇄하거나 관리 시스템에 등록하십시오.",
        faq: [
          { q: "바코드와 QR 코드의 차이는 무엇인가요?", a: "바코드는 주로 1차원적인 숫자/문자 식별에 특화되어 물류 시스템에서 빠르게 스캔하는 용도이며, QR 코드는 더 많은 데이터(URL 등)를 담는 2차원 방식입니다." },
          { q: "편의점에서 쓰는 바코드를 만들 수 있나요?", a: "네. CODE128 등 표준 형식을 지원하므로 시중의 바코드 스캐너와 완벽하게 호환됩니다." },
          { q: "한글도 바코드로 만들 수 있나요?", a: "일부 형식(CODE128)은 제한적인 문자 집합을 지원하지만, 인식의 안정성을 위해 영문과 숫자의 조합을 권장합니다." },
          { q: "바코드 크기를 조절할 수 있나요?", a: "현재는 시인성이 극대화된 표준 크기로 제공되며, 인쇄 시 인쇄 옵션을 통해 크기를 미세하게 조정해 사용하실 수 있습니다." },
          { q: "바코드 번호가 중복되면 어떻게 되나요?", a: "바코드 번호 자체는 고유성을 보장하지 않습니다. 따라서 본인이 관리하는 시스템 내에서 중복되지 않도록 번호를 생성하는 것이 중요합니다." }
        ]
      },
      dummytext: {
        title: "로렘 입숨 & 자리표시자 생성기 (Lorem Ipsum Generator)",
        description: "디자인 레이아웃 구성을 위한 의미 없는 텍스트를 생성하여 시각적 완성도를 미리 점검하십시오.",
        seo: "디자이너 및 웹 개발자를 위한 한국어/영문 더미 텍스트 생성 가이드.",
        longDescription: "웹사이트나 홍보물을 디자인할 때, 실제 콘텐츠가 준비되기 전 '글자가 채워진 느낌'을 확인하는 과정은 매우 중요합니다. Apps24의 로렘 입숨 생성기는 16세기부터 전해 내려온 정통 라틴어 방식은 물론, 현대적인 디자인에 어울리는 자연스러운 한국어 더미 텍스트 생성 기능을 제공합니다. 단순한 '글자 채우기'를 넘어 문단의 구성과 길이, 행간의 리듬감을 실시간으로 확인하여 실제 서비스가 런칭되었을 때의 시각적 밸런스를 완벽하게 예측할 수 있도록 돕습니다.",
        usageContext: "피그마(Figma)나 어도비 XD로 UI를 설계할 때 텍스트 영역의 가독성을 테스트하거나, 워드프레스 테마를 개발하며 게시판 목록의 디자인을 확인할 때 필수적입니다. 전문적인 퍼블리셔들이 글꼴의 무게감(Weight)을 비교하고 행간(Line-height)을 조정할 때도 의미가 담긴 글보다는 의미 없는 더미 텍스트가 시각적 레이아웃에만 집중하게 해주어 효율적입니다. 한글 더미 텍스트의 경우 '다람쥐 쳇바퀴' 같은 유명한 예문부터 창의적인 문단까지 다양하게 활용할 수 있습니다.",
        howToUse: "1. 사용하고자 하는 언어(영어, 한국어 등)를 선택합니다.\n2. 필요한 텍스트의 양(문단 수 또는 단어 수)을 지정합니다.\n3. '생성하기' 버튼을 누릅니다.\n4. 결과를 복사하십시오.",
        faq: [
          { q: "왜 의미 없는 텍스트를 사용하나요?", a: "디자인 검토 시 실제 글의 내용에 시선을 뺏기지 않고, 순수하게 서체(Typo)와 레이아웃의 구도에만 집중하기 위해서입니다." },
          { q: "라틴어 'Lorem Ipsum'의 뜻은 무엇인가요?", a: "키케로의 철학서에서 가져온 단어들을 무작위로 섞은 것으로, 그 자체로는 특별한 의미가 없는 고유한 관습입니다." },
          { q: "한국어 더미 텍스트도 지원하나요?", a: "네. 한국어 고유의 음절 특징을 살린 더미 텍스트 기능을 제공하여 국내 웹사이트 디자인 시 더욱 실감 나는 시뮬레이션이 가능합니다." },
          { q: "글자 수 기반으로 생성할 수 있나요?", a: "네. 문단(Paragraph) 단위뿐만 아니라 특정 공간을 채우기 위한 글자 수 단위 생성 옵션도 제공합니다." },
          { q: "생성된 텍스트를 그대로 출판해도 되나요?", a: "자리표시자(Placeholder) 용도로 만들어진 텍스트이므로, 최종 결과물에서는 반드시 실제 의미가 담긴 콘텐츠로 교체해야 합니다." }
        ]
      },
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
      brightness: "밝기",
      download: "다운로드",
      generate: "생성",
      inputPlaceholder: "여기에 내용을 입력하세요...",
      units: {
        length: "길이",
        weight: "무게",
        area: "넓이",
        volume: "부피",
        temperature: "온도",
        speed: "속도",
        data: "데이터"
      }
    }
  },,
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
      passwordgenerator: {
        title: "Password Generator",
        description: "Create strong random passwords instantly in your browser.",
        seo: "Generate strong random passwords instantly in your browser. This free password generator helps users create secure passwords with customizable length and character options for safer online accounts.",
        longDescription: "Password Generator is a simple online tool that helps users create strong and random passwords for personal, work, and business accounts. It is designed for people who want a faster and safer way to generate passwords instead of reusing weak or predictable combinations. This tool is useful for creating passwords for email accounts, websites, apps, online stores, social media platforms, and other services that require secure login credentials.",
        usageContext: "Use this tool when creating a new account, replacing an old password, or improving the security of accounts that currently use short or repeated passwords. It is also helpful for users who manage multiple accounts and want stronger password options for each service.",
        howToUse: "1. Choose the password length.\n2. Select the character types you want to include, such as uppercase letters, lowercase letters, numbers, and symbols.\n3. Click the Generate Password button to create a new password.\n4. Copy the generated password and save it in a secure place, such as a trusted password manager.",
        faq: [
          { q: "Why should I use a password generator?", a: "A password generator helps create stronger and less predictable passwords than passwords made manually. This reduces the risk of weak or repeated credentials." },
          { q: "What makes a password stronger?", a: "In general, longer passwords with a mix of letters, numbers, and symbols are harder to guess than short or simple passwords." },
          { q: "Can I use the same password for multiple websites?", a: "It is safer to use a different password for each account. Reusing the same password across services can increase security risks if one account is compromised." },
          { q: "Where should I store generated passwords?", a: "The safest option is usually a trusted password manager. You may also store them in another secure and private system that you control." }
        ]
      },
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
        description: "Convert plain text to Base64 or decode Base64 strings instantly.",
        seo: "Fast and reliable Base64 encoder and decoder. Convert plain text to Base64 format or decode Base64 strings instantly with a lightweight browser-based tool.",
        longDescription: "Base64 Encoder & Decoder is a browser-based utility that converts plain text into Base64 format and decodes Base64 strings back into readable text. It is useful for development, testing, data handling, and simple encoding tasks that require a text-based representation of content. This tool is especially helpful when working with APIs, encoded strings, embedded content, or technical workflows where Base64 values appear frequently.",
        usageContext: "Use this tool when you need to encode text for transfer through text-based systems, inspect Base64 values, decode encoded content, or quickly check how plain text changes when converted into Base64 format.",
        howToUse: "1. Enter or paste your text into the input area.\n2. Click Encode to convert plain text to Base64, or click Decode to convert Base64 text back to readable content.\n3. Review the result in the output area.\n4. Click Copy if you want to use the result elsewhere.",
        faq: [
          { q: "Is Base64 a form of encryption?", a: "No. Base64 is an encoding method used for data representation, not a security or encryption system." },
          { q: "When is Base64 commonly used?", a: "It is often used in APIs, email content, HTML or CSS embedding, data transport, and technical documentation where binary or structured content needs to be expressed as text." },
          { q: "Can this tool decode any Base64 string?", a: "It can decode valid Base64 text. If the input is incomplete or invalid, the result may fail or return unreadable output." },
          { q: "Is this tool only for developers?", a: "No. It can also be useful for students, analysts, marketers, and other users who need to inspect or transform encoded text." }
        ]
      },
      colorconverter: {
        title: "Color Code Converter",
        description: "Convert HEX, RGB, and HSL color values instantly.",
        seo: "Convert HEX, RGB, and HSL color values instantly with a simple browser-based color code converter. This tool is useful for web design, UI systems, front-end development, and digital branding workflows.",
        longDescription: "Color Code Converter is an online tool that helps users convert color values between HEX, RGB, and HSL formats. It is useful for web design, UI work, front-end development, branding, and any project where color values need to stay consistent across tools and platforms. By entering one color format or selecting a color visually, users can instantly see the matching values in other common formats.",
        usageContext: "Use this tool when you need to convert a color from one format to another, check matching values for design systems, copy color codes into CSS or design tools, or compare colors across different digital workflows.",
        howToUse: "1. Enter a HEX value or use the color picker to choose a color.\n2. View the converted values for HEX, RGB, and HSL instantly.\n3. Click Copy next to any value you want to use in your project.\n4. Click Reset if you want to start with a new color.",
        faq: [
          { q: "What is the difference between HEX, RGB, and HSL?", a: "HEX is commonly used in web design, RGB is based on red, green, and blue light values, and HSL represents hue, saturation, and lightness for more intuitive color adjustment." },
          { q: "Who is this tool useful for?", a: "It is useful for designers, developers, marketers, students, and anyone working with digital colors in websites, apps, presentations, or brand materials." },
          { q: "Can I use these values in CSS?", a: "Yes. HEX, RGB, and HSL are all commonly used in CSS and other web design workflows." },
          { q: "Does this tool support quick color checking?", a: "Yes. You can select a color visually and immediately review the converted values without leaving the page." }
        ]
      },
      unitconverter: {
        title: "Unit Converter",
        description: "Convert units for length, weight, area, volume, temperature, and more in real-time.",
        seo: "Free online unit converter for metric and imperial systems. Convert inches to cm, kg to lbs, celsius to fahrenheit, and more instantly.",
        longDescription: "Our Unit Converter is a high-precision tool designed to help you quickly switch between different systems of measurement across the globe. Whether you are dealing with Metric or Imperial units, this tool provides accurate results for length, mass, area, volume, temperature, speed, and digital storage. From common everyday conversions like miles to kilometers, to specialized needs like US vs UK Gallons or Korean 'Pyung', we've got you covered with scientific accuracy.",
        usageContext: "Did you know that a US Gallon and a UK Gallon are different sizes? Our tool distinguishes between these and other regional units (like Fluid Ounces) to ensure you have the correct data for travel, international shopping, or engineering projects. It is essential for anyone who needs fast and reliable conversions without searching for manual formulas.",
        howToUse: "1. Select a category from the top tabs (e.g., Length, Weight).\n2. Enter the value you want to convert in the 'From' input box.\n3. Choose your current unit and the unit you want to convert to from the dropdown menus.\n4. View the result instantly in the 'To' box. Use the swap button (â) to reverse the conversion direction.",
        faq: [
          { q: "How accurate are the conversions?", a: "We use standard scientific conversion factors. Calculations are performed with high precision and results are displayed up to 10 decimal places for clarity." },
          { q: "Does it support both metric and imperial systems?", a: "Yes. You can convert between common units like meters and feet, kilograms and pounds, or liters and gallons." },
          { q: "Why is temperature conversion different?", a: "Unlike most units that use simple ratios, temperature scales (like Celsius to Fahrenheit) include offsets. Our tool correctly applies these formulas for exact results." },
          { q: "Can I use it on my mobile phone?", a: "Yes. The unit converter is fully responsive and works perfectly on mobile browsers for quick on-the-go measurements." }
        ]
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
      homeSubtitle: "Apps24 is a multilingual online tools website built for fast, simple, practical utilities without unnecessary steps.",
      homeIntro1: "Apps24 is a multilingual online tools website built for people who want fast, simple, and practical utilities without unnecessary steps. Instead of downloading software or creating an account for small tasks, users can open a page, use a tool immediately, and get the result in just a few clicks.",
      homeIntro2: "Our goal is to make everyday digital tasks easier for a wide range of users. Whether you are a student counting words, a marketer preparing links or content, a developer checking JSON or Base64 data, a designer working with colors, or a business owner creating QR codes and barcodes, Apps24 provides lightweight tools that are quick to access and easy to understand.",
      homeAboutTitle: "About Apps24",
      homeWhatYouCanDoTitle: "What You Can Do on Apps24",
      homeWhatYouCanDoBody: "Apps24 brings together a growing collection of useful browser-based tools for text, images, formatting, visual utilities, and technical workflows. You can compress images, convert text case, validate JSON, generate passwords, compare text differences, encode and decode Base64, create QR codes, generate barcodes, and more. These tools are designed for short, focused tasks, so you can solve one problem at a time with a clean layout and a simple workflow.",
      homeWhyUsersChooseTitle: "Why Users Choose Apps24",
      homeWhyUsersChoosePoints: [
        "simple interfaces that are easy to use",
        "fast browser-based tools for quick tasks",
        "multilingual access for global users",
        "practical utilities for real-world needs",
      ],
      homeOngoingFocusTitle: "Built for Everyday Use",
      homeOngoingFocusBody: "Apps24 is designed for a wide range of digital tasks that come up in daily work, study, and online activity. Some users need technical tools for structured data or encoding. Others need content tools for writing, formatting, or publishing. Some need practical generators for QR codes, barcodes, and passwords. By combining these utilities in one place, Apps24 helps users save time and avoid unnecessary software. Most tools work directly in the browser on desktop and mobile, and the site continues to grow with new tools and better content.",
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
      whatIs: "What is {0}?",
      whenToUse: "When to use this tool?",
      howToUseTitle: "How to use {0}",
      faqTitle: "Frequently Asked Questions",
      howItWorks: "How it works",
      unitLength: "Length",
      unitWeight: "Weight",
      unitArea: "Area",
      unitVolume: "Volume",
      unitTemperature: "Temperature",
      unitSpeed: "Speed",
      unitDigital: "Digital",
      from: "From",
      to: "To",
      unitAccuracyNote: "* High precision conversion using standard scientific constants. Result limited to 10 decimal points for readability.",
    },
  },
  ko: {
    tools: {
      imagecompressor: {
        title: "ì´ë¯¸ì§ ìì¶ê¸° & WebP ë³íê¸°",
        description: "ì´ë¯¸ì§ íì¼ í¬ê¸°ë¥¼ ìµì ííê³  ì°¨ì¸ë íìì¸ WebPë¡ ë³ííì¬ ì¤ìë² ì±ë¥ì í¥ììí¤ì­ìì¤.",
        seo: "ì´ë¯¸ì§ ìì¶ ë° WebP ë³íì íµí ì¹ ì±ë¥ ìµì í ê°ì´ë.",
        longDescription: "Apps24ì ì´ë¯¸ì§ ìì¶ê¸°ë ìê°ì  íì§ ìì¤ì ìµìííë©´ì íì¼ í¬ê¸°ë¥¼ íê¸°ì ì¼ë¡ ì¤ì¬ì£¼ë ì ë¬¸ì ì¸ ìµì í ëêµ¬ìëë¤. í¹í êµ¬ê¸ì´ ê¶ì¥íë ì°¨ì¸ë ì´ë¯¸ì§ íìì¸ WebP ë³í ê¸°ë¥ì ì ê³µíì¬, ê¸°ì¡´ JPGë PNG ëë¹ ìµë 30~50% ë ìì ì©ëì¼ë¡ ëì¼í íì§ì ì ì§í  ì ììµëë¤. ì´ë ì¹ì¬ì´í¸ì ë¡ë© ìëë¥¼ ëì¬ êµ¬ê¸ ê²ì ìì§ ìµì í(SEO) ì ìë¥¼ ëì´ê³ , ì¬ì©ì ì´íë¥ ì ì¤ì´ë ë° ê²°ì ì ì¸ ì­í ì í©ëë¤. ë³ëì ìíí¸ì¨ì´ ì¤ì¹ ìì´ ë¸ë¼ì°ì  ë´ìì ì§ì  ì²ë¦¬ëë¯ë¡ ê°ì¸ì ë³´ ë³´í¸ ì¸¡ë©´ììë ìì í©ëë¤.",
        usageContext: "ëì©ë ì´ë¯¸ì§ë ëª¨ë°ì¼ ì¬ì©ìì ë°ì´í° ì¬ì©ëì ëë¦¬ê³  íì´ì§ ë¡ë© ìëë¥¼ ì íìíµëë¤. ë¸ë¡ê·¸ í¬ì¤í, ì¼íëª° ìì¸ íì´ì§, í¹ì ê³ íì§ í¬í¸í´ë¦¬ì¤ ì¬ì´í¸ë¥¼ ì´ìíì ë¤ë©´ WebP ë³íê³¼ ìì¶ì íìì ì¸ ê³¼ì ìëë¤. ëí ì´ë©ì¼ ì²¨ë¶ íì¼ ì©ë ì íì í´ê²°íê±°ë, í´ë¼ì°ë ì ì¥ ê³µê°ì ì ì½íê³  ì¶ì ëë ë§¤ì° ì ì©í©ëë¤. ì¹ íì¤ì ë§ì¶ ìµì íë ì´ë¯¸ì§ë ìë² ëì­í­ ë¹ì© ì ê°ìë ê¸°ì¬í©ëë¤.",
        howToUse: "1. 'ìë¡ë' ë²í¼ì í´ë¦­íê±°ë ì´ë¯¸ì§ íì¼ì ëëê·¸íì¬ ìë ¥ ìì­ì ëìµëë¤.\n2. ìíë ìì¶ ìì¤ê³¼ WebP ë³í ì¬ë¶ë¥¼ ì íí©ëë¤.\n3. ìì¶ì´ ìë£ëë©´ 'ìë³¸ ëë¹ ì ê°ë¥ 'ì íì¸íê³  ìµì íë íì¼ì ë¤ì´ë¡ëí©ëë¤.\n4. ì¬ë¬ ì¥ì ì´ë¯¸ì§ë¥¼ ëìì ì²ë¦¬íì¬ ìì ìê°ì ë¨ì¶í  ì ììµëë¤.",
        faq: [
          { q: "WebP íìì ì¬ì©í´ì¼ íë ì´ì ë ë¬´ìì¸ê°ì?", a: "WebPë ëì¼ íì§ ëë¹ ì©ëì´ í¨ì¬ ìì íì´ì§ ë¡ë©ì ê°ìííë©°, í¬ëªë(Alpha)ì ì ëë©ì´ì í¨ê³¼ë¥¼ ëª¨ë ì§ìíë íëì ì¸ íììëë¤. êµ¬ê¸ ê²ì ë­í¹ìë ê¸ì ì ì¸ ìí¥ì ì¤ëë¤." },
          { q: "ìì¶ ê³¼ì ìì ì  ì¬ì§ì´ ìë²ì ì ì¥ëëì?", a: "ìëì. Apps24ì ëª¨ë  ìµì í ììì ì¬ì©ìì ë¸ë¼ì°ì  ë¡ì»¬ íê²½ìì ìíë©ëë¤. ì¸ë¶ ìë²ë¡ ì´ë¯¸ì§ê° ì ì¡ëì§ ìì¼ë¯ë¡ ë³´ì ê±±ì  ìì´ ì¬ì©íì¤ ì ììµëë¤." },
          { q: "ìì¤ ìì¶(Lossy)ê³¼ ë¬´ìì¤ ìì¶(Lossless)ì ì°¨ì´ë ë¬´ìì¸ê°ì?", a: "ìì¤ ìì¶ì ëì ëì§ ìë ë¯¸ì¸í ë°ì´í°ë¥¼ ì ê±°íì¬ ì©ëì ëí­ ì¤ì´ë ë°©ìì´ê³ , ë¬´ìì¤ì ë°ì´í°ë¥¼ ê·¸ëë¡ ì ì§íë©° ì©ëë§ ë¯¸ì¸íê² ì¡°ì í©ëë¤. ì¹ì©ì¼ë¡ë ë³´íµ ìì¤ ìì¶ì´ ë í¨ì¨ì ìëë¤." },
          { q: "ì§ìëë íì¼ íìì ì´ë»ê² ëëì?", a: "ê°ì¥ ëë¦¬ ì°ì´ë JPG, JPEG, PNG íìì ì§ìíë©° ê²°ê³¼ë¬¼ì íìì ë°ë¼ WebPë¡ ë³íëì´ ì ê³µë©ëë¤." },
          { q: "ì´ë¯¸ì§ í¬ê¸°(Resolution)ë ì¡°ì ëëì?", a: "íì¬ ë²ì ì íì¼ í¬ê¸°(Weight) ìì¶ì ì§ì¤íê³  ìì¼ë©°, í´ìëë ìë³¸ì ì ì§íì¬ í½ì ê¹¨ì§ì ë°©ì§í©ëë¤." }
        ]
      },
      caseconverter: {
        title: "ëìë¬¸ì ë³íê¸° (Case Converter)",
        description: "íì¤í¸ì ììì ëë¬¸ì, ìë¬¸ì, ì ëª©í ë±ì¼ë¡ í´ë¦­ í ë²ì íì¤ííì­ìì¤.",
        seo: "ì ë¬¸ì ì¸ ê°ëì±ì ìí ëìë¬¸ì ë³í ë° íì¤í¸ íì¤í ëêµ¬.",
        longDescription: "ì½íì¸  ì ìì ìì´ ì¼ê´ë ëìë¬¸ì ì¬ì©ì ê°ëì±ê³¼ ì ë¬¸ì±ì ê²°ì ì§ë íµì¬ ìììëë¤. Apps24ì ëìë¬¸ì ë³íê¸°ë ë¨ìí ë¬¸ìë¥¼ ë°ê¾¸ë ê²ì ëì´, ìë¬¸ ê¸°ì¬ ì ëª© ìì±ì ì°ì´ë 'Title Case'ì ë¬¸ì¥ ììë§ ëë¬¸ìë¡ ë°ê¾¸ë 'Sentence Case' ë± ë¤ìí ìµìì ì ê³µí©ëë¤. í¹í íë¡ê·¸ëë° ì ì ì©í camelCase, snake_case ë³í ê¸°ë¥ê³¼ ëëì íì¤í¸ìì ë¶íìí ììì ì ê±°íë ê¸°ë¥ì ë§ì¼í°, ìê³  ìëí°, ê·¸ë¦¬ê³  ê°ë°ì ëª¨ëìê² ìì°ì± íì ì ê°ì ¸ë¤ì¤ëë¤.",
        usageContext: "í´ì¸ ë§ì¼í ë¬¸êµ¬ë¥¼ ìë¬¸ì¼ë¡ ìì±í  ë í¤ëë¼ì¸ì ëìë¬¸ì ê·ì¹ì ë§ì¶ë ê²ì ë§¤ì° ê¹ë¤ë¡ì´ ìììëë¤. ëí ìì¤í ë¡ê·¸ìì ëë¬¸ì íì¤í¸ë¥¼ ìë¬¸ìë¡ ë³ííê±°ë, ë³´ê³ ì ìì± ì  íì¤í¸ì íìì íµì¼í  ë ì ì©í©ëë¤. ë¶íìíê² ëë¬¸ìë¡ë§ ìì±ë ì¤í¸ì± ëëì íì¤í¸ë¥¼ ê°ëì± ì¢ì ë¬¸ì¥ì¼ë¡ ììê°ì êµì í  ì ìì´ ë¸ëë ì ë¢°ëë¥¼ ëì´ë ë° ëìì´ ë©ëë¤.",
        howToUse: "1. ë³ííê³ ì íë íì¤í¸ë¥¼ ìë ¥ì°½ì ë¶ì¬ë£ìµëë¤.\n2. ìë¨ ë²í¼ ì¤ ìíë ì¼ì´ì¤(UPPERCASE, lowercase, Title Case ë±)ë¥¼ í´ë¦­í©ëë¤.\n3. ë³íë ê²°ê³¼ë¥¼ íì¸íê³  'ë³µì¬' ë²í¼ì ëë¬ ìíë ê³³ì ì¬ì©í©ëë¤.\n4. ìì ì ê±° ê¸°ë¥ì íµí´ íì¤í¸ ë³¸ì°ì ë°ì´í°ë§ ì¶ì¶í  ìë ììµëë¤.",
        faq: [
          { q: "Title Case ê·ì¹ì ì ííê°ì?", a: "ë¤. ì£¼ë¡ ìë¬¸ë²ìì ê¶ì¥ëë 'ì ì¹ì¬ë ì ìì¬ë¥¼ ì ì¸í ì£¼ì ë¨ì´ì ì²« ê¸ìë¥¼ ëë¬¸ìë¡ íì'íë ê·ì¹ì ì¤ìíì¬ ë³íë©ëë¤." },
          { q: "íêµ­ì´ íì¤í¸ìë ì ì©ëëì?", a: "íêµ­ì´ë ëìë¬¸ì êµ¬ë¶ì´ ìì¼ë¯ë¡ ë³í ê²°ê³¼ì ìí¥ì ì£¼ì§ ìì§ë§, ìë¬¸ì´ í¼ì©ë íì¤í¸ì ê²½ì° ìë¬¸ ë¶ë¶ë§ ê·ì¹ì ë§ê² ë³íë©ëë¤." },
          { q: "íë¡ê·¸ëë°ì© ì¼ì´ì¤ë ì§ìíëì?", a: "ë¤. ë³ìëª ìì± ì ìì£¼ ì°ì´ë snake_case(ì¸ëë° ì°ê²°)ë camelCase(ëí íê¸°ë²) ìµìì ì ê³µíì¬ ê°ë° í¨ì¨ì ëì¬ëë¦½ëë¤." },
          { q: "ë§¤ì° ê¸´ ë¼ë¬¸ê¸ íì¤í¸ë ì²ë¦¬ê° ê°ë¥íê°ì?", a: "ë¸ë¼ì°ì  ë¦¬ìì¤ê° íì©íë í ìë§ ì ì´ìì íì¤í¸ë ììê°ì ì²ë¦¬íëë¡ ìµì íëì´ ììµëë¤." },
          { q: "ë³íë íì¤í¸ì ì´ë ¥ì´ ë¨ëì?", a: "ë³´ìì ìí´ ë³íë ê²°ê³¼ë ë¸ë¼ì°ì ë¥¼ ë«ì¼ë©´ íë°ëë©°, ë³ëë¡ ìë²ì ë¡ê·¸ë¥¼ ë¨ê¸°ì§ ììµëë¤." }
        ]
      },
      jsonformatter: {
        title: "JSON í¬ë§·í° & ê²ì¦ê¸° (JSON Formatter & Validator)",
        description: "ë³µì¡í JSON ë°ì´í°ë¥¼ ì ë¦¬íê³  ì í¨ì±ì ê²ì¬íì¬ ë°ì´í° ê°ëì±ê³¼ ì íì±ì íë³´íì­ìì¤.",
        seo: "í¨ì¨ì ì¸ ë°ì´í° ëë²ê¹ì ìí JSON í¬ë§·í ë° êµ¬ë¬¸ ê²ì¬ ëêµ¬.",
        longDescription: "íë ìíí¸ì¨ì´ ê°ë°ê³¼ ë°ì´í° íµì ìì ê°ì¥ ëë¦¬ ì°ì´ë íì¤ì¸ JSON(JavaScript Object Notation). íì§ë§ í ì¤ë¡ ê¸¸ê² ëì´ì§ ìì ë°ì´í°ë ì¬ëì´ ì½ê³  ë¶ìíê¸°ì ë§¤ì° ì´ë µìµëë¤. Apps24ì JSON í¬ë§·í°ë ì´ë¬í ë°ì´í°ë¥¼ ììê°ì ê³ì¸µ êµ¬ì¡°ë¡ ìê°ííì¬ ë°ì´í° ê°ì ê´ê³ë¥¼ íëì íìí  ì ìëë¡ ëìµëë¤. ëí êµ¬ë¬¸ ì¤ë¥(Syntax Error)ë¥¼ ì¤ìê°ì¼ë¡ ê°ì§íì¬ ëë½ë ì½¤ë§, ìëª»ë ë°ì´í ë± ì¬ìíì§ë§ ì¹ëªì ì¸ ì¤ìë¥¼ ì°¾ìë´ë ê°ë ¥í ê²ì¦ ê¸°ë¥ì ì ê³µí©ëë¤.",
        usageContext: "API ê°ë° ì ìëµ ë°ì´í°ë¥¼ íì¸íê±°ë, ì¤ì  íì¼(config.json)ì ì¤ë¥ë¥¼ ìì í  ë íìì ìëë¤. ë°ì´í° ë¶ìê°ë¤ì´ ë³µì¡í ì¤ì²© êµ¬ì¡°ì ë°ì´í°ë¥¼ íìí´ì¼ í  ëë, íêµ ê³¼ì ìì JSON íìì ê³µë¶íë íìë¤ìê²ë ì ì©í íìµ ëêµ¬ê° ë©ëë¤. ë°ì´í°ì ê°ëì±ì ëì¬ íì ê°ì ìíí ìíµì ëê³  ëë²ê¹ ìê°ì ë¨ì¶ìí¤ë ë¹ì¦ëì¤ ëêµ¬ë¡ íì©í´ ë³´ì¸ì.",
        howToUse: "1. í¬ë§·íì´ë ê²ì¦ì´ íìí JSON ë°ì´í°ë¥¼ ìë ¥ì°½ì ë¶ì¬ë£ìµëë¤.\n2. 'JSON í¬ë§·í' ë²í¼ì í´ë¦­íì¬ ë¤ì¬ì°ê¸°ê° ì ì©ë ê¹ëí êµ¬ì¡°ë¡ ë³íí©ëë¤.\n3. ë°ì´í°ì ì¤ë¥ê° ìì¬ëë¤ë©´ 'ê²ì¦' ë²í¼ì ëë¬ ì íí ì¤ë¥ ìì¹ì ìì¸ì íì¸í©ëë¤.\n4. ì ëë ë°ì´í°ë¥¼ ë³µì¬íì¬ ì½ëë ë³´ê³ ìì ì¦ì ì ì©íì­ìì¤.",
        faq: [
          { q: "JSONì´ ì í¨íì§ ìë¤(Invalid)ê³  ëìµëë¤. ì´ì ê° ë¬´ìì¸ê°ì?", a: "ê°ì¥ íí ì´ì ë ë§ì§ë§ í­ëª© ë¤ì ë¶íìí ì½¤ë§(Trailing comma), í°ë°ì´í ëì  ììë°ì´í ì¬ì©, í¹ì ëê´í¸[]ì ì¤ê´í¸{}ì ì§ì´ ë§ì§ ìë ê²½ì°ìëë¤." },
          { q: "ìë ¥í ë°ì´í°ê° ìë²ì ì ì¥ëëì?", a: "ì ë ê·¸ë ì§ ììµëë¤. ëª¨ë  ë°ì´í° ì²ë¦¬ë í´ë¼ì´ì¸í¸ ì¬ì´ë(ì¬ì©ì ë¸ë¼ì°ì )ìì ìíëë¯ë¡ ë¯¼ê°í ë°ì´í°ë ìì¬íê³  ì²ë¦¬íì¤ ì ììµëë¤." },
          { q: "ëì©ë JSON íì¼ë ì²ë¦¬ê° ê°ë¥íê°ì?", a: "ë¤. ìµì íë ìì§ì íµí´ ìë©ê°ë°ì´í¸(MB) ë¨ìì íì¤í¸ ë°ì´í°ë ë¸ë¼ì°ì  ë¦¬ìì¤ ë´ìì ë¬´ëíê² ì²ë¦¬í©ëë¤." },
          { q: "XMLì´ë ë¤ë¥¸ íìì¼ë¡ë ë³íëëì?", a: "íì¬ë JSON ê³ ì ì í¬ë§·íê³¼ ê²ì¦ì ì§ì¤íê³  ìì¼ë©°, í¥í ë¤ìí íì ë³í ê¸°ë¥ì ìë°ì´í¸í  ìì ìëë¤." },
          { q: "í¬ë§·íë ëª¨ìì ì»¤ì¤í°ë§ì´ì§ í  ì ìëì?", a: "íì¤ 2ì¹¸ ëë 4ì¹¸ ë¤ì¬ì°ê¸°ë¥¼ ê¸°ë³¸ì¼ë¡ ì ê³µíì¬ ê°ì¥ ë³´í¸ì ì´ê³  ê°ëì±ì´ ì¢ì ííë¥¼ ì ì§í©ëë¤." }
        ]
      },
      passwordgenerator: {
        title: "ë³´ì ë¹ë°ë²í¸ ìì±ê¸° (Password Generator)",
        description: "íëì ì¸ ë³´ì ìêµ¬ ì¬í­ì ì¶©ì¡±íë ë¬´ìì ë¹ë°ë²í¸ë¥¼ ìì±íì¬ ê³ì  ë³´ìì ê°ííì­ìì¤.",
        seo: "í´í¹ ë°©ì§ë¥¼ ìí ê°ë ¥í ë¬´ìì ë¹ë°ë²í¸ ìì± ë° ë³´ì ê°ì´ë.",
        longDescription: "ì ì  ì§ë¥íëë ì¬ì´ë² ê³µê²©ì¼ë¡ë¶í° ë¹ì ì ìì¤í ì ë³´ë¥¼ ì§í¤ë ì²« ë²ì§¸ ë°©ì´ì ì ë°ë¡ 'ìì¸¡ ë¶ê°ë¥í ë¹ë°ë²í¸'ìëë¤. Apps24ì ë¹ë°ë²í¸ ìì±ê¸°ë ë¸ë¼ì°ì ì ê³ ë°ë ëì ìì± ìì§(CSPRNG)ì ì¬ì©íì¬ ì¬ëì´ ì ì¶í  ì ìë ìì í ë¬´ìì ì¡°í©ì ë§ë­ëë¤. ëë¬¸ì, ìë¬¸ì, ì«ì, í¹ìë¬¸ìë¥¼ ì¡°í©íê³  ê¸¸ì´ë¥¼ ì¡°ì íì¬ ê¸ìµ ìë¹ì¤, SNS, ìë¬´ì© ê³ì  ë± ê° íë«í¼ì ë³´ì ìêµ¬ ì¡°ê±´ì ë§ë ìµìì ë¹ë°ë²í¸ë¥¼ ì¦ì ìì±í  ì ììµëë¤.",
        usageContext: "ìë¡ì´ ì¨ë¼ì¸ ìë¹ì¤ì ê°ìí  ëë, ê¸°ì¡´ì ì·¨ì½í ë¹ë°ë²í¸(ìì¼, ì íë²í¸ ë±)ë¥¼ êµì²´í  ë ì¬ì©íì­ìì¤. í¹í ëì¼í ë¹ë°ë²í¸ë¥¼ ì¬ë¬ ê³³ì ì¬ì¬ì©íë ìíí ìµê´ì ë²ë¦¬ê³ , ê° ì¬ì´í¸ë§ë¤ ê³ ì íê³  ê°ë ¥í ë¹ë°ë²í¸ë¥¼ ë¶ì¬íë ê²ì´ ë³´ìì ìììëë¤. ì± ê°ë°ìë¼ë©´ íì¤í¸ ê³ì ì ìì ë¹ë°ë²í¸ë¥¼ ìì±íë ì©ëë¡ë íì©íê¸° ì¢ìµëë¤.",
        howToUse: "1. ìíë ë¹ë°ë²í¸ì ê¸¸ì´ë¥¼ ì¬ë¼ì´ëë ìì¹ ìë ¥ì¼ë¡ ì¤ì í©ëë¤ (ë³´íµ 12ì ì´ì ê¶ì¥).\n2. í¬í¨í  ë¬¸ì êµ¬ì± ìì(ëë¬¸ì, ìë¬¸ì, ì«ì, ê¸°í¸)ë¥¼ ì²´í¬íì¬ ë³´ì ê°ëë¥¼ ì¡°ì í©ëë¤.\n3. 'ìì±' ë²í¼ì ëë¬ ì¡°ê±´ì ë§ë ë¹ë°ë²í¸ë¥¼ ë§ë­ëë¤.\n4. ìì±ë ë¹ë°ë²í¸ë¥¼ ë³µì¬íì¬ ìì í ë¹ë°ë²í¸ ê´ë¦¬ ì±ì´ë ë³ëì ì¤íë¼ì¸ ì ì¥ìì ë³´ê´íì­ìì¤.",
        faq: [
          { q: "ê°ë ¥í ë¹ë°ë²í¸ì ê¸°ì¤ì ë¬´ìì¸ê°ì?", a: "ìµì 12ì ì´ìì´ë©°, ì¸ ì¢ë¥ ì´ìì ë¬¸ì(ìì´ ë/ìë¬¸ì, ì«ì, í¹ìë¬¸ì)ê° í¼í©ë ííì¬ì¼ ë¬¼ë¦¬ì ì¸ ë¬´ìì ëì ê³µê²©(Brute-force)ì¼ë¡ë¶í° ìì í©ëë¤." },
          { q: "ìì±ê¸°ë¥¼ íµí´ ë§ë  ë¹ë°ë²í¸ë ìì íê°ì?", a: "ì¬ì©ìì ê¸°ê¸° ë´ììë§ ìì±ëë©° ìë²ë¡ ì ì¡ëì§ ìì¼ë¯ë¡, ìì± ê³¼ì ììì ì ì¶ ìíì ì í ììµëë¤." },
          { q: "ë¹ë°ë²í¸ë¥¼ ê¸°ìµíê¸° ëë¬´ ì´ë µìµëë¤. ì´ë»ê² í´ì¼ íëì?", a: "ë¬´ìì ë¹ë°ë²í¸ë ê¸°ìµíë ê²ì´ ë¶ê°ë¥ì ê°ê¹ìµëë¤. ë°ë¼ì 'ë¹ë°ë²í¸ ê´ë¦¬ì(Password Manager)' ëêµ¬ë¥¼ í¨ê» ì¬ì©íì¬ ìì íê² ì ì¥íê³  ê´ë¦¬íë ê²ì ê¶ì¥í©ëë¤." },
          { q: "í¹ìí ê¸°í¸ë í¬í¨í  ì ìëì?", a: "ë¤. @, #, $, %, ^ ë± íì¤ í¤ë³´ëìì ì ê³µíë ëª¨ë  í¹ì ê¸°í¸ë¥¼ ìµìì¼ë¡ ì ííì¬ í¬í¨í  ì ììµëë¤." },
          { q: "ìì±ë ë¹ë°ë²í¸ì ë³´ì ì ìë¥¼ ì ì ìëì?", a: "êµ¬ì± ììì ê¸¸ì´ì ë°ë¼ ìëì¼ë¡ 'ë®ì', 'ì¤ê°', 'ìì ' ë±ì ì§ê´ì ì¸ ë³´ì ë±ê¸ì ì¤ìê°ì¼ë¡ ê³ì°í´ ë³´ì¬ì¤ëë¤." }
        ]
      },
      textdiffchecker: {
        title: "íì¤í¸ ë¹êµê¸° (Text Diff Checker)",
        description: "ë íì¤í¸ ê°ì ë¯¸ì¸í ì°¨ì´ë¥¼ ì¤ìê°ì¼ë¡ ë¶ìíì¬ ë³ê²½ ì¬í­ì ìë²½íê² íìíì­ìì¤.",
        seo: "ì íí ë¬¸ì ëì¡° ë° ì½ë ë³ê²½ ì ê²ì ìí íì¤í¸ ë¹êµ ëêµ¬.",
        longDescription: "ìì² ì¤ì íì¤í¸ìì ë°ë ê¸ì íëë¥¼ ì°¾ë ê²ì ëª¨ëì¬ì¥ìì ë°ë ì°¾ê¸°ì ê°ìµëë¤. Apps24ì íì¤í¸ ë¹êµê¸°ë ë ë¬¸ìì ì°¨ì´ì ì ë¼ì¸ë³, ê¸ìë³ë¡ ì ë° ë¶ìíì¬ ì¶ê°ë ë¶ë¶ì ë¹ì, ì­ì ë ë¶ë¶ì ë¹¨ê°ìì¼ë¡ ê°ëì± ëê² íìí´ ì¤ëë¤. ë¨ìí íì¤í¸ ëì¡°ë¥¼ ëì´, íë¡ê·¸ëë° ì½ëì ë³ê²½ ì´ë ¥ì íì¸íê±°ë ê³ì½ìì ë¬¸êµ¬ ìì ì ê²í í  ë ë°ìí  ì ìë ì¸ê°ì ì¤ìë¥¼ ìì²ì ì¼ë¡ ë°©ì§íë ì ë¬¸ì ì¸ ë¹êµ ìì§ì íì¬íê³  ììµëë¤.",
        usageContext: "ì½ë ìì  ì íì ë¡ì§ì ë¹êµíë ê°ë°ì, ë²ì­ ìê³ ì ìì ë³¸ì ëì¡°íë ìëí°, í¹ì ì½ê´ì´ë ê³ì½ìì êµ¬ë¬¸ ë³íë¥¼ ê°ìí´ì¼ íë ë²ë¬´ ë´ë¹ììê² íìì ì¸ ëêµ¬ìëë¤. ë³µì¬íì¬ ë¶ì¬ë£ê¸°ë§ íë©´ ë íì¤í¸ì ì¼ì¹ ì¬ë¶ë¥¼ ì¦ì % ë¨ìë¡ íì¸í  ì ìì¼ë©°, ë¶íìí ê³µë°±ì´ë ì¤ë°ê¿ ì°¨ì´ê¹ì§ ì¬ì¸íê² ì¡ìë´ì´ ìë²½í ë¬¸ì ê´ë¦¬ë¥¼ ëìµëë¤.",
        howToUse: "1. 'ìë³¸ íì¤í¸' ìì­ì ê¸°ì¤ì´ ëë íì¤í¸ë¥¼ ë¶ì¬ë£ìµëë¤.\n2. 'ë¹êµ íì¤í¸' ìì­ì ìì ë ë²ì ì íì¤í¸ë¥¼ ìë ¥í©ëë¤.\n3. 'ë¹êµíê¸°' ë²í¼ì ëë¥´ë©´ ì¤ìê°ì¼ë¡ ì°¨ì´ì ì´ ê°ì¡°ë ë¶ì ê²°ê³¼ê° íë¨ì íìë©ëë¤.\n4. ìµì ì¤ì ì íµí´ ëìë¬¸ì êµ¬ë¶ ì¬ë¶ë ê³µë°± ë¬´ì ì¬ë¶ë¥¼ ì§ì  ì¡°ì íì¬ ì ë°ëë¥¼ ëì¼ ì ììµëë¤.",
        faq: [
          { q: "ë¹êµ ê°ë¥í íì¤í¸ ê¸¸ì´ì ì íì´ ìëì?", a: "ì¼ë°ì ì¸ ë¬¸ì ìì¤ì íì¤í¸ë ë¬¼ë¡ , ìë§ ì¤ì ìì¤ ì½ëë ë¸ë¼ì°ì  ë¦¬ìì¤ ë´ìì ë¬´ëíê² ì²ë¦¬ ê°ë¥í©ëë¤." },
          { q: "ê³µë°±ì´ë ì¤ë°ê¿ ì°¨ì´ë ê°ì§íëì?", a: "ë¤. ì¤ì ì ë°ë¼ ê³µë°± íë, ì¤ë°ê¿ í ì¤ì ì°¨ì´ê¹ì§ ëª¨ë ìê°ì ì¼ë¡ íì¸íì¤ ì ììµëë¤." },
          { q: "ë¹êµ ê²°ê³¼ ë³´ê³ ìë¥¼ ì ì¥í  ì ìëì?", a: "íì¬ë íë©´ìì ì¦ì íì¸íë ë°©ìì´ë©°, íìì íë©´ì ìº¡ì²íê±°ë íì¤í¸ë¥¼ ë³µì¬íì¬ ê¸°ë¡ì¼ë¡ ë¨ê¸¸ ì ììµëë¤." },
          { q: "íë¡ê·¸ëë° ì¸ì´ ë¬¸ë²ë ì§ìíëì?", a: "ë³¸ ëêµ¬ë íì¤í¸ ê¸°ë°ì ë²ì© ë¹êµê¸°ì´ë¯ë¡ ëª¨ë  íë¡ê·¸ëë° ì¸ì´ì íì¤í¸ ì°¨ì´ë¥¼ êµ¬ë¶íë ë° ì í©í©ëë¤." },
          { q: "ìë¡ ë¤ë¥¸ ì¸ì´ì íì¤í¸ë ë¹êµëëì?", a: "íì¤í¸ ë¬¸ì ë¨ìë¡ ëì¡°íë¯ë¡ ì¸ì´ì ìê´ìì´ ê¸ì íëíëì ì°¨ì´ë¥¼ ì íí ì°¾ìëëë¤." }
        ]
      },
      base64encoder: {
        title: "Base64 ì¸ì½ë & ëì½ë (Base64 Encoder & Decoder)",
        description: "ë°ì´í°ì íì¤í¸ ë³í ë° ì ì¡ì ìí Base64 ì¸ì½ë©/ëì½ë© ê¸°ë¥ì ë¹ ë¥´ê³  ìì íê² ì´ì©íì­ìì¤.",
        seo: "API íµì  ë° ë°ì´í° ì ì¡ì ìí íì¤ Base64 ë³í ëêµ¬ ê°ì´ë.",
        longDescription: "Base64ë 8ë¹í¸ ì´ì§ ë°ì´í°ë¥¼ 64ì§ë²ì íì¤í¸ë¡ ë³ííë ê°ì¥ ëì¤ì ì¸ ì¸ì½ë© ë°©ììëë¤. ì£¼ë¡ ë¤í¸ìí¬ë¥¼ íµí´ ë°ì´ëë¦¬ ë°ì´í°(ì´ë¯¸ì§, ì¤í íì¼ ë±)ë¥¼ ì ì¡íê±°ë, URLì í¬í¨í  ì ìë ë¬¸ìë¥¼ ìì íê² ì ë¬í´ì¼ í  ë ì¬ì©ë©ëë¤. Apps24ì Base64 ëêµ¬ë íì¤ RFC ê·ê²©ì ì¤ìíì¬ ì´ë¤ ìì¤íê³¼ë í¸íëë ì ë°í ë³í ê²°ê³¼ë¥¼ ì ê³µí©ëë¤. ë°ì´í°ì ë¬´ê²°ì±ì ì ì§íë©´ì íì¤í¸ ê¸°ë° ìì¤íìì ë°ì´ëë¦¬ ë°ì´í°ë¥¼ ìì ë¡­ê² ë¤ë£° ì ìëë¡ ëìµëë¤.",
        usageContext: "ì¹ ê°ë° ì ì´ë¯¸ì§ë¥¼ HTML/CSSì ì§ì  ë´ì¥(Data URI)íê±°ë, API ì¸ì¦ì ìí Authorization í¤ë ê°ì ìì±í  ë íìì ìëë¤. ëí ìí¸íë ë©ìì§ë¥¼ ì ì¡íê¸° ì  íì¤í¸ ííë¡ ë³ííê±°ë, í¹ì ë¬¸ìê° í¬í¨ë ë°ì´í°ë¥¼ ì ì¡ ì¤ë¥ ìì´ ì ë¬íê³  ì¶ì ë ì ì©í©ëë¤. ê°ë°ìë¤ì ëë²ê¹ ìë¬´ë¿ë§ ìëë¼ ê¸°ì ì ì¸ ë°ì´í° êµ¬ì¡°ë¥¼ ì´í´íë ¤ë íìë¤ìê²ë íë¥­í íìµ ëêµ¬ê° ë©ëë¤.",
        howToUse: "1. ì¸ì½ë©(ë³í)í  ì¼ë° íì¤í¸ë ëì½ë©(ë³µì)í  Base64 ë¬¸ìì´ì ìë ¥ì°½ì ë£ìµëë¤.\n2. ìííê³ ì íë ììì ë§ì¶° 'ì¸ì½ë©' ëë 'ëì½ë©' ë²í¼ì í´ë¦­í©ëë¤.\n3. íë¨ ê²°ê³¼ ìì­ì ì¦ì ë³íë ê°ì´ ëíë©ëë¤.\n4. 'ë³µì¬' ë²í¼ì ì¬ì©íì¬ ê²°ê³¼ê°ì ê°ë° íê²½ì´ë íµì  ëêµ¬ì ì ì©íì­ìì¤.",
        faq: [
          { q: "Base64 ì¸ì½ë©ì íë©´ ë°ì´í° í¬ê¸°ê° ëì´ëëì?", a: "ë¤. ì´ì§ ë°ì´í°ë¥¼ íì¤í¸ë¡ íííë ê³¼ì ìì ìë³¸ ëë¹ ì½ 33% ì ë ì©ëì´ ì¦ê°íê² ë©ëë¤." },
          { q: "Base64ë ìí¸í(Encryption)ì¸ê°ì?", a: "ìëì. Base64ë ë¨ìí ì¸ì½ë© ë°©ìì´ë¯ë¡ ëêµ¬ë ëì½ë©ì´ ê°ë¥í©ëë¤. ê¸°ë° ì ì§ê° íìí ë°ì´í°ë ë°ëì ë³ëì ìí¸í ê³¼ì ì ê±°ì³ì¼ í©ëë¤." },
          { q: "ì´ë¯¸ì§ íì¼ë Base64ë¡ ë³íí  ì ìëì?", a: "íì¬ë íì¤í¸ ê¸°ë°ì ì¸ì½ë©/ëì½ë©ì ì§ìíë©°, ì´ë¯¸ì§ ì¸ì½ë© ê¸°ë¥ì í¥í ìë°ì´í¸ë  ìì ìëë¤." },
          { q: "URLì© Base64ì ì¼ë° Base64ì ì°¨ì´ë ë¬´ìì¸ê°ì?", a: "URLììë +, / ë¬¸ìê° í¹ì ê¸°ë¥ì íë¯ë¡ ì´ë¥¼ -, _ë¡ ëì²´íë ë°©ìì´ ì°ìëë¤. ë³¸ ëêµ¬ë ê°ì¥ íì¤ì ì¸ Base64 íìì ë°ë¦ëë¤." },
          { q: "ì¸ì½ë© ê²°ê³¼ ë¤ì ìë == ê¸°í¸ë ë¬´ìì¸ê°ì?", a: "í¨ë©(Padding)ì´ë¼ê³  íë©°, ë°ì´í°ì ê¸¸ì´ë¥¼ 3ë°ì´í¸ ë¨ìë¡ ë§ì¶ê¸° ìí´ ì¬ì©ëë íì¤ íììëë¤." }
        ]
      },
      colorconverter: {
        title: "색상 코드 변환기 (Color Code Converter)",
        description: "HEX, RGB, HSL 등 디자인과 개발에 필요한 모든 색상 체계를 자유롭게 변환하고 팔레트를 구축하십시오.",
        seo: "웹 표준 준수 및 디자인 생산성 향상을 위한 전문 색상 코드 변환 도구.",
        longDescription: "성공적인 디자인의 핵심은 정확한 색상 전달에 있습니다. 디자이너가 사용하는 HEX 코드와 개발자가 CSS에서 사용하는 RGB/HSL 값 사이의 간극을 Apps24가 완벽하게 메워드립니다. 본 도구는 색상 추출뿐만 아니라, 선택한 색상의 채도와 밝기를 직관적으로 조절할 수 있는 인터페이스를 제공하여 브랜드 가이드라인에 맞는 정확한 색상 라이브러리를 구축할 수 있도록 돕습니다. 웹 접근성을 고려한 대비 차이 확인이나 어두운 모드 전용 색상 선택 시에도 강력한 조력자가 됩니다.",
        usageContext: "포토샵이나 피그마에서 추출한 색상을 웹 코드로 변환하거나, 로고 제작 시 브랜드 컬러의 다양한 형식을 정의할 때 활용하십시오. 특히 HSL 형식을 사용하면 색상의 느낌(톤)을 유지하면서 밝기만 조절하는 UI 작업이 매우 쉬워집니다. 프론트엔드 개발자들이 스타일시트(CSS)를 작성할 때나, 파워포인트 등 문서 작성 중 특정 브랜드 색상을 정확히 입력해야 할 때 필수적인 유틸리티입니다.",
        howToUse: "1. 화면의 컬러 피커를 클릭하여 원하는 색상을 시각적으로 선택하거나, 알고 있는 HEX 코드를 직접 입력합니다.\n2. 색상을 선택하는 즉시 RGB, HSL, CMYK 등의 변환된 값이 실시간으로 업데이트됩니다.\n3. 각 형식 옆의 '복사' 버튼을 눌러 코드나 디자인 도구에 바로 적용합니다.\n4. 하단의 색상 미리보기를 통해 실제 화면에서 어떻게 보일지 확인하십시오.",
        faq: [
          { q: "HEX 코드와 RGB의 차이는 무엇인가요?", a: "HEX는 16진수 방식을 사용한 짧은 문자열이고, RGB는 빛의 삼원색(빨강, 초록, 파랑) 값을 0~255 숫자로 표현한 것입니다. 결과적으로 같은 색상을 나타냅니다." },
          { q: "왜 HSL 형식을 사용하나요?", a: "HSL은 색상(Hue), 채도(Saturation), 밝기(Lightness)를 다루므로, 숫자를 조절하는 것만으로 '더 밝게'나 '더 선명하게' 같은 시각적 보정이 매우 직관적이기 때문입니다." },
          { q: "웹 안전 색상(Web Safe Colors)이란 무엇인가요?", a: "과거 낮은 해상도의 모니터에서도 왜곡 없이 표현되던 216가지 표준 색상을 의미하지만, 최근에는 하드웨어 성능이 좋아져 모든 색상을 자유롭게 사용하셔도 무방합니다." },
          { q: "투명도(Alpha) 값도 포함되나요?", a: "현재 기본 변환에는 3차원 값이 제공되며, RGBA와 같은 투명도 지원 형식은 향후 추가될 예정입니다." },
          { q: "콘트라스트(대비) 확인도 가능한가요?", a: "선택한 배경색 위에 흰색 또는 검은색 글자가 잘 보일지 여부를 시각적으로 미리 확인할 수 있습니다." }
        ]
      },
      unitconverter: {
        title: "단위 변환기 (Professional Unit Converter)",
        description: "전 세계 다양한 측정 표준 간의 차이를 완벽하게 해결하고 일상과 전문 업무의 효율을 높이십시오.",
        seo: "미터법, 야드파운드법 등 국가별 도량형 차이를 해결하는 정밀 단위 변환 가이드.",
        longDescription: "우리가 사는 세상은 미터법(Metric)과 야드파운드법(Imperial)이라는 두 가지 주요 도량형이 공존하고 있습니다. Apps24의 전문 단위 변환기는 이러한 시스템 간의 간극을 메우기 위해 설계된 고정밀 계산 도구입니다. 단순히 숫자를 바꾸는 것을 넘어, 과학적 상수를 기반으로 길이, 무게, 넓이, 부피, 온도, 속도 및 디지털 데이터까지 7가지 카테고리의 수십 가지 단위를 지원합니다. 특히 한국 부동산 거래 시 필수적인 '평(坪)' 단위와 미국의 '마일(mile)', '부셸(bushel)' 등 지역 특화 단위까지 포함되어 있어 전 세계 어디서든 유용하게 사용할 수 있습니다.",
        usageContext: "해외 직구를 통해 구매한 의류의 사이즈를 확인하거나, 요리 레시피에 나오는 생소한 부피 단위를 변환해야 할 때 가장 강력한 위력을 발휘합니다. 또한 기술 도면을 다루는 엔지니어, 해외 여행 중 날씨 정보를 파악하려는 여행자, 혹은 학교 과제를 수행하는 학생들에게도 정확한 수치를 제공합니다. 특히 '미국 갤런'과 '영국 갤런'처럼 명칭은 같지만 실질적인 양이 다른 복잡한 단위들도 명확히 구분하여 제공하므로 실수 없는 계산이 가능합니다.",
        howToUse: "1. 상단 탭에서 변환하고자 하는 카테고리(예: 길이, 무게)를 선택합니다.\n2. 왼쪽 '입력' 칸에 변환할 숫자를 입력합니다.\n3. 드롭다운 메뉴를 통해 현재 사용 중인 단위와 변환하고 싶은 대상 단위를 각각 선택합니다.\n4. 하단결과 창에 실시간으로 표시되는 정확한 변환 값을 확인하고 필요한 경우 '복사' 버튼을 누릅니다.\n5. 중앙의 ⇄ 버튼을 누르면 입력 단위를 즉시 스왑(Swap)할 수 있습니다.",
        faq: [
          { q: "미터법과 야드파운드법의 차이는 무엇인가요?", a: "미터법은 10진법을 기반으로 하는 국제 표준(SI)이며, 야드파운드법은 인치, 피트, 마일 등을 사용하는 미국식 표준입니다. 본 도구는 두 체계 간의 정확한 환산을 지원합니다." },
          { q: "온도 변환 시 오차는 없나요?", a: "온도는 '시작점'과 '비율'이 모두 다르기 때문에 단순 곱셈이 아닌 정밀한 보정 수식을 사용합니다. 섭씨 0도는 화씨 32도와 같으며, 본 도구는 소수점 10자리까지 정확하게 계산합니다." },
          { q: "한국에서만 쓰는 '평' 단위는 어떤 기준으로 계산되나요?", a: "전통적인 '평'은 약 3.3058 제곱미터를 의미합니다. 부동산 평면도 분석이나 토지 면적 계산 시 원클릭으로 변환할 수 있습니다." },
          { q: "데이터 단위(GB, TB)는 1000인가요, 1024인가요?", a: "컴퓨터 시스템의 표준인 1024진법(Binary)을 기본으로 사용하여, 실제 운영체제에서 표시되는 용량과 일치하는 결과를 제공합니다." },
          { q: "소수점 자릿수 조절이 가능한가요?", a: "가독성을 위해 기본적으로 소수점 10자리까지 표시되며, 매우 작거나 큰 수의 경우 과학적 표기법을 대신하여 정확한 수치를 전달합니다." }
        ]
      },
      ruler: {
        title: "고정밀 온라인 자 (Professional Screen Ruler)",
        description: "화면 해상도와 관계없이 신용카드 보정 기능을 통해 실제 사물의 길이를 소수점 단위까지 정밀하게 측정하십시오.",
        seo: "실제 자가 없을 때 유용한 브라우저 기반 고정밀 화면 측정 도구 가이드.",
        longDescription: "물리적인 자가 갑자기 필요할 때, Apps24의 온라인 자는 가장 완벽한 대안이 됩니다. 단순히 화면에 눈금을 표시하는 것을 넘어, 전 세계 공통 규격인 '신용카드'를 이용한 역동적 보정(Dynamic Calibration) 시스템을 탑재하고 있습니다. 이를 통해 사용자의 모니터 크기나 해상도 설정에 상관없이 실제 1cm와 1인치를 정확하게 구현해 냅니다. 0점 설정을 위한 더블 클릭 기능과 가로/세로 전환 기능을 통해 작은 부품, 우편물 크기, 혹은 디자인 작업물 등을 정밀하게 측정할 수 있습니다.",
        usageContext: "택배 상자의 규격을 확인하거나, 온라인으로 구매하려는 액세서리의 실제 크기를 가늠해 볼 때 유용합니다. 또한 개발자나 디자이너가 화면상의 특정 요소의 물리적 크기를 파악해야 할 때, 혹은 수학교구 대용으로 학생들이 길이를 공부할 때도 훌륭한 도구가 됩니다. 스마트폰이나 태블릿처럼 화면 밀도가 높은 기기에서도 보정 기능을 통해 신뢰할 수 있는 수치를 얻을 수 있습니다.",
        howToUse: "1. 표준 신용카드나 체크카드를 준비하여 화면의 자 눈금 위에 가로로 평평하게 올려 놓습니다.\n2. 카드의 실제 가로 길이를 입력창에 넣고 '보정하기'를 클릭하여 눈금을 실제 크기에 맞춥니다.\n3. 측정하려는 물체를 화면에 대고 눈금을 확인합니다. 자의 아무 곳이나 '더블 클릭'하면 그 지점이 0점이 되어 편리하게 시작점을 잡을 수 있습니다.\n4. 필요에 따라 cm와 inch 단위를 전환하며 측정값을 확인하십시오.",
        faq: [
          { q: "보정 없이 바로 사용해도 되나요?", a: "기기마다 픽셀 밀도(PPI)가 다르기 때문에 보정 없이 사용하면 오차가 발생할 수 있습니다. 정확한 측정을 위해 반드시 한 번의 보정 과정을 거치는 것을 권장합니다." },
          { q: "신용카드 외에 다른 보정 방법은 없나요?", a: "표준 카드의 실제 가로 길이(약 8.56cm)를 입력하는 것이 가장 정확합니다. 카드가 없다면 실제 자로 화면의 1cm를 재어 값을 입력해도 보정이 가능합니다." },
          { q: "모바일 기기에서도 사용 가능한가호?", a: "네. 반응형 웹 기술을 적용하여 스마트폰에서도 보정 후 실제 크기로 측정하실 수 있습니다." },
          { q: "측정 가능한 최대 길이는 얼마인가요?", a: "사용자의 모니터 물리적 가로 너비까지 측정할 수 있습니다. 듀얼 모니터를 사용 중이라면 창을 확장하여 더 길게 측정할 수도 있습니다." },
          { q: "0점(Origin)을 어떻게 초기화하나요?", a: "자의 맨 왼쪽 끝을 탭하거나, 자의 임의 지점을 다시 더블 클릭하여 언제든지 새로운 0점을 설정할 수 있습니다." }
        ]
      },
      wordcounter: {
        title: "글자 수 세기 & 텍스트 분석기 (Word Counter & Analyzer)",
        description: "공백 포함/제외 글자 수와 단어 수, 그리고 실시간 인덱스 확인까지 한눈에 파악하여 완벽한 원고를 작성하십시오.",
        seo: "네이버 블로그, 자기소개서, SEO 메타태그 작성을 위한 실시간 글자 수 세기 도구.",
        longDescription: "글쓰기의 가치는 내용만큼이나 '형식의 제약'을 맞추는 데에서도 나옵니다. Apps24의 글자 수 세기는 단순한 숫자 카운팅을 넘어, 공백 포함/제외 수치를 실시간으로 분리 제공하여 네이버 블로그 포스팅, 대학 자기소개서, 공공기관 제출 서류 등 엄격한 글자 수 제한이 있는 모든 상황에 완벽하게 대응합니다. 특히 특정 글자가 몇 번째 위치에 있는지 알려주는 '인덱스 추적' 기능은 프로그래밍 데이터 분석나 특정 키워드 위치 확인 시 매우 유용하게 활용됩니다.",
        usageContext: "구글 SEO 메타 설명(약 160자 이내)이나 유튜브 제목(70자 이내) 최적화 작업 시 필수적입니다. 또한 방송 대본 작성 시 분량을 가늠하거나, 외국어 에세이 작성 시 단어 수 제한을 지켜야 하는 학생들에게도 권장됩니다. 한글과 영문, 숫자가 혼용된 텍스트에서도 정확한 카운팅을 보장하며, 붙여넣기 시 불필요한 서식을 제거하고 순수하게 텍스트만 분석하므로 결과의 신뢰도가 높습니다.",
        howToUse: "1. 분석하고자 하는 텍스트를 입력창에 자유롭게 타이핑하거나 붙여넣습니다.\n2. 실시간으로 업데이트되는 상단의 '공백 포함', '공백 제외' 글자 수와 '단어 수'를 확인합니다.\n3. 특정 위치의 글자를 찾고 싶다면 '글자 위치 찾기' 입력창에 인덱스 번호를 넣어 강조 표시를 확인합니다.\n4. '전체 복사' 또는 '지우기' 버튼을 사용하여 다음 작업을 준비합니다.",
        faq: [
          { q: "한글 한 글자는 몇 글자로 카운트되나요?", a: "표준 방식에 따라 한글, 영문, 숫자, 특수문자 모두 1글자로 카운트합니다. 바이트(Byte) 단위 계산과는 차이가 있을 수 있습니다." },
          { q: "입력할 수 있는 텍스트 양에 제한이 있나요?", a: "브라우저 성능에 따라 다르지만 보통 소설 한 권 분량의 텍스트도 지연 없이 즉시 분석할 수 있도록 최적화되어 있습니다." },
          { q: "공백 제외 카운트에는 줄바꿈도 제외되나요?", a: "네. 공백 제외 카운트는 띄어쓰기, 탭, 줄바꿈 등 모든 투명 문자를 제외한 순수 텍스트 문자열의 길이를 측정합니다." },
          { q: "단어 수의 기준은 무엇인가요?", a: "공백(Space)을 기준으로 나뉘는 독립된 문자 그룹의 개수를 단어 수로 계산합니다." },
          { q: "입력한 내용이 어딘가로 전송되나요?", a: "아니요. 모든 텍스트 처리는 로컬 브라우저 메모리상에서만 수행되며, 페이지를 새로고침하면 안전하게 삭제됩니다." }
        ]
      },
      countdown: {
        title: "몰입형 카운트다운 타이머 (Immersion Timer)",
        description: "뽀모도로 학습법, 요리, 발표 연습 등 시간을 정밀하게 관리하고 성과를 극대화하십시오.",
        seo: "집중력 향상을 위한 나이트 모드 및 전체 화면 지원 온라인 타이머 가이드.",
        longDescription: "성공적인 시간 관리의 핵심은 '시각적 압박'을 긍정적인 동기부여로 바꾸는 것입니다. Apps24의 카운트다운 타이머는 단순한 알람을 넘어, 작업에 완전히 몰입할 수 있도록 나이트 모드와 전체 화면 기능을 지원합니다. 뽀모도로(Pomodoro) 학습법을 실천하는 학생부터, 요리 시간을 정확히 체크해야 하는 셰프, 그리고 발표 시간을 엄수해야 하는 연사들을 위해 설계되었습니다. 브라우저 탭을 이동해도 백그라운드에서 정확하게 작동하며, 시인성이 뛰어난 디자인으로 멀리서도 남은 시간을 한눈에 확인할 수 있습니다.",
        usageContext: "25분 집중, 5분 휴식의 뽀모도로 기법을 사용하여 업무 생산성을 높여보세요. 또한 홈트레이닝 중 휴식 시간을 엄격히 제한하거나, 라면이나 파스타를 삶는 등 정밀한 요리 시간이 필요할 때 손쉬운 도우미가 됩니다. 전체 화면 모드를 켜면 공부방이나 사무실에서 공유 타이머로도 활용하기 좋습니다. 밤에는 나이트 모드를 활성화하여 눈의 피로를 최소화하며 집중할 수 있습니다.",
        howToUse: "1. 시간, 분, 초 단위로 타이머의 목표 시간을 설정합니다.\n2. '시작(Start)' 버튼을 눌러 카운트다운을 개시합니다. 상황에 따라 '일시정지'를 사용할 수 있습니다.\n3. 필요한 경우 '나이트 모드'를 켜서 배경을 어둡게 하거나, '전체 화면' 버튼을 눌러 시계만 크게 띄웁니다.\n4. 시간이 완료되면 알림음과 함께 작업 종료를 알립니다. '초기화(Reset)'를 눌러 다시 시작할 수 있습니다.",
        faq: [
          { q: "탭을 닫아도 타이머가 계속 작동하나요?", a: "아니요. 브라우저 탭을 닫으면 타이머 작동이 멈춥니다. 하지만 탭을 연 채로 다른 페이지를 보는 백그라운드 상태에서는 계속 작동합니다." },
          { q: "알림 소리를 끄거나 조절할 수 있나요?", a: "현재 시스템의 볼륨 설정을 따르고 있으며, 향후 무음 모드 및 다양한 알림음 선택 기능이 추가될 예정입니다." },
          { q: "최대 설정 가능한 시간은 얼마인가요?", a: "99시간 59분 59초까지 설정 가능하여 장시간의 작업이나 발표 관리에도 충분합니다." },
          { q: "나이트 모드는 어떤 장점이 있나요?", a: "검은색 배경에 대비가 낮은 색상을 사용하여 눈의 피로를 줄여주며, 배터리 소모(OLED 화면 기준)를 절약하는 효과가 있습니다." },
          { q: "모바일에서 화면이 꺼지면 타이머도 멈추나요?", a: "모바일 브라우저 정책에 따라 화면이 잠기면 백그라운드 작동이 제한될 수 있으므로, 작동 중에는 화면 켜짐 상태를 유지하는 것을 권장합니다." }
        ]
      },
      digitalclock: {
        title: "풀스크린 디지털 시계 (Digital Desk Clock)",
        description: "현재 시간을 실감나고 세련된 디자인으로 확인하고 당신의 공간을 스마트하게 꾸며보십시오.",
        seo: "인테리어 소품 및 시간 관리를 위한 세로/가로 전체 화면 디지털 시계.",
        longDescription: "디지털 기기는 많지만, 멀리서도 한눈에 들어오는 직관적인 '진짜 시계'는 의외로 찾기 어렵습니다. Apps24의 디지털 시계는 당신의 태블릿, 노트북, 혹은 남는 스마트폰을 세련된 탁상시계로 변환시켜 줍니다. 12시간제와 24시간제 선택 기능을 제공하며, 군더더기 없는 미니멀리즘 디자인을 채택하여 사무실 책상 위나 침대 옆 협탁 어디에도 잘 어울립니다. 또한 서버 시간과 동기화되어 가장 정확한 표준 시각을 제공하므로 중요한 일정이나 수강 신청 전에 사용하기에도 부족함이 없습니다.",
        usageContext: "공부방에서 수험생들의 시간 관리용으로 사용하거나, 오피스 환경에서 대형 모니터 한쪽에 띄워놓고 프로젝트 일정을 관리할 때 유용합니다. 어두운 밤에는 나이트 모드를 활용하여 수면에 방해되지 않는 은은한 무드등 겸 시계로 활용해 보세요. 전체 화면 모드를 켜면 남는 구형 아이패드나 갤럭시탭을 멋진 인테리어 시계로 재활용할 수 있어 환경 보호와 실용성을 동시에 챙길 수 있습니다.",
        howToUse: "1. 도구 페이지에 접속하는 즉시 실시간 현재 시간이 표시됩니다.\n2. 개인의 선호에 맞게 12H(오전/오후)와 24H 형식 중 하나를 선택합니다.\n3. '전체 화면' 모드를 눌러 눈에 띄게 큰 시계 화면으로 전환합니다.\n4. 화면의 '나이트 모드'나 색상 변경 옵션(향후 지원)을 통해 주변 환경과 어울리는 조도를 맞춥니다.",
        faq: [
          { q: "시계의 오차는 어느 정도인가요?", a: "사용 기기의 시스템 시간을 기반으로 작동하며, 일반적으로 네트워크 시간 서버(NTP)와 동기화된 매우 정밀한 시각을 보여줍니다." },
          { q: "나이트 모드에서 밝기 조절이 가능한가요?", a: "현재는 배경을 어둡게 처리하는 기능을 지원하며, 실제 밝기는 기기 자체의 화면 밝기 설정을 통해 조절하실 수 있습니다." },
          { q: "초 단위까지 볼 수 있나요?", a: "네. 시간과 분뿐만 아니라 초 단위 변화까지 생생하게 표시하여 정밀한 시간 확인이 필요할 때 도움을 드립니다." },
          { q: "ìŠ¤ë§ˆíŠ¸í ° ê°€ë¡œ ëª¨ë“œë „ ì§€ì› í•˜ë‚˜ìš”?", a: "ë„¤. ê¸°ê¸°ë¥¼ ê°€¡œë¡œ ëˆ•ížˆë©´ ìž ë ™ìœ¼ë¡œ ë ˆì ´ì•„ì›ƒì ´ ë³€ê²½ë ˜ì–´ ë ” ë„“ê²Œ ì‹œê°„ì „ í™•ì ¸í•˜ì‹¤ ìˆ˜ ìžˆìŠµë‹ˆë‹¤." },
          { q: "ë°°í„°ë¦¬ ì†Œëª¨ê°€ ì‹¬í•˜ì§€ ì•Šì €ê°€ìš”?", a: "ì •ì  ì ¸ ë””ìž ì ¸ê³¼ ìµœì  í™”ë œ ì½”ë“œë¡œ ë¦¬ì†ŒìŠ¤ ì‚¬ìš©ì „ ìµœì†Œí™”í•˜ì—¬ ë°°í„°ë¦¬ íš¨ìœ¨ì „ ë†’ì˜€ìŠµë‹ˆë‹¤." }
        ]
      },
      screenlamp: {
        title: "무드 스크린 라이트 (Ambiance Screen Light)",
        description: "당신의 화면을 부드러운 단색 광원으로 변환하여 독서등, 촬영 조명, 혹은 감성적인 무드등으로 활용하십시오.",
        seo: "눈의 피로를 줄여주는 야간 독서등 및 화면 불량 화소 체크용 조명 도구 가이드.",
        longDescription: "빛은 공간의 분위기를 바꾸는 가장 강력한 도구입니다. Apps24의 스크린 라이트는 사용자의 디스플레이를 균일한 색상의 부드러운 상자로 변환시켜 줍니다. 아주 차가운 화이트부터 따뜻한 오렌지, 그리고 감각적인 네온 컬러까지 자유롭게 선택할 수 있습니다. 특히 물리적인 스탠드가 없는 야간에 은은한 독서등으로 활용하거나, 유튜브 영상 촬영 시 보조 조명(Backlight)으로 사용하여 피사체의 윤곽을 살리는 데 탁월한 효과를 발휘합니다. 전체 화면 모드와 결합하면 당신의 기기는 즉시 강력한 조명 장비가 됩니다.",
        usageContext: "캠핑장에서 텐트 안을 밝히는 은은한 랜턴 대용이나, 늦은 밤 가족들을 깨우지 않고 스마트폰만으로 책을 읽을 때 유용합니다. 또한 디자이너들이 모니터의 색상 표현력을 테스트하거나, 중고 기기 거래 시 '불량 화소(Dead Pixel)'를 체크하기 위해 흰색/검은색/빨간색 등을 띄워보는 용도로도 널리 쓰입니다. 눈이 피로할 때는 가장 따뜻한 색온도를 선택하여 블루라이트의 영향을 최소화하면서 작업을 이어갈 수 있습니다.",
        howToUse: "1. 화면 상단의 프리셋 컬러 중 하나를 선택하거나, 컬러 피커를 사용하여 당신만의 커스텀 색상을 지정합니다.\n2. 조명의 색상을 정했다면 '전체 화면' 버튼을 클릭하여 화면 전체를 빛으로 채웁니다.\n3. 모바일 기기의 경우 화면 밝기 설정을 최대치로 올리면 조명 효과가 극대화됩니다.\n4. 사용을 마친 후에는 화면을 탭하거나 ESC 키를 눌러 모드에서 나옵니다.",
        faq: [
          { q: "실제 조명 기구처럼 밝은가요?", a: "기기의 디스플레이 최대 밝기에 따라 다르지만, 어두운 방안이나 야간 야외 활동 시 주변을 식별하거나 독서하기에 충분한 광량을 제공합니다." },
          { q: "블루라이트를 직접 차단해 주나요?", a: "따뜻한 계열(주황, 빨강)의 색상을 선택하면 화면에서 방출되는 차가운 청색광의 비중을 물리적으로 낮추어 시력을 보호하는 효과가 있습니다." },
          { q: "화면 잔상이 남을까 걱정됩니다. 괜찮을까요?", a: "단시간 사용으로는 문제가 없으나, 동일한 고휘도 색상을 장시간(수 시간 이상) 방치할 경우 OLED 화면의 경우 번인(Burn-in) 위험이 있을 수 있으니 주의가 필요합니다." },
          { q: "불량 화소 체크는 어떻게 하나요?", a: "흰색, 빨간색, 초록색, 파란색, 검은색 등을 순서대로 전체 화면으로 띄워보며 한 지점만 색상이 다르거나 빛이 안 들어오는 곳이 있는지 육안으로 확인하면 됩니다." },
          { q: "특정 색상을 예약해서 켤 수 있나요?", a: "현재는 수동 선택 방식이며, 추후 타이머 기능과 연동하여 특정 시간에 조명이 꺼지거나 바뀌는 기능이 추가될 예정입니다." }
        ]
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
      homeSubtitle: "Apps24 is a multilingual online tools website built for fast, simple, practical utilities without unnecessary steps.",
      homeIntro1: "Apps24 is a multilingual online tools website built for people who want fast, simple, and practical utilities without unnecessary steps. Instead of downloading software or creating an account for small tasks, users can open a page, use a tool immediately, and get the result in just a few clicks.",
      homeIntro2: "Our goal is to make everyday digital tasks easier for a wide range of users. Whether you are a student counting words, a marketer preparing links or content, a developer checking JSON or Base64 data, a designer working with colors, or a business owner creating QR codes and barcodes, Apps24 provides lightweight tools that are quick to access and easy to understand.",
      homeAboutTitle: "About Apps24",
      homeWhatYouCanDoTitle: "What You Can Do on Apps24",
      homeWhatYouCanDoBody: "Apps24 brings together a growing collection of useful browser-based tools for text, images, formatting, visual utilities, and technical workflows. You can compress images, convert text case, validate JSON, generate passwords, compare text differences, encode and decode Base64, create QR codes, generate barcodes, and more. These tools are designed for short, focused tasks, so you can solve one problem at a time with a clean layout and a simple workflow.",
      homeWhyUsersChooseTitle: "Why Users Choose Apps24",
      homeWhyUsersChoosePoints: [
        "simple interfaces that are easy to use",
        "fast browser-based tools for quick tasks",
        "multilingual access for global users",
        "practical utilities for real-world needs",
      ],
      homeOngoingFocusTitle: "Built for Everyday Use",
      homeOngoingFocusBody: "Apps24 is designed for a wide range of digital tasks that come up in daily work, study, and online activity. Some users need technical tools for structured data or encoding. Others need content tools for writing, formatting, or publishing. Some need practical generators for QR codes, barcodes, and passwords. By combining these utilities in one place, Apps24 helps users save time and avoid unnecessary software. Most tools work directly in the browser on desktop and mobile, and the site continues to grow with new tools and better content.",
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
      whatIs: "What is {0}?",
      whenToUse: "When to use this tool?",
      howToUseTitle: "How to use {0}",
      faqTitle: "Frequently Asked Questions",
      howItWorks: "How it works",
      unitLength: "Length",
      unitWeight: "Weight",
      unitArea: "Area",
      unitVolume: "Volume",
      unitTemperature: "Temperature",
      unitSpeed: "Speed",
      unitDigital: "Digital",
      from: "From",
      to: "To",
      unitAccuracyNote: "* High precision conversion using standard scientific constants. Result limited to 10 decimal points for readability.",
    },
  },
  ko: {
    tools: {
      imagecompressor: {
        title: "ì´ë¯¸ì§ ìì¶ê¸° & WebP ë³íê¸°",
        description: "ì´ë¯¸ì§ íì¼ í¬ê¸°ë¥¼ ìµì ííê³  ì°¨ì¸ë íìì¸ WebPë¡ ë³ííì¬ ì¤ìë² ì±ë¥ì í¥ììí¤ì­ìì¤.",
        seo: "ì´ë¯¸ì§ ìì¶ ë° WebP ë³íì íµí ì¹ ì±ë¥ ìµì í ê°ì´ë.",
        longDescription: "Apps24ì ì´ë¯¸ì§ ìì¶ê¸°ë ìê°ì  íì§ ìì¤ì ìµìííë©´ì íì¼ í¬ê¸°ë¥¼ íê¸°ì ì¼ë¡ ì¤ì¬ì£¼ë ì ë¬¸ì ì¸ ìµì í ëêµ¬ìëë¤. í¹í êµ¬ê¸ì´ ê¶ì¥íë ì°¨ì¸ë ì´ë¯¸ì§ íìì¸ WebP ë³í ê¸°ë¥ì ì ê³µíì¬, ê¸°ì¡´ JPGë PNG ëë¹ ìµë 30~50% ë ìì ì©ëì¼ë¡ ëì¼í íì§ì ì ì§í  ì ììµëë¤. ì´ë ì¹ì¬ì´í¸ì ë¡ë© ìëë¥¼ ëì¬ êµ¬ê¸ ê²ì ìì§ ìµì í(SEO) ì ìë¥¼ ëì´ê³ , ì¬ì©ì ì´íë¥ ì ì¤ì´ë ë° ê²°ì ì ì¸ ì­í ì í©ëë¤. ë³ëì ìíí¸ì¨ì´ ì¤ì¹ ìì´ ë¸ë¼ì°ì  ë´ìì ì§ì  ì²ë¦¬ëë¯ë¡ ê°ì¸ì ë³´ ë³´í¸ ì¸¡ë©´ììë ìì í©ëë¤.",
        usageContext: "ëì©ë ì´ë¯¸ì§ë ëª¨ë°ì¼ ì¬ì©ìì ë°ì´í° ì¬ì©ëì ëë¦¬ê³  íì´ì§ ë¡ë© ìëë¥¼ ì íìíµëë¤. ë¸ë¡ê·¸ í¬ì¤í, ì¼íëª° ìì¸ íì´ì§, í¹ì ê³ íì§ í¬í¸í´ë¦¬ì¤ ì¬ì´í¸ë¥¼ ì´ìíì ë¤ë©´ WebP ë³íê³¼ ìì¶ì íìì ì¸ ê³¼ì ìëë¤. ëí ì´ë©ì¼ ì²¨ë¶ íì¼ ì©ë ì íì í´ê²°íê±°ë, í´ë¼ì°ë ì ì¥ ê³µê°ì ì ì½íê³  ì¶ì ëë ë§¤ì° ì ì©í©ëë¤. ì¹ íì¤ì ë§ì¶ ìµì íë ì´ë¯¸ì§ë ìë² ëì­í­ ë¹ì© ì ê°ìë ê¸°ì¬í©ëë¤.",
        howToUse: "1. 'ìë¡ë' ë²í¼ì í´ë¦­íê±°ë ì´ë¯¸ì§ íì¼ì ëëê·¸íì¬ ìë ¥ ìì­ì ëìµëë¤.\n2. ìíë ìì¶ ìì¤ê³¼ WebP ë³í ì¬ë¶ë¥¼ ì íí©ëë¤.\n3. ìì¶ì´ ìë£ëë©´ 'ìë³¸ ëë¹ ì ê°ë¥ 'ì íì¸íê³  ìµì íë íì¼ì ë¤ì´ë¡ëí©ëë¤.\n4. ì¬ë¬ ì¥ì ì´ë¯¸ì§ë¥¼ ëìì ì²ë¦¬íì¬ ìì ìê°ì ë¨ì¶í  ì ììµëë¤.",
        faq: [
          { q: "WebP íìì ì¬ì©í´ì¼ íë ì´ì ë ë¬´ìì¸ê°ì?", a: "WebPë ëì¼ íì§ ëë¹ ì©ëì´ í¨ì¬ ìì íì´ì§ ë¡ë©ì ê°ìííë©°, í¬ëªë(Alpha)ì ì ëë©ì´ì í¨ê³¼ë¥¼ ëª¨ë ì§ìíë íëì ì¸ íììëë¤. êµ¬ê¸ ê²ì ë­í¹ìë ê¸ì ì ì¸ ìí¥ì ì¤ëë¤." },
          { q: "ìì¶ ê³¼ì ìì ì  ì¬ì§ì´ ìë²ì ì ì¥ëëì?", a: "ìëì. Apps24ì ëª¨ë  ìµì í ììì ì¬ì©ìì ë¸ë¼ì°ì  ë¡ì»¬ íê²½ìì ìíë©ëë¤. ì¸ë¶ ìë²ë¡ ì´ë¯¸ì§ê° ì ì¡ëì§ ìì¼ë¯ë¡ ë³´ì ê±±ì  ìì´ ì¬ì©íì¤ ì ììµëë¤." },
          { q: "ìì¤ ìì¶(Lossy)ê³¼ ë¬´ìì¤ ìì¶(Lossless)ì ì°¨ì´ë ë¬´ìì¸ê°ì?", a: "ìì¤ ìì¶ì ëì ëì§ ìë ë¯¸ì¸í ë°ì´í°ë¥¼ ì ê±°íì¬ ì©ëì ëí­ ì¤ì´ë ë°©ìì´ê³ , ë¬´ìì¤ì ë°ì´í°ë¥¼ ê·¸ëë¡ ì ì§íë©° ì©ëë§ ë¯¸ì¸íê² ì¡°ì í©ëë¤. ì¹ì©ì¼ë¡ë ë³´íµ ìì¤ ìì¶ì´ ë í¨ì¨ì ìëë¤." },
          { q: "ì§ìëë íì¼ íìì ì´ë»ê² ëëì?", a: "ê°ì¥ ëë¦¬ ì°ì´ë JPG, JPEG, PNG íìì ì§ìíë©° ê²°ê³¼ë¬¼ì íìì ë°ë¼ WebPë¡ ë³íëì´ ì ê³µë©ëë¤." },
          { q: "ì´ë¯¸ì§ í¬ê¸°(Resolution)ë ì¡°ì ëëì?", a: "íì¬ ë²ì ì íì¼ í¬ê¸°(Weight) ìì¶ì ì§ì¤íê³  ìì¼ë©°, í´ìëë ìë³¸ì ì ì§íì¬ í½ì ê¹¨ì§ì ë°©ì§í©ëë¤." }
        ]
      },
      caseconverter: {
        title: "ëìë¬¸ì ë³íê¸° (Case Converter)",
        description: "íì¤í¸ì ììì ëë¬¸ì, ìë¬¸ì, ì ëª©í ë±ì¼ë¡ í´ë¦­ í ë²ì íì¤ííì­ìì¤.",
        seo: "ì ë¬¸ì ì¸ ê°ëì±ì ìí ëìë¬¸ì ë³í ë° íì¤í¸ íì¤í ëêµ¬.",
        longDescription: "ì½íì¸  ì ìì ìì´ ì¼ê´ë ëìë¬¸ì ì¬ì©ì ê°ëì±ê³¼ ì ë¬¸ì±ì ê²°ì ì§ë íµì¬ ìììëë¤. Apps24ì ëìë¬¸ì ë³íê¸°ë ë¨ìí ë¬¸ìë¥¼ ë°ê¾¸ë ê²ì ëì´, ìë¬¸ ê¸°ì¬ ì ëª© ìì±ì ì°ì´ë 'Title Case'ì ë¬¸ì¥ ììë§ ëë¬¸ìë¡ ë°ê¾¸ë 'Sentence Case' ë± ë¤ìí ìµìì ì ê³µí©ëë¤. í¹í íë¡ê·¸ëë° ì ì ì©í camelCase, snake_case ë³í ê¸°ë¥ê³¼ ëëì íì¤í¸ìì ë¶íìí ììì ì ê±°íë ê¸°ë¥ì ë§ì¼í°, ìê³  ìëí°, ê·¸ë¦¬ê³  ê°ë°ì ëª¨ëìê² ìì°ì± íì ì ê°ì ¸ë¤ì¤ëë¤.",
        usageContext: "í´ì¸ ë§ì¼í ë¬¸êµ¬ë¥¼ ìë¬¸ì¼ë¡ ìì±í  ë í¤ëë¼ì¸ì ëìë¬¸ì ê·ì¹ì ë§ì¶ë ê²ì ë§¤ì° ê¹ë¤ë¡ì´ ìììëë¤. ëí ìì¤í ë¡ê·¸ìì ëë¬¸ì íì¤í¸ë¥¼ ìë¬¸ìë¡ ë³ííê±°ë, ë³´ê³ ì ìì± ì  íì¤í¸ì íìì íµì¼í  ë ì ì©í©ëë¤. ë¶íìíê² ëë¬¸ìë¡ë§ ìì±ë ì¤í¸ì± ëëì íì¤í¸ë¥¼ ê°ëì± ì¢ì ë¬¸ì¥ì¼ë¡ ììê°ì êµì í  ì ìì´ ë¸ëë ì ë¢°ëë¥¼ ëì´ë ë° ëìì´ ë©ëë¤.",
        howToUse: "1. ë³ííê³ ì íë íì¤í¸ë¥¼ ìë ¥ì°½ì ë¶ì¬ë£ìµëë¤.\n2. ìë¨ ë²í¼ ì¤ ìíë ì¼ì´ì¤(UPPERCASE, lowercase, Title Case ë±)ë¥¼ í´ë¦­í©ëë¤.\n3. ë³íë ê²°ê³¼ë¥¼ íì¸íê³  'ë³µì¬' ë²í¼ì ëë¬ ìíë ê³³ì ì¬ì©í©ëë¤.\n4. ìì ì ê±° ê¸°ë¥ì íµí´ íì¤í¸ ë³¸ì°ì ë°ì´í°ë§ ì¶ì¶í  ìë ììµëë¤.",
        faq: [
          { q: "Title Case ê·ì¹ì ì ííê°ì?", a: "ë¤. ì£¼ë¡ ìë¬¸ë²ìì ê¶ì¥ëë 'ì ì¹ì¬ë ì ìì¬ë¥¼ ì ì¸í ì£¼ì ë¨ì´ì ì²« ê¸ìë¥¼ ëë¬¸ìë¡ íì'íë ê·ì¹ì ì¤ìíì¬ ë³íë©ëë¤." },
          { q: "íêµ­ì´ íì¤í¸ìë ì ì©ëëì?", a: "íêµ­ì´ë ëìë¬¸ì êµ¬ë¶ì´ ìì¼ë¯ë¡ ë³í ê²°ê³¼ì ìí¥ì ì£¼ì§ ìì§ë§, ìë¬¸ì´ í¼ì©ë íì¤í¸ì ê²½ì° ìë¬¸ ë¶ë¶ë§ ê·ì¹ì ë§ê² ë³íë©ëë¤." },
          { q: "íë¡ê·¸ëë°ì© ì¼ì´ì¤ë ì§ìíëì?", a: "ë¤. ë³ìëª ìì± ì ìì£¼ ì°ì´ë snake_case(ì¸ëë° ì°ê²°)ë camelCase(ëí íê¸°ë²) ìµìì ì ê³µíì¬ ê°ë° í¨ì¨ì ëì¬ëë¦½ëë¤." },
          { q: "ë§¤ì° ê¸´ ë¼ë¬¸ê¸ íì¤í¸ë ì²ë¦¬ê° ê°ë¥íê°ì?", a: "ë¸ë¼ì°ì  ë¦¬ìì¤ê° íì©íë í ìë§ ì ì´ìì íì¤í¸ë ììê°ì ì²ë¦¬íëë¡ ìµì íëì´ ììµëë¤." },
          { q: "ë³íë íì¤í¸ì ì´ë ¥ì´ ë¨ëì?", a: "ë³´ìì ìí´ ë³íë ê²°ê³¼ë ë¸ë¼ì°ì ë¥¼ ë«ì¼ë©´ íë°ëë©°, ë³ëë¡ ìë²ì ë¡ê·¸ë¥¼ ë¨ê¸°ì§ ììµëë¤." }
        ]
      },
      jsonformatter: {
        title: "JSON í¬ë§·í° & ê²ì¦ê¸° (JSON Formatter & Validator)",
        description: "ë³µì¡í JSON ë°ì´í°ë¥¼ ì ë¦¬íê³  ì í¨ì±ì ê²ì¬íì¬ ë°ì´í° ê°ëì±ê³¼ ì íì±ì íë³´íì­ìì¤.",
        seo: "í¨ì¨ì ì¸ ë°ì´í° ëë²ê¹ì ìí JSON í¬ë§·í ë° êµ¬ë¬¸ ê²ì¬ ëêµ¬.",
        longDescription: "íë ìíí¸ì¨ì´ ê°ë°ê³¼ ë°ì´í° íµì ìì ê°ì¥ ëë¦¬ ì°ì´ë íì¤ì¸ JSON(JavaScript Object Notation). íì§ë§ í ì¤ë¡ ê¸¸ê² ëì´ì§ ìì ë°ì´í°ë ì¬ëì´ ì½ê³  ë¶ìíê¸°ì ë§¤ì° ì´ë µìµëë¤. Apps24ì JSON í¬ë§·í°ë ì´ë¬í ë°ì´í°ë¥¼ ììê°ì ê³ì¸µ êµ¬ì¡°ë¡ ìê°ííì¬ ë°ì´í° ê°ì ê´ê³ë¥¼ íëì íìí  ì ìëë¡ ëìµëë¤. ëí êµ¬ë¬¸ ì¤ë¥(Syntax Error)ë¥¼ ì¤ìê°ì¼ë¡ ê°ì§íì¬ ëë½ë ì½¤ë§, ìëª»ë ë°ì´í ë± ì¬ìíì§ë§ ì¹ëªì ì¸ ì¤ìë¥¼ ì°¾ìë´ë ê°ë ¥í ê²ì¦ ê¸°ë¥ì ì ê³µí©ëë¤.",
        usageContext: "API ê°ë° ì ìëµ ë°ì´í°ë¥¼ íì¸íê±°ë, ì¤ì  íì¼(config.json)ì ì¤ë¥ë¥¼ ìì í  ë íìì ìëë¤. ë°ì´í° ë¶ìê°ë¤ì´ ë³µì¡í ì¤ì²© êµ¬ì¡°ì ë°ì´í°ë¥¼ íìí´ì¼ í  ëë, íêµ ê³¼ì ìì JSON íìì ê³µë¶íë íìë¤ìê²ë ì ì©í íìµ ëêµ¬ê° ë©ëë¤. ë°ì´í°ì ê°ëì±ì ëì¬ íì ê°ì ìíí ìíµì ëê³  ëë²ê¹ ìê°ì ë¨ì¶ìí¤ë ë¹ì¦ëì¤ ëêµ¬ë¡ íì©í´ ë³´ì¸ì.",
        howToUse: "1. í¬ë§·íì´ë ê²ì¦ì´ íìí JSON ë°ì´í°ë¥¼ ìë ¥ì°½ì ë¶ì¬ë£ìµëë¤.\n2. 'JSON í¬ë§·í' ë²í¼ì í´ë¦­íì¬ ë¤ì¬ì°ê¸°ê° ì ì©ë ê¹ëí êµ¬ì¡°ë¡ ë³íí©ëë¤.\n3. ë°ì´í°ì ì¤ë¥ê° ìì¬ëë¤ë©´ 'ê²ì¦' ë²í¼ì ëë¬ ì íí ì¤ë¥ ìì¹ì ìì¸ì íì¸í©ëë¤.\n4. ì ëë ë°ì´í°ë¥¼ ë³µì¬íì¬ ì½ëë ë³´ê³ ìì ì¦ì ì ì©íì­ìì¤.",
        faq: [
          { q: "JSONì´ ì í¨íì§ ìë¤(Invalid)ê³  ëìµëë¤. ì´ì ê° ë¬´ìì¸ê°ì?", a: "ê°ì¥ íí ì´ì ë ë§ì§ë§ í­ëª© ë¤ì ë¶íìí ì½¤ë§(Trailing comma), í°ë°ì´í ëì  ììë°ì´í ì¬ì©, í¹ì ëê´í¸[]ì ì¤ê´í¸{}ì ì§ì´ ë§ì§ ìë ê²½ì°ìëë¤." },
          { q: "ìë ¥í ë°ì´í°ê° ìë²ì ì ì¥ëëì?", a: "ì ë ê·¸ë ì§ ììµëë¤. ëª¨ë  ë°ì´í° ì²ë¦¬ë í´ë¼ì´ì¸í¸ ì¬ì´ë(ì¬ì©ì ë¸ë¼ì°ì )ìì ìíëë¯ë¡ ë¯¼ê°í ë°ì´í°ë ìì¬íê³  ì²ë¦¬íì¤ ì ììµëë¤." },
          { q: "ëì©ë JSON íì¼ë ì²ë¦¬ê° ê°ë¥íê°ì?", a: "ë¤. ìµì íë ìì§ì íµí´ ìë©ê°ë°ì´í¸(MB) ë¨ìì íì¤í¸ ë°ì´í°ë ë¸ë¼ì°ì  ë¦¬ìì¤ ë´ìì ë¬´ëíê² ì²ë¦¬í©ëë¤." },
          { q: "XMLì´ë ë¤ë¥¸ íìì¼ë¡ë ë³íëëì?", a: "íì¬ë JSON ê³ ì ì í¬ë§·íê³¼ ê²ì¦ì ì§ì¤íê³  ìì¼ë©°, í¥í ë¤ìí íì ë³í ê¸°ë¥ì ìë°ì´í¸í  ìì ìëë¤." },
          { q: "í¬ë§·íë ëª¨ìì ì»¤ì¤í°ë§ì´ì§ í  ì ìëì?", a: "íì¤ 2ì¹¸ ëë 4ì¹¸ ë¤ì¬ì°ê¸°ë¥¼ ê¸°ë³¸ì¼ë¡ ì ê³µíì¬ ê°ì¥ ë³´í¸ì ì´ê³  ê°ëì±ì´ ì¢ì ííë¥¼ ì ì§í©ëë¤." }
        ]
      },
      passwordgenerator: {
        title: "ë³´ì ë¹ë°ë²í¸ ìì±ê¸° (Password Generator)",
        description: "íëì ì¸ ë³´ì ìêµ¬ ì¬í­ì ì¶©ì¡±íë ë¬´ìì ë¹ë°ë²í¸ë¥¼ ìì±íì¬ ê³ì  ë³´ìì ê°ííì­ìì¤.",
        seo: "í´í¹ ë°©ì§ë¥¼ ìí ê°ë ¥í ë¬´ìì ë¹ë°ë²í¸ ìì± ë° ë³´ì ê°ì´ë.",
        longDescription: "ì ì  ì§ë¥íëë ì¬ì´ë² ê³µê²©ì¼ë¡ë¶í° ë¹ì ì ìì¤í ì ë³´ë¥¼ ì§í¤ë ì²« ë²ì§¸ ë°©ì´ì ì ë°ë¡ 'ìì¸¡ ë¶ê°ë¥í ë¹ë°ë²í¸'ìëë¤. Apps24ì ë¹ë°ë²í¸ ìì±ê¸°ë ë¸ë¼ì°ì ì ê³ ë°ë ëì ìì± ìì§(CSPRNG)ì ì¬ì©íì¬ ì¬ëì´ ì ì¶í  ì ìë ìì í ë¬´ìì ì¡°í©ì ë§ë­ëë¤. ëë¬¸ì, ìë¬¸ì, ì«ì, í¹ìë¬¸ìë¥¼ ì¡°í©íê³  ê¸¸ì´ë¥¼ ì¡°ì íì¬ ê¸ìµ ìë¹ì¤, SNS, ìë¬´ì© ê³ì  ë± ê° íë«í¼ì ë³´ì ìêµ¬ ì¡°ê±´ì ë§ë ìµìì ë¹ë°ë²í¸ë¥¼ ì¦ì ìì±í  ì ììµëë¤.",
        usageContext: "ìë¡ì´ ì¨ë¼ì¸ ìë¹ì¤ì ê°ìí  ëë, ê¸°ì¡´ì ì·¨ì½í ë¹ë°ë²í¸(ìì¼, ì íë²í¸ ë±)ë¥¼ êµì²´í  ë ì¬ì©íì­ìì¤. í¹í ëì¼í ë¹ë°ë²í¸ë¥¼ ì¬ë¬ ê³³ì ì¬ì¬ì©íë ìíí ìµê´ì ë²ë¦¬ê³ , ê° ì¬ì´í¸ë§ë¤ ê³ ì íê³  ê°ë ¥í ë¹ë°ë²í¸ë¥¼ ë¶ì¬íë ê²ì´ ë³´ìì ìììëë¤. ì± ê°ë°ìë¼ë©´ íì¤í¸ ê³ì ì ìì ë¹ë°ë²í¸ë¥¼ ìì±íë ì©ëë¡ë íì©íê¸° ì¢ìµëë¤.",
        howToUse: "1. ìíë ë¹ë°ë²í¸ì ê¸¸ì´ë¥¼ ì¬ë¼ì´ëë ìì¹ ìë ¥ì¼ë¡ ì¤ì í©ëë¤ (ë³´íµ 12ì ì´ì ê¶ì¥).\n2. í¬í¨í  ë¬¸ì êµ¬ì± ìì(ëë¬¸ì, ìë¬¸ì, ì«ì, ê¸°í¸)ë¥¼ ì²´í¬íì¬ ë³´ì ê°ëë¥¼ ì¡°ì í©ëë¤.\n3. 'ìì±' ë²í¼ì ëë¬ ì¡°ê±´ì ë§ë ë¹ë°ë²í¸ë¥¼ ë§ë­ëë¤.\n4. ìì±ë ë¹ë°ë²í¸ë¥¼ ë³µì¬íì¬ ìì í ë¹ë°ë²í¸ ê´ë¦¬ ì±ì´ë ë³ëì ì¤íë¼ì¸ ì ì¥ìì ë³´ê´íì­ìì¤.",
        faq: [
          { q: "ê°ë ¥í ë¹ë°ë²í¸ì ê¸°ì¤ì ë¬´ìì¸ê°ì?", a: "ìµì 12ì ì´ìì´ë©°, ì¸ ì¢ë¥ ì´ìì ë¬¸ì(ìì´ ë/ìë¬¸ì, ì«ì, í¹ìë¬¸ì)ê° í¼í©ë ííì¬ì¼ ë¬¼ë¦¬ì ì¸ ë¬´ìì ëì ê³µê²©(Brute-force)ì¼ë¡ë¶í° ìì í©ëë¤." },
          { q: "ìì±ê¸°ë¥¼ íµí´ ë§ë  ë¹ë°ë²í¸ë ìì íê°ì?", a: "ì¬ì©ìì ê¸°ê¸° ë´ììë§ ìì±ëë©° ìë²ë¡ ì ì¡ëì§ ìì¼ë¯ë¡, ìì± ê³¼ì ììì ì ì¶ ìíì ì í ììµëë¤." },
          { q: "ë¹ë°ë²í¸ë¥¼ ê¸°ìµíê¸° ëë¬´ ì´ë µìµëë¤. ì´ë»ê² í´ì¼ íëì?", a: "ë¬´ìì ë¹ë°ë²í¸ë ê¸°ìµíë ê²ì´ ë¶ê°ë¥ì ê°ê¹ìµëë¤. ë°ë¼ì 'ë¹ë°ë²í¸ ê´ë¦¬ì(Password Manager)' ëêµ¬ë¥¼ í¨ê» ì¬ì©íì¬ ìì íê² ì ì¥íê³  ê´ë¦¬íë ê²ì ê¶ì¥í©ëë¤." },
          { q: "í¹ìí ê¸°í¸ë í¬í¨í  ì ìëì?", a: "ë¤. @, #, $, %, ^ ë± íì¤ í¤ë³´ëìì ì ê³µíë ëª¨ë  í¹ì ê¸°í¸ë¥¼ ìµìì¼ë¡ ì ííì¬ í¬í¨í  ì ììµëë¤." },
          { q: "ìì±ë ë¹ë°ë²í¸ì ë³´ì ì ìë¥¼ ì ì ìëì?", a: "êµ¬ì± ììì ê¸¸ì´ì ë°ë¼ ìëì¼ë¡ 'ë®ì', 'ì¤ê°', 'ìì ' ë±ì ì§ê´ì ì¸ ë³´ì ë±ê¸ì ì¤ìê°ì¼ë¡ ê³ì°í´ ë³´ì¬ì¤ëë¤." }
        ]
      },
      textdiffchecker: {
        title: "íì¤í¸ ë¹êµê¸° (Text Diff Checker)",
        description: "ë íì¤í¸ ê°ì ë¯¸ì¸í ì°¨ì´ë¥¼ ì¤ìê°ì¼ë¡ ë¶ìíì¬ ë³ê²½ ì¬í­ì ìë²½íê² íìíì­ìì¤.",
        seo: "ì íí ë¬¸ì ëì¡° ë° ì½ë ë³ê²½ ì ê²ì ìí íì¤í¸ ë¹êµ ëêµ¬.",
        longDescription: "ìì² ì¤ì íì¤í¸ìì ë°ë ê¸ì íëë¥¼ ì°¾ë ê²ì ëª¨ëì¬ì¥ìì ë°ë ì°¾ê¸°ì ê°ìµëë¤. Apps24ì íì¤í¸ ë¹êµê¸°ë ë ë¬¸ìì ì°¨ì´ì ì ë¼ì¸ë³, ê¸ìë³ë¡ ì ë° ë¶ìíì¬ ì¶ê°ë ë¶ë¶ì ë¹ì, ì­ì ë ë¶ë¶ì ë¹¨ê°ìì¼ë¡ ê°ëì± ëê² íìí´ ì¤ëë¤. ë¨ìí íì¤í¸ ëì¡°ë¥¼ ëì´, íë¡ê·¸ëë° ì½ëì ë³ê²½ ì´ë ¥ì íì¸íê±°ë ê³ì½ìì ë¬¸êµ¬ ìì ì ê²í í  ë ë°ìí  ì ìë ì¸ê°ì ì¤ìë¥¼ ìì²ì ì¼ë¡ ë°©ì§íë ì ë¬¸ì ì¸ ë¹êµ ìì§ì íì¬íê³  ììµëë¤.",
        usageContext: "ì½ë ìì  ì íì ë¡ì§ì ë¹êµíë ê°ë°ì, ë²ì­ ìê³ ì ìì ë³¸ì ëì¡°íë ìëí°, í¹ì ì½ê´ì´ë ê³ì½ìì êµ¬ë¬¸ ë³íë¥¼ ê°ìí´ì¼ íë ë²ë¬´ ë´ë¹ììê² íìì ì¸ ëêµ¬ìëë¤. ë³µì¬íì¬ ë¶ì¬ë£ê¸°ë§ íë©´ ë íì¤í¸ì ì¼ì¹ ì¬ë¶ë¥¼ ì¦ì % ë¨ìë¡ íì¸í  ì ìì¼ë©°, ë¶íìí ê³µë°±ì´ë ì¤ë°ê¿ ì°¨ì´ê¹ì§ ì¬ì¸íê² ì¡ìë´ì´ ìë²½í ë¬¸ì ê´ë¦¬ë¥¼ ëìµëë¤.",
        howToUse: "1. 'ìë³¸ íì¤í¸' ìì­ì ê¸°ì¤ì´ ëë íì¤í¸ë¥¼ ë¶ì¬ë£ìµëë¤.\n2. 'ë¹êµ íì¤í¸' ìì­ì ìì ë ë²ì ì íì¤í¸ë¥¼ ìë ¥í©ëë¤.\n3. 'ë¹êµíê¸°' ë²í¼ì ëë¥´ë©´ ì¤ìê°ì¼ë¡ ì°¨ì´ì ì´ ê°ì¡°ë ë¶ì ê²°ê³¼ê° íë¨ì íìë©ëë¤.\n4. ìµì ì¤ì ì íµí´ ëìë¬¸ì êµ¬ë¶ ì¬ë¶ë ê³µë°± ë¬´ì ì¬ë¶ë¥¼ ì§ì  ì¡°ì íì¬ ì ë°ëë¥¼ ëì¼ ì ììµëë¤.",
        faq: [
          { q: "ë¹êµ ê°ë¥í íì¤í¸ ê¸¸ì´ì ì íì´ ìëì?", a: "ì¼ë°ì ì¸ ë¬¸ì ìì¤ì íì¤í¸ë ë¬¼ë¡ , ìë§ ì¤ì ìì¤ ì½ëë ë¸ë¼ì°ì  ë¦¬ìì¤ ë´ìì ë¬´ëíê² ì²ë¦¬ ê°ë¥í©ëë¤." },
          { q: "ê³µë°±ì´ë ì¤ë°ê¿ ì°¨ì´ë ê°ì§íëì?", a: "ë¤. ì¤ì ì ë°ë¼ ê³µë°± íë, ì¤ë°ê¿ í ì¤ì ì°¨ì´ê¹ì§ ëª¨ë ìê°ì ì¼ë¡ íì¸íì¤ ì ììµëë¤." },
          { q: "ë¹êµ ê²°ê³¼ ë³´ê³ ìë¥¼ ì ì¥í  ì ìëì?", a: "íì¬ë íë©´ìì ì¦ì íì¸íë ë°©ìì´ë©°, íìì íë©´ì ìº¡ì²íê±°ë íì¤í¸ë¥¼ ë³µì¬íì¬ ê¸°ë¡ì¼ë¡ ë¨ê¸¸ ì ììµëë¤." },
          { q: "íë¡ê·¸ëë° ì¸ì´ ë¬¸ë²ë ì§ìíëì?", a: "ë³¸ ëêµ¬ë íì¤í¸ ê¸°ë°ì ë²ì© ë¹êµê¸°ì´ë¯ë¡ ëª¨ë  íë¡ê·¸ëë° ì¸ì´ì íì¤í¸ ì°¨ì´ë¥¼ êµ¬ë¶íë ë° ì í©í©ëë¤." },
          { q: "ìë¡ ë¤ë¥¸ ì¸ì´ì íì¤í¸ë ë¹êµëëì?", a: "íì¤í¸ ë¬¸ì ë¨ìë¡ ëì¡°íë¯ë¡ ì¸ì´ì ìê´ìì´ ê¸ì íëíëì ì°¨ì´ë¥¼ ì íí ì°¾ìëëë¤." }
        ]
      },
      base64encoder: {
        title: "Base64 ì¸ì½ë & ëì½ë (Base64 Encoder & Decoder)",
        description: "ë°ì´í°ì íì¤í¸ ë³í ë° ì ì¡ì ìí Base64 ì¸ì½ë©/ëì½ë© ê¸°ë¥ì ë¹ ë¥´ê³  ìì íê² ì´ì©íì­ìì¤.",
        seo: "API íµì  ë° ë°ì´í° ì ì¡ì ìí íì¤ Base64 ë³í ëêµ¬ ê°ì´ë.",
        longDescription: "Base64ë 8ë¹í¸ ì´ì§ ë°ì´í°ë¥¼ 64ì§ë²ì íì¤í¸ë¡ ë³ííë ê°ì¥ ëì¤ì ì¸ ì¸ì½ë© ë°©ììëë¤. ì£¼ë¡ ë¤í¸ìí¬ë¥¼ íµí´ ë°ì´ëë¦¬ ë°ì´í°(ì´ë¯¸ì§, ì¤í íì¼ ë±)ë¥¼ ì ì¡íê±°ë, URLì í¬í¨í  ì ìë ë¬¸ìë¥¼ ìì íê² ì ë¬í´ì¼ í  ë ì¬ì©ë©ëë¤. Apps24ì Base64 ëêµ¬ë íì¤ RFC ê·ê²©ì ì¤ìíì¬ ì´ë¤ ìì¤íê³¼ë í¸íëë ì ë°í ë³í ê²°ê³¼ë¥¼ ì ê³µí©ëë¤. ë°ì´í°ì ë¬´ê²°ì±ì ì ì§íë©´ì íì¤í¸ ê¸°ë° ìì¤íìì ë°ì´ëë¦¬ ë°ì´í°ë¥¼ ìì ë¡­ê² ë¤ë£° ì ìëë¡ ëìµëë¤.",
        usageContext: "ì¹ ê°ë° ì ì´ë¯¸ì§ë¥¼ HTML/CSSì ì§ì  ë´ì¥(Data URI)íê±°ë, API ì¸ì¦ì ìí Authorization í¤ë ê°ì ìì±í  ë íìì ìëë¤. ëí ìí¸íë ë©ìì§ë¥¼ ì ì¡íê¸° ì  íì¤í¸ ííë¡ ë³ííê±°ë, í¹ì ë¬¸ìê° í¬í¨ë ë°ì´í°ë¥¼ ì ì¡ ì¤ë¥ ìì´ ì ë¬íê³  ì¶ì ë ì ì©í©ëë¤. ê°ë°ìë¤ì ëë²ê¹ ìë¬´ë¿ë§ ìëë¼ ê¸°ì ì ì¸ ë°ì´í° êµ¬ì¡°ë¥¼ ì´í´íë ¤ë íìë¤ìê²ë íë¥­í íìµ ëêµ¬ê° ë©ëë¤.",
        howToUse: "1. ì¸ì½ë©(ë³í)í  ì¼ë° íì¤í¸ë ëì½ë©(ë³µì)í  Base64 ë¬¸ìì´ì ìë ¥ì°½ì ë£ìµëë¤.\n2. ìííê³ ì íë ììì ë§ì¶° 'ì¸ì½ë©' ëë 'ëì½ë©' ë²í¼ì í´ë¦­í©ëë¤.\n3. íë¨ ê²°ê³¼ ìì­ì ì¦ì ë³íë ê°ì´ ëíë©ëë¤.\n4. 'ë³µì¬' ë²í¼ì ì¬ì©íì¬ ê²°ê³¼ê°ì ê°ë° íê²½ì´ë íµì  ëêµ¬ì ì ì©íì­ìì¤.",
        faq: [
          { q: "Base64 ì¸ì½ë©ì íë©´ ë°ì´í° í¬ê¸°ê° ëì´ëëì?", a: "ë¤. ì´ì§ ë°ì´í°ë¥¼ íì¤í¸ë¡ íííë ê³¼ì ìì ìë³¸ ëë¹ ì½ 33% ì ë ì©ëì´ ì¦ê°íê² ë©ëë¤." },
          { q: "Base64ë ìí¸í(Encryption)ì¸ê°ì?", a: "ìëì. Base64ë ë¨ìí ì¸ì½ë© ë°©ìì´ë¯ë¡ ëêµ¬ë ëì½ë©ì´ ê°ë¥í©ëë¤. ê¸°ë° ì ì§ê° íìí ë°ì´í°ë ë°ëì ë³ëì ìí¸í ê³¼ì ì ê±°ì³ì¼ í©ëë¤." },
          { q: "ì´ë¯¸ì§ íì¼ë Base64ë¡ ë³íí  ì ìëì?", a: "íì¬ë íì¤í¸ ê¸°ë°ì ì¸ì½ë©/ëì½ë©ì ì§ìíë©°, ì´ë¯¸ì§ ì¸ì½ë© ê¸°ë¥ì í¥í ìë°ì´í¸ë  ìì ìëë¤." },
          { q: "URLì© Base64ì ì¼ë° Base64ì ì°¨ì´ë ë¬´ìì¸ê°ì?", a: "URLììë +, / ë¬¸ìê° í¹ì ê¸°ë¥ì íë¯ë¡ ì´ë¥¼ -, _ë¡ ëì²´íë ë°©ìì´ ì°ìëë¤. ë³¸ ëêµ¬ë ê°ì¥ íì¤ì ì¸ Base64 íìì ë°ë¦ëë¤." },
          { q: "ì¸ì½ë© ê²°ê³¼ ë¤ì ìë == ê¸°í¸ë ë¬´ìì¸ê°ì?", a: "í¨ë©(Padding)ì´ë¼ê³  íë©°, ë°ì´í°ì ê¸¸ì´ë¥¼ 3ë°ì´í¸ ë¨ìë¡ ë§ì¶ê¸° ìí´ ì¬ì©ëë íì¤ íììëë¤." }
        ]
      },
      colorconverter: {
        title: "ìì ì½ë ë³íê¸° (Color Code Converter)",
        description: "HEX, RGB, HSL ë± ëì      screenlamp: {
        title: "ë¬´ë ì¤í¬ë¦° ë¼ì´í¸ (Ambiance Screen Light)",
        description: "ë¹ì ì íë©´ì ë¶ëë¬ì´ ë¨ì ê´ìì¼ë¡ ë³ííì¬ ëìë±, ì´¬ì ì¡°ëª, í¹ì ê°ì±ì ì¸ ë¬´ëë±ì¼ë¡ íì©íì­ìì¤.",
        seo: "ëì í¼ë¡ë¥¼ ì¤ì¬ì£¼ë ì¼ê° ëìë± ë° íë©´ ë¶ë íì ì²´í¬ì© ì¡°ëª ëêµ¬ ê°ì´ë.",
        longDescription: "ë¹ì ê³µê°ì ë¶ìê¸°ë¥¼ ë°ê¾¸ë ê°ì¥ ê°ë ¥í ëêµ¬ìëë¤. Apps24ì ì¤í¬ë¦° ë¼ì´í¸ë ì¬ì©ìì ëì¤íë ì´ë¥¼ ê· ì¼í ììì ë¶ëë¬ì´ ììë¡ ë³íìì¼ ì¤ëë¤. ìì£¼ ì°¨ê°ì´ íì´í¸ë¶í° ë°ë»í ì¤ë ì§, ê·¸ë¦¬ê³  ê°ê°ì ì¸ ë¤ì¨ ì»¬ë¬ê¹ì§ ìì ë¡­ê² ì íí  ì ììµëë¤. í¹í ë¬¼ë¦¬ì ì¸ ì¤í ëê° ìë ì¼ê°ì ììí ëìë±ì¼ë¡ íì©íê±°ë, ì íë¸ ìì ì´¬ì ì ë³´ì¡° ì¡°ëª(Backlight)ì¼ë¡ ì¬ì©íì¬ í¼ì¬ì²´ì ì¤ê³½ì ì´ë¦¬ë ë° íìí í¨ê³¼ë¥¼ ë°íí©ëë¤. ì ì²´ íë©´ ëª¨ëì ê²°í©íë©´ ë¹ì ì ê¸°ê¸°ë ì¦ì ê°ë ¥í ì¡°ëª ì¥ë¹ê° ë©ëë¤.",
        usageContext: "ìº íì¥ìì íí¸ ìì ë°íë ììí ëí´ ëì©ì´ë, ë¦ì ë°¤ ê°ì¡±ë¤ì ê¹¨ì°ì§ ìê³  ì¤ë§í¸í°ë§ì¼ë¡ ì±ì ì½ì ë ì ì©í©ëë¤. ëí ëìì´ëë¤ì´ ëª¨ëí°ì ìì ííë ¥ì íì¤í¸íê±°ë, ì¤ê³  ê¸°ê¸° ê±°ë ì 'ë¶ë íì(Dead Pixel)'ë¥¼ ì²´í¬íê¸° ìí´ í°ì/ê²ìì/ë¹¨ê°ì ë±ì ëìë³´ë ì©ëë¡ë ëë¦¬ ì°ìëë¤. ëì´ í¼ë¡í  ëë ê°ì¥ ë°ë»í ìì¨ëë¥¼ ì ííì¬ ë¸ë£¨ë¼ì´í¸ì ìí¥ì ìµìííë©´ì ììì ì´ì´ê° ì ììµëë¤.",
        howToUse: "1. íë©´ ìë¨ì íë¦¬ì ì»¬ë¬ ì¤ íëë¥¼ ì ííê±°ë, ì»¬ë¬ í¼ì»¤ë¥¼ ì¬ì©íì¬ ë¹ì ë§ì ì»¤ì¤í ììì ì§ì í©ëë¤.\n2. ì¡°ëªì ììì ì íë¤ë©´ 'ì ì²´ íë©´' ë²í¼ì í´ë¦­íì¬ íë©´ ì ì²´ë¥¼ ë¹ì¼ë¡ ì±ìëë¤.\n3. ëª¨ë°ì¼ ê¸°ê¸°ì ê²½ì° íë©´ ë°ê¸° ì¤ì ì ìµëì¹ë¡ ì¬ë¦¬ë©´ ì¡°ëª í¨ê³¼ê° ê·¹ëíë©ëë¤.\n4. ì¬ì©ì ë§ì¹ íìë íë©´ì í­íê±°ë ESC í¤ë¥¼ ëë¬ ëª¨ëìì ëìµëë¤.",
        faq: [
          { q: "ì¤ì  ì¡°ëª ê¸°êµ¬ì²ë¼ ë°ìê°ì?", a: "ê¸°ê¸°ì ëì¤íë ì´ ìµë ë°ê¸°ì ë°ë¼ ë¤ë¥´ì§ë§, ì´ëì´ ë°©ìì´ë ì¼ê° ì¼ì¸ íë ì ì£¼ë³ì ìë³íê±°ë ëìíê¸°ì ì¶©ë¶í ê´ëì ì ê³µí©ëë¤." },
          { q: "ë¸ë£¨ë¼ì´í¸ë¥¼ ì§ì  ì°¨ë¨í´ ì£¼ëì?", a: "ë°ë»í ê³ì´(ì£¼í©, ë¹¨ê°)ì ììì ì ííë©´ íë©´ìì ë°©ì¶ëë ì°¨ê°ì´ ì²­ìê´ì ë¹ì¤ì ë¬¼ë¦¬ì ì¼ë¡ ë®ì¶ì´ ìë ¥ì ë³´í¸íë í¨ê³¼ê° ììµëë¤." },
          { q: "íë©´ ììì´ ë¨ìê¹ ê±±ì ë©ëë¤. ê´ì°®ìê¹ì?", a: "ë¨ìê° ì¬ì©ì¼ë¡ë ë¬¸ì ê° ìì¼ë, ëì¼í ê³ íë ììì ì¥ìê°(ì ìê° ì´ì) ë°©ì¹í  ê²½ì° OLED íë©´ì ê²½ì° ë²ì¸(Burn-in) ìíì´ ìì ì ìì¼ë ì£¼ìê° íìí©ëë¤." },
          { q: "ë¶ë íì ì²´í¬ë ì´ë»ê² íëì?", a: "í°ì, ë¹¨ê°ì, ì´ë¡ì, íëì, ê²ìì ë±ì ììëë¡ ì ì²´ íë©´ì¼ë¡ ëìë³´ë©° í ì§ì ë§ ììì´ ë¤ë¥´ê±°ë ë¹ì´ ì ë¤ì´ì¤ë ê³³ì´ ìëì§ ì¡ìì¼ë¡ íì¸íë©´ ë©ëë¤." },
          { q: "í¹ì  ììì ìì½í´ì ì¼¤ ì ìëì?", a: "íì¬ë ìë ì í ë°©ìì´ë©°, ì¶í íì´ë¨¸ ê¸°ë¥ê³¼ ì°ëíì¬ í¹ì  ìê°ì ì¡°ëªì´ êº¼ì§ê±°ë ë°ëë ê¸°ë¥ì´ ì¶ê°ë  ìì ìëë¤." }
        ]
      },
      qrgenerator: {
        title: "ê³ ì QR ì½ë ìì±ê¸° (Quick QR Code Generator)",
        description: "URL, íì¤í¸, ì°ë½ì² ë± ìíë ëª¨ë  ë°ì´í°ë¥¼ ì¤ë§í¸íê² ì¸ì½ë©íì¬ ì¦ì ê³µì  ê°ë¥í QR ì½ëë¥¼ ë§ëì­ìì¤.",
        seo: "ë¹ì¦ëì¤ ë§ì¼í ë° ì¤íë¼ì¸ ì ë³´ ì ë¬ì ìí ê³ í´ìë QR ì½ë ìì± ëêµ¬.",
        longDescription: "ì¤íë¼ì¸ê³¼ ì¨ë¼ì¸ì ì°ê²°íë ê°ì¥ ë¹ ë¥´ê³  ì§ê´ì ì¸ íµë¡ì¸ QR(Quick Response) ì½ë. Apps24ì QR ì½ë ìì±ê¸°ë ë³ëì íì ê°ì ìì´ ëêµ¬ë ê³ í´ìëì QR ì½ëë¥¼ ë¬´ë£ë¡ ìì±í  ì ìë ëêµ¬ìëë¤. ì¹ì¬ì´í¸ ì£¼ì(URL)ë ë¬¼ë¡ , ë³µì¡í ìì´íì´ ë¹ë°ë²í¸, ì´ë²¤í¸ ì ë³´, í¹ì ê¸´ ë¬¸ì¥ë ì½ë ìì ë´ìë¼ ì ììµëë¤. ìì±ë ì½ëë ì¤ìºê³¼ ëìì ì¦ê°ì ì¸ ë°ìì ë³´ì¥íë©°, íì§ ì í ìë ë¤ì´ë¡ë ê¸°ë¥ì íµí´ ì¹ì¬ì´í¸ ê²ìë¬¼ì´ë ì¸ìì© íë³´ë¬¼ ì ì ì ë°ë¡ ì¬ì©í  ì ììµëë¤.",
        usageContext: "ìë¹ìì ë©ë´í ë§í¬ë¥¼ ì ê³µíê±°ë, ë¹ì¦ëì¤ íì¬ìì ë³¸ì¸ì ëì§í¸ ëªí¨ì ê³µì í  ë íìì ìëë¤. ëí ë°°ì¡ ìë´ì¥, ì ë¨ì§, íìë¤ì í¬í¸í´ë¦¬ì¤ ì¬ì´í¸ ì ì ë± ë¤ìí ë§ì¼í ìëë¦¬ì¤ìì ë§ì°° ìì´ ì¬ì©ìë¥¼ ì°ê²°í´ ì¤ëë¤. í¹í SNS íë¡í ì£¼ìë¥¼ íì¤í¸ë¡ ì ë ëì  QR ì½ëë¡ íìíë©´ íë¡ì ì ì íë¥ ì íê¸°ì ì¼ë¡ ëì¼ ì ììµëë¤. ê°ë ¥í ë¬´ë£ ìì±ê¸°ë¡ ë¹ì ì ë¹ì¦ëì¤ ì°ê²°ì ìëíí´ ë³´ì¸ì.",
        howToUse: "1. 'ë´ì© ìë ¥' ì¹¸ì QR ì½ëì ë´ê³  ì¶ì ë§í¬(URL)ë ì¼ë° íì¤í¸ë¥¼ ìë ¥í©ëë¤.\n2. ìë ¥ê³¼ ëìì íë©´ì QR ì½ëê° ì¤ìê°ì¼ë¡ ìë°ì´í¸ë©ëë¤.\n3. ìì±ë ì½ëê° ì ìì ì¼ë¡ ìëíëì§ ë³¸ì¸ì ì¤ë§í¸í° ì¹´ë©ë¼ë¡ íì¤í¸ ì¤ìºì í´ë´ëë¤.\n4. 'ë¤ì´ë¡ë' ë²í¼ì ëë¬ ì´ë¯¸ì§ íì¼ë¡ ì ì¥í í, ì¸ìë¬¼ì´ë ì¹ì¬ì´í¸ì ì ì©íì­ìì¤.",
        faq: [
          { q: "ìì±ë QR ì½ëì ì í¨ ê¸°ê°ì´ ìëì?", a: "ìëì. Apps24ìì ìì±ë QR ì½ëë ìêµ¬ì ìëë¤. ë¤ë§, ì°ê²°ë ì¹ì¬ì´í¸ ì£¼ìê° ë°ëê±°ë ì­ì ëë©´ ì¤ìº í ì ìì´ ì ë  ì ìì¼ë ì£¼ìíì­ìì¤." },
          { q: "ììì ì¸ ì©ëë¡ ì¬ì©í´ë ë¹ì©ì´ ë°ìíëì?", a: "ìì  ë¬´ë£ìëë¤. ë¹ì¦ëì¤ íë³´ë¬¼, ì í í¨í¤ì§, ë©ë´í ë± ììì  ëª©ì ì¼ë¡ ìì ë¡­ê² ì¬ì©íìê³  ë°°í¬íìë ë©ëë¤." },
          { q: "ì¼ë§ë ë§ì ë°ì´í°ë¥¼ ë£ì ì ìëì?", a: "ìë°± ì ì´ìì ê¸´ íì¤í¸ë ê°ë¥íì§ë§, ë°ì´í°ê° ë§ìì§ìë¡ QR ì½ëì í¨í´ì´ ì´ì´í´ì ¸ ì¤ìº ìëê° ëë ¤ì§ ì ìì¼ë¯ë¡ ê°ë¥íë©´ ì§§ì ë§í¬ ìì¤íì íì©íë ê²ì´ ì¢ìµëë¤." },
          { q: "QR ì½ëì ììì ë°ê¿ ì ìëì?", a: "íì¬ë ê°ì¥ ëì ì¸ìë¥ ì ë³´ì¥íë ê²ììê³¼ í°ì ì¡°í©ì ê¸°ë³¸ì¼ë¡ ì ê³µíë©°, í¥í ëìì¸ ì»¤ì¤í°ë§ì´ì§ ê¸°ë¥ì´ ìë°ì´í¸ë  ìì ìëë¤." },
          { q: "ì¤ìºì´ ì ì ëë ê²½ì°ë ì ê·¸ë°ê°ì?", a: "ì½ë ì£¼ë³ì ì¬ë°±ì´ ëë¬´ ì¢ê±°ë, ì¸ì ìíê° íë¦¿í ê²½ì°, í¹ì ëë¬´ ë§ì íì¤í¸ê° ë¤ì´ê° í¨í´ì´ ì§ëì¹ê² ë³µì¡í ê²½ì°ì ë°ìí  ì ììµëë¤." }
        ]
      },
      barcodegenerator: {
        title: "ì¤ë§í¸ ë°ì½ë ìì±ê¸° (Efficient Barcode Generator)",
        description: "ì¬ê³  ê´ë¦¬, ëì ë¶ë¥, ë¬¼ë¥ ì¶ì  ë± ë¤ìí íì¤ ê·ê²©ì ë°ì½ëë¥¼ ìì±íì¬ ìì¤í í¨ì¨ì ê·¹ëííì­ìì¤.",
        seo: "ìê·ëª¨ ì¬ìì¥ ë° ì¬ê³  ê´ë¦¬ë¥¼ ìí íì¤ ê·ê²© ë°ì½ë ì ì ê°ì´ë.",
        longDescription: "íë ë¬¼ë¥ì ì íµì ê·¼ê°ì´ ëë ë°ì½ë ìì¤í. Apps24ì ë°ì½ë ìì±ê¸°ë ìê·ëª¨ íë§¤ìë ì°½ê³  ê´ë¦¬ìë¤ì´ ê³ ê°ì ì¥ë¹ ìì´ë íì¤íë ë°ì½ëë¥¼ ìì±í  ì ìëë¡ í¹íë ëêµ¬ìëë¤. ì«ìì ë¬¸ìë¥¼ ê¸°ê³ê° ì½ì ì ìë ì ê³¼ ê³µê°ì í¨í´ì¼ë¡ ë³ííì¬, ì¤ë§í¸í°ì ì¹´ë©ë¼ë ë ì´ì  ì¤ìºëë¥¼ íµí´ ì íì ì¦ê° ìë³í  ì ììµëë¤. ë¨ìí ì«ì ëì´ì ëì´, êµ­ì  íì¤ ê·ê²©ì ë§ë ê°ëì±ì íë³´íì¬ ë¬¼ë¥ íì¥ìì ë°ìí  ì ìë ë°ì´í° ì¤ìë ¥ ì¬ê³ ë¥¼ ë¯¸ì°ì ë°©ì§í©ëë¤.",
        usageContext: "ìì²´ ì ì ìíì ìë³ ë²í¸ë¥¼ ë¶ì¬íì¬ í¨ì¨ì ì¼ë¡ ì¬ê³ ë¥¼ ê´ë¦¬íê±°ë, ëìê´ì ì± ë¶ë¥í ìì±, í¹ì ì¬ë¬´ì¤ ë¹íì ìì° ë²í¸ë¥¼ ê´ë¦¬í  ë íìì ìëë¤. ììë¡ ê´ë¦¬íë ì¬ê³ ë¥¼ ë°ì½ëííë©´ ìì¶ê³  ìê°ì´ íê¸°ì ì¼ë¡ ë¨ì¶ë©ëë¤. ì¹´íë ììì ì í¬ì¸í¸ ì¹´ë ë²í¸ ìì±, ì´ë²¤í¸ ì¿ í°ì ê³ ì  ë²í¸ ë¶ì¬ ë± ì¤ìíì ë¤ìí ë§ì¼í ë° ìëí íëììë ê°ë ¥í ì±ë¥ì ë°íí©ëë¤.",
        howToUse: "1. ë°ì½ë ë°ì íìë  ì«ìë ë¬¸ìë¥¼ ìë ¥ì°½ì ë£ìµëë¤.\n2. ìíë ë°ì½ë íì(CODE128 ë±)ì ì íí©ëë¤ (ê°ì¥ ë²ì©ì ì¸ íìì´ ê¸°ë³¸ê°ìëë¤).\n3. íë©´ì ìì±ë ë°ì½ëê° ì ëªíê² ë³´ì´ëì§ íì¸í©ëë¤.\n4. ì´ë¯¸ì§ íì¼ì ë¤ì´ë¡ëíì¬ ë¼ë²¨ì§ì ì¸ìíê±°ë ê´ë¦¬ ìì¤íì ë±ë¡íì­ìì¤.",
        faq: [
          { q: "ë°ì½ëì QR ì½ëì ì°¨ì´ë ë¬´ìì¸ê°ì?", a: "ë°ì½ëë ì£¼ë¡ 1ì°¨ìì ì¸ ì«ì/ë¬¸ì ìë³ì í¹íëì´ ë¬¼ë¥ ìì¤íìì ë¹ ë¥´ê² ì¤ìºíë ì©ëì´ë©°, QR ì½ëë ë ë§ì ë°ì´í°(URL ë±)ë¥¼ ë´ë 2ì°¨ì ë°©ììëë¤." },
          { q: "í¸ìì ìì ì°ë ë°ì½ëë¥¼ ë§ë¤ ì ìëì?", a: "ë¤. CODE128 ë± íì¤ íìì ì§ìíë¯ë¡ ìì¤ì ë°ì½ë ì¤ìºëì ìë²½íê² í¸íë©ëë¤." },
          { q: "íê¸ë ë°ì½ëë¡ ë§ë¤ ì ìëì?", a: "ì¼ë¶ íì(CODE128)ì ì íì ì¸ ë¬¸ì ì§í©ì ì§ìíì§ë§, ì¸ìì ìì ì±ì ìí´ ìë¬¸ê³¼ ì«ìì ì¡°í©ì ê¶ì¥í©ëë¤." },
          { q: "ë°ì½ë í¬ê¸°ë¥¼ ì¡°ì í  ì ìëì?", a: "íì¬ë ìì¸ì±ì´ ê·¹ëíë íì¤ í¬ê¸°ë¡ ì ê³µëë©°, ì¸ì ì ì¸ì ìµìì íµí´ í¬ê¸°ë¥¼ ë¯¸ì¸íê² ì¡°ì í´ ì¬ì©íì¤ ì ììµëë¤." },
          { q: "ë°ì½ë ë²í¸ê° ì¤ë³µëë©´ ì´ë»ê² ëëì?", a: "ë°ì½ë ë²í¸ ìì²´ë ê³ ì ì±ì ë³´ì¥íì§ ììµëë¤. ë°ë¼ì ë³¸ì¸ì´ ê´ë¦¬íë ìì¤í ë´ìì ì¤ë³µëì§ ìëë¡ ë²í¸ë¥¼ ìì±íë ê²ì´ ì¤ìí©ëë¤." }
        ]
      },
      dummytext: {
        title: "ë¡ë  ìì¨ & ìë¦¬íìì ìì±ê¸° (Lorem Ipsum Generator)",
        description: "ëìì¸ ë ì´ìì êµ¬ì±ì ìí ìë¯¸ ìë íì¤í¸ë¥¼ ìì±íì¬ ìê°ì  ìì±ëë¥¼ ë¯¸ë¦¬ ì ê²íì­ìì¤.",
        seo: "ëìì´ë ë° ì¹ ê°ë°ìë¥¼ ìí íêµ­ì´/ìë¬¸ ëë¯¸ íì¤í¸ ìì± ê°ì´ë.",
        longDescription: "ì¹ì¬ì´í¸ë íë³´ë¬¼ì ëìì¸í  ë, ì¤ì  ì½íì¸ ê° ì¤ë¹ëê¸° ì  'ê¸ìê° ì±ìì§ ëë'ì íì¸íë ê³¼ì ì ë§¤ì° ì¤ìí©ëë¤. Apps24ì ë¡ë  ìì¨ ìì±ê¸°ë 16ì¸ê¸°ë¶í° ì í´ ë´ë ¤ì¨ ì íµ ë¼í´ì´ ë°©ìì ë¬¼ë¡ , íëì ì¸ ëìì¸ì ì´ì¸ë¦¬ë ìì°ì¤ë¬ì´ íêµ­ì´ ëë¯¸ íì¤í¸ ìì± ê¸°ë¥ì ì ê³µí©ëë¤. ë¨ìí 'ê¸ì ì±ì°ê¸°'ë¥¼ ëì´ ë¬¸ë¨ì êµ¬ì±ê³¼ ê¸¸ì´, íê°ì ë¦¬ë¬ê°ì ì¤ìê°ì¼ë¡ íì¸íì¬ ì¤ì  ìë¹ì¤ê° ë°ì¹­ëìì ëì ìê°ì  ë°¸ë°ì¤ë¥¼ ìë²½íê² ìì¸¡í  ì ìëë¡ ëìµëë¤.",
        usageContext: "í¼ê·¸ë§(Figma)ë ì´ëë¹ XDë¡ UIë¥¼ ì¤ê³í  ë íì¤í¸ ìì­ì ê°ëì±ì íì¤í¸íê±°ë, ìëíë ì¤ íë§ë¥¼ ê°ë°íë©° ê²ìí ëª©ë¡ì ëìì¸ì íì¸í  ë íìì ìëë¤. ì ë¬¸ì ì¸ í¼ë¸ë¦¬ìë¤ì´ ê¸ê¼´ì ë¬´ê²ê°(Weight)ì ë¹êµíê³  íê°(Line-height)ì ì¡°ì í  ëë ìë¯¸ê° ë´ê¸´ ê¸ë³´ë¤ë ìë¯¸ ìë ëë¯¸ íì¤í¸ê° ìê°ì  ë ì´ìììë§ ì§ì¤íê² í´ì£¼ì´ í¨ì¨ì ìëë¤. íê¸ ëë¯¸ íì¤í¸ì ê²½ì° 'ë¤ëì¥ ì³ë°í´' ê°ì ì ëªí ìë¬¸ë¶í° ì°½ìì ì¸ ë¬¸ë¨ê¹ì§ ë¤ìíê² íì©í  ì ììµëë¤.",
        howToUse: "1. ì¬ì©íê³ ì íë ì¸ì´(ìì´, íêµ­ì´ ë±)ë¥¼ ì íí©ëë¤.\n2. íìí íì¤í¸ì ì(ë¬¸ë¨ ì ëë ë¨ì´ ì)ì ì§ì í©ëë¤.\n3. 'ìì±íê¸°' ë²í¼ì ëë¥´ë©´ ì¦ì ë¬´ìì íì¤í¸ê° ëíë©ëë¤.\n4. ìì±ë ê²°ê³¼ë¥¼ ë³µì¬íì¬ ëìì¸ í´ì´ë ê°ë° ì¤ì¸ íì´ì§ì íì¤í¸ ìì­ì ë¶ì¬ë£ì¼ì­ìì¤.",
        faq: [
          { q: "ì ìë¯¸ ìë íì¤í¸ë¥¼ ì¬ì©íëì?", a: "ëìì¸ ê²í  ì ì¤ì  ê¸ì ë´ì©ì ìì ì ëºê¸°ì§ ìê³ , ììíê² ìì²´(Typo)ì ë ì´ììì êµ¬ëìë§ ì§ì¤íê¸° ìí´ììëë¤." },
          { q: "ë¼í´ì´ 'Lorem Ipsum'ì ë»ì ë¬´ìì¸ê°ì?", a: "í¤ì¼ë¡ì ì² íììì ê°ì ¸ì¨ ë¨ì´ë¤ì ë¬´ììë¡ ìì ê²ì¼ë¡, ê·¸ ìì²´ë¡ë í¹ë³í ìë¯¸ê° ìë ê³ ì í ê´ìµìëë¤." },
          { q: "íêµ­ì´ ëë¯¸ íì¤í¸ë ì§ìíëì?", a: "ë¤. íêµ­ì´ ê³ ì ì ìì  í¹ì§ì ì´ë¦° ëë¯¸ íì¤í¸ ê¸°ë¥ì ì ê³µíì¬ êµ­ë´ ì¹ì¬ì´í¸ ëìì¸ ì ëì± ì¤ê° ëë ìë®¬ë ì´ìì´ ê°ë¥í©ëë¤." },
          { q: "ê¸ì ì ê¸°ë°ì¼ë¡ ìì±í  ì ìëì?", a: "ë¤. ë¬¸ë¨(Paragraph) ë¨ìë¿ë§ ìëë¼ í¹ì  ê³µê°ì ì±ì°ê¸° ìí ê¸ì ì ë¨ì ìì± ìµìë ì ê³µí©ëë¤." },
          { q: "ìì±ë íì¤í¸ë¥¼ ê·¸ëë¡ ì¶íí´ë ëëì?", a: "ìë¦¬íìì(Placeholder) ì©ëë¡ ë§ë¤ì´ì§ íì¤í¸ì´ë¯ë¡, ìµì¢ ê²°ê³¼ë¬¼ììë ë°ëì ì¤ì  ìë¯¸ê° ë´ê¸´ ì½íì¸ ë¡ êµì²´í´ì¼ í©ëë¤." }
        ]
      },
    },
ì¤ ììì ìë¯¸íì§ë§, ìµê·¼ìë íëì¨ì´ ì±ë¥ì´ ì¢ìì ¸ ëª¨ë  ììì ìì ë¡­ê² ì¬ì©íìë ë¬´ë°©í©ëë¤." },
          { q: "í¬ëªë(Alpha) ê°ë í¬í¨ëëì?", a: "íì¬ ê¸°ë³¸ ë³íìë 3ì°¨ì ê°ì´ ì ê³µëë©°, RGBAì ê°ì í¬ëªë ì§ì íìì í¥í ì¶ê°ë  ìì ìëë¤." },
          { q: "ì½í¸ë¼ì¤í¸(ëë¹) íì¸ë ê°ë¥íê°ì?", a: "ì íí ë°°ê²½ì ìì í°ì ëë ê²ìì ê¸ìê° ì ë³´ì¼ì§ ì¬ë¶ë¥¼ ìê°ì ì¼ë¡ ë¯¸ë¦¬ íì¸í  ì ììµëë¤." }
        ]
      },
      unitconverter: {
        title: "ë¨ì ë³íê¸° (Professional Unit Converter)",
        description: "ì  ì¸ê³ ë¤ìí ì¸¡ì  íì¤ ê°ì ì°¨ì´ë¥¼ ìë²½íê² í´ê²°íê³  ì¼ìê³¼ ì ë¬¸ ìë¬´ì í¨ì¨ì ëì´ì­ìì¤.",
        seo: "ë¯¸í°ë², ì¼ëíì´ëë² ë± êµ­ê°ë³ ëëí ì°¨ì´ë¥¼ í´ê²°íë ì ë° ë¨ì ë³í ê°ì´ë.",
        longDescription: "ì°ë¦¬ê° ì¬ë ì¸ìì ë¯¸í°ë²(Metric)ê³¼ ì¼ëíì´ëë²(Imperial)ì´ë¼ë ë ê°ì§ ì£¼ì ëëíì´ ê³µì¡´íê³  ììµëë¤. Apps24ì ì ë¬¸ ë¨ì ë³íê¸°ë ì´ë¬í ìì¤í ê°ì ê°ê·¹ì ë©ì°ê¸° ìí´ ì¤ê³ë ê³ ì ë° ê³ì° ëêµ¬ìëë¤. ë¨ìí ì«ìë¥¼ ë°ê¾¸ë ê²ì ëì´, ê³¼íì  ììë¥¼ ê¸°ë°ì¼ë¡ ê¸¸ì´, ë¬´ê², ëì´, ë¶í¼, ì¨ë, ìë ë° ëì§í¸ ë°ì´í°ê¹ì§ 7ê°ì§ ì¹´íê³ ë¦¬ì ìì­ ê°ì§ ë¨ìë¥¼ ì§ìí©ëë¤. í¹í íêµ­ ë¶ëì° ê±°ë ì íìì ì¸ 'í(åª)' ë¨ìì ë¯¸êµ­ì 'ë§ì¼(mile)', 'ë¶ì¸(bushel)' ë± ì§ì­ í¹í ë¨ìê¹ì§ í¬í¨ëì´ ìì´ ì  ì¸ê³ ì´ëìë  ì ì©íê² ì¬ì©í  ì ììµëë¤.",
        usageContext: "í´ì¸ ì§êµ¬ë¥¼ íµí´ êµ¬ë§¤í ìë¥ì ì¬ì´ì¦ë¥¼ íì¸íê±°ë, ìë¦¬ ë ìí¼ì ëì¤ë ììí ë¶í¼ ë¨ìë¥¼ ë³íí´ì¼ í  ë ê°ì¥ ê°ë ¥í ìë ¥ì ë°íí©ëë¤. ëí ê¸°ì  ëë©´ì ë¤ë£¨ë ìì§ëì´, í´ì¸ ì¬í ì¤ ë ì¨ ì ë³´ë¥¼ íìíë ¤ë ì¬íì, í¹ì íêµ ê³¼ì ë¥¼ ìííë íìë¤ìê²ë ì íí ìì¹ë¥¼ ì ê³µí©ëë¤. í¹í 'ë¯¸êµ­ ê°¤ë°'ê³¼ 'ìêµ­ ê°¤ë°'ì²ë¼ ëªì¹­ì ê°ì§ë§ ì¤ì§ì ì¸ ìì´ ë¤ë¥¸ ë³µì¡í ë¨ìë¤ë ëªíí êµ¬ë¶íì¬ ì ê³µíë¯ë¡ ì¤ì ìë ê³ì°ì´ ê°ë¥í©ëë¤.",
        howToUse: "1. ìë¨ í­ìì ë³ííê³ ì íë ì¹´íê³ ë¦¬(ì: ê¸¸ì´, ë¬´ê²)ë¥¼ ì íí©ëë¤.\n2. ì¼ìª½ 'ìë ¥' ì¹¸ì ë³íí  ì«ìë¥¼ ìë ¥í©ëë¤.\n3. ëë¡­ë¤ì´ ë©ë´ë¥¼ íµí´ íì¬ ì¬ì© ì¤ì¸ ë¨ìì ë³ííê³  ì¶ì ëì ë¨ìë¥¼ ê°ê° ì íí©ëë¤.\n4. íë¨ê²°ê³¼ ì°½ì ì¤ìê°ì¼ë¡ íìëë ì íí ë³í ê°ì íì¸íê³  íìí ê²½ì° 'ë³µì¬' ë²í¼ì ëë¦ëë¤.\n5. ì¤ìì â ë²í¼ì ëë¥´ë©´ ìë ¥ ë¨ìë¥¼ ì¦ì ì¤ì(Swap)í  ì ììµëë¤.",
        faq: [
          { q: "ë¯¸í°ë²ê³¼ ì¼ëíì´ëë²ì ì°¨ì´ë ë¬´ìì¸ê°ì?", a: "ë¯¸í°ë²ì 10ì§ë²ì ê¸°ë°ì¼ë¡ íë êµ­ì  íì¤(SI)ì´ë©°, ì¼ëíì´ëë²ì ì¸ì¹, í¼í¸, ë§ì¼ ë±ì ì¬ì©íë ë¯¸êµ­ì íì¤ìëë¤. ë³¸ ëêµ¬ë ë ì²´ê³ ê°ì ì íí íì°ì ì§ìí©ëë¤." },
          { q: "ì¨ë ë³í ì ì¤ì°¨ë ìëì?", a: "ì¨ëë 'ììì 'ê³¼ 'ë¹ì¨'ì´ ëª¨ë ë¤ë¥´ê¸° ëë¬¸ì ë¨ì ê³±ìì´ ìë ì ë°í ë³´ì  ììì ì¬ì©í©ëë¤. ì­ì¨ 0ëë íì¨ 32ëì ê°ì¼ë©°, ë³¸ ëêµ¬ë ììì  10ìë¦¬ê¹ì§ ì ííê² ê³ì°í©ëë¤." },
          { q: "íêµ­ììë§ ì°ë 'í' ë¨ìë ì´ë¤ ê¸°ì¤ì¼ë¡ ê³ì°ëëì?", a: "ì íµì ì¸ 'í'ì ì½ 3.3058 ì ê³±ë¯¸í°ë¥¼ ìë¯¸í©ëë¤. ë¶ëì° íë©´ë ë¶ìì´ë í ì§ ë©´ì  ê³ì° ì ìí´ë¦­ì¼ë¡ ë³íí  ì ììµëë¤." },
          { q: "ë°ì´í° ë¨ì(GB, TB)ë 1000ì¸ê°ì, 1024ì¸ê°ì?", a: "ì»´í¨í° ìì¤íì íì¤ì¸ 1024ì§ë²(Binary)ì ê¸°ë³¸ì¼ë¡ ì¬ì©íì¬, ì¤ì  ì´ìì²´ì ìì íìëë ì©ëê³¼ ì¼ì¹íë ê²°ê³¼ë¥¼ ì ê³µí©ëë¤." },
          { q: "ììì  ìë¦¿ì ì¡°ì ì´ ê°ë¥íê°ì?", a: "ê°ëì±ì ìí´ ê¸°ë³¸ì ì¼ë¡ ììì  10ìë¦¬ê¹ì§ íìëë©°, ë§¤ì° ìê±°ë í° ìì ê²½ì° ê³¼íì  íê¸°ë²ì ëì íì¬ ì íí ìì¹ë¥¼ ì ë¬í©ëë¤." }
        ]
      },
      ruler: {
        title: "ê³ ì ë° ì¨ë¼ì¸ ì (Professional Screen Ruler)",
        description: "íë©´ í´ìëì ê´ê³ìì´ ì ì©ì¹´ë ë³´ì  ê¸°ë¥ì íµí´ ì¤ì  ì¬ë¬¼ì ê¸¸ì´ë¥¼ ììì  ë¨ìê¹ì§ ì ë°íê² ì¸¡ì íì­ìì¤.",
        seo: "ì¤ì  ìê° ìì ë ì ì©í ë¸ë¼ì°ì  ê¸°ë° ê³ ì ë° íë©´ ì¸¡ì  ëêµ¬ ê°ì´ë.",
        longDescription: "ë¬¼ë¦¬ì ì¸ ìê° ê°ìê¸° íìí  ë, Apps24ì ì¨ë¼ì¸ ìë ê°ì¥ ìë²½í ëìì´ ë©ëë¤. ë¨ìí íë©´ì ëê¸ì íìíë ê²ì ëì´, ì  ì¸ê³ ê³µíµ ê·ê²©ì¸ 'ì ì©ì¹´ë'ë¥¼ ì´ì©í ì­ëì  ë³´ì (Dynamic Calibration) ìì¤íì íì¬íê³  ììµëë¤. ì´ë¥¼ íµí´ ì¬ì©ìì ëª¨ëí° í¬ê¸°ë í´ìë ì¤ì ì ìê´ìì´ ì¤ì  1cmì 1ì¸ì¹ë¥¼ ì ííê² êµ¬íí´ ëëë¤. 0ì  ì¤ì ì ìí ëë¸ í´ë¦­ ê¸°ë¥ê³¼ ê°ë¡/ì¸ë¡ ì í ê¸°ë¥ì íµí´ ìì ë¶í, ì°í¸ë¬¼ í¬ê¸°, í¹ì ëìì¸ ììë¬¼ ë±ì ì ë°íê² ì¸¡ì í  ì ììµëë¤.",
        usageContext: "íë°° ììì ê·ê²©ì íì¸íê±°ë, ì¨ë¼ì¸ì¼ë¡ êµ¬ë§¤íë ¤ë ì¡ì¸ìë¦¬ì ì¤ì  í¬ê¸°ë¥¼ ê°ë í´ ë³¼ ë ì ì©í©ëë¤. ëí ê°ë°ìë ëìì´ëê° íë©´ìì í¹ì  ììì ë¬¼ë¦¬ì  í¬ê¸°ë¥¼ íìí´ì¼ í  ë, í¹ì ìíêµêµ¬ ëì©ì¼ë¡ íìë¤ì´ ê¸¸ì´ë¥¼ ê³µë¶í  ëë íë¥­í ëêµ¬ê° ë©ëë¤. ì¤ë§í¸í°ì´ë íë¸ë¦¿ì²ë¼ íë©´ ë°ëê° ëì ê¸°ê¸°ììë ë³´ì  ê¸°ë¥ì íµí´ ì ë¢°í  ì ìë ìì¹ë¥¼ ì»ì ì ììµëë¤.",
        howToUse: "1. íì¤ ì ì©ì¹´ëë ì²´í¬ì¹´ëë¥¼ ì¤ë¹íì¬ íë©´ì ì ëê¸ ìì ê°ë¡ë¡ íííê² ì¬ë ¤ ëìµëë¤.\n2. ì¹´ëì ì¤ì  ê°ë¡ ê¸¸ì´ë¥¼ ìë ¥ì°½ì ë£ê³  'ë³´ì íê¸°'ë¥¼ í´ë¦­íì¬ ëê¸ì ì¤ì  í¬ê¸°ì ë§ì¶¥ëë¤.\n3. ì¸¡ì íë ¤ë ë¬¼ì²´ë¥¼ íë©´ì ëê³  ëê¸ì íì¸í©ëë¤. ìì ìë¬´ ê³³ì´ë 'ëë¸ í´ë¦­'íë©´ ê·¸ ì§ì ì´ 0ì ì´ ëì´ í¸ë¦¬íê² ììì ì ì¡ì ì ììµëë¤.\n4. íìì ë°ë¼ cmì inch ë¨ìë¥¼ ì ííë©° ì¸¡ì ê°ì íì¸íì­ìì¤.",
        faq: [
          { q: "ë³´ì  ìì´ ë°ë¡ ì¬ì©í´ë ëëì?", a: "ê¸°ê¸°ë§ë¤ í½ì ë°ë(PPI)ê° ë¤ë¥´ê¸° ëë¬¸ì ë³´ì  ìì´ ì¬ì©íë©´ ì¤ì°¨ê° ë°ìí  ì ììµëë¤. ì íí ì¸¡ì ì ìí´ ë°ëì í ë²ì ë³´ì  ê³¼ì ì ê±°ì¹ë ê²ì ê¶ì¥í©ëë¤." },
          { q: "ì ì©ì¹´ë ì¸ì ë¤ë¥¸ ë³´ì  ë°©ë²ì ìëì?", a: "íì¤ ì¹´ëì ì¤ì  ê°ë¡ ê¸¸ì´(ì½ 8.56cm)ë¥¼ ìë ¥íë ê²ì´ ê°ì¥ ì íí©ëë¤. ì¹´ëê° ìë¤ë©´ ì¤ì  ìë¡ íë©´ì 1cmë¥¼ ì¬ì´ ê°ì ìë ¥í´ë ë³´ì ì´ ê°ë¥í©ëë¤." },
          { q: "ëª¨ë°ì¼ ê¸°ê¸°ììë ì¬ì© ê°ë¥íê°í¸?", a: "ë¤. ë°ìí ì¹ ê¸°ì ì ì ì©íì¬ ì¤ë§í¸í°ììë ë³´ì  í ì¤ì  í¬ê¸°ë¡ ì¸¡ì íì¤ ì ììµëë¤." },
          { q: "ì¸¡ì  ê°ë¥í ìµë ê¸¸ì´ë ì¼ë§ì¸ê°ì?", a: "ì¬ì©ìì ëª¨ëí° ë¬¼ë¦¬ì  ê°ë¡ ëë¹ê¹ì§ ì¸¡ì í  ì ììµëë¤. ëì¼ ëª¨ëí°ë¥¼ ì¬ì© ì¤ì´ë¼ë©´ ì°½ì íì¥íì¬ ë ê¸¸ê² ì¸¡ì í  ìë ììµëë¤." },
          { q: "0ì (Origin)ì ì´ë»ê² ì´ê¸°ííëì?", a: "ìì ë§¨ ì¼ìª½ ëì í­íê±°ë, ìì ìì ì§ì ì ë¤ì ëë¸ í´ë¦­íì¬ ì¸ì ë ì§ ìë¡ì´ 0ì ì ì¤ì í  ì ììµëë¤." }
        ]
      },
      wordcounter: {
        title: "ê¸ì ì ì¸ê¸° & íì¤í¸ ë¶ìê¸° (Word Counter & Analyzer)",
        description: "ê³µë°± í¬í¨/ì ì¸ ê¸ì ìì ë¨ì´ ì, ê·¸ë¦¬ê³  ì¤ìê° ì¸ë±ì¤ íì¸ê¹ì§ íëì íìíì¬ ìë²½í ìê³ ë¥¼ ìì±íì­ìì¤.",
        seo: "ë¤ì´ë² ë¸ë¡ê·¸, ìê¸°ìê°ì, SEO ë©ííê·¸ ìì±ì ìí ì¤ìê° ê¸ì ì ì¸ê¸° ëêµ¬.",
        longDescription: "ê¸ì°ê¸°ì ê°ì¹ë ë´ì©ë§í¼ì´ë 'íìì ì ì½'ì ë§ì¶ë ë°ììë ëìµëë¤. Apps24ì ê¸ì ì ì¸ê¸°ë ë¨ìí ì«ì ì¹´ì´íì ëì´, ê³µë°± í¬í¨/ì ì¸ ìì¹ë¥¼ ì¤ìê°ì¼ë¡ ë¶ë¦¬ ì ê³µíì¬ ë¤ì´ë² ë¸ë¡ê·¸ í¬ì¤í, ëí ìê¸°ìê°ì, ê³µê³µê¸°ê´ ì ì¶ ìë¥ ë± ìê²©í ê¸ì ì ì íì´ ìë ëª¨ë  ìí©ì ìë²½íê² ëìí©ëë¤. í¹í í¹ì  ê¸ìê° ëª ë²ì§¸ ìì¹ì ìëì§ ìë ¤ì£¼ë 'ì¸ë±ì¤ ì¶ì ' ê¸°ë¥ì íë¡ê·¸ëë° ë°ì´í° ë¶ìì´ë í¹ì  í¤ìë ìì¹ íì¸ ì ë§¤ì° ì ì©íê² íì©ë©ëë¤.",
        usageContext: "êµ¬ê¸ SEO ë©í ì¤ëª(ì½ 160ì ì´ë´)ì´ë ì íë¸ ì ëª©(70ì ì´ë´) ìµì í ìì ì íìì ìëë¤. ëí ë°©ì¡ ëë³¸ ìì± ì ë¶ëì ê°ë íê±°ë, ì¸êµ­ì´ ìì¸ì´ ìì± ì ë¨ì´ ì ì íì ì§ì¼ì¼ íë íìë¤ìê²ë ê¶ì¥ë©ëë¤. íê¸ê³¼ ìë¬¸, ì«ìê° í¼ì©ë íì¤í¸ììë ì íí ì¹´ì´íì ë³´ì¥íë©°, ë¶ì¬ë£ê¸° ì ë¶íìí ììì ì ê±°íê³  ììíê² íì¤í¸ë§ ë¶ìíë¯ë¡ ê²°ê³¼ì ì ë¢°ëê° ëìµëë¤.",
        howToUse: "1. ë¶ìíê³ ì íë íì¤í¸ë¥¼ ìë ¥ì°½ì ìì ë¡­ê² íì´ííê±°ë ë¶ì¬ë£ìµëë¤.\n2. ì¤ìê°ì¼ë¡ ìë°ì´í¸ëë ìë¨ì 'ê³µë°± í¬í¨', 'ê³µë°± ì ì¸' ê¸ì ìì 'ë¨ì´ ì'ë¥¼ íì¸í©ëë¤.\n3. í¹ì  ìì¹ì ê¸ìë¥¼ ì°¾ê³  ì¶ë¤ë©´ 'ê¸ì ìì¹ ì°¾ê¸°' ìë ¥ì°½ì ì¸ë±ì¤ ë²í¸ë¥¼ ë£ì´ ê°ì¡° íìë¥¼ íì¸í©ëë¤.\n4. 'ì ì²´ ë³µì¬' ëë 'ì§ì°ê¸°' ë²í¼ì ì¬ì©íì¬ ë¤ì ììì ì¤ë¹í©ëë¤.",
        faq: [
          { q: "íê¸ í ê¸ìë ëª ê¸ìë¡ ì¹´ì´í¸ëëì?", a: "íì¤ ë°©ìì ë°ë¼ íê¸, ìë¬¸, ì«ì, í¹ìë¬¸ì ëª¨ë 1ê¸ìë¡ ì¹´ì´í¸í©ëë¤. ë°ì´í¸(Byte) ë¨ì ê³ì°ê³¼ë ì°¨ì´ê° ìì ì ììµëë¤." },
          { q: "ìë ¥í  ì ìë íì¤í¸ ìì ì íì´ ìëì?", a: "ë¸ë¼ì°ì  ì±ë¥ì ë°ë¼ ë¤ë¥´ì§ë§ ë³´íµ ìì¤ í ê¶ ë¶ëì íì¤í¸ë ì§ì° ìì´ ì¦ì ë¶ìí  ì ìëë¡ ìµì íëì´ ììµëë¤." },
          { q: "ê³µë°± ì ì¸ ì¹´ì´í¸ìë ì¤ë°ê¿ë ì ì¸ëëì?", a: "ë¤. ê³µë°± ì ì¸ ì¹´ì´í¸ë ëì´ì°ê¸°, í­, ì¤ë°ê¿ ë± ëª¨ë  í¬ëª ë¬¸ìë¥¼ ì ì¸í ìì íì¤í¸ ë¬¸ìì´ì ê¸¸ì´ë¥¼ ì¸¡ì í©ëë¤." },
          { q: "ë¨ì´ ìì ê¸°ì¤ì ë¬´ìì¸ê°ì?", a: "ê³µë°±(Space)ì ê¸°ì¤ì¼ë¡ ëëë ëë¦½ë ë¬¸ì ê·¸ë£¹ì ê°ìë¥¼ ë¨ì´ ìë¡ ê³ì°í©ëë¤." },
          { q: "ìë ¥í ë´ì©ì´ ì´ëê°ë¡ ì ì¡ëëì?", a: "ìëì. ëª¨ë  íì¤í¸ ì²ë¦¬ë ë¡ì»¬ ë¸ë¼ì°ì  ë©ëª¨ë¦¬ìììë§ ìíëë©°, íì´ì§ë¥¼ ìë¡ê³ ì¹¨íë©´ ìì íê² ì­ì ë©ëë¤." }
        ]
      },
      countdown: {
        title: "ëª°ìí ì¹´ì´í¸ë¤ì´ íì´ë¨¸ (Immersion Timer)",
        description: "ë½ëª¨ëë¡ íìµë², ìë¦¬, ë°í ì°ìµ ë± ìê°ì ì ë°íê² ê´ë¦¬íê³  ì±ê³¼ë¥¼ ê·¹ëííì­ìì¤.",
        seo: "ì§ì¤ë ¥ í¥ìì ìí ëì´í¸ ëª¨ë ë° ì ì²´ íë©´ ì§ì ì¨ë¼ì¸ íì´ë¨¸ ê°ì´ë.",
        longDescription: "ì±ê³µì ì¸ ìê° ê´ë¦¬ì íµì¬ì 'ìê°ì  ìë°'ì ê¸ì ì ì¸ ëê¸°ë¶ì¬ë¡ ë°ê¾¸ë ê²ìëë¤. Apps24ì ì¹´ì´í¸ë¤ì´ íì´ë¨¸ë ë¨ìí ìëì ëì´, ììì ìì í ëª°ìí  ì ìëë¡ ëì´í¸ ëª¨ëì ì ì²´ íë©´ ê¸°ë¥ì ì§ìí©ëë¤. ë½ëª¨ëë¡(Pomodoro) íìµë²ì ì¤ì²íë íìë¶í°, ìë¦¬ ìê°ì ì íí ì²´í¬í´ì¼ íë ì°í, ê·¸ë¦¬ê³  ë°í ìê°ì ììí´ì¼ íë ì°ì¬ë¤ì ìí´ ì¤ê³ëììµëë¤. ë¸ë¼ì°ì  í­ì ì´ëí´ë ë°±ê·¸ë¼ì´ëìì ì ííê² ìëíë©°, ìì¸ì±ì´ ë°ì´ë ëìì¸ì¼ë¡ ë©ë¦¬ìë ë¨ì ìê°ì íëì íì¸í  ì ììµëë¤.",
        usageContext: "25ë¶ ì§ì¤, 5ë¶ í´ìì ë½ëª¨ëë¡ ê¸°ë²ì ì¬ì©íì¬ ìë¬´ ìì°ì±ì ëì¬ë³´ì¸ì. ëí íí¸ë ì´ë ì¤ í´ì ìê°ì ìê²©í ì ííê±°ë, ë¼ë©´ì´ë íì¤íë¥¼ ì¶ë ë± ì ë°í ìë¦¬ ìê°ì´ íìí  ë ìì¬ì´ ëì°ë¯¸ê° ë©ëë¤. ì ì²´ íë©´ ëª¨ëë¥¼ ì¼ë©´ ê³µë¶ë°©ì´ë ì¬ë¬´ì¤ìì ê³µì  íì´ë¨¸ë¡ë íì©íê¸° ì¢ìµëë¤. ë°¤ìë ëì´í¸ ëª¨ëë¥¼ íì±ííì¬ ëì í¼ë¡ë¥¼ ìµìííë©° ì§ì¤í  ì ììµëë¤.",
        howToUse: "1. ìê°, ë¶, ì´ ë¨ìë¡ íì´ë¨¸ì ëª©í ìê°ì ì¤ì í©ëë¤.\n2. 'ìì(Start)' ë²í¼ì ëë¬ ì¹´ì´í¸ë¤ì´ì ê°ìí©ëë¤. ìí©ì ë°ë¼ 'ì¼ìì ì§'ë¥¼ ì¬ì©í  ì ììµëë¤.\n3. íìí ê²½ì° 'ëì´í¸ ëª¨ë'ë¥¼ ì¼ì ë°°ê²½ì ì´ë¡ê² íê±°ë, 'ì ì²´ íë©´' ë²í¼ì ëë¬ ìê³ë§ í¬ê² ëìëë¤.\n4. ìê°ì´ ìë£ëë©´ ìë¦¼ìê³¼ í¨ê» ìì ì¢ë£ë¥¼ ìë¦½ëë¤. 'ì´ê¸°í(Reset)'ë¥¼ ëë¬ ë¤ì ììí  ì ììµëë¤.",
        faq: [
          { q: "í­ì ë«ìë íì´ë¨¸ê° ê³ì ìëíëì?", a: "ìëì. ë¸ë¼ì°ì  í­ì ë«ì¼ë©´ íì´ë¨¸ ìëì´ ë©ì¶¥ëë¤. íì§ë§ í­ì ì° ì±ë¡ ë¤ë¥¸ íì´ì§ë¥¼ ë³´ë ë°±ê·¸ë¼ì´ë ìíììë ê³ì ìëí©ëë¤." },
          { q: "ìë¦¼ ìë¦¬ë¥¼ ëê±°ë ì¡°ì í  ì ìëì?", a: "íì¬ ìì¤íì ë³¼ë¥¨ ì¤ì ì ë°ë¥´ê³  ìì¼ë©°, í¥í ë¬´ì ëª¨ë ë° ë¤ìí ìë¦¼ì ì í ê¸°ë¥ì´ ì¶ê°ë  ìì ìëë¤." },
          { q: "ìµë ì¤ì  ê°ë¥í ìê°ì ì¼ë§ì¸ê°ì?", a: "99ìê° 59ë¶ 59ì´ê¹ì§ ì¤ì  ê°ë¥íì¬ ì¥ìê°ì ììì´ë ë°í ê´ë¦¬ìë ì¶©ë¶í©ëë¤." },
          { q: "ëì´í¸ ëª¨ëë ì´ë¤ ì¥ì ì´ ìëì?", a: "ê²ìì ë°°ê²½ì ëë¹ê° ë®ì ììì ì¬ì©íì¬ ëì í¼ë¡ë¥¼ ì¤ì¬ì£¼ë©°, ë°°í°ë¦¬ ìëª¨(OLED íë©´ ê¸°ì¤)ë¥¼ ì ì½íë í¨ê³¼ê° ììµëë¤." },
          { q: "ëª¨ë°ì¼ìì íë©´ì´ êº¼ì§ë©´ íì´ë¨¸ë ë©ì¶ëì?", a: "ëª¨ë°ì¼ ë¸ë¼ì°ì  ì ì±ì ë°ë¼ íë©´ì´ ì ê¸°ë©´ ë°±ê·¸ë¼ì´ë ìëì´ ì íë  ì ìì¼ë¯ë¡, ìë ì¤ìë íë©´ ì¼ì§ ìíë¥¼ ì ì§íë ê²ì ê¶ì¥í©ëë¤." }
        ]
      },
      digitalclock: {
        title: "íì¤í¬ë¦° ëì§í¸ ìê³ (Digital Desk Clock)",
        description: "íì¬ ìê°ì ì¤ê°ëê³  ì¸ë ¨ë ëìì¸ì¼ë¡ íì¸íê³  ë¹ì ì ê³µê°ì ì¤ë§í¸íê² ê¾¸ë©°ë³´ì­ìì¤.",
        seo: "ì¸íë¦¬ì´ ìí ë° ìê° ê´ë¦¬ë¥¼ ìí ì¸ë¡/ê°ë¡ ì ì²´ íë©´ ëì§í¸ ìê³.",
        longDescription: "ëì§í¸ ê¸°ê¸°ë ë§ì§ë§, ë©ë¦¬ìë íëì ë¤ì´ì¤ë ì§ê´ì ì¸ 'ì§ì§ ìê³'ë ìì¸ë¡ ì°¾ê¸° ì´ë µìµëë¤. Apps24ì ëì§í¸ ìê³ë ë¹ì ì íë¸ë¦¿, ë¸í¸ë¶, í¹ì ë¨ë ì¤ë§í¸í°ì ì¸ë ¨ë íììê³ë¡ ë³íìì¼ ì¤ëë¤. 12ìê°ì ì 24ìê°ì  ì í ê¸°ë¥ì ì ê³µíë©°, êµ°ëëê¸° ìë ë¯¸ëë©ë¦¬ì¦ ëìì¸ì ì±ííì¬ ì¬ë¬´ì¤ ì±ì ìë ì¹¨ë ì íí ì´ëìë ì ì´ì¸ë¦½ëë¤. ëí ìë² ìê°ê³¼ ëê¸°íëì´ ê°ì¥ ì íí íì¤ ìê°ì ì ê³µíë¯ë¡ ì¤ìí ì¼ì ì´ë ìê° ì ì²­ ì ì ì¬ì©íê¸°ìë ë¶ì¡±í¨ì´ ììµëë¤.",
        usageContext: "ê³µë¶ë°©ìì ìíìë¤ì ìê° ê´ë¦¬ì©ì¼ë¡ ì¬ì©íê±°ë, ì¤í¼ì¤ íê²½ìì ëí ëª¨ëí° íìª½ì ëìëê³  íë¡ì í¸ ì¼ì ì ê´ë¦¬í  ë ì ì©í©ëë¤. ì´ëì´ ë°¤ìë ëì´í¸ ëª¨ëë¥¼ íì©íì¬ ìë©´ì ë°©í´ëì§ ìë ììí ë¬´ëë± ê²¸ ìê³ë¡ íì©í´ ë³´ì¸ì. ì ì²´ íë©´ ëª¨ëë¥¼ ì¼ë©´ ë¨ë êµ¬í ìì´í¨ëë ê°¤ë­ìí­ì ë©ì§ ì¸íë¦¬ì´ ìê³ë¡ ì¬íì©í  ì ìì´ íê²½ ë³´í¸ì ì¤ì©ì±ì ëìì ì±ê¸¸ ì ììµëë¤.",
        howToUse: "1. ëêµ¬ íì´ì§ì ì ìíë ì¦ì ì¤ìê° íì¬ ìê°ì´ íìë©ëë¤.\n2. ê°ì¸ì ì í¸ì ë§ê² 12H(ì¤ì /ì¤í)ì 24H íì ì¤ íëë¥¼ ì íí©ëë¤.\n3. 'ì ì²´ íë©´' ëª¨ëë¥¼ ëë¬ ëì ëê² í° ìê³ íë©´ì¼ë¡ ì íí©ëë¤.\n4. íë©´ì 'ëì´í¸ ëª¨ë'ë ìì ë³ê²½ ìµì(í¥í ì§ì)ì íµí´ ì£¼ë³ íê²½ê³¼ ì´ì¸ë¦¬ë ì¡°ëë¥¼ ë§ì¶¥ëë¤.",
        faq: [
          { q: "ìê³ì ì¤ì°¨ë ì´ë ì ëì¸ê°ì?", a: "ì¬ì© ê¸°ê¸°ì ìì¤í ìê°ì ê¸°ë°ì¼ë¡ ìëíë©°, ì¼ë°ì ì¼ë¡ ë¤í¸ìí¬ ìê° ìë²(NTP)ì ëê¸°íë ë§¤ì° ì ë°í ìê°ì ë³´ì¬ì¤ëë¤." },
          { q: "ëì´í¸ ëª¨ëìì ë°ê¸° ì¡°ì ì´ ê°ë¥íê°ì?", a: "íì¬ë ë°°ê²½ì ì´ë¡ê² ì²ë¦¬íë ê¸°ë¥ì ì§ìíë©°, ì¤ì  ë°ê¸°ë ê¸°ê¸° ìì²´ì íë©´ ë°ê¸° ì¤ì ì íµí´ ì¡°ì íì¤ ì ììµëë¤." },
          { q: "ì´ ë¨ìê¹ì§ ë³¼ ì ìëì?", a: "ë¤. ìê°ê³¼ ë¶ë¿ë§ ìëë¼ ì´ ë¨ì ë³íê¹ì§ ììíê² íìíì¬ ì ë°í ìê° íì¸ì´ íìí  ë ëìì ëë¦½ëë¤." },
          { q: "ì¤ë§í¸í° ê°ë¡ ëª¨ëë ì§ìíëì?", a: "ë¤. ê¸°ê¸°ë¥¼ ê°ë¡ë¡ ëíë©´ ìëì¼ë¡ ë ì´ììì´ ë³ê²½ëì´ ë ëê² ìê°ì íì¸íì¤ ì ììµëë¤." },
          { q: "ë°°í°ë¦¬ ìëª¨ê° ì¬íì§ ììê°ì?", a: "ì ì ì¸ ëìì¸ê³¼ ìµì íë ì½ëë¡ ë¦¬ìì¤ ì¬ì©ì ìµìííì¬ ë°°í°ë¦¬ í¨ì¨ì ëììµëë¤." }
        ]
      },
      screenlamp: {
        title: "ì¤í¬ë¦° ë¼ì´í¸",
        description: "ì ì²´íë©´ê³¼ ì¬ì©ì ììì¼ë¡ íë©´ ì ì²´ë¥¼ ë¨ì ì¡°ëªì¼ë¡ ë°ê¿ëë¤.",
        longDescription: "ì¤í¬ë¦° ë¼ì´í¸ë ì ì²´ ëì¤íë ì´ë¥¼ ë¶ëë½ê³  ê· ì¼í ê´ìì¼ë¡ ë°ê¿ì¤ëë¤. íë¦¬ì ììì ì ííê±°ë ì»¤ì¤í ììì ê³¨ë¼ ìë²½í ë¶ìê¸°ë¥¼ ì¡°ì±íê±°ë ë¹ì ì¡°ëªì¼ë¡ ì¬ì©í  ì ììµëë¤.",
        usageContext: "ë¶ëë¬ì´ ëìë±, ì´¬ìì© ë°±ë¼ì´í¸ ëë íë©´ í½ì íì¤í¸(ë¶ë íì ì²´í¬) ì ì ì©í©ëë¤.",
        howToUse: "1. íë¦¬ì ììì ì ííê±°ë ì»¬ë¬ í¼ì»¤ë¥¼ ì¬ì©íì¬ ìíë ììì ê³ ë¦ëë¤.\n2. íìì ë°ë¼ ì¡°ëªì ì¡°ì í©ëë¤.\n3. ìµë í¨ê³¼ë¥¼ ìí´ ì ì²´ íë©´ ëª¨ëë¥¼ ì¬ì©í©ëë¤.",
        faq: [{"q":"ë¸ë£¨ë¼ì´í¸ ì°¨ë¨ ê¸°ë¥ì´ ìëì?","a":"ë°ë»í ì¤ë ì§ìì´ë ë¹¨ê°ì ê³ì´ì ì ííì¬ íë©´ììì ë¸ë£¨ë¼ì´í¸ ë°©ì¶ì ìëì¼ë¡ ì¤ì¼ ì ììµëë¤."}]
      },
      qrgenerator: {
        title: "QR ì½ë ìì±ê¸°",
        description: "íì¤í¸, ë§í¬, ì°ë½ì² ë±ì ìí QR ì½ëë¥¼ ìì±íì¸ì.",
        longDescription: "QR ì½ë ìì±ê¸°ë¥¼ ì¬ì©íë©´ íì¤í¸, ë§í¬, ì°ë½ì² ì ë³´ ë° ê¸°í ê°ë¨í ì½íì¸ ì ëí QR ì½ëë¥¼ ë§ë¤ ì ììµëë¤. ë¹ì¦ëì¤, ì´ë²¤í¸, êµì¤, ë ì¤í ë, í¨í¤ì§ ë° ê°ì¸ì ì¸ ê³µì ì ì ì©í©ëë¤. ëª ì´ ë§ì QR ì½ëë¥¼ ìì±íê³  ëì§í¸ ëë ì¸ìì©ì¼ë¡ ë¤ì´ë¡ëí  ì ììµëë¤.",
        usageContext: "QR ì½ëë ì¹ì¬ì´í¸ ë§í¬, ë©ë´ ì¡ì¸ì¤, ì´ë²¤í¸ ì²´í¬ì¸, ì°ë½ì² ê³µì , ê²°ì  ì§ì¹¨ ë° ì í ë¼ë²¨ì íí ì¬ì©ë©ëë¤. QR ì½ëë¥¼ ì¬ì©íë©´ ì¬ì©ìê° ê¸´ íì¤í¸ë¥¼ ìëì¼ë¡ ìë ¥íì§ ìê³ ë íì´ì§ë¥¼ ì´ê±°ë ì ë³´ì ì¡ì¸ì¤í  ì ììµëë¤. ì´ë ì¨/ì¤íë¼ì¸ íê²½ ëª¨ëìì ë§ì°°ì ì¤ì´ê³  ìëµë¥ ì ëì¼ ì ììµëë¤.",
        howToUse: "1. ì¸ì½ë©íë ¤ë íì¤í¸, URL ëë ì½íì¸ ë¥¼ ìë ¥í©ëë¤.\n2. QR ì½ëë¥¼ ìì±í©ëë¤.\n3. ì´ë¯¸ì§ë¥¼ ë¤ì´ë¡ëíì¬ íìí ê³³ì ì¬ì©í©ëë¤.",
        faq: [
          { q: "ì¹ì¬ì´í¸ ë§í¬ì© QR ì½ëë¥¼ ë§ë¤ ì ìëì?", a: "ë¤. URLì ëí QR ì½ëë¥¼ ìì±íì¬ ì¸ìë¬¼ì´ë ëì§í¸ ííë¡ ê³µì í  ì ììµëë¤." },
          { q: "ë¹ì¦ëì¤ ìë£ì QR ì½ëë¥¼ ì¬ì©í  ì ìëì?", a: "ë¤. QR ì½ëë ì ë¨ì§, í¬ì¤í°, ëªí¨, í¨í¤ì§ ë° ë©ë´ì ìì£¼ ì¬ì©ë©ëë¤." },
          { q: "QR ì½ëê° ë§ë£ëëì?", a: "ê³ ì ë ì½íì¸ ë¡ ìì±ë íì¤ QR ì½ëë ìì²´ì ì¼ë¡ ë§ë£ëì§ ììµëë¤. íì§ë§ ì¤ìºì´ ê³ì ìëíë ¤ë©´ ì°ê²°ë ì½íì¸ ê° ê³ì ì ì§ëì´ì¼ í©ëë¤." },
          { q: "ì´ ëêµ¬ë ë¬´ë£ì¸ê°ì?", a: "ë¤. ì¶ê° ìíí¸ì¨ì´ë¥¼ ì¤ì¹íì§ ìê³ ë ì¨ë¼ì¸ìì QR ì½ëë¥¼ ë¬´ë£ë¡ ìì±í  ì ììµëë¤." }
        ]
      },
      barcodegenerator: {
        title: "ë°ì½ë ìì±ê¸°",
        description: "ì í, ì¬ê³  ê´ë¦¬ ë° ì¶ì ì ìí ë°ì½ëë¥¼ ìì±íì¸ì.",
        longDescription: "ë°ì½ë ìì±ê¸°ë ì í, ë¼ë²¨, ì¬ê³ , í¨í¤ì§ ë° ë´ë¶ ì¶ì ì ìí ë°ì½ëë¥¼ ìì±íë ë° ëìì ì¤ëë¤. ìê·ëª¨ ë¹ì¦ëì¤, ì°½ê³ , ì¬ë¬´ì¤, íêµ ë° ì¨ë¼ì¸ìì ë¹ ë¥¸ ë°ì½ë ìì±ì´ íìí ëª¨ë  ì¬ëìê² ì ì©í©ëë¤. ê°ì ìë ¥íê³  ë°ì½ë ì íì ì íí ë¤ì ìì±ë ë°ì½ë ì´ë¯¸ì§ë¥¼ ë¤ì´ë¡ëí  ì ììµëë¤.",
        usageContext: "ë°ì½ëë ìë§¤, ì¬ê³  ê´ë¦¬, ë°°ì¡, ìì° ì¶ì  ë° ë¬¸ì ë¼ë²¨ë§ì ëë¦¬ ì¬ì©ë©ëë¤. ìì´íì ë¹ ë¥´ê² ìë³íê³  ìë ìë ¥ ì¤ë¥ë¥¼ ì¤ì´ë ë° ëìì´ ë©ëë¤. ì¬ë°ë¥¸ íìì ì ííë©´ ì¤ìºë ë° ìí¬íë¡ìì í¸íì±ì ë³´ì¥í  ì ììµëë¤.",
        howToUse: "1. ë°ì½ëì íìí ì«ìë íì¤í¸ë¥¼ ìë ¥í©ëë¤.\n2. ë°ì½ë ììì ì íí©ëë¤.\n3. ë°ì½ë ì´ë¯¸ì§ë¥¼ ìì±íê³  ë¤ì´ë¡ëí©ëë¤.",
        faq: [
          { q: "ë°ì½ë ìì±ê¸°ë ë¬´ìì¸ê°ì?", a: "ë°ì½ë ìì±ê¸°ë ìë ¥í íì¤í¸ë ì«ìë¥¼ ê¸°ë°ì¼ë¡ ê¸°ê³ê° ì½ì ì ìë ì½ëë¥¼ ë§ë­ëë¤." },
          { q: "ì´ë¤ ë°ì½ë ììì ì íí´ì¼ íëì?", a: "ê°ì¥ ì í©í íìì ë°ì½ëê° ì¬ì©ë  ìì¹ì ë°ë¼ ë¤ë¦ëë¤. ìë§¤ ì í, ì¬ê³  ë¼ë²¨ ë° ë°°ì¡ ìì¤íìë ìë¡ ë¤ë¥¸ ë°ì½ë íì¤ì´ íìí  ì ììµëë¤." },
          { q: "ìì±ë ë°ì½ëë¥¼ ì¸ìí  ì ìëì?", a: "ë¤. ë°ì½ëë¥¼ ìì±í í ë¼ë²¨, í¨í¤ì§ ëë ë´ë¶ì©ì¼ë¡ ë¤ì´ë¡ëíì¬ ì¸ìí  ì ììµëë¤." },
          { q: "ìê·ëª¨ ë¹ì¦ëì¤ì ì í©íê°ì?", a: "ë¤. ë¹ ë¥¸ ë°ì½ë ìì±ì´ íìí ìê·ëª¨ ë§¤ì¥, ì°½ê³ , ì¬ë¬´ì¤ ë° ê¸°í íì ì ì©í©ëë¤." }
        ]
      },
      dummytext: { title: "ë¡ë  ìì¨", description: "ë¬¸ë¨ ìë¥¼ ì í´ ìë¦¬íìì íì¤í¸ë¥¼ ìì±í©ëë¤." },
    },
    common: {
      copyAll: "ì ì²´ ë³µì¬",
      clear: "ì§ì°ê¸°",
      sample: "ìí íì¤í¸",
      placeholder: "ì¬ê¸°ì íì¤í¸ë¥¼ ìë ¥íê±°ë ë¶ì¬ë£ì¼ì¸ì...",
      paragraphs: "ë¬¸ë¨ ì",
      generatedText: "ìì±ë íì¤í¸",
      charCountWithSpaces: "ê¸ì ì (ê³µë°± í¬í¨)",
      charCountWithoutSpaces: "ê¸ì ì (ê³µë°± ì ì¸)",
      whichPosition: "ì°¾ê³  ì¶ì ê¸ì ìì¹ë ì´ëì¸ê°ì?",
      backToTools: "ì ì²´ ëêµ¬ë¡ ëìê°ê¸°",
      copied: "í´ë¦½ë³´ëì ë³µì¬ëììµëë¤!",
      languageSelect: "ì½íì¸  ì¸ì´ ì í",
      highlightHelp: "* ì§ì ë ì¸ë±ì¤ì ê¸ìê° ìë¨ ìë ¥ì°½ ë´ìì ì¤ìê°ì¼ë¡ ê°ì¡°ëì´ íìë©ëë¤.",
      allTools: "ëª¨ë  ëêµ¬",
      footerNote1: "ì´ ëêµ¬ë apps24 ì í¸ë¦¬í° ì íêµ°ì ì¼ë¶ìëë¤.",
      footerNote2: "ëª¨ë  ì²ë¦¬ë ê°ì¸ ì ë³´ ë³´í¸ì ìëë¥¼ ìí´ ë¸ë¼ì°ì ìì ë¡ì»¬ë¡ ìíë©ëë¤.",
      koLabel: "íêµ­ì´",
      enLabel: "ìì´",
      textCategory: "íì¤í¸",
      utilityCategory: "ì í¸ë¦¬í°",
      positionPlaceholder: "ìì¹",
      twelveHour: "12ìê°",
      twentyFourHour: "24ìê°",
      fontSize: "í¬ê¸°",
      customColor: "ì í",
      presetColors: "íë¦¬ì",
      homeTitle: "ë¹ ë¥¸ ë¤êµ­ì´ ëêµ¬ ëª¨ì",
      homeSubtitle: "Apps24ë ë¶íìí ê³¼ì  ìì´ ë¹ ë¥´ê³  ê°ë¨íë©° ì¤ì©ì ì¸ ëêµ¬ë¥¼ ìíë ì¬ëë¤ì ìí´ ë§ë¤ì´ì§ ë¤êµ­ì´ ì¨ë¼ì¸ ëêµ¬ ì¹ì¬ì´í¸ìëë¤.",
      homeIntro1: "Apps24ë ë¶íìí ê³¼ì  ìì´ ë¹ ë¥´ê³  ê°ë¨íë©° ì¤ì©ì ì¸ ëêµ¬ë¥¼ ìíë ì¬ëë¤ì ìí´ ë§ë¤ì´ì§ ë¤êµ­ì´ ì¨ë¼ì¸ ëêµ¬ ì¹ì¬ì´í¸ìëë¤. ìì ììì ìí´ ìíí¸ì¨ì´ë¥¼ ë¤ì´ë¡ëíê±°ë ê³ì ì ë§ë¤ íì ìì´, ì¬ì©ìë íì´ì§ë¥¼ ì´ê³  ì¦ì ëêµ¬ë¥¼ ì¬ì©í´ ëª ë²ì í´ë¦­ë§ì¼ë¡ ê²°ê³¼ë¥¼ ì»ì ì ììµëë¤.",
      homeIntro2: "ì°ë¦¬ì ëª©íë ë¤ìí ì¬ì©ìë¤ì´ ì¼ìì ì¸ ëì§í¸ ììì ë ì½ê² ì²ë¦¬í  ì ìëë¡ ëë ê²ìëë¤. ë¨ì´ ìë¥¼ íì¸íë íì, ë§í¬ë ì½íì¸ ë¥¼ ì¤ë¹íë ë§ì¼í°, JSONì´ë Base64 ë°ì´í°ë¥¼ íì¸íë ê°ë°ì, ììì ë¤ë£¨ë ëìì´ë, QR ì½ëì ë°ì½ëë¥¼ ë§ëë ì¬ììê¹ì§, Apps24ë ë¹ ë¥´ê² ì ê·¼í  ì ìê³  ì½ê² ì´í´í  ì ìë ê°ë²¼ì´ ëêµ¬ë¥¼ ì ê³µí©ëë¤.",
      homeAboutTitle: "Apps24 ìê°",
      homeWhatYouCanDoTitle: "Apps24ìì í  ì ìë ì¼",
      homeWhatYouCanDoBody: "Apps24ë íì¤í¸, ì´ë¯¸ì§, ìì, ìê°ì  ì í¸ë¦¬í°, ê¸°ì  ììì ìí ì ì©í ë¸ë¼ì°ì  ê¸°ë° ëêµ¬ë¤ì íê³³ì ëª¨ì ì ê³µí©ëë¤. ì´ë¯¸ì§ ìì¶, íì¤í¸ ëìë¬¸ì ë³í, JSON ê²ì¦, ë¹ë°ë²í¸ ìì±, íì¤í¸ ì°¨ì´ ë¹êµ, Base64 ì¸ì½ë© ë° ëì½ë©, QR ì½ë ìì±, ë°ì½ë ìì± ë± ë¤ìí ììì ìíí  ì ììµëë¤. ì´ ëêµ¬ë¤ì ì§§ê³  ì§ì¤ë ììì ìí´ ì¤ê³ëì´, ë³µì¡í ì¸í°íì´ì¤ë¥¼ íìíë ëì  ê¹ëí ë ì´ììê³¼ ë¨ìí íë¦ì íµí´ í ë²ì íëì ë¬¸ì ë¥¼ ë¹ ë¥´ê² í´ê²°í  ì ììµëë¤.",
      homeWhyUsersChooseTitle: "ì¬ì©ìê° Apps24ë¥¼ ì ííë ì´ì ",
      homeWhyUsersChoosePoints: [
        "ì¬ì©íê¸° ì¬ì´ ê°ë¨í ì¸í°íì´ì¤",
        "ë¹ ë¥¸ ììì ìí ë¸ë¼ì°ì  ê¸°ë° ëêµ¬",
        "ì  ì¸ê³ ì¬ì©ìë¥¼ ìí ë¤êµ­ì´ ì ê·¼ì±",
        "ì¤ì  íìì ë§ë ì¤ì©ì ì¸ ì í¸ë¦¬í°",
      ],
      homeOngoingFocusTitle: "ì¼ìì ì¸ ì¬ì©ì ìí´ ì¤ê³ë¨",
      homeOngoingFocusBody: "Apps24ë ì¼ìì ì¸ ìë¬´, íìµ, ì¨ë¼ì¸ íëìì ìì£¼ íìí ë¤ìí ëì§í¸ ììì ìí´ ì¤ê³ëììµëë¤. ì´ë¤ ì¬ì©ìë êµ¬ì¡°íë ë°ì´í°ë ì¸ì½ë©ì ìí ê¸°ì  ëêµ¬ê° íìíê³ , ë ë¤ë¥¸ ì¬ì©ìë ê¸ì°ê¸°, ìì ì ë¦¬, ê²ìë¥¼ ìí ì½íì¸  ëêµ¬ê° íìí©ëë¤. ëí QR ì½ë, ë°ì½ë, ë¹ë°ë²í¸ ìì± ê°ì ì¤ì©ì ì¸ ìì± ëêµ¬ë¥¼ ì°¾ë ì¬ì©ìë ììµëë¤. ì´ë¬í ì í¸ë¦¬í°ë¥¼ íê³³ì ëª¨ìì¼ë¡ì¨ Apps24ë ìê°ì ì ì½íê³  ë¶íìí ìíí¸ì¨ì´ ì¬ì©ì ì¤ì´ë ë° ëìì ì¤ëë¤. ëë¶ë¶ì ëêµ¬ë ë°ì¤í¬í±ê³¼ ëª¨ë°ì¼ ë¸ë¼ì°ì ìì ì§ì  ìëíë©°, ì¬ì´í¸ë ìë¡ì´ ëêµ¬ì ë ëì ì½íì¸ ë¥¼ ê³ì ì¶ê°íë©° ì±ì¥íê³  ììµëë¤.",
      rulerHowTo: "ì¨ë¼ì¸ ì ì¬ì©ë²",
      rulerStep1: "ì ì©ì¹´ëë¥¼ ê°ë¡ë¡ 0ì  íì ë¶ë¶ì ëìµëë¤.",
      rulerStep2: "ì¹´ëì ì¤ì  ëë¹ë¥¼ ìë ¥íê³  'ë³´ì ' ë²í¼ì ëë¦ëë¤.",
      rulerStep3: "ì´ì  ìíë ë¬¼ì²´ë¥¼ ì¸¡ì í  ì ììµëë¤.",
      rulerEnterCardWidth: "ì ì©ì¹´ë ëë¹ë¥¼ ìë ¥íì¸ì",
      rulerExample: "ìì: ëë¹ê° 10.4 cmì¸ ê²½ì° 10.4 ìë ¥",
      rulerTip: "í: ì ìì ìë¬´ ê³³ì´ë ëë¸ í´ë¦­(ëë ëë¸ í­)íë©´ ê·¸ ì§ì ì´ 0ì ì¼ë¡ ì¤ì ë©ëë¤. ì°ì¸¡ íë¨ íëì í¸ë¤ë¡ í¬ê¸°ë¥¼ ì¡°ì íì¸ì.",
      calibrate: "ë³´ì íê¸°",
      changeTo: "ë¨ì ë³ê²½:",
      exitFullscreen: "ì ì²´íë©´ ì¢ë£",
      fullscreen: "ì ì²´íë©´",
      frLabel: "íëì¤ì´",
      jaLabel: "ì¼ë³¸ì´",
      zhLabel: "ì¤êµ­ì´(ê°ì²´)",
      zhTWLabel: "ì¤êµ­ì´(ë²ì²´)",
      ptLabel: "í¬ë¥´í¬ê°ì´",
      esLabel: "ì¤íì¸ì´",
      deLabel: "ëì¼ì´",
      arLabel: "ìëì´",
      about: "ìê°",
      privacy: "ê°ì¸ì ë³´ì²ë¦¬ë°©ì¹¨",
      terms: "ì´ì©ì½ê´",
      contact: "ë¬¸ìíê¸°",
      seoTitle: "ì ë¬¸ê° ê°ì´ë",
      aboutPrefix: "ì´ ë¬´ë£ ì¨ë¼ì¸ ëêµ¬ë...",
      imageCategory: "ì´ë¯¸ì§",
      securityCategory: "ë³´ì",
      timeCategory: "ìê°",
      displayCategory: "ëì¤íë ì´",
      measurementCategory: "ì¸¡ì ",
      generatorCategory: "ìì±ê¸°",
      uploadImage: "ìë¡ë",
      compress: "ìì¶",
      convertToWebP: "WebP ë³í",
      download: "ë¤ì´ë¡ë",
      reset: "ì´ê¸°í",
      original: "ìë³¸",
      compressed: "ìì¶ë¨",
      size: "í¬ê¸°",
      format: "JSON í¬ë§·í",
      validate: "ê²ì¦",
      generatePassword: "ë¹ë°ë²í¸ ìì±",
      length: "ê¸¸ì´",
      includeUppercase: "ëë¬¸ì",
      includeLowercase: "ìë¬¸ì",
      includeNumbers: "ì«ì",
      includeSymbols: "ê¸°í¸",
      compare: "ë¹êµ",
      whatIs: "{0}ì´ë ë¬´ìì¸ê°ì?",
      whenToUse: "ì´ ëêµ¬ë ì¸ì  ì¬ì©íëì?",
      howToUseTitle: "{0} ì¬ì© ë°©ë²",
      faqTitle: "ìì£¼ ë¬»ë ì§ë¬¸",
      howItWorks: "ìë ìë¦¬",
      unitLength: "ê¸¸ì´",
      unitWeight: "ë¬´ê²",
      unitArea: "ëì´",
      unitVolume: "ë¶í¼",
      unitTemperature: "ì¨ë",
      unitSpeed: "ìë",
      unitDigital: "ë°ì´í°",
      from: "ë³í ê°",
      to: "ê²°ê³¼ ê°",
      unitAccuracyNote: "* êµ­ì  íì¤ ê³ìë¥¼ ì¬ì©í ê³ ì ë° ë³í ê²°ê³¼ìëë¤. ê°ëì±ì ìí´ ììì  10ìë¦¬ê¹ì§ íìë©ëë¤.",
    },
  },
  fr: {
    tools: {
      imagecompressor: {
        title: "Compresseur d'images / Convertisseur WebP",
        description: "RÃ©duisez la taille des fichiers image et convertissez en WebP pour de meilleures performances web.",
        seo: "Compresser et convertir en WebP.",
        longDescription: "Notre compresseur d'images gratuit vous aide Ã  rÃ©duire la taille des fichiers image en quelques secondes, sans installer de logiciel. Vous pouvez Ã©galement convertir des images en format WebP pour de meilleures performances web. Cet outil est utile pour les blogueurs, les propriÃ©taires de boutiques en ligne, les Ã©tudiants, les spÃ©cialistes du marketing et toute personne ayant besoin d'images Ã  chargement rapide.",
        usageContext: "La compression d'images est utile lorsque vous souhaitez amÃ©liorer la vitesse des pages, rÃ©duire l'utilisation du stockage ou respecter les limites de taille de fichier pour les sites Web et les e-mails. Des images plus petites amÃ©liorent Ã©galement l'expÃ©rience utilisateur sur les appareils mobiles. WebP est un format d'image moderne conÃ§u pour offrir des fichiers plus petits tout en conservant une bonne qualitÃ© visuelle.",
        howToUse: "1. TÃ©lÃ©chargez votre fichier image.\n2. Choisissez de compresser l'image ou de la convertir en WebP.\n3. PrÃ©visualisez le rÃ©sultat et tÃ©lÃ©chargez le fichier optimisÃ©.",
        faq: [
          { q: "Cet outil est-il gratuit ?", a: "Oui. Vous pouvez compresser et convertir des images en ligne gratuitement." },
          { q: "Quels types de fichiers sont pris en charge ?", a: "Les formats d'image web courants tels que JPG et PNG sont gÃ©nÃ©ralement pris en charge." },
          { q: "La qualitÃ© de l'image changera-t-elle aprÃ¨s la compression ?", a: "Certaines mÃ©thodes de compression peuvent lÃ©gÃ¨rement rÃ©duire la qualitÃ©, mais l'objectif est de conserver l'image visuellement utile tout en rÃ©duisant la taille du fichier." },
          { q: "Pourquoi convertir les images en WebP ?", a: "Les fichiers WebP sont souvent plus petits que JPG ou PNG, ce qui les rend utiles pour les sites Web et les blogs." }
        ]
      },
      caseconverter: {
        title: "Convertisseur de casse",
        description: "Changez le texte en majuscules, minuscules ou format titre.",
        seo: "Convertir le texte en majuscules ou minuscules.",
        longDescription: "Le Convertisseur de casse est un outil en ligne simple qui transforme le texte en majuscules, minuscules ou format titre. Il est utile pour Ã©diter des titres, corriger la mise en forme, prÃ©parer des documents et nettoyer du texte pour des sites Web, des e-mails et des rapports.",
        usageContext: "Cet outil est utile pour corriger les titres, prÃ©parer des titres d'articles, formater du texte marketing, nettoyer du texte importÃ© ou standardiser du contenu avant publication.",
        howToUse: "1. Collez ou saisissez votre texte dans la zone de saisie.\n2. SÃ©lectionnez le format souhaitÃ© : majuscules, minuscules ou format titre.\n3. Copiez le rÃ©sultat converti.",
        faq: [
          { q: "Qu'est-ce que le format titre (Title Case) ?", a: "Le format titre est un style d'Ã©criture oÃ¹ les mots importants commencent par une majuscule. Il est couramment utilisÃ© pour les titres d'articles et les en-tÃªtes." },
          { q: "Puis-je convertir un texte long ?", a: "Oui. Vous pouvez convertir des textes courts ou longs directement dans l'outil." },
          { q: "Est-ce utile pour les titres SEO ?", a: "Oui. Cela peut vous aider Ã  formater les titres de page et les en-tÃªtes de maniÃ¨re cohÃ©rente." },
          { q: "Cet outil fonctionne-t-il pour des langues autres que l'anglais ?", a: "Il fonctionne mieux pour les langues Ã  alphabet latin, notamment le franÃ§ais, l'anglais et l'allemand." }
        ]
      },
      jsonformatter: {
        title: "Formateur et validateur JSON",
        description: "Nettoyez, organisez et validez des donnÃ©es JSON.",
        seo: "Formater et valider du JSON.",
        longDescription: "Le Formateur et validateur JSON vous aide Ã  nettoyer, organiser et vÃ©rifier des donnÃ©es JSON en ligne. Il est utile pour les dÃ©veloppeurs, les testeurs, les Ã©tudiants et les utilisateurs d'API qui ont besoin d'une sortie JSON lisible ou souhaitent trouver rapidement des erreurs de syntaxe.",
        usageContext: "Le JSON brut est souvent difficile Ã  lire, surtout lorsqu'il est compressÃ© sur une seule ligne. Le formatage ajoute une indentation et une structure appropriÃ©es, facilitant le dÃ©bogage et le partage. Une petite erreur de syntaxe dans JSON peut casser une requÃªte API ou un fichier de configuration.",
        howToUse: "1. Collez votre JSON dans la zone de saisie.\n2. Cliquez sur le bouton de formatage ou de validation.\n3. Consultez le rÃ©sultat formatÃ© ou vÃ©rifiez le message d'erreur.",
        faq: [
          { q: "Qu'est-ce que le JSON ?", a: "JSON signifie JavaScript Object Notation. C'est un format courant pour stocker et Ã©changer des donnÃ©es structurÃ©es." },
          { q: "Cet outil peut-il corriger automatiquement un JSON invalide ?", a: "Il peut aider Ã  identifier les problÃ¨mes de formatage, mais certaines erreurs doivent Ãªtre corrigÃ©es manuellement." },
          { q: "Pourquoi mon JSON est-il invalide ?", a: "Les raisons courantes incluent des virgules manquantes, des crochets incorrects ou l'utilisation de guillemets simples au lieu de doubles." },
          { q: "Cet outil est-il rÃ©servÃ© aux dÃ©veloppeurs ?", a: "Non. Il est Ã©galement utile pour les Ã©tudiants, les analystes et toute personne travaillant avec des donnÃ©es JSON." }
        ]
      },
      passwordgenerator: {
        title: "GÃ©nÃ©rateur de mot de passe",
        description: "GÃ©nÃ©rez instantanÃ©ment des mots de passe forts et alÃ©atoires.",
        seo: "GÃ©nÃ©rez instantanÃ©ment des mots de passe forts dans votre navigateur. Cet outil gratuit vous aide Ã  crÃ©er des mots de passe sÃ©curisÃ©s avec des options personnalisables.",
        longDescription: "Le GÃ©nÃ©rateur de mot de passe est un outil en ligne simple qui aide les utilisateurs Ã  crÃ©er des mots de passe forts et alÃ©atoires pour des comptes personnels, professionnels et commerciaux. ConÃ§u pour les personnes souhaitant une mÃ©thode plus rapide et sÃ©curisÃ©e que la rÃ©utilisation de combinaisons faibles.",
        usageContext: "Utilisez cet outil lors de la crÃ©ation d'un nouveau compte, du remplacement d'un ancien mot de passe ou de l'amÃ©lioration de la sÃ©curitÃ© d'un compte existant.",
        howToUse: "1. Choisissez la longueur du mot de passe.\n2. SÃ©lectionnez les types de caractÃ¨res (majuscules, minuscules, chiffres, symboles).\n3. Cliquez sur GÃ©nÃ©rer.\n4. Copiez et enregistrez dans un endroit sÃ©curisÃ©.",
        faq: [
          { q: "Pourquoi utiliser un gÃ©nÃ©rateur?", a: "Il crÃ©e des mots de passe plus forts et moins prÃ©visibles que ceux faits manuellement." },
          { q: "Qu'est-ce qui rend un mot de passe plus fort?", a: "Un mot de passe long avec lettres, chiffres et symboles est plus difficile Ã  deviner." },
          { q: "Puis-je utiliser le mÃªme mot de passe partout?", a: "Non, il est plus sÃ»r d'utiliser un mot de passe diffÃ©rent pour chaque compte." },
          { q: "OÃ¹ stocker les mots de passe gÃ©nÃ©rÃ©s?", a: "Un gestionnaire de mots de passe fiable est la meilleure option." }
        ]
      },
      textdiffchecker: { title: "Comparateur de texte", description: "Comparer des textes", seo: "Trouver des diffÃ©rences entre deux textes." },
      base64encoder: {
        title: "Encodeur / DÃ©codeur Base64",
        description: "Convertissez du texte en Base64 ou dÃ©codez instantanÃ©ment.",
        seo: "Encodeur et dÃ©codeur Base64 rapide et fiable. Convertissez du texte brut ou dÃ©codez des chaÃ®nes Base64 instantanÃ©ment.",
        longDescription: "L'Encodeur/DÃ©codeur Base64 est un utilitaire basÃ© sur le navigateur qui convertit du texte brut au format Base64 et dÃ©code les chaÃ®nes Base64 en texte lisible. Utile pour le dÃ©veloppement, les tests, les API et les tÃ¢ches d'encodage simples.",
        usageContext: "Encodez du texte pour le transfert via des systÃ¨mes textuels, inspectez des valeurs Base64 ou dÃ©codez du contenu encodÃ©.",
        howToUse: "1. Saisissez ou collez votre texte.\n2. Cliquez sur Encoder ou DÃ©coder.\n3. VÃ©rifiez le rÃ©sultat dans la zone de sortie.\n4. Cliquez sur Copier pour utiliser le rÃ©sultat.",
        faq: [
          { q: "Base64 est-il une forme de chiffrement?", a: "Non. C'est une mÃ©thode d'encodage pour la reprÃ©sentation des donnÃ©es, pas un systÃ¨me de sÃ©curitÃ©." },
          { q: "Quand Base64 est-il utilisÃ©?", a: "Dans les API, les e-mails, l'intÃ©gration HTML/CSS, le transport de donnÃ©es et la documentation technique." },
          { q: "Peut-il dÃ©coder n'importe quelle chaÃ®ne Base64?", a: "Il peut dÃ©coder le Base64 valide. Les entrÃ©es invalides peuvent Ã©chouer." },
          { q: "Uniquement pour les dÃ©veloppeurs?", a: "Non, aussi pour les Ã©tudiants, analystes, marketeurs et autres utilisateurs." }
        ]
      },
      colorconverter: {
        title: "Convertisseur de Code Couleur",
        description: "Convertissez instantanÃ©ment les valeurs de couleur HEX, RGB et HSL.",
        seo: "Convertissez instantanÃ©ment les valeurs de couleur HEX, RGB et HSL. Utile pour le design web, les systÃ¨mes UI et le dÃ©veloppement front-end.",
        longDescription: "Le Convertisseur de Code Couleur aide les utilisateurs Ã  convertir des valeurs de couleur entre les formats HEX, RGB et HSL. Utile pour le web design, le dÃ©veloppement front-end, le branding et tout projet nÃ©cessitant de la cohÃ©rence des couleurs.",
        usageContext: "Convertissez une couleur, vÃ©rifiez les valeurs correspondantes pour des systÃ¨mes de design ou copiez des codes couleurs dans CSS.",
        howToUse: "1. Entrez une valeur HEX ou utilisez le sÃ©lecteur de couleurs.\n2. Affichez instantanÃ©ment les valeurs HEX, RGB et HSL converties.\n3. Cliquez sur Copier Ã  cÃ´tÃ© de la valeur souhaitÃ©e.\n4. Cliquez sur RÃ©initialiser pour commencer avec une nouvelle couleur.",
        faq: [
          { q: "DiffÃ©rence entre HEX, RGB et HSL?", a: "HEX est courant en web design, RGB est basÃ© sur les valeurs de lumiÃ¨re, HSL reprÃ©sente teinte, saturation et luminositÃ©." },
          { q: "Pour qui est-il utile?", a: "Designers, dÃ©veloppeurs, marketeurs, Ã©tudiants et toute personne travaillant avec des couleurs numÃ©riques." },
          { q: "Utilisable en CSS?", a: "Oui. HEX, RGB et HSL sont tous communÃ©ment utilisÃ©s en CSS." },
          { q: "VÃ©rification rapide de couleurs?", a: "Oui. SÃ©lectionnez visuellement et obtenez les valeurs converties immÃ©diatement." }
        ]
      },
      unitconverter: {
        title: "Convertisseur d'unitÃ©s",
        description: "Convertissez les unitÃ©s de longueur, poids, tempÃ©rature et plus encore.",
        longDescription: "Notre convertisseur d'unitÃ©s est un outil de haute prÃ©cision conÃ§u pour vous aider Ã  passer rapidement d'un systÃ¨me de mesure Ã  l'autre.",
        howToUse: "1. SÃ©lectionnez une catÃ©gorie.\n2. Entrez la valeur.\n3. Choisissez les unitÃ©s.\n4. Obtenez le rÃ©sultat.",
        faq: [{ q: "Est-ce prÃ©cis?", a: "Oui, nous utilisons des constantes scientifiques standard." }]
      },
      ruler: {
        title: "RÃ¨gle en ligne",
        description: "Mesurez les distances Ã  l'Ã©cran avec Ã©talonnage par carte de crÃ©dit.",
        longDescription: "The Online Ruler is a high-precision measurement tool that allows you to measure objects directly on your screen. It features zero-point adjustment and calibration against standard objects like credit cards to ensure accuracy regardless of your screen resolution or size.",
        usageContext: "Perfect for designers, hobbyists, or anyone needing quick measurements of small physical objects or screen elements when a physical ruler isn't handy.",
        howToUse: "1. Select your preferred unit (cm or inch).\n2. Calibrate by entering the width of a standard object (like a credit card).\n3. Double-click on the ruler to set a zero point.\n4. Place your object against the screen to measure.",
        faq: [{"q":"How accurate is the screen ruler?","a":"Accuracy depends on calibration. Since screen sizes and resolutions vary, calibrating with a physical object (like a credit card) is essential for precision."}]
      },
      wordcounter: {
        title: "Compteur de mots",
        description: "Comptez les caractÃ¨res et les mots en temps rÃ©el.",
        longDescription: "Word Counter is a real-time text analysis tool that calculates the number of words, characters, and spaces in your text. It also provides detailed breakdowns such as character count without spaces and specific character positioning.",
        usageContext: "Essential for writers, students, and SEO professionals who need to meet specific length requirements for essays, articles, social media posts, or meta descriptions.",
        howToUse: "1. Type or paste your text into the input field.\n2. View the automatically updated counts below.\n3. Use the character position finder to locate specific indices in your text.",
        faq: [{"q":"Is there a limit to the text size?","a":"Our word counter can handle large volumes of text (up to hundreds of thousands of characters) efficiently within your browser."}]
      },
      countdown: { title: "Compte Ã  rebours", description: "RÃ©glez une minuterie avec mode plein Ã©cran et nuit." },
      digitalclock: { title: "Horloge numÃ©rique", description: "Consultez l'heure actuelle en temps rÃ©el." },
      screenlamp: { title: "Lampe d'Ã©cran", description: "Transformez votre Ã©cran en une source lumineuse colorÃ©e." },
      qrgenerator: {
        title: "GÃ©nÃ©rateur de QR Code",
        description: "CrÃ©ez des QR codes pour des liens, du texte et des contacts.",
        longDescription: "Le gÃ©nÃ©rateur de QR Code vous permet de crÃ©er des QR codes pour du texte, des liens, des coordonnÃ©es et d'autres contenus simples. Il est utile pour les entreprises, les Ã©vÃ©nements, les restaurants et le partage personnel. Vous pouvez gÃ©nÃ©rer un QR code en quelques secondes et le tÃ©lÃ©charger pour une utilisation numÃ©rique ou imprimÃ©e.",
        usageContext: "Les QR codes sont couramment utilisÃ©s pour les liens vers des sites Web, l'accÃ¨s aux menus, le partage de contacts et les Ã©tiquettes produit. Un QR code facilite l'ouverture d'une page ou l'accÃ¨s Ã  des informations sans avoir Ã  taper manuellement de longs textes, rÃ©duisant ainsi les frictions en ligne et hors ligne.",
        howToUse: "1. Entrez le texte, l'URL ou le contenu que vous souhaitez encoder.\n2. GÃ©nÃ©rez le QR code.\n3. TÃ©lÃ©chargez et utilisez l'image lÃ  oÃ¹ vous en avez besoin.",
        faq: [
          { q: "Puis-je crÃ©er un QR code pour un lien de site Web ?", a: "Oui. Vous pouvez gÃ©nÃ©rer un QR code pour une URL et le partager sous forme imprimÃ©e ou numÃ©rique." },
          { q: "Puis-je utiliser des QR codes pour des supports commerciaux ?", a: "Oui. Les QR codes sont souvent utilisÃ©s sur les flyers, les affiches, les cartes de visite, les emballages et les menus." },
          { q: "Les QR codes expirent-ils ?", a: "Un QR code standard gÃ©nÃ©rÃ© Ã  partir d'un contenu fixe n'expire pas en soi. Cependant, le contenu de destination doit rester disponible pour que les scans continuent Ã  fonctionner." },
          { q: "Cet outil est-il gratuit ?", a: "Oui. Vous pouvez gÃ©nÃ©rer des QR codes en ligne sans installer de logiciel supplÃ©mentaire." }
        ]
      },
      barcodegenerator: {
        title: "GÃ©nÃ©rateur de code-barres",
        description: "CrÃ©ez des codes-barres pour les produits, Ã©tiquettes et inventaires.",
        longDescription: "Le gÃ©nÃ©rateur de code-barres vous aide Ã  crÃ©er des codes-barres pour les produits, les Ã©tiquettes, l'inventaire, les emballages et le suivi interne. Il est utile pour les petites entreprises, les entrepÃ´ts, les bureaux et toute personne ayant besoin d'une gÃ©nÃ©ration rapide de codes-barres en ligne.",
        usageContext: "Les codes-barres sont largement utilisÃ©s dans le commerce de dÃ©tail, le contrÃ´le des stocks, l'expÃ©dition et l'Ã©tiquetage de documents. Ils permettent d'identifier les articles rapidement et de rÃ©duire les erreurs de saisie manuelle. Choisir le bon format garantit la compatibilitÃ© avec les scanners.",
        howToUse: "1. Entrez le numÃ©ro ou le texte requis pour votre code-barres.\n2. SÃ©lectionnez le format du code-barres.\n3. GÃ©nÃ©rez et tÃ©lÃ©chargez l'image du code-barres.",
        faq: [
          { q: "Qu'est-ce qu'un gÃ©nÃ©rateur de code-barres ?", a: "Un gÃ©nÃ©rateur de code-barres crÃ©e un code lisible par machine basÃ© sur le texte ou les chiffres que vous saisissez." },
          { q: "Quel format de code-barres dois-je choisir ?", a: "Le meilleur format dÃ©pend de l'endroit oÃ¹ le code-barres sera utilisÃ©. Les produits de vente au dÃ©tail, les Ã©tiquettes d'inventaire et les systÃ¨mes d'expÃ©dition peuvent nÃ©cessiter des normes diffÃ©rentes." },
          { q: "Puis-je imprimer le code-barres gÃ©nÃ©rÃ© ?", a: "Oui. AprÃ¨s avoir gÃ©nÃ©rÃ© le code-barres, vous pouvez le tÃ©lÃ©charger et l'imprimer pour des Ã©tiquettes ou un usage interne." },
          { q: "Cet outil est-il adaptÃ© aux petites entreprises ?", a: "Oui. Il est utile pour les petits magasins, entrepÃ´ts, bureaux et autres Ã©quipes qui ont besoin de crÃ©er des codes-barres rapidement." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "GÃ©nÃ©rez des paragraphes de texte de remplacement." },
    },
    common: {
      copyAll: "Tout copier",
      clear: "Effacer",
      sample: "Texte d'exemple",
      placeholder: "Collez ou tapez votre texte ici...",
      paragraphs: "Paragraphes",
      generatedText: "Texte gÃ©nÃ©rÃ©",
      charCountWithSpaces: "Nombre de caractÃ¨res (avec espaces)",
      charCountWithoutSpaces: "Nombre de caractÃ¨res (sans espaces)",
      whichPosition: "Quelle position de caractÃ¨re voulez-vous trouver?",
      backToTools: "Retour aux outils",
      copied: "CopiÃ© dans le presse-papiers!",
      languageSelect: "Choisir la langue du contenu",
      highlightHelp: "* Le caractÃ¨re Ã  l'index spÃ©cifiÃ© est mis en Ã©vidence en temps rÃ©el dans la zone de texte ci-dessus.",
      allTools: "Toutes les outils",
      footerNote1: "Cet outil fait partie de la suite utilitaire apps24.",
      footerNote2: "Tout le traitement se fait localement dans votre navigateur pour une confidentialitÃ© et une rapiditÃ© maximales.",
      koLabel: "CorÃ©en",
      enLabel: "Anglais",
      textCategory: "Texte",
      utilityCategory: "Utilitaire",
      positionPlaceholder: "Position",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Taille",
      customColor: "Couleur",
      presetColors: "PrÃ©rÃ©glages",
      homeTitle: "Outils multilingues rapides",
      homeSubtitle: "Apps24 est un site dâoutils en ligne multilingue conÃ§u pour des utilitaires rapides, simples et pratiques, sans Ã©tapes inutiles.",
      homeIntro1: "Apps24 est un site dâoutils en ligne multilingue conÃ§u pour les personnes qui recherchent des utilitaires rapides, simples et pratiques, sans Ã©tapes inutiles. Au lieu de tÃ©lÃ©charger un logiciel ou de crÃ©er un compte pour de petites tÃ¢ches, les utilisateurs peuvent ouvrir une page, utiliser un outil immÃ©diatement et obtenir un rÃ©sultat en quelques clics.",
      homeIntro2: "Notre objectif est de simplifier les tÃ¢ches numÃ©riques du quotidien pour un large Ã©ventail dâutilisateurs. Que vous soyez Ã©tudiant en train de compter des mots, marketeur prÃ©parant des liens ou du contenu, dÃ©veloppeur vÃ©rifiant des donnÃ©es JSON ou Base64, designer travaillant avec des couleurs, ou chef dâentreprise crÃ©ant des QR codes et des codes-barres, Apps24 propose des outils lÃ©gers, rapides dâaccÃ¨s et faciles Ã  comprendre.",
      homeAboutTitle: "Ã propos dâApps24",
      homeWhatYouCanDoTitle: "Ce que vous pouvez faire avec Apps24",
      homeWhatYouCanDoBody: "Apps24 rÃ©unit une collection croissante dâoutils utiles basÃ©s sur le navigateur pour le texte, les images, le formatage, les utilitaires visuels et les flux de travail techniques. Vous pouvez compresser des images, convertir la casse du texte, valider du JSON, gÃ©nÃ©rer des mots de passe, comparer des diffÃ©rences de texte, encoder et dÃ©coder du Base64, crÃ©er des QR codes, gÃ©nÃ©rer des codes-barres, et bien plus encore. Ces outils sont conÃ§us pour des tÃ¢ches courtes et ciblÃ©es, afin que vous puissiez rÃ©soudre un problÃ¨me Ã  la fois grÃ¢ce Ã  une mise en page claire et un flux simple.",
      homeWhyUsersChooseTitle: "Pourquoi les utilisateurs choisissent Apps24",
      homeWhyUsersChoosePoints: [
        "des interfaces simples et faciles Ã  utiliser",
        "des outils rapides basÃ©s sur le navigateur pour les tÃ¢ches courtes",
        "un accÃ¨s multilingue pour les utilisateurs du monde entier",
        "des utilitaires pratiques pour des besoins concrets",
      ],
      homeOngoingFocusTitle: "ConÃ§u pour un usage quotidien",
      homeOngoingFocusBody: "Apps24 est conÃ§u pour une grande variÃ©tÃ© de tÃ¢ches numÃ©riques qui apparaissent dans le travail, les Ã©tudes et les activitÃ©s en ligne au quotidien. Certains utilisateurs ont besoin dâoutils techniques pour les donnÃ©es structurÃ©es ou lâencodage. Dâautres ont besoin dâoutils de contenu pour lâÃ©criture, le formatage ou la publication. Dâautres encore recherchent des gÃ©nÃ©rateurs pratiques pour les QR codes, les codes-barres et les mots de passe. En rÃ©unissant ces utilitaires au mÃªme endroit, Apps24 aide les utilisateurs Ã  gagner du temps et Ã  Ã©viter des logiciels inutiles. La plupart des outils fonctionnent directement dans le navigateur, sur ordinateur comme sur mobile, et le site continue de sâenrichir avec de nouveaux outils et un meilleur contenu.",
      rulerHowTo: "Comment utiliser la rÃ¨gle en ligne",
      rulerStep1: "Placez une carte de crÃ©dit horizontalement sur la marque zÃ©ro.",
      rulerStep2: "Entrez la largeur mesurÃ©e de la carte et cliquez sur 'Calibrer'.",
      rulerStep3: "Vous pouvez maintenant mesurer l'objet souhaitÃ©.",
      rulerEnterCardWidth: "Entrez la largeur de la carte de crÃ©dit",
      rulerExample: "Exemple : Si la largeur est de 10,4 cm, entrez 10,4",
      rulerTip: "Conseil : Utilisez la poignÃ©e bleue dans le coin infÃ©rieur droit du canevas pour le redimensionner.",
      calibrate: "Calibrer",
      changeTo: "Passer Ã ",
      exitFullscreen: "Quitter le plein Ã©cran",
      fullscreen: "Plein Ã©cran",
      frLabel: "FranÃ§ais",
      jaLabel: "Japonais",
      zhLabel: "Chinois (SimplifiÃ©)",
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
      whatIs: "Qu'est-ce que {0} ?",
      whenToUse: "Quand utiliser cet outil ?",
      howToUseTitle: "Comment utiliser {0}",
      faqTitle: "Foire aux questions",
      howItWorks: "Comment Ã§a marche",
      unitLength: "Longueur",
      unitWeight: "Poids",
      unitArea: "Surface",
      unitVolume: "Volume",
      unitTemperature: "TempÃ©rature",
      unitSpeed: "Vitesse",
      unitDigital: "NumÃ©rique",
      from: "De",
      to: "Ã",
      unitAccuracyNote: "* Conversion de haute prÃ©cision.",
    },
  },
  ja: {
    tools: {
      imagecompressor: {
        title: "ç»åå§ç¸® / WebPå¤æ",
        description: "ç»åãµã¤ãºãç¸®å°ããWebããã©ã¼ãã³ã¹ãåä¸ãããããã«WebPã«å¤æãã¾ãã",
        seo: "ç»åãå§ç¸®ãã¦WebPã«å¤æã",
        longDescription: "ç¡æã®ç»åå§ç¸®ãã¼ã«ãä½¿ç¨ããã¨ãã½ããã¦ã§ã¢ãã¤ã³ã¹ãã¼ã«ãããã¨ãªããæ°ç§ã§ç»åãã¡ã¤ã«ãµã¤ãºãç¸®å°ã§ãã¾ããã¾ãããµãã¼ãããã¦ããç»åãWebPå½¢å¼ã«å¤æãã¦ãWebããã©ã¼ãã³ã¹ãåä¸ããããã¡ã¤ã«ãµã¤ãºãå°ãããããã¨ãã§ãã¾ãããã®ãã¼ã«ã¯ããã­ã¬ã¼ããªã³ã©ã¤ã³ã·ã§ããã®ãªã¼ãã¼ãå­¦çããã¼ã±ãã£ã³ã°æå½èãªã©ãã¦ã§ããµã¤ããã¡ã¼ã«ãæ¸é¡ã¢ããã­ã¼ãç¨ã®é«éèª­ã¿è¾¼ã¿ç»åãå¿è¦ãªæ¹ã«é©ãã¦ãã¾ãã",
        usageContext: "ç»åã®å§ç¸®ã¯ããã¼ã¸ã®èª­ã¿è¾¼ã¿éåº¦ãåä¸ãããããã¹ãã¬ã¼ã¸ã®ä½¿ç¨éãåæ¸ããããã¦ã§ããµã¤ãããã©ã¼ã ãã¡ã¼ã«ã®ãã¡ã¤ã«ãµã¤ãºå¶éãæºããããå ´åã«å½¹ç«ã¡ã¾ãããµã¤ãºã®å°ããç»åã¯ãã¢ãã¤ã«ããã¤ã¹ãä½éãªã¤ã³ã¿ã¼ãããç°å¢ã§ãã¦ã¼ã¶ã¼ã¨ã¯ã¹ããªã¨ã³ã¹ãåä¸ããã¾ããWebPã¯ãç»è³ªãç¶­æããªãããã¡ã¤ã«ãµã¤ãºãå°ããããããã«è¨­è¨ãããææ°ã®ç»åå½¢å¼ã§ãã",
        howToUse: "1. ç»åãã¡ã¤ã«ãã¢ããã­ã¼ããã¾ãã\n2. ç»åãå§ç¸®ããããWebPã«å¤æããããé¸æãã¾ãã\n3. çµæããã¬ãã¥ã¼ããæé©åããããã¡ã¤ã«ããã¦ã³ã­ã¼ããã¾ãã",
        faq: [
          { q: "ãã®ãã¼ã«ã¯ç¡æã§å©ç¨ã§ãã¾ããï¼", a: "ã¯ãããªã³ã©ã¤ã³ã§ç¡æã§ç»åãå§ç¸®ããã³å¤æã§ãã¾ãã" },
          { q: "ãµãã¼ãããã¦ãããã¡ã¤ã«å½¢å¼ã¯ä½ã§ããï¼", a: "ãã©ã¦ã¶ã«ãã£ã¦ç°ãªãã¾ãããä¸è¬çã«JPGãPNGãªã©ã®ä¸è¬çãªWebç»åå½¢å¼ããµãã¼ãããã¦ãã¾ãã" },
          { q: "å§ç¸®å¾ã«ç»è³ªã¯å¤ããã¾ããï¼", a: "ä¸é¨ã®å§ç¸®æ¹æ³ã§ã¯ç»è³ªããããã«ä½ä¸ããå ´åãããã¾ããããã¡ã¤ã«ãµã¤ãºãç¸®å°ããªãããè¦è¦çã«æç¨ãªç¶æãç¶­æãããã¨ãåªåãã¾ãã" },
          { q: "ãªãç»åãWebPã«å¤æããå¿è¦ãããã®ã§ããï¼", a: "WebPãã¡ã¤ã«ã¯å¤ãã®å ´åJPGãPNGãããå°ãããã¦ã§ããµã¤ãããã­ã°ã®èª­ã¿è¾¼ã¿éåº¦åä¸ã«å¯ä¸ãã¾ãã" }
        ]
      },
      caseconverter: {
        title: "å¤§æå­ã»å°æå­å¤æ",
        description: "ãã­ã¹ããå¤§æå­ãå°æå­ãã¿ã¤ãã«ã±ã¼ã¹ã«å¤æãã¾ãã",
        seo: "ãã­ã¹ããå¤§æå­ã¾ãã¯å°æå­ã«å¤æã",
        longDescription: "Case Converterã¯ããã­ã¹ããå¤§æå­ãå°æå­ãã¿ã¤ãã«ã±ã¼ã¹ï¼åèªã®åé ­ãå¤§æå­ã«ããå½¢å¼ï¼ã«å¤æããã·ã³ãã«ãªãªã³ã©ã¤ã³ãã¼ã«ã§ããã¿ã¤ãã«ã®ç·¨éãæ¸å¼ã®ä¿®æ­£ããã­ã¥ã¡ã³ãã®æºåãã¦ã§ããµã¤ããã¡ã¼ã«ãã¬ãã¼ãç¨ã®ãã­ã¹ãæ´çã«å½¹ç«ã¡ã¾ããæåã§æ¸ãç´ãä»£ããã«ãã³ã³ãã³ããè²¼ãä»ãã¦å½¢å¼ãé¸æããã ãã§ãããã«çµæãã³ãã¼ã§ãã¾ãã",
        usageContext: "ãã®ãã¼ã«ã¯ãè¦åºãã®ä¿®æ­£ãè¨äºã¿ã¤ãã«ã®æºåããã¼ã±ãã£ã³ã°ã³ãã¼ã®æ§æãã¤ã³ãã¼ããããã­ã¹ãã®æ´çãå¬éåã®ã³ã³ãã³ãæ¨æºåã«å½¹ç«ã¡ã¾ãã",
        howToUse: "1. å¥åããã¯ã¹ã«ãã­ã¹ããè²¼ãä»ãããå¥åãã¾ãã\n2. å¤§æå­ãå°æå­ãã¿ã¤ãã«ã±ã¼ã¹ãªã©ãå¸æã®å½¢å¼ãé¸æãã¾ãã\n3. å¤æãããçµæãã³ãã¼ãã¾ãã",
        faq: [
          { q: "ã¿ã¤ãã«ã±ã¼ã¹ã¨ã¯ä½ã§ããï¼", a: "ã¿ã¤ãã«ã±ã¼ã¹ã¯ãéè¦ãªåèªã®åé ­ãå¤§æå­ã«ããæ¸ãæ¹ã§ããè¨äºã®ã¿ã¤ãã«ãè¦åºãã§ä¸è¬çã«ä½¿ç¨ããã¾ãã" },
          { q: "é·ããã­ã¹ããå¤æã§ãã¾ããï¼", a: "ã¯ããç­ããã­ã¹ãããé·ããã­ã¹ãã¾ã§ããã¼ã«ã§ç´æ¥å¤æã§ãã¾ãã" },
          { q: "SEOã®ã¿ã¤ãã«ãè¦åºãã«å½¹ç«ã¡ã¾ããï¼", a: "ã¯ãããã¼ã¸ã¿ã¤ãã«ãè¦åºãã®ä¸è²«æ§ãä¿ã¤ã®ã«å½¹ç«ã¡ã¾ãã" },
          { q: "è±èªä»¥å¤ã®è¨èªã§ãåä½ãã¾ããï¼", a: "ã¢ã«ãã¡ããããã¼ã¹ã®è¨èªã§æé©ã«åä½ãã¾ãããå¤§æå­åã®è¦åã«ãã£ã¦çµæãç°ãªãå ´åãããã¾ãã" }
        ]
      },
      jsonformatter: {
        title: "JSONãã©ã¼ãããã»ããªãã¼ã¿ã¼",
        description: "JSONãã¼ã¿ã®æ´å½¢ãæ´çãããã³æ¤è¨¼ãè¡ãã¾ãã",
        seo: "ç¡å¹ãªJSONãæ´å½¢ã",
        longDescription: "JSON Formatter & Validatorã¯ããªã³ã©ã¤ã³ã§JSONãã¼ã¿ãæ´çãç¢ºèªããã®ã«å½¹ç«ã¡ã¾ããèª­ã¿ãããJSONåºåãå¿è¦ãªéçºèããã¹ã¿ã¼ãå­¦çãAPIã¦ã¼ã¶ã¼ãã¾ãã¯æ§æã¨ã©ã¼ããã°ããè¦ã¤ãããæ¹ã«é©ãã¦ãã¾ããJSONãèª­ã¿æ¸ããã«ããå ´åãæ­£ããåä½ããªãå ´åã«ãæ§é ãæ´å½¢ãã¦æ¤è¨¼ãå®¹æã«ãã¾ãã",
        usageContext: "çã®JSONã¯ãç¹ã«1è¡ã«å§ç¸®ããã¦ããå ´åãèª­ã¿ã«ãããã¨ãããããã¾ããæ´å½¢ããã¨é©åãªã¤ã³ãã³ãã¨æ§é ãè¿½å ããããããã°ãå±æãå®¹æã«ãªãã¾ããJSONã®ããããªæ§æãã¹ãAPIãªã¯ã¨ã¹ããã¢ããªã®æ©è½ãæãªãå¯è½æ§ããããããæ¤è¨¼ã¯éè¦ã§ãã",
        howToUse: "1. å¥åããã¯ã¹ã«JSONãè²¼ãä»ãã¾ãã\n2. æ´å½¢ï¼Formatï¼ã¾ãã¯æ¤è¨¼ï¼Validateï¼ãã¿ã³ãã¯ãªãã¯ãã¾ãã\n3. æ´å½¢ãããçµæãç¢ºèªããã¨ã©ã¼ã¡ãã»ã¼ã¸ããã§ãã¯ãã¾ãã",
        faq: [
          { q: "JSONã¨ã¯ä½ã§ããï¼", a: "JSONã¯JavaScript Object Notationã®ç¥ã§ããæ§é åããããã¼ã¿ãä¿å­ã»äº¤æããããã®ä¸è¬çãªå½¢å¼ã§ãã" },
          { q: "ãã®ãã¼ã«ã¯ç¡å¹ãªJSONãèªåçã«ä¿®æ­£ã§ãã¾ããï¼", a: "æ§é ä¸ã®åé¡ãç¹å®ããã®ã«å½¹ç«ã¡ã¾ãããä¸é¨ã®ã¨ã©ã¼ã¯æåã§ä¿®æ­£ããå¿è¦ãããã¾ãã" },
          { q: "ãªãJSONãç¡å¹ãªã®ã§ããï¼", a: "ã«ã³ãã®ä¸è¶³ãä½åãªã«ã³ããä¸é©åãªæ¬å¼§ãã¾ãã¯ããã«ã¯ã©ã¼ãã®ä»£ããã«ã·ã³ã°ã«ã¯ã©ã¼ããä½¿ç¨ãã¦ãããã¨ãä¸è¬çãªåå ã§ãã" },
          { q: "ãã®ãã¼ã«ã¯éçºèå°ç¨ã§ããï¼", a: "ããããå­¦çãã¢ããªã¹ããJSONãã¼ã¿ãä½¿ç¨ãããã¹ã¦ã®äººã«å½¹ç«ã¡ã¾ãã" }
        ]
      },
      passwordgenerator: {
        title: "ãã¹ã¯ã¼ãã¸ã§ãã¬ã¼ã¿ã¼",
        description: "ãã©ã¦ã¶ã§å³åº§ã«å¼·åãªã©ã³ãã ãã¹ã¯ã¼ããçæã",
        seo: "ãã©ã¦ã¶ã§å³åº§ã«å¼·åãªã©ã³ãã ãã¹ã¯ã¼ããçæãã«ã¹ã¿ãã¤ãºå¯è½ãªé·ãã¨æå­ãªãã·ã§ã³ã§å®å¨ãªãã¹ã¯ã¼ããä½æã§ããç¡æãã¹ã¯ã¼ãã¸ã§ãã¬ã¼ã¿ã¼ã",
        longDescription: "ãã¹ã¯ã¼ãã¸ã§ãã¬ã¼ã¿ã¼ã¯ãåäººã»æ¥­åã»ãã¸ãã¹ç¨ã¢ã«ã¦ã³ãåãã®å¼·åãªã©ã³ãã ãã¹ã¯ã¼ããä½æããã·ã³ãã«ãªãªã³ã©ã¤ã³ãã¼ã«ã§ããå¼±ããã¹ã¯ã¼ããåå©ç¨ããä»£ããã«ãããéãå®å¨ã«ãã¹ã¯ã¼ããä½æãããæ¹ã«æé©ã§ãã",
        usageContext: "æ°ããã¢ã«ã¦ã³ãä½ææããã¹ã¯ã¼ãå¤æ´æããããã¯æ¨ªæ­ä½¿ç¨ãã¦ãããã¹ã¯ã¼ãã®ã»ã­ã¥ãªãã£å¼·åæã«ä½¿ç¨ãã¦ãã ããã",
        howToUse: "1. ãã¹ã¯ã¼ãã®é·ããé¸æãã¾ãã\n2. å¤§æå­ãå°æå­ãæ°å­ãè¨å·ãªã©å«ããæå­ç¨®ãé¸æãã¾ãã\n3. ãã¹ã¯ã¼ãçæãã¿ã³ãã¯ãªãã¯ãã¾ãã\n4. ã³ãã¼ãã¦ä¿¡é ¼ã§ãããã¹ã¯ã¼ãããã¼ã¸ã£ã¼ãªã©å®å¨ãªå ´æã«ä¿å­ãã¾ãã",
        faq: [
          { q: "ãªããã¹ã¯ã¼ãã¸ã§ãã¬ã¼ã¿ã¼ãä½¿ãã¹ããï¼", a: "æåã§ä½æããããå¼·ãäºæ¸¬ãã«ãããã¹ã¯ã¼ããä½ãã®ã«å½¹ç«ã¡ã¾ãã" },
          { q: "ãã¹ã¯ã¼ããå¼·ãããã«ã¯ï¼", a: "æå­ãæ°å­ãè¨å·ãæ··å¨ããé·ããã¹ã¯ã¼ãã¯æ¨æ¸¬ãã«ããã§ãã" },
          { q: "è¤æ°ã®ãµã¤ãã§åããã¹ã¯ã¼ããä½¿ã£ã¦ããï¼", a: "åã¢ã«ã¦ã³ãã§å¥ãã®ãã¹ã¯ã¼ããä½¿ç¨ããæ¹ãå®å¨ã§ãã" },
          { q: "çæãããã¹ã¯ã¼ãã¯ã©ãã«ä¿å­ããï¼", a: "ä¿¡é ¼ã§ãããã¹ã¯ã¼ãããã¼ã¸ã£ã¼ãæå®å¨ã§ãã" }
        ]
      },
      textdiffchecker: { title: "Text Diff Checker", description: "Compare texts", seo: "Find differences between texts." },
      base64encoder: {
        title: "Base64 ã¨ã³ã³ã¼ã / ãã³ã¼ã",
        description: "ãã¬ã¼ã³ãã­ã¹ããBase64ã«å¤æã¾ãã¯å³åº§ã«ãã³ã¼ãã",
        seo: "é«éãã¤ä¿¡é ¼æ§ã®é«ãBase64ã¨ã³ã³ã¼ãã¼ããã³ãã³ã¼ãã¼ãè»½éBrowserãã¼ã«ã§ãã¬ã¼ã³ãã­ã¹ããBase64å½¢å¼ã«å¤æã¾ãã¯ãã³ã¼ãã",
        longDescription: "Base64ã¨ã³ã³ã¼ãï¼ãã³ã¼ãã¯ããã¬ã¼ã³ãã­ã¹ããBase64å½¢å¼ã«å¤æããBase64æå­åãèª­ãããã­ã¹ãã«æ»ããã©ã¦ã¶ãã¼ã¹ã®ã¦ã¼ãã£ãªãã£ã§ããAPIãã¨ã³ã³ã¼ããããæå­åãã¨ã³ãããã³ã³ãã³ãã¨ã®ä½æ¥­ã«ç¹ã«å½¹ç«ã¡ã¾ãã",
        usageContext: "ãã­ã¹ããã¼ã¹ã®ã·ã¹ãã ãéããè»¢éã®ããã«ãã­ã¹ããã¨ã³ã³ã¼ãããããBase64å¤ãæ¤æ»ããããã¨ã³ã³ã¼ããããã³ã³ãã³ãããã³ã¼ãããå¿è¦ãããå ´åã«ãå©ç¨ãã ããã",
        howToUse: "1. ãã­ã¹ããå¥åã¾ãã¯è²¼ãä»ãã¾ãã\n2. Base64ã«å¤æããã«ã¯ã¨ã³ã³ã¼ããèª­ãããã­ã¹ãã«æ»ãã«ã¯ãã³ã¼ããã¯ãªãã¯ãã¾ãã\n3. åºåã¨ãªã¢ã§çµæãç¢ºèªãã¾ãã\n4. å¥ã®å ´æã§ä½¿ç¨ããå ´åã¯ã³ãã¼ãã¯ãªãã¯ãã¾ãã",
        faq: [
          { q: "Base64ã¯æå·åã®ä¸ç¨®ã§ããï¼", a: "ããããBase64ã¯ã»ã­ã¥ãªãã£ãæå·åã·ã¹ãã ã§ã¯ãªãããã¼ã¿è¡¨ç¾ã®ããã®ã¨ã³ã³ã¼ãæ¹å¼ã§ãã" },
          { q: "Base64ã¯ã©ããªæã«ä½¿ãã¾ããï¼", a: "APIãã¡ã¼ã«ã³ã³ãã³ããHTML/CSSåãè¾¼ã¿ããã¼ã¿è¼¸éãªã©ã§ããä½¿ç¨ããã¾ãã" },
          { q: "ãã®ãã¼ã«ã§ãã¹ã¦ã®Base64æå­åããã³ã¼ãã§ãã¾ããï¼", a: "æå¹ãªBase64ãã­ã¹ãã¯ãã³ã¼ãã§ãã¾ããå¥åãä¸å®å¨ã¾ãã¯ç¡å¹ã®å ´åãçµæãå¤±æããå ´åãããã¾ãã" },
          { q: "ãã®ãã¼ã«ã¯éçºèå°ç¨ã§ããï¼", a: "ããããå­¦çãã¢ããªã¹ãããã¼ã±ã¿ã¼ãªã©ã«ãå½¹ç«ã¡ã¾ãã" }
        ]
      },
      colorconverter: {
        title: "ã«ã©ã¼ã³ã¼ãå¤æ",
        description: "HEXãRGBãHSLã®ã«ã©ã¼å¤ãå³åº§ã«å¤æã",
        seo: "ã·ã³ãã«ãªãã©ã¦ã¶ãã¼ã¹ã®ã«ã©ã¼ã³ã¼ãå¤ææ©ã§HEXãRGBãHSLã«ã©ã¼å¤ãå³åº§ã«å¤æãã¦ã§ããã¶ã¤ã³ãUIã·ã¹ãã ããã­ã³ãã¨ã³ãéçºã«ä¾¿å©ã",
        longDescription: "ã«ã©ã¼ã³ã¼ãå¤æã¯ãHEXãRGBãHSLå½¢å¼éã§ã«ã©ã¼å¤ãå¤æãããªã³ã©ã¤ã³ãã¼ã«ã§ããã¦ã§ããã¶ã¤ã³ãUIä½æ¥­ããã©ã³ãã£ã³ã°ããã­ã³ãã¨ã³ãéçºã«å½¹ç«ã¡ã¾ãã",
        usageContext: "ä¸ã¤ã®å½¢å¼ããå¥ã®å½¢å¼ã¸è²ãå¤æããæããCSSã«è²ã³ã¼ããã³ãã¼ããæãã¾ãã¯ãã¶ã¤ã³ã·ã¹ãã ã®å¯¾å¿å¤ãç¢ºèªããæã«ãå©ç¨ãã ããã",
        howToUse: "1. HEXå¤ãå¥åãããã«ã©ã¼ããã«ã¼ã§è²ãé¸æãã¾ãã\n2. HEXãRGBãHSLã®å¤æå¤ãå³åº§ã«ç¢ºèªãã¾ãã\n3. ãã­ã¸ã§ã¯ãã«ä½¿ç¨ããå¤ã®ã³ãã¼ãã¯ãªãã¯ãã¾ãã\n4. æ°ããè²ã§å§ããå ´åã¯ãªã»ãããã¯ãªãã¯ãã¾ãã",
        faq: [
          { q: "HEXãRGBãHSLã®éãã¯ï¼", a: "HEXã¯ã¦ã§ããã¶ã¤ã³ã§ä¸»ã«ä½¿ç¨ãããRGBã¯èµ¤ã»ç·ã»éã®åå¤ãåºã«ããHSLã¯è²ç¸ã»å½©åº¦ã»æåº¦ã§ç´æçãªè²èª¿æ´ãã§ãã¾ãã" },
          { q: "ãã®ãã¼ã«ã¯èª°ã«å½¹ç«ã¡ã¾ããï¼", a: "ã¦ã§ããµã¤ããã¢ããªããã¬ã¼ã³ããã©ã³ãè³æã§ãã¸ã¿ã«è²ãæ±ããã¶ã¤ãã¼ãéçºèããã¼ã±ã¿ã¼ãå­¦çãªã©ã«å½¹ç«ã¡ã¾ãã" },
          { q: "CSSã§ãããã®å¤ãä½¿ç¨ã§ãã¾ããï¼", a: "ã¯ããHEXãRGBãHSLã¯ãã¹ã¦CSSã§ä¸è¬çã«ä½¿ç¨ããã¾ãã" },
          { q: "ãã®ãã¼ã«ã¯ã¯ã¤ãã¯ã«ã©ã¼ãã§ãã¯ããµãã¼ããã¦ãã¾ããï¼", a: "ã¯ããè¦è¦çã«è²ãé¸æããã¨å³åº§ã«å¤æå¤ãç¢ºèªã§ãã¾ãã" }
        ]
      },
      ruler: {
        title: "å®è¦ãªã³ã©ã¤ã³",
        description: "ã«ã¼ãèª¿æ´æ©è½ä»ãã§ç»é¢ä¸ã®é·ããæ¸¬å®ãã¾ãã",
        longDescription: "ì¨ë¼ì¸ ìë íë©´ìì ì§ì  ë¬¼ì²´ë¥¼ ì¸¡ì í  ì ìê² í´ì£¼ë ê³ ì ë° ì¸¡ì  ëêµ¬ìëë¤. 0ì  ì¡°ì  ê¸°ë¥ê³¼ ì ì©ì¹´ëì ê°ì íì¤ ë¬¼ì²´ë¥¼ ì´ì©í ë³´ì  ê¸°ë¥ì ê°ì¶ê³  ìì´ íë©´ í´ìëë í¬ê¸°ì ìê´ìì´ ì íí ì¸¡ì ì´ ê°ë¥í©ëë¤.",
        usageContext: "ëìì´ë, ì·¨ë¯¸ ìíì ëë ì¤ì  ìê° ìì ë ìì ë¬¼ë¦¬ì  ë¬¼ì²´ë íë©´ ììë¥¼ ë¹ ë¥´ê² ì¸¡ì í´ì¼ íë ëª¨ë  ë¶ê» ìë²½í ëêµ¬ìëë¤.",
        howToUse: "1. ì í¸íë ë¨ì(cm ëë ì¸ì¹)ë¥¼ ì íí©ëë¤.\n2. ì ì©ì¹´ëì ê°ì íì¤ ë¬¼ì²´ì ëë¹ë¥¼ ìë ¥íì¬ ë³´ì í©ëë¤.\n3. ì ìì ìë¬´ ê³³ì´ë ëë¸ í´ë¦­íì¬ 0ì ì ì¤ì í©ëë¤.\n4. ì¸¡ì í  ë¬¼ì²´ë¥¼ íë©´ì ëê³  ì¸¡ì í©ëë¤.",
        faq: [{"q":"íë©´ ìì ì íëë ì´ë ì ëì¸ê°ì?","a":"ì íëë ë³´ì ì ë¬ë ¸ìµëë¤. íë©´ í¬ê¸°ì í´ìëê° ë¤ìíë¯ë¡ ì¤ì  ë¬¼ì²´(ì ì©ì¹´ë ë±)ë¥¼ ì´ì©í ë³´ì ì´ ì ë°í ì¸¡ì ì íìì ìëë¤."}]
      },
      wordcounter: {
        title: "æå­æ°ã«ã¦ã³ã",
        description: "ãªã¢ã«ã¿ã¤ã ã§æå­æ°ãåèªæ°ãã«ã¦ã³ããã¾ãã",
        longDescription: "ê¸ì ì ì¸ê¸°ë íì¤í¸ì ë¨ì´, ê¸ì, ê³µë°± ìë¥¼ ê³ì°íë ì¤ìê° íì¤í¸ ë¶ì ëêµ¬ìëë¤. ê³µë°±ì ì ì¸í ê¸ì ì ë° í¹ì  ê¸ì ìì¹ ì°¾ê¸° ë± ìì¸í ë¶ì ê²°ê³¼ë ì ê³µí©ëë¤.",
        usageContext: "ìì¸ì´, ê¸°ì¬, ìì ë¯¸ëì´ ê²ìë¬¼ ëë ë©í ì¤ëªì í¹ì  ê¸¸ì´ ìêµ¬ ì¬í­ì ë§ì¶°ì¼ íë ìê°, íì ë° SEO ì ë¬¸ê°ìê² íìì ìëë¤.",
        howToUse: "1. ìë ¥ íëì íì¤í¸ë¥¼ ìë ¥íê±°ë ë¶ì¬ë£ìµëë¤.\n2. íë¨ìì ìë ìë°ì´í¸ëë ì¹´ì´í¸ë¥¼ íì¸í©ëë¤.\n3. ê¸ì ìì¹ ì°¾ê¸° ê¸°ë¥ì ì¬ì©íì¬ íì¤í¸ ë´ì í¹ì  ì¸ë±ì¤ë¥¼ ì°¾ìµëë¤.",
        faq: [{"q":"íì¤í¸ í¬ê¸°ì ì íì´ ìëì?","a":"ì í¬ ê¸ì ì ì¸ê¸°ë ìì­ë§ ìì ë¬íë ëì©ë íì¤í¸ë ë¸ë¼ì°ì  ë´ìì í¨ì¨ì ì¼ë¡ ì²ë¦¬í  ì ììµëë¤."}]
      },
      countdown: { title: "ã«ã¦ã³ããã¦ã³", description: "ã¿ã¤ãã¼ã®è¨­å®ãä¸æåæ­¢ãåéãå¯è½ã§ãã" },
      digitalclock: { title: "ãã¸ã¿ã«æè¨", description: "ç¾å¨æéããªã¢ã«ã¿ã¤ã ã§ç¢ºèªã§ããå¨ç»é¢ã§è¡¨ç¤ºå¯è½ã§ãã" },
      screenlamp: { title: "ã¹ã¯ãªã¼ã³ã©ã¤ã", description: "ç»é¢ãåè²ã®ç§æã¨ãã¦ä½¿ç¨ã§ãã¾ãã" },
      qrgenerator: {
        title: "QRã³ã¼ãä½æ",
        description: "ãªã³ã¯ããã­ã¹ããé£çµ¡åç¨ã®QRã³ã¼ããä½æãã¾ãã",
        longDescription: "QRã³ã¼ãä½æãã¼ã«ãä½¿ç¨ããã¨ããã­ã¹ãããªã³ã¯ãé£çµ¡åæå ±ãªã©ã®ã³ã³ãã³ãããQRã³ã¼ããä½æã§ãã¾ãããã¸ãã¹ãã¤ãã³ããã¬ã¹ãã©ã³ãåäººçãªå±æã«å½¹ç«ã¡ã¾ããæ°ç§ã§ã³ã¼ããçæãããã¸ã¿ã«ã¾ãã¯å°å·ç¨ã«ãã¦ã³ã­ã¼ãã§ãã¾ãã",
        usageContext: "QRã³ã¼ãã¯ãã¦ã§ããµã¤ãã¸ã®ãªã³ã¯ãã¡ãã¥ã¼ã¸ã®ã¢ã¯ã»ã¹ãé£çµ¡åã®å±æã«ããä½¿ç¨ããã¾ããé·ããã­ã¹ããå¥åãããã¨ãªããã¦ã¼ã¶ã¼ãæå ±ã«ã¢ã¯ã»ã¹ã§ããããã«ãã¾ãã",
        howToUse: "1. ã¨ã³ã³ã¼ãããããã­ã¹ããURLãã¾ãã¯ã³ã³ãã³ããå¥åãã¾ãã\n2. QRã³ã¼ããçæãã¾ãã\n3. ç»åããã¦ã³ã­ã¼ããã¦å¿è¦ãªå ´æã§ä½¿ç¨ãã¾ãã",
        faq: [
          { q: "ã¦ã§ããµã¤ãã®ãªã³ã¯ç¨ã®QRã³ã¼ããä½æã§ãã¾ããï¼", a: "ã¯ããURLã®QRã³ã¼ããçæãã¦ãå°å·ç©ããã¸ã¿ã«å½¢å¼ã§å±æã§ãã¾ãã" },
          { q: "ãã¸ãã¹è³æã«QRã³ã¼ããä½¿ç¨ã§ãã¾ããï¼", a: "ã¯ãããã©ã·ããã¹ã¿ã¼ãååºãã¡ãã¥ã¼ãªã©ã§ããä½¿ç¨ããã¾ãã" },
          { q: "QRã³ã¼ãã«æå¹æéã¯ããã¾ããï¼", a: "åºå®ã³ã³ãã³ãããçæãããæ¨æºçãªQRã³ã¼ãã«æå¹æéã¯ããã¾ããã" },
          { q: "ãã®ãã¼ã«ã¯ç¡æã§å©ç¨ã§ãã¾ããï¼", a: "ã¯ããè¿½å ã®ã½ããã¦ã§ã¢ãã¤ã³ã¹ãã¼ã«ãããã¨ãªãããªã³ã©ã¤ã³ã§ç¡æã§çæã§ãã¾ãã" }
        ]
      },
      barcodegenerator: {
        title: "ãã¼ã³ã¼ãä½æ",
        description: "è£½åãå¨åº«ãè¿½è·¡ç¨ã®ãã¼ã³ã¼ããä½æãã¾ãã",
        longDescription: "ãã¼ã³ã¼ãä½æãã¼ã«ã¯ãè£½åãã©ãã«ãå¨åº«ãããã³åé¨è¿½è·¡ç¨ã®ãã¼ã³ã¼ããä½æããã®ã«å½¹ç«ã¡ã¾ããå¤ãå¥åãããã¼ã³ã¼ãã®ç¨®é¡ãé¸æãã¦ãçæãããç»åããã¦ã³ã­ã¼ãã§ãã¾ãã",
        usageContext: "ãã¼ã³ã¼ãã¯å°å£²ãå¨åº«ç®¡çãåºè·ãªã©ã§åºãä½¿ç¨ããã¦ãã¾ããã¢ã¤ãã ããã°ããè­å¥ããå¥åãã¹ãæ¸ããã®ã«å½¹ç«ã¡ã¾ãã",
        howToUse: "1. ãã¼ã³ã¼ãã«å¿è¦ãªæ°å­ã¾ãã¯ãã­ã¹ããå¥åãã¾ãã\n2. ãã¼ã³ã¼ãã®å½¢å¼ãé¸æãã¾ãã\n3. ç»åãçæãã¦ãã¦ã³ã­ã¼ããã¾ãã",
        faq: [
          { q: "ãã¼ã³ã¼ãã¸ã§ãã¬ã¼ã¿ã¼ã¨ã¯ä½ã§ããï¼", a: "å¥åãããã­ã¹ããæ°å­ã«åºã¥ãã¦ãæ©æ¢°ãèª­ã¿åããã³ã¼ããä½æãããã¼ã«ã§ãã" },
          { q: "ã©ã®ãã¼ã³ã¼ãå½¢å¼ãé¸æããã°ããã§ããï¼", a: "ä½¿ç¨å ´æã«ãã£ã¦ç°ãªãã¾ããå°å£²è£½åç¨ã®æ¨æºãªã©ãããã¾ãã" },
          { q: "çæããããã¼ã³ã¼ããå°å·ã§ãã¾ããï¼", a: "ã¯ãããã¦ã³ã­ã¼ããã¦ãã©ãã«ãããã±ã¼ã¸ç¨ã«å°å·ã§ãã¾ãã" },
          { q: "å°è¦æ¨¡ãã¸ãã¹ã«é©ãã¦ãã¾ããï¼", a: "ã¯ããè¿éã«ãã¼ã³ã¼ããä½æããå¿è¦ããããã¼ã ã«å½¹ç«ã¡ã¾ãã" }
        ]
      },
      dummytext: { title: "ããã¼ãã­ã¹ã", description: "ãã¬ã¼ã¹ãã«ãã¼ç¨ã®æç« ãçæãã¾ãã" },
    },
    common: {
      copyAll: "ãã¹ã¦ã³ãã¼",
      clear: "ã¯ãªã¢",
      sample: "ãµã³ãã«ãã­ã¹ã",
      placeholder: "ããã«ãã­ã¹ããå¥åã¾ãã¯è²¼ãä»ãã¦ãã ãã...",
      paragraphs: "æ®µè½æ°",
      generatedText: "çæë íì¤í¸",
      charCountWithSpaces: "æå­æ° (ç©ºç½å«ã)",
      charCountWithoutSpaces: "æå­æ° (ç©ºç½ãªã)",
      whichPosition: "ã©ã®æå­ä½ç½®ãç¢ºèªãã¾ããï¼",
      backToTools: "ãã¼ã«ä¸è¦§ã«æ»ã",
      copied: "ã¯ãªãããã¼ãì ë³µì¬ëììµëë¤ï¼",
      languageSelect: "ã³ã³ãã³ãã®è¨èªãé¸æ",
      highlightHelp: "* æå®ãããã¤ã³ããã¯ã¹ã®æå­ããä¸ã®ãã­ã¹ãã¨ãªã¢åã§ãªã¢ã«ã¿ã¤ã ã«å¼·èª¿è¡¨ç¤ºããã¾ãã",
      allTools: "ãã¹ã¦ã®ãã¼ã«",
      footerNote1: "ãã®ãã¼ã«ã¯apps24ã¦ã¼ãã£ãªãã£ã¹ã¤ã¼ãã®ä¸é¨ã§ãã",
      footerNote2: "ãã¹ã¦ã®å¦çã¯ãæå¤§éì ãã©ã¤ãã·ã¼ã¨éåº¦ã®ããã«ãã©ã¦ã¶åã§ã­ã¼ã«ã«ã«è¡ããã¾ãã",
      koLabel: "éå½èª",
      enLabel: "è±èª",
      textCategory: "ãã­ã¹ã",
      utilityCategory: "ã¦ã¼ãã£ãªãã£",
      positionPlaceholder: "ä½ç½®",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "ãµã¤ãº",
      customColor: "è²",
      presetColors: "ããªã»ãã",
      homeTitle: "é«éå¤è¨èªãã¼ã«",
      homeSubtitle: "Apps24ã¯ãä½è¨ãªæé ãªãã§ãéããç°¡åã§ãå®ç¨çãªãã¼ã«ãä½¿ãããäººã®ããã«ä½ãããå¤è¨èªå¯¾å¿ã®ãªã³ã©ã¤ã³ãã¼ã«ãµã¤ãã§ãã",
      homeIntro1: "Apps24ã¯ãä½è¨ãªæé ãªãã§ãéããç°¡åã§ãå®ç¨çãªãã¼ã«ãä½¿ãããäººã®ããã«ä½ãããå¤è¨èªå¯¾å¿ã®ãªã³ã©ã¤ã³ãã¼ã«ãµã¤ãã§ããå°ããªä½æ¥­ã®ããã«ã½ããã¦ã§ã¢ããã¦ã³ã­ã¼ãããããã¢ã«ã¦ã³ããä½æãããããå¿è¦ã¯ããã¾ããããã¼ã¸ãéãã¦ããã«ãã¼ã«ãä½¿ããæ°åã®ã¯ãªãã¯ã§çµæãå¾ããã¨ãã§ãã¾ãã",
      homeIntro2: "ç§ãã¡ã®ç®æ¨ã¯ããã¾ãã¾ãªã¦ã¼ã¶ã¼ã«ã¨ã£ã¦æ¥å¸¸çãªãã¸ã¿ã«ä½æ¥­ãããç°¡åã«ãããã¨ã§ããæå­æ°ãæ°ããå­¦çããªã³ã¯ãã³ã³ãã³ããæºåãããã¼ã±ã¿ã¼ãJSONãBase64ãã¼ã¿ãç¢ºèªããéçºèãè²ãæ±ããã¶ã¤ãã¼ãQRã³ã¼ãããã¼ã³ã¼ããä½æããäºæ¥­èã¾ã§ãApps24ã¯ç´ æ©ãä½¿ãã¦çè§£ããããè»½éãã¼ã«ãæä¾ãã¾ãã",
      homeAboutTitle: "Apps24ã«ã¤ãã¦",
      homeWhatYouCanDoTitle: "Apps24ã§ã§ãããã¨",
      homeWhatYouCanDoBody: "Apps24ã§ã¯ããã­ã¹ããç»åããã©ã¼ãããå¦çããã¸ã¥ã¢ã«ã¦ã¼ãã£ãªãã£ãæè¡çãªä½æ¥­ã«å½¹ç«ã¤ãã©ã¦ã¶ãã¼ã¹ã®ãã¼ã«ãã¾ã¨ãã¦æä¾ãã¦ãã¾ããç»åã®å§ç¸®ããã­ã¹ãã®å¤§æå­ã»å°æå­å¤æãJSONã®æ¤è¨¼ããã¹ã¯ã¼ãçæããã­ã¹ãå·®åã®æ¯è¼ãBase64ã®ã¨ã³ã³ã¼ãã¨ãã³ã¼ããQRã³ã¼ãä½æããã¼ã³ã¼ãçæãªã©ããã¾ãã¾ãªä½æ¥­ãè¡ããã¨ãã§ãã¾ãããããã®ãã¼ã«ã¯ãç­ãéä¸­ããä½æ¥­ã®ããã«è¨­è¨ããã¦ãã¾ããè¤éãªç»é¢ãè¡ãæ¥ããä»£ããã«ãããããããã¬ã¤ã¢ã¦ãã¨ã·ã³ãã«ãªæµãã§ãä¸åº¦ã«ã²ã¨ã¤ã®åé¡ãè§£æ±ºã§ãã¾ãã",
      homeWhyUsersChooseTitle: "ã¦ã¼ã¶ã¼ãApps24ãé¸ã¶çç±",
      homeWhyUsersChoosePoints: [
        "ä½¿ããããã·ã³ãã«ãªã¤ã³ã¿ã¼ãã§ã¼ã¹",
        "ç­ãä½æ¥­ã«é©ããé«éãªãã©ã¦ã¶ãã¼ã«",
        "ä¸çä¸­ã®ã¦ã¼ã¶ã¼ã®ããã®å¤è¨èªå¯¾å¿",
        "å®éã®ãã¼ãºã«å½¹ç«ã¤å®ç¨çãªæ©è½",
      ],
      homeOngoingFocusTitle: "æ¥å¸¸å©ç¨ã®ããã«è¨­è¨",
      homeOngoingFocusBody: "Apps24ã¯ãä»äºãå­¦ç¿ãæ¥ãã®ãªã³ã©ã¤ã³æ´»åã®ä¸­ã§çºçãããã¾ãã¾ãªãã¸ã¿ã«ä½æ¥­ã®ããã«è¨­è¨ããã¦ãã¾ããæ§é åãã¼ã¿ãã¨ã³ã³ã¼ãã®ããã®æè¡ãã¼ã«ãå¿è¦ãªã¦ã¼ã¶ã¼ãããã°ãæç« ä½æãæ¸å¼èª¿æ´ãå¬éã®ããã®ã³ã³ãã³ããã¼ã«ãå¿è¦ãªã¦ã¼ã¶ã¼ããã¾ããã¾ããQRã³ã¼ãããã¼ã³ã¼ãããã¹ã¯ã¼ãçæã®ãããªå®ç¨çãªãã¼ã«ãæ±ããã¦ã¼ã¶ã¼ããã¾ãããããã®ã¦ã¼ãã£ãªãã£ãã²ã¨ã¤ã®å ´æã«ã¾ã¨ãããã¨ã§ãApps24ã¯æéãç¯ç´ããä¸è¦ãªã½ããã¦ã§ã¢ãé¿ããã®ã«å½¹ç«ã¡ã¾ãããã®ãã©ãããã©ã¼ã ã¯å¤è¨èªå¯¾å¿ã§ãããããã¦ã¼ã¶ã¼ã¯åãåºæ¬çãªãã¼ã«ä½é¨ãä¿ã¡ãªãããèªåã®ä½¿ããããè¨èªã§å©ç¨ãããã¨ãã§ãã¾ããApps24ã®ã»ã¨ãã©ã®ãã¼ã«ã¯ãã©ã¦ã¶ä¸ã§ç´æ¥åä½ããããã«è¨­è¨ããã¦ããããããã¹ã¯ãããã§ãã¢ãã¤ã«ã§ãç°¡åã«å©ç¨ã§ãã¾ããç§ãã¡ã¯ããªã³ã©ã¤ã³ãã¼ã«ã¯è¦ã¤ãããããçè§£ãããããä½¿ãããããã®ã§ããã¹ãã ã¨èãã¦ãã¾ããApps24ã¯ããµã¤ãã®æé·ã¨ã¨ãã«ãã®æ¹åæ§ãä¿ã¡ç¶ãã¾ããApps24ã¯ãæ°ãããã¼ã«ãæ¹åãããã³ã³ãã³ãã«ãã£ã¦ç¶ç¶çã«æ¡å¼µããã¦ãã¾ããåãã¦è¨ªããã¦ã¼ã¶ã¼ã«ããç¹°ãè¿ãå©ç¨ããã¦ã¼ã¶ã¼ã«ããåãã¼ã¸ãããå½¹ç«ã¡ãããåããããããããä¾¡å¤ãããã®ã«ãªãããæ¹åãç¶ãã¦ãã¾ããæ¥å¸¸çãªã¦ã§ãä½æ¥­ã®ããã®é«éãªå¤è¨èªãã¼ã«ãæ¢ãã¦ãããªããApps24ã¯ã·ã³ãã«ã§ä¿¡é ¼ã§ããåºçºç¹ã¨ãã¦è¨­è¨ããã¦ãã¾ãã",
      rulerHowTo: "ãªã³ã©ã¤ã³å®è¦ã®ä½¿ãæ¹",
      rulerStep1: "ã¯ã¬ã¸ããã«ã¼ãã0ã®ç®çãã«æ°´å¹³ã«ç½®ãã¦ãã ããã",
      rulerStep2: "ã«ã¼ãã®æ¸¬å®ãããå¹ãå¥åãããèª¿æ´ããã¯ãªãã¯ãã¾ãã",
      rulerStep3: "ããã§ç®çã®å¯¾è±¡ç©ãæ¸¬å®ã§ãã¾ãã",
      rulerEnterCardWidth: "ã¯ã¬ã¸ããã«ã¼ãã®å¹ãå¥åãã¦ãã ãã",
      rulerExample: "ä¾ï¼å¹ã10.4 cmã®å ´åã10.4ã¨å¥åãã¦ãã ãã",
      rulerTip: "ãã³ãï¼ã­ã£ã³ãã¹ã®å³ä¸éã«ããéããã³ãã«ãä½¿ç¨ãã¦ãµã¤ãºãå¤æ´ãã¦ãã ããã",
      calibrate: "èª¿æ´",
      changeTo: "åä½å¤æ´:",
      exitFullscreen: "å¨ç»é¢è¡¨ç¤ºãçµäº",
      fullscreen: "å¨ç»é¢è¡¨ç¤º",
      frLabel: "ãã©ã³ã¹èª",
      jaLabel: "æ¥æ¬èª",
      zhLabel: "ä¸­å½èªï¼ç°¡ä½å­ï¼",
      zhTWLabel: "ä¸­å½èªï¼ç¹ä½å­ï¼",
      ptLabel: "ãã«ãã¬ã«èª",
      esLabel: "ã¹ãã¤ã³èª",
      deLabel: "ãã¤ãèª",
      arLabel: "ã¢ã©ãã¢èª",
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
      whatIs: "{0}ã¨ã¯ä½ã§ããï¼",
      whenToUse: "ãã®ãã¼ã«ã¯ãã¤ä½¿ãã¾ããï¼",
      howToUseTitle: "{0}ã®ä½¿ãæ¹",
      faqTitle: "ããããè³ªå",
      howItWorks: "ä½¿ãæ¹",
      unitLength: "é·ã",
      unitWeight: "éã",
      unitArea: "é¢ç©",
      unitVolume: "å®¹é",
      unitTemperature: "æ¸©åº¦",
      unitSpeed: "éåº¦",
      unitDigital: "ãã¸ã¿ã«",
      from: "å¤æå",
      to: "å¤æå",
      unitAccuracyNote: "* é«ç²¾åº¦ã®å¤æçµæã§ãã",
    },
  },
  zh: {
    tools: {
      imagecompressor: {
        title: "å¾çåç¼© / WebP è½¬æ¢å¨",
        description: "å¨çº¿åç¼©å¾çå¹¶è½¬æ¢ä¸º WebP æ ¼å¼ï¼æåç½é¡µæ§è½ã",
        seo: "å¨çº¿åç¼©å¾çå¹¶è½¬æ¢ä¸º WebPã",
        longDescription: "æä»¬çåè´¹å¾çåç¼©å·¥å·å¯å¨å ç§éååå°å¾çæä»¶å¤§å°ï¼æ éå®è£ä»»ä½è½¯ä»¶ãæ¨è¿å¯ä»¥å°å¾çè½¬æ¢ä¸º WebP æ ¼å¼ï¼ä»¥è·å¾æ´å¥½çç½é¡µæ§è½åæ´å°çæä»¶å¤§å°ãè¯¥å·¥å·éç¨äºåä¸»ãç½åºåºä¸»ãå­¦çãè¥éäººåä»¥åéè¦å¿«éå è½½å¾ççä»»ä½äººã",
        usageContext: "å½æ¨å¸ææé«é¡µé¢éåº¦ãåå°å­å¨å ç¨ææ»¡è¶³ç½ç«åçµå­é®ä»¶çæä»¶å¤§å°éå¶æ¶ï¼åç¼©å¾çéå¸¸æç¨ãæ´å°çå¾çä¹è½æ¹åç§»å¨è®¾å¤ä¸çç¨æ·ä½éªãWebP æ¯ä¸ç§ç°ä»£å¾çæ ¼å¼ï¼æ¨å¨ä¿æè¯å¥½è§è§è´¨éçåæ¶æä¾æ´å°çæä»¶å¤§å°ã",
        howToUse: "1. ä¸ä¼ æ¨çå¾çæä»¶ã\n2. éæ©åç¼©å¾çæè½¬æ¢ä¸º WebPã\n3. é¢è§ç»æå¹¶ä¸è½½ä¼ååçæä»¶ã",
        faq: [
          { q: "æ­¤å·¥å·åè´¹åï¼", a: "æ¯çãæ¨å¯ä»¥å¨çº¿åè´¹åç¼©åè½¬æ¢å¾çã" },
          { q: "æ¯æåªäºæä»¶ç±»åï¼", a: "éå¸¸æ¯æ JPG å PNG ç­å¸¸è§ç½ç»å¾çæ ¼å¼ã" },
          { q: "åç¼©åå¾çè´¨éä¼æ¹ååï¼", a: "æäºåç¼©æ¹å¼å¯è½ä¼ç¥å¾®éä½å¾çè´¨éï¼ä½ç®æ æ¯å¨åå°æä»¶å¤§å°çåæ¶ä¿æå¾çè§è§ææã" },
          { q: "ä¸ºä»ä¹è¦å°å¾çè½¬æ¢ä¸º WebPï¼", a: "WebP æä»¶éå¸¸æ¯ JPG æ PNG æ´å°ï¼æå©äºæåç½ç«ååå®¢çå è½½éåº¦ã" }
        ]
      },
      caseconverter: {
        title: "å¤§å°åè½¬æ¢å¨",
        description: "å°ææ¬è½¬æ¢ä¸ºå¤§åãå°åææ é¢æ ¼å¼ã",
        seo: "å¨çº¿ææ¬å¤§å°åè½¬æ¢å·¥å·ã",
        longDescription: "å¤§å°åè½¬æ¢å¨æ¯ä¸æ¬¾ç®åçå¨çº¿å·¥å·ï¼å¯å°ææ¬å¨å¤§åãå°ååæ é¢æ ¼å¼ä¹é´è½¬æ¢ãéç¨äºç¼è¾æ é¢ãä¿®æ­£æ ¼å¼ãåå¤ææ¡£ä»¥åä¸ºç½ç«ãçµå­é®ä»¶åæ¥åæ´çææ¬ã",
        usageContext: "æ­¤å·¥å·å¯å¸®å©æ¨ä¿®æ­£æ é¢ãåå¤æç« æ é¢ãæ ¼å¼åè¥éææ¡ãæ¸çå¯¼å¥çææ¬æå¨åå¸åç»ä¸åå®¹æ ¼å¼ã",
        howToUse: "1. å¨è¾å¥æ¡ä¸­ç²è´´æè¾å¥ææ¬ã\n2. éæ©æéæ ¼å¼ï¼å¦å¤§åãå°åææ é¢æ ¼å¼ã\n3. å¤å¶è½¬æ¢åçç»æã",
        faq: [
          { q: "ä»ä¹æ¯æ é¢æ ¼å¼ï¼Title Caseï¼ï¼", a: "æ é¢æ ¼å¼æ¯ä¸ç§åä½é£æ ¼ï¼éè¦åè¯çé¦å­æ¯å¤§åï¼å¸¸ç¨äºæç« æ é¢åé¡µé¢æ é¢ã" },
          { q: "å¯ä»¥è½¬æ¢é¿ææ¬åï¼", a: "æ¯çãæ¨å¯ä»¥ç´æ¥å¨å·¥å·ä¸­è½¬æ¢ç­ææ¬æé¿ææ¬ã" },
          { q: "å¯¹ SEO æ é¢æç¨åï¼", a: "æ¯çãå®å¯ä»¥å¸®å©æ¨æ´ä¸è´å°æ ¼å¼åé¡µé¢æ é¢åæ é¢åå®¹ã" },
          { q: "æ­¤å·¥å·æ¯æè±è¯­ä»¥å¤çè¯­è¨åï¼", a: "å®å¨åºäºå­æ¯çè¯­è¨ï¼å°¤å¶æ¯è±è¯­ãæ³è¯­åå¾·è¯­ï¼ä¸­æææä½³ï¼ä½ç»æå¯è½å å¤§åè§åèå¼ã" }
        ]
      },
      jsonformatter: {
        title: "JSON æ ¼å¼åä¸éªè¯å·¥å·",
        description: "å¨çº¿æ´çãæ ¼å¼ååéªè¯ JSON æ°æ®ã",
        seo: "å¨çº¿ JSON æ ¼å¼ååéªè¯ã",
        longDescription: "JSON æ ¼å¼åä¸éªè¯å·¥å·å¯å¸®å©æ¨å¨çº¿æ´çãç»ç»åæ£æ¥ JSON æ°æ®ãéç¨äºéè¦å¯è¯» JSON è¾åºæå¿«éæ¥æ¾è¯­æ³éè¯¯çå¼åèãæµè¯äººåãå­¦çå API ç¨æ·ã",
        usageContext: "åå§ JSON éå¸¸é¾ä»¥éè¯»ï¼å°¤å¶æ¯åç¼©æåè¡æ¶ãæ ¼å¼åå¯æ·»å éå½çç¼©è¿åç»æï¼ä¾¿äºè°è¯åå±äº«ãJSON ä¸­çå°è¯­æ³éè¯¯å¯è½ä¼å¯¼è´ API è¯·æ±æéç½®æä»¶åºç°é®é¢ãéªè¯å¯å¨ä½¿ç¨æ°æ®åæ£æµæ­¤ç±»é®é¢ã",
        howToUse: "1. å° JSON ç²è´´å°è¾å¥æ¡ä¸­ã\n2. ç¹å»æ ¼å¼åæéªè¯æé®ã\n3. æ¥çæ ¼å¼åç»æææ£æ¥éè¯¯ä¿¡æ¯ã",
        faq: [
          { q: "ä»ä¹æ¯ JSONï¼", a: "JSON æ¯ JavaScript Object Notation çç¼©åï¼æ¯ä¸ç§ç¨äºå­å¨åäº¤æ¢ç»æåæ°æ®çå¸¸è§æ ¼å¼ã" },
          { q: "æ­¤å·¥å·è½èªå¨ä¿®å¤æ æç JSON åï¼", a: "å®å¯ä»¥å¸®å©è¯å«æ ¼å¼åç»æé®é¢ï¼ä½æäºéè¯¯å¯è½éè¦æå¨ä¿®æ­£ã" },
          { q: "ä¸ºä»ä¹æç JSON æ æï¼", a: "å¸¸è§åå åæ¬ç¼ºå°éå·ãå¤ä½çéå·ãæ¬å·ä¸æ­£ç¡®æä½¿ç¨äºåå¼å·èéåå¼å·ã" },
          { q: "æ­¤å·¥å·åªéåå¼åèåï¼", a: "ä¸æ¯ãå®åæ ·éç¨äºå­¦çãåæå¸åä»»ä½å¤ç JSON æ°æ®çäººã" }
        ]
      },
      passwordgenerator: {
        title: "å¯ç çæå¨",
        description: "å³å»å¨æµè§å¨ä¸­çæå¼ºå¤§çéæºå¯ç ã",
        seo: "å³å»å¨æµè§å¨ä¸­çæå¼ºå¤§çéæºå¯ç ãåè´¹å¯ç çæå¨ï¼å·æå¯èªå®ä¹çé¿åº¦åå­ç¬¦éé¡¹ã",
        longDescription: "å¯ç çæå¨æ¯ä¸ä¸ªç®åçå¨çº¿å·¥å·ï¼å¸®å©ç¨æ·ä¸ºä¸ªäººãå·¥ä½ååä¸è´¦æ·åå»ºå¼ºå¤§çéæºå¯ç ãä¸ä¸ºå¸æä»¥æ´å¿«ãæ´å®å¨çæ¹å¼çæå¯ç èééå¤ä½¿ç¨å¼±å¯ç çç¨æ·è®¾è®¡ã",
        usageContext: "å¨åå»ºæ°è´¦æ·ãæ´æ¢æ§å¯ç ææ¹åå½åä½¿ç¨ç­å¯ç æéå¤ä½¿ç¨å¯ç çè´¦æ·å®å¨æ§æ¶ä½¿ç¨æ­¤å·¥å·ã",
        howToUse: "1. éæ©å¯ç é¿åº¦ã\n2. éæ©è¦åå«çå­ç¬¦ç±»åï¼å¤§å°åå­æ¯ãæ°å­ãç¬¦å·ï¼ã\n3. ç¹å»çæå¯ç æé®ã\n4. å¤å¶å¹¶å°å¶ä¿å­å°å®å¨çå°æ¹ã",
        faq: [
          { q: "ä¸ºä»ä¹è¦ä½¿ç¨å¯ç çæå¨ï¼", a: "å®è½åå»ºæ¯æå¨å¶ä½çå¯ç æ´å¼ºãæ´é¾ä»¥é¢æµçå¯ç ï¼ä»èéä½å¼±å¯ç çé£é©ã" },
          { q: "ä»ä¹è®©å¯ç æ´å¼ºï¼", a: "ä¸è¬æ¥è¯´ï¼åå«å­æ¯ãæ°å­åç¬¦å·çé¿å¯ç æ¯ç­å¯ç æ´é¾è¢«çæµã" },
          { q: "æå¯ä»¥å¨å¤ä¸ªç½ç«ä½¿ç¨ç¸åçå¯ç åï¼", a: "ä¸ºæ¯ä¸ªè´¦æ·ä½¿ç¨ä¸åå¯ç æ´å®å¨ã" },
          { q: "çæçå¯ç åºè¯¥å­å¨åªéï¼", a: "æå®å¨çéæ©éå¸¸æ¯å¯ä¿¡èµçå¯ç ç®¡çå¨ã" }
        ]
      },
      textdiffchecker: { title: "ææ¬å¯¹æ¯å·¥å·", description: "å¿«éå¯¹æ¯ä¸¤æ®µææ¬çå·®å¼ã", seo: "æ¥æ¾ä¸¤æ®µææ¬çå·®å¼ã" },
      base64encoder: {
        title: "Base64 ç¼ç  / è§£ç å¨",
        description: "å°ææ¬è½¬æ¢ä¸ºBase64æå³æ¶è§£ç Base64å­ç¬¦ä¸²ã",
        seo: "å¿«éå¯é çBase64ç¼ç å¨åè§£ç å¨ãç¨è½»éçº§æµè§å¨å·¥å·å³æ¶å°ææ¬è½¬æ¢ä¸ºBase64æ ¼å¼æè§£ç ã",
        longDescription: "Base64ç¼ç ï¼è§£ç å¨æ¯ä¸ä¸ªåºäºæµè§å¨çå·¥å·ï¼å¯å°çº¯ææ¬è½¬æ¢ä¸ºBase64æ ¼å¼ï¼å¹¶å°Base64å­ç¬¦ä¸²è§£ç åå¯è¯»ææ¬ãéç¨äºå¼åãæµè¯ãæ°æ®å¤çåç®åç¼ç ä»»å¡ã",
        usageContext: "å½æ¨éè¦å°ææ¬ç¼ç æBase64æ ¼å¼ä»¥ä¾¿ä¼ è¾ï¼ææ£æ¥Base64å¼ï¼æè§£ç ç¼ç åå®¹æ¶ä½¿ç¨æ­¤å·¥å·ã",
        howToUse: "1. è¾å¥æç²è´´æ¨çææ¬ã\n2. ç¹å»ç¼ç å°ææ¬è½¬æ¢ä¸ºBase64ï¼æç¹å»è§£ç å°Base64è½¬æ¢ä¸ºå¯è¯»åå®¹ã\n3. å¨è¾åºåºåæ¥çç»æã\n4. å¦éå¨å¶ä»å°æ¹ä½¿ç¨ç»æï¼è¯·ç¹å»å¤å¶ã",
        faq: [
          { q: "Base64æ¯ä¸ç§å å¯å½¢å¼åï¼", a: "ä¸æ¯ãBase64æ¯ç¨äºæ°æ®è¡¨ç¤ºçç¼ç æ¹æ³ï¼ä¸æ¯å®å¨æå å¯ç³»ç»ã" },
          { q: "Base64éå¸¸å¨ä»ä¹æåµä¸ä½¿ç¨ï¼", a: "å¸¸ç¨äºAPIãçµå­é®ä»¶åå®¹ãHTML/CSSåµå¥ãæ°æ®ä¼ è¾åææ¯ææ¡£ã" },
          { q: "æ­¤å·¥å·å¯ä»¥è§£ç ä»»ä½Base64å­ç¬¦ä¸²åï¼", a: "å®å¯ä»¥è§£ç ææçBase64ææ¬ãå¦æè¾å¥ä¸å®æ´ææ æï¼ç»æå¯è½å¤±è´¥ã" },
          { q: "æ­¤å·¥å·åªéåå¼åäººååï¼", a: "ä¸æ¯ãå­¦çãåæå¸ãè¥éäººååå¶ä»ç¨æ·åæ ·å¯ä»¥ä½¿ç¨ã" }
        ]
      },
      colorconverter: {
        title: "é¢è²ä»£ç è½¬æ¢å¨",
        description: "å³æ¶è½¬æ¢HEXãRGBåHSLé¢è²å¼ã",
        seo: "ç¨ç®åçæµè§å¨é¢è²ä»£ç è½¬æ¢å¨å³æ¶è½¬æ¢HEXãRGBåHSLé¢è²å¼ãéç¨äºç½é¡µè®¾è®¡ãUIç³»ç»ååç«¯å¼åã",
        longDescription: "é¢è²ä»£ç è½¬æ¢å¨æ¯ä¸ä¸ªå¨çº¿å·¥å·ï¼å¸®å©ç¨æ·å¨HEXãRGBåHSLæ ¼å¼ä¹é´è½¬æ¢é¢è²å¼ãéç¨äºç½é¡µè®¾è®¡ãUIå·¥ä½ãåçè®¾è®¡åä»»ä½éè¦ä¿æé¢è²å¼ä¸è´æ§çé¡¹ç®ã",
        usageContext: "å½æ¨éè¦å°é¢è²ä»ä¸ç§æ ¼å¼è½¬æ¢ä¸ºå¦ä¸ç§æ ¼å¼ï¼æå°é¢è²ä»£ç å¤å¶å°CSSä¸­æ¶ä½¿ç¨æ­¤å·¥å·ã",
        howToUse: "1. è¾å¥HEXå¼æä½¿ç¨æ¾è²å¨éæ©é¢è²ã\n2. å³æ¶æ¥çHEXãRGBåHSLçè½¬æ¢å¼ã\n3. ç¹å»æ¨æ³è¦ä½¿ç¨çå¼æè¾¹çå¤å¶ã\n4. è¦ä½¿ç¨æ°é¢è²åç¹å»éç½®ã",
        faq: [
          { q: "HEXãRGBåHSLæä»ä¹åºå«ï¼", a: "HEXå¸¸ç¨äºç½é¡µè®¾è®¡ï¼RGBåºäºçº¢ãç»¿ãèåå¼ï¼HSLè¡¨ç¤ºè²è°ãé¥±ååº¦åäº®åº¦ï¼æ´ç´è§ã" },
          { q: "è¿ä¸ªå·¥å·éååªäºç¨æ·ï¼", a: "éåè®¾è®¡å¸ãå¼åäººåãè¥éäººåãå­¦çä»¥åä»»ä½å¤çæ°å­é¢è²çäººã" },
          { q: "è¿äºå±æ§åç´ å¯ä»¥å¨CSSä¸­ä½¿ç¨åï¼", a: "å¯ä»¥ãHEXãRGBåHSLé½å¸¸ç¨äºCSSåå¶ä»ç½é¡µè®¾è®¡å·¥ä½æµç¨ã" },
          { q: "æ­¤å·¥å·æ¯æå¿«éé¢è²æ£æ¥åï¼", a: "æ¯æãæ¨å¯ä»¥ç´è§å°éæ©é¢è²ï¼ç«å³é¢è§è½¬æ¢å¼ã" }
        ]
      },
      ruler: { title: "å¨çº¿æ å°º", description: "ä½¿ç¨ä¿¡ç¨å¡æ ¡åæµéå±å¹è·ç¦»ã" },
      wordcounter: { title: "å­æ°ç»è®¡", description: "å®æ¶ç»è®¡å­ç¬¦ååè¯æ°éã" },
      countdown: { title: "åè®¡æ¶", description: "è®¾ç½®è®¡æ¶å¨ï¼æ¯æå¨å±åå¤é´æ¨¡å¼ã" },
      digitalclock: { title: "æ°å­æ¶é", description: "å®æ¶æ¥çå½åæ¶é´ã" },
      screenlamp: { title: "å±å¹ç¯", description: "å°å±å¹åä¸ºåè²ç§æç¯ã" },
      qrgenerator: {
        title: "äºç»´ç çæå¨",
        description: "ä¸ºææ¬ãé¾æ¥åèç³»æ¹å¼åå»ºäºç»´ç ã",
        longDescription: "äºç»´ç çæå¨å¯è®©æ¨ä¸ºææ¬ãé¾æ¥ãèç³»æ¹å¼åå¶ä»ç®ååå®¹åå»ºäºç»´ç ãéç¨äºä¼ä¸ãæ´»å¨ãé¤ååä¸ªäººåäº«ãæ¨å¯ä»¥å¨å ç§éåçæäºç»´ç å¹¶ä¸è½½ä¾æ°å­æå°å·ä½¿ç¨ã",
        usageContext: "äºç»´ç å¸¸ç¨äºç½ç«é¾æ¥ãèåè®¿é®ãæ´»å¨ç­¾å°ãèç³»æ¹å¼å±äº«ãæ¯ä»è¯´æåäº§åæ ç­¾ãäºç»´ç è®©ç¨æ·æ éæå¨è¾å¥å³å¯å¿«éè®¿é®ä¿¡æ¯ï¼ææåå°çº¿ä¸çº¿ä¸çæä½æ©æ¦ã",
        howToUse: "1. è¾å¥æ¨è¦ç¼ç çææ¬ãURL æåå®¹ã\n2. çæäºç»´ç ã\n3. ä¸è½½å¾çå¹¶å¨æéä½ç½®ä½¿ç¨ã",
        faq: [
          { q: "æå¯ä»¥ä¸ºç½ç«é¾æ¥åå»ºäºç»´ç åï¼", a: "æ¯çãæ¨å¯ä»¥ä¸º URL çæäºç»´ç ï¼å¹¶ä»¥å°å·ææ°å­å½¢å¼åäº«ã" },
          { q: "äºç»´ç å¯ç¨äºåä¸ææåï¼", a: "æ¯çãäºç»´ç å¸¸ç¨äºä¼ åãæµ·æ¥ãåçãåè£åèåã" },
          { q: "äºç»´ç ä¼è¿æåï¼", a: "ä»åºå®åå®¹çæçæ åäºç»´ç æ¬èº«ä¸ä¼è¿æï¼ä½ç®æ åå®¹å¿é¡»ä¿æå¯è®¿é®ã" },
          { q: "æ­¤å·¥å·åè´¹åï¼", a: "æ¯çãæ¨å¯ä»¥å¨çº¿åè´¹çæäºç»´ç ï¼æ éå®è£é¢å¤è½¯ä»¶ã" }
        ]
      },
      barcodegenerator: {
        title: "æ¡å½¢ç çæå¨",
        description: "ä¸ºäº§åãæ ç­¾ååºå­åå»ºæ¡å½¢ç ã",
        longDescription: "æ¡å½¢ç çæå¨å¯å¸®å©æ¨ä¸ºäº§åãæ ç­¾ãåºå­ãåè£ååé¨è¿½è¸ªåå»ºæ¡å½¢ç ãéç¨äºå°ä¼ä¸ãä»åºãåå¬å®¤ãå­¦æ ¡ä»¥åä»»ä½éè¦å¿«éå¨çº¿çææ¡å½¢ç çç¨æ·ã",
        usageContext: "æ¡å½¢ç å¹¿æ³åºç¨äºé¶å®ãåºå­æ§å¶ãç©æµè¿è¾ãèµäº§è¿½è¸ªåæä»¶æ æ³¨ãå®ä»¬å¯ä»¥æ´å¿«éå°è¯å«ç©åå¹¶åå°æå¨å½å¥éè¯¯ãéæ©æ­£ç¡®çæ ¼å¼å¯ç¡®ä¿ä¸æ«æä»ªåå·¥ä½æµç¨çå¼å®¹æ§ã",
        howToUse: "1. è¾å¥æ¡å½¢ç æéçæ°å­æææ¬ã\n2. éæ©æ¡å½¢ç æ ¼å¼ã\n3. çæå¹¶ä¸è½½æ¡å½¢ç å¾çã",
        faq: [
          { q: "ä»ä¹æ¯æ¡å½¢ç çæå¨ï¼", a: "æ¡å½¢ç çæå¨æ ¹æ®æ¨è¾å¥çææ¬ææ°å­åå»ºæºå¨å¯è¯»çä»£ç ã" },
          { q: "æåºè¯¥éæ©åªç§æ¡å½¢ç æ ¼å¼ï¼", a: "æä½³æ ¼å¼åå³äºæ¡å½¢ç çä½¿ç¨åºæ¯ãé¶å®äº§åãåºå­æ ç­¾åç©æµç³»ç»å¯è½éè¦ä¸åçæ¡å½¢ç æ åã" },
          { q: "å¯ä»¥æå°çæçæ¡å½¢ç åï¼", a: "æ¯çãçææ¡å½¢ç åï¼æ¨å¯ä»¥ä¸è½½å¹¶æå°ç¨äºæ ç­¾ãåè£æåé¨ä½¿ç¨ã" },
          { q: "æ­¤å·¥å·éåå°ä¼ä¸åï¼", a: "æ¯çãå®éç¨äºéè¦å¿«éåå»ºæ¡å½¢ç çå°ååºãä»åºãåå¬å®¤åå¶ä»å¢éã" }
        ]
      },
      dummytext: { title: "ä¹±æ°åæ", description: "çæå ä½æ®µè½ææ¬ã" },
    },
    common: {
      copyAll: "å¨é¨å¤å¶",
      clear: "æ¸é¤",
      sample: "ç¤ºä¾ææ¬",
      placeholder: "å¨æ­¤å¤ç²è´´æè¾å¥ææ¬...",
      paragraphs: "æ®µè½æ°",
      generatedText: "çæçææ¬",
      charCountWithSpaces: "å­ç¬¦æ° (å«ç©ºæ ¼)",
      charCountWithoutSpaces: "å­ç¬¦æ° (ä¸å«ç©ºæ ¼)",
      whichPosition: "æ¨æ³æ¥æ¾åªä¸ªå­ç¬¦ä½ç½®ï¼",
      backToTools: "è¿åå·¥å·åè¡¨",
      copied: "å·²å¤å¶å°åªè´´æ¿ï¼",
      languageSelect: "éæ©åå®¹è¯­è¨",
      highlightHelp: "* æå®ç´¢å¼å¤çå­ç¬¦å°å¨ä¸é¢çææ¬åºåä¸­å®æ¶çªåºæ¾ç¤ºã",
      allTools: "ææå·¥å·",
      footerNote1: "æ­¤å·¥å·æ¯ apps24 å®ç¨å·¥å·å¥ä»¶çä¸é¨åã",
      footerNote2: "ææå¤çåå¨æ¨çæµè§å¨ä¸­æ¬å°å®æï¼ä»¥å®ç°æå¤§çéç§åéåº¦ã",
      koLabel: "é©è¯­",
      enLabel: "è±è¯­",
      textCategory: "ææ¬",
      utilityCategory: "å®ç¨ç¨åº",
      positionPlaceholder: "ä½ç½®",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "å¤§å°",
      customColor: "é¢è²",
      presetColors: "é¢è®¾",
      homeTitle: "å¿«éå¤è¯­è¨å·¥å·",
      homeSubtitle: "Apps24 æ¯ä¸ä¸ªå¤è¯­è¨å¨çº¿å·¥å·ç½ç«ï¼ä¸ä¸ºå¸æå¿«éãç®åãå®ç¨å°å®æä»»å¡ä¸ä¸æ³ç»åå¤ä½æ­¥éª¤çç¨æ·èæé ã",
      homeIntro1: "Apps24 æ¯ä¸ä¸ªå¤è¯­è¨å¨çº¿å·¥å·ç½ç«ï¼ä¸ä¸ºå¸æå¿«éãç®åãå®ç¨å°å®æä»»å¡ä¸ä¸æ³ç»åå¤ä½æ­¥éª¤çç¨æ·èæé ãç¨æ·æ éä¸ºäºå°ä»»å¡ä¸è½½è½¯ä»¶æåå»ºè´¦å·ï¼åªéæå¼é¡µé¢ï¼ç«å³ä½¿ç¨å·¥å·ï¼å¹¶å¨å æ¬¡ç¹å»åè·å¾ç»æã",
      homeIntro2: "æä»¬çç®æ æ¯è®©æ´å¤ç¨æ·æ´è½»æ¾å°å®ææ¥å¸¸æ°å­ä»»å¡ãæ è®ºä½ æ¯ç»è®¡å­æ°çå­¦çãåå¤é¾æ¥æåå®¹çè¥éäººåãæ£æ¥ JSON æ Base64 æ°æ®çå¼åèãå¤çé¢è²çè®¾è®¡å¸ï¼è¿æ¯åå»ºäºç»´ç åæ¡å½¢ç çåå®¶ï¼Apps24 é½æä¾è½»éãææä¸æäºè®¿é®çå·¥å·ã",
      homeAboutTitle: "å³äº Apps24",
      homeWhatYouCanDoTitle: "ä½ å¯ä»¥å¨ Apps24 ä¸åä»ä¹",
      homeWhatYouCanDoBody: "Apps24 æ±éäºä¸ç³»åä¸æ­æ©å±çãåºäºæµè§å¨çå®ç¨å·¥å·ï¼è¦çææ¬ãå¾çãæ ¼å¼å¤çãè§è§è¾å©åææ¯å·¥ä½æµç­æ¹é¢ãä½ å¯ä»¥åç¼©å¾çãè½¬æ¢ææ¬å¤§å°åãéªè¯ JSONãçæå¯ç ãæ¯è¾ææ¬å·®å¼ãè¿è¡ Base64 ç¼ç åè§£ç ãåå»ºäºç»´ç ãçææ¡å½¢ç ç­ãè¿äºå·¥å·ä¸ä¸ºç­æ¶é´ãåä¸ç®æ çä»»å¡èè®¾è®¡ãç¨æ·æ éå¨å¤æçé¢ä¸­æ¥åæ¥æ¾ï¼åªééè¿æ¸æ°çå¸å±åç®åçæµç¨ï¼ä¸æ¬¡è§£å³ä¸ä¸ªé®é¢ã",
      homeWhyUsersChooseTitle: "ç¨æ·ä¸ºä»ä¹éæ© Apps24",
      homeWhyUsersChoosePoints: [
        "ç®åä¸æäºä½¿ç¨ççé¢",
        "éåå¿«éä»»å¡çæµè§å¨å·¥å·",
        "é¢åå¨çç¨æ·çå¤è¯­è¨æ¯æ",
        "æ»¡è¶³çå®éæ±çå®ç¨åè½",
      ],
      homeOngoingFocusTitle: "ä¸ºæ¥å¸¸ä½¿ç¨èè®¾è®¡",
      homeOngoingFocusBody: "Apps24 é¢åå·¥ä½ãå­¦ä¹ åæ¥å¸¸ä¸ç½ä¸­å¸¸è§çåç§æ°å­ä»»å¡èè®¾è®¡ãæäºç¨æ·éè¦ç»æåæ°æ®æç¼ç ç¸å³çææ¯å·¥å·ï¼æäºç¨æ·éè¦åä½ãæçæåå¸åå®¹çè¾å©å·¥å·ï¼è¿æä¸äºç¨æ·éè¦äºç»´ç ãæ¡å½¢ç æå¯ç çæç­å®ç¨åè½ãéè¿å°è¿äºå·¥å·éä¸­å¨ä¸ä¸ªå°æ¹ï¼Apps24 å¸®å©ç¨æ·èçæ¶é´ï¼å¹¶åå°å¯¹ä¸å¿è¦è½¯ä»¶çä¾èµãç±äºå¹³å°æ¯æå¤è¯­è¨ï¼ç¨æ·è¿å¯ä»¥å¨ä¿æç¸åæ ¸å¿å·¥å·ä½éªçåæ¶ï¼ä½¿ç¨èªå·±æ´çæçè¯­è¨ãApps24 çå¤§å¤æ°å·¥å·é½å¯ä»¥ç´æ¥å¨æµè§å¨ä¸­è¿è¡ï¼å æ­¤å¨æ¡é¢ç«¯åç§»å¨ç«¯é½è½æ¹ä¾¿ä½¿ç¨ãè¿ç§æ¹å¼å¸®å©ç¨æ·å¿«éå®æä»»å¡ï¼èä¸ä¼ç»ç®åæµç¨å¢å é¢å¤è´æãæä»¬è®¤ä¸ºï¼å¨çº¿å·¥å·åºè¯¥æäºåç°ãæäºçè§£ãæäºä½¿ç¨ãéçç½ç«ä¸æ­åå±ï¼Apps24 ä¹å°æç»­åæè¿ä¸æ¹åãApps24 æ­£å¨éè¿æ°å¢å·¥å·åæ¹è¿åå®¹ä¸æ­æ©å±ãæä»¬è´åäºè®©æ¯ä¸ªé¡µé¢å¯¹é¦æ¬¡è®¿é®èååè®¿ç¨æ·é½æ´æå¸®å©ãæ´å·ä¿¡æ¯éï¼ä¹æ´å®ç¨ãå¦æä½ æ­£å¨å¯»æ¾éåæ¥å¸¸ç½é¡µä»»å¡çå¿«éå¤è¯­è¨å·¥å·ï¼Apps24 å°±æ¯ä¸ä¸ªç®åä¸å¯é çèµ·ç¹ã",
      rulerHowTo: "å¦ä½ä½¿ç¨å¨çº¿æ å°º",
      rulerStep1: "å°ä¿¡ç¨å¡æ°´å¹³æ¾å¨é¶å»åº¦å¤ã",
      rulerStep2: "è¾å¥æµå¾çå¡çå®½åº¦å¹¶ç¹å»âæ ¡åâã",
      rulerStep3: "ç°å¨æ¨å¯ä»¥æµéæéçç©ä½ã",
      rulerEnterCardWidth: "è¾å¥ä¿¡ç¨å¡å®½åº¦",
      rulerExample: "ä¾å¦ï¼å¦æå®½åº¦ä¸º 10.4 åç±³ï¼è¾å¥ 10.4",
      rulerTip: "æç¤ºï¼ä½¿ç¨ç»å¸å³ä¸è§çèè²ææè°æ´å¶å¤§å°ã",
      calibrate: "æ ¡å",
      changeTo: "åæ¢è³",
      exitFullscreen: "éåºå¨å±",
      fullscreen: "å¨å±",
      frLabel: "æ³è¯­",
      jaLabel: "æ¥è¯­",
      zhLabel: "ä¸­æ (ç®ä½)",
      zhTWLabel: "ä¸­æ (ç¹ä½)",
      ptLabel: "è¡èçè¯­",
      esLabel: "è¥¿ç­çè¯­",
      deLabel: "å¾·è¯­",
      arLabel: "é¿æä¼¯è¯­",
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
      whatIs: "{0}æ¯ä»ä¹ï¼",
      whenToUse: "ä»ä¹æ¶åä½¿ç¨æ­¤å·¥å·ï¼",
      howToUseTitle: "å¦ä½ä½¿ç¨ {0}",
      faqTitle: "å¸¸è§é®é¢",
      howItWorks: "å·¥ä½åç",
      unitLength: "é¿åº¦",
      unitWeight: "éé",
      unitArea: "é¢ç§¯",
      unitVolume: "ä½ç§¯",
      unitTemperature: "æ¸©åº¦",
      unitSpeed: "éåº¦",
      unitDigital: "æ°å­å­å¨",
      from: "ä»",
      to: "å°",
      unitAccuracyNote: "* é«ç²¾åº¦è½¬æ¢ã",
    },
  },
  "zh-TW": {
    tools: {
      imagecompressor: {
        title: "åçå£ç¸® / WebP è½æå¨",
        description: "ç·ä¸å£ç¸®åçä¸¦è½æçº WebP æ ¼å¼ï¼æåç¶²é æè½ã",
        seo: "ç·ä¸å£ç¸®åçä¸¦è½æçº WebPã",
        longDescription: "æåçåè²»åçå£ç¸®å·¥å·å¯å¨å¹¾ç§éå§ç¸®å°åçæªæ¡å¤§å°ï¼ç¡éå®è£ä»»ä½è»é«ãæ¨éå¯ä»¥å°åçè½æçº WebP æ ¼å¼ï¼ä»¥ç²å¾æ´ä½³çç¶²é æè½åæ´å°çæªæ¡å¤§å°ãæ­¤å·¥å·é©ç¨æ¼é¨è½å®¢ãç¶²è·¯ååºæ¥­ä¸»ãå­¸çãè¡é·äººå¡ä»¥åéè¦å¿«éè¼å¥åççä»»ä½äººã",
        usageContext: "ç¶æ¨å¸ææåé é¢éåº¦ãæ¸å°å²å­ç©ºéæç¬¦åç¶²ç«åé»å­éµä»¶çæªæ¡å¤§å°éå¶æï¼å£ç¸®åçéå¸¸æç¨ãè¼å°çåçä¹è½æ¹åè¡åè£ç½®ä½¿ç¨èé«é©ãWebP æ¯ä¸ç¨®ç¾ä»£åçæ ¼å¼ï¼æ¨å¨ä¿æè¯å¥½è¦è¦ºåè³ªçåææä¾æ´å°çæªæ¡å¤§å°ã",
        howToUse: "1. ä¸å³æ¨çåçæªæ¡ã\n2. é¸æå£ç¸®åçæè½æçº WebPã\n3. é è¦½çµæä¸¦ä¸è¼æä½³åå¾çæªæ¡ã",
        faq: [
          { q: "æ­¤å·¥å·åè²»åï¼", a: "æ¯çãæ¨å¯ä»¥åè²»å¨ç·å£ç¸®åè½æåçã" },
          { q: "æ¯æ´åªäºæªæ¡é¡åï¼", a: "éå¸¸æ¯æ´ JPG å PNG ç­å¸¸è¦ç¶²è·¯åçæ ¼å¼ã" },
          { q: "å£ç¸®å¾åçåè³ªææ¹è®åï¼", a: "æäºå£ç¸®æ¹å¼å¯è½ç¥å¾®éä½åçåè³ªï¼ä½ç®æ¨æ¯å¨ç¸®å°æªæ¡å¤§å°çåæä¿æåçè¦è¦ºææã" },
          { q: "çºä»éº¼è¦å°åçè½æçº WebPï¼", a: "WebP æªæ¡éå¸¸æ¯ JPG æ PNG æ´å°ï¼æå©æ¼æåç¶²ç«åé¨è½æ ¼çè¼å¥éåº¦ã" }
        ]
      },
      caseconverter: {
        title: "å¤§å°å¯«è½æå¨",
        description: "å°æå­è½æçºå¤§å¯«ãå°å¯«ææ¨é¡æ ¼å¼ã",
        seo: "ç·ä¸æå­å¤§å°å¯«è½æå·¥å·ã",
        longDescription: "å¤§å°å¯«è½æå¨æ¯ä¸æ¬¾ç°¡å®çç·ä¸å·¥å·ï¼å¯å°æå­å¨å¤§å¯«ãå°å¯«åæ¨é¡æ ¼å¼ä¹éè½æãé©ç¨æ¼ç·¨è¼¯æ¨é¡ãä¿®æ­£æ ¼å¼ãæºåæä»¶ï¼ä»¥åæ´çç¶²ç«ãé»å­éµä»¶åå ±åç¨çæå­ã",
        usageContext: "æ­¤å·¥å·å¯å¹«å©æ¨ä¿®æ­£æ¨é¡ãæºåæç« æ¨é¡ãæ ¼å¼åè¡é·ææ¡ãæ¸çå¯å¥çæå­æå¨ç¼ä½åçµ±ä¸å§å®¹æ ¼å¼ã",
        howToUse: "1. å¨è¼¸å¥æ¡ä¸­è²¼ä¸æè¼¸å¥æå­ã\n2. é¸ææéæ ¼å¼ï¼å¦å¤§å¯«ãå°å¯«ææ¨é¡æ ¼å¼ã\n3. è¤è£½è½æå¾ççµæã",
        faq: [
          { q: "ä»éº¼æ¯æ¨é¡æ ¼å¼ï¼Title Caseï¼ï¼", a: "æ¨é¡æ ¼å¼æ¯ä¸ç¨®å¯«ä½é¢¨æ ¼ï¼éè¦å®å­çé¦å­æ¯å¤§å¯«ï¼å¸¸ç¨æ¼æç« æ¨é¡åé é¢æ¨é¡ã" },
          { q: "å¯ä»¥è½æé·æå­åï¼", a: "æ¯çãæ¨å¯ä»¥ç´æ¥å¨å·¥å·ä¸­è½æç­æå­æé·æå­ã" },
          { q: "å° SEO æ¨é¡æç¨åï¼", a: "æ¯çãå®å¯ä»¥å¹«å©æ¨æ´ä¸è´å°æ ¼å¼åé é¢æ¨é¡åæ¨é¡å§å®¹ã" },
          { q: "æ­¤å·¥å·æ¯æ´è±èªä»¥å¤çèªè¨åï¼", a: "å®å¨åºæ¼å­æ¯çèªè¨ï¼å°¤å¶æ¯è±èªãæ³èªåå¾·èªï¼ä¸­æææä½³ï¼ä½çµæå¯è½å å¤§å¯«è¦åèç°ã" }
        ]
      },
      jsonformatter: {
        title: "JSON æ ¼å¼åèé©è­å·¥å·",
        description: "ç·ä¸æ´çãæ ¼å¼ååé©è­ JSON è³æã",
        seo: "ç·ä¸ JSON æ ¼å¼ååé©è­ã",
        longDescription: "JSON æ ¼å¼åèé©è­å·¥å·å¯å¹«å©æ¨ç·ä¸æ´çãçµç¹åæª¢æ¥ JSON è³æãé©ç¨æ¼éè¦å¯è® JSON è¼¸åºæå¿«éæ¾åºèªæ³é¯èª¤çéç¼èãæ¸¬è©¦äººå¡ãå­¸çå API ä½¿ç¨èã",
        usageContext: "åå§ JSON éå¸¸é£ä»¥é±è®ï¼å°¤å¶æ¯å£ç¸®æå®è¡æãæ ¼å¼åå¯æ·»å é©ç¶çç¸®æåçµæ§ï¼ä¾¿æ¼é¤é¯åå±äº«ãJSON ä¸­çå°èªæ³é¯èª¤å¯è½å°è´ API è«æ±æè¨­å®æªåºç¾åé¡ãé©è­å¯å¨ä½¿ç¨è³æååµæ¸¬æ­¤é¡åé¡ã",
        howToUse: "1. å° JSON è²¼å°è¼¸å¥æ¡ä¸­ã\n2. é»ææ ¼å¼åæé©è­æéã\n3. æ¥çæ ¼å¼åçµæææª¢æ¥é¯èª¤è¨æ¯ã",
        faq: [
          { q: "ä»éº¼æ¯ JSONï¼", a: "JSON æ¯ JavaScript Object Notation çç¸®å¯«ï¼æ¯ä¸ç¨®ç¨æ¼å²å­åäº¤æçµæ§åè³æçå¸¸è¦æ ¼å¼ã" },
          { q: "æ­¤å·¥å·è½èªåä¿®å¾©ç¡æç JSON åï¼", a: "å®å¯ä»¥å¹«å©è­å¥æ ¼å¼åçµæ§åé¡ï¼ä½æäºé¯èª¤å¯è½éè¦æåä¿®æ­£ã" },
          { q: "çºä»éº¼æç JSON ç¡æï¼", a: "å¸¸è¦åå åæ¬ç¼ºå°éèãå¤é¤çéèãæ¬èä¸æ­£ç¢ºæä½¿ç¨äºå®å¼èèééå¼èã" },
          { q: "æ­¤å·¥å·åªé©åéç¼èåï¼", a: "ä¸æ¯ãå®åæ¨£é©ç¨æ¼å­¸çãåæå¸«åä»»ä½èç JSON è³æçäººã" }
        ]
      },
      passwordgenerator: {
        title: "å¯ç¢¼ç¢çå¨",
        description: "å³å»å¨çè¦½å¨ä¸­ç¢çå¼·å¤§çé¨æ©å¯ç¢¼ã",
        seo: "å³å»å¨çè¦½å¨ä¸­ç¢çå¼·å¤§çé¨æ©å¯ç¢¼ãåè²»å¯ç¢¼ç¢çå¨ï¼å·æå¯èªè¨çé·åº¦åå­åé¸é ã",
        longDescription: "å¯ç¢¼ç¢çå¨æ¯ä¸åç°¡å®çç·ä¸å·¥å·ï¼å¹«å©ç¨æ¶çºåäººãå·¥ä½ååæ¥­å¸³æ¶å»ºç«å¼·å¤§çé¨æ©å¯ç¢¼ãå°çºå¸æä»¥æ´å¿«ãæ´å®å¨çæ¹å¼ç¢çå¯ç¢¼èééè¤ä½¿ç¨å¼±å¯ç¢¼çç¨æ¶è¨­è¨ã",
        usageContext: "å¨å»ºç«æ°å¸³æ¶ãæ´æèå¯ç¢¼ææ¹åç®åä½¿ç¨ç­å¯ç¢¼æéè¤å¯ç¢¼çå¸³æ¶å®å¨æ§æä½¿ç¨æ­¤å·¥å·ã",
        howToUse: "1. é¸æå¯ç¢¼é·åº¦ã\n2. é¸æè¦åå«çå­åé¡åï¼å¤§å°å¯«å­æ¯ãæ¸å­ãç¬¦èï¼ã\n3. æä¸ç¢çå¯ç¢¼æéã\n4. è¤è£½ä¸¦å°å¶å²å­å°å®å¨çå°æ¹ã",
        faq: [
          { q: "çºä»éº¼è¦ä½¿ç¨å¯ç¢¼ç¢çå¨ï¼", a: "å®è½å»ºç«æ¯æåè£½ä½çå¯ç¢¼æ´å¼·ãæ´é£ä»¥é æ¸¬çå¯ç¢¼ï¼éä½å¼±å¯ç¢¼çé¢¨éªã" },
          { q: "ä»éº¼è®å¯ç¢¼æ´å¼·ï¼", a: "ä¸è¬èè¨ï¼åå«å­æ¯ãæ¸å­åç¬¦èçé·å¯ç¢¼æ¯ç­å¯ç¢¼æ´é£è¢«çæ¸¬ã" },
          { q: "æå¯ä»¥å¨å¤åç¶²ç«ä½¿ç¨ç¸åçå¯ç¢¼åï¼", a: "çºæ¯åå¸³æ¶ä½¿ç¨ä¸åå¯ç¢¼æ´å®å¨ã" },
          { q: "ç¢ççå¯ç¢¼æè©²å­å¨åªè£¡ï¼", a: "æå®å¨çé¸æéå¸¸æ¯å¯ä¿¡è³´çå¯ç¢¼ç®¡çå¨ã" }
        ]
      },
      textdiffchecker: { title: "æå­æ¯è¼å·¥å·", description: "å¿«éæ¯è¼å©æ®µæå­çå·®ç°ã", seo: "æ¥æ¾å©æ®µæå­çå·®ç°ã" },
      base64encoder: {
        title: "Base64 ç·¨ç¢¼ / è§£ç¢¼å¨",
        description: "å°æå­è½æçºBase64æå³æè§£ç¢¼Base64å­ä¸²ã",
        seo: "å¿«éå¯é çBase64ç·¨ç¢¼å¨åè§£ç¢¼å¨ãç¨è¼éç´çè¦½å¨å·¥å·å³æå°æå­è½æçºBase64æ ¼å¼æè§£ç¢¼ã",
        longDescription: "Base64ç·¨ç¢¼ï¼è§£ç¢¼å¨æ¯ä¸ååºæ¼çè¦½å¨çå·¥å·ï¼å¯å°ç´æå­è½æçºBase64æ ¼å¼ï¼ä¸¦å°Base64å­ä¸²è§£ç¢¼åå¯è®æå­ãé©ç¨æ¼éç¼ãæ¸¬è©¦ãè³æèçåç°¡å®ç·¨ç¢¼ä»»åã",
        usageContext: "ç¶æ¨éè¦å°æå­ç·¨ç¢¼æBase64æ ¼å¼ä»¥ä¾¿å³è¼¸ï¼ææª¢æ¥Base64å¼ï¼æè§£ç¢¼ç·¨ç¢¼å§å®¹æä½¿ç¨æ­¤å·¥å·ã",
        howToUse: "1. è¼¸å¥æè²¼ä¸æ¨çæå­ã\n2. é»æç·¨ç¢¼å°æå­è½æçºBase64ï¼æé»æè§£ç¢¼å°Base64è½æçºå¯è®å§å®¹ã\n3. å¨è¼¸åºååæ¥ççµæã\n4. å¦éå¨å¶ä»å°æ¹ä½¿ç¨çµæï¼è«é»æè¤è£½ã",
        faq: [
          { q: "Base64æ¯ä¸ç¨®å å¯å½¢å¼åï¼", a: "ä¸æ¯ãBase64æ¯ç¨æ¼è³æè¡¨ç¤ºçç·¨ç¢¼æ¹æ³ï¼ä¸æ¯å®å¨æå å¯ç³»çµ±ã" },
          { q: "Base64éå¸¸å¨ä»éº¼ææ³ä¸ä½¿ç¨ï¼", a: "å¸¸ç¨æ¼APIãé»å­éµä»¶å§å®¹ãHTML/CSSåµå¥ãè³æå³è¼¸åæè¡æä»¶ã" },
          { q: "æ­¤å·¥å·å¯ä»¥è§£ç¢¼ä»»ä½Base64å­ä¸²åï¼", a: "å®å¯ä»¥è§£ç¢¼ææçBase64æå­ãå¦æè¼¸å¥ä¸å®æ´æç¡æï¼çµæå¯è½å¤±æã" },
          { q: "æ­¤å·¥å·åªé©åéç¼äººå¡åï¼", a: "ä¸æ¯ãå­¸çãåæå¸«ãè¡é·äººå¡åå¶ä»ç¨æ¶åæ¨£å¯ä»¥ä½¿ç¨ã" }
        ]
      },
      colorconverter: {
        title: "é¡è²ä»£ç¢¼è½æå¨",
        description: "å³æè½æHEXãRGBåHSLé¡è²å¼ã",
        seo: "ç¨ç°¡å®ççè¦½å¨é¡è²ä»£ç¢¼è½æå¨å³æè½æHEXãRGBåHSLé¡è²å¼ãé©ç¨æ¼ç¶²é è¨­è¨ãUIç³»çµ±ååç«¯éç¼ã",
        longDescription: "é¡è²ä»£ç¢¼è½æå¨æ¯ä¸åç·ä¸å·¥å·ï¼å¹«å©ç¨æ¶å¨HEXãRGBåHSLæ ¼å¼ä¹éè½æé¡è²å¼ãé©ç¨æ¼ç¶²é è¨­è¨ãUIå·¥ä½ãåçè¨­è¨åä»»ä½éè¦ä¿æé¡è²å¼ä¸è´æ§çå°æ¡ã",
        usageContext: "ç¶æ¨éè¦å°é¡è²å¾ä¸ç¨®æ ¼å¼è½æçºå¦ä¸ç¨®æ ¼å¼ï¼æå°é¡è²ä»£ç¢¼è¤è£½å°CSSä¸­æä½¿ç¨æ­¤å·¥å·ã",
        howToUse: "1. è¼¸å¥HEXå¼æä½¿ç¨æ¾è²å¨é¸æé¡è²ã\n2. å³ææ¥çHEXãRGBåHSLçè½æå¼ã\n3. é»ææ¨æ³è¦ä½¿ç¨çå¼æéçè¤è£½ã\n4. è¦ä½¿ç¨æ°é¡è²åé»æéè¨­ã",
        faq: [
          { q: "HEXãRGBåHSLæä»éº¼åå¥ï¼", a: "HEXå¸¸ç¨æ¼ç¶²é è¨­è¨ï¼RGBåºæ¼ç´ãç¶ ãèåå¼ï¼HSLè¡¨ç¤ºè²èª¿ãé£½ååº¦åäº®åº¦ï¼æ´ç´è§ã" },
          { q: "éåå·¥å·é©ååªäºç¨æ¶ï¼", a: "é©åè¨­è¨å¸«ãéç¼äººå¡ãè¡é·äººå¡ãå­¸çä»¥åä»»ä½èçæ¸ä½é¡è²çäººã" },
          { q: "éäºå±¬æ§åç´ å¯ä»¥å¨CSSä¸­ä½¿ç¨åï¼", a: "å¯ä»¥ãHEXãRGBåHSLé½å¸¸ç¨æ¼CSSåå¶ä»ç¶²é è¨­è¨å·¥ä½æµç¨ã" },
          { q: "æ­¤å·¥å·æ¯æ´å¿«éé¡è²æª¢æ¥åï¼", a: "æ¯æ´ãæ¨å¯ä»¥ç´è§å°é¸æé¡è²ï¼ç«å³é è¦½è½æå¼ã" }
        ]
      },
      ruler: { title: "ç·ä¸å°ºå­", description: "ä½¿ç¨ä¿¡ç¨å¡æ ¡æºæ¸¬éè¢å¹è·é¢ã" },
      wordcounter: { title: "å­æ¸çµ±è¨", description: "å³æçµ±è¨å­ååå®å­æ¸éã" },
      countdown: { title: "åæ¸è¨æ", description: "è¨­ç½®è¨æå¨ï¼æ¯æ´å¨è¢å¹åå¤éæ¨¡å¼ã" },
      digitalclock: { title: "æ¸ä½æé", description: "å³ææ¥çç®åæéã" },
      screenlamp: { title: "è¢å¹ç", description: "å°è¢å¹è®çºå®è²ç§æçã" },
      qrgenerator: {
        title: "QR ç¢¼ç¢çå¨",
        description: "çºæå­ãé£çµåè¯çµ¡æ¹å¼å»ºç« QR ç¢¼ã",
        longDescription: "QR ç¢¼ç¢çå¨å¯è®æ¨çºæå­ãé£çµãè¯çµ¡æ¹å¼åå¶ä»ç°¡å®å§å®¹å»ºç« QR ç¢¼ãé©ç¨æ¼ä¼æ¥­ãæ´»åãé¤å»³ååäººåäº«ãæ¨å¯ä»¥å¨å¹¾ç§éå§ç¢ç QR ç¢¼ä¸¦ä¸è¼ä¾æ¸ä½æåå°ä½¿ç¨ã",
        usageContext: "QR ç¢¼å¸¸ç¨æ¼ç¶²ç«é£çµãèå®å­åãæ´»åç°½å°ãè¯çµ¡æ¹å¼åäº«ãä»æ¬¾èªªæåç¢åæ¨ç±¤ãQR ç¢¼è®ä½¿ç¨èç¡éæåè¼¸å¥å³å¯å¿«éå­åè³è¨ï¼æææ¸å°ç·ä¸ç·ä¸çæä½æ©æ¦ã",
        howToUse: "1. è¼¸å¥æ¨è¦ç·¨ç¢¼çæå­ãURL æå§å®¹ã\n2. ç¢ç QR ç¢¼ã\n3. ä¸è¼åçä¸¦å¨æéä½ç½®ä½¿ç¨ã",
        faq: [
          { q: "æå¯ä»¥çºç¶²ç«é£çµå»ºç« QR ç¢¼åï¼", a: "æ¯çãæ¨å¯ä»¥çº URL ç¢ç QR ç¢¼ï¼ä¸¦ä»¥åå°ææ¸ä½å½¢å¼åäº«ã" },
          { q: "QR ç¢¼å¯ç¨æ¼åæ¥­ææåï¼", a: "æ¯çãQR ç¢¼å¸¸ç¨æ¼å³å®ãæµ·å ±ãåçãåè£åèå®ã" },
          { q: "QR ç¢¼æéæåï¼", a: "å¾åºå®å§å®¹ç¢ççæ¨æº QR ç¢¼æ¬èº«ä¸æéæï¼ä½ç®æ¨å§å®¹å¿é ä¿æå¯å­åã" },
          { q: "æ­¤å·¥å·åè²»åï¼", a: "æ¯çãæ¨å¯ä»¥åè²»å¨ç·ç¢ç QR ç¢¼ï¼ç¡éå®è£é¡å¤è»é«ã" }
        ]
      },
      barcodegenerator: {
        title: "æ¢ç¢¼ç¢çå¨",
        description: "çºç¢åãæ¨ç±¤ååº«å­å»ºç«æ¢ç¢¼ã",
        longDescription: "æ¢ç¢¼ç¢çå¨å¯å¹«å©æ¨çºç¢åãæ¨ç±¤ãåº«å­ãåè£åå§é¨è¿½è¹¤å»ºç«æ¢ç¢¼ãé©ç¨æ¼å°åä¼æ¥­ãååº«ãè¾¦å¬å®¤ãå­¸æ ¡ä»¥åä»»ä½éè¦å¿«éå¨ç·ç¢çæ¢ç¢¼çä½¿ç¨èã",
        usageContext: "æ¢ç¢¼å»£æ³æç¨æ¼é¶å®ãåº«å­æ§å¶ãç©æµéè¼¸ãè³ç¢è¿½è¹¤åæä»¶æ¨æ³¨ãå®åå¯ä»¥æ´å¿«éå°è­å¥ç©åä¸¦æ¸å°æåè¼¸å¥é¯èª¤ãé¸ææ­£ç¢ºçæ ¼å¼å¯ç¢ºä¿èææå¨åå·¥ä½æµç¨çç¸å®¹æ§ã",
        howToUse: "1. è¼¸å¥æ¢ç¢¼æéçæ¸å­ææå­ã\n2. é¸ææ¢ç¢¼æ ¼å¼ã\n3. ç¢çä¸¦ä¸è¼æ¢ç¢¼åçã",
        faq: [
          { q: "ä»éº¼æ¯æ¢ç¢¼ç¢çå¨ï¼", a: "æ¢ç¢¼ç¢çå¨æ ¹ææ¨è¼¸å¥çæå­ææ¸å­å»ºç«æ©å¨å¯è®çä»£ç¢¼ã" },
          { q: "ææè©²é¸æåªç¨®æ¢ç¢¼æ ¼å¼ï¼", a: "æä½³æ ¼å¼åæ±ºæ¼æ¢ç¢¼çä½¿ç¨å ´æ¯ãé¶å®ç¢åãåº«å­æ¨ç±¤åç©æµç³»çµ±å¯è½éè¦ä¸åçæ¢ç¢¼æ¨æºã" },
          { q: "å¯ä»¥åå°ç¢ççæ¢ç¢¼åï¼", a: "æ¯çãç¢çæ¢ç¢¼å¾ï¼æ¨å¯ä»¥ä¸è¼ä¸¦åå°ç¨æ¼æ¨ç±¤ãåè£æå§é¨ä½¿ç¨ã" },
          { q: "æ­¤å·¥å·é©åå°åä¼æ¥­åï¼", a: "æ¯çãå®é©ç¨æ¼éè¦å¿«éå»ºç«æ¢ç¢¼çå°ååºãååº«ãè¾¦å¬å®¤åå¶ä»åéã" }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "å»ºç«ä½ä½æ®µè½æå­ã" },
    },
    common: {
      copyAll: "å¨é¨è¤è£½",
      clear: "æ¸é¤",
      sample: "ç¯ä¾æå­",
      placeholder: "å¨æ­¤èè²¼ä¸æè¼¸å¥æå­...",
      paragraphs: "æ®µè½æ¸",
      generatedText: "çæçæå­",
      charCountWithSpaces: "å­åæ¸ (å«ç©ºæ ¼)",
      charCountWithoutSpaces: "å­åæ¸ (ä¸å«ç©ºæ ¼)",
      whichPosition: "æ¨æ³æ¥æ¾åªåå­åä½ç½®ï¼",
      backToTools: "è¿åå·¥å·åè¡¨",
      copied: "å·²è¤è£½å°åªè²¼ç°¿ï¼",
      languageSelect: "é¸æå§å®¹èªè¨",
      highlightHelp: "* æå®ç´¢å¼èì å­åå°å¨ä¸é¢çæå­ååä¸­å³æçªåºé¡¯ç¤ºã",
      allTools: "ææå·¥å·",
      footerNote1: "æ­¤å·¥å·æ¯ apps24 å¯¦ç¨å·¥å·å¥ä»¶çä¸é¨åã",
      footerNote2: "ææèçåå¨æ¨ççè¦½å¨ä¸­æ¬å°å®æï¼ä»¥å¯¦ç¾æå¤§çé±ç§åéåº¦ã",
      koLabel: "éèª",
      enLabel: "è±èª",
      textCategory: "ææ¬",
      utilityCategory: "å¬ç¨ç¨å¼",
      positionPlaceholder: "ä½ç½®",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "å¤§å°",
      customColor: "é¡è²",
      presetColors: "é è¨­",
      homeTitle: "å¿«éå¤èªè¨å·¥å·",
      homeSubtitle: "Apps24 æ¯ä¸åå¤èªè¨ç·ä¸å·¥å·ç¶²ç«ï¼å°çºå¸æå¿«éãç°¡å®ãå¯¦ç¨å°å®æä»»åï¼ä¸ä¸æ³ç¶æ­·å¤é¤æ­¥é©çä½¿ç¨èèæé ã",
      homeIntro1: "Apps24 æ¯ä¸åå¤èªè¨ç·ä¸å·¥å·ç¶²ç«ï¼å°çºå¸æå¿«éãç°¡å®ãå¯¦ç¨å°å®æä»»åï¼ä¸ä¸æ³ç¶æ­·å¤é¤æ­¥é©çä½¿ç¨èèæé ãä½¿ç¨èç¡éçºäºå°åä»»åä¸è¼è»é«æå»ºç«å¸³èï¼åªééåé é¢ãç«å³ä½¿ç¨å·¥å·ï¼ä¸¦å¨å¹¾æ¬¡é»æå§åå¾çµæã",
      homeIntro2: "æåçç®æ¨æ¯è®æ´å¤ä½¿ç¨èæ´è¼é¬å°å®ææ¥å¸¸æ¸ä½ä»»åãç¡è«ä½ æ¯çµ±è¨å­æ¸çå­¸çãæºåé£çµæå§å®¹çè¡é·äººå¡ãæª¢æ¥ JSON æ Base64 è³æçéç¼èãèçè²å½©çè¨­è¨å¸«ï¼ææ¯å»ºç« QR Code èæ¢ç¢¼çåå®¶ï¼Apps24 é½æä¾è¼éãææä¸å®¹æä½¿ç¨çå·¥å·ã",
      homeAboutTitle: "éæ¼ Apps24",
      homeWhatYouCanDoTitle: "ä½ å¯ä»¥å¨ Apps24 ä¸åä»éº¼",
      homeWhatYouCanDoBody: "Apps24 éåäºä¸ç³»åæçºæ´åççè¦½å¨å·¥å·ï¼æ¶µèæå­ãåçãæ ¼å¼èçãè¦è¦ºå·¥å·èæè¡å·¥ä½æµç¨ãä½ å¯ä»¥å£ç¸®åçãè½ææå­å¤§å°å¯«ãé©è­ JSONãç¢çå¯ç¢¼ãæ¯è¼æå­å·®ç°ãé²è¡ Base64 ç·¨ç¢¼èè§£ç¢¼ãå»ºç« QR Codeãç¢çæ¢ç¢¼ç­ç­ãéäºå·¥å·æ¯çºç­æéãç®æ¨æç¢ºçä»»åèè¨­è¨ãä½¿ç¨èä¸éè¦å¨è¤éçä»é¢ä¸­ä¾åå°æ¾ï¼åªéééæ¸æ¥ççé¢èç°¡å®çæµç¨ï¼ä¸æ¬¡è§£æ±ºä¸ååé¡ã",
      homeWhyUsersChooseTitle: "çºä»éº¼ä½¿ç¨èé¸æ Apps24",
      homeWhyUsersChoosePoints: [
        "ç°¡å®ä¸å®¹æä½¿ç¨çä»é¢",
        "é©åå¿«éä»»åççè¦½å¨å·¥å·",
        "é¢åå¨çä½¿ç¨èçå¤èªè¨æ¯æ´",
        "ç¬¦åçå¯¦éæ±çå¯¦ç¨åè½",
      ],
      homeOngoingFocusTitle: "çºæ¥å¸¸ä½¿ç¨èè¨­è¨",
      homeOngoingFocusBody: "Apps24 æ¯çºå·¥ä½ãå­¸ç¿èæ¥å¸¸ç·ä¸æ´»åä¸­å¸¸è¦çåç¨®æ¸ä½ä»»åèè¨­è¨ãæäºä½¿ç¨èéè¦çµæ§åè³ææç·¨ç¢¼ç¸éçæè¡å·¥å·ï¼æäºä½¿ç¨èéè¦å¯«ä½ãæçæç¼ä½å§å®¹çè¼å©å·¥å·ï¼éæä¸äºä½¿ç¨èéè¦ QR Codeãæ¢ç¢¼æå¯ç¢¼ç¢çç­å¯¦ç¨åè½ãééå°éäºå·¥å·éä¸­å¨åä¸åå¹³å°ï¼Apps24 å¹«å©ä½¿ç¨èç¯çæéï¼ä¸¦æ¸å°å°ä¸å¿è¦è»é«çä¾è³´ãç±æ¼å¹³å°æ¯æ´å¤èªè¨ï¼ä½¿ç¨èä¹å¯ä»¥å¨ç¶­æç¸åæ ¸å¿å·¥å·é«é©çåæï¼ä½¿ç¨èªå·±æ´çæçèªè¨ãApps24 çå¤§å¤æ¸å·¥å·é½å¯ç´æ¥å¨çè¦½å¨ä¸­éä½ï¼å æ­¤ç¡è«å¨æ¡é¢è£ç½®æè¡åè£ç½®ä¸é½è½æ¹ä¾¿ä½¿ç¨ãéç¨®æ¹å¼å¯å¹«å©ä½¿ç¨èå¿«éå®æä»»åï¼èä¸ææ¿ç°¡å®æµç¨å¢å é¡å¤è² æãæåèªçºï¼ç·ä¸å·¥å·æè©²å®¹æè¢«æ¾å°ãå®¹æè¢«çè§£ãå®¹æè¢«ä½¿ç¨ãé¨èç¶²ç«æçºæé·ï¼Apps24 ä¹æç¹¼çºæéåæ¹åç¼å±ãApps24 ééæ°å¢å·¥å·èåªåå§å®¹æçºæ´å±ãæåæ­£åªåè®æ¯ä¸åé é¢å°é¦æ¬¡é è¨ªèèåè¨ªä½¿ç¨èé½æ´æå¹«å©ãæ´å·è³è¨å¹å¼ï¼ä¹æ´å¯¦ç¨ãå¦æä½ æ­£å¨å°æ¾é©åæ¥å¸¸ç¶²é ä»»åçå¿«éå¤èªè¨å·¥å·ï¼Apps24 ææ¯ä¸åç°¡å®ä¸å¯é çèµ·é»ã",
      rulerHowTo: "å¦ä½ä½¿ç¨ç·ä¸æ¨å°º",
      rulerStep1: "å°ä¿¡ç¨å¡æ°´å¹³æ¾å¨é¶å»åº¦èã",
      rulerStep2: "è¼¸å¥æ¸¬å¾çå¡çå¯¬åº¦ä¸¦é»æâæ ¡æºâã",
      rulerStep3: "ç¾å¨æ¨å¯ä»¥æ¸¬éæéçç©é«ã",
      rulerEnterCardWidth: "è¼¸å¥ä¿¡ç¨å¡å¯¬åº¦",
      rulerExample: "ä¾å¦ï¼å¦æå¯¬åº¦çº 10.4 åç±³ï¼è¼¸å¥ 10.4",
      rulerTip: "æç¤ºï¼ä½¿ç¨ç«å¸å³ä¸è§çèè²ææèª¿æ´å¶å¤§å°ã",
      calibrate: "æ ¡æº",
      changeTo: "åæè³",
      exitFullscreen: "éåºå¨å±",
      fullscreen: "å¨å±",
      frLabel: "æ³èª",
      jaLabel: "æ¥èª",
      zhLabel: "ä¸­æ (ç°¡é«)",
      zhTWLabel: "ä¸­æ (ç¹é«)",
      ptLabel: "è¡èçèª",
      esLabel: "è¥¿ç­çèª",
      deLabel: "å¾·èª",
      arLabel: "é¿æä¼¯èª",
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
      whatIs: "{0}æ¯ä»éº¼ï¼",
      whenToUse: "ä»éº¼æåä½¿ç¨æ­¤å·¥å·ï¼",
      howToUseTitle: "å¦ä½ä½¿ç¨ {0}",
      faqTitle: "å¸¸è¦åé¡",
      howItWorks: "éä½åç",
      unitLength: "é·åº¦",
      unitWeight: "éé",
      unitArea: "é¢ç©",
      unitVolume: "é«ç©",
      unitTemperature: "æº«åº¦",
      unitSpeed: "éåº¦",
      unitDigital: "æ¸ä½å²å­",
      from: "å¾",
      to: "å°",
      unitAccuracyNote: "* é«ç²¾åº¦è½æã",
    },
  },
  pt: {
    tools: {
      imagecompressor: {
        title: "Compressor de Imagens / Conversor WebP",
        description: "Reduza o tamanho dos arquivos de imagem e converta para WebP para melhor desempenho na web.",
        seo: "Comprimir e converter para WebP online.",
        longDescription: "Nosso compressor de imagens gratuito ajuda vocÃª a reduzir o tamanho dos arquivos de imagem em segundos, sem instalar nenhum software. VocÃª tambÃ©m pode converter imagens para o formato WebP para melhor desempenho na web. Esta ferramenta Ã© Ãºtil para blogueiros, donos de lojas online, estudantes, profissionais de marketing e qualquer pessoa que precise de imagens de carregamento rÃ¡pido.",
        usageContext: "Comprimir imagens Ã© Ãºtil quando vocÃª deseja melhorar a velocidade das pÃ¡ginas, reduzir o uso de armazenamento ou atender aos limites de tamanho de arquivo para sites e e-mails. Imagens menores tambÃ©m melhoram a experiÃªncia do usuÃ¡rio em dispositivos mÃ³veis. WebP Ã© um formato moderno projetado para fornecer arquivos menores mantendo boa qualidade visual.",
        howToUse: "1. Envie seu arquivo de imagem.\n2. Escolha comprimir a imagem ou convertÃª-la para WebP.\n3. Visualize o resultado e baixe o arquivo otimizado.",
        faq: [
          { q: "Esta ferramenta Ã© gratuita?", a: "Sim. VocÃª pode comprimir e converter imagens online gratuitamente." },
          { q: "Quais tipos de arquivo sÃ£o suportados?", a: "Formatos comuns de imagem web como JPG e PNG sÃ£o geralmente suportados." },
          { q: "A qualidade da imagem mudarÃ¡ apÃ³s a compressÃ£o?", a: "Alguns mÃ©todos de compressÃ£o podem reduzir ligeiramente a qualidade, mas o objetivo Ã© manter a imagem visualmente Ãºtil enquanto reduz o tamanho do arquivo." },
          { q: "Por que converter imagens para WebP?", a: "Os arquivos WebP geralmente sÃ£o menores do que JPG ou PNG, tornando-os Ãºteis para sites, blogs e outros conteÃºdos online." }
        ]
      },
      caseconverter: {
        title: "Conversor de MaiÃºsculas e MinÃºsculas",
        description: "Converta texto para maiÃºsculas, minÃºsculas ou formato de tÃ­tulo.",
        seo: "Converter texto online para maiÃºsculas ou minÃºsculas.",
        longDescription: "O Conversor de MaiÃºsculas e MinÃºsculas Ã© uma ferramenta online simples que transforma texto entre maiÃºsculas, minÃºsculas e formato de tÃ­tulo. Ã Ãºtil para editar tÃ­tulos, corrigir formataÃ§Ã£o, preparar documentos e limpar texto para sites, e-mails e relatÃ³rios.",
        usageContext: "Esta ferramenta Ã© Ãºtil para corrigir manchetes, preparar tÃ­tulos de artigos, formatar textos de marketing, limpar texto importado ou padronizar conteÃºdo antes da publicaÃ§Ã£o.",
        howToUse: "1. Cole ou digite seu texto na caixa de entrada.\n2. Selecione o formato desejado: maiÃºsculas, minÃºsculas ou formato de tÃ­tulo.\n3. Copie o resultado convertido.",
        faq: [
          { q: "O que Ã© formato de tÃ­tulo (Title Case)?", a: "O formato de tÃ­tulo Ã© um estilo de escrita onde palavras importantes comeÃ§am com letra maiÃºscula. Ã comumente usado para tÃ­tulos de artigos e cabeÃ§alhos." },
          { q: "Posso converter textos longos?", a: "Sim. VocÃª pode converter textos curtos ou longos diretamente na ferramenta." },
          { q: "Ã Ãºtil para tÃ­tulos de SEO?", a: "Sim. Pode ajudÃ¡-lo a formatar tÃ­tulos de pÃ¡gina e cabeÃ§alhos de forma mais consistente." },
          { q: "Esta ferramenta funciona para idiomas alÃ©m do inglÃªs?", a: "Funciona melhor para idiomas baseados em alfabeto, especialmente inglÃªs, francÃªs e alemÃ£o." }
        ]
      },
      jsonformatter: {
        title: "Formatador e Validador JSON",
        description: "Limpe, organize e valide dados JSON online.",
        seo: "Formatar e validar JSON online.",
        longDescription: "O Formatador e Validador JSON ajuda vocÃª a limpar, organizar e verificar dados JSON online. Ã Ãºtil para desenvolvedores, testadores, estudantes e usuÃ¡rios de API que precisam de saÃ­da JSON legÃ­vel ou querem encontrar erros de sintaxe rapidamente.",
        usageContext: "JSON bruto Ã© frequentemente difÃ­cil de ler, especialmente quando comprimido em uma Ãºnica linha. A formataÃ§Ã£o adiciona indentaÃ§Ã£o e estrutura adequadas, facilitando a depuraÃ§Ã£o e o compartilhamento. Um pequeno erro de sintaxe no JSON pode quebrar uma requisiÃ§Ã£o de API ou arquivo de configuraÃ§Ã£o.",
        howToUse: "1. Cole seu JSON na caixa de entrada.\n2. Clique no botÃ£o de formatar ou validar.\n3. Revise o resultado formatado ou verifique a mensagem de erro.",
        faq: [
          { q: "O que Ã© JSON?", a: "JSON significa JavaScript Object Notation. Ã um formato comum usado para armazenar e trocar dados estruturados." },
          { q: "Esta ferramenta pode corrigir JSON invÃ¡lido automaticamente?", a: "Pode ajudar a identificar problemas de formataÃ§Ã£o e estrutura, mas alguns erros podem precisar ser corrigidos manualmente." },
          { q: "Por que meu JSON Ã© invÃ¡lido?", a: "RazÃµes comuns incluem vÃ­rgulas ausentes, vÃ­rgulas extras, colchetes incorretos ou uso de aspas simples em vez de duplas." },
          { q: "Esta ferramenta Ã© apenas para desenvolvedores?", a: "NÃ£o. TambÃ©m Ã© Ãºtil para estudantes, analistas e qualquer pessoa que trabalhe com dados JSON." }
        ]
      },
      passwordgenerator: {
        title: "Gerador de Senhas",
        description: "Gere instantaneamente senhas fortes e aleatÃ³rias no seu navegador.",
        seo: "Gere instantaneamente senhas fortes no seu navegador. Gerador de senhas gratuito com opÃ§Ãµes personalizÃ¡veis de comprimento e caracteres.",
        longDescription: "O Gerador de Senhas Ã© uma ferramenta simples que ajuda os usuÃ¡rios a criar senhas fortes e aleatÃ³rias para contas pessoais, de trabalho e comerciais. Projetado para quem deseja gerar senhas de forma mais rÃ¡pida e segura, em vez de reutilizar combinaÃ§Ãµes fracas.",
        usageContext: "Use esta ferramenta ao criar uma nova conta, substituir uma senha antiga ou melhorar a seguranÃ§a de contas com senhas curtas ou repetidas.",
        howToUse: "1. Escolha o comprimento da senha.\n2. Selecione os tipos de caracteres a incluir (letras maiÃºsculas, minÃºsculas, nÃºmeros, sÃ­mbolos).\n3. Clique em Gerar Senha.\n4. Copie e salve a senha em um local seguro.",
        faq: [
          { q: "Por que usar um gerador de senhas?", a: "Ele cria senhas mais fortes e menos previsÃ­veis do que as feitas manualmente, reduzindo o risco de credenciais fracas." },
          { q: "O que torna uma senha mais forte?", a: "Senhas longas com letras, nÃºmeros e sÃ­mbolos sÃ£o mais difÃ­ceis de adivinhar." },
          { q: "Posso usar a mesma senha para vÃ¡rios sites?", a: "Ã mais seguro usar uma senha diferente para cada conta." },
          { q: "Onde armazenar as senhas geradas?", a: "A opÃ§Ã£o mais segura geralmente Ã© um gerenciador de senhas confiÃ¡vel." }
        ]
      },
      textdiffchecker: { title: "Comparador de Texto", description: "Compare textos e encontre diferenÃ§as.", seo: "Encontrar diferenÃ§as entre textos." },
      base64encoder: {
        title: "Codificador / Decodificador Base64",
        description: "Converta texto em Base64 ou decodifique instantaneamente.",
        seo: "Codificador e decodificador Base64 rÃ¡pido e confiÃ¡vel. Converta texto em Base64 ou decodifique strings instantaneamente com ferramenta leve.",
        longDescription: "O Codificador/Decodificador Base64 Ã© um utilitÃ¡rio baseado em navegador que converte texto simples para o formato Base64 e decodifica strings Base64 de volta para texto legÃ­vel. Ãtil para desenvolvimento, testes e tarefas de codificaÃ§Ã£o simples.",
        usageContext: "Use quando precisar codificar texto, inspecionar valores Base64 ou decodificar conteÃºdo codificado.",
        howToUse: "1. Digite ou cole seu texto.\n2. Clique em Codificar para converter para Base64, ou Decodificar para converter Base64 em conteÃºdo legÃ­vel.\n3. Verifique o resultado na Ã¡rea de saÃ­da.\n4. Clique em Copiar para usar o resultado.",
        faq: [
          { q: "Base64 Ã© uma forma de criptografia?", a: "NÃ£o. Base64 Ã© um mÃ©todo de codificaÃ§Ã£o para representaÃ§Ã£o de dados, nÃ£o um sistema de seguranÃ§a." },
          { q: "Quando o Base64 Ã© usado?", a: "Frequentemente em APIs, conteÃºdo de e-mail, incorporaÃ§Ã£o em HTML/CSS, transporte de dados e documentaÃ§Ã£o tÃ©cnica." },
          { q: "Esta ferramenta pode decodificar qualquer string Base64?", a: "Pode decodificar texto Base64 vÃ¡lido. Entradas incompletas ou invÃ¡lidas podem falhar." },
          { q: "Esta ferramenta Ã© apenas para desenvolvedores?", a: "NÃ£o. TambÃ©m Ã© Ãºtil para estudantes, analistas, profissionais de marketing e outros." }
        ]
      },
      colorconverter: {
        title: "Conversor de CÃ³digo de Cor",
        description: "Converta instantaneamente valores de cor HEX, RGB e HSL.",
        seo: "Converta instantaneamente valores de cor HEX, RGB e HSL. Ãtil para design web, sistemas de UI e desenvolvimento front-end.",
        longDescription: "O Conversor de CÃ³digo de Cor Ã© uma ferramenta online que ajuda os usuÃ¡rios a converter valores de cor entre os formatos HEX, RGB e HSL. Ãtil para web design, trabalho com UI, desenvolvimento front-end e branding.",
        usageContext: "Use quando precisar converter uma cor de um formato para outro, verificar valores correspondentes para sistemas de design ou copiar cÃ³digos de cores para CSS.",
        howToUse: "1. Insira um valor HEX ou use o seletor de cores.\n2. Veja instantaneamente os valores convertidos HEX, RGB e HSL.\n3. Clique em Copiar ao lado do valor desejado.\n4. Clique em Redefinir para comeÃ§ar com uma nova cor.",
        faq: [
          { q: "Qual Ã© a diferenÃ§a entre HEX, RGB e HSL?", a: "HEX Ã© comum em web design, RGB baseia-se em valores de luz vermelho, verde e azul, e HSL representa matiz, saturaÃ§Ã£o e luminosidade." },
          { q: "Para quem esta ferramenta Ã© Ãºtil?", a: "Para designers, desenvolvedores, profissionais de marketing, estudantes e qualquer pessoa que trabalhe com cores digitais." },
          { q: "Posso usar esses valores em CSS?", a: "Sim. HEX, RGB e HSL sÃ£o todos comumente usados em CSS." },
          { q: "Esta ferramenta suporta verificaÃ§Ã£o rÃ¡pida de cores?", a: "Sim. VocÃª pode selecionar uma cor visualmente e revisar imediatamente os valores convertidos." }
        ]
      },
      ruler: { title: "RÃ©gua Online", description: "MeÃ§a distÃ¢ncias na tela com calibraÃ§Ã£o." },
      wordcounter: { title: "Contador de Palavras", description: "Conte caracteres e palavras em tempo real." },
      countdown: { title: "CronÃ´metro", description: "Defina temporizadores com modo tela cheia." },
      digitalclock: { title: "RelÃ³gio Digital", description: "Verifique a hora atual em tempo real." },
      screenlamp: { title: "Luz de Tela", description: "Transforme sua tela em uma luz colorida." },
      qrgenerator: {
        title: "Gerador de QR Code",
        description: "Crie QR codes para links, textos e contatos.",
        longDescription: "O Gerador de QR Code permite criar QR codes para texto, links, informaÃ§Ãµes de contato e outros conteÃºdos simples. Ã Ãºtil para empresas, eventos, restaurantes, embalagens e compartilhamento pessoal. VocÃª pode gerar um QR code em segundos e baixÃ¡-lo para uso digital ou impresso.",
        usageContext: "QR codes sÃ£o comumente usados para links de sites, acesso a menus, check-ins de eventos, compartilhamento de contatos, instruÃ§Ãµes de pagamento e etiquetas de produtos. Um QR code facilita o acesso dos usuÃ¡rios a informaÃ§Ãµes sem digitar textos longos manualmente.",
        howToUse: "1. Digite o texto, URL ou conteÃºdo que deseja codificar.\n2. Gere o QR code.\n3. Baixe e use a imagem onde necessÃ¡rio.",
        faq: [
          { q: "Posso criar um QR code para um link de site?", a: "Sim. VocÃª pode gerar um QR code para uma URL e compartilhÃ¡-lo em forma impressa ou digital." },
          { q: "Posso usar QR codes em materiais comerciais?", a: "Sim. QR codes sÃ£o frequentemente usados em folhetos, pÃ´steres, cartÃµes de visita, embalagens e menus." },
          { q: "Os QR codes expiram?", a: "Um QR code padrÃ£o gerado a partir de conteÃºdo fixo nÃ£o expira por si sÃ³. No entanto, o conteÃºdo de destino deve permanecer disponÃ­vel para que as leituras continuem funcionando." },
          { q: "Esta ferramenta Ã© gratuita?", a: "Sim. VocÃª pode gerar QR codes online sem instalar software adicional." }
        ]
      },
      barcodegenerator: {
        title: "Gerador de CÃ³digo de Barras",
        description: "Crie cÃ³digos de barras para produtos, etiquetas e inventÃ¡rio.",
        longDescription: "O Gerador de CÃ³digo de Barras ajuda vocÃª a criar cÃ³digos de barras para produtos, etiquetas, inventÃ¡rio, embalagens e rastreamento interno. Ã Ãºtil para pequenas empresas, armazÃ©ns, escritÃ³rios, escolas e qualquer pessoa que precise de geraÃ§Ã£o rÃ¡pida de cÃ³digos de barras online.",
        usageContext: "CÃ³digos de barras sÃ£o amplamente usados em varejo, controle de inventÃ¡rio, remessa, rastreamento de ativos e rotulagem de documentos. Eles facilitam a identificaÃ§Ã£o rÃ¡pida de itens e reduzem erros de entrada manual. Escolher o formato correto garante compatibilidade com scanners e fluxos de trabalho.",
        howToUse: "1. Insira o nÃºmero ou texto necessÃ¡rio para seu cÃ³digo de barras.\n2. Selecione o formato do cÃ³digo de barras.\n3. Gere e baixe a imagem do cÃ³digo de barras.",
        faq: [
          { q: "O que Ã© um gerador de cÃ³digo de barras?", a: "Um gerador de cÃ³digo de barras cria um cÃ³digo legÃ­vel por mÃ¡quina com base no texto ou nÃºmeros que vocÃª insere." },
          { q: "Qual formato de cÃ³digo de barras devo escolher?", a: "O melhor formato depende de onde o cÃ³digo de barras serÃ¡ usado. Produtos de varejo, etiquetas de inventÃ¡rio e sistemas de remessa podem exigir padrÃµes diferentes." },
          { q: "Posso imprimir o cÃ³digo de barras gerado?", a: "Sim. ApÃ³s gerar o cÃ³digo de barras, vocÃª pode baixÃ¡-lo e imprimi-lo para etiquetas, embalagens ou uso interno." },
          { q: "Esta ferramenta Ã© adequada para pequenas empresas?", a: "Sim. Ã Ãºtil para pequenas lojas, armazÃ©ns, escritÃ³rios e outras equipes que precisam criar cÃ³digos de barras rapidamente." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "Gere parÃ¡grafos de texto fictÃ­cio." },
    },
    common: {
      copyAll: "Copiar tudo",
      clear: "Limpar",
      sample: "Texto de exemplo",
      placeholder: "Cole ou digite o texto aqui...",
      paragraphs: "ParÃ¡grafos",
      generatedText: "Texto gerado",
      charCountWithSpaces: "Contagem de caracteres (com espaÃ§os)",
      charCountWithoutSpaces: "Contagem de caracteres (sem espaÃ§os)",
      whichPosition: "Qual posiÃ§Ã£o de caractere vocÃª deseja encontrar?",
      backToTools: "Voltar para ferramentas",
      copied: "Copiado para a Ã¡rea de transferÃªncia!",
      languageSelect: "Selecionar idioma do conteÃºdo",
      highlightHelp: "* O caractere no Ã­ndice especificado Ã© realÃ§ado em tempo real na Ã¡rea de texto acima.",
      allTools: "Todas as ferramentas",
      footerNote1: "Esta ferramenta faz parte da suite de utilitÃ¡rios apps24.",
      footerNote2: "Todo o processamento ocorre localmente no seu navegador para mÃ¡xima privacidade e velocidade.",
      koLabel: "Coreano",
      enLabel: "InglÃªs",
      textCategory: "Texto",
      utilityCategory: "UtilitÃ¡rio",
      positionPlaceholder: "PosiÃ§Ã£o",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Tamanho",
      customColor: "Cor",
      presetColors: "PredefiniÃ§Ãµes",
      homeTitle: "Ferramentas MultilÃ­ngues RÃ¡pidas",
      homeSubtitle: "Apps24 Ã© um site multilÃ­ngue de ferramentas online criado para pessoas que desejam utilitÃ¡rios rÃ¡pidos, simples e prÃ¡ticos, sem etapas desnecessÃ¡rias.",
      homeIntro1: "Apps24 Ã© um site multilÃ­ngue de ferramentas online criado para pessoas que desejam utilitÃ¡rios rÃ¡pidos, simples e prÃ¡ticos, sem etapas desnecessÃ¡rias. Em vez de baixar softwares ou criar uma conta para pequenas tarefas, os usuÃ¡rios podem abrir uma pÃ¡gina, usar uma ferramenta imediatamente e obter o resultado em apenas alguns cliques.",
      homeIntro2: "Nosso objetivo Ã© tornar as tarefas digitais do dia a dia mais fÃ¡ceis para uma ampla variedade de usuÃ¡rios. Seja vocÃª um estudante contando palavras, um profissional de marketing preparando links ou conteÃºdo, um desenvolvedor verificando dados JSON ou Base64, um designer trabalhando com cores, ou um empresÃ¡rio criando cÃ³digos QR e cÃ³digos de barras, o Apps24 oferece ferramentas leves, rÃ¡pidas de acessar e fÃ¡ceis de entender.",
      homeAboutTitle: "Sobre o Apps24",
      homeWhatYouCanDoTitle: "O que vocÃª pode fazer no Apps24",
      homeWhatYouCanDoBody: "O Apps24 reÃºne uma coleÃ§Ã£o crescente de ferramentas Ãºteis baseadas no navegador para texto, imagens, formataÃ§Ã£o, utilitÃ¡rios visuais e fluxos de trabalho tÃ©cnicos. VocÃª pode compactar imagens, converter maiÃºsculas e minÃºsculas, validar JSON, gerar senhas, comparar diferenÃ§as de texto, codificar e decodificar Base64, criar cÃ³digos QR, gerar cÃ³digos de barras e muito mais. Essas ferramentas foram projetadas para tarefas curtas e objetivas, de modo que vocÃª possa resolver um problema de cada vez com um layout limpo e um fluxo simples.",
      homeWhyUsersChooseTitle: "Por que os usuÃ¡rios escolhem o Apps24",
      homeWhyUsersChoosePoints: [
        "interfaces simples e fÃ¡ceis de usar",
        "ferramentas rÃ¡pidas baseadas no navegador para tarefas rÃ¡pidas",
        "acesso multilÃ­ngue para usuÃ¡rios globais",
        "utilitÃ¡rios prÃ¡ticos para necessidades reais",
      ],
      homeOngoingFocusTitle: "Criado para o uso diÃ¡rio",
      homeOngoingFocusBody: "O Apps24 foi projetado para uma ampla variedade de tarefas digitais que surgem no trabalho diÃ¡rio, nos estudos e nas atividades online. Alguns usuÃ¡rios precisam de ferramentas tÃ©cnicas para dados estruturados ou codificaÃ§Ã£o. Outros precisam de ferramentas de conteÃºdo para escrever, formatar ou publicar. Outros ainda buscam geradores prÃ¡ticos para cÃ³digos QR, cÃ³digos de barras e senhas. Ao reunir esses utilitÃ¡rios em um sÃ³ lugar, o Apps24 ajuda os usuÃ¡rios a economizar tempo e evitar softwares desnecessÃ¡rios. Como a plataforma Ã© multilÃ­ngue, ela tambÃ©m oferece suporte a usuÃ¡rios que preferem trabalhar em seu prÃ³prio idioma, mantendo a mesma experiÃªncia principal da ferramenta. A maioria das ferramentas do Apps24 foi projetada para funcionar diretamente no navegador, o que facilita o uso tanto em computadores quanto em dispositivos mÃ³veis. Acreditamos que ferramentas online devem ser fÃ¡ceis de encontrar, fÃ¡ceis de entender e fÃ¡ceis de usar. Essa Ã© a direÃ§Ã£o que o Apps24 continua seguindo Ã  medida que o site cresce. O Apps24 continua se expandindo com novas ferramentas e conteÃºdo aprimorado. Estamos trabalhando para tornar cada pÃ¡gina mais Ãºtil, mais informativa e mais valiosa, tanto para visitantes de primeira viagem quanto para usuÃ¡rios recorrentes. Se vocÃª procura ferramentas multilÃ­ngues rÃ¡pidas para tarefas web do dia a dia, o Apps24 foi criado para oferecer um ponto de partida simples e confiÃ¡vel.",
      rulerHowTo: "Como usar a rÃ©gua online",
      rulerStep1: "Coloque um cartÃ£o de crÃ©dito horizontalmente na marca zero.",
      rulerStep2: "Insira a largura medida do cartÃ£o e clique em 'Calibrar'.",
      rulerStep3: "Agora vocÃª pode medir o objeto desejado.",
      rulerEnterCardWidth: "Insira a largura do cartÃ£o de crÃ©dito",
      rulerExample: "Exemplo: Se a largura for 10,4 cm, insira 10,4",
      rulerTip: "Dica: Use a alÃ§a azul no canto inferior direito da tela para redimensionÃ¡-la.",
      calibrate: "Calibrar",
      changeTo: "Mudar para",
      exitFullscreen: "Sair da tela cheia",
      fullscreen: "Tela cheia",
      frLabel: "FrancÃªs",
      jaLabel: "JaponÃªs",
      zhLabel: "ChinÃªs (Simplificado)",
      zhTWLabel: "ChinÃªs (Tradicional)",
      ptLabel: "PortuguÃªs",
      esLabel: "Espanhol",
      deLabel: "AlemÃ£o",
      arLabel: "Ãrabe",
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
      whatIs: "O que Ã© {0}?",
      whenToUse: "Quando usar esta ferramenta?",
      howToUseTitle: "Como usar {0}",
      faqTitle: "Perguntas frequentes",
      howItWorks: "Como funciona",
      unitLength: "Comprimento",
      unitWeight: "Peso",
      unitArea: "Ãrea",
      unitVolume: "Volume",
      unitTemperature: "Temperatura",
      unitSpeed: "Velocidade",
      unitDigital: "Digital",
      from: "De",
      to: "Para",
      unitAccuracyNote: "* ConversÃ£o de alta precisÃ£o.",
    },
  },
  es: {
    tools: {
      imagecompressor: {
        title: "Compresor de ImÃ¡genes / Conversor WebP",
        description: "Reduzca el tamaÃ±o de los archivos de imagen y convierta a WebP para un mejor rendimiento web.",
        seo: "Comprimir y convertir a WebP en lÃ­nea.",
        longDescription: "Nuestro compresor de imÃ¡genes gratuito le ayuda a reducir el tamaÃ±o de los archivos de imagen en segundos, sin instalar ningÃºn software. TambiÃ©n puede convertir imÃ¡genes al formato WebP para un mejor rendimiento web. Esta herramienta es Ãºtil para bloggers, propietarios de tiendas en lÃ­nea, estudiantes, especialistas en marketing y cualquier persona que necesite imÃ¡genes de carga rÃ¡pida.",
        usageContext: "Comprimir imÃ¡genes es Ãºtil cuando desea mejorar la velocidad de la pÃ¡gina, reducir el uso de almacenamiento o cumplir con los lÃ­mites de tamaÃ±o de archivo para sitios web y correos electrÃ³nicos. Las imÃ¡genes mÃ¡s pequeÃ±as tambiÃ©n mejoran la experiencia del usuario en dispositivos mÃ³viles. WebP es un formato moderno diseÃ±ado para proporcionar archivos mÃ¡s pequeÃ±os manteniendo una buena calidad visual.",
        howToUse: "1. Suba su archivo de imagen.\n2. Elija comprimir la imagen o convertirla a WebP.\n3. Previsualice el resultado y descargue el archivo optimizado.",
        faq: [
          { q: "Â¿Esta herramienta es gratuita?", a: "SÃ­. Puede comprimir y convertir imÃ¡genes en lÃ­nea de forma gratuita." },
          { q: "Â¿QuÃ© tipos de archivo son compatibles?", a: "Por lo general, se admiten formatos de imagen web comunes como JPG y PNG." },
          { q: "Â¿CambiarÃ¡ la calidad de la imagen despuÃ©s de la compresiÃ³n?", a: "Algunos mÃ©todos de compresiÃ³n pueden reducir ligeramente la calidad, pero el objetivo es mantener la imagen visualmente Ãºtil mientras se reduce el tamaÃ±o del archivo." },
          { q: "Â¿Por quÃ© convertir imÃ¡genes a WebP?", a: "Los archivos WebP suelen ser mÃ¡s pequeÃ±os que JPG o PNG, lo que los hace Ãºtiles para sitios web, blogs y otros contenidos en lÃ­nea." }
        ]
      },
      caseconverter: {
        title: "Conversor de MayÃºsculas y MinÃºsculas",
        description: "Convierta texto a mayÃºsculas, minÃºsculas o formato de tÃ­tulo.",
        seo: "Convertir texto a mayÃºsculas o minÃºsculas en lÃ­nea.",
        longDescription: "El Conversor de MayÃºsculas y MinÃºsculas es una herramienta en lÃ­nea simple que transforma texto entre mayÃºsculas, minÃºsculas y formato de tÃ­tulo. Es Ãºtil para editar tÃ­tulos, corregir el formato, preparar documentos y limpiar texto para sitios web, correos electrÃ³nicos e informes.",
        usageContext: "Esta herramienta es Ãºtil para corregir titulares, preparar tÃ­tulos de artÃ­culos, formatear texto de marketing, limpiar texto importado o estandarizar contenido antes de publicar.",
        howToUse: "1. Pegue o escriba su texto en el cuadro de entrada.\n2. Seleccione el formato deseado: mayÃºsculas, minÃºsculas o formato de tÃ­tulo.\n3. Copie el resultado convertido.",
        faq: [
          { q: "Â¿QuÃ© es el formato de tÃ­tulo (Title Case)?", a: "El formato de tÃ­tulo es un estilo de escritura donde las palabras importantes comienzan con mayÃºscula. Se usa comÃºnmente en tÃ­tulos de artÃ­culos y encabezados." },
          { q: "Â¿Puedo convertir textos largos?", a: "SÃ­. Puede convertir textos cortos o largos directamente en la herramienta." },
          { q: "Â¿Es Ãºtil para tÃ­tulos SEO?", a: "SÃ­. Puede ayudarle a formatear tÃ­tulos de pÃ¡gina y encabezados de forma mÃ¡s consistente." },
          { q: "Â¿Esta herramienta funciona para idiomas distintos al inglÃ©s?", a: "Funciona mejor para idiomas basados en alfabeto, especialmente inglÃ©s, francÃ©s y alemÃ¡n." }
        ]
      },
      jsonformatter: {
        title: "Formateador y Validador JSON",
        description: "Limpie, organice y valide datos JSON en lÃ­nea.",
        seo: "Formatear y validar JSON en lÃ­nea.",
        longDescription: "El Formateador y Validador JSON le ayuda a limpiar, organizar y verificar datos JSON en lÃ­nea. Es Ãºtil para desarrolladores, probadores, estudiantes y usuarios de API que necesitan una salida JSON legible o quieren encontrar errores de sintaxis rÃ¡pidamente.",
        usageContext: "El JSON sin procesar suele ser difÃ­cil de leer, especialmente cuando estÃ¡ comprimido en una sola lÃ­nea. El formateo aÃ±ade una sangrÃ­a y estructura adecuadas, facilitando la depuraciÃ³n y el intercambio. Un pequeÃ±o error de sintaxis en JSON puede romper una solicitud de API o un archivo de configuraciÃ³n.",
        howToUse: "1. Pegue su JSON en el cuadro de entrada.\n2. Haga clic en el botÃ³n de formatear o validar.\n3. Revise el resultado formateado o compruebe el mensaje de error.",
        faq: [
          { q: "Â¿QuÃ© es JSON?", a: "JSON significa JavaScript Object Notation. Es un formato comÃºn utilizado para almacenar e intercambiar datos estructurados." },
          { q: "Â¿Esta herramienta puede corregir automÃ¡ticamente un JSON invÃ¡lido?", a: "Puede ayudar a identificar problemas de formato y estructura, pero algunos errores pueden necesitar corregirse manualmente." },
          { q: "Â¿Por quÃ© mi JSON es invÃ¡lido?", a: "Las razones comunes incluyen comas faltantes, comas adicionales, corchetes incorrectos o el uso de comillas simples en lugar de dobles." },
          { q: "Â¿Esta herramienta es solo para desarrolladores?", a: "No. TambiÃ©n es Ãºtil para estudiantes, analistas y cualquier persona que trabaje con datos JSON." }
        ]
      },
      passwordgenerator: {
        title: "Generador de ContraseÃ±as",
        description: "Genera instantÃ¡neamente contraseÃ±as fuertes y aleatorias en tu navegador.",
        seo: "Genera instantÃ¡neamente contraseÃ±as fuertes en tu navegador. Generador de contraseÃ±as gratuito con opciones personalizables de longitud y caracteres.",
        longDescription: "El Generador de ContraseÃ±as es una herramienta en lÃ­nea sencilla que ayuda a los usuarios a crear contraseÃ±as fuertes y aleatorias para cuentas personales, de trabajo y comerciales. DiseÃ±ado para quienes desean generar contraseÃ±as de forma mÃ¡s rÃ¡pida y segura en lugar de reutilizar combinaciones dÃ©biles.",
        usageContext: "Use esta herramienta al crear una nueva cuenta, reemplazar una contraseÃ±a antigua o mejorar la seguridad de cuentas con contraseÃ±as cortas o repetidas.",
        howToUse: "1. Elija la longitud de la contraseÃ±a.\n2. Seleccione los tipos de caracteres a incluir (letras mayÃºsculas, minÃºsculas, nÃºmeros, sÃ­mbolos).\n3. Haga clic en Generar ContraseÃ±a.\n4. Copie y guarde la contraseÃ±a en un lugar seguro.",
        faq: [
          { q: "Â¿Por quÃ© usar un generador de contraseÃ±as?", a: "Ayuda a crear contraseÃ±as mÃ¡s fuertes y menos predecibles que las hechas manualmente, reduciendo el riesgo de credenciales dÃ©biles." },
          { q: "Â¿QuÃ© hace que una contraseÃ±a sea mÃ¡s fuerte?", a: "Las contraseÃ±as largas con letras, nÃºmeros y sÃ­mbolos son mÃ¡s difÃ­ciles de adivinar." },
          { q: "Â¿Puedo usar la misma contraseÃ±a en varios sitios?", a: "Es mÃ¡s seguro usar una contraseÃ±a diferente para cada cuenta." },
          { q: "Â¿DÃ³nde guardar las contraseÃ±as generadas?", a: "La opciÃ³n mÃ¡s segura suele ser un administrador de contraseÃ±as de confianza." }
        ]
      },
      textdiffchecker: { title: "Comparador de Texto", description: "Compare textos y encuentre diferencias.", seo: "Encontrar diferencias entre textos." },
      base64encoder: {
        title: "Codificador / Decodificador Base64",
        description: "Convierta texto a Base64 o decodifique instantÃ¡neamente.",
        seo: "Codificador y decodificador Base64 rÃ¡pido y confiable. Convierta texto al instante con una herramienta ligera basada en navegador.",
        longDescription: "El Codificador/Decodificador Base64 es una utilidad basada en navegador que convierte texto sin formato al formato Base64 y decodifica cadenas Base64 de vuelta a texto legible. Ãtil para desarrollo, pruebas y tareas de codificaciÃ³n simples.",
        usageContext: "Use cuando necesite codificar texto, inspeccionar valores Base64 o decodificar contenido codificado.",
        howToUse: "1. Escriba o pegue su texto.\n2. Haga clic en Codificar para convertir a Base64, o Decodificar para convertir Base64 en contenido legible.\n3. Revise el resultado en el Ã¡rea de salida.\n4. Haga clic en Copiar para usar el resultado.",
        faq: [
          { q: "Â¿Base64 es una forma de cifrado?", a: "No. Base64 es un mÃ©todo de codificaciÃ³n para representaciÃ³n de datos, no un sistema de seguridad." },
          { q: "Â¿CuÃ¡ndo se usa comÃºnmente Base64?", a: "En APIs, correos electrÃ³nicos, incrustaciÃ³n en HTML/CSS, transporte de datos y documentaciÃ³n tÃ©cnica." },
          { q: "Â¿Esta herramienta puede decodificar cualquier cadena Base64?", a: "Puede decodificar texto Base64 vÃ¡lido. Las entradas incompletas o invÃ¡lidas pueden fallar." },
          { q: "Â¿Esta herramienta es solo para desarrolladores?", a: "No. TambiÃ©n es Ãºtil para estudiantes, analistas, mercadÃ³logos y otros." }
        ]
      },
      colorconverter: {
        title: "Conversor de CÃ³digo de Color",
        description: "Convierta instantÃ¡neamente valores de color HEX, RGB y HSL.",
        seo: "Convierta instantÃ¡neamente valores de color HEX, RGB y HSL. Ãtil para diseÃ±o web, sistemas de UI y desarrollo front-end.",
        longDescription: "El Conversor de CÃ³digo de Color es una herramienta en lÃ­nea que ayuda a los usuarios a convertir valores de color entre los formatos HEX, RGB y HSL. Ãtil para diseÃ±o web, trabajo con UI, desarrollo front-end y branding.",
        usageContext: "Use cuando necesite convertir un color de un formato a otro, verificar valores coincidentes para sistemas de diseÃ±o o copiar cÃ³digos de color en CSS.",
        howToUse: "1. Ingrese un valor HEX o use el selector de color.\n2. Vea instantÃ¡neamente los valores convertidos HEX, RGB y HSL.\n3. Haga clic en Copiar junto al valor deseado.\n4. Haga clic en Restablecer para comenzar con un nuevo color.",
        faq: [
          { q: "Â¿CuÃ¡l es la diferencia entre HEX, RGB y HSL?", a: "HEX es comÃºn en diseÃ±o web, RGB se basa en valores de luz rojo, verde y azul, y HSL representa tono, saturaciÃ³n y luminosidad." },
          { q: "Â¿Para quiÃ©n es Ãºtil esta herramienta?", a: "Para diseÃ±adores, desarrolladores, mercadÃ³logos, estudiantes y cualquier persona que trabaje con colores digitales." },
          { q: "Â¿Puedo usar estos valores en CSS?", a: "SÃ­. HEX, RGB y HSL se usan comÃºnmente en CSS." },
          { q: "Â¿Esta herramienta admite verificaciÃ³n rÃ¡pida de colores?", a: "SÃ­. Puede seleccionar un color visualmente y revisar inmediatamente los valores convertidos." }
        ]
      },
      ruler: { title: "Regla en LÃ­nea", description: "Mida distancias en pantalla con calibraciÃ³n." },
      wordcounter: { title: "Contador de Palabras", description: "Cuente caracteres y palabras en tiempo real." },
      countdown: { title: "Cuenta Regresiva", description: "Configure temporizadores con modo pantalla completa." },
      digitalclock: { title: "Reloj Digital", description: "Consulte la hora actual en tiempo real." },
      screenlamp: { title: "Luz de Pantalla", description: "Convierta su pantalla en una luz de color." },
      qrgenerator: {
        title: "Generador de CÃ³digo QR",
        description: "Cree cÃ³digos QR para enlaces, texto y contactos.",
        longDescription: "El Generador de CÃ³digo QR le permite crear cÃ³digos QR para texto, enlaces, datos de contacto y otros contenidos simples. Es Ãºtil para empresas, eventos, restaurantes, embalajes y uso personal. Puede generar un cÃ³digo QR en segundos y descargarlo para uso digital o impreso.",
        usageContext: "Los cÃ³digos QR se utilizan comÃºnmente para enlaces de sitios web, acceso a menÃºs, registros de eventos, intercambio de contactos, instrucciones de pago y etiquetas de productos. Un cÃ³digo QR facilita que los usuarios abran una pÃ¡gina o accedan a informaciÃ³n sin escribir texto manualmente.",
        howToUse: "1. Ingrese el texto, URL o contenido que desea codificar.\n2. Genere el cÃ³digo QR.\n3. Descargue y use la imagen donde sea necesario.",
        faq: [
          { q: "Â¿Puedo crear un cÃ³digo QR para un enlace de sitio web?", a: "SÃ­. Puede generar un cÃ³digo QR para una URL y compartirlo en forma impresa o digital." },
          { q: "Â¿Puedo usar cÃ³digos QR en materiales comerciales?", a: "SÃ­. Los cÃ³digos QR se usan frecuentemente en folletos, carteles, tarjetas de visita, embalajes y menÃºs." },
          { q: "Â¿Los cÃ³digos QR caducan?", a: "Un cÃ³digo QR estÃ¡ndar generado a partir de contenido fijo no caduca por sÃ­ solo. Sin embargo, el contenido de destino debe permanecer disponible para que los escaneos sigan funcionando." },
          { q: "Â¿Esta herramienta es gratuita?", a: "SÃ­. Puede generar cÃ³digos QR en lÃ­nea sin instalar software adicional." }
        ]
      },
      barcodegenerator: {
        title: "Generador de CÃ³digos de Barras",
        description: "Cree cÃ³digos de barras para productos, etiquetas e inventario.",
        longDescription: "El Generador de CÃ³digos de Barras le ayuda a crear cÃ³digos de barras para productos, etiquetas, inventario, embalajes y seguimiento interno. Es Ãºtil para pequeÃ±as empresas, almacenes, oficinas, escuelas y cualquier persona que necesite generaciÃ³n rÃ¡pida de cÃ³digos de barras en lÃ­nea.",
        usageContext: "Los cÃ³digos de barras se utilizan ampliamente en el comercio minorista, el control de inventario, el envÃ­o, el seguimiento de activos y el etiquetado de documentos. Facilitan la identificaciÃ³n rÃ¡pida de artÃ­culos y reducen los errores de entrada manual. Elegir el formato correcto garantiza la compatibilidad con los lectores y los flujos de trabajo.",
        howToUse: "1. Ingrese el nÃºmero o texto necesario para su cÃ³digo de barras.\n2. Seleccione el formato de cÃ³digo de barras.\n3. Genere y descargue la imagen del cÃ³digo de barras.",
        faq: [
          { q: "Â¿QuÃ© es un generador de cÃ³digos de barras?", a: "Un generador de cÃ³digos de barras crea un cÃ³digo legible por mÃ¡quina basado en el texto o los nÃºmeros que usted ingresa." },
          { q: "Â¿QuÃ© formato de cÃ³digo de barras debo elegir?", a: "El mejor formato depende de dÃ³nde se utilizarÃ¡ el cÃ³digo de barras. Los productos minoristas, las etiquetas de inventario y los sistemas de envÃ­o pueden requerir diferentes estÃ¡ndares." },
          { q: "Â¿Puedo imprimir el cÃ³digo de barras generado?", a: "SÃ­. DespuÃ©s de generar el cÃ³digo de barras, puede descargarlo e imprimirlo para etiquetas, embalajes o uso interno." },
          { q: "Â¿Esta herramienta es adecuada para pequeÃ±as empresas?", a: "SÃ­. Es Ãºtil para pequeÃ±as tiendas, almacenes, oficinas y otros equipos que necesitan crear cÃ³digos de barras rÃ¡pidamente." }
        ]
      },
      dummytext: { title: "Lorem Ipsum", description: "Genere pÃ¡rrafos de texto de relleno." },
    },
    common: {
      copyAll: "Copiar todo",
      clear: "Limpiar",
      sample: "Texto de ejemplo",
      placeholder: "Pegue o escriba el texto aquÃ­...",
      paragraphs: "PÃ¡rrafos",
      generatedText: "Texto generado",
      charCountWithSpaces: "Recuento de caracteres (con espacios)",
      charCountWithoutSpaces: "Recuento de caracteres (sin espacios)",
      whichPosition: "Â¿QuÃ© posiciÃ³n de carÃ¡cter desea buscar?",
      backToTools: "Volver a herramientas",
      copied: "Â¡Copiado al portapapeles!",
      languageSelect: "Seleccionar idioma del contenido",
      highlightHelp: "* El carÃ¡cter en el Ã­ndice especificado se resalta en tiempo real dentro del Ã¡rea de texto de arriba.",
      allTools: "Todas las herramientas",
      footerNote1: "Esta herramienta es parte de la suite de utilidades apps24.",
      footerNote2: "Todo el procesamiento se realiza localmente en su navegador para una mÃ¡xima privacidad y velocidad.",
      koLabel: "Coreano",
      enLabel: "InglÃ©s",
      textCategory: "Texto",
      utilityCategory: "Utilidad",
      positionPlaceholder: "PosiciÃ³n",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "TamaÃ±o",
      customColor: "Color",
      presetColors: "Preajustes",
      homeTitle: "Herramientas MultilingÃ¼es RÃ¡pidas",
      homeSubtitle: "Apps24 es un sitio web multilingÃ¼e de herramientas en lÃ­nea creado para personas que buscan utilidades rÃ¡pidas, simples y prÃ¡cticas sin pasos innecesarios.",
      homeIntro1: "Apps24 es un sitio web multilingÃ¼e de herramientas en lÃ­nea creado para personas que buscan utilidades rÃ¡pidas, simples y prÃ¡cticas sin pasos innecesarios. En lugar de descargar software o crear una cuenta para tareas pequeÃ±as, los usuarios pueden abrir una pÃ¡gina, usar una herramienta de inmediato y obtener un resultado en solo unos clics.",
      homeIntro2: "Nuestro objetivo es facilitar las tareas digitales cotidianas para una amplia variedad de usuarios. Ya sea que seas un estudiante contando palabras, un profesional de marketing preparando enlaces o contenido, un desarrollador revisando datos JSON o Base64, un diseÃ±ador trabajando con colores o un empresario creando cÃ³digos QR y cÃ³digos de barras, Apps24 ofrece herramientas ligeras, rÃ¡pidas de usar y fÃ¡ciles de entender.",
      homeAboutTitle: "Acerca de Apps24",
      homeWhatYouCanDoTitle: "QuÃ© puedes hacer en Apps24",
      homeWhatYouCanDoBody: "Apps24 reÃºne una colecciÃ³n en crecimiento de herramientas Ãºtiles basadas en el navegador para texto, imÃ¡genes, formato, utilidades visuales y flujos de trabajo tÃ©cnicos. Puedes comprimir imÃ¡genes, convertir mayÃºsculas y minÃºsculas, validar JSON, generar contraseÃ±as, comparar diferencias de texto, codificar y decodificar Base64, crear cÃ³digos QR, generar cÃ³digos de barras y mucho mÃ¡s. Estas herramientas estÃ¡n diseÃ±adas para tareas cortas y especÃ­ficas, asÃ­ que puedes resolver un problema a la vez con un diseÃ±o limpio y un flujo sencillo.",
      homeWhyUsersChooseTitle: "Por quÃ© los usuarios eligen Apps24",
      homeWhyUsersChoosePoints: [
        "interfaces simples y fÃ¡ciles de usar",
        "herramientas rÃ¡pidas basadas en el navegador para tareas breves",
        "acceso multilingÃ¼e para usuarios de todo el mundo",
        "utilidades prÃ¡cticas para necesidades reales",
      ],
      homeOngoingFocusTitle: "DiseÃ±ado para el uso diario",
      homeOngoingFocusBody: "Apps24 estÃ¡ diseÃ±ado para una amplia variedad de tareas digitales que surgen en el trabajo diario, el estudio y la actividad en lÃ­nea. Algunos usuarios necesitan herramientas tÃ©cnicas para datos estructurados o codificaciÃ³n. Otros necesitan herramientas de contenido para escribir, dar formato o publicar. Otros buscan generadores prÃ¡cticos para cÃ³digos QR, cÃ³digos de barras y contraseÃ±as. Al reunir estas utilidades en un solo lugar, Apps24 ayuda a ahorrar tiempo y a evitar software innecesario. La mayorÃ­a de las herramientas funcionan directamente en el navegador, tanto en escritorio como en mÃ³vil, y el sitio sigue creciendo con nuevas herramientas y contenido mejorado.",
      rulerHowTo: "CÃ³mo usar la regla en lÃ­nea",
      rulerStep1: "Coloque una tarjeta de crÃ©dito horizontalmente en la marca cero.",
      rulerStep2: "Ingrese el ancho medido de la tarjeta y haga clic en 'Calibrar'.",
      rulerStep3: "Ahora puede medir el objeto deseado.",
      rulerEnterCardWidth: "Ingrese el ancho de la tarjeta de crÃ©dito",
      rulerExample: "Ejemplo: si el ancho es de 10,4 cm, ingrese 10,4",
      rulerTip: "Sugerencia: use el asa azul en la esquina inferior derecha del lienzo para cambiar su tamaÃ±o.",
      calibrate: "Calibrar",
      changeTo: "Cambiar a",
      exitFullscreen: "Salir de pantalla completa",
      fullscreen: "Pantalla completa",
      frLabel: "FrancÃ©s",
      jaLabel: "JaponÃ©s",
      zhLabel: "Chino (Simplificado)",
      zhTWLabel: "Chino (Tradicional)",
      ptLabel: "PortuguÃªs",
      esLabel: "EspaÃ±ol",
      deLabel: "AlemÃ¡n",
      arLabel: "Ãrabe",
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
      whatIs: "Â¿QuÃ© es {0}?",
      whenToUse: "Â¿CuÃ¡ndo usar esta herramienta?",
      howToUseTitle: "CÃ³mo usar {0}",
      faqTitle: "Preguntas frecuentes",
      howItWorks: "CÃ³mo funciona",
      unitLength: "Longitud",
      unitWeight: "Peso",
      unitArea: "Ãrea",
      unitVolume: "Volumen",
      unitTemperature: "Temperatura",
      unitSpeed: "Velocidad",
      unitDigital: "Digital",
      from: "Desde",
      to: "Hasta",
      unitAccuracyNote: "* ConversiÃ³n de alta precisiÃ³n.",
    },
  },
  de: {
    tools: {
      imagecompressor: {
        title: "Bildkompressor / WebP-Konverter",
        description: "Reduzieren Sie die BildgrÃ¶Ãe und konvertieren Sie zu WebP fÃ¼r bessere Web-Performance.",
        seo: "Bilder komprimieren und zu WebP konvertieren.",
        longDescription: "Unser kostenloser Bildkompressor hilft Ihnen dabei, BilddateigrÃ¶Ãen in Sekunden zu reduzieren, ohne Software installieren zu mÃ¼ssen. Sie kÃ¶nnen Bilder auch in das WebP-Format konvertieren, um eine bessere Web-Performance und kleinere DateigrÃ¶Ãen zu erzielen. Dieses Tool eignet sich fÃ¼r Blogger, Online-Shop-Besitzer, Studenten, Marketer und alle, die schnell ladende Bilder benÃ¶tigen.",
        usageContext: "Das Komprimieren von Bildern ist hilfreich, wenn Sie die Seitenladegeschwindigkeit verbessern, den Speicherplatz reduzieren oder DateigrÃ¶Ãenlimits fÃ¼r Websites und E-Mails einhalten mÃ¶chten. Kleinere Bilder verbessern auch die Benutzererfahrung auf mobilen GerÃ¤ten. WebP ist ein modernes Bildformat, das kleinere DateigrÃ¶Ãen bei guter visueller QualitÃ¤t bietet.",
        howToUse: "1. Laden Sie Ihre Bilddatei hoch.\n2. WÃ¤hlen Sie, ob Sie das Bild komprimieren oder in WebP konvertieren mÃ¶chten.\n3. Sehen Sie sich das Ergebnis an und laden Sie die optimierte Datei herunter.",
        faq: [
          { q: "Ist dieses Tool kostenlos?", a: "Ja. Sie kÃ¶nnen Bilder online kostenlos komprimieren und konvertieren." },
          { q: "Welche Dateitypen werden unterstÃ¼tzt?", a: "GÃ¤ngige Web-Bildformate wie JPG und PNG werden in der Regel unterstÃ¼tzt." },
          { q: "Ãndert sich die BildqualitÃ¤t nach der Komprimierung?", a: "Einige Komprimierungsmethoden kÃ¶nnen die BildqualitÃ¤t leicht reduzieren, aber das Ziel ist es, das Bild visuell nÃ¼tzlich zu halten, wÃ¤hrend die DateigrÃ¶Ãe reduziert wird." },
          { q: "Warum sollte ich Bilder in WebP konvertieren?", a: "WebP-Dateien sind oft kleiner als JPG oder PNG, was sie fÃ¼r Websites, Blogs und andere Online-Inhalte nÃ¼tzlich macht." }
        ]
      },
      caseconverter: {
        title: "GroÃ-/Kleinschreibung Konverter",
        description: "Text in GroÃbuchstaben, Kleinbuchstaben oder Titelschreibweise umwandeln.",
        seo: "Text online in GroÃ- oder Kleinbuchstaben konvertieren.",
        longDescription: "Der GroÃ-/Kleinschreibung Konverter ist ein einfaches Online-Tool, das Text zwischen GroÃbuchstaben, Kleinbuchstaben und Titelschreibweise umwandelt. Es ist nÃ¼tzlich fÃ¼r die Bearbeitung von Titeln, die Korrektur von Formatierungen, die Vorbereitung von Dokumenten und die Bereinigung von Text fÃ¼r Websites, E-Mails und Berichte.",
        usageContext: "Dieses Tool ist hilfreich, wenn Sie Ãberschriften korrigieren, Artikeltitel vorbereiten, Marketingtexte formatieren, importierten Text bereinigen oder Inhalte vor der VerÃ¶ffentlichung standardisieren mÃ¶chten.",
        howToUse: "1. FÃ¼gen Sie Ihren Text in das Eingabefeld ein oder geben Sie ihn ein.\n2. WÃ¤hlen Sie das gewÃ¼nschte Format: GroÃbuchstaben, Kleinbuchstaben oder Titelschreibweise.\n3. Kopieren Sie das konvertierte Ergebnis.",
        faq: [
          { q: "Was ist Titelschreibweise (Title Case)?", a: "Titelschreibweise ist ein Schreibstil, bei dem wichtige WÃ¶rter mit einem GroÃbuchstaben beginnen. Es wird hÃ¤ufig fÃ¼r Artikeltitel und Ãberschriften verwendet." },
          { q: "Kann ich langen Text konvertieren?", a: "Ja. Sie kÃ¶nnen kurze oder lange Texte direkt im Tool konvertieren." },
          { q: "Ist das fÃ¼r SEO-Titel nÃ¼tzlich?", a: "Ja. Es kann Ihnen helfen, Seitentitel und Ãberschriften konsistenter zu formatieren." },
          { q: "Funktioniert dieses Tool fÃ¼r andere Sprachen als Englisch?", a: "Es funktioniert am besten fÃ¼r alphabetbasierte Sprachen, insbesondere Englisch, FranzÃ¶sisch und Deutsch." }
        ]
      },
      jsonformatter: {
        title: "JSON-Formatierer und Validator",
        description: "JSON-Daten online bereinigen, organisieren und validieren.",
        seo: "JSON online formatieren und validieren.",
        longDescription: "Der JSON-Formatierer und Validator hilft Ihnen dabei, JSON-Daten online zu bereinigen, zu organisieren und zu Ã¼berprÃ¼fen. Er ist nÃ¼tzlich fÃ¼r Entwickler, Tester, Studenten und API-Benutzer, die eine lesbare JSON-Ausgabe benÃ¶tigen oder Syntaxfehler schnell finden mÃ¶chten.",
        usageContext: "Rohes JSON ist oft schwer zu lesen, besonders wenn es in eine einzige Zeile komprimiert ist. Das Formatieren fÃ¼gt eine ordentliche EinrÃ¼ckung und Struktur hinzu, was das Debuggen und Teilen erleichtert. Ein kleiner Syntaxfehler in JSON kann eine API-Anfrage oder Konfigurationsdatei beschÃ¤digen. Die Validierung hilft dabei, solche Probleme zu erkennen.",
        howToUse: "1. FÃ¼gen Sie Ihr JSON in das Eingabefeld ein.\n2. Klicken Sie auf die SchaltflÃ¤che zum Formatieren oder Validieren.\n3. ÃberprÃ¼fen Sie das formatierte Ergebnis oder sehen Sie die Fehlermeldung.",
        faq: [
          { q: "Was ist JSON?", a: "JSON steht fÃ¼r JavaScript Object Notation. Es ist ein gÃ¤ngiges Format zum Speichern und Austauschen strukturierter Daten." },
          { q: "Kann dieses Tool ungÃ¼ltiges JSON automatisch reparieren?", a: "Es kann helfen, Formatierungs- und Strukturprobleme zu identifizieren, aber einige Fehler mÃ¼ssen mÃ¶glicherweise manuell korrigiert werden." },
          { q: "Warum ist mein JSON ungÃ¼ltig?", a: "HÃ¤ufige Ursachen sind fehlende Kommas, zusÃ¤tzliche Kommas, falsche Klammern oder die Verwendung von einfachen AnfÃ¼hrungszeichen anstelle von doppelten." },
          { q: "Ist dieses Tool nur fÃ¼r Entwickler?", a: "Nein. Es ist auch fÃ¼r Studenten, Analysten und alle nÃ¼tzlich, die mit JSON-Daten arbeiten." }
        ]
      },
      passwordgenerator: {
        title: "Passwort-Generator",
        description: "Generieren Sie sofort starke und zufÃ¤llige PasswÃ¶rter in Ihrem Browser.",
        seo: "Generieren Sie sofort starke PasswÃ¶rter in Ihrem Browser. Kostenloser Passwort-Generator mit anpassbarer LÃ¤nge und Zeichenoptionen.",
        longDescription: "Der Passwort-Generator ist ein einfaches Online-Tool, das Benutzern hilft, starke und zufÃ¤llige PasswÃ¶rter fÃ¼r persÃ¶nliche, Arbeits- und GeschÃ¤ftskonten zu erstellen. Es ist fÃ¼r Personen gedacht, die PasswÃ¶rter schneller und sicherer generieren mÃ¶chten, anstatt schwache Kombinationen wiederzuverwenden.",
        usageContext: "Verwenden Sie dieses Tool beim Erstellen eines neuen Kontos, beim Ersetzen eines alten Passworts oder beim Verbessern der Sicherheit von Konten mit kurzen oder wiederholten PasswÃ¶rtern.",
        howToUse: "1. WÃ¤hlen Sie die PasswortlÃ¤nge.\n2. WÃ¤hlen Sie die einzuschlieÃenden Zeichentypen (GroÃ- und Kleinbuchstaben, Zahlen, Symbole).\n3. Klicken Sie auf Passwort generieren.\n4. Kopieren Sie das Passwort und speichern Sie es an einem sicheren Ort.",
        faq: [
          { q: "Warum sollte ich einen Passwort-Generator verwenden?", a: "Er erstellt stÃ¤rkere und weniger vorhersehbare PasswÃ¶rter als manuell erstellte, was das Risiko schwacher Anmeldedaten reduziert." },
          { q: "Was macht ein Passwort stÃ¤rker?", a: "Lange PasswÃ¶rter mit Buchstaben, Zahlen und Symbolen sind im Allgemeinen schwerer zu erraten." },
          { q: "Kann ich dasselbe Passwort auf mehreren Websites verwenden?", a: "Es ist sicherer, fÃ¼r jedes Konto ein anderes Passwort zu verwenden." },
          { q: "Wo soll ich generierte PasswÃ¶rter speichern?", a: "Die sicherste Option ist in der Regel ein vertrauenswÃ¼rdiger Passwort-Manager." }
        ]
      },
      textdiffchecker: { title: "Text-Vergleicher", description: "Texte vergleichen und Unterschiede finden.", seo: "Unterschiede zwischen Texten finden." },
      base64encoder: {
        title: "Base64 Encoder / Decoder",
        description: "Konvertieren Sie Text in Base64 oder dekodieren Sie sofort.",
        seo: "Schneller und zuverlÃ¤ssiger Base64-Encoder und -Decoder. Konvertieren Sie Text im Browser sofort in das Base64-Format oder dekodieren Sie ihn.",
        longDescription: "Der Base64 Encoder/Decoder ist ein browserbasiertes Tool, das Klartext in das Base64-Format konvertiert und Base64-Zeichenfolgen wieder in lesbaren Text dekodiert. NÃ¼tzlich fÃ¼r Entwicklung, Tests und einfache Codierungsaufgaben.",
        usageContext: "Verwenden Sie es, wenn Sie Text codieren, Base64-Werte prÃ¼fen oder codierten Inhalt dekodieren mÃ¼ssen.",
        howToUse: "1. Geben Sie Ihren Text ein oder fÃ¼gen Sie ihn ein.\n2. Klicken Sie auf Kodieren um Text in Base64 zu konvertieren, oder auf Dekodieren um Base64 zurÃ¼ckzukonvertieren.\n3. ÃberprÃ¼fen Sie das Ergebnis im Ausgabebereich.\n4. Klicken Sie auf Kopieren, um das Ergebnis zu verwenden.",
        faq: [
          { q: "Ist Base64 eine Form der VerschlÃ¼sselung?", a: "Nein. Base64 ist eine Kodierungsmethode zur Datendarstellung, kein Sicherheitssystem." },
          { q: "Wann wird Base64 hÃ¤ufig verwendet?", a: "HÃ¤ufig in APIs, E-Mail-Inhalten, HTML/CSS-Einbettung, Datentransport und technischer Dokumentation." },
          { q: "Kann dieses Tool jede Base64-Zeichenfolge dekodieren?", a: "Es kann gÃ¼ltigen Base64-Text dekodieren. Bei unvollstÃ¤ndiger oder ungÃ¼ltiger Eingabe kann das Ergebnis fehlschlagen." },
          { q: "Ist dieses Tool nur fÃ¼r Entwickler?", a: "Nein. Es ist auch nÃ¼tzlich fÃ¼r Studenten, Analysten, Vermarkter und andere." }
        ]
      },
      colorconverter: {
        title: "Farbcode-Konverter",
        description: "Konvertieren Sie sofort HEX-, RGB- und HSL-Farbwerte.",
        seo: "Konvertieren Sie sofort HEX-, RGB- und HSL-Farbwerte mit einem einfachen browserbasierten Tool. NÃ¼tzlich fÃ¼r Webdesign, UI-Systeme und Frontend-Entwicklung.",
        longDescription: "Der Farbcode-Konverter ist ein Online-Tool, das Benutzern hilft, Farbwerte zwischen HEX-, RGB- und HSL-Formaten zu konvertieren. NÃ¼tzlich fÃ¼r Webdesign, UI-Arbeit, Frontend-Entwicklung und Branding.",
        usageContext: "Verwenden Sie es, wenn Sie eine Farbe von einem Format in ein anderes konvertieren, Ã¼bereinstimmende Werte fÃ¼r Designsysteme prÃ¼fen oder Farbcodes in CSS kopieren mÃ¼ssen.",
        howToUse: "1. Geben Sie einen HEX-Wert ein oder wÃ¤hlen Sie eine Farbe mit dem FarbwÃ¤hler.\n2. Sehen Sie die konvertierten HEX-, RGB- und HSL-Werte sofort.\n3. Klicken Sie auf Kopieren neben dem gewÃ¼nschten Wert.\n4. Klicken Sie auf ZurÃ¼cksetzen, um mit einer neuen Farbe zu beginnen.",
        faq: [
          { q: "Was ist der Unterschied zwischen HEX, RGB und HSL?", a: "HEX wird hÃ¤ufig im Webdesign verwendet, RGB basiert auf Rot-, GrÃ¼n- und Blauwerten, und HSL steht fÃ¼r Farbton, SÃ¤ttigung und Helligkeit." },
          { q: "FÃ¼r wen ist dieses Tool nÃ¼tzlich?", a: "FÃ¼r Designer, Entwickler, Vermarkter, Studenten und jeden, der mit digitalen Farben arbeitet." },
          { q: "Kann ich diese Werte in CSS verwenden?", a: "Ja. HEX, RGB und HSL werden alle Ã¼blicherweise in CSS verwendet." },
          { q: "UnterstÃ¼tzt dieses Tool die schnelle FarbprÃ¼fung?", a: "Ja. Sie kÃ¶nnen eine Farbe visuell auswÃ¤hlen und die konvertierten Werte sofort Ã¼berprÃ¼fen." }
        ]
      },
      ruler: { title: "Online-Lineal", description: "Messen Sie BildschirmabstÃ¤nde mit Kalibrierung." },
      wordcounter: { title: "WortzÃ¤hler", description: "ZÃ¤hlen Sie Zeichen und WÃ¶rter in Echtzeit." },
      countdown: { title: "Countdown-Timer", description: "Stellen Sie Timer mit Vollbildmodus ein." },
      digitalclock: { title: "Digitale Uhr", description: "ÃberprÃ¼fen Sie die aktuelle Uhrzeit in Echtzeit." },
      screenlamp: { title: "Bildschirmlicht", description: "Verwandeln Sie Ihren Bildschirm in ein farbiges Licht." },
      qrgenerator: {
        title: "QR-Code-Generator",
        description: "Erstellen Sie QR-Codes fÃ¼r Links, Text und Kontakte.",
        longDescription: "Der QR-Code-Generator ermÃ¶glicht es Ihnen, QR-Codes fÃ¼r Text, Links, Kontaktdaten und andere einfache Inhalte zu erstellen. Er ist nÃ¼tzlich fÃ¼r Unternehmen, Veranstaltungen, Restaurants, Verpackungen und den persÃ¶nlichen Gebrauch. Sie kÃ¶nnen in Sekunden einen QR-Code generieren und ihn fÃ¼r digitale oder gedruckte Verwendung herunterladen.",
        usageContext: "QR-Codes werden hÃ¤ufig fÃ¼r Website-Links, MenÃ¼zugriff, Event-Check-ins, Kontaktaustausch, Zahlungsanweisungen und Produktetiketten verwendet. Ein QR-Code macht es Benutzern leichter, eine Seite zu Ã¶ffnen oder auf Informationen zuzugreifen, ohne langen Text manuell einzugeben.",
        howToUse: "1. Geben Sie den Text, die URL oder den Inhalt ein, den Sie kodieren mÃ¶chten.\n2. Generieren Sie den QR-Code.\n3. Laden Sie das Bild herunter und verwenden Sie es wo benÃ¶tigt.",
        faq: [
          { q: "Kann ich einen QR-Code fÃ¼r einen Website-Link erstellen?", a: "Ja. Sie kÃ¶nnen einen QR-Code fÃ¼r eine URL generieren und ihn in gedruckter oder digitaler Form teilen." },
          { q: "Kann ich QR-Codes fÃ¼r GeschÃ¤ftsmaterialien verwenden?", a: "Ja. QR-Codes werden hÃ¤ufig auf Flyern, Postern, Visitenkarten, Verpackungen und Speisekarten verwendet." },
          { q: "Laufen QR-Codes ab?", a: "Ein Standard-QR-Code aus festem Inhalt lÃ¤uft nicht von selbst ab. Der Zielinhalt muss jedoch verfÃ¼gbar bleiben, damit Scans weiterhin funktionieren." },
          { q: "Ist dieses Tool kostenlos?", a: "Ja. Sie kÃ¶nnen QR-Codes online generieren, ohne zusÃ¤tzliche Software zu installieren." }
        ]
      },
      barcodegenerator: {
        title: "Barcode-Generator",
        description: "Erstellen Sie Barcodes fÃ¼r Produkte, Etiketten und Inventar.",
        longDescription: "Der Barcode-Generator hilft Ihnen dabei, Barcodes fÃ¼r Produkte, Etiketten, Inventar, Verpackungen und interne Verfolgung zu erstellen. Er ist nÃ¼tzlich fÃ¼r kleine Unternehmen, Lager, BÃ¼ros, Schulen und alle, die schnelle Online-Barcode-Erstellung benÃ¶tigen.",
        usageContext: "Barcodes werden im Einzelhandel, in der Bestandskontrolle, im Versand, im Asset-Tracking und in der Dokumentenbeschriftung weit verbreitet eingesetzt. Sie erleichtern die schnelle Identifizierung von Artikeln und reduzieren manuelle Eingabefehler. Die Wahl des richtigen Formats gewÃ¤hrleistet die KompatibilitÃ¤t mit Scannern und ArbeitsablÃ¤ufen.",
        howToUse: "1. Geben Sie die fÃ¼r Ihren Barcode erforderliche Zahl oder den Text ein.\n2. WÃ¤hlen Sie das Barcode-Format.\n3. Generieren und laden Sie das Barcode-Bild herunter.",
        faq: [
          { q: "Was ist ein Barcode-Generator?", a: "Ein Barcode-Generator erstellt einen maschinenlesbaren Code basierend auf Text oder Zahlen, die Sie eingeben." },
          { q: "Welches Barcode-Format soll ich wÃ¤hlen?", a: "Das beste Format hÃ¤ngt davon ab, wo der Barcode verwendet wird. Einzelhandelsprodukte, Inventaretiketten und Versandsysteme kÃ¶nnen unterschiedliche Standards erfordern." },
          { q: "Kann ich den generierten Barcode drucken?", a: "Ja. Nach der Generierung des Barcodes kÃ¶nnen Sie ihn herunterladen und fÃ¼r Etiketten, Verpackungen oder den internen Gebrauch ausdrucken." },
          { q: "Ist dieses Tool fÃ¼r kleine Unternehmen geeignet?", a: "Ja. Es ist nÃ¼tzlich fÃ¼r kleine GeschÃ¤fte, Lager, BÃ¼ros und andere Teams, die schnell Barcodes erstellen mÃ¼ssen." }
        ]
      },
      dummytext: { title: "Blindtext", description: "Generieren Sie Platzhaltertexte." },
    },
    common: {
      copyAll: "Alles kopieren",
      clear: "LÃ¶schen",
      sample: "Beispieltext",
      placeholder: "Text hier einfÃ¼gen oder tippen...",
      paragraphs: "AbsÃ¤tze",
      generatedText: "Generierter Text",
      charCountWithSpaces: "Zeichenanzahl (mit Leerzeichen)",
      charCountWithoutSpaces: "Zeichenanzahl (ohne Leerzeichen)",
      whichPosition: "Welche Zeichenposition mÃ¶chten Sie finden?",
      backToTools: "ZurÃ¼ck zu den Tools",
      copied: "In die Zwischenablage kopiert!",
      languageSelect: "Inhaltssprache auswÃ¤hlen",
      highlightHelp: "* Das Zeichen am angegebenen Index wird in Echtzeit im obigen Textbereich hervorgehoben.",
      allTools: "Alle Tools",
      footerNote1: "Dieses Tool ist Teil der apps24-Utility-Suite.",
      footerNote2: "Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser fÃ¼r maximale PrivatsphÃ¤re und Geschwindigkeit.",
      koLabel: "Koreanisch",
      enLabel: "Englisch",
      textCategory: "Text",
      utilityCategory: "Dienstprogramm",
      positionPlaceholder: "Position",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "GrÃ¶Ãe",
      customColor: "Farbe",
      presetColors: "Voreinstellungen",
      homeTitle: "Schnelle mehrsprachige Tools",
      homeSubtitle: "Apps24 ist eine mehrsprachige Website fÃ¼r Online-Tools, die fÃ¼r Menschen entwickelt wurde, die schnelle, einfache und praktische Werkzeuge ohne unnÃ¶tige Schritte suchen.",
      homeIntro1: "Apps24 ist eine mehrsprachige Website fÃ¼r Online-Tools, die fÃ¼r Menschen entwickelt wurde, die schnelle, einfache und praktische Werkzeuge ohne unnÃ¶tige Schritte suchen. Anstatt fÃ¼r kleine Aufgaben Software herunterzuladen oder ein Konto zu erstellen, kÃ¶nnen Nutzer eine Seite Ã¶ffnen, ein Tool sofort verwenden und in nur wenigen Klicks ein Ergebnis erhalten.",
      homeIntro2: "Unser Ziel ist es, alltÃ¤gliche digitale Aufgaben fÃ¼r eine breite Nutzergruppe einfacher zu machen. Ob Sie als Student WÃ¶rter zÃ¤hlen, als Marketer Links oder Inhalte vorbereiten, als Entwickler JSON- oder Base64-Daten prÃ¼fen, als Designer mit Farben arbeiten oder als Unternehmer QR-Codes und Barcodes erstellen, Apps24 bietet leichte Tools, die schnell zugÃ¤nglich und leicht verstÃ¤ndlich sind.",
      homeAboutTitle: "Ãber Apps24",
      homeWhatYouCanDoTitle: "Was Sie mit Apps24 tun kÃ¶nnen",
      homeWhatYouCanDoBody: "Apps24 vereint eine wachsende Sammlung nÃ¼tzlicher browserbasierter Tools fÃ¼r Text, Bilder, Formatierung, visuelle Hilfsprogramme und technische ArbeitsablÃ¤ufe. Sie kÃ¶nnen Bilder komprimieren, GroÃ- und Kleinschreibung umwandeln, JSON validieren, PasswÃ¶rter generieren, Textunterschiede vergleichen, Base64 kodieren und dekodieren, QR-Codes erstellen, Barcodes generieren und vieles mehr. Diese Tools sind fÃ¼r kurze, zielgerichtete Aufgaben konzipiert, sodass Sie mit einem klaren Layout und einem einfachen Ablauf jeweils ein Problem nach dem anderen lÃ¶sen kÃ¶nnen.",
      homeWhyUsersChooseTitle: "Warum Nutzer Apps24 wÃ¤hlen",
      homeWhyUsersChoosePoints: [
        "einfache und leicht verstÃ¤ndliche OberflÃ¤chen",
        "schnelle browserbasierte Tools fÃ¼r kurze Aufgaben",
        "mehrsprachigen Zugang fÃ¼r globale Nutzer",
        "praktische Werkzeuge fÃ¼r reale Anforderungen",
      ],
      homeOngoingFocusTitle: "FÃ¼r den tÃ¤glichen Gebrauch entwickelt",
      homeOngoingFocusBody: "Apps24 ist fÃ¼r eine breite Palette digitaler Aufgaben ausgelegt, die im Arbeitsalltag, beim Lernen und bei Online-AktivitÃ¤ten auftreten. Manche Nutzer benÃ¶tigen technische Werkzeuge fÃ¼r strukturierte Daten oder Kodierung. Andere brauchen Content-Tools zum Schreiben, Formatieren oder VerÃ¶ffentlichen. Wieder andere suchen praktische Generatoren fÃ¼r QR-Codes, Barcodes und PasswÃ¶rter. Indem diese Werkzeuge an einem Ort zusammengefÃ¼hrt werden, hilft Apps24 dabei, Zeit zu sparen und unnÃ¶tige Software zu vermeiden. Die meisten Tools funktionieren direkt im Browser auf Desktop- und MobilgerÃ¤ten, und die Website wird kontinuierlich mit neuen Tools und besseren Inhalten erweitert.",
      rulerHowTo: "So verwenden Sie das Online-Lineal",
      rulerStep1: "Legen Sie eine Kreditkarte horizontal auf die Nullmarkierung.",
      rulerStep2: "Geben Sie die gemessene Breite der Karte ein und klicken Sie auf 'Kalibrieren'.",
      rulerStep3: "Jetzt kÃ¶nnen Sie das gewÃ¼nschte Objekt messen.",
      rulerEnterCardWidth: "Geben Sie die Kreditkartenbreite ein",
      rulerExample: "Beispiel: Wenn die Breite 10,4 cm betrÃ¤gt, geben Sie 10,4 ein",
      rulerTip: "Tipp: Verwenden Sie den blauen Griff in der unteren rechten Ecke der ZeichenflÃ¤che, um deren GrÃ¶Ãe zu Ã¤ndern.",
      calibrate: "Kalibrieren",
      changeTo: "Wechseln zu",
      exitFullscreen: "Vollbild beenden",
      fullscreen: "Vollbild",
      frLabel: "FranzÃ¶sisch",
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
      whatIs: "Was ist {0}?",
      whenToUse: "Wann sollte man dieses Tool verwenden?",
      howToUseTitle: "Wie man {0} verwendet",
      faqTitle: "HÃ¤ufig gestellte Fragen",
      howItWorks: "So funktioniert es",
      unitLength: "LÃ¤nge",
      unitWeight: "Gewicht",
      unitArea: "FlÃ¤che",
      unitVolume: "Volumen",
      unitTemperature: "Temperatur",
      unitSpeed: "Geschwindigkeit",
      unitDigital: "Digital",
      from: "Von",
      to: "Nach",
      unitAccuracyNote: "* HochprÃ¤zise Konvertierung.",
    },
  },
  ar: {
    tools: {
      imagecompressor: {
        title: "Ø¶Ø§ØºØ· Ø§ÙØµÙØ± / ÙØ­ÙÙÙ WebP",
        description: "ÙÙÙÙ Ø­Ø¬Ù ÙÙÙØ§Øª Ø§ÙØµÙØ± ÙØ­ÙÙÙÙØ§ Ø¥ÙÙ WebP ÙØ£Ø¯Ø§Ø¡ ÙÙØ¨ Ø£ÙØ¶Ù.",
        seo: "Ø¶ØºØ· Ø§ÙØµÙØ± ÙØªØ­ÙÙÙÙØ§ Ø¥ÙÙ WebP Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª.",
        longDescription: "ØªØ³Ø§Ø¹Ø¯Ù Ø£Ø¯Ø§Ø© Ø¶ØºØ· Ø§ÙØµÙØ± Ø§ÙÙØ¬Ø§ÙÙØ© Ø¹ÙÙ ØªÙÙÙÙ Ø­Ø¬Ù ÙÙÙØ§Øª Ø§ÙØµÙØ± ÙÙ Ø«ÙØ§ÙÙ Ø¯ÙÙ Ø§ÙØ­Ø§Ø¬Ø© ÙØªØ«Ø¨ÙØª Ø£Ù Ø¨Ø±ÙØ§ÙØ¬. ÙÙÙÙÙ Ø£ÙØ¶Ø§Ù ØªØ­ÙÙÙ Ø§ÙØµÙØ± Ø¥ÙÙ ØªÙØ³ÙÙ WebP ÙÙØ­ØµÙÙ Ø¹ÙÙ Ø£Ø¯Ø§Ø¡ ÙÙØ¨ Ø£ÙØ¶Ù ÙØ£Ø­Ø¬Ø§Ù ÙÙÙØ§Øª Ø£ØµØºØ±. ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙÙØ¯Ø© ÙÙÙØ¯ÙÙÙÙ ÙØ£ØµØ­Ø§Ø¨ Ø§ÙÙØªØ§Ø¬Ø± Ø§ÙØ¥ÙÙØªØ±ÙÙÙØ© ÙØ§ÙØ·ÙØ§Ø¨ ÙØ§ÙÙØ³ÙÙÙÙÙ ÙØ£Ù Ø´Ø®Øµ ÙØ­ØªØ§Ø¬ Ø¥ÙÙ ØµÙØ± Ø£Ø³Ø±Ø¹ ØªØ­ÙÙÙØ§Ù.",
        usageContext: "ÙÙØ¹Ø¯Ù Ø¶ØºØ· Ø§ÙØµÙØ± ÙÙÙØ¯Ø§Ù Ø¹ÙØ¯ÙØ§ ØªØ±ÙØ¯ ØªØ­Ø³ÙÙ Ø³Ø±Ø¹Ø© Ø§ÙØµÙØ­Ø© Ø£Ù ØªÙÙÙÙ Ø§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙØªØ®Ø²ÙÙ Ø£Ù Ø§ÙØ§ÙØªØ²Ø§Ù Ø¨Ø­Ø¯ÙØ¯ Ø­Ø¬Ù Ø§ÙÙÙÙØ§Øª ÙÙÙÙØ§ÙØ¹ ÙØ§ÙØ¨Ø±ÙØ¯ Ø§ÙØ¥ÙÙØªØ±ÙÙÙ. ÙÙØ§ ØªØ¹ÙÙ Ø§ÙØµÙØ± Ø§ÙØ£ØµØºØ± Ø¹ÙÙ ØªØ­Ø³ÙÙ ØªØ¬Ø±Ø¨Ø© Ø§ÙÙØ³ØªØ®Ø¯Ù Ø¹ÙÙ Ø§ÙØ£Ø¬ÙØ²Ø© Ø§ÙÙØ­ÙÙÙØ©. WebP ØªÙØ³ÙÙ ØµÙØ± Ø­Ø¯ÙØ« ÙØµÙÙÙÙ ÙØªÙÙÙØ± Ø£Ø­Ø¬Ø§Ù ÙÙÙØ§Øª Ø£ØµØºØ± ÙØ¹ Ø§ÙØ­ÙØ§Ø¸ Ø¹ÙÙ Ø¬ÙØ¯Ø© Ø¨ØµØ±ÙØ© Ø¬ÙØ¯Ø©.",
        howToUse: "1. Ø§Ø±ÙØ¹ ÙÙÙ Ø§ÙØµÙØ±Ø©.\n2. Ø§Ø®ØªØ± Ø¶ØºØ· Ø§ÙØµÙØ±Ø© Ø£Ù ØªØ­ÙÙÙÙØ§ Ø¥ÙÙ WebP.\n3. Ø§Ø¹Ø±Ø¶ Ø§ÙÙØªÙØ¬Ø© ÙØ­ÙÙÙ Ø§ÙÙÙÙ Ø§ÙÙØ­Ø³ÙÙÙ.",
        faq: [
          { q: "ÙÙ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙØ¬Ø§ÙÙØ©Ø", a: "ÙØ¹Ù. ÙÙÙÙÙ Ø¶ØºØ· Ø§ÙØµÙØ± ÙØªØ­ÙÙÙÙØ§ Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª ÙØ¬Ø§ÙØ§Ù." },
          { q: "ÙØ§ Ø£ÙÙØ§Ø¹ Ø§ÙÙÙÙØ§Øª Ø§ÙÙØ¯Ø¹ÙÙØ©Ø", a: "ÙØªÙ Ø¯Ø¹Ù ØªÙØ³ÙÙØ§Øª ØµÙØ± Ø§ÙÙÙØ¨ Ø§ÙØ´Ø§Ø¦Ø¹Ø© ÙÙ JPG ÙPNG Ø¹Ø§Ø¯Ø©Ù." },
          { q: "ÙÙ Ø³ØªØªØºÙØ± Ø¬ÙØ¯Ø© Ø§ÙØµÙØ±Ø© Ø¨Ø¹Ø¯ Ø§ÙØ¶ØºØ·Ø", a: "ÙØ¯ ØªÙÙÙÙÙ Ø¨Ø¹Ø¶ Ø·Ø±Ù Ø§ÙØ¶ØºØ· Ø§ÙØ¬ÙØ¯Ø© ÙÙÙÙØ§ÙØ ÙÙÙ Ø§ÙÙØ¯Ù ÙÙ Ø§ÙØ­ÙØ§Ø¸ Ø¹ÙÙ Ø§ÙÙØ§Ø¦Ø¯Ø© Ø§ÙØ¨ØµØ±ÙØ© ÙÙØµÙØ±Ø© ÙØ¹ ØªÙÙÙÙ Ø­Ø¬ÙÙØ§." },
          { q: "ÙÙØ§Ø°Ø§ Ø£ÙØ­ÙÙÙ Ø§ÙØµÙØ± Ø¥ÙÙ WebPØ", a: "ÙÙÙØ§Øª WebP Ø£ØµØºØ± Ø­Ø¬ÙØ§Ù ÙÙ Ø§ÙØºØ§ÙØ¨ ÙÙ JPG Ø£Ù PNGØ ÙÙØ§ ÙØ¬Ø¹ÙÙØ§ ÙÙÙØ¯Ø© ÙÙÙÙØ§ÙØ¹ ÙØ§ÙÙØ¯ÙÙØ§Øª ÙØ§ÙÙØ­ØªÙÙ Ø§ÙØ¥ÙÙØªØ±ÙÙÙ." }
        ]
      },
      caseconverter: {
        title: "ÙØ­ÙÙÙ Ø­Ø§ÙØ© Ø§ÙØ£Ø­Ø±Ù",
        description: "Ø­ÙÙÙ Ø§ÙÙØµ Ø¥ÙÙ Ø£Ø­Ø±Ù ÙØ¨ÙØ±Ø© Ø£Ù ØµØºÙØ±Ø© Ø£Ù ØªÙØ³ÙÙ Ø§ÙØ¹ÙØ§ÙÙÙ.",
        seo: "ØªØ­ÙÙÙ Ø§ÙÙØµ Ø¥ÙÙ Ø£Ø­Ø±Ù ÙØ¨ÙØ±Ø© Ø£Ù ØµØºÙØ±Ø© Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª.",
        longDescription: "ÙØ­ÙÙÙ Ø­Ø§ÙØ© Ø§ÙØ£Ø­Ø±Ù Ø£Ø¯Ø§Ø© Ø¥ÙÙØªØ±ÙÙÙØ© Ø¨Ø³ÙØ·Ø© ØªÙØ­ÙÙÙ Ø§ÙÙØµ Ø¨ÙÙ Ø§ÙØ£Ø­Ø±Ù Ø§ÙÙØ¨ÙØ±Ø© ÙØ§ÙØµØºÙØ±Ø© ÙØªÙØ³ÙÙ Ø§ÙØ¹ÙØ§ÙÙÙ. ÙÙÙØ¯ ÙØªØ­Ø±ÙØ± Ø§ÙØ¹ÙØ§ÙÙÙ ÙØªØµØ­ÙØ­ Ø§ÙØªÙØ³ÙÙ ÙØ¥Ø¹Ø¯Ø§Ø¯ Ø§ÙÙØ³ØªÙØ¯Ø§Øª ÙØªÙØ¸ÙÙ Ø§ÙÙØµÙØµ ÙÙÙÙØ§ÙØ¹ ÙØ§ÙØ¨Ø±ÙØ¯ Ø§ÙØ¥ÙÙØªØ±ÙÙÙ ÙØ§ÙØªÙØ§Ø±ÙØ±.",
        usageContext: "ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙÙØ¯Ø© ÙØªØµØ­ÙØ­ Ø§ÙØ¹ÙØ§ÙÙÙ Ø§ÙØ±Ø¦ÙØ³ÙØ© ÙØ¥Ø¹Ø¯Ø§Ø¯ Ø¹ÙØ§ÙÙÙ Ø§ÙÙÙØ§ÙØ§Øª ÙØªÙØ³ÙÙ Ø§ÙÙØµÙØµ Ø§ÙØªØ³ÙÙÙÙØ© ÙØªÙØ¸ÙÙ Ø§ÙÙØµÙØµ Ø§ÙÙØ³ØªÙØ±Ø¯Ø© Ø£Ù ØªÙØ­ÙØ¯ Ø§ÙÙØ­ØªÙÙ ÙØ¨Ù Ø§ÙÙØ´Ø±.",
        howToUse: "1. Ø§ÙØµÙ ÙØµÙ Ø£Ù Ø§ÙØªØ¨Ù ÙÙ Ø­ÙÙ Ø§ÙØ¥Ø¯Ø®Ø§Ù.\n2. Ø§Ø®ØªØ± Ø§ÙØªÙØ³ÙÙ Ø§ÙÙØ·ÙÙØ¨: Ø£Ø­Ø±Ù ÙØ¨ÙØ±Ø© Ø£Ù ØµØºÙØ±Ø© Ø£Ù ØªÙØ³ÙÙ Ø§ÙØ¹ÙÙØ§Ù.\n3. Ø§ÙØ³Ø® Ø§ÙÙØªÙØ¬Ø© Ø§ÙÙØ­ÙÙÙÙØ©.",
        faq: [
          { q: "ÙØ§ ÙÙ ØªÙØ³ÙÙ Ø§ÙØ¹ÙÙØ§Ù (Title Case)Ø", a: "ØªÙØ³ÙÙ Ø§ÙØ¹ÙÙØ§Ù Ø£Ø³ÙÙØ¨ ÙØªØ§Ø¨Ù ØªØ¨Ø¯Ø£ ÙÙÙ Ø§ÙÙÙÙØ§Øª Ø§ÙÙÙÙØ© Ø¨Ø­Ø±Ù ÙØ¨ÙØ±Ø ÙÙÙØ³ØªØ®Ø¯Ù Ø¹Ø§Ø¯Ø©Ù ÙÙ Ø¹ÙØ§ÙÙÙ Ø§ÙÙÙØ§ÙØ§Øª ÙØ§ÙØµÙØ­Ø§Øª." },
          { q: "ÙÙ ÙÙÙÙÙÙ ØªØ­ÙÙÙ ÙØµÙØµ Ø·ÙÙÙØ©Ø", a: "ÙØ¹Ù. ÙÙÙÙÙ ØªØ­ÙÙÙ ÙØµÙØµ ÙØµÙØ±Ø© Ø£Ù Ø·ÙÙÙØ© ÙØ¨Ø§Ø´Ø±Ø© ÙÙ Ø§ÙØ£Ø¯Ø§Ø©." },
          { q: "ÙÙ ÙÙ ÙÙÙØ¯Ø© ÙØ¹ÙØ§ÙÙÙ ØªØ­Ø³ÙÙ ÙØ­Ø±ÙØ§Øª Ø§ÙØ¨Ø­Ø«Ø", a: "ÙØ¹Ù. ÙÙÙÙ Ø£Ù ØªØ³Ø§Ø¹Ø¯Ù ÙÙ ØªÙØ³ÙÙ Ø¹ÙØ§ÙÙÙ Ø§ÙØµÙØ­Ø§Øª ÙØ§ÙØ±Ø¤ÙØ³ Ø¨Ø´ÙÙ Ø£ÙØ«Ø± Ø§ØªØ³Ø§ÙØ§Ù." },
          { q: "ÙÙ ØªØ¹ÙÙ Ø§ÙØ£Ø¯Ø§Ø© ÙØ¹ ÙØºØ§Øª ØºÙØ± Ø§ÙØ¥ÙØ¬ÙÙØ²ÙØ©Ø", a: "ØªØ¹ÙÙ Ø¨Ø´ÙÙ Ø£ÙØ¶Ù ÙØ¹ Ø§ÙÙØºØ§Øª Ø§ÙÙØ¨ÙÙØ© Ø¹ÙÙ Ø§ÙØ£Ø¨Ø¬Ø¯ÙØ©Ø ÙØ®Ø§ØµØ©Ù Ø§ÙØ¥ÙØ¬ÙÙØ²ÙØ© ÙØ§ÙÙØ±ÙØ³ÙØ© ÙØ§ÙØ£ÙÙØ§ÙÙØ©." }
        ]
      },
      jsonformatter: {
        title: "ÙÙÙØ³ÙÙÙ JSON ÙÙÙØªØ­ÙÙÙÙ ÙÙÙ",
        description: "ÙØ¸ÙÙ Ø¨ÙØ§ÙØ§Øª JSON ÙØ±ØªÙØ¨ÙØ§ ÙØªØ­ÙÙÙ ÙÙÙØ§ Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª.",
        seo: "ØªÙØ³ÙÙ JSON ÙØ§ÙØªØ­ÙÙ ÙÙÙ Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª.",
        longDescription: "ÙØ³Ø§Ø¹Ø¯Ù ÙÙÙØ³ÙÙÙ JSON ÙÙÙØªØ­ÙÙÙÙ ÙÙÙ Ø¹ÙÙ ØªÙØ¸ÙÙ Ø¨ÙØ§ÙØ§Øª JSON ÙØªØ±ØªÙØ¨ÙØ§ ÙØ§ÙØªØ­ÙÙ ÙÙÙØ§ Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª. ÙÙÙØ¯ ÙÙÙØ·ÙÙØ±ÙÙ ÙØ§ÙÙØ®ØªØ¨ÙØ±ÙÙ ÙØ§ÙØ·ÙØ§Ø¨ ÙÙØ³ØªØ®Ø¯ÙÙ API Ø§ÙØ°ÙÙ ÙØ­ØªØ§Ø¬ÙÙ Ø¥ÙÙ ÙØ®Ø±Ø¬Ø§Øª JSON ÙÙØ±ÙØ¡Ø© Ø£Ù ÙØ±ÙØ¯ÙÙ Ø§ÙØªØ´Ø§Ù Ø£Ø®Ø·Ø§Ø¡ Ø§ÙØµÙØ§ØºØ© Ø¨Ø³Ø±Ø¹Ø©.",
        usageContext: "ØºØ§ÙØ¨Ø§Ù ÙØ§ ÙÙÙÙ JSON Ø§ÙØ®Ø§Ù ØµØ¹Ø¨ Ø§ÙÙØ±Ø§Ø¡Ø©Ø Ø®Ø§ØµØ©Ù Ø¹ÙØ¯ Ø¶ØºØ·Ù ÙÙ Ø³Ø·Ø± ÙØ§Ø­Ø¯. Ø§ÙØªÙØ³ÙÙ ÙØ¶ÙÙ ÙØ³Ø§ÙØ§Øª Ø¨Ø§Ø¯Ø¦Ø© ÙØ¨ÙÙØ© ÙÙØ§Ø³Ø¨Ø©Ø ÙÙØ§ ÙØ³ÙÙÙ Ø§ÙØªØµØ­ÙØ­ ÙØ§ÙÙØ´Ø§Ø±ÙØ©. ÙÙÙÙ ÙØ®Ø·Ø£ ØµÙØ§ØºÙ ØµØºÙØ± ÙÙ JSON Ø£Ù ÙÙØ¹Ø·ÙÙ Ø·ÙØ¨ API Ø£Ù ÙÙÙ Ø¥Ø¹Ø¯Ø§Ø¯. ÙØ³Ø§Ø¹Ø¯ Ø§ÙØªØ­ÙÙ Ø¹ÙÙ Ø§ÙØªØ´Ø§Ù ÙØ«Ù ÙØ°Ù Ø§ÙÙØ´ÙÙØ§Øª.",
        howToUse: "1. Ø§ÙØµÙ JSON ÙÙ Ø­ÙÙ Ø§ÙØ¥Ø¯Ø®Ø§Ù.\n2. Ø§ÙÙØ± Ø¹ÙÙ Ø²Ø± Ø§ÙØªÙØ³ÙÙ Ø£Ù Ø§ÙØªØ­ÙÙ.\n3. Ø±Ø§Ø¬Ø¹ Ø§ÙÙØªÙØ¬Ø© Ø§ÙÙÙØ³ÙÙÙØ© Ø£Ù ØªØ­ÙÙ ÙÙ Ø±Ø³Ø§ÙØ© Ø§ÙØ®Ø·Ø£.",
        faq: [
          { q: "ÙØ§ ÙÙ JSONØ", a: "JSON Ø§Ø®ØªØµØ§Ø± ÙÙ JavaScript Object NotationØ ÙÙÙ ØªÙØ³ÙÙ Ø´Ø§Ø¦Ø¹ ÙØªØ®Ø²ÙÙ Ø§ÙØ¨ÙØ§ÙØ§Øª Ø§ÙÙÙØ¸ÙØ© ÙØªØ¨Ø§Ø¯ÙÙØ§." },
          { q: "ÙÙ ÙÙÙÙ ÙÙØ£Ø¯Ø§Ø© Ø¥ØµÙØ§Ø­ JSON ØºÙØ± Ø§ÙØµØ§ÙØ­ ØªÙÙØ§Ø¦ÙØ§ÙØ", a: "ÙÙÙÙ Ø§ÙÙØ³Ø§Ø¹Ø¯Ø© ÙÙ ØªØ­Ø¯ÙØ¯ ÙØ´Ø§ÙÙ Ø§ÙØªÙØ³ÙÙ ÙØ§ÙØ¨ÙÙØ©Ø ÙÙÙ Ø¨Ø¹Ø¶ Ø§ÙØ£Ø®Ø·Ø§Ø¡ ÙØ¯ ØªØ­ØªØ§Ø¬ Ø¥ÙÙ ØªØµØ­ÙØ­ ÙØ¯ÙÙ." },
          { q: "ÙÙØ§Ø°Ø§ ÙÙÙÙ JSON ØºÙØ± ØµØ§ÙØ­Ø", a: "Ø£Ø³Ø¨Ø§Ø¨ Ø´Ø§Ø¦Ø¹Ø© ØªØ´ÙÙ ÙÙØ¯Ø§Ù ÙØ§ØµÙØ©Ø ÙØ¬ÙØ¯ ÙØ§ØµÙØ© Ø²Ø§Ø¦Ø¯Ø©Ø Ø£ÙÙØ§Ø³ Ø®Ø§Ø·Ø¦Ø©Ø Ø£Ù Ø§Ø³ØªØ®Ø¯Ø§Ù Ø¹ÙØ§ÙØ§Øª Ø§ÙØªØ¨Ø§Ø³ ÙÙØ±Ø¯Ø© Ø¨Ø¯ÙØ§Ù ÙÙ ÙØ²Ø¯ÙØ¬Ø©." },
          { q: "ÙÙ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙÙØ·ÙÙØ±ÙÙ ÙÙØ·Ø", a: "ÙØ§. ÙÙÙØ¯Ø© Ø£ÙØ¶Ø§Ù ÙÙØ·ÙØ§Ø¨ ÙØ§ÙÙØ­ÙÙÙÙ ÙÙÙ ÙÙ ÙØªØ¹Ø§ÙÙ ÙØ¹ Ø¨ÙØ§ÙØ§Øª JSON." }
        ]
      },
      passwordgenerator: {
        title: "ÙÙÙØ¯ ÙÙÙØ§Øª Ø§ÙÙØ±ÙØ±",
        description: "Ø£ÙØ´Ø¦ ÙÙÙØ§Øª ÙØ±ÙØ± ÙÙÙØ© ÙØ¹Ø´ÙØ§Ø¦ÙØ© ÙÙØ±Ø§Ù ÙÙ ÙØªØµÙØ­Ù.",
        seo: "Ø£ÙØ´Ø¦ ÙÙÙØ§Øª ÙØ±ÙØ± ÙÙÙØ© ÙÙØ±Ø§Ù ÙÙ ÙØªØµÙØ­Ù. ÙÙÙØ¯ ÙÙÙØ§Øª ÙØ±ÙØ± ÙØ¬Ø§ÙÙ Ø¨Ø®ÙØ§Ø±Ø§Øª Ø·ÙÙ ÙØ£Ø­Ø±Ù ÙØ§Ø¨ÙØ© ÙÙØªØ®ØµÙØµ.",
        longDescription: "ÙÙÙØ¯ ÙÙÙØ§Øª Ø§ÙÙØ±ÙØ± ÙÙ Ø£Ø¯Ø§Ø© Ø¨Ø³ÙØ·Ø© Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª ØªØ³Ø§Ø¹Ø¯ Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø¹ÙÙ Ø¥ÙØ´Ø§Ø¡ ÙÙÙØ§Øª ÙØ±ÙØ± ÙÙÙØ© ÙØ¹Ø´ÙØ§Ø¦ÙØ© ÙÙØ­Ø³Ø§Ø¨Ø§Øª Ø§ÙØ´Ø®ØµÙØ© ÙØ§ÙØ¹ÙÙ ÙØ§ÙØªØ¬Ø§Ø±ÙØ©. ÙØµÙÙ ÙÙÙØ³ØªØ®Ø¯ÙÙÙ Ø§ÙØ°ÙÙ ÙØ±ÙØ¯ÙÙ Ø·Ø±ÙÙØ© Ø£Ø³Ø±Ø¹ ÙØ£ÙØ«Ø± Ø£ÙØ§ÙÙØ§ Ø¨Ø¯ÙØ§Ù ÙÙ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ø³ØªØ®Ø¯Ø§Ù ÙÙÙØ§Øª ÙØ±ÙØ± Ø¶Ø¹ÙÙØ©.",
        usageContext: "Ø§Ø³ØªØ®Ø¯Ù ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© Ø¹ÙØ¯ Ø¥ÙØ´Ø§Ø¡ Ø­Ø³Ø§Ø¨ Ø¬Ø¯ÙØ¯ Ø£Ù Ø§Ø³ØªØ¨Ø¯Ø§Ù ÙÙÙØ© ÙØ±ÙØ± ÙØ¯ÙÙØ© Ø£Ù ØªØ­Ø³ÙÙ Ø£ÙØ§Ù Ø§ÙØ­Ø³Ø§Ø¨Ø§Øª Ø°Ø§Øª ÙÙÙØ§Øª Ø§ÙÙØ±ÙØ± Ø§ÙÙØµÙØ±Ø© Ø£Ù Ø§ÙÙÙØ±Ø±Ø©.",
        howToUse: "1. Ø§Ø®ØªØ± Ø·ÙÙ ÙÙÙØ© Ø§ÙÙØ±ÙØ±.\n2. Ø­Ø¯Ø¯ Ø£ÙÙØ§Ø¹ Ø§ÙØ£Ø­Ø±Ù Ø§ÙÙØ·ÙÙØ¨ ØªØ¶ÙÙÙÙØ§.\n3. Ø§ÙÙØ± ÙÙÙ Ø²Ø± ØªÙÙÙØ¯ ÙÙÙØ© Ø§ÙÙØ±ÙØ±.\n4. Ø§ÙØ³Ø® ÙÙÙØ© Ø§ÙÙØ±ÙØ± ÙØ§Ø­ÙØ¸ÙØ§ ÙÙ ÙÙØ§Ù Ø¢ÙÙ.",
        faq: [
          { q: "ÙÙØ§Ø°Ø§ Ø£Ø³ØªØ®Ø¯Ù ÙÙÙØ¯ ÙÙÙØ§Øª Ø§ÙÙØ±ÙØ±Ø", a: "ÙØ³Ø§Ø¹Ø¯ Ø¹ÙÙ Ø¥ÙØ´Ø§Ø¡ ÙÙÙØ§Øª ÙØ±ÙØ± Ø£ÙÙÙ ÙØ£ÙÙ ÙØ§Ø¨ÙÙØ© ÙÙØªÙØ¨Ø¤ ÙÙØ§ ÙÙÙÙ ÙØ®Ø§Ø·Ø± Ø§ÙØ§Ø®ØªØ±Ø§Ù." },
          { q: "ÙØ§ Ø§ÙØ°Ù ÙØ¬Ø¹Ù ÙÙÙØ© Ø§ÙÙØ±ÙØ± Ø£ÙÙÙØ", a: "ÙÙÙØ§Øª Ø§ÙÙØ±ÙØ± Ø§ÙØ·ÙÙÙØ© Ø§ÙØªÙ ØªØ¬ÙØ¹ Ø¨ÙÙ Ø§ÙØ­Ø±ÙÙ ÙØ§ÙØ£Ø±ÙØ§Ù ÙØ§ÙØ±ÙÙØ² ÙØµØ¹Ø¨ ØªØ®ÙÙÙÙØ§." },
          { q: "ÙÙ ÙÙÙÙÙÙ Ø§Ø³ØªØ®Ø¯Ø§Ù ÙÙØ³ ÙÙÙØ© Ø§ÙÙØ±ÙØ± ÙÙ ÙÙØ§ÙØ¹ ÙØªØ¹Ø¯Ø¯Ø©Ø", a: "ÙÙ Ø§ÙØ£Ø³ÙÙ Ø§Ø³ØªØ®Ø¯Ø§Ù ÙÙÙØ© ÙØ±ÙØ± ÙØ®ØªÙÙØ© ÙÙÙ Ø­Ø³Ø§Ø¨." },
          { q: "Ø£ÙÙ Ø£Ø­ÙØ¸ ÙÙÙØ§Øª Ø§ÙÙØ±ÙØ± Ø§ÙÙÙÙØ¯Ø©Ø", a: "Ø§ÙØ®ÙØ§Ø± Ø§ÙØ£ÙØ«Ø± Ø£ÙØ§ÙÙØ§ ÙÙ Ø¹Ø§Ø¯Ø©Ù ÙØ¯ÙØ± ÙÙÙØ§Øª ÙØ±ÙØ± ÙÙØ«ÙÙ Ø¨Ù." }
        ]
      },
      textdiffchecker: { title: "ÙÙØ§Ø±Ù Ø§ÙÙØµÙØµ", description: "ÙØ§Ø±Ù ÙØµÙÙ ÙØ§ÙØªØ´Ù Ø§ÙÙØ±ÙÙ Ø¨ÙÙÙÙØ§.", seo: "Ø¥ÙØ¬Ø§Ø¯ Ø§ÙØ§Ø®ØªÙØ§ÙØ§Øª Ø¨ÙÙ Ø§ÙÙØµÙØµ." },
      base64encoder: {
        title: "ØªØ´ÙÙØ± / ÙÙ ØªØ´ÙÙØ± Base64",
        description: "Ø­ÙÙÙ Ø§ÙÙØµ Ø¥ÙÙ Base64 Ø£Ù ÙÙ ØªØ´ÙÙØ±Ù ÙÙØ±Ø§Ù.",
        seo: "ÙØ´ÙØ± ÙÙÙÙÙ Base64 Ø³Ø±ÙØ¹ ÙÙÙØ«ÙÙ. Ø­ÙÙÙ Ø§ÙÙØµ Ø¥ÙÙ ØµÙØºØ© Base64 Ø£Ù ÙÙ ØªØ´ÙÙØ±Ù ÙÙØ±Ø§Ù Ø¨Ø£Ø¯Ø§Ø© Ø®ÙÙÙØ©.",
        longDescription: "ÙØ¹Ø¯ ÙØ´ÙØ± Base64 ÙÙÙÙÙÙ Ø£Ø¯Ø§Ø© ÙØ³ØªÙØ¯Ø© Ø¥ÙÙ Ø§ÙÙØªØµÙØ­ ØªØ­ÙÙÙ Ø§ÙÙØµ Ø§ÙØ¹Ø§Ø¯Ù Ø¥ÙÙ ØµÙØºØ© Base64 ÙØªÙÙ ØªØ´ÙÙØ± Ø³ÙØ§Ø³Ù Base64 Ø¥ÙÙ ÙØµ ÙØ§Ø¨Ù ÙÙÙØ±Ø§Ø¡Ø©. ÙÙÙØ¯ ÙÙØªØ·ÙÙØ± ÙØ§ÙØ§Ø®ØªØ¨Ø§Ø± ÙÙÙØ§Ù Ø§ÙØªØ´ÙÙØ± Ø§ÙØ¨Ø³ÙØ·Ø©.",
        usageContext: "Ø§Ø³ØªØ®Ø¯ÙÙ Ø¹ÙØ¯ Ø§ÙØ­Ø§Ø¬Ø© Ø¥ÙÙ ØªØ´ÙÙØ± Ø§ÙÙØµ ÙÙÙÙÙ Ø¹Ø¨Ø± Ø§ÙØ£ÙØ¸ÙØ© Ø§ÙÙØµÙØ© Ø£Ù ÙÙ ØªØ´ÙÙØ± Ø§ÙÙØ­ØªÙÙ Ø§ÙÙØ´ÙØ±.",
        howToUse: "1. Ø£Ø¯Ø®Ù ÙØµÙ Ø£Ù Ø§ÙØµÙÙ.\n2. Ø§ÙÙØ± ØªØ´ÙÙØ± ÙØªØ­ÙÙÙ Ø§ÙÙØµ Ø¥ÙÙ Base64Ø Ø£Ù ÙÙ Ø§ÙØªØ´ÙÙØ± ÙÙØ¹ÙØ³.\n3. Ø±Ø§Ø¬Ø¹ Ø§ÙÙØªÙØ¬Ø© ÙÙ ÙÙØ·ÙØ© Ø§ÙØ¥Ø®Ø±Ø§Ø¬.\n4. Ø§ÙÙØ± ÙØ³Ø® ÙØ§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙÙØªÙØ¬Ø©.",
        faq: [
          { q: "ÙÙ Base64 Ø´ÙÙ ÙÙ Ø£Ø´ÙØ§Ù Ø§ÙØªØ´ÙÙØ±Ø", a: "ÙØ§. Base64 ÙÙ Ø·Ø±ÙÙØ© ØªØ±ÙÙØ² ÙØªÙØ«ÙÙ Ø§ÙØ¨ÙØ§ÙØ§ØªØ ÙÙÙØ³ ÙØ¸Ø§Ù Ø£ÙØ§Ù." },
          { q: "ÙØªÙ ÙÙØ³ØªØ®Ø¯Ù Base64 Ø¹Ø§Ø¯Ø©ÙØ", a: "ØºØ§ÙØ¨ÙØ§ ÙÙ ÙØ§Ø¬ÙØ§Øª Ø¨Ø±ÙØ¬Ø© Ø§ÙØªØ·Ø¨ÙÙØ§Øª ÙÙØ­ØªÙÙ Ø§ÙØ¨Ø±ÙØ¯ Ø§ÙØ¥ÙÙØªØ±ÙÙÙ ÙØªØ¶ÙÙÙ HTML/CSS ÙÙÙÙ Ø§ÙØ¨ÙØ§ÙØ§Øª." },
          { q: "ÙÙ ØªØ³ØªØ·ÙØ¹ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙ ØªØ´ÙÙØ± Ø£Ù Ø³ÙØ³ÙØ© Base64Ø", a: "ÙÙÙÙÙØ§ ÙÙ ØªØ´ÙÙØ± ÙØµ Base64 ØµØ§ÙØ­. Ø¥Ø°Ø§ ÙØ§ÙØª Ø§ÙÙØ¯Ø®ÙØ§Øª ØºÙØ± ÙÙØªÙÙØ© Ø£Ù ØºÙØ± ØµØ§ÙØ­Ø©Ø ÙØ¯ ØªÙØ´Ù Ø§ÙÙØªÙØ¬Ø©." },
          { q: "ÙÙ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙÙØ·ÙØ±ÙÙ ÙÙØ·Ø", a: "ÙØ§. ÙÙÙØ¯Ø© Ø£ÙØ¶ÙØ§ ÙÙØ·ÙØ§Ø¨ ÙØ§ÙÙØ­ÙÙÙÙ ÙØ§ÙÙØ³ÙÙÙÙ ÙØºÙØ±ÙÙ." }
        ]
      },
      colorconverter: {
        title: "ÙØ­ÙÙ ÙÙØ¯ Ø§ÙØ£ÙÙØ§Ù",
        description: "Ø­ÙÙÙ ÙÙÙ Ø£ÙÙØ§Ù HEX ÙRGB ÙHSL ÙÙØ±Ø§Ù.",
        seo: "Ø­ÙÙÙ ÙÙÙ Ø£ÙÙØ§Ù HEX ÙRGB ÙHSL ÙÙØ±Ø§Ù Ø¨ÙØ­ÙÙ Ø¨Ø³ÙØ·. ÙÙÙØ¯ ÙØªØµÙÙÙ Ø§ÙÙÙØ¨ ÙØ£ÙØ¸ÙØ© UI ÙØªØ·ÙÙØ± Ø§ÙÙØ§Ø¬ÙØ© Ø§ÙØ£ÙØ§ÙÙØ©.",
        longDescription: "ÙØ­ÙÙ ÙÙØ¯ Ø§ÙØ£ÙÙØ§Ù ÙÙ Ø£Ø¯Ø§Ø© Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª ØªØ³Ø§Ø¹Ø¯ Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø¹ÙÙ ØªØ­ÙÙÙ ÙÙÙ Ø§ÙØ£ÙÙØ§Ù Ø¨ÙÙ ØµÙØº HEX ÙRGB ÙHSL. ÙÙÙØ¯ ÙØªØµÙÙÙ Ø§ÙÙÙØ¨ ÙØ¹ÙÙ UI ÙØ§ÙØ¹ÙØ§ÙØ© Ø§ÙØªØ¬Ø§Ø±ÙØ©.",
        usageContext: "Ø§Ø³ØªØ®Ø¯ÙÙ Ø¹ÙØ¯ Ø§ÙØ­Ø§Ø¬Ø© Ø¥ÙÙ ØªØ­ÙÙÙ ÙÙÙ ÙÙ ØµÙØºØ© Ø¥ÙÙ Ø£Ø®Ø±Ù Ø£Ù ÙØ³Ø® Ø±ÙÙØ² Ø§ÙØ£ÙÙØ§Ù Ø¥ÙÙ CSS.",
        howToUse: "1. Ø£Ø¯Ø®Ù ÙÙÙØ© HEX Ø£Ù Ø§Ø³ØªØ®Ø¯Ù ÙØ­Ø¯Ø¯ Ø§ÙØ£ÙÙØ§Ù.\n2. Ø§Ø·ÙØ¹ Ø¹ÙÙ Ø§ÙÙÙÙ Ø§ÙÙØ­ÙÙØ© ÙÙ HEX ÙRGB ÙHSL ÙÙØ±Ø§Ù.\n3. Ø§ÙÙØ± ÙØ³Ø® Ø¨Ø¬Ø§ÙØ¨ Ø£Ù ÙÙÙØ© ØªØ±ÙØ¯ÙØ§.\n4. Ø§ÙÙØ± Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹ÙÙÙ ÙÙØ¨Ø¯Ø¡ Ø¨ÙÙÙ Ø¬Ø¯ÙØ¯.",
        faq: [
          { q: "ÙØ§ Ø§ÙÙØ±Ù Ø¨ÙÙ HEX ÙRGB ÙHSLØ", a: "HEX Ø´Ø§Ø¦Ø¹ ÙÙ ØªØµÙÙÙ Ø§ÙÙÙØ¨Ø ÙRGB ÙØ¹ØªÙØ¯ Ø¹ÙÙ ÙÙÙ Ø§ÙØ¶ÙØ¡ Ø§ÙØ£Ø­ÙØ± ÙØ§ÙØ£Ø®Ø¶Ø± ÙØ§ÙØ£Ø²Ø±ÙØ ÙHSL ÙÙØ«Ù Ø§ÙØªØ¯Ø±Ø¬ ÙØ§ÙØªØ´Ø¨Ø¹ ÙØ§ÙØ¥Ø¶Ø§Ø¡Ø©." },
          { q: "ÙÙÙ ØªÙÙØ¯ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø©Ø", a: "ÙÙÙØµÙÙÙÙ ÙØ§ÙÙØ·ÙØ±ÙÙ ÙØ§ÙÙØ³ÙÙÙÙ ÙØ§ÙØ·ÙØ§Ø¨ ÙÙÙ ÙÙ ÙØªØ¹Ø§ÙÙ ÙØ¹ Ø§ÙØ£ÙÙØ§Ù Ø§ÙØ±ÙÙÙØ©." },
          { q: "ÙÙ ÙÙÙÙ Ø§Ø³ØªØ®Ø¯Ø§Ù ÙØ°Ù Ø§ÙÙÙÙ ÙÙ CSSØ", a: "ÙØ¹Ù. HEX ÙRGB ÙHSL ÙØ³ØªØ®Ø¯ÙØ© Ø¨Ø´ÙÙ Ø´Ø§Ø¦Ø¹ ÙÙ CSS." },
          { q: "ÙÙ ØªØ¯Ø¹Ù Ø§ÙØ£Ø¯Ø§Ø© ÙØ­Øµ Ø§ÙØ£ÙÙØ§Ù Ø¨Ø³Ø±Ø¹Ø©Ø", a: "ÙØ¹Ù. ÙÙÙÙÙ Ø§Ø®ØªÙØ§Ø± ÙÙÙ Ø¨ØµØ±ÙØ§Ù ÙÙØ±Ø§Ø¬Ø¹Ø© Ø§ÙÙÙÙ Ø§ÙÙØ­ÙÙØ© ÙÙØ±Ø§Ù." }
        ]
      },
      ruler: { title: "ÙØ³Ø·Ø±Ø© Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª", description: "ÙÙØ§Ø³ Ø§ÙÙØ³Ø§ÙØ§Øª Ø¹ÙÙ Ø§ÙØ´Ø§Ø´Ø© ÙØ¹ Ø§ÙÙØ¹Ø§ÙØ±Ø©." },
      wordcounter: { title: "Ø¹Ø¯Ø§Ø¯ Ø§ÙÙÙÙØ§Øª", description: "Ø¹Ø¯ Ø§ÙØ­Ø±ÙÙ ÙØ§ÙÙÙÙØ§Øª ÙÙ Ø§ÙÙÙØª Ø§ÙÙØ¹ÙÙ." },
      countdown: { title: "ÙØ¤ÙØª Ø§ÙØ¹Ø¯ Ø§ÙØªÙØ§Ø²ÙÙ", description: "Ø¶Ø¨Ø· Ø§ÙÙØ¤ÙØªØ§Øª ÙØ¹ ÙØ¶Ø¹ ÙÙØ¡ Ø§ÙØ´Ø§Ø´Ø©." },
      digitalclock: { title: "Ø³Ø§Ø¹Ø© Ø±ÙÙÙØ©", description: "Ø§ÙØªØ­ÙÙ ÙÙ Ø§ÙÙÙØª Ø§ÙØ­Ø§ÙÙ ÙÙ Ø§ÙÙÙØª Ø§ÙÙØ¹ÙÙ." },
      screenlamp: { title: "Ø¥Ø¶Ø§Ø¡Ø© Ø§ÙØ´Ø§Ø´Ø©", description: "ØªØ­ÙÙÙ Ø´Ø§Ø´ØªÙ Ø¥ÙÙ Ø¶ÙØ¡ ÙÙÙÙ." },
      qrgenerator: {
        title: "ÙÙÙØ¯ Ø±ÙØ² QR",
        description: "Ø£ÙØ´Ø¦ Ø±ÙÙØ² QR ÙÙÙØµÙØµ ÙØ§ÙØ±ÙØ§Ø¨Ø· ÙØ§ÙØ§ØªØµØ§ÙØ§Øª.",
        longDescription: "ÙØªÙØ­ ÙÙ ÙÙÙØ¯ Ø±ÙØ² QR Ø¥ÙØ´Ø§Ø¡ Ø±ÙÙØ² QR ÙÙÙØµÙØµ ÙØ§ÙØ±ÙØ§Ø¨Ø· ÙØ¨ÙØ§ÙØ§Øª Ø§ÙØ§ØªØµØ§Ù ÙØ§ÙÙØ­ØªÙÙØ§Øª Ø§ÙØ¨Ø³ÙØ·Ø© Ø§ÙØ£Ø®Ø±Ù. ÙÙÙØ¯ ÙÙØ´Ø±ÙØ§Øª ÙØ§ÙÙØ¹Ø§ÙÙØ§Øª ÙØ§ÙÙØ·Ø§Ø¹Ù ÙØ§ÙØªØºÙÙÙ ÙØ§ÙÙØ´Ø§Ø±ÙØ© Ø§ÙØ´Ø®ØµÙØ©. ÙÙÙÙÙ Ø¥ÙØ´Ø§Ø¡ Ø±ÙØ² QR ÙÙ Ø«ÙØ§ÙÙ ÙØªÙØ²ÙÙÙ ÙÙØ§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙØ±ÙÙÙ Ø£Ù Ø§ÙÙØ·Ø¨ÙØ¹.",
        usageContext: "ØªÙØ³ØªØ®Ø¯Ù Ø±ÙÙØ² QR Ø¹Ø§Ø¯Ø©Ù ÙØ±ÙØ§Ø¨Ø· Ø§ÙÙÙØ§ÙØ¹ ÙØ§ÙÙØµÙÙ Ø¥ÙÙ Ø§ÙÙÙØ§Ø¦Ù ÙØªØ³Ø¬ÙÙ Ø§ÙÙØµÙÙ ÙÙ Ø§ÙÙØ¹Ø§ÙÙØ§Øª ÙÙØ´Ø§Ø±ÙØ© Ø§ÙØ§ØªØµØ§ÙØ§Øª ÙØªØ¹ÙÙÙØ§Øª Ø§ÙØ¯ÙØ¹ ÙÙÙØµÙØ§Øª Ø§ÙÙÙØªØ¬Ø§Øª. ÙÙØ³ÙÙÙ Ø±ÙØ² QR ÙØµÙÙ Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø¥ÙÙ Ø§ÙÙØ¹ÙÙÙØ§Øª Ø¯ÙÙ Ø§ÙØ­Ø§Ø¬Ø© ÙÙØªØ§Ø¨Ø© ÙØµÙØµ Ø·ÙÙÙØ© ÙØ¯ÙÙØ§Ù.",
        howToUse: "1. Ø£Ø¯Ø®Ù Ø§ÙÙØµ Ø£Ù Ø§ÙØ±Ø§Ø¨Ø· Ø£Ù Ø§ÙÙØ­ØªÙÙ Ø§ÙØ°Ù ØªØ±ÙØ¯ ØªØ±ÙÙØ²Ù.\n2. Ø£ÙØ´Ø¦ Ø±ÙØ² QR.\n3. ÙØ²ÙÙ Ø§ÙØµÙØ±Ø© ÙØ§Ø³ØªØ®Ø¯ÙÙØ§ Ø­ÙØ« ØªØ­ØªØ§Ø¬.",
        faq: [
          { q: "ÙÙ ÙÙÙÙÙÙ Ø¥ÙØ´Ø§Ø¡ Ø±ÙØ² QR ÙØ±Ø§Ø¨Ø· ÙÙÙØ¹Ø", a: "ÙØ¹Ù. ÙÙÙÙÙ Ø¥ÙØ´Ø§Ø¡ Ø±ÙØ² QR ÙØ±Ø§Ø¨Ø· URL ÙÙØ´Ø§Ø±ÙØªÙ ÙØ·Ø¨ÙØ¹Ø§Ù Ø£Ù Ø±ÙÙÙØ§Ù." },
          { q: "ÙÙ ÙÙÙÙ Ø§Ø³ØªØ®Ø¯Ø§Ù Ø±ÙÙØ² QR ÙÙ ÙÙØ§Ø¯ Ø§ÙØ£Ø¹ÙØ§ÙØ", a: "ÙØ¹Ù. ØªÙØ³ØªØ®Ø¯Ù Ø±ÙÙØ² QR ÙØ«ÙØ±Ø§Ù Ø¹ÙÙ Ø§ÙÙÙØ´ÙØ±Ø§Øª ÙØ§ÙÙÙØµÙØ§Øª ÙØ¨Ø·Ø§ÙØ§Øª Ø§ÙØ£Ø¹ÙØ§Ù ÙØ§ÙØªØºÙÙÙ ÙØ§ÙÙÙØ§Ø¦Ù." },
          { q: "ÙÙ ØªÙØªÙÙ ØµÙØ§Ø­ÙØ© Ø±ÙÙØ² QRØ", a: "Ø±ÙØ² QR Ø§ÙÙÙØ§Ø³Ù Ø§ÙÙÙÙØ´Ø£ ÙÙ ÙØ­ØªÙÙ Ø«Ø§Ø¨Øª ÙØ§ ÙÙØªÙÙ ÙÙ ØªÙÙØ§Ø¡ ÙÙØ³Ù. ØºÙØ± Ø£Ù Ø§ÙÙØ­ØªÙÙ Ø§ÙÙØ¯Ù ÙØ¬Ø¨ Ø£Ù ÙØ¸Ù ÙØªØ§Ø­Ø§Ù ÙØ§Ø³ØªÙØ±Ø§Ø± Ø¹ÙÙ Ø§ÙÙØ³Ø­." },
          { q: "ÙÙ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙØ¬Ø§ÙÙØ©Ø", a: "ÙØ¹Ù. ÙÙÙÙÙ Ø¥ÙØ´Ø§Ø¡ Ø±ÙÙØ² QR Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª Ø¯ÙÙ ØªØ«Ø¨ÙØª Ø¨Ø±Ø§ÙØ¬ Ø¥Ø¶Ø§ÙÙØ©." }
        ]
      },
      barcodegenerator: {
        title: "ÙÙÙØ¯ Ø§ÙØ¨Ø§Ø±ÙÙØ¯",
        description: "Ø£ÙØ´Ø¦ Ø¨Ø§Ø±ÙÙØ¯Ø§Øª ÙÙÙÙØªØ¬Ø§Øª ÙØ§ÙÙÙØµÙØ§Øª ÙØ§ÙÙØ®Ø²ÙÙ.",
        longDescription: "ÙØ³Ø§Ø¹Ø¯Ù ÙÙÙØ¯ Ø§ÙØ¨Ø§Ø±ÙÙØ¯ Ø¹ÙÙ Ø¥ÙØ´Ø§Ø¡ Ø¨Ø§Ø±ÙÙØ¯Ø§Øª ÙÙÙÙØªØ¬Ø§Øª ÙØ§ÙÙÙØµÙØ§Øª ÙØ§ÙÙØ®Ø²ÙÙ ÙØ§ÙØªØºÙÙÙ ÙØ§ÙØªØªØ¨Ø¹ Ø§ÙØ¯Ø§Ø®ÙÙ. ÙÙÙØ¯ ÙÙØ´Ø±ÙØ§Øª Ø§ÙØµØºÙØ±Ø© ÙØ§ÙÙØ³ØªÙØ¯Ø¹Ø§Øª ÙØ§ÙÙÙØ§ØªØ¨ ÙØ§ÙÙØ¯Ø§Ø±Ø³ ÙØ£Ù Ø´Ø®Øµ ÙØ­ØªØ§Ø¬ Ø¥ÙÙ Ø¥ÙØ´Ø§Ø¡ Ø¨Ø§Ø±ÙÙØ¯ Ø³Ø±ÙØ¹ Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª.",
        usageContext: "ØªÙØ³ØªØ®Ø¯Ù Ø§ÙØ¨Ø§Ø±ÙÙØ¯Ø§Øª Ø¹ÙÙ ÙØ·Ø§Ù ÙØ§Ø³Ø¹ ÙÙ Ø§ÙØªØ¬Ø²Ø¦Ø© ÙØ¶Ø¨Ø· Ø§ÙÙØ®Ø²ÙÙ ÙØ§ÙØ´Ø­Ù ÙØªØªØ¨Ø¹ Ø§ÙØ£ØµÙÙ ÙÙÙØµÙØ§Øª Ø§ÙÙØ³ØªÙØ¯Ø§Øª. ØªØ³ÙÙÙ Ø§ÙØªØ¹Ø±ÙÙ Ø§ÙØ³Ø±ÙØ¹ Ø¹ÙÙ Ø§ÙØ¹ÙØ§ØµØ± ÙØªÙÙÙÙÙ ÙÙ Ø£Ø®Ø·Ø§Ø¡ Ø§ÙØ¥Ø¯Ø®Ø§Ù Ø§ÙÙØ¯ÙÙ. Ø§Ø®ØªÙØ§Ø± Ø§ÙØªÙØ³ÙÙ Ø§ÙØµØ­ÙØ­ ÙØ¶ÙÙ Ø§ÙØªÙØ§ÙÙ ÙØ¹ Ø§ÙÙØ§Ø³Ø­Ø§Øª ÙØ³ÙØ± Ø§ÙØ¹ÙÙ.",
        howToUse: "1. Ø£Ø¯Ø®Ù Ø§ÙØ±ÙÙ Ø£Ù Ø§ÙÙØµ Ø§ÙÙØ·ÙÙØ¨ ÙØ¨Ø§Ø±ÙÙØ¯Ù.\n2. Ø§Ø®ØªØ± ØªÙØ³ÙÙ Ø§ÙØ¨Ø§Ø±ÙÙØ¯.\n3. Ø£ÙØ´Ø¦ ØµÙØ±Ø© Ø§ÙØ¨Ø§Ø±ÙÙØ¯ ÙÙØ²ÙÙÙØ§.",
        faq: [
          { q: "ÙØ§ ÙÙ ÙÙÙØ¯ Ø§ÙØ¨Ø§Ø±ÙÙØ¯Ø", a: "ÙÙÙØ¯ Ø§ÙØ¨Ø§Ø±ÙÙØ¯ ÙÙÙØ´Ø¦ Ø±ÙØ²Ø§Ù ÙØ§Ø¨ÙØ§Ù ÙÙÙØ±Ø§Ø¡Ø© Ø§ÙØ¢ÙÙØ© Ø¨ÙØ§Ø¡Ù Ø¹ÙÙ Ø§ÙÙØµ Ø£Ù Ø§ÙØ£Ø±ÙØ§Ù Ø§ÙØªÙ ØªÙØ¯Ø®ÙÙØ§." },
          { q: "Ø£Ù ØªÙØ³ÙÙ Ø¨Ø§Ø±ÙÙØ¯ ÙØ¬Ø¨ Ø£Ù Ø£Ø®ØªØ§Ø±Ø", a: "ÙØ¹ØªÙØ¯ Ø£ÙØ¶Ù ØªÙØ³ÙÙ Ø¹ÙÙ ÙÙØ§Ù Ø§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙØ¨Ø§Ø±ÙÙØ¯. ÙØ¯ ØªØªØ·ÙØ¨ ÙÙØªØ¬Ø§Øª Ø§ÙØªØ¬Ø²Ø¦Ø© ÙÙÙØµÙØ§Øª Ø§ÙÙØ®Ø²ÙÙ ÙØ£ÙØ¸ÙØ© Ø§ÙØ´Ø­Ù ÙØ¹Ø§ÙÙØ± ÙØ®ØªÙÙØ©." },
          { q: "ÙÙ ÙÙÙÙÙÙ Ø·Ø¨Ø§Ø¹Ø© Ø§ÙØ¨Ø§Ø±ÙÙØ¯ Ø§ÙÙÙÙØ´Ø£Ø", a: "ÙØ¹Ù. Ø¨Ø¹Ø¯ Ø¥ÙØ´Ø§Ø¡ Ø§ÙØ¨Ø§Ø±ÙÙØ¯Ø ÙÙÙÙÙ ØªÙØ²ÙÙÙ ÙØ·Ø¨Ø§Ø¹ØªÙ ÙÙÙÙØµÙØ§Øª Ø£Ù Ø§ÙØªØºÙÙÙ Ø£Ù Ø§ÙØ§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙØ¯Ø§Ø®ÙÙ." },
          { q: "ÙÙ ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙØ§Ø³Ø¨Ø© ÙÙØ´Ø±ÙØ§Øª Ø§ÙØµØºÙØ±Ø©Ø", a: "ÙØ¹Ù. ÙÙÙØ¯Ø© ÙÙÙØªØ§Ø¬Ø± Ø§ÙØµØºÙØ±Ø© ÙØ§ÙÙØ³ØªÙØ¯Ø¹Ø§Øª ÙØ§ÙÙÙØ§ØªØ¨ ÙØºÙØ±ÙØ§ ÙÙ Ø§ÙÙØ±Ù Ø§ÙØªÙ ØªØ­ØªØ§Ø¬ Ø¥ÙÙ Ø¥ÙØ´Ø§Ø¡ Ø¨Ø§Ø±ÙÙØ¯ Ø¨Ø³Ø±Ø¹Ø©." }
        ]
      },
      dummytext: { title: "ÙØµ ÙÙØ±ÙÙ Ø¥ÙØ¨Ø³ÙÙ", description: "ØªÙÙÙØ¯ ÙÙØ±Ø§Øª ÙØµÙØ© Ø¨Ø¯ÙÙØ©." },
    },
    common: {
      copyAll: "ÙØ³Ø® Ø§ÙÙÙ",
      clear: "ÙØ³Ø­",
      sample: "ÙØµ ØªØ¬Ø±ÙØ¨Ù",
      placeholder: "Ø§ÙØµÙ Ø£Ù Ø§ÙØªØ¨ Ø§ÙÙØµ ÙÙØ§...",
      paragraphs: "ÙÙØ±Ø§Øª",
      generatedText: "Ø§ÙÙØµ Ø§ÙÙØ§ØªØ¬",
      charCountWithSpaces: "Ø¹Ø¯Ø¯ Ø§ÙØ­Ø±ÙÙ (ÙØ¹ Ø§ÙÙØ³Ø§ÙØ§Øª)",
      charCountWithoutSpaces: "Ø¹Ø¯Ø¯ Ø§ÙØ­Ø±ÙÙ (Ø¨Ø¯ÙÙ ÙØ³Ø§ÙØ§Øª)",
      whichPosition: "ÙØ§ ÙÙ ÙÙÙØ¹ Ø§ÙØ­Ø±Ù Ø§ÙØ°Ù ØªØ±ÙØ¯ Ø§ÙØ¹Ø«ÙØ± Ø¹ÙÙÙØ",
      backToTools: "Ø§ÙØ¹ÙØ¯Ø© Ø¥ÙÙ Ø§ÙØ£Ø¯ÙØ§Øª",
      copied: "ØªÙ Ø§ÙÙØ³Ø® Ø¥ÙÙ Ø§ÙØ­Ø§ÙØ¸Ø©!",
      languageSelect: "Ø§Ø®ØªØ± ÙØºØ© Ø§ÙÙØ­ØªÙÙ",
      highlightHelp: "* ÙØªÙ ØªÙÙÙØ² Ø§ÙØ­Ø±Ù Ø§ÙÙÙØ¬ÙØ¯ ÙÙ Ø§ÙÙÙØ±Ø³ Ø§ÙÙØ­Ø¯Ø¯ ÙÙ Ø§ÙÙÙØª Ø§ÙÙØ¹ÙÙ Ø¯Ø§Ø®Ù ÙÙØ·ÙØ© Ø§ÙÙØµ Ø£Ø¹ÙØ§Ù.",
      allTools: "Ø¬ÙÙØ¹ Ø§ÙØ£Ø¯ÙØ§Øª",
      footerNote1: "ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø© ÙÙ Ø¬Ø²Ø¡ ÙÙ ÙØ¬ÙÙØ¹Ø© Ø£Ø¯ÙØ§Øª apps24.",
      footerNote2: "ØªØªÙ Ø¬ÙÙØ¹ Ø¹ÙÙÙØ§Øª Ø§ÙÙØ¹Ø§ÙØ¬Ø© ÙØ­ÙÙÙØ§ ÙÙ ÙØªØµÙØ­Ù ÙØ¶ÙØ§Ù Ø£ÙØµÙ ÙØ¯Ø± ÙÙ Ø§ÙØ®ØµÙØµÙØ© ÙØ§ÙØ³Ø±Ø¹Ø©.",
      koLabel: "Ø§ÙÙÙØ±ÙØ©",
      enLabel: "Ø§ÙØ¥ÙØ¬ÙÙØ²ÙØ©",
      textCategory: "ÙØµ",
      utilityCategory: "Ø£Ø¯Ø§Ø©",
      positionPlaceholder: "Ø§ÙÙÙÙØ¹",
      twelveHour: "12H",
      twentyFourHour: "24H",
      fontSize: "Ø§ÙØ­Ø¬Ù",
      customColor: "ÙÙÙ",
      presetColors: "Ø§ÙØ¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§ÙÙØ³Ø¨ÙØ©",
      homeTitle: "Ø£Ø¯ÙØ§Øª Ø³Ø±ÙØ¹Ø© ÙØªØ¹Ø¯Ø¯Ø© Ø§ÙÙØºØ§Øª",
      homeSubtitle: "Apps24 ÙÙ ÙÙÙØ¹ Ø£Ø¯ÙØ§Øª Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª ÙØªØ¹Ø¯Ø¯ Ø§ÙÙØºØ§ØªØ ØªÙ Ø¥ÙØ´Ø§Ø¤Ù ÙÙØ£Ø´Ø®Ø§Øµ Ø§ÙØ°ÙÙ ÙØ±ÙØ¯ÙÙ Ø£Ø¯ÙØ§Øª Ø³Ø±ÙØ¹Ø© ÙØ¨Ø³ÙØ·Ø© ÙØ¹ÙÙÙØ© Ø¯ÙÙ Ø®Ø·ÙØ§Øª ØºÙØ± Ø¶Ø±ÙØ±ÙØ©.",
      homeIntro1: "Apps24 ÙÙ ÙÙÙØ¹ Ø£Ø¯ÙØ§Øª Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª ÙØªØ¹Ø¯Ø¯ Ø§ÙÙØºØ§ØªØ ØªÙ Ø¥ÙØ´Ø§Ø¤Ù ÙÙØ£Ø´Ø®Ø§Øµ Ø§ÙØ°ÙÙ ÙØ±ÙØ¯ÙÙ Ø£Ø¯ÙØ§Øª Ø³Ø±ÙØ¹Ø© ÙØ¨Ø³ÙØ·Ø© ÙØ¹ÙÙÙØ© Ø¯ÙÙ Ø®Ø·ÙØ§Øª ØºÙØ± Ø¶Ø±ÙØ±ÙØ©. Ø¨Ø¯ÙØ§Ù ÙÙ ØªÙØ²ÙÙ Ø¨Ø±Ø§ÙØ¬ Ø£Ù Ø¥ÙØ´Ø§Ø¡ Ø­Ø³Ø§Ø¨ ÙÙ Ø£Ø¬Ù ÙÙØ§Ù ØµØºÙØ±Ø©Ø ÙÙÙÙ ÙÙÙØ³ØªØ®Ø¯ÙÙÙ ÙØªØ­ Ø§ÙØµÙØ­Ø© ÙØ§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙØ£Ø¯Ø§Ø© ÙØ¨Ø§Ø´Ø±Ø© ÙØ§ÙØ­ØµÙÙ Ø¹ÙÙ Ø§ÙÙØªÙØ¬Ø© Ø®ÙØ§Ù Ø¨Ø¶Ø¹ ÙÙØ±Ø§Øª ÙÙØ·.",
      homeIntro2: "ÙØ¯ÙÙØ§ ÙÙ ØªØ³ÙÙÙ Ø§ÙÙÙØ§Ù Ø§ÙØ±ÙÙÙØ© Ø§ÙÙÙÙÙØ© ÙÙØ¬ÙÙØ¹Ø© ÙØ§Ø³Ø¹Ø© ÙÙ Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ. Ø³ÙØ§Ø¡ ÙÙØª Ø·Ø§ÙØ¨ÙØ§ ÙØ¹Ø¯ Ø§ÙÙÙÙØ§ØªØ Ø£Ù ÙØ³ÙÙÙÙØ§ ÙØ¬ÙØ² Ø§ÙØ±ÙØ§Ø¨Ø· Ø£Ù Ø§ÙÙØ­ØªÙÙØ Ø£Ù ÙØ·ÙØ±ÙØ§ ÙØ±Ø§Ø¬Ø¹ Ø¨ÙØ§ÙØ§Øª JSON Ø£Ù Base64Ø Ø£Ù ÙØµÙÙÙØ§ ÙØ¹ÙÙ Ø¨Ø§ÙØ£ÙÙØ§ÙØ Ø£Ù ØµØ§Ø­Ø¨ Ø¹ÙÙ ÙÙØ´Ø¦ Ø±ÙÙØ² QR ÙØ§ÙØ¨Ø§Ø±ÙÙØ¯Ø ÙØ¥Ù Apps24 ÙÙØ¯Ù Ø£Ø¯ÙØ§Øª Ø®ÙÙÙØ© ÙØ³ÙÙØ© Ø§ÙÙÙÙ ÙØ³Ø±ÙØ¹Ø© Ø§ÙÙØµÙÙ.",
      homeAboutTitle: "Ø­ÙÙ Apps24",
      homeWhatYouCanDoTitle: "ÙØ§ Ø§ÙØ°Ù ÙÙÙÙÙ ÙØ¹ÙÙ Ø¹ÙÙ Apps24",
      homeWhatYouCanDoBody: "ÙØ¬ÙØ¹ Apps24 ÙØ¬ÙÙØ¹Ø© ÙØªØ²Ø§ÙØ¯Ø© ÙÙ Ø§ÙØ£Ø¯ÙØ§Øª Ø§ÙÙÙÙØ¯Ø© Ø§ÙÙØ¹ØªÙØ¯Ø© Ø¹ÙÙ Ø§ÙÙØªØµÙØ­ ÙÙÙØµÙØµ ÙØ§ÙØµÙØ± ÙØ§ÙØªÙØ³ÙÙ ÙØ§ÙØ£Ø¯ÙØ§Øª Ø§ÙØ¨ØµØ±ÙØ© ÙØ³ÙØ± Ø§ÙØ¹ÙÙ Ø§ÙØªÙÙÙØ©. ÙÙÙÙÙ Ø¶ØºØ· Ø§ÙØµÙØ±Ø ØªØ­ÙÙÙ Ø­Ø§ÙØ© Ø§ÙØ£Ø­Ø±ÙØ Ø§ÙØªØ­ÙÙ ÙÙ JSONØ Ø¥ÙØ´Ø§Ø¡ ÙÙÙØ§Øª ÙØ±ÙØ±Ø ÙÙØ§Ø±ÙØ© Ø§Ø®ØªÙØ§ÙØ§Øª Ø§ÙÙØµÙØµØ ØªØ±ÙÙØ² ÙÙÙ ØªØ±ÙÙØ² Base64Ø Ø¥ÙØ´Ø§Ø¡ Ø±ÙÙØ² QRØ Ø¥ÙØ´Ø§Ø¡ Ø§ÙØ¨Ø§Ø±ÙÙØ¯Ø ÙØºÙØ± Ø°ÙÙ Ø§ÙÙØ«ÙØ±. ØªÙ ØªØµÙÙÙ ÙØ°Ù Ø§ÙØ£Ø¯ÙØ§Øª ÙÙÙÙØ§Ù Ø§ÙÙØµÙØ±Ø© ÙØ§ÙÙØ±ÙØ²Ø©. ÙØ¨Ø¯ÙØ§Ù ÙÙ Ø§ÙØªÙÙÙ ÙÙ ÙØ§Ø¬ÙØ§Øª ÙØ¹ÙØ¯Ø©Ø ÙÙÙÙ ÙÙÙØ³ØªØ®Ø¯ÙÙÙ Ø­Ù ÙØ´ÙÙØ© ÙØ§Ø­Ø¯Ø© ÙÙ ÙÙ ÙØ±Ø© ÙÙ Ø®ÙØ§Ù ØªØµÙÙÙ ÙØ§Ø¶Ø­ ÙØ³ÙØ± Ø¹ÙÙ Ø¨Ø³ÙØ·.",
      homeWhyUsersChooseTitle: "ÙÙØ§Ø°Ø§ ÙØ®ØªØ§Ø± Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Apps24",
      homeWhyUsersChoosePoints: [
        "ÙØ§Ø¬ÙØ§Øª Ø¨Ø³ÙØ·Ø© ÙØ³ÙÙØ© Ø§ÙØ§Ø³ØªØ®Ø¯Ø§Ù",
        "Ø£Ø¯ÙØ§Øª ÙØªØµÙØ­ Ø³Ø±ÙØ¹Ø© ÙÙÙÙØ§Ù Ø§ÙØ³Ø±ÙØ¹Ø©",
        "ÙØµÙÙ ÙØªØ¹Ø¯Ø¯ Ø§ÙÙØºØ§Øª ÙÙÙØ³ØªØ®Ø¯ÙÙÙ Ø­ÙÙ Ø§ÙØ¹Ø§ÙÙ",
        "Ø£Ø¯ÙØ§Øª Ø¹ÙÙÙØ© ÙØ§Ø­ØªÙØ§Ø¬Ø§Øª ÙØ§ÙØ¹ÙØ©",
      ],
      homeOngoingFocusTitle: "ÙØµÙÙ ÙÙØ§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙÙÙÙÙ",
      homeOngoingFocusBody: "ØªÙ ØªØµÙÙÙ Apps24 ÙÙØ¬ÙÙØ¹Ø© ÙØ§Ø³Ø¹Ø© ÙÙ Ø§ÙÙÙØ§Ù Ø§ÙØ±ÙÙÙØ© Ø§ÙØªÙ ØªØ¸ÙØ± ÙÙ Ø§ÙØ¹ÙÙ Ø§ÙÙÙÙÙ ÙØ§ÙØ¯Ø±Ø§Ø³Ø© ÙØ§ÙÙØ´Ø§Ø· Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª. ÙØ­ØªØ§Ø¬ Ø¨Ø¹Ø¶ Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø¥ÙÙ Ø£Ø¯ÙØ§Øª ØªÙÙÙØ© ÙÙØ¨ÙØ§ÙØ§Øª Ø§ÙÙÙØ¸ÙØ© Ø£Ù Ø§ÙØªØ±ÙÙØ². ÙÙØ­ØªØ§Ø¬ Ø¢Ø®Ø±ÙÙ Ø¥ÙÙ Ø£Ø¯ÙØ§Øª ÙØ­ØªÙÙ ÙÙÙØªØ§Ø¨Ø© Ø£Ù Ø§ÙØªÙØ³ÙÙ Ø£Ù Ø§ÙÙØ´Ø±. ÙÙØ§ ÙØ­ØªØ§Ø¬ Ø¨Ø¹Ø¶ÙÙ Ø¥ÙÙ Ø£Ø¯ÙØ§Øª Ø¹ÙÙÙØ© ÙØ¥ÙØ´Ø§Ø¡ Ø±ÙÙØ² QR ÙØ§ÙØ¨Ø§Ø±ÙÙØ¯ ÙÙÙÙØ§Øª Ø§ÙÙØ±ÙØ±. ÙÙÙ Ø®ÙØ§Ù Ø¬ÙØ¹ ÙØ°Ù Ø§ÙØ£Ø¯ÙØ§Øª ÙÙ ÙÙØ§Ù ÙØ§Ø­Ø¯Ø ÙØ³Ø§Ø¹Ø¯ Apps24 Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø¹ÙÙ ØªÙÙÙØ± Ø§ÙÙÙØª ÙØªØ¬ÙØ¨ Ø§ÙØ¨Ø±Ø§ÙØ¬ ØºÙØ± Ø§ÙØ¶Ø±ÙØ±ÙØ©. ÙØ¨ÙØ§ Ø£Ù Ø§ÙÙÙØµØ© ÙØªØ¹Ø¯Ø¯Ø© Ø§ÙÙØºØ§ØªØ ÙÙÙ ØªØ¯Ø¹Ù Ø£ÙØ¶ÙØ§ Ø§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø§ÙØ°ÙÙ ÙÙØ¶ÙÙÙ Ø§ÙØ¹ÙÙ Ø¨ÙØºØªÙÙ Ø§ÙØ®Ø§ØµØ© ÙØ¹ Ø§ÙØ§Ø­ØªÙØ§Ø¸ Ø¨ÙÙØ³ ØªØ¬Ø±Ø¨Ø© Ø§ÙØ£Ø¯ÙØ§Øª Ø§ÙØ£Ø³Ø§Ø³ÙØ©. ÙØ¹ÙÙ ÙØ¹Ø¸Ù Ø£Ø¯ÙØ§Øª Apps24 ÙØ¨Ø§Ø´Ø±Ø© Ø¯Ø§Ø®Ù Ø§ÙÙØªØµÙØ­Ø ÙÙØ§ ÙØ¬Ø¹Ù Ø§Ø³ØªØ®Ø¯Ø§ÙÙØ§ Ø³ÙÙÙØ§ Ø¹ÙÙ Ø£Ø¬ÙØ²Ø© Ø§ÙÙÙØ¨ÙÙØªØ± ÙØ§ÙÙÙØ§ØªÙ Ø§ÙÙØ­ÙÙÙØ©. ÙØ­Ù ÙØ¤ÙÙ Ø¨Ø£Ù Ø§ÙØ£Ø¯ÙØ§Øª Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª ÙØ¬Ø¨ Ø£Ù ØªÙÙÙ Ø³ÙÙØ© Ø§ÙØ¹Ø«ÙØ± Ø¹ÙÙÙØ§Ø ÙØ³ÙÙØ© Ø§ÙÙÙÙØ ÙØ³ÙÙØ© Ø§ÙØ§Ø³ØªØ®Ø¯Ø§Ù. ÙÙØ°Ø§ ÙÙ Ø§ÙØ§ØªØ¬Ø§Ù Ø§ÙØ°Ù ÙÙØ§ØµÙ Apps24 Ø§ØªØ¨Ø§Ø¹Ù ÙØ¹ ÙÙÙ Ø§ÙÙÙÙØ¹. ÙÙØ§ØµÙ Apps24 Ø§ÙØªÙØ³Ø¹ ÙÙ Ø®ÙØ§Ù Ø£Ø¯ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© ÙÙØ­ØªÙÙ Ø£ÙØ¶Ù. ÙÙØ­Ù ÙØ¹ÙÙ Ø¹ÙÙ Ø¬Ø¹Ù ÙÙ ØµÙØ­Ø© Ø£ÙØ«Ø± ÙØ§Ø¦Ø¯Ø© ÙØ£ÙØ«Ø± ÙØ¶ÙØ­ÙØ§ ÙØ£ÙØ«Ø± ÙÙÙØ© ÙÙÙ ÙÙ Ø§ÙØ²ÙØ§Ø± Ø§ÙØ¬Ø¯Ø¯ ÙØ§ÙÙØ³ØªØ®Ø¯ÙÙÙ Ø§ÙØ¹Ø§Ø¦Ø¯ÙÙ. Ø¥Ø°Ø§ ÙÙØª ØªØ¨Ø­Ø« Ø¹Ù Ø£Ø¯ÙØ§Øª ÙØªØ¹Ø¯Ø¯Ø© Ø§ÙÙØºØ§Øª ÙØ³Ø±ÙØ¹Ø© ÙÙÙÙØ§Ù Ø§ÙÙÙÙÙØ© Ø¹ÙÙ Ø§ÙÙÙØ¨Ø ÙÙØ¯ ØªÙ Ø¥ÙØ´Ø§Ø¡ Apps24 ÙÙÙÙØ­Ù ÙÙØ·Ø© Ø¨Ø¯Ø§ÙØ© Ø¨Ø³ÙØ·Ø© ÙÙÙØ«ÙÙØ©.",
      rulerHowTo: "ÙÙÙÙØ© Ø§Ø³ØªØ®Ø¯Ø§Ù Ø§ÙÙØ³Ø·Ø±Ø© Ø¹Ø¨Ø± Ø§ÙØ¥ÙØªØ±ÙØª",
      rulerStep1: "Ø¶Ø¹ Ø¨Ø·Ø§ÙØ© Ø§Ø¦ØªÙØ§Ù Ø£ÙÙÙÙØ§ Ø¹ÙØ¯ Ø¹ÙØ§ÙØ© Ø§ÙØµÙØ±.",
      rulerStep2: "Ø£Ø¯Ø®Ù Ø§ÙØ¹Ø±Ø¶ Ø§ÙÙÙØ§Ø³ ÙÙØ¨Ø·Ø§ÙØ© ÙØ§ÙÙØ± Ø¹ÙÙ 'ÙØ¹Ø§ÙØ±Ø©'.",
      rulerStep3: "Ø§ÙØ¢Ù ÙÙÙÙÙ ÙÙØ§Ø³ Ø§ÙØ´ÙØ¡ Ø§ÙÙØ·ÙÙØ¨.",
      rulerEnterCardWidth: "Ø£Ø¯Ø®Ù Ø¹Ø±Ø¶ Ø¨Ø·Ø§ÙØ© Ø§ÙØ§Ø¦ØªÙØ§Ù",
      rulerExample: "ÙØ«Ø§Ù: Ø¥Ø°Ø§ ÙØ§Ù Ø§ÙØ¹Ø±Ø¶ 10.4 Ø³ÙØ Ø£Ø¯Ø®Ù 10.4",
      rulerTip: "ÙØµÙØ­Ø©: Ø§Ø³ØªØ®Ø¯Ù Ø§ÙÙÙØ¨Ø¶ Ø§ÙØ£Ø²Ø±Ù ÙÙ Ø§ÙØ²Ø§ÙÙØ© Ø§ÙÙÙÙÙ Ø§ÙØ³ÙÙÙØ© ÙÙ Ø§ÙÙÙØ­Ø© ÙØªØºÙÙØ± Ø­Ø¬ÙÙØ§.",
      calibrate: "ÙØ¹Ø§ÙØ±Ø©",
      changeTo: "ØªØºÙÙØ± Ø¥ÙÙ",
      exitFullscreen: "Ø®Ø±ÙØ¬ ÙÙ ÙÙØ¡ Ø§ÙØ´Ø§Ø´Ø©",
      fullscreen: "ÙÙØ¡ Ø§ÙØ´Ø§Ø´Ø©",
      frLabel: "Ø§ÙÙØ±ÙØ³ÙØ©",
      jaLabel: "Ø§ÙÙØ§Ø¨Ø§ÙÙØ©",
      zhLabel: "Ø§ÙØµÙÙÙØ© (Ø§ÙÙØ¨Ø³Ø·Ø©)",
      zhTWLabel: "Ø§ÙØµÙÙÙØ© (Ø§ÙØªÙÙÙØ¯ÙØ©)",
      ptLabel: "Ø§ÙØ¨Ø±ØªØºØ§ÙÙØ©",
      esLabel: "Ø§ÙØ¥Ø³Ø¨Ø§ÙÙØ©",
      deLabel: "Ø§ÙØ£ÙÙØ§ÙÙØ©",
      arLabel: "Ø§ÙØ¹Ø±Ø¨ÙØ©",
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
      whatIs: "ÙØ§ ÙÙ {0}Ø",
      whenToUse: "ÙØªÙ ØªØ³ØªØ®Ø¯Ù ÙØ°Ù Ø§ÙØ£Ø¯Ø§Ø©Ø",
      howToUseTitle: "ÙÙÙÙØ© Ø§Ø³ØªØ®Ø¯Ø§Ù {0}",
      faqTitle: "Ø§ÙØ£Ø³Ø¦ÙØ© Ø§ÙØ´Ø§Ø¦Ø¹Ø©",
      howItWorks: "ÙÙÙ ÙØ¹ÙÙ",
      unitLength: "Ø§ÙØ·ÙÙ",
      unitWeight: "Ø§ÙÙØ²Ù",
      unitArea: "Ø§ÙÙØ³Ø§Ø­Ø©",
      unitVolume: "Ø§ÙØ­Ø¬Ù",
      unitTemperature: "Ø¯Ø±Ø¬Ø© Ø§ÙØ­Ø±Ø§Ø±Ø©",
      unitSpeed: "Ø§ÙØ³Ø±Ø¹Ø©",
      unitDigital: "Ø±ÙÙÙ",
      from: "ÙÙ",
      to: "Ø¥ÙÙ",
      unitAccuracyNote: "* ØªØ­ÙÙÙ Ø¹Ø§ÙÙ Ø§ÙØ¯ÙØ©.",
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
