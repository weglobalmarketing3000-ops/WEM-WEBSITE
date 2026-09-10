# Training 34 production evidence

## Publication

- State: `published_complete` / `public_qa_complete`
- English: https://www.weglobalmarketing.com/blog/tiktok-shop-short-video-localization-us-shoppers
- Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-short-video-localization-us-shoppers?lang=zh
- Published date: 2026-09-10 PT
- Blog index position: rank 1, followed by the preserved Sep 9 through Sep 4 entries
- Blog list content-hash version: `93b6d9e2e141`

## Source validation

The article was written after reading the complete current U.S. TikTok Shop Seller University materials below:

- How to Link Showcase to Short Video Content: https://seller-us.tiktok.com/university/essay?knowledge_id=5807358577592107
- Requirements for High-Quality Videos and LIVEs: https://seller-us.tiktok.com/university/essay?knowledge_id=4581457528243969
- Your 2026 Content Success Guide: https://seller-us.tiktok.com/university/course?content_id=3106489578538795&learning_id=7794751162126
- Supporting current short-video and shoppable-content guidance: https://seller-us.tiktok.com/university/essay?knowledge_id=5769635937191681 and https://seller-us.tiktok.com/university/essay?knowledge_id=2816204956665642

Final verified body length: 1,558 English words and 2,541 Chinese characters, with six FAQs per language and no English-sentence leakage into the Chinese article.

## Visual evidence

- Raw image-generation scene: `outputs/2026-09-10-training34-assets/training34-us-short-video-localization-scene-v1.png`
- Raw scene SHA-256: `59f4d697e02b779229ee69baff58fdab5d2958cde8444a7908d479a2cf1224fd`
- Final composed cover: `outputs/patches/2026-09-10-training34-short-video-localization/blog/hero-tiktok-shop-short-video-localization-us-shoppers-v1.png`
- Accepted and public cover SHA-256: `854238259278d583f8c48f1f64c5db6537035972eceba2f8b3cbd8f353d96910`

The raw generation used a single cohesive soft-3D scene on the right: a smartphone filming a real product, microphone, hand, lifestyle context, and location cue, with the left side reserved for the existing WEM series typography. The final cover then used the established WEM logo, headline treatment, warm-white/lavender/periwinkle/blue/pink palette, optimized image, and 880x440 thumbnail. It was visually compared with the approved SKU search demand, catalog architecture, and preorder/MTO/backorder series covers.

## Deployment

- Isolated patch: `outputs/patches/2026-09-10-training34-short-video-localization`
- Patch fingerprint: `16da98924bb31d4d6a2c2117a4cf9b241a43b23e94dea1f9a1c55e4bdebfb545`
- Preview deployment: `dpl_7VQ6GPjpEZsXtFWfVKigac9zcGWt`
- Preview URL: https://wem-website-8rhz0z5vy-wem1.vercel.app
- Preview receipt: `outputs/deployment-receipts/16da98924bb31d4d6a2c-preview.json`
- Production deployment: `dpl_9gP7FahcPf54mtxMbZcWcm6X3Eq3`
- Production URL: https://wem-website-1ngc75s0f-wem1.vercel.app
- Production receipt: `outputs/deployment-receipts/16da98924bb31d4d6a2c-production.json`

## Verification

- Local verifier passed all checks for index cache/hash, rank/order, canonical and hreflang, bilingual BlogPosting and FAQ schema, sitemap, llms.txt, copy length, language purity, image integrity, and editorial enhancer.
- Preview browser QA passed Blog index, English desktop, English mobile, and Chinese mobile checks.
- Production verifier passed all checks in `outputs/2026-09-10-training34-production-audit.json`.
- Mandatory date-parity verifier passed rank-1 slug/date, both BlogPosting dates, and sitemap lastmod for 2026-09-10.
- Production browser QA passed English and Chinese desktop/mobile presentation: six FAQs, three named Related guides, Aug 1-style dark Source notes, CTA, full footer, correct language, no broken images, no `undefined`, no duplicate hero overlay, and no document overflow.
- Fresh-load and warm-cache Blog index both showed the Sep 10 article at rank 1.
- All 220 production sitemap routes returned HTTP 200.
- The public cover hash exactly matched the accepted local cover.
- Deployment recovery and lock tests passed before promotion.

## Queue handoff

- `training-34` is `published_complete`.
- 13 executable approved topics remain: `training-35` through `training-47`.
- Next target: `training-35` for 2026-09-11 PT.
