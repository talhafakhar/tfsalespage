import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secret = (req.query.secret as string) || (req.headers['x-revalidate-token'] as string);
    if (secret !== process.env.REVALIDATE_SECRET) {
        return res.status(401).json({ ok: false, error: 'Unauthorized' });
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    try {
        const { slug, paths } = (req.body ?? {}) as { slug?: string; paths?: string[] };

        // Always refresh list
        await res.revalidate('/blogs');
        await res.revalidate('/blogs/page/1');

        // Refresh detail page if provided
        if (slug) await res.revalidate(`/blogs/${slug}`);

        // Optional explicit paths
        if (Array.isArray(paths)) {
            for (const p of paths) await res.revalidate(p);
        }

        return res.json({ ok: true, revalidated: { slug, paths } });
    } catch (e: any) {
        return res.status(500).json({ ok: false, error: e?.message || 'Revalidate failed' });
    }
}
