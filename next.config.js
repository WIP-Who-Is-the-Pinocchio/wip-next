/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.assembly.go.kr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
