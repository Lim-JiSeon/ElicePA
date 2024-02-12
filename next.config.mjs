/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-api.elice.io",
        port: "",
        pathname: "/api/file/**",
      },
    ],
  },
};

export default nextConfig;
