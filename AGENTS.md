<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Slide Authoring Standard

These rules apply when editing or creating TICS320 slide materials.

## Canonical Structure

- Keep TICS320 files under `public/presentations/tics320/`.
- Separate by content type:
  - `practicums/`
  - `exercises/`
- Each deck lives in its own folder with an `index.html`.
- If an exercise has a standalone ER or visual solution, keep it inside the same exercise folder:
  - `exercise-n/index.html`
  - `exercise-n/er-solution.html`
- If an exercise has multiple standalone solutions, keep the individual pages in the same folder and add one wrapper page such as `er-gallery.html`.

## Course Page Wiring

- Register TICS320 items in `lib/i18n/translations.ts`.
- Use `href` for the main deck.
- Use `solutionHref` only for direct solution entrypoints.
- If a solution is already reachable from inside the deck but should also be reachable from the course page, point `solutionHref` to the standalone solution page or gallery.

## Reveal Deck Rules

- Reuse the existing Reveal.js deck structure already used by TICS320 materials.
- Keep bilingual content inside the deck-local `i18n` object.
- Use `data-i18n` for plain text and `data-i18n-html` only when HTML markup is required.
- Preserve the existing bottom filmstrip pattern unless explicitly redesigning all TICS320 decks together.
- Keep the filmstrip toggle behavior consistent across practicum and exercise decks.
- Shared visual tokens should come from `public/presentations/shared/tokens.css` when possible.

## Exercise Pattern

- Exercise decks should start with a title slide.
- The deck should present:
  - problem statement
  - modeling hints or guided reasoning
  - handoff slide to the standalone solution page when needed
- Do not split one exercise into separate statement and solution slide decks if a single deck plus a standalone ER page is enough.

## ER Solution Pattern

- Use standalone D3 pages for ER solutions that benefit from pan and zoom.
- Keep the top bar minimal:
  - back to slides
  - title
  - zoom controls if needed
- If the ER page is embedded inside a wrapper gallery, hide the solution page's own top bar in embedded mode.
- Wrapper galleries should own gallery navigation; embedded pages should only render the diagram canvas and their local controls.

## Gallery Behavior

- Use a wrapper page only when an exercise has multiple standalone solutions.
- The wrapper should support two modes:
  - gallery mode for direct entry from the course page
  - single mode for entry from an individual slide
- `?mode=single` means:
  - hide carousel controls
  - keep only the selected case
  - preserve the back link into the originating slide deck

## Modeling Guidance

- Prefer conceptual ER modeling in teaching slides before table-oriented implementation detail.
- Only introduce bridge entities in the conceptual model when they are truly part of the domain, not just a relational implementation artifact.
- If a many-to-many relationship has its own business attribute, prefer modeling the attribute on the relationship unless the course objective specifically requires early normalization.

## Editing Discipline

- When changing one TICS320 deck pattern, check whether the same component exists in:
  - `practicums/practicum-1`
  - `exercises/exercise-1`
  - `exercises/exercise-2`
- If the pattern is shared, keep the implementation aligned unless there is a deliberate reason to diverge.
