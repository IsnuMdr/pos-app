/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Enable experimental features here
  },
};

module.exports = nextConfig;
