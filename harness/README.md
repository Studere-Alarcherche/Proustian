# Proustian Project Harness

This root Harness preserves project-level context for the Proustian repository.
It is backstage infrastructure, not public website content.

## Purpose

- Restore project state from files before editing.
- Keep public exposure bounded by finished artifacts.
- Preserve durable decisions, contracts, protocols, and state boards.
- Prevent AI-generated structure from outrunning written work.

## Stable Decisions

- Recherche / Proust is the mother star.
- Proustian is not expanding now.
- The current core is language training and writing thickening.
- The website shows only finished or stable artifacts.
- System and 99_Archive are backstage.
- Maps is replaced by Constellations.
- The language layer has three textbook folders: Learn to Read Proust, EN-CN Recomposition, Comparative Literary Induction.
- Learn to Read Proust is the French-reading developmental track; French Precision is its function, not its replacement name.
- Textbook and translation materials require Harness before publication.
- File over App: durable files are the project asset.
- AI is a post-check and structural assistant, not a replacement for core reading, judgment, or writing.
- Public pages must not make the project look more complete than it is.

## Start Here

Before patching, read:

1. `harness/harness-state.json`
2. `harness/project-memory.md`
3. `harness/decisions.md`
4. `harness/contracts/current-contract.md`
5. The protocol relevant to the task.

## Operating Requirement

Harness is active context, not a passive archive.

Every Codex session should use Harness to identify:

- current goal
- current contract
- public / backstage boundary
- blockers or dirty-state risks
- last relevant verification
- next smallest action

At wrap-up, update Harness only when state actually changes:

- `harness/harness-state.json` for current task state and next actions
- `harness/decisions.md` for stable decisions
- `harness/project-memory.md` for durable project memory
- `harness/state-boards/Build-Verification-State.md` for build validation or an intentional build skip

Do not expose Harness publicly.
