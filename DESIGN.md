# ORIGINA™ — Design source of truth

This file is the top-level visual contract for the public site. It states the atmosphere, the
reference research behind it, the token vocabulary, and the rules that decide a design argument.

Two companions carry the detail:

- `src/app/globals.css` — the tokens themselves. Values live here, nowhere else.
- `docs/DESIGN.md` — component-level specification (header, hero, sections, cards, quotes, image
  primitives) and the reasoning behind each.

If this file and the CSS disagree, the CSS is the bug.

---

## 1. Brand atmosphere

ORIGINA is a multi-divisional innovation institution working at the intersection of biology,
clinical science, technology, and human wellbeing. The site must read the way a research
institution reads: **calm, dense, evidence-forward, unhurried**.

The register we are aiming at:

> A serious, thoughtful, research-oriented institution with a distinctive intellectual point of
> view — one that happens to originate in Africa and says so plainly.

Authority here comes from restraint, generous type, and disciplined structure. It does not come
from ornament. Concretely, this means:

**Present** — warm paper ground, editorial serif for institutional statements, hairline rules,
squared corners, full-bleed photography with real captions, asymmetric two-column composition,
long uninterrupted measures of prose, visible provenance (review dates, status labels).

**Absent** — rounded cards, cards nested in cards, glassmorphism, gradient text, glowing blobs,
decorative blur, floating geometry, drop shadows used for hierarchy, icon-per-feature grids,
stat counters without a source, every section centered, a new background colour every scroll.

`Biology First™` is an intellectual framework, not a tagline. It is set as a proposition in serif
and given room, never treated as a badge.

---

## 2. Reference analysis

Five systems from the local library at `awesome-design-md` were read in full before any change.
Each contributed a principle; none contributed a composition.

### IBM — `design-md/ibm/DESIGN.md`

**Adopted.** Zero corner radius as a system-wide decision, not a per-component one. Hairlines and
surface changes as the primary hierarchy device instead of elevation. A single accent colour used
sparingly and semantically. Grid discipline strong enough that information density reads as
competence rather than clutter.

**Rejected.** Carbon's light display weights and its enterprise-product density. ORIGINA is
editorial, not a console; its display type carries warmth that IBM Plex deliberately does not.

### Apple — `design-md/apple/DESIGN.md`

**Adopted.** Photography as a first-class structural element rather than decoration. Narrative
pacing — alternating scale so the eye is given a rest between arguments. Near-invisible UI
chrome. Deliberate aspect ratios rather than arbitrary container heights.

**Rejected.** Consumer-product minimalism, soft elevation under product imagery, and the
tendency toward one idea per full viewport. An institution has to be able to say a lot.

### WIRED — `design-md/wired/DESIGN.md`

**Adopted.** Editorial hierarchy: eyebrow → headline → deck → body → figure → caption, applied
consistently so any page announces its own structure. Typographic contrast between a display
serif and a metadata sans. Square buttons, hairline borders, a genuine story grid.

**Rejected.** Magazine visual noise — dense competing modules, promotional density, and the
black-and-white-only palette, which would strip ORIGINA of its warmth.

### Claude — `design-md/claude/DESIGN.md`

**Adopted.** Intellectual warmth. A warm off-white canvas rather than pure white is the single
most load-bearing borrowing in the whole system: it makes long-form reading comfortable and
signals a considered voice before a word is read. Restrained surfaces; literary, unhurried prose
blocks.

**Rejected.** Coral accent, slab-serif display, hierarchical border radii, and anything that
reads as AI-product identity.

### The Verge — `design-md/theverge/DESIGN.md`

Read primarily as a counter-example, and it earned its place that way.

**Adopted.** Two things only. First, zero decorative gradients — colour applied as solid blocks
rather than washes, because a wash dissolves an identity built on structure. Second, hairline
borders doing the work shadows would do elsewhere, which independently confirms the same
structural choice IBM makes.

**Rejected.** Everything else, deliberately: the near-black canvas as default, hazard accents,
107px display weights, and the 20–40px pill radii on every container. The Verge is the clearest
illustration in the library of the register ORIGINA must not occupy — loud, tabloid-adjacent,
and radius-heavy. Naming it explicitly is what keeps the 0px radius rule from drifting.

---

## 3. ORIGINA design direction

> **Warm institutional paper, editorial serif, hairline structure, and photographic evidence —
> with a dark division register that earns its darkness.**

The site speaks in two registers, mapped directly onto the information architecture rather than
chosen for variety:

| | Institution layer | Division layer |
|---|---|---|
| Ground | `--color-paper` | `--color-noir` |
| Text | `--color-ink` | `--color-ivory` |
| Accent | `--color-crimson` | `--color-gold` (per-division) |
| Routes | `/`, `/about`, `/science/*`, `/labs`, `/africa`, `/future`, `/culture`, `/platforms`, `/founder`, `/contact`, legal, `/divisions` index | `/divisions/<slug>` |

Gold-on-noir is the language of cosmetics and luxury: right for a product speaking about itself,
wrong for an institution speaking about its science. Splitting the registers lets each speak
correctly and gives the dark ground a reason to exist rather than being a default. The layer is
resolved from the pathname in `src/lib/layer.ts`.

### Accent discipline (hard rules)

1. **Crimson never sits on a dark ground.** `#7a171b` on `#161210` is ~1.9:1. On dark bands use
   warm neutrals for numerals, `gold-light` for emphasis, and `white/12`–`white/20` for rules.
2. **Gold never sits on an institution page.** It belongs to the division layer.
3. **Gold never sits on a light ground even inside a division page.** Division pages contain
   light sections; inside them the accent reverts to crimson.
4. Any component that can render on both grounds takes a `dark` prop and repaints — it never
   relies on a translucent fill letting the ground through.

---

## 4. Colour tokens

Defined once in `src/app/globals.css` under `@theme`. Never write a hex value in a component.

### Ground and surface

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#fdfbf7` | Institutional canvas |
| `--color-paper-sunk` | `#f5f0e6` | Recessed panels, pull-outs |
| `--color-noir` | `#161210` | Division canvas, institutional dark bands |
| `--color-noir-deep` | `#0d0b09` | Footer colophon |
| `--color-noir-soft` | `#1e1916` | Raised surface on a dark ground |

### Text

| Token | Value | Role |
|---|---|---|
| `--color-ink` | `#1b1714` | Body and headline on paper |
| `--color-ink-soft` | — | Secondary prose on paper |
| `--color-stone-deep` | `#6f6459` | Muted metadata **on light grounds** — AA-safe (≥5:1 on paper and on `paper-sunk`) |
| `--color-stone` | `#9a8e80` | Muted metadata **on dark grounds only** — fails AA on paper |
| `--color-ivory` | `#f8f4ec` | Body and headline on noir |

`stone` and `stone-deep` are not interchangeable. `stone` on paper measures ~3.1:1 and is a bug
wherever it appears on a light section.

### Accent

| Token | Value | Ground |
|---|---|---|
| `--color-crimson` | `#7a171b` | light only |
| `--color-crimson-deep` | `#5c1114` | light only |
| `--color-crimson-light` | `#a3272c` | light only — **not** a dark-ground variant despite the name |
| `--color-gold` | `#b5924a` | dark only |
| `--color-gold-light` | `#d6bd83` | dark only; the emphasis colour in the footer |

### Semantic

`--color-sage` / `--color-sage-light` (operating), `--color-rule` (hairline), `--color-crimson-wash`
(callout ground), `--color-crimson-ink` (text on wash).

### Division sub-brand

Each `/divisions/<slug>` re-binds `--color-noir*`, `--color-gold*`, and `--color-ivory` in a
`[data-division]` block. Every division therefore shares typography, layout, navigation,
components, spacing, and interaction language, and differs only in accent and ground temperature.

| Division | Ground | Accent |
|---|---|---|
| B-Melanox | `#26251c` warm charcoal | `#cc7676` clinical red |
| Novia | `#12120b` | `#c8ac6a` |
| DIVINE | `#11130a` midnight | `#b89a2f` sovereign gold |
| BValence | `#16220f` forest noir | `#c8ac6a` |

The accent touches eyebrows, section rules, numerals, links, callouts, and selected states. It
does not recolour every component.

---

## 5. Typography

**Source Serif 4** (`--font-serif`) and **Source Sans 3** (`--font-sans`). This pairing is
deliberate and is not up for revision: a Dutch-inflected text serif with an institutional voice,
paired with its own humanist sans companion, giving family coherence without uniformity.

**Serif** — institutional headlines, philosophical propositions, page titles, pull quotes, drop
caps, statistic figures.

**Sans** — navigation, body copy, labels, buttons, metadata, captions, forms, tables.

Serif is not used for body copy, and display sizes are not inflated to look contemporary.

Scale uses `clamp()` so headlines resolve optically rather than stepping at breakpoints. Body
measure is capped so prose stays at roughly **60–75 characters per line**; `max-w-xl` /
`max-w-2xl` on prose blocks exist for that reason, not for symmetry.

**Hard floor: 11px.** No text renders below `0.6875rem`, including scientific labels and status
badges.

---

## 6. Spacing and grid

Spacing is drawn from the Tailwind 4-based scale only:

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128
```

Values like `37px` or `119px` are defects unless optically justified and commented.

Section rhythm scales across breakpoints — `py-16` mobile, `py-20` at `sm`, `py-24`+ at `lg` — so
that density, not just size, adapts.

Container: `.site-container`, max width ~1440px with responsive gutters. Alignments belong to a
12-column desktop / 6–8-column tablet / 4-column mobile system; components need not literally
declare twelve tracks, but their edges must land on it.

**Radius: 0 everywhere.** Squared corners are a system decision.

**Elevation: none.** Hierarchy is carried by hairlines (`--color-rule`, `white/12`) and by ground
changes. Shadows are not used to separate content.

---

## 7. Imagery

Photography is structural. Aspect ratios are chosen from a fixed set rather than by setting
container heights:

```
cinematic 16:9 · editorial 4:3 · portrait 3:4 · feature 3:2 · square 1:1
```

Rules:

- Every `next/image` with `fill` declares a `sizes` value that matches its **actual rendered
  width at every breakpoint**, not a single desktop fraction. A `sizes="25vw"` on a grid that
  collapses to one column below `sm` serves a 256px source into a 342px box and reads as soft.
- Alt text and captions live in `src/lib/content/images.ts` and must stay accurate.
- Images are not rounded.
- Full bleed is earned by images that carry an argument, not granted by default.

---

## 8. Motion

Motion reinforces hierarchy or it is removed. Permitted: subtle content reveals, image scale on
hover, navigation transitions. Not permitted: everything fading upward, bouncing indicators,
parallax, continuous ambient movement.

`prefers-reduced-motion: reduce` disables transform and opacity transitions globally.

---

## 9. Accessibility rules

Target: **WCAG 2.2 AA**.

- Normal text ≥ 4.5:1; large text (≥24px, or ≥18.66px bold) ≥ 3:1. Measured in-browser with
  alpha compositing against the real effective background — computed colours in this codebase are
  `oklab()`, so string parsing gives false results.
- Brand colour never wins over contrast. If an accent cannot clear the threshold on a ground, the
  component repaints for that ground.
- One `<h1>` per page; no heading level skipped.
- Visible focus: 2px crimson outline with offset, on the light layer; the dark layer inverts.
- Touch targets ≥ 44px on interactive rows.
- Landmarks: `header`, `nav`, `main`, `footer` present on every route.

---

## 10. Deciding a design argument

In order:

1. ORIGINA brand identity
2. Institutional credibility
3. Content hierarchy
4. User comprehension
5. Accessibility
6. Responsive usability
7. Visual sophistication
8. Decorative novelty

If an element is visually interesting but weakens credibility or comprehension, it goes.
