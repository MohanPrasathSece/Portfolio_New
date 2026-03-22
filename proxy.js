import { NextResponse } from 'next/server';

// Googlebot user-agent patterns
const GOOGLEBOT_PATTERNS = [
  'Googlebot',
  'AdsBot-Google',
  'APIs-Google',
  'Googlebot-Image',
  'Googlebot-News',
  'Mediapartners-Google',
];

// Known datacenter IP ranges that aren't real users — used for log filtering
const BOT_PATTERNS = [
  'bingbot',
  'Baiduspider',
  'DuckDuckBot',
  'Slurp',
  'facebookexternalhit',
  'LinkedInBot',
  'Twitterbot',
];

/**
 * Edge Proxy — runs at the CDN edge BEFORE any page renders.
 *
 * Responsibilities:
 * 1. Detect and log Googlebot visits (crawl budget analysis)
 * 2. Add dynamic SEO headers per request type
 * 3. Enforce www → non-www canonicalization
 * 4. Strip trailing slashes for canonical URL consistency
 * 5. Block query-param duplicate content from indexing
 */
export function proxy(request) {
  const { pathname, searchParams, hostname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // ─── 1. WWW → NON-WWW REDIRECT (301 permanent) ────────────────────────
  if (hostname.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.hostname = hostname.replace('www.', '');
    return NextResponse.redirect(url, { status: 301 });
  }

  // ─── 2. TRAILING SLASH NORMALIZATION ──────────────────────────────────
  // Skip root, API routes, and asset paths
  if (
    pathname !== '/' &&
    pathname.endsWith('/') &&
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/')
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  const response = NextResponse.next();

  // ─── 3. GOOGLEBOT DETECTION + CRAWL LOGGING ───────────────────────────
  const isGooglebot = GOOGLEBOT_PATTERNS.some((pattern) =>
    userAgent.includes(pattern)
  );
  const isOtherBot = BOT_PATTERNS.some((pattern) =>
    userAgent.includes(pattern)
  );

  if (isGooglebot) {
    // Log to Vercel's edge logs — visible in your Vercel dashboard
    console.log(
      JSON.stringify({
        event: 'googlebot_visit',
        path: pathname,
        timestamp: new Date().toISOString(),
        ua: userAgent,
      })
    );
    // Tell Googlebot this is fresh content
    response.headers.set('Cache-Control', 'no-cache, must-revalidate');
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
  }

  // ─── 4. NOINDEX QUERY-PARAM PAGES (prevent duplicate content) ─────────
  // If URL has query params on non-API routes, add noindex header
  if (searchParams.toString() && !pathname.startsWith('/api/')) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  // ─── 5. SECURITY HEADERS (belt-and-suspenders alongside next.config.mjs) ─
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - Public static files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|ttf|otf|woff|woff2)$).*)',
  ],
};
