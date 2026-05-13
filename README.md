# Proustian

Proustian is an Obsidian + Quartz reading repository for Proustian 2.0.

This repository is not a normal blog, a raw source dump, a plugin playground, or a Zotero-centered workflow. It supports a reader-facing public course garden while preserving Obsidian as the private layer for judgment, reading, training, and writing.

## Current Workflow

The active workflow is:

Local Source Repository -> NotebookLM U1-U6 -> Obsidian Reading Repository -> GitHub / Quartz Public Course Garden -> WeChat Public Writing

Quartz publishes from `content/`. Obsidian should open `content/` as the vault. Codex works from the repository root and handles structural labor only: cleanup, links, frontmatter, Markdown formatting, Quartz structure, repo hygiene, and safe removal of obsolete generated files.

## Active Entry Files

- `content/index.md`
- `content/Proustian-2.0.md`
- `content/Reading-Map.md`
- `content/Question-Gradient.md`
- `content/Passage-Cards.md`
- `content/Build-Log.md`
- `content/U1-U6-Repository-Index.md`

## Maintenance Rules

- Keep `content/index.md` lowercase and do not create root `index.md`.
- Keep public course pages flat under `content/` unless Quartz tooling requires otherwise.
- Do not introduce a folder-centered knowledge system.
- Do not add plugin dependencies for publishing automation.
- Do not rewrite core theoretical claims during structural cleanup.
- Archive uncertain intellectual material instead of deleting it.
- Delete only generated junk, cache, build output, dead automation, or obsolete plugin residue.

## Build

Install dependencies and build Quartz:

```bash
npm ci
npm run build
```
