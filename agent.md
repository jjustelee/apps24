# apps24 Agent Guide

This document is the operating contract for the apps24 rebuild.

Goal:
- Rebuild the legacy site as a multilingual utility platform.
- Preserve search traffic and URL equity.
- Make it easy to add many small tools over time.
- Keep deployment and day-to-day operations simple.
- Support global SEO and eventual ad monetization.

## 0. How Codex should use this file

- Treat this document as the first project-specific instruction source.
- Prefer implementation over long explanation when the request is actionable.
- Make the smallest safe change that satisfies the request.
- Do not expand scope without a clear reason.
- Do not touch unrelated code, styles, or comments.
- If a change affects URLs, SEO, monetization, or redirects, treat it as high risk and verify it explicitly.
- When a request is ambiguous, state the tradeoff and choose the simplest workable path.
- After editing, verify the result with the smallest relevant check first, then broaden if needed.

## 1. Product principles

- One codebase only.
- One tool platform, not many separate projects.
- Path-based routing, not per-tool subdomains.
- Registry-driven architecture, not ad hoc page creation.
- Fast, mobile-first, search-friendly pages.
- Localized content that is useful in each target language.
- Minimal runtime complexity unless a tool truly needs more.

## 2. Recommended stack

- Language: TypeScript.
- Framework: Next.js App Router.
- Hosting: Vercel.
- DNS: Cloudflare DNS only.
- Repository: GitHub.
- Package manager: use one consistently and do not mix managers.

## 3. Repository layout

Use a consistent layout so Codex can find the right files quickly:

```txt
app/
  page.tsx
  [locale]/
    layout.tsx
    page.tsx
    index/page.tsx
    contact/page.tsx
    [slug]/page.tsx
  sitemap.ts
  robots.ts
components/
features/
  tools/
    registry.ts
    implementations/
lib/
messages/
public/
```

## 4. Non-goals

- No CMS at the start unless content operations become a real bottleneck.
- No database at the start unless a tool truly needs persistence.
- No per-tool subdomains.
- No server-side infrastructure unless required by a specific tool.
- No automatic locale switching by IP.
- No placeholder content, lorem ipsum, or dummy metadata in production.
- No speculative abstractions for single-use code.
- No broad refactors when a local patch is enough.

## 5. Routing contract

- `/` should redirect to the default locale, usually `/en`.
- `/{locale}` is the localized home page.
- `/{locale}/index` should redirect to `/{locale}` for legacy compatibility.
- `/{locale}/{slug}` is the canonical tool route.
- Tool URLs must stay stable once published.
- Tool discovery should happen through path routing, not host-based routing.
- `hreflang`, canonical tags, and localized metadata must be generated for every indexable locale page.

## 6. Locale strategy

- Start with the existing supported locales from the legacy site.
- Keep the locale list centralized.
- Use locale-specific copy that reads naturally in each language.
- Do not machine-translate production copy without review.
- Do not force users between locales based on IP.
- If a locale cannot be maintained well, do not publish it yet.

## 7. Single source of truth

The registry is the source of truth for tools.

Each tool definition should include:
- id
- slug
- category
- title key
- description key
- icon
- order
- featured flag
- status
- supported locales
- implementation key

Example shape:

```ts
export type ToolStatus = "stable" | "beta" | "hidden";

export interface ToolDefinition {
  id: string;
  slug: string;
  category: "measurement" | "text" | "time" | "generator" | "display" | "utility";
  titleKey: string;
  descriptionKey: string;
  icon: string;
  order: number;
  featured: boolean;
  status: ToolStatus;
  locales: string[];
  implementationKey: string;
}
```

The registry must drive:
- Home page cards
- Tool routes
- Page metadata
- Sitemap generation
- Related tool links
- Supported locale checks

When changing a tool:
- Update the registry first.
- Add or update the implementation.
- Add localized strings.
- Then confirm routing, metadata, and sitemap behavior.

## 8. Page structure contract

Every tool page should follow the same broad pattern:

- Title
- Short description
- Core interactive tool
- Helpful usage notes
- Examples or presets when useful
- Related tools
- FAQ when it improves search usefulness

Every published tool page should answer one clear search intent.

Do not publish thin pages that only contain a form with no supporting explanation.

## 9. UI contract

- Build a shared tool shell and reuse it everywhere.
- Keep the home page simple and fast.
- Use responsive layouts that work well on mobile first.
- Show the tool immediately, not after a lot of marketing copy.
- Use motion only when it helps clarity.
- Avoid cluttered layouts and heavy visual noise.
- Prefer server components by default; use client components only where interaction requires them.
- Keep the UI consistent across tools unless a tool truly needs a special layout.

## 10. SEO contract

- Every locale page must have a unique title and description.
- Metadata must be localized, not copied unchanged.
- Canonical URLs must be consistent.
- The sitemap must include all indexable locale pages.
- The robots file must be correct and stable.
- Preview deployments should not be indexed.
- Internal links should help users move between related tools.
- Do not create duplicate pages that compete with each other.
- Do not hide important content behind interactions that search engines cannot see.
- Do not create near-duplicate tools that compete for the same query unless there is a clear purpose.

## 11. Content quality rules

- Each tool page should contain real value, not filler.
- Explain what the tool does in plain language.
- Give clear usage steps.
- Include common examples or defaults where helpful.
- Add FAQ content only when it helps users or search intent.
- Keep locale copy natural and concise.
- Update copy before adding more layout complexity.
- Never ship placeholder production text.
- Add examples or presets when they make the tool easier to understand.

## 12. Monetization rules

- Prioritize usefulness and retention before ads.
- Ads should never make the tool harder to use.
- Keep ad density reasonable, especially on mobile.
- Avoid ad placements that cause layout shift.
- Add ads only after the page is already useful on its own.
- Respect ad network policies and local legal requirements.
- Prepare privacy policy, terms, and cookie notices before serious monetization.
- Avoid ad layouts that break the tool flow on mobile.

## 13. Performance rules

- Keep JavaScript as small as practical.
- Avoid unnecessary libraries.
- Prefer built-in browser APIs when enough.
- Load only what each tool needs.
- Keep images and icons optimized.
- Protect Core Web Vitals, especially on mobile.
- Do not let ads or animations slow the page down.
- Prefer browser-native APIs over external packages when the result is the same.

## 14. Observability rules

- Use analytics to learn which tools earn traffic.
- Use Search Console to track indexing and impressions.
- Use error tracking for client and server failures.
- Monitor build and deployment health.
- Review top pages, top locales, and bounce patterns regularly.
- Track which tools deserve more localization or expansion.

## 15. Testing and verification

Before merging any change:
- Run type checks and lint checks.
- Confirm the build succeeds.
- Verify the page in a preview deployment.
- Test at least one mobile viewport.
- Check that the page title, description, and canonical are correct.
- Check that no console errors appear.
- Confirm the new page is reachable from the home page and sitemap.
- If the change touches a tool interaction, test the happy path and one failure case.

## 16. New tool addition workflow

When adding a new tool:

1. Define the search intent and the user problem.
2. Choose a stable slug.
3. Add the tool to the registry.
4. Add the implementation file.
5. Add localized strings.
6. Reuse the shared tool shell.
7. Update related tool links if useful.
8. Verify metadata and sitemap output.
9. Test in Vercel preview.
10. Merge only after mobile and SEO checks pass.

If a tool is only partially ready, keep it hidden until it is genuinely useful.

## 17. Tool creation criteria

Only add a tool if:
- It solves a distinct user problem.
- It can be explained clearly.
- It can have its own search intent.
- It can be supported in at least the primary locales.
- It does not duplicate an existing tool too closely.

Do not add a tool just because it is possible to add one.

## 18. Suggested initial tool set

Recommended first wave:
- ruler
- wordcounter
- digitalclock
- countdown
- screenlamp
- qrgenerator
- barcodegenerator
- dummytext
- unitconverter
- jsonformatter

These tools are good starting points because they cover different interaction patterns:
- measurement
- text processing
- timers
- generators
- visual utilities
- developer-friendly utilities

## 19. Deployment contract

- Use Vercel for application hosting.
- Keep Cloudflare as DNS only.
- Use a preview deployment for every meaningful change.
- Protect production from unreviewed changes.
- Keep redirects and canonical rules stable.
- Do not change public URLs unless there is a strong reason.
- Use preview deployments as the default review surface.

## 20. Security and compliance

- Minimize data collection.
- Do not log sensitive user input unnecessarily.
- Add privacy and terms pages before monetization.
- Keep third-party scripts under control.
- Avoid introducing secrets into the client bundle.
- Review ad and analytics vendors before enabling them.
- Add policy pages before monetization goes live.

## 21. Decision rules

- If a change affects URLs, SEO, or monetization, treat it as high impact.
- If a change can be made through the registry, do it there instead of duplicating logic.
- If a tool fits the shared shell, reuse it.
- If a tool needs a backend, prove the need before adding one.
- If there is ambiguity, choose the simplest workable approach and state the tradeoff.
- If a request would create duplicate content or duplicate routes, stop and resolve that first.
- If a change would affect existing rankings or redirects, do not do it silently.

## 22. Definition of done

A tool or page is done only when:
- The route works.
- The locale works.
- The metadata is correct.
- The page is mobile-friendly.
- The preview deployment is clean.
- The sitemap includes it if it should be indexed.
- The page has enough content to be useful.
- The build passes.
- The implementation is maintainable.
- The change does not break existing public URLs.

## 23. Working style

- Keep changes surgical.
- Prefer the smallest useful implementation.
- Match existing patterns before inventing new ones.
- Do not refactor unrelated code.
- Do not introduce complexity just to future-proof a single use case.
- When a tradeoff matters, state it clearly.
- When in doubt, stop at the narrowest safe change and explain why.

## 24. Suggested workflow for Codex

When you work in this repository, use this order:

1. Inspect the relevant files first.
2. Identify the smallest set of files that need to change.
3. Make the code or content change.
4. Verify with the smallest relevant command or browser check.
5. Fix only failures caused by the change.
6. Summarize what changed and what remains risky.

## 25. New file expectations

If this repo grows, keep these file responsibilities stable:

- `app/` for routes and metadata
- `components/` for shared UI
- `features/tools/` for tool registry and implementations
- `lib/` for helpers and SEO utilities
- `messages/` for locale copy
- `public/` for static assets

If a new responsibility appears, add it intentionally and document it here.
