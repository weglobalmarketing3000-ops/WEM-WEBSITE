# q4-19 current-live reconciliation — 2026-10-16

- Target: `q4-19` / `tiktok-shop-bfcm-fulfillment-extension-order-sla`
- Reconciliation decision: accept the newer live article as the publishing baseline; do not roll back to the prior accepted patch.
- Observed current-live deployment before q4-20 publication: `dpl_F3BVQzBVWktXKhXRopWRgRfCMf3V`, state `READY`.
- Accepted readback patch: `outputs/patches/2026-10-16-q4-19-current-accepted`
- Accepted patch fingerprint: `f689a1d45a14df9881a7dc451e386f1e0a335d099edba41d00a30643add67f46`
- Public QA: `outputs/2026-10-16-q4-19-current-public-qa/report.json`; hashes, schema, bilingual desktop/mobile render, index and discovery all passed.
- Verified current changes: localized EN/ZH cover and thumbnails, localized SVG body visuals, six FAQs per language, Source notes, three related guides, language switch, Ready-to-talk CTA, booking and footer.
- Dates preserved: both schema articles remain `2026-10-15`.
- q4-20 was built from this read-back deployment, so the accepted q4-19 version is preserved in the new production baseline.

