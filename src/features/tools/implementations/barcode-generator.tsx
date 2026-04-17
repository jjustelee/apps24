"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";
import { Download, Copy, RefreshCw, QrCode, BarChart as BarcodeIcon, AlertCircle, CheckCircle } from "lucide-react";

type BarcodeFormatOption = {
  label: string;
  value: string;
};

type BarcodeToolData = {
  formats: BarcodeFormatOption[];
};

const FORMAT_DESCRIPTIONS: Record<string, string> = {
  qrcode: "URL이나 텍스트를 QR 코드로 변환합니다.",
  code128: "알파뉴메릭 라벨, 재고 ID, 배송 코드 등에 사용됩니다.",
  code39: "대문자 라벨 및 짧은 운영 코드에 사용됩니다.",
  ean13: "13자리 숫자로 된 소매 제품 번호에 사용됩니다.",
};

const STORAGE_KEY_FORMAT = "apps24.barcode.format";

export function BarcodeGeneratorTool({
  locale,
  tool,
  toolData,
  commonText,
}: ToolRendererProps) {
  const data = toolData as BarcodeToolData | undefined;
  const isQrTool = tool.slug === "qrgenerator";
  
  const availableFormats = useMemo(() => {
    const formats = data?.formats ?? [{ value: "qrcode", label: "QR Code" }];
    if (isQrTool) {
      return formats.filter((format) => format.value === "qrcode");
    }
    return formats;
  }, [data?.formats, isQrTool]);

  const [format, setFormat] = useState(isQrTool ? "qrcode" : "code128");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [requestError, setRequestError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FORMAT);
    if (saved && !isQrTool) setFormat(saved);
    setSettingsLoaded(true);
  }, [isQrTool]);

  useEffect(() => {
    if (settingsLoaded && !isQrTool) {
      localStorage.setItem(STORAGE_KEY_FORMAT, format);
    }
  }, [format, settingsLoaded, isQrTool]);

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
          setRequestError(payload.success ? "Generation failed." : payload.message);
          setImage("");
        } else {
          setRequestError("");
          setImage(payload.image);
        }
      } catch (fetchError) {
        if ((fetchError as any).name !== "AbortError") {
          setRequestError("Generation error.");
        }
      } finally {
        setIsGenerating(false);
      }
    }, 400);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [selectedFormat, text]);

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
            <span>{FORMAT_DESCRIPTIONS[selectedFormat] || "Generate standard barcodes."}</span>
          </div>
        </div>

        <div className="output-section">
          <div className={`preview-card ${isGenerating ? 'loading' : ''}`}>
            {image ? (
              <div className="image-wrapper fadeIn">
                <img src={image} alt="Generated result" />
              </div>
            ) : (
              <div className="empty-state">
                {isQrTool ? <QrCode size={64} /> : <BarcodeIcon size={64} />}
                <p>{requestError || (isQrTool ? "Enter text to generate QR" : "Enter text to generate Barcode")}</p>
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
          
          {isQrTool && (
            <div className="tool-tip">
              💡 <Link href={`/${locale}/barcodegenerator`}>바코드 생성기</Link>를 찾으시나요?
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
