import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment to static hosting
  output: "export",

  // Add trailing slash for better compatibility with static hosting
  trailingSlash: true,

  // Disable image optimization for static export (not available in static mode)
  images: {
    unoptimized: true,
  },

  // Ensure proper static generation
  experimental: {
    // Enable static generation for all pages by default
    typedRoutes: true,
  },

  // Optional: Configure asset prefix for CDN deployment
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-subdirectory' : '',

  // Optional: Base path for GitHub Pages or subdirectory deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
