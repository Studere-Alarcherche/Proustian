# Next Action Log — 0.3 — 2026-05-17

## Exact AGENTS.md Section Added

```md
## Proustian Digestion System

- Daily Log is RAW self-written material.
- Never rewrite, sanitize, delete, or flatten Raw Daily Log text.
- AI/Codex may only create extraction drafts, suggested backlinks, candidate notes, review drafts, and current-state patches.
- Human review decides whether extracted material is accepted, revised, deleted, or held.
- The system uses a dual track:
  - Plan Track: Quarter -> Month -> Week -> Daily Next Pull
  - Record Track: Raw Daily Log -> AI Extraction Draft -> Human Review -> Weekly Digestion
- The two tracks converge in Weekly Review and Current-State.
- Structure is controlled by templates, metadata, tags, backlinks, packet files, and review cycles, not by folder hierarchy.
- No folder-centered knowledge structure.
- RAW first. Structure later. Judgment remains human.
- Website / Quartz output is downstream of digested material.
```

## Files Changed

- `AGENTS.md`
- `NEXT-ACTION-LOG-0.3-2026-05-17.md`

No templates, skills, `.obsidian`, `content/.obsidian`, `.gitignore`, Blog, Essays, maps, or system folders were modified.

## Current Git Status Summary

```text
M AGENTS.md
D content/.LTF-Chapter-001-Cognates-and-Reading-Confidence.md.swp
D content/.OBS-Language-Training-Placement.md.swp
D content/99_Archive/92.baiduyun.uploading.cfg
D content/99_Archive/Final/Cognitive Architect最终流程 V.9.0.md.baiduyun.uploading.cfg
D content/99_Archive/Final/MVP.1.1.md.baiduyun.uploading.cfg
D content/99_Archive/Final/MVP1.0.md.baiduyun.uploading.cfg
D content/99_Archive/Final/NoteBookLM使用方案.md.baiduyun.uploading.cfg
D content/99_Archive/Final/Study Guide  PROMPT.md.baiduyun.uploading.cfg
M package.json
?? CLEANUP-LOG-2026-05-17.md
?? NEXT-ACTION-LOG-2026-05-17.md
?? NEXT-ACTION-LOG-0.3-2026-05-17.md
```

## Unresolved Issue

`content/.obsidian/workspace.json` is tracked and requires a later explicit decision. Do not handle it by a casual `.gitignore` edit; deciding whether to keep it tracked, untrack it with `git rm --cached`, or preserve it as canonical vault state belongs in a separate approved pass.

## Recommended Next Action 0.4

Create the minimal template pack only:

- `TPL-Daily-Log.md`
- `TPL-Weekly-Plan.md`
- `TPL-Weekly-Review.md`

Do not handle `content/.obsidian/workspace.json` until Next Action 0.5.
