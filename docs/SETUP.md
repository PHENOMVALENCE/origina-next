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
| `DATABASE_URL` | Yes (for contact form) | Postgres connection string (`postgresql://…`) |
| `ORIGINA_NOTIFY_EMAIL` | No | Inbox address for new enquiry notifications |
| `RESEND_API_KEY` | No | Resend API key; required with `ORIGINA_NOTIFY_EMAIL` to send email |

If `DATABASE_URL` is unset, the contact form renders but returns a friendly error on submit. If
notification variables are unset, enquiries are still stored; email is skipped (matching the PHP
site's behaviour when `ORIGINA_NOTIFY_EMAIL` is empty).

## Database

Apply the initial schema:

```bash
# Option A — run the checked-in SQL against your database
psql "$DATABASE_URL" -f drizzle/0000_enquiries.sql

# Option B — push from Drizzle schema (requires DATABASE_URL)
npm run db:push
```

The `enquiries` table mirrors the PHP site's SQLite schema (reference, contact fields, subject,
message, status, priority, admin fields, ip hash, user agent, timestamps).

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
2. Set `DATABASE_URL`, and optionally `ORIGINA_NOTIFY_EMAIL` + `RESEND_API_KEY`, in the Vercel
   project environment settings.
3. Run the migration SQL against the production database before enabling the contact form.
4. Deploy from `main` after PR review.
