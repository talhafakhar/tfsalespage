import { GetServerSideProps } from 'next';

export default function Robots() {
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tfbusinesssolutions.com';

    const robots = `User-agent: *
Allow: /
Disallow: /sales-consulting/
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: ${baseUrl}/sitemap.xml`;

    res.setHeader('Content-Type', 'text/plain');
    res.write(robots);
    res.end();

    return {
        props: {},
    };
};