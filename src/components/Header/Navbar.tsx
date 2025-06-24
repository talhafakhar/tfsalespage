import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMobileMenu = () => {
        setIsOpen(false);
    };
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/help', label: 'Help' },
        { href: '/contact', label: 'Contact' },
    ];
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black backdrop-blur-md shadow-lg border-b border-gray-800/50' : 'bg-black backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center  group">
                        <div className="flex">
                            <div className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                <Image
                                    src="/assets/logo.webp"
                                    alt="logo"
                                    width={42}
                                    height={42}
                                />
                            </div>
                        </div>
                        <span className="font-logo text-xl text-white">
    Business Solution
  </span>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-lg font-nav font-medium transition-all duration-300 group text-gray-300 hover:text-white overflow-hidden`}
                            >
                                <span className="relative z-10">{link.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-full h-0.5  rounded-full"></div>
                                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full w-0 group-hover:w-full group-hover:animate-progress-fill transition-all duration-800 ease-out"></div>
                            </Link>
                        ))}
                    </div>
                    {/* Get Started Button - Desktop */}
                    <div className="hidden md:block">
                        <button className="group relative font-button px-6 py-2 bg-primary-gradient text-secondary-950 font-bold rounded overflow-hidden transition-all duration-400 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                            {/* Multiple animated background layers */}
                            <div className="absolute inset-0 bg-primary-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                            <div className="absolute inset-0 bg-primary-gradient-intense opacity-0 group-hover:opacity-70 transition-opacity duration-400 animate-pulse"></div>
                            {/* Enhanced shimmer effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform animate-shimmer"></div>
                            </div>
                            {/* Multiple glowing borders */}
                            <div className="absolute inset-0 rounded bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm animate-pulse-glow"></div>
                            <div className="absolute inset-0 rounded bg-primary-500 opacity-0 group-hover:opacity-50 transition-opacity duration-400 blur-md"></div>
                            {/* Floating background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 to-primary-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-400 animate-float"></div>
                            {/* Button content */}
                            <span className="relative z-10 flex items-center space-x-2">
                <span className="tracking-wide animate-heartbeat">GET STARTED</span>
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

                                    {/* Arrow trail effects */}
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
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce-subtle"></div>
                                <div className="absolute top-4 right-6 w-1 h-1 bg-primary-400 rounded-full animate-bounce-subtle delay-150"></div>
                                <div className="absolute bottom-3 left-8 w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce-subtle delay-300"></div>
                                <div className="absolute bottom-2 right-4 w-1 h-1 bg-primary-400 rounded-full animate-bounce-subtle delay-450"></div>
                                <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-primary-500 rounded-full animate-bounce-subtle delay-600"></div>
                                <div className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-primary-500 rounded-full animate-bounce-subtle delay-750"></div>
                            </div>
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 rounded-2xl border-2 border-primary-400 animate-pulse-glow"></div>
                            </div>
                        </button>
                    </div>
                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`relative w-8 h-8 focus:outline-none transform transition-all duration-300 ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                            aria-label="Toggle menu"
                        >
                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span
                    className={`block w-6 h-0.5 transform transition-all duration-300 bg-white ${
                        isOpen
                            ? 'rotate-45 translate-y-0.5'
                            : '-translate-y-1.5'
                    }`}
                ></span>
                                <span
                                    className={`block w-6 h-0.5 transform transition-all duration-300 bg-white ${
                                        isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                ></span>
                                <span
                                    className={`block w-6 h-0.5 transform transition-all duration-300 bg-white ${
                                        isOpen
                                            ? '-rotate-45 -translate-y-0.5'
                                            : 'translate-y-1.5'
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                        isOpen
                            ? 'max-h-screen opacity-100 visible'
                            : 'max-h-0 opacity-0 invisible'
                    }`}>
                    <div className="px-2 pt-2 pb-6 space-y-1  bg-black/95 backdrop-blur-md rounded-2xl mt-2  shadow-xl border border-gray-800/50">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="block px-4 py-3 text-gray-300 font-nav font-medium hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 transform hover:translate-x-1"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="pt-4 px-4">
                            <button className="w-full group relative py-2 bg-primary-gradient text-secondary-950 font-button font-bold rounded overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                {/* Multiple animated background layers */}
                                <div className="absolute inset-0 bg-primary-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                                <div className="absolute inset-0 bg-primary-gradient-intense opacity-0 group-hover:opacity-70 transition-opacity duration-400 animate-pulse"></div>

                                {/* Enhanced shimmer effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform animate-shimmer"></div>
                                </div>

                                {/* Multiple glowing borders */}
                                <div className="absolute inset-0 rounded bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm animate-pulse-glow"></div>
                                <div className="absolute inset-0 rounded bg-primary-500 opacity-0 group-hover:opacity-50 transition-opacity duration-400 blur-md"></div>

                                {/* Floating background effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 to-primary-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>

                                {/* Button content */}
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="tracking-wide animate-heartbeat">GET STARTED</span>

                                    {/* Super advanced arrow with multiple animations */}
                                    <div className="relative">
                    {/* Main arrow */}
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

                                        {/* Arrow trail effects */}
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

                                {/* Enhanced particle effects */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce-subtle"></div>
                                    <div className="absolute top-4 right-6 w-1 h-1 bg-primary-400 rounded-full animate-bounce-subtle delay-150"></div>
                                    <div className="absolute bottom-3 left-8 w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce-subtle delay-300"></div>
                                    <div className="absolute bottom-2 right-4 w-1 h-1 bg-primary-400 rounded-full animate-bounce-subtle delay-450"></div>
                                    <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-primary-500 rounded-full animate-bounce-subtle delay-600"></div>
                                    <div className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-primary-500 rounded-full animate-bounce-subtle delay-750"></div>
                                </div>

                                {/* Ripple effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 rounded-2xl border-2 border-primary-400 animate-pulse-glow"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden -z-10" onClick={closeMobileMenu}></div>
            )}
        </nav>
    );
};

export default Navbar;