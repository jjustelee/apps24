import test from "node:test";
import assert from "node:assert/strict";
import { getPublicClientIp, isPublicIp, normalizeIp } from "../src/lib/ip-address.ts";
import { GET } from "../src/app/api/ip-lookup/route.ts";

test("IP validation excludes local, shared, reserved and documentation addresses", () => {
  for (const ip of ["", "garbage", "127.0.0.1", "10.1.2.3", "172.16.0.1", "192.168.1.1", "169.254.1.1", "100.64.0.1", "192.0.2.1", "198.51.100.1", "203.0.113.1", "224.0.0.1", "::1", "fe80::1", "fc00::1", "2001:db8::1", "3fff::1"]) assert.equal(isPublicIp(ip), false, ip);
  for (const ip of ["8.8.8.8", "1.1.1.1", "2606:4700:4700::1111", "2001:4860:4860::8888"]) assert.equal(isPublicIp(ip), true, ip);
  assert.equal(normalizeIp(" [::ffff:8.8.8.8] "), "8.8.8.8");
  assert.equal(getPublicClientIp(new Headers({ "x-forwarded-for": "10.0.0.1, 8.8.8.8" })), "8.8.8.8");
  assert.equal(getPublicClientIp(new Headers()), "");
});

test("missing client address never falls back to the hosting server's IP", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => { throw new Error("must not call"); });
  for (const path of ["", "?ip=127.0.0.1", "?ip=invalid", "?ip="]) {
    const response = await GET(new Request(`https://apps24.io/api/ip-lookup${path}`));
    assert.equal(response.status, 422);
    assert.equal((await response.json()).success, false);
    assert.equal(response.headers.get("cache-control"), "no-store");
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});

for (const failure of ["offline", "rate-limit", "null", "array", "malformed"]) {
  test(`IP stays available when geolocation returns ${failure}`, async (t) => {
    t.mock.method(globalThis, "fetch", async (url) => {
      assert.equal(url, "https://ipinfo.io/8.8.8.8/json");
      if (failure === "offline") throw new Error("offline");
      if (failure === "rate-limit") return new Response("", { status: 429 });
      return new Response(failure === "null" ? "null" : failure === "array" ? "[]" : "bad json");
    });
    const response = await GET(new Request("https://apps24.io/api/ip-lookup", { headers: { "x-forwarded-for": "8.8.8.8" } }));
    const data = await response.json();
    assert.equal(data.success, true);
    assert.equal(data.ip, "8.8.8.8");
    assert.equal(data.type, "IPv4");
    assert.equal(data.city, "");
    assert.equal(data.hostname, undefined);
    assert.equal(data.vpn, undefined);
  });
}

test("client-side fallback IP is validated and receives only available metadata", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ country: "US", org: "AS15169 Google LLC", timezone: "America/Chicago", city: 123 }));
  const response = await GET(new Request("https://apps24.io/api/ip-lookup?ip=8.8.8.8"));
  const data = await response.json();
  assert.equal(data.country_code, "US");
  assert.equal(data.connection.isp, "Google LLC");
  assert.equal(data.city, "");
});
