---
private: true
hide: true
draft: true
---
# SKILL-Gap-Diagnosis

## Purpose

Classify learner failures and decide the next repair action.

This skill prevents the system from telling the learner to redo everything. It isolates the failure and chooses a targeted repair.

## When to Use

- after failed cards
- after self-test
- after misread sentence
- before moving to next chapter
- when repeated mistakes show a pattern

## Inputs

- failed answer or misread sentence
- source chapter or card
- expected answer
- learner response
- available cards and self-test items

## Procedure

1. Review failed answer or failed card.
2. Identify main gap type.
3. Identify secondary gap type.
4. Decide repair action.
5. Recommend add card / rewrite card / reread section / retake self-test / move forward.

Gap categories:

1. Vocabulary Gap
2. False Friend Gap
3. Form Gap
4. Function Gap
5. Agreement Gap
6. Conjugation Gap
7. Reference Gap
8. Word Order Gap
9. Tense Contrast Gap
10. Subordination Gap
11. Premature Interpretation
12. English Control Gap

## Output Format

# Diagnostic Review

## Input Reviewed

## Main Gap Type

## Secondary Gap Types

## Evidence

## What Not to Redo

## Cards to Add

## Cards to Rewrite

## Textbook Section to Reread

## Self-Test to Retake

## Move Forward?

Yes / No

## Next Action

## Audit Questions

- Is the main failure classified?
- Is the evidence visible in the learner response?
- Is the repair action narrower than "redo everything"?
- Are cards added or rewritten where useful?
- Is there a clear move-forward decision?
- Does the diagnosis distinguish vocabulary, form, function, and interpretation?

## Failure Signals

- tells learner to redo everything
- does not classify failure
- confuses vocabulary failure with structure failure
- no card repair
- no move-forward decision
- ignores the evidence in the failed answer

## Related Agents

- Diagnostic Tutor
- Anki Card Architect
- Final Examiner

## Backlinks

Back:

- [[Language-Training/index|Language Training]]
- [[AGENT-Roles]]
- [[AGENT-Workflow]]
- [[AGENT-Review-Rubric]]

Related:

- [[DIAG-Policy]]
- [[DIAG-Gap-Taxonomy]]
- [[DIAG-Review-Protocol]]
- [[DIAG-Session-Template]]
- CARD policy (to be rebuilt)
- [[LTF-Course-Architecture]]
