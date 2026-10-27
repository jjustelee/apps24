export type BarcodeInputError = "input_too_long" | "ean_length" | "ean_digits" | "ean_checksum" | "code39_characters";

export function validateBarcodeInput(text: string, format: string): BarcodeInputError | null {
  if (text.length > 4000) return "input_too_long";
  if (format === "ean13") {
    if (!/^\d*$/.test(text)) return "ean_digits";
    if (text.length !== 12 && text.length !== 13) return "ean_length";
    if (text.length === 13) {
      const sum = [...text.slice(0, 12)].reduce((total, digit, index) => total + Number(digit) * (index % 2 ? 3 : 1), 0);
      if ((10 - sum % 10) % 10 !== Number(text[12])) return "ean_checksum";
    }
  }
  if (format === "code39" && !/^[A-Z0-9 .$/+%-]*$/.test(text)) return "code39_characters";
  return null;
}
