import { LINKS } from '@/lib/links'

interface LaunchButtonProps {
  size?: 'md' | 'lg'
}

export function LaunchButton({ size = 'md' }: LaunchButtonProps) {
  const sizing =
    size === 'lg'
      ? 'h-[60px] w-full justify-center rounded-[20px] text-xl hover:-translate-y-0.5'
      : 'h-[42px] px-[18px] rounded-xl text-sm'
  return (
    <a
      href={LINKS.launchApp}
      className={`snf-gradient snf-cta-shadow relative flex items-center gap-2 overflow-hidden whitespace-nowrap font-bold text-white transition-transform hover:text-white ${sizing}`}
    >
      <span className="lp-sheen pointer-events-none absolute inset-0" aria-hidden="true" />
      <span className="relative">Launch dApp</span>
    </a>
  )
}
