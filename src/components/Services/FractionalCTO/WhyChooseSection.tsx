'use client';
import {easeInOut, motion, Variants} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {ArrowRight, CheckCircle, DollarSign, HandHeart, Star, Target, Zap} from 'lucide-react';
import React, {useState} from 'react';

interface Reason {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    details: string;
    accent: 'primary' | 'secondary' | 'blue' | 'green';
}

interface Stat {
    number: string;
    suffix: string;
    label: string;
    color: 'green' | 'blue' | 'purple' | 'orange';
}

const WhyChooseSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const reasons: Reason[] = [
        {
            icon: Target,
            title: 'Business-Aligned Development',
            description: 'We align product development with your business model, not just features',
            details: 'Our strategic approach ensures every technical decision drives business value and revenue growth.',
            accent: 'blue'
        },
        {
            icon: DollarSign,
            title: 'Cost-Effective Leadership',
            description: 'You get high-level strategic leadership without full-time costs',
            details: 'Access C-level expertise and strategic thinking at a fraction of the cost of hiring a full-time CTO.',
            accent: 'green'
        },
        {
            icon: HandHeart,
            title: 'Seamless Integration',
            description: 'We fit into your existing team or bring in the right talent for the job',
            details: 'Whether you have an existing team or need us to build one, we adapt to your needs and culture.',
            accent: 'purple'
        },
        {
            icon: Zap,
            title: 'Smart Scaling',
            description: 'We help you scale smart — not just fast',
            details: 'Sustainable growth with robust architecture that can handle your future success without breaking.',
            accent: 'orange'
        }
    ];
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
    const getAccentColor = (accent: string): string => {
        const colors: Record<string, string> = {
            primary: 'bg-primary-500',
            secondary: 'bg-secondary-800',
            blue: 'bg-blue-500',
            green: 'bg-green-500'
        };
        return colors[accent] || colors.primary;
    };

    const getTextAccentColor = (accent: string): string => {
        const colors: Record<string, string> = {
            primary: 'text-primary-600',
            secondary: 'text-secondary-800',
            blue: 'text-blue-600',
            green: 'text-green-600'
        };
        return colors[accent] || colors.primary;
    };

    const stats: Stat[] = [
        {number: '45', suffix: 'Days', label: 'Average MVP Launch', color: 'primary'},
        {number: '40', suffix: '%', label: 'Cost Reduction', color: 'green'},
        {number: '99.9', suffix: '%', label: 'Uptime Guarantee', color: 'secondary'},
        {number: '100K', suffix: '+', label: 'Users Scaled', color: 'blue'}
    ];

    const features: string[] = [
        'Strategic Technology Leadership',
        'Scalable Architecture Design',
        'Team Building & Management',
        '24/7 Technical Support'
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Header Section */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                            The Smart Choice for{' '}
                            <span className="relative">
                                <span className="text-transparent bg-primary-gradient bg-clip-text">
                                    Modern CTOs
                                </span>
                                <motion.div
                                    initial={{scaleX: 0}}
                                    animate={inView ? {scaleX: 1} : {scaleX: 0}}
                                    transition={{duration: 0.8, delay: 1}}
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary-gradient origin-left"
                                />
                            </span>
                        </h2>

                        <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
                            We don&#39;t just build products. We build the future of your business with strategic technology
                            leadership.
                        </p>
                    </motion.div>

                    {/* Main Content Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        
                        <motion.div variants={containerVariants} className="space-y-8">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group relative"
                                >
                                    <div className="flex items-start space-x-6 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50">
                                        <motion.div
                                            animate={hoveredIndex === index ? {
                                                scale: 1.1,
                                            } : {scale: 1}}
                                            whileHover={{
                                                rotate: [0, -5, 5, 0],
                                            }}
                                            transition={{duration: 0.3}}
                                            className={`
                                                flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center
                                                ${getAccentColor(reason.accent)} shadow-lg animate-glow-pulse
                                            `}
                                        >
                                            <reason.icon className="w-8 h-8 text-white"/>
                                        </motion.div>
                                        
                                        <div className="flex-1">
                                            <h3 className={`font-heading text-2xl font-bold mb-3 ${getTextAccentColor(reason.accent)} transition-colors duration-300`}>
                                                {reason.title}
                                            </h3>

                                            <p className="font-body text-gray-600 text-lg mb-3 leading-relaxed">
                                                {reason.description}
                                            </p>

                                            <motion.div
                                                initial={{opacity: 0, height: 0}}
                                                animate={hoveredIndex === index ? {
                                                    opacity: 1,
                                                    height: "auto"
                                                } : {
                                                    opacity: 0,
                                                    height: 0
                                                }}
                                                transition={{duration: 0.3}}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-3 border-t border-gray-200">
                                                    <p className="font-body text-gray-700 leading-relaxed">
                                                        {reason.details}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                        
                                        <motion.div
                                            animate={hoveredIndex === index ? {x: 5} : {x: 0}}
                                            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getTextAccentColor(reason.accent)}`}
                                        >
                                            <ArrowRight className="w-6 h-6"/>
                                        </motion.div>
                                    </div>

                                    {/* Side accent line */}
                                    <motion.div
                                        initial={{scaleY: 0}}
                                        animate={hoveredIndex === index ? {scaleY: 1} : {scaleY: 0}}
                                        transition={{duration: 0.3}}
                                        className={`absolute left-0 top-6 bottom-6 w-1 ${getAccentColor(reason.accent)} rounded-full origin-top`}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Side - Stats & Visual */}
                        <motion.div variants={itemVariants} className="lg:sticky lg:top-20">
                            <div
                                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 relative overflow-hidden">
                                {/* Background decoration */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-primary-gradient opacity-10 rounded-full blur-2xl animate-pulse-glow"></div>
                                <div
                                    className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-800/20 to-primary-400/20 rounded-full blur-xl animate-heartbeat"></div>

                                <div className="relative z-10">
                                    <h3 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
                                        Why We&#39;re Different
                                    </h3>
                                    
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{opacity: 0, y: 20}}
                                                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                                transition={{duration: 0.5, delay: 0.8 + index * 0.1}}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                                                }}
                                                className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 "
                                            >
                                                <div
                                                    className={`text-3xl font-black mb-1 ${getTextAccentColor(stat.color)}`}>
                                                    {stat.number}
                                                    <span className="text-lg">{stat.suffix}</span>
                                                </div>
                                                <p className="font-body text-gray-600 text-sm font-medium">
                                                    {stat.label}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-4">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{opacity: 0, x: 20}}
                                                animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 20}}
                                                transition={{duration: 0.4, delay: 1.2 + index * 0.1}}
                                                whileHover={{x: 5}}
                                                className="flex items-center space-x-3 cursor-pointer group"
                                            >
                                                <CheckCircle
                                                    className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:animate-wiggle"/>
                                                <span
                                                    className="font-body text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                transition={{duration: 0.5, delay: 1.6}}
                                className="mt-8 text-center"
                            >
                                <motion.button
                                    whileHover={{scale: 1.05, y: -2}}
                                    whileTap={{scale: 0.95}}
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
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseSection;