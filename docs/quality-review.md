# Content and Mobile Quality Review

## Scope

- Five core tools have implementation-specific guides in all ten locales: ruler, word counter, JSON formatter, image compressor and IP lookup.
- Each guide includes worked examples, usage limits, troubleshooting and reference links. Home cards retain short use cases instead of duplicating the full examples.
- Repetitive generic checklists were removed. Existing preset URLs redirect permanently to the same tool with a preset query, preserving the entry point without maintaining duplicate articles.
- AdSense ownership metadata and ads.txt are retained. Ad loading defaults to disabled; optional future loading is limited to explicitly reviewed tool routes. This is not a replacement for other Google policy or consent obligations.

## Reliability Changes

- Word counts use language-aware segmentation, visible-character counts use graphemes, and unsupported browsers get an explicit fallback notice.
- JSON formatting preserves numeric tokens, property order and duplicate names. Syntax validation is explicitly distinguished from schema validation.
- Ruler calibration uses a nominal reference size and correctly anchored ticks. A saved setting is not treated as proof of physical accuracy.
- IP lookup never substitutes the hosting server's IP, invents hostnames or claims VPN/IPv6 detection without evidence. Geolocation failures preserve the available IP and show missing fields honestly.
- PNG quality controls are disabled because the canvas encoder ignores them. JPG transparency is composited on white, output MIME type is checked, and growth is distinguished from savings.

## Mobile Checks

Viewport emulation covers 360, 390 and 768 CSS pixels, including all ten locales. Check both the empty tool and post-interaction states: uploaded images, expanded navigation, long IPv6 values, validation errors, calculator detail fields and clock output. Viewport emulation does not replace physical iOS/Android device testing.

The following defects were corrected: overflowing barcode and color inputs, salary form intrinsic widths, non-wrapping conversion notes, cramped image settings and split download labels, small textareas, reversed numeric image metadata in RTL layouts, and a two-line digital clock. The clock now starts with identical server/client placeholder text to avoid time-zone and Intl hydration mismatches, and continues working if browser storage is blocked.

## Reproduce

Verified locally on 2026-09-06:

- Production build, TypeScript, ESLint and all 23 regression tests pass.
- 333 sitemap pages return 200 with one main heading and matching canonicals; 360 old preset URLs redirect to working targets; 10 localized unknown routes return 404.
- Production viewport checks pass for all 333 pages at 360, 390 and 768 CSS pixels (999 page/viewport combinations).
- Image upload checks pass in all ten locales at each viewport (30 combinations with two files). PNG controls, JPG MIME type and 50% output dimensions were checked interactively.
- Word/grapheme counting, JSON success/error states, partial IP results, ruler calibration invalidation and expanded navigation/footer access were checked interactively.
- These are local checks, not live deployment, physical-device certification or approval by Google.

Use Node.js 22.18 or newer for the built-in TypeScript test runner.

```sh
npm test
npm run check
npm run build
npm run start -- --hostname 127.0.0.1 --port 3000
node --import ./tests/register-typescript.mjs scripts/verify-site.mjs
```

Open the local site with Playwright CLI, resize the viewport, then pass the exported function in `scripts/mobile-audit.mjs` to `run-code` (remove the `export default` prefix). It checks layout and input font sizes on every sitemap URL. Follow with manual interaction and screenshot checks; absence of page overflow alone does not establish usable layout.

## Approval Boundary

Google decides AdSense approval. Passing builds, route checks and viewport checks does not prove editorial value or guarantee approval. The rejection screenshot identifies low-value content, but does not identify a specific offending URL or explain the search-traffic decline. No causal claim about a Google update has been verified.

Before another review request, deploy the changes, inspect the live pages and continue reviewing the remaining tools with real user tasks. Do not add generic text or unsupported claims merely to increase word count. This change does not submit a review request or publish to GitHub automatically.

References: [AdSense account approval guidance](https://support.google.com/adsense/answer/81904), [Connecting a site](https://support.google.com/adsense/answer/12169212).
