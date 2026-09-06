import test from "node:test";
import assert from "node:assert/strict";
import { analyzeText } from "../src/lib/text-metrics.ts";
import { formatJsonText } from "../src/lib/json-format.ts";
import { pixelsPerCentimeter, rulerTicks, CARD_ASPECT_RATIO } from "../src/lib/ruler-scale.ts";
import { REVIEWED_CONTENT, getReviewedToolText } from "../src/features/tools/reviewed-content.ts";
import { REVIEW_UI } from "../src/features/tools/review-ui.ts";
import { IP_COPY } from "../src/features/tools/ip-copy.ts";
import { getValidPreset } from "../src/features/tools/preset-options.ts";

const locales = ["en", "ko", "fr", "de", "es", "pt", "ja", "zh", "zh-TW", "ar"];

for (const locale of locales) {
  test(`${locale}: word counts, Unicode and complete reviewed content`, () => {
    const counts = analyzeText("Hello world", locale);
    assert.equal(counts.words, 2);
    assert.equal(counts.characterCount, 11);
    assert.equal(counts.charactersWithoutSpaces, 10);
    assert.equal(analyzeText("", locale).words, 0);
    assert.equal(analyzeText("e\u0301", locale).characterCount, 1);
    assert.equal(analyzeText("👨‍👩‍👧‍👦", locale).characterCount, 1);
    assert.equal(analyzeText("a\n\t b", locale).charactersWithoutSpaces, 2);
    assert.deepEqual(Object.keys(REVIEWED_CONTENT[locale]).sort(), ["imagecompressor", "iplookup", "jsonformatter", "ruler", "wordcounter"]);
    for (const [id, content] of Object.entries(REVIEWED_CONTENT[locale])) {
      for (const field of ["description", "longDescription", "usageContext", "howToUse", "seo"]) assert.ok(content[field]?.trim(), `${id}.${field}`);
      assert.equal(content.examples.length, 2);
      assert.equal(content.faq.length, 2);
      const merged = getReviewedToolText(locale, id);
      assert.ok(Object.keys(merged.references).length);
      assert.equal(merged.whyUse, "");
      assert.equal(merged.relatedTools, "");
    }
    for (const copy of [REVIEW_UI[locale], IP_COPY[locale]]) {
      for (const value of Object.values(copy)) assert.ok(value.trim());
    }
    assert.deepEqual(Object.keys(IP_COPY[locale]), Object.keys(IP_COPY.en));
  });
}

test("word count fallback is explicit and handles empty text", (t) => {
  t.mock.property(Intl, "Segmenter", undefined);
  assert.equal(analyzeText("Hello world", "en").hasSegmenter, false);
  assert.equal(analyzeText("Hello world", "en").words, 2);
  assert.equal(analyzeText("  \n", "en").words, 0);
  assert.equal(analyzeText("😀", "en").characterCount, 1);
});

test("JSON formatting preserves values, order, duplicate names and large integers", () => {
  const input = '{"z":9007199254740993,"z":-0,"a":1e+400,"s":"a  b\\n\\\"x\\\"","empty":[],"obj":{}}';
  const result = formatJsonText(input);
  assert.ok(result.includes('"z": 9007199254740993'));
  assert.ok(result.includes('"z": -0'));
  assert.ok(result.includes('"a": 1e+400'));
  const tokens = text => text.match(/"(?:\\.|[^"\\])*"|[^\s]/g);
  assert.deepEqual(tokens(result), tokens(input));
  assert.equal(formatJsonText(result), result);
  for (const input of ["null", "true", "123", '"hi"', "[]", "{}"]) assert.equal(formatJsonText(input), input);
});

test("invalid JSON is not silently repaired", () => {
  for (const value of ["", '{"a":1,}', "{'a':1}", '{"a":undefined}', "[1 2]", '{/*x*/"a":1}']) {
    assert.throws(() => formatJsonText(value), SyntaxError);
  }
});

test("ruler reference dimensions and tick origin agree with displayed examples", () => {
  const scale = pixelsPerCentimeter(171);
  assert.equal(scale.toFixed(2), "19.98");
  assert.equal((scale * 5).toFixed(2), "99.88");
  assert.ok(Math.abs(CARD_ASPECT_RATIO - 85.6 / 53.98) < 1e-10);
  const ticks = rulerTicks(37, 400, scale);
  assert.equal(ticks.find(tick => tick.index === 0).position, 37);
  assert.ok(ticks.every(tick => tick.position >= 0 && tick.position <= 400));
  assert.ok(Math.abs(ticks.find(tick => tick.index === 10).position - 37 - scale) < 1e-10);
  const inches = rulerTicks(37, 400, scale * 2.54);
  assert.ok(Math.abs(inches.find(tick => tick.index === 10).position - 37 - scale * 2.54) < 1e-10);
  for (const invalid of [NaN, Infinity, 0, 79, 1001]) assert.throws(() => pixelsPerCentimeter(invalid), RangeError);
});

test("preset validation rejects unknown values and prototype property names", () => {
  for (const slug of ["image-compressor", "unit-converter", "pixel-converter", "base64-encoder-decoder", "json-formatter", "percentage-calculator", "qrgenerator", "background-remover", "barcodegenerator", "constructor"]) {
    for (const value of ["constructor", "__proto__", "toString", "not-a-preset", undefined, ["a", "b"]]) assert.equal(getValidPreset(slug, value), undefined);
  }
});
