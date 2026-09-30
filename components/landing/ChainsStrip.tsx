import { LIVE_CHAINS, LIVE_CHAIN_COUNT } from '@/lib/chains'
import type { LiveChain } from '@/lib/chains'
import { Eyebrow } from './Eyebrow'

function ChainItem({ chain }: { chain: LiveChain }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-base font-medium text-slate-500">
      {chain.logo ? (
        <img src={chain.logo} alt="" className="block h-[22px] w-auto sm:h-[26px]" />
      ) : (
        <span title={`Logo pending: ${chain.name}`} className="h-[22px] w-[22px] shrink-0 rounded-full border-[1.5px] border-dashed border-slate-300 sm:h-[26px] sm:w-[26px]" />
      )}
      {chain.name}
    </span>
  )
}

/** "Live on N chains" — list and count both come from snf-client (see lib/chains.ts). */
export function ChainsStrip() {
  const label = `Live on ${LIVE_CHAIN_COUNT} chains`
  return (
    <section id="chains" aria-label={label} className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 pt-[72px]">
      <Eyebrow centered>{label.toUpperCase()}</Eyebrow>

      <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] motion-reduce:hidden">
        <div className="lp-marquee flex w-max">
          {[false, true].map((copy) => (
            <div key={String(copy)} aria-hidden={copy} className="flex shrink-0 items-center gap-12 pr-12">
              {LIVE_CHAINS.map((c) => (
                <ChainItem key={c.id} chain={c} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden max-w-[960px] flex-wrap justify-center gap-x-10 gap-y-5 motion-reduce:flex">
        {LIVE_CHAINS.map((c) => (
          <ChainItem key={c.id} chain={c} />
        ))}
      </div>
    </section>
  )
}
