import React, { useState, useEffect } from 'react';
import {
    Rocket,
    TrendingUp,
    Target,
    Bot,
    ArrowRight,
} from 'lucide-react';

const FoundersSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const founderPoints = [
        {
            icon: Rocket,
            title: "Launching or relaunching products",
            description: "and need expert guidance across growth, tech, and sales"
        },
        {
            icon: TrendingUp,
            title: "Struggling to break through revenue plateaus",
            description: "and want a smarter, more focused system"
        },
        {
            icon: Target,
            title: "Scaling outbound, inbound, or hybrid sales",
            description: "without adding unnecessary complexity"
        },
        {
            icon: Bot,
            title: "Replacing manual processes with AI powered workflows",
            description: "to unlock efficiency and speed"
        }
    ];

    return (
        <section className="bg-black">

            <div className="relative z-10 px-4 py-20">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                       Build For{' '}
                        <span className="text-primary">
              Founders
            </span>
                        {' '}Who Are
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto space-y-32">
                    {founderPoints.map((point, index) => {
                        const IconComponent = point.icon;
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}
                                style={{ transitionDelay: `${index * 300}ms` }}
                            >
                                <div className={`grid lg:grid-cols-12 gap-12 items-center ${isLeft ? '' : 'lg:grid-flow-col-dense'}`}>
                                    {/* Content Side */}
                                    <div className={`lg:col-span-7 ${isLeft ? '' : 'lg:col-start-6'}`}>
                                        <div className="space-y-8">
                                            {/* Number */}
                                            <div className="flex items-center gap-6">
                                                <div className={`w-20 h-20 border-4 border-yellow-400 flex items-center justify-center transition-all duration-500 text-yellow-400'`}>
                                                    <span className="text-3xl text-white font-bold">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                </div>
                                                <div className={`h-px flex-1 transition-all duration-500 bg-white/20`}></div>
                                            </div>

                                            {/* Title */}
                                            <h3 className={`text-4xl md:text-6xl font-black leading-tight transition-all duration-500 text-white`}>
                                                {point.title.toUpperCase()}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-2xl text-white/70 leading-relaxed font-light">
                                                {point.description}
                                            </p>

                                            {/* Action */}
                                            <div className={`flex items-center gap-4 text-xl font-bold cursor-pointer group transition-all duration-300 text-white
                                            `}>
                                                <span>EXPLORE THIS AREA</span>
                                                <div className={`w-12 h-12 border-2 flex items-center justify-center transition-all duration-300 border-white `}>
                                                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className={`lg:col-span-5 ${isLeft ? 'lg:col-start-8' : 'lg:col-start-1'}`}>
                                        <div className="relative">
                                            {/* Main Icon Container */}
                                            <div className={`relative w-80 h-80 mx-auto transition-all duration-700  hover:scale-110`}>
                                                {/* Background Shape */}
                                                <div className={`absolute inset-0 border-4 transition-all duration-500 border-white/20`}></div>

                                                {/* Inner Shape */}
                                                <div className={`absolute inset-8 border-2 transition-all duration-500 border-white/10`}></div>

                                                {/* Icon */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className={`w-24 h-24 flex items-center justify-center transition-all duration-500 bg-white text-black`}>
                                                        <IconComponent size={48} />
                                                    </div>
                                                </div>

                                                <div className={`absolute -top-2 -left-2 w-6 h-6 transition-all duration-500 bg-white
                                                `}></div>
                                                <div className={`absolute -top-2 -right-2 w-6 h-6 transition-all duration-500 bg-white
                                                `}></div>
                                                <div className={`absolute -bottom-2 -left-2 w-6 h-6 transition-all duration-500 bg-white
                                                `}></div>
                                                <div className={`absolute -bottom-2 -right-2 w-6 h-6 transition-all duration-500bg-white
                                                `}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                    }`}>
                        <div
                            className="border-white rounded-3xl p-5 border-2 relative overflow-hidden"
                            style={{
                                background: `
                radial-gradient(circle at 20% 50%, rgba(255, 255, 0, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
                linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.9) 100%)
            `,
                                backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%',
                                boxShadow: `
                0 0 50px rgba(255, 255, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 25px 50px -12px rgba(0, 0, 0, 0.9)
            `
                            }}
                        >
                            {/* Animated mesh overlay */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background: `
                    conic-gradient(from 0deg at 50% 50%, 
                        transparent 0deg, 
                        rgba(255, 255, 0, 0.1) 60deg, 
                        transparent 120deg, 
                        rgba(255, 255, 255, 0.08) 180deg, 
                        transparent 240deg, 
                        rgba(255, 255, 0, 0.12) 300deg, 
                        transparent 360deg
                    )
                `,
                                    animation: 'spin 20s linear infinite reverse'
                                }}
                            />

                            {/* Noise texture overlay */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: `
                    repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 255, 0.02) 2px,
                        rgba(255, 255, 255, 0.02) 4px
                    ),
                    repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 0, 0.03) 2px,
                        rgba(255, 255, 0, 0.03) 4px
                    )
                `
                                }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    Ready to Join Successful Founders?
                                </h3>
                                <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                                    Transform your business with proven strategies that have helped hundreds of founders break through plateaus and achieve extraordinary growth.
                                </p>
                                <button className="group text-sm p-2 bg-primary text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                <span className="relative z-10 flex items-center space-x-2">
                    <span className="tracking-wide">Start Your Transformation</span>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;