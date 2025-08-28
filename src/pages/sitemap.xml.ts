import { GetServerSideProps } from 'next';
import { generateSitemap } from "@/lib/sitemap";
import type { MetadataRoute } from 'next';

export default function Sitemap() {
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const sitemap: MetadataRoute.Sitemap = await generateSitemap();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
        .map(
            (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${new Date(item.lastModified).toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
        )
        .join('')}
</urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();

    return {
        props: {},
    };
};
