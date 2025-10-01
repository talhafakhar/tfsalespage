import React from 'react';
import { Lightbulb, Users, UserCheck, BookOpen, Megaphone} from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
const AboutSection = () => {
    const features = [
        {
            title: "Peer Exchange",
            desc: "Roundtables, masterminds, and office hours for shared learning and real-world insights",
            icon: Lightbulb
        },
        {
            title: "Events & Webinars",
            desc: "Expert-led virtual and onsite sessions covering growth, fundraising, and scaling",
            icon: Users
        },
        {
            title: "Mentorship Access",
            desc: "One-on-one guidance from seasoned founders, operators, and advisors",
            icon: UserCheck
        },
        {
            title: "Resources Hu",
            desc: "Exclusive playbooks, templates, and toolkits to accelerate execution",
            icon: BookOpen
        },
        {
            title: "Founders’ Showcase",
            desc: "Spotlights and demo days that amplify visibility and credibility",
            icon: Megaphone
        },


    ];

    return (
        <section className="py-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-2 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                        Meet <span className="text-yellow-400">StartUPulse</span>
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        The dynamic community connecting entrepreneurs with peer support, mentorship, and resources to turn startup ideas into thriving ventures.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="group flex items-center bg-white space-x-4 p-6 rounded-xl border border-gray-400"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-6 h-6 text-black" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold  mb-2 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div>
                        <Image src="/assets/svg/community.svg" alt="About StartUPulse" width={500} height={500}/>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <a
                        href="https://startupulse.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
                    >
                       Visit StartUPulse
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;