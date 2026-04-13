import bwipjs from "bwip-js/node";
import { NextRequest, NextResponse } from "next/server";

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

  if (!text) {
    return createError("텍스트를 입력하세요.");
  }

  if (!supportedBcids.has(format)) {
    return createError(`지원되지 않는 형식입니다: ${format}`);
  }

  try {
    const buffer = await bwipjs.toBuffer({
      bcid: format,
      text,
      scale: 3,
      height: 10,
      includetext: true,
      backgroundcolor: "FFFFFF",
    });

    return NextResponse.json({
      success: true,
      image: `data:image/png;base64,${buffer.toString("base64")}`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return createError(`바코드 생성에 실패했습니다: ${message}`);
  }
}
