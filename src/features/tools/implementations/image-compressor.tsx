"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import type { ToolRendererProps } from "./index";
import { Download, Upload, RefreshCw, Image as ImageIcon, CheckCircle, AlertCircle } from "lucide-react";
import { getImageCompressorLongtailPreset } from "@/features/tools/image-compressor-longtails";

type CompressionFormat = "image/jpeg" | "image/webp" | "image/png";

export function ImageCompressorTool({ locale, commonText: common }: ToolRendererProps) {
  const params = useParams();
  const isKo = locale === "ko";
  const modeSlug = typeof params.mode === "string" ? params.mode : undefined;
  const defaultSelection = useMemo(() => {
    const preset = modeSlug ? getImageCompressorLongtailPreset(modeSlug) : undefined;

    return preset ?? {
      format: "image/webp" as CompressionFormat,
      quality: 0.8,
      scale: 1,
    };
  }, [modeSlug]);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>("");
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [compressedPreview, setCompressedPreview] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [format, setFormat] = useState<CompressionFormat>(defaultSelection.format);

  const [quality, setQuality] = useState(defaultSelection.quality);
  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(defaultSelection.scale); // 1 = 100%

  const [isRecompressing, setIsRecompressing] = useState(false);
  const recompressTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setFormat(defaultSelection.format);
    setQuality(defaultSelection.quality);
    setScale(defaultSelection.scale);
  }, [defaultSelection]);

  // Auto-compress when settings change
  useEffect(() => {
    if (!originalFile) return;

    // Clear previous timeout
    if (recompressTimeoutRef.current) {
      clearTimeout(recompressTimeoutRef.current);
    }

    setIsRecompressing(true);
    
    // Debounce to prevent lag during slider dragging
    recompressTimeoutRef.current = setTimeout(() => {
      compressImage();
    }, 300);

    return () => {
      if (recompressTimeoutRef.current) clearTimeout(recompressTimeoutRef.current);
    };
  }, [originalFile, quality, scale, format]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError(isKo ? "이미지 파일을 업로드해 주세요." : "Please upload an image file.");
      return;
    }
    setError(null);
    setOriginalFile(file);
    
    const url = URL.createObjectURL(file);
    setOriginalPreview(url);
    
    // Load dimensions
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      setTargetWidth(img.width);
      setScale(defaultSelection.scale);
    };

    setCompressedBlob(null);
    setCompressedPreview("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const compressImage = async () => {
    if (!originalFile || !originalDimensions.width) {
      setIsRecompressing(false);
      return;
    }
    
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

      const newWidth = Math.round(originalDimensions.width * scale);
      const aspectRatio = originalDimensions.height / originalDimensions.width;
      const newHeight = Math.round(newWidth * aspectRatio);

      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((b) => resolve(b), format, quality);
      });

      if (blob) {
        setCompressedBlob(blob);
        setCompressedPreview(URL.createObjectURL(blob));
      }
    } catch (err) {
      console.error(err);
      setError(isKo ? "압축 중 오류가 발생했습니다." : "An error occurred during compression.");
    } finally {
      setIsRecompressing(false);
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
    URL.revokeObjectURL(url);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleScaleChange = (val: number) => {
    setScale(val);
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
                <img src={originalPreview} alt={common.original} />
                <div className="info-overlay">
                  <div>{formatSize(originalFile.size)}</div>
                  <div>{originalDimensions.width} × {originalDimensions.height} px</div>
                </div>
              </div>
              
              <div className={`preview-box animated fadeIn ${isRecompressing ? 'recompressing' : ''}`}>
                <span className="badge accent">{common.compressed}</span>
                {compressedPreview ? (
                  <img src={compressedPreview} alt={common.compressed} className={isRecompressing ? 'blur' : ''} />
                ) : (
                  <div className="empty-preview">
                    <ImageIcon size={48} className="animate-pulse opacity-20" />
                  </div>
                )}
                
                {isRecompressing && (
                  <div className="loading-spinner-overlay">
                    <RefreshCw className="animate-spin text-accent" size={32} />
                  </div>
                )}

                {compressedBlob && (
                  <div className="info-overlay accent">
                    <div style={{ fontWeight: 800 }}>
                      {formatSize(compressedBlob.size)}
                      <span className="saving-percent">(-{Math.round((1 - compressedBlob.size / originalFile.size) * 100)}%)</span>
                    </div>
                    <div>{Math.round(originalDimensions.width * scale)} × {Math.round(originalDimensions.height * scale)} px</div>
                  </div>
                )}
              </div>
            </div>

            <div className="advanced-controls">
              <div className="control-group">
                <label>{common.quality}: {Math.round(quality * 100)}%</label>
                <input 
                  type="range" min="0.1" max="1.0" step="0.05" 
                  value={quality} 
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="premium-slider"
                />
              </div>

              <div className="control-group">
                <label>{common.dimensions}: {Math.round(scale * 100)}%</label>
                <div className="scale-buttons">
                  {[1, 0.75, 0.5, 0.25].map(s => (
                    <button 
                      key={s} 
                      className={`scale-btn ${scale === s ? 'active' : ''}`}
                      onClick={() => handleScaleChange(s)}
                    >
                      {s * 100}%
                    </button>
                  ))}
                </div>
                <input 
                  type="range" min="0.1" max="1.0" step="0.05" 
                  value={scale} 
                  onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
                  className="premium-slider accent"
                />
              </div>

              <div className="utility-bar">
                <div className="format-select">
                  <label>{common.format}</label>
                  <select 
                    value={format} 
                    onChange={(e) => setFormat(e.target.value as CompressionFormat)}
                  >
                    <option value="image/webp">WebP</option>
                    <option value="image/jpeg">JPG</option>
                    <option value="image/png">PNG</option>
                  </select>
                </div>

                <div className="action-buttons">
                  <button 
                    onClick={downloadImage} 
                    disabled={isRecompressing || !compressedBlob} 
                    className="button-accent main-action"
                  >
                    {isRecompressing ? <RefreshCw className="animate-spin" size={20} /> : <Download size={20} />}
                    {common.download}
                  </button>
                  
                  <button onClick={() => setOriginalFile(null)} className="button-ghost">
                    <RefreshCw size={18} />
                  </button>
                </div>
              </div>
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
        
        .advanced-controls {
          background: var(--panel-glass);
          border: 1px solid var(--panel-border);
          border-radius: 1.5rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
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
