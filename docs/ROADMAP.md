# Roadmap

Phased plan for the migration off the PHP site. Check `docs/PROGRESS.md` for current status —
this file describes the plan, not day-to-day state.

## Phase 1 — Foundation ✅ complete

- Scaffold (Next.js 16, TypeScript, Tailwind v4, ESLint)
- Design tokens ported from the PHP site's brand CSS
- Shared layout: `SiteHeader` (mega-menu + mobile nav), `SiteFooter`, `navigation.ts`
- Homepage — full content port, establishing the page-building pattern

## Phase 2 — Public pages (in progress)

Port each page's real content from the corresponding PHP file in the `origina` repo. One page is
one commit (or a small group of closely related pages, e.g. the three legal pages, may share a
commit if trivial). Order, roughly by information architecture:

**Institution**
- [ ] `/about` — from `about.php`
- [ ] `/founder` — from `founder.php`
- [ ] `/africa` — from `africa.php`
- [ ] `/biology-first` — from `biology-first.php`

**Science**
- [ ] `/science` — from `science.php`
- [ ] `/labs` — from `labs.php`
- [ ] `/science/evidence` — from `evidence.php`
- [ ] `/science/regulatory` — from `regulatory.php`
- [ ] `/science/quality` — from `quality.php`
- [ ] `/science/responsible-science` — from `responsible-science.php`
- [ ] `/intellectual-property` — from `intellectual-property.php`

**Divisions**
- [ ] `/divisions` — from `divisions.php`
- [ ] `/divisions/b-melanox` — from `bmelanox.php` (highest content density — product gallery,
      research-area wheel, BMX-24 platform section)
- [ ] `/divisions/bettyworld` — from `bettyworld.php`
- [ ] `/divisions/bvalence` — from `bvalence.php`
- [ ] `/divisions/divine` — from `divine.php`
- [ ] `/divisions/novia` — from `novia.php`
- [ ] `/divisions/skin-safari` — from `skin-safari.php`

**Future & legal**
- [ ] `/future` — from `future.php` (Academy/Ventures/Research Institute/Foundation/∞ sections)
- [ ] `/privacy` — from `privacy.php`
- [ ] `/terms` — from `terms.php`

**Contact**
- [ ] `/contact` — from `contact.php`. Static form UI can be ported in this phase; real submission
      handling waits for Phase 3 (needs Postgres).

Extract shared UI as patterns repeat (e.g. once 2-3 pages need the same evidence-ladder or
process-pathway visualization the homepage already sketches, pull it into `src/components/`).

## Phase 3 — Backend (contact form + persistence)

- Provision Postgres (Vercel Postgres or Neon) — needs an account decision, not something an
  agent can provision unilaterally.
- Prisma or Drizzle schema for an `enquiries` table (mirroring the PHP site's `enquiries` schema:
  reference, name, email, phone, organization, subject/category, message, status, timestamps).
- Contact form as a Server Action or route handler: validation, honeypot/spam mitigation (mirror
  the PHP site's approach), rate limiting, and an email notification (e.g. Resend) — no secrets
  committed to the repo; use environment variables documented (names only) in `docs/SETUP.md`.

## Phase 4 — Admin CMS

Recreates the PHP site's `admin/` feature set against the same Postgres database:

- Auth (session or JWT-based; role model: owner/admin/editor, matching the PHP site)
- Publications CRUD (the live news/research archive, `updates.php` equivalent)
- Enquiries inbox (status workflow, assignment, notes)
- Users/roles management
- Analytics (page views, load/LCP timing — lightweight, no third-party tracker)
- Audit log

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
