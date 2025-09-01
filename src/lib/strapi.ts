import type { BlogPost, BlogResponse } from '@/types/blog';

const STRAPI_URL = process.env.STRAPI_URL ?? 'https://api.tfbusinesssolutions.com';
const API_TOKEN = process.env.STRAPI_API_TOKEN || '9f611561bef82ecbb630c86b284f79a94dae6cd7b842c7e93cb8d43a2219cd366e9d59af16be468c24955ebc8128580411687a89c9874c98836968055218f592eb4fd5553783717a7e329d73f5e6e9ce04cf3e63604da184f48589b5602d38c9795d015ab800c1b4226481986b1580d6303221aa0c2fe7f6aa52b253ea79581b';

if (!API_TOKEN) {
    console.warn('⚠️ STRAPI_API_TOKEN is not set; Strapi calls may fail at build/revalidate.');
}
export async function sFetch<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
        },
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

export async function getBlogSlugsForSitemap(): Promise<Array<{slug: string; updatedAt: string}>> {
    try {
        const data = await sFetch<any>(
            `/api/blogs?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=1000&sort=publishedAt:desc`
        );

        return (data.data ?? []).map((blog: any) => ({
            slug: blog?.attributes?.slug ?? blog?.slug,
            updatedAt: blog?.attributes?.updatedAt ?? blog?.updatedAt ?? new Date().toISOString(),
        })).filter((blog: any) => blog.slug);
    } catch (error) {
        console.error('Error fetching blog slugs for sitemap:', error);
        return [];
    }
}