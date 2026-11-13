import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import bwipjs from "bwip-js/node";
import { GUIDES } from "../src/features/guides/content.ts";
import { EXTRA_GUIDES, QR_FORMAT_SAMPLES } from "../src/features/guides/extra-guides.ts";
import { calculatePercentage } from "../src/lib/percentage.ts";
import { LOCALES } from "../src/lib/site.ts";
import { pixelsPerCentimeter } from "../src/lib/ruler-scale.ts";

test("all published guide topics have complete copies and local assets", () => {
  assert.equal(GUIDES.length, 14);
  assert.equal(new Set(GUIDES.map(guide => guide.slug)).size, GUIDES.length);
  for (const guide of GUIDES) {
    assert.deepEqual(Object.keys(guide.copy).sort(), [...LOCALES].sort());
    assert.ok(guide.rows.length);
    for (const locale of LOCALES) {
      for (const field of ["title", "intro", "interpretation", "action", "limit"]) {
        assert.ok(guide.copy[locale][field]?.trim(), `${guide.slug}: ${locale}.${field}`);
      }
      if (guide.copy[locale].captions) assert.equal(guide.copy[locale].captions.length, guide.assets.length);
    }
    for (const asset of guide.assets ?? []) assert.ok(existsSync(new URL(`../public${asset.src}`, import.meta.url)));
    if (guide.reproduction) assert.ok(existsSync(new URL(`../public${guide.reproduction}`, import.meta.url)));
  }
});

test("published photo downloads retain the recorded source and encoder hashes", () => {
  const samples = [
    ["earthrise-nasa.jpg", 59190, "2a09a810bfd6ec6965bc817f2a2f64dee1bf90cf12caa3936fbeb89825086025"],
    ["earthrise-jpeg80.jpg", 42674, "40599b4c31a330f10bc34cc6d225df978ab3855be1d6743fb1adbdd0729d268e"],
    ["earthrise-webp80.webp", 27016, "0dff4a4c7418291bcba84a7800c0abd2a4f6a816ce819198080d0e3f4a793b31"],
  ];
  for (const [file, bytes, hash] of samples) {
    const data = readFileSync(new URL(`../public/guides/${file}`, import.meta.url));
    assert.equal(data.length, bytes);
    assert.equal(createHash("sha256").update(data).digest("hex"), hash);
  }
});

test("ruler guide describes calculated CSS distances, not physical measurements", () => {
  assert.equal(pixelsPerCentimeter(240).toFixed(2), "28.04");
  assert.equal((pixelsPerCentimeter(240) * 5).toFixed(2), "140.19");
  assert.equal(pixelsPerCentimeter(342).toFixed(2), "39.95");
  assert.equal((pixelsPerCentimeter(342) * 5).toFixed(2), "199.77");
  assert.equal((pixelsPerCentimeter(342) * 2.54).toFixed(2), "101.48");
  assert.equal((pixelsPerCentimeter(342) / 10).toFixed(2), "4.00");
});

test("extra guides are translated, not English placeholders", () => {
  for (const guide of EXTRA_GUIDES) {
    for (const locale of LOCALES) {
      if (locale === "en") continue;
      for (const field of ["title", "intro", "interpretation", "action", "limit"]) {
        assert.notEqual(guide.copy[locale][field], guide.copy.en[field], `${guide.slug}: ${locale}.${field}`);
      }
    }
  }
});

test("percentage guide numbers come from the tool formulas", () => {
  assert.equal(calculatePercentage("increase", 40, 50), 25);
  assert.equal(calculatePercentage("increase", 100, 125), 25);
  assert.equal(calculatePercentage("decrease", 125, 100), 20);
  const afterFirst = calculatePercentage("discount", 100, 20);
  assert.equal(afterFirst, 80);
  assert.equal(calculatePercentage("discount", afterFirst, 10), 72);
  // The tool shows two decimals, so compare at that precision (binary floats give 28.000000000000004).
  assert.equal(calculatePercentage("decrease", 100, 72).toFixed(2), "28.00");
  assert.equal(calculatePercentage("increase", 0, 5), null);
});

test("CSS unit guide numbers follow the CSS reference sizes", () => {
  assert.equal(24 / 16, 1.5);
  assert.equal(24 / 10, 2.4);
  assert.equal(1.25 * 1.25, 1.5625);
  assert.equal(360 / (1440 / 100), 25);
  assert.equal(12 * 96 / 72, 16);
});

test("password guide bits match the pool sizes and the exact count", () => {
  const bits = (length, pool) => length * Math.log2(pool);
  assert.equal(bits(10, 91).toFixed(1), "65.1");
  assert.equal(bits(16, 26).toFixed(1), "75.2");
  assert.equal(bits(16, 62).toFixed(1), "95.3");
  assert.equal(bits(16, 91).toFixed(2), "104.12");
  // Passwords of 16 characters with at least one of each type: inclusion-exclusion over the four pools.
  const pools = [26, 26, 10, 29];
  let count = 0n;
  for (let mask = 0; mask < 16; mask++) {
    const excluded = pools.filter((_, i) => mask & (1 << i));
    const remaining = BigInt(91 - excluded.reduce((a, b) => a + b, 0));
    count += (excluded.length % 2 ? -1n : 1n) * remaining ** 16n;
  }
  const text = count.toString();
  const exactBits = Math.log2(Number(text.slice(0, 15))) + (text.length - 15) * Math.log2(10);
  assert.equal(exactBits.toFixed(2), "103.86");
});

test("QR format guide rows match the encoder output and the published round-trip record", async () => {
  const guide = EXTRA_GUIDES.find(item => item.slug === "qr-wifi-vcard-format");
  const samples = Object.values(QR_FORMAT_SAMPLES);
  assert.equal(guide.rows.length, samples.length);
  for (const [index, text] of samples.entries()) {
    const png = await bwipjs.toBuffer({ bcid: "qrcode", text, scale: 3, backgroundcolor: "FFFFFF", padding: 8 });
    const modules = (png.readUInt32BE(16) - 48) / 6;
    assert.equal(guide.rows[index][1], String(text.length));
    assert.equal(guide.rows[index][2], `${modules} × ${modules}`);
  }
  const record = JSON.parse(readFileSync(new URL("../public/guides/qr-format-results.json", import.meta.url), "utf8"));
  assert.deepEqual(record.results.map(result => result.input), samples);
  for (const result of record.results) assert.equal(result.decoded, result.input);
  for (const locale of LOCALES) assert.ok(guide.copy[locale].interpretation.includes(QR_FORMAT_SAMPLES.escaped), locale);
});
