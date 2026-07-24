import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankitasharma.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add additional routes here if there are more pages (e.g., /about, /projects)
    // Currently, it's a single-page portfolio, so the root route covers it.
  ]
}
