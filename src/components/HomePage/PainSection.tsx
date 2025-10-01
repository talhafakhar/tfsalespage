"use client";
import React from "react";
import {easeOut, motion} from "framer-motion";

const problems = [
    {
        title: "Inconsistent Lead Flow",
        description:
            "Relying on referrals and luck instead of a predictable pipeline that fills itself month after month",
    },
    {
        title: "Wasted Outreach Efforts",
        description:
            "Sending hundreds of cold messages with zero replies because your approach feels spammy and generic",
    },
    {
        title: "Manual Processes Everywhere",
        description:
            "You're stuck doing everything yourself with no systems, draining your time and energy daily",
    },
    {
        title: "No Team Structure",
        description:
            "Can't scale beyond yourself because you lack the frameworks and training to onboard sales talent",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
    }),
};

const PainSection: React.FC = () => {
    return (
        <section className="py-16 px-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-center mb-4"
                >
                    Why Most Founders Struggle to Scale Beyond{" "}
                    <span className="text-primary">Freelance-Level Growth</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-gray-600 text-center mb-12"
                >
                    If you are a solo founder or part of a small team you know how hard it is to
                    juggle everything
                </motion.p>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {problems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="flex items-start space-x-4 p-6 bg-white border rounded-lg border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-4xl">🚫</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side - Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="relative"
                    >
                        <div className="bg-white border rounded-2xl p-8 shadow-2xl">
                            <div className="text-center space-y-6">
                                <div className="text-8xl">😰</div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Sound Familiar?
                                </h3>
                                <div className="bg-white rounded-lg border p-6 shadow-lg">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">
                        Leads Coming In
                      </span>
                                            <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-500 w-1/4"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">
                        Reply Rate
                      </span>
                                            <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-500 w-1/5"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">
                        Conversion Rate
                      </span>
                                            <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-500 w-1/6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 font-semibold">
                                    Your sales funnel is leaking money 💸
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PainSection;
