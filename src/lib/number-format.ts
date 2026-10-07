export function formatDecimal(value: number, precision: number): string {
  if (!Number.isFinite(value)) return "";
  const fixed = value.toFixed(precision);
  const trimmed = fixed.includes(".") ? fixed.replace(/0+$/, "").replace(/\.$/, "") : fixed;
  return trimmed === "-0" ? "0" : trimmed;
}

export function parseLocalizedAmount(input: string, locale: string): number | null {
  const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
  const decimal = parts.find(part => part.type === "decimal")?.value ?? ".";
  const group = parts.find(part => part.type === "group")?.value ?? ",";
  let value = input.trim().replace(/[\u0660-\u0669\u06f0-\u06f9]/g, digit =>
    String(digit.charCodeAt(0) - (digit.charCodeAt(0) <= 0x0669 ? 0x0660 : 0x06f0)),
  );
  if (!value) return null;
  if (locale.startsWith("ar")) value = value.replace(/٫/g, decimal).replace(/٬/g, group);
  if (/\s/u.test(group)) value = value.replace(/[ \u00a0\u202f]/g, group);
  if (decimal === "٫") value = value.replace(/\./g, decimal);
  const sign = /^[+-]/.test(value) ? value[0] : "";
  if (sign) value = value.slice(1);
  const pieces = value.split(decimal);
  if (pieces.length > 2 || (pieces.length === 2 && !/^\d+$/.test(pieces[1]))) return null;
  const groups = pieces[0].split(group);
  if (groups.length > 1 && (!/^\d{1,3}$/.test(groups[0]) || groups.slice(1).some(chunk => !/^\d{3}$/.test(chunk)))) return null;
  const integer = groups.join("");
  if (!/^\d+$/.test(integer)) return null;
  const parsed = Number(`${sign}${integer}${pieces.length === 2 ? `.${pieces[1]}` : ""}`);
  return Number.isFinite(parsed) ? parsed : null;
}
