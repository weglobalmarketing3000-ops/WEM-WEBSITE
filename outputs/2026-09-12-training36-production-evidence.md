# Training 36 production evidence

## Published article

- English: https://www.weglobalmarketing.com/blog/tiktok-shop-merchant-content-compounding-system
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-merchant-content-compounding-system?lang=zh
- Publication date: 2026-09-12
- Blog index position: rank 1, one target card, visible date `Sep 12, 2026`

## Recovery and language repair

- Recovery preserved the locked `2026-09-12 training-36` target and reused the existing scoped patch.
- The generator now has an independent Chinese six-stage content array. The Chinese renderer no longer inserts English stage copy.
- The first related-guide label was registered explicitly, removing the local `undefined` label.
- Independent acceptance rejected the first production because its stale pre-September-11 baseline dropped `training-35`. That deployment is superseded and is not terminal evidence.
- The corrected generator starts from the accepted September 11 patch, copies the complete previous-day article and assets, and then layers September 12 on top. The verifier now requires exact September 12 -> September 11 -> September 10 order plus the previous-day route, bilingual schema dates, sitemap, `llms.txt`, cover, and four diagrams.
- Local and production verification both pass with 1,462 English body words, 2,814 Chinese characters, no long English sentence leak, six FAQs per language, and all related-guide labels defined.

## Source boundary

The completed source-validation stage used five current TikTok Shop U.S. Seller University sources:

- https://seller-us.tiktok.com/university/essay?knowledge_id=7794751162126
- https://seller-us.tiktok.com/university/essay?knowledge_id=3873040203007786
- https://seller-us.tiktok.com/university/essay?knowledge_id=5769635937191681
- https://seller-us.tiktok.com/university/essay?knowledge_id=2969056891488042
- https://seller-us.tiktok.com/university/essay?knowledge_id=8505668537829133

## Visual production

- Raw scene: `outputs/2026-09-12-training36-assets/training36-merchant-content-system-scene-v1.png`
- Raw scene SHA-256: `481c83365040bebddaf6b16c56b2281ca0775c2d5726c81c9d8cbd5e829d757c`
- Final cover SHA-256: `2113b7c3961dcf9df1b9ff5317e9301fe318f3a33f2cfa6420055fdcb569cd98`
- Thumbnail SHA-256: `0088bd43a34e9e653cd9a50c9827a74d47d1b1fefe9395c95953c7b008e2b5dc`
- Final cover and actual thumbnail were re-inspected with all three approved WEM series references. Headline, official logo, warm-white/lavender field, blue hierarchy, cohesive operating scene and thumbnail legibility passed.
- Public cover bytes exactly match the accepted patch cover.

## Deployment chain

- Superseded rejected production: `dpl_H5QzvG5zcRktyarF7aWDz5xVCMHR`, fingerprint `a971343d46a44cba197c8506528927bf61654400aacc13597b6e59176243df24`, 221 routes. It is retained only as failure evidence.
- Corrected patch fingerprint: `cc1a3844ac35013aab956ae375cbf7e151bec53107c336593e4c85c37be290fb`
- Corrected preview deployment: `dpl_962nGAqAc1VqGmUjQ8NkPDSL7hER`
- Corrected preview URL: https://wem-website-9rahwsfjt-wem1.vercel.app
- Corrected preview receipt: `outputs/deployment-receipts/cc1a3844ac35013aab95-preview.json`
- Corrected production deployment: `dpl_5tj1ai1hsADcuZeHWQEXMrTTcqCF`
- Corrected production URL: https://wem-website-69grkekm6-wem1.vercel.app
- Corrected production receipt: `outputs/deployment-receipts/cc1a3844ac35013aab95-production.json`
- Terminal state: `succeeded`, `production_health_complete`, exit 0
- Production sitemap verification: 222/222 URLs returned HTTP 200

## Public acceptance

- Production verifier passed index content hash, exact rank/order, prior-six preservation, canonical, hreflang, bilingual schema/date, FAQ, sitemap, `llms.txt`, language purity, image integrity, editorial enhancer, and all strengthened September 11 continuity checks.
- Publication verifier passed September 12 at rank 1 and September 11 at rank 2, including visible dates, both BlogPosting dates, and sitemap lastmod.
- Public BlogList SHA-256 exactly matches the patch at `ec2a00a987bd32467bcb637de5e7d1c3435910af3b1871b2f88664657d62d824`; content version is `9521c0f67804`.
- Public September 12 and September 11 article bytes exactly match the corrected patch at `927cfee8a2b2bb083ab8d3462b31b56757b23ec146652b5f1a35f6a4a633f0ef` and `83e80b2168898aceaef2783f6a60cfbd46e976b12f37ee6e3f84219ddcf9313e`.
- Browser QA used real 1280x720 and 390x844 viewports and passed index fresh/warm in both sizes plus September 12 and September 11 English/Chinese pages in both sizes.
- Every visible language has six FAQ cards, three named related guides, localized CTA/contact action, complete footer, no inactive-language leak, no `undefined`, no broken images, and no horizontal overflow.
- On 390px mobile, all four H1 blocks stay within x=15..375 and all four hero images stay within x=16..374.
- Computed desktop body, H1, Source notes and FAQ style values exactly match the accepted training-35 article.
- Browser report: `outputs/2026-09-12-training36-production-browser-qa.json`

## Queue close

- `training-36` is `published_complete`.
- Remaining approved topics: 11, `training-37` through `training-47`.
- Next target: `training-37` for 2026-09-13 PT.
