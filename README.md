# Xianii Theme

Monorepo for **[@xianii/design-system](./packages/design-system/README.md)** — framework-agnostic CSS theme tokens, plus a Svelte demo that showcases them with daisyUI.

**Package docs:** [`packages/design-system/README.md`](./packages/design-system/README.md) — install, CSS / Tailwind / daisyUI usage, token reference.

## Theme tokens

![Xianii theme preview](./packages/design-system/docs/preview.svg)

Dark (`xianii`) and light (`xianii-light`): palette swatches, plus control shapes for `--radius-selector` (button), `--radius-field` (input), and `--radius-box` (card). Regenerated locally from `tokens.css` via `pnpm generate:preview`.

## Structure

```
.
├── packages/design-system/    # Publishable theme package
│   ├── tokens.css             # Core CSS custom properties (default export)
│   ├── adapters/              # Optional Tailwind / daisyUI bridges
│   ├── theme.css              # Convenience: both adapters
│   ├── docs/preview.svg       # README palette preview (generated)
│   └── README.md              # Consumer docs
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

Full guide: [`packages/design-system/README.md`](./packages/design-system/README.md).

Default consumer path is plain CSS variables — no Tailwind or daisyUI required.

## Stack

| Layer | Tech | Role |
|-------|------|------|
| **Package** | CSS custom properties | Brand tokens (publishable) |
| **Optional adapters** | Tailwind v4, daisyUI v5 | Bridges only |
| **Demo only** | Svelte 5, Vite, daisyUI | Preview site on GitHub Pages |

## License

MIT
