import { LandingPage } from '@/components/landing/LandingPage'
import { ACTIVE_LANDING_VERSION } from '@/lib/landingVersions'

export default function Home() {
  return <LandingPage version={ACTIVE_LANDING_VERSION} />
}
