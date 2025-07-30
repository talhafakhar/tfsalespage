import HeroSection from "@/components/Services/HeroSection";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import Footer from "@/components/Footer/footer";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import Banner from "@/components/HomePage/bannerSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import SuccessSnapshots from "@/components/HomePage/SuccessSnapshotsSection";
import Testimonial from "@/components/HomePage/Testimonials";
import ContactSalesForm from "@/components/Services/FractionalCMO/contactForm";
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
    Palette, Target,
    ThumbsUp,
    TrendingUp,
    Users, Zap
} from "lucide-react";
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
export default function FractionalCMOServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
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
                            title: 'Stack 1: B2B Marketing',
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
                            title: 'Stack 2: B2C Marketing',
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
                            title: 'Stack 3: Social Media',
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
                            title: 'Stack 4: Design & Creative',
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
                            title: 'Stack 5: Performance Marketing',
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
                <SuccessSnapshots/>
                <Testimonial/>
                <Banner
                    title="Ready to Scale"
                    description=" Get a complete marketing department led by an expert CMO starting next week."
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
                            price: "$980 +tax/mo",
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
                            price: "$1620 +tax/mo",
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
                            price: "$2680 +tax/mo",
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
                <ContactSalesForm/>
                <Footer/>
            </div>
            {show && (
                <div
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
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
                            className="bg-black text-white font-button text-nowrap rounded-md px-4 py-2 text-xs sm:text-sm mt-2 sm:mt-0">
                            Book a Call
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
