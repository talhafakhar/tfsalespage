"use client";
import { motion } from "framer-motion";
import React, {FC, useEffect, useState} from "react";
import {ArrowDown, ArrowRight} from "lucide-react";


const AboutDealSection: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <section className="bg-white w-full py-16 px-4 md:px-16 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto relative z-20 text-center mb-5"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    <span className="text-yellow-400">Here&#39;s the Deal</span>
                </h2>
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    We&#39;re not trying to be your vendor forever. We&#39;re trying to get you the{" "}
                    <span className="text-yellow-400 font-semibold">leadership you need</span>, train your team, build your systems,
                    and make you <span className="text-black font-semibold">independent</span>.
                </p>
                <p className="mt-6 text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    When you&#39;re ready to hire your own <span className="text-yellow-400 font-semibold">CMO</span> or{" "}
                    <span className="text-yellow-400 font-semibold">CTO</span>, we&#39;ll help you find them and hand everything over{" "}
                    <span className="text-black font-semibold">cleanly</span>.
                </p>
                <p className="mt-6 text-lg md:text-xl font-bold text-black italic">
                    That’s what <span className="text-yellow-400">real partners</span> do.
                </p>
            </motion.div>
            <div className="flex gap-16 items-center justify-center">
                <div className={`transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
                }`}>
                    <motion.span
                        className="flex justify-center mb-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <ArrowDown/>
                    </motion.span>
                </div>
            </div>
            <div className={`text-center mt-10 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
                <p className="text-gray-600 mb-6">Stop losing revenue to leadership gaps. Start scaling with fractional expertise.
                </p>
            </div>
            <div className={`flex flex-col sm:flex-row justify-center mt-5 gap-4 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
                <div className='mx-auto'>
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Schedule Your Free Strategy Session Today
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutDealSection;
