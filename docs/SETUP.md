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

If `DATABASE_URL` is unset, the contact form renders but returns a friendly error on submit. The
`/updates` page shows an empty archive. If notification variables are unset, enquiries are still
stored; email is skipped (matching the PHP site's behaviour when `ORIGINA_NOTIFY_EMAIL` is empty).

## Database

Apply all migrations in order:

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

| Migration | Tables | Purpose |
|---|---|---|
| `0000_enquiries.sql` | `enquiries` | Contact form submissions |
| `0001_users.sql` | `users`, `audit_log` | Admin authentication |
| `0002_publications.sql` | `publications` | `/updates` archive + admin CRUD |
| `0003_site_metrics.sql` | `site_metrics` | Privacy-conscious analytics |
| `0004_auth_tokens.sql` | `auth_tokens` | Password reset + 2FA tokens |

## Admin

1. Apply all migration files (or `db:push`).
2. Set `SESSION_SECRET` (32+ random characters).
3. Visit `/admin/setup` to create the first owner account when no users exist.
4. Sign in at `/admin/login`.

### Admin routes

| Path | Purpose |
|---|---|
| `/admin` | Dashboard |
| `/admin/enquiries` | Enquiry inbox |
| `/admin/publications` | Publications CRUD |
| `/admin/users` | User management (owner/admin) |
| `/admin/analytics` | Page views + performance |
| `/admin/audit` | Security audit log |
| `/admin/forgot-password` | Request password reset |
| `/admin/reset-password` | Set new password (token link) |
| `/admin/verify` | 2FA code entry (when `ORIGINA_REQUIRE_2FA=1`) |

## Development

```bash
npm run dev
```

Open http://localhost:3000

Public pages under `src/app/(site)/` are statically generated. `/contact` and `/updates` are
dynamic (form state and DB publications respectively).

## Validation

```bash
npm run lint
npm run build
```

Both must pass before committing. Build generates 35 routes.

## Deployment (Vercel)

1. Connect the GitHub repository (`PHENOMVALENCE/origina-next`).
2. Set environment variables in Vercel project settings:
   - **Required:** `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`
   - **Optional:** `ORIGINA_NOTIFY_EMAIL`, `RESEND_API_KEY`, `ORIGINA_REQUIRE_2FA`
3. Run all five migration SQL files against the production database.
4. Deploy from `main` after PR review and merge.
5. Visit `/admin/setup` on the deployed site to create the owner account.
6. Verify contact form submission, enquiry inbox, and a test publication on `/updates`.
7. Run content parity check against live PHP site before DNS cutover.

## Production cutover checklist

- [ ] Postgres provisioned and migrations applied
- [ ] Vercel env vars set
- [ ] Owner account created at `/admin/setup`
- [ ] Contact form tested end-to-end (submission → admin inbox)
- [ ] Test publication visible on `/updates`
- [ ] Password reset email tested (if using Resend)
- [ ] Side-by-side content parity vs PHP site
- [ ] DNS pointed at Vercel
- [ ] PHP site archived (stop deploying)

See `docs/PROGRESS.md` for PR history and `docs/ARCHITECTURE.md` for route and component reference.
