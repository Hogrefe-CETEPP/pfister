// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // desativa image optimization pra export funcionar
  },
}

export default nextConfig
