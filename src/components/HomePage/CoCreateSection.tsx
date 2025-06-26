import React, {useEffect, useState} from 'react';
import {CheckCircle, Users, Zap, Quote, Star, ChevronRight, ChevronLeft, ArrowRight, LucideIcon} from 'lucide-react';
import Image from 'next/image';
interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    delay: string;
}
const CoCreate = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const testimonials = [
        {
            id: 1,
            text: "Working with this team has been absolutely transformative for our business. Their attention to detail and innovative approach exceeded all our expectations.",
            author: "Sarah Johnson",
            role: "CEO, TechVision Inc",
            rating: 5,
            image: "/assets/man.png",
            company: "TechVision Inc"
        },
        {
            id: 2,
            text: "The level of professionalism and expertise demonstrated throughout our project was remarkable. They delivered results that truly made a difference.",
            author: "Michael Chen",
            role: "Marketing Director, StartupFlow",
            rating: 5,
            image: "/assets/man.png",
            company: "StartupFlow"
        },
        {
            id: 3,
            text: "Outstanding service and incredible results! They understood our vision perfectly and brought it to life in ways we never imagined possible.",
            author: "Emily Rodriguez",
            role: "Founder, Creative Studios",
            rating: 5,
            image: "/assets/man.png",
            company: "Creative Studios"
        }
    ];
    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentTestimonial, handleNext]);


    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToTestimonial = (index:number) => {
        if (isAnimating || index === currentTestimonial) return;
        setIsAnimating(true);
        setCurrentTestimonial(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentTest = testimonials[currentTestimonial];
    const features: Feature[] = [
        {
            icon: Zap,
            title: "Smart Automation",
            description: "Intelligent automation that learns from your behavior and adapts to make your workflow seamless.",
            gradient: "from-primary-400 to-primary-700",
            delay: "0ms"
        },
        {
            icon: Star,
            title: "Premium Quality",
            description: "Meticulously crafted with attention to every detail, delivering excellence that exceeds expectations.",
            gradient: "from-primary-500 to-primary-600",
            delay: "100ms"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Seamlessly work together with real-time collaboration tools designed for modern teams.",
            gradient: "from-primary-400 to-primary-600",
            delay: "200ms"
        },
    ];

    return (
        <section className="bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 py-10 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-nav">
                        We Don&#39;t Just Consult.
                        <br />
                        <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                            We Co-Create Growth
                        </span>
                        <span className="text-white"> With You.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        const isHovered = hoveredCard === index;
                        return (
                            <div
                                key={index}
                                className="group relative"
                                style={{ animationDelay: feature.delay }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`
                  relative bg-gradient-to-br from-secondary-800/50 to-secondary-900/80 
                  backdrop-blur-xl rounded-3xl p-8 border border-white/10 
                  transition-all duration-500 ease-out cursor-pointer overflow-hidden
                  ${isHovered
                                    ? 'transform scale-105 shadow-2xl border-primary-400/50 bg-gradient-to-br from-secondary-800/70 to-secondary-900/90'
                                    : 'hover:transform hover:scale-102 hover:shadow-xl hover:border-white/20'
                                }
                `}>
                                    <div className={`
                    absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl 
                    transition-opacity duration-500 
                    ${isHovered ? 'opacity-10' : 'opacity-0'}
                  `}></div>
                                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                        <div className={`
                      absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} 
                      rounded-full blur-3xl transition-all duration-700
                      ${isHovered ? 'opacity-20 scale-150' : 'opacity-0 scale-100'}
                    `}></div>
                                        <div className={`
                      absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-primary-500/30 to-primary-700/30 
                      rounded-full blur-2xl transition-all duration-700 delay-100
                      ${isHovered ? 'opacity-30 scale-125' : 'opacity-0 scale-100'}
                    `}></div>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="relative mb-6">
                                            <div className={`
                        w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl 
                        flex items-center justify-center shadow-lg
                        transition-all duration-500 ease-out
                        ${isHovered
                                                ? 'transform scale-110 rotate-6 shadow-2xl'
                                                : 'group-hover:scale-105 group-hover:shadow-xl'
                                            }
                      `}>
                                                <IconComponent size={36} className="text-white" />
                                            </div>
                                            <div className={`
                        absolute inset-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} 
                        rounded-2xl blur-xl transition-opacity duration-500
                        ${isHovered ? 'opacity-50' : 'opacity-0'}
                      `}></div>
                                        </div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <CheckCircle
                                                size={24}
                                                className={`
                          text-primary-400 flex-shrink-0 transition-all duration-300
                          ${isHovered ? 'scale-110 text-primary-300' : ''}
                        `}
                                            />
                                            <h3 className={`
                        text-2xl font-bold text-white transition-all duration-300
                        ${isHovered ? 'text-primary-300' : ''}
                      `}>
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className={`
                      text-slate-300 text-lg leading-relaxed mb-6 transition-all duration-300
                      ${isHovered ? 'text-slate-200' : ''}
                    `}>
                                            {feature.description}
                                        </p>
                                        <div className={`
                      flex items-center gap-2 text-primary-400 font-semibold 
                      transition-all duration-300 cursor-pointer
                      ${isHovered
                                            ? 'text-primary-300 transform translate-x-2'
                                            : 'hover:text-primary-300'
                                        }
                    `}>
                                            <span>Learn more</span>
                                            <ArrowRight
                                                size={16}
                                                className={`
                          transition-transform duration-300
                          ${isHovered ? 'transform translate-x-1' : ''}
                        `}
                                            />
                                        </div>
                                    </div>

                                    <div className={`
                    absolute inset-0 rounded-3xl transition-all duration-500
                    ${isHovered
                                        ? 'bg-gradient-to-r from-primary-400/20 via-transparent to-primary-600/20'
                                        : ''
                                    }
                  `}></div>
                                    <div className={`
                    absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} 
                    rounded-bl-3xl rounded-tr-3xl transition-all duration-500
                    ${isHovered ? 'opacity-10 scale-110' : 'opacity-0 scale-100'}
                  `}></div>
                                </div>
                                <div className={`
                  absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl 
                  transition-opacity duration-500 -z-10
                  ${isHovered ? 'opacity-20' : 'opacity-0'}
                `}></div>
                            </div>
                        );
                    })}
                </div>

                <div className="relative mx-auto max-w-4xl">
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                        </div>
                        <div className="absolute -top-5 left-8 z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                                <Quote size={28} className="text-white" />
                            </div>
                        </div>
                        <button
                            onClick={handlePrev}
                            disabled={isAnimating}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                        >
                            <ChevronLeft size={20} className="text-white" />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={isAnimating}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                        >
                            <ChevronRight size={20} className="text-white" />
                        </button>

                        <div className="relative z-10 pt-2">
                            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    {[...Array(currentTest.rating)].map((_, i) => (
                                        <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-2xl text-white leading-relaxed max-w-2xl mx-auto text-center mb-2 italic font-light">
                                    &#34;{currentTest.text}&#34;
                                </blockquote>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full relative overflow-hidden border-4 shadow-2xl border-transparent bg-primary-400">
                                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                                <Image
                                                    src={currentTest.image}
                                                    alt={currentTest.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-xl font-bold text-white mb-1">{currentTest.author}</h3>
                                        <p className="text-gray-400 text-sm mb-1">{currentTest.role}</p>
                                        <p className="text-gray-400 text-sm">{currentTest.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                disabled={isAnimating}
                                className={`relative group transition-all duration-500 ${
                                    index === currentTestimonial ? 'w-12' : 'w-4'
                                } h-4 rounded-full overflow-hidden`}
                            >
                                <div className={`w-full h-full transition-all duration-500 ${
                                    index === currentTestimonial
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                        : 'bg-white/20 group-hover:bg-white/40'
                                } rounded-full`}></div>

                                {index === currentTestimonial && (
                                    <div className="absolute inset-0 bg-primary-400 rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CoCreate;