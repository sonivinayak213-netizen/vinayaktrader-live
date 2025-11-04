/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: false } // using pages router for simpler serverless compatibility
};
module.exports = nextConfig;
