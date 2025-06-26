'use client';
import {easeInOut, motion, Variants} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import {
    Crown,
    Rocket,
    CheckCircle,
    Clock,
    Users,
    Zap,
    ArrowRight,
    Sparkles,
    Shield
} from 'lucide-react';

interface PricingPlan {
    id: string;
    name: string;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    price: string;
    priceSubtext: string;
    idealFor: string[];
    features: string[];
    teamManagement: string;
    deliverySpeed: string;
    monthlyHours: string;
    bestFor: string[];
    isPopular?: boolean;
    discount?: string;
}

const PricingSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

    const plans: PricingPlan[] = [
        {
            id: 'cto-only',
            name: 'CTO Only',
            title: 'Strategic Leadership',
            subtitle: 'Expert guidance for your tech journey',
            icon: Crown,
            price: '$49',
            priceSubtext: '/hour',
            idealFor: ['Teams that need expert tech leadership'],
            features: [
                'Tech roadmap & architecture strategy',
                'Sprint planning & team oversight',
                'Investor & stakeholder support',
                'Compliance advisory'
            ],
            teamManagement: 'Light (your internal team)',
            deliverySpeed: 'Strategic guidance, 1–2 sprints ahead',
            monthlyHours: 'Starting from 20 hours/month',
            bestFor: [
                'SaaS startups with in-house team',
                'Agencies needing strategy'
            ]
        },
        {
            id: 'cto-team',
            name: 'CTO + Team',
            title: 'Leadership & Execution',
            subtitle: 'Complete tech solution with full team',
            icon: Rocket,
            price: '$49',
            priceSubtext: '/hour',
            idealFor: ['Founders who need a full tech team to build & scale fast'],
            features: [
                'Everything in CTO Only plan',
                'Full-stack development (frontend + backend)',
                'Project & QA management',
                'DevOps, AI agents, integrations'
            ],
            teamManagement: 'Full (we bring & manage devs, PMs, DevOps)',
            deliverySpeed: 'Fast execution from wireframe to deployment',
            monthlyHours: 'Starting from 100 hours/month',
            bestFor: [
                'Founders launching from scratch',
                'Companies needing scale-ready SaaS'
            ],
            isPopular: true,
            discount: '37% off for 100+ hour commitments'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #EAB308 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 lg:mb-6 text-gray-900">
                            Choose the Right Fit for{' '}
                            <span className="bg-primary-gradient bg-clip-text text-transparent">
                                Your Product Stage
                            </span>
                        </h2>
                        <p className="font-body text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Flexible engagement options designed to scale with your business needs
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <motion.div
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                    >
                        {plans.map((plan) => (
                            <motion.div
                                key={plan.id}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredPlan(plan.id)}
                                onMouseLeave={() => setHoveredPlan(null)}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`
                                    relative bg-white border-2 rounded-2xl lg:rounded-3xl p-6 lg:p-8 
                                    shadow-lg hover:shadow-2xl transition-all duration-300 group
                                    ${plan.isPopular
                                    ? 'border-primary-500 ring-4 ring-primary-500/20'
                                    : 'border-gray-200 hover:border-primary-300'
                                }
                                `}
                            >
                                {/* Popular Badge */}
                                {plan.isPopular && (
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                                    >
                                        <div className="bg-primary-gradient text-white px-4 py-1 rounded-full text-xs lg:text-sm font-bold animate-glow-pulse">
                                            Most Popular
                                        </div>
                                    </motion.div>
                                )}

                                {/* Plan Header */}
                                <div className="text-center mb-6">
                                    <motion.div
                                        animate={hoveredPlan === plan.id ? {
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        } : {}}
                                        transition={{ duration: 0.6 }}
                                        className={`
                                            w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center
                                            ${plan.isPopular ? 'bg-primary-gradient animate-glow-pulse' : 'bg-gray-100 group-hover:bg-primary-100'}
                                            transition-colors duration-300
                                        `}
                                    >
                                        <plan.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${plan.isPopular ? 'text-white' : 'text-gray-600 group-hover:text-primary-600'}`} />
                                    </motion.div>

                                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="font-heading text-lg lg:text-xl font-semibold text-primary-600 mb-1">
                                        {plan.title}
                                    </p>
                                    <p className="font-body text-sm lg:text-base text-gray-500">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-6">
                                    <div className="flex items-baseline justify-center mb-2">
                                        <span className="font-heading text-3xl lg:text-4xl font-black text-gray-900">
                                            {plan.price}
                                        </span>
                                        <span className="font-body text-lg text-gray-500 ml-1">
                                            {plan.priceSubtext}
                                        </span>
                                    </div>
                                    {plan.discount && (
                                        <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs lg:text-sm font-semibold">
                                            <Sparkles className="w-3 h-3 mr-1" />
                                            {plan.discount}
                                        </div>
                                    )}
                                </div>

                                {/* Ideal For */}
                                <div className="mb-6">
                                    <h4 className="font-body text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <Users className="w-4 h-4 mr-2 text-primary-500" />
                                        Ideal For
                                    </h4>
                                    {plan.idealFor.map((item, idx) => (
                                        <p key={idx} className="font-body text-sm text-gray-600 mb-1">
                                            {item}
                                        </p>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-body text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <CheckCircle className="w-4 h-4 mr-2 text-primary-500" />
                                        Core Inclusions
                                    </h4>
                                    <div className="space-y-2">
                                        {plan.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                                                className="flex items-start space-x-2"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="font-body text-sm text-gray-600 leading-relaxed">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-1 gap-3 mb-6">
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="flex items-center text-xs font-semibold text-gray-700 mb-1">
                                            <Clock className="w-3 h-3 mr-1" />
                                            Monthly Hours
                                        </div>
                                        <p className="text-sm text-gray-600">{plan.monthlyHours}</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="flex items-center text-xs font-semibold text-gray-700 mb-1">
                                            <Zap className="w-3 h-3 mr-1" />
                                            Delivery Speed
                                        </div>
                                        <p className="text-sm text-gray-600">{plan.deliverySpeed}</p>
                                    </div>
                                </div>

                                {/* Best For */}
                                <div className="mb-6">
                                    <h4 className="font-body text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                        <Shield className="w-4 h-4 mr-2 text-primary-500" />
                                        Best For
                                    </h4>
                                    <div className="space-y-1">
                                        {plan.bestFor.map((item, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                                <span className="font-body text-sm text-gray-600">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                        w-full font-button flex items-center justify-center px-6 py-3 rounded-xl 
                                        font-semibold transition-all duration-300 text-sm lg:text-base
                                        ${plan.isPopular
                                        ? 'bg-primary-gradient text-white shadow-lg hover:shadow-xl animate-glow-pulse'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }
                                    `}
                                >
                                    <span className="mr-2">Get Started</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-2xl lg:rounded-3xl"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;