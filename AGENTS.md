# ORIGINA-NEXT — Agent Working Instructions

## Project overview

`origina-next` is the Next.js rebuild of the ORIGINA institutional site, replacing the PHP+SQLite
implementation at the sibling repo `origina` (https://github.com/PHENOMVALENCE/origina). It is a
production migration: content and claims must be ported faithfully from the source PHP site, not
invented. See `docs/ARCHITECTURE.md` for the technical design and `docs/ROADMAP.md` for what's
built vs. outstanding.

## Repository workflow

- **Protected production branch**: `main`
- **Agent working branch**: `codex/master-changes`
- All implementation work (features, fixes, content ports, refactors) happens on
  `codex/master-changes`, in small, individually-reviewable commits, pushed regularly.
- Open a pull request from `codex/master-changes` to `main` to bring work to production.
  Do not merge your own pull requests — merging is a human decision.
- Never force-push, never rewrite published history on either branch.

## Before starting work

1. Confirm you're in the `origina-next` directory (not the sibling `origina` PHP repo).
2. `git fetch origin --prune`, then check out or fast-forward `codex/master-changes`.
3. Read `docs/PROGRESS.md` for current state before starting new work, so status stays accurate.

## Commit style

Conventional Commits: `type: short description`, lowercase, imperative, no trailing period.
Allowed types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`, `perf`, `build`, `ci`.

One logical change per commit. A page port, a bug fix, a docs update, and a dependency bump are
separate commits even within the same request. Do not bundle unrelated changes.

## Commit attribution (critical)

All commits must credit the repository owner only (**PHENOMVALENCE** / Phenom Valence). Never add
`Co-authored-by`, `Co-Authored-By`, or any AI/agent attribution trailer to commit messages. Do not
append "Generated with …" footers.

## Content rules (critical)

This project ports a real institution's public site. The same claims-safety rules that govern the
PHP source apply here:

- Port copy faithfully from the corresponding page in `origina` — do not invent, embellish, or
  "improve" claims, statistics, credentials, or product details.
- Never write "clinically proven," "TBS/TMDA/TFDA approved," "patented," "FDA approved," etc.
  unless the source PHP page already states it with that exact status.
- `™` denotes trademark, not patent.
- If a source page's content isn't ported yet, don't stub it with placeholder/lorem content on a
  live route — either don't create the route yet, or mark it clearly as in-progress.

## Validation (run before every commit)

```bash
npm run lint
npm run build
```

Fix real errors and warnings; do not suppress them to force a green run. `npm run build` also
type-checks (TypeScript is strict via `next build`). Do not commit code that fails either.

## Documentation policy

Keep these current as part of the same commit (or an immediately following `docs:` commit) when
they change:

- `docs/PROGRESS.md` — what's done, what's in progress, updated every session
- `docs/ROADMAP.md` — what's left, phased
- `docs/ARCHITECTURE.md` — technical decisions (stack, design tokens, content modeling, routing)
- `README.md` — setup/run instructions, kept accurate

## Pull requests

1. Push to `codex/master-changes`.
2. Check for an existing open PR from `codex/master-changes` to `main`; update it (new commits
   land automatically) rather than opening a duplicate.
3. PR body: Summary, what changed, validation results (lint/build), and any follow-ups.
4. Never merge or approve the PR yourself.

## Prohibited actions

Never merge/approve PRs, push directly to `main`, force-push, delete branches, rewrite published
history, expose secrets/credentials/env values, or change hosting/deployment/DNS configuration
without explicit instruction. Stop and ask when uncertain about something irreversible — but do
not stop to ask permission for ordinary implementation work (building pages, writing components,
committing, pushing to `codex/master-changes`) once the direction is established.
