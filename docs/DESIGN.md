# ORIGINA design system

The presentation standard for the public site. This document is the reference for *why* the site
looks the way it does, not only what the tokens are. Change the tokens in `src/app/globals.css`;
change the reasoning here in the same commit.

**Design goal:** ORIGINA should read as a research institution — the register of Harvard, Yale,
Rockefeller, the Broad Institute — not as a luxury or lifestyle brand. Authority in institutional
design comes from restraint, generous typography, and disciplined structure. It does not come from
ornament.

---

## 1. The two-layer brand architecture

ORIGINA speaks in two registers, and the design maps directly onto the information architecture.

| | Institution layer | Division layer |
|---|---|---|
| **Ground** | `--color-paper` `#fdfbf7` | `--color-noir` `#161210` |
| **Text** | `--color-ink` `#1b1714` | `--color-ivory` `#f8f4ec` |
| **Accent** | `--color-crimson` `#7a171b` | `--color-gold` `#b5924a` |
| **Used by** | home, about, science, labs, evidence, founder, africa, future, culture, platforms, contact, legal, `/divisions` index | `/divisions/<slug>` — B-Melanox, Novia, DIVINE, BValence, Skin Safari, BettyWorld |

**Why two layers.** Gold-on-noir is the language of luxury and cosmetics. It is right for a product
speaking about itself, and wrong for an institution speaking about its science. Splitting the two
lets each speak correctly, and it gives the dark register a *reason* to exist instead of being the
default everywhere. This mirrors how a university's central site is light while its individual
schools and labs carry their own expression.

Layer is resolved from the pathname in `src/lib/layer.ts`. The header, hero, and closing CTA all
read from it. `/divisions` itself is institutional — that is the institution describing its
portfolio.

### Accent discipline

- **Crimson never appears on a dark ground.** At `#7a171b` on `#161210` the contrast is ~1.9:1 —
  unreadable. Dark bands inside institution pages use warm neutrals (`ivory/70`, `stone`) for
  numerals and `white/12`–`white/20` for rules.
- **Gold never appears on an institution page.** It is reserved entirely for the division layer.
- Dark sections on institution pages are **punctuation** — at most one or two per page, marking a
  turn in the argument. They are not the ground.

---

## 2. Typography

The single largest change from the previous system. Body copy was 15px, interface labels ran as
small as 8.3px, and desktop nav links were ~8.8px. Micro-type with wide letterspacing is the visual
language of fashion and agency sites; institutions use generous, confident, readable type.

### Scale

| Role | Token / class | Size | Notes |
|---|---|---|---|
| Body (base) | `body` | **17px** / 1.72 | was 15px |
| Body copy | `.body-copy` | 17px / 1.72 | |
| Section intro | `.section-intro` | 18px / 1.66 | held to `--measure` |
| Lead | `.lead-serif` | 24 → 34px serif | |
| Section title | `.section-title` | 32 → 53px serif | |
| Display | `.display-title` | 42 → 92px serif | |
| Nav link | `.site-nav-link` | **13–14px** | was ~8.8px |
| Button | `.btn-*` | **13px** | was ~10.5px |
| Eyebrow | `.eyebrow` | 11 → 12px | |
| Metadata | `.scientific-metadata` | 11px | was ~9px |
| Status badge | `.content-status`, `StatusBadge` | 12px | was ~8.3px |

**Hard floor: nothing in the interface is set below 11px (`0.6875rem`).** During this pass 30
instances of sub-11px type on the public site were raised to 12px, including enquiry form labels
that had been rendering at 9px.

### Faces

- **Serif** — Cormorant Garamond. All headings, pull quotes, statistics, and section indices.
- **Sans** — Montserrat. Body, interface, labels.

### Measure

Text columns are held to a reading measure, never the full container width:

- `--measure: 68ch` — body columns, section intros, hero intros
- `--measure-tight: 58ch` — hero lede

Container is `--content-max: 1320px` (narrowed from 1440px).

---

## 3. Structure and rules

**Hairline rules are the primary institutional device.** Cards and panels are separated by 1px
rules rather than shadows and hover lifts.

| Token | Value | Use |
|---|---|---|
| `--color-rule` | `rgba(27,23,20,0.16)` | default hairline |
| `--color-rule-soft` | `rgba(27,23,20,0.09)` | secondary divisions |
| `--color-rule-strong` | `rgba(27,23,20,0.34)` | opening a block, outlined buttons |

**Radius is 0 everywhere.** The floating rounded-pill header, `rounded-full` badges, and
`rounded-2xl` dropdown panels have all been squared. Institutional interfaces do not use pill
shapes.

**Vertical rhythm:** `--section-y: clamp(4rem, 7vw, 8.5rem)`, increased from `clamp(3rem, 6vw, 7rem)`.

---

## 4. Components

### Header — `SiteHeader`

Flat, full-bleed, grounded. Wordmark left, restrained horizontal nav, hairline rule beneath, no
blur-heavy floating pill, no border radius. Switches to the dark register on division pages. Nav
type is 13–14px.

### Homepage hero — `HomeHero`

Held to the viewport: `lg:h-[calc(100dvh-var(--header-offset))]`, clamped between 600px and 880px.

This matters because the content is vertically centred. Left to grow with its content the hero ran
**1205px on a 720px viewport**, so "centred" pushed the composition below the fold — a large dead
gap under the header and the stats invisible. Holding it to the viewport is what makes the centring
read. After the change: 650px, with the statistics row and scroll cue both above the fold.

Two related rules:

- `--header-offset` must match the *rendered* header height (69px at `lg`), since the hero height,
  `scroll-padding-top`, and the `SectionNav` sticky offset all derive from it.
- The header is **opaque**, not translucent. The hero runs full-bleed beneath it, and any
  translucency ghosts the photograph through the bar.

### Buttons — sizes

`.btn-compact` is the small size, used for the header call to action. It is declared *after* the
button bases in the same layer because a utility override does not win against the component's own
`min-height` — `min-h-0` alongside `.btn-primary` still resolved to 48px. Reach for `.btn-compact`
rather than patching sizes with utilities.

### Hero — `PageHero`

`variant="light"` (default, institution) or `variant="dark"` (division). `"gradient"` and
`"default"` remain as aliases so existing pages keep working. Supports an optional `meta` line for
page provenance ("Reviewed August 2026") — institutions state when a page was last reviewed.

### Section — `Section`

Tones: `paper` (default), `sunk`, `noir`, `crimson`, `graphite`. `ivory` / `cream` / `oxblood` are
retained as back-compat aliases resolving to the institutional equivalents. Supports:

- `index` — an ordinal shown above the title (`.section-index`)
- `divider` — a hairline opening the section

### Section navigation — `SectionNav`

In-page navigation for long reads: a sticky bar beneath the header listing the page's sections,
with the current one marked. Lets a reader see the shape of the whole argument, jump within it, and
always know where they are. Applied to `/about` and `/labs`; roll out to any page with five or more
sections by giving each `<Section>` an `id` and passing a matching item list.

The active section is the last one whose top has passed a reading line 30% down the viewport, with
every target measured on each pass.

### Closing CTA — `PageCta`

Defaults to `tone="sunk"` — a light band opened by a rule with a crimson primary action. Division
pages pass `tone="noir"` for a gold action.

### Institution map — `InstitutionMap`

The org architecture diagram (ORIGINA → Labs → Platforms → Divisions). Hierarchy is carried by
weight, not decoration: the institution is a solid crimson block, the scientific engine a solid ink
block, and platforms and divisions below are paper panels joined by crimson hairlines.

### Quotes — `Quote`, `QuoteBand`

Both accept `attribution`. Pull quotes use a 2px accent rule on the left. `QuoteBand` defaults to
the light register with `dark` available.

### Footer — `SiteFooter`

Stays dark in both layers — it is the colophon and anchors every page. Accents are restrained warm
neutrals with crimson-light on the headline.

---

## 5. Accessibility

- 11px interface floor (above), 17px body.
- Focus ring: 2px crimson at 3px offset.
- `prefers-reduced-motion` disables smooth scroll and collapses transitions.
- Skip-to-content link on every page.
- Contrast: crimson `#7a171b` on paper `#fdfbf7` is ~9.4:1. This is why crimson is never placed on
  a dark ground — see *Accent discipline* above.

---

## 6. Rules of thumb

1. Light ground is the default. Dark is punctuation, and it needs a reason.
2. Nothing below 11px, ever — including icon glyphs. The nav chevron was a 9.6px text
   character rendering as a speck; it is now a 9×5px SVG that draws at a real weight.
3. A hero whose content is vertically centred must be held to the viewport, or the centring
   pushes everything below the fold.
4. Check `sizes` on every `fill` image. The homepage hero was serving a 384px-wide file into a
   601px box and rendering soft; the culprit was a `sizes` value that did not describe the layout.
5. Rules, not shadows. Radius 0.
6. Hold text to a measure; do not let it run the full container.
7. Crimson on light, gold on dark, never the reverse.
8. Let the type be large and the spacing generous. Restraint reads as authority.
