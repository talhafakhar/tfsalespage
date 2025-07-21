import React, { useState, useEffect } from 'react';
import {
    ArrowDown,
    ArrowRight, BarChart3, LineChart,
    PiggyBank,
    Puzzle,
    Rocket, ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Benefit {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    text: string;
    delay: string;
}

const FinalCTASection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits: Benefit[] = [
        { icon: PiggyBank, text: "60% Cost Savings", delay: "200ms" },
        { icon: Rocket, text: "Immediate Impact", delay: "400ms" },
        { icon: LineChart, text: "Proven Systems", delay: "600ms" },
        { icon: ShieldCheck, text: "Zero Risk", delay: "800ms" },
        { icon: Puzzle, text: "Complete Integration", delay: "1000ms" },
        { icon: BarChart3, text: "Scalable Results", delay: "1000ms" }
    ];
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">Ready to Scale Without the{' '}<span className="text-primary">
                Executive Overhead?
                </span></h2>
                        <p className="text-gray-600 mb-4 text-center leading-relaxed">Why Choose Fractional Leadership</p>
                        <motion.span
                            className="flex justify-center mb-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ><ArrowDown/></motion.span>
                        <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-3 mb-8">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-3 p-3 rounded-xl bg-white border border-primary transition-all duration-300 hover:shadow-md  translate-y-4`}
                                        style={{ transitionDelay: benefit.delay }}
                                    >
                                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
                                            <IconComponent size={16} className="text-black"/>
                                        </div>
                                        <span className="text-md font-semibold text-secondary">{benefit.text}</span>
                                    </div>
                                );
                            })}
                        </div>
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
            </div>
        </section>
    );
};

export default FinalCTASection;