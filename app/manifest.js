export default function manifest() {
  return {
    name: 'Mohan Prasath Portfolio',
    short_name: 'Mohan Prasath',
    description: 'Official portfolio of Mohan Prasath, a Full Stack Developer specializing in high-performance web applications and modern UI/UX design.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
