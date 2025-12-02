import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ksoftsolution.com'
  const currentDate = new Date().toISOString().split('T')[0]

  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  const servicePages = [
    'web-development',
    'ai-integration',
    'seo',
    'mobile-apps',
    'ui-ux-design',
    'digital-marketing',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogPosts = [
    'web-development-trends-2025',
    'local-seo-aurangabad-guide',
    'ai-integration-business',
    'best-web-development-company-aurangabad-2025',
    'top-seo-strategies-aurangabad-businesses',
    'ai-integration-small-business-guide',
    'mobile-app-development-trends-2025',
    'digital-marketing-roi-aurangabad',
    'importance-of-ui-ux-design',
    'web-development-trends-2026',
    'seo-predictions-2026',
    'digital-marketing-2026-privacy-personalization',
    'geo-generative-engine-optimization-guide',
    'aeo-answer-engine-optimization-strategies',
    'llms-reshaping-digital-marketing-seo',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...mainPages, ...servicePages, ...blogPosts]
}
