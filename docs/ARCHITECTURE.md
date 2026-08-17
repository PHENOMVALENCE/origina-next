# Architecture

## Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript (strict, via `next build`)
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.js`)
- **Fonts**: `next/font/google` — Cormorant Garamond (serif, editorial) + Montserrat (sans, UI)
- **Backend** (not yet built): managed Postgres (Vercel Postgres or Neon) + Prisma or Drizzle
- **Hosting target**: Vercel

## Why this stack

This replaces a PHP 8.2 + SQLite site (`origina`, sibling repo) whose SQLite-on-disk persistence
doesn't work on serverless hosting. Decisions made before migration started:

- Postgres over hosted SQLite (Turso) — more standard Next.js pairing, better tooling.
- Public site rebuilt first; admin CMS (auth, publications, enquiries, users, analytics, audit
  log) is a later phase once the public site + contact form are live.
- Rebuilt with Tailwind + design tokens rather than a literal 1:1 port of the old markup/CSS —
  same brand, cleaner component code.

## Design tokens

Ported from the PHP site's `css/origina.css` and `css/institutional.css` into
`src/app/globals.css`'s `@theme` block:

| Token | Value | Use |
|---|---|---|
| `--color-noir` | `#161210` | Primary dark (text on light, backgrounds on dark sections) |
| `--color-ivory` | `#f8f4ec` | Primary light background |
| `--color-gold` | `#b5924a` | Primary accent (CTAs, eyebrows, active states) |
| `--color-gold-light` | `#d6bd83` | Accent hover state |
| `--color-graphite` | `#3a332c` | Secondary dark / body text on light |
| `--color-stone` | `#9a8e80` | Muted text |
| `--color-oxblood` | `#7a171b` | Secondary accent (B-Melanox / pigmentation contexts) |
| `--color-cream` | `#eee6d8` | Secondary light surface |
| `--color-sage` | `#566b46` | Tertiary accent (NOVIA contexts) |
| `--font-serif` | Cormorant Garamond | Headings, editorial statements, pull quotes |
| `--font-sans` | Montserrat | Body copy, UI, nav |

Any new color/spacing/typography need should extend this `@theme` block rather than using
one-off arbitrary Tailwind values, so the palette stays centralized and auditable.

## Component structure

- `src/app/` — App Router routes. One `page.tsx` per route; shared chrome lives in `layout.tsx`.
- `src/components/` — shared UI (`SiteHeader`, `SiteFooter`, and page-building blocks as they're
  extracted — e.g. the homepage's local `Section`/`Fact`/`Quote` helpers should move here once a
  second page needs them, rather than being duplicated).
- `src/lib/` — non-UI logic and data (`navigation.ts` today; will grow to include content modules
  and, later, the Postgres client/query layer).

## Content modeling

Not yet formalized beyond `navigation.ts`. As pages are ported, prefer typed data modules in
`src/lib/content/` (mirroring the PHP site's `content/*.php` shape: e.g. an evidence-levels array,
a divisions index, a development-pathway array) over hardcoding arrays inline in each page
component, once more than one page needs the same shape. The homepage currently hardcodes its
data inline as a starting point — revisit this once 2-3 more pages reveal the real shared shapes.

## Routing plan

Nested under logical sections rather than the PHP site's flat structure, since this is a fresh
build:

```text
/                              Homepage
/about, /founder, /africa, /biology-first     Institution
/science, /labs, /intellectual-property       Science
/science/evidence, /science/regulatory,
/science/quality, /science/responsible-science
/divisions                    Division index
/divisions/b-melanox, /divisions/bettyworld,
/divisions/bvalence, /divisions/divine,
/divisions/novia, /divisions/skin-safari
/future                       Future divisions (Academy/Ventures/Research Institute/
                               Foundation/∞ as sections, not separate routes, for now)
/contact
/privacy, /terms
```

`src/lib/navigation.ts` is the source of truth for these paths — update it and the corresponding
route together.

## Accessibility

`SiteHeader`'s mega-menu and mobile nav intentionally mirror the pattern already validated on the
PHP site: `aria-expanded`/`aria-haspopup`/`role="menu"`/`role="menuitem"`, Escape-to-close,
click-outside-to-close, a skip link, and `body` scroll lock while the mobile menu is open. Keep
new interactive components to this bar.

## What's deliberately deferred

- Postgres schema / Prisma or Drizzle setup — wait until the contact form needs real persistence.
- Admin CMS — entire later phase.
- MDX or a headless CMS for content — not needed yet; typed data modules are sufficient for the
  current page count and the content doesn't change often enough to justify a CMS this early.
