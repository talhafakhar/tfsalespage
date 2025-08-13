import HeroSection from "@/components/Services/HeroSection";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import Footer from "@/components/Footer/footer";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import Banner from "@/components/HomePage/bannerSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import SuccessSnapshots, {SuccessStory} from "@/components/HomePage/SuccessSnapshotsSection";
import Testimonial from "@/components/HomePage/Testimonials";
import ContactForm from "@/components/Services/FractionalCMO/contactForm";
import SkillSet from "@/components/Services/FractionalCMO/SkillSetSection";
import Difference, {ColumnData} from "@/components/Services/FractionalCMO/DifferenceSection";
import {
    BadgeCheck,
    BarChart,
    Briefcase,
    Building2, Clock,
    DollarSign,
    FileText,
    Lightbulb,
    Megaphone,
    MessageCircleHeart,
    Palette, Rocket, Target,
    ThumbsUp,
    TrendingUp,
    Users, Zap
} from "lucide-react";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
const inHouseData: ColumnData = {
    title: "In-House CMO",
    color: "from-red-500 to-red-700",
    icon: Building2,
    canvasType: 'negative',
    features: [
        { text: "$200K+ annual salary plus benefits", icon: DollarSign, positive: false },
        { text: "3-6 months hiring and onboarding time", icon: Clock, positive: false },
        { text: "Need to hire entire team separately", icon: Target, positive: false },
        { text: "Fixed costs regardless of performance", icon: Users, positive: false },
        { text: "Difficult to replace if not working out", icon: TrendingUp, positive: false },
        { text: "Limited to one person's expertise", icon: Building2, positive: false }
    ]
};

const fractionalData: ColumnData = {
    title: "Fractional CMO",
    color: "from-green-500 to-green-700",
    icon: Zap,
    canvasType: 'positive',
    features: [
        { text: "Pay only for hours worked", icon: DollarSign, positive: true },
        { text: "Start within 1-2 weeks maximum", icon: Clock, positive: true },
        { text: "Complete team included from day one", icon: Target, positive: true },
        { text: "Performance-based engagement model", icon: Users, positive: true },
        { text: "Easy to adjust or replace team members", icon: TrendingUp, positive: true },
        { text: "Access to diverse expert specialists", icon: Building2, positive: true }
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
];
export default function FractionalCMOServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <NextSeo
                title="Fractional CMO – Full Marketing Team in Days"
                description="Get a seasoned CMO and full team to grow your brand, leads, and revenue—without the cost of hiring full-time staff."
                canonical="https://tfbusinesssolution.com/services/fractional-cmo"
                additionalMetaTags={[
                    { name: 'keywords', content: 'Fractional CMO, Marketing Strategy, Outsourced CMO, Part-Time CMO, Growth Marketing, B2B Marketing, CMO as a Service, Marketing Leadership' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'article',
                    url: 'https://tfbusinesssolution.com/services/fractional-cmo',
                    title: 'Fractional CMO – Full Marketing Team in Days',
                    description: 'Get a seasoned CMO and full team to grow your brand, leads, and revenue—without the cost of hiring full-time staff.',
                    images: [
                        {
                            url: 'https://tfbusinesssolution.com/images/fractional-cmo-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Fractional CMO Service – TF Business Solution',
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
                id="https://tfbusinesssolution.com/services/fractional-cmo/#webpage"
                url="https://tfbusinesssolution.com/services/fractional-cmo"
                name="Fractional CMO – Full Marketing Team in Days"
                description="Get a seasoned CMO and full team to grow your brand, leads, and revenue—without the cost of hiring full-time staff."
                potentialAction={{
                    target: 'https://tfbusinesssolution.com/services/fractional-cmo?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        id: 1,
                        question: " How quickly can we start?",
                        answer: (
                            <p>
                                Your fractional CMO and team can begin working within 1-2 weeks of signing the agreement
                            </p>
                        )
                    },
                    {
                        id: 2,
                        question: "What if we're not satisfied with a team member?",
                        answer: (
                            <p>
                                We can replace any team member within 48 hours at no additional cost.
                            </p>
                        )
                    },
                    {
                        id: 3,
                        question: "Do you work with specific industries?",
                        answer: (
                            <p>
                                Yes, we have experience across SaaS, e-commerce, B2B services, and consumer products.
                            </p>
                        )
                    },
                    {
                        id: 4,
                        question: "How is this different from hiring an agency?",
                        answer: (
                            <p>
                                Our team works as your employees, not external vendors. You get dedicated focus and
                                direct control.
                            </p>
                        )
                    },
                    {
                        id: 5,
                        question: "Can we scale the team up or down?",
                        answer: (
                            <p>
                                Absolutely. You can adjust team size and expertise based on your current needs and
                                budget.
                            </p>
                        )
                    },
                    {
                        id: 6,
                        question: " What happens to our marketing when we're ready to hire in-house?",
                        answer: (
                            <p>
                                We provide complete documentation and can help transition to your internal team
                                seamlessly
                            </p>
                        )
                    },
                ]}
            />
            <div>
                <HeroSection
                    title='Launch a Full Marketing Department'
                    titleTwo="In Days, Not Months"
                    description="Skip the costly search. Get a proven CMO + team aligned with your brand, your goals, and your growth targets."
                    buttonText="Get Your CMO Team"
                    stripe="FRACTIONAL CMO"
                />
                <Transform
                    title="Why 90% of Great Products"
                    titleTwo="Fail Marketing"
                    description="Having a market-fit product isn't enough. Most startups fail because their target audience never discovers them. Marketing requires strategy, execution, design, ads, content, and community building. One person can't master everything. You need a complete team led by an experienced CMO who understands growth."
                    buttonText="Build My Marketing Team"
                    src="/assets/services/3d.webp"
                />
                <BenefitsSection
                    title="Complete"
                    titleTwo="Marketing Department?"
                    description="Everything you need to dominate your market space"
                    cardContent={[
                        {
                            title: "Strategic Planning",
                            description: "Market research, competitor analysis, positioning, and go-to-market strategies that work.",
                            icon: Lightbulb,
                            gradient: "from-yellow-400 via-yellow-300 to-white"
                        },
                        {
                            title: "Brand Building",
                            description: "Logo design, brand guidelines, messaging framework, and visual identity development.",
                            icon: BadgeCheck,
                            gradient: "from-white via-yellow-200 to-yellow-400"
                        },
                        {
                            title: "Digital Marketing",
                            description: "SEO, PPC campaigns, social media management, and performance marketing that converts.",
                            icon: Megaphone,
                            gradient: "from-yellow-300 via-white to-yellow-400"
                        },
                        {
                            title: "Content Creation",
                            description: "Blog posts, video content, email campaigns, and marketing materials that engage audiences.",
                            icon: FileText,
                            gradient: "from-yellow-400 via-yellow-200 to-white"
                        },
                        {
                            title: "Community Growth",
                            description: "Building engaged communities, managing relationships, and creating brand advocates organically.",
                            icon: Users,
                            gradient: "from-white via-yellow-300 to-yellow-500"
                        },
                        {
                            title: "Analytics Reporting",
                            description: "Performance tracking, ROI measurement, and data-driven insights for continuous improvement",
                            icon: BarChart,
                            gradient: "from-yellow-500 via-yellow-300 to-white"
                        }
                    ]}
                />
                <SkillSet
                    title='Your'
                    titleTwo='CMO Stack'
                    description='Meet the experts who will transform your marketing results'
                    mapContent={[
                        {
                            id: 'stack-1',
                            title: 'B2B Marketing',
                            icon: Briefcase,
                            items: [
                                'Lead Generation',
                                'Account-Based Marketing',
                                'Sales Funnel Optimization',
                                'LinkedIn Strategy',
                            ],
                        },
                        {
                            id: 'stack-2',
                            title: 'B2C Marketing',
                            icon: Users,
                            items: [
                                'Customer Journey Mapping',
                                'Retention Campaigns',
                                'Influencer Partnerships',
                                'Brand Storytelling',
                            ],
                        },
                        {
                            id: 'stack-3',
                            title: 'Social Media',
                            icon: MessageCircleHeart,
                            items: [
                                'Content Calendar Management',
                                'Community Engagement',
                                'Viral Campaign Strategy',
                                'Social Listening',
                            ],
                        },
                        {
                            id: 'stack-4',
                            title: 'Design & Creative',
                            icon: Palette,
                            items: [
                                'Brand Identity Design',
                                'Marketing Collateral',
                                'Video Production',
                                'UI/UX Optimization',
                            ],
                        },
                        {
                            id: 'stack-5',
                            title: 'Performance Marketing',
                            icon: TrendingUp,
                            items: [
                                'PPC Campaign Management',
                                'Conversion Rate Optimization',
                                'Analytics & Attribution',
                                'Growth Hacking',
                            ],
                        },
                        {
                            id: 'stack-6',
                            title: 'Stack 6: Community Building',
                            icon: ThumbsUp,
                            items: [
                                'Community Strategy',
                                'User-Generated Content',
                                'Brand Ambassador Programs',
                                'Event Marketing',
                            ],
                        },
                    ]}
                />
                <SuccessSnapshots
                buttonText="Choose Fractional CMO Today"
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
                    title="Ready to Scale"
                    description="Get a complete team led by an expert C-Level Executive starting next week"
                    buttonText='Start My Growth Journey'
                />
                <Difference
                   titleTwo='Hiring an In-House CMO'
                   titleThree='Fractional CMO'
                   description=' Real results from real founders who transformed their businesses with our proven strategies and solutions.'
                   inHouseData={inHouseData}
                   fractionalData={fractionalData}
                />
                <PricingSection
                    description="Choose the plan that matches your growth stage. All plans come with dedicated marketing expertise and flexible terms."
                    plans={[
                        {
                            title: "Startup Growth",
                            subtitle: "Perfect for early-stage companies needing core marketing",
                            price: "$980",
                            billing: "Paid Monthly",
                            features: [
                                { text: "Fractional CMO (20 hours/month)" },
                                { text: "Performance Marketing Specialist" },
                                { text: "Content & Social Media Expert" },
                                { text: "Strategy & execution" },
                                { text: "Monthly performance reports" },
                                { text: "Direct team communication" },
                                { text: "Pause or cancel anytime" },
                            ],
                        },
                        {
                            title: "Scale Up",
                            subtitle: "Complete marketing department for growing companies",
                            price: "$1620",
                            billing: "Paid Monthly",
                            badge: "Most popular",
                            features: [
                                { text: "Fractional CMO (30 hours/month)" },
                                { text: "Performance Marketing Specialist" },
                                { text: "Content & Social Media Expert" },
                                { text: "Brand Design Specialist" },
                                { text: "Analytics & Growth Hacker" },
                                { text: "Full-service marketing execution" },
                                { text: "Weekly strategy sessions" },
                                { text: "Priority support & communication" },
                                { text: "Pause or cancel anytime" },
                            ],
                        },
                        {
                            title: "Enterprise Growth",
                            subtitle: "Comprehensive marketing solution for established businesses",
                            price: "$2680",
                            billing: "Paid Monthly",
                            highlighted: true,
                            features: [
                                { text: "Dedicated CMO (40 hours/month)" },
                                { text: "Performance Marketing Specialist" },
                                { text: "Content & Social Media Expert" },
                                { text: "Brand Design Specialist" },
                                { text: "Analytics & Growth Hacker" },
                                { text: "SEO/SEM Specialist" },
                                { text: "Community & PR Manager" },
                                { text: "Custom strategy development" },
                                { text: "Daily team availability" },
                                { text: "Advanced analytics & reporting" },
                                { text: "Pause or cancel anytime" },
                            ],
                        },
                    ]}
                />
                <FAQSection faqs={[
                    {
                        id: 1,
                        question: " How quickly can we start?",
                        answer: (
                            <p>
                                Your fractional CMO and team can begin working within 1-2 weeks of signing the agreement
                            </p>
                        )
                    },
                    {
                        id: 2,
                        question: "What if we're not satisfied with a team member?",
                        answer: (
                            <p>
                                We can replace any team member within 48 hours at no additional cost.
                            </p>
                        )
                    },
                    {
                        id: 3,
                        question: "Do you work with specific industries?",
                        answer: (
                            <p>
                                Yes, we have experience across SaaS, e-commerce, B2B services, and consumer products.
                            </p>
                        )
                    },
                    {
                        id: 4,
                        question: "How is this different from hiring an agency?",
                        answer: (
                            <p>
                                Our team works as your employees, not external vendors. You get dedicated focus and
                                direct control.
                            </p>
                        )
                    },
                    {
                        id: 5,
                        question: "Can we scale the team up or down?",
                        answer: (
                            <p>
                                Absolutely. You can adjust team size and expertise based on your current needs and
                                budget.
                            </p>
                        )
                    },
                    {
                        id: 6,
                        question: " What happens to our marketing when we're ready to hire in-house?",
                        answer: (
                            <p>
                                We provide complete documentation and can help transition to your internal team
                                seamlessly
                            </p>
                        )
                    },
                ]}/>
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
