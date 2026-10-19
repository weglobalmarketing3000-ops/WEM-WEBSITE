# q4-23 production evidence

- Daily target: `2026-10-19 q4-23`
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-chargeback-seven-day-evidence-pack
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-chargeback-seven-day-evidence-pack?lang=zh
- Source revalidation: `outputs/2026-10-19-q4-23-source-revalidation.json`
- Local QA: `outputs/2026-10-19-q4-23-local-qa/report.json`
- Protected preview: `dpl_Di5mMaMPhcmL9LX6sU48SxG58oQf`
- Preview exact-file readback: `outputs/2026-10-19-q4-23-preview-readback.json`
- Production deployment: `dpl_HStjBR2vAnQ9V62yqfkv3Bg6ybZY`
- Production URL: https://wem-website-be2it1xpx-wem1.vercel.app
- Patch fingerprint: `9191f5aaa7c6661f93fc2d557a554b353d2b7ecfcc1ccfab97e9687178bc5bca`
- Receipt: `outputs/deployment-receipts/9191f5aaa7c6661f93fc-production.json`
- Receipt state: `succeeded / production_health_complete / exit 0`
- Sitemap health: 288 URLs returned HTTP 200
- Public QA: `outputs/2026-10-19-q4-23-public-qa/report.json`
- Independent verifier: `outputs/2026-10-19-q4-23-verifier.json`
- Publication verifier: passed rank 1, visible date, both BlogPosting dates and sitemap lastmod for `2026-10-19`
- Final order: q4-23 rank 1, q4-22 rank 2, q4-21 rank 3, q4-20 rank 4
- Current-image regression: 56 current image requests across q4-20 through q4-23 returned HTTP 200
- q4-20 continuity: legacy singular EN route returns permanent 308 to the plural route; `?lang=zh` is retained
- Durable redirect safeguard: root Git deployment config and scoped static deployment config both contain the permanent redirect
- q4-22/q4-21 reconciliation: current legitimate SVG article assets and accepted publication dates were preserved; stale PNG URLs were not treated as current broken content
- Queue boundary: q4-24 was not advanced; primary publisher remains PAUSED; recovery monitor remains ACTIVE; no Lark/email send

## Visual acceptance

- Built-in ImageGen created the transparent raw chargeback evidence scene. It is retained as `outputs/2026-10-19-q4-23-raw-scene-v1.png` and is not a delivery preview.
- Final EN/ZH composited covers contain the official WEM logo and approved headline hierarchy.
- EN/ZH 880px thumbnails retain legible headline and logo.
- Final covers were visually compared with all three approved series references and did not use the rejected multi-panel pattern.
- Cover SHA-256: EN `db3cb38e1094e1a26813a6e21eaadd5580d9ad32966e85ce7a7fa0d4080187a9`; ZH `137b86537be71f054691063743f92a61774d5e9d1c8ae348df84112e1e9a12b4`
- Thumbnail SHA-256: EN `55b63ba7d122e8237cc517aa3310a50f484a9f29f49f3328f365bb726760574f`; ZH `8abd479e3b79378f4f98889a56808b65a4dacd9b5c87edbe5af7b718dcc4b15b`
