import React from 'react';
import { Lightbulb, Users, Rocket} from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {

    const features = [
        {
            title: "Innovation Hub",
            desc: "Foster creativity and breakthrough ideas",
            icon: Lightbulb
        },
        {
            title: "Mentorship Network",
            desc: "Connect with industry experts",
            icon: Users
        },
        {
            title: "Growth Acceleration",
            desc: "Scale with proven strategies",
            icon: Rocket
        }
    ];

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                        Meet <span className="text-yellow-400">StartUPulse</span>
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        The dynamic platform connecting entrepreneurs worldwide with resources, mentorship, and community to turn startup dreams into reality.
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
                                    className="group flex items-center space-x-4 p-6 rounded-xl border border-gray-400"
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

            </div>
        </section>
    );
};

export default AboutSection;