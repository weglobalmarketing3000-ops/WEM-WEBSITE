# q4-11 and q4-12 publication evidence — 2026-10-08 PT

## q4-11 — original date 2026-10-07

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-brand-cobranded-originality-protection-decision
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-brand-cobranded-originality-protection-decision?lang=zh
- Production deployment: `dpl_5HazQZqCczi4LqqGJxcWhQFkiRo4`
- Publication commit: `d604826`
- Terminal readback: both public routes return 200; independent verifier passes blog-card rank 2, visible date, English and Chinese `BlogPosting.datePublished`, and sitemap `lastmod`.

## q4-12 — original date 2026-10-08

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-shop-tab-eligibility-three-gate-audit
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-shop-tab-eligibility-three-gate-audit?lang=zh
- Source: TikTok Shop Seller University, “Shop Tab Eligibility Requirements,” dated 2026-09-24 and revalidated 2026-10-08.
- Publication commit: `d8f5665`
- Final reconciled production: `dpl_DvaucD9tXLdYNmvmYPJ9p6RCy2yQ` / https://wem-website-59k8eim5v-wem1.vercel.app
- Receipt: `outputs/deployment-receipts/445b5e89611d4f68e135-production.json` — `succeeded`, `production_health_complete`, exit 0; all 266 sitemap URLs returned 200.
- Public QA: `outputs/2026-10-08-q4-12-public-qa/report.json` — hashes, schema, render, index and discovery all passed.
- Independent verifier: all five rank/date/schema/sitemap checks passed at rank 1.
- Duplicate recovery: the later duplicate route `/blog/tiktok-shop-shop-tab-eligibility-recommendation-gates` was removed and returns 404; the first complete q4-12 article above remains canonical.

## Queue state

- `q4-11` and `q4-12`: `published_complete`.
- Remaining executable backlog: 18 topics, `q4-13` through `q4-30`.
- Next authorized target: `q4-13`, original date 2026-10-09 PT; not advanced early.
