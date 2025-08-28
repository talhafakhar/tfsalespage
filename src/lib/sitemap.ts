import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tfbusinesssolutions.com';

const EXCLUDED_PAGES = [
    'sales-consulting',
    '_app',
    '_document',
    '404',
    '500',
    'api',
];

const PAGE_PRIORITIES: { [key: string]: number } = {
    '/': 1.0,
    '/about': 0.8,
    '/contact': 0.8,
    '/services': 0.9,
    '/blogs': 0.7,
};

function getStaticPages(): string[] {
    const pagesDirectory = path.join(process.cwd(), 'src/pages');
    const pages: string[] = [];

    function traverseDirectory(dir: string, basePath: string = ''): void {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                if (file === 'api') return;
                traverseDirectory(filePath, `${basePath}/${file}`);
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                const pageName = file.replace(/\.(tsx|ts)$/, '');

                if (EXCLUDED_PAGES.some(excluded => pageName.includes(excluded))) {
                    return;
                }

                if (pageName === 'index') {
                    if (basePath === '') {
                        pages.push('/');
                    } else {
                        pages.push(basePath);
                    }
                } else {
                    pages.push(`${basePath}/${pageName}`);
                }
            }
        });
    }

    try {
        traverseDirectory(pagesDirectory);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.warn('Pages directory not found');
    }

    return pages;
}

function getAppRouterPages(): string[] {
    const appDirectory = path.join(process.cwd(), 'src/app');
    const pages: string[] = [];

    function traverseAppDirectory(dir: string, basePath: string = ''): void {
        try {
            const files = fs.readdirSync(dir);

            files.forEach((file) => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);

                if (stat.isDirectory()) {
                    if (file.startsWith('(') || file === 'api' || file.startsWith('_')) {
                        return;
                    }

                    const pageFiles = ['page.tsx', 'page.ts', 'page.js', 'page.jsx'];
                    const hasPage = pageFiles.some(pageFile =>
                        fs.existsSync(path.join(filePath, pageFile))
                    );

                    if (hasPage) {
                        const route = `${basePath}/${file}`;

                        if (!EXCLUDED_PAGES.some(excluded => route.includes(excluded))) {
                            pages.push(route === '/home' ? '/' : route);
                        }
                    }

                    traverseAppDirectory(filePath, `${basePath}/${file}`);
                }
            });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return;
        }
    }

    try {
        const rootPageFiles = ['page.tsx', 'page.ts', 'page.js', 'page.jsx'];
        const hasRootPage = rootPageFiles.some(pageFile =>
            fs.existsSync(path.join(appDirectory, pageFile))
        );

        if (hasRootPage) {
            pages.push('/');
        }

        traverseAppDirectory(appDirectory);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.warn('App directory not found');
    }

    return pages;
}

async function getDynamicBlogPages(): Promise<string[]> {
    try {
        const response = await fetch(`${BASE_URL}/api/blogs`);
        const blogs = await response.json();

        return blogs.map((blog: any) => `/blogs/${blog.slug}`);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return [];
    }
}

function getChangeFrequency(page: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
    if (page === '/') return 'daily';
    if (page.startsWith('/blogs')) return 'weekly';
    if (page === '/contact' || page === '/about') return 'monthly';
    return 'monthly';
}

export async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages = getStaticPages();
    const appPages = getAppRouterPages();
    const dynamicBlogPages = await getDynamicBlogPages();

    const allPages = [...new Set([...staticPages, ...appPages, ...dynamicBlogPages])];

    const sitemap: MetadataRoute.Sitemap = allPages.map((page) => {
        const priority = PAGE_PRIORITIES[page] || 0.5;

        return {
            url: `${BASE_URL}${page}`,
            lastModified: new Date(),
            changeFrequency: getChangeFrequency(page),
            priority,
        };
    });

    return sitemap;
}