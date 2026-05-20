---
name: codex-handoff-writer
description: Write concise Proustian Codex handoffs, session logs, and next-action notes that preserve project continuity without modifying public content.
---

# Codex Handoff Writer

Use this skill when ending a thread, summarizing work, or preparing the next Codex prompt.

## Purpose

Handoffs keep continuity across sessions. They should record facts, decisions, constraints, and next actions without becoming essays.

## Workflow

1. State current branch and dirty state when relevant.
2. List files changed.
3. List files intentionally untouched.
4. Record decisions and unresolved questions.
5. Write the next prompt in executable form.

## Output Shape

- Current state
- Completed work
- Files changed
- Files untouched
- Open questions
- Next prompt

## Rules

- Do not invent completion.
- Do not hide failed checks.
- Do not touch `content/` unless the task explicitly allows it.
- Do not commit or push unless explicitly requested.
