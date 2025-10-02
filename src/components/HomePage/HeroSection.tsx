import React, { useEffect, useState } from "react";
import {  Users, TrendingUp, Star } from "lucide-react";
import Navbar from "@/components/Header/Navbar";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
        }, []);

    return (
        <div className="bg-black">
            <Navbar />
            <section className="min-h-screen relative bg-black bg-cover bg-center" style={{ backgroundImage: "url('/assets/home/sales-bg.webp')" }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="container mx-auto relative z-10 px-4 pt-12 md:pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div
                            className={`transform transition-all duration-1000 delay-200 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                Sell Like Crazy Even If You Are Just A{" "}
                                <span className="text-yellow-400 relative">Beginner!</span>
                            </h1>
                        </div>

                        <div
                            className={`transform transition-all duration-1000 delay-400 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                        >
                            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                                Are you a person with a lot of knowledge regarding the technical
                                aspects of your business but do not know how to market them to
                                your customers to make sales?
                                <span className="text-yellow-400 font-bold">
                  {" "}
                                    What I am about to share will make you a sales machine even if
                  you are a complete beginner.
                </span>
                            </p>
                        </div>

                        <div
                            className={`transform transition-all duration-1000 delay-500 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                        >
                            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                                <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                    <span className="text-white text-sm sm:text-base font-semibold">
                    500+ Clients Helped
                  </span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="text-white text-sm sm:text-base font-semibold">
                    4.9/5 Rating
                  </span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                    <span className="text-white text-sm sm:text-base font-semibold">
                    3x Average Revenue Increase
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-700 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}>
                            <a
                                href="https://calendly.com/talhafakhar/discoverycall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary font-semibold rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 text-sm sm:text-base"
                            >
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span className="tracking-wide text-center">
                    CLAIM YOUR FREE DISCOVERY CALL NOW
                  </span>
                  <svg
                      className="hidden sm:block w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-all duration-300"
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
            </section>
        </div>
    );
};

export default HeroSection;
