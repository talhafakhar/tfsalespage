import { NextApiRequest, NextApiResponse } from 'next';
import { BlogResponse } from '@/types/blog';
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { page = 1, pageSize = 10 } = req.query;
    try {
        const url = `${STRAPI_URL}/api/blogs?populate=feature_image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;

        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        const data: BlogResponse = await response.json();
        res.setHeader(
            'Cache-Control',
            'public, s-maxage=60, stale-while-revalidate=300'
        );
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return res.status(500).json({ message: 'Failed to fetch blogs' });
    }
}