import React, { useRef, } from "react";
import {motion} from "framer-motion";
import { Monitor, PenTool, Users, Rocket, Settings, Bot, Sparkles, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const services = [
    {
        id: "virtual-cmo",
        title: "Virtual CMO",
        icon: <Rocket className="w-12 h-12" />,
        description: `Your marketing lacks strategic direction and consistent lead generation. We build demand-generation strategies, brand positioning, and conversion-focused campaigns that create predictable revenue engines. You get C-level marketing expertise without the full-time cost..`,
        tag: { text: "Popular", icon: <TrendingUp className="w-3 h-3" /> },
        link: "/services/fractional-cmo"
    },
    {
        id: "virtual-cto",
        title: "Virtual CTO",
        icon: <Monitor className="w-12 h-12" />,
        description: `Your tech infrastructure can't support growth or attract investors. We launch products, scale tech teams, implement AI solutions, and establish robust infrastructure for funding readiness. You get enterprise-level technology leadership at a fraction of the price.,
        
`,
        link: "/services/fractional-cto"
    },
    {
        id: "fractional-sdr",
        title: "Fractional SDR",
        icon: <Users className="w-12 h-12" />,
        description: ` Your sales pipeline is inconsistent and your team lacks proven processes. We build high-performing outbound engines from scratch with messaging, prospecting, and automation that keeps your calendar full. You get predictable revenue without hiring expensive sales directors.`,
        tag: { text: "New", icon: <Sparkles className="w-3 h-3" /> },
        link: "/services/fractional-sdr"
    },
    {
        id: "sales-consulting",
        title: "Sales Consulting & Team Training",
        icon: <PenTool className="w-12 h-12" />,
        description: ` Your team struggles with modern sales techniques and consistent closing. We train your teams on sales psychology, account-based marketing, and proven closing frameworks. You get immediate performance improvements with lasting results.`,
        link: "/services/b2b-sales-consultation"
    },
    {
        id: "sales-automation",
        title: "Sales Automation",
        icon: <Settings className="w-12 h-12" />,
        description: `Manual processes are killing your team's productivity and growth potential. We streamline operations with intelligent workflows, CRM integrations, and AI-powered systems that save 100+ hours monthly. You get efficiency that scales with your business.`,
        link: "/services/sales-automation-for-startups"
    },
    {
        id: "agent-as-a-service",
        title: "Agent-as-a-Service (AAS)",
        icon: <Bot className="w-12 h-12" />,
        description: `Customer support and lead qualification are eating your resources. We deploy intelligent AI agents for sales, onboarding, and support that work 24/7. You get scalable operations without expanding headcount.`,
        tag: { text: "AI Powered", icon: <Zap className="w-3 h-3" /> },
        link: "/services/ai-agent-as-a-service"
    }
];

const ServicesSection: React.FC = () => {
    const sectionRef = useRef(null);
     return (
        <section ref={sectionRef} className="relative px-4 py-16 bg-secondary overflow-hidden">
            <div className="absolute inset-0 bg-secondary" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        x:  0 ,
                        opacity: 1
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: 0 ,
                        opacity: 1
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </div>
            <div className="absolute top-20 right-0 pointer-events-none sm:block hidden">
                <Image
                    src="/assets/home/astronot.webp"
                    alt="astronot"
                    width={700}
                    height={700}
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            <motion.div
                className="relative max-w-7xl mx-auto flex z-9999 md:flex-row flex-col justify-center  items-center mb-16 gap-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <motion.div
                        className="text-center mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl  font-bold mb-6 leading-tight  text-white">
                          Our
                            <span className="text-yellow-400">
                            {" "}Services
                        </span>
                        </h2>
                        <p className="text-lg  text-white/70 max-w-3xl mx-auto">
                            We provide a range of services designed to help you scale your business with fractional leadership expertise.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                className="relative max-w-7xl z-99999 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate={"show"}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="relative border border-white rounded-xl overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-primary h-full flex flex-col"
                        whileHover={{
                            scale: 1.03,
                            rotate: 0.5,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 40,
                                rotateX: -15
                            },
                            show: {
                                opacity: 1,
                                y: 0,
                                rotateX: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }
                            }
                        }}
                    >
                        <Link
                            href={service.link}
                            className="absolute inset-0 z-20"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">{service.title}</span>
                        </Link>

                        {service.tag && (
                            <motion.div
                                className="absolute top-4 right-4 z-10"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 500 }}
                            >
                                <div className="flex items-center gap-1 px-3 py-1 bg-primary text-secondary text-xs font-bold rounded-full shadow-lg">
                                    {service.tag.icon}
                                    <span>{service.tag.text}</span>
                                </div>
                            </motion.div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        <div className="relative p-8 flex-1 flex flex-col">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-4 bg-primary/20 rounded-full">
                                    <div className="text-primary">{service.icon}</div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-white text-center mb-3">
                                {service.title}
                            </h3>
                            <p className="text-white/70 text-sm text-center leading-relaxed flex-1">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection;