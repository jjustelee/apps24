import table from "./korean-tax-table.json" with { type: "json" };

export function monthlyWithholding(monthlyTaxable: number, families: number, children: number): number | null {
  if (!Number.isFinite(monthlyTaxable) || monthlyTaxable < 0 || !Number.isInteger(families) || families < 1 || !Number.isInteger(children) || children < 0 || children >= families) return null;
  const index = Math.min(families, 11) - 1;
  let tax = 0;
  if (monthlyTaxable >= 10_000_000) {
    tax = table.atTenMillion[index];
    if (monthlyTaxable > 87_000_000) tax += 31_034_600 + (monthlyTaxable - 87_000_000) * 0.45;
    else if (monthlyTaxable > 45_000_000) tax += 13_394_600 + (monthlyTaxable - 45_000_000) * 0.42;
    else if (monthlyTaxable > 30_000_000) tax += 7_394_600 + (monthlyTaxable - 30_000_000) * 0.4;
    else if (monthlyTaxable > 28_000_000) tax += 6_610_600 + (monthlyTaxable - 28_000_000) * 0.98 * 0.4;
    else if (monthlyTaxable > 14_000_000) tax += 1_397_000 + (monthlyTaxable - 14_000_000) * 0.98 * 0.38;
    else if (monthlyTaxable > 10_000_000) tax += 25_000 + (monthlyTaxable - 10_000_000) * 0.98 * 0.35;
    if (families > 11) tax -= (table.atTenMillion[9] - table.atTenMillion[10]) * (families - 11);
  } else if (monthlyTaxable >= table.rows[0][0]) {
    const row = table.rows.find(row => monthlyTaxable >= row[0] && monthlyTaxable < row[1]);
    if (!row) return null;
    tax = row[index + 2];
    if (families > 11) tax -= (row[11] - row[12]) * (families - 11);
  }
  const childDeduction = children === 0 ? 0 : children === 1 ? 12_500 : 29_160 + (children - 2) * 25_000;
  return Math.floor(Math.max(0, tax - childDeduction) / 10) * 10;
}
