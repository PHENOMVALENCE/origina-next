# Progress log

Living record of what's been done, session by session. Update this in the same commit (or an
immediately following `docs:` commit) whenever meaningful progress lands. Newest entries at top.
See `docs/ROADMAP.md` for the phased plan this is tracked against.

## Current status (2026-08-20)

**Project focus has shifted.** The migration off PHP is functionally complete. The active priority
is now **frontend design quality** — making the public site read like a research institution.
Backend work (admin CMS, database, cutover plumbing) is built and parked; no further investment
there for now. See `docs/DESIGN.md` for the design standard.

| Area | Status |
|---|---|
| Scaffold, tooling, CI (lint/build) | ✅ Done |
| **Institutional design system (two-layer, light/dark)** | ✅ Done — 2026-08-20 |
| **Typography scale (17px body, 11px floor)** | ✅ Done — 2026-08-20 |
| **Full-bleed institutional header** | ✅ Done — 2026-08-20 |
| **In-page section navigation** | 🟨 Applied to `/about`, `/labs` — roll out to other long pages |
| Editorial photography + image layout | ✅ Done |
| Shared layout (header, mega-menu, mobile nav, footer) | ✅ Done |
| Shared page components | ✅ Done |
| All public pages (27 `(site)` page files → 33 public routes) | ✅ Done |
| SEO (sitemap, robots, OG, JSON-LD, branded 404) | ✅ Done |
| Page provenance / "reviewed" metadata | ⬜ `meta` prop exists on `PageHero`; not yet populated |
| Full Lighthouse / accessibility pass | ⬜ Outstanding |
| Postgres schema + enquiry Server Action | ✅ Done (parked) |
| Admin auth, enquiries, publications, users, analytics | ✅ Done (parked) |
| Site content / homepage CMS editing | ❎ Dropped — dead feature in the PHP source (see below) |
| Production Postgres provisioning + migration | ⬜ Human step (deferred) |
| DNS cutover to Next.js deployment | ⬜ Human step (deferred) |

**Repo:** https://github.com/PHENOMVALENCE/origina-next · **Production branch:** `main` ·
**Active feature branch:** `codex/institutional-rebuild`

**Build:** `npm run lint` and `npm run build` pass clean.

### Merged pull requests (production)

| PR | Title | Merged |
|---|---|---|
| [#1](https://github.com/PHENOMVALENCE/origina-next/pull/1) | Institution and science sections | 2026-08-17 |
| [#2](https://github.com/PHENOMVALENCE/origina-next/pull/2) | Divisions section | 2026-08-17 |
| [#3](https://github.com/PHENOMVALENCE/origina-next/pull/3) | Public site, contact backend, admin enquiries | 2026-08-17 |
| [#4](https://github.com/PHENOMVALENCE/origina-next/pull/4) | Production readiness (SEO, publications, analytics, admin team) | 2026-08-19 |
| [#5](https://github.com/PHENOMVALENCE/origina-next/pull/5) | Institutional UI revision for all public pages | 2026-08-19 |

### Open pull requests

| PR | Branch | Title |
|---|---|---|
| [#6](https://github.com/PHENOMVALENCE/origina-next/pull/6) | `codex/editorial-imagery` | Editorial photography and professional image layout |

### Human steps before production cutover

1. Provision production Postgres (Neon or Vercel Postgres).
2. Run all migrations `drizzle/0000` through `drizzle/0004` against production.
3. Set Vercel env vars: `DATABASE_URL`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`; optionally
   `ORIGINA_NOTIFY_EMAIL`, `RESEND_API_KEY`, `ORIGINA_REQUIRE_2FA=1`.
4. Visit `/admin/setup` on the deployed site to create the owner account.
5. Side-by-side content parity check against the live PHP site.
6. Point DNS at the Vercel deployment; archive PHP deployments.

See `docs/SETUP.md` for full deployment instructions.

---

## 2026-08-24 — Institutional revision plan: Phase 1 audit + Phase 2 fonts

**Phase 1 (audit).** Added `docs/institutional-ui-audit.md` — a dimension-by-dimension assessment
against a fresh 9-phase institutional brief. Committed alone (`docs: audit institutional website UI
and UX`) on `codex/institutional-ui-audit`, PR #19. Conclusion: tokens, typography scale, header/nav,
footer, buttons/links, two-layer brand, and the redesigned hero are already at standard; the real
gaps are homepage length, mixed-ground `text-stone` in shared utility classes, unrun in-browser
responsive QA, and no full Lighthouse pass.

**Phase 2 (design system — fonts).** Owner chose to follow the brief's font direction. Swapped the
type faces via `next/font/google`: **Cormorant Garamond → Source Serif 4** (headings/display/quotes)
and **Montserrat → Source Sans 3** (body/UI). Font CSS variables renamed to `--font-serif-family` /
`--font-sans-family`; the `--font-serif` / `--font-sans` tokens and fallback stacks updated. The rest
of the design system (scale, spacing, tokens) already existed, so no other token work was needed.
`docs/DESIGN.md` §2 updated. **Caveat:** the `clamp()` display scale was calibrated for the narrower
Cormorant; Source Serif 4 sets wider/heavier, so the largest sizes may want a small trim — flagged
for in-browser QA (Phase 9). `npm run lint` and `npm run build` pass clean.

---

## 2026-08-23 — Hero section institutional redesign

Rebuilt `HomeHero` from a full-bleed auto-rotating noir carousel into an **editorial split in the
light register**: a left content column (eyebrow, serif headline with a crimson second line, lede,
one primary button + one secondary text link, an understated metadata line) beside a single
landscape documentary photograph, contained on the 12-column grid (`lg` 6/6, `xl` 5/7). The hero now
shares the paper ground of the light home header so they read as one surface.

- Dropped the carousel (rotation + dot controls were promotional furniture) for a single calm image
  — reads as an institutional opening page, not a banner. Text sits on paper, never over the photo,
  so only a small warm gradient at the *foot* of the image aids caption legibility.
- Height is ~`72vh` on desktop (both columns `min-h-[72vh]`, `items-stretch`), never `100vh`; mobile
  stacks the image beneath the content at `4/3` (`sm:16/9`).
- **Now server-rendered** — the entrance is pure CSS (`.hero-rise` / `@keyframes heroRise`, staggered
  via `animationDelay`, collapsed by the reduced-motion rule), so the hero ships **no client JS**
  (removed `"use client"`, `useState`, `useEffect`).
- Removed the old carousel/stats/scroll-cue classes from `globals.css`; also swept the
  `.home-section-bridge` caption `text-stone` → `text-stone-deep` (light-ground AA).

Copy preserved (headline "Beginning in Africa. / Serving the world.", the existing lede). Semantics:
one `<h1>` with `aria-labelledby`, meaningful `alt`, `next/image` with `priority`. `docs/DESIGN.md`
§4 hero entry updated. `npm run lint` and `npm run build` pass clean. In-browser breakpoint QA
(320→1600px) still needs a real browser.

---

## 2026-08-23 — Master redesign: editorial header rollout

Received the full institutional redesign brief again (72 sections). Audited the current state
against it first (tokens, homepage, shell, both design docs) and confirmed what the two prior passes
already recorded: the great majority of the brief is implemented. Rather than churn a mature system,
this pass delivered targeted, build-verified work on a new branch `codex/institutional-redesign`:

- **Real bug** — the homepage hero stats used `.stat-figure` (crimson `#7a171b`) on the noir hero,
  ~1.9:1 and unreadable; the exact crimson-on-dark violation the docs warn against. Switched to
  `.stat-figure--dark` (gold).
- **New primitives** — `.editorial-grid` (12-column, the layout device the brief asks for in §11/§21)
  and `.section-header-split` (asymmetric title-left / intro-right header), exposed through `Section`'s
  new `split` prop.
- **Site-wide rollout** — made `split` the default whenever a `Section` has both a title and intro
  (opt out with `split={false}`), so every institutional section across all 25 public routes takes
  the editorial header composition consistently. Also fixed an `02 · 03 · Purpose` eyebrow typo on
  `/about` and untracked/gitignored the local `.claude/` tooling dir.

**Interaction + accessibility follow-up (same day).**

- `feat(ui)` — the `TextLink` trailing arrow now shifts 3px on hover (brief §23/§48), via the existing
  reduced-motion global rule.
- `fix(a11y)` — swept `text-stone` (~3.1:1 on paper/ivory, fails WCAG AA for normal text) → `text-stone-deep`
  (~4.9:1) in every **confirmed light-ground** use: `ResearchLibrary` + evidence research-record
  meta/footers, the `Quote` figcaption light branch (its ternary resolved to stone on *both* branches),
  `InstitutionMap` platform/division labels on paper cards, `StatusBadge` planned/future/open, the
  contact detail-list terms, the science "factors that matter" label, the platforms subtitle, and the
  culture photo captions. Dark-ground `text-stone` was deliberately left alone — stone clears AA there.
- **Known remaining:** the shared utility classes in `globals.css` (`.stat-label`, `.quote-attribution`,
  `.scientific-metadata`, `.page-meta`, `.footnote`, `.editorial-caption`) still use `text-stone` and are
  used on *both* light and dark grounds, so they can't be blanket-swapped — they need context-aware
  (light/dark) variants. Deferred as a scoped follow-up.

`npm run lint` and `npm run build` pass clean. Not yet done this pass: in-browser responsive QA
(320→1600px) and a full Lighthouse run — the preview pane runs hidden here, so those need a real browser.

---

## 2026-08-22 — Design-system discipline pass (master redesign, Phase 1)

Received a comprehensive (90-section) master redesign brief for the full site. Audited before
writing code — own reads of ~15 core components plus a background research pass covering all 25
public routes, every design token, content files, SEO, accessibility, and the `"use client"`
footprint — and found that most of what the brief asks for already existed from the 2026-08-20
design-system pass and the same-day hero work above. This pass is real gap-closing against actual
audit findings, not a rebuild; the plan (with full audit findings) is preserved in git history via
the approved plan file. Explicitly out of scope: the admin app (own disconnected `admin.css`
palette — flagged, not touched, backend remains parked) and inventing copy for thin pages
(`/divisions/bvalence`, `/divisions/skin-safari`, `/intellectual-property`, `/platforms`,
`/science/quality`, `/science/responsible-science`, `/terms` — deferred, see `docs/ROADMAP.md`).

**Naming debt.** Two tone/variant naming systems coexisted for the same visual results, and the
"legacy" one was dominant, not rare: `Section`'s `tone="ivory"/"cream"/"oxblood"` (44 call sites
across 21 of 25 routes) and `PageHero`'s `variant="gradient"/"default"` (18 of 25 routes) were
documented as back-compat aliases for `paper/sunk/crimson` and `light`. Mechanically renamed every
call site to the canonical name, then deleted the aliases — zero visual change, confirmed by build
(TypeScript errors on any remaining legacy value) and a zero-match grep before removal. Checked
first that this wasn't masking a live bug: all 6 division pages already correctly used `variant="dark"`.

**Real AA contrast failures, found via computed contrast ratios, not by eye:**

- `--color-stone` (#9a8e80) is ~5.8:1 on noir (fine) but only ~3.1:1 on `--color-paper`/
  `--color-form-bg` (fails WCAG AA for normal text). It was being used directly on light grounds in
  several places that read fine on screen but fail the math: the breadcrumb "Home" link/separators
  on every light `PageHero` (≈19 institution routes), two lines of enquiry-form help text, and a
  footnote in `future/page.tsx`'s "unnamed division" card. Added `--color-stone-deep` (#786d63,
  ~4.9:1) as the AA-safe light-ground pairing and swapped all of the above to it — `--color-stone`
  itself stays correct on dark grounds.
- One line in `future/page.tsx` (`text-[#8a7f74]`) turned out to be the *opposite* of what it first
  looked like: that hex is fine (4.76:1) because it's used on the noir background, not light — it
  was reused with `--color-stone` instead (also fine there, 5.81:1) purely to remove the one-off hex,
  not because it had a contrast problem.
- Consolidated the remaining one-off hexes in `EnquiryForm.tsx` into named tokens:
  `--color-noir-soft`, `--color-crimson-wash`/`--color-crimson-ink` (contrast-checked at 9.67:1,
  already fine).
- A third, undeclared shadow (`.site-nav-panel`'s light-mode dropdown) got its own token,
  `--shadow-panel` — it's genuinely distinct from `--shadow-nav` (the dark-mode version), not a
  duplicate to merge.
- Documented the five hand-picked z-index values sitewide as a comment block in `globals.css`
  rather than inventing an unneeded numeric scale.

**Structural.** `ProcessPathway` (the 13-stage development framework) now groups into four labelled
phases — Discovery/Development/Validation/Translation — by index range; step copy and order
untouched. Extracted `Breadcrumbs` from `PageHero`'s inline markup and gave nested routes
(`/science/*` subpages, `/divisions/*`, `/future/[id]`) a real "Home / Section / Page" trail instead
of always "Home / Page". Capped the mobile-menu content at `sm:max-w-sm` so it reads as deliberately
tablet-sized at 768–1023px instead of stretching a phone layout edge-to-edge; bumped the menu's
close button from 40px to 44px to match the open-menu toggle and the brief's touch-target minimum.

**Also squared** the remaining unjustified `rounded-sm` instances (`ProductGallery`, the homepage's
Biology First panel, a culture-page photo frame, a b-melanox product photo) and reused
`.section-title-light`/`.lead-serif-light` instead of re-typed arbitrary sizes in `SiteFooter` and
`InstitutionMap`'s Labs link — its "ORIGINA™" institution-block size had no clean match to an
existing scale class and was left as-is rather than forced into one.

Verified in-browser (Playwright against the dev server, not just read from source): the phase-
grouped `ProcessPathway`, breadcrumbs on light and dark `PageHero`, the enquiry form, squared photo
corners, and the mobile menu at 375/768px. `npm run lint` and `npm run build` pass clean.

---

## 2026-08-22 — Homepage hero rebuild and contrast fixes

Continued and validated an in-progress hero redesign, then fixed what testing turned up. Verified
in a real browser via Playwright against the dev server, not just read from source.

**Hero.** `HomeHero` is now a full-bleed, auto-rotating photograph carousel on a noir ground (was a
48/52 split panel on paper) — dot controls, `aria-live` caption, respects
`prefers-reduced-motion`. Pulled `founderImages.portraitClinical` from the rotation: it's a tall
portrait crop, and `object-cover` on the landscape hero box degraded it to an unrecognisable
close-up of her chin regardless of `object-position`. The carousel now only uses the three
founder photos that are actually landscape-composed. See `docs/DESIGN.md` §4 and rule of thumb 9.

**Contrast fixes** (same crimson-on-noir problem `docs/DESIGN.md` already documents, found in two
more places):

- The homepage's "unnamed division" eyebrow (`∞ · Open possibility`) was `tone="crimson"` on the
  section's noir background — ~1.9:1, unreadable. Changed to `tone="dark"`, matching the fix
  already applied one section earlier in the same file.
- `ContentStatus`'s `--development` and `--future` variants rely on the paper background showing
  through a near-transparent fill, so they inherit the same problem on a dark panel. Added a `dark`
  prop that repaints them as a neutral ivory outline, applied to the homepage Platforms section
  (the only dark-ground usage on this page — other pages using `ContentStatus` on a dark ground are
  unaudited and left as a follow-up).

**Not a real bug, logged in case it recurs:** mid-session, one hero image (`founder-03.jpeg`)
rendered solid black — the Next dev image optimizer had a stuck in-memory request lock from rapid
repeated test traffic against one long-running `next dev` process. A dev-server restart cleared it;
`sharp` processed the file fine in isolation throughout. Not a code or content issue.

`npm run lint` and `npm run build` pass clean.

---

## 2026-08-20 — Landing page revision

Reviewed the rendered homepage and fixed what the design system pass had left or introduced.
Every number below was measured in-browser, not estimated.

**Composition — the main fault.** The hero grew with its content to **1205px on a 720px viewport**.
Because its content is vertically centred, that pushed the whole composition below the fold: a dead
gap under the header, buttons crammed at the bottom edge, and the statistics row invisible at
y=909. The hero is now held to the viewport (`lg:h-[calc(100dvh-var(--header-offset))]`, clamped
600–880px) and measures **650px**, with the stats and scroll cue both above the fold.

Supporting changes: removed the redundant `ORIGINA™` serif label from the hero (the wordmark sits
in the header 60px above it), reduced display sizes, and tightened the vertical spacing.

**Header.**

- Removed the duplicate `Contact` nav item — the header already carries a standing call to action.
  Nav is now 7 items; the button reads "Enquiries".
- The dropdown caret was a `text-[0.6rem]` character — 9.6px, below our own 11px floor, rendering
  as a speck. Replaced with a 9×5px SVG chevron.
- Added `.btn-compact` and used it for the header CTA, which was 124×48 and dominating the bar; it
  is now 124×37. A `min-h-0` utility did **not** override `.btn-primary`'s `min-h-12`, so the size
  belongs in the button system rather than in utilities.
- `--header-offset` at `lg` corrected from 5.25rem to 4.375rem to match the rendered 69px header.
- Made the header opaque — the hero runs full-bleed beneath it and 95% opacity ghosted the
  photograph through the bar.
- The brand mark is drawn for a dark ground and was washing out on paper; it now sits on a noir
  roundel in both layers.

**Images and fonts.**

- The hero image was serving a **384px-wide file into a 601px box** and rendering soft — its
  `sizes` did not describe the layout. Corrected to `(min-width: 1024px) 48vw, 100vw`; it now
  serves at 1080px.
- The brand mark was `loading="lazy"` despite sitting above the fold. Now `eager`.
- Trimmed unused webfonts: Cormorant 500/600 and Montserrat 300 were downloaded on every page but
  no rule used them (nothing pairs `font-serif` with a weight utility).

**Verified:** hero 650px on a 720px viewport with all content above the fold; header 69px, opaque;
CTA 124×37; hero image at w=1080; no horizontal overflow at 375×812 and the mobile stack intact;
lint and build clean.

**Known benign notice:** Next emits a 1x/2x preload for the 24px brand mark, so dev logs a
"preloaded but not used" line for the unused candidate. Keeping `eager` was preferred over
silencing it, since lazy-loading a header wordmark risks it popping in after paint.

## 2026-08-20 — Institutional design system (two-layer rebuild)

Project refocused from migration/backend onto frontend design quality. The brief: the site should
read like a research institution (Harvard, Yale, Rockefeller), not a luxury brand. Full rationale
in the new `docs/DESIGN.md`.

**Audit findings that drove the work:**

- Body copy was 15px; interface labels ran as low as **8.3px** and enquiry form labels **9px**;
  desktop nav links **~8.8px**. Institutions use 17–20px body. This was both a design and an
  accessibility problem.
- Gold-on-noir was the default ground on nearly every page. That is luxury/cosmetics language and
  fought the scientific-institution positioning established in PRs #9/#11.
- The header was a floating `rounded-full` pill with backdrop blur — the most modern-SaaS element
  on the site.

**Decisions taken (owner-approved):** light institution layer / dark division layer; full-bleed
flat institutional header.

**Changes:**

- Rebuilt `src/app/globals.css` as a two-layer system — paper/ink/crimson for the institution,
  noir/ivory/gold for divisions. Added rule, measure, and statistic tokens.
- Typography: body **15px → 17px**, nav **~8.8px → 14px**, buttons **~10.5px → 13px**. Established
  an **11px hard floor** and raised 30 sub-11px instances across the public site.
- Added `src/lib/layer.ts` — resolves brand layer from pathname; header, hero, and CTA read from it.
- `SiteHeader` rebuilt: flat, full-bleed, hairline rule, squared, no pill, no blur-heavy float.
- `PageHero` light by default, dark for the six division pages; added optional `meta` provenance line.
- `PageCta` now closes institution pages in the light register (crimson action) and division pages
  in the dark register (gold action).
- `Section` gained `paper`/`sunk`/`crimson` tones (old names kept as aliases), plus `index` and
  `divider`.
- Rebuilt `InstitutionMap` hierarchy — crimson institution block, ink science block, paper panels.
- `Quote`/`QuoteBand` gained attribution; `StatusBadge`, `ContentStatus`, `EnquiryForm`,
  `SiteFooter`, `InstitutionMap`, `DetailList`, `EvidenceLadder`, `LabsCapabilities`,
  `ProcessPathway`, `ResearchLibrary` all remapped to the institutional palette.
- Radius squared site-wide; shadows replaced by hairline rules.
- **New** `SectionNav` — sticky in-page section navigation with scroll tracking, applied to
  `/about` and `/labs`.

**Contrast correction:** the palette remap initially pushed crimson accents into dark bands on
institution pages, where `#7a171b` on `#161210` is ~1.9:1 and unreadable. All such instances were
found and switched to warm neutrals. Rule recorded in `docs/DESIGN.md`: crimson on light, gold on
dark, never the reverse.

**Validation:** `npm run lint` and `npm run build` pass clean. Rendered values verified in-browser:
body 17px/1.72 on `#fdfbf7`, header radius 0, buttons crimson `#7a171b` at 13px, nav 14px, and the
light/dark layer split confirmed across `/`, `/science`, and `/divisions/b-melanox`.

**Not verified in-environment:** `SectionNav` scroll tracking. The preview pane runs hidden
(`visibilityState: "hidden"`), so scroll events and `requestAnimationFrame` never fire. The
position logic was verified correct by direct evaluation at every section offset, and the nav
renders sticky with all anchors resolving — but live scroll-spy behaviour needs a check in a real
browser.

## 2026-08-19 — Editorial photography & image layout

- Added `src/lib/content/images.ts` — central registry for founder and product photography (src,
  alt, caption).
- Extended `SplitSection.tsx` with `EditorialImage`, `ImageBreak`, `PhotoMosaic`, and upgraded
  `MediaFigure` / `PhotoGrid`.
- Added `DivisionCard` — division tiles with photo headers and status badges.
- Extended `PageHero` with optional portrait image on large screens.
- Integrated photography across homepage and key inner pages (About, Science, Labs, Africa,
  Contact, Founder, Culture, Future, Divisions, Responsible Science).
- Homepage: mobile-visible hero, cinematic breaks, product shot on BMX section, photo division grid.
- PR [#6](https://github.com/PHENOMVALENCE/origina-next/pull/6) opened from `codex/editorial-imagery`.

## 2026-08-19 — Institutional UI revision (design system)

- Built institutional design system in `src/app/globals.css` — tokens, typography utilities
  (`.body-copy`, `.lead-serif`, `.display-title`), buttons, cards, quote bands, legal prose,
  publication layout.
- Added UI primitives: `Button`, `Eyebrow`, `TextLink`, `LeadCopy` under `src/components/ui/`.
- Added layout helpers: `SplitSection`, `TagList`, `DisclaimerBand`.
- Upgraded shared components: `SiteHeader`, `SiteFooter`, `Section`, `PageHero`, `PageCta`,
  `Quote`, `DetailList`, `EvidenceLadder`, `InstitutionMap`, `ProcessPathway`, `StatusBadge`,
  `EnquiryForm`.
- Revised all 25 public `(site)` pages for consistent hierarchy: gradient heroes, section intros,
  standardized CTAs, `LeadCopy` / `body-copy` typography.
- Branded `not-found.tsx` aligned to design system.
- Merged via PR [#5](https://github.com/PHENOMVALENCE/origina-next/pull/5) (`codex/ui-revision`).

## 2026-08-19 — Admin auth & team management

- Added `auth_tokens` table and migration (`drizzle/0004_auth_tokens.sql`) for password reset and
  optional two-factor sign-in.
- Implemented user management at `/admin/users` (list, create, edit, enable/disable toggle) for
  owners and admins.
- Added audit log viewer at `/admin/audit` (latest 200 security events).
- Added password reset flow at `/admin/forgot-password` and `/admin/reset-password` via Resend.
- Optional email 2FA when `ORIGINA_REQUIRE_2FA=1`, with verification at `/admin/verify`.

## 2026-08-19 — Production readiness pass

- Added missing public routes: `/culture` (ported from PHP), `/updates` (DB-driven publications).
- Implemented publications admin CRUD at `/admin/publications` with Drizzle migration
  (`drizzle/0002_publications.sql`).
- Added privacy-conscious analytics: `/api/metrics` beacon, `site_metrics` table
  (`drizzle/0003_site_metrics.sql`), admin dashboard at `/admin/analytics`.
- SEO infrastructure: `sitemap.ts`, `robots.ts`, Open Graph/Twitter metadata helpers, Organization
  JSON-LD, branded `not-found.tsx`.
- Production config: security headers, legacy URL redirects in `next.config.ts`, GitHub Actions CI
  (`.github/workflows/ci.yml`).
- Refactored layout into `(site)` route group — public pages statically generated; admin routes
  remain dynamic.
- Updated footer navigation with Culture & Updates links matching the PHP site.
- Merged via PR [#4](https://github.com/PHENOMVALENCE/origina-next/pull/4) (`codex/master-changes`).

## 2026-08-17 — Phase 4 admin started (auth + enquiries inbox)

- Added `users` and `audit_log` tables (`drizzle/0001_users.sql`) with Drizzle schema updates.
- Implemented iron-session admin auth: `/admin/setup`, `/admin/login`, sign-out, bcrypt passwords,
  login audit events.
- Added admin shell UI (ported from PHP admin CSS) with overview dashboard and enquiries inbox at
  `/admin/enquiries` plus detail/workflow page at `/admin/enquiries/[id]`.

## 2026-08-17 — Phase 3 backend (contact form persistence)

- Added Drizzle ORM + Postgres client (`src/db/`), `enquiries` schema mirroring the PHP site, and
  checked-in migration SQL (`drizzle/0000_enquiries.sql`).
- Implemented enquiry Server Action (`src/app/(site)/contact/actions.ts`) with PHP-parity validation,
  honeypot, IP hash rate limiting (3 per 10 minutes), and `ORI-YYYYMMDD-XXXX` reference generation.
- Wired `EnquiryForm` to the Server Action via `useActionState`; success state via `?sent=` query
  param matches the PHP redirect flow.
- Optional Resend notification when `ORIGINA_NOTIFY_EMAIL` and `RESEND_API_KEY` are set.
- Added `docs/SETUP.md` and `.env.example` documenting environment variable names.

## 2026-08-17 — Phase 2 public pages complete

- Added `src/lib/content/future.ts` and `/future` — institutional horizon roadmap.
- Ported `/privacy` and `/terms` from `privacy.php` and `terms.php`.
- Added `src/lib/content/contact.ts`, client `EnquiryForm` component, and `/contact` — directory
  grid, enquiry form, direct email block, message guide, and closing band.
- `npm run lint` and `npm run build` clean.

## 2026-08-17 — Divisions section complete

- Copied B-Melanox product photography into `public/img/products/`.
- Added `InstitutionMap` and `ProductGallery` components.
- Ported all seven division routes from PHP sources.

## 2026-08-17 — Science section complete

- Extracted science-section components: `ProcessPathway`, `EvidenceLadder`, `DetailList`, `PageCta`,
  `StatusBadge`, `ResearchLibrary`.
- Ported all seven science routes from PHP sources.

## 2026-08-17 — Institution section complete

- Extracted `Section`, `Quote`, and `PageHero` into shared components.
- Ported `/founder`, `/about`, `/africa`, `/biology-first` from PHP sources.

## 2026-08-17 — Repo setup, GitHub workflow, documentation

- Connected to `https://github.com/PHENOMVALENCE/origina-next.git`.
- Established branch workflow: `main` (production), feature branches via PR.
- Added `AGENTS.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, this progress log.

## Earlier (local-only, before this repo existed)

- Audited the PHP source site; scaffolded Next.js project; ported brand system and homepage.
