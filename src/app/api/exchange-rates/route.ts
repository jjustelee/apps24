import { NextResponse } from "next/server";

export const runtime = "nodejs";

type FrankfurterRate = {
  date?: string;
  base?: string;
  quote?: string;
  rate?: number;
};

const FRANKFURTER_RATES_ENDPOINT = "https://api.frankfurter.dev/v2/rates";
const DEFAULT_QUOTES = ["KRW", "EUR", "JPY", "CNY", "GBP", "CAD"];

function normalizeCurrency(value: string | null, fallback: string) {
  const normalized = (value ?? fallback).trim().toUpperCase();
  return /^[A-Z]{3}$/.test(normalized) ? normalized : fallback;
}

function normalizeQuotes(value: string | null, base: string) {
  const quotes = (value ? value.split(",") : DEFAULT_QUOTES)
    .map((quote) => normalizeCurrency(quote, ""))
    .filter((quote) => quote && quote !== base);

  return [...new Set(quotes)].slice(0, 12);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const base = normalizeCurrency(searchParams.get("base"), "USD");
  const quotes = normalizeQuotes(searchParams.get("quotes"), base);

  if (!quotes.length) {
    return NextResponse.json({
      success: true,
      provider: {
        name: "Frankfurter",
        url: "https://frankfurter.dev/",
      },
      base,
      date: new Date().toISOString().slice(0, 10),
      rates: { [base]: 1 },
      fetchedAt: new Date().toISOString(),
    });
  }

  const apiUrl = new URL(FRANKFURTER_RATES_ENDPOINT);
  apiUrl.searchParams.set("base", base);
  apiUrl.searchParams.set("quotes", quotes.join(","));

  try {
    const response = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`Frankfurter request failed: ${response.status}`);
    }

    const rows = (await response.json()) as FrankfurterRate[];
    const rates = rows.reduce<Record<string, number>>((acc, row) => {
      if (row.quote && typeof row.rate === "number" && Number.isFinite(row.rate)) {
        acc[row.quote] = row.rate;
      }

      return acc;
    }, {});

    return NextResponse.json(
      {
        success: true,
        provider: {
          name: "Frankfurter",
          url: "https://frankfurter.dev/",
        },
        base,
        date: rows[0]?.date ?? null,
        rates,
        fetchedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Exchange rates could not be loaded.",
      },
      { status: 502 },
    );
  }
}
