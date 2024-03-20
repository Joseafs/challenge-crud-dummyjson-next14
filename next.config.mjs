/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // TODO: Remove after finish tests
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.dummyjson.com',
        protocol: 'https',
      },
    ],
  },

  trailingSlash: true,
};

export default nextConfig;
