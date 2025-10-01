import type { BlogPost, BlogResponse } from '@/types/blog';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function sFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (API_TOKEN) {
        headers['Authorization'] = `Bearer ${API_TOKEN}`;
    }

    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
        headers: {
            ...headers,
            ...(options?.headers || {}),
        },
        ...options,
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
    }

    return res.json();
}

function transformStrapiPost(item: any): BlogPost {
    const attributes = item.attributes || item;
    return {
        id: item.id,
        documentId: item.documentId || item.id?.toString(),
        title: attributes.title,
        content: attributes.content,
        excerpt: attributes.excerpt,
        slug: attributes.slug,
        tags: attributes.tags || '',
        published: attributes.published?.toString() || 'true',
        createdAt: attributes.createdAt,
        updatedAt: attributes.updatedAt,
        ...(attributes.feature_image && attributes.feature_image.length > 0 && {
            feature_image: {
                url: attributes.feature_image[0].url
            }
        })
    };
}

export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    const response = await sFetch<any>(
        `/api/blog-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=createdAt:desc`
    );

    return {
        data: response.data.map(transformStrapiPost),
        meta: response.meta
    };
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const q = new URLSearchParams();
    q.set('filters[slug][$eq]', slug);
    q.set('populate', '*');

    const data = await sFetch<any>(`/api/blog-posts?${q.toString()}`);

    if (!data.data || data.data.length === 0) {
        return null;
    }

    return transformStrapiPost(data.data[0]);
}

export async function getLatestSlugs(limit = 50): Promise<string[]> {
    const data = await sFetch<any>(
        `/api/blog-posts?fields[0]=slug&pagination[page]=1&pagination[pageSize]=${limit}&sort=createdAt:desc`
    );

    return (data.data ?? [])
        .map((x: any) => x?.attributes?.slug ?? x?.slug)
        .filter(Boolean);
}

export async function getBlogSlugsForSitemap(apiToken?: string): Promise<Array<{ slug: string; updatedAt: string }>> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    const token = apiToken || API_TOKEN;

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const data = await sFetch<any>(
        `/api/blog-posts?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=1000&sort=createdAt:desc`,
        { headers }
    );

    return (data.data ?? [])
        .map((blog: any) => ({
            slug: blog?.attributes?.slug ?? blog?.slug,
            updatedAt: blog?.attributes?.updatedAt ?? blog?.updatedAt ?? new Date().toISOString(),
        }))
        .filter((blog: any) => blog.slug);
}