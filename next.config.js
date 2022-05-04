/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      "src/components",
      "src/configs",
      "src/constants",
      "src/containers",
      "src/hooks",
      "src/layouts",
      "src/models",
      "src/pages",
      "src/recoils",
      "src/utils",
    ],
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
