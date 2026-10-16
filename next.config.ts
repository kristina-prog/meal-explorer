import type { NextConfig } from "next";

// domains tillater bilder fra hele domenet
// remotePatterns lar deg begrense hvilke adresser bildene kan hentes fra

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
