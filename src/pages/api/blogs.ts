import type { NextApiRequest, NextApiResponse } from 'next';
import {getBlogSlugsForSitemap} from "@/lib/strapi";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const blogs = await getBlogSlugsForSitemap();

        const formattedBlogs = blogs.map((blog:any) => ({
            slug: blog.slug,
            updatedAt: blog.updatedAt
        }));

        res.status(200).json(formattedBlogs);
    } catch (error) {
        console.error('Error fetching blogs for sitemap:', error);
        res.status(500).json({ message: 'Error fetching blogs' });
    }
}