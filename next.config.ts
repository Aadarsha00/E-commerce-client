import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e-com-7j3p.onrender.com",
        port: "",
        pathname: "/api/**",
      },

      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
