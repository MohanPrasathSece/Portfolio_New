export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',         // Next.js build internals — waste of crawl budget
          '/api/',           // API routes — internal endpoints, not for indexing
          '/*?*',            // Query-param URLs — prevents duplicate content
        ],
      },
      {
        // Give Googlebot maximum freedom — no artificial crawl delay
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
        ],
      },
      {
        // Allow all social crawlers to fetch OG images for rich previews
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
    ],
    sitemap: 'https://mohanprasath.in/sitemap.xml',
    host: 'https://mohanprasath.in',
  };
}
