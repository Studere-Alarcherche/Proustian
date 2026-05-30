# AGENTS.md｜Proustian Codex Operating Harness

Canonical Codex operating rules for the Proustian 2.0 Obsidian + Quartz course-garden.

This repository is not a blog, not a generic syllabus, and not a file archive. It is a reader-facing public reading garden built from a private Obsidian working layer.

## Purpose

This file defines how Codex should operate inside the Proustian repository.
Codex must read and follow this file before making changes.
Proustian is a long-term Obsidian + Quartz + Codex reading garden centered on Proust / In Search of Lost Time.
Codex is a structural executor.
Codex is not the intellectual author.
Codex must not decide the project soul.

## Repository Shape

- Repository root: `Proustian/`
- Obsidian opens: `Proustian/content/`
- Quartz publishes from: `Proustian/content/`
- Codex works from the repository root: `Proustian/`
- Canonical Codex instruction file: `AGENTS.md` at repository root.
- Lightweight Obsidian-facing pointer: `content/System/Codex-Operating-Rules.md`

## Runtime Context

Repository root:
`/Users/apple/Documents/Proustian`

Quartz homepage:
`content/index.md`

Obsidian vault entry:
`Proustian/content`

Codex should operate from repo root:
`Proustian/`

## Current Architecture

- Quartz archive and public Markdown live under `content/`.
- Future Web App shell lives under `app/`.
- Repo-local Codex skills live under `.codex/skills/`.
- Human-readable skill documentation lives under `skills/`.
- `PROJECT-MEMORY.md` stores stable project identity and architecture.
- `THREAD-TEMPLATE.md` controls bounded Codex tasks.
- Root `BUILD-LOG.md` is the repository infrastructure log, distinct from `content/System/Build-Log.md`.
- Root `harness/` is the durable project context and operating protocol layer for Codex work.

## Harness Startup Protocol

Every Codex session must restore state from repository files before editing.

Read these files first when the task touches project structure, public exposure, language materials, Codex workflow, or any durable project rule:

1. `harness/README.md`
2. `harness/harness-state.json`
3. `harness/project-memory.md`
4. `harness/decisions.md`
5. The relevant contract under `harness/contracts/`
6. The relevant protocol under `harness/protocols/`

Default contracts:

- Use `harness/contracts/current-contract.md` for ordinary bounded repo work.
- Use `harness/contracts/website-contract.md` for public Quartz exposure, navigation, homepage, or public content work.
- Use `harness/contracts/language-contract.md` for Language Training work.
- Use `harness/contracts/textbook-contract.md` for textbook or teaching-material work.
- Use `harness/contracts/twin-contract.md` before any digital-twin work.
- Use `harness/contracts/codex-contract.md` for Codex workflow, automation, or operating-rule changes.

Before editing, Codex must summarize:

- current goal
- current contract
- blockers or dirty-state risks
- last relevant verification
- next smallest action

Do not rely on chat memory alone when repository files can restore state.

## Current Route

Path A+ / Path A = index-first / open-root / flat-root / early atlas visibility.

Use flat-file / block-first / packet-based organization for public-facing course pages. Keep the structure open for now.

Do not create a folder-first structure.
Do not create a heavy folder hierarchy.
Do not create nested folders for secondary concepts.
Do not lock secondary concepts into folders.
Do not restructure the whole repo.

## Non-Negotiable Rules

- The Quartz homepage must remain `content/index.md`.
- The filename must be lowercase: `index.md`.
- Do not create `Index.md`.
- Do not create `INDEX.md`.
- Do not create a repo-root `index.md`.
- Do not rename `content/index.md`.
- Do not delete existing content unless explicitly asked.
- Do not rename old files unless necessary and explicitly justified.
- Do not introduce large HTML blocks.
- Do not use inline CSS.
- Do not introduce a folder hierarchy for public course material.

## Public Site Principles

- Proust is the center.
- Deleuze is a method lens, not a top-level topic.
- Deleuze may be used as a method lens, especially through signs, but Deleuze must not replace Proust as the center.
- The project must not collapse into a signs-only system.
- French is a language precision layer, not a separate course unit.
- Quartz is the public reading garden.
- Obsidian is the private thinking and building layer.
- The site is reader-facing, not student-facing.
- Use reader / visitor / fellow reader / reading path language.
- Avoid student / teacher / classroom / instructor language in public-facing files.
- Public-facing course pages should be in English.
- Internal planning notes may remain in Chinese.

## Content Rules

- Keep Markdown-first.
- Preserve Obsidian wiki links.
- Prefer flat Markdown files under `content/` for public course pages.
- Secondary concepts should be wiki links, not folders.
- Do not rewrite core theoretical claims without approval.
- Do not decide the intellectual thesis.
- Do not turn drafts into polished essays unless asked.
- Do not delete files without approval.

## Proustian Digestion System

- Daily is the RAW Capture Surface.
- Daily Log is RAW self-written material, not a structured journal, productivity dashboard, task sheet, or template-driven note.
- A Daily note may contain fragments, reading reactions, questions, passage references, language observations, project thoughts, free paragraphs, unfinished claims, links, and random associations.
- Daily notes require no fields, mandatory sections, KPI, completion metric, training checklist, or productivity frame.
- Never rewrite, sanitize, delete, or flatten Raw Daily Log text.
- AI/Codex works in the Digest Layer: extraction, compression, clustering, routing, and archive judgment.
- Human review decides whether digested material is accepted, revised, deleted, held, or fixed into another project surface.
- The workflow is:
  - Raw Daily Log -> AI Digest -> Optional Fixation
- Daily remains the RAW layer.
- AI Digest is the organization layer.
- Structure appears after heat, not before it.
- No folder-centered knowledge structure.
- RAW first. Structure later. Judgment remains human.
- Digital paper first. Judgment later. Structure after heat.
- Website / Quartz output is downstream of digested material.

## Current Public Areas

The current public and working structure is area-based inside `content/`. Do not assume older root-level entry files still exist unless verified in the repository.

- `content/index.md`
- `content/Proustian/`
- `content/Language-Training/`
- `content/Essays/`
- `content/Daily/`
- `content/System/`
- `content/99_Archive/`

## Keep But Do Not Treat As Public-First

These areas may contain useful working material, older structures, essays, or private planning. Do not delete, move, or promote them without explicit approval:

- `content/00-HQ/`
- `content/01-Atlas/`
- `content/02-Course/`
- `content/03-Modules/`
- `content/04-Readings/`
- `content/05-Constellations/`
- `content/06-Logs/`
- `content/07-Aesthetic/`
- `content/90-Essays/`
- `content/99-Archive/`

Current observed areas include:

- `content/Proustian/`
- `content/Language-Training/`
- `content/Essays/`
- `content/Daily/`
- `content/System/`
- `content/99_Archive/`

## Codex Role

Codex is a structural organizer.
Codex is an implementation worker, not the intellectual authority.
Obsidian judgment remains human; Codex prepares structures, drafts, and handoffs.

Codex may:
- audit files
- create missing flat scaffold files under `content/`
- normalize simple frontmatter
- update links
- detect duplicate or wrong index files
- suggest archive candidates
- run build checks
- update Control Center status when requested
- update Build Log when requested
- produce handoff notes
- propose larger changes without executing them
- lightly adjust Quartz config and custom.scss when explicitly asked

Codex must not:
- decide the intellectual thesis
- create a heavy folder system
- rewrite the course soul
- delete files
- turn drafts into polished essays unless asked
- change deployment settings unless explicitly requested or clearly safe
- create `Projects.md`
- create a Projects module inside `content/`
- create `content/Projects/`
- turn Control Center into a Codex dashboard
- convert the site into a generic blog, productivity dashboard, backend panel, or project management system
- rewrite the visual system unless explicitly requested
- introduce large React components, large HTML blocks, or heavy inline styles into Markdown pages unless explicitly requested
- perform commit, push, delete, mass rename, or large structural moves without explicit permission
- treat Open Design as the intellectual decision-maker; Open Design may audit visual form only

## Work Requiring Explicit Permission

Codex must ask before:

- Creating new directories.
- Moving files.
- Deleting files.
- Renaming major files.
- Editing package or build configuration.
- Introducing new dependencies.
- Changing the homepage visual system.
- Creating new system modules.
- Committing or pushing.

## Verification Habits

Before finishing structural work, Codex should check:

- `content/index.md` still exists.
- No `Index.md`, `INDEX.md`, or repo-root `index.md` was created.
- No new folders were created unless explicitly requested.
- Homepage wiki links resolve where possible.
- Public-facing files remain English.
- Public-facing files avoid student / teacher / classroom / instructor language.
- Quartz build passes, or the exact build error is reported.

After any site/content change, run:
`npm run build`

For repo-only operating-rule changes that do not affect Quartz input, layout, config, public content, or build tooling, do not run `npm run build` by default. Instead, validate the changed files directly and report why the Quartz build was not necessary.

If build fails:

1. Report the failure.
2. If the failure is clearly caused by the current patch, attempt the smallest fix.
3. Rerun `npm run build`.
4. If the cause is unclear, stop and report.

Do not declare completion if verification fails.

## Completion Report

Every Codex task must end with:

- Changed files
- Verification result
- Risks / unresolved issues
- Next smallest action

## Harness Wrap-Up Protocol

At wrap-up, Codex must update Harness files when the task changes durable project state:

- Update `harness/harness-state.json` after each completed task with current status, date, and next smallest action when applicable.
- Update `harness/decisions.md` only when a stable decision changed or was added.
- Update `harness/project-memory.md` only for durable project memory, not transient task notes.
- Update `harness/state-boards/Build-Verification-State.md` when build validation runs, or when a build is intentionally skipped for a repo-only change.
- Report what was verified and what was not verified.

Harness is backstage. Do not expose `harness/` through Quartz navigation or public pages.

## Operating Principle

Small patches only.
Preserve reading, training, writing, and judgment as the core.
Do not expand structure unless explicitly requested.
When uncertain, preserve existing structure and report the uncertainty.
