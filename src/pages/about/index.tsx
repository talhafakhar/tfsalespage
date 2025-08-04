import React, {useEffect, useState} from "react";
import AboutHero from "@/components/AboutPage/HeroSection";
import Footer from "@/components/Footer/footer";
import HowWeStarted from "@/components/AboutPage/HowStartedSection";
import WhatWeActuallyDo from "@/components/AboutPage/WhatWeDoSection";
import MissionVision from "@/components/AboutPage/VisionSection";
import WhyDifferent from "@/components/AboutPage/Not LikeSection";
import AboutDealSection from "@/components/AboutPage/DealSection";
import Image from "next/image";
import {NextSeo, WebPageJsonLd} from "next-seo";

const About: React.FC = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <NextSeo
                title="About Us | TF Business Solution"
                description="Learn about TF Business Solution — a results-driven team offering AaaS, Fractional CMO/CTO/SDR, Sales Automation, and Consulting services to help businesses grow smarter."
                canonical="https://tfbusinesssolution.com/about"
                additionalMetaTags={[
                    { name: 'keywords', content: 'About TF Business Solution, Our Story, Growth Agency, Fractional Team, Business Services, AaaS Company, Leadership Team, Tech and Marketing Agency' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'profile',
                    url: 'https://tfbusinesssolution.com/about',
                    title: 'About TF Business Solution | AaaS, Fractional Leadership & Growth Services',
                    description: 'Meet the team behind TF Business Solution. We’re a specialized group of strategists, marketers, technologists, and SDRs helping companies scale faster with flexible service models.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/about-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution Team – About Us',
                        },
                    ],
                    site_name: 'TF Business Solution',
                }}
                twitter={{
                    handle: '@TFBusiness',
                    site: '@TFBusiness',
                    cardType: 'summary_large_image',
                }}
            />

            <WebPageJsonLd
                id="https://tfbusinesssolution.com/about/#webpage"
                url="https://tfbusinesssolution.com/about"
                name="About Us | TF Business Solution"
                description="TF Business Solution is a growth-focused agency delivering flexible business services including AaaS, Sales Automation, and Fractional Leadership. Meet our team and vision."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/about?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <AboutHero/>
            <HowWeStarted/>
            <WhatWeActuallyDo/>
            <MissionVision/>
            <WhyDifferent/>
            <AboutDealSection/>
            <Footer/>
            {show && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                    <div
                        className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <div className="border rounded-full bg-white flex-shrink-0">
                                <Image src="/assets/services/user.png" loading="lazy" alt="avatar" width={50} height={50}/>
                            </div>
                            <div className="text-xs">
                                <p className="text-sm font-semibold">Hello 👋 I&apos;m</p>
                                <section className="h-6 sm:h-[24px] rounded overflow-hidden inline-block">
                                    <div className="animate-textLoop">
                                        <div
                                            className="bg-sky-500 text-white rounded font-semibold px-3 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Carlos Córdova
                                        </div>
                                        <div
                                            className="bg-primary text-white rounded font-semibold px-3 py-3 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Web Developer
                                        </div>
                                        <div
                                            className="bg-red-700 text-white rounded font-semibold px-3 py-1 h-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Software Engineer
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <button
                            className="bg-black text-white font-button text-nowrap rounded-md px-4 py-2 text-xs sm:text-sm mt-2 sm:mt-0">
                            Book a Call
                        </button>
                    </div>
                </div>
            )}
        </>
    )
        ;
};

export default About;