import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
    }
    const {token } = req.body;
    const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_HOSTNAME}/api/captcha/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.ok) {
        return res.status(400).json({ ok: false, message: 'reCAPTCHA failed' });
    }
    return res.status(200).json({ ok: true, message: 'Form submitted successfully' });
}
