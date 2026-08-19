# Progress log

Living record of what's been done, session by session. Update this in the same commit (or an
immediately following `docs:` commit) whenever meaningful progress lands. Newest entries at top.
See `docs/ROADMAP.md` for the phased plan this is tracked against.

## Current status (2026-08-19)

**Phases 1–4: complete (except optional homepage CMS editing). Phase 5: ready for cutover prep.**

| Area | Status |
|---|---|
| Scaffold, tooling, CI (lint/build) | ✅ Done |
| Institutional design system + UI primitives | ✅ Done ([PR #5](https://github.com/PHENOMVALENCE/origina-next/pull/5)) |
| Editorial photography + image layout | ✅ Done — [PR #6](https://github.com/PHENOMVALENCE/origina-next/pull/6) open |
| Shared layout (header, mega-menu, mobile nav, footer) | ✅ Done |
| Shared page components | ✅ Done |
| All public pages (25 `(site)` routes + SEO infra) | ✅ Done |
| SEO (sitemap, robots, OG, JSON-LD, branded 404) | ✅ Done |
| Postgres schema + enquiry Server Action | ✅ Done |
| Production Postgres provisioning + migration | ⬜ Human step |
| Admin auth (setup, login, session, 2FA optional) | ✅ Done |
| Admin enquiries inbox + workflow | ✅ Done |
| Admin publications CRUD + `/updates` | ✅ Done |
| Analytics beacon + admin dashboard | ✅ Done |
| Users/roles, audit log, password reset | ✅ Done |
| Site content / homepage CMS editing | ⬜ Optional — not started |
| DNS cutover to Next.js deployment | ⬜ Human step |

**Repo:** https://github.com/PHENOMVALENCE/origina-next · **Production branch:** `main` ·
**Active feature branch:** `codex/editorial-imagery` ([PR #6](https://github.com/PHENOMVALENCE/origina-next/pull/6))

**Build:** `npm run lint` and `npm run build` pass — 35 App Router routes (25 static public,
1 dynamic public `/updates`, 9+ admin/API routes).

### Merged pull requests (production)

| PR | Title | Merged |
|---|---|---|
| [#1](https://github.com/PHENOMVALENCE/origina-next/pull/1) | Institution and science sections | 2026-08-17 |
| [#2](https://github.com/PHENOMVALENCE/origina-next/pull/2) | Divisions section | 2026-08-17 |
| [#3](https://github.com/PHENOMVALENCE/origina-next/pull/3) | Public site, contact backend, admin enquiries | 2026-08-17 |
| [#4](https://github.com/PHENOMVALENCE/origina-next/pull/4) | Production readiness (SEO, publications, analytics, admin team) | 2026-08-19 |
| [#5](https://github.com/PHENOMVALENCE/origina-next/pull/5) | Institutional UI revision for all public pages | 2026-08-19 |

### Open pull requests

| PR | Branch | Title |
|---|---|---|
| [#6](https://github.com/PHENOMVALENCE/origina-next/pull/6) | `codex/editorial-imagery` | Editorial photography and professional image layout |

### Human steps before production cutover

1. Provision production Postgres (Neon or Vercel Postgres).
2. Run all migrations `drizzle/0000` through `drizzle/0004` against production.
3. Set Vercel env vars: `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`; optionally
   `ORIGINA_NOTIFY_EMAIL`, `RESEND_API_KEY`, `ORIGINA_REQUIRE_2FA=1`.
4. Visit `/admin/setup` on the deployed site to create the owner account.
5. Side-by-side content parity check against the live PHP site.
6. Point DNS at the Vercel deployment; archive PHP deployments.

See `docs/SETUP.md` for full deployment instructions.

---

## 2026-08-19 — Editorial photography & image layout

- Added `src/lib/content/images.ts` — central registry for founder and product photography (src,
  alt, caption).
- Extended `SplitSection.tsx` with `EditorialImage`, `ImageBreak`, `PhotoMosaic`, and upgraded
  `MediaFigure` / `PhotoGrid`.
- Added `DivisionCard` — division tiles with photo headers and status badges.
- Extended `PageHero` with optional portrait image on large screens.
- Integrated photography across homepage and key inner pages (About, Science, Labs, Africa,
  Contact, Founder, Culture, Future, Divisions, Responsible Science).
- Homepage: mobile-visible hero, cinematic breaks, product shot on BMX section, photo division grid.
- PR [#6](https://github.com/PHENOMVALENCE/origina-next/pull/6) opened from `codex/editorial-imagery`.

## 2026-08-19 — Institutional UI revision (design system)

- Built institutional design system in `src/app/globals.css` — tokens, typography utilities
  (`.body-copy`, `.lead-serif`, `.display-title`), buttons, cards, quote bands, legal prose,
  publication layout.
- Added UI primitives: `Button`, `Eyebrow`, `TextLink`, `LeadCopy` under `src/components/ui/`.
- Added layout helpers: `SplitSection`, `TagList`, `DisclaimerBand`.
- Upgraded shared components: `SiteHeader`, `SiteFooter`, `Section`, `PageHero`, `PageCta`,
  `Quote`, `DetailList`, `EvidenceLadder`, `InstitutionMap`, `ProcessPathway`, `StatusBadge`,
  `EnquiryForm`.
- Revised all 25 public `(site)` pages for consistent hierarchy: gradient heroes, section intros,
  standardized CTAs, `LeadCopy` / `body-copy` typography.
- Branded `not-found.tsx` aligned to design system.
- Merged via PR [#5](https://github.com/PHENOMVALENCE/origina-next/pull/5) (`codex/ui-revision`).

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
- Production config: security headers, legacy URL redirects in `next.config.ts`, GitHub Actions CI
  (`.github/workflows/ci.yml`).
- Refactored layout into `(site)` route group — public pages statically generated; admin routes
  remain dynamic.
- Updated footer navigation with Culture & Updates links matching the PHP site.
- Merged via PR [#4](https://github.com/PHENOMVALENCE/origina-next/pull/4) (`codex/master-changes`).

## 2026-08-17 — Phase 4 admin started (auth + enquiries inbox)

- Added `users` and `audit_log` tables (`drizzle/0001_users.sql`) with Drizzle schema updates.
- Implemented iron-session admin auth: `/admin/setup`, `/admin/login`, sign-out, bcrypt passwords,
  login audit events.
- Added admin shell UI (ported from PHP admin CSS) with overview dashboard and enquiries inbox at
  `/admin/enquiries` plus detail/workflow page at `/admin/enquiries/[id]`.

## 2026-08-17 — Phase 3 backend (contact form persistence)

- Added Drizzle ORM + Postgres client (`src/db/`), `enquiries` schema mirroring the PHP site, and
  checked-in migration SQL (`drizzle/0000_enquiries.sql`).
- Implemented enquiry Server Action (`src/app/(site)/contact/actions.ts`) with PHP-parity validation,
  honeypot, IP hash rate limiting (3 per 10 minutes), and `ORI-YYYYMMDD-XXXX` reference generation.
- Wired `EnquiryForm` to the Server Action via `useActionState`; success state via `?sent=` query
  param matches the PHP redirect flow.
- Optional Resend notification when `ORIGINA_NOTIFY_EMAIL` and `RESEND_API_KEY` are set.
- Added `docs/SETUP.md` and `.env.example` documenting environment variable names.

## 2026-08-17 — Phase 2 public pages complete

- Added `src/lib/content/future.ts` and `/future` — institutional horizon roadmap.
- Ported `/privacy` and `/terms` from `privacy.php` and `terms.php`.
- Added `src/lib/content/contact.ts`, client `EnquiryForm` component, and `/contact` — directory
  grid, enquiry form, direct email block, message guide, and closing band.
- `npm run lint` and `npm run build` clean.

## 2026-08-17 — Divisions section complete

- Copied B-Melanox product photography into `public/img/products/`.
- Added `InstitutionMap` and `ProductGallery` components.
- Ported all seven division routes from PHP sources.

## 2026-08-17 — Science section complete

- Extracted science-section components: `ProcessPathway`, `EvidenceLadder`, `DetailList`, `PageCta`,
  `StatusBadge`, `ResearchLibrary`.
- Ported all seven science routes from PHP sources.

## 2026-08-17 — Institution section complete

- Extracted `Section`, `Quote`, and `PageHero` into shared components.
- Ported `/founder`, `/about`, `/africa`, `/biology-first` from PHP sources.

## 2026-08-17 — Repo setup, GitHub workflow, documentation

- Connected to `https://github.com/PHENOMVALENCE/origina-next.git`.
- Established branch workflow: `main` (production), feature branches via PR.
- Added `AGENTS.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, this progress log.

## Earlier (local-only, before this repo existed)

- Audited the PHP source site; scaffolded Next.js project; ported brand system and homepage.
