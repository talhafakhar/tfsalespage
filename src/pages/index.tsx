import HeroSection from "@/components/HomePage/HeroSection";
import FoundersSection from "@/components/HomePage/BuildForFounderSection";
import SuccessSnapshots from "@/components/HomePage/SuccessSnapshotsSection";
import FinalCTASection from "@/components/HomePage/FinalCTASection";
import Footer from "@/components/Footer/footer";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";
import HeadlineSection from "@/components/HomePage/HeadlineSection";
import NewServicesSection from "@/components/HomePage/NewServiceSection";
import {TimelineFlowLayout} from "@/components/HomePage/FeaturesSection";
import Banner from "@/components/HomePage/bannerSection";
import Testimonial from "@/components/HomePage/Testimonials";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import React from "react";
export default function Home() {
    return (
        <>
            <NextSeo
                title="TF Business Solution – Fractional Leadership & Sales Automation Services"
                description="TF Business Solution offers AaaS, Fractional CMO/CTO/SDR services, Sales Automation, and Consultation solutions to help businesses scale smarter."
                canonical="https://tfbusinesssolution.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    { name: 'keywords', content: 'Fractional CMO, CTO, SDR, AAS, Sales Automation, Business Consulting' },
                    { property: 'dc:creator', content: 'TF Business Solution' },
                ]}
                openGraph={{
                    url: 'https://tfbusinesssolution.com/',
                    title: 'TF Business Solution – Fractional & Sales Automation Services',
                    description: 'Explore TF Business Solution’s expert services: AaaS, Fractional CMO/CTO/SDR, Sales Automation, and Consultation for modern businesses.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'TF Business Solution Landing Page',
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
                id="https://tfbusinesssolution.com/"
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
                url="https://tfbusinesssolution.com/"
                name="TF Business Solution"
                description="TF Business Solution offers expert AaaS, fractional leadership (CMO, CTO, SDR), and automation/consulting services to help companies grow efficiently."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/',
                    queryInput: 'required name=search_term_string',
                }}
                id="https://tfbusinesssolution.com/"
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'What services does TF Business Solution provide?',
                        acceptedAnswerText: 'We provide AaaS, Fractional CMO/CTO/SDR, Sales Automation, and Business Consultation services.',
                    },
                    {
                        questionName: 'Who can benefit from TF Business Solution services?',
                        acceptedAnswerText: 'Startups, SMBs, and growing enterprises looking to scale operations and leadership capabilities cost-effectively.',
                    },
                ]}
            />
            <HeroSection/>
            <HeadlineSection/>
            <NewServicesSection/>
            <TimelineFlowLayout/>
            <Banner/>
            <FoundersSection/>
            <Testimonial/>
            <SuccessSnapshots/>
            <FinalCTASection/>
            <FAQSection
                faqs={[
                    {
                        id: 1,
                        question: "What is fractional leadership and how does it work?",
                        answer: (
                            <p>
                                Fractional leadership means bringing in experienced C-level executives (CMO, CTO, CSO) on a part-time or project basis. You get senior-level expertise without the cost or commitment of a full-time hire.
                            </p>
                        )
                    },
                    {
                        id: 2,
                        question: "How is this different from hiring a consultant or freelancer?",
                        answer: (
                            <p>
                                We don’t just advise. We work directly with your team, take ownership of KPIs, build systems, and deliver measurable outcomes. Think of us as an embedded executive, not just external help.
                            </p>
                        )
                    },
                    {
                        id: 3,
                        question: "What types of companies do you work with?",
                        answer: (
                            <p>
                                We work with growing agencies, startups, B2B service providers, and digital product companies that want to scale efficiently without hiring full-time leadership.

                            </p>
                        )
                    },
                    {
                        id: 4,
                        question: "How quickly can we get started?",
                        answer: (
                            <p>
                                You can schedule a free discovery call today. Once aligned, we typically start within 3 to 5 business days with a strategic roadmap and onboarding.
                            </p>
                        )
                    },
                    {
                        id: 5,
                        question: " What’s included in the Discovery Call?",
                        answer: (
                            <p>
                                We’ll discuss your goals, challenges, and current gaps across sales, marketing, and tech. You’ll receive insights on where fractional leadership can create immediate impact.

                            </p>
                        )
                    },
                    {
                        id: 6,
                        question: "Do you offer one-time projects or ongoing support?",
                        answer: (
                            <p>
                                Both. We offer monthly or quarterly engagements depending on your needs. There are no long-term commitments, only results-focused support.

                            </p>
                        )
                    },
                    {
                        id: 7,
                        question: "Can you train our existing team while leading the strategy?",
                        answer: (
                            <p>
                                Yes. We specialize in execution and enablement. Your team learns our systems and frameworks while we drive the strategy and implementation.
                            </p>
                        )
                    }
                ]}
            />
            <Footer/>
        </>
    );
}
