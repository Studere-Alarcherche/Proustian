# Agent Workflow

## Core Rule

Only the Builder / Integrator may modify files.

All other agents must return review notes, designs, or correction proposals.

## Standard Workflow

1. Textbook Architect drafts or reviews chapter structure and source tradition.
2. Vocabulary Architect checks vocabulary progression and card-conversion potential.
3. French Grammar Examiner checks form, function, meaning, and syntax.
4. Anki Card Architect converts knowledge points into reviewable cards.
5. Diagnostic Tutor checks whether likely failures can be classified.
6. Translation Training Designer maintains translation exercises and cards.
7. The editor self-tests the chapter, cards, and self-test.
8. Final Examiner gives Pass / Revise / Reject.
9. Builder / Integrator applies approved revisions.

## Pedagogical Audit Step

Every chapter must pass the audit in [[AGENT-Pedagogical-Audit-Principles|Pedagogical Audit Principles]] before it is considered stable.

The audit asks:

- What does this chapter train?
- Why this sequence?
- What textbook or SLA principle supports it?
- What evidence shows learning?
- What failure revises it?
- What cards preserve it?
- What diagnostic category repairs it?

## Skill-Gated Chapter Acceptance

Before a chapter is accepted:

1. Draft using [[SKILL-Chapter-Design]].
2. Audit using [[SKILL-Pedagogical-Audit]].
3. Check vocabulary using relevant vocabulary skills: [[SKILL-Cognate-Mapping]], [[SKILL-False-Friend-Alert]], or [[SKILL-Function-Word-Control]].
4. Convert knowledge using [[SKILL-Card-Conversion]].
5. Diagnose test failures using [[SKILL-Gap-Diagnosis]].
6. Check target fit using [[SKILL-Proustian-Alignment]].

## Review Verdicts

- Pass: usable as-is.
- Revise: usable after targeted correction.
- Reject: do not continue until repaired.

## Anti-Drift Rules

Do not:

- turn French Reading Textbook into a generic French course
- turn Translation Training into French grammar
- use Chinese as scaffold in French textbook
- make workbook-style dead drills the center
- beautify before content
- touch homepage or CSS
- create a second repository

Back:

- [[Language-Training|Language Training]]
