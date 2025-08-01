import React, { useState, useEffect } from 'react';
import {
    ArrowDown,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
type FinalCTAsSection =  {
    description?: string;
    buttonText?: string;
    buttonTextTwo?: string;
}
const FinalCTASection: React.FC<FinalCTAsSection> = ({description,buttonText,buttonTextTwo}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const benefits = [
        "Free 30-minute consultation",
        "Detailed sales process analysis",
        "Actionable improvement recommendations"
    ];

    return (
        <section className="bg-background py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/5 to-warning/5 rounded-full blur-3xl"></div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <motion.div
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Ready To Fix{' '}
                        <span className="text-primary relative">
                            Your Sales?
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3"
                                viewBox="0 0 300 12"
                                fill="none"
                            >
                                <path
                                    d="M3 9C118.5 4.5 231 4.5 297 9"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        {description}
                    </p>

                    {/* Benefits List */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-8"
                        variants={itemVariants}
                    >
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border"
                            >
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.span
                        className="flex justify-center mb-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ><ArrowDown/></motion.span>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    variants={itemVariants}
                >
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        {buttonText}
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                    <button
                        className="px-6 py-2.5 rounded-full border border-secondary font-semibold transition-transform duration-300 hover:scale-105 hover:border-primary focus:outline-none"
                    >
                        {buttonTextTwo}

                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FinalCTASection;