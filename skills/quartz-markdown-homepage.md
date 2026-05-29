# Quartz Markdown Homepage

Markdown-first operating rule for Proustian Quartz homepage work.

The homepage is a threshold into the reading garden, not a dashboard, app shell, syllabus, or marketing landing page.

## Default Edit Boundary

Only edit these files unless explicitly allowed:

- `content/index.md`
- `quartz/styles/custom.scss`

## Rules

- Keep the Quartz homepage at `content/index.md`.
- Keep the filename lowercase.
- Do not create `Index.md`, `INDEX.md`, or repo-root `index.md`.
- Do not insert raw HTML blocks.
- Do not insert React or app components into Markdown.
- Do not create app-like widgets, dashboards, metrics panels, or generic AI cards.
- Put visual behavior in SCSS, not inline CSS.
- Preserve Obsidian wiki links.

## Verification

Before finishing homepage work, check:

- `content/index.md` exists.
- No wrong index files were created.
- Homepage links still resolve where practical.
- Quartz build passes, or the exact build error is reported.
