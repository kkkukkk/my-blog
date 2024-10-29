import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    basePath: '/my-blog',       // 리포지토리 이름으로 설정
    assetPrefix: '/my-blog',
};

export default nextConfig;
