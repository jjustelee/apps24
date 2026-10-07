# Apps24 analytics setup

GA4 requires a verified web-stream measurement ID and explicit activation.
Search Console access is separate from installing analytics on the website.

## Verified existing stream

The owner's signed-in Google Analytics UI was checked on 2026-10-08:

- Account: `apps24.io`; existing property ID: `458182997`.
- Web stream URL: `https://apps24.io`.
- Measurement ID: `G-GT4QQFGPTX` (a public tag identifier, not a password).
- Enhanced Measurement was disabled on 2026-10-08 before launch.
- The two GA4 environment variables were saved for Vercel Production only.
- No new property, stream, API secret or third-party permission is needed.

The measurement ID is not activated by this document. Deploy the code after
configuring the environment, then verify consent behavior and Realtime collection.

## Create and configure GA4

1. Sign in to https://analytics.google.com/ using the site owner's Google account.
2. Create an Apps24 property if one does not exist. Choose the intended reporting
   time zone and currency; Korea/Seoul and KRW are suitable for a Korean operator.
3. Create a Web data stream for https://www.apps24.io. Do not create a second
   property if an Apps24 property already exists.
4. Turn off Enhanced Measurement for this stream, including browser-history
   page changes, site search, form interactions and automatic downloads. The
   website sends its own sanitized page views. `send_page_view: false` alone
   does not disable history-based Enhanced Measurement.
5. Do not enable Google signals or advertising personalization for this setup.
   Review data retention and data-sharing choices in the owner's account.
6. Copy the measurement ID beginning with `G-` (not a property ID, `GT-` tag ID,
   `GTM-` container ID or AdSense publisher ID).
7. Set the following Vercel Production environment variables and redeploy:
   - `NEXT_PUBLIC_GA4_MEASUREMENT_ID`: the real measurement ID.
   - `NEXT_PUBLIC_GA4_ENABLED`: `true`, only after the settings above are verified.
8. On the live site, confirm there is no GA4 request before consent or after
   rejection. Accept analytics and check a sanitized `page_view` in GA4 Realtime.
   Navigate between tools and languages; each navigation should produce one view.
   Reject through the footer settings and check that subsequent views stop.

Never enable real measurement in development or Vercel Preview. Test IDs are
used only with intercepted browser requests; they must not be deployed.

## Measurement scope

- All 403 published pages, across ten languages, are eligible for page views.
- The basic consent approach does not load the Google script before opt-in.
- Refusing does not restrict tools. The choice is remembered in localStorage;
  if storage is blocked, it lasts only for the current page session.
- Query strings and fragments are removed. Unknown routes are not measured.
- Page titles are published paths, not DOM text. External referrers are reduced
  to their origin. Campaign parameters are intentionally not collected.
- No text, passwords, salary values, file contents or filenames are sent.
- This first setup measures page visits, not tool completion/conversion rates.
- Revocation immediately sets Google's per-property disable flag and clears
  the site's default `_ga` and `_ga_<stream>` cookies. It does not erase data
  already stored by Google. Consent changes propagate to other open tabs.
- Analytics preferences are not a Google-certified advertising CMP. Ads remain
  disabled and their consent requirements must be handled separately.
- Counts will exclude visitors who refuse, block scripts, or block network calls.

## Read Search Console reports

Reports can be read in the owner's signed-in browser when access to the Apps24
property is already available; this does not require a new third-party grant.
For API-based access, GSC Wizard is an optional third-party integration, not
Google. The owner must install it and approve access to the intended property.
Review permissions before approving. No password or authentication code should
be sent in chat.

After connection, verify the selected property (`sc-domain:apps24.io` or the
correct https://www.apps24.io/ URL property) and date range. Review search
clicks, impressions, CTR, position and indexed-page coverage. Compare the period
before the traffic decline with the current period; do not change property
settings, submit URLs or share reports without an additional request.

## Official references

- https://support.google.com/analytics/answer/9304153
- https://developers.google.com/analytics/devguides/collection/ga4/views
- https://support.google.com/analytics/answer/9216061
- https://developers.google.com/tag-platform/security/concepts/consent-mode
- https://developers.google.com/tag-platform/security/guides/privacy
- https://support.google.com/analytics/answer/6366371
