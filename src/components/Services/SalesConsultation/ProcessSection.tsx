import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {LucideIcon} from "lucide-react";


















type ProcessFeature = {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: string;
};

type ProcessProps = {
    title?: string;
    titleTwo?: string;
    description?: string;
    features: ProcessFeature[];
};
export const Process:React.FC<ProcessProps> = ({title,titleTwo,description,features}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="bg-white py-10 px-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className=" relative max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight  text-black">
                        {title} <span className="text-primary">{titleTwo}</span>
                    </h2>
                    <p className="max-w-4xl mx-auto">
                        {description}
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black/10"
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
                                className={`relative flex items-center mb-20 ${isLeft ? 'justify-end' : 'justify-start'}`}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`w-5/12 text-center`}>
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h3 className="text-lg font-bold  mb-1 flex justify-center items-center gap-2">
                                            <span className="text-primary font-bold text-xl md:text-5xl">
                                                {feature.id}
                                            </span> {feature.title}
                                        </h3>
                                        <p className=" leading-relaxed mb-2">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="absolute left-1/2 transform -translate-x-1/2"
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative">
                                        <motion.div
                                            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                                            animate={{
                                                boxShadow: hoveredIndex === index
                                                    ? "0 0 0 20px rgba(250, 204, 21, 0.2)"
                                                    : "0 0 0 0px rgba(250, 204, 21, 0)"
                                            }}
                                        >
                                            <IconComponent size={20} className="text-black" />
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