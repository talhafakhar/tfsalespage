import Footer from "@/components/Footer/footer";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import SkillSet from "@/components/Services/FractionalCMO/SkillSetSection";
import SuccessSnapshots, {SuccessStory} from "@/components/HomePage/SuccessSnapshotsSection";
import Testimonial from "@/components/HomePage/Testimonials";
import Banner from "@/components/HomePage/bannerSection";
import Difference, {ColumnData} from "@/components/Services/FractionalCMO/DifferenceSection";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import ContactForm from "@/components/Services/FractionalCMO/contactForm";
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
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
const inHouseData: ColumnData = {
    title: "In-House CTO",
    color: "from-red-500 to-red-700",
    icon: Building2,
    canvasType: 'negative',
    features: [
        { text: "$250K+ annual salary plus equity", icon: DollarSign, positive: false },
        { text: "4-8 months hiring and onboarding time", icon: Clock, positive: false },
        { text: "Need to hire entire dev team separately", icon: Target, positive: false },
        { text: "Fixed costs regardless of performance", icon: Users, positive: false },
        { text: "Difficult to replace if not working out", icon: TrendingUp, positive: false },
        { text: "Limited to one person's expertise", icon: Building2, positive: false }
    ]
};
const fractionalData: ColumnData = {
    title: "Fractional CTO",
    color: "from-green-500 to-green-700",
    icon: Zap,
    canvasType: 'positive',
    features: [
        { text: "Pay only for hours worked", icon: DollarSign, positive: true },
        { text: "Start within 1-2 weeks maximum", icon: Clock, positive: true },
        { text: "Complete development team included", icon: Target, positive: true },
        { text: "Performance-based engagement model", icon: Users, positive: true },
        { text: "Easy to adjust or replace team members", icon: TrendingUp, positive: true },
        { text: "Access to diverse technical specialists", icon: Building2, positive: true }
    ]
};
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
    {
        id: 4,
        icon: DollarSign,
        metric: '3+',
        achievement: 'years Product Leadership Without a Full-Time CTO',
        timeline: 'EdTech Startup',
        solution: 'Fractional CTO Engagement',
        details: {
            challenge: 'Non-technical founders struggled with inconsistent product development due to unreliable freelancers and lack of strategic tech leadership.\n',
            approach: ' Deployed a dedicated Fractional CTO and dev team to manage the entire product lifecycle — roadmap, development, releases, QA, and ongoing iteration',
            results: [
                '3+ years of continued engagement',
                'Seamless roadmap execution and delivery',
                ' Zero tech delays or dependency on unreliable freelancers',
                ' Founders shifted full focus to GTM and sales',
            ],
            clientType: 'EdTech Startup',
        },
    },
];
export default function FractionalCTO() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <NextSeo
                title="Fractional CTO Services | TF Business Solution"
                description="Access senior-level technical leadership without the full-time cost. Our Fractional CTO service helps startups and scaleups plan tech strategy, build teams, and launch products."
                canonical="https://tfbusinesssolution.com/services/fractional-cto"
                additionalMetaTags={[
                    { name: 'keywords', content: 'Fractional CTO, Part-Time CTO, CTO as a Service, Technical Strategy, Startup CTO, Technology Leadership, Product Development, Technical Consulting, SaaS CTO' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'article',
                    url: 'https://tfbusinesssolution.com/services/fractional-cto',
                    title: 'Fractional CTO Services | Strategic Technology Leadership',
                    description: 'TF Business Solution provides expert Fractional CTO services to guide startups and growing companies with architecture planning, team building, and digital product launches.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/fractional-cto-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Fractional CTO Service – TF Business Solution',
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
                id="https://tfbusinesssolution.com/services/fractional-cto/#webpage"
                url="https://tfbusinesssolution.com/services/fractional-cto"
                name="Fractional CTO Services | TF Business Solution"
                description="Our Fractional CTO service gives you access to senior tech leadership for technical strategy, architecture planning, and product management — all without hiring full-time."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/services/fractional-cto?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
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
                    src="/assets/services/cto-3d.webp"
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
                <SuccessSnapshots
                    buttonText="Choose Fractional CTO Today"
                    stories={successStories}
                />
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
                    ]}/>
                <Banner
                    title="Ready to Build?"
                    description="Get a complete tech team led by an expert CTO starting next week."
                    buttonText='Start My Product Journey'
                />
                <Difference
                    titleTwo='Hiring an In-House CTO'
                    titleThree='Fractional CTO'
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
                <ContactForm/>
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