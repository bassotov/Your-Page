# CLAUDE.md

Personal portfolio / link hub at **barbash.in** (Next.js App Router + shadcn/ui). Deploys on **Vercel** — pushing `main` ships to prod; don't run deploy commands manually.

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build — also the typecheck gate (no separate tsc script)
npm run lint     # eslint (next core-web-vitals + ts)
```

No test script — do not fabricate one. Type errors surface only via `npm run build`.

## Conventions

- Import alias `@/*` → `./src/*`.
- Most components are `"use client"` + `forwardRef` — match the existing file you're next to when adding one.
- shadcn: `new-york` style, lucide icons. Add components with `npx shadcn@latest add <component>`.
- Theming: next-themes with OKLCH color variables in `src/app/globals.css` (light/dark + system).

## Navigation

- Routes live in `src/app/`: `/` (`page.tsx`), `/hampstead`, `/pull-ups`, `/wrapped`, plus `robots.ts` / `sitemap.ts`.
- `/hampstead` is driven by **maplibre-gl** (`components/ui/map.tsx`, data in `lib/hampstead-places.ts`); `/pull-ups` by **recharts** (`components/pull-up-infographic.tsx`).
- Components grouped under `components/` (`embeds/`, `bento/`, `ui/`). `cn()` is in `lib/utils.ts`.
- Full map: **see `docs/architecture.md`**. Read `page.tsx` directly for the home-page section layout — don't trust a copied tour.

## Gotchas

- The ~dozen `*.png` files at repo root (`desktop-after-2.png`, `mobile-fixed.png`, …) are **scratch screenshots, untracked and NOT gitignored** — never `git add` them and don't delete real assets. Tracked images live in `public/`.
- `.playwright-mcp/` holds the screenshot-workflow output (gitignored).
