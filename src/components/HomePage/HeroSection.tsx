import React, {useEffect ,useState} from 'react';
import Navbar from "@/components/Header/Navbar";
import Image from "next/image";
const partnerNames: string[] = [
    "B2B SaaS Companies",
    "AI Startups",
    "HealthTech Innovators",
    "FinTech Leaders",
    "Online Marketplaces",
    "Tech-Enabled Services"
];

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
  

    return (
        <div>
            <Navbar/>
            <section className="bg-secondary flex items-center">
                <div className="container mx-auto px-4 pb-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
                        <div className="text-center md:text-start">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-5xl sm:text-6xl   font-bold text-white mb-6 leading-tight">
                                    Build, Scale, and <span className="text-primary flex justify-center lg:justify-start">
                    Automate
                  </span> Your Startup.
                                </h1>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-gray-300 mb-8 max-w-xl">
                                    <span className="text-primary font-semibold">Fractional CMO, CTO, and SDR services</span> tailored
                                    for founders who want
                                    <span className="text-white font-medium"> senior-level execution</span> without
                                    full-time costs or burnout.
                                </p>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start items-center mb-4">
                                    <button className="group text-sm  p-2 bg-primary text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                        <span className="relative z-10 flex items-center space-x-2">
                    <span className="tracking-wide">Get Growth Advice</span>
                    <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </span>
                                    </button>
                                    <button className="group  p-2 border bg-white/20 text-sm border-primary text-primary hover:text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-500 transform hover:scale-105">
                                        <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <span>See How We Scale Startups</span>
                  </span>
                                    </button>
                                </div>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}><div className="text-center  justify-center flex gap-2 mb-4">
                                    <h3 className="text-lg font-medium  text-white tracking-wide">
                                        We Partner With
                                    </h3>
                                    <Image src="/assets/svg/downArrow.svg" alt="arrow" className='mt-3' width={24} height={24}/>
                                </div><div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                    {partnerNames.map((name, index) => (
                                        <div
                                            key={name}
                                            className={`
              group relative
              bg-gray-800/40 
              border border-white
              rounded
              px-2 py-1
              text-center
              transition-all duration-500 ease-out
              cursor-default
              backdrop-blur-sm
              transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
                                            style={{
                                                transitionDelay: `${400 + (index * 100)}ms`
                                            }}
                                        >
                                            <span className="text-sm  font-medium text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
              {name}
            </span>
                                        </div>
                                    ))}
                                </div></div>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;