import test from "node:test";
import assert from "node:assert/strict";
import {
  getGa4MeasurementId, buildAnalyticsPage, GA4_PAGE_CONFIG, ANALYTICS_CONSENT_KEY,
  readAnalyticsConsent, saveAnalyticsConsent, subscribeAnalyticsConsent, initializeAnalytics, sendAnalyticsPageView,
} from "../src/lib/analytics.ts";
import { getAnalyticsPaths } from "../src/lib/analytics-routes.ts";
import { ANALYTICS_COPY } from "../src/features/analytics/copy.ts";
import { LOCALES } from "../src/lib/site.ts";
import sitemap from "../src/app/sitemap.ts";

test("GA4 requires explicit activation and a valid measurement ID", () => {
  const previousId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const previousEnabled = process.env.NEXT_PUBLIC_GA4_ENABLED;
  try {
    for (const [id, enabled, expected] of [
      [undefined, "true", null], ["G-TEST123456", "false", null], ["G-TEST123456", undefined, null],
      ["UA-1234", "true", null], ["G-TEST123456<script>", "true", null], ["G-TEST123456", "true", "G-TEST123456"],
    ]) {
      if (id === undefined) delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
      else process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = id;
      if (enabled === undefined) delete process.env.NEXT_PUBLIC_GA4_ENABLED;
      else process.env.NEXT_PUBLIC_GA4_ENABLED = enabled;
      assert.equal(getGa4MeasurementId(), expected);
    }
  } finally {
    if (previousId === undefined) delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    else process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = previousId;
    if (previousEnabled === undefined) delete process.env.NEXT_PUBLIC_GA4_ENABLED;
    else process.env.NEXT_PUBLIC_GA4_ENABLED = previousEnabled;
  }
});

test("page measurement strips inputs, query strings, fragments and external referrer paths", () => {
  const origin = "https://www.apps24.io";
  const paths = getAnalyticsPaths("ko");
  assert.deepEqual(buildAnalyticsPage("/ko/image-compressor?filename=private.jpg#secret", origin, "https://www.google.com/search?q=private", paths), {
    page_location: origin + "/ko/image-compressor", page_title: "/ko/image-compressor", page_referrer: "https://www.google.com",
  });
  assert.equal(buildAnalyticsPage("/ko", origin, origin + "/ko/wordcounter?text=secret#hidden", paths).page_referrer, origin + "/ko/wordcounter");
  assert.equal(buildAnalyticsPage("/ko", origin, origin + "/ko/private-name", paths).page_referrer, origin);
  for (const referrer of ["invalid", "javascript:alert(1)", "data:text/plain,secret"]) {
    assert.equal(buildAnalyticsPage("/ko", origin, referrer, paths).page_referrer, "");
  }
  assert.equal(buildAnalyticsPage("/ko/private-name", origin, "", paths), null);
  assert.equal(buildAnalyticsPage("https://other.test/ko", origin, "", paths), null);
});

test("analytics allowlist exactly matches published sitemap pages in every locale", () => {
  const routes = LOCALES.flatMap(getAnalyticsPaths);
  assert.equal(new Set(routes).size, routes.length);
  assert.deepEqual(routes.sort(), sitemap().map(entry => new URL(entry.url).pathname).sort());
  assert.ok(getAnalyticsPaths("ko").includes("/ko/salary-calculator"));
  assert.ok(!getAnalyticsPaths("en").includes("/en/salary-calculator"));
  assert.ok(!getAnalyticsPaths("ko").includes("/ko/image-compressor/reduce-image-size"));
});

test("consent and privacy copy is complete in all ten languages", () => {
  assert.deepEqual(Object.keys(ANALYTICS_COPY).sort(), [...LOCALES].sort());
  for (const locale of LOCALES) {
    for (const value of Object.values(ANALYTICS_COPY[locale])) assert.ok(value.trim());
  }
  assert.deepEqual(GA4_PAGE_CONFIG, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
  });
});

test("consent blocks sends, permits sanitized views, revokes immediately and syncs between tabs", () => {
  const oldWindow = globalThis.window;
  const oldDocument = globalThis.document;
  const storage = new Map();
  const cookies = [];
  const browser = new EventTarget();
  browser.location = { hostname: "www.apps24.io" };
  browser.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) };
  globalThis.window = browser;
  globalThis.document = { set cookie(value) { cookies.push(value); } };
  const id = "G-TEST123456";
  const page = buildAnalyticsPage("/ko?salary=private#hidden", "https://www.apps24.io", "", getAnalyticsPaths("ko"));
  let notifications = 0;
  const unsubscribe = subscribeAnalyticsConsent(() => notifications++, id);
  try {
    assert.equal(readAnalyticsConsent(), null);
    assert.equal(sendAnalyticsPageView(id, page), false);
    assert.equal(browser.dataLayer, undefined);
    saveAnalyticsConsent("denied", id);
    assert.equal(browser[`ga-disable-${id}`], true);
    assert.equal(sendAnalyticsPageView(id, page), false);
    assert.equal(browser.dataLayer, undefined);
    assert.ok(cookies.some(value => value.startsWith("_ga_TEST123456=")));
    assert.ok(cookies.some(value => value.endsWith("Domain=apps24.io")));

    saveAnalyticsConsent("granted", id);
    initializeAnalytics(id);
    assert.equal(sendAnalyticsPageView(id, page), true);
    for (const command of browser.dataLayer) {
      assert.equal(Object.prototype.toString.call(command), "[object Arguments]", "Google tag receives its documented command format");
    }
    const defaults = browser.dataLayer.find(args => args[0] === "consent" && args[1] === "default");
    assert.equal(defaults[2].analytics_storage, "denied");
    const update = browser.dataLayer.find(args => args[0] === "consent" && args[1] === "update");
    assert.equal(update[2].analytics_storage, "granted");
    assert.equal(update[2].ad_user_data, "denied");
    assert.ok(!JSON.stringify(browser.dataLayer).includes("private"));
    assert.equal(browser.dataLayer.filter(args => args[0] === "event").length, 1);
    const size = browser.dataLayer.length;
    saveAnalyticsConsent("denied", id);
    assert.equal(sendAnalyticsPageView(id, page), false);
    assert.equal(browser.dataLayer.length, size, "revocation does not send consent pings");

    storage.set(ANALYTICS_CONSENT_KEY, "granted");
    browser.dispatchEvent(Object.assign(new Event("storage"), { key: ANALYTICS_CONSENT_KEY }));
    assert.equal(readAnalyticsConsent(), "granted");
    storage.delete(ANALYTICS_CONSENT_KEY);
    browser.dispatchEvent(Object.assign(new Event("storage"), { key: null }));
    assert.equal(readAnalyticsConsent(), null);
    assert.equal(browser[`ga-disable-${id}`], true);
    assert.ok(notifications >= 5);

    browser.localStorage = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } };
    saveAnalyticsConsent("granted", id);
    assert.equal(readAnalyticsConsent(), "granted", "blocked storage uses a session-only choice");
    saveAnalyticsConsent("denied", id);
  } finally {
    unsubscribe();
    globalThis.window = oldWindow;
    globalThis.document = oldDocument;
  }
});
