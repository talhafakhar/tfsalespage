'use client';

import {easeInOut, motion, Variants} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import React from "react";
import { Lightbulb, Rocket, X, Check } from 'lucide-react';
const ChallengeSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            },
        },
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16">
                        <h2 className="font-nav text-4xl md:text-5xl font-bold  mb-6">
                            You Have the{' '}
                            <span
                                className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Vision
              </span>
                            . Now You Need a Technical Partner Who Can{' '}
                            <span
                                className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Build It Right
              </span>
                        </h2>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Problem Description */}
                        <div className="space-y-8">
                            <motion.div
                                whileHover={{scale: 1.02}}
                                transition={{type: "spring", stiffness: 300}}
                                className="bg-secondary-800 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 hover:border-primary-500/40 transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mr-4 animate-bounce-subtle">
                                        <Lightbulb className="w-6 h-6 text-secondary-900" />
                                    </div>
                                    <h3 className=" text-xl font-bold text-white">The Challenge</h3>
                                </div>
                                <p className="font-body text-gray-300 leading-relaxed">
                                    You know what your product should do, but turning it into reality takes more than
                                    developers and freelancers. You need technical clarity, smart architecture, and
                                    leadership that moves quickly without breaking things.
                                </p>
                            </motion.div>

                            {/* Pain Points */}
                            <div className="space-y-4">
                                {[
                                    'Technical decisions feel overwhelming',
                                    'Development costs are spiraling',
                                    'Your team lacks strategic direction',
                                    'Scaling feels impossible'
                                ].map((pain, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -50}}
                                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                                        transition={{duration: 0.6, delay: 0.8 + index * 0.1}}
                                        className="flex items-center space-x-4 group"
                                    >
                                        <div
                                            className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                                            <X className="w-4 h-4 text-red-400" />
                                        </div>
                                        <span className="font-body">
                      {pain}
                    </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <motion.div
                                whileHover={{scale: 1.02}}
                                transition={{type: "spring", stiffness: 300}}
                                className="border border-black rounded-2xl p-8  relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-12 h-12 bg-primary-500 border  rounded-full flex items-center justify-center mr-4 ">
                                            <Rocket className="w-6 h-6 text-secondary-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold ">Our Solution</h3>
                                    </div>
                                    <p className="font-body text-lg  leading-relaxed mb-6">
                                        At <span className="text-primary-400 font-semibold">TF Business Solutions</span>,
                                        we serve as your embedded CTO shaping your tech roadmap, leading your
                                        development
                                        team, and helping you go to market faster, stronger, and ready to scale.
                                    </p>

                                    <div className="space-y-3">
                                        {[
                                            'Strategic tech leadership',
                                            'Faster time to market',
                                            'Scalable architecture',
                                            'Cost-effective solutions'
                                        ].map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{opacity: 0, x: 50}}
                                                animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                                                transition={{duration: 0.6, delay: 1.2 + index * 0.1}}
                                                className="flex items-center space-x-4 group"
                                            >
                                                <div
                                                    className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300 animate-pulse-glow">
                                                    <Check className="w-4 h-4 text-black" />
                                                </div>
                                                <span className="font-body  transition-colors duration-300">
                          {benefit}
                        </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
                                transition={{duration: 0.8, delay: 1.6}}
                                className="text-center"
                            >
                                <button
                                    className="group relative px-2 py-3 bg-primary-gradient text-secondary-950 font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                    <div
                                        className="absolute inset-0 bg-primary-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div
                                        className="absolute inset-0 bg-primary-gradient-intense opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform animate-shimmer"></div>
                                    </div>
                                    <span className="relative text-sm z-10 flex items-center space-x-2">
                                            <span className="tracking-wide">Get Your Free Strategy Session</span>
                                            <svg
                                                className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                      d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                            </svg>
                                        </span>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ChallengeSection;