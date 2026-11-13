import test from "node:test";
import assert from "node:assert/strict";
import bwipjs from "bwip-js/node";
import { LOCALES } from "../src/lib/site.ts";
import { DEEP_EN } from "../src/features/tools/deep-content/en.ts";
import { DEEP_KO } from "../src/features/tools/deep-content/ko.ts";
import { getDeepContent } from "../src/features/tools/deep-content/index.ts";
import { monthlyWithholding } from "../src/lib/korean-payroll.ts";

const shape = blocks => blocks.map(b => ({
  paragraphs: b.paragraphs?.length ?? 0,
  bullets: b.bullets?.length ?? 0,
  rows: b.table?.rows.length ?? 0,
  cols: b.table?.head.length ?? 0,
  note: Boolean(b.note),
}));

test("every locale has the same sections as English and no empty text", () => {
  for (const locale of LOCALES) {
    for (const toolId of Object.keys(DEEP_EN)) {
      const blocks = getDeepContent(locale, toolId);
      assert.deepEqual(shape(blocks), shape(DEEP_EN[toolId]), `${locale}/${toolId}`);
      for (const block of blocks) {
        assert.ok(block.heading.trim(), `${locale}/${toolId} heading`);
        for (const text of [...(block.paragraphs ?? []), ...(block.bullets ?? []), ...(block.table?.head ?? []), ...(block.table?.rows.flat() ?? [])]) {
          assert.ok(text.trim(), `${locale}/${toolId} empty text`);
        }
        for (const row of block.table?.rows ?? []) assert.equal(row.length, block.table.head.length, `${locale}/${toolId} row width`);
      }
    }
  }
});

test("verified numbers and code strings are identical in every locale", () => {
  const literals = ["WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;", "WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;", "3.785411784", "236.5882365", "37.7953", "103.86", "IPHONE 15 AND NASA"];
  for (const locale of LOCALES) {
    const text = JSON.stringify(Object.values({ qr: getDeepContent(locale, "qrgenerator"), unit: getDeepContent(locale, "unitconverter"), px: getDeepContent(locale, "pixelconverter"), pw: getDeepContent(locale, "passwordgenerator"), cc: getDeepContent(locale, "caseconverter") }));
    for (const literal of literals) assert.ok(text.includes(JSON.stringify(literal).slice(1, -1)), `${locale}: ${literal}`);
  }
});

test("password entropy table equals length times log2 of the pool size", () => {
  const rows = DEEP_EN.passwordgenerator[0].table.rows;
  const pools = [10, 26, 52, 62, 91];
  rows.forEach((row, i) => [8, 12, 16, 24].forEach((length, j) => {
    assert.equal(row[j + 1], `${(length * Math.log2(pools[i])).toFixed(1)} bits`);
  }));
  assert.equal(26 + 26 + 10 + [..."!@#$%^&*()_+~`|}{[]:;?><,./-="].length, 91);
});

test("QR capacity and Wi-Fi samples match the documented limits", async () => {
  const render = text => bwipjs.toBuffer({ bcid: "qrcode", text, scale: 3, backgroundcolor: "FFFFFF", padding: 8 });
  await render("a".repeat(2331));
  await assert.rejects(render("a".repeat(2332)));
  await render("가".repeat(777));
  await assert.rejects(render("가".repeat(778)));
  for (const [chars, modules] of [[20, 25], [38, 29], [100, 41], [300, 69]]) {
    const png = await render("a".repeat(chars));
    assert.equal((png.readUInt32BE(16) - 48) / 6, modules);
  }
});

test("Korean salary comparison table matches the calculator formulas", () => {
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const fmt = v => Math.round(v).toLocaleString("en-US");
  const rows = DEEP_KO.salarycalculator[0].table.rows;
  [30e6, 40e6, 50e6, 60e6, 80e6, 100e6].forEach((salary, i) => {
    const gross = salary / 12;
    const pension = clamp(Math.floor(gross / 1000) * 1000, 410000, 6590000) * 0.0475;
    const health = gross * 0.03595;
    const insurance = pension + health + health * 0.1314 + gross * 0.009;
    const tax = monthlyWithholding(gross, 1, 0);
    const taxes = tax * 1.1;
    const net = gross - insurance - taxes;
    const expected = [fmt(gross).replace(/,/g, ","), fmt(insurance), fmt(taxes), fmt(net), `${(net / gross * 100).toFixed(1)}%`];
    assert.deepEqual(rows[i].slice(1).map(cell => cell.replace(/,/g, ",")), expected, rows[i][0]);
  });
});
