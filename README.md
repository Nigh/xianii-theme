# Xianii Theme

Monorepo for **@xianii/design-system** — framework-agnostic CSS theme tokens, plus a Svelte demo that showcases them with daisyUI.

## Structure

```
.
├── packages/design-system/    # Publishable theme package
│   ├── tokens.css             # Core CSS custom properties (default export)
│   ├── adapters/              # Optional Tailwind / daisyUI bridges
│   ├── theme.css              # Convenience: both adapters
│   └── README.md
├── apps/demo-page/            # Svelte 5 + daisyUI preview (not part of the package)
└── .github/workflows/         # CI/CD (Pages + release)
```

## Quick Start

```bash
pnpm install
pnpm dev      # demo page
pnpm build
```

## Using the theme

See [`packages/design-system/README.md`](./packages/design-system/README.md).

Default consumer path is plain CSS variables — no Tailwind or daisyUI required.

## Stack

| Layer | Tech | Role |
|-------|------|------|
| **Package** | CSS custom properties | Brand tokens (publishable) |
| **Optional adapters** | Tailwind v4, daisyUI v5 | Bridges only |
| **Demo only** | Svelte 5, Vite, daisyUI | Preview site on GitHub Pages |

## License

MIT
