import { NextResponse } from 'next/server';

/**
 * Googlebot User-Agent patterns - used to selectively add meta-signals
 */
const GOOGLEBOT_PATTERNS = [
  'Googlebot',
  'AdsBot-Google',
  'APIs-Google',
];

/**
 * Edge Proxy - Handles bot detection and duplicate content prevention.
 */
export function proxy(request) {
  const { pathname, searchParams } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';

  // ─── 1. GOOGLEBOT SIGNAL ENHANCEMENT ───────────────────────────
  const isGooglebot = GOOGLEBOT_PATTERNS.some((pattern) =>
    userAgent.includes(pattern)
  );

  const response = NextResponse.next();

  if (isGooglebot) {
    // Force index/follow for Googlebot if it hits the site
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate'); // Ensure bots see freshest content
  }

  // ─── 2. DUPLICATE CONTENT PREVENTION (QUERY PARAMS) ──────────────
  // If URL has query params (tracking id, etc.) add noindex as canonical is path-only
  if (searchParams.toString() && !pathname.startsWith('/api/')) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except assets
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|ttf|otf|woff|woff2)$).*)',
  ],
};
