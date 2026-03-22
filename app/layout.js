import { Inter, Mona_Sans } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohan Prasath – Full Stack Developer & Digital Creator",
  description: "Official portfolio of Mohan Prasath, a Full Stack Developer specializing in high-performance web applications, MERN stack, and modern UI/UX design. Based in India.",
  keywords: ["Mohan Prasath", "Mohan Prasath Developer", "Mohan Prasath Portfolio", "Full Stack Developer", "Web Designer India", "MERN Stack Developer", "Mohan Prasath SECE"],
  authors: [{ name: "Mohan Prasath" }],
  creator: "Mohan Prasath",
  publisher: "Mohan Prasath",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mohanprasath.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': 'https://mohanprasath.in',
      'en':    'https://mohanprasath.in',
      'x-default': 'https://mohanprasath.in',
    },
  },
  openGraph: {
    title: "Mohan Prasath – Full Stack Developer & Digital Creator",
    description: "Official portfolio of Mohan Prasath. Explore my latest projects, skills, and expertise in web development and design.",
    url: 'https://mohanprasath.in',
    siteName: 'Mohan Prasath Portfolio',
    images: [
      {
        url: '/newpfp.jpeg', // Assuming this is the best image for share
        width: 1200,
        height: 630,
        alt: 'Mohan Prasath - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mohan Prasath – Full Stack Developer & Digital Creator",
    description: "Official portfolio of Mohan Prasath. Explore my latest projects, skills, and expertise.",
    images: ['/newpfp.jpeg'],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-0XFJXRK25R"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-0XFJXRK25R');
		</script>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect to external asset CDNs for faster logo/tech icon loading */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://www.vectorlogo.zone" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.vectorlogo.zone" />

        {/* Preload LCP hero image — browsers fetch this before parsing body */}
        <link
          rel="preload"
          href="/newpfp.jpeg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohan Prasath",
              "url": "https://mohanprasath.in",
              "image": "https://mohanprasath.in/newpfp.jpeg",
              "jobTitle": "Full Stack Developer",
              "knowsAbout": ["Web Development", "MERN Stack", "Next.js", "Java", "SEO", "UI/UX Design"],
              "sameAs": [
                "https://github.com/MohanPrasathSece",
                "https://www.linkedin.com/in/mohanprasath-fullstackdeveloper/", 
                "https://twitter.com/mohanprasath_in"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mohan Prasath Portfolio",
              "url": "https://mohanprasath.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mohanprasath.in/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Mohan Prasath?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mohan Prasath is a Full Stack Developer and Digital Creator based in India, specializing in MERN stack web development, UI/UX design, brand development, SEO, and WordPress. His official portfolio is at mohanprasath.in."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Mohan Prasath do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mohan Prasath builds high-performance web applications and digital products. His services include website development, website redesign, logo design, brand development, hosting, deployment, social media management, and SEO optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies does Mohan Prasath use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mohan Prasath works with React, Node.js, Express.js, MongoDB, MySQL, JavaScript, Java, Python, Next.js, HTML, CSS, Git, GitHub, and Figma."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Mohan Prasath?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Mohan Prasath via LinkedIn at linkedin.com/in/mohan-prasath-s-fullstackdeveloper or email at hello@mohanprasath.in. His portfolio is at mohanprasath.in."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What projects has Mohan Prasath built?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mohan Prasath has built several live web projects including Amzcoz, Launch & Close, Nirvana Pain Clinic, Precision RCT, Xivi, and Vakalt — all showcased at mohanprasath.in."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mohanprasath.in" },
                { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://mohanprasath.in/#projects" },
                { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://mohanprasath.in/#services" }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "dateCreated": "2025-01-01T00:00:00+05:30",
              "dateModified": new Date().toISOString(),
              "mainEntity": {
                "@type": "Person",
                "name": "Mohan Prasath",
                "url": "https://mohanprasath.in",
                "jobTitle": "Full Stack Developer",
                "description": "Mohan Prasath is a Full Stack Developer and Digital Creator specializing in MERN stack, modern web design, and digital solutions.",
                "sameAs": [
                  "https://github.com/MohanPrasathSece",
                  "https://www.linkedin.com/in/mohan-prasath-s-fullstackdeveloper/",
                  "https://leetcode.com/u/MohanPrasathSece/"
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${monaSans.variable} antialiased`}
      >
        <ReactLenis />
        {children}
      </body>
    </html>
  );
}
