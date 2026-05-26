# Work Page Brief: `ui_kits/website/work.html`

> **TOKEN GUARDRAIL: read this first.** Most of this page reuses React components that already exist in the codebase (FeaturedCase, CaseStudies). DO NOT rebuild them. IMPORT them by reference. Only build the new Hero, two new strip sections (Numbers, Industries), and minor connective tissue. Do NOT regenerate `NavBar`, `Footer`, `CtaFooter`, or any other shared component. Do NOT re-render the existing `Matchmaking` component (it is no longer used on any page; safe to leave dormant in the codebase). Do NOT touch `index.html` or `affiliate.html`. Do NOT regenerate the Design System file. If anything is unclear, ask one question instead of rebuilding.

**Paste this into your Claude design project to build the Work page.**

---

## Why this page exists

Three case-heavy sections were just removed from the homepage. Their React components stay in the codebase. This page is the new home for two of them (`FeaturedCase` and `CaseStudies` bento), plus two new lightweight strip sections that smooth the visual rhythm.

The old `Matchmaking` section is NOT used on this page. Reason: with the Sacheu case removed, only Medicube is left, which is insufficient for a dedicated section. Medicube already appears in the `CaseStudies` bento ("Medicube · #1 TikTok Shop LIVE"), so the story is preserved without the awkward visual transition.

---

## Build instructions for Claude

> Create `ui_kits/website/work.html` modeled on `affiliate.html` (same NavBar, Footer, dark-mode aesthetic, lang state pattern). Apply the same magenta-violet gradient, Barlow Condensed display + Inter body fonts.
>
> **Do not rebuild `FeaturedCase` or `CaseStudies` components.** Import them as-is. Only build the new Hero, the new `NumbersStrip`, and the new `IndustriesStrip`.
>
> **Do not render the old `Matchmaking` component on this page.** It is being retired from the live site (the Sacheu case is removed; Medicube is covered in the bento). The component file itself can stay in the codebase for now, just unused.
>
> Update `app.jsx` so the `OUR WORK` link in `NavBar` and Footer points to `/work.html` instead of `#Our Work`. (The homepage redesign brief also handles this fix; whichever brief is applied first sets it.)

---

## Page meta

- **Page title:** `Our Work | TikTok Shop Case Studies · WE Marketing`
- **Meta description:** `TikTok Shop case studies from WE Marketing. $312K to $982K monthly GMV. 4.7M view hero videos. 10K+ orders cold-starting men's fashion. 160+ brand partners.`
- **OG image alt:** `WE Marketing TikTok Shop case studies. 160+ brand partners. $15M+ annual sales. Beauty, wellness, tech, fashion.`
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

No CTA on the hero. CTAs are at the bottom (CtaFooter) after 
visitors have seen the work.
```

---

## Section 2: NumbersStrip (NEW, compact)

A 4-tile horizontal stat strip that opens the page with credibility before diving into case narratives. Same visual treatment as the existing homepage marquee stat block (white numbers, magenta accent, Barlow Condensed display).

```
Eyebrow: BY THE NUMBERS

  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
  │ 160+           │  │ $15M+          │  │ 200K+          │  │ CERTIFIED      │
  │ SHOP PARTNERS  │  │ ANNUAL SALES   │  │ U.S. CREATORS  │  │ TIKTOK SHOP    │
  │ SERVED         │  │ MANAGED        │  │ COLLABORATED   │  │ PARTNER 2025   │
  └────────────────┘  └────────────────┘  └────────────────┘  └────────────────┘
```

No lead-in copy. Just the strip. Acts as a numerical anchor before the storytelling section.

---

## Section 3: FeaturedCase (existing component, imported)

Render the existing `FeaturedCase` component as-is. Three full-service case stories:

- **CASE #01 · WELLNESS** `@shopwithsmitty` 4.7M views hero, $312K to $982K monthly GMV in 30 days, "Full-Funnel Affiliate. 90 Days to Viral."
- **CASE #02 · BEAUTY** Plateau-breaker, hero-product strategy restructured, 90%+ MoM growth, "Breaking a Stalled GMV Ceiling in 30 Days."
- **CASE #03 · MEN'S FASHION** `@zayndeals` 5.1M views, 10K+ orders post-relaunch, "Unlocking an Underbuilt Category. Cold Start to 10K."

No copy changes inside the component. Just render it on this page in this position.

---

## Section 4: CaseStudies bento (existing component, imported)

Render the existing `CaseStudies` "Results, not promises." 4-tile bento as-is:

- **BEAUTY** $1.5M single LIVE, Canvas Beauty, `@stormisteele`
- **TECH** 18x ROAS, Higround, `@carterpcs`
- **WELLNESS** 7x ROAS WoW, WNP, +40 creators
- **SKINCARE** #1 TikTok Shop LIVE, Medicube, `@michellephan`

No copy changes. Just render in this position.

---

## Section 5: IndustriesStrip (NEW, compact)

A horizontal "Industries we serve" strip with category labels and brand logos. Lets brand visitors quickly find their category in our roster. Same visual density as the marquee on the homepage but grouped by industry.

```
Eyebrow: INDUSTRIES WE SERVE

Five category groups, each on its own row, with logos right-aligned:

BEAUTY            Skin1004 · Missha · Canvas Beauty · Medicube · Magnetopia · Bask & Lather · Ena Skin · Sacheu
WELLNESS          WNP · Ritual · Ananke · Ina Labs
TECH              Higround
FASHION           Zayndeals · TGIDeas · FIFA WC Merch · Guyu Global
FOOD & OTHER      Brew · Miniso · Clomoon · Moonbrew

(If Sacheu should be removed from the list as well, search-and-replace before pasting.)

Closing line below the strip:
160+ brand partners and counting.
```

This strip serves two purposes:
1. Visual closure between the dense `CaseStudies` bento and the `CtaFooter`.
2. Lets brand visitors confirm "they work with brands like mine" without needing a full case study per brand.

---

## Section 6: CtaFooter (existing component)

Render the existing `CtaFooter` ("Ready to scale on TikTok?" block). Same copy.

---

## Section 7: Footer (existing component)

Render the existing `Footer`. Once `NavBar` routing is fixed, the footer's `Company → Our Work` link points here.

---

## Final section order

```
1. NavBar  (existing)
2. Hero  (NEW, short)
3. NumbersStrip  (NEW, 4 stat tiles)
4. FeaturedCase  (existing component, imported)
5. CaseStudies bento  (existing component, imported)
6. IndustriesStrip  (NEW, category + logo groups)
7. CtaFooter  (existing component)
8. Footer  (existing component)
```

Visual rhythm: tight numbers → big narrative → tight numbers → tight categories → CTA. Density alternates predictably; no jarring style resets.

---

## QA checklist

- [ ] `FeaturedCase` and `CaseStudies` components imported, NOT rebuilt
- [ ] No copy changes inside the imported components
- [ ] `Matchmaking` component is NOT rendered on this page (intentional, the Sacheu case is removed)
- [ ] New `Hero` section renders with "Real work. Real numbers." headline and gradient on "Real numbers."
- [ ] New `NumbersStrip` renders with 4 tiles, same visual style as homepage marquee stat block
- [ ] New `IndustriesStrip` renders 5 category rows with right-aligned brand logos
- [ ] `OUR WORK` link in NavBar and Footer points to `/work.html`
- [ ] Page renders in EN and 中文
- [ ] No em dashes anywhere
- [ ] No console errors, no broken images
- [ ] Existing `index.html` no longer renders `Matchmaking` or `CaseStudies` sections

---

## Implementation note for Claude design

**Tokens saved:** `FeaturedCase` and `CaseStudies` components already exist as React components rendered on `index.html` (and being removed from there in the homepage redesign brief). This page builds with:

1. Creating `work.html` with the same React entry pattern as `affiliate.html`.
2. Importing the two existing components (no code changes inside them).
3. Writing only three new lightweight blocks: Hero, NumbersStrip, IndustriesStrip.

If you find yourself rewriting `FeaturedCase` or `CaseStudies`, stop. Something has gone wrong with the import path. Ask before regenerating.

---

## What changed from v1

- **Removed `Matchmaking` section entirely.** Sacheu case is dropped at Wendy's request. Medicube alone could not support a dedicated section, and the visual transition between FeaturedCase (narrative) and Matchmaking (portfolio-style) and CaseStudies (bento) was jarring. Medicube's story is preserved in the existing CaseStudies bento.
- **Added `NumbersStrip` section** as a compact opener that anchors credibility before the long-form FeaturedCase.
- **Added `IndustriesStrip` section** as a compact closer that lets brand visitors find their category at a glance. Works as visual closure between the dense bento and the CtaFooter.
- **Visual rhythm fixed.** Three different densities (tight numbers, big narrative, tight bento, tight categories, CTA) flow predictably instead of resetting between every section.
