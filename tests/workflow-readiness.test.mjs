import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateBarcodeInput } from "../src/lib/barcode-validation.ts";
import { TOOL_FEEDBACK } from "../src/features/tools/feedback-copy.ts";
import { PERCENTAGE_COPY } from "../src/features/tools/percentage-copy.ts";
import { LOCALES } from "../src/lib/site.ts";
import { POST as barcode } from "../src/app/api/generate-barcode/route.ts";
import { compareTextLines } from "../src/lib/text-diff.ts";
import { validateBackgroundImage, MAX_BACKGROUND_IMAGE_BYTES } from "../src/lib/background-image-validation.ts";
import { parseLocalizedAmount } from "../src/lib/number-format.ts";

test("interaction and error translations cover all supported languages", () => {
  for (const locale of LOCALES) {
    assert.deepEqual(Object.keys(TOOL_FEEDBACK[locale]), Object.keys(TOOL_FEEDBACK.en));
    assert.deepEqual(Object.keys(PERCENTAGE_COPY[locale].descriptions), ["value", "increase", "decrease", "discount"]);
    for (const value of [...Object.values(TOOL_FEEDBACK[locale]), ...Object.values(PERCENTAGE_COPY[locale].descriptions)]) assert.ok(value.trim());
    if (locale !== "en") {
      assert.notEqual(PERCENTAGE_COPY[locale].inputs, PERCENTAGE_COPY.en.inputs);
      assert.notEqual(TOOL_FEEDBACK[locale].imageType, TOOL_FEEDBACK.en.imageType);
    }
  }
});

test("EAN-13 length, digits and checksum errors are distinct", async () => {
  const cases = [
    ["400638133393", "ean13", null], ["4006381333931", "ean13", null],
    ["4006381333932", "ean13", "ean_checksum"], ["123", "ean13", "ean_length"],
    ["40063813339A1", "ean13", "ean_digits"], ["ABC-123", "code39", null],
    ["abc-123", "code39", "code39_characters"], ["x".repeat(4001), "qrcode", "input_too_long"],
  ];
  for (const [text, format, expected] of cases) {
    assert.equal(validateBarcodeInput(text, format), expected);
    const response = await barcode(new Request("http://localhost/api/generate-barcode", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, format }),
    }));
    const data = await response.json();
    assert.equal(response.status, expected ? 400 : 200);
    if (expected) assert.equal(data.code, expected);
  }
});

test("percentage labels and category navigation retain their verified ordering", () => {
  const percent = readFileSync(new URL("../src/features/tools/implementations/percentage-calculator.tsx", import.meta.url), "utf8");
  for (const id of ["percentage-first-value", "percentage-second-value"]) {
    assert.ok(percent.includes(`htmlFor="${id}"`));
    assert.ok(percent.includes(`id="${id}"`));
  }
  assert.ok(!percent.includes('locale === "ko"'));
  const category = readFileSync(new URL("../src/components/category-hub-page.tsx", import.meta.url), "utf8");
  assert.ok(category.indexOf('className="tool-grid"') < category.indexOf('className="category-editorial-section"'));
});

test("published insertion and newline examples match the comparison algorithm", () => {
  assert.deepEqual(compareTextLines("alpha\nbeta\ngamma", "alpha\ninserted\nbeta\ngamma").map(row => row.type), ["match", "added", "match", "match"]);
  assert.deepEqual(compareTextLines("alpha\r\nbeta", "alpha\nbeta").map(row => row.type), ["match", "match"]);
  assert.equal(compareTextLines("alpha", "alpha ")[0].type, "changed");
});

test("background file checks distinguish unsupported formats and the exact size boundary", () => {
  assert.equal(MAX_BACKGROUND_IMAGE_BYTES, 10_485_760);
  assert.equal(validateBackgroundImage({ type: "image/gif", size: 1000 }), "imageType");
  assert.equal(validateBackgroundImage({ type: "image/png", size: 10_485_760 }), null);
  assert.equal(validateBackgroundImage({ type: "image/png", size: 10_485_761 }), "imageSize");
  assert.equal(validateBackgroundImage({ type: "image/webp", size: 1000 }), null);
  const worker = readFileSync(new URL("../src/features/tools/implementations/background-remover.worker.ts", import.meta.url), "utf8");
  assert.ok(worker.includes('code: modelLoaded ? "modelProcess" : "modelDownload"'));
  assert.ok(!worker.includes("error.message"));
});

test("downloadable workflow evidence matches current outputs and marks simulated rates", async () => {
  const evidence = JSON.parse(readFileSync(new URL("../public/guides/workflow-results.json", import.meta.url), "utf8"));
  assert.equal(evidence.currency.hypothetical, true);
  assert.equal(evidence.currency.amount * evidence.currency.rates.EUR, evidence.currency.resultEUR);
  for (const [locale, input] of [["en", "1,234.5"], ["fr", "1 234,5"], ["de", "1.234,5"]]) assert.equal(parseLocalizedAmount(input, locale), 1234.5);
  assert.deepEqual(compareTextLines(evidence.diff.original, evidence.diff.modified), evidence.diff.inserted);
  const png = readFileSync(new URL("../public/guides/barcode-ean13.png", import.meta.url));
  assert.equal(png.readUInt32BE(16), evidence.barcode.width);
  assert.equal(png.readUInt32BE(20), evidence.barcode.height);
  assert.equal(png.length, evidence.barcode.bytes);
  for (const file of evidence.backgroundFileValidation) assert.equal(validateBackgroundImage(file), file.code);
  const result = await barcode(new Request("http://localhost/api/generate-barcode", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: evidence.barcode.input, format: "ean13" }),
  }));
  assert.equal((await result.json()).success, true);
});
