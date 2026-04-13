---
name: tics320-slide-authoring
description: Use when creating or updating TICS320 practicum or exercise materials in this repo, especially Reveal.js decks, D3 ER solution pages, gallery wrappers, and course metadata wiring.
---

# TICS320 Slide Authoring

Use this skill for TICS320 slide work in `public/presentations/tics320/`.

## Scope

This skill covers:

- new practicum decks
- new exercise decks
- updates to the shared filmstrip and deck chrome
- D3 ER solution pages
- multi-solution ER galleries
- course metadata updates in `lib/i18n/translations.ts`

## Required Project Rules

- Read `AGENTS.md` first.
- If app-router files are involved, read the relevant docs in `node_modules/next/dist/docs/` before editing.
- Do not move TICS320 files out of `public/presentations/tics320/`.

## Folder Standard

- Practicums:
  - `public/presentations/tics320/practicums/practicum-n/index.html`
- Exercises:
  - `public/presentations/tics320/exercises/exercise-n/index.html`
- Standalone ER pages for an exercise:
  - `public/presentations/tics320/exercises/exercise-n/er-solution.html`
- Multi-solution exercise wrapper:
  - `public/presentations/tics320/exercises/exercise-n/er-gallery.html`

## Workflow

1. Identify whether the work is a practicum, an exercise, or a standalone ER solution.
2. Check whether the change affects a shared deck pattern already used by other TICS320 decks.
3. Reuse the existing TICS320 Reveal.js structure instead of inventing a new one.
4. Update `lib/i18n/translations.ts` if the course page entrypoints changed.
5. If the deck links to a standalone ER page, confirm the back link returns to the correct slide hash.

## Reveal Deck Rules

- Start exercise decks with a title slide.
- Keep bilingual strings in the deck-local `i18n` object.
- Use `data-i18n-html` only for strings that intentionally contain markup.
- Maintain the bottom filmstrip pattern and its toggle behavior consistently across TICS320 decks.

## ER Solution Rules

- Prefer D3 for interactive ER diagrams.
- Keep the ER page self-contained and directly openable.
- When embedded in a gallery iframe, the ER page must detect embedded mode and hide its own top bar.
- When the user enters from inside a slide deck, prefer gallery single mode instead of full gallery mode if a wrapper exists.

## Modeling Standard

- Teach conceptual ER first.
- Avoid introducing bridge entities that only exist because of relational implementation unless that is the teaching objective.
- For relationship attributes like `quantity`, prefer attaching them to the relationship in the conceptual diagram.

## Deliverables

A complete slide-related change should usually include:

- HTML updates in the relevant deck or ER page
- metadata updates in `lib/i18n/translations.ts` when entrypoints changed
- consistency pass against the other TICS320 decks if a shared pattern was touched
