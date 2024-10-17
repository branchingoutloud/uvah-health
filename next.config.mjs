/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.16.140.129", // Specific IP address
        port: "8001", // Specific port
        pathname: "/media/**", // Path matching your image source
      },
      {
        protocol: "https",
        hostname: "**", // Allows any hostname over HTTPS
        port: "", // No specific port
        pathname: "/**", // Allows any path
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
