'use client';
import React, {useEffect, useState} from 'react';
import Navbar from "@/components/Header/Navbar";
import InfiniteLogoSlider from "@/components/Common/ClientsSlider";

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [loadingCalendly, setLoadingCalendly] = useState(true);
    const [showCalendly, setShowCalendly] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        head?.appendChild(script);
    }, []);

    return (
        <>
            <Navbar/>
            <div className="absolute top-36 -left-20 z-30 rotate-[-45deg]">
                <div className="bg-primary text-secondary font-bold py-1 px-20 text-sm shadow-lg rounded-md">
                    FRACTIONAL CMO
                </div>
            </div>
            <div
                className="flex bg-secondary items-center min-h-screen bg-cover bg-center "
                style={{backgroundImage: "url('/assets/services/bg-CMO-hero.webp')"}}
            >

                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/40  z-10"></div>
                <div className="relative container mx-auto px-4 z-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
                        <div className="text-center md:text-start">
                            <div
                                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-5xl md:text-7xl font-button font-bold text-white max-w-xl mb-4">
                                    CMO Strategy. Seamless Growth Execution
                                </h1>
                            </div>
                            <div
                                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="mt-3 text-white border-l-2 px-2 max-w-xl">
                                        Stop watching opportunities slip away while competitors capture market share.
                                        Get strategic
                                        marketing leadership that drives real results, whether you&#39;re launching a
                                        product or scaling a
                                        service.
                                </p>
                            </div>
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div
                                    className="flex flex-col lg:flex-row gap-2 sm:gap-6 justify-center md:justify-start items-center mt-8">
                                    <button
                                        onClick={() => setShowCalendly(true)}
                                        className="group text-sm p-2 bg-primary text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                        <span className="relative z-10 flex items-center space-x-2">
                                            <span className="tracking-wide">Get Free 15 minutes consultation call</span>
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

                        {showCalendly && (
                            <div className="w-full lg:w-1/2 h-[600px] relative z-10 flex items-center justify-center">
                                {loadingCalendly && (
                                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-white rounded-xl">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-400 border-solid"></div>
                                    </div>
                                )}
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-white relative">
                                    <iframe
                                        src="https://calendly.com/talhafakhar/discoverycall"
                                        className="w-full h-full border-0"
                                        onLoad={() => setLoadingCalendly(false)}
                                    ></iframe>
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>
            <hr/>
            <InfiniteLogoSlider/>
        </>
    );
};

export default HeroSection;
