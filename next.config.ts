/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"], // tambahkan ini
  },
};

module.exports = nextConfig;
