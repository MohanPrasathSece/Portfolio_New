export const metadata = {
  title: 'Privacy Policy – Mohan Prasath Portfolio',
  description: 'Privacy Policy for mohanprasath.in – the official portfolio of Mohan Prasath, Full Stack Developer.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '6rem 2rem', fontFamily: 'system-ui, sans-serif', color: '#111', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Privacy Policy</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Last updated: March 2026 &nbsp;|&nbsp; <strong>Mohan Prasath</strong> – <a href="https://mohanprasath.in" style={{ color: '#111' }}>mohanprasath.in</a>
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>1. Introduction</h2>
      <p>
        Welcome to <strong>mohanprasath.in</strong>, the official personal portfolio of <strong>Mohan Prasath</strong>, a Full Stack Developer based in India. This Privacy Policy explains how we handle information when you visit this website.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>2. Information We Collect</h2>
      <p>
        This website does not collect personal data directly. However, third-party services (e.g., Vercel Analytics) may collect anonymous usage data such as page views and referrer information.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>3. Cookies</h2>
      <p>
        This site does not use tracking cookies. Only essential technical cookies required for site performance may be set by the hosting provider (Vercel).
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>4. External Links</h2>
      <p>
        This portfolio links to external platforms including GitHub, LinkedIn, LeetCode, and client websites. We are not responsible for the privacy practices of those sites.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>5. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, you can reach <strong>Mohan Prasath</strong> at:{' '}
        <a href="mailto:hello@mohanprasath.in" style={{ color: '#111' }}>hello@mohanprasath.in</a>
      </p>

      <p style={{ marginTop: '3rem' }}>
        <a href="/" style={{ color: '#111', fontWeight: 700 }}>← Back to Mohan Prasath Portfolio</a>
      </p>
    </main>
  );
}
