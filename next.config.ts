import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: async () => {
    return 'donate-website'
  },
  images: {
    unoptimized: true
  },
  // 禁用 Vercel 的默认图标
  generateEtags: false,
}

export default nextConfig;
