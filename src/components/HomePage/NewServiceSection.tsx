import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion, useInView} from 'framer-motion';
import { Monitor, PenTool, Users, Rocket, Settings, Bot} from 'lucide-react';
const services = [
    {
        id: "virtual-cmo",
        title: "Virtual CMO Services",
        icon: <Rocket className="w-8 h-8" />,
        description: `Design and lead your go-to-market strategy confidently. Launch test campaigns, build demand across channels, create SEO-focused content, and set up automation that scales. Craft messaging and a brand story that convert leads into loyal customers.`
    },
    {
        id: "virtual-cto",
        title: "Virtual CTO Services",
        icon: <Monitor className="w-8 h-8" />,
        description: `Transform your product vision into a scalable platform. Build MVPs quickly, manage SaaS development, ensure compliance, and integrate AI features. Get hands-on leadership to guide teams and create investor-ready technology foundations.`
    },
    {
        id: "fractional-sdr",
        title: "Fractional SDR Services",
        icon: <Users className="w-8 h-8" />,
        description: `Fill your sales pipeline with qualified conversations. Launch effective cold outreach, connect on social channels, automate workflows, and build messaging that resonates. Turn outbound sales into a consistent, scalable engine for growth.`
    },
    {
        id: "sales-consulting",
        title: "Sales Consulting & Team Training",
        icon: <PenTool className="w-8 h-8" />,
        description: `Develop a repeatable sales system that drives revenue. Build account-based strategies, optimize cold outreach, train teams on buyer psychology, and implement tools for tracking and scaling your most profitable sales channels.`
    },
    {
        id: "sales-automation",
        title: "Sales Automation",
        icon: <Settings className="w-8 h-8" />,
        description: `Automate your sales workflows to work smarter. Set up AI-powered follow-ups, integrate your CRM and communication tools, and build custom systems that convert leads efficiently while saving time and reducing manual tasks.`
    },
    {
        id: "agent-as-a-service",
        title: "Agent-as-a-Service (AAS)",
        icon: <Bot className="w-8 h-8" />,
        description: `Deploy AI agents that handle sales, support, and operations. Build custom bots that qualify leads, automate onboarding, update CRMs, and deliver fast responses. Seamlessly connect channels to create a smooth, consistent customer experience.`
    }
];

const ServicesSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView =useInView(sectionRef, { margin: "-50% 0px -50% 0px" });
    useEffect(() => {
        if (!isInView) return;

        let timeoutId: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            if (!isInView) return;

            e.preventDefault();
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const isScrollingDown = e.deltaY > 0;
                const isScrollingUp = e.deltaY < 0;

                if (isScrollingDown && currentIndex < services.length - 1) {
                    setCurrentIndex((prev) => prev + 1);
                } else if (isScrollingUp && currentIndex > 0) {
                    setCurrentIndex((prev) => prev - 1);
                } else if (isScrollingDown && currentIndex === services.length - 1) {
                    document.body.style.overflow = "auto";
                    window.scrollBy(0, 100);
                } else if (isScrollingUp && currentIndex === 0) {
                    document.body.style.overflow = "auto";
                    window.scrollBy(0, -100);
                }
            }, 50);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("wheel", handleWheel);
            document.body.style.overflow = "auto";
        };
    }, [isInView, currentIndex]);

    useEffect(() => {
        if (!isInView) {
            document.body.style.overflow = "auto";
        }
    }, [isInView]);

    const getCardTransform = (index: number) => {
        const offset = index - currentIndex;
        const baseRotation = -12;
        const rotationStep = 6;
        const translateStep = 15;

        return {
            rotate: baseRotation + (offset * rotationStep),
            x: offset * translateStep,
            y: offset * translateStep,
            scale: index === currentIndex ? 1 : 1,
            zIndex: services.length - Math.abs(offset)
        };
    };

    const getServiceItemOpacity = (index: number) => {
        return index === currentIndex ? 1 : 0.4;
    };

    return (
        <section
            ref={sectionRef}
            className="relative px-4 pb-32 pt-10 bg-secondary overflow-hidden"
        >
            <div className="max-w-6xl mx-auto flex md:flex-row flex-col  justify-center md:justify-between items-center mb-32 gap-10">
                <div>
                    <div className="flex items-center space-x-4">
                        <div className="text-4xl tracking-widest">
                            <span className="text-sm text-white">O U R</span>
                        </div>
                    </div>
                    <h1 className="text-6xl  font-bold mt-2"><span className="text-primary">Services</span></h1>
                        <div className="w-44 sm:w-16 h-0.5 bg-white mt-4"></div>

                </div>
                <div>
                    <p className=" font-bold text-white text-center leading-relaxed">
                        We Help Founders Go From Idea to Revenue With Fractional Growth Leadership
                    </p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center">
                    <div className="w-full flex md:flex-row flex-col gap-32 justify-center md:justify-between items-center">
                        <div className="flex justify-center">
                            <div className="relative w-80 h-96">
                                <AnimatePresence>
                                    {services.map((service, index) => {
                                        const transform = getCardTransform(index);
                                        const isActive = index === currentIndex;

                                        return (
                                            <motion.div
                                                key={service.id}
                                                className={`absolute inset-0 rounded-3xl p-6 text-white shadow-2xl transition-all duration-300 ${
                                                    !isActive ? 'blur-sm' : ''
                                                }`}
                                                style={{
                                                    background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                                                    border: '3px solid #374151'
                                                }}
                                                initial={{rotate: -12, x: 0, y: 0, scale: 0.95}}
                                                animate={{
                                                    rotate: transform.rotate,
                                                    x: transform.x,
                                                    y: transform.y,
                                                    scale: transform.scale,
                                                    zIndex: transform.zIndex,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 25,
                                                    duration: 0.6
                                                }}
                                            >
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                                                            <div className="bg-primary p-2 rounded-lg text-gray-900">
                                                                {service.icon}
                                                            </div>
                                                        </div>
                                                        <div className="text-3xl font-bold text-gray-500">
                                                            {String(index + 1).padStart(2, '0')}
                                                        </div>
                                                    </div>

                                                    <div className="bg-white/10 p-3 rounded-xl mb-4 backdrop-blur-sm">
                                                        <div className="text-xl font-bold">{service.title}</div>
                                                    </div>

                                                    <div className="flex-1 text-sm leading-relaxed text-gray-300">
                                                        {service.description}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-md">

                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            className="flex items-center space-x-4 cursor-pointer group py-2"
                                            animate={{
                                                opacity: getServiceItemOpacity(index),
                                                x: index === currentIndex ? 16 : 0,
                                            }}
                                            transition={{duration: 0.3}}
                                            whileHover={{x: 8}}
                                        >
                                            <div className={`w-5 h-0.5  transition-all duration-300 ${
                                                index === currentIndex
                                                    ? 'bg-primary scale-125'
                                                    : 'bg-white'
                                            }`}/>
                                            <div className={`text-lg font-medium transition-colors duration-300 ${
                                                index === currentIndex
                                                    ? 'text-white text-xl'
                                                    : 'text-gray-400 '
                                            }`}>
                                                {service.title}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;