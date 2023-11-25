/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_SITE_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_SITE_NAME,
        port: "",
        pathname: "/**",
      },
      {
        protocol: process.env.NEXT_PUBLIC_SITE_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_SITE_NAME_ALT,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
