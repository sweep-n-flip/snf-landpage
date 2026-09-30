import { Eyebrow } from './Eyebrow'
import { StrokeIcon } from './icons'

const POINTS = [
  {
    title: 'Sell instantly',
    body: 'No listing, no waiting for a buyer. Liquidity providers back every pool, ready to buy or sell on the spot.',
    icon: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
    tone: 'bg-snf-soft text-snf',
  },
  {
    title: 'Buy in one click',
    body: 'Pick one NFT or sweep several in a single transaction.',
    icon: 'M16 3H8a2 2 0 0 0-2 2v0M20 7H4M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z',
    tone: 'bg-indigo-50 text-indigo-700',
  },
  {
    // SnF NFT pools charge 2% (9800/10000) and Factory.feeTo is 0 on every chain,
    // so the whole pool fee goes to LPs.
    title: 'Earn from every trade',
    body: 'Add NFTs and an equal value in tokens to a pool, and collect 2% of every NFT trade it makes.',
    icon: 'm22 7-8.5 8.5-5-5L2 17M16 7h6v6',
    tone: 'bg-green-50 text-green-600',
  },
] as const

export function AmmSection() {
  return (
    <section id="amm" className="relative mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-14 px-6 pb-10 pt-[120px]">
      <div className="flex flex-col gap-[18px]">
        <Eyebrow>AUTOMATED MARKET MAKER</Eyebrow>
        <h2 className="m-0 text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-.035em] text-balance">
          Buy or sell, any time, instantly.
        </h2>
        <p className="m-0 max-w-[520px] text-lg leading-relaxed text-slate-600 text-pretty">
          Our pools turn every NFT collection into an always-on source of liquidity, pricing collections on the spot for
          instant swaps.
        </p>
        <span className="self-start whitespace-pre rounded-full border border-slate-200 px-3 py-[5px] font-geist-mono text-[13px] font-medium text-slate-500">
          x · y = k  ·  constant-product AMM
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {POINTS.map((p) => (
          <div key={p.title} className="flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white px-[22px] py-5 shadow-[0_1px_3px_rgba(15,23,42,.04)]">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] ${p.tone}`}>
              <StrokeIcon d={p.icon} />
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="text-[17px] font-bold">{p.title}</span>
              <span className="text-sm text-slate-500">{p.body}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
