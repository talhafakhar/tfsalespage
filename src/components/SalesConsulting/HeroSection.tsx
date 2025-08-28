import React, {useEffect, useState} from 'react';
import Navbar from "@/components/Header/Navbar";
import {Smartphone} from "lucide-react";
import InfiniteLogoSlider from "@/components/Common/ClientsSlider";
const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);


    return (
        <div>
            <Navbar/>
            <section className="flex bg-[#54595F] items-center min-h-screen bg-cover bg-center mt-10 md:mt-1" style={{backgroundImage: "url('/assets/home/bg-hero.webp')"}}>
                <div className="container mx-auto px-4 py-10 mt-5 md:mt-16">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                        <div className="text-center ">
                            <div style={{fontWeight: 800}}
                                 className={`transform transition-all font-nunito mb-6  text-5xl  md:text-6xl  lg:text-[80px]  duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-white ">Sell Like Crazy Even If You Are Just A <span
                                    className="text-primary flex justify-center "> Beginner!</span></h1>
                            </div>

                            <div
                                className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-white mb-8 max-w-4xl font-nunito text-[18px]  mx-auto">
                                    Are you a person with a lot of knowledge regarding the technical aspects of your
                                    business but do not know how to market them to your customers to make sales? Do not
                                    worry! What I am about to tell you will make you a sales machine even if you are a
                                    complete beginner.
                                </p>
                            </div>

                            <div
                                className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex  justify-center  items-center mb-4">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                "https://calendly.com/talhafakhar/discoverycall",
                                                "_blank"
                                            )
                                        }
                                        className="relative group overflow-hidden inline-flex items-center px-6 py-3 text-black font-semibold rounded-md bg-white shadow-md"
                                    >
                                        <span className="absolute -left-5 top-0 w-[150px] h-full bg-primary skew-x-[30deg] transition-transform duration-500 ease-in-out group-hover:skew-x-[-30deg]"
                                        />

                                        <span className="relative z-10 flex items-center gap-2">
        <Smartphone className="w-5 h-5" />
        <span className="tracking-wide">Yes Increase My Sales</span>
      </span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <hr/>
            <InfiniteLogoSlider
                title="We Partner With Leading Brands"
            />
        </div>
    );
};

export default HeroSection;