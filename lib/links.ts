/** Every outbound URL on the landing page. Change links here, never inline in components. */

const APP = 'https://app.sweepnflip.io'

export const LINKS = {
  home: 'https://sweepnflip.io/',
  // Launch dApp opens the swap on Elysium (99901) (founder 2026-11-09; was the Based Sweepers mint on Base).
  launchApp: `${APP}/swap?chain=99901&mode=latest&tokenIn=eth`,
  docs: `${APP}/docs`,
  sdkDocs: `${APP}/docs/sdk`,
  builderCodeDocs: `${APP}/docs/attribution`,
  legal: `${APP}/legal`,
  audits: 'https://cantina.xyz/portfolio/26afb814-d58a-47ed-acf0-debd1624544b',
  x: 'https://x.com/SweepnFlip',
  discord: 'https://discord.gg/b9yHwksnsv',
  github: 'https://github.com/orgs/sweep-n-flip/repositories',
  contact: 'mailto:contact@sweepnflip.io',
} as const
