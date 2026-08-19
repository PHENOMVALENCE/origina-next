# Progress log

Living record of what's been done, session by session. Update this in the same commit (or an
immediately following `docs:` commit) whenever meaningful progress lands. Newest entries at top.
See `docs/ROADMAP.md` for the phased plan this is tracked against.

## Current status (2026-08-19)

**Phase 1–3: complete.** **Phase 4: mostly complete.** **Phase 5: ready for cutover prep.**

| Area | Status |
|---|---|
| Scaffold, tooling, CI (lint/build) | ✅ Done |
| Design tokens / brand system | ✅ Done |
| Shared layout (header, mega-menu, mobile nav, footer) | ✅ Done |
| Shared page components | ✅ Done |
| All public pages (28 routes) | ✅ Done |
| SEO (sitemap, robots, OG, JSON-LD) | ✅ Done |
| Postgres schema + enquiry Server Action | ✅ Done |
| Production Postgres provisioning + migration | ⬜ Human step |
| Admin auth (setup, login, session) | ✅ Done |
| Admin enquiries inbox + workflow | ✅ Done |
| Admin publications CRUD + `/updates` | ✅ Done |
| Analytics beacon + admin dashboard | ✅ Done |
| Users/roles, content editing, audit viewer | ✅ Users, audit, auth tokens done · ⬜ Content editing |

Repo: https://github.com/PHENOMVALENCE/origina-next · working branch `codex/master-changes` ·
production branch `main`.

## 2026-08-19 — Admin auth & team management

- Added `auth_tokens` table and migration (`drizzle/0004_auth_tokens.sql`) for password reset and
  optional two-factor sign-in.
- Implemented user management at `/admin/users` (list, create, edit, enable/disable toggle) for
  owners and admins.
- Added audit log viewer at `/admin/audit` (latest 200 security events).
- Added password reset flow at `/admin/forgot-password` and `/admin/reset-password` via Resend.
- Optional email 2FA when `ORIGINA_REQUIRE_2FA=1`, with verification at `/admin/verify`.

## 2026-08-19 — Production readiness pass

- Added missing public routes: `/culture` (ported from PHP), `/updates` (DB-driven publications).
- Implemented publications admin CRUD at `/admin/publications` with Drizzle migration
  (`drizzle/0002_publications.sql`).
- Added privacy-conscious analytics: `/api/metrics` beacon, `site_metrics` table
  (`drizzle/0003_site_metrics.sql`), admin dashboard at `/admin/analytics`.
- SEO infrastructure: `sitemap.ts`, `robots.ts`, Open Graph/Twitter metadata helpers, Organization
  JSON-LD, branded `not-found.tsx`.
- Production config: security headers, legacy URL redirects in `next.config.ts`, GitHub Actions CI.
- Refactored layout into `(site)` route group — public pages now statically generated; admin routes
  remain dynamic.
- Updated footer navigation with Culture & Updates links matching the PHP site.

## 2026-08-17 — Phase 4 admin started (auth + enquiries inbox)

- Added `users` and `audit_log` tables (`drizzle/0001_users.sql`) with Drizzle schema updates.
- Implemented iron-session admin auth: `/admin/setup`, `/admin/login`, sign-out, bcrypt passwords,
  login audit events.
- Added admin shell UI (ported from PHP admin CSS) with overview dashboard and enquiries inbox at
  `/admin/enquiries` plus detail/workflow page at `/admin/enquiries/[id]`.
- Middleware sets pathname header so admin routes render without public site header/footer.

## 2026-08-17 — Phase 3 backend started (contact form persistence)

- Added Drizzle ORM + Postgres client (`src/db/`), `enquiries` schema mirroring the PHP site, and
  checked-in migration SQL (`drizzle/0000_enquiries.sql`).
- Implemented enquiry Server Action (`src/app/contact/actions.ts`) with PHP-parity validation,
  honeypot, IP hash rate limiting (3 per 10 minutes), and `ORI-YYYYMMDD-XXXX` reference generation.
- Wired `EnquiryForm` to the Server Action via `useActionState`; success state via `?sent=` query
  param matches the PHP redirect flow.
- Optional Resend notification when `ORIGINA_NOTIFY_EMAIL` and `RESEND_API_KEY` are set.
- Added `docs/SETUP.md` and `.env.example` documenting environment variable names.

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
