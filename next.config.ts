import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV === 'development';
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(isDev && {
    outputFileTracingRoot: path.resolve(__dirname, '../../'),
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [LOADER]
        }
      }
    }
  })
};

export default nextConfig;
// Orchids restart: 1770402921231
