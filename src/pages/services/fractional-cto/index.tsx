import Footer from "@/components/Footer/footer";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import SkillSet from "@/components/Services/FractionalCMO/SkillSetSection";
import SuccessSnapshots from "@/components/HomePage/SuccessSnapshotsSection";
import Testimonial from "@/components/HomePage/Testimonials";
import Banner from "@/components/HomePage/bannerSection";
import Difference, {ColumnData} from "@/components/Services/FractionalCMO/DifferenceSection";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import ContactSalesForm from "@/components/Services/FractionalCMO/contactForm";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import HeroSection from "@/components/Services/HeroSection";
import {
    BrainCircuit,
    Briefcase,
    Building2,
    Clock,
    DollarSign,
    MessageCircleHeart,
    Palette,
    Rocket,
    ServerCog,
    ShieldCheck,
    Target,
    ThumbsUp,
    TrendingUp,
    Users,
    Users2,
    Zap
} from "lucide-react";
const inHouseData: ColumnData = {
    title: "In-House CMO",
    color: "from-red-500 to-red-700",
    icon: Building2,
    canvasType: 'negative',
    features: [
        {text: "$200K+ annual salary plus benefits", icon: DollarSign, positive: false},
        {text: "3-6 months hiring and onboarding time", icon: Clock, positive: false},
        {text: "Need to hire entire team separately", icon: Target, positive: false},
        {text: "Fixed costs regardless of performance", icon: Users, positive: false},
        {text: "Difficult to replace if not working out", icon: TrendingUp, positive: false},
        {text: "Limited to one person's expertise", icon: Building2, positive: false}
    ]
};
const fractionalData: ColumnData = {
    title: "Fractional CMO",
    color: "from-green-500 to-green-700",
    icon: Zap,
    canvasType: 'positive',
    features: [
        {text: "Pay only for hours worked", icon: DollarSign, positive: true},
        {text: "Start within 1-2 weeks maximum", icon: Clock, positive: true},
        {text: "Complete team included from day one", icon: Target, positive: true},
        {text: "Performance-based engagement model", icon: Users, positive: true},
        {text: "Easy to adjust or replace team members", icon: TrendingUp, positive: true},
        {text: "Access to diverse expert specialists", icon: Building2, positive: true}
    ]
};
export default function FractionalCTO() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <div>
                <HeroSection
                    title='Smart CTO +'
                    titleTwo="Full-stack team in 2 weeks"
                    description="Skip the costly search. Get a proven CMO + team aligned with your brand, your goals, and your growth targets."
                    buttonText="Get Your CMO Team"
                    stripe="FRACTIONAL CTO"
                />
                <Transform
                    title="Why 80% of Startups"
                    titleTwo="Fail Building Products"
                    description=" Great ideas aren't enough. Most startups fail because they build slowly, over-engineer, or hire wrong talent. Product development requires strategy, architecture, AI integration, team management, and scalable systems. One developer can't handle everything. You need a complete tech team led by an experienced CTO."
                    buttonText="Build My Tech Team"
                />
                <BenefitsSection
                    title="Complete"
                    titleTwo="Tech Department"
                    description="Everything you need to build and scale products"
                    cardContent={[
                        {
                            title: "MVP Development",
                            description: "Launch products fast with lean builds that validate concepts and impress investors.",
                            icon: Rocket,
                            gradient: "from-yellow-400 via-yellow-300 to-white"
                        },
                        {
                            title: "AI Integration",
                            description: "Custom AI agents for sales, support, operations using tailored no-code solutions.",
                            icon: BrainCircuit,
                            gradient: "from-white via-yellow-200 to-yellow-400"
                        },
                        {
                            title: "SaaS Development",
                            description: "End-to-end product development from wireframes to cloud deployment and testing.",
                            icon: ServerCog,
                            gradient: "from-yellow-300 via-white to-yellow-400"
                        },
                        {
                            title: "Team Building",
                            description: "Hire and manage timezone-aligned engineers, PMs, and DevOps with culture fit.",
                            icon: Users2,
                            gradient: "from-yellow-400 via-yellow-200 to-white"
                        },
                        {
                            title: "Strategic Leadership",
                            description: "Support investor calls, sprint planning, and align tech with revenue goals.",
                            icon: Target,
                            gradient: "from-white via-yellow-300 to-yellow-500"
                        },
                        {
                            title: "Compliance Ready",
                            description: "We’ve built HIPAA- and SOC2-ready systems for startups in healthcare, fintech, and edtech.",
                            icon: ShieldCheck,
                            gradient: "from-yellow-500 via-yellow-300 to-white"
                        }
                    ]}
                />
                <SkillSet
                    title='Your'
                    titleTwo='CTO Stack'
                    description='Meet the experts who will transform your product development'
                    mapContent={[
                        {
                            id: 'mvp-poc',
                            title: 'MVP & POC',
                            icon: Briefcase,
                            items: [
                                'Rapid Prototyping',
                                'Market Validation Testing',
                                'Investor-Ready Demos',
                                'Lean Development'
                            ]
                        },
                        {
                            id: 'ai-development',
                            title: 'AI Development',
                            icon: Users,
                            items: [
                                'Custom AI Agents',
                                'No-Code AI Solutions',
                                'Automation Systems',
                                'Machine Learning Integration'
                            ]
                        },
                        {
                            id: 'saas-products',
                            title: 'SaaS Products',
                            icon: ThumbsUp,
                            items: [
                                'Full-Stack Development',
                                'Cloud Architecture',
                                'API Development',
                                'Database Design'
                            ]
                        },
                        {
                            id: 'team-management',
                            title: 'Team Management',
                            icon: Palette,
                            items: [
                                'Developer Hiring',
                                'Project Management',
                                'Code Reviews',
                                'Agile Implementation'
                            ]
                        },
                        {
                            id: 'scalable-systems',
                            title: 'Scalable Systems',
                            icon: TrendingUp,
                            items: [
                                'Performance Optimization',
                                'Security Implementation',
                                'DevOps & CI/CD',
                                'Infrastructure Management'
                            ]
                        },
                        {
                            id: 'compliance-security',
                            title: 'Compliance & Security',
                            icon: MessageCircleHeart,
                            items: [
                                'SOC2 Implementation',
                                'GDPR Compliance',
                                'HIPAA Requirements',
                                'Security Audits'
                            ]
                        }
                    ]}/>
                <SuccessSnapshots/>
                <Testimonial/>
                <Banner
                    title="Ready to Build?"
                    description="Get a complete tech team led by an expert CTO starting next week."
                    buttonText='Start My Product Journey'
                />
                <Difference
                    titleTwo='Hiring an In-House CMO'
                    titleThree='Fractional CMO'
                    description=' Real results from real founders who transformed their businesses with our proven strategies and solutions.'
                    inHouseData={inHouseData}
                    fractionalData={fractionalData}
                />
                <PricingSection
                    description="Our pricing plans are as flexible as our development experts. Let an experienced CTO develop a strategy for your product."
                    plans={[
                        {
                            title: "Startup Launch",
                            subtitle: "Perfect for VC-backed companies building MVP",
                            price: "$3,999",
                            billing: "Paid Monthly",
                            features: [
                                { text: "Fractional CTO (25 hours/month)" },
                                { text: "2 senior developers" },
                                { text: "MVP & POC development" },
                                { text: "Weekly progress reports" },
                                { text: "Direct team communication" },
                                { text: "Pause or cancel anytime" },
                            ],
                        },
                        {
                            title: "Scale & Growth",
                            subtitle: "Complete development team for growing products",
                            price: "$7,999",
                            billing: "Paid Monthly",
                            badge: "Most popular",
                            features: [
                                { text: "Fractional CTO (40 hours/month)" },
                                { text: "4 development specialists" },
                                { text: "Full SaaS product development" },
                                { text: "AI integration capabilities" },
                                { text: "Priority support & communication" },
                                { text: "Pause or cancel anytime" },
                            ],
                        },
                        {
                            title: "Enterprise Innovation",
                            subtitle: "Comprehensive tech solution for established businesses",
                            price: "$9,999",
                            billing: "Paid Monthly",
                            highlighted: true,
                            features: [
                                { text: "Dedicated CTO (50 hours/month)" },
                                { text: "6+ technical specialists" },
                                { text: "Custom architecture planning" },
                                { text: "Compliance-ready development" },
                                { text: "Advanced security & scalability" },
                                { text: "Pause or cancel anytime" },
                            ],
                        },
                    ]}
                />
                <FAQSection
                    faqs = {[
                    {
                        id: 1,
                        question: "How quickly can we start development?",
                        answer: (
                        <p>
                        Your fractional CTO and development team can begin working within 1–2 weeks of signing the agreement.
                        </p>
                        ),
                    },
                    {
                        id: 2,
                        question: "What if we need to pivot our product direction?",
                        answer: (
                        <p>
                        We specialize in agile development and can adapt quickly to new requirements or market feedback.
                        </p>
                        ),
                    },
                    {
                        id: 3,
                        question: "Do you work with specific tech stacks?",
                        answer: (
                        <p>
                        Yes, we have expertise across React, Node.js, Python, AWS, AI/ML frameworks, and modern development tools.
                        </p>
                        ),
                    },
                    {
                        id: 4,
                        question: "How is this different from hiring a development agency?",
                        answer: (
                        <p>
                        Our team works as your employees, not external vendors. You get dedicated focus and direct control over your product.
                        </p>
                        ),
                    },
                    {
                        id: 5,
                        question: "What happens when we're ready to hire an in-house team?",
                        answer: (
                        <p>
                        We provide complete code documentation and can help transition to your internal team seamlessly.
                        </p>
                        ),
                    },
                    ]}
                />
                <ContactSalesForm/>
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
                                        <div
                                            className="bg-sky-500 text-white rounded font-semibold px-3 py-1 h-[2.81rem] mb-[2.81rem]">
                                            Carlos Córdova
                                        </div>
                                        <div
                                            className="bg-primary text-white rounded font-semibold px-3 py-1 h-[2.81rem] mb-[2.81rem]">
                                            Web Developer
                                        </div>
                                        <div
                                            className="bg-red-700 text-white rounded font-semibold px-3 py-1 h-[2.81rem]">
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