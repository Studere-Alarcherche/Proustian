---
type: current-state
status: active
draft: true
date: 2026-05-17
source: Current-State-Patch-Candidate-2026-05-17
---
# Current State｜2026-05-17

## Stable Judgment

- Proustian is now adopting a Raw-to-Digestion workflow: Raw Daily Log → AI Extraction Draft → Human Review → Weekly Digestion.
- Daily Log is RAW self-written material. AI may extract and suggest structure, but must not rewrite, sanitize, or flatten the original text.
- The system uses templates, metadata, tags, backlinks, review cycles, and packet files rather than folder-centered knowledge structure.

## Workflow Update

- Plan Track: Quarter → Month → Week → Daily Next Pull.
- Record Track: Raw Daily Log → AI Extraction Draft → Human Review → Weekly Review.
- The two tracks converge in Weekly Review and Current-State updates.

## Control Plane

- [[Digestion-System]]
- [[Daily-Index]]
- [[Weekly-Plan]]
- [[Weekly-Review]]
- [[Monthly-Review]]
- [[Quarterly-Review]]
- [[Question-Nodes]]
- [[Passage-Cards]]
- [[Reading-Map]]
- [[Source-Location-Index]]
- [[Build-Log]]

## Do-Not-Do

- Do not publish Raw Daily Logs.
- Do not let Codex update Current-State without a candidate patch and human review.
- Do not expand the system before the first real Weekly Review works.

## Current Next Pull

- Use [[00-CONTROL-DASHBOARD]] as the visible Obsidian entry point.

1. Review content/Current-State.md manually.
2. Run one more real Daily Log through the Raw → Extraction → Human Review loop.
3. Keep raw/daily-logs local and ignored unless explicitly decided otherwise.

## Pending Git Hygiene

- content/.obsidian/workspace.json remains modified and must be handled in a separate approved pass.
- raw/daily-logs is ignored by current .gitignore; keep it ignored for now.
