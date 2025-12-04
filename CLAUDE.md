# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AstroZen is a minimalist personal portfolio template built with Astro and TailwindCSS. It's designed to be SEO-friendly, accessible, and easily customizable through a single configuration file.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Type-check and build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro
```

## Architecture

### Configuration-Driven Design

The entire site content is centralized in `src/config/index.ts`, which exports two main objects:

- **SITE_CONFIG**: Metadata, navigation, social links, SEO settings
- **SITE_CONTENT**: All page content (hero, experience, skills, blog, projects, about)

This design allows users to customize the entire portfolio by editing a single file without touching component code.

### Component Structure

The site is structured as a single-page application with section-based components:

- `src/layouts/Layout.astro`: Root layout with SEO meta tags, fonts, and social sharing setup
- `src/pages/index.astro`: Main page that composes all section components
- `src/components/Section.astro`: Reusable wrapper for content sections with dynamic spacing
- Section components: `Hero.astro`, `Experience.astro`, `Skills.astro`, `Blog.astro`, `Project.astro`, `About.astro`

### TypeScript Path Aliases

Configured in `tsconfig.json`:

```typescript
@components/* → src/components/*
@layouts/*   → src/layouts/*
@icons/*     → src/icons/*
@types       → src/types/index.ts
@config      → src/config/index.ts
```

### Type System

All types are defined in `src/types/index.ts`. Key interfaces:

- `SiteConfig` / `SiteContent`: Top-level configuration types
- `HeroProps`, `ExperienceProps`, `ProjectProps`, `AboutProps`: Section-specific prop types

### Styling

- TailwindCSS with custom theme configuration in `tailwind.config.mjs`
- Custom fonts: Be Vietnam Pro (sans), Gabarito Variable (serif)
- Custom color palette: primary (#2563EB), neutral (#94A3B8), white (#E2E8F0), black (#0E141B)
- Smooth scrolling enabled with anchor-based navigation
- Custom animations defined in Tailwind config (e.g., `slideIn`)

## Customization Workflow

When users want to personalize their portfolio:

1. Update `src/config/index.ts` with their information
2. Replace images in `public/` directory
3. Modify color scheme in `tailwind.config.mjs` if desired
4. Components should rarely need modification due to the config-driven architecture

## Code Formatting

Prettier is configured with the Astro plugin (`.prettierrc.mjs`). Format code before committing.
