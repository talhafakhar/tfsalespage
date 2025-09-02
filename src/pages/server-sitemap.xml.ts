import { NextResponse } from 'next/server';
export const revalidate = 60 * 60;
export async function GET() {
    try {
        const API_TOKEN = process.env.API_TOKEN;

        const res = await fetch(
            `${process.env.STRAPI_URL}/api/blogs?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=1000&sort=publishedAt:desc`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch blogs: ${res.status}`);
        }

        const data = await res.json();

        const blogs = (data.data ?? []).map((blog: any) => ({
            slug: blog?.attributes?.slug ?? blog?.slug,
            updatedAt: blog?.attributes?.updatedAt ?? blog?.updatedAt ?? new Date().toISOString(),
        }));
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${blogs
            .map(
                (blog:any) => `
          <url>
            <loc>https://tfbusinesssolutions.com/blogs/${blog.slug}</loc>
            <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>
        `
            )
            .join('')}
      </urlset>`;

        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return new NextResponse('Error generating sitemap', { status: 500 });
    }
}

export default GET;
