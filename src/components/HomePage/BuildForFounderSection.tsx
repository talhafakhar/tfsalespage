'use client';
import React, {useEffect, useRef, useState} from 'react';
import { ArrowRight, Bot, Rocket, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import {motion, useInView} from 'framer-motion';

const founderPoints = [
    {
        icon: Rocket,
        title: 'Launching or relaunching products',
        description: 'and need expert guidance across growth, tech, and sales',
    },
    {
        icon: TrendingUp,
        title: 'Struggling to break through revenue plateaus',
        description: 'and want a smarter, more focused system',
    },
    {
        icon: Target,
        title: 'Scaling outbound, inbound, or hybrid sales',
        description: 'without adding unnecessary complexity',
    },
    {
        icon: Bot,
        title: 'Replacing manual processes with AI powered workflows',
        description: 'to unlock efficiency and speed',
    },
];

const FoundersSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => {
            if (sectionRef.current) {
                const offset = Math.abs(sectionRef.current.getBoundingClientRect().top);
                setIsSticky(offset > 2);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const isInView = useInView(sectionRef, { once: true, margin: "-300px" });


    return (
        <section ref={sectionRef} className="bg-black py-20 px-4 relative">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                        Build For <span className="text-primary">Founders</span> Who Are
                    </h2>
                </div>

                <div className="container mx-auto relative">
                <div className="container mx-auto relative">
                    <div className="flex md:flex-row flex-col items-center  justify-center md:justify-between gap-1">
                        <div className="flex flex-col gap-4 w-full md:w-1/2">
                                {founderPoints.map((point, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105`}
                                            style={{ transitionDelay: `${index * 150}ms` }}
                                        >
                                            <div
                                                className={`p-8 transition-all duration-500 
                                                   bg-white/5 backdrop-blur-sm
                                                `}
                                            >
                                                <div className="flex items-center mb-6">
                                                    <div
                                                        className={`w-16 h-16 border-2 flex items-center justify-center transition-all duration-500
                                                                border-primary bg-primary/10
                                                            
                                                        `}
                                                    >
                            <span
                                className={`text-2xl font-bold transition-all duration-500 
                                    text-primary
                                `}
                            >
                              {String(index + 1).padStart(2, '0')}
                            </span>
                                                    </div>
                                                    <div
                                                        className={`h-px flex-1 ml-6 transition-all duration-500 
                                                          bg-primary`}
                                                    ></div>
                                                </div>

                                                <h3
                                                    className={`text-3xl font-bold mb-4 transition-all duration-500 
                                                     text-white`}
                                                >
                                                    {point.title.toUpperCase()}
                                                </h3>

                                                <p
                                                    className={`text-lg leading-relaxed transition-all duration-500
                                                       text-white/80`}
                                                >
                                                    {point.description}
                                                </p>

                                                {/* Explore Link */}
                                                <div
                                                    className={`flex items-center gap-4 mt-6 text-lg font-bold cursor-pointer group transition-all duration-300
                                                       text-primary`}
                                                >
                                                    <span>EXPLORE THIS AREA</span>
                                                    <div
                                                        className={`w-10 h-10 border-2 flex items-center justify-center transition-all duration-300
                                                           border-primary'
                                                        `}
                                                    >
                                                        <ArrowRight
                                                            size={16}
                                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Active Indicator */}
                                            <div
                                                className={`absolute left-0 top-0 w-1 h-full transition-all duration-500
                                                    bg-yellow-400`}
                                            ></div>
                                        </div>
                                    );
                                })}
                        </div>
                            <motion.div
                                className={`w-full md:w-1/2  transition-all duration-300 ${
                                    isSticky ? 'md:sticky md:top-10' : ''
                                }`}
                                initial={{ opacity: 0, y: 80 }}
                                transition={
                                    isInView
                                        ? {
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            ease: "easeInOut",
                                        }
                                        : {
                                            duration: 0.8,
                                        }
                                }
                                animate={
                                    isInView
                                        ? {
                                            opacity: 1,
                                            y: [0, -80, 0],
                                        }
                                        : {
                                            opacity: 1,
                                        }
                                }
                            >
                            <Image
                                src="/assets/home/rigth-man.webp"
                                className="mx-auto"
                                alt="man"
                                width={600}
                                height={600}
                            />
                            </motion.div>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default FoundersSection;
