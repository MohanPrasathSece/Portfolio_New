import { NextResponse } from 'next/server';

export function GET() {
  const baseUrl = 'https://mohanprasath.in';
  const now = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mohan Prasath – Full Stack Developer Portfolio</title>
    <link>${baseUrl}</link>
    <description>Official portfolio updates from Mohan Prasath, a Full Stack Developer specializing in MERN stack, web design, and digital solutions. Based in India.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>hello@mohanprasath.in (Mohan Prasath)</managingEditor>
    <webMaster>hello@mohanprasath.in (Mohan Prasath)</webMaster>
    <copyright>2026 Mohan Prasath. All rights reserved.</copyright>
    <image>
      <url>${baseUrl}/newpfp.jpeg</url>
      <title>Mohan Prasath</title>
      <link>${baseUrl}</link>
    </image>

    <item>
      <title>Mohan Prasath – Full Stack Developer Portfolio Launched</title>
      <link>${baseUrl}</link>
      <description>Explore the official portfolio of Mohan Prasath – covering live projects like Amzcoz, Nirvana Pain Clinic, Xivi, and more. Built with Next.js, MERN Stack, and modern UI/UX principles.</description>
      <pubDate>${now}</pubDate>
      <guid isPermaLink="true">${baseUrl}</guid>
    </item>

    <item>
      <title>Projects by Mohan Prasath – Live Web Applications</title>
      <link>${baseUrl}/#projects</link>
      <description>Mohan Prasath has built and deployed multiple high-performance web applications including e-commerce platforms, SaaS tools, and agency websites for clients in India and the UK.</description>
      <pubDate>${now}</pubDate>
      <guid isPermaLink="true">${baseUrl}/#projects</guid>
    </item>

    <item>
      <title>Services by Mohan Prasath – Web Development &amp; Digital Design</title>
      <link>${baseUrl}/#services</link>
      <description>Mohan Prasath offers a full suite of digital services: website development, brand design, SEO, WordPress, logo design, social media management, and hosting &amp; deployment.</description>
      <pubDate>${now}</pubDate>
      <guid isPermaLink="true">${baseUrl}/#services</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
