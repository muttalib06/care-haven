/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // unsplash image config

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
