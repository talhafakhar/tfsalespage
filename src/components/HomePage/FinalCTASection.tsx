import React, { useState, useEffect } from 'react';
import {
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
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
                    }`}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">Let&#39;s Build Your{' '}<span className="text-primary">
                  Growth Stack
                </span>{' '}Together</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">No retainers. No fluff. Just senior-level execution, powerful systems, and measurable growth.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-3 p-3 rounded-xl bg-white border border-primary transition-all duration-300 hover:shadow-md  translate-y-4`}
                                        style={{ transitionDelay: benefit.delay }}
                                    >
                                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
                                            <IconComponent size={16} className="text-black"/>
                                        </div>
                                        <span className="text-md font-semibold text-secondary">{benefit.text}</span>
                                    </div>
                                );
                            })}
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
                <div className={`flex flex-col sm:flex-row justify-center mt-5 gap-4 transition-all duration-1000 delay-800 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <button className="group text-sm  p-2 bg-primary text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                        <span className="relative z-10 flex items-center space-x-2">
                    <span className="tracking-wide">Get Growth Advice</span>
                    <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;