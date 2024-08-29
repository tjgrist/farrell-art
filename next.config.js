/** @type {import('next').NextConfig} */

const validateEnv = (requiredEnvVars) => {
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is missing`);
    }
  }
};

const requiredEnvVars = ['S3_REGION', 'AWS_ACCESS_KEY_ID', 'AWS_ACCESS_KEY_SECRET', 'S3_BUCKET_NAME'];

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
      }
    ],
  },
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: "G-41ZW7BWZXY",
    NEXT_PUBLIC_IMAGE_NAME: 'DSC00355',
    S3_REGION: process.env.S3_REGION || new Error('S3_REGION is required'),
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || new Error('AWS_ACCESS_KEY_ID is required'),
    AWS_ACCESS_KEY_SECRET: process.env.AWS_ACCESS_KEY_SECRET || new Error('AWS_ACCESS_KEY_SECRET is required'),
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || new Error('S3_BUCKET_NAME is required'),
  },
}

module.exports = () =>{
  validateEnv(requiredEnvVars);
  return nextConfig;
}