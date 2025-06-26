import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    MessageCircle,
    ExternalLink,
    CheckCircle,
    Zap,
    TrendingUp,
    Target,
    Award,
} from 'lucide-react';
import Image from "next/image";

interface Benefit {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    text: string;
    delay: string;
}

const FinalCTASection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits: Benefit[] = [
        { icon: Zap, text: "No retainers", delay: "200ms" },
        { icon: Target, text: "No fluff", delay: "400ms" },
        { icon: TrendingUp, text: "Senior-level execution", delay: "600ms" },
        { icon: Award, text: "Powerful systems", delay: "800ms" },
        { icon: CheckCircle, text: "Measurable growth", delay: "1000ms" }
    ];
    return (
        <section className="bg-white py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(234, 179, 8, 0.15) 1px, transparent 0)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-400/15 to-emerald-600/15 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
                    }`}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                            Let&#39;s Build Your{' '}
                            <span className="relative">
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Growth Stack
                </span>
                                {/* Animated underline */}
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transform origin-left scale-x-0 animate-pulse rounded-full"></div>
              </span>
                            {' '}Together
                        </h2>

                        {/* Subheadline */}
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            No retainers. No fluff. Just senior-level execution, powerful systems, and measurable growth.
                        </p>

                        {/* Benefits List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-500 hover:scale-105 hover:shadow-md ${
                                            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                                        }`}
                                        style={{ transitionDelay: benefit.delay }}
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
                                            <IconComponent size={16} className="text-white" />
                                        </div>
                                        <span className="text-md font-semibold text-secondary-800">{benefit.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${
                            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                        }`}>

                            {/* Primary CTA */}
                            <button
                                className="group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center overflow-hidden"
                                onMouseEnter={() => setHoveredButton('primary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                {/* Background animation */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform transition-transform duration-300 ${
                                    hoveredButton === 'primary' ? 'translate-x-0' : '-translate-x-full'
                                }`}></div>

                                <div className="relative z-10 flex items-center gap-2">
                                    <MessageCircle size={20} />
                                    <span>Talk to a Growth Strategist</span>
                                    <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </button>

                            <button
                                className="group relative bg-white border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center overflow-hidden"
                                onMouseEnter={() => setHoveredButton('secondary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 transform transition-transform duration-300 ${
                                    hoveredButton === 'secondary' ? 'translate-x-0' : 'translate-x-full'
                                }`}></div>

                                <div className="relative z-10 flex items-center gap-2">
                                    <ExternalLink size={20} />
                                    <span>Explore Our Services</span>
                                    <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </button>
                        </div>


                    </div>

                    <div className={`transition-all duration-1000 delay-500 ${
                        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
                    }`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/home/graph.webp"
                                alt="Growth Strategy Team"
                                width={1920}
                                height={384}
                                className="w-full h-96 object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <TrendingUp size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold">500+ Founders</div>
                                            <div className="text-sm opacity-90">Already Growing</div>
                                        </div>
                                    </div>
                                    <p className="text-sm opacity-80">Join successful entrepreneurs who&#39;ve accelerated their growth</p>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-secondary-900">300%</div>
                                    <div className="text-sm text-gray-600">Avg Growth</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FinalCTASection;