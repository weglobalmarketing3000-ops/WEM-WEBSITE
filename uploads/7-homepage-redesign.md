# Homepage Redesign Brief: `ui_kits/website/index.html`

> **TOKEN GUARDRAIL: read this first.** This is a SURGICAL EDIT of the existing `index.html`, not a from-scratch rebuild. Open the existing file. KEEP the components and sections marked KEEP. DELETE the sections marked DELETE (those components stay in the codebase for `work.html` to import; do not destroy them). UPDATE the sections marked UPDATE in place. Do NOT regenerate `NavBar`, `Footer`, `CtaFooter`, `Marquee`, `ServiceGrid`, `Testimonial`, or `TaglineBand` components. Do NOT touch `affiliate.html`. Do NOT regenerate the Design System file. If a section is not mentioned in this brief, it does not exist in the new homepage. If anything is unclear, ask one question instead of rebuilding.

**Paste this into your Claude design project to redesign the homepage.**

---

## Why this redesign

Current `index.html` has 11 sections. It is doing 4 different pages of work at once (homepage + services + work + about). Visitors cannot tell what to do next.

The new IA splits the load:

- **Homepage = Services intro.** The 6 services live here. This is the primary "what we do" page.
- **`/work.html` (new) = Case studies.** All case work lives here.
- **`/about.html` = Founder + credibility.** Built separately later.
- **`/affiliate.html` = Creator recruitment.** Already exists, no change.
- **`/blog.html` + 3 posts = SEO/GEO.** Already briefed.

This brief covers the homepage edit. The `/work.html` page is briefed separately in `8-work-page.md`.

---

## What stays (no edits needed)

These components/sections are KEPT AS-IS.

- `NavBar` (component)
- `Hero` (section, copy lightly updated below)
- `Marquee` (component, the 200+ brand logo scrolling band)
- `ServiceGrid` (component, the 6 service cards: Coldstart Launchpad, Affiliate Marketing, Short Video Management, Live Management, Creator Matchmaking, Shop Management) **This is now the main attraction of the homepage.**
- `Testimonial` (component, "From 'meh' to 'wow'" beauty DTC quote)
- `TaglineBand` (component, "CREATE · CONNECT · CONVERT" scrolling band)
- `CtaFooter` (component, "Ready to scale on TikTok?" block)
- `Footer` (component, full footer)

---

## What gets DELETED from this page

These three sections are removed from `index.html`. Their React components stay in the codebase. They will be re-imported by `work.html` (briefed in `8-work-page.md`).

- `FeaturedCase` (3 full-service case stories: Smitty wellness / Beauty plateau / Zayndeals men's fashion)
- `Matchmaking` (2 quick-win cases: Sacheu / Medicube multilingual)
- `CaseStudies` bento (4-tile bento: Canvas Beauty / Higround / WNP / Medicube live)

Reason: case studies belong on `/work.html`. Homepage's job is "what do you do," not "here are nine examples."

---

## What gets UPDATED in place

### Hero copy (light touch)

```
Eyebrow tag: FULL SERVICE TIKTOK SHOP PARTNER AGENCY (kept)

Headline (H1, current SCALE-gradient treatment kept):
We help brands 
scale on TikTok.

Sub-headline (UPDATED):
From cold start to sustained GMV. Creator outreach, content, 
live, and shop operations, all run by one team. 160+ brands. 
$15M+ annual sales. Certified TikTok Shop Partner Agency.

CTAs (kept):
BOOK A DISCOVERY CALL →     SEE OUR WORK
```

The change: replace the current jargon-heavy sub-headline with credentials-led plain-English copy. The `SEE OUR WORK` button now links to `/work.html`.

### Add a small "See our work" bridge (new, between Testimonial and TaglineBand)

A single-line bridge so the homepage clearly points visitors to `/work.html`. This replaces what FeaturedCase used to do (give visitors a path to deeper proof).

```
Centered, small, magenta accent line:

Real work. Real numbers.
160+ brand partners across beauty, wellness, tech, and fashion.

[ Single CTA button: SEE THE WORK → /work.html ]
```

One section, ~3 lines. Not a full case display.

---

## Final section order on the new homepage

```
1. NavBar  (kept)
2. Hero  (kept, sub-headline + secondary CTA target updated)
3. Marquee  (kept)
4. ServiceGrid  (kept, this is the main attraction)
5. Testimonial  (kept)
6. SeeTheWork bridge  (NEW, single-line CTA to /work.html)
7. TaglineBand  (kept)
8. CtaFooter  (kept)
9. Footer  (kept)
```

11 sections → 9 sections (counting NavBar and Footer). Three case-heavy sections moved to `/work.html`. One small bridge added.

---

## Nav and Footer link fixes (do this in the same pass)

These are dead links in the current site. Fix them now.

```
SERVICES   →  #Services  (anchor to ServiceGrid section, already correct, just verify)
OUR WORK   →  /work.html  (was #Our Work anchor, now points to new page)
AFFILIATE  →  /affiliate.html  (already correct)
ABOUT      →  /about.html  (will exist after About brief is built)
BLOG       →  /blog.html  (will exist after Blog brief is built)
```

In Footer Company column, same fixes.

### Optional: Rename "AFFILIATE" nav label to "CREATORS"

`/affiliate.html` is creator-facing recruitment, not brand-facing service. Brand visitors clicking "AFFILIATE" expecting a service description hit a creator-recruitment page and bounce. Rename to `CREATORS` or `JOIN US` if you want to fix this. Not required for this brief, but recommended.

---

## Page meta (light update)

- **Page title:** `WE Marketing | TikTok Shop Partner Agency · 160+ brands, $15M+ GMV`
- **Meta description:** `WE Marketing is a Certified TikTok Shop Partner Agency. End-to-end shop strategy, creator activation, content, live commerce, and shop operations across 160+ brands. $15M+ annual sales managed.`
- **OG image alt:** `WE Marketing TikTok Shop Partner Agency. 160+ brands. $15M+ annual sales. Certified TSP since 2025.`

---

## QA checklist

- [ ] `FeaturedCase` section removed from homepage (component preserved for `work.html`)
- [ ] `Matchmaking` section removed from homepage (component preserved for `work.html`)
- [ ] `CaseStudies` bento section removed from homepage (component preserved for `work.html`)
- [ ] `ServiceGrid` is now the primary content section
- [ ] Hero sub-headline updated to credentials-led copy
- [ ] New `SeeTheWork` bridge section added between Testimonial and TaglineBand
- [ ] Hero `SEE OUR WORK` button links to `/work.html`
- [ ] All NavBar and Footer links point to correct destinations
- [ ] No em dashes anywhere on the page
- [ ] No console errors, no broken images

---

## Open threads for Wendy

1. **Optional `AFFILIATE` → `CREATORS` rename.** Recommended for clarity, see "Optional" section above. Not blocking this brief.
2. **`SeeTheWork` bridge wording.** I drafted "Real work. Real numbers. 160+ brand partners across beauty, wellness, tech, and fashion." If you have a stronger one-liner, swap before pasting.
