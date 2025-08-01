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
import HeroSection from "@/components/Services/HeroSection";
import {Building2,  Target,
    ShieldCheck,
    MailSearch,
    SendHorizonal,
    Repeat, Cpu, Globe,Settings} from "lucide-react";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import SeparatorSection from "@/components/Services/SalesAutomation/Separator";
const industries = [
    {
        icon: <Building2 className="w-8 h-8" strokeWidth={2} />,
        title: "SaaS Startup",
        description: (
            <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Optimized LinkedIn authority and messaging framework</li>
                <li>Built complete multi-channel outreach system</li>
                <li>Created documented processes for internal SDR team</li>
            </ul>
        ),
        colorClass: "bg-primary animate-fade-in",
    },
    {
        icon: <Globe className="text-primary w-8 h-8" strokeWidth={2} />,
        title: "Marketing Agency",
        description: (
            <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Developed and tested proven sales sequences</li>
                <li>Optimized multi-channel outreach process across platforms</li>
                <li>Built scalable lead generation framework</li>
            </ul>
        ),
        colorClass: "bg-secondary animate-fade-in",
    },
    {
        icon: <Settings className="w-8 h-8" strokeWidth={2} />,
        title: "B2B Services",
        description: (
            <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Created entire sales framework and processes from scratch</li>
                <li>Optimized and tested sales channels for maximum efficiency</li>
                <li>Built systems the internal team seamlessly adopted</li>
            </ul>
        ),
        colorClass: "bg-primary animate-fade-in",
    },
];
export default function FractionalSDRServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div>
                <HeroSection
                    title='Stop Burning Budget'
                    titleTwo="on Failed Sales Hires"
                    description="Get expert fractional SDRs who build your sales machine, create automated outreach systems, and develop scalable lead generation frameworks for your business."
                    buttonText="Book Strategy Call"
                    buttonTextTwo=" Get a Custom ProposaL"
                    stripe="FRACNTIONAL SDR"
                />
                <WhyChooseUs
                    title="Fractional SDRs Win"
                    description="We know what it feels like to be great at your craft but struggle with sales."
                    features={[
                        {
                            number: "01.",
                            title: "Ready Day One",
                            description: "No hiring delays, training costs, or onboarding time",
                            colorClass: "bg-primary text-black",
                        },
                        {
                            number: "02.",
                            title: "Complete Sales Infrastructure",
                            description: "Psychology, processes, B2B channels, email warmups, data, LinkedIn authority, and frameworks included",
                            colorClass: "bg-black text-white",
                        },
                        {
                            number: "03.",
                            title: "Seamless Handoff",
                            description: "Your internal team gets documented processes and proven systems",
                            colorClass: "bg-primary text-black",
                        },
                        {
                            number: "04.",
                            title: "Multi-Channel Expertise",
                            description: "LinkedIn, email, Twitter outreach across all platforms",
                            colorClass: "bg-black text-white",
                        },
                        {
                            number: "05.",
                            title: "Full Transparency",
                            description: "Work through your existing tools (Slack, Trello, ClickUp)",
                            colorClass: "bg-primary text-black",
                        },
                    ]}/>
                <SeparatorSection/>
                <Process
                    title="Our Proven"
                    titleTwo="Sales Process"
                    description="We don't just generate leads – we build your entire sales infrastructure while creating sustainable growth systems your team can scale."
                    features={[
                        {
                            id: "1",
                            icon: Target,
                            title: "Step 1: ICP Research",
                            description:
                                "Our Research Executive extracts qualified leads and conducts deep market analysis according to your Ideal Customer Profile, ensuring every prospect matches your criteria.",
                            delay: "0ms",
                        },
                        {
                            id: "2",
                            icon: ShieldCheck,
                            title: "Step 2: Authority Building",
                            description:
                                "We develop psychology-driven messaging, optimize B2B channels, set up email warmups and data systems, and build your LinkedIn/Twitter authority to position you as the industry leader.",
                            delay: "100ms",
                        },
                        {
                            id: "3",
                            icon: MailSearch,
                            title: "Step 3: Campaign Creation",
                            description:
                                "Our SDR develops personalized sequences and A/B tests messaging across channels, ensuring maximum engagement and response rates from your target audience.",
                            delay: "200ms",
                        },
                        {
                            id: "4",
                            icon: SendHorizonal,
                            title: "Step 4: Multi-Channel Execution",
                            description:
                                "Expert SDRs execute campaigns across LinkedIn, email, and social platforms while our Account Executive handles high-value ABM outreach to key prospects.",
                            delay: "300ms",
                        },
                        {
                            id: "5",
                            icon: Repeat,
                            title: "Step 5: Seamless Transition",
                            description:
                                "We document all processes, train your internal team, and ensure smooth handoff so your sales operations continue without missing a beat.",
                            delay: "400ms",
                        },
                    ]}
                />
                <Services industries={industries} />
                <IndustriesWeServe
                    description="We specialize in helping B2B companies across various industries achieve sales success through tailored strategies and proven methods."
                    industries={
                        [
                            {
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
                            }
                            ]
                }
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
                            image: "/assets/services/user.png",
                            company: "Design Agency"
                        },
                        {
                            id: 2,
                            text: "Great work by TF and his team! Thank you for making such impressive progress. Your dedication truly shows.",
                            author: "Wajeeha",
                            role: "Founder ",
                            rating: 5,
                            image: "/assets/services/user.png",
                            company: "Software House"
                        },
                        {
                            id: 3,
                            text: "Best investment we made. Our sales team actually knows how to get lead",
                            author: "Thomas",
                            role: "Founder ",
                            rating: 5,
                            image: "/assets/services/user.png",
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
