import assert from "node:assert/strict";
import { LOCALES } from "../src/lib/site.ts";
import { getReviewedToolText } from "../src/features/tools/reviewed-content.ts";

const base = process.argv[2] || "http://127.0.0.1:3000";
const xml = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.ok(urls.length > 300);
const failures = [];
const check = async (name, action) => {
  try { await action(); } catch (error) { failures.push({ name, error: error.message }); }
};
for (const url of urls) {
  await check(url, async () => {
    const path = new URL(url).pathname;
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "one visible main heading");
    assert.ok(html.includes('rel="canonical" href="' + url + '"'), "canonical");
    assert.ok(!/<script[^>]+src="[^"]*adsbygoogle/.test(html), "ad scripts disabled by default");
    if (/\/(ruler|wordcounter|json-formatter|image-compressor|ip-lookup)$/.test(path)) {
      assert.ok(!/content="[^"]*noindex/.test(html), "core tool indexability");
      const [, locale, slug] = path.split("/");
      const id = { "json-formatter": "jsonformatter", "image-compressor": "imagecompressor", "ip-lookup": "iplookup" }[slug] || slug;
      for (const href of Object.values(getReviewedToolText(locale, id).references)) {
        assert.ok(html.includes('href="' + href + '"'), "reference link: " + href);
      }
    }
  });
}
const families = [
  ["image-compressor", "image-compressor", "ImageCompressor"],
  ["unit-converter", "unit-converter", "UnitConverter"],
  ["pixel-converter", "pixel-converter", "PixelConverter"],
  ["base64-encoder-decoder", "base64-encoder", "Base64Encoder"],
  ["json-formatter", "json-formatter", "JsonFormatter"],
  ["percentage-calculator", "percentage-calculator", "PercentageCalculator"],
  ["qrgenerator", "qrgenerator", "QrGenerator"],
  ["background-remover", "background-remover", "BackgroundRemover"],
  ["barcodegenerator", "barcode-generator", "BarcodeGenerator"],
];
let redirects = 0;
for (const [slug, file, name] of families) {
  const longtails = await import("../src/features/tools/" + file + "-longtails.ts");
  for (const params of longtails["get" + name + "LongtailStaticParams"]()) {
    const value = Object.entries(params).find(([key]) => key !== "locale")[1];
    const oldPath = "/" + params.locale + "/" + slug + "/" + value;
    const target = "/" + params.locale + "/" + slug + "?preset=" + value;
    await check(oldPath, async () => {
      const response = await fetch(base + oldPath, { redirect: "manual" });
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), target);
      assert.equal((await fetch(base + target)).status, 200);
    });
    redirects++;
  }
}
for (const locale of LOCALES) {
  await check("404 " + locale, async () => {
    const response = await fetch(base + "/" + locale + "/not-an-apps24-tool");
    assert.equal(response.status, 404);
    assert.ok(!/<script[^>]+src="[^"]*adsbygoogle/.test(await response.text()));
  });
}
console.log(JSON.stringify({ pages: urls.length, redirects, notFoundPages: LOCALES.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
