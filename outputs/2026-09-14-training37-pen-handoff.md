# Pen handoff: training-37 recovered and accepted

- Target/date: `2026-09-13 training-37` recovered on 2026-09-14 PT, retaining its assigned Sep. 13 publication date.
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-creator-merchant-content-growth-stage
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-creator-merchant-content-growth-stage?lang=zh
- Scoped patch fingerprint: `3abebd1ee3c6bf1ea05160aa4187796accda078348eaa1a3c8f03dd9ba30b128`
- Preview: `dpl_4bJUkksGMSjjBVU4mUgYXUuo8AxW`, READY; authenticated exact file/hash readback passed.
- Production: `dpl_4jsF4kryuThnqKT7pBYmarP62mof`, Vercel READY and aliased to the production domain.
- Note: the wrapper receipt is `terminal_error` only because its immediate homepage-title probe ran before alias propagation. Independent anonymous production readback then passed homepage, target EN/ZH, rank-one index/date, sitemap, llms, and all five versioned assets.
- Publication verifier: passed rank 1, `2026-09-13` visible index date, EN/ZH `BlogPosting.datePublished`, and sitemap `lastmod`.
- Rendered QA: all eight predecessor-continuity combinations passed: training-37 and training-36, each in English and Chinese at 1280x720 and 390x844. Every view passed active/inactive language isolation, loaded cover/body assets, six visible FAQs, three related guides, localized CTA/contact action, footer, no `undefined`, and no horizontal overflow. Fresh and warm blog-index reads at both viewports also passed exact training-37 -> training-36 -> training-35 order and `BlogList.compiled.js?v=60257bc2d125`.
- Browser report: `outputs/2026-09-14-training37-production-browser-qa.json`; eight screenshots: `outputs/2026-09-14-training37-production-qa/`.
- Exact public/patch byte evidence: full cover SHA-256 `1f1f3a52f605960d900bbd0e73eeab2b87f155f47b0f52a47f1d34bbdfb016db`; 880px thumbnail SHA-256 `70e2071ebef5ab3c80e1c47ad94a357c53454bd745226f73f2b6bb033e9448e4`; BlogList SHA-256 `526c0a86078e2b7d39266285e1828016674bfd21de1c5802a35f6d21d726fb7f`. Each public byte stream exactly matched the accepted patch.
- Deployment receipts/logs: `outputs/deployment-receipts/3abebd1ee3c6bf1ea051-preview.json`, `outputs/deployment-receipts/3abebd1ee3c6bf1ea051-production.json`, and `outputs/deployment-receipts/logs/3abebd1ee3c6bf1ea051-{preview,production}.log`. The production receipt's wrapper status is superseded only by the same deployment's READY/alias log plus the complete anonymous public acceptance above; it is not evidence for a redeploy.
- Next authorized target: `training-38`, dated 2026-09-14.
