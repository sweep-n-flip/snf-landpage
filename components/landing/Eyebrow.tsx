import type { ReactNode } from 'react'

/** Orange section label with a leading rule (and a trailing one when centered). */
export function Eyebrow({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  const rule = <span className="h-0.5 w-8 rounded-sm bg-snf" />
  return (
    <span className="flex items-center gap-3 text-xs font-bold tracking-[.14em] text-snf">
      {rule}
      {children}
      {centered && rule}
    </span>
  )
}
