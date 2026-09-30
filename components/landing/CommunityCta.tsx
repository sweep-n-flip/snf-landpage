import { LINKS } from '@/lib/links'
import { ArrowRightIcon, DiscordIcon, XLogoIcon } from './icons'

export function CommunityCta() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pb-24">
      <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-[32px] bg-[radial-gradient(120%_160%_at_0%_0%,#FF7A45,#FF2E00_45%,#B3122E)] px-7 py-14 text-white shadow-[0_40px_80px_-40px_rgba(255,46,0,.7)] sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -right-[120px] -top-[160px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,.55),rgba(168,85,247,0)_62%)]" />
        <img src="/brand/snf-mark-white.svg" alt="" className="pointer-events-none absolute -bottom-[70px] right-14 h-auto w-[300px] opacity-[.12]" />
        <h2 className="relative m-0 max-w-[640px] text-[clamp(34px,4.6vw,56px)] font-extrabold leading-none tracking-[-.04em]">
          Let&apos;s build together.
        </h2>
        <p className="relative m-0 max-w-[620px] text-lg leading-[1.55] text-white/90 text-pretty">
          Sweep n&apos; Flip is built for the degens: the ones who have always been here. If that sounds like you, join our
          community and help shape what&apos;s next.
        </p>
        <div className="relative flex flex-wrap items-center gap-2.5">
          <a
            href={LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sweep n' Flip on X"
            className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-snf"
          >
            <XLogoIcon />
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[58px] items-center gap-2.5 whitespace-nowrap rounded-2xl bg-white px-7 text-[17px] font-bold text-snf shadow-[0_14px_30px_-12px_rgba(0,0,0,.35)] transition-transform hover:-translate-y-0.5 hover:text-snf-hover"
          >
            <DiscordIcon />
            Join our community
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
