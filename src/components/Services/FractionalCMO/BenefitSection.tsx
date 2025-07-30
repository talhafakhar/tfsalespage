import React from 'react';
import {motion, Variants} from 'framer-motion';
import {LucideIcon} from "lucide-react";
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
export interface Benefit {
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
}
interface BenefitCardProps {
    benefits: Benefit;
    index: number;
}
interface BenefitSectionProps {
    title: string;
    titleTwo: string;
    description: string;
    cardContent: Benefit[];
}
const BenefitCard: React.FC<BenefitCardProps> = ({benefits, index}) => {
    return (
        <motion.div
            id={index.toString()}
            variants={cardVariants}
            whileHover={{
                y: -12,
                scale: 1.02,
                transition: {type: "spring" as const, stiffness: 300, damping: 20}
            }}
            whileTap={{scale: 0.98}}
            className="group relative overflow-hidden"
            style={{perspective: '1000px'}}
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded-2xl border border-yellow-400/20"></div>
            <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${benefits.gradient} opacity-0 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                    backgroundImage: [
                        `linear-gradient(45deg, rgb(250 204 21), rgb(255 255 255), rgb(250 204 21))`,
                        `linear-gradient(90deg, rgb(255 255 255), rgb(250 204 21), rgb(255 255 255))`,
                        `linear-gradient(135deg, rgb(250 204 21), rgb(255 255 255), rgb(250 204 21))`,
                        `linear-gradient(45deg, rgb(250 204 21), rgb(255 255 255), rgb(250 204 21))`
                    ]
                }}
                transition={{duration: 4, repeat: Infinity, ease: "linear"}}
            />
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
            />

            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="relative mb-6">
                    <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${benefits.gradient} rounded-2xl flex items-center justify-center shadow-lg border border-yellow-400/30`}
                        whileHover={{
                            rotate: 5,
                            scale: 1.05,
                            transition: {type: "spring" as const, stiffness: 400, damping: 25}
                        }}
                    >
                        <benefits.icon className="w-8 h-8 text-black drop-shadow-sm"/>
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-white rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    />
                </div>

                <motion.h3
                    className="text-2xl font-bold mb-4 text-white"
                    whileHover={{
                        scale: 1.02,
                        transition: {type: "spring" as const, stiffness: 400, damping: 25}
                    }}
                >
                    {benefits.title}
                </motion.h3>

                <motion.p
                    className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300"
                    initial={{opacity: 0.8}}
                    whileHover={{opacity: 1}}
                >
                    {benefits.description}
                </motion.p>

                <motion.div
                    className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{scaleX: 0}}
                    whileHover={{scaleX: 1}}
                    transition={{duration: 0.3}}
                >
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                </motion.div>
            </div>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                initial={{x: "-100%"}}
                whileHover={{
                    x: "200%",
                    transition: {duration: 0.8, ease: "easeOut"}
                }}
            />
        </motion.div>
    );
};
const BenefitsSection: React.FC<BenefitSectionProps> = (({title,titleTwo,description,cardContent}) => {
    return (
        <section className="relative bg-black text-white py-20 overflow-hidden">
            <motion.div
                initial={{x: -100, y: -100}}
                animate={{x: 0, y: 0}}
                transition={{duration: 1.5}}
                className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-yellow-400"
            />

            <motion.div
                initial={{x: 100, y: 100}}
                animate={{x: 0, y: 0}}
                transition={{duration: 1.5}}
                className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-yellow-400"
            />
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/10"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-5xl font-bold mb-4"
                    >
                        {title} <span className="text-yellow-400">{titleTwo}</span>
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className=" text-gray-300"
                    >
                        {description}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {Array.isArray(cardContent) &&
                        cardContent.map((benefit, index) => (
                            <BenefitCard key={index} benefits={benefit} index={index} />
                        ))}
                </motion.div>
            </div>
        </section>
    );
})

export default BenefitsSection;