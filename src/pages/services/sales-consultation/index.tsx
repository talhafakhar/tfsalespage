import HeroSection from "@/components/Services/SalesConsultation/HeroSection";
import Footer from "@/components/Footer/footer";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import WhyChooseUs from "@/components/Services/SalesConsultation/whyChooseSection";
import FinalCTASection from "@/components/Services/SalesConsultation/FinalCTASection";
import PricingSection from "@/components/Services/SalesConsultation/PricingPlanSection";
import Testimonial from "@/components/HomePage/Testimonials";
import Banner from "@/components/HomePage/bannerSection";
import ProblemsSolutionSection from "@/components/Services/SalesConsultation/ProblemSolutionSection";
import IndustriesWeServe from "@/components/Services/SalesConsultation/industrySection";
import {Process} from "@/components/Services/SalesConsultation/ProcessSection";
import Services from "@/components/Services/SalesConsultation/ServiceSection";
import SalesToolsSection from "@/components/Services/SalesConsultation/ToolsSection";

export default function SalesConsultationServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div>
                <HeroSection/>
                <WhyChooseUs/>
                <SalesToolsSection/>
                <Process/>
                <Services/>
                <IndustriesWeServe/>
                <ProblemsSolutionSection/>
                <Testimonial/>
                <Banner/>
                <PricingSection/>
                <FAQSection faqs={[
                    {
                        id: 1,
                        question: "How long does it take to see results?",
                        answer: (
                            <p>
                                We&#39;re not selling templates or quick tricks. We build real frameworks that work for your business, fix what&#39;s broken in your current system, optimize your sales channels, and properly train your team. Most founders see improvements within 2-3 weeks because we focus on fixing actual problems, not just giving you scripts to copy.
                            </p>
                        )
                    },
                    {
                        id: 2,
                        question: "Do you work with any specific industries?",
                        answer: (
                            <p>
                                We work with all types of B2B companies - SaaS, agencies, consulting, tech services, and B2B products. Our methods work across industries because sales fundamentals are the same.
                            </p>
                        )
                    },
                    {
                        id: 3,
                        question: "What if my sales team is completely new to selling?",
                        answer: (
                            <p>
                                That&#39;s actually easier to work with! It&#39;s harder to fix bad sales habits than to build good ones from scratch. We&#39;ll start with the basics and build up their skills step by step
                            </p>
                        )
                    },
                    {
                        id: 4,
                        question: "Can you guarantee results?",
                        answer: (
                            <p>
                                We can&#39;t guarantee specific numbers because every business is different. But we can guarantee you&#39;ll understand exactly what&#39;s wrong with your current sales and have a clear plan to fix it
                            </p>
                        )
                    },
                ]}/>
                <FinalCTASection/>
                <Footer/>
            </div>
            {show && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <div className="border rounded-full bg-white flex-shrink-0">
                                <Image src="/assets/services/user.png" alt="avatar" width={50} height={50} />
                            </div>
                            <div className="text-xs">
                                <p className="text-sm font-semibold">Hello 👋 I&apos;m</p>
                                <section className="h-6 sm:h-[24px] rounded overflow-hidden inline-block">
                                    <div className="animate-textLoop">
                                        <div className="bg-sky-500 text-white rounded font-semibold px-3 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Carlos Córdova
                                        </div>
                                        <div className="bg-primary text-white rounded font-semibold px-3 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Web Developer
                                        </div>
                                        <div className="bg-red-700 text-white rounded font-semibold px-3 py-1 h-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Software Engineer
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <button className="bg-black text-white font-button text-nowrap rounded-md px-2 py-1.5 text-xs sm:text-sm mt-2 sm:mt-0">
                            Book a Call
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
}
