/**
 * Pricing for the landing's demo swap card — a fictional ETH/NEONKOI pool.
 *
 * The math mirrors snf-client `src/lib/nftPricing.ts` (Router getAmountIn for native
 * SnF NFT pools) and the buy price impact shown in the app's checkout
 * (`useCheckoutOperation.ts`), so the demo behaves like the real product: every extra
 * NFT is pulled from a smaller NFT reserve, so each costs more than the last and the
 * price impact grows with the quantity.
 *
 * Illustration only. The live app reads reserves and the marketplace fee on-chain.
 */

/** Fictional pool: 340 NFTs against 170 ETH (spot 0.5 ETH per NFT). */
export const DEMO_POOL = { reserveNFT: 340, reserveETH: 170 } as const

/** Native SnF NFT pool fee, contract constant 9800/10000 (2%). */
const NET_FEE = 9800
const FEE_DENOM = 10000
/** Router marketplace fee on every chain today (Router.marketplaceFee(), read on-chain in the app). */
const MARKETPLACE_FEE = 0.025

export interface DemoBuyQuote {
  /** ETH the buyer pays: AMM cost incl. pool fee, plus marketplace fee. Royalties off. */
  totalETH: number
  /** Average ETH per NFT for this quantity. */
  avgPerNFT: number
  /** Percent, same definition as the app: rawCost / (reserveETH + rawCost). */
  priceImpact: number
}

/** Router getAmountIn: ETH (incl. 2% pool fee) to take exactly n NFTs out of the pool. */
function ammCost(n: number): number {
  const { reserveETH, reserveNFT } = DEMO_POOL
  return (reserveETH * n * FEE_DENOM) / ((reserveNFT - n) * NET_FEE)
}

export function quoteDemoBuy(n: number): DemoBuyQuote {
  const raw = ammCost(n)
  const totalETH = raw * (1 + MARKETPLACE_FEE)
  return {
    totalETH,
    avgPerNFT: totalETH / n,
    priceImpact: (raw / (DEMO_POOL.reserveETH + raw)) * 100,
  }
}

/**
 * Price impact colour scale (founder, 2026-09-30), shared with snf-client/snf-demo:
 * up to 5% normal, 5–10% amber, 10–15% red, above 15% red.
 */
export function impactTone(impact: number): string {
  if (impact > 10) return 'text-red-600'
  if (impact > 5) return 'text-amber-700'
  return 'text-slate-600'
}
