# AGENTS.md

## Project Overview

pnpm monorepo containing the **@xianii/design-system** package (CSS-first design system built on Tailwind CSS v4 + daisyUI v5) and application workspaces.

## Repository Structure

```
packages/design-system/   @xianii/design-system (publishable)
apps/demo-page/           demo site (deployed to GitHub Pages)
```

## Development Flow

1. Create a feature/fix branch from `main`
2. Make changes, commit using **Conventional Commits**
3. Open a PR targeting `main`
4. Merge the PR → triggers automated release

## Commit Convention (Conventional Commits)

All commits merged into `main` **must** follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types and Version Bumps

| Type | Description | Version Bump |
|------|-------------|--------------|
| `fix` | Bug fix | **patch** (1.0.x) |
| `feat` | New feature | **minor** (1.x.0) |
| `perf` | Performance improvement | **patch** |
| `refactor` | Code change that neither fixes a bug nor adds a feature | **patch** |
| `docs` | Documentation only | no release |
| `style` | Formatting, missing semicolons, etc. | no release |
| `test` | Adding or correcting tests | no release |
| `build` | Build system or external dependencies | no release |
| `ci` | CI configuration | no release |
| `chore` | Other changes that don't modify src or test | no release |

### Breaking Changes

Append `!` after the type, or add `BREAKING CHANGE:` in the footer to trigger a **major** bump:

```
feat!: redesign theme API

BREAKING CHANGE: removed legacy color tokens
```

### Examples

```
feat: add dark mode toggle utility
fix: correct button hover color in safari
docs: update README installation steps
feat(theme): add new accent color palette
fix!: rename primary color variable

BREAKING CHANGE: --color-primary renamed to --color-brand
```

## Automated Release Pipeline

- **Trigger**: PR merged to `main`
- **Tool**: semantic-release
- **Auth**: npm Trusted Publisher (OIDC, no token needed)
- **What happens automatically**:
  1. Analyzes commits since last release
  2. Determines version bump (patch/minor/major)
  3. Updates `packages/design-system/package.json` version
  4. Generates/updates `CHANGELOG.md`
  5. Publishes `@xianii/design-system` to npm (with provenance)
  6. Creates GitHub Release with release notes
  7. Commits version bump back to `main` with `[skip ci]`

## Rules for AI Agents

- **Always use Conventional Commits** when writing commit messages.
- The `scope` is optional; use it when the change affects a specific part of the design system (e.g., `feat(theme):`, `fix(tokens):`).
- `docs`, `style`, `test`, `build`, `ci`, `chore` types do **not** trigger a release.
- Do not manually edit `version` in `package.json` — semantic-release manages it.
- Do not manually create git tags — semantic-release creates them.
- The release config is at `packages/design-system/.releaserc.json`.
- The workflow is at `.github/workflows/release.yml`.
