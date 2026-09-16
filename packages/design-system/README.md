# @xianii/design-system

Framework-agnostic **CSS theme tokens** for the Xianii brand. No UI components, no framework lock-in.

Optional adapters bridge the same tokens into Tailwind CSS v4 and daisyUI v5. Svelte + daisyUI are used only by the demo app in this repo — not by this package.

## Installation

```bash
pnpm add @xianii/design-system
```

## Usage

### Default: CSS variables only

```css
@import "@xianii/design-system";
/* or: @import "@xianii/design-system/tokens.css"; */
```

```html
<html data-theme="xianii">
  <!-- or data-theme="xianii-light" -->
  <button style="background: var(--color-primary); color: var(--color-primary-content)">
    Click Me
  </button>
</html>
```

Works with any stack (vanilla, React, Vue, Svelte, etc.).

### Optional: Tailwind v4 adapter

```bash
pnpm add tailwindcss@^4 @tailwindcss/vite
```

```css
@import "tailwindcss";
@import "@xianii/design-system/tailwind.css";
```

Then use utilities: `bg-primary`, `text-base-content`, `font-sans`, `animate-float`, etc.

### Optional: daisyUI v5 adapter

```bash
pnpm add tailwindcss@^4 daisyui@^5 @tailwindcss/vite
```

```css
@import "tailwindcss";
@plugin "daisyui";
@import "@xianii/design-system/daisyui.css";
@import "@xianii/design-system/tailwind.css"; /* fonts / animate utilities */
```

Or the convenience entry (daisyUI themes + Tailwind `@theme`):

```css
@import "tailwindcss";
@plugin "daisyui";
@import "@xianii/design-system/theme.css";
```

```html
<button class="btn btn-primary">Click Me</button>
```

## Package exports

| Export | What it is |
|--------|------------|
| `@xianii/design-system` / `tokens.css` | Pure CSS custom properties (default) |
| `tailwind.css` | Tailwind `@theme inline` bridge |
| `daisyui.css` | daisyUI `@plugin "daisyui/theme"` themes |
| `theme.css` | Convenience: daisyUI + Tailwind adapters |

`tailwindcss` and `daisyui` are **optional** peer dependencies — required only when using the matching adapter.

## Theme tokens

![Xianii theme preview](./docs/preview.svg)

Themes: `data-theme="xianii"` (dark, default) and `data-theme="xianii-light"`.

| Token | Usage |
|-------|-------|
| `--color-primary` | Primary actions, links |
| `--color-secondary` | Secondary actions |
| `--color-accent` | Highlights |
| `--color-neutral` | Neutral surfaces |
| `--color-base-100` / `200` / `300` | Surfaces |
| `--color-base-content` | Default text on base |
| `--color-*-content` | Foreground on each role color |
| `--color-info` / `success` / `warning` / `error` | Status |
| `--color-text-muted` | Secondary text on base surfaces |
| `--color-interactive-hover` / `active` | Interactive surface states |
| `--color-focus` | Keyboard focus indicator |
| `--color-overlay` | Backdrop behind dialogs and overlays |
| `--font-sans` / `serif` / `mono` | Typography |
| `--radius-selector` / `field` / `box` | Radii (button / input / card) |
| `--space-field-label` / `field-help` | Form label and supporting-text gaps |

## UI implementation constraints

The package does not ship components, but consumers should preserve these interaction rules so the theme remains usable and visually consistent.

### Dialogs

Do not use `alert()`, `confirm()`, or `prompt()` in user-facing flows. Use the host project's existing modal component, or native `<dialog>` when no component library is present. Dialogs need a labelled title, an explicit cancel path, keyboard focus management, and a visible focus indicator. Use `--color-overlay` for the backdrop, and communicate destructive actions with text as well as color.

```html
<dialog aria-labelledby="delete-title">
  <form method="dialog" aria-labelledby="delete-title">
    <h2 id="delete-title">Delete project?</h2>
    <p>This action cannot be undone.</p>
    <button value="cancel">Cancel</button>
    <button value="confirm">Delete</button>
  </form>
</dialog>
```

### Tabs

Selected tabs must use at least two visual signals, such as weight plus an indicator. Hover must be visible but quieter than the selected state; keyboard focus must remain independently visible. Implement `tablist` / `tab` roles, `aria-selected`, panel relationships, and arrow-key navigation in the host component.

```css
.tab {
  color: var(--color-text-muted);
}

.tab:hover {
  background: var(--color-interactive-hover);
  color: var(--color-base-content);
}

.tab[aria-selected="true"] {
  border-block-end: 2px solid var(--color-primary);
  background: var(--color-interactive-active);
  color: var(--color-base-content);
  font-weight: var(--font-weight-semibold);
}

.tab:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Form fields

Group labels and controls structurally; do not create their spacing with text whitespace or control margins. Supporting and error text must stay attached to the same field, and space between fields should exceed the internal label-to-control gap.

```html
<label class="field">
  <span>Email address</span>
  <input type="email" />
</label>
```

```css
.field {
  display: grid;
  gap: var(--space-field-label);
}

.field-help {
  margin-block-start: var(--space-field-help);
}
```

## Typography

Typography is a public, framework-agnostic contract. `1rem` means the browser default (normally 16px); Xianii never changes the root font size, so browser font preferences and zoom continue to work. Use an existing token before introducing a new size. Deviate only for a documented design need.

### Font size scale

| Token | Size (16px default) | Recommended use |
|-------|---------------------|-----------------|
| `--font-size-xs` | `0.75rem` (12px) | Metadata, timestamps, badges; never body copy |
| `--font-size-sm` | `0.875rem` (14px) | Compact UI, tables, sidebars, buttons, inputs |
| `--font-size-base` | `1rem` (16px) | Default body and primary form content |
| `--font-size-lg` | `1.125rem` (18px) | Lead or emphasized body text |
| `--font-size-xl` | `1.25rem` (20px) | Small headings |
| `--font-size-2xl` | `1.5rem` (24px) | Section headings |
| `--font-size-3xl` | `1.875rem` (30px) | Page subsections |
| `--font-size-4xl` | `2.25rem` (36px) | Page headings |
| `--font-size-5xl` | `3rem` (48px) | Display and hero text |
| `--font-size-6xl` | `3.75rem` (60px) | Large display, used sparingly |

Body defaults to `1rem` for comfortable Chinese and English reading. `0.875rem` is the compact UI workhorse, not a body default. `0.75rem` is the minimum standard size and is reserved for supporting information.

Semantic size aliases reference the primitive scale: `--font-size-body`, `--font-size-body-small`, `--font-size-ui`, `--font-size-metadata`, `--font-size-heading-small`, and `--font-size-heading`. `--font-size-display` is the only fluid token, scaling with `clamp()` from `4xl` to `6xl`; body and UI sizes stay stable.

### Line height and weight

| Tokens | Values |
|--------|--------|
| `--line-height-tight` / `snug` / `normal` / `relaxed` / `loose` | `1.15` / `1.3` / `1.5` / `1.65` / `1.75` |
| `--font-weight-normal` / `medium` / `semibold` / `bold` | `400` / `500` / `600` / `700` |

Use tight or snug leading for headings, normal for UI, relaxed for body copy, and loose for long Chinese text. Keep long-form reading near `60–70ch` (roughly `50–75ch` is acceptable); this is a usage guideline, not a layout token.

**Visual hierarchy must not rely on font size alone.** Combine size with weight, line height, muted foreground colors, and spacing. Avoid shrinking every successive level into an `18 → 16 → 14 → 12 → 10px` ladder.

### Tailwind CSS v4

The optional adapter maps the core tokens to `text-xs` through `text-6xl`, `leading-tight` through `leading-loose`, and `font-normal`, `font-medium`, `font-semibold`, and `font-bold`. Values remain sourced from `tokens.css`:

```html
<article class="text-base leading-relaxed">Readable body copy</article>
<button class="text-sm font-medium">Compact action</button>
<time class="text-xs text-base-content/60">2 min ago</time>
```

No daisyUI typography overrides are added; component sizing remains daisyUI’s responsibility.

After changing `tokens.css`, regenerate the preview locally (not CI):

```bash
pnpm generate:preview
```

## For AI Agents

1. Install: `pnpm add @xianii/design-system`
2. Default: `@import "@xianii/design-system";` and use `var(--color-*)` / `data-theme`
3. Only add Tailwind/daisyUI adapters if the host project already uses those tools
4. Do not assume Svelte or daisyUI component classes exist — this package ships tokens, not components
5. Do not use browser alert dialogs in user-facing flows; use an existing modal or native `<dialog>`
6. Give tabs distinct hover, selected, and focus-visible states; selected tabs need two visual signals
7. Group each label with its control and use `--space-field-label` between them

## License

[MIT](./LICENSE)
