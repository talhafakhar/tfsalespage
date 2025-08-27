import React from 'react';
import {ArrowRight, Briefcase, Cloud, ShoppingCart,Home} from "lucide-react";
import {motion, Variants} from 'framer-motion';

interface Benefit {
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    features: string[];
}


const benefits: Benefit[] = [
    {
        title: "Digital Marketing Agency",
        description: "Industry: Professional Services",
        icon: Briefcase,
        gradient: "from-yellow-400 via-yellow-300 to-white",
        features: [
            "Automated MQL lead nurturing & qualification",
            "Reduced manual lead scoring time by 12 hrs/week",
            "Want to know more? Get on a call",
        ],
    },
    {
        title: "SaaS Platform",
        description: "Industry: B2B Software",
        icon: Cloud,
        gradient: "from-white via-yellow-200 to-yellow-400",
        features: [
            "Demo request follow-up automation",
            "Increased demo show-up rate from 45% to 67%",
            "Want to know more? Get on a call",
        ],
    },
    {
        title: "Real Estate Company",
        description: "Industry: Real Estate",
        icon: Home,
        gradient: "from-yellow-300 via-white to-yellow-400",
        features: [
            "Automated lead qualification system",
            "Improved lead response time from 4 hrs to 15 mins",
            "Want to know more? Get on a call",
        ],
    },
    {
        title: "E-commerce Store",
        description: "Industry: Retail/E-commerce",
        icon: ShoppingCart,
        gradient: "from-yellow-400 via-white to-yellow-300",
        features: [
            "Order confirmation & follow-up automation",
            "Increased satisfaction & reduced support tickets by 30%",
            "Want to know more? Get on a call",
        ],
    },
];

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

interface BenefitCardProps {
    benefit: Benefit;
    index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({benefit, index}) => {
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
                className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded border border-primary/20"></div>
            <motion.div
                className="absolute -inset-0.5 bg-primary rounded opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 "
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
            />

            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="relative mb-6">
                    <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded flex items-center justify-center shadow-lg border border-primary/30`}
                        whileHover={{
                            rotate: 5,
                            scale: 1.05,
                            transition: {type: "spring" as const, stiffness: 400, damping: 25}
                        }}
                    >
                        <benefit.icon className="w-8 h-8 text-black drop-shadow-sm"/>
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 bg-primary rounded blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    />
                </div>
                <motion.h3
                    className="text-2xl font-bold mb-4 text-white"
                    whileHover={{
                        scale: 1.02,
                        transition: {type: "spring" as const, stiffness: 400, damping: 25}
                    }}
                >
                    {benefit.title}
                </motion.h3>

                <motion.p
                    className="text-white text-sm leading-relaxed"
                    initial={{opacity: 0.8}}
                    whileHover={{opacity: 1}}
                >
                    {benefit.description}
                </motion.p>
                <motion.ul
                    className="text-white mt-3 leading-relaxed px-5 list-disc"
                    initial={{opacity: 0.8}}
                    whileHover={{opacity: 1}}
                >
                    {benefit.features.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </motion.ul>
            </div>
        </motion.div>
    );
};

const PortfolioSection: React.FC = () => {
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
                        Client <span className="text-yellow-400">Success Stories</span>
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="max-w-4xl mx-auto text-white"
                    >
                        Discover how our sales automation strategies have transformed businesses and driven
                        exceptional results.
                    </motion.p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit, index) => {
                        const isFourthItem = index === 3;

                        return (
                            <div
                                key={benefit.title}
                                className={`
          ${isFourthItem ? 'lg:col-start-2 lg:col-span-1' : ''} 
      
        `}
                            >
                                <BenefitCard benefit={benefit} index={index} />
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-10 text-center"
                >
                    <button
                        onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
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

export default PortfolioSection;