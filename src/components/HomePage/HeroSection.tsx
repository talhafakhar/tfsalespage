import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Header/Navbar";
import Image from "next/image";
import InfiniteLogoSlider from "@/components/Common/ClientsSlider";
const partnerNames: string[] = [
    "B2B SaaS Companies",
    "AI Startups",
    "HealthTech Innovators",
    "FinTech Leaders",
    "Online Marketplaces",
    "Tech-Enabled Services"
];

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);


    return (
        <div>
            <Navbar/>
            <section className="flex bg-secondary items-center min-h-screen bg-cover bg-center mt-10 md:mt-1" style={{ backgroundImage: "url('/assets/home/bg-hero.webp')" }}>
                <div className="container mx-auto px-4 py-10 mt-5 md:mt-16">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                        <div className="text-center ">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-5xl  md:text-6xl  lg:text-7xl font-righteous  font-bold text-white mb-6">
                                    Fractional Leadership <span className="text-primary flex justify-center ">Founder Strategy
                                    </span>  Team Training.

                                </h1>
                            </div>

                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-white mb-8 max-w-xl mx-auto">
                                    CMO, CTO, and CSO support to scale sales, marketing & tech.
                                </p>
                            </div>

                            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex flex-col lg:flex-row gap-2 sm:gap-6 justify-center  items-center mb-4">
                                    <a
                                        href="https://calendly.com/talhafakhar/discoverycall"
                                        target="_blank"
                                        className="group text-sm p-2 bg-primary text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                        <span className="relative z-10 flex items-center space-x-2">
                                            <span className="tracking-wide">Get Growth Advice</span>
                                            <svg
                                                className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                      d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="text-center justify-center flex gap-2 mb-4">
                                    <h3 className="text-lg font-medium text-white tracking-wide">
                                        We Partner With
                                    </h3>
                                    <Image src="/assets/svg/downArrow.svg" alt="arrow" className='mt-3' loading="lazy" width={24} height={24}/>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                    {partnerNames.map((name) => (
                                        <div
                                            key={name}
                                            className={`
                                            hover:border-primary
                                                group relative
                                                bg-gray-800/40 
                                                border border-white
                                                rounded
                                                px-2 py-2
                                                text-center
                                                transition-all ease-out
                                                cursor-default
                                                backdrop-blur-sm
                                                transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                            `}
                                        >
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr/>
            <InfiniteLogoSlider
                title="We Partner With Leading Brands"
            />
        </div>
    );
};

export default HeroSection;