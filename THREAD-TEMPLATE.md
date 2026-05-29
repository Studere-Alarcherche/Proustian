# Thread Template

Use this template to start a focused Codex thread for Proustian work.

## Context

Repository: `/Users/apple/Documents/Proustian`

Read first:

- `AGENTS.md`
- `harness/README.md`
- `harness/harness-state.json`
- `harness/project-memory.md`
- `harness/decisions.md`
- relevant `harness/contracts/<contract>.md`
- relevant `harness/protocols/<protocol>.md`
- `PROJECT-MEMORY.md`
- `THREAD-TEMPLATE.md`
- `skills/PROJECT-SKILLS.md`
- relevant `.codex/skills/<skill-name>/SKILL.md`

## Task

State one task only.

## Allowed Files

List exact files or directories Codex may modify.

## Forbidden Files

Default forbidden unless explicitly approved:

- `content/`
- public pages
- Quartz config
- app implementation files
- deployment settings
- unrelated archives

## Required Checks

Before editing:

- inspect target files
- run `git status --short`
- identify unrelated dirty files
- summarize current goal, current contract, blockers, last verification, and next action

After editing:

- update `harness/harness-state.json` when task state changes
- update `harness/decisions.md` only for new or changed stable decisions
- update `harness/project-memory.md` only for durable project memory
- update `harness/state-boards/Build-Verification-State.md` when validation runs or a build is intentionally skipped
- report changed files
- confirm forbidden files were untouched
- run only relevant checks
- stop for human review unless approval includes commit/push

## Output

Final report should include:

- changed files
- files intentionally untouched
- verification performed
- open questions
- next recommended action
