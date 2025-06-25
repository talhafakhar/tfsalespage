'use client';
import React, {useEffect, useState} from 'react';
import Navbar from "@/components/Header/Navbar";
import Image from "next/image";

const serviceTypes: string[] = [
    "B2B SaaS Companies",
    "AI Startups",
    "HealthTech Innovators",
    "FinTech Leaders",
    "Online Marketplaces",
    "Service-Based Businesses"
];

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <div className="bg-black">
            <Navbar/>
            <section className="bg-gradient-to-br from-black via-secondary-950 to-secondary-900 relative overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-primary-400/20 rounded-lg rotate-45 animate-bounce-subtle"></div>
                    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-600/5 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary-500/15 rounded-lg animate-bounce-subtle delay-2000"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500/5 via-transparent to-primary-600/5 animate-pulse"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-3">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
                        <div className="text-center md:text-start">
                            <div className={`transform mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white ">
                                    Your On-Demand <span className="bg-gradient-to-r py-3 from-primary-500 to-primary-400 bg-clip-text text-transparent flex justify-center lg:justify-start">
                                       CTO to Build Fast and Scale
                                    </span>
                                    with Confidence
                                </h1>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-gray-300 mb-8 max-w-xl">
                                    From  <span className="text-primary-400 font-semibold">MVPs to intelligent SaaS platforms</span> we bring strategic tech leadership without the
                                    overhead of full-time hires
                                </p>
                            </div>

                            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start  items-center">
                                    <button className="group relative px-2 py-3 bg-primary-gradient text-secondary-950 font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                        <div className="absolute inset-0 bg-primary-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 bg-primary-gradient-intense opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform animate-shimmer"></div>
                                        </div>
                                        <span className="relative text-sm z-10 flex items-center space-x-2">
                                            <span className="tracking-wide">Get Your Free Strategy Session</span>
                                            <svg className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                            </svg>
                                        </span>
                                    </button>

                                    <button className="group relative px-2 py-3 border-2 bg-white/20 border-primary-500 text-primary-500 hover:text-secondary-950 font-button font-bold rounded-md overflow-hidden transition-all duration-500 transform hover:scale-105">
                                        <div className="absolute inset-0 bg-primary-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        <span className="relative z-10 flex text-sm items-center space-x-2">
                                            <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                            </svg>
                                            <span>See Our Results</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;