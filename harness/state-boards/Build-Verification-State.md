# Build Verification State

This board tracks verification runs for project-level patches.

| Date | Patch | Command | Result | Notes |
|---|---|---|---|---|
| 2026-05-29 | root project-level Harness bootstrap | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files. |
| 2026-05-29 | integrate Harness into repo operating rules | not run | skipped | Repo-only Markdown/JSON operating-rule changes; no Quartz input, layout, config, public content, CSS, or build tooling changed. |
| 2026-05-29 | clean stale Quartz Explorer whitelist strings | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files. |
| 2026-05-29 | widen homepage and surface Backlinks / Graph View | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files; built homepage includes right-rail Backlinks and Graph View. |
| 2026-05-29 | human-first language pedagogy contracts and templates | not run | skipped | Harness-only Markdown/JSON/template changes; no Quartz input, layout, config, public content, CSS, or build tooling changed. |
| 2026-05-30 | refactor EN-CN Chapter 001 into human-first loop | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files. |
| 2026-05-30 | batch refactor active EN-CN chapters and record Comparative Literary Induction | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files. |
| 2026-05-30 | ordinary reading-page Dutch archive cleanup | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files; local Atlas preview confirmed left Explorer hidden on `/Proustian/U4-Visuality-Attention` and Dark mode control present. |
| 2026-05-30 | tighten EN-CN Chapter 001-004 training drills | `npm run build` | passed | Quartz processed 34 Markdown files and emitted 125 files. |
| 2026-05-30 | align Obsidian Language Training packet and public site exposure | `npm run build` | passed | Quartz processed 45 Markdown files and emitted 136 files; generated LTF outline, LTF Chapters 001-005, EN-CN Part Map, and EN-CN Chapters 001-004 while keeping Comparative Induction and EN-CN studio/template/editorial/protocol pages hidden. |
