# Roadmap

Phased plan for the migration off the PHP site. Check `docs/PROGRESS.md` for current status —
this file describes the plan, not day-to-day state.

## Phase 1 — Foundation ✅ complete

- Scaffold (Next.js 16, TypeScript, Tailwind v4, ESLint)
- Design tokens ported from the PHP site's brand CSS
- Shared layout: `SiteHeader` (mega-menu + mobile nav), `SiteFooter`, `navigation.ts`
- Homepage — full content port, establishing the page-building pattern

## Phase 2 — Public pages ✅ complete

Port each page's real content from the corresponding PHP file in the `origina` repo. One page is
one commit (or a small group of closely related pages, e.g. the three legal pages, may share a
commit if trivial). Order, roughly by information architecture:

**Institution** — ✅ complete
- [x] `/about` — from `about.php`
- [x] `/founder` — from `founder.php`
- [x] `/africa` — from `africa.php`
- [x] `/biology-first` — from `biology-first.php`

**Science** — ✅ complete
- [x] `/science` — from `science.php`
- [x] `/labs` — from `labs.php`
- [x] `/science/evidence` — from `evidence.php`
- [x] `/science/regulatory` — from `regulatory.php`
- [x] `/science/quality` — from `quality.php`
- [x] `/science/responsible-science` — from `responsible-science.php`
- [x] `/intellectual-property` — from `intellectual-property.php`

**Divisions** — ✅ complete
- [x] `/divisions` — from `divisions.php`
- [x] `/divisions/b-melanox` — from `bmelanox.php`
- [x] `/divisions/bettyworld` — from `bettyworld.php`
- [x] `/divisions/bvalence` — from `bvalence.php`
- [x] `/divisions/divine` — from `divine.php`
- [x] `/divisions/novia` — from `novia.php`
- [x] `/divisions/skin-safari` — from `skin-safari.php`

**Future & legal** — ✅ complete
- [x] `/future` — from `future.php` (Academy/Ventures/Research Institute/Foundation/∞ sections)
- [x] `/privacy` — from `privacy.php`
- [x] `/terms` — from `terms.php`

**Contact** — ✅ complete (UI only)
- [x] `/contact` — from `contact.php`. Static form UI ported; real submission handling waits for
      Phase 3 (needs Postgres).

Extract shared UI as patterns repeat (e.g. once 2-3 pages need the same evidence-ladder or
process-pathway visualization the homepage already sketches, pull it into `src/components/`).

## Phase 3 — Backend (contact form + persistence) (in progress)

- [x] Drizzle schema for `enquiries` (mirrors PHP SQLite schema)
- [x] Contact form Server Action — validation, honeypot, IP rate limiting, reference generation
- [x] Optional Resend email notification via `ORIGINA_NOTIFY_EMAIL` + `RESEND_API_KEY`
- [ ] Provision production Postgres (Neon or Vercel Postgres) — human account decision
- [ ] Run migration against production database before cutover

## Phase 4 — Admin CMS (in progress)

Recreates the PHP site's `admin/` feature set against the same Postgres database:

- [x] Auth — iron-session cookies, owner setup, login/logout, bcrypt passwords, audit events
- [x] Enquiries inbox — list/filter/search, detail view, status/priority/assignment workflow
- [x] Publications CRUD (the live news/research archive, `updates.php` equivalent)
- [x] Users/roles management
- [ ] Site content / homepage editorial
- [x] Analytics (page views, load/LCP timing — lightweight, no third-party tracker)
- [x] Audit log viewer
- [x] Password reset + optional email 2FA (`ORIGINA_REQUIRE_2FA=1`)

This phase starts only after Phase 2 + Phase 3 are live and verified, per the agreed
public-site-first sequencing.

## Phase 5 — Cutover

- Full Lighthouse/accessibility/SEO pass across all routes.
- Side-by-side content parity check against the live PHP site.
- Point production hosting/DNS at the Next.js deployment.
- Archive the PHP repo (stop deploying it) rather than deleting it.

## Explicitly out of scope for now

- MDX/headless CMS for content (typed data modules are enough at this page count)
- i18n/localization
- Any new functionality beyond what the PHP site already has — this is a migration, not a
  redesign of scope
