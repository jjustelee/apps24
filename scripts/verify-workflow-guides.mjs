// Run: node --import ./tests/register-typescript.mjs scripts/verify-workflow-guides.mjs
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { POST as barcode } from "../src/app/api/generate-barcode/route.ts";
import { GET as exchange } from "../src/app/api/exchange-rates/route.ts";
import { compareTextLines } from "../src/lib/text-diff.ts";
import { parseLocalizedAmount } from "../src/lib/number-format.ts";
import { validateBackgroundImage } from "../src/lib/background-image-validation.ts";

const root = new URL("../public/guides/", import.meta.url);
await mkdir(root, { recursive: true });
const request = text => new Request("http://localhost/api/generate-barcode", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, format: "ean13" }),
});
const valid = await (await barcode(request("400638133393"))).json();
const full = await (await barcode(request("4006381333931"))).json();
assert.equal(valid.success, true);
assert.equal(valid.image, full.image);
const invalid = await (await barcode(request("4006381333932"))).json();
assert.equal(invalid.code, "ean_checksum");
const png = Buffer.from(valid.image.split(",")[1], "base64");
await writeFile(new URL("barcode-ean13.png", root), png);

const original = "alpha\nbeta\ngamma";
const modified = "alpha\ninserted\nbeta\ngamma";
const inserted = compareTextLines(original, modified);
assert.deepEqual(inserted.map(row => row.type), ["match", "added", "match", "match"]);
const normalized = compareTextLines("alpha\r\nbeta", "alpha\nbeta");
assert.deepEqual(normalized.map(row => row.type), ["match", "match"]);
const spaces = compareTextLines("alpha", "alpha ");
assert.equal(spaces[0].type, "changed");

assert.equal(parseLocalizedAmount("1,234.5", "en"), 1234.5);
assert.equal(parseLocalizedAmount("1 234,5", "fr"), 1234.5);
assert.equal(parseLocalizedAmount("1.234,5", "de"), 1234.5);
const realFetch = globalThis.fetch;
let rates;
try {
  globalThis.fetch = async () => Response.json([
    { base: "USD", quote: "EUR", rate: 0.8, date: "2026-10-26" },
    { base: "USD", quote: "KRW", rate: 1400, date: "2026-10-23" },
  ]);
  rates = await (await exchange(new Request("http://localhost/api/exchange-rates?base=USD&quotes=EUR,KRW"))).json();
} finally { globalThis.fetch = realFetch; }
assert.deepEqual(rates.dates, { EUR: "2026-10-26", KRW: "2026-10-23" });
assert.equal(100 * rates.rates.EUR, 80);
const evidence = {
  checkedAt: "2026-10-28", method: "Local implementation and deterministic regression fixtures; not live market rates, print scans or a performance benchmark.",
  runtime: { node: process.version, bwipJs: "4.9.0", note: "PNG byte sizes may differ between server runtimes; use the downloaded fixture to inspect this recorded run." },
  barcode: { input: "400638133393", fullInput: "4006381333931", samePng: true, invalidInput: "4006381333932", errorCode: invalid.code, width: png.readUInt32BE(16), height: png.readUInt32BE(20), bytes: png.length },
  diff: { original, modified, inserted, normalized, spaces },
  currency: { hypothetical: true, base: rates.base, amount: 100, rates: rates.rates, dates: rates.dates, resultEUR: 80 },
  backgroundFileValidation: [
    { type: "image/gif", size: 1000 },
    { type: "image/png", size: 10_485_760 },
    { type: "image/png", size: 10_485_761 },
  ].map(file => ({ ...file, code: validateBackgroundImage(file) })),
};
await writeFile(new URL("workflow-results.json", root), JSON.stringify(evidence, null, 2) + "\n");
console.log(JSON.stringify(evidence, null, 2));
