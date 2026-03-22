export const metadata = {
  title: 'Terms of Service – Mohan Prasath Portfolio',
  description: 'Terms of Service for mohanprasath.in – the official portfolio website of Mohan Prasath, Full Stack Developer.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '6rem 2rem', fontFamily: 'system-ui, sans-serif', color: '#111', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Terms of Service</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Last updated: March 2026 &nbsp;|&nbsp; <strong>Mohan Prasath</strong> – <a href="https://mohanprasath.in" style={{ color: '#111' }}>mohanprasath.in</a>
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>1. Acceptance</h2>
      <p>
        By visiting <strong>mohanprasath.in</strong>, you agree to be bound by these Terms of Service. This website is the official personal portfolio of <strong>Mohan Prasath</strong>, a Full Stack Developer.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>2. Intellectual Property</h2>
      <p>
        All content on this site — including code, design, images, and project work — is the intellectual property of <strong>Mohan Prasath</strong> unless stated otherwise. Unauthorized reproduction is prohibited.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>3. Portfolio Work</h2>
      <p>
        Projects featured on this portfolio represent the work of Mohan Prasath. Client names and live website links are used with permission for showcase purposes only.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>4. Disclaimer</h2>
      <p>
        This website is provided on an &quot;as is&quot; basis. Mohan Prasath makes no warranties regarding the completeness or accuracy of information on this site.
      </p>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>5. Contact</h2>
      <p>
        For enquiries, collaborations, or project work, contact <strong>Mohan Prasath</strong> at:{' '}
        <a href="mailto:hello@mohanprasath.in" style={{ color: '#111' }}>hello@mohanprasath.in</a>
      </p>

      <p style={{ marginTop: '3rem' }}>
        <a href="/" style={{ color: '#111', fontWeight: 700 }}>← Back to Mohan Prasath Portfolio</a>
      </p>
    </main>
  );
}
