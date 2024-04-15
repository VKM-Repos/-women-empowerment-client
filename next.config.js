/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.figma.com', 'cdn.builder.io', 'placehold.co', 'womenhub.org', 'localhost'],
        // unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    output: "standalone",
    // distDir: "out",
}

module.exports = nextConfig
