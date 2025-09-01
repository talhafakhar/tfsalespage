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
import FinalCTASection from "@/components/Services/SalesConsultation/FinalCTASection";
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
        metric: '200%',
        achievement: 'increase in website traffic',
        timeline: '90 Days',
        solution: 'SEO-Optimized Redesign',
        details: {
            challenge: 'Outdated website with poor search visibility',
            approach: 'Redesigned the website with modern UI, SEO best practices, and optimized performance',
            results: [
                '200% increase in organic traffic',
                'Higher Google rankings for core keywords',
                'Bounce rate reduced by 45%',
                'Conversions boosted with improved UX',
            ],
            clientType: 'E-Commerce Brand',
        },
    },
    {
        id: 2,
        icon: Rocket,
        metric: '6 Weeks',
        achievement: 'to launch a new online store',
        timeline: '6 Weeks',
        solution: 'Custom E-Commerce Development',
        details: {
            challenge: 'Needed to quickly move from offline to online sales',
            approach: 'Built a scalable e-commerce site with secure payments and inventory integration',
            results: [
                'Fully functional store launched in 6 weeks',
                'Smooth checkout and mobile-first experience',
                '50% increase in average order value',
                'Easy backend management for products',
            ],
            clientType: 'Retail Business',
        },
    },
    {
        id: 3,
        icon: DollarSign,
        metric: '$120K+',
        achievement: 'saved annually after optimization',
        timeline: '12 Months',
        solution: 'Website Performance Revamp',
        details: {
            challenge: 'Slow, unoptimized site was causing high hosting costs and lost sales',
            approach: 'Refactored codebase, optimized images, and implemented CDN + caching',
            results: [
                'Saved over $120K in infrastructure costs',
                'Page load speed improved by 70%',
                'Improved Core Web Vitals scores',
                'Higher conversion rates with faster UX',
            ],
            clientType: 'Growing SaaS Company',
        },
    },
    {
        id: 4,
        icon: DollarSign,
        metric: '3+ Years',
        achievement: 'ongoing website management & growth',
        timeline: 'Ongoing',
        solution: 'Full-Service Web Development',
        details: {
            challenge: 'Non-technical founders needed long-term support for scaling their website',
            approach: 'Provided continuous development, maintenance, feature updates, and security monitoring',
            results: [
                '3+ years of continuous website growth',
                'Zero downtime with proactive monitoring',
                'New features rolled out seamlessly',
                'Founders focused fully on marketing & sales',
            ],
            clientType: 'EdTech Platform',
        },
    },
];
export default function WebDevelopment() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <NextSeo
                title="Fractional CTO – Build & Scale Products Faster"
                description="Get a product-driven CTO and tech team to launch MVPs, integrate AI, and scale your product without hiring delays."
                canonical="https://tfbusinesssolution.com/services/fractional-cto"
                additionalMetaTags={[
                    { name: 'keywords', content: 'Fractional CTO, Part-Time CTO, CTO as a Service, Technical Strategy, Startup CTO, Technology Leadership, Product Development, Technical Consulting, SaaS CTO' },
                    { name: 'author', content: 'TF Business Solution' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'article',
                    url: 'https://tfbusinesssolution.com/services/fractional-cto',
                    title: 'Fractional CTO – Build & Scale Products Faster',
                    description: ' Get a product-driven CTO and tech team to launch MVPs, integrate AI, and scale your product without hiring delays.',
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
                name="Fractional CTO – Build & Scale Products Faster"
                description=" Get a product-driven CTO and tech team to launch MVPs, integrate AI, and scale your product without hiring delays."
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
                    title='Fast, Reliable'
                    titleTwo="Full-Stack Web Development"
                    description="We build modern, responsive websites with full-stack expertise, delivering high-quality solutions quickly to help your business grow online efficiently."
                    buttonText="Let’s Build Together"
                    stripe="WEB DEVELOPMENT"
                    imageUrl="/assets/services/webDevelopmentBg.webp"
                />
                <Transform
                    title="Web Development"
                    titleTwo="That Scales with You"
                    description="Web development isn’t just putting pages online. It involves strategic planning, intuitive navigation, engaging visuals, reliable integrations, and strong security. Our team delivers modern, responsive, and user-friendly websites designed to showcase your brand and drive results."
                    buttonText="Get My Free Consultation"
                    src="/assets/services/like.webp"
                    width={400}
                />
                <BenefitsSection
                    title="Complete"
                    titleTwo="Web Development"
                    description="Everything you need to design, build, and grow your online presence"
                    cardContent={[
                        {
                            title: "Custom Websites",
                            description: "Responsive, SEO-friendly websites tailored to your brand and business goals.",
                            icon: Rocket,
                            gradient: "from-primary via-yellow-300 to-white"
                        },
                        {
                            title: "E-Commerce Solutions",
                            description: "Scalable online stores with secure payments, inventory management, and smooth UX.",
                            icon: BrainCircuit,
                            gradient: "from-primary via-yellow-300 to-white"
                        },
                        {
                            title: "Web Applications",
                            description: "Interactive web apps built with modern frameworks for speed, scalability, and reliability.",
                            icon: ServerCog,
                            gradient: "from-primary via-yellow-300 to-white"
                        },
                        {
                            title: "CMS Development",
                            description: "Custom or headless CMS setups that make content management effortless and flexible.",
                            icon: Users2,
                            gradient: "from-primary via-yellow-300 to-white"
                        },
                        {
                            title: "Performance Optimization",
                            description: "Faster load times, responsive layouts, and smooth navigation for higher conversions.",
                            icon: Target,
                            gradient: "from-primary via-yellow-300 to-white"
                        },
                        {
                            title: "Security & Compliance",
                            description: "Enterprise-grade protection with SSL, firewalls, backups, and GDPR-ready systems.",
                            icon: ShieldCheck,
                            gradient: "from-primary via-yellow-300 to-white"
                        }
                    ]}
                />

                <SkillSet
                    title="Your"
                    titleTwo="Web Dev Stack"
                    description="The skills and expertise that power high-performing websites and apps"
                    mapContent={[
                        {
                            id: 'custom-websites',
                            title: 'Custom Websites',
                            icon: Briefcase,
                            items: [
                                'Responsive Design',
                                'SEO Optimization',
                                'Cross-Browser Compatibility',
                                'Conversion-Focused Layouts'
                            ]
                        },
                        {
                            id: 'frontend-development',
                            title: 'Frontend Development',
                            icon: Users,
                            items: [
                                'React & Next.js',
                                'Tailwind CSS & Material UI',
                                'Animations & Interactivity',
                                'Accessible Interfaces'
                            ]
                        },
                        {
                            id: 'backend-development',
                            title: 'Backend Development',
                            icon: ThumbsUp,
                            items: [
                                'Node.js & Express',
                                'API Development',
                                'Database Design',
                                'Authentication Systems'
                            ]
                        },
                        {
                            id: 'cms-solutions',
                            title: 'CMS Solutions',
                            icon: Palette,
                            items: [
                                'WordPress & Headless CMS',
                                'Content Workflows',
                                'Custom Plugins',
                                'Scalable Architecture'
                            ]
                        },
                        {
                            id: 'performance-optimization',
                            title: 'Performance Optimization',
                            icon: TrendingUp,
                            items: [
                                'Faster Load Speeds',
                                'Core Web Vitals',
                                'Caching & CDNs',
                                'Mobile-First Strategy'
                            ]
                        },
                        {
                            id: 'security-compliance',
                            title: 'Security & Compliance',
                            icon: MessageCircleHeart,
                            items: [
                                'SSL & HTTPS',
                                'Data Protection',
                                'GDPR Readiness',
                                'Vulnerability Testing'
                            ]
                        }
                    ]}
                />

                <SuccessSnapshots
                    buttonText="Get My Free Web Consultation"
                    stories={successStories}
                />
                <Banner
                    title="Ready to Go Online?"
                    description="Launch a fast, secure, and modern website with our expert web development team."
                    buttonText="Book a Free Strategy Call"
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


                <FAQSection
                    faqs = {[
                        {
                            id: 1,
                            question: "How quickly can my website go live?",
                            answer: (
                                <p>
                                    Most projects start within a week of signing and can launch in as little as 4–6 weeks, depending on scope.
                                </p>
                            ),
                        },
                        {
                            id: 2,
                            question: "Can you redesign my existing website?",
                            answer: (
                                <p>
                                    Absolutely! We specialize in website redesigns — improving design, performance, SEO, and user experience while keeping your brand identity.
                                </p>
                            ),
                        },
                        {
                            id: 3,
                            question: "Will my website be mobile-friendly?",
                            answer: (
                                <p>
                                    Yes — every site we build is fully responsive and optimized for mobile, tablet, and desktop devices.
                                </p>
                            ),
                        },
                        {
                            id: 4,
                            question: "Do you provide ongoing support after launch?",
                            answer: (
                                <p>
                                    Yes, we offer maintenance packages including updates, security monitoring, backups, and feature enhancements to keep your website running smoothly.
                                </p>
                            ),
                        },
                    ]}

                />
                <ContactForm
                 description="Ready to build a high-performing website that drives results? Schedule a free consultation with our web development experts to discuss your project and get a custom quote."
                />
                <FinalCTASection
                    title="Let’s Build a Website"
                    titleTwo="That Grows Your Business"
                    description="Book a free 30-minute web strategy call and discover how we can design, build, and optimize your website for growth."
                    buttonText="Book Free Web Strategy Call"
                    buttonTextTwo="Email Us Your Project"
                />

                <Footer/>
            </div>
            {show && (
                <div
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                        <div className="flex md:flex-row flex-col items-center gap-3 sm:p-0 p-1">
                            <div className="flex-shrink-0 md:block hidden">
                                <Image loading="lazy" src="/assets/services/user.webp" alt="avatar" width={40} height={40}/>
                            </div>
                            <div>
                                <div className="text-xs">
                                    <p className="text-sm font-semibold">Hello 👋 We&apos;re</p>
                                    <section className="h-[2.5rem] overflow-hidden inline-block">
                                        <div className="animate-textLoop flex flex-col gap-2">
                                            <div className="bg-sky-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Your Fractional Growth Team
                                            </div>
                                            <div className="bg-primary text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Experts in Sales, Tech & Marketing
                                            </div>
                                            <div className="bg-red-700 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                The Team Behind 14+ Startup Wins
                                            </div>
                                            <div className="bg-purple-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Not Your Average Agency
                                            </div>
                                            <div className="bg-indigo-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Here to Build What You Can’t Hire
                                            </div>
                                            <div className="bg-green-500 text-white rounded font-semibold px-2 py-1 h-[2rem] flex items-center">
                                                Web Development Experts
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