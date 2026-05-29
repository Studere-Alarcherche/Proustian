# Understand Anything

First-pass repo and context reading for Proustian tasks.

Use before proposing or editing when Codex needs to inspect structure, source-of-truth boundaries, dirty state, target files, and project constraints.

## Workflow

1. Confirm the current working directory and repository root.
2. Read relevant operating rules: `AGENTS.md`, `PROJECT-MEMORY.md`, `THREAD-TEMPLATE.md`, or target-area notes.
3. Inspect source-of-truth files for the task.
4. Check dirty state with `git status --short --untracked-files=all`.
5. Identify route, publication, and ownership boundaries.
6. Separate discovered facts from assumptions.
7. Report the smallest viable action surface.

## Rules

- Read-only orientation only.
- Do not edit, scaffold, or create folders during this pass.
- Do not infer older structure when the repository can be checked.
- Keep public Quartz pages, private Obsidian notes, and repo infrastructure distinct.
