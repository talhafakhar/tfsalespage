import { NextResponse } from 'next/server';
export const revalidate = 60 * 60;
export async function GET() {
    try {
        const API_TOKEN = process.env.STRAPI_API_TOKEN || "9f611561bef82ecbb630c86b284f79a94dae6cd7b842c7e93cb8d43a2219cd366e9d59af16be468c24955ebc8128580411687a89c9874c98836968055218f592eb4fd5553783717a7e329d73f5e6e9ce04cf3e63604da184f48589b5602d38c9795d015ab800c1b4226481986b1580d6303221aa0c2fe7f6aa52b253ea79581b";
        const STRAPI_URL = process.env.STRAPI_URL || "https://api.tfbusinesssolutions.com";

        const res = await fetch(
            `${STRAPI_URL}/api/blogs?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=1000&sort=publishedAt:desc`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                next: { revalidate: 60 },
                cache: "no-store",
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
          <lastmod>${new Date(blog.updatedAt).toISOString().split('T')[0]}</lastmod>
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
