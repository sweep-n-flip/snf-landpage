import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sweep n\' Flip | NFT DEX',
  description: 'Swap anything — including NFTs',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Sweep n\' Flip | NFT DEX',
    description: 'Swap anything — including NFTs',
    type: 'website',
    siteName: 'Sweep n\' Flip',
  },
  twitter: {
    card: 'summary',
    title: 'Sweep n\' Flip | NFT DEX',
    description: 'Swap anything — including NFTs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
