import React from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import {ArticleJsonLd, BreadcrumbJsonLd, NextSeo} from 'next-seo';
import {BlogPost} from '@/types/blog';
import {fetchBlogBySlugBuildTime, fetchBlogsBuildTime} from '@/lib/strapi';
import BlogDetail from "@/components/Blog/BlogDetail";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/Navbar";
import {motion} from "framer-motion";
import Link from "next/link";
interface BlogPostPageProps {
    blog: BlogPost | null;
}
const BlogPostPage: React.FC<BlogPostPageProps> = ({blog}) => {
    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <Navbar />
                <motion.div
                    className="container mx-auto px-4 py-32 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
                        <p className="text-gray-600 mb-8 leading-relaxed">The blog post you&#39;re looking for doesn&#39;t exist or may have been moved.</p>
                        <Link
                            href="/blogs"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blogs
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }   
    const imageUrl = blog.feature_image?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;
    return (
        <>
            <NextSeo
                title={`${blog.title} | TF Business Solution Blog`}
                description={blog.excerpt}
                canonical={`https://tfbusinesssolution.com/blogs/${blog.slug}`}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: blog.tags ? blog.tags.split(',').map(tag => tag.trim()).join(', ') : ''
                    },
                    {name: 'author', content: 'TF Business Solution'},
                    {name: 'robots', content: 'index, follow'},
                ]}
                openGraph={{
                    type: 'article',
                    url: `https://tfbusinesssolution.com/blogs/${blog.slug}`,
                    title: blog.title,
                    description: blog.excerpt,
                    images: fullImageUrl ? [
                        {
                            url: fullImageUrl,
                            width: 1200,
                            height: 630,
                            alt: blog.title,
                        },
                    ] : [],
                    site_name: 'TF Business Solution',
                    article: {
                        publishedTime: blog.publishedAt,
                        modifiedTime: blog.updatedAt,
                        authors: ['TF Business Solution'],
                        tags: blog.tags ? blog.tags.split(',').map(tag => tag.trim()) : [],
                    },
                }}
                twitter={{
                    handle: '@TFBusiness',
                    site: '@TFBusiness',
                    cardType: 'summary_large_image',
                }}
            />
            <ArticleJsonLd
                url={`https://tfbusinesssolution.com/blogs/${blog.slug}`}
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
                    {
                        position: 3,
                        name: blog.title,
                        item: `https://tfbusinesssolution.com/blogs/${blog.slug}`,
                    },
                ]}
            />
            <BlogDetail blog={blog}/>
            <Footer/>
        </>
    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await fetchBlogsBuildTime(1, 100);
        const paths = response.data.map((blog) => ({
            params: { slug: blog.slug },
        }));
        return {
            paths,
            fallback: 'blocking',
        };
    } catch (error) {
        console.error( error);
        return {
            paths: [],
            fallback: 'blocking',
        };
    }
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const slug = params?.slug as string;
        if (!slug) {
            console.log('❌ getStaticProps: No slug provided');
            return {
                notFound: true,
            };
        }
        const blog = await fetchBlogBySlugBuildTime(slug);
        if (!blog) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                blog,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('❌ Error fetching blog post:', error);
        return {
            notFound: true,
        };
    }
};

export default BlogPostPage;