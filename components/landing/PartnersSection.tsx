// Grant programmes and backers already credited on the live site. Logos are
// self-hosted so a third-party CDN change cannot break the section.
const PARTNERS = [
  { name: 'Optimism', logo: '/partners/optimism.png', wide: false },
  { name: 'Arbitrum', logo: '/partners/arbitrum.png', wide: false },
  { name: 'Moonbeam', logo: '/partners/moonbeam.png', wide: false },
  { name: 'IBC Group', logo: '/partners/ibc-group.svg', wide: true },
] as const

export function PartnersSection() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pb-[72px]">
      <div className="flex flex-col items-center gap-10 rounded-[28px] border border-slate-200 bg-white px-8 py-14 shadow-[0_1px_3px_rgba(15,23,42,.04)]">
        <h2 className="m-0 text-center text-[13px] font-semibold tracking-[.14em] text-slate-500">TRUSTED PARTNERS &amp; ECOSYSTEM</h2>
        <div className="flex flex-wrap items-start justify-center gap-[clamp(32px,7vw,96px)]">
          {PARTNERS.map((p) => (
            <span key={p.name} className="flex flex-col items-center gap-3.5 transition-transform duration-200 hover:-translate-y-[3px]">
              <img
                src={p.logo}
                alt={p.name}
                className={`h-[76px] object-contain ${p.wide ? 'w-[110px]' : 'w-[76px] rounded-full'}`}
              />
              <span className="whitespace-nowrap text-base font-semibold text-slate-600">{p.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
