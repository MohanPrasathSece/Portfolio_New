/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true, // Enables Brotli + GZIP at server level

  // ── IMAGE OPTIMIZATION ──────────────────────────────────────────────────
  // Allows next/image to optimize external SVG/PNG logos from these CDNs
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
        pathname: '/**',
      },
    ],
    // Serve modern formats automatically (WebP / AVIF) for all images
    formats: ['image/avif', 'image/webp'],
    // Longer device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 60 days in Vercel's CDN
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Keep dangerouslyAllowSVG off (security best practice)
    dangerouslyAllowSVG: false,
  },

  // ── EXPERIMENTAL PERFORMANCE ─────────────────────────────────────────────
  experimental: {
    // Optimize package imports to reduce JS bundle size (INP improvement)
    optimizePackageImports: ['motion/react', '@gsap/react'],
  },

  // ── HTTP HEADERS ─────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'Referrer-Policy',            value: 'origin-when-cross-origin' },
        ],
      },
      // Fonts: immutable (never change content, only version bumps)
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Next.js static chunks: immutable (content-hashed filenames)
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Optimized images: long cache + stale-while-revalidate
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      // Public static images/assets
      {
        source: '/(.*\\.(?:jpg|jpeg|png|gif|webp|avif|ico|svg)$)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      // API routes: no caching (except seo-health which sets its own)
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
          { key: 'X-Robots-Tag',  value: 'noindex' },
        ],
      },
    ];
  },

  // ── REDIRECTS ─────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Handle legacy hash-less paths if ever linked externally
      {
        source: '/projects',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://www.linkedin.com/in/mohan-prasath-s-fullstackdeveloper/',
        permanent: false, // 302 — external URL, not canonical to our domain
      },
    ];
  },
};

export default nextConfig;
