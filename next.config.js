/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meegan-farrell-art-bucket.s3.amazonaws.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'meegan-farrell-art-bucket.s3.amazonaws.com',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
}

module.exports = nextConfig