'use client';
import {easeInOut, motion, Variants} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { Rocket, Building2, Users, RefreshCcw, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface TargetClient {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    highlight: string;
    color: 'primary' | 'blue' | 'green' | 'purple' | 'orange';
}

const WhoWeWorkWithSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const targetClients: TargetClient[] = [
        {
            icon: Rocket,
            title: 'First-Time Tech Founders',
            description: 'Launching a tech product for the first time and need trusted guidance',
            highlight: 'From idea to launch',
            color: 'primary'
        },
        {
            icon: Building2,
            title: 'SaaS Entrepreneurs',
            description: 'Building SaaS platforms and want to scale beyond MVP',
            highlight: 'Scale with confidence',
            color: 'blue'
        },
        {
            icon: Users,
            title: 'Agency Owners',
            description: 'Running an agency and need tech execution for client products',
            highlight: 'Deliver excellence',
            color: 'green'
        },
        {
            icon: RefreshCcw,
            title: 'Legacy Modernizers',
            description: 'Looking to modernize outdated software with a fresh architecture',
            highlight: 'Future-proof systems',
            color: 'purple'
        },
        {
            icon: Shield,
            title: 'Non-Technical Leaders',
            description: 'Non-technical leaders who need a reliable tech partner they can trust',
            highlight: 'Trusted partnership',
            color: 'orange'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeInOut,
            },
        },
    };

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; accent: string; glow: string }> = {
            primary: {
                bg: 'bg-primary-500',
                text: 'text-primary-400',
                accent: 'border-primary-500/30',
                glow: 'shadow-primary-500/20'
            },
            blue: {
                bg: 'bg-blue-500',
                text: 'text-blue-400',
                accent: 'border-blue-500/30',
                glow: 'shadow-blue-500/20'
            },
            green: {
                bg: 'bg-green-500',
                text: 'text-green-400',
                accent: 'border-green-500/30',
                glow: 'shadow-green-500/20'
            },
            purple: {
                bg: 'bg-purple-500',
                text: 'text-purple-400',
                accent: 'border-purple-500/30',
                glow: 'shadow-purple-500/20'
            },
            orange: {
                bg: 'bg-orange-500',
                text: 'text-orange-400',
                accent: 'border-orange-500/30',
                glow: 'shadow-orange-500/20'
            }
        };
        return colors[color] || colors.primary;
    };

    return (
        <section className="py-24 bg-secondary-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-heartbeat"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >

                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className=" text-4xl md:text-5xl font-bold mb-6 text-white">
                            Who We Work{' '}
                            <span className="bg-primary-gradient bg-clip-text text-transparent">
                                Best With
                            </span>
                        </h2>
                        <p className="font-body  text-gray-400 max-w-3xl mx-auto">
                            Our CTO Services Are Ideal for Founders Who Are Ready to Transform Their Vision into Reality
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent transform -translate-x-1/2"></div>
                        <div className="space-y-16">
                            {targetClients.map((client, index) => {
                                const colors = getColorClasses(client.color);
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                                    >
                                        {/* Content Side */}
                                        <motion.div
                                            whileHover={{ x: isEven ? 10 : -10 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:pl-12'} relative`}
                                        >
                                            {/* Number Badge */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={inView ? { scale: 1 } : { scale: 0 }}
                                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                                className={`
                                                    inline-flex items-center justify-center w-12 h-12 rounded-full 
                                                    ${colors.bg} text-white font-bold text-lg mb-6
                                                    animate-glow-pulse
                                                `}
                                            >
                                                {index + 1}
                                            </motion.div>

                                            <motion.div
                                                animate={activeIndex === index ? { scale: 1.02 } : { scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                                    {client.title}
                                                </h3>

                                                <p className="font-body text-lg text-gray-300 mb-4 leading-relaxed">
                                                    {client.description}
                                                </p>

                                                <div className={`inline-flex items-center ${colors.text} font-semibold text-lg group`}>
                                                    <span className="mr-2">{client.highlight}</span>
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className={`${isEven ? 'lg:order-last' : 'lg:order-first'}`}
                                        >
                                            <div className={`
                                                relative bg-secondary-900/50 backdrop-blur-sm border ${colors.accent}
                                                rounded-3xl p-8 group cursor-pointer transition-all duration-500
                                                hover:border-opacity-60 hover:${colors.glow} hover:shadow-2xl
                                            `}>
                                                <motion.div
                                                    animate={activeIndex === index ? {
                                                        rotate: [0, 10, -10, 0],
                                                        scale: [1, 1.1, 1]
                                                    } : {}}
                                                    transition={{ duration: 0.6 }}
                                                    className={`
                                                        relative w-24 h-24 ${colors.bg} rounded-2xl 
                                                        flex items-center justify-center mb-6 mx-auto
                                                        animate-glow-pulse
                                                    `}
                                                >
                                                    <client.icon className="w-12 h-12 text-white" />
                                                </motion.div>

                                                <div className="space-y-3">
                                                    {[
                                                        'Strategic Planning',
                                                        'Technical Leadership',
                                                        'Scalable Solutions'
                                                    ].map((feature, featureIndex) => (
                                                        <motion.div
                                                            key={featureIndex}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                                            transition={{
                                                                duration: 0.4,
                                                                delay: 0.5 + index * 0.1 + featureIndex * 0.1
                                                            }}
                                                            className="flex items-center space-x-3"
                                                        >
                                                            <CheckCircle2 className={`w-5 h-5 ${colors.text} animate-bounce-subtle`} />
                                                            <span className="font-body text-gray-300 group-hover:text-white transition-colors duration-300">
                                                                {feature}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeWorkWithSection;