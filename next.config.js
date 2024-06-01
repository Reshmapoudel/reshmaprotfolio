/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
};

module.exports = {
  images: {
    unoptimized: true,
  },
};
