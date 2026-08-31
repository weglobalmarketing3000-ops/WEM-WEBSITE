# WEM Aug 24-30 historical backfill and Aug 15-31 format repair

- Completed: 2026-08-31 PT
- Production deployment: `dpl_431L8kS12vuKLQFjDezw98qcJw4B`
- Production URL: https://wem-website-g3ava0v13-wem1.vercel.app
- Custom domain: https://www.weglobalmarketing.com
- Scoped patch: `/Users/wendylin/Downloads/WE Marketing Design System/outputs/patches/2026-08-31-aug24-30-backfill-unify`
- Browser report: `/Users/wendylin/Downloads/WE Marketing Design System/outputs/2026-08-31-aug24-30-production-qa/report.json`

## Published routes

| Date | English | Chinese |
|---|---|---|
| 2026-08-24 | https://www.weglobalmarketing.com/blog/tiktok-shop-seller-assistant-human-control | https://www.weglobalmarketing.com/blog/tiktok-shop-seller-assistant-human-control?lang=zh |
| 2026-08-25 | https://www.weglobalmarketing.com/blog/validate-tiktok-shop-ai-report | https://www.weglobalmarketing.com/blog/validate-tiktok-shop-ai-report?lang=zh |
| 2026-08-26 | https://www.weglobalmarketing.com/blog/tiktok-shop-regulated-claims-review | https://www.weglobalmarketing.com/blog/tiktok-shop-regulated-claims-review?lang=zh |
| 2026-08-27 | https://www.weglobalmarketing.com/blog/tiktok-shop-violation-first-24-hours | https://www.weglobalmarketing.com/blog/tiktok-shop-violation-first-24-hours?lang=zh |
| 2026-08-28 | https://www.weglobalmarketing.com/blog/tiktok-shop-correct-or-appeal | https://www.weglobalmarketing.com/blog/tiktok-shop-correct-or-appeal?lang=zh |
| 2026-08-29 | https://www.weglobalmarketing.com/blog/tiktok-shop-policy-vs-milestone-quiz | https://www.weglobalmarketing.com/blog/tiktok-shop-policy-vs-milestone-quiz?lang=zh |
| 2026-08-30 | https://www.weglobalmarketing.com/blog/tiktok-shop-ai-first-90-days | https://www.weglobalmarketing.com/blog/tiktok-shop-ai-first-90-days?lang=zh |

## Editorial and visual acceptance

- English bodies: 1,380-1,426 words each.
- Chinese bodies: 1,802-1,866 Chinese characters each.
- Each language includes six useful FAQs, source notes, direct answer, decision gates, operating sequence, hypothetical example, and smallest useful next action.
- Seven versioned composited covers include final headline and official WEM logo; optimized and 880px thumbnail variants were generated.
- Aug 23 `tiktok-shop-live-preheat-system` is protected from shared hero-copy overlay. Production screenshot confirms one clean cover composition.
- Every actual article dated Aug 15-31 uses the Aug 1-style Source notes treatment: sans-serif heading/body, blue-purple-pink underline, plain section, and no oversized serif source card.
- CTA and full footer are present on every checked English and Chinese route.

## Production verification

- `verify-publication.mjs` passed ranks 2-8 for Aug 30 through Aug 24. Each check passed card URL, visible card date, English BlogPosting date, Chinese BlogPosting date, and sitemap lastmod.
- 15 substantive Aug 15-31 article routes returned HTTP 200.
- 64 referenced page assets returned HTTP 200.
- All 104 sitemap routes returned HTTP 200.
- Seven public cover SHA-256 hashes matched the accepted local PNG files.
- Browser QA passed 45 combinations: all 15 routes in English/Chinese desktop plus all 15 English routes at 390x844. Final report has `bad: []` after bounded retries for slow-loading images.
- Browser checks covered correct visible language, no broken images, no document overflow, Source notes font/container, CTA, footer, and zero duplicate hero overlays.

## Evidence files

- Blog index screenshot: `outputs/2026-08-31-aug24-30-production-qa/blog-index.png`
- Aug 23 cover screenshot: `outputs/2026-08-31-aug24-30-production-qa/preheat-cover.png`
- Source notes screenshot: `outputs/2026-08-31-aug24-30-production-qa/source-notes.png`
- Machine-readable browser report: `outputs/2026-08-31-aug24-30-production-qa/report.json`
