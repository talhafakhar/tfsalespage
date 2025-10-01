import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <nav className={`transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} ${scrolled ? 'bg-secondary backdrop-blur-md shadow-lg ' : 'bg-black backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center  group">
                        <div className="flex">
                            <div className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                <Image
                                    src="/assets/logo.webp"
                                    alt="logo"
                                    width={42}
                                    height={42}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <span className="font-logo text-lg lg:text-xl text-white text-nowrap">
    Business Solutions
  </span>
                    </Link>
                    <div>
                        <button
                            onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                            className="w-full group relative py-2 px-4 sm:px-6 bg-primary text-secondary font-button font-bold rounded overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span className="tracking-wide">GET STARTED</span>
                                    <div className="relative">
                                        <svg
                                            className="w-6 h-6 transform group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500 animate-bounce-subtle"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>


                                        <svg
                                            className="absolute inset-0 w-6 h-6 opacity-0 group-hover:opacity-40 transform translate-x-1 group-hover:translate-x-4 transition-all duration-500 delay-100"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>

                    <svg
                        className="absolute inset-0 w-6 h-6 opacity-0 group-hover:opacity-20 transform translate-x-2 group-hover:translate-x-5 transition-all duration-500 delay-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-primary text-black py-2 px-4 text-center font-bold text-xs sm:text-sm md:text-base">
                ⚡ LIMITED TIME OFFER: Book Your Discovery Call Today & Get a FREE Sales Audit ($297 Value)
            </div>
        </nav>
    );
};

export default Navbar;