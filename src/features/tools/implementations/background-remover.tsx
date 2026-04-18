"use client";

import { useEffect, useRef, useState } from "react";
import type { ToolRendererProps } from "./index";
import {
  Download,
  Loader2,
  Upload,
  WandSparkles,
} from "lucide-react";
import type { Locale } from "@/lib/site";
import type { BackgroundRemoverOutputBackground, BackgroundRemoverPreset } from "@/features/tools/background-remover-longtails";

const MODEL_ID = "Xenova/modnet";
const MAX_FILE_SIZE = 10 * 1024 * 1024;

type RemovalPhase = "idle" | "loading" | "processing" | "done";

type BackgroundRemovalProgressInfo = {
  status: "initiate" | "download" | "progress" | "progress_total" | "done" | "ready";
  progress?: number;
  file?: string;
  task?: string;
  model?: string;
};

type BackgroundRemovalResult = {
  toBlob: (type?: string, quality?: number) => Promise<Blob>;
  toCanvas: () => HTMLCanvasElement | OffscreenCanvas;
};

type BackgroundRemovalPipeline = (images: Blob) => Promise<BackgroundRemovalResult>;

type BackgroundRemoverUI = {
  removeBackground: string;
  outputBackground: string;
  transparent: string;
  white: string;
  black: string;
  preview: string;
  result: string;
  originalPreview: string;
  loadingModel: string;
  processingImage: string;
  uploadHint: string;
  maxSize: string;
  ready: string;
  modelError: string;
  previewHint: string;
  replaceImage: string;
};

const BACKGROUND_REMOVER_UI: Record<Locale, BackgroundRemoverUI> = {
  en: {
    removeBackground: "Remove background",
    outputBackground: "Output background",
    transparent: "Transparent",
    white: "White",
    black: "Black",
    preview: "Preview",
    result: "Result",
    originalPreview: "Original preview",
    loadingModel: "Loading background model",
    processingImage: "Removing background",
    uploadHint: "Drag and drop an image here or click to browse.",
    maxSize: "JPG, PNG, WebP up to 10 MB",
    ready: "Ready to download",
    modelError: "Background removal failed. Please try another image.",
    previewHint: "Your processed image will appear here.",
    replaceImage: "Replace image",
  },
  ko: {
    removeBackground: "배경 제거",
    outputBackground: "출력 배경",
    transparent: "투명",
    white: "흰색",
    black: "검정",
    preview: "미리보기",
    result: "결과",
    originalPreview: "원본 미리보기",
    loadingModel: "배경 모델을 불러오는 중",
    processingImage: "배경을 제거하는 중",
    uploadHint: "이미지를 드래그 앤 드롭하거나 클릭해서 업로드하세요.",
    maxSize: "JPG, PNG, WebP 최대 10MB",
    ready: "다운로드 준비 완료",
    modelError: "배경 제거 중 오류가 발생했습니다. 다른 이미지를 시도해 보세요.",
    previewHint: "처리된 이미지는 여기에서 확인할 수 있습니다.",
    replaceImage: "이미지 다시 선택",
  },
  fr: {
    removeBackground: "Supprimer l'arrière-plan",
    outputBackground: "Fond de sortie",
    transparent: "Transparent",
    white: "Blanc",
    black: "Noir",
    preview: "Aperçu",
    result: "Résultat",
    originalPreview: "Aperçu de l'image d'origine",
    loadingModel: "Chargement du modèle d'arrière-plan",
    processingImage: "Suppression de l'arrière-plan",
    uploadHint: "Glissez-déposez une image ici ou cliquez pour parcourir.",
    maxSize: "JPG, PNG, WebP jusqu'à 10 Mo",
    ready: "Prêt au téléchargement",
    modelError: "La suppression de l'arrière-plan a échoué. Essayez une autre image.",
    previewHint: "Votre image traitée apparaîtra ici.",
    replaceImage: "Remplacer l'image",
  },
  ja: {
    removeBackground: "背景を削除",
    outputBackground: "出力背景",
    transparent: "透明",
    white: "白",
    black: "黒",
    preview: "プレビュー",
    result: "結果",
    originalPreview: "元画像のプレビュー",
    loadingModel: "背景モデルを読み込み中",
    processingImage: "背景を削除しています",
    uploadHint: "ここに画像をドラッグ＆ドロップするか、クリックして選択してください。",
    maxSize: "JPG、PNG、WebP は最大 10MB",
    ready: "ダウンロード準備完了",
    modelError: "背景の削除に失敗しました。別の画像をお試しください。",
    previewHint: "処理した画像はここに表示されます。",
    replaceImage: "画像を再選択",
  },
  zh: {
    removeBackground: "移除背景",
    outputBackground: "输出背景",
    transparent: "透明",
    white: "白色",
    black: "黑色",
    preview: "预览",
    result: "结果",
    originalPreview: "原图预览",
    loadingModel: "正在加载背景模型",
    processingImage: "正在移除背景",
    uploadHint: "将图片拖放到此处，或点击浏览上传。",
    maxSize: "JPG、PNG、WebP，最大 10 MB",
    ready: "已可下载",
    modelError: "背景移除失败。请尝试其他图片。",
    previewHint: "处理后的图片会显示在这里。",
    replaceImage: "重新选择图片",
  },
  "zh-TW": {
    removeBackground: "移除背景",
    outputBackground: "輸出背景",
    transparent: "透明",
    white: "白色",
    black: "黑色",
    preview: "預覽",
    result: "結果",
    originalPreview: "原圖預覽",
    loadingModel: "正在載入背景模型",
    processingImage: "正在移除背景",
    uploadHint: "將圖片拖放到這裡，或點擊瀏覽上傳。",
    maxSize: "JPG、PNG、WebP，最大 10 MB",
    ready: "已可下載",
    modelError: "背景移除失敗。請嘗試其他圖片。",
    previewHint: "處理後的圖片會顯示在這裡。",
    replaceImage: "重新選擇圖片",
  },
  pt: {
    removeBackground: "Remover fundo",
    outputBackground: "Fundo de saída",
    transparent: "Transparente",
    white: "Branco",
    black: "Preto",
    preview: "Prévia",
    result: "Resultado",
    originalPreview: "Prévia da imagem original",
    loadingModel: "Carregando o modelo de fundo",
    processingImage: "Removendo o fundo",
    uploadHint: "Arraste e solte uma imagem aqui ou clique para procurar.",
    maxSize: "JPG, PNG, WebP até 10 MB",
    ready: "Pronto para baixar",
    modelError: "A remoção do fundo falhou. Tente outra imagem.",
    previewHint: "Sua imagem processada aparecerá aqui.",
    replaceImage: "Substituir imagem",
  },
  es: {
    removeBackground: "Eliminar fondo",
    outputBackground: "Fondo de salida",
    transparent: "Transparente",
    white: "Blanco",
    black: "Negro",
    preview: "Vista previa",
    result: "Resultado",
    originalPreview: "Vista previa de la imagen original",
    loadingModel: "Cargando el modelo de fondo",
    processingImage: "Eliminando el fondo",
    uploadHint: "Arrastra y suelta una imagen aquí o haz clic para buscar.",
    maxSize: "JPG, PNG, WebP hasta 10 MB",
    ready: "Listo para descargar",
    modelError: "La eliminación del fondo falló. Prueba con otra imagen.",
    previewHint: "La imagen procesada aparecerá aquí.",
    replaceImage: "Reemplazar imagen",
  },
  de: {
    removeBackground: "Hintergrund entfernen",
    outputBackground: "Ausgabehintergrund",
    transparent: "Transparent",
    white: "Weiß",
    black: "Schwarz",
    preview: "Vorschau",
    result: "Ergebnis",
    originalPreview: "Vorschau des Originalbilds",
    loadingModel: "Hintergrundmodell wird geladen",
    processingImage: "Hintergrund wird entfernt",
    uploadHint: "Ziehen Sie ein Bild hierher oder klicken Sie zum Auswählen.",
    maxSize: "JPG, PNG, WebP bis 10 MB",
    ready: "Bereit zum Download",
    modelError: "Die Hintergrundentfernung ist fehlgeschlagen. Bitte versuchen Sie ein anderes Bild.",
    previewHint: "Ihr verarbeitetes Bild wird hier angezeigt.",
    replaceImage: "Bild ersetzen",
  },
  ar: {
    removeBackground: "إزالة الخلفية",
    outputBackground: "خلفية الإخراج",
    transparent: "شفاف",
    white: "أبيض",
    black: "أسود",
    preview: "معاينة",
    result: "النتيجة",
    originalPreview: "معاينة الصورة الأصلية",
    loadingModel: "جارٍ تحميل نموذج الخلفية",
    processingImage: "جارٍ إزالة الخلفية",
    uploadHint: "اسحب صورة إلى هنا أو انقر للتصفح.",
    maxSize: "JPG وPNG وWebP حتى 10 ميغابايت",
    ready: "جاهز للتنزيل",
    modelError: "فشلت إزالة الخلفية. حاول صورة أخرى.",
    previewHint: "ستظهر الصورة المعالجة هنا.",
    replaceImage: "استبدال الصورة",
  },
};

function getBackgroundRemoverUI(locale: string): BackgroundRemoverUI {
  return BACKGROUND_REMOVER_UI[(locale in BACKGROUND_REMOVER_UI ? locale : "en") as Locale];
}

let backgroundRemovalPipelinePromise: Promise<BackgroundRemovalPipeline> | null = null;

async function createBackgroundRemovalPipeline(
  device: "webgpu" | "wasm",
  progressCallback?: (info: BackgroundRemovalProgressInfo) => void,
) {
  const { pipeline } = await import("@huggingface/transformers");
  return pipeline("background-removal", MODEL_ID, {
    device,
    progress_callback: progressCallback,
  }) as Promise<BackgroundRemovalPipeline>;
}

async function getBackgroundRemovalPipeline(progressCallback?: (info: BackgroundRemovalProgressInfo) => void) {
  if (!backgroundRemovalPipelinePromise) {
    const preferredDevice = typeof navigator !== "undefined" && "gpu" in navigator ? "webgpu" : "wasm";

    try {
      backgroundRemovalPipelinePromise = createBackgroundRemovalPipeline(preferredDevice, progressCallback);
      return await backgroundRemovalPipelinePromise;
    } catch (error) {
      backgroundRemovalPipelinePromise = null;

      if (preferredDevice !== "webgpu") {
        throw error;
      }

      try {
        backgroundRemovalPipelinePromise = createBackgroundRemovalPipeline("wasm", progressCallback);
        return await backgroundRemovalPipelinePromise;
      } catch (fallbackError) {
        backgroundRemovalPipelinePromise = null;
        throw fallbackError;
      }
    }
  }

  return backgroundRemovalPipelinePromise;
}

function formatFileSize(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** index;
  return `${value.toFixed(index === 0 ? 0 : 1).replace(/\.0$/, "")} ${units[index]}`;
}

function getBackgroundColor(outputBackground: BackgroundRemoverOutputBackground) {
  if (outputBackground === "white") return "#ffffff";
  if (outputBackground === "black") return "#000000";
  return "transparent";
}

function triggerDownload(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

export function BackgroundRemoverTool({ locale, commonText: common, toolData }: ToolRendererProps) {
  const preset = toolData && typeof toolData === "object" ? (toolData as BackgroundRemoverPreset) : undefined;
  const presetBackground = preset?.outputBackground ?? "transparent";

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const resultImageRef = useRef<BackgroundRemovalResult | null>(null);
  const runIdRef = useRef(0);
  const mountedRef = useRef(true);

  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState("");
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [resultPreviewUrl, setResultPreviewUrl] = useState("");
  const [outputBackground, setOutputBackground] = useState<BackgroundRemoverOutputBackground>(presetBackground);
  const [phase, setPhase] = useState<RemovalPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");
  const [error, setError] = useState<string | null>(null);
  const ui = getBackgroundRemoverUI(locale);

  useEffect(() => {
    setOutputBackground(presetBackground);
  }, [presetBackground]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (originalPreviewUrl) URL.revokeObjectURL(originalPreviewUrl);
    };
  }, [originalPreviewUrl]);

  useEffect(() => {
    return () => {
      if (resultPreviewUrl) URL.revokeObjectURL(resultPreviewUrl);
    };
  }, [resultPreviewUrl]);

  const clearResult = () => {
    resultImageRef.current = null;
    setResultBlob(null);
    setResultPreviewUrl("");
    setProgress(0);
    setProgressLabel("");
    setPhase("idle");
    setError(null);
  };

  const resetAll = () => {
    runIdRef.current += 1;
    clearResult();
    setOriginalFile(null);
    setOriginalPreviewUrl("");
    setOriginalDimensions({ width: 0, height: 0 });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError(locale === "ko" ? "이미지 파일을 업로드해 주세요." : "Please upload an image file.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(locale === "ko" ? "10MB 이하의 이미지만 업로드해 주세요." : "Please upload an image smaller than 10 MB.");
      return;
    }

    runIdRef.current += 1;
    const fileRunId = runIdRef.current;
    clearResult();
    setError(null);
    setOriginalFile(file);
    setPhase("idle");

    const url = URL.createObjectURL(file);
    setOriginalPreviewUrl(url);

    const img = new Image();
    img.onload = () => {
      if (!mountedRef.current || runIdRef.current !== fileRunId) return;
      setOriginalDimensions({ width: img.width, height: img.height });
    };
    img.src = url;

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveBackground = async () => {
    if (!originalFile) return;

    const runId = ++runIdRef.current;
    setError(null);
    setProgress(8);
    setProgressLabel(ui.loadingModel);
    setPhase("loading");

    try {
      const segmenter = await getBackgroundRemovalPipeline((info) => {
        if (!mountedRef.current || runIdRef.current !== runId) return;

        if (info.status === "progress" || info.status === "progress_total") {
          const nextProgress = typeof info.progress === "number" ? Math.min(Math.round(info.progress), 90) : 8;
          setProgress(nextProgress);
          setProgressLabel(ui.loadingModel);
        } else if (info.status === "ready") {
          setProgress(90);
          setProgressLabel(ui.loadingModel);
        }
      });

      if (!mountedRef.current || runIdRef.current !== runId) return;

      setPhase("processing");
      setProgress((current) => Math.max(current, 92));
      setProgressLabel(ui.processingImage);

      const output = await segmenter(originalFile);
      if (!mountedRef.current || runIdRef.current !== runId) return;

      resultImageRef.current = output;
      const blob = await output.toBlob("image/png");
      if (!mountedRef.current || runIdRef.current !== runId) return;

      setResultBlob(blob);
      setResultPreviewUrl(URL.createObjectURL(blob));
      setPhase("done");
      setProgress(100);
      setProgressLabel(ui.ready);
    } catch (caughtError: unknown) {
      if (!mountedRef.current || runIdRef.current !== runId) return;

      backgroundRemovalPipelinePromise = null;
      setPhase("idle");
      setProgress(0);
      setProgressLabel("");
      setError(caughtError instanceof Error ? caughtError.message : ui.modelError);
    }
  };

  const handleDownload = async () => {
    if (!resultImageRef.current || !originalFile) return;

    const baseName = originalFile.name.replace(/\.[^.]+$/, "") || "background-removed";
    const outputName = `${baseName}-${outputBackground}.png`;

    if (outputBackground === "transparent" && resultBlob) {
      triggerDownload(resultBlob, outputName);
      return;
    }

    const sourceCanvas = resultImageRef.current.toCanvas();
    const canvas = document.createElement("canvas");
    canvas.width = sourceCanvas.width;
    canvas.height = sourceCanvas.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = getBackgroundColor(outputBackground);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sourceCanvas as CanvasImageSource, 0, 0);

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((nextBlob) => resolve(nextBlob), "image/png");
    });

    if (blob) {
      triggerDownload(blob, outputName);
    }
  };

  const isWorking = phase === "loading" || phase === "processing";
  const hasResult = phase === "done" && Boolean(resultPreviewUrl);
  const previewProgress = isWorking ? Math.max(8, Math.min(progress, 99)) : 0;
  const previewStatus = phase === "loading" ? ui.loadingModel : phase === "processing" ? ui.processingImage : ui.previewHint;
  const previewTitle = hasResult ? ui.result : originalFile ? common.original : ui.preview;
  const previewBadge = hasResult ? ui.ready : isWorking ? `${previewProgress}%` : originalFile ? common.original : ui.preview;
  const previewBackground = hasResult
    ? outputBackground === "transparent"
      ? {
          backgroundImage:
            "linear-gradient(45deg, rgba(148, 163, 184, 0.22) 25%, transparent 25%, transparent 75%, rgba(148, 163, 184, 0.22) 75%, rgba(148, 163, 184, 0.22) 100%), linear-gradient(45deg, rgba(148, 163, 184, 0.22) 25%, transparent 25%, transparent 75%, rgba(148, 163, 184, 0.22) 75%, rgba(148, 163, 184, 0.22) 100%)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }
      : {
          backgroundColor: outputBackground === "white" ? "#ffffff" : "#000000",
        }
    : {
        backgroundColor: "var(--bg)",
      };

  return (
    <div className="tool-stack">
      <section
        className="rounded-[32px] border border-[var(--panel-border)] bg-[var(--panel-glass)] p-5 md:p-6 shadow-[var(--shadow)]"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--muted)]">{previewTitle}</p>
            <h3 className="mt-1 text-lg font-extrabold text-[var(--text)]">
              {hasResult ? ui.ready : isWorking ? previewStatus : originalFile ? ui.originalPreview : ui.uploadHint}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {originalFile
                ? isWorking
                  ? `${progressLabel || previewStatus} · ${previewProgress}%`
                  : `${formatFileSize(originalFile.size)} · ${originalDimensions.width} × ${originalDimensions.height}px`
                : ui.uploadHint}
            </p>
          </div>
          <div className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
            {previewBadge}
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[var(--line)]" style={previewBackground}>
          <div className="relative flex min-h-[420px] items-center justify-center p-4">
            {!originalFile ? (
              <button
                type="button"
                className="flex w-full max-w-lg flex-col items-center gap-3 rounded-[28px] border border-dashed border-[var(--panel-border)] bg-[var(--bg)] px-6 py-10 text-center text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent-soft)]"
                onClick={openFilePicker}
              >
                <Upload size={42} className="text-[var(--accent)]" />
                <div className="space-y-1">
                  <p className="text-lg font-extrabold text-[var(--text)]">{common.uploadImage}</p>
                  <p className="max-w-xs text-sm leading-6">{ui.uploadHint}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{ui.maxSize}</p>
                </div>
              </button>
            ) : hasResult && resultPreviewUrl ? (
              <img
                src={resultPreviewUrl}
                alt={ui.result}
                className="max-h-[460px] w-full object-contain"
              />
            ) : (
              <img
                src={originalPreviewUrl}
                alt={common.original}
                className={`max-h-[460px] w-full object-contain transition duration-300 ${isWorking ? "opacity-20 blur-[1px]" : "opacity-100"}`}
              />
            )}

            {isWorking && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg)]/70 px-6 backdrop-blur-sm">
                <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-[28px] border border-[var(--line)] bg-[var(--panel)]/95 px-6 py-5 text-center shadow-[var(--shadow)]">
                  <Loader2 size={40} className="animate-spin text-[var(--accent)]" />
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-[var(--text)]">{progressLabel || previewStatus}</p>
                    <p className="text-sm font-bold text-[var(--muted)]">{previewProgress}%</p>
                    <div className="h-2 w-64 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
                        style={{ width: `${previewProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          {!originalFile ? (
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              onClick={(event) => {
                event.stopPropagation();
                openFilePicker();
              }}
            >
              <Upload size={16} />
              {common.uploadImage}
            </button>
          ) : hasResult ? (
            <>
              <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg)] p-1">
                <button
                  type="button"
                  onClick={() => setOutputBackground("transparent")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    outputBackground === "transparent"
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {ui.transparent}
                </button>
                <button
                  type="button"
                  onClick={() => setOutputBackground("white")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    outputBackground === "white"
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {ui.white}
                </button>
                <button
                  type="button"
                  onClick={() => setOutputBackground("black")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    outputBackground === "black"
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {ui.black}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                  onClick={openFilePicker}
                >
                  {ui.replaceImage}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={handleDownload}
                  disabled={phase !== "done" || !resultBlob}
                >
                  <Download size={16} />
                  {common.download}
                </button>
                <button
                  type="button"
                  className="rounded-full border border-[var(--line)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
                  onClick={resetAll}
                >
                  {common.reset}
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                onClick={openFilePicker}
              >
                {ui.replaceImage}
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleRemoveBackground}
                disabled={phase === "loading" || phase === "processing"}
              >
                {phase === "loading" || phase === "processing" ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    {ui.removeBackground}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <WandSparkles size={16} />
                    {ui.removeBackground}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="rounded-full border border-[var(--line)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
                onClick={resetAll}
              >
                {common.reset}
              </button>
            </div>
          )}
        </div>

        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} hidden />
      </section>

      {error && (
        <div className="rounded-[20px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-200">
          {error}
        </div>
      )}
    </div>
  );
}
