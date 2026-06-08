# @xianii/design-system

A CSS-first design system built on **Tailwind CSS v4** and **daisyUI v5**. No `tailwind.config.js` — everything is configured via CSS-native `@theme` directives.

## Installation

```bash
# pnpm
pnpm add @xianii/design-system

# npm
npm install @xianii/design-system
```

Or install from GitHub directly:

```bash
pnpm add github:xianii/xianii-theme#main
```

## How to Import this Design System

### Step 1: Install Dependencies

Your project needs Tailwind CSS v4 and daisyUI v5 as peer dependencies:

```bash
pnpm add tailwindcss@^4 daisyui@^5 @tailwindcss/vite
```

### Step 2: Configure Vite

```ts
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### Step 3: Import the Theme CSS

In your main CSS entry file (e.g., `src/app.css`):

```css
@import "@xianii/design-system/theme.css";
```

That's it. All brand colors, fonts, and daisyUI components are now available.

### Step 4: Use the Utilities

```html
<!-- Brand-colored button -->
<button class="btn btn-primary">Click Me</button>

<!-- Custom font utilities -->
<h1 class="font-sans text-4xl font-bold">Heading</h1>
<p class="font-serif text-lg">Body text in serif.</p>
<code class="font-mono text-sm">Code block</code>

<!-- Color utilities from @theme -->
<div class="bg-primary text-primary-content">Primary</div>
<div class="bg-secondary text-secondary-content">Secondary</div>
<div class="bg-accent text-accent-content">Accent</div>
<div class="bg-base-100 text-base-content">Base surface</div>
```

## Theme Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `oklch(0.65 0.24 275)` | Primary actions, links |
| `--color-secondary` | `oklch(0.7 0.2 180)` | Secondary actions |
| `--color-accent` | `oklch(0.75 0.18 60)` | Highlights, badges |
| `--color-neutral` | `oklch(0.5 0.03 260)` | Neutral surfaces |
| `--color-base-100` | `oklch(0.99 0.005 90)` | Page background |
| `--color-base-200` | `oklch(0.96 0.008 90)` | Card background |
| `--color-base-300` | `oklch(0.92 0.01 90)` | Borders, dividers |
| `--font-sans` | Inter, Noto Sans SC | Headings, UI |
| `--font-serif` | Noto Serif | Long-form text |
| `--font-mono` | JetBrains Mono | Code blocks |

## For AI Agents

To use this design system in an automated workflow:

1. Add the dependency: `pnpm add @xianii/design-system`
2. In the project's main CSS file, add: `@import "@xianii/design-system/theme.css";`
3. Use daisyUI classes (`btn`, `card`, `modal`, etc.) — they will automatically use the Xianii theme colors.
4. Use Tailwind color utilities: `bg-primary`, `text-secondary-content`, `border-accent`, etc.
5. Use font utilities: `font-sans`, `font-serif`, `font-mono`.

No additional configuration files are required. The theme is self-contained in the CSS import.

## License

MIT
