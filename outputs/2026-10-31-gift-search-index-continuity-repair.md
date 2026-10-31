# October 31 gift-search index continuity repair

## Scope

No October 31 approved topic existed. This run repaired only the approved October 29 gift-search card regression and did not create or advance a topic.

## Origin reconciliation

- Current custom-domain origin: `dpl_F2YdBewCQtCUihMT97AEUaVE8un4` / `https://wem-website-g5kjg54in-wem1.vercel.app`
- Origin state: `READY`, created October 31 at 03:20:39 PDT by a CLI deployment with no `meta` or `gitSource` attribution.
- The origin added `tiktok-shop-bfcm-post-sale-continuation` dated October 30. No matching approved weekly-plan row was found. The publication, routes, assets, sitemap and `llms.txt` entries were preserved and were not adopted as authorized by this monitor.
- Gift-search article HTML, v2 covers and localized body visuals remained identical to the accepted package. The shared index regressed its card to October 28 and v1 thumbnails; the origin also omitted permanent redirect rules.

## Narrow repair

Patch: `outputs/patches/2026-10-31-gift-search-index-continuity`

- Restored EN card date `Oct 29, 2026` and ZH card date `2026 年 10 月 29 日`.
- Restored EN/ZH v2 card thumbnail references.
- Updated `blog.html` to content hash `320702b93b98`.
- Restored all four permanent redirects.
- Preserved the current October 30 post-sale entry and current sitemap/llms discovery.

## Deployment and verification

- Preview: `dpl_GXP3qrsyS612EbfRdjcaynQRCcbd`; exact 4/4 patch readback passed.
- Production: `dpl_BsWiEz8XeSHMVrmrjsiaQKSePQ4Z` / `https://wem-website-d8nvstgky-wem1.vercel.app`.
- Fingerprint: `00134fb83df518f4956ab98a578adca3056b72f0696e378656ce8306edb79d42`.
- Receipt: `succeeded / production_health_complete / exit 0`.
- Both custom domains point to the matching READY deployment; all 312 sitemap URLs returned HTTP 200.
- Production exact 4/4 readback passed.
- Public QA passed hashes, schema, rendering, index and discovery. EN/ZH desktop/mobile, fresh/warm cache, language switching, three images, six FAQs, Source notes, topic CTA, booking and footer all passed.
- Index order preserved the unrelated post-sale article at rank 1 and restored gift-search to rank 2 with October 29 and v2 thumbnails.
- Independent verification passed gift-search October 29 schema, v2 cover hashes, sitemap/llms, no-store cache and all 16 redirect checks.

## Public URLs

- EN: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page
- ZH: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page?lang=zh

Primary publisher remains PAUSED. The daily catch-up monitor remains ACTIVE. No Lark/email send, duplicate publisher, new monitor or October 31 article was created.
