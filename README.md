# ORIGINA — Next.js rebuild

Next.js (App Router) + TypeScript + Tailwind CSS v4 rebuild of the ORIGINA institutional site,
replacing the PHP + SQLite implementation at `c:\xampp\htdocs\origina`. See that repo's
`docs/origina-institutional-architecture.md` for the brand/content architecture this is porting.

## Status

**Production-ready pending database provisioning and DNS cutover.** Built so far:

- Full public site — 28 routes including `/culture`, `/updates`, all institution/science/division pages
- Contact form — Postgres persistence, honeypot, rate limiting, optional Resend notification
- Admin CMS — auth, enquiries inbox/workflow, publications CRUD, analytics dashboard
- SEO — sitemap, robots.txt, Open Graph/Twitter metadata, Organization JSON-LD
- Security — HTTP headers, legacy URL redirects, admin session cookies
- CI — GitHub Actions lint + build on push/PR

**Human steps before cutover:**

1. Provision production Postgres (Neon or Vercel Postgres)
2. Run all migrations (`0000` through `0003`) against production
3. Set env vars on Vercel: `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`
4. Create owner account at `/admin/setup`
5. Point DNS at the Vercel deployment

See `docs/SETUP.md` for details and `docs/ROADMAP.md` for remaining optional admin features.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run db:push` — push Drizzle schema to Postgres

## Workflow & documentation

- [`AGENTS.md`](AGENTS.md) — branching model, commit conventions, content rules, validation
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — stack, design tokens, component/content structure
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — phased plan (what's left)
- [`docs/PROGRESS.md`](docs/PROGRESS.md) — session-by-session status log
- [`docs/SETUP.md`](docs/SETUP.md) — env vars, database, admin, deployment

Repository: https://github.com/PHENOMVALENCE/origina-next — `main` is production, all
implementation work happens on `codex/master-changes` via pull request.
