# Cleanup Log — 2026-05-17

Cleanup pass: 0.1

## Deleted Files

- `content/.LTF-Chapter-001-Cognates-and-Reading-Confidence.md.swp`
- `content/.OBS-Language-Training-Placement.md.swp`
- `content/99_Archive/92.baiduyun.uploading.cfg`
- `content/99_Archive/Final/Cognitive Architect最终流程 V.9.0.md.baiduyun.uploading.cfg`
- `content/99_Archive/Final/MVP.1.1.md.baiduyun.uploading.cfg`
- `content/99_Archive/Final/MVP1.0.md.baiduyun.uploading.cfg`
- `content/99_Archive/Final/NoteBookLM使用方案.md.baiduyun.uploading.cfg`
- `content/99_Archive/Final/Study Guide  PROMPT.md.baiduyun.uploading.cfg`

## Files Not Found

None.

## Git Status Summary

Only the approved transient artifact deletions are present:

```text
D content/.LTF-Chapter-001-Cognates-and-Reading-Confidence.md.swp
D content/.OBS-Language-Training-Placement.md.swp
D content/99_Archive/92.baiduyun.uploading.cfg
D content/99_Archive/Final/Cognitive Architect最终流程 V.9.0.md.baiduyun.uploading.cfg
D content/99_Archive/Final/MVP.1.1.md.baiduyun.uploading.cfg
D content/99_Archive/Final/MVP1.0.md.baiduyun.uploading.cfg
D content/99_Archive/Final/NoteBookLM使用方案.md.baiduyun.uploading.cfg
D content/99_Archive/Final/Study Guide  PROMPT.md.baiduyun.uploading.cfg
?? CLEANUP-LOG-2026-05-17.md
```

## Deploy Script Inspection

Current `package.json` deploy script:

```text
npx quartz build && npx gh-pages -d public -b gh-pages -r https://github.com/Studere-Alarcherche/Studere-Knowledge-Base.git
```

Current `git remote -v`:

```text
origin	https://github.com/Studere-Alarcherche/Proustian.git (fetch)
origin	https://github.com/Studere-Alarcherche/Proustian.git (push)
```

Mismatch confirmed: the deploy script targets `Studere-Knowledge-Base.git`, while the current repository remote is `Studere-Alarcherche/Proustian.git`.

Exact minimal patch needed:

```diff
- "deploy": "npx quartz build && npx gh-pages -d public -b gh-pages -r https://github.com/Studere-Alarcherche/Studere-Knowledge-Base.git",
+ "deploy": "npx quartz build && npx gh-pages -d public -b gh-pages -r https://github.com/Studere-Alarcherche/Proustian.git",
```

## Further Recommendations

None requested.
