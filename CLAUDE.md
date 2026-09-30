# snf-landpage — Business Landing Page

**GitHub**: snf-landpage
**Status**: Published — marketing/informational site

## What This Is

Public-facing landing page for Sweep n' Flip. Explains the product, links to the app (snf-client), and provides business/marketing information.

## Relationship to Other Repos

- Links to **snf-client** (the AMM app)
- Hosted separately from the main app
- No blockchain interaction — purely informational

## Rules

- Read workspace CLAUDE.md (parent directory) for context
- Keep content aligned with current product status
- No API keys or sensitive data
- **Chains are generated, never hand-edited**: `lib/chains.generated.json` + `public/chains/` come from snf-client (`supportedChains` in `src/config/chains.ts` + names/logos in `src/config/assets/chains.ts`) via `scripts/sync-chains.mjs`, which runs before `pnpm dev`/`pnpm build`. Every chain count on the page derives from `LIVE_CHAIN_COUNT`. After a chain enters or leaves snf-client, run `pnpm sync:chains` and commit; `pnpm check:chains` fails on drift. Without the sibling snf-client checkout (Cloudflare build) the script keeps the committed JSON.
- **Outbound links live in `lib/links.ts`** — change a URL there, never inline in a component.
- **Home page = Landing v4** (Claude Design, 2026-09-30), components in `components/landing/`. Design exports go to `.design-import/<date>/` (gitignored) and are rewritten, not pasted. The demo swap card is illustrative (fictional "Neon Koi"); never add a "Points you will earn" row — points do not exist yet.
- **Versions**: `lib/landingVersions.ts` defines `v3.0` (no "Build with us" section, no SDK/MCP/Builder Codes in the footer) and `v3.1` (everything). `/` renders `ACTIVE_LANDING_VERSION`; `/v3-0` and `/v3-1` are noindex previews. Add new sections behind a feature flag there instead of forking the page.
