#!/usr/bin/env node
/**
 * Sync the "Live on N chains" list from snf-client, the single source of truth.
 *
 * Live chains  = `supportedChains` in snf-client/src/config/chains.ts (order preserved).
 * Name + logo  = the matching entry in snf-client/src/config/assets/chains.ts.
 *
 * Writes lib/chains.generated.json and copies each logo into public/chains/.
 * Runs before `dev` and `build`. When the snf-client checkout is not next to this
 * repo (CI, Cloudflare build) it keeps the committed JSON and exits 0.
 *
 *   node scripts/sync-chains.mjs          sync
 *   node scripts/sync-chains.mjs --check  exit 1 if the committed list is stale
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const CLIENT = resolve(process.env.SNF_CLIENT_DIR ?? join(ROOT, '..', 'snf-client'))
const CHAINS_TS = join(CLIENT, 'src/config/chains.ts')
const CATALOG_TS = join(CLIENT, 'src/config/assets/chains.ts')
const ICONS_DIR = join(CLIENT, 'public/icons')
const OUT_JSON = join(ROOT, 'lib/chains.generated.json')
const OUT_ICONS = join(ROOT, 'public/chains')
const CHECK = process.argv.includes('--check')

// Chains snf-client imports from wagmi/chains instead of declaring with defineChain.
const WAGMI_CHAIN_IDS = { mainnet: 1, base: 8453, arbitrum: 42161, polygon: 137, avalanche: 43114, optimism: 10, bsc: 56 }

// Landing-only presentation tweaks. The page has a light background.
const DISPLAY_NAME = { 42161: 'Arbitrum' }
// HyperEVM's catalog `logoUrl` is the mint glyph, too faint on a light background.
const LOGO_ON_LIGHT = { 999: '/icons/hyperevm-dark.png' }

function fail(msg) {
  console.error(`[sync-chains] ${msg}`)
  process.exit(1)
}

if (!existsSync(CHAINS_TS) || !existsSync(CATALOG_TS)) {
  const msg = `snf-client not found at ${CLIENT}; keeping committed lib/chains.generated.json`
  if (CHECK) fail(msg)
  console.warn(`[sync-chains] ${msg}`)
  process.exit(0)
}

const chainsSrc = readFileSync(CHAINS_TS, 'utf8')
const catalogSrc = readFileSync(CATALOG_TS, 'utf8')

const listMatch = chainsSrc.match(/export const supportedChains\s*=\s*\[([^\]]+)\]/)
if (!listMatch) fail('could not find `supportedChains` in snf-client/src/config/chains.ts')
const identifiers = listMatch[1].split(',').map((s) => s.trim()).filter(Boolean)

const definedIds = {}
for (const m of chainsSrc.matchAll(/export const (\w+)\s*=\s*defineChain\(\{\s*id:\s*(\d+)/g)) {
  definedIds[m[1]] = Number(m[2])
}

const constIds = {}
for (const m of catalogSrc.matchAll(/export const (CHAIN_ID_\w+)\s*=\s*(-?\d+)/g)) {
  constIds[m[1]] = Number(m[2])
}
const catalog = {}
for (const m of catalogSrc.matchAll(/\{\s*chainId:\s*(CHAIN_ID_\w+),([\s\S]*?)\n\}/g)) {
  const body = m[2]
  const name = body.match(/name:\s*'([^']+)'/)?.[1]
  const logoUrl = body.match(/logoUrl:\s*'([^']+)'/)?.[1]
  if (name && constIds[m[1]] !== undefined) catalog[constIds[m[1]]] = { name, logoUrl }
}

const chains = identifiers.map((ident) => {
  const id = definedIds[ident] ?? WAGMI_CHAIN_IDS[ident]
  if (id === undefined) fail(`unknown chain identifier "${ident}" in supportedChains; add it to WAGMI_CHAIN_IDS`)
  const entry = catalog[id]
  if (!entry) fail(`chain ${id} (${ident}) has no entry in snf-client/src/config/assets/chains.ts`)
  const source = LOGO_ON_LIGHT[id] ?? entry.logoUrl
  const file = source?.replace(/^\/icons\//, '')
  const hasLogo = Boolean(file) && existsSync(join(ICONS_DIR, file))
  return { id, name: DISPLAY_NAME[id] ?? entry.name, logo: hasLogo ? `/chains/${file}` : null }
})

const next = `${JSON.stringify(chains, null, 2)}\n`
const current = existsSync(OUT_JSON) ? readFileSync(OUT_JSON, 'utf8') : ''

if (CHECK) {
  if (current !== next) fail('lib/chains.generated.json is stale; run `pnpm sync:chains` and commit')
  console.log(`[sync-chains] up to date (${chains.length} chains)`)
  process.exit(0)
}

mkdirSync(OUT_ICONS, { recursive: true })
for (const c of chains) {
  if (c.logo) copyFileSync(join(ICONS_DIR, c.logo.replace('/chains/', '')), join(ROOT, 'public', c.logo))
}
if (current !== next) writeFileSync(OUT_JSON, next)
const missing = chains.filter((c) => !c.logo).map((c) => c.name)
console.log(
  `[sync-chains] ${chains.length} live chains${current !== next ? ' (list changed)' : ''}` +
    (missing.length ? `; missing logos: ${missing.join(', ')}` : ''),
)
