import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BlogPost} from "@/types/blog";
import {ArrowRight, Calendar, Eye} from "lucide-react";
interface BlogCardProps {
    blog: BlogPost;
    key: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog,key }) => {
    const imageUrl = blog.feature_image?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;
    const imageAlt = blog.title;
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    const parsedTags = blog.tags ? blog.tags.replace(/"/g, '').split(', ') : [];
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2" style={{animation: `fadeInUp 0.6s ease-out ${key * 0.1}s both`}}>
                <div>
                    {fullImageUrl && (
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-500/30 to-gray-900/40 z-10"/>
                            <Image
                                src={fullImageUrl}
                                alt={imageAlt}
                                fill
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 z-20">
                                <Link href={`/blogs/${blog.slug}`}
                                          className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                                    <Eye size={16} className="text-black" />
                                </Link>
                            </div>
                        </div>
                    )}
                    <div className="p-6 space-y-4">
                        <div className="flex flex-wrap gap-2">
                        {parsedTags.map((tag, index) => (
                            <span
                                key={index}
                                className="border border-secondary text-black px-3 py-0.5 rounded-md text-xs font-semibold tracking-wide hover:bg-yellow-500 transition-colors duration-200 cursor-pointer"
                            >
                #{tag.trim()}
              </span>
                        ))}
                    </div>
                        <h3 className="text-xl font-bold text-secondary leading-tight  line-clamp-2">
                        {blog.title}
                    </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {blog.excerpt.split(' ').slice(0, 20).join(' ')}
                        {blog.excerpt.split(' ').length > 20 && '...'}
                    </p>
                   </div>
                <div className="px-6 pb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span className="font-medium">{formatDate(blog.publishedAt)}</span>
                    </div>

                    <Link
                        href={`/blogs/${blog.slug}`}
                        className="group/btn flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-600 transition-colors duration-300">
                        <span>Read More</span>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover/btn:bg-yellow-500 transition-all duration-300 group-hover/btn:scale-110">
                            <ArrowRight size={14} className="text-black group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                        </div>
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>

    );
};
export default BlogCard;
