# Progress log

Living record of what's been done, session by session. Update this in the same commit (or an
immediately following `docs:` commit) whenever meaningful progress lands. Newest entries at top.
See `docs/ROADMAP.md` for the phased plan this is tracked against.

## Current status (2026-08-17)

**Phase 1 (Foundation): complete.** **Phase 2 (Public pages): in progress — 5 of ~20 routes.**

| Area | Status |
|---|---|
| Scaffold, tooling, CI-equivalent (lint/build) | ✅ Done |
| Design tokens / brand system | ✅ Done |
| Shared layout (header, mega-menu, mobile nav, footer) | ✅ Done |
| Shared page components (`Section`, `Quote`, `PageHero`) | ✅ Done |
| Homepage | ✅ Done |
| Institution pages — about, founder, africa, biology-first | ✅ Done |
| Science pages (science, labs, evidence, regulatory, quality, responsible-science, IP) | ⬜ Not started |
| Division pages (index + 6 divisions) | ⬜ Not started |
| Future, privacy, terms | ⬜ Not started |
| Contact page (UI only, no submission yet) | ⬜ Not started |
| Backend / Postgres / contact form submission | ⬜ Not started (Phase 3) |
| Admin CMS | ⬜ Not started (Phase 4) |

Repo: https://github.com/PHENOMVALENCE/origina-next · working branch `codex/master-changes` ·
production branch `main`.

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
