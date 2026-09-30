import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing/LandingPage'

// Preview of landing v3.1; not indexed so it never competes with the home page.
export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function LandingV3_1Preview() {
  return <LandingPage version="v3.1" />
}
