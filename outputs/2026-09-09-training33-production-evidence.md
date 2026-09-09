# training-33 production evidence

- Daily target: `2026-09-09 training-33`
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-live-control-room
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-live-control-room?lang=zh
- Final production deployment: `dpl_B4D2TyWFgcNhvw1BJhHGpuemm68t`
- Production URL: `https://wem-website-kag1y2w6x-wem1.vercel.app`, aliased to `https://www.weglobalmarketing.com`.
- Preview deployment: `dpl_87tB72GhfTwoqhyc8yBkFE7jrigx` at `https://wem-website-ocgz2adie-wem1.vercel.app`.
- Content validation passed: 1,359 English body words and 2,282 Chinese body characters after markup removal; six FAQs per language; canonical, hreflang, dual BlogPosting and FAQ schema, sitemap, llms.txt, no em dash, and no English sentence leakage in Chinese.
- Browser QA passed in both languages and desktop/mobile layouts: Aug 1-style typography and colors, dark Source notes, six FAQ cards, three named Related guides, CTA, full footer, no broken images, no `undefined`, and no document overflow at 390 x 844.
- Blog index passed fresh-load and warm-cache readback: content-hash script version `e96e9e95f4e4`; training-33 is rank 1, followed by Sep 8 and Sep 7.
- Cover SHA-256: `e8e488330cd65c65e1ac567bb2bc21a9f34b7de85acf59ca6ccc5ef991f851d3`, matching the accepted local and public assets.
- The cover uses the approved WEM series composition and official logo. The raw right-side LIVE control-room scene was generated with imagegen, then composed into the established series template.
- All 219 sitemap routes returned HTTP 200 after the final production promotion.
- Durable deployment recovery tests passed for late Vercel result parsing, preview recovery, duplicate invocation protection, stale lock recovery, empty-owner lock protection, and READY-deployment resume without redeployment.
- Production receipt: `outputs/deployment-receipts/17b1d88f4df1cdc8a951-production.json`, state `succeeded`, stage `production_health_complete`.
- Queue state after publication: 14 approved topics remain; `training-34` is next for 2026-09-10 PT.

## Scoped Pen handoff

The public article, index ordering, warm-cache behavior, bilingual rendering, assets, and sitemap health were independently accepted by Pen. State: `public_qa_complete` / `published_complete`.
