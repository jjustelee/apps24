import { LOCALES, type Locale } from "@/lib/site";

export type BackgroundRemoverOutputBackground = "transparent" | "white" | "black";

export type BackgroundRemoverPreset = {
  outputBackground?: BackgroundRemoverOutputBackground;
};

export type BackgroundRemoverLongtailSlug =
  | "transparent-png"
  | "white-background"
  | "black-background"
  | "product-photo"
  | "profile-photo";

export type BackgroundRemoverLongtailText = {
  title: string;
  description: string;
  intro: string;
};

export type BackgroundRemoverLongtailLink = BackgroundRemoverLongtailText & {
  slug: BackgroundRemoverLongtailSlug;
  href: string;
};

type LocalizedText = Partial<Record<Locale, string>>;

const LONGTAILS: Record<
  BackgroundRemoverLongtailSlug,
  {
    preset: BackgroundRemoverPreset;
    title: LocalizedText;
    description: LocalizedText;
    intro: LocalizedText;
  }
> = {
  "transparent-png": {
    preset: { outputBackground: "transparent" },
    title: {
      en: "Background Remover",
      ko: "배경 제거기",
      fr: "Suppresseur d'arrière-plan",
      ja: "背景削除ツール",
      zh: "背景移除工具",
      "zh-TW": "背景移除工具",
      pt: "Removedor de fundo",
      es: "Eliminador de fondo",
      de: "Hintergrundentferner",
      ar: "أداة إزالة الخلفية",
    },
    description: {
      en: "Remove image backgrounds and export transparent PNG files.",
      ko: "이미지 배경을 제거하고 투명 PNG로 내보냅니다.",
      fr: "Supprimez l'arrière-plan des images et exportez des PNG transparents.",
      ja: "画像の背景を削除し、透明PNGとして書き出します。",
      zh: "移除图片背景并导出透明 PNG。",
      "zh-TW": "移除圖片背景並匯出透明 PNG。",
      pt: "Remova o fundo de imagens e exporte PNGs transparentes.",
      es: "Elimine el fondo de las imágenes y exporte PNG transparentes.",
      de: "Entfernen Sie Bildhintergründe und exportieren Sie transparente PNGs.",
      ar: "أزل خلفية الصور وصدّر ملفات PNG شفافة.",
    },
    intro: {
      en: "Use this when you need a clean cutout for design work, overlays, or quick web publishing. The result stays transparent unless you choose a filled background before downloading.",
      ko: "디자인 작업, 오버레이, 빠른 웹 게시에 쓸 깔끔한 컷아웃이 필요할 때 사용하세요. 다운로드 전에 배경을 채우지 않으면 결과는 투명하게 유지됩니다.",
      fr: "Utilisez cet outil lorsque vous avez besoin d'une découpe propre pour des maquettes, des superpositions ou une publication web rapide. Le résultat reste transparent sauf si vous choisissez un fond rempli avant le téléchargement.",
      ja: "デザイン作業、オーバーレイ、素早いWeb公開に使えるきれいな切り抜きが必要なときに使えます。ダウンロード前に塗りつぶし背景を選ばない限り、結果は透明のままです。",
      zh: "当您需要用于设计、叠加或快速网页发布的干净抠图时使用此工具。除非在下载前选择填充背景，否则结果会保持透明。",
      "zh-TW": "當您需要用於設計、疊加或快速網頁發佈的乾淨去背時使用此工具。除非在下載前選擇填滿背景，否則結果會保持透明。",
      pt: "Use quando precisar de um recorte limpo para layouts, sobreposições ou publicação rápida na web. O resultado continua transparente, a menos que você escolha um fundo preenchido antes de baixar.",
      es: "Úselo cuando necesite un recorte limpio para maquetas, superposiciones o una publicación web rápida. El resultado permanece transparente salvo que elija un fondo sólido antes de descargar.",
      de: "Nutzen Sie dieses Tool, wenn Sie eine saubere Freistellung für Layouts, Überlagerungen oder eine schnelle Web-Veröffentlichung benötigen. Das Ergebnis bleibt transparent, sofern Sie vor dem Download keinen gefüllten Hintergrund wählen.",
      ar: "استخدمه عندما تحتاج إلى قص نظيف للتصاميم أو الطبقات المتراكبة أو للنشر السريع على الويب. تبقى النتيجة شفافة ما لم تختر خلفية ملوّنة قبل التنزيل.",
    },
  },
  "white-background": {
    preset: { outputBackground: "white" },
    title: {
      en: "Background Remover for White Background",
      ko: "흰색 배경용 배경 제거기",
      fr: "Suppresseur d'arrière-plan pour fond blanc",
      ja: "白背景向け背景削除ツール",
      zh: "白色背景用背景移除工具",
      "zh-TW": "白色背景用背景移除工具",
      pt: "Removedor de fundo para fundo branco",
      es: "Eliminador de fondo para fondo blanco",
      de: "Hintergrundentferner für weißen Hintergrund",
      ar: "أداة إزالة الخلفية للخلفية البيضاء",
    },
    description: {
      en: "Remove backgrounds and export a white PNG version.",
      ko: "배경을 제거하고 흰색 PNG 버전으로 내보냅니다.",
      fr: "Supprimez l'arrière-plan et exportez une version PNG blanche.",
      ja: "背景を削除し、白背景のPNGとして書き出します。",
      zh: "移除背景并导出白色 PNG 版本。",
      "zh-TW": "移除背景並匯出白色 PNG 版本。",
      pt: "Remova o fundo e exporte uma versão PNG branca.",
      es: "Elimine el fondo y exporte una versión PNG blanca.",
      de: "Entfernen Sie den Hintergrund und exportieren Sie eine weiße PNG-Version.",
      ar: "أزل الخلفية وصدّر نسخة PNG بيضاء.",
    },
    intro: {
      en: "Use this when you want a clean white version for marketplaces, product sheets, or documents. It is handy when the image needs a plain presentation background.",
      ko: "마켓플레이스, 상품 자료, 문서용으로 깔끔한 흰색 버전이 필요할 때 사용하세요. 평평한 배경이 필요한 이미지에 유용합니다.",
      fr: "Utilisez cet outil lorsque vous souhaitez une version blanche propre pour les places de marché, les fiches produit ou les documents. Il est utile lorsque l'image doit avoir un fond de présentation simple.",
      ja: "マーケットプレイス、商品資料、書類用にきれいな白背景版が必要なときに使えます。シンプルな見せ方が必要な画像に便利です。",
      zh: "当您需要用于市场平台、商品资料或文档的干净白底版本时使用。图片需要简洁展示背景时非常方便。",
      "zh-TW": "當您需要用於市集平台、商品資料或文件的乾淨白底版本時使用。圖片需要簡潔展示背景時非常方便。",
      pt: "Use quando quiser uma versão branca limpa para marketplaces, fichas de produto ou documentos. É útil quando a imagem precisa de um fundo simples de apresentação.",
      es: "Úselo cuando quiera una versión blanca y limpia para marketplaces, fichas de producto o documentos. Es útil cuando la imagen necesita un fondo de presentación sencillo.",
      de: "Nutzen Sie dieses Tool, wenn Sie eine saubere weiße Version für Marktplätze, Produktblätter oder Dokumente benötigen. Es ist praktisch, wenn das Bild einen schlichten Präsentationshintergrund braucht.",
      ar: "استخدمه عندما تريد نسخة بيضاء نظيفة للأسواق أو أوراق المنتجات أو المستندات. يكون مفيدًا عندما تحتاج الصورة إلى خلفية عرض بسيطة.",
    },
  },
  "black-background": {
    preset: { outputBackground: "black" },
    title: {
      en: "Background Remover for Black Background",
      ko: "검정색 배경용 배경 제거기",
      fr: "Suppresseur d'arrière-plan pour fond noir",
      ja: "黒背景向け背景削除ツール",
      zh: "黑色背景用背景移除工具",
      "zh-TW": "黑色背景用背景移除工具",
      pt: "Removedor de fundo para fundo preto",
      es: "Eliminador de fondo para fondo negro",
      de: "Hintergrundentferner für schwarzen Hintergrund",
      ar: "أداة إزالة الخلفية للخلفية السوداء",
    },
    description: {
      en: "Remove backgrounds and export a black PNG version.",
      ko: "배경을 제거하고 검정색 PNG 버전으로 내보냅니다.",
      fr: "Supprimez l'arrière-plan et exportez une version PNG noire.",
      ja: "背景を削除し、黒背景のPNGとして書き出します。",
      zh: "移除背景并导出黑色 PNG 版本。",
      "zh-TW": "移除背景並匯出黑色 PNG 版本。",
      pt: "Remova o fundo e exporte uma versão PNG preta.",
      es: "Elimine el fondo y exporte una versión PNG negra.",
      de: "Entfernen Sie den Hintergrund und exportieren Sie eine schwarze PNG-Version.",
      ar: "أزل الخلفية وصدّر نسخة PNG سوداء.",
    },
    intro: {
      en: "Use this when you need stronger contrast for thumbnails, banners, or dark layouts. The subject stays clear against a filled black background.",
      ko: "썸네일, 배너, 다크 레이아웃처럼 대비가 더 필요한 경우에 사용하세요. 대상이 검정색 배경 위에서 또렷하게 보입니다.",
      fr: "Utilisez cet outil lorsque vous avez besoin d'un contraste plus fort pour des miniatures, des bannières ou des mises en page sombres. Le sujet reste net sur un fond noir.",
      ja: "サムネイル、バナー、ダークレイアウトなど、より強いコントラストが必要なときに使えます。被写体は黒背景でもはっきり見えます。",
      zh: "当您需要为缩略图、横幅或深色版式获得更强对比度时使用。主体在黑色背景上依然清晰可见。",
      "zh-TW": "當您需要為縮圖、橫幅或深色版面獲得更強對比度時使用。主體在黑色背景上依然清晰可見。",
      pt: "Use quando precisar de mais contraste para miniaturas, banners ou layouts escuros. O sujeito permanece claro sobre um fundo preto.",
      es: "Úselo cuando necesite más contraste para miniaturas, banners o diseños oscuros. El sujeto permanece claro sobre un fondo negro.",
      de: "Nutzen Sie dieses Tool, wenn Sie stärkeren Kontrast für Vorschaubilder, Banner oder dunkle Layouts brauchen. Das Motiv bleibt vor schwarzem Hintergrund klar sichtbar.",
      ar: "استخدمه عندما تحتاج إلى تباين أقوى للصور المصغرة أو اللافتات أو التخطيطات الداكنة. يبقى العنصر واضحًا على خلفية سوداء.",
    },
  },
  "product-photo": {
    preset: { outputBackground: "transparent" },
    title: {
      en: "Product Photo Background Remover",
      ko: "상품 사진 배경 제거기",
      fr: "Suppresseur d'arrière-plan pour photo produit",
      ja: "商品写真向け背景削除ツール",
      zh: "商品图片背景移除工具",
      "zh-TW": "商品圖片背景移除工具",
      pt: "Removedor de fundo para foto de produto",
      es: "Eliminador de fondo para fotos de producto",
      de: "Hintergrundentferner für Produktfotos",
      ar: "أداة إزالة الخلفية لصور المنتجات",
    },
    description: {
      en: "Create clean product cutouts for stores and catalogs.",
      ko: "쇼핑몰과 카탈로그용 깔끔한 상품 컷아웃을 만듭니다.",
      fr: "Créez des détourages propres pour les boutiques et les catalogues.",
      ja: "店舗やカタログ向けのきれいな商品切り抜きを作成します。",
      zh: "为商店和目录创建干净的商品抠图。",
      "zh-TW": "為商店和型錄建立乾淨的商品去背圖。",
      pt: "Crie recortes limpos de produtos para lojas e catálogos.",
      es: "Cree recortes limpios de producto para tiendas y catálogos.",
      de: "Erstellen Sie saubere Produktfreistellungen für Shops und Kataloge.",
      ar: "أنشئ قصاصات نظيفة لصور المنتجات للمتاجر والكتالوجات.",
    },
    intro: {
      en: "Use this when you want a product isolated from its original background for listings, banners, or mockups. Transparent output makes it easier to reuse the image in different layouts.",
      ko: "상품을 원래 배경에서 분리해 목록, 배너, 목업에 쓰고 싶을 때 사용하세요. 투명 출력은 여러 레이아웃에 재사용하기 쉽습니다.",
      fr: "Utilisez cet outil lorsque vous souhaitez isoler un produit de son arrière-plan d'origine pour des fiches, des bannières ou des maquettes. La sortie transparente facilite la réutilisation de l'image dans différents layouts.",
      ja: "商品を元の背景から切り離して、掲載ページ、バナー、モックアップに使いたいときに使えます。透明出力ならさまざまなレイアウトに再利用しやすくなります。",
      zh: "当您希望将商品从原始背景中分离，用于商品列表、横幅或样机时使用。透明输出便于在不同版式中重复使用。",
      "zh-TW": "當您希望將商品從原始背景中分離，用於商品列表、橫幅或樣機時使用。透明輸出便於在不同版面中重複使用。",
      pt: "Use quando quiser isolar um produto do fundo original para listagens, banners ou mockups. A saída transparente facilita reutilizar a imagem em diferentes layouts.",
      es: "Úselo cuando quiera aislar un producto de su fondo original para listados, banners o mockups. La salida transparente facilita reutilizar la imagen en distintos diseños.",
      de: "Nutzen Sie dieses Tool, wenn Sie ein Produkt vom ursprünglichen Hintergrund lösen möchten, etwa für Listings, Banner oder Mockups. Die transparente Ausgabe erleichtert die Wiederverwendung in verschiedenen Layouts.",
      ar: "استخدمه عندما تريد عزل المنتج عن خلفيته الأصلية للاستخدام في القوائم أو اللافتات أو النماذج. تسهّل المخرجات الشفافة إعادة استخدام الصورة في تخطيطات مختلفة.",
    },
  },
  "profile-photo": {
    preset: { outputBackground: "transparent" },
    title: {
      en: "Profile Photo Background Remover",
      ko: "프로필 사진 배경 제거기",
      fr: "Suppresseur d'arrière-plan pour photo de profil",
      ja: "プロフィール写真向け背景削除ツール",
      zh: "头像背景移除工具",
      "zh-TW": "頭像背景移除工具",
      pt: "Removedor de fundo para foto de perfil",
      es: "Eliminador de fondo para foto de perfil",
      de: "Hintergrundentferner für Profilfotos",
      ar: "أداة إزالة الخلفية لصور الملف الشخصي",
    },
    description: {
      en: "Remove portrait backgrounds for profile images and avatars.",
      ko: "프로필 이미지와 아바타용 인물 사진 배경을 제거합니다.",
      fr: "Supprimez l'arrière-plan des portraits pour les images de profil et avatars.",
      ja: "プロフィール画像やアバター向けにポートレートの背景を削除します。",
      zh: "移除头像和个人资料图片的肖像背景。",
      "zh-TW": "移除頭像和個人資料圖片的人像背景。",
      pt: "Remova o fundo de retratos para imagens de perfil e avatares.",
      es: "Elimine el fondo de retratos para imágenes de perfil y avatares.",
      de: "Entfernen Sie Porträt-Hintergründe für Profilbilder und Avatare.",
      ar: "أزل خلفيات الصور الشخصية للملفات والأفاتارات.",
    },
    intro: {
      en: "Use this when you want a cleaner headshot or avatar with a transparent cutout. It is useful for profiles, bios, and team pages.",
      ko: "더 깔끔한 증명사진형 컷아웃이나 아바타가 필요할 때 사용하세요. 프로필, 소개글, 팀 페이지에 유용합니다.",
      fr: "Utilisez cet outil lorsque vous souhaitez un portrait ou un avatar plus propre avec une découpe transparente. Il est utile pour les profils, les bios et les pages d'équipe.",
      ja: "きれいな切り抜きの顔写真やアバターが欲しいときに使えます。プロフィール、自己紹介、チームページに便利です。",
      zh: "当您想要更干净的证件照式抠图或头像时使用。它适用于个人资料、简介和团队页面。",
      "zh-TW": "當您想要更乾淨的證件照式去背圖或頭像時使用。它適用於個人資料、自我介紹與團隊頁面。",
      pt: "Use quando quiser uma foto de rosto ou avatar mais limpo com recorte transparente. É útil para perfis, biografias e páginas de equipe.",
      es: "Úselo cuando quiera una foto de rostro o avatar más limpio con un recorte transparente. Es útil para perfiles, biografías y páginas de equipo.",
      de: "Nutzen Sie dieses Tool, wenn Sie ein saubereres Porträt oder Avatar mit transparenter Freistellung möchten. Es ist nützlich für Profile, Bios und Teamseiten.",
      ar: "استخدمه عندما تريد صورة وجه أو أفاتار أنظف مع قص شفاف. وهو مفيد للملفات التعريفية والسير الذاتية وصفحات الفرق.",
    },
  },
};

export const BACKGROUND_REMOVER_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as BackgroundRemoverLongtailSlug[];

export function isBackgroundRemoverLongtailSlug(value: string): value is BackgroundRemoverLongtailSlug {
  return value in LONGTAILS;
}

export function getBackgroundRemoverLongtailPreset(slug: string): BackgroundRemoverPreset | undefined {
  return isBackgroundRemoverLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getBackgroundRemoverLongtailText(locale: Locale, slug: string): BackgroundRemoverLongtailText | undefined {
  if (!isBackgroundRemoverLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: entry.title[locale] ?? entry.title.en ?? entry.title.ko ?? slug,
    description: entry.description[locale] ?? entry.description.en ?? entry.description.ko ?? "",
    intro: entry.intro[locale] ?? entry.intro.en ?? entry.intro.ko ?? "",
  };
}

export function getBackgroundRemoverLongtailLinks(locale: Locale): BackgroundRemoverLongtailLink[] {
  return BACKGROUND_REMOVER_LONGTAIL_SLUGS.map((slug) => {
    const text = getBackgroundRemoverLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/background-remover/${slug}`,
      ...text,
    };
  });
}

export function getBackgroundRemoverLongtailStaticParams() {
  return BACKGROUND_REMOVER_LONGTAIL_SLUGS.flatMap((preset) =>
    LOCALES.map((locale) => ({
      locale,
      preset,
    })),
  );
}
