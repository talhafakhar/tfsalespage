import {BlogPost, BlogResponse} from "@/types/blog";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
export async function fetchBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
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
        return data.data[0] || null;
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return null;
    }
}