'use client';
import {easeInOut, motion, Variants} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import React, {useEffect, useRef, useState} from 'react';
import {Bot, Compass, FlaskConical, Settings, Shield, TrendingUp, Users} from 'lucide-react';

const ServicesIncludedSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const services = [
        {
            icon: FlaskConical,
            title: 'MVP and POC Development',
            description: 'Launch your product fast with lean, functional builds that validate your concept and impress investors. We help you test, iterate, and prove product-market fit without wasting time or budget.',
            features: ['Rapid prototyping', 'Investor-ready demos', 'Market validation', 'Iterative development'],
            color: 'from-blue-500 to-blue-600',
            bgGradient: 'from-blue-500/10 via-blue-600/5 to-transparent'
        },
        {
            icon: Bot,
            title: 'Custom AI Agent Development',
            subtitle: '(Agent as a Service)',
            description: 'We build intelligent AI agents that automate sales, support, internal ops, or marketing using no-code and low-code tools tailored to your exact use case.',
            features: ['Sales automation', 'Customer support bots', 'Internal workflows', 'Marketing automation'],
            color: 'from-purple-500 to-purple-600',
            bgGradient: 'from-purple-500/10 via-purple-600/5 to-transparent'
        },
        {
            icon: Settings,
            title: 'End-to-End SaaS Product Development',
            description: 'We lead the entire dev cycle — wireframes, backend, frontend, integrations, testing, and cloud deployment. You get a secure, scalable product ready for real users.',
            features: ['Full-stack development', 'Cloud deployment', 'Security implementation', 'Integration setup'],
            color: 'from-green-500 to-green-600',
            bgGradient: 'from-green-500/10 via-green-600/5 to-transparent'
        },
        {
            icon: Users,
            title: 'Building and Managing Your Tech Team',
            description: 'We help you hire or supplement your development team with timezone-aligned engineers, PMs, and DevOps. Culture fit and fast iteration guaranteed.',
            features: ['Team recruitment', 'Project management', 'DevOps expertise', 'Cultural alignment'],
            color: 'from-orange-500 to-orange-600',
            bgGradient: 'from-orange-500/10 via-orange-600/5 to-transparent'
        },
        {
            icon: TrendingUp,
            title: 'Scalable AI Integration',
            description: 'From chatbots to recommendation engines to automation systems, we embed AI where it delivers business value, not just buzzwords.',
            features: ['Smart recommendations', 'Process automation', 'Data analytics', 'Business intelligence'],
            color: 'from-pink-500 to-pink-600',
            bgGradient: 'from-pink-500/10 via-pink-600/5 to-transparent'
        },
        {
            icon: Compass,
            title: 'Strategic Tech Leadership',
            description: 'We support investor calls, lead sprint planning, guide product decisions, and ensure your tech aligns with your go-to-market and revenue goals.',
            features: ['Strategic planning', 'Investor support', 'Sprint management', 'Technical roadmaps'],
            color: 'from-indigo-500 to-indigo-600',
            bgGradient: 'from-indigo-500/10 via-indigo-600/5 to-transparent'
        },
        {
            icon: Shield,
            title: 'Compliance Ready Development',
            description: 'We build systems aligned with SOC2, HIPAA, GDPR and more critical for SaaS and AI products in regulated industries.',
            features: ['SOC2 compliance', 'HIPAA compliance', 'GDPR compliance', 'Security audits'],
            color: 'from-red-500 to-red-600',
            bgGradient: 'from-red-500/10 via-red-600/5 to-transparent'
        }
    ];
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, services.length]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = currentIndex * (container.clientWidth / 2.5);
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollSpeed = 1;
        let scrollInterval: number;

        if (isAutoPlaying) {
            scrollInterval = window.setInterval(() => {
                container.scrollTop += scrollSpeed;
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    container.scrollTop = 0;
                }
            }, 30);
        }

        return () => clearInterval(scrollInterval);
    }, [isAutoPlaying]);


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
    const Icon = services[currentIndex].icon;
    return (
        <section className="py-20 bg-gradient-to-b from-secondary-900 to-secondary-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl animate-bounce-subtle"></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-primary-600/3 rounded-full blur-3xl animate-heartbeat"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-16">
                        <h2 className="font-nav text-4xl text-white md:text-5xl font-bold  mb-6">
                            A Full Stack of{' '}
                            <span
                                className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
               Leadership
              </span>
                            , Execution, and{' '}
                            <span
                                className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  What&#39;s Included in Our CTO Services
              </span>
                        </h2>
                    </motion.div>
                    {/* Main Content Layout */}
                    <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Left Side - Featured Service Details */}
                        <div className="space-y-8">
                            <motion.div
                                key={currentIndex}
                                initial={{opacity: 0, x: -50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6}}
                                className={`
                  relative bg-gradient-to-br ${services[currentIndex].bgGradient} 
                  backdrop-blur-sm border border-primary-400/30 rounded-3xl p-8 
                  overflow-hidden min-h-[500px]
                `}
                            >
                                {/* Background Effects */}
                                <div className={`
                  absolute inset-0 bg-gradient-to-br ${services[currentIndex].color} 
                  opacity-5 
                `}></div>

                                <div className="absolute inset-0 opacity-30">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 "></div>
                                </div>

                                <div className="relative z-10">
                                    {/* Service Icon */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{duration: 3, repeat: Infinity}}
                                        className={`
                      w-20 h-20 bg-gradient-to-br ${services[currentIndex].color} 
                      rounded-3xl flex items-center justify-center mb-8
                      shadow-2xl shadow-primary-500/20
                    `}
                                    >

                                        <Icon className="w-10 h-10 text-white"/>
                                    </motion.div>

                                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                        {services[currentIndex].title}
                                        {services[currentIndex].subtitle && (
                                            <span className="block text-xl font-medium text-primary-400 mt-2">
                        {services[currentIndex].subtitle}
                      </span>
                                        )}
                                    </h3>

                                    <p className="font-body text-lg text-gray-200 leading-relaxed mb-8">
                                        {services[currentIndex].description}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="font-heading text-lg font-bold text-primary-300 mb-4">
                                            Key Features:
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {services[currentIndex].features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{opacity: 0, y: 20}}
                                                    animate={{opacity: 1, y: 0}}
                                                    transition={{duration: 0.4, delay: index * 0.1}}
                                                    className="flex items-center space-x-3 group"
                                                >
                                                    <div
                                                        className="w-2 h-2 bg-primary-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                                    <span
                                                        className="font-body text-gray-300 group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                        <div className="space-y-6">
                            <div
                                ref={scrollContainerRef}
                                className="max-h-[600px] overflow-hidden relative pr-4 custom-scrollbar"
                                onMouseEnter={() => setIsAutoPlaying(false)}
                                onMouseLeave={() => setIsAutoPlaying(true)}
                            >
                                <div className="space-y-4" style={{ willChange: 'transform' }}>
                                    {Array(50).fill(services).flat().map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, x: 50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.5, delay: index * 0.1}}
                                            onMouseEnter={() => {
                                                setCurrentIndex(index % services.length);
                                                setIsAutoPlaying(false);
                                            }}
                                            className={`
                        relative p-6 rounded-2xl cursor-pointer transition-all duration-300
                        group hover:scale-105 border-2
                        ${currentIndex === index
                                                ? 'bg-primary-gradient/20 border-primary-400 shadow-lg shadow-primary-500/25'
                                                : 'bg-secondary-800/50 border-primary-500/20 hover:border-primary-500/40'
                                            }
                        backdrop-blur-sm
                      `}
                                        >
                                            {/* Service Item Content */}
                                            <div className="flex items-start space-x-4">
                                                <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                          ${currentIndex === index
                                                    ? 'bg-primary-gradient'
                                                    : 'bg-secondary-700 group-hover:bg-primary-gradient/20'
                                                }
                          transition-all duration-300
                        `}>
                                                    <service.icon className={`
                            w-6 h-6 transition-colors duration-300
                            ${currentIndex === index
                                                        ? 'text-secondary-900'
                                                        : 'text-primary-400 group-hover:text-primary-300'
                                                    }
                          `}/>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className={`
                            font-heading text-lg font-bold transition-colors duration-300 truncate
                            ${currentIndex === index
                                                        ? 'text-primary-300'
                                                        : 'text-white group-hover:text-primary-400'
                                                    }
                          `}>
                                                        {service.title}
                                                    </h4>
                                                    <p className={`
                            font-body text-sm mt-1 line-clamp-2 transition-colors duration-300
                            ${currentIndex === index
                                                        ? 'text-gray-200'
                                                        : 'text-gray-400 group-hover:text-gray-300'
                                                    }
                          `}>
                                                        {service.description}
                                                    </p>
                                                </div>

                                                {/* Active Indicator */}
                                                {currentIndex === index && (
                                                    <motion.div
                                                        initial={{scale: 0}}
                                                        animate={{scale: 1}}
                                                        className="w-3 h-3 bg-primary-400 rounded-full flex-shrink-0 mt-2"
                                                    />
                                                )}
                                            </div>

                                            {/* Hover Effect */}
                                            <div
                                                className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    display: none;
                }

            `}</style>
        </section>
    );
};

export default ServicesIncludedSection;