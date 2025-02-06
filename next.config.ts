import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: async () => {
    // 添加时间戳强制更新
    return `donate-website-${Date.now()}`
  },
  images: {
    unoptimized: true
  },
  // 禁用 Vercel 的默认图标
  generateEtags: false,
}

export default nextConfig;
