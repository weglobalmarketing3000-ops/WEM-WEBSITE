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

- Patch fingerprint: `a971343d46a44cba197c8506528927bf61654400aacc13597b6e59176243df24`
- Preview deployment: `dpl_JBo9jnCmvD93ZjeFa9fHFEzkyDRJ`
- Preview URL: https://wem-website-brsjbvza9-wem1.vercel.app
- Preview receipt: `outputs/deployment-receipts/a971343d46a44cba197c-preview.json`
- Production deployment: `dpl_H5QzvG5zcRktyarF7aWDz5xVCMHR`
- Production URL: https://wem-website-dygtg2s0e-wem1.vercel.app
- Production receipt: `outputs/deployment-receipts/a971343d46a44cba197c-production.json`
- Terminal state: `succeeded`, `production_health_complete`, exit 0
- Production sitemap verification: 221/221 URLs returned HTTP 200

## Public acceptance

- Production verifier passed index content hash, rank/order, prior-six preservation, canonical, hreflang, bilingual schema/date, FAQ, sitemap, `llms.txt`, language purity, image integrity and editorial enhancer checks.
- Publication verifier passed rank-1 slug, visible date, both BlogPosting dates and sitemap lastmod.
- Public BlogList SHA-256 exactly matches the patch at `d83ad90a094b9a726097834f19fdcceb7012e782fb35e8cc6f3911302836b227`; content version is `075858e2c0d3`.
- Anonymous browser QA passed English desktop, Chinese desktop, English 390x844, Chinese 390x844, index fresh/warm desktop and index 390px.
- Each visible language has six FAQ cards, three named related guides, CTA, footer, no inactive-language leak, no broken images and no horizontal overflow.
- On 390px mobile, both H1 blocks stay within x=15..375 and both hero images stay within x=16..374.
- Computed desktop body, H1, Source notes and FAQ style values exactly match the accepted training-35 article.
- Browser report: `outputs/2026-09-12-training36-production-browser-qa.json`

## Queue close

- `training-36` is `published_complete`.
- Remaining approved topics: 11, `training-37` through `training-47`.
- Next target: `training-37` for 2026-09-13 PT.
