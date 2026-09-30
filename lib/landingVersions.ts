/**
 * Landing page versions. Each one is a feature set over the same components; the home
 * page renders ACTIVE_LANDING_VERSION and every version keeps a preview route
 * (`/v3-0`, `/v3-1`, not indexed).
 *
 * - v3.0: the smaller launch page, no developer surface.
 * - v3.1: adds "Build with us" (SDK / MCP / Builder Code) and the matching footer links.
 */
export type LandingVersion = 'v3.0' | 'v3.1'

export interface LandingFeatures {
  /** "Liquidity is infrastructure" section with the SDK, MCP and Builder Code cards. */
  buildSection: boolean
  /** SDK, MCP and Builder Codes entries under Resources in the footer. */
  developerResources: boolean
}

export const LANDING_VERSIONS: Record<LandingVersion, LandingFeatures> = {
  'v3.0': { buildSection: false, developerResources: false },
  'v3.1': { buildSection: true, developerResources: true },
}

/** The version served at `/`. Switch here to publish the other one. */
export const ACTIVE_LANDING_VERSION: LandingVersion = 'v3.0'
