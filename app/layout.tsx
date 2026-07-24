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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ankitasharma.com'),
  title: {
    default: 'Ankita Sharma | Social Media Manager & Content Strategist',
    template: '%s | Ankita Sharma',
  },
  description: 'Grow your business and personal brand on social media through strategic content, audience engagement, and creative storytelling with Ankita Sharma.',
  keywords: ['social media manager', 'content strategist', 'personal branding', 'Instagram growth', 'LinkedIn strategy', 'Ankita Sharma', 'content creator'],
  authors: [{ name: 'Ankita Sharma', url: 'https://ankitasharma.com' }],
  creator: 'Ankita Sharma',
  publisher: 'Ankita Sharma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ankita Sharma | Social Media Manager & Content Strategist',
    description: 'Grow your brand on social media with strategic content, audience engagement, and creative storytelling.',
    url: 'https://ankitasharma.com',
    siteName: 'Ankita Sharma Portfolio',
    images: [
      {
        url: '/about-img.png', 
        width: 1200,
        height: 630,
        alt: 'Ankita Sharma - Social Media Manager',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankita Sharma | Social Media Manager & Content Strategist',
    description: 'Grow your brand on social media with strategic content, audience engagement, and creative storytelling.',
    images: ['/about-img.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#e8e2d4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ankita Sharma',
  url: 'https://ankitasharma.com',
  jobTitle: 'Social Media Content Strategist & Content Writer',
  image: 'https://ankitasharma.com/about-img.png',
  sameAs: [
    'https://linkedin.com/', 
    'https://instagram.com/'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${fredoka.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
