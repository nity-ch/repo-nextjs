# repo-nextjs

A Next.js (App Router) app consuming `@nity/ui` and `@nity/utils`.

## Standalone

```bash
pnpm install   # @nity/ui fetches from GitHub Releases tarball; @nity/utils resolves from npm
pnpm dev
```

## Under the umbrella

Run `nity bootstrap` from the umbrella root. `@nity/ui` and `@nity/utils` link to local source. Next.js requires `transpilePackages: ['@nity/ui', '@nity/utils']` in `next.config.mjs` since it won't run `node_modules` through SWC by default.
