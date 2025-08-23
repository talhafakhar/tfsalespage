import { BlogPost, BlogResponse } from "@/types/blog";
const STRAPI_URL = process.env.STRAPI_URL || 'https://api.tfbusinesssolutions.com';
const API_TOKEN = process.env.STRAPI_API_TOKEN;
function getBaseUrl() {
    if (typeof window === 'undefined') {
        return process.env.NEXTAUTH_URL || 'http://localhost:3000';
    }
    return window.location.origin;
}
export async function fetchBlogsBuildTime(page = 1, pageSize = 10): Promise<BlogResponse> {
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
        return data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}
export async function fetchBlogBySlugBuildTime(slug: string): Promise<BlogPost | null> {
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
export async function fetchBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    try {
        const baseUrl = getBaseUrl();
        const url = `${baseUrl}/api/blogs?page=${page}&pageSize=${pageSize}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status}`);
        }

        const data: BlogResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}