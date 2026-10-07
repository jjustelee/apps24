import test from "node:test";
import assert from "node:assert/strict";
import { formatDecimal, parseLocalizedAmount } from "../src/lib/number-format.ts";
import { compareTextLines } from "../src/lib/text-diff.ts";
import { calculatePercentage } from "../src/lib/percentage.ts";
import { monthlyWithholding } from "../src/lib/korean-payroll.ts";
import table from "../src/lib/korean-tax-table.json" with { type: "json" };
import { encodeBase64Text, decodeBase64Text } from "../src/lib/base64-text.ts";
import { GUIDES, GUIDE_UI } from "../src/features/guides/content.ts";
import { analyzeText } from "../src/lib/text-metrics.ts";
import { formatJsonText } from "../src/lib/json-format.ts";
import { getToolText } from "../src/features/tools/copy.ts";
import { TOOLS } from "../src/features/tools/registry.ts";
import { getFunctionalContent } from "../src/features/tools/functional-content.ts";

test("implementation-specific guidance covers 17 tools in every language without duplicated body", () => {
  let tools = 0;
  for (const tool of TOOLS) {
    if (!getFunctionalContent("en", tool.id).longDescription) continue;
    tools++;
    for (const locale of Object.keys(GUIDE_UI)) {
      const text = getFunctionalContent(locale, tool.id);
      assert.ok(text.longDescription?.trim(), `${locale}.${tool.id}`);
      assert.ok(text.examples?.length >= 2);
      assert.equal(text.seo, "");
      assert.ok(Object.values(text.references).every(url => url.startsWith("https://")));
    }
  }
  assert.equal(tools, 17);
});

test("integer conversion results retain trailing zeros", () => {
  for (const value of [0, 10, 100, 1000, -100]) assert.equal(formatDecimal(value, 0), String(value));
  assert.equal(formatDecimal(160 / 16, 0), "10");
  assert.equal(formatDecimal(1 / 0.01, 0), "100");
  assert.equal(formatDecimal(10.5, 4), "10.5");
  assert.equal(formatDecimal(-0.0001, 2), "0");
  assert.equal(formatDecimal(Infinity, 2), "");
});

test("QR blank and failure states reuse the current language's existing copy", async () => {
  const tool = TOOLS.find(tool => tool.id === "qrgenerator");
  for (const locale of Object.keys(GUIDE_UI)) {
    const text = await getToolText(locale, tool);
    for (const key of ["qrHint", "generationFailed", "generationError"]) assert.ok(text[key]?.trim(), `${locale}.${key}`);
  }
});

test("Base64 distinguishes invalid syntax from non-UTF-8 bytes", () => {
  assert.equal(encodeBase64Text("안녕하세요"), "7JWI64WV7ZWY7IS47JqU");
  assert.equal(decodeBase64Text(encodeBase64Text("é 😀")), "é 😀");
  assert.throws(() => decodeBase64Text("/w=="), /utf8/);
  assert.throws(() => decodeBase64Text("%%%"), /base64/);
});

test("published guides have every locale and reproducible numeric examples", () => {
  for (const locale of Object.keys(GUIDE_UI)) {
    for (const guide of GUIDES) {
      assert.ok(guide.copy[locale]);
      for (const text of Object.values(guide.copy[locale]).flat()) assert.ok(text.trim());
    }
    for (const [input, visible, units, bytes] of [["Hello world",11,11,11],["é",1,1,2],["e\u0301",1,2,3],["👨‍👩‍👧‍👦",1,11,25],["A\nB",3,3,3]]) {
      assert.equal(analyzeText(input, locale).characterCount, visible);
      assert.equal(input.length, units);
      assert.equal(new TextEncoder().encode(input).length, bytes);
    }
  }
  assert.equal(JSON.parse('{"id":9007199254740993}').id.toString(), "9007199254740992");
  assert.ok(formatJsonText('{"id":9007199254740993}').includes("9007199254740993"));
});

test("percentage change never invents a result for a zero base", () => {
  assert.equal(calculatePercentage("increase", 0, 100), null);
  assert.equal(calculatePercentage("decrease", 0, 0), null);
  assert.equal(calculatePercentage("value", 200, 25), 50);
  assert.equal(calculatePercentage("increase", 100, 120), 20);
  assert.equal(calculatePercentage("discount", 100, 25), 75);
  assert.equal(calculatePercentage("value", Infinity, 25), null);
});

test("payroll matches official NTS example and every imported table interval", () => {
  assert.equal(monthlyWithholding(3_500_000, 4, 2), 20_180);
  assert.equal(monthlyWithholding(3_500_000, 1, 0), 127_220);
  assert.equal(monthlyWithholding(0, 1, 0), 0);
  assert.equal(monthlyWithholding(3_500_000, 1, 1), null);
  assert.equal(monthlyWithholding(3_500_000, 2.5, 0), null);
  for (const row of table.rows) {
    for (let family = 1; family <= 11; family++) {
      assert.equal(monthlyWithholding(row[0], family, 0), row[family + 1]);
      assert.equal(monthlyWithholding(row[1] - 1, family, 0), row[family + 1]);
    }
  }
  assert.equal(monthlyWithholding(10_000_000, 1, 0), 1_507_400);
  assert.equal(monthlyWithholding(14_000_000, 1, 0), 2_904_400);
  assert.equal(monthlyWithholding(10_000_000, 12, 0), 930_840);
});

test("currency inputs respect decimal and grouping separators", () => {
  for (const locale of ["fr", "de", "es", "pt"]) assert.equal(parseLocalizedAmount("1,5", locale), 1.5);
  assert.equal(parseLocalizedAmount("1 000,50", "fr"), 1000.5);
  assert.equal(parseLocalizedAmount("1.000,50", "de"), 1000.5);
  assert.equal(parseLocalizedAmount("1,000.50", "en"), 1000.5);
  assert.equal(parseLocalizedAmount("١٬٠٠٠٫٥٠", "ar"), 1000.5);
  assert.equal(parseLocalizedAmount("1000.50", "ar"), 1000.5);
  for (const input of ["", "hello", "1,5", "12,34.50", "1.2.3", "Infinity"]) assert.equal(parseLocalizedAmount(input, "en"), null);
});

test("a line insertion does not mark following lines as changed", () => {
  assert.deepEqual(compareTextLines("A\nB\nC", "X\nA\nB\nC"), [
    { type: "added", left: null, right: "X" },
    ...["A", "B", "C"].map(line => ({ type: "match", left: line, right: line })),
  ]);
  assert.deepEqual(compareTextLines("A\nB\nC", "A\nC").map(row => row.type), ["match", "removed", "match"]);
  assert.deepEqual(compareTextLines("A\nB", "A\nX").map(row => row.type), ["match", "changed"]);
  assert.deepEqual(compareTextLines("A\n\nB", "A\nB")[1], { type: "removed", left: "", right: null });
  assert.deepEqual(compareTextLines("", "X"), [{ type: "added", left: null, right: "X" }]);
  assert.deepEqual(compareTextLines("A\r\nB", "A\nB").map(row => row.type), ["match", "match"]);
  assert.equal(compareTextLines("A\n".repeat(2500), "B\n".repeat(2500)), null);
});
