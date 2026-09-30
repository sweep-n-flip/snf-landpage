import { LIVE_CHAIN_COUNT } from '@/lib/chains'
import { LINKS } from '@/lib/links'
import { Badge, BuildCard } from './BuildCard'
import { CopyCodeButton } from './CopyCodeButton'
import { Eyebrow } from './Eyebrow'
import { ArrowRightIcon } from './icons'

const KW = 'text-purple-400'
const FN = 'text-[#FF7A45]'

/** Mirrors the SDK README quickstart; keep method names in sync with @sweepnflip/sdk. */
function SdkSnippet() {
  return (
    <div className="overflow-hidden rounded-[14px] bg-ink px-4 py-3.5 font-geist-mono text-[12.5px] leading-[1.7] text-slate-300">
      <div className="whitespace-nowrap">
        <span className={KW}>import</span> {'{ createSnfClient }'} <span className={KW}>from</span>{' '}
        <span className="text-green-300">&apos;@sweepnflip/sdk&apos;</span>
      </div>
      <div className="whitespace-nowrap">
        <span className={KW}>const</span> snf = <span className={FN}>createSnfClient</span>
        {'({ chainId: '}
        <span className="text-orange-300">8453</span>
        {', publicClient })'}
      </div>
      <div className="whitespace-nowrap">
        <span className={KW}>const</span> quote = <span className={KW}>await</span> snf.<span className={FN}>quoteBuy</span>
        {'({ collection, tokenIds })'}
      </div>
      <div className="whitespace-nowrap">
        <span className={KW}>const</span> plan = <span className={KW}>await</span> snf.<span className={FN}>buildBuy</span>
        {'({ quote, recipient })'}
      </div>
    </div>
  )
}

function AgentChat() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFBFD]">
      <div className="flex items-center gap-2 border-b border-[#EEF1F6] bg-white px-3 py-[9px]">
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[7px] w-[7px] rounded-full bg-slate-200" />
          ))}
        </span>
        <span className="text-xs font-semibold text-slate-500">AI agent</span>
        <span className="ml-auto flex items-center gap-[5px] whitespace-nowrap font-geist-mono text-[11px] font-semibold text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
          snf-mcp
        </span>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="max-w-[90%] self-end rounded-[14px_14px_4px_14px] border border-slate-200 bg-white px-3 py-[9px] text-[13px] text-ink">
          Launch my collection with an ETH pool of 100 NFTs
        </div>
        <div className="flex items-center gap-2.5 rounded-[14px] border border-green-200 bg-green-50 px-3 py-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-[13px] font-semibold text-green-700">Pool ETH/MYNFT live · 100 NFTs</span>
        </div>
      </div>
    </div>
  )
}

export function BuildSection() {
  return (
    <section id="build" className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-[72px] pt-6">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div className="flex max-w-[640px] flex-col gap-4">
          <Eyebrow>BUILD WITH US</Eyebrow>
          <h2 className="m-0 text-[clamp(36px,4.6vw,56px)] font-bold leading-none tracking-[-.04em]">
            Liquidity is <span className="snf-gradient-text">infrastructure.</span>
          </h2>
          <p className="m-0 text-lg leading-relaxed text-slate-600 text-pretty">
            Instant NFT liquidity on {LIVE_CHAIN_COUNT} chains, ready to plug into anything you build.
          </p>
        </div>
        <a
          href={LINKS.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center gap-2 whitespace-nowrap rounded-[14px] border border-slate-200 bg-white px-5 text-[15px] font-semibold text-ink transition-all hover:border-snf hover:text-snf"
        >
          Read the docs
          <ArrowRightIcon size={15} />
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
        <BuildCard
          icon="m16 18 6-6-6-6M8 6l-6 6 6 6"
          iconTone="bg-snf-soft text-snf"
          badges={<Badge tone="bg-slate-100 text-slate-500">SDK</Badge>}
          title="Integration SDK"
          body="Trade NFTs and manage liquidity from your own app. Perfect for Marketplaces, Aggregators, Launchpads and others."
          cta={{ label: 'Explore the SDK', href: LINKS.sdkDocs }}
        >
          <SdkSnippet />
        </BuildCard>

        <BuildCard
          featured
          icon="M12 8V4H8M4 12h16M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM9 16h.01M15 16h.01"
          iconTone="bg-[linear-gradient(135deg,#FF7A45,#FF2E00)] text-white"
          badges={
            <>
              <Badge dashed tone="border-snf-line text-snf">COMING SOON</Badge>
              <Badge tone="bg-snf-soft text-snf">MCP</Badge>
            </>
          }
          title="Born with liquidity"
          body="Launch a collection with permanent, enforced liquidity. Part of the mint proceeds is reserved as in-pool liquidity."
          cta={{ label: 'Join the waitlist', href: LINKS.discord }}
        >
          <AgentChat />
        </BuildCard>

        <BuildCard
          icon="M12 2H2v10l9.3 9.3a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4zM7 7h.01"
          iconTone="bg-indigo-50 text-indigo-700"
          badges={<Badge tone="bg-indigo-50 text-indigo-700">BUILDER CODE</Badge>}
          title="Get recognized for your volume"
          body="Add your builder code to every transaction. Every trade and deposit you bring is attributed to you, on every chain."
          cta={{ label: 'Get your builder code', href: LINKS.builderCodeDocs }}
        >
          <div className="flex items-center justify-between gap-2.5 rounded-[14px] border border-[#EDF1F7] bg-[#F4F6FA] px-3 py-2.5">
            <span className="font-geist-mono text-sm font-medium">
              builder: <b className="text-snf">yourapp</b>
            </span>
            <CopyCodeButton value="yourapp" />
          </div>
        </BuildCard>
      </div>
    </section>
  )
}
