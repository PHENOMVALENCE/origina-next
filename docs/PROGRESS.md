# Progress log

Living record of what's been done, session by session. Update this in the same commit (or an
immediately following `docs:` commit) whenever meaningful progress lands. Newest entries at top.
See `docs/ROADMAP.md` for the phased plan this is tracked against.

## Current status (2026-08-17)

**Phase 1 (Foundation): complete.** **Phase 2 (Public pages): complete — 26 routes.**

| Area | Status |
|---|---|
| Scaffold, tooling, CI-equivalent (lint/build) | ✅ Done |
| Design tokens / brand system | ✅ Done |
| Shared layout (header, mega-menu, mobile nav, footer) | ✅ Done |
| Shared page components (`Section`, `Quote`, `PageHero`, etc.) | ✅ Done |
| Homepage | ✅ Done |
| Institution pages — about, founder, africa, biology-first | ✅ Done |
| Science pages (7 routes) | ✅ Done |
| Division pages (index + 6 divisions) | ✅ Done |
| Future, privacy, terms | ✅ Done |
| Contact page (UI only, no submission yet) | ✅ Done |
| Backend / Postgres / contact form submission | ⬜ Not started (Phase 3) |
| Admin CMS | ⬜ Not started (Phase 4) |

Repo: https://github.com/PHENOMVALENCE/origina-next · working branch `codex/master-changes` ·
production branch `main`.

## 2026-08-17 — Phase 2 public pages complete

- Added `src/lib/content/future.ts` and `/future` — institutional horizon roadmap (Academy,
  Ventures, Research Institute, Foundation, unnamed division), expansion test, and closing CTA.
- Ported `/privacy` and `/terms` from `privacy.php` and `terms.php`.
- Added `src/lib/content/contact.ts`, client `EnquiryForm` component, and `/contact` — directory
  grid, enquiry form UI (submission deferred to Phase 3), direct email block, message guide, and
  closing band. Form pre-selects enquiry category from `?subject=` query param.
- Made `PageHero.kicker` optional for legal pages without a kicker in the PHP source.
- `npm run lint` and `npm run build` clean — 26 routes total (`/contact` is dynamic for
  searchParams).

## 2026-08-17 — Divisions section complete

- Copied B-Melanox product photography from the PHP repo into `public/img/products/`.
- Added `InstitutionMap` and `ProductGallery` components for division index and B-Melanox dossier.
- Extended `src/lib/content/divisions.ts` with division-specific page content (B-Melanox focus
  areas, BValence domains, NOVIA pillars, Skin Safari areas, etc.).
- Ported all seven Division routes from PHP sources:
  - `/divisions` — institution map + division index
  - `/divisions/b-melanox` — platform, focus wheel, product grid, dossier gallery
  - `/divisions/bettyworld`, `/divisions/bvalence`, `/divisions/divine`
  - `/divisions/novia`, `/divisions/skin-safari`
- `npm run lint` and `npm run build` clean — 22 static routes total.

## 2026-08-17 — Science section complete

- Extracted reusable science-section components into `src/components/`:
  `ProcessPathway`, `EvidenceLadder`, `DetailList`, `PageCta`, `StatusBadge`, and client-side
  `ResearchLibrary` (ported from the PHP Labs research filter grid).
- Extended `src/lib/content/science.ts` and `src/lib/content/evidence.ts` with Labs page data,
  regulatory categories, IP types, responsible-science rejections, and evidence research notes.
- Ported all seven Science routes from their PHP sources (`science.php`, `labs.php`,
  `evidence.php`, `regulatory.php`, `quality.php`, `responsible-science.php`,
  `intellectual-property.php`):
  - `/science` — scientific position, development pathway, systems thinking
  - `/labs` — capabilities, continuum, future fields, research library
  - `/science/evidence` — nine-level evidence ladder
  - `/science/regulatory` — regulatory categories and clinical-research pathway
  - `/science/quality` — quality framework and technical-file architecture
  - `/science/responsible-science` — institutional doctrine and rejection list
  - `/intellectual-property` — IP types and platform cards (BMX-24™, BRP-1™)
- Made `PageHero.intro` optional (Responsible Science has no hero intro in the source).
- Made `Section` accept an optional `id` for in-page anchors (`/science#framework`).
- `npm run lint` and `npm run build` clean — 15 static routes total.

## 2026-08-17 — Institution section complete

- Extracted `Section`, `Quote`, and `PageHero` into `src/components/` (previously duplicated
  inline in the homepage) — every inner page now builds on the same primitives.
- Ported all four Institution pages from their PHP sources, verified against the running dev
  server (each returns 200 and renders its real content, not a stub):
  - `/founder` — from `founder.php`
  - `/about` — from `about.php`
  - `/africa` — from `africa.php`
  - `/biology-first` — from `biology-first.php`, reusing the `biologyFirst`/`evidencePrinciples`
    content modules added alongside the homepage refactor
- `npm run lint` and `npm run build` clean after each page.

## 2026-08-17 — Repo setup, GitHub workflow, documentation

- Connected the local project to `https://github.com/PHENOMVALENCE/origina-next.git`.
- Established the two-branch workflow: `main` (production) and `codex/master-changes` (agent
  working branch, PRs into `main`), matching the sibling `origina` repo's existing convention.
- Added `AGENTS.md` (workflow rules), `docs/ARCHITECTURE.md` (technical decisions),
  `docs/ROADMAP.md` (phased plan), this progress log.
- Carried over from the prior session (before the GitHub repo existed): project scaffold, design
  tokens, `SiteHeader`/`SiteFooter`, `navigation.ts`, and a fully content-ported homepage. See the
  `main` branch's initial commit history for that work.

## Earlier (local-only, before this repo existed)

- Audited the PHP source site (`origina` repo) for unused assets/pages; removed ~17MB of dead
  template scaffolding there (separate repo, see its own `docs/`).
- Scaffolded this Next.js project as a sibling directory, ported the ORIGINA brand system into
  Tailwind design tokens, built the shared header/footer, and ported the homepage's full content
  (hero through the closing contact CTA) as the pattern the rest of the site will follow.
