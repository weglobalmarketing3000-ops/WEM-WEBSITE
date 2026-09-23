# Growth Autopilot comparison publication handoff

- **Target:** `growth-autopilot-03`, publication date September 23, 2026 PT
- **Status:** `published_complete` after reconciled successor repair and complete public acceptance
- **English:** https://www.weglobalmarketing.com/blog/tiktok-shop-growth-autopilot-vs-gmv-max-pro
- **Chinese:** https://www.weglobalmarketing.com/blog/tiktok-shop-growth-autopilot-vs-gmv-max-pro?lang=zh
- **Patch:** `outputs/patches/2026-09-23-growth-autopilot-comparison`
- **Final patch fingerprint:** `fbf2179678b72af488a826f3479709f0fce181b35546d32a9cd6a13d9d0e0ac8`
- **Final production:** `dpl_7XutTDk9LbemzTu4NJiZsAYHcHgC`, `https://wem-website-hur9uzor1-wem1.vercel.app`
- **Receipt:** `outputs/deployment-receipts/fbf2179678b72af488a8-production.json` — `succeeded / production_health_complete / exit 0`
- **Final public QA:** `outputs/2026-09-23-growth-autopilot-comparison-public-qa/report.json` — `public_qa_complete`, all receipt, hash, schema, render, index, cross-link, and discovery checks true
- **Independent publication verifier:** `verify-publication.mjs --date 2026-09-23 --slug tiktok-shop-growth-autopilot-vs-gmv-max-pro --rank 1` passed all five rank/date/schema/sitemap checks
- **Visual acceptance:** EN/ZH desktop and 390 × 844 mobile; hero, body images, six FAQs, CTA, footer, source notes, and fresh/warm index thumbnails inspected and passed
- **Language-switch acceptance:** actual EN→ZH and ZH→EN clicks passed on desktop and mobile; document language, URL, and runtime canonical all changed to the expected locale
- **Cover SHA-256:** `af775d7f425c58a70f9e439684da7be37accd0ba322f6dd293337203784a56ee`
- **Thumbnail SHA-256:** `e4d6181c9d3dd77d713e802b23d9bb65cb7fff3c4d88008caba3166844565431`

## Reconciliation of the earlier contradictory QA

The original deployment receipt was healthy, but its acceptance report was not. Three reported failures were verifier false negatives: FAQ cards are transformed to `.wem-faq-item` rather than remaining `h3`; raw bilingual HTML intentionally uses the base canonical while client runtime sets the Chinese query canonical; and mobile index thumbnails are lazy-loaded and must be scrolled into view before measuring `naturalWidth`.

The investigation also found and repaired real defects: a duplicate hero text overlay on a cover that already contained copy, literal `**` left in Chinese body text, inherited duplicate Chinese metadata scripts, and incomplete/unlocalized links among the Growth Autopilot foundation, ROI, and comparison articles. The successor patch was rebuilt from the live baseline and deployed once; it was not a blind redeploy.

- **Remaining approved queue:** unchanged; `training-45` recovery, then `training-46` and `training-47` in revised dated order. No carryover publisher was started during this repair.
