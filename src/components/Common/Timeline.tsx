import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineItem {
    id: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    items: string[];
    color: string;
}

interface TimelineProps {
    items: TimelineItem[];
    autoProgress?: boolean;
    intervalMs?: number;
}

const Timeline: React.FC<TimelineProps> = ({
                                               items,
                                               autoProgress = true,
                                               intervalMs = 3000
                                           }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoProgress);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [isPlaying, intervalMs, items.length]);

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
        setIsPlaying(false);
    };


    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="relative mb-8">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-border rounded-full transform -translate-y-1/2">
                    <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                            width: `${(activeIndex / (items.length - 1)) * 100}%`
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </div>
                <div className="flex justify-between relative z-10">
                    {items.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => handleItemClick(index)}
                            className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                                index <= activeIndex
                                    ? 'bg-primary border-primary'
                                    : 'bg-background border-border hover:border-primary'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {index <= activeIndex && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-full h-full bg-primary rounded-full"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
                >
                    <div className="p-8 md:p-12">
                        {/* Header */}
                        <div className="flex items-center justify-center mb-8">
                            <motion.div
                                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-6"
                                animate={{
                                    rotate: isPlaying ? [0, 360] : 0,
                                    scale: [1, 1.1, 1]
                                }}
                            >
                                {React.createElement(items[activeIndex].icon, { className: "w-8 h-8 text-primary-foreground" })}
                            </motion.div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                    {items[activeIndex].category}
                                </h2>
                                <div className="w-20 h-1 bg-primary rounded-full" />
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {items[activeIndex].items.map((item, itemIndex) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: itemIndex * 0.1 }}
                                    className="flex items-center p-4 bg-accent/50 rounded-lg border border-accent"
                                >
                                    <motion.div
                                        className="w-3 h-3 bg-primary rounded-full mr-4"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: itemIndex * 0.2
                                        }}
                                    />
                                    <span className="text-foreground font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default Timeline;