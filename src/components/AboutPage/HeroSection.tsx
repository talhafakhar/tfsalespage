import Navbar from "@/components/Header/Navbar";
import React, {useEffect, useState} from "react";
import InfiniteLogoSlider from "@/components/Common/ClientsSlider";

const AboutHero = () => {
    const scrollingTexts = [
        "AI Vision",
        "Smart Design",
        "Visual Brilliance",
        "AI Vision",
        "Smart Design",
        "Visual Brilliance"
    ];
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);
    return (

        <div>
            <Navbar/>
            <section  className="bg-black  min-h-screen bg-cover bg-center " style={{ backgroundImage: "url('/assets/about/about-bg.webp')" }}>
                <div className="relative container mx-auto text-center px-4  z-10  pb-10 md:pb-20 pt-20 md:pt-40">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-4xl  md:text-6xl  lg:text-7xl font-righteous  font-bold text-white mb-6">
                            We Fix the Startup  <span className="text-primary flex justify-center ">Leadership Problem
                                    </span>  Creatively & Seamlessly
                        </h1>
                    </div>
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="text-white mb-8 max-w-xl mx-auto">
                            Look, we get it. You've got a killer product but can't afford a $200K+ CMO. You need a CTO but don't have 6 months to hire one. Your sales are stuck because you're doing everything yourself.                        </p>
                    </div>
                    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:flex-row gap-2 sm:gap-6 justify-center  items-center mb-4">
                            <button
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
                            </button>
                            <button
                                className="group p-2 border bg-white/20 text-sm border-primary text-primary font-button font-bold rounded-md transition-all duration-500">
                                        <span className="relative z-10 flex items-center space-x-2">
                                            <svg
                                                className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                            </svg>
                                            <span>See How We Scale Startups</span>
                                        </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative z-20">
                    <div className="absolute inset-0 h-14 bg-white py-3 overflow-hidden transform  top-[55px] rotate-[4deg] origin-center">
                        <div className="flex whitespace-nowrap">
                            <div className="flex animate-scroll-left">
                                {scrollingTexts.map((text, index) => (
                                    <div key={index} className="flex items-center mx-12">
                  <span className="text-hero-purple font-bold text-xl md:text-2xl lg:text-3xl">
                    {text}
                  </span>
                                        <span
                                            className="text-hero-purple text-2xl md:text-3xl lg:text-4xl ml-6">
                    ✱
                  </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex animate-scroll-left">
                                {scrollingTexts.map((text, index) => (
                                    <div key={`duplicate-${index}`} className="flex items-center mx-12">
                  <span className="text-hero-purple font-bold text-xl md:text-2xl lg:text-3xl">
                    {text}
                  </span>
                                        <span
                                            className="text-hero-purple text-2xl md:text-3xl lg:text-4xl ml-6">
                    ✱
                  </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 h-14 bg-primary py-3 overflow-hidden transform  -rotate-[4deg] origin-center translate-y-16">
                        <div className="flex whitespace-nowrap">
                            <div className="flex animate-scroll-left" style={{animationDirection: 'reverse'}}>
                                {scrollingTexts.map((text, index) => (
                                    <div key={index} className="flex items-center mx-12">
                  <span className="text-hero-purple font-bold text-xl md:text-2xl lg:text-3xl">
                    {text}
                  </span>
                                        <span
                                            className="text-hero-purple text-2xl md:text-3xl lg:text-4xl ml-6">
                    ✱
                  </span>
                                    </div>
                                ))}
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex animate-scroll-left" style={{animationDirection: 'reverse'}}>
                                {scrollingTexts.map((text, index) => (
                                    <div key={`duplicate-${index}`} className="flex items-center mx-12">
                  <span className="text-hero-purple font-bold text-xl md:text-2xl lg:text-3xl">
                    {text}
                  </span>
                                        <span
                                            className="text-hero-purple text-2xl md:text-3xl lg:text-4xl ml-6">
                    ✱
                  </span>
                                    </div>
                                ))}
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

export default AboutHero;