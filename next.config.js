/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Включает поддержку папки app/
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "cdn.sanity.io" }]
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production"
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production"
  }
};

module.exports = nextConfig;
