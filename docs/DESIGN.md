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
| **Accent** | `--color-brand-accent` `#b5924a` Origin Gold, as rule/fill only | `--color-brand-accent` — the division's own |
| **Primary action** | `--color-brand-action` `#161210` Origina Noir | `--color-brand-action` — the division's own |
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
- `ContentStatus` badges have the same problem: `--development` and `--future` rely on the paper
  background showing through a near-transparent fill, so crimson text drops to ~1.9:1 on a noir
  panel. Pass the `dark` prop wherever the badge sits on a dark ground (e.g. the homepage Platforms
  section) — it repaints as a neutral ivory outline instead.

### Division color identities (§7)

The six division pages share the dark register, but four now carry a **distinct palette** so each
reads as its own world within ORIGINA. Implemented purely as **scoped CSS-variable overrides**: each
page is wrapped in `<DivisionTheme division="slug">` (a full-width, layout-neutral `div[data-division]`),
and the matching `[data-division]` block in `globals.css` re-points the division-layer tokens
**two** layers: the legacy pigment tokens (`--color-noir` ground, `--color-gold` accent,
`--color-ivory` text, `--color-muted-dark`), so existing `bg-noir` / `text-gold` / `btn-gold` markup
retints with no JSX change; and the semantic role tokens (`--color-brand-ground`, `-accent`,
`-action`, `-rule`), which is what new work should consume — **no layout, typography,
or photography change**. `DivisionCard` carries the same `data-division`, so cards on the homepage and
`/divisions` index take a subtle per-division tint without recolouring the institution around them.

| Division | Ground | Accent | Signature CTA | Character |
|---|---|---|---|---|
| BettyWorld | Deep Ink `#12120b` | Antique Gold `#c8ac6a` | gold (default) | warm, creative |
| B-Melanox | Warm Charcoal `#26251c` | clinical red `#cc7676`¹ | oxblood `#8f1717` → `#5a0b0b` | clinical, precise |
| NOVIA | Forest Noir `#16220f` | Antique Gold `#c8ac6a` | deep sage `#506b43` | botanical |
| DIVINE | Midnight `#11130a` | Sovereign Gold `#b89a2f` | imperial burgundy `#722333` | heritage luxury |

Each signature CTA comes from that division's `--color-brand-action` binding, so there are no
per-division `.btn-gold` rules — `.btn-gold` reads the token. BValence and Skin Safari have no
approved palette yet; a `[data-division]` baseline keeps them on gold-on-noir rather than letting
them fall through to the institution's noir-filled primary, which would be invisible on a noir
ground.

**Contrast rule carried over:** a brand colour too dark to read as text on the dark ground
(oxblood, burgundy) is used only as a solid button fill with light text, never as accent text.
¹ B-Melanox's readable accent is a lighter tint of its oxblood — an accessibility adaptation, named
as one in `globals.css` — with true oxblood reserved for the CTA.

Light "interlude" sections inside a division page carry the institution's own eyebrow treatment
(Warm Graphite label, gold rule); division colour lives in the dark sections. Because text roles are
ground-dependent, they are resolved by a ground-scoped block matching `.bg-noir` / `.bg-noir-deep` /
`.bg-brand-ground` — **not** on the `[data-division]` wrapper, which would push dark-ground text
colours into these light sections. The site header and footer sit outside `DivisionTheme` and keep
the parent ORIGINA register on every page.

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

- **Serif** — Source Serif 4. All headings, pull quotes, statistics, and section indices. (Replaced
  Cormorant Garamond 2026-08-24 for more institutional weight and readability — Source Serif 4 has a
  larger x-height and a solid 400 regular, where Cormorant read light and display-delicate.)
- **Sans** — Source Sans 3. Body, interface, labels. (Replaced Montserrat, same date.)

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables `--font-serif-family` /
`--font-sans-family`, consumed by the `--font-serif` / `--font-sans` tokens in `globals.css`.

> **Re-tuning note.** The `clamp()` display scale was calibrated for Cormorant, which is narrower and
> taller. Source Serif 4 sets wider and heavier at the same px, so the largest display sizes may want
> a small trim — confirm and adjust during in-browser QA (Phase 9).

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

**Paired-variant tokens added 2026-08-22**, closing out one-off hex values that had accumulated in
components (`EnquiryForm`, `future/page.tsx`):

| Token | Value | Use |
|---|---|---|
| `--color-noir-soft` | `#1e1916` | gradient start on the enquiry-form success panel |
| `--color-crimson-wash` / `--color-crimson-ink` | `#f6e9e7` / `#692024` | form error alert bg/text |
| `--color-stone-deep` | `#786d63` | `--color-stone` only reaches ~3.1:1 against `--color-paper`/`--color-form-bg` (fails WCAG AA for normal text) — this pairing passes at ~4.9:1. Use on light grounds; `--color-stone` itself is correct on dark grounds, where it already clears AA. |
| `--shadow-panel` | `0 20px 50px rgba(27,23,20,0.14)` | the light-mode `.site-nav-panel` dropdown shadow — distinct from `--shadow-nav` (the dark-mode version), not a duplicate of it |

The `Breadcrumbs`, `SiteFooter`, and `EnquiryForm` components all found real AA failures during this
pass — `text-stone` on a light ground reads fine on screen but fails contrast math. Check new muted
text against both `--color-paper` and `--color-form-bg`, not just by eye, before reusing `stone`.

**Shared muted-text classes default to `stone-deep` (2026-08-24).** The utility classes
`.scientific-metadata`, `.page-meta`, `.footnote`, `.editorial-caption`, `.quote-attribution`,
`.stat-label`, and `.content-status--future` now use `text-stone-deep` so they clear AA on the light
grounds they mostly sit on. The two places these render on a **dark** ground restore the lighter
`--color-stone` via scoped overrides on the existing wrappers — `.page-hero--dark .page-meta`,
`.page-hero--dark .editorial-caption`, and `.quote-band--dark .quote-attribution`. Prefer this
wrapper-scoped pattern over one-off page colours.

**Radius is 0 everywhere**, with two deliberate exceptions: the numbered circular step badge in
`EvidenceLadder` and the "B" monogram seal on `/divisions/b-melanox` are editorial devices (a
timeline dot, a wax-seal mark), not pills. Every other rounded corner sitewide — the floating
rounded-pill header, `rounded-full` badges, `rounded-2xl` dropdown panels, and stray `rounded-sm`
photo frames — has been squared. Institutional interfaces do not use pill shapes.

**Vertical rhythm:** `--section-y: clamp(4rem, 7vw, 8.5rem)`, increased from `clamp(3rem, 6vw, 7rem)`.

---

## 4. Components

### Header — `SiteHeader`

Flat, full-bleed, grounded. Wordmark left, restrained horizontal nav, hairline rule beneath, no
blur-heavy floating pill, no border radius. Switches to the dark register on division pages. Nav
type is 13–14px.

### Homepage hero — `HomeHero`

**Editorial split, light register (redesigned 2026-08-23).** An asymmetric composition — a left
content column (eyebrow, serif headline with a crimson second line, lede, one primary button + one
secondary text link, an understated metadata line) beside a right documentary photograph — contained
within `.site-container` on the 12-column grid (`lg:col-span-6` / `lg:col-span-6`, `xl` 5 / 7). It
sits in the **light** register (paper ground, gold accent) so it reads continuously with the
light institution header, rather than the previous noir carousel. The crimson second line is
retained editorial emphasis and is an open client decision — see root `DESIGN.md` §4.4.

Why the change from the old full-bleed noir carousel: the brief called for an "opening page of an
institutional publication" — left-aligned editorial content beside authentic photography, not a
promotional image banner. A single **landscape-composed** image (no rotation) is calmer and reads as
more institutional; rotation and dot controls were promotional furniture. Text sits on the paper
ground, never over the photograph, so no heavy overlay is needed — only a small warm gradient at the
*foot* of the image for caption legibility (`.home-hero-figure-shade`).

- **Height** is ~`72vh` on desktop via `lg:min-h-[72vh]` on both columns (`items-stretch` equalises
  them), never `100vh`; a hint of the next section stays visible. Mobile takes natural height with
  the image stacked *beneath* the content (source order: content first, figure second) at a `4/3`
  (`sm:16/9`) aspect.
- **Server-rendered.** The entrance is pure CSS (`.hero-rise` → `@keyframes heroRise`, opacity +
  12px rise, staggered via `animationDelay`), so no client JS ships for the hero. The reduced-motion
  rule collapses it.
- **Photography must stay landscape-composed.** `object-cover` forces a portrait crop into an
  unrecognisable close-up in the wide figure (verified previously with `portraitClinical`). Portrait
  shots belong in the Founder section's portrait `EditorialImage`, not here.
- The header is **opaque** and the hero is now the same paper ground beneath it, so they read as one
  surface; `--header-offset` must still match the rendered header height (69px at `lg`) since
  `scroll-padding-top` and `SectionNav` derive from it.

### Buttons — sizes

`.btn-compact` is the small size, used for the header call to action. It is declared *after* the
button bases in the same layer because a utility override does not win against the component's own
`min-height` — `min-h-0` alongside `.btn-primary` still resolved to 48px. Reach for `.btn-compact`
rather than patching sizes with utilities.

### Hero — `PageHero`

`variant="light"` (default, institution) or `variant="dark"` (division) — the only two values; the
`"gradient"`/`"default"` aliases were removed 2026-08-22 once every one of the 18 call sites that
used them (out of 25 routes) was migrated to `"light"`. Renders a `Breadcrumbs` trail; pass
`parent={{ label, href }}` for pages nested under a hub (`/science/*`, `/divisions/*`,
`/future/[id]`) to get a three-level "Home / Section / Page" trail instead of the default two-level
one. Supports an optional `meta` line for page provenance ("Reviewed August 2026").

### Breadcrumbs — `Breadcrumbs`

Extracted from `PageHero`'s inline markup. Always renders "Home", optionally a `parent` level, then
the current `crumb`. Takes a `dark` flag rather than reading layer from the pathname itself, so it
stays reusable outside `PageHero` if a future component needs one.

### Section — `Section`

Tones: `paper` (default), `sunk`, `noir`, `crimson`, `graphite` — the only five; the `ivory`/`cream`/
`oxblood` aliases were removed 2026-08-22 after migrating the 44 call sites (across 21 of 25 routes)
that used them instead of the canonical names. Supports:

- `index` — an ordinal shown above the title (`.section-index`)
- `divider` — a hairline opening the section
- `split` — **on by default.** When a title and intro coexist (and `center` is
  not set), the header lays out as an asymmetric editorial composition: title on
  the left, intro on the right, sharing one row on large screens
  (`.section-header-split`). Pass `split={false}` to stack the intro under the
  title in the rare case that reads better. This is the institutional editorial
  header device (DESIGN brief §11, §21) and applies across every public route.

`.editorial-grid` is the reusable 12-column grid primitive (collapses to one
column below `lg`); pair it with Tailwind `col-span-*` utilities to place a
heading, a narrative column, and metadata on one baseline grid.

### Section navigation — `SectionNav`

In-page navigation for long reads: a sticky bar beneath the header listing the page's sections,
with the current one marked. Lets a reader see the shape of the whole argument, jump within it, and
always know where they are. Applied to `/about` and `/labs`; roll out to any page with five or more
sections by giving each `<Section>` an `id` and passing a matching item list.

The active section is the last one whose top has passed a reading line 30% down the viewport, with
every target measured on each pass.

### Closing CTA — `PageCta`

Defaults to `tone="sunk"` — a light band opened by a rule with an Origina Noir primary action.
Division pages pass `tone="noir"`, where `.btn-gold` resolves to that division's own action colour.

### Development framework — `ProcessPathway`

The 13-stage development pipeline (`developmentPathway` in `src/lib/content/science.ts`), grouped
into four labelled phases — Discovery (1–3), Development (4–6), Validation (7–10), Translation
(11–13) — rather than one flat 13-cell grid. Grouping is a fixed index range inside the component;
the underlying step copy and its order are untouched.

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
- Focus ring: 2px `--color-brand-focus` at 3px offset — Origina Noir on light grounds, Gold Light
  on dark ones, so it always clears the 3:1 required by WCAG 2.2 §1.4.11.
- `prefers-reduced-motion` disables smooth scroll and collapses transitions.
- Skip-to-content link on every page.
- Contrast: Origin Gold `#b5924a` on paper `#fdfbf7` is only **2.83:1** — it fails AA for text and
  even the 3:1 large-text floor. Gold is therefore a *mark*, never light-ground accent text: rules,
  fills behind dark text (5.7:1), or accents on a dark ground (5.7:1 on Noir). Where light-ground
  accent text is genuinely needed, `--color-brand-accent-readable` `#866a2a` gives 4.94:1 and is
  labelled in `globals.css` as an accessibility adaptation.
- Crimson `#7a171b` is ~9.4:1 on paper but ~1.9:1 on noir, which is why it is never placed on a
  dark ground — see *Accent discipline* above.

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
9. Match photo orientation to the box. A full-bleed landscape hero needs landscape-composed
   photography — a portrait crop stretched with `object-cover` degrades into an unrecognisable
   close-up no matter where `object-position` points.
