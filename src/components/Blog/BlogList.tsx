import React, { useEffect, useState } from 'react';
import {BlogPost, BlogResponse} from "@/types/blog";
import { fetchBlogs } from '@/lib/strapi';
import BlogCard from "@/components/Blog/BlogCard";
import Navbar from "@/components/Header/Navbar";
import { motion } from 'framer-motion';
import {ChevronLeft, ChevronRight, RefreshCw} from "lucide-react";

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const loadBlogs = async (page: number) => {
        try {
            setLoading(true);
            setError(null);
            const response: BlogResponse = await fetchBlogs(page, 10);
            setBlogs(response.data);
            setTotalPages(response.meta.pagination.pageCount);
            setCurrentPage(page);
        } catch (err) {
            console.error('Failed to load blogs:', err);
            setError('Failed to load blogs. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBlogs(1);
    }, []);

    const handlePageChange = (page: number) => {
        loadBlogs(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen pt-24">
                    <div className="container mx-auto px-4 py-20">
                        <div className="flex flex-col items-center justify-center min-h-64">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mb-4"
                            />
                            <p className="text-muted-foreground">Loading blogs...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen pt-24">
                    <div className="container mx-auto px-4 py-20">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-6xl mb-6">⚠️</div>
                            <h2 className="text-3xl font-bold text-foreground mb-4">Oops! Something went wrong</h2>
                            <p className="text-destructive text-lg mb-8 max-w-md mx-auto">{error}</p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => loadBlogs(currentPage)}
                                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors"
                                >
                                    <RefreshCw size={20} />
                                    Try Again
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen pt-24">
                    <div className="container mx-auto px-4 py-20">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-6xl mb-6">📝</div>
                            <h2 className="text-3xl font-bold text-foreground mb-4">No Blog Posts Yet</h2>
                            <p className="text-muted-foreground text-lg max-w-md mx-auto">
                                We&#39;re working on creating amazing content for you. Check back soon!
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-24">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-8 relative z-20">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
                            Our Latest <span className="text-primary">Insights</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Discover strategies and insights to grow your business through AaaS,
                            Fractional Leadership, and Sales Automation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-12 gap-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                    currentPage === 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300'
                                }`}
                            >
                                <ChevronLeft size={16} />
                                Previous
                            </button>

                            <div className="flex gap-1">
                                {getPageNumbers().map((page, index) => (
                                    <button
                                        key={index}
                                        onClick={() => typeof page === 'number' && handlePageChange(page)}
                                        disabled={page === '...'}
                                        className={`min-w-[35px] h-8 rounded-md px-2 text-sm font-medium transition-colors ${
                                            page === currentPage
                                                ? 'bg-primary text-white'
                                                : page === '...'
                                                    ? 'text-gray-400 cursor-default'
                                                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                    currentPage === totalPages
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300'
                                }`}
                            >
                                Next
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogList;