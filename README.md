# ArchangelGCA Website

Static personal site built with **SvelteKit 2** + **Svelte 5** + **Vite 8**, deployed as a static site on **Cloudflare Pages (2026)**. Runtime and package manager: **Bun 1.4.0**.

## Requirements

- **Bun >=1.4.0** (enforced via `packageManager` field)
  ```bash
  bun --version # should be 1.4.0
  curl -fsSL https://bun.sh/install | bash
  # or: npm i -g bun  /  brew install oven-sh/bun/bun
  ```

No Node.js required – Bun provides Node-compatible runtime. If you still have Node installed, Bun will work alongside it.

## Getting Started

```bash
# Install dependencies (Bun 1.4 uses text lockfile bun.lock)
bun install

# Start dev server (http://localhost:5173)
bun run dev
# or open in browser
bun run dev -- --open
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | `vite dev` – SvelteKit dev server with HMR |
| `bun run build` | `vite build` – static build via `@sveltejs/adapter-static` → `build/` |
| `bun run preview` | `vite preview` – serve built `build/` locally |
| `bun run cf:deploy` | Build + `wrangler pages deploy build` |

All scripts use `vite` directly; Bun 1.4 executes them natively (`bun --bun` is default for these tasks via `bunfig.toml`).

## Building

```bash
bun run build
# output: build/ (precompressed .gz + .br via adapter-static)
bun run preview
```

## Deploying to Cloudflare Pages (2026)

This project uses `@sveltejs/adapter-static` – fully prerendered static output (`export const prerender = true` + `origin: https://archangelgca.eu`).

### Option A – Git Integration (Recommended)

1. Push repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Set:
   - **Build command:** `bun run build`
   - **Build output directory:** `build`
   - **Root directory:** (repo root)
4. Environment variables: none required. Bun 1.4 is available in Cloudflare's 2026 build image by default; if needed set `BUN_VERSION=1.4.0`.
5. Save & Deploy.

### Option B – Wrangler CLI (Manual)

```bash
bun run build
bunx wrangler pages deploy build --project-name=archangelgca
# or via npm script:
bun run cf:deploy
```

`wrangler.jsonc` is configured for static assets:

```jsonc
{
  "compatibility_date": "2026-08-25",
  "assets": { "directory": "build", "not_found_handling": "404-page" }
}
```

### Wrangler Local Preview

```bash
bunx wrangler pages dev build
```

## Bun Migration Notes

- Migrated from npm/`package-lock.json` → `bun`/`bun.lock` (text lockfile, Bun 1.4.0).
- `package.json` has `"packageManager": "bun@1.4.0"` and `"engines": { "bun": ">=1.4.0" }`.
- Removed `.npmrc` (`engine-strict`); replaced with `bunfig.toml`.
- Removed `package-lock.json`; committed `bun.lock`.
- Vite 7 → 8 and `@sveltejs/vite-plugin-svelte` 6 → 7 (Vite 8 stable, required for Bun 1.4 optimal ESM).
- `@sveltejs/kit` 2.50 → 2.70, `svelte` 5.49 → 5.56, `@formkit/auto-animate` 0.9 → 0.10, `@fortawesome/fontawesome-free` 7.1 → 7.3.
- Svelte config now explicitly sets `pages: 'build', assets: 'build', precompress: { gzip, brotli }` for Cloudflare Pages.
- `vite.config.js` unchanged except comment – works natively with Bun's ESM loader.

## Tech Stack

- SvelteKit `^2.70.3` + Svelte `^5.56.10` + Vite `^8.2.2`
- Adapter: `@sveltejs/adapter-static` `^3.0.10`
- UI: Bootstrap `^5.3.8`, FontAwesome `^7.3.1`
- Other: `@formkit/auto-animate`, `@svelte-plugins/tooltips`, `sk-seo`
