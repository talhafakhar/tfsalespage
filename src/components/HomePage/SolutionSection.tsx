"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Target,
    Cog,
    Rocket,
    Users,
} from "lucide-react";
import Link from "next/link";
const pillars = [
    {
        icon: <Brain className="w-10 h-10 text-yellow-400" />,
        title: "Sales Psychology",
        description:
            'Master the mental triggers and persuasion principles that make prospects say "yes" naturally',
    },
    {
        icon: <Target className="w-10 h-10 text-pink-400" />,
        title: "ABM Cold Outreach",
        description:
            "Target dream clients with personalized campaigns that get 40%+ reply rates consistently",
    },
    {
        icon: <Cog className="w-10 h-10 text-green-400" />,
        title: "Inbound/Outbound Systems",
        description:
            "Build automated funnels that attract and convert qualified leads while you sleep",
    },
    {
        icon: <Rocket className="w-10 h-10 text-blue-400" />,
        title: "Founder Branding",
        description:
            "Position yourself as the obvious choice so clients come to you pre-sold and ready to buy",
    },
    {
        icon: <Users className="w-10 h-10 text-purple-400" />,
        title: "Team Training",
        description:
            "Scale beyond yourself with proven frameworks that turn average reps into closers",
    },
];

const SolutionSection: React.FC = () => {
    return (
        <section className="py-16  px-4 bg-secondary r">
            <div className="mx-auto max-w-7xl ">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Build a Scalable B2B Sales Engine with <br/><Link href="https://www.tfbusinesssolutions.com" className="text-primary"> TF Business Solutions</Link>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
                        A proven system that transforms founders from hustle mode to systematic growth
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.07, rotate: 1 }}
                            className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700
                       hover:border-yellow-400 transition-all duration-300 shadow-lg cursor-pointer
                       hover:shadow-yellow-500/30 relative overflow-hidden"
                        >

                            <div className="relative z-10">
                                <div className="mb-4">{pillar.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>                <div className="text-center mt-16">
                    <a
                        href="https://calendly.com/talhafakhar/discoverycall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary  font-bold text-lg rounded hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50">
                        GET YOUR CUSTOM SALES STRATEGY →
                    </a>
                    <p className="text-gray-400 text-sm mt-4">No generic advice. Just a tailored roadmap for your business.</p>
                </div>
            </div>
        </section>

    );
};

export default SolutionSection;
