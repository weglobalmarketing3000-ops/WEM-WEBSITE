# 2026-10-29 WEM gift-search publication acceptance

## Public result

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page?lang=zh
- Accepted production: `dpl_9EmMoyHdJHMJqG6AAeq1P6otwmzd`
- Production URL: `https://wem-website-3sn0e95nq-wem1.vercel.app`
- Patch fingerprint: `106fdbb7432433ee51a7c66e421d789f4cd8490a7de7971c6230bba44046f830`
- Receipt: `outputs/deployment-receipts/106fdbb7432433ee51a7-production.json` — `succeeded / production_health_complete / exit 0`

## Reconciliation and repair

The scheduled publisher had already created immutable production `dpl_GPWTUXupw2Y2XXPR4hDVTKftB4pU`. Its 15-file delta was recovered instead of creating a duplicate article. Origin fingerprint: `d42caa35ecb81568610996572fcaad56af8203fd7c1164ffdabd8850f3150417`.

The recovered build had a checkerboard-pattern cover, only one localized body visual, stale source notes, an unrelated case citation, a generic CTA, a wrong visible index date and missing inherited redirects. The accepted 26-file repair:

- replaces EN/ZH covers and thumbnails with corrected v2 assets;
- preserves the approved WEM typography, warm-white/lavender palette, article spacing and compact Source notes format;
- adds a second localized gift-readiness decision visual;
- cites the TikTok Shop U.S. BFCM guide and the relevant WEM fashion cold-start case;
- adds a gift-search-specific CTA, corrects the October 29 card date and restores all permanent redirects;
- carries forward the full October 28 LIVE article repair, including its second localized visual, CTA and footer.

## Acceptance evidence

- Local QA: `outputs/2026-10-29-gift-search-current-local-qa/report.json` — hashes/schema/render/index/discovery all true.
- Protected preview: `dpl_GUGmexmjNhjV4gjakfZpQ86PX5Wq`; exact 26-file readback passed.
- Production exact readback: `outputs/2026-10-29-gift-search-production-readback-final.json` — 26/26 files matched.
- Public QA: `outputs/2026-10-29-gift-search-current-public-qa/report.json` — bilingual desktop/mobile rendering, language switching, three images, six FAQs, Source notes, CTA, booking/footer, schema and discovery all passed.
- Continuity verifier: `outputs/2026-10-29-publication-continuity-verifier.json` — October 29 rank 1, October 28 rank 2, all current/continuity images 200, all 16 redirect checks passed.
- Both custom domains point to the accepted READY deployment; all 308 sitemap URLs returned 200.

October 30 was not allocated or advanced. No duplicate publisher, Lark/email send or new recurring monitor was created.
