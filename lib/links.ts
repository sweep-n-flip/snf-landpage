/** Every outbound URL on the landing page. Change links here, never inline in components. */

const APP = 'https://app.sweepnflip.io'

export const LINKS = {
  home: 'https://sweepnflip.io/',
  // Launch dApp deep-links to the Based Sweepers mint on Base (founder decision, commit fcf3905).
  launchApp:
    `${APP}/swap?chain=8453&tokenOut=0xc79eaAe02898378fE072acF8D4412A64Bb630024&mode=latest&tokenIn=eth&amountIn=0.0200000`,
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
