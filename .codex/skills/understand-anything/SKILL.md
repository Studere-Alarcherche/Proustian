---
name: understand-anything
description: First-pass repo and context reading for Proustian tasks. Use before proposing or editing when Codex needs to inspect structure, source-of-truth boundaries, dirty state, target files, and project constraints without mutating files.
---

# Understand Anything

Use this skill as the first pass for Proustian repo work when the task needs orientation before implementation.

## Purpose

Understand the current system from the repository itself before proposing, patching, or judging. This is a read-only skill.

## Workflow

1. Confirm the current working directory and repository root.
2. Read the relevant operating rules first: `AGENTS.md`, `PROJECT-MEMORY.md`, `THREAD-TEMPLATE.md`, or the target area's local notes when present.
3. Inspect the likely source-of-truth files for the task.
4. Check dirty state with `git status --short --untracked-files=all`.
5. Identify route, publication, or ownership boundaries before naming files to edit.
6. Separate discovered facts from assumptions.
7. Report the smallest viable action surface.

## Output Shape

- Current surface
- Source of truth
- Relevant files
- Dirty-state risks
- Constraints
- Suggested next action

## Rules

- Do not edit files while using this skill.
- Do not create folders or scaffold files during orientation.
- Do not infer older structure when the repository can be checked.
- Do not treat public Quartz pages, private Obsidian notes, and repo infrastructure as interchangeable.
- Do not proceed to implementation until the edit boundary is clear.
