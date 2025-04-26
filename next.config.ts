import { env } from "@/lib/env";
import type { NextConfig } from "next";

const imageBase = new URL(env.SERVER_URL);
const protocol = imageBase.protocol === "https:" ? "https" : "http";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname: imageBase.hostname,
        port: imageBase.port || "",
        pathname: "/**",
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
