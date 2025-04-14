import type { NextConfig } from "next";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

const nextConfig:NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3030',
        pathname: '/**',
        search: '',
      },
    ],
  },
  
  reactStrictMode: false,
};

export default nextConfig;
