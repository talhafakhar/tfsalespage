import type { GetStaticProps } from 'next';
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from 'next-seo';
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer/footer';
import BlogList from '@/components/Blog/BlogList';
import { getBlogs } from '@/lib/strapi';
import type { BlogResponse } from '@/types/blog';

type Props = {
    initialBlogs: BlogResponse['data'];
    pagination: BlogResponse['meta']['pagination'];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const page = 1;
    const pageSize = 10;
    const data = await getBlogs(page, pageSize);

    return {
        props: {
            initialBlogs: data.data,
            pagination: data.meta.pagination,
        },
        revalidate: 300,
    };
};

export default function BlogsIndex({ initialBlogs, pagination }: Props) {
    return (
        <>
            <NextSeo
                title="Blogs | TF Business Solution"
                description="Explore the latest insights, tips, and updates on AaaS, Fractional Leadership, Sales Automation, and more from TF Business Solution."
                canonical="https://tfbusinesssolution.com/blogs"
                openGraph={{
                    type: 'website',
                    url: 'https://tfbusinesssolution.com/blogs',
                    title: 'TF Business Solution Blog | Business Growth Insights',
                    description:
                        'Discover strategies and insights to grow your business through AaaS, Fractional CMO/CTO roles, and sales automation.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/blogs-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution Blog',
                        },
                    ],
                    site_name: 'TF Business Solution',
                }}
                twitter={{ handle: '@TFBusiness', site: '@TFBusiness', cardType: 'summary_large_image' }}
                additionalMetaTags={[
                    { name: 'keywords', content: 'TF Business Solution Blog, Business Growth Tips, AaaS Blog, Fractional Leadership Insights, Sales Automation Articles' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
            />
            <WebPageJsonLd
                id="https://tfbusinesssolution.com/blogs/#webpage"
                url="https://tfbusinesssolution.com/blogs"
                name="Blog | TF Business Solution"
                description="Stay up to date with expert articles and blog posts from TF Business Solution on business strategy, automation, and fractional leadership."
                potentialAction={{ target: 'https://tfbusinesssolution.com/blogs?q={search_term_string}', queryInput: 'required name=search_term_string' }}
            />
            <BreadcrumbJsonLd
                itemListElements={[
                    { position: 1, name: 'Home', item: 'https://tfbusinesssolution.com/' },
                    { position: 2, name: 'Blog', item: 'https://tfbusinesssolution.com/blogs' },
                ]}
            />

            <Navbar />
            <main className="min-h-screen pt-24 relative">
                {/* your background blobs, as before */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-20">
                    <BlogList
                        initialBlogs={initialBlogs}
                        pagination={pagination}
                        currentPage={1}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
