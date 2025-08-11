import Navbar from "@/components/Header/Navbar";
import React, {useEffect, useState} from "react";
import InfiniteLogoSlider from "@/components/Common/ClientsSlider";

const AboutHero = () => {
    const scrollingTexts = [
        "Fractional C-Level Executives",
        "Startup Execution",
        "Ai System",
        "Fractional C-Level Executives",
        "Startup Execution",
        "Ai System",
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
                <div className="relative  text-center  z-20 pt-40">
                    <div className={`transform container px-4 mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-5xl  md:text-6xl  lg:text-7xl font-righteous  font-bold text-white mb-6">
                            We Fix the Startup  <span className="text-primary flex justify-center ">Leadership Problem
                                    </span>  Creatively & Seamlessly
                        </h1>
                    </div>
                    <div className={`transform container px-4  mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="text-white mb-8 max-w-xl mx-auto">
                            Look, we get it. You&#39;ve got a killer product but can&#39;t afford a $200K+ CMO. You need a CTO but don&#39;t have 6 months to hire one. Your sales are stuck because you&#39;re doing everything yourself.                        </p>
                    </div>
                    <div className={`transform container px-4 mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-col lg:flex-row gap-2 sm:gap-6 justify-center  items-center mb-4">
                            <button
                                onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}

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
                        </div>
                    </div>
                    <div className="relative z-20 sm:block hidden">
                        <div className="absolute inset-0 h-14 bg-white py-3 overflow-hidden transform  top-[55px] rotate-[6deg] md:rotate-[4deg] origin-center">
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
                        <div className="absolute inset-0 h-14 bg-primary py-3 overflow-hidden transform -rotate-[6deg] md:-rotate-[4deg] origin-center translate-y-16">
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
                </div>
            </section>
            <hr/>
            <InfiniteLogoSlider title="We Partner With Leading Brands"/>
        </div>
    );
};

export default AboutHero;