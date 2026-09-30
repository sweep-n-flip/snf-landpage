import { LANDING_VERSIONS } from '@/lib/landingVersions'
import type { LandingVersion } from '@/lib/landingVersions'
import { AmmSection } from './AmmSection'
import { BuildSection } from './BuildSection'
import { ChainsStrip } from './ChainsStrip'
import { CommunityCta } from './CommunityCta'
import { DemoVideo } from './DemoVideo'
import { LandingFooter } from './LandingFooter'
import { LaunchButton } from './LaunchButton'
import { PartnersSection } from './PartnersSection'
import { SplashIntro } from './SplashIntro'
import { Wordmark } from './Wordmark'

interface LandingPageProps {
  version: LandingVersion
}

export function LandingPage({ version }: LandingPageProps) {
  const features = LANDING_VERSIONS[version]
  return (
    <div className="lp relative min-h-screen overflow-clip bg-canvas font-geist text-ink antialiased selection:bg-snf/20">
      <div className="lp-floaty pointer-events-none absolute -top-[260px] left-1/2 -ml-[520px] h-[900px] w-[1040px] rounded-full bg-[radial-gradient(circle,rgba(255,90,50,.16),rgba(255,90,50,0)_60%)]" />
      <div className="pointer-events-none absolute -right-[240px] top-[520px] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,.13),rgba(168,85,247,0)_62%)]" />

      <SplashIntro />

      <header className="sticky top-0 z-10 h-[72px] border-b border-ink/[.08] bg-canvas/75 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-6">
          <Wordmark />
          <LaunchButton />
        </div>
      </header>

      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-[22px] px-6 pt-[88px] text-center">
        <span className="whitespace-nowrap rounded-full border border-snf-line bg-snf-soft px-3.5 py-[5px] text-xs font-extrabold tracking-[.1em] text-snf">
          NFT DEX
        </span>
        <h1 className="m-0 text-[clamp(52px,8vw,96px)] font-extrabold leading-[.95] tracking-[-.05em]">
          DeFi for <span className="snf-gradient-text">NFTs</span>
        </h1>
        <p className="m-0 max-w-[560px] text-[19px] leading-normal text-slate-600 text-pretty">
          Create Pools, Add Liquidity, Earn Yield and Swap NFTs instantly.
        </p>
      </section>

      <section id="demo" className="relative mx-auto flex max-w-[1200px] justify-center px-6 pt-14">
        <DemoVideo />
      </section>

      <ChainsStrip />
      <AmmSection />
      <PartnersSection />
      {features.buildSection && <BuildSection />}
      <CommunityCta />
      <LandingFooter developerResources={features.developerResources} />
    </div>
  )
}
