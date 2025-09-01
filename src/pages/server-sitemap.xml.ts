import { NextResponse } from 'next/server';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { getBlogSlugsForSitemap } from '@/lib/strapi';

export const revalidate = 60 * 60;

export async function GET() {
    try {
        const API_TOKEN = process.env.STRAPI_API_TOKEN || '9f611561bef82ecbb630c86b284f79a94dae6cd7b842c7e93cb8d43a2219cd366e9d59af16be468c24955ebc8128580411687a89c9874c98836968055218f592eb4fd5553783717a7e329d73f5e6e9ce04cf3e63604da184f48589b5602d38c9795d015ab800c1b4226481986b1580d6303221aa0c2fe7f6aa52b253ea79581b';
        const blogSlugs = await getBlogSlugsForSitemap(API_TOKEN);
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
