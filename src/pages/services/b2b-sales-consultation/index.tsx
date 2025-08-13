import Footer from "@/components/Footer/footer";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import WhyChooseUs from "@/components/Services/SalesConsultation/whyChooseSection";
import FinalCTASection from "@/components/Services/SalesConsultation/FinalCTASection";
import Testimonial from "@/components/HomePage/Testimonials";
import Banner from "@/components/HomePage/bannerSection";
import ProblemsSolutionSection from "@/components/Services/SalesConsultation/ProblemSolutionSection";
import IndustriesWeServe from "@/components/Services/SalesConsultation/industrySection";
import {Process} from "@/components/Services/SalesConsultation/ProcessSection";
import Services from "@/components/Services/SalesConsultation/ServiceSection";
import SalesToolsSection from "@/components/Services/SalesConsultation/ToolsSection";
import SalesChannelsSection from "@/components/Services/SalesConsultation/SalesChannelsSection";
import {
    Building2, Cpu, ClipboardCheck,
    AlertCircle,
    ClipboardList,
    Users,
    Repeat, Globe, Settings,
    Handshake, Rocket
} from "lucide-react";
import HeroSection from "@/components/Services/HeroSection";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
const industries = [
    {
        title: "Sales 1-on-1 Consultation",
        description:   (
            <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Created entire sales framework and processes from scratch</li>
                <li>Optimized and tested sales channels for maximum efficiency</li>
                <li>Built systems the internal team seamlessly adopted</li>
            </ul>
        ),
        icon:  <Handshake />,
        gradient: "from-yellow-400 via-yellow-300 to-white",
        features:"Perfect for founders who need to learn sales basics",
    },
    {
        title: "Sales Team Training",
        description:   (
            <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Created entire sales framework and processes from scratch</li>
                <li>Optimized and tested sales channels for maximum efficiency</li>
                <li>Built systems the internal team seamlessly adopted</li>
            </ul>
        ),
        icon:  <Users />,
        gradient: "from-yellow-400 via-yellow-300 to-white",
        features: "Fix underperforming sales teams that cost money but don't bring results",
    },
    {
        title: "Sales Mentorship",
        description: (
            <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Created entire sales framework and processes from scratch</li>
                <li>Optimized and tested sales channels for maximum efficiency</li>
                <li>Built systems the internal team seamlessly adopted</li>
            </ul>
        ),
        icon:  <Rocket />,
        gradient: "from-yellow-300 via-white to-yellow-400",
        features: "Ongoing support to keep growing your sales" ,
    },
];

export default function SalesConsultationServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <NextSeo
                title="Sales Consultation & Training – Boost B2B Sales Fast"
                description="Get proven sales systems, 1-on-1 coaching, and team training to increase B2B sales. Book your free sales audit today."
                canonical="https://tfbusinesssolution.com/services/b2b-sales-consultation"
                additionalMetaTags={[
                    { name: 'keywords', content: 'Sales Automation, CRM Automation, Lead Nurturing, Automated Sales Funnel, Outbound Automation, B2B Automation, Email Sequences, Follow-Up Automation, Sales Pipeline Automation' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
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
                                We&#39;re not selling templates or quick tricks. We build real frameworks that work for your business, fix what&#39;s broken in your current system, optimize your sales channels, and properly train your team. Most founders see improvements within 2-3 weeks because we focus on fixing actual problems, not just giving you scripts to copy.
                            </p>
                        ),
                    },
                    {
                        id: 2,
                        question: "Do you work with any specific industries?",
                        answer: (
                            <p>
                                We work with all types of B2B companies - SaaS, agencies, consulting, tech services, and B2B products. Our methods work across industries because sales fundamentals are the same.
                            </p>
                        ),
                    },
                    {
                        id: 3,
                        question: "What if my sales team is completely new to selling?",
                        answer: (
                            <p>
                                That&#39;s actually easier to work with! It&#39;s harder to fix bad sales habits than to build good ones from scratch. We&#39;ll start with the basics and build up their skills step by step.
                            </p>
                        ),
                    },
                    {
                        id: 4,
                        question: "Can you guarantee results?",
                        answer: (
                            <p>
                                We can&#39;t guarantee specific numbers because every business is different. But we can guarantee you&#39;ll understand exactly what&#39;s wrong with your current sales and have a clear plan to fix it.
                            </p>
                        ),
                    },
                    {
                        id: 5,
                        question: "Do you provide ongoing support after training?",
                        answer: (
                            <p>
                                Yes! All our plans include follow-up support. We don&#39;t just train and disappear - we make sure the new system actually works for your business.
                            </p>
                        ),
                    },
                    {
                        id: 6,
                        question: "What if we're already using a CRM or sales tools?",
                        answer: (
                            <p>
                                Great! We work with whatever tools you already have. If needed, we&#39;ll recommend better tools, but we never force you to change everything at once.
                            </p>
                        ),
                    },
                    {
                        id: 7,
                        question: "How is this different from other sales training?",
                        answer: (
                            <p>
                                Most sales training is generic theory. We audit YOUR specific business, find YOUR specific problems, and create solutions that work for YOUR situation. It&#39;s completely customized.
                            </p>
                        ),
                    },
                    {
                        id: 8,
                        question: "Can you help with both inbound and outbound sales?",
                        answer: (
                            <p>
                                Absolutely. We help you build systems for getting leads (outbound) and converting the leads you already get (inbound). Most businesses need both to grow consistently.
                            </p>
                        ),
                    },
                ]}
            />
            <div>
                <HeroSection
                    title='Sales That Actually'
                    titleTwo="Work For Founders"
                    description=" We know building products and services is hard. But selling them shouldn't be. We help B2B founders create sales systems that bring real results."
                    buttonText="Book Free Sales Audit"
                    buttonTextTwo="Email Us The Problem"
                    stripe="SALES CONSULTATION"
                />
                <WhyChooseUs
                    title="We Get It"
                    description="We know what it feels like to be great at your craft but struggle with sales."
                    features={[
                        {
                            number: "01.",
                            title: "We've Been There Too",
                            description: "We understand the struggle of being great at tech but lost with sales.",
                            colorClass: "bg-primary text-black",
                        },
                        {
                            number: "02.",
                            title: "Results You Can Count",
                            description: "Our founders see 40% more sales within 90 days of working with us",
                            colorClass: "bg-black text-white",
                        },
                        {
                            number: "03.",
                            title: "We Find What's Really Wrong",
                            description: "No guessing games - we show you exactly what's not working and why",
                            colorClass: "bg-primary text-black",
                        },
                    ]}
                />
                <SalesChannelsSection/>
                <SalesToolsSection/>
                <Process
                    title="How We Help"
                    titleTwo="You Sell"
                    description="We've helped 90+ tech founders go from confused about sales to confident in closing deals. Here's exactly how we do it."
                    features={[
                        {
                            id: '1',
                            icon: ClipboardCheck,
                            title: "Sales Check-Up",
                            description:
                                "We look at everything - your emails, calls, website, team - and find what's stopping you from making sales.",
                            delay: "0ms",
                        },
                        {
                            id: '2',
                            icon: AlertCircle,
                            title: "Show You What's Wrong",
                            description:
                                "We don't just say \"it's not working.\" We show you exactly why leads aren't buying and where you're losing money.",
                            delay: "100ms",
                        },
                        {
                            id: '3',
                            icon: ClipboardList,
                            title: "Make Your Plan",
                            description:
                                "We create a step-by-step training plan that fits your business, your team, and your specific problems.",
                            delay: "200ms",
                        },
                        {
                            id: '4',
                            icon: Users,
                            title: "Train You to Sell",
                            description:
                                "We work with you personally through 1-on-1 sessions and train your team until everyone knows how to close deals.",
                            delay: "300ms",
                        },
                        {
                            id: '5',
                            icon: Repeat,
                            title: "Make Sure It Works",
                            description:
                                "We don't disappear after training. We stay with you to make sure your new sales system keeps working and growing.",
                            delay: "400ms",
                        },
                    ]}
                />
                <Services industries={industries} />
                <IndustriesWeServe
                    description="We specialize in helping B2B companies across various industries achieve sales success through tailored strategies and proven methods."
                    industries={
                        [{
                            icon: <Building2 className="w-8 h-8" strokeWidth={2}/>,
                            title: "B2B SaaS",
                            description: "Software companies that need steady customer growth",
                            colorClass: "bg-primary animate-fade-in",
                        },
                            {
                                icon: <Globe className="text-primary w-8 h-8" strokeWidth={2}/>,
                                title: "Digital Agencies",
                                description: "Marketing and web agencies wanting better client acquisition",
                                colorClass: "bg-secondary animate-fade-in",
                            },
                            {
                                icon: <Settings className=" w-8 h-8" strokeWidth={2}/>,
                                title: "Tech Services",
                                description: "IT and consulting firms looking to scale their business",
                                colorClass: "bg-primary animate-fade-in",
                            },
                            {
                                icon: <Cpu className="text-primary w-8 h-8" strokeWidth={2}/>,
                                title: "B2B Products",
                                description: "Agentic AI solutions, and micro-niche products needing sales systems",
                                colorClass: "bg-secondary animate-fade-in",
                            }]}
                />
                <ProblemsSolutionSection/>
                <Testimonial
                    testimonials={[
                        {
                            id: 1,
                            text: "I am highly satisfied with your team and services. Grooming others about how to improve their personal and business brand is not an easy task. It requires a lot of planning, proper strategy (which will differ in different businesses) and training. Alhumdulillah Talha is an expert in what he does and I value his time and efforts in bringing up the best in Professionals and Businesses.",
                            author: "Ahsan",
                            role: "CEO",
                            rating: 5,
                            image: "/assets/services/user.webp",
                            company: "Design Agency"
                        },
                        {
                            id: 2,
                            text: "Great work by TF and his team! Thank you for making such impressive progress. Your dedication truly shows.",
                            author: "Wajeeha",
                            role: "Founder ",
                            rating: 5,
                            image: "/assets/services/girl.webp",
                            company: "Software House"
                        },
                        {
                            id: 3,
                            text: "Best investment we made. Our sales team actually knows how to get lead",
                            author: "Thomas",
                            role: "Founder ",
                            rating: 5,
                            image: "/assets/services/user.webp",
                            company: "Fintech Product"
                        }
                    ]}
                />
                <Banner
                    title="Expert Sales Consultation"
                    description="Get personalized guidance to master your sales process and close more deals confidently."
                    buttonText="Book My Consultation"

                />
                <PricingSection
                    description="Choose the service that fits your current needs. Pay only for the hours you use"
                    plans={[
                        {
                            title: "Consultation",
                            subtitle: "Minimum hours requirement: 12 hours For founders and C-Level executives",
                            price: "$49",
                            billing: "",
                            duration: "/h",
                            features: [
                                { text: "Personal sales audit and assessment" },
                                { text: "1-on-1 training sessions" },
                                { text: "Custom sales strategy for your business" },
                                { text: "Sales SOPs" },
                                { text: "Sales channel recommendations" },
                                { text: "5 days of follow-up support" },
                            ],
                        },
                        {
                            title: "Sales Team Training",
                            subtitle: "Minimum hours requirement: 20 hours For companies with underperforming sales teams",
                            price: "$45",
                            billing: "",
                            duration: "/h",
                            badge: "Most popular",
                            features: [
                                { text: "Complete sales team audit" },
                                { text: "Team skills assessment (SWOT analysis)" },
                                { text: "Individual coaching for each member" },
                                { text: "Sales process optimization" },
                                { text: "Custom training modules" },
                                { text: "15 days of implementation support" },
                            ],
                        },
                        {
                            title: "Sales Mentorship",
                            subtitle: "Minimum requirement: 5 hours (focused on one specific problem) Ongoing support for continuous growth",
                            price: "$67",
                            billing: "",
                            duration: "/h",
                            highlighted: true,
                            features: [
                                { text: "Monthly 1-on-1 strategy calls" },
                                { text: "Ongoing sales problem solving" },
                                { text: "Performance review and optimization" },
                                { text: "Access to new sales resources" },
                                { text: "Email and chat support" },
                            ],
                        },
                    ]}
                />
                <FAQSection
                    faqs={[
                        {
                            id: 1,
                            question: "How long does it take to see results?",
                            answer: (
                                <p>
                                    We&#39;re not selling templates or quick tricks. We build real frameworks that work for your business, fix what&#39;s broken in your current system, optimize your sales channels, and properly train your team. Most founders see improvements within 2-3 weeks because we focus on fixing actual problems, not just giving you scripts to copy.
                                </p>
                            ),
                        },
                        {
                            id: 2,
                            question: "Do you work with any specific industries?",
                            answer: (
                                <p>
                                    We work with all types of B2B companies - SaaS, agencies, consulting, tech services, and B2B products. Our methods work across industries because sales fundamentals are the same.
                                </p>
                            ),
                        },
                        {
                            id: 3,
                            question: "What if my sales team is completely new to selling?",
                            answer: (
                                <p>
                                    That&#39;s actually easier to work with! It&#39;s harder to fix bad sales habits than to build good ones from scratch. We&#39;ll start with the basics and build up their skills step by step.
                                </p>
                            ),
                        },
                        {
                            id: 4,
                            question: "Can you guarantee results?",
                            answer: (
                                <p>
                                    We can&#39;t guarantee specific numbers because every business is different. But we can guarantee you&#39;ll understand exactly what&#39;s wrong with your current sales and have a clear plan to fix it.
                                </p>
                            ),
                        },
                        {
                            id: 5,
                            question: "Do you provide ongoing support after training?",
                            answer: (
                                <p>
                                    Yes! All our plans include follow-up support. We don&#39;t just train and disappear - we make sure the new system actually works for your business.
                                </p>
                            ),
                        },
                        {
                            id: 6,
                            question: "What if we're already using a CRM or sales tools?",
                            answer: (
                                <p>
                                    Great! We work with whatever tools you already have. If needed, we&#39;ll recommend better tools, but we never force you to change everything at once.
                                </p>
                            ),
                        },
                        {
                            id: 7,
                            question: "How is this different from other sales training?",
                            answer: (
                                <p>
                                    Most sales training is generic theory. We audit YOUR specific business, find YOUR specific problems, and create solutions that work for YOUR situation. It&#39;s completely customized.
                                </p>
                            ),
                        },
                        {
                            id: 8,
                            question: "Can you help with both inbound and outbound sales?",
                            answer: (
                                <p>
                                    Absolutely. We help you build systems for getting leads (outbound) and converting the leads you already get (inbound). Most businesses need both to grow consistently.
                                </p>
                            ),
                        },
                ]}
                />
                <FinalCTASection
                    description="Book a free 30-minute sales audit call and we'll show you exactly what's wrong with your current sales process."
                    buttonText="Book Free Sales Audit"
                    buttonTextTwo="Email Us Your Questions"
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
    );
}
