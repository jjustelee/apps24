import { LOCALES, type Locale } from "@/lib/site";

export type ImageCompressorLongtailSlug = "compress" | "resize" | "webp";

export type ImageCompressorPreset = {
  format: "image/jpeg" | "image/png" | "image/webp";
  quality: number;
  scale: number;
};

export type ImageCompressorLongtailText = {
  title: string;
  description: string;
  intro: string;
};

export type ImageCompressorLongtailLink = ImageCompressorLongtailText & {
  slug: ImageCompressorLongtailSlug;
  href: string;
};

const LONGTAILS: Record<
  ImageCompressorLongtailSlug,
  {
    preset: ImageCompressorPreset;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    intro: Record<Locale, string>;
  }
> = {
  compress: {
    preset: { format: "image/webp", quality: 0.75, scale: 1 },
    title: {
      en: "Image Compressor",
      ko: "이미지 압축기",
      fr: "Compresseur d'images",
      ja: "画像圧縮",
      zh: "图片压缩器",
      "zh-TW": "圖片壓縮器",
      pt: "Compressor de imagens",
      es: "Compresor de imágenes",
      de: "Bildkompressor",
      ar: "ضاغط الصور",
    },
    description: {
      en: "Reduce image file size in the browser.",
      ko: "브라우저에서 이미지 파일 크기를 줄입니다.",
      fr: "Réduisez la taille des fichiers image dans le navigateur.",
      ja: "ブラウザで画像ファイルのサイズを小さくします。",
      zh: "在浏览器中减小图片文件大小。",
      "zh-TW": "在瀏覽器中縮小圖片檔案大小。",
      pt: "Reduza o tamanho do arquivo de imagem no navegador.",
      es: "Reduce el tamaño del archivo de imagen en el navegador.",
      de: "Verringern Sie die Bilddateigröße direkt im Browser.",
      ar: "قلّل حجم ملف الصورة في المتصفح.",
    },
    intro: {
      en: "Use this when you need a smaller file before uploading, emailing, or storing an image. Example: a large photo can be compressed into a lighter WebP or JPG file.",
      ko: "이미지를 업로드하거나 이메일로 보내거나 보관하기 전에 더 작은 파일이 필요할 때 쓰세요. 예: 큰 사진을 더 가벼운 WebP 또는 JPG 파일로 압축할 수 있습니다.",
      fr: "Utilisez-le lorsque vous avez besoin d'un fichier plus léger avant de téléverser, d'envoyer par e-mail ou de stocker une image. Exemple : une grande photo peut être compressée en un fichier WebP ou JPG plus léger.",
      ja: "画像をアップロード、メール送信、保存する前に、もっと小さいファイルが必要なときに使います。例: 大きな写真を軽いWebPまたはJPGファイルに圧縮できます。",
      zh: "当你在上传、发送邮件或保存图片前需要更小的文件时使用它。示例：可以把大照片压缩成更轻的 WebP 或 JPG 文件。",
      "zh-TW": "當你在上傳、寄送電子郵件或儲存圖片前需要更小的檔案時使用它。範例：可以把大照片壓縮成更輕的 WebP 或 JPG 檔案。",
      pt: "Use isto quando precisar de um arquivo menor antes de enviar, armazenar ou compartilhar uma imagem. Exemplo: uma foto grande pode ser comprimida em um arquivo WebP ou JPG mais leve.",
      es: "Úsalo cuando necesites un archivo más pequeño antes de subir, enviar o guardar una imagen. Ejemplo: una foto grande puede comprimirse en un archivo WebP o JPG más ligero.",
      de: "Nutzen Sie dies, wenn Sie vor dem Hochladen, Versenden oder Speichern eines Bildes eine kleinere Datei brauchen. Beispiel: Ein großes Foto kann in eine leichtere WebP- oder JPG-Datei komprimiert werden.",
      ar: "استخدمه عندما تحتاج إلى ملف أصغر قبل رفع الصورة أو إرسالها بالبريد أو حفظها. مثال: يمكن ضغط صورة كبيرة إلى ملف WebP أو JPG أخف.",
    },
  },
  resize: {
    preset: { format: "image/webp", quality: 0.85, scale: 0.75 },
    title: {
      en: "Image Resizer",
      ko: "이미지 크기 조절",
      fr: "Redimensionneur d'images",
      ja: "画像リサイズ",
      zh: "图片尺寸调整",
      "zh-TW": "圖片尺寸調整",
      pt: "Redimensionador de imagens",
      es: "Redimensionador de imágenes",
      de: "Bildgrößenänderer",
      ar: "أداة تغيير أبعاد الصور",
    },
    description: {
      en: "Change image dimensions before downloading.",
      ko: "다운로드 전에 이미지 크기를 조절합니다.",
      fr: "Modifiez les dimensions de l'image avant le téléchargement.",
      ja: "ダウンロード前に画像のサイズを変更します。",
      zh: "在下载前调整图片尺寸。",
      "zh-TW": "在下載前調整圖片尺寸。",
      pt: "Altere as dimensões da imagem antes de baixar.",
      es: "Cambia las dimensiones de la imagen antes de descargarla.",
      de: "Ändern Sie die Bildabmessungen vor dem Download.",
      ar: "غيّر أبعاد الصورة قبل التنزيل.",
    },
    intro: {
      en: "Use this when the file type is fine but the dimensions are too large for a page, post, or upload limit. Example: a 4000 px image can be scaled down to fit a smaller layout.",
      ko: "파일 형식은 괜찮지만 페이지, 게시물, 업로드 제한에 비해 크기가 너무 클 때 쓰세요. 예: 4000px 이미지를 더 작은 레이아웃에 맞게 줄일 수 있습니다.",
      fr: "Utilisez-le lorsque le type de fichier convient mais que les dimensions sont trop grandes pour une page, un post ou une limite d'importation. Exemple : une image de 4000 px peut être réduite pour s'adapter à une mise en page plus petite.",
      ja: "ファイル形式は問題ないけれど、ページ・投稿・アップロード制限に対してサイズが大きすぎるときに使います。例: 4000pxの画像を小さなレイアウトに合わせて縮小できます。",
      zh: "当文件类型没问题，但尺寸对页面、帖子或上传限制来说太大时使用它。示例：4000px 的图片可以缩小以适配更小的布局。",
      "zh-TW": "當檔案格式沒問題，但尺寸對頁面、貼文或上傳限制來說太大時使用它。範例：4000px 的圖片可以縮小以符合更小的版面。",
      pt: "Use isto quando o tipo de arquivo está certo, mas as dimensões são grandes demais para uma página, post ou limite de envio. Exemplo: uma imagem de 4000 px pode ser reduzida para caber em um layout menor.",
      es: "Úsalo cuando el tipo de archivo está bien, pero las dimensiones son demasiado grandes para una página, publicación o límite de subida. Ejemplo: una imagen de 4000 px puede reducirse para encajar en un diseño más pequeño.",
      de: "Nutzen Sie dies, wenn der Dateityp passt, die Abmessungen aber zu groß für eine Seite, einen Beitrag oder ein Upload-Limit sind. Beispiel: Ein 4000-PX-Bild kann für ein kleineres Layout verkleinert werden.",
      ar: "استخدمه عندما يكون نوع الملف مناسبًا لكن الأبعاد كبيرة جدًا بالنسبة لصفحة أو منشور أو حدّ رفع. مثال: يمكن تصغير صورة بحجم 4000 بكسل لتناسب تخطيطًا أصغر.",
    },
  },
  webp: {
    preset: { format: "image/webp", quality: 0.8, scale: 1 },
    title: {
      en: "WebP Converter",
      ko: "WebP 변환기",
      fr: "Convertisseur WebP",
      ja: "WebP変換",
      zh: "WebP 转换器",
      "zh-TW": "WebP 轉換器",
      pt: "Conversor WebP",
      es: "Convertidor WebP",
      de: "WebP-Konverter",
      ar: "محول WebP",
    },
    description: {
      en: "Convert supported images to WebP for smaller files.",
      ko: "지원되는 이미지를 WebP로 변환해 파일 크기를 줄입니다.",
      fr: "Convertissez les images prises en charge en WebP pour obtenir des fichiers plus légers.",
      ja: "対応画像をWebPに変換して、より小さなファイルにします。",
      zh: "将支持的图片转换为 WebP，以获得更小的文件。",
      "zh-TW": "將支援的圖片轉換為 WebP，以獲得更小的檔案。",
      pt: "Converta imagens compatíveis para WebP e reduza o tamanho dos arquivos.",
      es: "Convierte imágenes compatibles a WebP para obtener archivos más pequeños.",
      de: "Konvertieren Sie unterstützte Bilder in WebP für kleinere Dateien.",
      ar: "حوّل الصور المدعومة إلى WebP للحصول على ملفات أصغر.",
    },
    intro: {
      en: "Use this when the image still looks good but you want a smaller file for faster pages and lighter downloads. Example: a PNG can be converted into a smaller WebP version.",
      ko: "이미지는 그대로 잘 보이지만 더 빠른 페이지와 가벼운 다운로드를 위해 파일 크기를 줄이고 싶을 때 쓰세요. 예: PNG를 더 작은 WebP 버전으로 변환할 수 있습니다.",
      fr: "Utilisez-le lorsque l'image reste nette mais que vous voulez un fichier plus léger pour des pages plus rapides et des téléchargements plus petits. Exemple : un PNG peut être converti en une version WebP plus légère.",
      ja: "見た目はそのままで、より速いページや軽いダウンロードのためにファイルを小さくしたいときに使います。例: PNGをより小さなWebP版に変換できます。",
      zh: "当图片仍然清晰，但你想要更小的文件以便页面更快、下载更轻时使用它。示例：PNG 可以转换成更小的 WebP 版本。",
      "zh-TW": "當圖片仍然清晰，但你想要更小的檔案以便頁面更快、下載更輕時使用它。範例：PNG 可以轉換成更小的 WebP 版本。",
      pt: "Use isto quando a imagem continua boa, mas você quer um arquivo menor para páginas mais rápidas e downloads mais leves. Exemplo: um PNG pode ser convertido em uma versão WebP menor.",
      es: "Úsalo cuando la imagen sigue viéndose bien, pero quieres un archivo más pequeño para páginas más rápidas y descargas más ligeras. Ejemplo: un PNG puede convertirse en una versión WebP más pequeña.",
      de: "Nutzen Sie dies, wenn das Bild weiterhin gut aussieht, Sie aber für schnellere Seiten und leichtere Downloads eine kleinere Datei möchten. Beispiel: Ein PNG kann in eine kleinere WebP-Version umgewandelt werden.",
      ar: "استخدمه عندما تبدو الصورة جيدة لكنك تريد ملفًا أصغر لصفحات أسرع وتنزيلات أخف. مثال: يمكن تحويل PNG إلى نسخة WebP أصغر.",
    },
  },
};

export const IMAGE_COMPRESSOR_LONGTAIL_SLUGS = Object.keys(LONGTAILS) as ImageCompressorLongtailSlug[];

export function isImageCompressorLongtailSlug(value: string): value is ImageCompressorLongtailSlug {
  return value in LONGTAILS;
}

export function getImageCompressorLongtailPreset(slug: string): ImageCompressorPreset | undefined {
  return isImageCompressorLongtailSlug(slug) ? LONGTAILS[slug].preset : undefined;
}

export function getImageCompressorLongtailText(locale: Locale, slug: string): ImageCompressorLongtailText | undefined {
  if (!isImageCompressorLongtailSlug(slug)) return undefined;

  const entry = LONGTAILS[slug];
  return {
    title: entry.title[locale],
    description: entry.description[locale],
    intro: entry.intro[locale],
  };
}

export function getImageCompressorLongtailLinks(locale: Locale): ImageCompressorLongtailLink[] {
  return IMAGE_COMPRESSOR_LONGTAIL_SLUGS.map((slug) => {
    const text = getImageCompressorLongtailText(locale, slug)!;
    return {
      slug,
      href: `/${locale}/image-compressor/${slug}`,
      ...text,
    };
  });
}

export function getImageCompressorLongtailStaticParams() {
  return IMAGE_COMPRESSOR_LONGTAIL_SLUGS.flatMap((mode) =>
    LOCALES.map((locale) => ({
      locale,
      mode,
    })),
  );
}
