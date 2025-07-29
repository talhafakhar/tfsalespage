import React, { useState, useEffect } from 'react';
import {
    ArrowDown,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
const FinalCTASection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <section className="bg-white py-20 px-4 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl relative mx-auto">
                <div className="flex gap-16 items-center justify-center">
                    <div className={`transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
                    }`}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary leading-tight mb-6">Ready To Fix {' '}<span className="text-primary">Your Sales?</span></h2>
                        <p className=" mb-4 text-center leading-relaxed">Book a free 30-minute sales audit call and we&#39;ll show you exactly what&#39;s wrong with your current sales process</p>
                        <motion.span
                            className="flex justify-center mb-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ><ArrowDown/></motion.span>
                    </div>

                </div>
                <div className={`flex flex-col sm:flex-row justify-center mt-5 gap-4 transition-all duration-1000 delay-800 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>

                        <button
                            className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                        >
                            Book Free Sales Audit
                            <span
                                className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                            >
    <ArrowRight className="w-4 h-4" />
  </span>
                        </button>
                    <button
                        className="px-6 py-2.5 rounded-full border-2 border-primary font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Send Us a Message

                    </button>

                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;