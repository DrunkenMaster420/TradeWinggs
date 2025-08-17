import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["localhost", "images.unsplash.com"],
    unoptimized: true,
  },
  // Fixed: Moved from experimental.turbo to config.turbopack
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
