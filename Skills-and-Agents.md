# Skills and Agents

## Operating Principle

Reuse existing skills where possible. Do not create a large agent universe.

Skills support the textbook cycle; they do not decide the intellectual thesis. Agents are operational roles used to check chapter function, passage fit, exercises, and integration.

## Existing Skills to Reuse

| Skill | Current Use | Notes |
|---|---|---|
| textual-plate-builder | Passage Study / Chapter Plate | Use for close passage organization around sentence movement, reading move, pattern, and exercise. |
| trilingual-text-chamber-builder | EN-CN Chamber for now | Use in downgraded EN-CN mode. Do not start FR-EN-CN collation until the later phase. |
| theory-boundary-board-builder | Theory containment | Use to keep theory subordinate to Proustian reading and textbook training. |
| codex-handoff-writer | Codex execution handoffs | Use for bounded chapter or Part tasks. |

## Skills to Defer

| Skill | Deferred Until | Reason |
|---|---|---|
| quartz-page-publisher | Public page preparation | Use after content has stabilized for publication. |
| design-audit-reading-site | Visual review | Use after the textbook material has enough public shape to audit. |

## Lightweight Wrapper Skill

### textbook-cycle-builder

Purpose:

Coordinate the 6-chapter Part cycle without creating a new system.

Inputs:

- Part title
- Chapter list
- candidate passages
- chapter function
- extracted patterns
- observed errors

Outputs:

- chapter task packet
- pattern updates
- exercise requirements
- Skill-Error-Update Log entry
- Part consolidation notes

Default cycle:

1. confirm chapter function
2. select or validate passage
3. build chapter plate
4. design exercises
5. extract patterns
6. record errors
7. update skill warnings
8. prepare the next chapter handoff

## Operational Agents

| Agent | Responsibility | Output |
|---|---|---|
| Curriculum Architect | Maintains the 8 Parts x 6 Chapters structure and keeps each chapter tied to one move. | Architecture notes and gap warnings. |
| Reading Pedagogy Auditor | Checks whether a chapter trains a real reading action rather than offering general appreciation. | Reading-action audit. |
| Proustian Alignment Auditor | Checks that Proust and *In Search of Lost Time* remain central. | Alignment warning or confirmation. |
| Chinese Recomposition Auditor | Checks whether Chinese recomposition has training value and does not merely produce an answer. | CN recomposition audit. |
| Exercise Designer | Creates practice, self-check, and writing transfer exercises. | Exercise packet. |
| Textbook Style Editor | Controls textbook tone, clarity, and resistance to generic AI explanation. | Style pass notes. |
| QA / Integration Agent | Checks duplication, missing links, difficulty jumps, and Part-level consolidation. | QA checklist and next warnings. |

## Per-Chapter Call Order

Use this default order for each chapter:

1. Curriculum Architect
2. Proustian Alignment Auditor
3. Reading Pedagogy Auditor
4. Chinese Recomposition Auditor
5. Exercise Designer
6. Textbook Style Editor
7. QA / Integration Agent

## Per-Part Call Order

At the end of each 6-chapter Part:

1. QA / Integration Agent reviews the Part sequence.
2. Curriculum Architect checks the transition to the next Part.
3. Reading Pedagogy Auditor identifies repeated weak moves.
4. Chinese Recomposition Auditor identifies repeated CN problems.
5. Textbook Style Editor records style risks.
6. textbook-cycle-builder updates reusable skills, warnings, and next-Part constraints.

## Boundaries

- Do not create more agents unless a repeated workflow failure proves a need.
- Do not let agents generate fake Proust passages.
- Do not let theory become a top-level course structure.
- Do not convert this into a dashboard.
- Do not use FR-EN-CN collation in the current phase.
