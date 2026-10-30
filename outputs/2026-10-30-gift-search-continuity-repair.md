# 2026-10-30 gift-search continuity repair acceptance

## Scope

No October 30 approved publication allocation exists. This run reconciled and repaired only the October 29 article without changing its publication date or creating another article.

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page?lang=zh

## Origin reconciliation

The current custom-domain origin was `dpl_8x8EQTpocFQbmKcmorNczFMCdc7i`, created October 29 at 06:35 PDT. Compared with the earlier accepted deployment, it contained newer v2 cover, optimized image and thumbnail assets. Those visual assets passed comparison with the three approved WEM covers and were preserved.

The same origin had four regressions:

- the required second localized gift-readiness visual was deleted;
- Source notes reverted from October 29 to September 30;
- the gift-search CTA was replaced with unrelated promotion-reporting copy;
- all four permanent redirects were absent.

## Repair and acceptance

The narrow patch contains only four files: the repaired bilingual article, two localized SVGs and `vercel.json`. It was applied to the current immutable origin rather than an older full-site snapshot.

- Preview: `dpl_861s3hCUS5pqHCL7ueSwANmVw5Xm`
- Production: `dpl_5nzKqnJUZSiYgSQwRBVDkY6DJmis`
- Production URL: `https://wem-website-g7121qjb0-wem1.vercel.app`
- Fingerprint: `d67d915acd14b03d853dda8a56c5a5da10a9c440c84fc22f31de2ed1e8f4d878`
- Receipt: `outputs/deployment-receipts/d67d915acd14b03d853d-production.json`
- Receipt terminal state: `succeeded / production_health_complete / exit 0`

Evidence:

- 4/4 narrow patch files matched on preview and production.
- 26/26 full expected gift-search/continuity files matched on preview and production.
- Local, protected-preview and public QA passed hashes, schema, render, index and discovery.
- EN/ZH desktop/mobile, language switching, three localized images, six FAQs, Source notes, relevant case citation, gift-search CTA, booking/footer and cache checks passed.
- The October 29 first-card date, both BlogPosting dates and sitemap lastmod passed independently.
- Both domains resolve to the accepted READY production; 308 sitemap URLs returned 200.
- Cross-article continuity and all 16 legacy redirect checks passed.

Primary publisher remains intentionally PAUSED and the daily catch-up monitor remains ACTIVE. No October 30 article, duplicate publisher, Lark/email send or recurring intraday check was created.
