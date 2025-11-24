/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
