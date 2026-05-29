# PROJECT-SKILLS.md｜Proustian Skill Routing

Repo-local Codex skills for the Proustian project.

These skills live under `.codex/skills/`. They are also documented here for human review and manual use if Codex does not auto-load repo-local skills.

Codex should use skills only when relevant.
Do not invoke a full skill chain mechanically.
Use the smallest relevant skill.

## P0 Skills

### understand-anything

Path: `.codex/skills/understand-anything/SKILL.md`

Purpose: read context before acting on unclear, cross-file, or high-context tasks.

### quartz-markdown-homepage

Path: `.codex/skills/quartz-markdown-homepage/SKILL.md`

Purpose: protect Quartz conventions, homepage routing, and Markdown page structure.

### front-end-style-guard

Path: `.codex/skills/front-end-style-guard/SKILL.md`

Purpose: prevent dashboard drift, cheap buttoning, cramped surfaces, and non-Proustian UI.

### design-audit-reading-site

Path: `.codex/skills/design-audit-reading-site/SKILL.md`

Purpose: visual audit only. Open Design must not decide intellectual structure.

### textual-plate-builder

Path: `.codex/skills/textual-plate-builder/SKILL.md`

Role: build compact Proustian textual plates around passage pressure, signs, scene movement, and plate axes.

### trilingual-text-chamber-builder

Path: `.codex/skills/trilingual-text-chamber-builder/SKILL.md`

Role: organize French / English / Chinese passage chambers for close reading and language precision.

### theory-boundary-board-builder

Path: `.codex/skills/theory-boundary-board-builder/SKILL.md`

Role: keep theory lenses useful but bounded, returning analysis to Proust's text.

### quartz-page-publisher

Path: `.codex/skills/quartz-page-publisher/SKILL.md`

Role: prepare or audit Markdown for the Quartz archive garden without restructuring public content.

### codex-handoff-writer

Path: `.codex/skills/codex-handoff-writer/SKILL.md`

Purpose: produce a concise continuation note when next-session handoff is needed.

## Use Rule

When a task matches one of these skills, read its `SKILL.md` first. If it does not auto-load, use it manually as local project guidance.

Skills support execution.
Skills do not replace human judgment.
Do not use skills to expand structure unless explicitly requested.

For frontend work, use this order:

1. `understand-anything`
2. `quartz-markdown-homepage`
3. `front-end-style-guard`
4. `design-audit-reading-site`
5. `codex-handoff-writer` when handing off or closing work
