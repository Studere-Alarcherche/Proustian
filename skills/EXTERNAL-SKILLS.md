# External Codex Skills

Infrastructure note for external Codex skills used with the Proustian project.

This file documents local skill installation state only. It does not define public course content.

## Installed / Available

| Skill | Priority | Local path | Role in Proustian | Status |
|---|---:|---|---|---|
| Superpowers | P0 | `/Users/apple/.codex/superpowers` and `/Users/apple/.agents/skills/superpowers -> /Users/apple/.codex/superpowers/skills` | General workflow, verification, planning, debugging, and skill-writing patterns for Codex work. | Installed and symlinked. |
| frontend-design | P0 | `/Users/apple/.codex/skills/frontend-design` | Frontend design guidance for future Quartz or interface work when explicitly requested. | Installed; root `SKILL.md` present. |
| Skill Creator | P0 | `/Users/apple/.codex/skills/.system/skill-creator` | Built-in guidance for creating or revising Codex skills. | Bundled with Codex; no external install needed. |
| Find Skills equivalent | P0 | Built-in local discovery via bundled `skill-installer` and active Codex tool discovery | Skill discovery and installability checks. | Available as an equivalent; no standalone `find-skills` skill directory found. |
| ui-ux-pro-max-skill | P1 | `/Users/apple/.codex/skills/ui-ux-pro-max-skill` | Additional UI/UX review and design guidance for later interface work. | Repository cloned; no root `SKILL.md` found, so Codex skill loading needs verification. |

## Missing / Unverified

- No standalone `find-skills` skill directory was found under `/Users/apple/.codex/skills`, `/Users/apple/.codex/skills/.system`, or `/Users/apple/.agents/skills`.
- `ui-ux-pro-max-skill` cloned successfully, but the repository does not expose a root `SKILL.md` in its current layout.
- Pending / verify: GATACK / gstack style combined stacks.

## Restart

Restart Codex to pick up newly installed external skills and the Superpowers symlink.

## Loader Diagnosis

Active visible skills in this session:

- `skill-creator`: visible and usable from `/Users/apple/.codex/skills/.system/skill-creator`.
- `skill-installer`: visible and usable from `/Users/apple/.codex/skills/.system/skill-installer`.

Installed but not visible in the already-running active skill list:

- `frontend-design`: installed at `/Users/apple/.codex/skills/frontend-design`; root `SKILL.md` is present.
- Superpowers collection: installed at `/Users/apple/.codex/superpowers`; the collection symlink `/Users/apple/.agents/skills/superpowers -> /Users/apple/.codex/superpowers/skills` is correct, but the active Codex skill list did not load that nested collection directly.
- `ui-ux-pro-max-skill`: installed at `/Users/apple/.codex/skills/ui-ux-pro-max-skill`; no root `SKILL.md` is present.

Confirmed Codex skill layout from local inspection:

- One skill per directory under `/Users/apple/.codex/skills/<skill-name>`.
- Each loadable skill directory must contain a root `SKILL.md`.
- Optional UI metadata can live at `agents/openai.yaml`.
- The bundled `skill-installer` installs GitHub skill directories into `$CODEX_HOME/skills/<skill-name>`, defaulting to `/Users/apple/.codex/skills/<skill-name>`.
- The bundled installer does not provide a local-path install mode.

Registration actions taken:

- Ran the bundled GitHub installer route for `frontend-design`; it stopped with `Destination already exists: /Users/apple/.codex/skills/frontend-design`, confirming the destination path is the expected installer target.
- Registered Superpowers nested skills as individual symlinks under `/Users/apple/.codex/skills/`, each pointing back to the corresponding `/Users/apple/.codex/superpowers/skills/<skill-name>` directory with a root `SKILL.md`.

Superpowers skill symlinks now present under `/Users/apple/.codex/skills/`:

- `brainstorming`
- `dispatching-parallel-agents`
- `executing-plans`
- `finishing-a-development-branch`
- `receiving-code-review`
- `requesting-code-review`
- `subagent-driven-development`
- `systematic-debugging`
- `test-driven-development`
- `using-git-worktrees`
- `using-superpowers`
- `verification-before-completion`
- `writing-plans`
- `writing-skills`

Needs packaging:

- `ui-ux-pro-max-skill` is a multi-platform / Claude-style package with `skill.json` and nested `.claude/skills/*/SKILL.md`.
- The nested `ui-ux-pro-max` skill appears most relevant for UI/UX audit work.
- To load normally in Codex, it should be packaged as either a root `SKILL.md` wrapper or individual skill directories under `/Users/apple/.codex/skills/`.

Should wait:

- Do not package `ui-ux-pro-max-skill` until the desired wrapper strategy is chosen.
- Do not rely on `/Users/apple/.agents/skills/superpowers` as the only Superpowers registration path for Codex.

Restart status:

- Restart or start a fresh Codex session after this diagnosis so the active skill list can be regenerated from `/Users/apple/.codex/skills`.
