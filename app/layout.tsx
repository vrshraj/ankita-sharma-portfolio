import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lora, Fredoka, Inter } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ankita Sharma | Social Media Manager & Content Strategist',
  description:
    'Ankita Sharma helps businesses and personal brands grow on social media through strategic content, audience engagement, and creative storytelling.',
  generator: 'v0.app',
  keywords: [
    'social media manager',
    'content strategist',
    'personal branding',
    'Instagram growth',
    'LinkedIn strategy',
    'Ankita Sharma',
  ],
  openGraph: {
    title: 'Ankita Sharma | Social Media Manager & Content Strategist',
    description:
      'Grow your brand on social media with strategic content, audience engagement, and creative storytelling.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8ea79a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${fredoka.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
