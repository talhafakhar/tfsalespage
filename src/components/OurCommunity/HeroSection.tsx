import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Header/Navbar";

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
            <section className="flex bg-secondary items-center min-h-screen bg-cover bg-center mt-10 md:mt-0" style={{ backgroundImage: "url('/assets/home/startupulseBg.webp')" }}>
                <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
                <div className="container mx-auto px-4 py-10 mt-5 md:mt-12">
                    <div className="flex  items-center justify-center">
                        <div className="text-center">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1
                                    className="text-5xl md:text-6xl lg:text-7xl max-w-2xl font-righteous font-bold text-white mb-6"

                                >
                                    Welcome to Start<span className="text-primary">UP</span>ulse Our Community
                                </h1>

                            </div>
                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-white mb-8 max-w-xl mx-auto">
                                    Empowering entrepreneurs and startups to pulse with innovation and growth
                                </p>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-500 ${
                                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}>
                                <div className="flex justify-center items-center">
                                    <a
                                        href="https://calendly.com/talhafakhar/discoverycall"
                                        target="_blank"
                                        className="relative group  px-6 py-3 bg-primary   font-bold rounded-xl overflow-hidden transition-all duration-700 hover:scale-110 active:scale-95"
                                    >
                                        <span className="relative z-10 flex items-center space-x-2">
        <span className="tracking-wide group-hover:animate-bounce-slight">Join Our Community</span>
        <svg
            className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
                                    </a>
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