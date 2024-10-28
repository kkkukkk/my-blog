import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    image: {
        unoptimized: true,
    }
};

export default nextConfig;
