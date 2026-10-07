export type PercentageMode = "value" | "increase" | "decrease" | "discount";
export function calculatePercentage(mode: PercentageMode, base: number, next: number): number | null {
  if (!Number.isFinite(base) || !Number.isFinite(next)) return null;
  if ((mode === "increase" || mode === "decrease") && base === 0) return null;
  const result = mode === "value" ? base * next / 100
    : mode === "discount" ? base * (1 - next / 100)
      : mode === "increase" ? (next - base) / base * 100 : (base - next) / base * 100;
  return Number.isFinite(result) ? result : null;
}
