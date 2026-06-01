---
title: "Proustian LLMWiki Base"
type: system-protocol
status: base
comments: false
---
# Proustian LLMWiki Base

This is the base memory architecture for the Proustian Obsidian + Quartz repository.

It follows one rule first:

> 如无必要，勿增实体。

The base does not create `Blocks/`, `Reviews/`, area canvases, a Kanban board, or a separate project-management layer by default.

## Core Purpose

Everything serves wandering, human thinking, and liberation.

The system is not designed to make knowledge compounding smoother. It introduces necessary friction so the mind can stay with unstable relations before they become stable links.

## Minimum Objects

```text
content/Daily/        # all-inclusive human Inbox
content/Canvas.canvas # central Warburg / Benjamin floating image board
content/index.md      # public garden entrance and stable orientation
AGENTS.md             # Codex operating constitution
.codex/skills/        # executable structural skills
skills/               # human-readable skill documentation
```

## Object Roles

### Daily Inbox

Daily is not a reading log.

It is an all-inclusive Inbox. The user may write anything into it: reading fragments, thoughts, tasks, images, anxiety, business observations, dreams, language training, sentence pressure, course ideas, or unfinished judgments.

AI must not sanitize, flatten, delete, or rewrite raw Daily text.

### Canvas

Canvas is the central Warburg / Benjamin board.

It is not a dashboard, task board, graph view, or clean concept map. It preserves unstable relations, montage pressure, contradiction, visual position, repetition, distance, and unfinished image-truth.

Canvas is where material waits before it becomes stable.

### Index

Index is not an Inbox.

Only stable double-links enter the Index:

```text
content node ↔ stable question / theme / work / training direction
```

Promotion requires recurrence, clarity of relation, and user judgment.

### Codex / AI

Codex performs structural labor only.

It may sort, stage, suggest, check, and prepare.
It must not decide the intellectual thesis or promote unstable material as stable knowledge.

## Default Flow

```text
Daily Inbox
  -> Daily Sort Skill
  -> Canvas Stage Skill
  -> Central Canvas
  -> Index Candidate Skill
  -> Human confirmation
  -> index.md stable double-links
```

No extra folder is created unless accumulated material proves that the entity is necessary.

## Default Rhythm

Nightly:
- append AI Sorting to the relevant Daily note;
- identify possible Canvas items;
- identify actionable items without creating a board;
- identify possible Index candidates, but do not promote them.

Weekly:
- tend the central Canvas;
- preserve contradiction and tension;
- detect repetition, drift, and overloaded clusters.

Monthly:
- propose stable double-link candidates only.

Quarterly / Yearly:
- compress the terrain only when explicitly requested.

## Hard Boundaries

Codex must not:

- create `Blocks/` by default;
- create `Reviews/`;
- create `Reading-Terrain.canvas` or other area canvases by default;
- create a Kanban board by default;
- turn Daily into clean notes;
- erase contradiction from Canvas;
- turn Canvas into a dashboard;
- promote Daily directly into Index;
- replace user judgment;
- restructure the repository.

## When New Entities Are Allowed

A new folder, canvas, protocol, or layer is allowed only when all three conditions are met:

1. the material has accumulated beyond what the current object can hold;
2. the new entity reduces friction rather than adding administration;
3. the user explicitly approves the split.

Until then, operate inside Daily, Canvas, index, and existing Codex skills.
