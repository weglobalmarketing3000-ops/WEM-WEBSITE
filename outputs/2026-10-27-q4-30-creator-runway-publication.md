# q4-30 and BFCM creator-runway publication reconciliation

Status: `published_complete`

## Public URLs

- q4-30 English: https://www.weglobalmarketing.com/blog/tiktok-shop-order-cancellation-control
- q4-30 Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-order-cancellation-control?lang=zh
- Creator runway English: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-creator-content-runway
- Creator runway Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-creator-content-runway?lang=zh

## Origin reconciliation

- q4-30 immutable origin: `dpl_GkL4LL9uZYt2ckWFEioXbJpVvc6b`; recovered delta fingerprint `d64e2f53c2e6fd049b19e96a51a3ef4ab9285e244e2e9a29bf1cf87f6a2e99f3`; receipt `outputs/deployment-receipts/d64e2f53c2e6fd049b19-production-origin.json`.
- Creator runway immutable origin: `dpl_E1nkaYnSNPRdGQLA433ng5WVWMkM`; recovered delta fingerprint `24cf9e41789b0005703a29a59f1602c50f7bb39e93fe8c8bc59a909a98e95d18`; receipt `outputs/deployment-receipts/24cf9e41789b0005703a-production-origin.json`.

## Accepted repair and deployment

- Added one second localized body visual per language to each target and replaced the generic promotion CTA with topic-specific copy.
- Restored q4-29 and q4-28 second localized body visuals plus the q4-28, q4-26, q4-24 and q4-20 legacy redirects.
- Preview: `dpl_CiCxoR8taNgXsnYfVk2gevaoXTGY`; all 18 published patch files matched exact deployment readback.
- Production: `dpl_Gh8ALR6hpUC4TEUrxPm9ZB9iaJ1D`; URL `https://wem-website-477ze9e7c-wem1.vercel.app`; READY and assigned to both custom domains.
- Patch fingerprint: `e483f69e1be8392aa91aa5775796c2d533fd569bcec9735f186c93835eee3a79`.
- Receipt: `outputs/deployment-receipts/e483f69e1be8392aa91a-production.json` is `succeeded / production_health_complete / exit 0`.

## Verification

- Both local and public QA reports are `*_qa_complete`; hashes, schema, bilingual desktop/mobile rendering, real language switching, index, discovery, sitemap, `llms.txt`, Source notes, six FAQs, CTA and footer passed.
- Independent verifier passed creator runway at rank 1/date 2026-10-27 and q4-30 at rank 2/date 2026-10-26.
- Cross-article verifier `outputs/2026-10-27-publication-continuity-verifier.json` passed q4-29 rank 3, q4-28 rank 4, current images, dates, cache and all 16 legacy redirect checks across both domains.
- All 304 sitemap URLs returned HTTP 200 during deployment health verification.
- October 28 `bfcm-live-event` was not advanced.
