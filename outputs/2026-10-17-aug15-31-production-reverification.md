# WE Marketing Aug 15–31 production re-verification

- Verified: 2026-10-17 PT
- Production deployment: `dpl_2zE1R2mWTcDyLCeMmVDedMw8MfXD`
- Production domain: https://www.weglobalmarketing.com
- Reference layout: https://www.weglobalmarketing.com/blog/tiktok-shop-sample-decision-system

## Publication result

The seven requested historical articles dated Aug 24–30 are published in English and Chinese:

| Date | Route |
|---|---|
| 2026-08-24 | `/blog/tiktok-shop-seller-assistant-human-control` |
| 2026-08-25 | `/blog/validate-tiktok-shop-ai-report` |
| 2026-08-26 | `/blog/tiktok-shop-regulated-claims-review` |
| 2026-08-27 | `/blog/tiktok-shop-violation-first-24-hours` |
| 2026-08-28 | `/blog/tiktok-shop-correct-or-appeal` |
| 2026-08-29 | `/blog/tiktok-shop-policy-vs-milestone-quiz` |
| 2026-08-30 | `/blog/tiktok-shop-ai-first-90-days` |

Each Chinese page is available by adding `?lang=zh` to the route.

## Browser parity audit

The production browser audit covered the Aug 1 reference, the Aug 8 Source-notes reference, and every substantive article dated Aug 15–31. It ran 68 route/language/viewport combinations across English and Chinese at 1280×720 and 390×844.

Result: `issues: []`.

Checks included:

- HTTP 200 and correct visible language
- H1 font family, size, weight, and color parity with the Aug 1 reference
- body-copy font parity
- Source notes heading family, size, weight, color, underline, and plain-section treatment
- visible hero image and no broken images
- FAQ section
- “Ready to scale” CTA
- complete footer
- no horizontal overflow on mobile

The Aug 21 and Aug 22 dates do not have distinct historical posts. They were not silently duplicated or backdated: the LIVE preheat article is canonically dated Aug 23. The requested Aug 24–30 sequence is complete.

## Metadata and discovery audit

All seven Aug 24–30 articles passed the canonical publication verifier for:

- the expected blog-card slug and visible date
- English `BlogPosting.datePublished`
- Chinese `BlogPosting.datePublished`
- sitemap URL and `lastmod`

## Evidence

- Browser audit: `outputs/2026-10-17-aug15-31-production-audit.json`
- Source notes screenshot: `outputs/2026-10-17-aug24-source-notes.png`
- Original publication evidence: `outputs/2026-08-31-aug24-30-production-evidence.md`
- Publication commit: `9b87050` (`Publish Aug 24-30 WEM blog backfill`)

