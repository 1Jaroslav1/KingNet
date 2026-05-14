import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = process.env.NEXT_PUBLIC_BASE_PATH ?? "/KingNet";
const basePath = isProd ? repo : "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
