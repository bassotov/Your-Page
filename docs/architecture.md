# Architecture — page (barbash.in)

Personal portfolio / link hub. Next.js App Router, React 19, Tailwind 4, shadcn/ui.
Deployed on Vercel at https://barbash.in. Repo: github.com/bassotov/page.

## Routes (`src/app/`)

- `page.tsx` — home: header (profile, name, location, email), 2025 Wrapped cards, projects, social footer. Full client tour lives in the file; read it, don't mirror it here.
- `hampstead/` — `page.tsx` + dedicated `layout.tsx`; renders the maplibre map. Place data in `src/lib/hampstead-places.ts`.
- `pull-ups/` — `page.tsx` hosting the recharts infographic.
- `wrapped/` — `page.tsx` standalone wrapped view.
- `robots.ts`, `sitemap.ts` — SEO metadata routes.
- `layout.tsx` — root layout; mounts `<Analytics/>` from `@vercel/analytics/next`.
- `globals.css` — OKLCH theme variables (light/dark) + maplibre style overrides.

## Components (`src/components/`)

- `ui/` — shadcn base (`card.tsx`) plus `map.tsx` (the maplibre-gl wrapper, the heaviest component in the repo).
- `embeds/` — social embeds (github, spotify, twitter, youtube, generic). Barrel `index.ts`.
- `bento/` — bento grid layout (`bento-grid.tsx`, `bento-card.tsx`). Barrel `index.ts`.
- `pull-up-infographic.tsx` — recharts chart for `/pull-ups`.
- `newsletter-subscribe.tsx` — email capture form.
- `theme-provider.tsx` / `theme-switcher.tsx` — next-themes wiring.

## lib (`src/lib/`)

- `utils.ts` — `cn()` (clsx + tailwind-merge).
- `hampstead-places.ts` — map marker data for `/hampstead`.

## Heavy / non-obvious dependencies

- **maplibre-gl** — drives `ui/map.tsx` and the whole `/hampstead` route.
- **recharts** — drives `pull-up-infographic.tsx` and `/pull-ups`.
- **@vercel/analytics** — mounted once in root layout.
- **next-themes** — system-aware light/dark via OKLCH CSS variables.

## Conventions

- Import alias `@/*` → `./src/*` (tsconfig).
- shadcn config: `new-york` style, `neutral` base, lucide icons, CSS variables. Add components with `npx shadcn@latest add <component>`.
- Most components are client (`"use client"`) and use the `forwardRef` pattern — match existing files when adding new ones.
