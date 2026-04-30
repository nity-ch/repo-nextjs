# repo-nextjs

A Next.js (App Router) app consuming `@playground/ui`.

## Standalone

```bash
pnpm install   # @playground/ui resolves from GitHub Release tarball via pnpm.overrides
pnpm dev
```

## Under the umbrella

Run `nity bootstrap` from the umbrella root. `@playground/ui` links to local source. The one Next-specific requirement: `transpilePackages: ['@playground/ui']` in `next.config.mjs`, since Next won't run `node_modules` through SWC by default.
