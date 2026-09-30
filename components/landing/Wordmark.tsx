import { LINKS } from '@/lib/links'

/**
 * Brand wordmark with the "n" mark overlaid, so the mark can flip on hover.
 * Overlay geometry comes from the V3 brand kit (251×28 viewBox).
 */
export function Wordmark() {
  return (
    <a href={LINKS.home} className="group flex" aria-label="Sweep n' Flip home">
      <span className="relative block h-6 aspect-[251/28]">
        <img src="/brand/wm-gradient-letters.svg" alt="Sweep n' Flip" className="absolute inset-0 h-full w-full" />
        <img
          src="/brand/wm-mark-ink.svg"
          alt=""
          className="absolute left-[54.58%] top-[-3.57%] h-[107.14%] w-[11.55%] transition-transform duration-[600ms] ease-[cubic-bezier(.7,0,.2,1)] group-hover:rotate-180"
        />
      </span>
    </a>
  )
}
