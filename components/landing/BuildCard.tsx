import type { ReactNode } from 'react'
import { ArrowRightIcon, StrokeIcon } from './icons'

interface BuildCardProps {
  icon: string
  iconTone: string
  badges: ReactNode
  title: string
  body: string
  cta: { label: string; href: string }
  featured?: boolean
  children: ReactNode
}

export function Badge({ children, tone, dashed = false }: { children: ReactNode; tone: string; dashed?: boolean }) {
  return (
    <span className={`shrink-0 whitespace-nowrap rounded-full px-[9px] py-[3px] text-[11px] font-bold tracking-[.08em] ${dashed ? 'border border-dashed bg-white' : ''} ${tone}`}>
      {children}
    </span>
  )
}

/** One card of the "Build with us" grid; `featured` adds the gradient border. */
export function BuildCard({ icon, iconTone, badges, title, body, cta, featured = false, children }: BuildCardProps) {
  const external = cta.href.startsWith('http')
  const inner = (
    <div className={`flex h-full flex-col gap-[18px] bg-white p-6 ${featured ? 'rounded-3xl' : ''}`}>
      <div className="flex items-center justify-between">
        <span className={`flex h-11 w-11 items-center justify-center rounded-[13px] ${iconTone}`}>
          <StrokeIcon d={icon} />
        </span>
        <span className="flex shrink-0 items-center gap-1.5">{badges}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="m-0 text-[22px] font-bold tracking-[-.02em]">{title}</h3>
        <p className="m-0 text-[15px] leading-[1.55] text-slate-600 text-pretty">{body}</p>
      </div>
      <div className="mt-auto">{children}</div>
      <a
        href={cta.href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex h-[46px] items-center justify-between rounded-[14px] border border-slate-200 bg-canvas px-4 text-sm font-semibold text-ink transition-all hover:border-snf hover:bg-[#FFF5F2] hover:text-snf"
      >
        {cta.label}
        <ArrowRightIcon />
      </a>
    </div>
  )

  if (featured) {
    return (
      <div className="rounded-[25.5px] bg-[linear-gradient(160deg,rgba(255,122,69,.8),rgba(226,232,240,.9)_40%,rgba(168,85,247,.6))] p-[1.5px] shadow-[0_30px_60px_-32px_rgba(255,46,0,.45)] transition-transform duration-200 hover:-translate-y-1">
        {inner}
      </div>
    )
  }
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-[0_1px_3px_rgba(15,23,42,.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(255,46,0,.35)]">
      {inner}
    </div>
  )
}
