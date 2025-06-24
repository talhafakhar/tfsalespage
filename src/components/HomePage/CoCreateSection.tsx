import React, {useEffect, useState} from 'react';
import { CheckCircle, Users, Zap, Bot, Quote } from 'lucide-react';

const CoCreate = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            text: "Working with TF Business Solutions felt like having growth minded cofounders on our team. They did not just give advice. They planned, built, and delivered real results.",
            author: "Sarah Chen",
            role: "CEO, TechStart",
            initial: "S",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            text: "Their AI-native approach transformed our sales process. We went from manual outreach to a fully automated system that actually converts. ROI was evident within the first month.",
            author: "Marcus Rodriguez",
            role: "Founder, SalesForce Pro",
            initial: "M",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            text: "TF Business Solutions didn't just build our MVP – they became our strategic partners. Their fractional CTO service gave us enterprise-level technical leadership at startup speed.",
            author: "Emily Watson",
            role: "Co-founder, FinTech Innovations",
            initial: "E",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            text: "The difference is execution. While other consultants gave us reports, TF Business Solutions rolled up their sleeves and built our go-to-market engine from scratch.",
            author: "David Kim",
            role: "VP Growth, B2B Solutions",
            initial: "D",
            gradient: "from-orange-500 to-red-600"
        },
        {
            text: "Their Agent-as-a-Service platform automated our customer support and lead qualification. We now handle 3x the volume with the same team size.",
            author: "Lisa Thompson",
            role: "Operations Director, ServiceCorp",
            initial: "L",
            gradient: "from-teal-500 to-cyan-600"
        }
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);
    const features = [
        {
            icon: Users,
            title: "Fractional, Not Flaky",
            description: "You get C-level input without full-time overhead",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            icon: Zap,
            title: "Execution Over Advice",
            description: "We don't hand you a plan. We help you build and ship it",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            icon: Bot,
            title: "AI-Native Growth",
            description: "From marketing to sales to tech, we build smarter, automated systems",
            gradient: "from-emerald-500 to-teal-600"
        }
    ];

    return (
        <section className="bg-black py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-nav">
                        We Don&#39;t Just Consult.
                        <br />
                        <span className="text-primary-400">
                            We Co-Create Growth
                        </span>
                        <span className="text-white"> With You.</span>
                    </h2>
                </div>

             
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent size={32} className="text-white" />
                                </div>

                                {/* Checkmark */}
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle size={24} className="text-emerald-400 flex-shrink-0" />
                                    <h3 className="text-2xl font-bold text-white">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            </div>
                        );
                    })}
                </div>


                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 z-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Quote size={24} className="text-white" />
                            </div>
                        </div>

                        {/* Testimonials Container */}
                        <div className="relative h-48 md:h-40 overflow-hidden">
                            {testimonials.map((testimonial, index) => {
                                const isActive = index === currentTestimonial;
                                const isPrev = index === (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                                const isNext = index === (currentTestimonial + 1) % testimonials.length;

                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                            isActive
                                                ? 'opacity-100 translate-x-0'
                                                : isPrev
                                                    ? 'opacity-0 -translate-x-full'
                                                    : isNext
                                                        ? 'opacity-0 translate-x-full'
                                                        : 'opacity-0 translate-x-full'
                                        }`}
                                    >
                                        {/* Testimonial Text */}
                                        <blockquote className="text-xl md:text-2xl text-white leading-relaxed italic mb-6 pt-4">
                                            "{testimonial.text}"
                                        </blockquote>

                                        {/* Attribution */}
                                        <div className="flex items-center gap-4 absolute bottom-0 left-0">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                                                <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold">{testimonial.author}</div>
                                                <div className="text-slate-400">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
                                        index === currentTestimonial
                                            ? 'bg-indigo-500'
                                            : 'bg-white/20 hover:bg-white/30'
                                    }`}
                                >
                                    {index === currentTestimonial && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-pulse"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="absolute top-4 right-20 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CoCreate;