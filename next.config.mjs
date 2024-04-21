/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.guim.co.uk",
        pathname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
