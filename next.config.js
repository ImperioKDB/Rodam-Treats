/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'rodam-treats.lovable.app' }
    ]
  }
};

module.exports = nextConfig;