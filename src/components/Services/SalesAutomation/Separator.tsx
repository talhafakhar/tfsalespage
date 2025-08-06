import React, {useEffect, useState} from 'react';
import {
    ArrowRight,
} from 'lucide-react';
const SeparatorSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className={`relative py-10 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <div className="relative overflow-hidden  border py-10 shadow-lg rounded-md">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/services/pattern-bg.webp')" }}/>
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 text-center text-white px-4">
                            <h3 className="text-4xl md:text-5xl text-white italic font-bold  mb-6 leading-tight">
                                We don&#39;t force you to{" "}<span className="text-primary"> change tools.</span>
                            </h3>
                            <p className="text-2xl italic md:text-3xl font-semibold  mb-4">
                                &#34;We make your current stack work better.&#34;
                            </p>
                            <div className='mt-5'>
                                <button
                                    onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                                    className="group inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-secondary font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                                >
                                    Schedule Now
                                    <span
                                        className="ml-3 inline-flex w-7 h-7 rounded-full bg-secondary text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                                    >
    <ArrowRight className="w-4 h-4"/>
  </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SeparatorSection;