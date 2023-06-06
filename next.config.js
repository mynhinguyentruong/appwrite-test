/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-us-west-2.amazonaws.com',
                port: '',

            },
            {
                protocol: 'https',
                hostname: 'cloud.appwrite.io',
                port: '',

            },
        ],
    },
}

module.exports = nextConfig
