# Roadmap

Phased plan for the migration off the PHP site. Check `docs/PROGRESS.md` for current status —
this file describes the plan, not day-to-day state.

## Phase 1 — Foundation ✅ complete

- Scaffold (Next.js 16, TypeScript, Tailwind v4, ESLint)
- Design tokens ported from the PHP site's brand CSS
- Shared layout: `SiteHeader` (mega-menu + mobile nav), `SiteFooter`, `navigation.ts`
- Homepage — full content port, establishing the page-building pattern

## Phase 2 — Public pages ✅ complete

All public routes ported from the corresponding PHP files in the `origina` repo.

**Institution** — ✅
- `/about`, `/founder`, `/africa`, `/biology-first`

**Science** — ✅
- `/science`, `/labs`, `/science/evidence`, `/science/regulatory`, `/science/quality`,
  `/science/responsible-science`, `/intellectual-property`

**Divisions** — ✅
- `/divisions`, `/divisions/b-melanox`, `/divisions/bettyworld`, `/divisions/bvalence`,
  `/divisions/divine`, `/divisions/novia`, `/divisions/skin-safari`

**Culture, updates, future & legal** — ✅
- `/culture`, `/updates`, `/future`, `/privacy`, `/terms`

**Contact** — ✅
- `/contact` — directory grid, enquiry form with Postgres persistence

Shared UI extracted into `src/components/` as patterns repeated across pages.

## Phase 2b — Design system & UI polish ✅ complete

Institutional presentation layer applied site-wide (PR [#5](https://github.com/PHENOMVALENCE/origina-next/pull/5)):

- [x] Design system tokens and component classes in `globals.css`
- [x] UI primitives (`Button`, `Eyebrow`, `TextLink`, `LeadCopy`)
- [x] Consistent `PageHero`, `Section`, `PageCta`, `QuoteBand` patterns on all public pages
- [x] Branded 404 page

**Editorial photography** (PR [#6](https://github.com/PHENOMVALENCE/origina-next/pull/6)) — ✅ done, pending merge:

- [x] Central image registry (`src/lib/content/images.ts`)
- [x] `EditorialImage`, `ImageBreak`, `DivisionCard` components
- [x] Hero portraits on inner pages; cinematic breaks; photo division grid on homepage

Admin UI styling remains functional but not restyled — lower priority.

## Phase 3 — Backend (contact form + persistence) ✅ complete (deploy pending)

- [x] Drizzle schema for `enquiries` (mirrors PHP SQLite schema)
- [x] Contact form Server Action — validation, honeypot, IP rate limiting, reference generation
- [x] Optional Resend email notification via `ORIGINA_NOTIFY_EMAIL` + `RESEND_API_KEY`
- [ ] Provision production Postgres (Neon or Vercel Postgres) — **human step**
- [ ] Run migrations against production database before cutover — **human step**

## Phase 4 — Admin CMS ✅ mostly complete

Recreates the PHP site's `admin/` feature set against Postgres:

- [x] Auth — iron-session cookies, owner setup, login/logout, bcrypt passwords, audit events
- [x] Enquiries inbox — list/filter/search, detail view, status/priority/assignment workflow
- [x] Publications CRUD (`/updates` archive equivalent)
- [x] Users/roles management
- [ ] Site content / homepage editorial — **optional, not started**
- [x] Analytics (page views, load/LCP timing — lightweight, no third-party tracker)
- [x] Audit log viewer
- [x] Password reset + optional email 2FA (`ORIGINA_REQUIRE_2FA=1`)

## Phase 5 — Cutover ⬜ in progress

- [x] CI workflow (lint + build on push/PR)
- [x] Production security headers and legacy URL redirects
- [x] SEO infrastructure (sitemap, robots, OG, JSON-LD)
- [ ] Full Lighthouse/accessibility pass across all routes
- [ ] Side-by-side content parity check against the live PHP site
- [ ] Point production hosting/DNS at the Next.js deployment — **human step**
- [ ] Archive the PHP repo (stop deploying it) rather than deleting it

## Explicitly out of scope for now

- MDX/headless CMS for content (typed data modules are enough at this page count)
- i18n/localization
- Admin UI visual redesign (functional parity achieved)
- Any new functionality beyond what the PHP site already has — this is a migration, not a
  scope expansion
