import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
    }

    const token = req.body.token;
    if (!token) {
        return res.status(400).json({ ok: false, message: 'Missing reCAPTCHA token' });
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY!,
            response: token
        })
    });

    const data = await response.json();
    if (!data.success) {
        return res.status(400).json({ ok: false, message: 'reCAPTCHA verification failed' });
    }

    return res.status(200).json({ ok: true });
}
