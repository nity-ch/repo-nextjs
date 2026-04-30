# repo-nextjs

A Next.js (App Router) app that consumes `@playground/ui`.

## Standalone

```bash
pnpm install   # fetches @playground/ui tarball from GitHub Releases
pnpm dev
```

Same dual-mode story as `repo-vite`: the dep points at a GitHub Release tarball; the umbrella overrides it to `workspace:*`.

The one Next-specific knob is `transpilePackages: ['@playground/ui']` in `next.config.mjs`, since Next won't run `node_modules` through SWC by default and `@playground/ui` ships TSX source.
