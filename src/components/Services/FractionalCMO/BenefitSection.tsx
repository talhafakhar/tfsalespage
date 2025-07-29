import React from 'react';
import { Rocket, Shield, Zap, Star, Globe, Heart } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface Benefit {
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
}

const benefits: Benefit[] = [
    {
        title: "Lightning Fast",
        description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
        icon: Zap,
        gradient: "from-yellow-400 via-yellow-300 to-white"
    },
    {
        title: "Secure & Safe",
        description: "Your data is protected with enterprise-grade security and advanced encryption protocols.",
        icon: Shield,
        gradient: "from-white via-yellow-200 to-yellow-400"
    },
    {
        title: "Rocket Speed",
        description: "Deploy and scale your applications instantly with our powerful cloud infrastructure.",
        icon: Rocket,
        gradient: "from-yellow-300 via-white to-yellow-400"
    },
    {
        title: "Premium Quality",
        description: "Built with premium materials and attention to detail for the ultimate user experience.",
        icon: Star,
        gradient: "from-yellow-400 via-yellow-200 to-white"
    },
    {
        title: "Global Reach",
        description: "Connect with users worldwide through our extensive network of global servers.",
        icon: Globe,
        gradient: "from-white via-yellow-300 to-yellow-500"
    },
    {
        title: "Made with Love",
        description: "Crafted with passion and dedication to deliver the best possible experience.",
        icon: Heart,
        gradient: "from-yellow-500 via-yellow-300 to-white"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
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

interface BenefitCardProps {
    benefit: Benefit;
    index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
    return (
        <motion.div
            id={index.toString()}
            variants={cardVariants}
            whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden"
            style={{ perspective: '1000px' }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded-2xl border border-yellow-400/20"></div>
            <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                    backgroundImage: [
                        `linear-gradient(45deg, rgb(250 204 21), rgb(255 255 255), rgb(250 204 21))`,
                        `linear-gradient(90deg, rgb(255 255 255), rgb(250 204 21), rgb(255 255 255))`,
                        `linear-gradient(135deg, rgb(250 204 21), rgb(255 255 255), rgb(250 204 21))`,
                        `linear-gradient(45deg, rgb(250 204 21), rgb(255 255 255), rgb(250 204 21))`
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="relative mb-6">
                    <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg border border-yellow-400/30`}
                        whileHover={{
                            rotate: 5,
                            scale: 1.05,
                            transition: { type: "spring" as const, stiffness: 400, damping: 25 }
                        }}
                    >
                        <benefit.icon className="w-8 h-8 text-black drop-shadow-sm" />
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-white rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    />
                </div>

                <motion.h3
                    className="text-2xl font-bold mb-4 text-white"
                    whileHover={{
                        scale: 1.02,
                        transition: { type: "spring" as const, stiffness: 400, damping: 25 }
                    }}
                >
                    {benefit.title}
                </motion.h3>

                <motion.p
                    className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                >
                    {benefit.description}
                </motion.p>

                <motion.div
                    className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                </motion.div>
            </div>

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{
                    x: "200%",
                    transition: { duration: 0.8, ease: "easeOut" }
                }}
            />
        </motion.div>
    );
};

const BenefitsSection: React.FC = () => {
    return (
        <section className="relative bg-black text-white py-20 overflow-hidden">
            {/* Animated corner decorations */}
            <motion.div
                initial={{ x: -100, y: -100 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-yellow-400"
            />

            <motion.div
                initial={{ x: 100, y: 100 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-yellow-400"
            />

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Why  <span className="text-yellow-400">Choose Us?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-4xl mx-auto text-gray-300 text-lg"
                    >
                        Senior marketing leadership without the full-time price tag
                    </motion.p>
                </div>

                {/* Benefits grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={benefit.title} benefit={benefit} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;