---
name: quartz-markdown-homepage
description: Guide Markdown-first Proustian Quartz homepage work. Use when creating, editing, or reviewing content/index.md or homepage-specific SCSS so the homepage remains a threshold, not a dashboard, without raw HTML, React, or app-like components.
---

# Quartz Markdown Homepage

Use this skill for Proustian Quartz homepage tasks.

## Purpose

Keep the homepage Markdown-first and structurally light. The homepage is a threshold into the reading garden, not a web app, dashboard, syllabus, or marketing landing page.

## Default Edit Boundary

Only edit these files unless the user explicitly allows more:

- `content/index.md`
- `quartz/styles/custom.scss`

## Workflow

1. Confirm `content/index.md` exists and remains lowercase.
2. Read the current homepage before changing it.
3. Preserve Obsidian wiki links and Markdown structure.
4. Make the smallest homepage change that satisfies the task.
5. Put visual behavior in SCSS, not inline Markdown.
6. Verify no wrong index file was created.

## Rules

- Do not insert raw HTML blocks into `content/index.md`.
- Do not insert React or app components into Markdown.
- Do not create `Index.md`, `INDEX.md`, or repo-root `index.md`.
- Do not create a folder-first homepage system.
- Do not convert the homepage into cards, widgets, metrics, dashboards, or generic AI panels.
- Do not move homepage structure out of `content/index.md` unless explicitly requested.

## Output Shape

- Homepage boundary
- Files touched or proposed
- Markdown changes
- SCSS changes
- Verification result
- Remaining visual risks
