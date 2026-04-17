# Page Audit Automation

## Purpose

Inspect the site page by page, identify weak or incomplete pages, and strengthen them with small, surgical improvements.

The goal is to keep every published page useful, consistent, localized, and ready for search and monetization review.

## Hard constraint

Preserve the site's overall tone, visual language, interaction style, and core functionality.

Do not change the product identity, page personality, or working behavior unless a page is clearly broken.

When a fix is needed:

- Keep the existing tone and structure wherever possible
- Fix only the specific issue found
- Avoid stylistic rewrites
- Avoid feature changes unless they are required to restore correct behavior

## Scope

Audit all public pages, including:

- Home pages
- Locale landing pages
- Tool pages
- Legal pages
- Contact and support pages
- Sitemap and robots-related routes when page content changes

## What to check

For each page, verify:

- The page has a clear purpose
- The title and description are specific and localized
- The content is not thin or placeholder-like
- The page matches the actual code behavior
- The layout works on mobile and desktop
- Any interactive tool shows correct results and labels
- Related links and navigation are helpful
- SEO metadata, canonical behavior, and locale handling are consistent
- Legal, privacy, and monetization wording matches real behavior
- No page exposes dummy values, stale copy, or broken UI states

## Workflow

1. Open one page at a time.
2. Read the page copy, metadata, and related implementation.
3. Compare the page content with the actual code behavior.
4. Decide whether the page is:
   - Good as-is
   - Needs copy cleanup
   - Needs UI/logic correction
   - Needs both
5. Make the smallest safe fix.
6. Re-check the page after the change.
7. Move to the next page.

## Priorities

Fix in this order:

1. Wrong behavior
2. Mismatched copy
3. Missing or weak metadata
4. Thin page content
5. Layout and polish issues

## Change rules

- Prefer small patches over refactors
- Do not change unrelated files
- Do not rewrite whole pages unless necessary
- Keep the original tone and functionality intact
- Keep locale strings natural
- Keep the registry, page content, and UI in sync
- If a fix affects several locales, update all affected locales together

## Verification

After each meaningful fix, verify:

- The page renders correctly
- The result shown to users matches the actual calculation or behavior
- The page text matches the code
- `npm run typecheck` still passes
- `npm run lint` does not introduce new errors

## Output format

For each audit pass, report:

- Page inspected
- Issue found, if any
- Files changed
- Verification result
- Whether more pages remain

## Stop condition

Stop when all public pages have been checked and any discovered issues have been fixed.

If every page has already been inspected and no further corrections are needed, end the run and do not continue into extra review passes.
