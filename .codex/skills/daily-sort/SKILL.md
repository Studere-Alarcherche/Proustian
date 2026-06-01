# Daily Sort Skill

## Purpose

Sort one Daily Inbox note without rewriting the user's raw text.

Daily is an all-inclusive Inbox, not a reading log. It may contain reading, tasks, images, anxiety, business observations, language training, dreams, fragments, or unfinished judgments.

## Input

A daily Markdown file under `content/Daily/`, for example:

```text
content/Daily/2026-06-01.md
```

## Output

Append one section at the bottom of the same file:

```md
---

## AI Sorting

### Signals
- ...

### Possible Canvas Items
- ...

### Actionable Items
- ...

### Possible Index Candidates
- ...

### Keep Raw / Do Not Promote
- ...
```

## Rules

- Append only. Do not edit, delete, sanitize, or reorder raw Daily text.
- Do not create new files by default.
- Do not create `Blocks/` by default.
- Do not create `Reviews/`.
- Do not promote material directly to `index.md`.
- If something is unstable but alive, mark it as a Canvas item.
- If something is actionable, mark it as an actionable item, but do not create a project board unless asked.
- If something may become stable, mark it as an Index candidate only.

## Sorting Categories

Use categories only when helpful. Do not force every line into a category.

- reading
- idea
- task
- image
- quote
- language
- writing
- business
- anxiety
- project
- random

## Final Check

Before finishing, confirm:

- raw Daily text was preserved;
- only an AI Sorting section was appended;
- no extra entity was created;
- Canvas candidates preserve tension rather than resolving it.
