import { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from '@/types/blog';
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { slug } = req.query;

    if (!slug || typeof slug !== 'string') {
        return res.status(400).json({ message: 'Invalid slug parameter' });
    }

    try {
        const response = await fetch(
            `${STRAPI_URL}/api/blogs?populate=feature_image&filters[slug][$eq]=${slug}`,
            {
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch blog: ${response.status}`);
        }

        const data = await response.json();
        const blog: BlogPost | null = data.data[0] || null;

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // ISR Cache Headers - longer cache for individual posts
        res.setHeader(
            'Cache-Control',
            'public, s-maxage=300, stale-while-revalidate=600'
        );

        return res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return res.status(500).json({ message: 'Failed to fetch blog' });
    }
}