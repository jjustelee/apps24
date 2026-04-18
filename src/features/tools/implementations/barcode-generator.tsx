"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { Download, Copy, RefreshCw, QrCode, BarChart as BarcodeIcon, AlertCircle, CheckCircle } from "lucide-react";
import { getQrGeneratorLongtailPreset } from "@/features/tools/qrgenerator-longtails";
import { getBarcodeGeneratorLongtailPreset, isBarcodeGeneratorLongtailSlug } from "@/features/tools/barcode-generator-longtails";

type BarcodeFormatOption = {
  label: string;
  value: string;
};

type BarcodeToolData = {
  formats: BarcodeFormatOption[];
};

type BarcodeGeneratorText = {
  formatDescriptions?: Record<string, string>;
  qrHint?: string;
  barcodeHint?: string;
  generationFailed?: string;
  generationError?: string;
};

const STORAGE_KEY_FORMAT = "apps24.barcode.format";

const DEFAULT_BARCODE_COPY = {
  formatDescriptions: {
    qrcode: "Converts a URL or text into a QR code.",
    code128: "Used for alphanumeric labels, inventory IDs, and shipping codes.",
    code39: "Used for uppercase labels and short operational codes.",
    ean13: "Used for 13-digit retail product numbers.",
  },
  qrHint: "Enter text to generate a QR code.",
  barcodeHint: "Enter text to generate a barcode.",
  generationFailed: "Generation failed.",
  generationError: "Generation error.",
};

export function BarcodeGeneratorTool({
  locale,
  tool,
  toolData,
  commonText,
  toolText,
}: ToolRendererProps) {
  const params = useParams();
  const data = toolData as BarcodeToolData | undefined;
  const isQrTool = tool.slug === "qrgenerator";
  const presetSlug = typeof params.preset === "string" ? params.preset : undefined;
  const barcodeFormatSlug = typeof params.format === "string" ? params.format : undefined;
  const barcodePreset = !isQrTool && barcodeFormatSlug && isBarcodeGeneratorLongtailSlug(barcodeFormatSlug)
    ? getBarcodeGeneratorLongtailPreset(barcodeFormatSlug)
    : undefined;
  const localizedCopy = toolText as BarcodeGeneratorText | undefined;
  const formatDescriptions = localizedCopy?.formatDescriptions ?? DEFAULT_BARCODE_COPY.formatDescriptions;
  const qrHint = localizedCopy?.qrHint ?? DEFAULT_BARCODE_COPY.qrHint;
  const barcodeHint = localizedCopy?.barcodeHint ?? DEFAULT_BARCODE_COPY.barcodeHint;
  const generationFailed = localizedCopy?.generationFailed ?? DEFAULT_BARCODE_COPY.generationFailed;
  const generationError = localizedCopy?.generationError ?? DEFAULT_BARCODE_COPY.generationError;
  const defaultText = useMemo(() => {
    if (isQrTool && presetSlug) {
      return getQrGeneratorLongtailPreset(presetSlug)?.text ?? "";
    }

    if (!isQrTool && barcodePreset) {
      return barcodePreset.text;
    }

    return "";
  }, [isQrTool, presetSlug, barcodePreset]);
  
  const availableFormats = useMemo(() => {
    const formats = data?.formats ?? [{ value: "qrcode", label: "QR Code" }];
    if (isQrTool) {
      return formats.filter((format) => format.value === "qrcode");
    }
    return formats;
  }, [data?.formats, isQrTool]);

  const [format, setFormat] = useState(isQrTool ? "qrcode" : barcodePreset?.format ?? "code128");
  const [text, setText] = useState(defaultText);
  const [image, setImage] = useState("");
  const [requestError, setRequestError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  useEffect(() => {
    setText(defaultText);
    setImage("");
    setRequestError("");
    setCopied(false);
  }, [defaultText]);

  useEffect(() => {
    if (barcodePreset) {
      setFormat(barcodePreset.format);
    }
  }, [barcodePreset]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FORMAT);
    if (saved && !isQrTool && !barcodePreset) setFormat(saved);
    setSettingsLoaded(true);
  }, [barcodePreset, isQrTool]);

  useEffect(() => {
    if (settingsLoaded && !isQrTool && !barcodePreset) {
      localStorage.setItem(STORAGE_KEY_FORMAT, format);
    }
  }, [barcodePreset, format, isQrTool, settingsLoaded]);

  const selectedFormat = isQrTool ? "qrcode" : format;

  useEffect(() => {
    if (!text.trim()) {
      setImage("");
      setRequestError("");
      return;
    }

    const controller = new AbortController();
    setIsGenerating(true);

    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/generate-barcode?text=${encodeURIComponent(text)}&format=${encodeURIComponent(selectedFormat)}`,
          { signal: controller.signal },
        );
        const payload = (await response.json()) as
          | { success: true; image: string }
          | { success: false; message: string };

        if (!response.ok || !payload.success) {
          setRequestError(payload.success ? generationFailed : payload.message);
          setImage("");
        } else {
          setRequestError("");
          setImage(payload.image);
        }
      } catch (fetchError) {
        if (!(fetchError instanceof DOMException && fetchError.name === "AbortError")) {
          setRequestError(generationError);
        }
      } finally {
        setIsGenerating(false);
      }
    }, 400);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [selectedFormat, text, generationError, generationFailed]);

  const infoText = isQrTool
    ? qrHint
    : formatDescriptions[selectedFormat as keyof typeof formatDescriptions] || DEFAULT_BARCODE_COPY.formatDescriptions[selectedFormat as keyof typeof DEFAULT_BARCODE_COPY.formatDescriptions];

  const copyToClipboard = async () => {
    if (!image) return;
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy image", e);
    }
  };

  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = `${selectedFormat}_${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="tool-container card-glass">
      <div className="generator-layout">
        <div className="input-section panel-glass">
          {!isQrTool && (
            <div className="control-group">
              <label className="label">{commonText.type || "Format"}</label>
              <select
                className="select-input"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                {availableFormats.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>
          )}

          <div className="control-group">
            <label className="label">
              {isQrTool ? (commonText.enterQrText || "Text or URL") : (commonText.enterBarcodeText || "Data")}
            </label>
            <textarea
              className="text-input"
              rows={isQrTool ? 4 : 2}
              placeholder={isQrTool ? "https://example.com" : "12345678"}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="info-box">
            <AlertCircle size={16} />
            <span>{infoText}</span>
          </div>
        </div>

        <div className="output-section">
          <div className={`preview-card ${isGenerating ? 'loading' : ''}`}>
            {image ? (
              <div className="image-wrapper fadeIn">
                <img
                  src={image}
                  alt={locale === "ko" ? (isQrTool ? "QR 코드 결과" : "바코드 결과") : (isQrTool ? "QR code result" : "Barcode result")}
                />
              </div>
            ) : (
              <div className="empty-state">
                {isQrTool ? <QrCode size={64} /> : <BarcodeIcon size={64} />}
                <p>{requestError || (isQrTool ? qrHint : barcodeHint)}</p>
              </div>
            )}
            
            {isGenerating && (
              <div className="loading-overlay">
                <RefreshCw className="animate-spin" size={32} />
              </div>
            )}
          </div>

          {image && (
            <div className="action-grid fadeIn">
              <button className="btn btn-primary" onClick={copyToClipboard}>
                {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                {copied ? commonText.copied : (commonText.copy || "Copy")}
              </button>
              <button className="btn btn-accent" onClick={downloadImage}>
                <Download size={18} />
                {commonText.download || "Save"}
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tool-container {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .generator-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .generator-layout {
            grid-template-columns: 1fr;
          }
        }
        .input-section {
          padding: 1.5rem;
          border: 1px solid var(--panel-border);
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text);
          opacity: 0.8;
        }
        .select-input, .text-input {
          padding: 0.75rem 1rem;
          border: 1px solid var(--line);
          background: var(--bg);
          border-radius: 0.75rem;
          color: var(--text);
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .select-input:focus, .text-input:focus {
          border-color: var(--accent);
        }
        .text-input {
          resize: none;
        }
        .info-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .output-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .preview-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          background: white;
          border: 1px solid var(--line);
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        .image-wrapper {
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--muted);
          text-align: center;
          padding: 2rem;
        }
        .empty-state p {
          font-size: 0.85rem;
          line-height: 1.4;
        }
        .loading-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        .action-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .btn-primary {
          background: var(--line);
          color: var(--text);
        }
        .btn-accent {
          background: var(--accent);
          color: white;
        }
        .btn:hover:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
        .tool-tip {
          font-size: 0.8rem;
          color: var(--muted);
          text-align: center;
          margin-top: 0.5rem;
        }
        .tool-tip a {
          color: var(--accent);
          border-bottom: 1px solid var(--accent-soft);
        }
        .fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
