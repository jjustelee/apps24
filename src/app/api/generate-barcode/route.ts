import bwipjs from "bwip-js/node";
import { NextRequest, NextResponse } from "next/server";
import type * as BwipJs from "bwip-js/node";

const supportedBcids = new Set(bwipjs.symbolList.map((symbol) => symbol.bcid));

function normalizeFormat(format: string | null) {
  return (format ?? "code128").trim();
}

function createError(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const text = url.searchParams.get("text")?.trim() ?? "";
  const format = normalizeFormat(url.searchParams.get("format"));
  return generate(text, format);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (typeof body.text !== "string" || typeof body.format !== "string") return createError("Invalid input");
    return generate(body.text, normalizeFormat(body.format));
  } catch { return createError("Invalid input"); }
}

async function generate(text: string, format: string) {
  if (text.length > 4000) return createError("Input exceeds 4000 characters");

  if (!text.trim()) {
    return createError("텍스트를 입력하세요.");
  }

  if (!supportedBcids.has(format)) {
    return createError(`지원되지 않는 형식입니다: ${format}`);
  }

  try {
    const options: BwipJs.RenderOptions = {
      bcid: format,
      text,
      scale: 3,
      backgroundcolor: "FFFFFF",
      // QR modules occupy two points; bwip-js padding is in points, not modules.
      ...(format === "qrcode" ? { padding: 8 } : {}),
    };

    // 1D barcodes and some codes need height/includetext, but QR is best without them
    if (format !== "qrcode") {
      options.height = 10;
      options.includetext = true;
      options.textxalign = "center";
    }

    const buffer = await bwipjs.toBuffer(options);

    return NextResponse.json({
      success: true,
      image: `data:image/png;base64,${buffer.toString("base64")}`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return createError(`바코드 생성에 실패했습니다: ${message}`);
  }
}
