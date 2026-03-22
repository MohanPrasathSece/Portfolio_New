export default function sitemap() {
  const baseUrl = 'https://mohanprasath.in';
  const now = new Date().toISOString();

  return [
    { url: `${baseUrl}`,               lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/#projects`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/#services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#skills`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/#brands`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`,lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/terms`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
