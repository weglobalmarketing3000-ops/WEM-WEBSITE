# November 1 gift-search rendered Chinese description repair

## Scope

No November 1 approved topic existed. This run repaired only the approved October 29 gift-search Chinese runtime meta description and preserved the original publication date.

## Origin reconciliation

- Current custom-domain origin: `dpl_AsQwpZBQCtuhbGxNKnNDTkp7s2gz` / `https://wem-website-az4ao5xk9-wem1.vercel.app`.
- Origin state: `READY`, created October 31 at 06:29:54 PDT by a CLI deployment with no `meta` or `gitSource` attribution.
- Preserved unchanged: BlogList SHA-256 `fa707b7657e084b19abfee8b589039c1e66171f22dae8046a05c41be86ded761`, cache version `fa707b7657e0`, October 30 post-sale content, gift-search October 29 index card, v2 covers, sitemap and `llms.txt`.
- Defect: the Chinese switch set gift-search's rendered meta description to the October 28 LIVE description. The Chinese JSON-LD and index already contained the correct approved gift-search description.
- The origin also omitted all permanent redirects.

## Narrow repair

Patch: `outputs/patches/2026-11-01-gift-search-zh-description`

- Replaced only the incorrect Chinese runtime description with `把 TikTok Shop 黑五送礼内容接到搜索和商品页，用准确名称、变体、优惠与配送信息帮助用户找到并选对商品。`
- Restored all four permanent redirects.
- Preserved all shared index, cache, article, cover, body-visual and discovery content from the current production baseline.

## Deployment and verification

- Preview: `dpl_E1Ux7aE466ev8nGqkjzLPXpj2c5x`; exact 2/2 patch readback passed.
- Production: `dpl_CEQLgqXRhPsJ5VYZEjy9qSEfN5Q5` / `https://wem-website-d7el0nqb1-wem1.vercel.app`.
- Fingerprint: `fc76b98ec4c85a4a423a2575d6fa93d40ae43731af9099acdb5a745502c59c0a`.
- Receipt: `succeeded / production_health_complete / exit 0`.
- Both custom domains point to the matching READY deployment; all 312 sitemap URLs returned HTTP 200.
- Exact preview and production 2/2 file readbacks passed.
- Public EN/ZH desktop/mobile QA passed hashes, schema, render, index and discovery. Both direct language routes and both switch directions render the topic-correct English and Chinese descriptions.
- Three article images, six FAQs, Source notes, topic CTA, booking/footer, October 29 schema/date, fresh/warm index, v2 thumbnails, sitemap and `llms.txt` passed.
- Independent verifier passed `fa707b7657e0` cache preservation, no browser errors/overflow, v2 cover hashes, no-store and all 16 redirects.

## Public URLs

- EN: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page
- ZH: https://www.weglobalmarketing.com/blog/tiktok-shop-bfcm-2026-gift-search-product-page?lang=zh

Primary publisher remains PAUSED. The daily catch-up monitor remains ACTIVE. No Lark/email send, duplicate publisher, new monitor or November 1 article was created.
