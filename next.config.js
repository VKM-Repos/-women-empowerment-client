/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.figma.com', 'cdn.builder.io'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
