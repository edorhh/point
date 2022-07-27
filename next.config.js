/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/point',
    env: {
        api: {
            url: {
                dev: 'https://localhost:8443',
                real: 'https://localhost:8080',
            },
        },
    },
};

module.exports = nextConfig;
