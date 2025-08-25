import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard from '@/components/Blog/BlogCard';
import type { BlogResponse, BlogPost } from '@/types/blog';

type Props = {
    initialBlogs: BlogPost[];
    pagination: BlogResponse['meta']['pagination'];
    currentPage: number;
};

function getPageNumbers(currentPage: number, totalPages: number) {
    const pages: (number | '...')[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pages;
}

export default function BlogList({ initialBlogs, pagination, currentPage }: Props) {
    const blogs = initialBlogs;
    const totalPages = pagination.pageCount;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
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
                    {/* Previous */}
                    <Link
                        href={currentPage > 1 ? (currentPage - 1 === 1 ? '/blogs' : `/blogs/page/${currentPage - 1}`) : '#'}
                        aria-disabled={currentPage === 1}
                        className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                            currentPage === 1
                                ? 'bg-gray-200 text-gray-400 pointer-events-none'
                                : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300'
                        }`}
                    >
                        <ChevronLeft size={16} />
                        Previous
                    </Link>

                    {/* Numbers */}
                    <div className="flex gap-1">
                        {getPageNumbers(currentPage, totalPages).map((p, i) => {
                            if (p === '...') {
                                return (
                                    <span key={`sep-${i}`} className="min-w-[35px] h-8 rounded-md px-2 text-sm font-medium text-gray-400 flex items-center justify-center">
                    ...
                  </span>
                                );
                            }
                            const href = p === 1 ? '/blogs' : `/blogs/page/${p}`;
                            const active = p === currentPage;
                            return (
                                <Link
                                    key={p}
                                    href={href}
                                    className={`min-w-[35px] h-8 rounded-md px-2 text-sm font-medium transition-colors flex items-center justify-center ${
                                        active ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300'
                                    }`}
                                >
                                    {p}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Next */}
                    <Link
                        href={currentPage < totalPages ? `/blogs/page/${currentPage + 1}` : '#'}
                        aria-disabled={currentPage === totalPages}
                        className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                            currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 pointer-events-none'
                                : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-300'
                        }`}
                    >
                        Next
                        <ChevronRight size={16} />
                    </Link>
                </div>
            )}
        </div>
    );
}