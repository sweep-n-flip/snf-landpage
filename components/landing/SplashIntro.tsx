'use client'

import { useEffect, useState } from 'react'

const SPLASH_MS = 2700

/**
 * Full-screen wordmark intro. The CSS animation hides it even without JS; the timer
 * covers reduced-motion users (animations off), and a click skips it.
 */
export function SplashIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), SPLASH_MS)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div
      onClick={() => setVisible(false)}
      className="lp-splash fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-[18px] bg-canvas"
      aria-hidden="true"
    >
      <span className="relative block w-[min(560px,80vw)] aspect-[251/28]">
        <img src="/brand/wm-sheen-letters.svg" alt="" className="absolute inset-0 h-full w-full" />
        <img
          src="/brand/wm-mark-ink.svg"
          alt=""
          className="lp-flip absolute left-[54.58%] top-[-3.57%] h-[107.14%] w-[11.55%]"
        />
      </span>
      <span className="text-xs font-bold tracking-[.32em] text-slate-400">NFT LIQUIDITY PROTOCOL</span>
    </div>
  )
}
