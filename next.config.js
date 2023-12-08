/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.figma.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
