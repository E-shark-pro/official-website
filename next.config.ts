import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    // allowedDevOrigins: ['http://localhost:3000', 'https://eshark.com'],
    images: {
        domains: ['localhost', 'eshark.com', 'assets.aceternity.com', 'i.pravatar.cc'],
    },
    typescript: { ignoreBuildErrors: true }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);