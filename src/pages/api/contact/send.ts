import type { NextApiRequest, NextApiResponse } from 'next';
import {Resend} from "resend";
const resend = new Resend(process.env.RESEND_API_KEY || 're_decbFY3d_CNYt7YLCTXNyW3wGGJDy3Y7p');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
        }
        const { name, email, phone, linkedin, nda, message ,token} = req.body;

        if (!token) {
            return res.status(400).json({ ok: false, message: 'reCAPTCHA token is missing' });
        }

        const verifyRes = await fetch(`${req.headers.origin}/api/recaptcha/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });

        let verifyData;
        try {
            verifyData = await verifyRes.json();
        } catch (err) {
            console.error('Error parsing reCAPTCHA response:', err);
            return res.status(500).json({ ok: false, message: 'Invalid reCAPTCHA response' });
        }

        if (!verifyData.ok) {
            return res.status(400).json({ ok: false, message: 'reCAPTCHA verification failed' });
        }
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'thetalhafakhar@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>NDA Required:</strong> ${nda}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
        });

        return res.status(200).json({ ok: true, message: 'Form submitted successfully' });

    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({
            ok: false,
            message:  'Internal Server Error',
        });
    }
}
