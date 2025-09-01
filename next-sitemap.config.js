/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tfbusinesssolutions.com',
    generateRobotsTxt: true,
    exclude: [
        '/sales-consulting',
        '/api/*',
        '/_next/*',
        '/admin/*',
        '/_error',
        '/404',
        '/500',
        '/blogs',
        '/blogs/[slug]',
        '/server-sitemap.xml',
        '/server-sitemap-index.xml'
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/sitemap-0.xml', '/sales-consulting/', '/api/', '/_next/', '/admin/']
            }
        ],
        additionalSitemaps: [
            'https://tfbusinesssolutions.com/server-sitemap.xml',
        ]
    },
    transform: async (config, path) => {
        if (path.startsWith('/blogs')) return null;
        const priorities = {
            '/': 1.0,
            '/about': 0.8,
            '/contact': 0.8,
            '/services': 0.9,
        };

        const changeFreqs = {
            '/': 'daily',
            '/contact': 'monthly',
            '/about': 'monthly'
        };
        const lastmodDate = new Date();
        const lastmodMonthly = `${lastmodDate.getFullYear()}-${String(lastmodDate.getMonth() + 1).padStart(2, '0')}`;
        return {
            loc: path,
            changefreq: changeFreqs[path] || 'monthly',
            priority: priorities[path] || 0.5,
            lastmod: lastmodMonthly,
        };
    },
};