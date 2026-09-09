# WEM Sept 3-8 historical backfill production evidence

## Production result

- Final production deployment: `dpl_5L4wyKBKP3hG1y9d5VSzYEZ6dygV`
- Deployment URL: `https://wem-website-jmfnrfcwk-wem1.vercel.app`
- Production alias: `https://www.weglobalmarketing.com`
- Isolated live-baseline patch: `outputs/patches/2026-09-09-sep3-8-backfill`
- Local and live acceptance: passed for all six articles; repeated paragraphs: 0.
- Production sitemap health: 218 URLs returned HTTP 200.

## Published articles

1. 2026-09-03, `academy-10`: https://www.weglobalmarketing.com/blog/tiktok-shop-ai-campaign-control-room
2. 2026-09-04, `academy-11`: https://www.weglobalmarketing.com/blog/tiktok-shop-product-compliance-preflight
3. 2026-09-05, `training-29`: https://www.weglobalmarketing.com/blog/tiktok-shop-live-funnel-diagnosis
4. 2026-09-06, `training-30`: https://www.weglobalmarketing.com/blog/tiktok-shop-live-temporary-listing-test
5. 2026-09-07, `training-31`: https://www.weglobalmarketing.com/blog/tiktok-shop-live-auction-category-readiness
6. 2026-09-08, `training-32`: https://www.weglobalmarketing.com/blog/tiktok-shop-live-auction-economics

Each Chinese route is the same URL with `?lang=zh`.

## QA closure

- Browser QA: all 24 combinations passed, covering six articles, EN/zh, desktop and 390x844 mobile.
- Each requested language was the only visible article; visible language controls switched correctly.
- Zero broken images and zero document overflow.
- Each language had exactly six FAQ items; an FAQ was interactively expanded and read back.
- CTA and complete site footer were present.
- Typography and color were repaired to match the Aug 1 reference: Inter/system sans, mixed-case headings, dark `rgb(55,51,47)` Source notes on the warm-white page.
- All 12 article routes contained canonical, hreflang, BlogPosting and FAQ schema, and correct visible dates.
- Blog list ranks passed: 9/8, 9/7, 9/6, 9/5, 9/4, 9/3 at ranks 1-6, with one slug row each and exact accepted card copy.
- Sitemap and `llms.txt` contain all six routes.

## Cover SHA-256 readback

- academy-10: `5678cedd88b10c0123c574e8eb77abb603200b343767b0a0f9541bbd41f30577`
- academy-11: `daeac8e0e89603a5d895df1b37404170e4fec4a9565419a6fede41f73e45f54f`
- training-29: `323f2b86afef77c6c602264f24c7359712e072e828e3db8917c1444157d8c4d5`
- training-30: `13101a77656e4f0219ddb38a275a1dcc13032e02aebd503bd0e4d8c81934bd84`
- training-31: `615d8362e221e2ea15fadbc9fc927e2065242e0c644f4f2b54c23939c7bd7c59`
- training-32: `761ce3a21ccf37ed5d5f787b794e02e93643d500d99bda0556606b8b8f6ac395`

## Queue state

- Six historical rows are `published_complete`.
- Fifteen approved topics remain: `training-33` through `training-47`.
- `training-33` is next for the normal 2026-09-09 PT run; dates continue daily through 2026-09-23.
- Empty runs on due publication dates are classified as `cadence_gap`, not success.
