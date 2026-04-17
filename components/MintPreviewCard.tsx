'use client'

import { useState } from 'react'
import Link from 'next/link'

const MINT_PRICE_ETH = 0.02
const MAX_SUPPLY     = 3333
const MINTED         = 1847
const MAX_PER_TX     = 10

export function MintPreviewCard() {
  const [qty, setQty] = useState(1)
  const total = (qty * MINT_PRICE_ETH).toFixed(3)
  const progress = Math.round((MINTED / MAX_SUPPLY) * 100)

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Glow halo */}
      <div className="absolute -inset-4 rounded-[2rem] bg-orange-600/20 blur-2xl -z-10" />

      {/* Card */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-5 space-y-4 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Live Mint</span>
          <span className="text-[10px] text-slate-500">Base mainnet</span>
        </div>

        {/* Collection row */}
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src="https://i.seadn.io/s/raw/files/b0eb7981ad73b6869d8f6dde43c7c1fb.png"
              alt="Based Sweepers"
              className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"><rect width="44" height="44" rx="12" fill="%23ea580c" opacity="0.2"/><text x="22" y="27" text-anchor="middle" font-size="18" fill="%23ea580c">🧹</text></svg>'
              }}
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white leading-tight truncate">Based Sweepers</p>
            <p className="text-xs text-slate-400">0.02 ETH / mint · ERC-721</p>
          </div>
        </div>

        {/* Supply progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>{MINTED.toLocaleString()} minted</span>
            <span>{MAX_SUPPLY.toLocaleString()} total</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-600 to-red-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 text-right">{progress}% minted</p>
        </div>

        {/* Quantity selector */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Quantity</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-bold transition-colors"
              >−</button>
              <span className="w-6 text-center text-sm font-bold text-white">{qty}</span>
              <button
                onClick={() => setQty(q => Math.min(MAX_PER_TX, q + 1))}
                className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-bold transition-colors"
              >+</button>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={MAX_PER_TX}
            value={qty}
            onChange={e => setQty(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none bg-slate-800 accent-orange-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-600">
            <span>1</span><span>{MAX_PER_TX}</span>
          </div>
        </div>

        {/* Total */}
        <div className="rounded-2xl bg-slate-800/60 px-4 py-3 flex items-center justify-between">
          <span className="text-xs text-slate-400">Total</span>
          <span className="text-base font-bold text-white">{total} ETH</span>
        </div>

        {/* CTA */}
        <Link
          href="https://app.sweepnflip.io/swap?chain=8453&tokenOut=0xc79eaAe02898378fE072acF8D4412A64Bb630024&mode=latest&tokenIn=eth&amountIn=0.0200000"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:-translate-y-0.5 transition-all duration-200"
        >
          Launch dApp to Mint
        </Link>

        <p className="text-center text-[10px] text-slate-600">No wallet needed to preview · Base mainnet</p>
      </div>
    </div>
  )
}
