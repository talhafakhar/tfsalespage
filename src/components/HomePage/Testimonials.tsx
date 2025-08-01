import React, {useCallback, useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Quote, Star} from 'lucide-react';
import Image from 'next/image';
type TestimonialContent = {
    id: number;
    text: string;
    author: string;
    role: string;
    rating: number;
    image: string;
    company: string;
}
type Testimonial = {
    testimonials: TestimonialContent[]
}
const Testimonial:React.FC<Testimonial> = ({testimonials}) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, testimonials.length]);
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [handleNext]);
    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };
    const goToTestimonial = (index: number) => {
        if (isAnimating || index === currentTestimonial) return;
        setIsAnimating(true);
        setCurrentTestimonial(index);
        setTimeout(() => setIsAnimating(false), 500);
    };
    const currentTest = testimonials[currentTestimonial];

    return (
        <section className="relative bg-white py-10 px-4">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className=" relative max-w-7xl mx-auto px-6 z-10">
                <h2 className="text-5xl text-center font-bold  mb-8 leading-tight">
                    What Our{' '}<span className="text-primary">Clients Say</span>
                </h2>
                <p className="text-center text-lg mb-12">
                    Hear from our satisfied clients about their experiences with our services.
                </p>
                <div className="relative mx-auto max-w-4xl">
                    <div className="border border-secondary rounded-3xl p-8 md:p-12  shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-5 left-8 z-10">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                                <Quote size={28}/>
                            </div>
                        </div>
                        <button
                            onClick={handlePrev}
                            disabled={isAnimating}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary/10  rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                        >
                            <ChevronLeft size={20} className=""/>
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={isAnimating}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary/10  rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                        >
                            <ChevronRight size={20} className=""/>
                        </button>

                        <div className="relative z-10 pt-2">
                            <div
                                className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    {[...Array(currentTest.rating)].map((_, i) => (
                                        <Star key={i} size={24} className="text-yellow-400 fill-yellow-400"/>
                                    ))}
                                </div>
                                <blockquote
                                    className="text-2xl  leading-relaxed max-w-2xl mx-auto text-center mb-2 italic font-light">
                                    &#34;{currentTest.text}&#34;
                                </blockquote>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <div className="relative">
                                        <div
                                            className="w-20 h-20 rounded-full relative overflow-hidden border-4 shadow-2xl border-transparent bg-primary">
                                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                                <Image
                                                    src={currentTest.image}
                                                    alt={currentTest.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-xl font-bold  mb-1">{currentTest.author}</h3>
                                        <p className="text-gray-600 text-sm mb-1">{currentTest.role}</p>
                                        <p className="text-gray-600 text-sm">{currentTest.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                disabled={isAnimating}
                                className={`relative group transition-all duration-500 ${
                                    index === currentTestimonial ? 'w-12' : 'w-4'
                                } h-4 rounded-full overflow-hidden`}
                            >
                                <div className={`w-full h-full transition-all duration-500 ${
                                    index === currentTestimonial
                                        ? 'bg-primary'
                                        : 'bg-secondary/20 '
                                } rounded-full`}></div>

                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;