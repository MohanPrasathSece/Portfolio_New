import https from 'https';

const TARGET_URL = 'https://mohanprasath.in';

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
      });
    }).on('error', (e) => {
      resolve({ error: e.message });
    });
  });
}

async function runAudit() {
  console.log(`\n🚀 Starting SEO Audit for ${TARGET_URL}...\n`);

  const results = [];

  // 1. Core Reachability
  const core = await checkUrl(TARGET_URL);
  results.push({
    task: 'Core URL Accessibility',
    status: core.statusCode === 200 ? '✅ PASS' : '❌ FAIL',
    note: core.statusCode ? `HTTP ${core.statusCode}` : core.error
  });

  // 2. Robots.txt
  const robots = await checkUrl(`${TARGET_URL}/robots.txt`);
  results.push({
    task: 'Robots.txt Presence',
    status: robots.statusCode === 200 ? '✅ PASS' : '❌ FAIL',
    note: '/robots.txt reachable'
  });

  // 3. Sitemap
  const sitemap = await checkUrl(`${TARGET_URL}/sitemap.xml`);
  results.push({
    task: 'Sitemap.xml Presence',
    status: sitemap.statusCode === 200 ? '✅ PASS' : '❌ FAIL',
    note: '/sitemap.xml reachable'
  });

  // 4. RSS Feed
  const feed = await checkUrl(`${TARGET_URL}/feed.xml`);
  results.push({
    task: 'RSS Feed Presence',
    status: feed.statusCode === 200 ? '✅ PASS' : '❌ FAIL',
    note: '/feed.xml reachable'
  });

  // 5. Health API
  const health = await checkUrl(`${TARGET_URL}/api/seo-health`);
  results.push({
    task: 'SEO Health API',
    status: health.statusCode === 200 ? '✅ PASS' : '❌ FAIL',
    note: '/api/seo-health active'
  });

  // 6. Security Headers Check
  const securityHeaders = ['strict-transport-security', 'x-robots-tag', 'x-content-type-options'];
  const missingHeaders = securityHeaders.filter(h => !core.headers[h]);
  results.push({
    task: 'Security & SEO Headers',
    status: missingHeaders.length === 0 ? '✅ PASS' : '⚠️ WARN',
    note: missingHeaders.length === 0 ? 'All critical headers present' : `Missing: ${missingHeaders.join(', ')}`
  });

  console.table(results);
  
  console.log('\n✨ Audit Complete. To maintain #1 rank, ensure all checks are Green.\n');
}

runAudit();
