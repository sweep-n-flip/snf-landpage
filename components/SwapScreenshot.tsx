'use client'

export function SwapScreenshot() {
  return (
    <div className="flex justify-center" style={{ perspective: '1000px' }}>
      <a
        href="https://app.sweepnflip.io/swap"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        style={{ transform: 'rotateX(4deg) rotateY(-3deg)', transformStyle: 'preserve-3d', transition: 'transform 0.4s ease' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'rotateX(1deg) rotateY(0deg) scale(1.02)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'rotateX(4deg) rotateY(-3deg)')}
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] blur-3xl"
          style={{ background: 'radial-gradient(ellipse at 50% 65%, rgba(220,38,38,0.28) 0%, rgba(234,88,12,0.10) 45%, transparent 70%)' }} />

        {/* image */}
        <div className="overflow-hidden rounded-3xl"
          style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.07), 0 -1px 0 rgba(255,255,255,0.12) inset' }}>
          <img
            src="/assets/swap-screenshot.png"
            alt="Sweep n' Flip — Swap interface"
            className="block w-full max-w-[480px]"
          />
        </div>

        {/* hover CTA overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)' }}>
          <span className="rounded-full px-5 py-2 text-xs font-bold text-white"
            style={{ background: 'linear-gradient(135deg,#dc2626,#ea580c)', boxShadow: '0 4px 20px rgba(220,38,38,0.5)' }}>
            Open App →
          </span>
        </div>
      </a>
    </div>
  )
}
