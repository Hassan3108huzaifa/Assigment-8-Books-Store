import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any domain
      },
    ],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;