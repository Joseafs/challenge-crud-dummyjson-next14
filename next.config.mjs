/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Todo: Remove after finish tests
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
