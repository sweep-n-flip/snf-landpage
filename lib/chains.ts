import generated from './chains.generated.json'

export interface LiveChain {
  id: number
  name: string
  /** Path under /public, or null while the logo is missing in snf-client. */
  logo: string | null
}

/**
 * Chains the SnF app is live on, in the app's own order. Generated from snf-client by
 * `scripts/sync-chains.mjs` (runs before dev/build) — never edit the JSON by hand.
 */
export const LIVE_CHAINS: readonly LiveChain[] = generated

export const LIVE_CHAIN_COUNT = LIVE_CHAINS.length
