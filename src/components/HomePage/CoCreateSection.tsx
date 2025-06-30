import React, {useCallback, useEffect, useState} from 'react';
import {ArrowRight, CheckCircle, ChevronLeft, ChevronRight, LucideIcon, Quote, Star, Users, Zap} from 'lucide-react';
import Image from 'next/image';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
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
    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, testimonials.length]);
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [handleNext]);


    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToTestimonial = (index: number) => {
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
            delay: "0ms"
        },
        {
            icon: Star,
            title: "Premium Quality",
            description: "Meticulously crafted with attention to every detail, delivering excellence that exceeds expectations.",
            delay: "100ms"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Seamlessly work together with real-time collaboration tools designed for modern teams.",
            delay: "200ms"
        },
    ];

    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold  mb-6 leading-tight font-nav">
                        We Don&#39;t Just Consult.
                        <br/>
                        <span className="text-primary">
                            We Co-Create Growth
                        </span>
                        <span> With You.</span>
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
                                style={{animationDelay: feature.delay}}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`
                  relative bg-secondary
                  rounded-3xl p-8 
                  transition-all duration-500 ease-out cursor-pointer overflow-hidden
                  ${isHovered
                                    ? 'transform scale-105 shadow-2xl'
                                    : 'hover:transform hover:scale-102 hover:shadow-xl'
                                }
                `}>
                                    <div className="mb-6">
                                        <div className={`
                        w-20 h-20 
                        flex items-center justify-center 
                        transition-all duration-500 border rounded-xl ease-out
                        ${isHovered
                                            ? 'transform scale-110 rotate-6 shadow-2xl'
                                            : 'group-hover:scale-105 group-hover:shadow-xl'
                                        }
                      `}>
                                            <IconComponent size={36} className="text-white"/>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <CheckCircle
                                            size={24}
                                            className={`
                          text-primary flex-shrink-0 transition-all duration-300
                          ${isHovered ? 'scale-110 text-primary' : ''}
                        `}
                                        />
                                        <h3 className={`
                        text-2xl font-bold text-white transition-all duration-300
                        ${isHovered ? 'text-primary' : ''}
                      `}>
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-white text-lg leading-relaxed mb-6 transition-all duration-300">
                                        {feature.description}
                                    </p>
                                    <div className={`
                      flex items-center gap-2 text-primary font-semibold 
                      transition-all duration-300 cursor-pointer
                      ${isHovered
                                        ? 'text-primary transform translate-x-2'
                                        : 'hover:text-primary'
                                    }
                    `}>
                                        <span>Learn more</span>
                                        <ArrowRight size={16} className={`
                          transition-transform duration-300
                          ${isHovered ? 'transform translate-x-1' : ''}
                        `}/>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="relative mx-auto max-w-4xl">
                    <div className="border border-secondary rounded-3xl p-8 md:p-12  shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-5 left-8 z-10">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                                <Quote size={28} className=""/>
                            </div>
                        </div>
                        <button
                            onClick={handlePrev}
                            disabled={isAnimating}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary/10  rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                        >
                            <ChevronLeft size={20} className=""/>
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={isAnimating}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary/10  rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                        >
                            <ChevronRight size={20} className=""/>
                        </button>

                        <div className="relative z-10 pt-2">
                            <div
                                className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    {[...Array(currentTest.rating)].map((_, i) => (
                                        <Star key={i} size={24} className="text-yellow-400 fill-yellow-400"/>
                                    ))}
                                </div>
                                <blockquote
                                    className="text-2xl  leading-relaxed max-w-2xl mx-auto text-center mb-2 italic font-light">
                                    &#34;{currentTest.text}&#34;
                                </blockquote>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <div className="relative">
                                        <div
                                            className="w-20 h-20 rounded-full relative overflow-hidden border-4 shadow-2xl border-transparent bg-primary">
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
                                        <h3 className="text-xl font-bold  mb-1">{currentTest.author}</h3>
                                        <p className="text-gray-600 text-sm mb-1">{currentTest.role}</p>
                                        <p className="text-gray-600 text-sm">{currentTest.company}</p>
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
                                        ? 'bg-primary'
                                        : 'bg-secondary/20 '
                                } rounded-full`}></div>

                            </button>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CoCreate;