import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';
import Navbar from '@/components/Header/Navbar';

interface BlogDetailProps { blog: BlogPost; }

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
    const imageUrl = blog.feature_image?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' } };
    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <Navbar />
                <motion.div className="container mx-auto px-4 py-32 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
                        <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
                        <Link href="/blogs" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            Back to Blogs
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* background blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div className="absolute top-20 right-20 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl"
                            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
                <motion.div className="absolute bottom-20 left-20 w-[500px] h-[250px] bg-primary/20 rounded-full blur-3xl"
                            animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 0.9, 1] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }} />
            </div>

            <motion.main className="relative z-10 pt-20 md:pt-32" variants={staggerContainer} initial="initial" animate="animate">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.header className="mb-12" variants={fadeInUp}>
                        <motion.div className="flex flex-wrap gap-3 mb-6" variants={fadeInUp}>
                            {blog.tags?.split(',').map((tag, idx) => (
                                <motion.span key={idx} className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary/10 text-sm font-medium text-gray-700 rounded-full shadow-sm"
                                             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    #{tag.trim()}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight mb-8" variants={fadeInUp}>
                            {blog.title}
                        </motion.h1>

                        <motion.div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8" variants={fadeInUp}>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium">Published {formatDate(blog.publishedAt)}</span>
                            </div>
                            {blog.updatedAt && blog.updatedAt !== blog.publishedAt && (
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium">Updated {formatDate(blog.updatedAt)}</span>
                                </div>
                            )}
                        </motion.div>

                        {blog.excerpt && (
                            <motion.p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl" variants={fadeInUp}>
                                {blog.excerpt}
                            </motion.p>
                        )}
                    </motion.header>

                    {fullImageUrl && (
                        <motion.div className="mb-16 group" variants={fadeInUp}>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                                        <Image
                                            src={fullImageUrl}
                                            alt={blog.title}
                                            width={1200}
                                            height={800}
                                            className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <motion.article className="prose prose-lg lg:prose-xl max-w-none mb-16" variants={fadeInUp}
                                    style={{
                                        '--tw-prose-body': '#374151',
                                        '--tw-prose-headings': '#111827',
                                        '--tw-prose-links': '#3B82F6',
                                    } as React.CSSProperties}
                    >
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200/50">
                            {(blog.content ?? []).map((block: any, index: number) => {
                                const Tag: keyof JSX.IntrinsicElements = block?.type === 'paragraph' ? 'p' : 'div';
                                return (
                                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }}>
                                        <Tag className="mb-6 text-lg leading-relaxed">
                                            {(block?.children ?? []).map((child: any, i: number) => {
                                                let Inline: keyof JSX.IntrinsicElements = 'span';
                                                if (child.bold) Inline = 'strong';
                                                else if (child.italic) Inline = 'em';
                                                return <Inline key={i} className={child.bold ? 'font-semibold' : ''}>{child.text}</Inline>;
                                            })}
                                        </Tag>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.article>

                    <motion.footer className="py-8 border-t border-gray-200/50" variants={fadeInUp}>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <Link href="/blogs" className="group inline-flex items-center px-8 py-4 bg-primary font-semibold rounded-full border border-gray-200/50 hover:border-gray-300 transition-all shadow-lg">
                                <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                Back to All Blogs
                            </Link>
                        </div>
                    </motion.footer>
                </div>
            </motion.main>
        </div>
    );
};

export default BlogDetail;
