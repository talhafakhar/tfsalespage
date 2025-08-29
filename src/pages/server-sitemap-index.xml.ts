import { getServerSideSitemapIndex } from 'next-sitemap'
export const getServerSideProps = async (ctx: any) => {
    return getServerSideSitemapIndex(ctx, [
        'https://tfbusinesssolutions.com/server-sitemap.xml',
    ])
}

export default function SitemapIndex() {}
