import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const response = await fetch("https://ipwho.is/", {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error("IP lookup request failed");
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "IP 정보를 가져올 수 없습니다.",
      },
      { status: 502 },
    );
  }
}
