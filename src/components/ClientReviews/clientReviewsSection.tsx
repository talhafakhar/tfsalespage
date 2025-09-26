import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Header/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {ArrowLeft, ArrowRight} from "lucide-react";
import Image from "next/image";
const testimonials: any[] = [
    {
        id: 1,
        image: "/assets/TF_review_1.png",
    },
    {
        id: 3,
        image: "/assets/Capture.PNG",
    },
    {
        id: 2,
        image: "/assets/Capture_2.PNG",
    },

];
const ClientReviewProof: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    const testimonial = testimonials[index];
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);
    return (
        <div>
            <Navbar/>
            <section className="flex bg-secondary items-center min-h-screen bg-cover bg-center mt-10 md:mt-0" style={{ backgroundImage: "url('/assets/review.webp')" }}>
                <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
                <div className="container mx-auto px-4 py-10 mt-5 md:mt-12 relative">
                    <div className="flex  items-center relative">
                        <div className="w-full md:w-1/2">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1
                                    className="text-5xl md:text-6xl lg:text-7xl max-w-2xl font-righteous font-bold text-white mb-6"
                                >
                                    HEAR DIRECTLY FROM<span className="text-primary"> OUR TALENTED </span> <br/>CLIENTS
                                </h1>

                            </div>
                            <div className={`transform transition-all duration-1000 delay-500 ${
                                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}>
                                <div className="flex  items-center">
                                    <a
                                        href="https://calendly.com/talhafakhar/discoverycall"
                                        target="_blank"
                                        className="relative group  px-6 py-3 bg-primary   font-bold rounded overflow-hidden transition-all duration-700 hover:scale-110 active:scale-95"
                                    >
                                        <span className="relative z-10 flex items-center space-x-2">
        <span className="tracking-wide group-hover:animate-bounce-slight">Ready to book a free call?</span>
        <svg
            className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full md:w-1/2 relative ">
                            <div className="w-full">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={testimonial.id}
                                            className="relative overflow-hidden rounded-lg h-64 group"
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {/* Background blurred image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
                                                style={{ backgroundImage: `url(${testimonial.image})` }}
                                            />

                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-gray-900/40 z-10" />

                                            {/* Foreground image */}
                                            <div className="relative h-full z-20 flex items-center justify-center">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-contain transition-transform duration-700 group-hover:scale-105 rounded-lg"
                                                    priority
                                                />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            <div className="absolute right-0 flex gap-5 items-center -top-20">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                                >
                                    <ArrowLeft />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
                                {testimonials.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                            idx === index ? 'bg-white w-6' : 'bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientReviewProof;