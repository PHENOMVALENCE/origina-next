# ORIGINA — Next.js rebuild

Next.js (App Router) + TypeScript + Tailwind CSS v4 rebuild of the ORIGINA institutional site,
replacing the PHP + SQLite implementation at `c:\xampp\htdocs\origina`. See that repo's
`docs/origina-institutional-architecture.md` for the brand/content architecture this is porting.

## Status

This is an early, in-progress migration. Built so far:

- Project scaffold (Next.js 16, React 19, Tailwind v4, ESLint)
- Design tokens (`src/app/globals.css`) ported from the PHP site's `css/origina.css` and
  `css/institutional.css` — brand colors, `Cormorant Garamond`/`Montserrat` type via `next/font`
- Shared navigation data (`src/lib/navigation.ts`), ported from the PHP site's
  `content/navigation.php`
- `SiteHeader` (mega-menu + mobile nav) and `SiteFooter` components (`src/components/`)
- Homepage (`src/app/page.tsx`) — full content port of the PHP site's `index.php`, as the
  template pattern for the remaining pages

Not started yet: the other ~25 public pages, the contact form + Postgres backend, and the admin
CMS (auth, publications, enquiries, users, analytics, audit log) — the admin migration is a later
phase per the agreed sequencing (public site first).

## Decisions carried over from planning

- **Backend**: managed Postgres (Vercel Postgres/Neon) + Prisma or Drizzle, once the contact form
  needs real persistence — not yet wired up.
- **Design**: rebuilt with Tailwind + design tokens rather than a literal 1:1 port of the old
  markup/CSS, matching the same brand (colors, type, motion feel) with cleaner component code.
- **Hosting**: intended for Vercel. The PHP site keeps serving production until this is ready to
  cut over.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint
