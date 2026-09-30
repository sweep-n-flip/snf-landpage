'use client'

import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { impactTone, quoteDemoBuy } from '@/lib/demoPool'
import { LaunchButton } from './LaunchButton'

// Illustrative numbers only. "Neon Koi" is a fictional collection; pricing follows
// the real pool curve (see lib/demoPool.ts), but nothing here is a live quote.
const MAX_NFTS = 50
const ETH_USD = 3414
const ETH_BALANCE = '42.50'

const eth = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4, useGrouping: true })
const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, useGrouping: true })
const MODES = ['NFT AMM', 'Aggregator'] as const

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.4" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function StepButton({ label, onClick, path }: { label: string; onClick: () => void; path: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-snf-line bg-white text-snf transition-colors hover:border-snf hover:bg-snf hover:text-white"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
        <path d={path} />
      </svg>
    </button>
  )
}

/** Static mock of the swap card shown after the demo video ends. */
export function DemoSwapCard() {
  const [count, setCount] = useState(5)
  const [mode, setMode] = useState(0)
  const dragging = useRef(false)

  const quote = quoteDemoBuy(count)
  const fill = `${(count / MAX_NFTS) * 100}%`
  const clamp = (n: number) => Math.min(MAX_NFTS, Math.max(1, n))

  const fromPointer = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
    setCount(clamp(Math.round(ratio * MAX_NFTS)))
  }

  return (
    <div className="w-[520px] max-w-full rounded-[33.5px] bg-[linear-gradient(160deg,rgba(255,122,69,.6),rgba(226,232,240,.9)_30%,rgba(226,232,240,.9)_70%,rgba(168,85,247,.45))] p-[1.5px] shadow-[0_50px_100px_-40px_rgba(255,46,0,.4),0_16px_40px_-20px_rgba(15,23,42,.18)]">
      <div className="flex flex-col gap-2.5 rounded-[32px] bg-white px-3 pb-3 pt-[26px] text-left">
        <div className="flex items-center justify-between px-4 pb-2">
          <span className="text-[22px] font-semibold">Swap</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.8" aria-hidden="true">
            <circle cx="8" cy="6" r="2.5" />
            <circle cx="16" cy="18" r="2.5" />
            <path d="M10.5 6H20M4 18h9.5" />
          </svg>
        </div>

        <div className="flex items-start justify-between gap-3 rounded-3xl border border-[#EDF1F7] bg-[#F4F6FA] px-[22px] pb-[18px] pt-[22px]">
          <span className="flex min-w-0 flex-col gap-1.5">
            <span className="text-[44px] font-bold leading-none tracking-[-.03em] tabular-nums">{eth(quote.totalETH)}</span>
            <span className="text-[15px] text-slate-500">{usd(quote.totalETH * ETH_USD)}</span>
          </span>
          <span className="flex shrink-0 flex-col items-end gap-2.5">
            <span className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-3.5 text-lg font-semibold shadow-[0_2px_8px_rgba(15,23,42,.1)]">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#EEF1F6] text-[17px] font-bold text-slate-800">Ξ</span>
              ETH
              <Chevron />
            </span>
            <span className="whitespace-nowrap text-sm text-slate-500">Balance: {ETH_BALANCE} ETH</span>
          </span>
        </div>

        <div className="relative z-[1] -my-6 flex justify-center">
          <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[1.5px] border-[#EDF1F7] bg-white text-slate-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </span>
        </div>

        <div className="flex flex-col gap-3.5 rounded-3xl border border-[#EDF1F7] bg-[#F4F6FA] px-[22px] pb-5 pt-[22px]">
          <div className="flex items-start justify-between gap-3">
            <span className="flex flex-col gap-1.5">
              <span className="text-[44px] font-bold leading-none tracking-[-.03em]">{count}</span>
              <span className="text-[15px] text-slate-500">{count} NFTs</span>
            </span>
            <span className="flex shrink-0 flex-col items-end gap-2.5">
              <span className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-3.5 text-lg font-semibold shadow-[0_2px_8px_rgba(15,23,42,.1)]">
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#22D3EE,#EC4899)] text-[11px] font-extrabold text-white">NK</span>
                Neon Koi
                <Chevron />
              </span>
              <span className="text-sm text-slate-500">Balance: 3</span>
            </span>
          </div>
          <div className="mt-1 grid grid-cols-[1fr_auto_1fr] items-center">
            <span />
            <span className="flex items-center gap-2 whitespace-nowrap text-base font-semibold text-snf">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              Choose NFTs
            </span>
            <span className="justify-self-end whitespace-nowrap text-sm text-slate-400">max. {MAX_NFTS}</span>
          </div>
          <div className="flex items-center gap-3">
            <StepButton label="One less NFT" onClick={() => setCount((n) => clamp(n - 1))} path="M5 12h14" />
            <div
              role="slider"
              aria-label="Number of NFTs"
              aria-valuemin={1}
              aria-valuemax={MAX_NFTS}
              aria-valuenow={count}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowUp') setCount((n) => clamp(n + 1))
                if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') setCount((n) => clamp(n - 1))
              }}
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId)
                dragging.current = true
                fromPointer(e)
              }}
              onPointerMove={(e) => dragging.current && fromPointer(e)}
              onPointerUp={() => (dragging.current = false)}
              className="relative h-[30px] flex-1 cursor-pointer touch-none"
            >
              <div className="absolute inset-x-0 top-3 h-1.5 rounded-full bg-slate-200" />
              <div className="absolute left-0 top-3 h-1.5 rounded-full bg-[linear-gradient(90deg,#FF7A45,#FF2E00)]" style={{ width: fill }} />
              <div
                className="absolute top-0.5 -ml-[13px] h-[26px] w-[26px] rounded-full border-[2.5px] border-snf bg-white shadow-[0_0_0_5px_rgba(255,46,0,.1),0_2px_8px_rgba(255,46,0,.3)]"
                style={{ left: fill }}
              />
            </div>
            <StepButton label="One more NFT" onClick={() => setCount((n) => clamp(n + 1))} path="M5 12h14M12 5v14" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5 rounded-[20px] border border-[#EDF1F7] py-2.5 pl-4 pr-2.5">
          <span className="flex items-center gap-2.5 whitespace-nowrap text-base font-semibold">
            <span className="flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#EEF1F6] text-sm font-bold">Ξ</span>
              <span className="-ml-2 h-7 w-7 rounded-lg border-2 border-white bg-[linear-gradient(135deg,#22D3EE,#EC4899)]" />
            </span>
            ETH/NEONKOI
          </span>
          <span className="flex gap-0.5 rounded-full border border-slate-200 bg-[#EEF1F6] p-[3px]">
            {MODES.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setMode(i)}
                className={`whitespace-nowrap rounded-full px-3.5 py-[7px] text-sm font-semibold ${
                  mode === i ? 'bg-white text-ink shadow-[0_1px_3px_rgba(15,23,42,.12)]' : 'text-slate-500'
                }`}
              >
                {label}
              </button>
            ))}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-[20px] border border-[#EDF1F7] px-4 py-3.5 text-[15px] text-slate-600">
          <span className="tabular-nums">1 NEONKOI ≈ {eth(quote.avgPerNFT)} ETH</span>
          <span className={`flex items-center gap-2 font-semibold tabular-nums ${impactTone(quote.priceImpact)}`} title="Price impact">
            {quote.priceImpact.toFixed(2)}%
            <Chevron />
          </span>
        </div>

        <LaunchButton size="lg" />
      </div>
    </div>
  )
}
