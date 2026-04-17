'use client'

import { useState } from 'react'

const MINT_PRICE_ETH = 0.02
const ETH_PRICE_USD  = 2327.5
const MAX_SUPPLY     = 3333
const MINTED         = 1847
const MAX_QTY        = 10
const POINTS_PER_NFT = 47

const ETH_ICON = (
  <svg viewBox="0 0 784.37 1277.39" className="h-3 w-3 fill-white">
    <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" opacity=".55"/>
    <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" opacity=".9"/>
    <polygon points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" opacity=".55"/>
    <polygon points="392.07,1277.38 392.07,956.52 -0,724.89" opacity=".9"/>
    <polygon points="392.07,882.29 784.13,650.54 392.07,472.33" opacity=".25"/>
    <polygon points="-0,650.54 392.07,882.29 392.07,472.33" opacity=".6"/>
  </svg>
)

const CHEVRON_DOWN = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="opacity-50">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

export function SwapCard() {
  const [qty, setQty] = useState(1)
  const [expanded, setExpanded] = useState(false)

  const ethAmount = (qty * MINT_PRICE_ETH).toFixed(4)
  const usdAmount = (qty * MINT_PRICE_ETH * ETH_PRICE_USD).toFixed(2)
  const progress  = Math.round((MINTED / MAX_SUPPLY) * 100)
  const remaining = MAX_SUPPLY - MINTED

  return (
    <div className="relative mx-auto w-full max-w-[400px] select-none">

      {/* ambient glow layers */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem]"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(220,38,38,0.18) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] blur-xl"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(234,88,12,0.12) 0%, transparent 60%)' }} />

      {/* card shell */}
      <div
        className="rounded-[1.75rem] p-px shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, rgba(234,88,12,0.35) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.03) 100%)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)',
        }}
      >
        <div
          className="rounded-[1.7rem] p-5 space-y-3"
          style={{
            background: 'linear-gradient(160deg, rgba(22,18,36,0.98) 0%, rgba(12,10,20,0.99) 100%)',
            backdropFilter: 'blur(32px)',
          }}
        >

          {/* header */}
          <div className="flex items-center justify-between px-0.5 pb-1">
            <div className="flex items-center gap-2.5">
              <span className="text-[13px] font-semibold text-white/90 tracking-tight">Swap</span>
              <span className="flex items-center gap-1 rounded-full border px-2 py-0.5"
                style={{ borderColor: 'rgba(234,88,12,0.35)', background: 'rgba(234,88,12,0.08)' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-orange-500">Live Mint</span>
              </span>
            </div>
            <button className="rounded-lg p-1.5 text-white/30 hover:text-white/60 transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          {/* FROM — ETH */}
          <div className="rounded-2xl px-4 py-3.5 space-y-2.5"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[26px] font-semibold leading-none text-white tabular-nums tracking-tight">
                  {ethAmount}
                </p>
                <p className="text-[11px] text-white/30 mt-1.5">${usdAmount}</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-semibold text-white transition-all hover:brightness-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg,#627EEA 0%,#3D5FD9 100%)' }}>
                  {ETH_ICON}
                </span>
                ETH
                {CHEVRON_DOWN}
              </button>
            </div>
            <div className="flex justify-end">
              <span className="text-[10px] text-white/25">Balance: 0.0012 ETH</span>
            </div>
          </div>

          {/* arrow */}
          <div className="flex justify-center relative z-10 -my-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(220,38,38,0.9) 0%, rgba(234,88,12,0.9) 100%)',
                boxShadow: '0 4px 16px rgba(220,38,38,0.4)',
                border: '2px solid rgba(12,10,20,1)',
              }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5}>
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>

          {/* TO — NFT */}
          <div className="rounded-2xl px-4 py-3.5 space-y-3"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[26px] font-semibold leading-none text-white tabular-nums tracking-tight">{qty}</p>
                <p className="text-[11px] text-white/30 mt-1.5">{qty} NFT{qty > 1 ? 's' : ''}</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-full pl-1.5 pr-2.5 py-1.5 text-[13px] font-semibold text-white transition-all hover:brightness-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src="https://i.seadn.io/s/raw/files/b0eb7981ad73b6869d8f6dde43c7c1fb.png"
                  alt="Based Sweepers"
                  className="h-[22px] w-[22px] rounded-md object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><rect width="22" height="22" rx="6" fill="%23ea580c" opacity="0.3"/><text x="11" y="16" text-anchor="middle" font-size="12" fill="%23ea580c">🧹</text></svg>'
                  }}
                />
                <span className="max-w-[108px] truncate">Based Sweepers</span>
                {CHEVRON_DOWN}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-white/60 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <svg width="10" height="2" viewBox="0 0 10 2" fill="currentColor"><rect width="10" height="2" rx="1"/></svg>
                </button>
                <span className="w-5 text-center text-sm font-bold text-white">{qty}</span>
                <button
                  onClick={() => setQty(q => Math.min(MAX_QTY, q + 1))}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-white/60 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <rect x="4" y="0" width="2" height="10" rx="1"/>
                    <rect x="0" y="4" width="10" height="2" rx="1"/>
                  </svg>
                </button>
              </div>
              <button className="text-[11px] font-semibold transition-opacity hover:opacity-80"
                style={{ color: 'oklch(0.65 0.27 27)' }}>
                Choose NFTs →
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                <span>{MINTED.toLocaleString()} minted</span>
                <span>{remaining.toLocaleString()} remaining</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #dc2626 0%, #ea580c 100%)',
                  }}
                />
              </div>
              <p className="text-right text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>{progress}% minted</p>
            </div>

            <div className="flex justify-end">
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>Balance: 0</span>
            </div>
          </div>

          {/* pool row */}
          <div
            className="rounded-2xl px-4 py-3 cursor-pointer transition-all hover:brightness-110"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            onClick={() => setExpanded(e => !e)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative h-6 w-9 shrink-0">
                  <span className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full ring-2"
                    style={{ background: 'linear-gradient(135deg,#627EEA,#3D5FD9)', ringColor: 'rgba(12,10,20,1)' }}>
                    {ETH_ICON}
                  </span>
                  <img
                    src="https://i.seadn.io/s/raw/files/b0eb7981ad73b6869d8f6dde43c7c1fb.png"
                    alt=""
                    className="absolute right-0 h-6 w-6 rounded-md object-cover"
                    style={{ boxShadow: '-2px 0 0 2px rgba(12,10,20,1)' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <span className="text-[12px] font-semibold text-white/70">ETH / BSWP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white"
                  style={{ background: 'linear-gradient(90deg, rgba(220,38,38,0.9), rgba(234,88,12,0.9))' }}>
                  MINT
                </span>
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  className={`text-white/25 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>

            {expanded && (
              <div className="mt-3 pt-3 space-y-1.5 text-[11px]"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex justify-between">
                  <span className="text-white/35">Rate</span>
                  <span className="text-white/70 font-medium">1 BSWP = {MINT_PRICE_ETH} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/35">Price impact</span>
                  <span style={{ color: '#34d399' }}>{'< 0.01%'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/35">Network</span>
                  <span className="text-white/70 font-medium">Base mainnet</span>
                </div>
              </div>
            )}
          </div>

          {/* total row */}
          <div className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span className="text-[11px] text-white/30">Total</span>
            <span className="text-sm font-bold text-white">{ethAmount} ETH</span>
          </div>

          {/* CTA */}
          <a
            href="https://app.sweepnflip.io/swap"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl py-4 text-center text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
              boxShadow: '0 6px 32px rgba(220,38,38,0.45), 0 1px 0 rgba(255,255,255,0.1) inset',
            }}
          >
            Mint
          </a>

          <p className="text-center text-[10px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
            No wallet needed to preview · Base mainnet
          </p>

        </div>
      </div>
    </div>
  )
}
