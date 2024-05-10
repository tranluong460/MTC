/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.cdnno.com",
      },
    ],
  },
};

export default nextConfig;
