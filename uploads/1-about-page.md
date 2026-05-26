# About Page Brief: `ui_kits/website/about.html`

**Paste this into your Claude design project to build the About page.**

---

## Build instructions for Claude

> Create a new file `ui_kits/website/about.html` modeled on `affiliate.html`. Reuse the existing `NavBar` and `Footer` components with the same `lang` state pattern. Apply the same dark-mode aesthetic, magenta-violet gradient, Barlow Condensed display + Inter body fonts. Use the existing color tokens and section spacing rules from the design system.
>
> The page should have **two main sections** plus the standard nav and footer, keeping it deliberately tight (this is a credentials page, not a manifesto). Hero section uses the same hero pattern as `affiliate.html` (centered eyebrow tag, large headline with one accent word in gradient, lead paragraph). Capability section uses a two-column layout: left column = founder/origin narrative, right column = a 4-stat grid mirroring the marquee stat block from `index.html` but with real numbers filled in.
>
> Update `app.jsx` (or whichever React entry handles routing) so that the `ABOUT` link in `NavBar` points to `about.html` instead of `#About`. Update the same fix in the `Footer` component's Company column.

---

## Page meta

- **Page title:** `About WE Marketing | TikTok Shop Partner Agency`
- **Meta description:** `WE Marketing is a TikTok Shop Partner Agency that combines shop strategy, creator activation, content systems and live operations. 160+ shop partners, 200K+ creators, $15M+ annual sales managed.`
- **OG image alt:** `WE Marketing, TikTok Shop Partner Agency. 160+ shop partners. 200K+ creators. $15M+ annual sales. Certified since 2025.`
- **URL:** `/about.html`

---

## Section 1: Hero

```
Eyebrow tag: ABOUT WE MARKETING

Headline (H1): 
We turn TikTok Shop into a 
revenue engine for brands.

(Style note: "revenue engine" in magenta→cyan gradient, 
matching the SCALE word in the homepage hero.)

Lead paragraph:
WE Marketing is a TikTok Shop Partner Agency built to drive 
performance at scale. We combine shop strategy, creator 
activation, content systems, and live operations into one 
unified system, so brands move from cold start validation to 
sustainable, repeatable growth on TikTok Shop.

Two pill badges below the lead:
• TIKTOK SHOP PARTNER AGENCY · CERTIFIED SINCE 2025
• EN · ES · 中文 SUPPORT

Primary CTA: BOOK A DISCOVERY CALL →
Secondary CTA: SEE OUR WORK
```

---

## Section 2: Founder + Capability (two-column)

### Left column (founder / why we exist)

```
Section eyebrow: WHY WE BUILT WEM

Headline (H2):
A small team that runs the 
whole TikTok Shop playbook.

Body (3 short paragraphs):

WE Marketing was founded by Wendy Lin in Los Angeles in 2024, 
after years of watching brands and creators get squeezed by 
agency models that were never designed for TikTok Shop. Most 
agencies treat TikTok like another social channel. The brands 
winning on TikTok Shop know it is a different game: creator-led, 
content-first, live-driven, and operationally heavy.

We built WEM to run the whole game. One team owns shop 
strategy, creator activation, short-form content, live 
operations, and shop management, under one P&L. No handoffs, 
no finger-pointing, no gaps between "the influencer team" and 
"the shop team."

That is how a wellness brand we work with went from a $312K 
GMV month to a $982K GMV month in 30 days. That is how a 
men's fashion brand cold-started to 10K+ orders in a category 
with almost no creator supply. The playbook is the same. The 
execution is the difference.

Pull-quote (styled, magenta):
"Plateaus are almost never a creator-volume problem. 
They are a story-dilution problem."
- Wendy Lin, Founder
```

### Right column (capability stat block)

```
Section eyebrow: BY THE NUMBERS

A 2x2 grid of stat tiles, same visual treatment as the 
homepage marquee stat block:

  ┌─────────────────────┐  ┌─────────────────────┐
  │ 160+                │  │ 200K+               │
  │ SHOP PARTNERS       │  │ U.S. CREATORS       │
  │ SERVED              │  │ COLLABORATED        │
  └─────────────────────┘  └─────────────────────┘
  ┌─────────────────────┐  ┌─────────────────────┐
  │ $15M+               │  │ 8,000+              │
  │ ANNUAL SALES        │  │ CREATORS IN WE      │
  │ MANAGED             │  │ AFFILIATE COMMUNITY │
  └─────────────────────┘  └─────────────────────┘

Below the grid, a short capability list (icon + label + 1-line desc):

✓ COLDSTART LAUNCHPAD
  New product validation in 30-60 days.

✓ AFFILIATE MARKETING  
  Outreach, sampling, campaigns, livestream activation.

✓ SHORT VIDEO MANAGEMENT
  Diverse formats, hooks, scripts, performance optimization.

✓ LIVE MANAGEMENT
  Brand and affiliate live, planning, host training, content flow.

✓ CREATOR MATCHMAKING
  Right creator, right audience, right moment.

✓ SHOP MANAGEMENT
  Listings, pricing, campaigns, fulfillment, SPS, compliance.

End of column with secondary CTA:
SEE OUR FULL SERVICES →  (links to #Services on homepage)
```

---

## Section 3: CTA Footer (reuse existing CtaFooter component from index.html)

Same component, no copy changes needed. It already says:

```
Ready to scale on TikTok?
Tell us your brand, your stack, your ambition. 
We'll reply in 24 hours.

Book a discovery call →    Email us instead
```

---

## Footer (reuse existing Footer component)

No changes needed. Once the routing fix is applied, the existing footer's "Company → About" link will correctly point to `/about.html`.

---

## QA checklist before publishing

- [ ] `ABOUT` nav link in `NavBar` points to `/about.html` (not `#About`)
- [ ] Footer Company column "About" link points to `/about.html`
- [ ] Page renders in EN and 中文 (add Chinese translations to the same lang dictionary used by `affiliate.html`)
- [ ] Stat numbers match `OUR KEY HIGHLIGHTS` slide in business deck
- [ ] OG image alt text includes the 4 key stats (for AI search scraping)
- [ ] No broken images, no console errors
