import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ChevronDown, Code, MessageSquare, Phone, Settings, User, Zap } from 'lucide-react';
const Navbar: React.FC = () => {
    const [hoveredService, setHoveredService] = useState(false);
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
        { href: '/', label: 'HOME' },
        { href: '/about', label: 'ABOUT' },
        { href: '/services', label: 'SERVICES', hasDropdown: true },
        { href: '/contact', label: 'CONTACT' },
        { href: '/our-community', label: 'OUR COMMUNITY'},
        { href: '/client-review', label: 'CLIENTS REVIEWS'},
        { href: '/blogs', label: 'BLOGS' },
    ];
    const servicesDropdown = [
        {
            label: "Fractional CMO",
            href: "/services/fractional-cmo",
            icon: User,
            description: "Part-time marketing leadership to grow your brand."
        },
        {
            label: "Fractional CTO",
            href: "/services/fractional-cto",
            icon: Code,
            description: "Technical strategy and team management on demand."
        },
        {
            label: "Fractional SDR",
            href: "/services/fractional-sdr",
            icon: Phone,
            description: "Outbound sales reps to build your pipeline faster."
        },
        {
            label: "Agent as a Service (AaaS)",
            href: "/services/ai-agent-as-a-service",
            icon: Settings,
            description: "Automation-as-a-Service for scaling operations."
        },
        {
            label: "Sales Automation",
            href: "/services/sales-automation-for-startups",
            icon: Zap,
            description: "Automate your sales workflow and outreach."
        },
        {
            label: "Sales Consultation",
            href: "/services/b2b-sales-consultation",
            icon: MessageSquare,
            description: "Expert guidance to improve your sales process."
        },
        {
            label: "Web Development",
            href: "/services/web-development",
            icon: Code,
            description: "Custom websites and web apps to elevate your online presence."
        }
    ];
    const [servicesExpanded, setServicesExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const handleServiceToggle = () => {
        setServicesExpanded(!servicesExpanded);
    };
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} ${scrolled ? 'bg-secondary backdrop-blur-md shadow-lg border-b border-gray-800/50' : 'bg-black backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 md:h-20">
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
    Business Solution
  </span>
                    </Link>
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative">
                                {link.hasDropdown ? (
                                    <div
                                        className="relative w-full"
                                        onMouseEnter={() => setHoveredService(true)}
                                        onMouseLeave={() => setHoveredService(false)}
                                        onClick={() => setHoveredService(!hoveredService)}
                                    >
                                        <button
                                            className={`relative w-full px-2.5 py-2 rounded-lg font-nav font-medium transition-all duration-300 group text-gray-300 hover:text-white overflow-hidden flex items-center justify-center gap-1`}
                                        >
                                            <span className="relative z-10">{link.label}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
                                                    hoveredService ? 'rotate-180 ' : ''
                                                }`}
                                            />
                                            <div className="absolute inset-0 bg-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"></div>
                                            <div className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full w-0 group-hover:w-full group-hover:animate-progress-fill transition-all duration-300 ease-out"></div>
                                        </button>

                                        <div
                                            className={`absolute left-1/2 transform -translate-x-1/2 top-16 mt-2 w-screen max-w-4xl bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 z-50 ${
                                                hoveredService ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                        >
                                            <div className="py-4 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                {servicesDropdown.map((service, serviceIndex) => {
                                                    const IconComponent = service.icon;
                                                    return (
                                                        <Link
                                                            key={serviceIndex}
                                                            href={service.href}
                                                            className="flex items-start gap-4 px-4 py-4 text-white hover:bg-primary/10 transition-all duration-200 group rounded-lg"
                                                        >
                                                            <div className="flex-shrink-0">
                                                                <IconComponent className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-200" />
                                                            </div>
                                                            <div className="flex flex-col min-w-0">
                                                                <span className="font-semibold text-white text-sm">{service.label}</span>
                                                                <span className="text-xs text-gray-400">{service.description}</span>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>

                                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`relative px-2.5 py-2 rounded-lg font-nav font-medium transition-all duration-300 group text-white overflow-hidden flex items-center justify-center`}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        <div className="absolute inset-0 bg-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"></div>
                                        <div className="absolute bottom-0 left-0 h-0.5 bg-primary via-primary-500 to-primary-600 rounded-full w-0 group-hover:w-full group-hover:animate-progress-fill transition-all duration-300 ease-out"></div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:block">
                        <button
                            onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                            className="group  font-button px-6 py-2 bg-primary text-secondary font-semibold rounded overflow-hidden transition-all duration-400 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                            <span className="relative z-10 flex items-center space-x-2">
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
                    <div className="lg:hidden">
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
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                        isOpen
                            ? 'max-h-screen opacity-100 visible'
                            : 'max-h-0 opacity-0 invisible'
                    }`}>
                    <div className="px-2 py-2 space-y-1  bg-black/95 backdrop-blur-md rounded-2xl mt-2  shadow-xl border border-gray-800/50">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                {link.hasDropdown ? (
                                    <div>
                                        <button
                                            onClick={handleServiceToggle}
                                            className="w-full flex items-center justify-between px-4 py-3 text-gray-300 font-nav font-medium hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 transform hover:translate-x-1"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-300 ${
                                                    servicesExpanded ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            servicesExpanded
                                                ? 'max-h-96 opacity-100'
                                                : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                                                {servicesDropdown.map((service, serviceIndex) => {
                                                    const IconComponent = service.icon;
                                                    return (
                                                        <Link
                                                            key={serviceIndex}
                                                            href={service.href}
                                                            onClick={closeMobileMenu}
                                                            className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-primary/20 rounded-lg transition-all duration-200 transform hover:translate-x-1 group"
                                                        >
                                                            <IconComponent className="w-4 h-4 text-primary  transition-colors duration-200" />
                                                            <span className="text-sm font-medium">{service.label}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-3 text-gray-300 font-nav font-medium hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 transform hover:translate-x-1"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 px-4">
                            <button
                                onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                                className="w-full group relative py-2 bg-primary text-secondary font-button font-bold rounded overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
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
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden -z-10" onClick={closeMobileMenu}></div>
            )}
        </nav>
    );
};

export default Navbar;