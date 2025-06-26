import React, { useState, useEffect } from 'react';
import {
    Rocket,
    TrendingUp,
    Target,
    Bot,
    ArrowRight,
    Star,
} from 'lucide-react';

interface FounderPoint {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
    color: string;
}

const FoundersSection: React.FC = () => {
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const founderPoints: FounderPoint[] = [
        {
            icon: Rocket,
            title: "Launching or relaunching products",
            description: "and need expert guidance across growth, tech, and sales",
            color: "primary"
        },
        {
            icon: TrendingUp,
            title: "Struggling to break through revenue plateaus",
            description: "and want a smarter, more focused system",
            color: "emerald"
        },
        {
            icon: Target,
            title: "Scaling outbound, inbound, or hybrid sales",
            description: "without adding unnecessary complexity",
            color: "blue"
        },
        {
            icon: Bot,
            title: "Replacing manual processes with AI powered workflows",
            description: "to unlock efficiency and speed",
            color: "purple"
        }
    ];

    const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' | 'gradient') => {
        const colorMap = {
            primary: {
                bg: 'bg-primary-500',
                text: 'text-primary-600',
                border: 'border-primary-500',
                gradient: 'from-primary-400 to-primary-600'
            },
            emerald: {
                bg: 'bg-emerald-500',
                text: 'text-emerald-600',
                border: 'border-emerald-500',
                gradient: 'from-emerald-400 to-emerald-600'
            },
            blue: {
                bg: 'bg-blue-500',
                text: 'text-blue-600',
                border: 'border-blue-500',
                gradient: 'from-blue-400 to-blue-600'
            },
            purple: {
                bg: 'bg-purple-500',
                text: 'text-purple-600',
                border: 'border-purple-500',
                gradient: 'from-purple-400 to-purple-600'
            }
        };
        return colorMap[color as keyof typeof colorMap]?.[variant] || '';
    };

    return (
        <section className="bg-white py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.15) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            <div className="absolute top-10 right-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-10 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-40 left-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className={`mb-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>

                    <div className="flex justify-center items-center">
                        <div>
                            <h2 className="text-5xl text-center font-bold text-secondary-900 leading-tight mb-6">
                                Built for{' '}

                  <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                    Founders 
                  </span>
                                {' '}Who Are
                            </h2>
                            <div className="flex items-center justify-center gap-4 text-lg text-gray-600 mb-8">
                                <div className="flex items-center justify-center gap-2">
                                    <Star size={20} className="text-primary-500 fill-primary-500" />
                                    <span className="font-semibold">Trusted by 500+ Founders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-12">
                    {founderPoints.map((point, index) => {
                        const IconComponent = point.icon;
                        const isEven = index % 2 === 0;
                        const isHovered = hoveredPoint === index;

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${
                                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                                }`}
                                style={{ transitionDelay: `${400 + index * 200}ms` }}
                                onMouseEnter={() => setHoveredPoint(index)}
                                onMouseLeave={() => setHoveredPoint(null)}
                            >
                                <div className={`grid lg:grid-cols-12 gap-8 items-center ${
                                    isEven ? '' : 'lg:direction-rtl'
                                }`}>
                                    <div className={`lg:col-span-8 ${isEven ? '' : 'lg:text-right'}`}>
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className={`
                        flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg
                        transition-all duration-500 ${
                                                isHovered
                                                    ? `bg-gradient-to-br ${getColorClasses(point.color, 'gradient')} scale-110 shadow-2xl`
                                                    : 'bg-gray-400'
                                            }
                      `}>
                                                {index + 1}
                                            </div>

                                            {/* Point Indicator */}
                                            <div className={`
                        flex items-center gap-3 transition-all duration-300 ${
                                                isHovered ? 'transform translate-x-2' : ''
                                            }
                      `}>
                                                <div className={`
                          w-3 h-3 rounded-full transition-all duration-300 ${
                                                    isHovered ? getColorClasses(point.color, 'bg') : 'bg-gray-300'
                                                }
                        `}></div>
                                                <div className={`
                          h-px flex-1 transition-all duration-300 ${
                                                    isHovered ? getColorClasses(point.color, 'bg') : 'bg-gray-200'
                                                }
                        `} style={{ width: isHovered ? '80px' : '40px' }}></div>
                                            </div>
                                        </div>

                                        {/* Title and Description */}
                                        <div className="space-y-3">
                                            <h3 className={`
                        text-3xl md:text-4xl font-bold transition-colors duration-300 ${
                                                isHovered ? getColorClasses(point.color, 'text') : 'text-secondary-900'
                                            }
                      `}>
                                                {point.title}
                                            </h3>
                                            <p className="text-xl text-gray-600 leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>
                                        <div className={`
                     flex items-center gap-2 mt-6 font-semibold transition-all duration-300 cursor-pointer ${
                                            isHovered
                                                ? `${getColorClasses(point.color, 'text')} transform translate-x-2`
                                                : 'text-gray-400'
                                        }
                    `}>
                                            <span>Explore this area</span>
                                            <ArrowRight
                                                size={16}
                                                className={`transition-transform duration-300 ${
                                                    isHovered ? 'transform translate-x-1' : ''
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className={`lg:col-span-4 ${isEven ? '' : 'lg:order-first'}`}>
                                        <div className={`
                      relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 
                      transition-all duration-500 hover:shadow-2xl ${
                                            isHovered ? 'transform scale-105 shadow-xl' : ''
                                        }
                    `}>
                                            {/* Background Glow */}
                                            <div className={`
                        absolute inset-0 bg-gradient-to-br ${getColorClasses(point.color, 'gradient')} 
                        rounded-3xl transition-opacity duration-500 ${
                                                isHovered ? 'opacity-10' : 'opacity-0'
                                            }
                      `}></div>

                                            {/* Icon Container */}
                                            <div className="relative z-10 text-center">
                                                <div className={`
                          inline-flex items-center justify-center w-24 h-24 rounded-2xl shadow-lg mb-4
                          transition-all duration-500 ${
                                                    isHovered
                                                        ? `bg-gradient-to-br ${getColorClasses(point.color, 'gradient')} transform rotate-6 scale-110`
                                                        : 'bg-white'
                                                }
                        `}>
                                                    <IconComponent
                                                        size={36}
                                                        className={`transition-colors duration-300 ${
                                                            isHovered ? 'text-white' : getColorClasses(point.color, 'text')
                                                        }`}
                                                    />
                                                </div>

                                                {/* Additional Visual Elements */}
                                                <div className="flex justify-center gap-2">
                                                    {[...Array(3)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`
                                w-2 h-2 rounded-full transition-all duration-300 ${
                                                                isHovered ? getColorClasses(point.color, 'bg') : 'bg-gray-300'
                                                            }
                              `}
                                                            style={{ transitionDelay: `${i * 100}ms` }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <div className="bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-3xl p-5 border-2 border-primary-200 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-primary-600/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-secondary-900 mb-4">
                                Ready to Join Successful Founders?
                            </h3>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Transform your business with proven strategies that have helped hundreds of founders break through plateaus and achieve extraordinary growth.
                            </p>

                            <button className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white px-8 py-3 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto">
                                <span>Start Your Transformation</span>
                                <ArrowRight size={24} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;