import Image from "next/image";
import React, {useEffect, useState} from "react";
import HeroSection from "@/components/Services/HeroSection";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import {
    Building2, Clock, DollarSign,
    BotMessageSquare,
    MessageCircleMore,
    BarChart4,
    Workflow,
    UsersRound,
    Code2,
    Target,
    TrendingUp,
    Users, Zap,
    ServerCog,
    BrainCircuit, MessageCircleHeart, Briefcase
} from "lucide-react";
import SkillSet from "@/components/Services/FractionalCMO/SkillSetSection";
import Testimonial from "@/components/HomePage/Testimonials";
import Banner from "@/components/HomePage/bannerSection";
import Difference, {ColumnData} from "@/components/Services/FractionalCMO/DifferenceSection";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import ContactForm from "@/components/Services/FractionalCMO/contactForm";
import Footer from "@/components/Footer/footer";
import IndustryCaseStudy from "@/components/Services/AaaS/CaseStudiesSection";
import {OurProcess} from "@/components/Services/AaaS/OurProcessSection";
const inHouseData: ColumnData = {
    title: "Hiring Staff",
    color: "from-red-500 to-red-700",
    icon: Building2,
    canvasType: "negative",
    features: [
        { text: "$50K+ annual salary plus benefits", icon: DollarSign, positive: false },
        { text: "2–3 months hiring and training time", icon: Clock, positive: false },
        { text: "Limited to 40 hours per week", icon: Target, positive: false },
        { text: "Prone to human error and inconsistency", icon: Users, positive: false },
        { text: "Requires ongoing management and motivation", icon: TrendingUp, positive: false },
        { text: "Takes vacation, sick days, and breaks", icon: Building2, positive: false },
    ],
};

const fractionalData: ColumnData = {
    title: "Agent as a Service",
    color: "from-green-500 to-green-700",
    icon: Zap,
    canvasType: "positive",
    features: [
        { text: "Fraction of employee cost monthly", icon: DollarSign, positive: true },
        { text: "Deploy within 1–2 weeks maximum", icon: Clock, positive: true },
        { text: "Works 24/7 without breaks or downtime", icon: Target, positive: true },
        { text: "Consistent performance and accuracy", icon: Users, positive: true },
        { text: "Self-managing with continuous optimization", icon: TrendingUp, positive: true },
        { text: "Scales instantly based on demand", icon: Building2, positive: true },
    ],
};

export default function AaaS() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <div>
                <HeroSection
                    title='Build Smarter Scale'
                    titleTwo="Faster AI Agents"
                    description="We build custom AI agents with POC validation that automate your workflows. Start with our AI generalist consultation to identify high-impact automation opportunities for your business."
                    buttonText="Book AI Consultation Call"
                    stripe="AGENT AS A SERVICE"
                />
                <Transform
                    title="Our Proven POC to"
                    titleTwo="Production Process"
                    description="We start with a Proof of Concept to validate your AI agent before full deployment. Our AI generalists analyze your workflows, identify automation opportunities, and build custom agents that integrate seamlessly with your existing tools. Every project includes consultation, demo, integration, and ongoing support."
                    buttonText="Start with Free Consultation"
                />
                <BenefitsSection
                    title="AI Agents Tailored"
                    titleTwo="for Every Business Function"
                    description="Custom agents for different teams and business functions"
                    cardContent = {[
                    {
                        title: "Customer Support",
                        description: "Offer instant responses and resolve issues with smart 24/7 virtual representatives.",
                        icon: BotMessageSquare,
                        gradient: "from-yellow-400 via-yellow-300 to-white"
                    },
                    {
                        title: "Sales Engagement",
                        description: "Engage leads, follow up automatically, and book more meetings — with human-like precision.",
                        icon: MessageCircleMore,
                        gradient: "from-white via-yellow-200 to-yellow-400"
                    },
                    {
                        title: "Data Intelligence",
                        description: "Collect, analyze data from multiple sources to surface trends and actionable insights.",
                        icon: BarChart4,
                        gradient: "from-yellow-300 via-white to-yellow-400"
                    },
                    {
                        title: "Operations Automation",
                        description: "Automate workflows, monitor processes, and reduce manual overhead with smart coordination.",
                        icon: Workflow,
                        gradient: "from-yellow-400 via-yellow-200 to-white"
                    },
                    {
                        title: "Lead Generation",
                        description: "Identify prospects, qualify leads, and nurture relationships through intelligent outreach campaigns.",
                        icon: UsersRound,
                        gradient: "from-white via-yellow-300 to-yellow-500"
                    },
                    {
                        title: "Custom Development",
                        description: "Build bespoke AI agents with custom integrations, APIs, and tailored functionalities.",
                        icon: Code2,
                        gradient: "from-yellow-500 via-yellow-300 to-white"
                    }
                    ]}
                />
                <SkillSet
                    title='AI Agent'
                    titleTwo='Stack'
                    description='Meet the technology tools that power your custom AI automation solutions'
                    mapContent={[
                        {
                            id: 'workflow-automation',
                            title: 'Workflow Automation',
                            icon: Briefcase,
                            items: [
                                'n8n Workflow Builder',
                                'Zapier Integrations',
                                'Custom Logic Systems',
                                'Process Automation',
                            ],
                        },
                        {
                            id: 'database-crm',
                            title: 'Database & CRM',
                            icon: Users,
                            items: [
                                'Airtable Integration',
                                'HubSpot Connectivity',
                                'Salesforce APIs',
                                'Custom Database Solutions',
                            ],
                        },
                        {
                            id: 'communication-tools',
                            title: 'Communication Tools',
                            icon: MessageCircleHeart,
                            items: [
                                'Slack Bot Development',
                                'WhatsApp API Integration',
                                'Email Automation Systems',
                                'SMS Gateway Connections',
                            ],
                        },
                        {
                            id: 'ai-ml',
                            title: 'AI & Machine Learning',
                            icon: BrainCircuit,
                            items: [
                                'OpenAI API Integration',
                                'Claude AI Implementation',
                                'Custom LLM Training',
                                'Natural Language Processing',
                            ],
                        },
                        {
                            id: 'cloud-deployment',
                            title: 'Cloud & Deployment',
                            icon: ServerCog,
                            items: [
                                'AWS Cloud Infrastructure',
                                'Google Cloud Platform',
                                'Azure Services',
                                'Docker Containerization',
                            ],
                        },
                        {
                            id: 'analytics-monitoring',
                            title: 'Analytics & Monitoring',
                            icon: TrendingUp,
                            items: [
                                'Performance Tracking Tools',
                                'Data Analytics Platforms',
                                'Monitoring Dashboards',
                                'ROI Measurement Systems',
                            ],
                        },
                    ]}
                />
                <IndustryCaseStudy/>
                <OurProcess/>
                <Banner
                    title="Ready to Automate?"
                    description="Schedule your AI generalist consultation and get custom automation solutions starting next week."
                    buttonText='Book Free AI Consultation'
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
                    ]}/>
                <Difference
                    titleTwo='Hiring Staff'
                    titleThree='Agent as a Service'
                    description='Real results from real founders who transformed their businesses with our proven AI automation solutions'
                    inHouseData={inHouseData}
                    fractionalData={fractionalData}
                />
                <PricingSection
                    description="Our pricing plans are as flexible as our AI agents. Let intelligent automation handle your repetitive tasks and workflows"
                    plans={[
                        {
                            title: "Starter Automation",
                            subtitle: "Perfect for small teams needing basic AI assistance",
                            price: "$2,999",
                            billing: "Paid Monthly",
                            features: [
                                { text: "AI generalist consultation" },
                                { text: "POC development & validation" },
                                { text: "n8n workflow automation" },
                                { text: "Airtable/CRM integrations" },
                                { text: "Demo and user training" },
                                { text: "30 days follow-up support" },
                            ],
                        },
                        {
                            title: "Growth Accelerator",
                            subtitle: "Complete AI automation for scaling businesses",
                            price: "$5,999",
                            billing: "Paid Monthly",
                            badge: "Most popular",
                            features: [
                                { text: "Multiple AI agents & workflows" },
                                { text: "Custom API development" },
                                { text: "Full-scale system integration" },
                                { text: "Dedicated AI generalist team" },
                                { text: "Daily monitoring & optimization" },
                                { text: "6 months follow-up support" },
                            ],
                        },
                        {
                            title: "Enterprise Intelligence",
                            subtitle: "Comprehensive AI solution for established businesses",
                            price: "$12,999",
                            billing: "Paid Monthly",
                            highlighted: true,
                            features: [
                                { text: "Enterprise-level AI automation" },
                                { text: "Custom API development" },
                                { text: "Full-scale system integration" },
                                { text: "Dedicated AI generalist team" },
                                { text: "Daily monitoring & optimization" },
                                { text: "6 months follow-up support" },
                            ],
                        },
                    ]}
                />
                <FAQSection
                    faqs = {[
                        {
                            id: 1,
                            question: "What happens during the AI generalist consultation?",
                            answer: (
                                <p>
                                    Our AI experts analyze your current workflows, identify automation opportunities, calculate ROI, and create a custom POC strategy for your business.
                                </p>
                            ),
                        },
                        {
                            id: 2,
                            question: "How long does the POC development take?",
                            answer: (
                                <p>
                                    Most POCs are built and validated within 1–2 weeks, allowing you to see results before full deployment.
                                </p>
                            ),
                        },
                        {
                            id: 3,
                            question: "What tools do you use to build AI agents?",
                            answer: (
                                <p>
                                    We primarily use n8n for workflow automation, integrate with tools like Airtable, CRMs, and build custom APIs for complex requirements.
                                </p>
                            ),
                        },
                        {
                            id: 4,
                            question: "Do you provide training for our team?",
                            answer: (
                                <p>
                                    Yes, every project includes demo sessions, user training, and comprehensive documentation for your team.
                                </p>
                            ),
                        },
                        {
                            id: 5,
                            question: "What kind of follow-up support do you offer?",
                            answer: (
                                <p>
                                    All plans include follow-up support ranging from 30 days to 6 months, with performance monitoring and optimization.
                                </p>
                            ),
                        },
                        {
                            id: 6,
                            question: "Can you integrate with our existing software?",
                            answer: (
                                <p>
                                    Yes, we specialize in integrating AI agents with existing tools like Airtable, Slack, CRMs, databases, and custom software via APIs.
                                </p>
                            ),
                        },
                        {
                            id: 7,
                            question: "What if the POC doesn't meet our expectations?",
                            answer: (
                                <p>
                                    We refine the POC based on your feedback until it meets your requirements before moving to full development.
                                </p>
                            ),
                        },
                        {
                            id: 8,
                            question: "How do you ensure data security?",
                            answer: (
                                <p>
                                    All data is encrypted, we follow strict security protocols, and can work within your compliance requirements including SOC2, GDPR, and HIPAA.
                                </p>
                            ),
                        },
                    ]}
                />
                <ContactForm/>
                <Footer/>
            </div>
            {show && (
                <div
                    className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md"
                    style={{zIndex: "99999"}}>
                    <div className="max-w-xl mx-auto flex gap-8 items-center">
                        <div className='flex gap-2 items-center'>
                            <div className="border rounded-full bg-white">
                                <Image src="/assets/services/user.png" alt="avatar" width={50} height={50}/>
                            </div>
                            <div className="text-xs flex items-center gap-1 text-gray-600">
                                <p className="text-base font-semibold">Hello 👋 I&apos;m</p>
                                <section className="h-[24px] rounded overflow-hidden  inline-block">
                                    <div className="animate-textLoop rounded">
                                        <div className="bg-sky-500 text-white rounded font-semibold px-3 py-1 h-[2.81rem] mb-[2.81rem]">
                                            Carlos Córdova
                                        </div>
                                        <div className="bg-primary text-white rounded font-semibold px-3 py-1 h-[2.81rem] mb-[2.81rem]">
                                            Web Developer
                                        </div>
                                        <div className="bg-red-700 text-white rounded font-semibold px-3 py-1 h-[2.81rem]">
                                            Software Engineer
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <button className='bg-black text-white font-button rounded-md p-2 text-xs'>
                            Book a Call
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}