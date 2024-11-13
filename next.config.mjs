/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  images: {
    domains: ["localhost"], // here add sources
    unoptimized: true,
  },
};

export default nextConfig;
