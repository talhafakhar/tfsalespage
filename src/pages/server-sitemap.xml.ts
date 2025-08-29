import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { getBlogSlugsForSitemap } from '@/lib/strapi'

export const getServerSideProps = async (ctx: any) => {
    try {
        const blogSlugs = await getBlogSlugsForSitemap()

        const fields: ISitemapField[] = blogSlugs.map((blog) => ({
            loc: `https://tfbusinesssolutions.com/blogs/${blog.slug}`,
            lastmod: blog.updatedAt || new Date().toISOString(),
            priority: 0.7,
            changefreq: 'weekly',
        }))

        return getServerSideSitemap(ctx, fields)
    } catch (error) {
        console.error('Error generating sitemap:', error)
        return getServerSideSitemap(ctx, [])
    }
}
export default function Sitemap() {}
