import {withSentryConfig} from '@sentry/nextjs';
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'api.tfbusinesssolutions.com' },
            { protocol: 'https', hostname: 'tfbusinesssolution.com' },
            { protocol: 'http', hostname: 'localhost', port: '1337' },
        ],
    },
};

export default withSentryConfig(nextConfig, {
  org: "2btech-llc-tp",
  project: "tfbusinesssolutions", silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring", disableLogger: true,
  automaticVercelMonitors: true,
});