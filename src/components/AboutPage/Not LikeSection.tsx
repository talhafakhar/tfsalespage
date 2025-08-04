'use client';
import {easeOut, motion} from 'framer-motion';
import {ArrowRightCircle, BarChart3, Briefcase, MessageSquareWarning, UserMinus, Users,} from 'lucide-react';
import Image from 'next/image';
import React from "react";

const fadeUp = {
    hidden: {opacity: 0, y: 40},
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.7,
            ease: easeOut,
        },
    }),
};

const reasons = [
    {
        title: 'No Agency BS',
        description: 'Our people work for YOU, not 15 other companies.',
        icon: MessageSquareWarning,
        image: '/assets/about/multiple-hand.webp',
    },
    {
        title: 'Complete Teams',
        description: 'You don’t get just one person — you get a whole department.',
        icon: Users,
        image: '/assets/about/team.webp',
    },
    {
        title: 'Employee Relationship',
        description: 'Direct communication, full accountability, no markup games.',
        icon: UserMinus,
        image: '/assets/about/emp.webp',
    },
    {
        title: 'We Want You to Fire Us',
        description: 'Success means you eventually don’t need us anymore.',
        icon: ArrowRightCircle,
        image: '/assets/about/fire.webp',
    },
];

const stats = [
    {
        icon: BarChart3,
        title: '14+ Companies Helped',
        note: 'Growing through referrals — not ads',
    },
    {
        icon: Briefcase,
        title: '8+ Years Experience',
        note: 'Talha’s real-world startup grind',
    },
    {
        icon: Users,
        title: 'Multi-Industry Expertise',
        note: 'SaaS, E-commerce, B2B & more',
    },
];

const WhyNotUs = () => {
    return (
        <section className="py-20 px-6 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={0}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why We&#39;re <span className="text-primary">Not Like Everyone Else</span>
                    </h2>
                    <p className="text-white max-w-2xl mx-auto text-lg">
                        We’re not a traditional agency. Here’s how we’re built differently — for your real growth.
                    </p>
                </motion.div>
                <div className="space-y-20">
                    {reasons.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}>
                                <div className={`w-full lg:w-1/2 ${isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                                    <div className="relative group flex justify-center">
                                        <div className="mx-auto">
                                            <Image
                                                loading="lazy"
                                                src={item.image}
                                                alt={item.title}
                                                width={400}
                                                height={400}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                                    <div className="space-y-4 text-center border p-3 rounded-2xl">
                                        <div className="p-3 bg-primary/10 inline-block rounded-lg">
                                            <item.icon className="text-primary w-6 h-6"/>
                                        </div>
                                        <h3 className="text-4xl font-semibold text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-base">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    custom={reasons.length + 1}
                    className="grid md:grid-cols-3 gap-6 mt-5"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
                        >
                            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3"/>
                            <h4 className="text-xl font-semibold text-white">{stat.title}</h4>
                            <p className="text-gray-400 text-sm mt-2">{stat.note}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyNotUs;
