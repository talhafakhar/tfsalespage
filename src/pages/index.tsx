import HeroSection from "@/components/HomePage/HeroSection";
import FoundersSection from "@/components/HomePage/BuildForFounderSection";
import SuccessSnapshots, {SuccessStory} from "@/components/HomePage/SuccessSnapshotsSection";
import FinalCTASection from "@/components/HomePage/FinalCTASection";
import Footer from "@/components/Footer/footer";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";
import HeadlineSection from "@/components/HomePage/HeadlineSection";
import NewServicesSection from "@/components/HomePage/NewServiceSection";
import {TimelineFlowLayout} from "@/components/HomePage/FeaturesSection";
import Banner from "@/components/HomePage/bannerSection";
import Testimonial from "@/components/HomePage/Testimonials";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {DollarSign, Rocket, TrendingUp} from "lucide-react";
const successStories: SuccessStory[] = [
    {
        id: 1,
        icon: TrendingUp,
        metric: '300%',
        achievement: 'pipeline growth in 60 days',
        timeline: '60 Days',
        solution: 'Cold Outreach Engine',
        details: {
            challenge: 'Struggling with inconsistent lead generation',
            approach: 'Implemented our proprietary Cold Outreach Engine',
            results: [
                '300% increase in qualified pipeline',
                '65% higher response rates',
                '40% reduction in cost per lead',
                'Automated follow-up sequences',
            ],
            clientType: 'B2B SaaS Startup',
        },
    },
    {
        id: 2,
        icon: Rocket,
        metric: '$15K MRR',
        achievement: 'from MVP in 90 days',
        timeline: '90 Days',
        solution: 'Fractional CTO Support',
        details: {
            challenge: 'Technical founder needed expert guidance',
            approach: 'Provided fractional CTO services',
            results: [
                'MVP to $15K MRR in 90 days',
                'Scalable architecture implemented',
                'Technical team productivity increased 200%',
                'Product-market fit achieved faster',
            ],
            clientType: 'Tech Startup',
        },
    },
    {
        id: 3,
        icon: DollarSign,
        metric: '$200K+',
        achievement: 'saved annually with automation',
        timeline: '12 Months',
        solution: 'Intelligent Sales Automation',
        details: {
            challenge: 'Manual sales processes were consuming too much',
            approach: 'Designed and implemented intelligent sales automation',
            results: [
                'Over $200,000 in annual savings',
                '80% reduction in manual tasks',
                '50% faster sales cycle',
                'Real-time performance insights',
            ],
            clientType: 'Growing Enterprise',
        },
    },
];
export default function Home() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <NextSeo
                title="Fractional Leadership – CMO, CTO & Sales Experts"
                description=" Access C-level marketing, sales, and tech leaders to scale faster, cut costs, and implement proven growth systems."
                canonical="https://tfbusinesssolution.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    { name: 'keywords', content: 'Agency as a Service, AaaS, Fractional CMO, Fractional CTO, Fractional SDR, Sales Automation, Business Consulting, Growth Marketing, B2B Services' },
                    { property: 'dc:creator', content: 'TF Business Solution' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://tfbusinesssolution.com/',
                    title: 'Fractional Leadership – CMO, CTO & Sales Experts',
                    description: 'Access C-level marketing, sales, and tech leaders to scale faster, cut costs, and implement proven growth systems.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution – AaaS and Growth Consulting',
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
            <OrganizationJsonLd
                type="Organization"
                id="https://tfbusinesssolution.com/#organization"
                name="TF Business Solution"
                url="https://tfbusinesssolution.com/"
                logo="https://tfbusinesssolution.com/images/logo.png"
                sameAs={[
                    'https://www.facebook.com/TFBusiness',
                    'https://twitter.com/TFBusiness',
                    'https://www.linkedin.com/company/tfbusinesssolution/',
                ]}
                contactPoints={[
                    {
                        telephone: '+1-234-567-890',
                        contactType: 'Customer Service',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
                address={{
                    streetAddress: '456 Strategy Avenue',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    postalCode: '10001',
                    addressCountry: 'US',
                }}
            />

            <WebPageJsonLd
                id="https://tfbusinesssolution.com/#webpage"
                url="https://tfbusinesssolution.com/"
                name="Fractional Leadership – CMO, CTO & Sales Experts"
                description=" Access C-level marketing, sales, and tech leaders to scale faster, cut costs, and implement proven growth systems."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        id: 1,
                        question: "What is fractional leadership and how does it work?",
                        answer: (
                            <p>
                                Fractional leadership means bringing in experienced C-level executives (CMO, CTO,
                                CSO) on a part-time or project basis. You get senior-level expertise without the
                                cost or commitment of a full-time hire.
                            </p>
                        )
                    },
                    {
                        id: 2,
                        question: "How is this different from hiring a consultant or freelancer?",
                        answer: (
                            <p>
                                We don’t just advise. We work directly with your team, take ownership of KPIs, build
                                systems, and deliver measurable outcomes. Think of us as an embedded executive, not
                                just external help.
                            </p>
                        )
                    },
                    {
                        id: 3,
                        question: "What types of companies do you work with?",
                        answer: (
                            <p>
                                We work with growing agencies, startups, B2B service providers, and digital product
                                companies that want to scale efficiently without hiring full-time leadership.

                            </p>
                        )
                    },
                    {
                        id: 4,
                        question: "How quickly can we get started?",
                        answer: (
                            <p>
                                You can schedule a free discovery call today. Once aligned, we typically start
                                within 3 to 5 business days with a strategic roadmap and onboarding.
                            </p>
                        )
                    },
                ]}
            />
            <div>
                <div>
                    <HeroSection/>
                    <HeadlineSection/>
                    <NewServicesSection/>
                    <TimelineFlowLayout/>
                    <Banner
                        title="Ready to Scale"
                        description=" Get a complete marketing department led by an expert CMO starting next week."
                        buttonText='Start My Growth Journey'
                    />
                    <FoundersSection/>
                    <Testimonial
                        testimonials={[
                            {
                                id: 1,
                                text: "Their sales psychology approach completely transformed our conversion rates. We went from 2% to 8% email-to-demo conversion in just 3 months",
                                author: "Sarah",
                                role: "CEO",
                                rating: 5,
                                image: "/assets/services/girl.webp",
                                company: "Digital Marketing Agency"
                            },
                            {
                                id: 2,
                                text: "Finally, automation that doesn't sound robotic! Our customers actually engage with the sequences, and our lifetime value increased by 145%",
                                author: "Fariha",
                                role: "Founder ",
                                rating: 5,
                                image: "/assets/services/girl.webp",
                                company: "Ecomerce Marketplace"
                            },
                            {
                                id: 3,
                                text: "The ROI was incredible. We generated an additional $280K in revenue within 6 months, and the automation saves us 20+ hours per week.",
                                author: "Richard",
                                role: "CMO",
                                rating: 5,
                                image: "/assets/services/user.webp",
                                company: "Real Estate Agency"
                            }
                        ]}
                    />
                    <SuccessSnapshots
                        buttonText="Choose Fractional CMO Today"
                        stories={successStories}
                    />
                    <FinalCTASection/>
                    <FAQSection
                        faqs={[
                        {
                            id: 1,
                            question: "What is fractional leadership and how does it work?",
                            answer: (
                                <p>
                                    Fractional leadership means bringing in experienced C-level executives (CMO, CTO,
                                    CSO) on a part-time or project basis. You get senior-level expertise without the
                                    cost or commitment of a full-time hire.
                                </p>
                            )
                        },
                        {
                            id: 2,
                            question: "How is this different from hiring a consultant or freelancer?",
                            answer: (
                                <p>
                                    We don’t just advise. We work directly with your team, take ownership of KPIs, build
                                    systems, and deliver measurable outcomes. Think of us as an embedded executive, not
                                    just external help.
                                </p>
                            )
                        },
                        {
                            id: 3,
                            question: "What types of companies do you work with?",
                            answer: (
                                <p>
                                    We work with growing agencies, startups, B2B service providers, and digital product
                                    companies that want to scale efficiently without hiring full-time leadership.

                                </p>
                            )
                        },
                        {
                            id: 4,
                            question: "How quickly can we get started?",
                            answer: (
                                <p>
                                    You can schedule a free discovery call today. Once aligned, we typically start
                                    within 3 to 5 business days with a strategic roadmap and onboarding.
                                </p>
                            )
                        },
                    ]}
                    />
                    <Footer/>
                </div>
                {show && (
                    <div
                        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                        <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                            <div className="flex md:flex-row flex-col items-center gap-3 sm:p-0 p-1">
                                <div className="border rounded-full bg-white flex-shrink-0 md:block hidden">
                                    <Image loading="lazy" src="/assets/services/user.png" alt="avatar" width={50} height={50}/>
                                </div>
                                <div>
                                    <div className="text-xs">
                                        <p className="text-sm font-semibold">Hello 👋 We&apos;re</p>
                                        <section className="h-6 sm:h-[24px] rounded overflow-hidden inline-block">
                                            <div className="animate-textLoop">
                                                <div className="bg-sky-500 text-white rounded text-nowrap font-semibold px-1 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                                    Your Fractional Growth Team
                                                </div>
                                                <div className="bg-primary text-white rounded text-nowrap font-semibold px-1 py-3 h-[2.5rem] mt-2 mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                                    Experts in Sales, Tech & Marketing
                                                </div>
                                                <div className="bg-red-700 text-white rounded text-nowrap font-semibold px-1 py-1 h-[2.5rem] text-[0.75rem] sm:text-xs">
                                                    The Team Behind 14+ Startup Wins
                                                </div>
                                                <div className="bg-red-700 text-white rounded text-nowrap font-semibold px-1 py-1 h-[2.5rem] text-[0.75rem] sm:text-xs">
                                                    Not Your Average Agency
                                                </div>
                                                <div className="bg-red-700 text-white rounded text-nowrap font-semibold px-1 py-1 h-[2.5rem] text-[0.75rem] sm:text-xs">
                                                    Here to Build What You Can’t Hire
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
            </div>
        </>
    );
}
