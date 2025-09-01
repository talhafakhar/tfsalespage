import { NextResponse } from 'next/server';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { getBlogSlugsForSitemap } from '@/lib/strapi';
export const revalidate = 60 * 60;
export async function GET() {
    try {
        const blogSlugs = await getBlogSlugsForSitemap();

        const fields: ISitemapField[] = blogSlugs.map((blog) => {
            const lastmodDate = new Date(blog.updatedAt || new Date().toISOString());
            const formattedLastmod = `${lastmodDate.getFullYear()}-${String(
                lastmodDate.getMonth() + 1
            ).padStart(2, '0')}`;

            return {
                loc: `https://tfbusinesssolutions.com/blogs/${blog.slug}`,
                lastmod: formattedLastmod,
                priority: 0.7,
                changefreq: 'weekly',
            };
        });

        const sitemap = await getServerSideSitemap(null as any, fields);
        return sitemap;
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return new NextResponse('Error generating sitemap', { status: 500 });
    }
}

export default GET;
