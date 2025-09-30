import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Star, Users, CheckCircle } from "lucide-react";
const features = [
    {
        icon: Zap,
        title: "Quick Strategy Check-In",
        description: "We start with a focused call to understand your goals, challenges, and opportunities across sales, marketing, and tech.",
        delay: "0ms"
    },
    {
        icon: Star,
        title: "Custom Growth Roadmap",
        description: "You receive a tailored action plan with clear KPIs, execution timelines, and systems aligned to your business stage.",
        delay: "100ms"
    },
    {
        icon: Users,
        title: "Execution & Weekly Insights",
        description: "We integrate with your team to deliver results, backed by weekly updates, agile iterations, and performance tracking.",
        delay: "200ms"
    },
];
export const TimelineFlowLayout = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="bg-white py-10 px-2 sm:px-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl  font-bold mb-6 leading-tight  text-black">
                        Accelerating Your Success with a
                        <br/>
                        <span className="text-yellow-400">
                            Proven Process
                        </span>
                    </h2>
                    <p className="text-lg  text-black/70 max-w-3xl mx-auto">
                        Our structured approach ensures you get the most out of our fractional leadership 
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        className="absolute left-1/2 transform hidden md:block -translate-x-1/2 w-1 h-full bg-black/10"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ originY: 0 }}
                    />

                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className={`relative flex items-center mb-20 ${isLeft ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`w-full md:w-5/12 ${isLeft ? 'text-center md:text-right md:pr-12' : 'text-center md:text-left md:pl-12'}`}>
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h3 className={`text-3xl font-semibold mb-4 flex items-center  gap-3 ${isLeft ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                                            {isLeft && <CheckCircle className="text-primary md:text-start" size={28} />}
                                            <span>{feature.title}</span>
                                            {!isLeft && <CheckCircle className="text-primary md:text-end" size={28} />}
                                        </h3>
                                        <p className={`text-black/60  items-center leading-relaxed mb-4 flex ${isLeft ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative">
                                        <motion.div
                                            className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center"
                                            animate={{
                                                boxShadow: hoveredIndex === index
                                                    ? "0 0 0 20px rgba(250, 204, 21, 0.2)"
                                                    : "0 0 0 0px rgba(250, 204, 21, 0)"
                                            }}
                                        >
                                            <IconComponent size={40} className="text-black" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};