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
                <div
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                        <div className="flex md:flex-row flex-col items-center gap-3 sm:p-0 p-1">
                            <div className="flex-shrink-0 md:block hidden">                                <Image loading="lazy" src="/assets/services/user.webp" alt="avatar" width={40} height={40}/>
                            </div>
                            <div>
                                <div className="text-xs">
                                    <p className="text-sm font-semibold">Hello 👋 We&apos;re</p>
                                    <section className="h-[2.5rem] overflow-hidden inline-block">
                                        <div className="animate-textLoop flex flex-col gap-2">
                                            <div className="bg-sky-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Your Fractional Growth Team
                                            </div>
                                            <div className="bg-primary text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Experts in Sales, Tech & Marketing
                                            </div>
                                            <div className="bg-red-700 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                The Team Behind 14+ Startup Wins
                                            </div>
                                            <div className="bg-purple-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Not Your Average Agency
                                            </div>
                                            <div className="bg-indigo-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Here to Build What You Can’t Hire
                                            </div>
                                            <div className="bg-green-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Web Development Experts
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                                        className="bg-secondary text-white font-button text-nowrap rounded-md px-2 py-1 text-xs sm:text-sm mt-2 sm:mt-0">
                                        Book a Call
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )}
        </>
    )
        ;
};

export default About;