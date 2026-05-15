---
draft: true
---
# SKILL-Card-Conversion

## Purpose

Convert textbook knowledge into reviewable Anki-style cards.

This skill turns knowledge points into retrievable memory without producing oversized cards or vague appreciation prompts.

## When to Use

- after drafting each chapter
- after self-test failure
- after diagnostic review
- when stabilizing knowledge points
- when revising vocabulary, function words, or parsing explanations

## Inputs

- source chapter
- knowledge point
- card type
- target level
- diagnostic use
- tags

## Procedure

1. Identify one knowledge point.
2. Choose the smallest useful card type.
3. Write a short front.
4. Write a precise back.
5. Add source chapter and tags.
6. Add review note if the card repairs a known failure.
7. Reject or split oversized cards.

Allowed card types:

- Basic Q/A
- Cloze
- Recognition
- Parsing
- Error-Correction
- Proust-Direction

Card rules:

1. One card tests one thing.
2. Short front.
3. Precise back.
4. Reviewable in seconds.
5. No vague appreciation.
6. No oversized explanation.
7. Use English scaffold for French textbook cards.
8. Use tags.

Required tags:

- L2R-Proust
- LTF
- Chapter-00X
- A0 / A1 / A2 / B1
- French-Reading
- Grammar / Vocabulary / Function-Word / Cognate / False-Friend / Proust-Direction

## Output Format

## Card ID

Type:

Source Chapter:

Front:

Back:

Tags:

Review Note:

## Audit Questions

- Does the card test one thing?
- Can it be reviewed in seconds?
- Is the front short and precise?
- Is the back answerable without essay prose?
- Does it cite the source chapter?
- Does it have tags that support review and diagnosis?
- Would a failed answer tell the Diagnostic Tutor something useful?

## Failure Signals

- multiple knowledge points in one card
- vague front
- essay-like back
- no source chapter
- no diagnostic usefulness
- cannot be reviewed quickly
- card tests literary appreciation instead of usable knowledge

## Related Agents

- Anki Card Architect
- Diagnostic Tutor
- Final Examiner

## Backlinks

Back:

- [[Language-Training]]
- [[AGENT-Roles]]
- [[AGENT-Workflow]]
- [[AGENT-Review-Rubric]]

Related:

- [[CARD-Policy]]
- [[CARD-Types]]
- [[CARD-Template]]
- [[CARD-Review-Rubric]]
- [[DIAG-Policy]]
- [[LTF-Course-Architecture]]
