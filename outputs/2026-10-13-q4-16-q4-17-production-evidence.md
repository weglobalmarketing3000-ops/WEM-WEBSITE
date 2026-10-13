# q4-16 and q4-17 production evidence

## q4-16 recovery

- Original publication date: 2026-10-12
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-collection-warehouse-handoff
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-collection-warehouse-handoff?lang=zh
- Recovered immutable production: `dpl_7uGa6kHWzL9dUX7DFEqt8hbnQnzF`
- Audit patch: `outputs/patches/2026-10-12-q4-16-production-readback`
- Final public QA: `outputs/2026-10-12-q4-16-production-public-qa/report.json`
- Result: hashes, schema, render, rank-2 index and discovery all pass after q4-17 publication.
- Independent verifier: all five date, rank, schema and sitemap checks pass at rank 2.

## q4-17 publication

- Original publication date: 2026-10-13
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-qualifying-dispatch-event
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-qualifying-dispatch-event?lang=zh
- Source archive: `outputs/2026-10-13-q4-17-source/`
- Generated raw scene: `outputs/2026-10-13-q4-17-visuals/qualifying-dispatch-raw-scene-v1.png`
- Target-only patch: `outputs/patches/2026-10-13-q4-17-qualifying-dispatch`
- Patch fingerprint: `4729621b114edd659d58a97a1e6b1950d1a1ebb95e6af30a2239228f25d1f92f`
- Protected preview: `dpl_9sny6wX7MopsvfinTWqnBpd4wtC1`
- Production: `dpl_8GEYiVr1NTXbkcUgXgwcXRNNi3gn`
- Production URL: https://wem-website-6mwpramnj-wem1.vercel.app
- Terminal receipt: `outputs/deployment-receipts/4729621b114edd659d58-production.json`
- Final public QA: `outputs/2026-10-13-q4-17-public-qa/report.json`
- Result: 17 exact hashes, schema, EN/ZH desktop and mobile render, language switching, 3 localized images, 6 FAQs per language, Source notes, CTA, booking/footer, rank-1 fresh/warm index and discovery all pass.
- Independent verifier: all five date, rank, schema and sitemap checks pass at rank 1.

## Concurrency reconciliation

The custom domain initially exposed a concurrent q4-17 HTML page whose nested body-image paths returned 404. The accepted production contained the missing assets and was explicitly assigned to both `www.weglobalmarketing.com` and `weglobalmarketing.com`. Final anonymous QA was run only after the alias change and passed.

## Queue boundary

q4-18 remains `approved_unfinished`. No q4-18 content, patch or deployment was created.
