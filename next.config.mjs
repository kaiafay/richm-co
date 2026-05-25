/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/intakes/fitness',
        destination: '/intakes/fitness/index.html',
      },
      {
        source: '/intakes/sales-consulting',
        destination: '/intakes/sales-consulting/index.html',
      },
      {
        source: '/intakes/leadership-mentoring',
        destination: '/intakes/leadership-mentoring/index.html',
      },
    ]
  },
}

export default nextConfig
