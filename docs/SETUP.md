# Setup

Local development and deployment configuration for `origina-next`. Document environment variable
**names only** here — never commit values.

## Prerequisites

- Node.js 20+
- npm
- A Postgres database (local Docker, [Neon](https://neon.tech), or Vercel Postgres)

## Install

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` with your local or hosted Postgres connection string and optional notification
settings.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes (for contact form + admin) | Postgres connection string (`postgresql://…`) |
| `SESSION_SECRET` | Yes (for admin) | At least 32 characters; signs admin session cookies |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Canonical site URL for sitemap, OG tags, JSON-LD |
| `ORIGINA_SITE_URL` | No | Fallback canonical URL if `NEXT_PUBLIC_SITE_URL` unset |
| `ORIGINA_NOTIFY_EMAIL` | No | Inbox address for new enquiry notifications |
| `RESEND_API_KEY` | No | Resend API key; required with `ORIGINA_NOTIFY_EMAIL` to send email |
| `ORIGINA_REQUIRE_2FA` | No | Set to `1` to require email two-factor authentication on admin login |

If `DATABASE_URL` is unset, the contact form renders but returns a friendly error on submit. If
notification variables are unset, enquiries are still stored; email is skipped (matching the PHP
site's behaviour when `ORIGINA_NOTIFY_EMAIL` is empty).

## Database

Apply the initial schema:

```bash
# Option A — run the checked-in SQL against your database
psql "$DATABASE_URL" -f drizzle/0000_enquiries.sql
psql "$DATABASE_URL" -f drizzle/0001_users.sql
psql "$DATABASE_URL" -f drizzle/0002_publications.sql
psql "$DATABASE_URL" -f drizzle/0003_site_metrics.sql
psql "$DATABASE_URL" -f drizzle/0004_auth_tokens.sql

# Option B — push from Drizzle schema (requires DATABASE_URL)
npm run db:push
```

The `enquiries` table mirrors the PHP site's SQLite schema. The `users` and `audit_log` tables
support admin authentication. The `publications` table powers `/updates` and admin publications.
The `site_metrics` table stores privacy-conscious page-view and performance beacons.
The `auth_tokens` table stores password-reset and two-factor sign-in tokens.

## Admin

1. Apply both migration files (or `db:push`).
2. Set `SESSION_SECRET` (32+ random characters).
3. Visit `/admin/setup` to create the first owner account when no users exist.
4. Sign in at `/admin/login`.

## Development

```bash
npm run dev
```

Open http://localhost:3000

## Validation

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

1. Connect the GitHub repository.
2. Set `DATABASE_URL`, `SESSION_SECRET`, and `NEXT_PUBLIC_SITE_URL` in the Vercel project
   environment settings. Optionally set `ORIGINA_NOTIFY_EMAIL` + `RESEND_API_KEY`.
3. Run all migration SQL files against the production database before enabling the contact form.
4. Visit `/admin/setup` on the deployed site to create the owner account.
5. Deploy from `main` after PR review.
