# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

Personal portfolio page for Pasha Barbashin built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and shadcn/ui.

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/app/page.tsx` - Main portfolio page with sections layout
- `src/app/globals.css` - Theme variables (OKLCH colors for light/dark mode)
- `src/components/embeds/` - Social media embed components (Spotify, GitHub)
- `src/components/ui/` - shadcn/ui base components
- `src/lib/utils.ts` - Utility functions including `cn()` for class merging
- `public/` - Static images (profile pic, project screenshots, wrapped cards)

### Page Sections

The main page (`page.tsx`) is organized into:
1. **Header** - Profile picture, name, location, job title, email
2. **2025 Wrapped** - GitHub contributions banner + grid of platform wrapped cards (WHOOP, Spotify, Twitter, LinkedIn)
3. **Projects** - Image cards with overlay for Twitter Screenshot, Soka, X-Wizard
4. **Footer** - Social icons (LinkedIn, Twitter, YouTube, Telegram, GitHub, Spotify)

### Key Patterns

**Image Cards with Overlay**:
```tsx
<div className="relative aspect-[4/5] overflow-hidden rounded-xl">
  <Image src="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <div className="absolute bottom-4 left-4 text-white">Title</div>
</div>
```

**Component Conventions**:
- All components use `forwardRef` pattern
- Client components marked with `"use client"`
- Import path alias: `@/*` maps to `./src/*`

**Theming**: Uses next-themes with OKLCH color variables in globals.css. Light/dark mode with system detection. Primary color is Twitter blue.

**shadcn/ui**: Configured with new-york style, Lucide icons. Add components via:
```bash
npx shadcn@latest add <component>
```
