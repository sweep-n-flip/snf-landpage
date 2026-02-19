/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/institutional',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
    turbopack: {
        root: __dirname,
    },
}

module.exports = nextConfig
