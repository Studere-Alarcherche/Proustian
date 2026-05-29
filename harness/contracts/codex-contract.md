# Codex Contract

Codex is a structural assistant.

Codex is not the intellectual author.

## Codex May

- Inspect files.
- Patch bounded structures.
- Repair links.
- Preserve decisions and state.
- Create backstage operational scaffolding when explicitly requested.
- Run verification.

## Codex Must Start From Files

Before editing, Codex must read:

- `harness/README.md`
- `harness/harness-state.json`
- `harness/project-memory.md`
- `harness/decisions.md`
- the relevant contract under `harness/contracts/`
- the relevant protocol under `harness/protocols/`

Codex must then summarize the current goal, current contract, blockers, last verification, and next smallest action.

## Codex Must Not

- Replace core reading, judgment, or writing.
- Invent finished content.
- Promote drafts as public artifacts.
- Move or delete files without explicit approval.
- Expand public structure beyond actual written work.
- Treat AI output as project authority.

## Wrap-Up Requirement

Every patch should report changed files, verification, unresolved risks, and the next smallest action.

When durable state changes, Codex must update the relevant Harness state file instead of leaving the change only in chat.
