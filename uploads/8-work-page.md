# Work Page Brief: `ui_kits/website/work.html`

> **TOKEN GUARDRAIL: read this first.** Most of this page reuses React components that already exist in the codebase (FeaturedCase, Matchmaking, CaseStudies). DO NOT rebuild them. IMPORT them by reference. Only build the new Hero and small connective tissue. Do NOT regenerate `NavBar`, `Footer`, `CtaFooter`, or any other shared component. Do NOT touch `index.html` or `affiliate.html`. Do NOT regenerate the Design System file. If anything is unclear, ask one question instead of rebuilding.

**Paste this into your Claude design project to build the Work page.**

---

## Why this page exists

Three case-heavy sections were just removed from the homepage (`FeaturedCase`, `Matchmaking`, `CaseStudies` bento). Their React components still exist in the codebase. This page is their new home.

The homepage now leads visitors to `/work.html` through a "See the work" CTA. This page is where brand prospects see proof of execution before booking a call.

---

## Build instructions for Claude

> Create `ui_kits/website/work.html` modeled on `affiliate.html` (same NavBar, Footer, dark-mode aesthetic, lang state pattern). Apply the same magenta-violet gradient, Barlow Condensed display + Inter body fonts.
>
> **Do not rebuild the case-study components.** Import the existing `FeaturedCase`, `Matchmaking`, and `CaseStudies` components from the codebase and render them on this page in the order specified below. Only build the new Hero block and any minor connective copy.
>
> Update `app.jsx` so the `OUR WORK` link in `NavBar` and Footer points to `/work.html` instead of `#Our Work`. (The homepage redesign brief also handles this fix; whichever brief is applied first sets it.)

---

## Page meta

- **Page title:** `Our Work | TikTok Shop Case Studies · WE Marketing`
- **Meta description:** `TikTok Shop case studies from WE Marketing. $312K to $982K monthly GMV. 4.7M view hero videos. 10K+ orders cold-starting men's fashion. 160+ brand partners.`
- **OG image alt:** `WE Marketing TikTok Shop case studies. Smitty 4.7M views. Sacheu 1.5M+4.2M views. Zayndeals 5.1M views. Medicube live commerce.`
- **URL:** `/work.html`

---

## Section 1: Hero (NEW, short)

```
Eyebrow tag: OUR WORK

Headline (H1, large):
Real work. 
Real numbers.

(Style note: "Real numbers." in magenta-cyan gradient.)

Sub-headline (lead paragraph):
TikTok Shop case studies across beauty, wellness, tech, and 
fashion. Cold-starts, plateau breaks, hero-creator wins, and 
multilingual live programs. Same playbook. Different category. 
Real metrics.

No CTA on the hero. The CTAs are at the bottom (CtaFooter) 
after visitors have seen the work.
```

---

## Section 2: FeaturedCase (existing component, imported)

Render the existing `FeaturedCase` component as-is. It contains the three full-service case stories that used to live on homepage:

- **CASE #01 · WELLNESS**: `@shopwithsmitty` 4.7M views hero, $312K → $982K monthly GMV in 30 days, "Full-Funnel Affiliate. 90 Days to Viral."
- **CASE #02 · BEAUTY**: Plateau-breaker, hero-product strategy restructured, 90%+ MoM growth, "Breaking a Stalled GMV Ceiling in 30 Days."
- **CASE #03 · MEN'S FASHION**: `@zayndeals` 5.1M views, 10K+ orders post-relaunch, "Unlocking an Underbuilt Category. Cold Start to 10K."

No copy changes inside the component. Just render it on this page in this position.

---

## Section 3: Matchmaking (existing component, imported)

Render the existing `Matchmaking` component as-is. Contains the two quick-win matchmaking cases:

- **MATCH #01 · BEAUTY**: Sacheu (`@zarinascart`), 1.5M+ hero video, 4.2M+ comment-reply, $10K+ Black Friday GMV.
- **MATCH #02 · SKINCARE**: Medicube, multilingual creator network (EN + ES + VI), LIVE + Short formats, 2,000+ units/SKU top live session.

No copy changes. Just render in this position.

---

## Section 4: CaseStudies bento (existing component, imported)

Render the existing `CaseStudies` "Results, not promises." bento component as-is. The 4-tile bento:

- **BEAUTY**: $1.5M single LIVE, Canvas Beauty, `@stormisteele`
- **TECH**: 18x ROAS, Higround, `@carterpcs`
- **WELLNESS**: 7x ROAS WoW, WNP, +40 creators
- **SKINCARE**: #1 TikTok Shop LIVE, Medicube, `@michellephan`

No copy changes. Just render in this position.

---

## Section 5: CtaFooter (existing component)

Render the existing `CtaFooter` ("Ready to scale on TikTok?" block). Same copy.

---

## Section 6: Footer (existing component)

Render the existing `Footer`. Once `NavBar` routing is fixed, the footer's `Company → Our Work` link points here.

---

## Final section order

```
1. NavBar  (existing)
2. Hero  (NEW, short)
3. FeaturedCase  (existing component, imported)
4. Matchmaking  (existing component, imported)
5. CaseStudies bento  (existing component, imported)
6. CtaFooter  (existing component)
7. Footer  (existing component)
```

---

## QA checklist

- [ ] `FeaturedCase`, `Matchmaking`, `CaseStudies` components imported, NOT rebuilt
- [ ] No copy changes inside the imported components
- [ ] New `Hero` section renders with "Real work. Real numbers." headline and gradient on "Real numbers."
- [ ] `OUR WORK` link in NavBar and Footer points to `/work.html`
- [ ] Page renders in EN and 中文 (lang dictionary already covers most strings since components are reused)
- [ ] No em dashes anywhere
- [ ] No console errors, no broken images
- [ ] Existing `index.html` is no longer rendering the three case sections (verified by visiting both pages)

---

## Implementation note for Claude design

**Tokens saved:** Because the FeaturedCase, Matchmaking, and CaseStudies components already exist as React components rendered on `index.html`, this entire page can be built by:

1. Creating `work.html` with the same React entry pattern as `affiliate.html`.
2. Importing the three existing components (no code changes inside them).
3. Writing only the new ~8-line Hero block.

If you find yourself rewriting any of the three case-study components, stop. Something has gone wrong with the import path. Ask before regenerating.
