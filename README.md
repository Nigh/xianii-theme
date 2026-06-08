# Xianii Theme

A monorepo containing the **Xianii Design System** — a CSS-first theme built on Tailwind CSS v4 + daisyUI v5.

## Structure

```
.
├── packages/design-system/    # Distributable theme tokens & CSS
│   ├── package.json           # @xianii/design-system
│   ├── theme.css              # Tailwind v4 @theme + daisyUI config
│   └── README.md
├── apps/demo-page/            # Svelte 5 preview application
│   ├── src/App.svelte         # Component showcase
│   └── vite.config.ts
└── .github/workflows/         # CI/CD for GitHub Pages
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Start the demo page
pnpm dev

# Build for production
pnpm build
```

## Using the Design System

See [`packages/design-system/README.md`](./packages/design-system/README.md) for installation and usage instructions.

## Stack

- **Tailwind CSS v4** — CSS-native configuration, no JS config files
- **daisyUI v5** — Component library integrated via Tailwind v4
- **Svelte 5** — Reactive UI framework
- **Vite** — Build tool with `@tailwindcss/vite` plugin
- **pnpm** — Workspace package manager

## License

MIT
