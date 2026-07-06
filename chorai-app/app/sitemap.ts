import { MetadataRoute } from 'next'

const BASE_URL = 'https://chorai.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/foerderung',
    '/blog',
    '/loesungen/ki-beratung',
    '/loesungen/prozessautomatisierung',
    '/loesungen/ki-agenten',
    '/loesungen/ki-chatbot',
    '/loesungen/ki-telefonassistent',
  ]

  return routes.map((route) => ({
    url: route === '/' ? BASE_URL : `${BASE_URL}${route}`,
  }))
}
