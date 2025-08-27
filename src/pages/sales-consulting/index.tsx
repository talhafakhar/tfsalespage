import React from "react";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import HeroSection from "@/components/SalesConsulting/HeroSection";
import ConsultingSection from "@/components/SalesConsulting/WhoSection";
import WhySalesWrong from "@/components/SalesConsulting/WhySection";
import FoundersSection from "@/components/SalesConsulting/FoundersSalesSection";
import StorySection from "@/components/SalesConsulting/StorySection";
import ClientProofSection from "@/components/SalesConsulting/HappyClientSection";
import TakeFirstStepBanner from "@/components/SalesConsulting/Banner";
import SalesStrategySection from "@/components/SalesConsulting/SalesStrategySection";
import SalesIssuesSection from "@/components/SalesConsulting/ SalesIssuesSection";
import HelpSection from "@/components/SalesConsulting/HelpSection";

export default function SalesConsultationServicePage() {
    return (
        <div>
            <NextSeo
                title="Sales Consultation & Training – Boost B2B Sales Fast"
                description="Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today."
                canonical="https://tfbusinesssolution.com/services/b2b-sales-consultation"
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'Sales Automation, CRM Automation, Lead Nurturing, Automated Sales Funnel, Outbound Automation, B2B Automation, Email Sequences, Follow-Up Automation, Sales Pipeline Automation'
                    },
                    {name: 'author', content: 'TF Business Solution'},
                    {name: 'robots', content: 'index, follow'},
                ]}
                openGraph={{
                    type: 'article',
                    url: 'https://tfbusinesssolution.com/services/b2b-sales-consultation',
                    title: 'Sales Consultation & Training – Boost B2B Sales Fast',
                    description: 'Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/b2b-sales-consultation-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Sales Automation Services – TF Business Solution',
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
                id="https://tfbusinesssolution.com/services/b2b-sales-consultation/#webpage"
                url="https://tfbusinesssolution.com/services/b2b-sales-consultation"
                name="Sales Consultation & Training – Boost B2B Sales Fast"
                description='Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today.'
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/services/b2b-sales-consultation?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        id: 1,
                        question: "How long does it take to see results?",
                        answer: (
                            <p>
                                We&#39;re not selling templates or quick tricks. We build real frameworks that work for
                                your business, fix what&#39;s broken in your current system, optimize your sales
                                channels, and properly train your team. Most founders see improvements within 2-3 weeks
                                because we focus on fixing actual problems, not just giving you scripts to copy.
                            </p>
                        ),
                    },
                    {
                        id: 2,
                        question: "Do you work with any specific industries?",
                        answer: (
                            <p>
                                We work with all types of B2B companies - SaaS, agencies, consulting, tech services, and
                                B2B products. Our methods work across industries because sales fundamentals are the
                                same.
                            </p>
                        ),
                    },
                    {
                        id: 3,
                        question: "What if my sales team is completely new to selling?",
                        answer: (
                            <p>
                                That&#39;s actually easier to work with! It&#39;s harder to fix bad sales habits than to
                                build good ones from scratch. We&#39;ll start with the basics and build up their skills
                                step by step.
                            </p>
                        ),
                    },
                    {
                        id: 4,
                        question: "Can you guarantee results?",
                        answer: (
                            <p>
                                We can&#39;t guarantee specific numbers because every business is different. But we can
                                guarantee you&#39;ll understand exactly what&#39;s wrong with your current sales and
                                have a clear plan to fix it.
                            </p>
                        ),
                    },
                    {
                        id: 5,
                        question: "Do you provide ongoing support after training?",
                        answer: (
                            <p>
                                Yes! All our plans include follow-up support. We don&#39;t just train and disappear - we
                                make sure the new system actually works for your business.
                            </p>
                        ),
                    },
                    {
                        id: 6,
                        question: "What if we're already using a CRM or sales tools?",
                        answer: (
                            <p>
                                Great! We work with whatever tools you already have. If needed, we&#39;ll recommend
                                better tools, but we never force you to change everything at once.
                            </p>
                        ),
                    },
                    {
                        id: 7,
                        question: "How is this different from other sales training?",
                        answer: (
                            <p>
                                Most sales training is generic theory. We audit YOUR specific business, find YOUR
                                specific problems, and create solutions that work for YOUR situation. It&#39;s
                                completely customized.
                            </p>
                        ),
                    },
                    {
                        id: 8,
                        question: "Can you help with both inbound and outbound sales?",
                        answer: (
                            <p>
                                Absolutely. We help you build systems for getting leads (outbound) and converting the
                                leads you already get (inbound). Most businesses need both to grow consistently.
                            </p>
                        ),
                    },
                ]}
            />
            <HeroSection/>
            <ConsultingSection/>
            <WhySalesWrong/>
            <FoundersSection/>
            <StorySection/>
            <ClientProofSection/>
            <TakeFirstStepBanner/>
            <SalesStrategySection/>
            <SalesIssuesSection/>
            <HelpSection/>


        </div>
    );
}
