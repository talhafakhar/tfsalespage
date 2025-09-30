'use client';
import {easeOut, motion} from 'framer-motion';
import React, {useEffect, useRef, useState} from "react";
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease:easeOut,
        },
    }),
};


const HowWeStarted = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isCounterVisible) {
                    setIsCounterVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(counterRef.current);
            }
        };
    }, [isCounterVisible]);

    useEffect(() => {
        if (isCounterVisible) {
            const increment1 = setInterval(() => {
                setCount1(prev => {
                    if (prev >= 30) {
                        clearInterval(increment1);
                        return 30;
                    }
                    return prev + 10;
                });
            }, 20);

            const increment2 = setInterval(() => {
                setCount2(prev => {
                    if (prev >= 97) {
                        clearInterval(increment2);
                        return 97;
                    }
                    return prev + 2;
                });
            }, 30);

            const increment3 = setInterval(() => {
                setCount3(prev => {
                    if (prev >= 5) {
                        clearInterval(increment3);
                        return 5;
                    }
                    return prev + 1;
                });
            }, 500);

            return () => {
                clearInterval(increment1);
                clearInterval(increment2);
                clearInterval(increment3);
            };
        }
    }, [isCounterVisible]);
    return (
        <section className="py-10 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                        How We <span className="text-primary">Started</span>
                    </h2>
                    <p>
                        From firsthand pain to powerful purpose why TF Business Solutions was born.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                    className="bg-white/60 backdrop-blur-xl border border-black rounded-3xl p-10 shadow-xl transition hover:shadow-2xl"
                >
                    <div className="space-y-6  text-lg leading-relaxed">
                        <p>
                            <span className="font-bold">Talha Fakhar</span> spent
                            <span className="text-primary font-semibold"> 8+ years</span> watching brilliant founders struggle with
                            the same issue: visionary startups collapsing due to weak leadership at critical phases.
                        </p>

                        <div className="border-l-4 border-primary bg-primary/10 rounded-md p-6 text-gray-800 italic">
                            “The breaking point? Seeing another promising startup shut down not because the product was bad, but
                            because no one knew it existed.”
                        </div>

                        <p>
                            That’s when we said <span className="text-primary font-semibold">“enough”</span> and built
                            <span className="font-semibold text-primary"> TF Business Solutions</span> a leadership layer startups
                            can trust without breaking the bank.
                        </p>
                    </div>
                </motion.div>
                <div
                    ref={counterRef}
                    className={`transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-1 font-clash">
                                {count1}+
                            </div>
                            <div className="text-sm font-dm-sans">Startups Helped</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-1 font-clash">
                                {count2}%
                            </div>
                            <div className="text-sm font-dm-sans">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-1 font-clash">
                                {count3}x
                            </div>
                            <div className="text-sm font-dm-sans">Faster Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeStarted;
