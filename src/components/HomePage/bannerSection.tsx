import React from "react";
import {ArrowRight} from "lucide-react";

const Banner = () => {
    return (
        <div className='py-10 container mx-auto px-2'>
            <section className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-[300px] md:min-h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/home/banner.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20"/>

                <div className="relative z-10 w-full p-8 md:p-16">
                    <h1 className="text-2xl md:text-4xl font-bold mb-6">
                        Let’s Talk Growth
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-8">
                        Quick Virtual Check-In to align your goals, uncover gaps, and plan your next move.
                    </p>
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Schedule Now
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>

                </div>
            </section>
        </div>
    );
};

export default Banner;
