import { BlogPost, BlogResponse } from "@/types/blog";

export async function fetchBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    try {
        const response = await fetch(
            `/api/blogs?page=${page}&pageSize=${pageSize}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

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

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const response = await fetch(`/api/blogs/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Failed to fetch blog: ${response.status}`);
        }

        const blog: BlogPost = await response.json();
        return blog;
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return null;
    }
}