import test from "node:test";
import assert from "node:assert/strict";
import bwipjs from "bwip-js/node";
import { GET as health } from "../src/app/api/outdoor-health/route.ts";
import { GET as exchange } from "../src/app/api/exchange-rates/route.ts";
import { POST as barcode } from "../src/app/api/generate-barcode/route.ts";

test("health response preserves UTC validity and declares unsupported Korean pollen", async t => {
  const ads = process.env.NEXT_PUBLIC_ADSENSE_ENABLED;
  const key = process.env.OPEN_METEO_API_KEY;
  delete process.env.OPEN_METEO_API_KEY;
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED = "false";
  t.after(() => { if (ads === undefined) delete process.env.NEXT_PUBLIC_ADSENSE_ENABLED; else process.env.NEXT_PUBLIC_ADSENSE_ENABLED = ads; if (key === undefined) delete process.env.OPEN_METEO_API_KEY; else process.env.OPEN_METEO_API_KEY = key; });
  t.mock.method(globalThis, "fetch", async url => {
    const commercialKey = process.env.OPEN_METEO_API_KEY;
    assert.equal(url.hostname, commercialKey ? "customer-air-quality-api.open-meteo.com" : "air-quality-api.open-meteo.com");
    assert.equal(url.searchParams.get("apikey"), commercialKey ?? null);
    assert.equal(url.searchParams.get("timeformat"), "unixtime");
    assert.ok(!url.searchParams.get("current").includes("pollen"));
    return Response.json({ current: { time: 1791360000, pm10: -1, pm2_5: 15, uv_index: 0 }, current_units: {} });
  });
  const data = await (await health(new Request("http://localhost/api/outdoor-health"))).json();
  assert.equal(data.validAt, new Date(1791360000 * 1000).toISOString());
  assert.equal(data.readings.pm10.value, null);
  assert.equal(data.readings.uv.value, 0);
  assert.equal(data.readings.pollen.supported, false);
  assert.equal(data.readings.pollen.grass, null);
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED = "true";
  assert.equal((await health(new Request("http://localhost/api/outdoor-health"))).status, 503);
  process.env.OPEN_METEO_API_KEY = "test-key-not-a-real-credential";
  const commercialResponse = await health(new Request("http://localhost/api/outdoor-health"));
  assert.equal(commercialResponse.status, 200);
  assert.ok(!(await commercialResponse.text()).includes(process.env.OPEN_METEO_API_KEY));
});

test("exchange dates remain attached to their individual currency pairs", async t => {
  t.mock.method(globalThis, "fetch", async () => Response.json([
    { base: "USD", quote: "EUR", rate: 0.8, date: "2026-10-06" },
    { base: "USD", quote: "KRW", rate: 1400, date: "2026-10-05" },
  ]));
  const data = await (await exchange(new Request("http://localhost/api/exchange-rates?base=USD&quotes=EUR,KRW"))).json();
  assert.deepEqual(data.dates, { EUR: "2026-10-06", KRW: "2026-10-05" });
  assert.equal(data.rates.EUR, 0.8);
});

test("QR POST generates a PNG and rejects malformed or oversized input", async () => {
  const request = body => new Request("http://localhost/api/generate-barcode", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } });
  const data = await (await barcode(request({ text: "https://example.com", format: "qrcode" }))).json();
  assert.equal(data.success, true);
  assert.ok(data.image.startsWith("data:image/png;base64,iVBOR"));
  assert.equal((await barcode(request({ text: "x".repeat(4001), format: "qrcode" }))).status, 400);
  assert.equal((await barcode(request({ text: null, format: "qrcode" }))).status, 400);
  assert.equal((await barcode(request({ text: "590123412345", format: "ean13" }))).status, 200);
  assert.equal((await barcode(request({ text: "5901234123456", format: "ean13" }))).status, 400);
});

test("QR PNG dimensions include four modules of white margin on each side", async () => {
  for (const text of ["https://example.org/apps24-qa", "Apps24: 한글 ✓"]) {
    const data = await (await barcode(new Request("http://localhost/api/generate-barcode", {
      method: "POST", body: JSON.stringify({ text, format: "qrcode" }), headers: { "Content-Type": "application/json" },
    }))).json();
    const png = Buffer.from(data.image.split(",")[1], "base64");
    const [matrix] = bwipjs.raw({ bcid: "qrcode", text });
    assert.equal(png.readUInt32BE(16), (matrix.pixx + 8) * 6);
    assert.equal(png.readUInt32BE(20), (matrix.pixy + 8) * 6);
  }
});
