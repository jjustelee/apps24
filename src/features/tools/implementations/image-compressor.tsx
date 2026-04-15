"use client";

import { useState, useRef, useEffect } from "react";
import { getCommonText } from "@/features/tools/copy";
import type { ToolRendererProps } from "./index";
import { Download, Upload, RefreshCw, Image as ImageIcon, CheckCircle, AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/site";

type CompressionFormat = "image/jpeg" | "image/webp" | "image/png";

export function ImageCompressorTool({ locale }: ToolRendererProps) {
  const common = getCommonText(locale as Locale);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>("");
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [compressedPreview, setCompressedPreview] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [format, setFormat] = useState<CompressionFormat>("image/webp");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    setError(null);
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setCompressedBlob(null);
    setCompressedPreview("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const compressImage = async () => {
    if (!originalFile) return;
    setIsProcessing(true);
    setError(null);

    try {
      const img = new Image();
      img.src = originalPreview;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get canvas context");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((b) => resolve(b), format, 0.8);
      });

      if (blob) {
        setCompressedBlob(blob);
        setCompressedPreview(URL.createObjectURL(blob));
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during compression.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!compressedBlob) return;
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement("a");
    const ext = format === "image/webp" ? "webp" : format === "image/png" ? "png" : "jpg";
    a.href = url;
    a.download = `compressed_${originalFile?.name.split(".")[0]}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="tool-container card-glass">
      <div 
        className={`upload-zone ${originalFile ? 'has-file' : ''}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {!originalFile ? (
          <label className="upload-label">
            <Upload size={48} className="upload-icon" />
            <span>{common.uploadImage}</span>
            <small>JPG, PNG, WebP (Max 10MB)</small>
            <input type="file" accept="image/*" onChange={handleFileChange} hidden />
          </label>
        ) : (
          <div className="preview-container">
            <div className="preview-pair">
              <div className="preview-box">
                <span className="badge">{common.original}</span>
                <img src={originalPreview} alt="Original" />
                <div className="size-info">{formatSize(originalFile.size)}</div>
              </div>
              {compressedPreview && (
                <div className="preview-box animated fadeIn">
                  <span className="badge accent">{common.compressed}</span>
                  <img src={compressedPreview} alt="Compressed" />
                  <div className="size-info">
                    {formatSize(compressedBlob?.size || 0)}
                    <span className="saving-percent">
                      (-{Math.round((1 - (compressedBlob?.size || 0) / originalFile.size) * 100)}%)
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="controls-row">
              <select 
                value={format} 
                onChange={(e) => setFormat(e.target.value as CompressionFormat)}
                className="select-glass"
              >
                <option value="image/webp">WebP</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/png">PNG</option>
              </select>

              {!compressedBlob ? (
                <button 
                  onClick={compressImage} 
                  disabled={isProcessing}
                  className="button-primary"
                >
                  {isProcessing ? <RefreshCw className="animate-spin" /> : <CheckCircle size={20} />}
                  {common.compress}
                </button>
              ) : (
                <button onClick={downloadImage} className="button-accent">
                  <Download size={20} />
                  {common.download}
                </button>
              )}

              <button onClick={() => setOriginalFile(null)} className="button-ghost">
                <RefreshCw size={20} />
                {common.reset}
              </button>
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
          padding: 2rem;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .upload-zone {
          border: 2px dashed var(--line);
          border-radius: 1rem;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.02);
        }
        .upload-zone:hover {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.05);
        }
        .upload-zone.has-file {
          border-style: solid;
          padding: 1.5rem;
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
          transform: translateY(-5px);
          color: var(--accent);
        }
        .preview-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .preview-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .preview-pair {
            grid-template-columns: 1fr;
          }
        }
        .preview-box {
          position: relative;
          background: rgba(0,0,0,0.2);
          border-radius: 0.75rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }
        .preview-box img {
          max-width: 100%;
          max-height: 300px;
          object-fit: contain;
          border-radius: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .badge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          padding: 0.25rem 0.5rem;
          background: var(--bg-card);
          border-radius: 0.4rem;
          font-size: 0.75rem;
          font-weight: bold;
          border: 1px solid var(--line);
        }
        .badge.accent {
          border-color: var(--accent);
          color: var(--accent);
        }
        .size-info {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .saving-percent {
          color: #10b981;
          margin-left: 0.5rem;
        }
        .controls-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .select-glass {
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          background: var(--bg-card);
          border: 1px solid var(--line);
          color: var(--text);
          outline: none;
        }
        .button-primary, .button-accent, .button-ghost {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .button-primary {
          background: var(--accent);
          color: white;
          border: none;
        }
        .button-accent {
          background: #10b981;
          color: white;
          border: none;
        }
        .button-ghost {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--text-muted);
        }
        .button-primary:hover, .button-accent:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ef4444;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 0.5rem;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
