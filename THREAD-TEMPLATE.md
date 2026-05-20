# Thread Template

Use this template to start a focused Codex thread for Proustian work.

## Context

Repository: `/Users/apple/Documents/Proustian`

Read first:

- `AGENTS.md`
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

After editing:

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
