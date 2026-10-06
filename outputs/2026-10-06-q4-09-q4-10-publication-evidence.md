# q4-09 reconciliation and q4-10 publication evidence

Date: 2026-10-06 PT

## Accepted outcomes

- q4-09 is accepted as `published_complete` at its original date, 2026-10-05.
  - English: https://www.weglobalmarketing.com/blog/tiktok-shop-customer-data-email-sms-marketing
  - Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-customer-data-email-sms-marketing?lang=zh
  - Original production deployment: `dpl_DiR51UZFbMpmJhzd8xQtkMfLA6q9`.
  - The original historical preview receipt was not present locally and was not recreated or inferred.
  - Recovery used an authenticated production file readback, an exact 17-file manifest, anonymous EN/ZH desktop and 390x844 mobile QA, language switching, image loading, six FAQs per language, three related guides, Source notes, CTA/footer, BlogPosting/FAQPage schema, sitemap, llms.txt, and cold/warm index checks.
  - After q4-10 publication, the q4-09 article and ten localized article assets remained byte-identical. The independent verifier passed 5/5 at blog-card rank 2.

- q4-10 is accepted as `published_complete` for 2026-10-06.
  - English: https://www.weglobalmarketing.com/blog/tiktok-shop-originality-protection-image-evidence
  - Chinese: https://www.weglobalmarketing.com/blog/tiktok-shop-originality-protection-image-evidence?lang=zh
  - Production deployment: `dpl_H24jZV9gnmPTYdd65vgmxJryiXhW` (`https://wem-website-burmb9yt3-wem1.vercel.app`).
  - Authenticated production readback captured 17 target files with fingerprint `2a45bd28cc842065eeb3436c760be1fbe1153b605414e2fa9c5e463b173d336a`.
  - Anonymous production QA status: `public_qa_complete`; hashes, schema, rendered article, blog index and discovery all passed.
  - Four article combinations passed: EN/ZH x desktop/mobile. Eight index combinations passed: EN/ZH x desktop/mobile x fresh/warm cache.
  - Each language has one localized cover plus two localized body visuals, six FAQs, three related guides, Source notes, CTA and footer.
  - The current official Originality Protection source was revalidated on 2026-10-06. The article preserves the source boundary that Risk Alert is described as “available shortly,” not as a currently guaranteed feature.
  - The independent publication verifier passed 5/5 at blog-card rank 1 for 2026-10-06.

## Concurrency handling

During the protected-preview workflow, the production alias advanced from `dpl_DiR51UZFbMpmJhzd8xQtkMfLA6q9` to `dpl_H24jZV9gnmPTYdd65vgmxJryiXhW`. No stale-baseline production deployment was started. The new production was downloaded, reconciled and accepted in place, preventing rollback of concurrent work.

## Evidence paths

- `outputs/2026-10-06-q4-09-reconciliation/production-file-manifest.json`
- `outputs/2026-10-06-q4-09-reconciliation-public-qa/report.json`
- `outputs/2026-10-06-q4-09-reconciliation-public-qa/verifier-after-q4-10.json`
- `outputs/2026-10-06-q4-10-source/metadata.json`
- `outputs/2026-10-06-q4-10-source/originality-protection-program.txt`
- `outputs/2026-10-06-q4-10-production-public-qa/production-file-manifest.json`
- `outputs/2026-10-06-q4-10-production-public-qa/report.json`
- `outputs/2026-10-06-q4-10-production-public-qa/verifier.json`

## Queue state

- q4-09: `published_complete`
- q4-10: `published_complete`
- q4-11 remains `approved_unfinished` for 2026-10-07 PT. It was not advanced early.
