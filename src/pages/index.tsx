import HeroSection from "@/components/HomePage/HeroSection";
import Footer from "@/components/Footer/footer";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";
import React from "react";
import PainSection from "@/components/HomePage/PainSection";
import SolutionSection from "@/components/HomePage/SolutionSection";
import PricingSection from "@/components/HomePage/PricingSection";
import SuccessSnapshots from "@/components/HomePage/CaseStudiesSection";
import WhyTFBusiness from "@/components/HomePage/whySection";
import FinalCTA from "@/components/HomePage/FinalCTASection";

export default function Home() {
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
                    {
                        name: 'keywords',
                        content: 'Agency as a Service, AaaS, Fractional CMO, Fractional CTO, Fractional SDR, Sales Automation, Business Consulting, Growth Marketing, B2B Services'
                    },
                    {property: 'dc:creator', content: 'TF Business Solution'},
                    {name: 'author', content: 'TF Business Solution'},
                    {name: 'robots', content: 'index, follow'},
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
                <HeroSection/>
                <PainSection/>
                <SolutionSection/>
                <PricingSection
                    plans={[
                        {
                            title: "Team Training",
                            subtitle: "Boost team skills with structured AI & sales training",
                            price: "$40",
                            billing: "20 hrs minimum (2 members)",
                            features: [
                                { text: "Hands-on team workshops" },
                                { text: "Sales playbook development" },
                                { text: "Role-specific coaching" },
                                { text: "Progress tracking & reporting" },
                            ],
                        },
                        {
                            title: "1:1 Coaching for Founders",
                            badge: "Best value",
                            subtitle: "Personalized coaching to help founders scale smarter",
                            price: "$49",
                            billing: "20 hrs minimum",
                            highlighted: true,
                            features: [
                                { text: "Tailored coaching roadmap" },
                                { text: "Weekly strategy calls" },
                                { text: "Accountability check-ins" },
                                { text: "Access to founder resources" },
                            ],
                        },
                    ]}
                />
                <SuccessSnapshots/>
                <WhyTFBusiness/>
                <FinalCTA/>
                <Footer/>
            </div>
        </>
    );
}
