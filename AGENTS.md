# ORIGINA-NEXT — Agent Working Instructions

## Project overview

`origina-next` is the Next.js rebuild of the ORIGINA institutional site, replacing the PHP+SQLite
implementation at the sibling repo `origina` (https://github.com/PHENOMVALENCE/origina). It is a
production migration: content and claims must be ported faithfully from the source PHP site, not
invented. See `docs/ARCHITECTURE.md` for the technical design and `docs/ROADMAP.md` for what's
built vs. outstanding.

## Repository workflow

- **Protected production branch**: `main`
- **Feature branches**: `codex/*` (e.g. `codex/editorial-imagery`)
- All implementation work happens on feature branches, in small individually-reviewable commits,
  pushed regularly. Open a pull request into `main` to bring work to production.
- Do not merge your own pull requests — merging is a human decision.
- Never force-push, never rewrite published history on `main`.
- **Legacy:** `codex/master-changes` was merged via PR #4 and is no longer the active branch.

## Before starting work

1. Confirm you're in the `origina-next` directory (not the sibling `origina` PHP repo).
2. `git fetch origin --prune`, then branch from latest `origin/main`.
3. Read `docs/PROGRESS.md` for current state before starting new work.

## Commit style

Conventional Commits: `type: short description`, lowercase, imperative, no trailing period.
Allowed types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`, `perf`, `build`, `ci`.

One logical change per commit. A page port, a bug fix, a docs update, and a dependency bump are
separate commits even within the same request.

## Commit attribution (critical)

All commits must credit the repository owner only (**PHENOMVALENCE** / Phenom Valence). Never add
`Co-authored-by`, `Co-Authored-By`, or any AI/agent attribution trailer to commit messages.

## Content rules (critical)

This project ports a real institution's public site. The same claims-safety rules that govern the
PHP source apply here:

- Port copy faithfully from the corresponding page in `origina` — do not invent, embellish, or
  "improve" claims, statistics, credentials, or product details.
- Never write "clinically proven," "TBS/TMDA/TFDA approved," "patented," "FDA approved," etc.
  unless the source PHP page already states it with that exact status.
- `™` denotes trademark, not patent.
- Photography alt text and captions live in `src/lib/content/images.ts` — keep them accurate.

## Validation (run before every commit)

```bash
npm run lint
npm run build
```

Fix real errors and warnings; do not suppress them. Do not commit code that fails either.

## Documentation policy

Keep these current when they change (same commit or immediately following `docs:` commit):

| File | Purpose |
|---|---|
| `docs/PROGRESS.md` | Session log, PR history, current status table |
| `docs/ROADMAP.md` | Phased plan, checkboxes for remaining work |
| `docs/ARCHITECTURE.md` | Stack, routes, design system, components, database |
| `docs/DESIGN.md` | Design standard: brand layers, type scale, components, rationale |
| `docs/SETUP.md` | Env vars, migrations, admin, deployment checklist |
| `README.md` | Quick status, scripts, links to docs |

## Pull requests

1. Push feature branch to origin.
2. Check for an existing open PR from the same branch; update it rather than opening a duplicate.
3. PR body: Summary, what changed, validation results (lint/build), test plan.
4. Never merge or approve the PR yourself.

## Prohibited actions

Never merge/approve PRs, push directly to `main`, force-push, delete branches, rewrite published
history, expose secrets/credentials/env values, or change hosting/deployment/DNS configuration
without explicit instruction.
