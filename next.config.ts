import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "placehold.co" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
