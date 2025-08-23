import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['api.tfbusinesssolutions.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.tfbusinesssolutions.com',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
