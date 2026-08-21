# ORIGINA — Next.js rebuild

Next.js (App Router) + TypeScript + Tailwind CSS v4 rebuild of the ORIGINA institutional site,
replacing the PHP + SQLite implementation at `c:\xampp\htdocs\origina`. See that repo's
`docs/origina-institutional-architecture.md` for the brand/content architecture this is porting.

**Repository:** https://github.com/PHENOMVALENCE/origina-next

## Status (2026-08-19)

**Production-ready pending database provisioning and DNS cutover.**

| Area | Status |
|---|---|
| Public site (25 routes) | ✅ Complete |
| Institutional design system + UI | ✅ Merged ([PR #5](https://github.com/PHENOMVALENCE/origina-next/pull/5)) |
| Editorial photography layout | ✅ [PR #6](https://github.com/PHENOMVALENCE/origina-next/pull/6) open |
| Contact form + Postgres | ✅ Built — needs production DB |
| Admin CMS | ✅ Auth, enquiries, publications, users, analytics, audit |
| SEO + security headers | ✅ Done |
| CI (lint + build) | ✅ GitHub Actions |

**Human steps before cutover:**

1. Provision production Postgres (Neon or Vercel Postgres)
2. Run migrations `0000` through `0004` against production
3. Set Vercel env vars: `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`
4. Create owner account at `/admin/setup`
5. Side-by-side parity check against live PHP site
6. Point DNS at Vercel deployment

See [`docs/SETUP.md`](docs/SETUP.md) for details · [`docs/PROGRESS.md`](docs/PROGRESS.md) for full history.

## Local development

```bash
npm install
cp .env.example .env.local
# Fill DATABASE_URL and SESSION_SECRET in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build + TypeScript check |
| `npm run lint` | ESLint |
| `npm run db:push` | Push Drizzle schema to Postgres |

## Documentation

| Doc | Contents |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Branching, commits, content rules, validation |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Stack, routes, design system, components, database |
| [`docs/DESIGN.md`](docs/DESIGN.md) | Design standard: brand layers, type scale, components, rationale |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | Phased plan and remaining work |
| [`docs/PROGRESS.md`](docs/PROGRESS.md) | Session-by-session log and PR history |
| [`docs/SETUP.md`](docs/SETUP.md) | Env vars, migrations, admin, deployment |

## Workflow

- **`main`** — production branch; merges deploy to Vercel.
- **`codex/*`** — feature branches; open PRs into `main`.
- Never push directly to `main` or merge your own PRs.

## Asset inventory

- **Founder photography:** `public/img/founder/founder-01.jpeg` … `founder-09.jpeg`
- **Product photography:** `public/img/products/bmelanox-*.jpeg`
- **Brand marks:** `public/img/brand/origina-logo.png`, `origina-mark.png`
- **Image registry:** `src/lib/content/images.ts` (alt text, captions, division mapping)

## Database migrations

Apply in order against Postgres before enabling contact form and admin:

```bash
psql "$DATABASE_URL" -f drizzle/0000_enquiries.sql
psql "$DATABASE_URL" -f drizzle/0001_users.sql
psql "$DATABASE_URL" -f drizzle/0002_publications.sql
psql "$DATABASE_URL" -f drizzle/0003_site_metrics.sql
psql "$DATABASE_URL" -f drizzle/0004_auth_tokens.sql
```

Or: `npm run db:push` with `DATABASE_URL` set.
