# Git Hygiene Report 1.1｜2026-05-17

## Scope

This report inspects only the tracked Obsidian workspace issue.

No files were modified, deleted, untracked, or moved.

## 1. Root Workspace Tracking

`root .obsidian/workspace.json` is tracked.

Evidence:

```text
git ls-files .obsidian/workspace.json content/.obsidian/workspace.json
.obsidian/workspace.json
content/.obsidian/workspace.json
```

Current status: not modified in `git status`.

## 2. Content Workspace Tracking

`content/.obsidian/workspace.json` is tracked.

Current status: modified.

Diff metadata only:

```text
content/.obsidian/workspace.json | 10 +++++-----
```

## 3. Ignore Status

### `.obsidian/workspace.json`

Ignored by `.gitignore`:

```text
.gitignore:18:.obsidian/workspace.json .obsidian/workspace.json
```

Because the file is already tracked, the ignore rule does not prevent future modifications from appearing in `git status`.

### `content/.obsidian/workspace.json`

Not currently ignored by `.gitignore`.

The existing line:

```text
"content/.obsidian/"
```

does not match as intended because the quotes are treated as literal pattern characters by Git.

## 4. Why `content/.obsidian/workspace.json` Appears In Git Status

It appears because:

1. `content/.obsidian/workspace.json` is already tracked.
2. It has local modifications.
3. `.gitignore` cannot hide modifications to tracked files.
4. The current quoted `content/.obsidian/` ignore pattern does not correctly ignore the path anyway.

## 5. Option A: Keep Tracked And Accept Workspace Drift

Keep both workspace files tracked.

Implication:

- Obsidian UI layout, open panes, and local workspace state may continue appearing as Git changes.
- This preserves the current tracked state and avoids any Git index changes.
- It keeps the repository noisy during normal Obsidian use.

Risk level: medium.

Reason: low implementation risk, but high long-term workflow noise and possible accidental commits of local UI state.

## 6. Option B: Stop Tracking Workspace Files And Ignore Correctly

Remove workspace files from Git tracking while leaving the local files on disk.

Recommended exact command sequence, not executed:

```bash
git rm --cached .obsidian/workspace.json content/.obsidian/workspace.json
perl -0pi -e 's/^"content\\/\\.obsidian\\/"\\s*\\n//m' .gitignore
printf 'content/.obsidian/workspace.json\ncontent/.obsidian/workspace-mobile.json\n' >> .gitignore
git status --short --untracked-files=all
```

Notes:

- `git rm --cached` removes files from Git tracking only; it does not delete local files.
- The quoted `content/.obsidian/` pattern should be removed or replaced because it does not work as intended.
- Prefer ignoring only workspace files under `content/.obsidian/`, not the whole folder, until plugin/config tracking policy is decided.

Risk level: low to medium.

Reason: technically standard for Obsidian workspace files, but it changes Git tracking policy and should be approved explicitly.

## 7. Recommended Next Action

Use Option B in a dedicated approved pass:

1. Untrack only workspace files with `git rm --cached`.
2. Replace the broken quoted ignore rule with explicit workspace ignore patterns.
3. Leave other `.obsidian` configuration files untouched.
4. Recheck `git status`.

Do not mix this with Daily Log, Weekly Review, Current-State, or Quartz homepage work.
