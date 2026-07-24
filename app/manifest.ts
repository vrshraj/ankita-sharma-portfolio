import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ankita Sharma Portfolio',
    short_name: 'Ankita',
    description: 'Social Media Manager & Content Strategist',
    start_url: '/',
    display: 'standalone',
    background_color: '#e8e2d4',
    theme_color: '#e8e2d4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
