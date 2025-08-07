import React from 'react';
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from 'next-seo';
import BlogList from "@/components/Blog/BlogList";
import Footer from "@/components/Footer/footer";
const Blog: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Blogs | TF Business Solution"
                description="Explore the latest insights, tips, and updates on AaaS, Fractional Leadership, Sales Automation, and more from TF Business Solution."
                canonical="https://tfbusinesssolution.com/blogs"
                additionalMetaTags={[
                    { name: 'keywords', content: 'TF Business Solution Blog, Business Growth Tips, AaaS Blog, Fractional Leadership Insights, Sales Automation Articles' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://tfbusinesssolution.com/blogs',
                    title: 'TF Business Solution Blog | Business Growth Insights',
                    description: 'Discover strategies and insights to grow your business through AaaS, Fractional CMO/CTO roles, and sales automation.',
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
                twitter={{
                    handle: '@TFBusiness',
                    site: '@TFBusiness',
                    cardType: 'summary_large_image',
                }}
            />

            <WebPageJsonLd
                id="https://tfbusinesssolution.com/blogs/#webpage"
                url="https://tfbusinesssolution.com/blogs"
                name="Blog | TF Business Solution"
                description="Stay up to date with expert articles and blog posts from TF Business Solution on business strategy, automation, and fractional leadership."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/blogs?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: 'https://tfbusinesssolution.com/',
                    },
                    {
                        position: 2,
                        name: 'Blog',
                        item: 'https://tfbusinesssolution.com/blogs',
                    },
                ]}
            />

            <BlogList />
            <Footer/>
        </>
    );
};

export default Blog;
