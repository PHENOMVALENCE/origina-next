# Architecture

Technical reference for the ORIGINA Next.js rebuild. For session-by-session status see
`docs/PROGRESS.md`; for what's left see `docs/ROADMAP.md`.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript (strict via `next build`) |
| Styling | Tailwind CSS v4 — CSS-first `@theme` in `globals.css`, no `tailwind.config.js` |
| Fonts | `next/font/google` — Cormorant Garamond (serif) + Montserrat (sans) |
| Database | Postgres (Neon or Vercel Postgres) + Drizzle ORM |
| Auth | iron-session cookies, bcrypt passwords, optional email 2FA |
| Email | Resend (optional — enquiry notifications, password reset, 2FA codes) |
| Hosting | Vercel (target) |
| CI | GitHub Actions — lint + build on push/PR |

## Why this stack

Replaces PHP 8.2 + SQLite (`origina`, sibling repo). SQLite-on-disk doesn't work on serverless
hosting. Postgres is the standard Next.js pairing. Public site was rebuilt first; admin CMS
followed once contact persistence was in place.

## Repository layout

```text
origina-next/
├── drizzle/                 # Checked-in SQL migrations (0000–0004)
├── public/img/
│   ├── brand/               # Logo and mark PNGs
│   ├── founder/             # founder-01 … founder-09 (institutional photography)
│   └── products/            # B-Melanox product photography
├── src/
│   ├── app/
│   │   ├── (site)/          # Public routes — statically generated
│   │   ├── admin/           # Admin CMS — dynamic, separate layout/CSS
│   │   ├── api/metrics/     # Privacy-conscious analytics beacon
│   │   ├── layout.tsx       # Root layout (fonts, metadata, analytics)
│   │   ├── not-found.tsx    # Branded 404
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/          # Shared UI (see Component inventory)
│   ├── db/                  # Drizzle schema + Postgres client
│   └── lib/                 # Content modules, auth, enquiries, metadata, metrics
├── docs/                    # PROGRESS, ROADMAP, SETUP, ARCHITECTURE
└── .github/workflows/ci.yml
```

## Route groups

### Public — `src/app/(site)/`

Shared `(site)/layout.tsx` wraps pages with `SiteHeader`, `SiteFooter`, and `SiteAnalytics`.
All routes below are statically generated except `/updates` (dynamic — reads publications from DB).

| Route | Source PHP | Notes |
|---|---|---|
| `/` | `index.php` | Homepage |
| `/about` | `about.php` | |
| `/founder` | `founder.php` | |
| `/africa` | `africa.php` | |
| `/biology-first` | `biology-first.php` | |
| `/culture` | `culture.php` | |
| `/science` | `science.php` | Anchor `#framework` |
| `/labs` | `labs.php` | |
| `/science/evidence` | `evidence.php` | |
| `/science/regulatory` | `regulatory.php` | |
| `/science/quality` | `quality.php` | |
| `/science/responsible-science` | `responsible-science.php` | |
| `/intellectual-property` | `intellectual-property.php` | |
| `/divisions` | `divisions.php` | |
| `/divisions/b-melanox` | `bmelanox.php` | |
| `/divisions/bettyworld` | `bettyworld.php` | |
| `/divisions/bvalence` | `bvalence.php` | |
| `/divisions/divine` | `divine.php` | |
| `/divisions/novia` | `novia.php` | |
| `/divisions/skin-safari` | `skin-safari.php` | |
| `/future` | `future.php` | |
| `/contact` | `contact.php` | Dynamic — `searchParams` for form state |
| `/updates` | `updates.php` | Dynamic — DB publications |
| `/privacy` | `privacy.php` | |
| `/terms` | `terms.php` | |

### Admin — `src/app/admin/`

Separate layout and CSS (`admin.css`, `enquiries.css`). Requires authenticated session.

| Route | Purpose |
|---|---|
| `/admin/setup` | First owner account (when no users exist) |
| `/admin/login` | Sign in |
| `/admin/forgot-password`, `/admin/reset-password` | Password reset via Resend |
| `/admin/verify` | Email 2FA (when `ORIGINA_REQUIRE_2FA=1`) |
| `/admin` | Dashboard overview |
| `/admin/enquiries`, `/admin/enquiries/[id]` | Enquiry inbox + workflow |
| `/admin/publications`, `/admin/publications/new`, `/admin/publications/[id]` | Publications CRUD |
| `/admin/users`, `/admin/users/new`, `/admin/users/[id]` | User management |
| `/admin/analytics` | Page views + performance metrics |
| `/admin/audit` | Security audit log (latest 200 events) |

### API

| Route | Purpose |
|---|---|
| `/api/metrics` | POST beacon — page views, LCP timing (cookie-free) |

## Design system

Defined in `src/app/globals.css` via `@theme` tokens and `@layer components` utility classes.

### Color tokens

Two layers. **Pigment tokens** name colours; **role tokens** name jobs. New work should consume
role tokens, because a pigment name can be rebound to something it no longer describes — on
B-Melanox, `--color-gold` resolves to a pink-red.

Pigment tokens (client-approved ORIGINA palette, corroborated against the legacy PHP repo):

| Token | Value | Client name |
|---|---|---|
| `--color-noir` | `#161210` | Origina Noir — dark grounds |
| `--color-ivory` | `#f8f4ec` | Institution Ivory — light surface, text on noir |
| `--color-gold` | `#b5924a` | Origin Gold — the institutional thread; rules and fills, **not** light-ground text (2.83:1) |
| `--color-gold-light` | `#d6bd83` | Emphasis and hover on dark |
| `--color-graphite` | `#3a332c` | Warm Graphite — body text on light |
| `--color-stone` | `#9a8e80` | Antiqued Stone — borders and dark-ground muted text |
| `--color-stone-deep` | `#6f6459` | Light-ground muted text (Stone is only ~3.1:1 on paper) |
| `--color-oxblood` | `#7a171b` | B-Melanox / pigmentation |
| `--color-cream` | `#eee6d8` | Secondary light surface |
| `--color-sage` | `#566b46` | NOVIA contexts |

Role tokens, rebound per division in `[data-division]` blocks:

| Token | Institution default | Job |
|---|---|---|
| `--color-brand-ground` / `-ground-deep` | `#161210` / `#0d0b09` | Dark ground, highest-emphasis fill |
| `--color-brand-surface` / `-surface-muted` | `#fdfbf7` / `#f0e9df` | Reading surfaces |
| `--color-brand-text` / `-text-muted` | `#1b1714` / `#3a332c` | Text on the current ground |
| `--color-brand-accent` / `-on-accent` | `#b5924a` / `#161210` | Identity mark and text on it |
| `--color-brand-accent-readable` | `#866a2a` | Accent **text**, AA-safe (accessibility adaptation) |
| `--color-brand-action` / `-action-hover` / `-action-text` | `#161210` / `#3a332c` / `#f8f4ec` | Primary action |
| `--color-brand-rule` | gold @ 42% | The thread as a hairline |
| `--color-brand-focus` | `#161210` | Focus indicator |

`brand-text`, `brand-text-muted`, `brand-accent-readable` and `brand-focus` are **ground-dependent**
and are resolved by a block matching `.bg-noir` / `.bg-noir-deep` / `.bg-brand-ground` — never on
the `[data-division]` wrapper, since division pages contain light sections too.

Extend `@theme` for new colors — avoid one-off arbitrary Tailwind values.

### Typography utilities

| Class | Use |
|---|---|
| `.display-title` | Page hero headlines |
| `.section-title` / `.section-title-light` | Section headings |
| `.lead-serif` / `.lead-serif-light` | Editorial lead paragraphs |
| `.body-copy` / `.body-copy-light` | Standard body text |
| `.eyebrow` | Section labels with gold rule |

### Component classes

| Class | Use |
|---|---|
| `.btn-primary` | Institutional CTA — Origina Noir fill, ivory text |
| `.btn-gold` | Division CTA — reads `--color-brand-action`, so each division's own colour applies |
| `.btn-secondary`, `.btn-secondary-dark` | Outlined CTAs for dark / light grounds |
| `.text-link`, `.text-link-light` | Inline navigation links — ink text with a gold underline |
| `.institutional-card` | Bordered content cards |
| `.quote-band` | Full-width quote sections |
| `.principle-stack` | Stacked doctrine quotes |
| `.editorial-frame` | Photography with gold accent line |
| `.division-card` | Division tiles with photo headers |
| `.image-break` | Full-bleed cinematic photo sections |
| `.legal-prose` | Privacy/terms typography |
| `.publication-item` | Updates archive layout |
| `.tag-chip` | Trait/focus area labels |

## Component inventory

### UI primitives — `src/components/ui/`

| Component | Purpose |
|---|---|
| `Button` | Primary/secondary links styled as pills |
| `Eyebrow` | Section label with optional gold rule |
| `TextLink` | Uppercase navigation links (light/dark variants) |
| `LeadCopy` | Serif lead paragraphs |

### Page building — `src/components/`

| Component | Purpose |
|---|---|
| `SiteHeader` | Flat full-bleed nav, mega-menu, mobile drawer |
| `SiteFooter` | Institutional footer with link columns |
| `PageHero` | Breadcrumb + kicker + title + intro; optional portrait image |
| `Breadcrumbs` | "Home / [parent] / crumb" trail, used by `PageHero` |
| `Section` | Toned section shell (paper/sunk/noir/crimson/graphite) |
| `ProcessPathway` | 13-stage development pipeline grouped into 4 phases |
| `PageCta` | Closing call-to-action band |
| `Quote` / `QuoteBand` | Pull quotes and full-width quote sections |
| `SplitSection` | Two-column layout helper |
| `EditorialImage` | Framed photography with caption |
| `ImageBreak` | Full-bleed cinematic photo with text overlay |
| `PhotoGrid` / `PhotoMosaic` | Multi-image editorial layouts |
| `DivisionCard` | Division link card with photo header |
| `TagList` | Chip list for traits/focus areas |
| `DisclaimerBand` | Legal/medical disclaimer strip |
| `ProcessPathway` | Development framework steps |
| `EvidenceLadder` | Evidence hierarchy visualization |
| `DetailList` | Numbered/bulleted detail lists |
| `InstitutionMap` | Division architecture diagram |
| `StatusBadge` | Division/platform status labels |
| `ProductGallery` | B-Melanox product dossier gallery |
| `ResearchLibrary` | Labs research filter grid (client) |
| `EnquiryForm` | Contact form (client, `useActionState`) |
| `SiteAnalytics` | Metrics beacon (client) |

### Admin — `src/components/admin/`

`AdminShell`, `AuthForms`, `EnquiryWorkflowForm`, `PublicationForm`, `UserForm`, `UserToggleButton`

## Content modeling

Typed data modules in `src/lib/content/` mirror PHP `content/*.php`:

| Module | Used by |
|---|---|
| `navigation.ts` | Header, footer |
| `science.ts` | Homepage, science section, labs |
| `evidence.ts` | Homepage, evidence, biology-first |
| `divisions.ts` | Homepage, divisions, IP, division pages |
| `future.ts` | `/future` |
| `contact.ts` | `/contact` |
| `images.ts` | Photography registry (src, alt, caption, division mapping) |

Page components compose modules with shared UI. **Do not invent copy** — port faithfully from PHP.

Metadata helpers live in `src/lib/metadata.ts` (`createPageMetadata` for OG/Twitter/canonical).

## Database schema

| Migration | Tables | Purpose |
|---|---|---|
| `0000_enquiries.sql` | `enquiries` | Contact form submissions |
| `0001_users.sql` | `users`, `audit_log` | Admin auth + security events |
| `0002_publications.sql` | `publications` | `/updates` archive |
| `0003_site_metrics.sql` | `site_metrics` | Analytics beacon data |
| `0004_auth_tokens.sql` | `auth_tokens` | Password reset + 2FA tokens |

Drizzle schema: `src/db/schema.ts` · Client: `src/db/index.ts` (`getDb()`).

## Auth & security

- Admin sessions via iron-session (`src/lib/auth/session.ts`), signed with `SESSION_SECRET`.
- Role helpers in `src/lib/auth/roles.ts` (owner, admin, editor).
- Password hashing: bcrypt (`src/lib/auth/password.ts`).
- Enquiry rate limiting: 3 submissions per 10 minutes per IP hash.
- Production security headers in `next.config.ts`.
- Legacy PHP URL redirects in `next.config.ts` for cutover parity.

## SEO

- `src/app/sitemap.ts` — static route list
- `src/app/robots.ts` — allow public, disallow `/admin`
- `src/lib/site.ts` — Organization JSON-LD
- Per-page metadata via `createPageMetadata()` or inline `metadata` exports

## Accessibility

`SiteHeader` mega-menu and mobile nav mirror the PHP site's validated pattern: ARIA roles,
Escape-to-close, click-outside-to-close, skip link, body scroll lock. Maintain this bar for new
interactive components.

## Photography assets

| Path | Contents |
|---|---|
| `public/img/founder/founder-01 … 09` | Dr. Elizabeth Consoli — clinical, community, events |
| `public/img/products/bmelanox-01 … 09` | B-Melanox product and lifestyle shots |
| `public/img/brand/origina-logo.png` | Full logo |
| `public/img/brand/origina-mark.png` | Mark/icon |

Central registry: `src/lib/content/images.ts` — always use registered alt text and captions.

## Branching & deployment

- **Production:** `main` — deploys to Vercel after PR merge.
- **Feature work:** `codex/*` branches — one PR per logical feature set into `main`.
- **Legacy:** `codex/master-changes` — merged via PR #4; no longer the active working branch.

See `AGENTS.md` for commit conventions and `docs/SETUP.md` for env vars and deployment steps.
