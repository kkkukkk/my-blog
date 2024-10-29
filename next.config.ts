import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    dsitDir: 'out',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
