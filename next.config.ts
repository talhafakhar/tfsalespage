import type {NextConfig} from 'next';
const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'tfbusinesolution.com' },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;