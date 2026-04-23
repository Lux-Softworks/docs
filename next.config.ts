import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  basePath: "/docs",
  compress: true,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
};

const withMDX = createMDX();

export default withMDX(nextConfig);
