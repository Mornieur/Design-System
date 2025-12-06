import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const nextConfig: NextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack(config) {
    return config;
  }
});

export default nextConfig;
