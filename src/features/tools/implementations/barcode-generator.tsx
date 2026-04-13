"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

type BarcodeFormatOption = {
  label: string;
  value: string;
};

type BarcodeToolData = {
  formats: BarcodeFormatOption[];
};

const FORMAT_DESCRIPTIONS: Record<string, string> = {
  qrcode: "Encode text or links into a QR code.",
  code128: "Encode alphanumeric labels, inventory IDs, and shipping codes.",
  code39: "Encode uppercase labels and short operational codes.",
  code93: "Encode compact uppercase data with check digits.",
  ean13: "Encode retail product numbers with 13 digits.",
  ean8: "Encode shorter retail product numbers with 8 digits.",
  upca: "Encode U.S. retail product numbers with 12 digits.",
  upce: "Encode compact U.S. retail product numbers.",
  pdf417: "Create stacked 2D barcodes for larger data payloads.",
  datamatrix: "Create dense 2D symbols for labels and parts.",
  azteccode: "Create high-density 2D symbols with a central finder pattern.",
  raw: "Encode a raw 1D symbol stream for advanced use cases.",
};

function getFormatDescription(format: string, label: string) {
  return FORMAT_DESCRIPTIONS[format] ?? `Create a ${label} barcode format.`;
}

export function BarcodeGeneratorTool({
  tool,
  toolData,
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

  const [format, setFormat] = useState(
    availableFormats[0]?.value ?? (isQrTool ? "qrcode" : "code128"),
  );
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [requestError, setRequestError] = useState("");
  const [dirty, setDirty] = useState(false);
  const selectedFormat =
    availableFormats.find((item) => item.value === format)?.value ??
    availableFormats[0]?.value ??
    (isQrTool ? "qrcode" : "code128");

  useEffect(() => {
    if (!text.trim()) {
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `/generate-barcode?text=${encodeURIComponent(text)}&format=${encodeURIComponent(selectedFormat)}`,
          { signal: controller.signal },
        );
        const payload = (await response.json()) as
          | { success: true; image: string }
          | { success: false; message: string };

        if (!response.ok || !payload.success) {
          setRequestError(payload.success ? "Barcode generation failed." : payload.message);
          return;
        }

        setRequestError("");
        setImage(payload.image);
      } catch (fetchError) {
        if ((fetchError as { name?: string }).name === "AbortError") {
          return;
        }
        setRequestError("Unable to generate the barcode right now.");
      }
    }, 180);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [selectedFormat, text]);

  const description =
    availableFormats.find((item) => item.value === selectedFormat)?.label ?? selectedFormat;
  const emptyMessage = dirty && !text.trim() ? "Please enter text." : "";
  const previewImage = text.trim() ? image : "";
  const statusMessage = text.trim() ? requestError : emptyMessage;

  return (
    <div className="tool-stack">
      <div className="tool-form">
        <div className="tool-field">
          <label className="tool-label" htmlFor="barcode-format">
            Type
          </label>
          <select
            id="barcode-format"
            className="tool-select"
            value={selectedFormat}
            onChange={(event) => setFormat(event.target.value)}
            disabled={isQrTool}
          >
            {availableFormats.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <p className="tool-note">{getFormatDescription(selectedFormat, description)}</p>
        </div>

        <div className="tool-field">
          <label className="tool-label" htmlFor="barcode-input">
            {isQrTool ? "Enter QR Text" : "Enter Barcode Text"}
          </label>
          <input
            id="barcode-input"
            className="tool-input"
            inputMode="text"
            placeholder="Enter text"
            value={text}
            onChange={(event) => {
              setDirty(true);
              setText(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="tool-output">
        <div className="tool-output-card" aria-live="polite">
          {previewImage ? (
            <img
              src={previewImage}
              alt={`${description} preview`}
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          ) : (
            <p className="tool-muted">
              {isQrTool
                ? "Type a URL or text to generate a QR code."
                : "Type text to generate a barcode."}
            </p>
          )}
        </div>

        {statusMessage ? (
          <p className="tool-note" style={{ color: "#dc2626" }}>
            {statusMessage}
          </p>
        ) : null}

        {isQrTool ? (
          <p className="tool-note">
            Need more barcode formats?{" "}
            <Link href="/en/barcodegenerator">Open the full barcode generator.</Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
