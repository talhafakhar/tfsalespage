import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle, XCircle
} from 'lucide-react';
type Feature = {
    text: string;
    positive?: boolean;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ColumnData = {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    features: Feature[];
    canvasType?: 'positive' | 'negative';
};

type DifferenceProps = {
    titleTwo: string;
    titleThree: string;
    description: string;
    inHouseData: ColumnData;
    fractionalData: ColumnData;
};
const Difference: React.FC<DifferenceProps> = ({titleTwo,titleThree,description,inHouseData,fractionalData}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const ComparisonCard = ({ data, delay }: { data: typeof inHouseData | typeof fractionalData, delay: number }) => {
        const IconComponent = data.icon;
        return (
            <motion.div
                initial={{ opacity: 0, y: 100, rotateY: -30 }}
                animate={isVisible ? {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: {
                        delay,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                    }
                } : {}}
                className="relative group perspective-1000"
            >
                <motion.div
                    whileHover={{
                        rotateY: 5,
                        transition: { duration: 0.3 }
                    }}
                    className="relative backdrop-blur-xl border border-white rounded-3xl p-5  shadow-2xl  transition-all duration-500 overflow-hidden"
                >
                    <motion.div
                        animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${data.color} rounded-full blur-xl opacity-30`}
                    />

                    <div className="text-center mb-8 relative z-10">
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${data.color} text-white mb-6 shadow-2xl relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                            <IconComponent className="w-10 h-10 relative z-10" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-3">{data.title}</h3>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: 80 } : {}}
                            transition={{ delay: delay + 0.5, duration: 0.8 }}
                            className={`h-1 bg-gradient-to-r ${data.color} mx-auto rounded-full`}
                        />
                    </div>
                    <div className="space-y-1 relative z-10 min-h-[300px]">
                        {data.canvasType === 'negative' ? (
                            <div className="relative h-80 overflow-hidden">
                                {data.features.map((feature, index) => {
                                    const StatusIcon = feature.positive ? CheckCircle : XCircle;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: -100 }}
                                            animate={isVisible ? {
                                                opacity: [0, 1, 1, 0],
                                                y: [-100, 50 + (index * 45), 50 + (index * 45), 350],
                                                transition: {
                                                    delay: delay + 0.5 + (index * 0.8),
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    repeatDelay: 2,
                                                    ease: "easeInOut"
                                                }
                                            } : {}}
                                            className="absolute left-0 right-0"
                                            style={{ top: 0 }}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-red-500/20 border border-red-500 backdrop-blur-sm rounded-full px-4 py-3 mx-auto w-fit shadow-lg"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <StatusIcon className="w-5 h-5 text-red-400" />
                                                    <span className="text-white font-medium text-sm">
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ) : (
                            data.features.map((feature, index) => {
                                const StatusIcon = feature.positive ? CheckCircle : XCircle;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isVisible ? {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                delay: delay + 0.3 + (index * 0.1),
                                                duration: 0.6,
                                                type: "spring",
                                                stiffness: 120
                                            }
                                        } : {}}
                                        whileHover={{
                                            x: 10,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex items-start space-x-4 group/item  rounded-xl p-3 transition-all duration-300"
                                    >
                                        <div className="flex items-center space-x-3 flex-shrink-0">
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <StatusIcon
                                                    className={`w-6 h-6 ${feature.positive ? 'text-green-400' : 'text-red-400'} drop-shadow-lg`}
                                                />
                                            </motion.div>
                                        </div>
                                        <span className="text-white group-hover/item:text-foreground transition-colors leading-relaxed font-medium">
                                            {feature.text}
                                        </span>
                                    </motion.div>
                                );
                            })
                        )}
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className=" bg-secondary py-8 md:py-15 px-4">
            <div className="container mx-auto  overflow-hidden">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                        Difference Between{' '}<br/><span className="text-primary">{titleTwo}</span>
                        {' '}&{' '}
                        <span className="text-primary">
            {titleThree}
            </span>
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto relative">
                    <ComparisonCard data={inHouseData} delay={0.2} />
                    <ComparisonCard data={fractionalData} delay={0.4} />
                </div>
                <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Choose Fractional CMO Today
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Difference;