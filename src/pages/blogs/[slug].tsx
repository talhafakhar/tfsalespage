import type {GetStaticPaths, GetStaticProps} from 'next';
import {NextSeo, ArticleJsonLd, BreadcrumbJsonLd} from 'next-seo';
import {getBlogBySlug, getLatestSlugs} from '@/lib/strapi';
import type {BlogPost} from '@/types/blog';
import BlogDetail from '@/components/Blog/BlogDetail';
import Footer from '@/components/Footer/footer';

type Props = { blog: BlogPost };

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const slugs = await getLatestSlugs(50); // pre-render newest 50
        return {paths: slugs.map((slug) => ({params: {slug}})), fallback: 'blocking'};
    } catch {
        // If CMS is unreachable at build-time, allow on-demand generation
        return {paths: [], fallback: 'blocking'};
    }
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const slug = String(params!.slug);
    try {
        const blog = await getBlogBySlug(slug);
        if (!blog) return {notFound: true, revalidate: 60};

        return {
            props: {blog},
            revalidate: 300, // ISR: at most every 5 min
        };
    } catch (e) {
        console.error('Error fetching blog post:', e);
        return {notFound: true, revalidate: 60};
    }
};

export default function BlogPostPage({blog}: Props) {
    const imageUrl = blog.feature_image?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : undefined;

    const tags = blog.tags ? blog.tags.split(',').map((t) => t.trim()) : [];

    const canonical = `https://tfbusinesssolution.com/blogs/${blog.slug}`;
    const title = `${blog.title} | TF Business Solution Blog`;

    return (
        <>
            <NextSeo
                title={title}
                description={blog.excerpt}
                canonical={canonical}
                openGraph={{
                    type: 'article',
                    url: canonical,
                    title: blog.title,
                    description: blog.excerpt,
                    images: fullImageUrl ? [{url: fullImageUrl, width: 1200, height: 630, alt: blog.title}] : [],
                    site_name: 'TF Business Solution',
                    article: {
                        publishedTime: blog.publishedAt,
                        modifiedTime: blog.updatedAt,
                        authors: ['TF Business Solution'],
                        tags,
                    },
                }}
                twitter={{handle: '@TFBusiness', site: '@TFBusiness', cardType: 'summary_large_image'}}
                additionalMetaTags={[
                    {name: 'keywords', content: tags.join(', ')},
                    {name: 'author', content: 'TF Business Solution'},
                    {name: 'robots', content: 'index, follow'},
                ]}
            />

            <ArticleJsonLd
                url={canonical}
                title={blog.title}
                images={fullImageUrl ? [fullImageUrl] : []}
                datePublished={blog.publishedAt}
                authorName="TF Business Solution"
                publisherName="TF Business Solution"
                publisherLogo="https://tfbusinesssolution.com/images/logo.png"
                description={blog.excerpt}
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    {position: 1, name: 'Home', item: 'https://tfbusinesssolution.com/'},
                    {position: 2, name: 'Blog', item: 'https://tfbusinesssolution.com/blogs'},
                    {position: 3, name: blog.title, item: canonical},
                ]}
            />

            <BlogDetail blog={blog}/>
            <Footer/>
        </>
    );
}
