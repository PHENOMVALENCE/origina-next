# ORIGINA — Institutional UI/UX Audit

_Audit date: 2026-08-24. No code changed in this document — it is the Phase 1 record that
subsequent phases are worked against._

## Context

This is not a greenfield site. `origina-next` has already had several institutional design passes
(logged in `docs/PROGRESS.md`, rationale in `docs/DESIGN.md`): a two-layer design-system rebuild, a
typography overhaul, an editorial-header rollout across all 25 routes, a WCAG-AA contrast sweep, and
a hero rebuild into a light editorial split. So this audit's job is to separate **what is already at
institutional standard** from the **genuine remaining gaps** — not to justify a from-scratch rebuild.

## Stack (verified)

- Next.js App Router, TypeScript, Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`).
- Fonts via `next/font/google`: **Cormorant Garamond** (serif) + **Montserrat** (sans).
- 33 public routes under `src/app/(site)`; a parked admin app under `src/app/admin` (own `admin.css`,
  not in scope).
- Shared primitives exist: `Section`, `PageHero`, `HomeHero`, `Breadcrumbs`, `Button`, `TextLink`,
  `Eyebrow`, `Quote`/`QuoteBand`, `SplitSection`/`EditorialImage`, `InstitutionMap`, `EvidenceLadder`,
  `ProcessPathway`, `StatusBadge`, `ContentStatus`, `SiteHeader`, `SiteFooter`, `SectionNav`,
  `EnquiryForm`, `ResearchLibrary`.
- Photography registry in `src/lib/content/images.ts` (founder + product assets, each with `alt`/
  `caption`).

## Dimension-by-dimension

| Dimension | State | Notes |
|---|---|---|
| Design tokens | **Strong** | Centralised in `globals.css @theme`: paper/ink/crimson (institution) + noir/ivory/gold (division), rule scale, measure, container. No scattered hex (a prior pass consolidated them). |
| Typography | **Strong** | 17px/1.72 body, `clamp()` display scale, 68ch measure, 11px hard floor. **Open question below re: font family.** |
| Color & contrast | **Mostly strong** | Two-layer discipline documented; AA sweep done for direct light-ground `text-stone`. **Gap:** shared utility classes (`.stat-label`, `.quote-attribution`, `.scientific-metadata`, `.page-meta`, `.footnote`, `.editorial-caption`) still hard-code `text-stone` and are used on both grounds — need light/dark variants. |
| Spacing | **Strong** | `--section-y` clamp rhythm; generous. |
| Layout / grid | **Good** | Unified `.site-container` (max 1320, responsive gutters); `.editorial-grid` (12-col) and asymmetric split header now default across sections. |
| Navigation | **Strong** | Flat full-bleed header, hairline rule, squared, dropdown panels, 44px mobile targets, structured drawer menu. |
| Hero | **Strong (just redesigned)** | Light editorial split, server-rendered, ~72vh, fluid headline, reduced-motion entrance. |
| Homepage hierarchy | **Adequate, could tighten** | 14 numbered sections — reads more as a full narrative than an "executive overview". Candidate for condensing (Phase 4). |
| Cards / de-carding | **Good** | Editorial modules, hairline rules over shadows; radius 0 with two documented exceptions. |
| Buttons / links | **Strong** | Three restrained variants; text-link with hover-arrow motion. |
| Forms | **Good** | `EnquiryForm` has labels, focus, error/success, named tokens. Not re-verified in-browser this pass. |
| Footer | **Strong** | Substantial, multi-column, dark colophon, legal row. |
| Imagery | **Good** | Central registry with alt/caption; editorial compositions (`EditorialImage`, `PhotoMosaic`, `ImageBreak`). All founder photography is of one person — no research/lab/community variety, which limits the "programmes/impact/people" storytelling the brief envisions. |
| Accessibility | **Good baseline** | focus-visible ring, skip link, reduced-motion, semantic sections, one h1/page. Full keyboard + Lighthouse pass never run end-to-end. |
| Performance | **Good** | `next/image` with `sizes`/`priority`, `next/font`, hero now ships no client JS. No formal Lighthouse/CWV numbers captured. |
| Responsive | **Unverified** | Code looks correct, but the dev preview runs hidden in this environment, so **no breakpoint was visually confirmed**. This is the single biggest untested area. |

## Findings

### Keep (already at standard)
Design tokens, typography scale, header/nav, footer, button/link system, the two-layer brand, the
redesigned hero, hairline-over-shadow discipline, radius-0 rule.

### Redesign / improve
1. **Homepage as executive overview (Phase 4).** 14 sections is long; condense to glimpses that link
   out to the dedicated pages (which already exist and should stay).
2. **Shared muted-text contrast (accessibility gap).** Give the mixed-use utility classes light/dark
   variants so `text-stone` stops failing AA on light grounds.
3. **In-browser responsive QA (Phase 6/9).** Actually confirm 320→1440px — never done here.
4. **Full Lighthouse/keyboard pass (Phase 8).** Capture real numbers.

### Remove / condense
Nothing should be deleted. Detailed content already lives on dedicated internal pages; the homepage
just over-narrates. Condense on the homepage, don't remove pages (brief rule respected).

### Move to dedicated pages
Already done — `/about`, `/science/*`, `/labs`, `/divisions/*`, `/founder`, `/africa`, `/future`,
`/culture`, `/contact`, `/updates` all exist. Homepage should reference, not duplicate them.

## Decision required before Phase 2 — font family

The brief specifies **Source Serif 4 + Source Sans 3**. The site currently uses **Cormorant Garamond
+ Montserrat**, a pairing chosen deliberately and documented in `docs/DESIGN.md`. Switching is a
material identity change (affects every page and the display scale calibration). This needs an
explicit decision — options: (a) keep Cormorant/Montserrat, (b) switch to Source Serif 4/Source Sans
3 as specified, (c) switch only the sans. Recorded here rather than actioned, per "audit only".

## Content-integrity constraints (carried into every later phase)
No invented statistics, claims, testimonials, partners, or research. Founder photography is of one
individual — "leadership grid", "programmes", "impact stats", and "news/events" sections the brief
imagines cannot be fabricated; they'd need real source content first.

## What was NOT changed
This is Phase 1. No components, styles, tokens, routes, or content were modified.
