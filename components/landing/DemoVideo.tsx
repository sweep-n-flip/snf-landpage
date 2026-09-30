'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { DemoSwapCard } from './DemoSwapCard'

/**
 * Plays the swap recording once, then fades to an interactive swap card scaled to
 * fit the same frame. "Replay" restarts the video.
 */
export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)
  const [aspect, setAspect] = useState('16 / 9')
  const [scale, setScale] = useState(0.6)

  const fitCard = useCallback(() => {
    const frame = frameRef.current
    const card = cardRef.current
    if (!frame || !card) return
    const s = Math.min(1, (frame.clientHeight - 40) / card.offsetHeight, (frame.clientWidth - 40) / card.offsetWidth)
    setScale((prev) => (Math.abs(s - prev) > 0.005 ? Number(s.toFixed(3)) : prev))
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (v) {
      v.muted = true
      v.play().catch(() => {})
    }
    const ro = new ResizeObserver(fitCard)
    if (frameRef.current) ro.observe(frameRef.current)
    fitCard()
    return () => ro.disconnect()
  }, [fitCard])

  const replay = () => {
    const v = videoRef.current
    setDone(false)
    if (v) {
      v.currentTime = 0
      v.play().catch(() => {})
    }
  }

  return (
    <div className="w-full max-w-[1040px] rounded-[29.5px] bg-[linear-gradient(160deg,rgba(255,122,69,.75),rgba(226,232,240,.9)_32%,rgba(226,232,240,.9)_68%,rgba(168,85,247,.6))] p-[1.5px] shadow-[0_40px_90px_-36px_rgba(255,46,0,.4),0_12px_30px_-16px_rgba(15,23,42,.18)]">
      <div ref={frameRef} className="relative overflow-hidden rounded-[28px] bg-[#0A0D14]" style={{ aspectRatio: aspect }}>
        <video
          ref={videoRef}
          src="/media/swap-buy.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label="Buying NFTs on Sweep n' Flip"
          onLoadedMetadata={(e) => {
            const v = e.currentTarget
            if (v.videoWidth) setAspect(`${v.videoWidth} / ${v.videoHeight}`)
            requestAnimationFrame(fitCard)
          }}
          onEnded={() => {
            setDone(true)
            requestAnimationFrame(fitCard)
          }}
          className="absolute inset-0 block h-full w-full object-cover transition-opacity duration-[600ms]"
          style={{ opacity: done ? 0 : 1 }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden bg-canvas transition-opacity duration-[600ms]"
          style={{ opacity: done ? 1 : 0, pointerEvents: done ? 'auto' : 'none' }}
          aria-hidden={!done}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 -ml-[380px] -mt-[380px] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(255,90,50,.16),rgba(255,90,50,0)_62%)]" />
          <div className="pointer-events-none absolute -bottom-[200px] -right-[160px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,.13),rgba(168,85,247,0)_62%)]" />
          <div ref={cardRef} className="relative shrink-0 origin-center" style={{ transform: `scale(${scale})` }}>
            <DemoSwapCard />
          </div>
          <button
            type="button"
            onClick={replay}
            aria-label="Replay video"
            className="absolute bottom-[18px] left-[18px] flex h-[38px] items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 text-[13px] font-semibold text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,.08)] backdrop-blur-md transition-colors hover:border-snf-line hover:text-snf"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Replay
          </button>
        </div>
      </div>
    </div>
  )
}
