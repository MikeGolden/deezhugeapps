/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const config = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
      },
    ],
  },
  experimental: {
    serverActions: true,
    typedRoutes: false,
  },
};

export default config;
