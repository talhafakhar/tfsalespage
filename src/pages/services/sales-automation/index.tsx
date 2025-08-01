import Footer from "@/components/Footer/footer";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import WhyChooseUs from "@/components/Services/SalesConsultation/whyChooseSection";
import FinalCTASection from "@/components/Services/SalesConsultation/FinalCTASection";
import Testimonial from "@/components/HomePage/Testimonials";
import IndustriesWeServe from "@/components/Services/SalesConsultation/industrySection";
import {Process} from "@/components/Services/SalesConsultation/ProcessSection";
import HeroSection from "@/components/Services/HeroSection";
import {
    Banknote,
    Brain,
    Briefcase,
    Cloud,
    FileText,
    Home,
    Settings,
    ShoppingCart,
    Stethoscope,
    TrendingUp,
    Workflow
} from "lucide-react";
import ContactForm from "@/components/Services/FractionalCMO/contactForm";
import Banner from "@/components/HomePage/bannerSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import PricingPlanSection from "@/components/Services/SalesConsultation/PricingPlanSection";
import PortfolioSection from "@/components/Services/SalesAutomation/CaseStudiesSextion";
import SeparatorSection from "@/components/Services/SalesAutomation/Separator";
export default function SalesAutomationServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <div>
                <HeroSection
                    title='Sales Automation '
                    titleTwo="That Actually Converts"
                    description="We combine cutting-edge automation technology with proven sales psychology to create sequences that turn prospects into paying customers, not just annoying spam."
                    buttonText="Get on a Discovery Call"
                    buttonTextTwo="Get Free Sales Workflow"
                    stripe="SALES AUTOMATION"
                />
                <WhyChooseUs
                    title="We're Different"
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
                <SeparatorSection/>
                <Process
                    title="Our Process"
                    titleTwo="To Fix Your Sales"
                    description="We don’t just give you a bunch of tools and hope for the best. We build a custom sales system that works for your business."
                    features={[
                        {
                            id: '1',
                            icon: Workflow,
                            title: "Step 1: Sales Flow Audit",
                            description:
                                "We analyze your current sales process, identify conversion bottlenecks, and map out psychological triggers your prospects respond to.",
                            delay: "0ms",
                        },
                        {
                            id: '2',
                            icon: Brain,
                            title: "Step 2: Strategy Design",
                            description:
                                "Custom automation blueprint combining your unique value proposition with proven sales psychology principles for maximum conversion impact.",
                            delay: "100ms",
                        },
                        {
                            id: '3',
                            icon: FileText,
                            title: "Step 3: Sequence Creation",
                            description:
                                "We build your nurturing campaigns, follow-up sequences, and sales funnels using persuasive copywriting and behavioral psychology.",
                            delay: "200ms",
                        },
                        {
                            id: '4',
                            icon: Settings,
                            title: "Step 4: Platform Setup",
                            description:
                                "Complete automation implementation across your CRM, email platform, and sales tools with seamless integration and testing.",
                            delay: "300ms",
                        },
                        {
                            id: '5',
                            icon: TrendingUp,
                            title: "Step 5: Optimize & Scale",
                            description:
                                "Continuous A/B testing, performance monitoring, and optimization to increase conversion rates and revenue over time.",
                            delay: "400ms",
                        },
                    ]}
                />
                <PortfolioSection/>
                <IndustriesWeServe
                    description="We specialize in helping B2B companies across various industries achieve sales success through tailored strategies and proven methods."
                    industries={[
                            {
                            icon: <Cloud className="w-8 h-8 text-white" strokeWidth={2}/>,
                            title: "SaaS & Technology",
                            description: "Helping software and tech companies scale with predictable sales systems.",
                            colorClass: "bg-primary animate-fade-in",
                        },
                            {
                                icon: <ShoppingCart className="w-8 h-8 text-white" strokeWidth={2}/>,
                                title: "E-commerce & Retail",
                                description: "Boosting conversions and automating customer journeys for digital shops.",
                                colorClass: "bg-secondary animate-fade-in",
                            },
                            {
                                icon: <Briefcase className="w-8 h-8 text-white" strokeWidth={2}/>,
                                title: "Professional Services",
                                description: "Empowering consultants, agencies, and service providers to close more deals.",
                                colorClass: "bg-primary animate-fade-in",
                            },
                            {
                                icon: <Stethoscope className="w-8 h-8 text-white" strokeWidth={2}/>,
                                title: "Healthcare & MedTech",
                                description: "Supporting innovative medical companies in educating and converting leads.",
                                colorClass: "bg-secondary animate-fade-in",
                            },
                            {
                                icon: <Home className="w-8 h-8 text-white" strokeWidth={2}/>,
                                title: "Real Estate",
                                description: "Driving qualified leads and systemizing follow-up for real estate professionals.",
                                colorClass: "bg-primary animate-fade-in",
                            },
                            {
                                icon: <Banknote className="w-8 h-8 text-white" strokeWidth={2}/>,
                                title: "Financial Services",
                                description: "Helping finance firms attract, nurture, and convert high-trust leads.",
                                colorClass: "bg-secondary animate-fade-in",
                            }]}
                />
                <Banner
                    title="Smarter Sales, Less Effort"
                    description="Leverage psychology-driven sales automation to consistently convert leads without lifting a finger."
                    buttonText="Automate My Sales Now"
                />
                <PricingPlanSection
                    title="Investment"
                    titleTwo="Options"
                    description="Choose the right plan for your business needs."
                    plans={[
                        {
                            title: "Starter Package",
                            subtitle: "Perfect for small businesses getting started with automation",
                            price: "Based on Need",
                            billing: "",
                            tax: "",
                            features: [
                                {text: "Basic sales workflow audit"},
                                {text: "Advanced multi-channel automation"},
                                {text: "Lead scoring and qualification system"},
                                {text: "A/B testing and optimization"},
                                {text: "90 days of ongoing support"},
                            ],
                        },
                        {
                            title: "Growth Package",
                            subtitle: "Ideal for growing businesses ready to scale",
                            price: "Based on Need",
                            tax: "",
                            billing: "",
                            badge: "Most popular",
                            features: [
                                {text: "Complete sales process analysis"},
                                {text: "Advanced multi-channel automation"},
                                {text: "Lead scoring and qualification system"},
                                {text: "A/B testing and optimization"},
                                {text: "90 days of ongoing support"},
                            ],
                        },
                    ]}
                />
                <FAQSection
                    faqs={[
                        {
                            id: 1,
                            question: "How is your sales automation different from other providers?",
                            answer: (
                                <p>
                                    We focus on sales psychology, not just technology. While others build basic
                                    workflows, we create automation that understands buyer behavior and applies proven
                                    psychological triggers to increase conversions.
                                </p>
                            ),
                        },
                        {
                            id: 2,
                            question: "How long does it take to see results?",
                            answer: (
                                <p>
                                    Most clients see initial improvements within 2-4 weeks of implementation. Full
                                    optimization typically occurs within 60-90 days as we gather data and refine the
                                    sequences.
                                </p>
                            ),
                        },
                        {
                            id: 3,
                            question: "Do you work with businesses in my industry?",
                            answer: (
                                <p>
                                    We work across multiple industries including SaaS, e-commerce, real estate,
                                    agencies, and professional services. Our psychology-based approach adapts to any
                                    business model.
                                </p>
                            ),
                        },
                        {
                            id: 4,
                            question: "What if the automation doesn't work for my business?",
                            answer: (
                                <p>
                                    We work closely with you to ensure success. Our approach includes continuous testing
                                    and optimization. If you&#39;re not satisfied, we&#39;ll revise the strategy until
                                    it works.
                                </p>
                            ),
                        },
                        {
                            id: 5,
                            question: "How much involvement is required from my team?",
                            answer: (
                                <p>
                                    Minimal during setup. We need input on your sales process and buyer personas, then
                                    handle implementation. Your team focuses on following up with qualified leads.
                                </p>
                            ),
                        },
                        {
                            id: 6,
                            question: "Can you integrate with our existing sales process?",
                            answer: (
                                <p>
                                    Absolutely. We audit your current process and enhance it with automation rather than
                                    replacing what already works. Integration is seamless and gradual.
                                </p>
                            ),
                        },
                    ]}
                />
                <Testimonial
                    testimonials={[
                        {
                            id: 1,
                            text: "Their sales psychology approach completely transformed our conversion rates. We went from 2% to 8% email-to-demo conversion in just 3 months",
                            author: "Sarah",
                            role: "CEO",
                            rating: 5,
                            image: "/assets/services/user.png",
                            company: "Digital Marketing Agency"
                        },
                        {
                            id: 2,
                            text: "Finally, automation that doesn't sound robotic! Our customers actually engage with the sequences, and our lifetime value increased by 145%",
                            author: "Fariha",
                            role: "Founder ",
                            rating: 5,
                            image: "/assets/services/user.png",
                            company: "Ecomerce Marketplace"
                        },
                        {
                            id: 3,
                            text: "The ROI was incredible. We generated an additional $280K in revenue within 6 months, and the automation saves us 20+ hours per week.",
                            author: "Richard",
                            role: "CMO",
                            rating: 5,
                            image: "/assets/services/user.png",
                            company: "Real Estate Agency"
                        }
                    ]}
                />
                <ContactForm/>
                <FinalCTASection
                    description="Get your free sales automation audit and discover exactly how to increase your conversion rates."
                    buttonText="Book Your Free Strategy Call"
                    buttonTextTwo="Email Us Your Questions"
                />
                <Footer/>
            </div>
            {show && (<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                    <div
                        className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <div className="border rounded-full bg-white flex-shrink-0">
                                <Image src="/assets/services/user.png" alt="avatar" width={50} height={50}/>
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
                                            className="bg-primary text-white rounded font-semibold px-3 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
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
                            className="bg-black text-white font-button text-nowrap rounded-md px-2 py-1.5 text-xs sm:text-sm mt-2 sm:mt-0">
                            Book a Call
                        </button>
                    </div>
                </div>)}
        </div>
    );
}
