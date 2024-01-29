/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.figma.com', 'cdn.builder.io'],
        // unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    output: "standalone",
    distDir: "out",
}

module.exports = nextConfig
