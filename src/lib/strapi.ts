import type { BlogPost, BlogResponse } from '@/types/blog';
const STRAPI_URL = process.env.STRAPI_URL ;
const API_TOKEN = process.env.STRAPI_API_TOKEN;
if (!API_TOKEN) {
    console.warn('⚠️ STRAPI_API_TOKEN is not set; Strapi calls may fail at build/revalidate.');
}
export async function sFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
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
export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    return sFetch<BlogResponse>(
        `/api/blogs?populate=feature_image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
}
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const q = new URLSearchParams();
    q.set('filters[slug][$eq]', slug);
    q.set('populate', '*');

    const data = await sFetch<BlogResponse>(`/api/blogs?${q.toString()}`);
    return (data.data?.[0] as BlogPost) ?? null;
}
export async function getLatestSlugs(limit = 50): Promise<string[]> {
    const data = await sFetch<any>(
        `/api/blogs?fields=slug&pagination[page]=1&pagination[pageSize]=${limit}&sort=publishedAt:desc`
    );
    return (data.data ?? []).map((x: any) => x?.attributes?.slug ?? x?.slug).filter(Boolean);
}
export async function getBlogSlugsForSitemap(apiToken?: string): Promise<Array<{ slug: string; updatedAt: string }>> {
    try {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (apiToken) {
            headers['Authorization'] = `Bearer ${apiToken}`;
        }
        const data = await sFetch<any>(
            `/api/blogs?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=1000&sort=publishedAt:desc`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            }
        );

        return (data.data ?? [])
            .map((blog: any) => ({
                slug: blog?.attributes?.slug ?? blog?.slug,
                updatedAt: blog?.attributes?.updatedAt ?? blog?.updatedAt ?? new Date().toISOString(),
            }))
            .filter((blog: any) => blog.slug);
    } catch (error) {
        console.error('Error fetching blog slugs for sitemap:', error);
        return [];
    }
}
