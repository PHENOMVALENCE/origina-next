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

1. **Origin Gold `#b5924a` is the institutional thread, and it is a mark — not a text colour.**
   On paper it measures 2.83:1, which fails AA for body text *and* the 3:1 large-text floor. It is
   therefore only ever used as a hairline rule, as a fill behind dark text (gold ground + noir text
   = 5.7:1), or as accent text on a dark ground (5.7:1 on Origina Noir).
2. **Where accent *text* is needed on a light ground, use `brand-accent-readable` `#866a2a`** — a
   deepened Origin Gold at 4.94:1 on paper. It is an accessibility adaptation, not an approved
   client colour, and is labelled as such in `globals.css`.
3. **Crimson never sits on a dark ground.** `#7a171b` on `#161210` is ~1.9:1.
4. **Crimson is no longer the institutional default.** It reads as B-Melanox. See §4.1.
5. Any component that can render on both grounds either takes a `dark` prop and repaints, or
   consumes a ground-scoped role token — it never relies on a translucent fill letting the ground
   through.

---

## 4. Colour tokens

Defined once in `src/app/globals.css` under `@theme`. Never write a hex value in a component.

### 4.1 The client-approved palette and the crimson question

The client board defines the parent identity as five colours, and these are authoritative:

| Client name | Value | Institutional role |
|---|---|---|
| Origina Noir | `#161210` | Headings, navigation, dark bands, **solid primary buttons** |
| Institution Ivory | `#f8f4ec` | Primary light surface; text on noir |
| Origin Gold | `#b5924a` | The institutional thread — rules, fills, selected states, marks |
| Warm Graphite | `#3a332c` | Body text, secondary headings, supporting copy |
| Antiqued Stone | `#9a8e80` | Low-emphasis surfaces and borders; **not** small text on light |

The same five values already exist in the legacy PHP site
(`origina/admin/assets/css/origina-admin.css`), which corroborates them.

The architectural conflict this resolved: the institution layer had been using **crimson** as its
dominant accent — primary buttons, eyebrows, links, focus ring, section numerals. But crimson is
B-Melanox's identity colour. Using it as the parent CTA made the institution look like one of its
own divisions rather than the house they all sit beneath.

It was fixed by role, not by find-and-replace:

| Element | Was | Now | Why |
|---|---|---|---|
| Primary button | crimson fill | **Origina Noir fill**, ivory text | The client board assigns solid primary buttons to Noir |
| Eyebrow label | crimson text | Warm Graphite text | 12:1 on paper; the gold thread moves to its rule |
| Eyebrow rule | crimson hairline | **Origin Gold hairline** | Where gold earns presence without failing contrast |
| Text link | crimson text + crimson underline | ink text + **gold underline** | Keeps AA, and colour alone no longer marks a link (1.4.1) |
| Section numeral | crimson at 45% | `brand-accent-readable` | Deepened gold, AA-safe |
| Focus ring | crimson | `brand-focus` (Noir on light, Gold Light on dark) | Ground-aware, ≥3:1 either way (1.4.11) |
| Selection | crimson wash | gold wash | Thread |
| Reading progress | crimson | Origin Gold | Decorative, exempt |

Crimson deliberately **remains** for: B-Melanox's identity, semantic error states in
`EnquiryForm`, and controlled editorial emphasis in display headings. The last of these is still
an open client decision — see §4.4.

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

### 4.2 Semantic role tokens

The tokens above name **pigments**. The tokens below name **jobs**, and new work should consume
these. This exists because `--color-gold` was overloaded: on B-Melanox it resolves to a pink-red,
so the name actively lied about its value and made the system error-prone to maintain.

| Role token | Institution default | Meaning |
|---|---|---|
| `--color-brand-ground` | `#161210` | Dark ground / highest-emphasis fill |
| `--color-brand-ground-deep` | `#0d0b09` | Deepest ground (colophon) |
| `--color-brand-surface` | `#fdfbf7` | Reading surface |
| `--color-brand-surface-muted` | `#f0e9df` | Recessed surface |
| `--color-brand-text` | `#1b1714` | Primary text on the current ground |
| `--color-brand-text-muted` | `#3a332c` | Secondary text on the current ground |
| `--color-brand-accent` | `#b5924a` | Identity mark — rules and fills |
| `--color-brand-on-accent` | `#161210` | Text on an accent fill |
| `--color-brand-accent-readable` | `#866a2a` | Accent **text**, AA-safe on the current ground |
| `--color-brand-action` | `#161210` | Primary action fill |
| `--color-brand-action-hover` | `#3a332c` | Action hover |
| `--color-brand-action-text` | `#f8f4ec` | Text on the action fill |
| `--color-brand-rule` | `gold @ 42%` | The thread as a hairline |
| `--color-brand-focus` | `#161210` | Focus indicator |

**Ground-dependent roles are not bound on the wrapper.** `brand-text`, `brand-text-muted`,
`brand-accent-readable` and `brand-focus` depend on the ground, and a division page carries both
light and dark sections. Binding them on `[data-division]` put light-on-light text into every
division page's light sections — measured and caught during validation. They are resolved instead
by a ground-scoped block matching `.bg-noir`, `.bg-noir-deep`, `.bg-brand-ground`.

### 4.3 Division sub-brand

Each `/divisions/<slug>` rebinds both layers in its `[data-division]` block: the legacy pigment
tokens, so existing `bg-noir` / `text-gold` markup retints with no JSX change, and the semantic
roles, which is what new work reads. A `[data-division]` baseline also exists so divisions with no
approved palette yet (Skin Safari, BValence) inherit the ORIGINA gold-on-noir treatment rather than
the institution's noir-filled primary, which would be invisible on a noir ground.

Every division shares typography, spacing, grid, header, footer, button and card construction,
focus behaviour, motion, and editorial hierarchy. Identity comes only from token rebinding,
imagery, and controlled surface changes.

| Division | Ground | Accent (text) | Action fill | Action text |
|---|---|---|---|---|
| BettyWorld | `#12120b` Deep Ink | `#c8ac6a` Antique Gold | `#c8ac6a` Antique Gold | Deep Ink |
| B-Melanox | `#26251c` Warm Charcoal | `#cc7676` *adapted* | `#8f1717` Oxblood | white |
| NOVIA | `#16220f` Forest Noir | `#c8ac6a` Antique Gold | `#506b43` Deep Sage | Warm Cream |
| DIVINE | `#11130a` Midnight Stable | `#b89a2f` Sovereign Gold | `#722333` Imperial Burgundy | Aged Parchment |

Because the button now reads `--color-brand-action`, the four per-division `.btn-gold` override
rules were deleted — the token layer expresses them.

**B-Melanox accessibility adaptation.** Oxblood `#8b141a` on Warm Charcoal is ~1.6:1, unusable as
text. `#cc7676` is a derived readable tint used for accent text only; true Oxblood remains the
action fill, where white text on it clears AA. This is an adaptation, and is named as one.

Each division page uses one ground, one text colour, one accent, one action, and one supporting
neutral — not its whole palette.

### 4.4 Open client decisions

1. **Division hex values are unconfirmed.** The palette board supplied is 554px wide; its hex
   labels render at ~4px and are not legibly recoverable at any magnification. The five ORIGINA
   institution values are confirmed independently against the legacy PHP repo, but the ~21
   division values are currently *approximations* carried over from an earlier session. They need
   confirming as text before they can be called client-exact.
2. **Display-heading crimson.** Hero headings still set their second clause in crimson
   (`Beginning in Africa. / Serving the world.`). It is the most prominent remaining institutional
   crimson. Whether it becomes Noir, Warm Graphite, or stays as approved editorial emphasis is a
   brand decision, not a technical one, so it has been left untouched.
3. **Antiqued Stone as metadata.** `#9a8e80` reaches only ~3.1:1 on paper, so light-ground
   metadata uses `--color-stone-deep` `#6f6459` instead. Confirm this substitution is acceptable.

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
