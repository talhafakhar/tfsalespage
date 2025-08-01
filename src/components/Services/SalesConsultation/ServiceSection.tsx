import React from 'react';
import {ArrowRight} from "lucide-react";
import {motion, Variants} from 'framer-motion';
const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};
const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: -15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring" as const,
            duration: 0.8,
            bounce: 0.3
        }
    }
};
interface Industry {
    icon: React.ReactNode;
    title: string;
    features?:string;
    description: React.ReactNode;
    colorClass: string;
}
interface ServicesProps {
    industries: Industry[];
}
const Services: React.FC<ServicesProps> = ({ industries }) => {
    const gridColsClass = (() => {
        if (industries.length === 1) return "grid-cols-1";
        if (industries.length === 2) return "grid-cols-2";
        if (industries.length === 3) return "grid-cols-3";
        if (industries.length === 4) return "grid-cols-2";
        return "grid-cols-3";
    })();
    return (
        <section className="relative bg-black text-white py-20 overflow-hidden">
            <motion.div
                initial={{x: -100, y: -100}}
                animate={{x: 0, y: 0}}
                transition={{duration: 1.5}}
                className="absolute top-0 left-0 w-64 h-64 border-t-[10px] border-l-[10px] border-primary"
            />
            <motion.div
                initial={{x: 100, y: 100}}
                animate={{x: 0, y: 0}}
                transition={{duration: 1.5}}
                className="absolute bottom-0 right-0 w-64 h-64 border-b-[10px] border-r-[10px] border-primary"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-5xl font-bold mb-4"
                    >
                        What We Do <span className="text-yellow-400">For You</span>
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="max-w-4xl mx-auto text-white"
                    >
                        We provide top-notch services to help you achieve your business goals. Our team of experts is
                        dedicated to delivering exceptional results tailored to your unique needs.
                    </motion.p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={`grid ${gridColsClass} gap-8`}
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            id={index.toString()}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden"
                            style={{ perspective: "1000px" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded border border-primary/20" />

                            <motion.div
                                className="absolute -inset-0.5 bg-primary rounded opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <div className="relative z-10 p-8 h-full flex flex-col">
                                <div className="relative mb-6">
                                    <motion.div
                                        className={`w-16 h-16 bg-gradient-to-br ${industry.colorClass} rounded flex items-center justify-center shadow-lg border border-primary/30`}
                                        whileHover={{
                                            rotate: 5,
                                            scale: 1.05,
                                            transition: { type: "spring", stiffness: 400, damping: 25 },
                                        }}
                                    >
                                        {industry.icon}
                                    </motion.div>

                                    <motion.div className="absolute inset-0 bg-primary rounded blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                                </div>

                                <motion.h3
                                    className="text-2xl font-bold mb-4 text-white"
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 400, damping: 25 },
                                    }}
                                >
                                    {industry.title}
                                </motion.h3>
                                <motion.p
                                    className="mb-4 text-white"
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 400, damping: 25 },
                                    }}
                                >
                                    {industry.features}
                                </motion.p>

                                <motion.div
                                    className="text-white text-sm leading-relaxed"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {industry.description}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-10 text-center"
                >
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Book A Free Sales Audit
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;