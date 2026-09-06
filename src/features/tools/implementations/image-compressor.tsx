"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import type { ToolRendererProps } from "./index";
import { Download, Upload, RefreshCw, Image as ImageIcon, AlertCircle, ChevronDown } from "lucide-react";
import { getImageCompressorLongtailPreset } from "@/features/tools/image-compressor-longtails";
import { isLocale, type Locale } from "@/lib/site";

type CompressionFormat = "image/jpeg" | "image/webp" | "image/png";
type CompressionStatus = "pending" | "processing" | "done" | "error";

type ImageDimensions = {
  width: number;
  height: number;
};

type ImageCompressionItem = {
  id: string;
  file: File;
  originalPreview: string;
  compressedBlob: Blob | null;
  compressedPreview: string;
  dimensions: ImageDimensions;
  outputDimensions: ImageDimensions;
  status: CompressionStatus;
  error?: string;
};

type ImageCompressorCopy = {
  filesSelected: string;
  selectFiles: string;
  multiFileHint: string;
  batchHint: string;
  cleanupHint: string;
  qualityNote: string;
  outputFormat: string;
  processing: string;
  pending: string;
  done: string;
  failed: string;
  results: string;
  totalResult: string;
  showResults: string;
  hideResults: string;
  selectedPreview: string;
  downloadFile: string;
  noImageError: string;
  compressError: string;
};

const IMAGE_COMPRESSOR_COPY: Record<Locale, ImageCompressorCopy> = {
  en: {
    filesSelected: "files selected",
    selectFiles: "Add or replace images",
    multiFileHint: "You can select or drag multiple images at once.",
    batchHint: "Images are compressed one by one to keep the browser responsive.",
    cleanupHint: "Temporary previews are cleaned up when files are replaced or reset.",
    qualityNote: "Quality changes JPG/WebP only. PNG ignores this setting: reduce dimensions or choose WebP to reduce size. JPG replaces transparency with white. A larger output is possible; a negative savings percentage means the file grew.",
    outputFormat: "Output format",
    processing: "Processing",
    pending: "Waiting",
    done: "Done",
    failed: "Failed",
    results: "File results",
    totalResult: "Total",
    showResults: "Show results",
    hideResults: "Hide results",
    selectedPreview: "Selected preview",
    downloadFile: "Download file",
    noImageError: "Please upload at least one image file.",
    compressError: "An error occurred during compression.",
  },
  ko: {
    filesSelected: "개 이미지 선택됨",
    selectFiles: "이미지 추가 또는 교체",
    multiFileHint: "여러 이미지를 한 번에 선택하거나 드래그할 수 있습니다.",
    batchHint: "브라우저가 멈추지 않도록 이미지를 한 장씩 순차 압축합니다.",
    cleanupHint: "파일을 교체하거나 초기화하면 임시 미리보기 URL을 정리합니다.",
    qualityNote: "품질은 JPG/WebP에만 적용됩니다. PNG는 이 설정을 사용하지 않으므로 크기를 줄이거나 WebP를 선택하세요. JPG는 투명 영역을 흰색으로 바꿉니다. 결과가 더 커질 수 있으며, 절감률이 음수면 용량이 증가한 것입니다.",
    outputFormat: "출력 형식",
    processing: "처리 중",
    pending: "대기",
    done: "완료",
    failed: "실패",
    results: "파일별 결과",
    totalResult: "전체",
    showResults: "결과 보기",
    hideResults: "결과 접기",
    selectedPreview: "대표 미리보기",
    downloadFile: "파일 다운로드",
    noImageError: "이미지 파일을 1개 이상 업로드해 주세요.",
    compressError: "압축 중 오류가 발생했습니다.",
  },
  fr: {
    filesSelected: "fichiers sélectionnés",
    selectFiles: "Ajouter ou remplacer des images",
    multiFileHint: "Vous pouvez sélectionner ou glisser plusieurs images à la fois.",
    batchHint: "Les images sont compressées une par une pour garder le navigateur réactif.",
    cleanupHint: "Les aperçus temporaires sont nettoyés lorsque les fichiers sont remplacés ou réinitialisés.",
    qualityNote: "La qualité modifie uniquement JPG/WebP. Pour PNG, réduisez les dimensions ou choisissez WebP. JPG remplace la transparence par du blanc. Un pourcentage d’économie négatif indique un fichier plus volumineux.",
    outputFormat: "Format de sortie",
    processing: "Traitement",
    pending: "En attente",
    done: "Terminé",
    failed: "Échec",
    results: "Résultats par fichier",
    totalResult: "Total",
    showResults: "Afficher les résultats",
    hideResults: "Masquer les résultats",
    selectedPreview: "Aperçu sélectionné",
    downloadFile: "Télécharger le fichier",
    noImageError: "Veuillez importer au moins une image.",
    compressError: "Une erreur est survenue pendant la compression.",
  },
  ja: {
    filesSelected: "件の画像を選択",
    selectFiles: "画像を追加または置換",
    multiFileHint: "複数の画像を一度に選択またはドラッグできます。",
    batchHint: "ブラウザを軽く保つため、画像を1枚ずつ順番に圧縮します。",
    cleanupHint: "ファイルの置換やリセット時に一時プレビューURLを整理します。",
    qualityNote: "品質設定はJPG/WebPにのみ適用されます。PNGはサイズを縮小するかWebPに変更してください。JPGでは透明部分が白になります。削減率がマイナスの場合、容量が増加しています。",
    outputFormat: "出力形式",
    processing: "処理中",
    pending: "待機中",
    done: "完了",
    failed: "失敗",
    results: "ファイル別結果",
    totalResult: "合計",
    showResults: "結果を表示",
    hideResults: "結果を隠す",
    selectedPreview: "選択中のプレビュー",
    downloadFile: "ファイルをダウンロード",
    noImageError: "画像ファイルを1件以上アップロードしてください。",
    compressError: "圧縮中にエラーが発生しました。",
  },
  zh: {
    filesSelected: "个文件已选择",
    selectFiles: "添加或替换图片",
    multiFileHint: "可以一次选择或拖放多张图片。",
    batchHint: "图片会逐个压缩，以保持浏览器流畅。",
    cleanupHint: "替换或重置文件时会清理临时预览 URL。",
    qualityNote: "质量设置仅影响 JPG/WebP。PNG 不使用此设置，请缩小尺寸或选择 WebP。JPG 会将透明区域变成白色。结果可能更大；负的节省百分比表示文件体积增加。",
    outputFormat: "输出格式",
    processing: "处理中",
    pending: "等待中",
    done: "完成",
    failed: "失败",
    results: "文件结果",
    totalResult: "总计",
    showResults: "显示结果",
    hideResults: "隐藏结果",
    selectedPreview: "当前预览",
    downloadFile: "下载文件",
    noImageError: "请至少上传一个图片文件。",
    compressError: "压缩过程中发生错误。",
  },
  "zh-TW": {
    filesSelected: "個檔案已選擇",
    selectFiles: "新增或替換圖片",
    multiFileHint: "可以一次選擇或拖放多張圖片。",
    batchHint: "圖片會逐一壓縮，以保持瀏覽器順暢。",
    cleanupHint: "替換或重設檔案時會清理暫時預覽 URL。",
    qualityNote: "品質設定只影響 JPG/WebP。PNG 不使用此設定，請縮小尺寸或選擇 WebP。JPG 會將透明區域變成白色。結果可能更大；節省百分比為負數表示檔案容量增加。",
    outputFormat: "輸出格式",
    processing: "處理中",
    pending: "等待中",
    done: "完成",
    failed: "失敗",
    results: "檔案結果",
    totalResult: "總計",
    showResults: "顯示結果",
    hideResults: "隱藏結果",
    selectedPreview: "目前預覽",
    downloadFile: "下載檔案",
    noImageError: "請至少上傳一個圖片檔案。",
    compressError: "壓縮過程中發生錯誤。",
  },
  pt: {
    filesSelected: "arquivos selecionados",
    selectFiles: "Adicionar ou substituir imagens",
    multiFileHint: "Você pode selecionar ou arrastar várias imagens de uma vez.",
    batchHint: "As imagens são comprimidas uma por uma para manter o navegador responsivo.",
    cleanupHint: "As prévias temporárias são limpas ao substituir ou redefinir arquivos.",
    qualityNote: "A qualidade altera apenas JPG/WebP. Para PNG, reduza as dimensões ou escolha WebP. JPG substitui a transparência por branco. Uma economia percentual negativa indica que o arquivo ficou maior.",
    outputFormat: "Formato de saída",
    processing: "Processando",
    pending: "Aguardando",
    done: "Concluído",
    failed: "Falhou",
    results: "Resultados por arquivo",
    totalResult: "Total",
    showResults: "Mostrar resultados",
    hideResults: "Ocultar resultados",
    selectedPreview: "Prévia selecionada",
    downloadFile: "Baixar arquivo",
    noImageError: "Envie pelo menos um arquivo de imagem.",
    compressError: "Ocorreu um erro durante a compressão.",
  },
  es: {
    filesSelected: "archivos seleccionados",
    selectFiles: "Añadir o reemplazar imágenes",
    multiFileHint: "Puedes seleccionar o arrastrar varias imágenes a la vez.",
    batchHint: "Las imágenes se comprimen una por una para mantener el navegador ágil.",
    cleanupHint: "Las vistas previas temporales se limpian al reemplazar o reiniciar archivos.",
    qualityNote: "La calidad solo modifica JPG/WebP. Para PNG, reduce las dimensiones o elige WebP. JPG sustituye la transparencia por blanco. Un porcentaje de ahorro negativo indica que el archivo aumentó de tamaño.",
    outputFormat: "Formato de salida",
    processing: "Procesando",
    pending: "En espera",
    done: "Listo",
    failed: "Falló",
    results: "Resultados por archivo",
    totalResult: "Total",
    showResults: "Mostrar resultados",
    hideResults: "Ocultar resultados",
    selectedPreview: "Vista seleccionada",
    downloadFile: "Descargar archivo",
    noImageError: "Sube al menos un archivo de imagen.",
    compressError: "Ocurrió un error durante la compresión.",
  },
  de: {
    filesSelected: "Dateien ausgewählt",
    selectFiles: "Bilder hinzufügen oder ersetzen",
    multiFileHint: "Sie können mehrere Bilder gleichzeitig auswählen oder per Drag-and-drop hinzufügen.",
    batchHint: "Bilder werden nacheinander komprimiert, damit der Browser reaktionsfähig bleibt.",
    cleanupHint: "Temporäre Vorschauen werden beim Ersetzen oder Zurücksetzen bereinigt.",
    qualityNote: "Qualität verändert nur JPG/WebP. Für PNG die Abmessungen reduzieren oder WebP wählen. JPG ersetzt Transparenz durch Weiß. Eine negative Ersparnis bedeutet, dass die Datei größer geworden ist.",
    outputFormat: "Ausgabeformat",
    processing: "Wird verarbeitet",
    pending: "Wartet",
    done: "Fertig",
    failed: "Fehler",
    results: "Dateiergebnisse",
    totalResult: "Gesamt",
    showResults: "Ergebnisse anzeigen",
    hideResults: "Ergebnisse ausblenden",
    selectedPreview: "Ausgewählte Vorschau",
    downloadFile: "Datei herunterladen",
    noImageError: "Bitte laden Sie mindestens eine Bilddatei hoch.",
    compressError: "Bei der Komprimierung ist ein Fehler aufgetreten.",
  },
  ar: {
    filesSelected: "ملفات محددة",
    selectFiles: "إضافة الصور أو استبدالها",
    multiFileHint: "يمكنك اختيار أو سحب عدة صور دفعة واحدة.",
    batchHint: "يتم ضغط الصور واحدة تلو الأخرى للحفاظ على استجابة المتصفح.",
    cleanupHint: "يتم تنظيف روابط المعاينة المؤقتة عند استبدال الملفات أو إعادة الضبط.",
    qualityNote: "تؤثر الجودة في JPG/WebP فقط. لتقليل حجم PNG قلّل الأبعاد أو اختر WebP. يستبدل JPG الشفافية بالأبيض. نسبة التوفير السالبة تعني أن حجم الملف قد زاد.",
    outputFormat: "صيغة الإخراج",
    processing: "جار المعالجة",
    pending: "قيد الانتظار",
    done: "تم",
    failed: "فشل",
    results: "نتائج الملفات",
    totalResult: "الإجمالي",
    showResults: "عرض النتائج",
    hideResults: "إخفاء النتائج",
    selectedPreview: "المعاينة المحددة",
    downloadFile: "تنزيل الملف",
    noImageError: "يرجى رفع ملف صورة واحد على الأقل.",
    compressError: "حدث خطأ أثناء الضغط.",
  },
};

function createItemId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function revokeItemUrls(items: ImageCompressionItem[]) {
  items.forEach((item) => {
    URL.revokeObjectURL(item.originalPreview);
    if (item.compressedPreview) URL.revokeObjectURL(item.compressedPreview);
  });
}

function loadImageDimensions(src: string): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = src;
  });
}

async function compressImageFile(
  item: ImageCompressionItem,
  settings: { format: CompressionFormat; quality: number; scale: number },
) {
  const img = new Image();
  img.src = item.originalPreview;
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  const width = Math.max(1, Math.round(item.dimensions.width * settings.scale));
  const aspectRatio = item.dimensions.height / item.dimensions.width;
  const height = Math.max(1, Math.round(width * aspectRatio));

  canvas.width = width;
  canvas.height = height;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  if (settings.format === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }
  ctx.drawImage(img, 0, 0, width, height);

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((result) => {
      if (result && result.type === settings.format) {
        resolve(result);
      } else {
        reject(new Error("Canvas compression failed"));
      }
    }, settings.format, settings.quality);
  });

  return {
    blob,
    previewUrl: URL.createObjectURL(blob),
    outputDimensions: { width, height },
  };
}

export function ImageCompressorTool({ locale, commonText: common, searchParams }: ToolRendererProps) {
  const params = useParams();
  const modeSlug = typeof searchParams?.preset === "string" ? searchParams.preset : typeof params.mode === "string" ? params.mode : undefined;
  const defaultSelection = useMemo(() => {
    const preset = modeSlug ? getImageCompressorLongtailPreset(modeSlug) : undefined;

    return preset ?? {
      format: "image/webp" as CompressionFormat,
      quality: 0.8,
      scale: 1,
    };
  }, [modeSlug]);

  const copy = IMAGE_COMPRESSOR_COPY[isLocale(locale) ? locale : "en"];
  const [items, setItems] = useState<ImageCompressionItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [format, setFormat] = useState<CompressionFormat>(defaultSelection.format);
  const [quality, setQuality] = useState(defaultSelection.quality);
  const [scale, setScale] = useState(defaultSelection.scale);
  const [isRecompressing, setIsRecompressing] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(true);
  const [compressionVersion, setCompressionVersion] = useState(0);
  const itemsRef = useRef<ImageCompressionItem[]>([]);
  const compressionRunRef = useRef(0);
  const recompressTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedItem = items.find((item) => item.id === selectedItemId) ?? items[0];
  const completedItems = items.filter((item) => item.status === "done" && item.compressedBlob);
  const totalOriginalSize = items.reduce((total, item) => total + item.file.size, 0);
  const completedOriginalSize = completedItems.reduce((total, item) => total + item.file.size, 0);
  const completedCompressedSize = completedItems.reduce((total, item) => total + (item.compressedBlob?.size ?? 0), 0);
  const hasItems = items.length > 0;

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    setFormat(defaultSelection.format);
    setQuality(defaultSelection.quality);
    setScale(defaultSelection.scale);
  }, [defaultSelection]);

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const getExtension = () => {
    if (format === "image/webp") return "webp";
    if (format === "image/png") return "png";
    return "jpg";
  };

  const getSavingsPercent = (originalSize: number, compressedSize: number) => {
    return Math.round((1 - compressedSize / originalSize) * 100);
  };

  const processFiles = async (fileList: FileList | File[]) => {
    const imageFiles = Array.from(fileList).filter((file) => file.type.startsWith("image/"));

    if (!imageFiles.length) {
      setError(copy.noImageError);
      return;
    }

    setError(null);
    setScale(defaultSelection.scale);

    const nextItems: ImageCompressionItem[] = [];

    for (const file of imageFiles) {
      const originalPreview = URL.createObjectURL(file);

      try {
        const dimensions = await loadImageDimensions(originalPreview);
        nextItems.push({
          id: createItemId(),
          file,
          originalPreview,
          compressedBlob: null,
          compressedPreview: "",
          dimensions,
          outputDimensions: { width: 0, height: 0 },
          status: "pending",
        });
      } catch {
        URL.revokeObjectURL(originalPreview);
      }
    }

    if (!nextItems.length) {
      setError(copy.noImageError);
      return;
    }

    compressionRunRef.current += 1;
    if (recompressTimeoutRef.current) clearTimeout(recompressTimeoutRef.current);
    revokeItemUrls(itemsRef.current);
    setItems(nextItems);
    setSelectedItemId(nextItems[0].id);
    setCompressionVersion((value) => value + 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      void processFiles(e.target.files);
      e.target.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) void processFiles(e.dataTransfer.files);
  };

  const compressAll = useCallback(async (runId: number) => {
    const queue = itemsRef.current;

    if (!queue.length) {
      setIsRecompressing(false);
      return;
    }

    setError(null);

    for (const queuedItem of queue) {
      if (compressionRunRef.current !== runId) return;

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.id === queuedItem.id ? { ...item, status: "processing", error: undefined } : item,
        ),
      );

      const latestItem = itemsRef.current.find((item) => item.id === queuedItem.id) ?? queuedItem;

      try {
        const result = await compressImageFile(latestItem, { format, quality, scale });

        if (compressionRunRef.current !== runId) {
          URL.revokeObjectURL(result.previewUrl);
          return;
        }

        const previousPreview = itemsRef.current.find((item) => item.id === latestItem.id)?.compressedPreview;
        if (previousPreview) URL.revokeObjectURL(previousPreview);

        setItems((currentItems) =>
          currentItems.map((item) =>
            item.id === latestItem.id
              ? {
                  ...item,
                  compressedBlob: result.blob,
                  compressedPreview: result.previewUrl,
                  outputDimensions: result.outputDimensions,
                  status: "done",
                  error: undefined,
                }
              : item,
          ),
        );
      } catch {
        if (compressionRunRef.current !== runId) return;

        setItems((currentItems) =>
          currentItems.map((item) =>
            item.id === latestItem.id ? { ...item, status: "error", error: copy.compressError } : item,
          ),
        );
        setError(copy.compressError);
      }
    }

    if (compressionRunRef.current === runId) setIsRecompressing(false);
  }, [copy.compressError, format, quality, scale]);

  useEffect(() => {
    if (!items.length) return;

    if (recompressTimeoutRef.current) {
      clearTimeout(recompressTimeoutRef.current);
    }

    const runId = compressionRunRef.current + 1;
    compressionRunRef.current = runId;
    setIsRecompressing(true);

    recompressTimeoutRef.current = setTimeout(() => {
      void compressAll(runId);
    }, 300);

    return () => {
      if (recompressTimeoutRef.current) clearTimeout(recompressTimeoutRef.current);
    };
  }, [compressAll, compressionVersion, items.length]);

  const downloadItem = (item: ImageCompressionItem) => {
    if (!item.compressedBlob) return;

    const url = URL.createObjectURL(item.compressedBlob);
    const a = document.createElement("a");
    const baseName = item.file.name.split(".").slice(0, -1).join(".") || item.file.name;
    a.href = url;
    a.download = `compressed_${baseName}.${getExtension()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetImage = () => {
    compressionRunRef.current += 1;
    if (recompressTimeoutRef.current) clearTimeout(recompressTimeoutRef.current);
    revokeItemUrls(itemsRef.current);
    itemsRef.current = [];
    setItems([]);
    setSelectedItemId("");
    setError(null);
    setIsRecompressing(false);
  };

  useEffect(() => {
    return () => {
      compressionRunRef.current += 1;
      if (recompressTimeoutRef.current) clearTimeout(recompressTimeoutRef.current);
      revokeItemUrls(itemsRef.current);
    };
  }, []);

  return (
    <div className="tool-container card-glass">
      <div
        className={`upload-zone ${hasItems ? "has-file" : ""}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {!hasItems ? (
          <label className="upload-label">
            <Upload size={48} className="upload-icon" />
            <span>{common.uploadImage}</span>
            <small>JPG, PNG, WebP (Max 10MB)</small>
            <small>{copy.multiFileHint}</small>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} hidden />
          </label>
        ) : (
          <div className="preview-container">
            <div className="batch-summary">
              <div>
                <strong>
                  {items.length} {copy.filesSelected}
                </strong>
                <span>
                  {completedItems.length}/{items.length} {copy.done}
                </span>
              </div>

              <label className="button-ghost upload-more">
                <Upload size={18} />
                {copy.selectFiles}
                <input type="file" accept="image/*" multiple onChange={handleFileChange} hidden />
              </label>
            </div>

            {selectedItem && (
              <div>
                <div className="section-label">{copy.selectedPreview}</div>
                <div className="preview-pair">
                  <div className="preview-box">
                    <span className="badge">{common.original}</span>
                    <img src={selectedItem.originalPreview} alt={common.original} />
                    <div className="info-overlay">
                      <div dir="ltr">{formatSize(selectedItem.file.size)}</div>
                      <div dir="ltr">
                        {selectedItem.dimensions.width} × {selectedItem.dimensions.height} px
                      </div>
                    </div>
                  </div>

                  <div className={`preview-box animated fadeIn ${selectedItem.status === "processing" ? "recompressing" : ""}`}>
                    <span className="badge accent">{common.compressed}</span>
                    {selectedItem.compressedPreview ? (
                      <img
                        src={selectedItem.compressedPreview}
                        alt={common.compressed}
                        className={selectedItem.status === "processing" ? "blur" : ""}
                      />
                    ) : (
                      <div className="empty-preview">
                        <ImageIcon size={48} className="animate-pulse opacity-20" />
                      </div>
                    )}

                    {selectedItem.status === "processing" && (
                      <div className="loading-spinner-overlay">
                        <RefreshCw className="animate-spin text-accent" size={32} />
                      </div>
                    )}

                    {selectedItem.compressedBlob && (
                      <div className="info-overlay accent">
                        <div dir="ltr" style={{ fontWeight: 800 }}>
                          {formatSize(selectedItem.compressedBlob.size)}
                          <span className={`saving-percent ${selectedItem.compressedBlob.size > selectedItem.file.size ? "increased" : ""}`}>
                            ({getSavingsPercent(selectedItem.file.size, selectedItem.compressedBlob.size)}%)
                          </span>
                        </div>
                        <div dir="ltr">
                          {selectedItem.outputDimensions.width} × {selectedItem.outputDimensions.height} px
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="settings-results-grid">
              <div className="advanced-controls">
                <div className="control-group">
                  <label htmlFor="compression-quality">
                    {common.quality}{format !== "image/png" && `: ${Math.round(quality * 100)}%`}
                  </label>
                  <input
                    id="compression-quality"
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={quality}
                    disabled={format === "image/png"}
                    onChange={(e) => setQuality(parseFloat(e.target.value))}
                    className="premium-slider"
                  />
                </div>

                <div className="control-group">
                  <label htmlFor="compression-scale">
                    {common.dimensions}: {Math.round(scale * 100)}%
                  </label>
                  <div className="scale-buttons">
                    {[1, 0.75, 0.5, 0.25].map((scaleOption) => (
                      <button
                        key={scaleOption}
                        className={`scale-btn ${scale === scaleOption ? "active" : ""}`}
                        onClick={() => setScale(scaleOption)}
                      >
                        {scaleOption * 100}%
                      </button>
                    ))}
                  </div>
                  <input
                    id="compression-scale"
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    className="premium-slider accent"
                  />
                </div>

                <div className="utility-bar">
                  <div className="format-select">
                    <label htmlFor="compression-format">{copy.outputFormat}</label>
                    <select id="compression-format" value={format} onChange={(e) => setFormat(e.target.value as CompressionFormat)}>
                      <option value="image/webp">WebP</option>
                      <option value="image/jpeg">JPG</option>
                      <option value="image/png">PNG</option>
                    </select>
                  </div>

                  <div className="action-buttons">
                    <button
                      onClick={() => selectedItem && downloadItem(selectedItem)}
                      disabled={isRecompressing || !selectedItem?.compressedBlob}
                      className="button-accent main-action"
                    >
                      {isRecompressing ? <RefreshCw className="animate-spin" size={20} /> : <Download size={20} />}
                      {common.download}
                    </button>

                    <button onClick={resetImage} className="button-ghost" aria-label={common.reset}>
                      <RefreshCw size={18} />
                    </button>
                  </div>
                </div>

              </div>

              <div className="batch-results" aria-live="polite">
                <div className="results-header">
                  <div className="section-label">{copy.results}</div>
                  <button
                    type="button"
                    className={`results-toggle ${isResultsOpen ? "open" : ""}`}
                    onClick={() => setIsResultsOpen((value) => !value)}
                  >
                    {isResultsOpen ? copy.hideResults : copy.showResults}
                    <ChevronDown size={16} />
                  </button>
                </div>

                <div className="total-result">
                  <span>{copy.totalResult}</span>
                  <strong dir="ltr">
                    {completedItems.length
                      ? `${formatSize(completedOriginalSize)} → ${formatSize(completedCompressedSize)}`
                      : `${formatSize(totalOriginalSize)} → -`}
                  </strong>
                  {completedItems.length > 0 && (
                    <em className={completedCompressedSize > completedOriginalSize ? "increased" : ""}>{getSavingsPercent(completedOriginalSize, completedCompressedSize)}%</em>
                  )}
                </div>

                <div className={`batch-list ${isResultsOpen ? "open" : ""}`}>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`batch-row ${selectedItem?.id === item.id ? "active" : ""}`}
                    >
                      <button type="button" className="batch-select" onClick={() => setSelectedItemId(item.id)}>
                        <div className="batch-main">
                          <span className="file-name">{item.file.name}</span>
                          <span className="batch-meta" dir="ltr">
                            {formatSize(item.file.size)}
                            {item.compressedBlob ? ` → ${formatSize(item.compressedBlob.size)}` : ""}
                          </span>
                        </div>

                        <div className="batch-actions">
                          {item.compressedBlob && (
                            <span className={`saving-percent ${item.compressedBlob.size > item.file.size ? "increased" : ""}`}>
                              {getSavingsPercent(item.file.size, item.compressedBlob.size)}%
                            </span>
                          )}
                          <span className={`status-pill ${item.status}`}>
                            {item.status === "processing" && copy.processing}
                            {item.status === "pending" && copy.pending}
                            {item.status === "done" && copy.done}
                            {item.status === "error" && copy.failed}
                          </span>
                        </div>
                      </button>

                      <button
                        type="button"
                        className={`mini-download ${!item.compressedBlob || isRecompressing ? "disabled" : ""}`}
                        aria-label={copy.downloadFile}
                        disabled={!item.compressedBlob || isRecompressing}
                        onClick={() => downloadItem(item)}
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="guidance-panel">
              <div>{copy.batchHint}</div>
              <div>{copy.qualityNote}</div>
              <div>{copy.cleanupHint}</div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="error-message">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      <style jsx>{`
        .tool-container {
          padding: 1.5rem;
          min-height: 450px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .upload-zone {
          border: 2px dashed var(--line);
          border-radius: 1.5rem;
          padding: 3.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.01);
        }
        .upload-zone:hover {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-2px);
        }
        .upload-zone.has-file {
          border-style: solid;
          padding: 1rem;
          background: transparent;
        }
        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
        }
        .upload-icon {
          color: var(--text-muted);
          transition: transform 0.3s ease;
        }
        .upload-label:hover .upload-icon {
          transform: translateY(-8px);
          color: var(--accent);
        }
        .preview-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .batch-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid var(--line);
          border-radius: 1.25rem;
          background: var(--panel-glass);
        }
        .batch-summary > div {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .batch-summary strong {
          color: var(--text);
          font-size: 1rem;
        }
        .batch-summary span {
          color: var(--muted);
          font-size: 0.88rem;
          font-weight: 700;
        }
        .upload-more {
          flex-shrink: 0;
        }
        .section-label {
          margin-bottom: 0.75rem;
          color: var(--muted);
          font-size: 0.86rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .preview-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .preview-pair {
            grid-template-columns: 1fr;
          }
        }
        .preview-box {
          position: relative;
          background: var(--bg-card);
          border-radius: 1.25rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.75rem;
          border: 1px solid var(--line);
          transition: all 0.3s ease;
        }
        .preview-box:hover {
          border-color: var(--accent-light);
          box-shadow: var(--shadow-sm);
        }
        .preview-box.recompressing {
          border-color: var(--accent);
        }
        .preview-box img {
          width: 100%;
          height: auto;
          max-height: 280px;
          object-fit: contain;
          border-radius: 0.75rem;
          margin-bottom: 3.5rem;
          transition: filter 0.3s ease;
        }
        .preview-box img.blur {
          filter: blur(10px) grayscale(0.5);
          opacity: 0.5;
        }
        .empty-preview {
          width: 100%;
          height: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0,0,0,0.1);
          border-radius: 0.75rem;
          margin-bottom: 3.5rem;
        }
        .loading-spinner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2px);
        }
        .badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.4rem 0.8rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 5;
        }
        .badge.accent {
          background: var(--accent);
          border-color: transparent;
        }
        .info-overlay {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          right: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-soft);
          border: 1px solid var(--line);
        }
        .info-overlay.accent {
          color: var(--accent);
          border-color: var(--accent-light);
          background: var(--accent-soft);
        }
        .saving-percent {
          color: #10b981;
          margin-left: 0.4rem;
          font-weight: 900;
        }

        .settings-results-grid {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 1.25rem;
          align-items: start;
        }

        .advanced-controls {
          background: var(--panel-glass);
          border: 1px solid var(--panel-border);
          border-radius: 1.5rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .guidance-panel {
          display: grid;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid var(--line);
          background: rgba(16, 185, 129, 0.08);
          color: var(--text-soft);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .control-group label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text);
          display: flex;
          justify-content: space-between;
        }
        .premium-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: var(--line);
          outline: none;
        }
        .premium-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--text);
          cursor: pointer;
          border: 3px solid var(--bg);
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          transition: transform 0.1s;
        }
        .premium-slider.accent::-webkit-slider-thumb {
          background: var(--accent);
        }
        .premium-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .scale-buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .scale-btn {
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: 1px solid var(--line);
          background: var(--bg);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .scale-btn:hover {
          background: var(--bg-card);
        }
        .scale-btn.active {
          background: var(--accent);
          color: white;
          border-color: transparent;
        }

        .utility-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--line);
          gap: 1rem;
          flex-wrap: wrap;
        }
        .format-select {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .format-select label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--muted);
        }
        .format-select select {
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          background: var(--bg);
          border: 1px solid var(--line);
          color: var(--text);
          font-weight: 600;
          outline: none;
        }
        .action-buttons {
          display: flex;
          gap: 0.75rem;
          flex-grow: 1;
          justify-content: flex-end;
        }
        .main-action {
          flex-grow: 1;
          max-width: 200px;
          justify-content: center;
        }

        .button-primary, .button-accent, .button-ghost {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .button-primary { background: var(--accent); color: white; border: none; }
        .button-accent { background: #10b981; color: white; border: none; }
        .button-ghost { background: transparent; border: 1px solid var(--line); color: var(--text-muted); }
        .button-primary:hover, .button-accent:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); opacity: 0.9; }
        .button-ghost:hover { background: var(--bg); color: var(--text); }
        .button-accent:disabled {
          cursor: not-allowed;
          opacity: 0.5;
          transform: none;
        }

        .batch-results {
          border: 1px solid var(--line);
          border-radius: 1.25rem;
          padding: 1.25rem;
          background: var(--panel-glass);
          position: sticky;
          top: 1rem;
        }
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
        }
        .results-header .section-label {
          margin-bottom: 0;
        }
        .results-toggle {
          display: none;
          align-items: center;
          gap: 0.35rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--bg);
          color: var(--text);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.45rem 0.7rem;
        }
        .results-toggle svg {
          transition: transform 0.2s ease;
        }
        .results-toggle.open svg {
          transform: rotate(180deg);
        }
        .total-result {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 0.9rem;
          align-items: center;
          margin-bottom: 0.75rem;
          padding: 0.95rem 1.1rem;
          border: 1px solid var(--line);
          border-radius: 1.1rem;
          background: rgba(16, 185, 129, 0.08);
        }
        .total-result span {
          color: var(--muted);
          font-size: 0.8rem;
          font-weight: 900;
        }
        .total-result strong {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--text);
          font-size: 1rem;
        }
        .total-result em {
          color: #10b981;
          font-style: normal;
          font-weight: 900;
          font-size: 1.1rem;
        }
        .batch-list {
          max-height: 360px;
          overflow-y: auto;
          padding-right: 0.25rem;
          overscroll-behavior: contain;
        }
        .batch-list::-webkit-scrollbar {
          width: 8px;
        }
        .batch-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .batch-list::-webkit-scrollbar-thumb {
          background: var(--line);
          border-radius: 999px;
        }
        .batch-row {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid transparent;
          border-radius: 1rem;
          background: transparent;
          color: var(--text);
          text-align: left;
          transition: all 0.2s ease;
        }
        .batch-row:hover,
        .batch-row.active {
          border-color: var(--line);
          background: rgba(255, 255, 255, 0.04);
        }
        .batch-row.active {
          box-shadow: inset 3px 0 0 var(--accent);
        }
        .batch-select {
          min-width: 0;
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.25rem;
          border: none;
          background: transparent;
          color: var(--text);
          cursor: pointer;
          padding: 0;
          text-align: start;
        }
        .batch-select:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: 0.65rem;
        }
        .batch-main {
          min-width: 0;
          flex: 1;
          display: grid;
          grid-template-columns: minmax(120px, 1fr) auto;
          gap: 0.75rem;
          align-items: center;
        }
        .file-name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 800;
          font-size: 1rem;
        }
        .batch-meta {
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 700;
          white-space: nowrap;
        }
        .batch-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }
        .status-pill {
          min-width: 72px;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          background: var(--bg);
          color: var(--muted);
          font-size: 0.75rem;
          font-weight: 900;
          text-align: center;
        }
        .status-pill.done {
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        }
        .status-pill.processing {
          background: var(--accent-soft);
          color: var(--accent);
        }
        .status-pill.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        .mini-download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 0.7rem;
          border: 1px solid var(--line);
          color: var(--text);
          background: var(--bg);
          cursor: pointer;
        }
        .mini-download.disabled {
          pointer-events: none;
          opacity: 0.35;
          cursor: not-allowed;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ef4444;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 1rem;
          font-size: 0.9rem;
          font-weight: 600;
        }
        @media (max-width: 1280px) {
          .settings-results-grid {
            grid-template-columns: 1fr;
          }
          .batch-results {
            position: static;
          }
        }
        @media (max-width: 640px) {
          .tool-container,
          .upload-zone.has-file {
            padding: 0;
          }
          .upload-zone.has-file {
            border: 0;
          }
          .advanced-controls,
          .batch-results {
            padding: 1rem;
            min-width: 0;
          }
          .scale-buttons {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .scale-btn {
            white-space: nowrap;
          }
          .action-buttons {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 44px;
          }
          .main-action {
            justify-content: center;
            padding: 0.75rem 0.5rem;
          }
          .action-buttons .button-ghost {
            padding: 0;
            justify-content: center;
          }
          .total-result {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 0.5rem;
            padding: 0.75rem;
          }
          .total-result strong {
            grid-row: 2;
            grid-column: 1 / -1;
            white-space: normal;
            overflow: visible;
          }
          .total-result em {
            grid-row: 1;
            grid-column: 2;
          }
          .mini-download {
            width: 44px;
            height: 44px;
          }
          .upload-zone {
            padding: 2rem 1rem;
          }
          .settings-results-grid {
            grid-template-columns: 1fr;
          }
          .batch-results {
            position: static;
          }
          .results-toggle {
            display: inline-flex;
          }
          .batch-list {
            display: none;
            max-height: 320px;
          }
          .batch-list.open {
            display: block;
          }
          .batch-summary,
          .utility-bar,
          .batch-row,
          .batch-select {
            align-items: stretch;
            flex-direction: column;
          }
          .batch-main {
            grid-template-columns: 1fr;
          }
          .batch-meta {
            white-space: normal;
          }
          .action-buttons,
          .main-action {
            width: 100%;
            max-width: none;
          }
          .batch-actions {
            justify-content: space-between;
          }
        }
        .saving-percent.increased,
        .total-result em.increased {
          color: #b45309;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
