import type { BlogPost, BlogResponse } from '@/types/blog';

const STRAPI_URL = process.env.STRAPI_URL ?? 'https://api.tfbusinesssolutions.com';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

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

// ── List (paginated) ────────────────────────────────────────────────────────────
export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    return sFetch<BlogResponse>(
        `/api/blogs?populate=feature_image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
}

export async function getBlogsPageCount(pageSize = 10): Promise<number> {
    const data = await sFetch<BlogResponse>(
        `/api/blogs?pagination[page]=1&pagination[pageSize]=${pageSize}`
    );
    return data.meta?.pagination?.pageCount ?? 1;
}

// ── Detail (ensure all fields needed for the page are included) ────────────────
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const q = new URLSearchParams();
    q.set('filters[slug][$eq]', slug);
    q.set('populate', '*');             // ✅ populate all relations/media/components

    const data = await sFetch<BlogResponse>(`/api/blogs?${q.toString()}`);
    return (data.data?.[0] as BlogPost) ?? null;
}

// ── Prebuild slugs for getStaticPaths ──────────────────────────────────────────
export async function getLatestSlugs(limit = 50): Promise<string[]> {
    const data = await sFetch<any>(
        `/api/blogs?fields=slug&pagination[page]=1&pagination[pageSize]=${limit}&sort=publishedAt:desc`
    );
    return (data.data ?? []).map((x: any) => x?.attributes?.slug ?? x?.slug).filter(Boolean);
}
