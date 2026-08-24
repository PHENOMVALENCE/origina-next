# ORIGINA — Browser QA Report

_Real-browser QA pass, 2026-08-24. Rendered with headless Chromium (Playwright) against
`npm run dev`, captured at multiple viewports and inspected as images — not inferred from source._

## Method

Headless Chromium screenshots of the running app at:

- **Homepage** — 320, 375, 768, 1440, 1920 (viewport) + full-page at 375 and 1440.
- **/about** — full-page 1440.
- **/contact** — 375.

## Headline finding

The site renders as a **polished, production-ready institutional website**. The prior phases hold up
under real rendering. **No P0 or P1 issues were found**, so — per this pass being a conservative
refinement, not a redesign — **no code was changed**. The most important thing this pass resolved was
the standing open question from every previous phase: whether the Source Serif 4 display scale looks
oversized. Rendered, it does **not** — the hero and section headings are substantial but controlled.

## Findings table

| Viewport | Observation | Severity | Component | Verdict |
|---|---|---|---|---|
| 320 | No horizontal overflow; CTA fits; headline legible | — | Hero | Pass (hard requirement met) |
| 320 | Headline wraps to 4 short lines ("…Africa." / "…world.") | P3 | Hero | Accepted — reads as intentional two-sentence editorial wrapping; reducing the clamp further would make the hero timid |
| 375 | Eyebrow → headline → lede → primary CTA → text link → metadata → image, in order; calm and readable | — | Hero | Pass |
| 768 | Single-column (below `lg`); content then full-width 16/9 image | — | Hero | Pass — intelligent transition, not a squeezed desktop |
| 1440 | Editorial split; Source Serif 4 headline controlled; group photo framed with caption | — | Hero | Pass |
| 1920 | Composition contained by max-width; balanced ivory margins; no stretch | — | Layout | Pass |
| 1440 | "We begin with biology" — landscape image (`recognition`) crops correctly (the Phase 5 portrait→landscape fix is confirmed working) | — | Who we are | Pass |
| 1440/375 | Division cards distinct (B-Melanox product shot vs. BettyWorld/NOVIA); no founder-portrait repetition | — | Divisions | Pass — Phase 5 fix confirmed |
| 1440/375 | Founder portrait (`portraitClinical`) renders correctly in the 4/5 frame | — | Founder | Pass |
| all | Dark sections (Why, Africa, footer) read as deliberate punctuation, not filler | — | Sections | Pass |
| 1440 | /about split-headers, beliefs/founder/quote sections consistent and aligned | — | /about | Pass |
| 375 | /contact hero, breadcrumb, image, caption stack cleanly; no overflow | — | /contact | Pass |

## Accessibility (verified)

- One `<h1>` per page; heading hierarchy intact.
- Focus-visible ring (2px crimson) and skip link present.
- `prefers-reduced-motion` rule collapses the hero entrance and transitions.
- Alt text is accurate and non-speculative; decorative overlays are `aria-hidden`.

## Notes / carried forward

- `body { overflow-x: hidden }` is pre-existing. No masked horizontal overflow was observed in any
  render, so it is not hiding a bug here — but it should not be relied on as a substitute for fixing
  real overflow in future work.
- Division card imagery remains **placeholder** founder/product photography — see
  `docs/client-photography-requirements.md`. The cards look intentional, but real division/product
  imagery is still a genuine content gap.
- The shared muted-text utility classes (`.stat-label`, `.quote-attribution`, etc.) still hard-code
  `text-stone` on mixed grounds — a documented accessibility follow-up, not a homepage-visible defect.

## Validation

`npm run build` and `npm run lint` pass clean (unchanged this pass — no code modified).
