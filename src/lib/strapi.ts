import { BlogPost, BlogResponse } from "@/types/blog";
const STRAPI_URL = process.env.STRAPI_URL || 'https://api.tfbusinesssolutions.com';
const API_TOKEN = process.env.STRAPI_API_TOKEN || 'b406b382ca1329ac35c9b0df167b8bc6ddf7cc2d2b6d4480124e105aaa1a8abe29389ffe02a84eb5705eeee4d6c87a130b9880fa199e1e55e4391c1838aaf9140f607fae69ad667546f4bc20b898f24f8176bf602833a13b5b156857a8eb3b1ab7e5599a7323e616f5bb6c0f25dd278ba9597866e5558b194ac1e37f0a526ca6';
if (!API_TOKEN) {
    console.warn('⚠️ STRAPI_API_TOKEN is not set - API calls may fail');
}
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
            const errorText = await response.text();
            throw new Error(`Failed to fetch blogs: ${response.status} - ${errorText}`);
        }
        const data: BlogResponse = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in fetchBlogsBuildTime:', error);
        throw error;
    }
}
export async function fetchBlogBySlugBuildTime(slug: string): Promise<BlogPost | null> {
    try {
        const url = `${STRAPI_URL}/api/blogs?populate=feature_image&filters[slug][$eq]=${slug}`;

        console.log('🔧 Server: Fetching blog from Strapi:', url);

        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch blog: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        const blog = data.data[0] || null;
        return blog;
    } catch (error) {
        console.error('❌ Error in fetchBlogBySlugBuildTime:', error);
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
            const errorText = await response.text();
            throw new Error(`Failed to fetch blogs: ${response.status} - ${errorText}`);
        }
        const data: BlogResponse = await response.json();
        return data;
    } catch (error) {
        console.error('❌ Error in fetchBlogs:', error);
        throw error;
    }
}