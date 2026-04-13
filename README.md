# mypage

Personal website built with Next.js. The site includes regular app routes under `app/` and static course materials under `public/presentations/`.

## Development

Run the local dev server:

```bash
bun dev
```

The site is served at `http://localhost:3000`.

## Project Structure

- `app/`: Next.js app routes and UI
- `lib/`: shared data and helpers
- `public/`: static assets and standalone presentation pages
- `public/presentations/tics320/`: TICS320 course materials

## TICS320 Layout

TICS320 materials are split by type:

- `public/presentations/tics320/practicums/`
- `public/presentations/tics320/exercises/`

Current patterns:

- Practicums are Reveal.js decks.
- Exercises are Reveal.js decks for the statement and guided reasoning.
- ER solutions that need panning and zooming live in standalone D3 pages.
- Multi-solution exercises can expose a wrapper gallery page that embeds the existing D3 solution pages.

## TICS320 Conventions

Course metadata is defined in `lib/i18n/translations.ts`.

Expected link patterns:

- `href`: open the main deck
- `solutionHref`: optional; use when the exercise should expose a direct path to a standalone solution page or gallery

Presentation conventions are documented in `AGENTS.md`.

## Notes

- This repo uses a newer Next.js version than most stock examples. Read `node_modules/next/dist/docs/` before changing app behavior.
- Static course pages in `public/` are intentionally independent from the Next.js app router.
