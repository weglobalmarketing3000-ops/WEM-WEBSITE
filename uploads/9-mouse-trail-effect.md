# Mouse Trail Effect Brief: Starry-sky cursor with click burst

> **TOKEN GUARDRAIL: read this first.** This is a small interaction tweak. Find the existing click-based sparkle handler and modify it. Do NOT regenerate the Design System, NavBar, Footer, or any page component. Do NOT rebuild the whole effect from scratch if something close already exists. If you cannot find the existing handler in 1-2 file searches, ask before building a new one. If anything is unclear, ask one question instead of rebuilding.

**Paste this into your Claude design project to update the cursor effect.**

---

## What Wendy wants

The site has dark backgrounds throughout. The cursor effect should feel like a **starry sky**: tiny white and pale-yellow sparkles that drift gently as the cursor moves, with a bigger burst on click.

Two behaviors layered:

1. **Continuous trail (NEW, on mousemove):** small white twinkles spawn while the cursor moves. Gentle, steady, like brushing across a night sky.
2. **Click burst (KEPT, enhanced):** existing click effect stays, but bigger. More particles, slightly larger, slight radial spread. Feels like "tapping a star to make it flare."

Color palette: **white core + pale yellow / cream halo only**. Drop the magenta/cyan. Brand colors stay on hero gradient and CTAs. The cursor trail is intentionally NOT branded - it is ambient atmosphere.

---

## Implementation steps

### Step 1: Find the existing click handler

Search the codebase for the current click-sparkle effect. Likely candidates:
- A `useEffect` with `onClick` or `addEventListener('click')` that creates particles
- A component named `Sparkle`, `StarBurst`, `ClickEffect`, `Cursor`, or similar
- Inline JSX in `index.html` or `affiliate.html` that spawns elements on click

**Keep this handler. Do not delete.** We will enhance it (more particles, bigger size).

### Step 2: Add a NEW mousemove listener for the continuous trail

Add a separate handler. Throttled to ~30ms.

```js
// Continuous trail (mousemove)
let lastSpawn = 0;
const SPAWN_INTERVAL_MS = 30;

function handleMouseMove(e) {
  const now = performance.now();
  if (now - lastSpawn < SPAWN_INTERVAL_MS) return;
  lastSpawn = now;
  spawnTrailStar(e.clientX, e.clientY);
}

const isTouch = window.matchMedia('(pointer: coarse)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!isTouch && !prefersReducedMotion) {
  document.addEventListener('mousemove', handleMouseMove, { passive: true });
}
```

`spawnTrailStar` creates a SMALL white star (see Step 4 for visual). The click handler keeps using `spawnBurstStar` (BIGGER, see Step 5).

### Step 3: Cleanup and cap

- Cap concurrent particles at **150** (slightly higher than before because click bursts add to the count)
- Auto-remove particles when their CSS animation ends:

```js
particle.addEventListener('animationend', () => particle.remove());
```

### Step 4: Trail star visual (mousemove → small)

Each trail star is a tiny twinkle: white core, faint warm halo, soft glow. Lifetime ~900ms with fade + slight upward drift + scale-down.

```css
@keyframes trail-twinkle {
  0% {
    opacity: 0.95;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 14px)) scale(0.5);
  }
}

.trail-star {
  position: fixed;
  pointer-events: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #FFFFFF 0%,
    #FFF4B8 50%,
    rgba(255, 233, 168, 0.4) 75%,
    transparent 100%
  );
  box-shadow:
    0 0 4px rgba(255, 255, 255, 0.9),
    0 0 10px rgba(255, 244, 184, 0.6);
  filter: blur(0.3px);
  animation: trail-twinkle 900ms ease-out forwards;
  z-index: 9998;
}
```

For a richer "real stars" feel, randomize each particle's:
- Size: 4px to 8px
- Lifetime: 800ms to 1200ms
- Slight horizontal drift: random ±6px translateX
- Hue mix: 70% pure white, 30% pale yellow / cream tinted

```js
function spawnTrailStar(x, y) {
  const star = document.createElement('div');
  star.className = 'trail-star';
  // size variation
  const size = 4 + Math.random() * 4;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  // position
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  // optional warm tint variant
  if (Math.random() < 0.3) {
    star.classList.add('trail-star--warm');
  }
  // slight horizontal drift via CSS variable
  const driftX = (Math.random() - 0.5) * 12;
  star.style.setProperty('--drift-x', `${driftX}px`);
  document.body.appendChild(star);
  star.addEventListener('animationend', () => star.remove());
}
```

Add a warm variant class:

```css
.trail-star--warm {
  background: radial-gradient(
    circle,
    #FFF8DC 0%,
    #FFE9A8 60%,
    transparent 100%
  );
  box-shadow:
    0 0 5px rgba(255, 233, 168, 0.9),
    0 0 12px rgba(255, 220, 130, 0.5);
}
```

### Step 5: Click burst (KEPT, enhanced)

The existing click handler stays. Three changes:

1. **Spawn 8 to 14 particles per click** (current is probably 1-3). Pick a random number in this range each click for natural feel.
2. **Larger size**: 8-14px instead of trail's 4-8px.
3. **Radial spread**: each burst particle drifts outward in a different direction, not just upward.

```css
@keyframes burst-star {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(
      calc(-50% + var(--burst-x, 0px)),
      calc(-50% + var(--burst-y, 0px))
    ) scale(0.4);
  }
}

.burst-star {
  position: fixed;
  pointer-events: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #FFFFFF 0%,
    #FFF4B8 55%,
    rgba(255, 233, 168, 0.3) 80%,
    transparent 100%
  );
  box-shadow:
    0 0 8px rgba(255, 255, 255, 1),
    0 0 18px rgba(255, 244, 184, 0.8),
    0 0 30px rgba(255, 220, 130, 0.4);
  filter: blur(0.5px);
  animation: burst-star 1100ms ease-out forwards;
  z-index: 9999;
}
```

```js
function spawnBurstStar(x, y) {
  const count = 8 + Math.floor(Math.random() * 7); // 8-14
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'burst-star';
    const size = 8 + Math.random() * 6;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    // radial direction
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const distance = 30 + Math.random() * 50;
    star.style.setProperty('--burst-x', `${Math.cos(angle) * distance}px`);
    star.style.setProperty('--burst-y', `${Math.sin(angle) * distance}px`);
    if (Math.random() < 0.3) star.classList.add('trail-star--warm');
    document.body.appendChild(star);
    star.addEventListener('animationend', () => star.remove());
  }
}

document.addEventListener('click', (e) => {
  if (!isTouch && !prefersReducedMotion) spawnBurstStar(e.clientX, e.clientY);
});
```

---

## Visual reference

- **Core color:** pure white `#FFFFFF`
- **Halo color:** pale cream / warm yellow `#FFF4B8` to `#FFE9A8`
- **Background context:** site is mostly black / very dark, so white + cream particles read as actual stars
- **Density target:** continuous trail = "wand brushing across night sky." Click = "wishing star pulse."
- **NO magenta, NO cyan in cursor effect.** Brand gradient stays on hero text and CTAs only.

---

## QA checklist

- [ ] Mousemove creates a gentle continuous trail of small white/cream sparkles
- [ ] Click creates a bigger radial burst (8-14 particles, larger size)
- [ ] Trail and burst use white + pale yellow only, no brand colors
- [ ] Trail star size varies (4-8px), some warm-tinted (~30%)
- [ ] Burst star size varies (8-14px), spreads radially outward
- [ ] All particles fade out and self-remove (animationend listener)
- [ ] No more than 150 particles on screen at any moment
- [ ] No trail or burst on mobile / touch devices
- [ ] Both effects respect `prefers-reduced-motion: reduce` (disabled when set)
- [ ] No console errors, 60fps maintained while moving cursor
- [ ] Click burst feels noticeably bigger than the previous version (more particles, larger, radial)
- [ ] Effects do not interfere with button clicks, form interactions, or scrolling

---

## Optional enhancement (later)

If you want individual stars to look more "star-like" rather than soft circles, swap the radial-gradient div for a 4-point CSS sparkle:

```css
.trail-star::before,
.trail-star::after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  filter: inherit;
}
.trail-star::before { transform: rotate(45deg); }
.trail-star::after { transform: rotate(-45deg); }
```

Adds visible "rays" to each particle. Nice touch but slightly heavier on render. Skip unless performance is fine after Step 4-5 ship.
