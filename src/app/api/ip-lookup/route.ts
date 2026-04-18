import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const execFileAsync = promisify(execFile);

export async function GET() {
  try {
    const { stdout } = await execFileAsync("curl", ["-sS", "--max-time", "8", "https://ipwho.is/"]);
    const data = JSON.parse(stdout);

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
