/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.figma.com',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.builder.io',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'womenhub.org',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'dev.womenhub.org',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                pathname: '/*/**'
            },
            {
                protocol: 'http',
                hostname: '164.92.68.32',
                pathname: '/*/**'
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    output: "standalone",
    distDir: "out",
}

module.exports = nextConfig;
