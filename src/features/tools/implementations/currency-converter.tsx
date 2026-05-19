"use client";

import { useEffect, useMemo, useState } from "react";
import type { ToolRendererProps } from "@/features/tools/implementations";

type ExchangeRateResponse = {
  success: boolean;
  message?: string;
  provider?: {
    name: string;
    url: string;
  };
  base?: string;
  date?: string | null;
  rates?: Record<string, number>;
};

type UiCopy = {
  amount: string;
  from: string;
  to: string;
  result: string;
  quickRates: string;
  updated: string;
  source: string;
  notice: string;
  swap: string;
  loading: string;
  unavailable: string;
};

const CURRENCIES = [
  "USD",
  "KRW",
  "EUR",
  "JPY",
  "CNY",
  "GBP",
  "CAD",
  "AUD",
  "CHF",
  "HKD",
  "SGD",
  "THB",
  "TWD",
  "VND",
  "PHP",
  "IDR",
  "MYR",
  "INR",
  "BRL",
  "MXN",
  "AED",
];

const DEFAULT_MARKET_QUOTES = ["KRW", "EUR", "JPY", "CNY", "GBP", "CAD"];

const UI_COPY: Record<string, UiCopy> = {
  ko: {
    amount: "금액",
    from: "변환 전",
    to: "변환 후",
    result: "환산 결과",
    quickRates: "주요 환율",
    updated: "기준일",
    source: "제공원",
    notice: "실제 은행, 카드사, 환전소, 송금 서비스의 환율과 수수료는 다를 수 있습니다.",
    swap: "통화 바꾸기",
    loading: "환율을 불러오는 중입니다.",
    unavailable: "환율을 불러오지 못했습니다. 잠시 후 다시 시도하세요.",
  },
  fr: {
    amount: "Montant",
    from: "De",
    to: "Vers",
    result: "Résultat",
    quickRates: "Taux principaux",
    updated: "Date de référence",
    source: "Source",
    notice: "Les taux bancaires, cartes, bureaux de change et frais de transfert peuvent être différents.",
    swap: "Inverser",
    loading: "Chargement des taux de change.",
    unavailable: "Impossible de charger les taux. Réessayez plus tard.",
  },
  de: {
    amount: "Betrag",
    from: "Von",
    to: "Nach",
    result: "Ergebnis",
    quickRates: "Wichtige Kurse",
    updated: "Referenzdatum",
    source: "Quelle",
    notice: "Bank-, Karten-, Wechselstellen- und Überweisungsgebühren können abweichen.",
    swap: "Währungen tauschen",
    loading: "Wechselkurse werden geladen.",
    unavailable: "Wechselkurse konnten nicht geladen werden. Bitte später erneut versuchen.",
  },
  es: {
    amount: "Importe",
    from: "Desde",
    to: "A",
    result: "Resultado",
    quickRates: "Tipos principales",
    updated: "Fecha de referencia",
    source: "Fuente",
    notice: "Los tipos de bancos, tarjetas, casas de cambio y comisiones de envío pueden variar.",
    swap: "Intercambiar",
    loading: "Cargando tipos de cambio.",
    unavailable: "No se pudieron cargar los tipos. Inténtalo de nuevo más tarde.",
  },
  pt: {
    amount: "Valor",
    from: "De",
    to: "Para",
    result: "Resultado",
    quickRates: "Cotações principais",
    updated: "Data de referência",
    source: "Fonte",
    notice: "Taxas de bancos, cartões, casas de câmbio e transferências podem ser diferentes.",
    swap: "Trocar moedas",
    loading: "Carregando taxas de câmbio.",
    unavailable: "Não foi possível carregar as taxas. Tente novamente mais tarde.",
  },
  ar: {
    amount: "المبلغ",
    from: "من",
    to: "إلى",
    result: "النتيجة",
    quickRates: "أسعار رئيسية",
    updated: "تاريخ المرجع",
    source: "المصدر",
    notice: "قد تختلف أسعار البنوك والبطاقات ومكاتب الصرافة ورسوم التحويل.",
    swap: "تبديل العملات",
    loading: "يتم تحميل أسعار الصرف.",
    unavailable: "تعذر تحميل أسعار الصرف. حاول مرة أخرى لاحقًا.",
  },
  zh: {
    amount: "金额",
    from: "从",
    to: "到",
    result: "换算结果",
    quickRates: "主要汇率",
    updated: "基准日期",
    source: "来源",
    notice: "银行、银行卡、兑换点和汇款服务的实际汇率及手续费可能不同。",
    swap: "交换货币",
    loading: "正在加载汇率。",
    unavailable: "无法加载汇率。请稍后再试。",
  },
  "zh-TW": {
    amount: "金額",
    from: "從",
    to: "到",
    result: "換算結果",
    quickRates: "主要匯率",
    updated: "基準日期",
    source: "來源",
    notice: "銀行、信用卡、換匯點與匯款服務的實際匯率及手續費可能不同。",
    swap: "交換幣別",
    loading: "正在載入匯率。",
    unavailable: "無法載入匯率。請稍後再試。",
  },
  ja: {
    amount: "金額",
    from: "変換元",
    to: "変換先",
    result: "換算結果",
    quickRates: "主要レート",
    updated: "基準日",
    source: "提供元",
    notice: "銀行、カード会社、両替所、送金サービスの実際のレートや手数料とは異なる場合があります。",
    swap: "通貨を入れ替え",
    loading: "為替レートを読み込んでいます。",
    unavailable: "為替レートを読み込めませんでした。しばらくしてからお試しください。",
  },
  en: {
    amount: "Amount",
    from: "From",
    to: "To",
    result: "Converted amount",
    quickRates: "Key rates",
    updated: "Reference date",
    source: "Source",
    notice: "Actual bank, card, exchange desk, and transfer service rates or fees may differ.",
    swap: "Swap currencies",
    loading: "Loading exchange rates.",
    unavailable: "Exchange rates could not be loaded. Please try again later.",
  },
};

const POPULAR_DEFAULTS: Record<string, { from: string; to: string }> = {
  ko: { from: "USD", to: "KRW" },
  ja: { from: "USD", to: "JPY" },
  zh: { from: "USD", to: "CNY" },
  "zh-TW": { from: "USD", to: "TWD" },
  ar: { from: "USD", to: "AED" },
  en: { from: "USD", to: "EUR" },
};

function getCopy(locale: string) {
  return UI_COPY[locale] ?? UI_COPY.en;
}

function getDefaultPair(locale: string) {
  return POPULAR_DEFAULTS[locale] ?? POPULAR_DEFAULTS.en;
}

function parseAmount(value: string) {
  const normalized = value.replace(/,/g, "").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value: number, locale: string, maximumFractionDigits = 2) {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(value);
}

function getCurrencyName(code: string, locale: string) {
  try {
    return new Intl.DisplayNames([locale], { type: "currency" }).of(code) ?? code;
  } catch {
    return code;
  }
}

function getCurrencyLabel(code: string, locale: string) {
  return `${code} · ${getCurrencyName(code, locale)}`;
}

function getMarketQuotes(base: string, target: string) {
  return [...new Set([target, ...DEFAULT_MARKET_QUOTES].filter((code) => code !== base))].slice(0, 6);
}

export function CurrencyConverterTool({ locale, toolText }: ToolRendererProps) {
  const copy = getCopy(locale);
  const defaults = getDefaultPair(locale);
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState(defaults.from);
  const [to, setTo] = useState(defaults.to);
  const [data, setData] = useState<ExchangeRateResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const quotes = useMemo(() => getMarketQuotes(from, to), [from, to]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRates() {
      setIsLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          base: from,
          quotes: quotes.join(","),
        });
        const response = await fetch(`/api/exchange-rates?${params}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        const result = (await response.json()) as ExchangeRateResponse;

        if (!response.ok || !result.success) {
          throw new Error(result.message ?? "Exchange rates could not be loaded.");
        }

        setData(result);
      } catch (loadError) {
        if ((loadError as Error).name !== "AbortError") {
          setError(copy.unavailable);
          setData(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadRates();
    return () => controller.abort();
  }, [copy.unavailable, from, quotes]);

  const rate = from === to ? 1 : data?.rates?.[to] ?? null;
  const numericAmount = parseAmount(amount);
  const convertedAmount = rate === null ? null : numericAmount * rate;

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="currency-converter">
      <section className="currency-converter-panel" aria-label={toolText?.title ?? "Currency Converter"}>
        <div className="currency-converter-card">
          <div className="currency-field">
            <label htmlFor="currency-amount">{copy.amount}</label>
            <input
              id="currency-amount"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="1000"
            />
          </div>

          <div className="currency-select-grid">
            <label className="currency-select-field">
              <span>{copy.from}</span>
              <select value={from} onChange={(event) => setFrom(event.target.value)}>
                {CURRENCIES.map((currency) => (
                  <option key={currency} value={currency}>
                    {getCurrencyLabel(currency, locale)}
                  </option>
                ))}
              </select>
            </label>

            <button type="button" className="currency-swap-button" onClick={swapCurrencies} aria-label={copy.swap}>
              ⇄
            </button>

            <label className="currency-select-field">
              <span>{copy.to}</span>
              <select value={to} onChange={(event) => setTo(event.target.value)}>
                {CURRENCIES.map((currency) => (
                  <option key={currency} value={currency}>
                    {getCurrencyLabel(currency, locale)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="currency-result-card" aria-live="polite">
            <span>{copy.result}</span>
            <strong>
              {isLoading
                ? copy.loading
                : convertedAmount === null
                  ? "-"
                  : `${formatNumber(convertedAmount, locale, 2)} ${to}`}
            </strong>
            <small>
              {rate === null
                ? error || copy.unavailable
                : `1 ${from} = ${formatNumber(rate, locale, 6)} ${to}`}
            </small>
          </div>
        </div>

        <aside className="currency-rate-board">
          <div className="currency-board-heading">
            <span>{copy.quickRates}</span>
            <strong>{from}</strong>
          </div>

          <div className="currency-rate-list">
            {quotes.map((quote) => (
              <div key={quote} className={quote === to ? "active" : ""}>
                <span>
                  {from}/{quote}
                </span>
                <strong>
                  {isLoading ? "..." : data?.rates?.[quote] ? formatNumber(data.rates[quote], locale, 6) : "-"}
                </strong>
              </div>
            ))}
          </div>

          <div className="currency-meta-card">
            <div>
              <span>{copy.updated}</span>
              <strong>{data?.date ?? "-"}</strong>
            </div>
            <div>
              <span>{copy.source}</span>
              <strong>{data?.provider?.name ?? "Frankfurter"}</strong>
            </div>
          </div>
        </aside>
      </section>

      <p className="currency-notice">{copy.notice}</p>
    </div>
  );
}
