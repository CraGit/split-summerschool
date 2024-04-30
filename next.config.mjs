/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://prismic.io/dashboard",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
