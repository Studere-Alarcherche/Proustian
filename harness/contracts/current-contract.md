# Current Contract

This contract governs ordinary Codex work in the Proustian repository.

## Scope

- Make bounded changes.
- Restore state from files before editing.
- Preserve public / backstage boundaries.
- Keep Proust / Recherche as the mother star.

## Required Before Patching

1. Read the current task.
2. Inspect relevant files.
3. Read `harness/README.md`.
4. Check `harness/harness-state.json`, `harness/project-memory.md`, and `harness/decisions.md` when project rules may matter.
5. Read the relevant contract and protocol under `harness/`.
6. Identify whether the change touches public content, backstage content, or infrastructure.
7. Summarize current goal, current contract, blockers, last verification, and next smallest action.
8. State the smallest intended patch.

## Non-Scope

- No broad redesign.
- No public expansion for unwritten work.
- No file moves unless explicitly approved.
- No intellectual rewriting unless explicitly requested.

## Required Wrap-Up

- Update `harness/harness-state.json` when task state or next action changes.
- Update `harness/decisions.md` only for durable stable decisions.
- Update `harness/project-memory.md` only for durable project memory.
- Update `harness/state-boards/Build-Verification-State.md` when build validation runs or is intentionally skipped.
- Report what was verified and what was not.
