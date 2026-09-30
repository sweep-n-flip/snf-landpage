import { LINKS } from '@/lib/links'
import { Wordmark } from './Wordmark'

const SOCIAL = [
  { label: 'X', href: LINKS.x },
  { label: 'Discord', href: LINKS.discord },
  { label: 'GitHub', href: LINKS.github },
  { label: 'Get in contact', href: LINKS.contact },
] as const

const linkClass = 'text-sm text-ink transition-colors hover:text-snf'
const headingClass = 'text-xs font-bold tracking-[.08em] text-slate-500'

export function LandingFooter({ developerResources }: { developerResources: boolean }) {
  // Static export: the year is fixed at build time, which every deploy refreshes.
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-8 px-6 pb-7 pt-14">
        <div className="col-span-full flex min-w-0 flex-col gap-4 sm:col-span-2">
          <Wordmark />
          <p className="m-0 max-w-[360px] text-sm leading-[1.55] text-slate-500">
            The ultimate AMM and Aggregator for NFT liquidity. Unlock the value of your assets anywhere.
          </p>
          <div className="flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-[38px] items-center rounded-[11px] border border-slate-200 px-3 text-[13px] font-semibold text-slate-600 transition-colors hover:border-snf hover:text-snf"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Products" className="flex flex-col gap-2.5">
          <span className={headingClass}>PRODUCTS</span>
          <a href="#amm" className={linkClass}>NFT AMM</a>
          <span className="text-sm text-slate-400">More to come</span>
        </nav>
        <nav aria-label="Resources" className="flex flex-col gap-2.5">
          <span className={headingClass}>RESOURCES</span>
          <a href={LINKS.docs} target="_blank" rel="noopener noreferrer" className={linkClass}>Docs</a>
          {developerResources && (
            <>
              <a href={LINKS.sdkDocs} target="_blank" rel="noopener noreferrer" className={linkClass}>SDK</a>
              {/* No public MCP page yet (the trading MCP is not built); link it once one exists. */}
              <span className="flex items-center gap-1.5 text-sm text-slate-400">
                MCP
                <span className="rounded-full bg-slate-100 px-1.5 py-px text-[10px] font-bold tracking-[.06em] text-slate-500">Soon</span>
              </span>
              <a href={LINKS.builderCodeDocs} target="_blank" rel="noopener noreferrer" className={linkClass}>Builder Codes</a>
            </>
          )}
          <a href={LINKS.audits} target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center gap-1.5`}>
            Audits
            <span className="rounded-full bg-snf-soft px-1.5 py-px text-[10px] font-bold tracking-[.06em] text-snf">New</span>
          </a>
        </nav>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-slate-100 px-6 pb-7 pt-[18px] text-[13px] text-slate-400">
        <span>© {year} Sweep n&apos; Flip. All rights reserved.</span>
        <a href={LINKS.legal} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-snf">
          Terms of Service &amp; Privacy Policy
        </a>
      </div>
    </footer>
  )
}
