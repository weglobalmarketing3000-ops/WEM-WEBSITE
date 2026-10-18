# q4-22 production evidence — 2026-10-18 PT

## Published routes

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-return-rejection-evidence-isrr-risk
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-return-rejection-evidence-isrr-risk?lang=zh
- Original publication date: 2026-10-18

## Authentication recovery

- Initial nonterminal baseline readback failed with Vercel `403 forbidden / invalidToken` before any q4-22 preview or production deployment.
- Recovery used the existing authorized Vercel CLI session. Account identity, the `wem1/wem-website` project and q4-21 production `dpl_9TMHJkuhcRJSFJT3nRKcH2mKouhy` were read successfully.
- The immutable readback helper then downloaded all 1,706 q4-21 production files successfully. No credential was printed, replaced or copied into an output, and no access control was bypassed.

## Source and content boundary

- ISRR Requirements: `outputs/2026-10-18-q4-22-source/isrr-requirements.html`; SHA-256 `ad0f0f41a9d9c03e0e7db55889fb55cd1c11123f04c2e340688ad1643244c0c5`.
- Requirements for Managing Returns, Refunds, and Replacements: `outputs/2026-10-18-q4-22-source/returns-refunds-replacements.html`; SHA-256 `f575f15a0514c6081646acb3ef9e19094f3f114f439629968cbe4cffb7f6bfe9`.
- Article length: 1,624 English words and 2,682 Chinese characters.
- Each language has a localized cover, two localized body visuals, six FAQs, Source notes, three related guides, Ready to Talk CTA, booking link and footer.

## Immutable deployment chain

- Target-only patch: `outputs/patches/2026-10-18-q4-22-isrr-return-evidence`
- Patch file count: 17
- Patch fingerprint: `2e0e0acac8ecf57d8ea700e2402a8743001cd61ef2ebcc9b3c8b887494eabcaa`
- Preview deployment: `dpl_AndS18AJNnUmYZjZo1Ntb1PTnEwy`
- Preview URL: https://wem-website-pdrf9kspz-wem1.vercel.app
- Preview receipt: `outputs/deployment-receipts/2e0e0acac8ecf57d8ea7-preview.json`
- Production deployment: `dpl_BBcbYXHjxfVVzGBcRDHfdo6whEnv`
- Production URL: https://wem-website-3zp4lgx1u-wem1.vercel.app
- Production receipt: `outputs/deployment-receipts/2e0e0acac8ecf57d8ea7-production.json`
- Receipt terminal state: `succeeded / production_health_complete / exit 0`
- Both `weglobalmarketing.com` and `www.weglobalmarketing.com` were explicitly aliased to the production deployment.

## QA and visual acceptance

- Local report: `outputs/2026-10-18-q4-22-local-qa/report.json` — `local_qa_complete`; hashes, schema, render, index and discovery all true.
- Immutable preview report: `outputs/2026-10-18-q4-22-preview-qa/report.json` — `preview_qa_complete`; all five checks true.
- Anonymous public report: `outputs/2026-10-18-q4-22-public-qa/report.json` — `public_qa_complete`; all five checks true.
- Public QA covered EN/ZH desktop and 390x844 mobile, language switching, canonical/hreflang, BlogPosting and FAQPage schema, three images per language, six FAQs, Source notes, three related links, CTA, booking/footer, rank-1 fresh/warm index, sitemap and `llms.txt`.
- Independent publication verifier passed q4-22 at rank 1 and q4-21 through q4-17 at ranks 2 through 6.
- Cover PNG hashes: EN `5981c8b2f72edd29e4c3e04fcf5da9e3b74377a46222c29287f6b1e2dba2acb0`; ZH `4520d8dc57d8a06185e4a001b25634810d6dace887524dc238ca59baa3077457`.
- Thumbnail JPG hashes: EN `e3fc495d068900afbcbac1e57ea184f45bbd84ab25c98724a844ee7a98737067`; ZH `4d0c16d2279e8dd8c109dcecbc6db96e4142450a2e84e5ccfa42097925d40c1a`.

## Queue preservation

- q4-22 is `published_complete`.
- Remaining queue is eight topics, q4-23 through q4-30.
- q4-23 was not advanced or published early.
