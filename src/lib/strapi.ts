import type { BlogPost, BlogResponse } from '@/types/blog';

const STRAPI_URL = process.env.STRAPI_URL ?? 'https://api.tfbusinesssolutions.com';
const API_TOKEN = process.env.STRAPI_API_TOKEN || 'b406b382ca1329ac35c9b0df167b8bc6ddf7cc2d2b6d4480124e105aaa1a8abe29389ffe02a84eb5705eeee4d6c87a130b9880fa199e1e55e4391c1838aaf9140f607fae69ad667546f4bc20b898f24f8176bf602833a13b5b156857a8eb3b1ab7e5599a7323e616f5bb6c0f25dd278ba9597866e5558b194ac1e37f0a526ca6';

if (!API_TOKEN) {
    console.warn('⚠️ STRAPI_API_TOKEN is not set; Strapi calls may fail at build/revalidate.');
}

function h() {
    return {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
    };
}

async function sFetch<T>(path: string): Promise<T> {
    const res = await fetch(`${STRAPI_URL}${path}`, { headers: h() });
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`Strapi ${res.status}: ${body}`);
    }
    return res.json() as Promise<T>;
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
