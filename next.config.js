/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['meegan-farrell-art-bucket.s3.us-east-1.amazonaws.com'],
  },
}

module.exports = nextConfig