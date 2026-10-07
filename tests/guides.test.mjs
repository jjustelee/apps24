import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { GUIDES } from "../src/features/guides/content.ts";
import { LOCALES } from "../src/lib/site.ts";
import { pixelsPerCentimeter } from "../src/lib/ruler-scale.ts";

test("all six guide topics have complete copies and local assets", () => {
  assert.equal(GUIDES.length, 6);
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
