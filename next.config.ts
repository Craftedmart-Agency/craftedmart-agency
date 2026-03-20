import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.107"],
  experimental: {
    globalNotFound: false,
  }
};

export default nextConfig;
