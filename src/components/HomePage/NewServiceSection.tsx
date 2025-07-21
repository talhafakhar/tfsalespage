import React, { useRef, } from "react";
import {motion, useInView} from "framer-motion";
import { Monitor, PenTool, Users, Rocket, Settings, Bot, Sparkles, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

const services = [
    {
        id: "virtual-cmo",
        title: "Virtual CMO Services",
        icon: <Rocket className="w-12 h-12" />,
        description: `Your marketing lacks strategic direction and consistent lead generation. We build demand-generation strategies, brand positioning, and conversion-focused campaigns that create predictable revenue engines. You get C-level marketing expertise without the full-time cost..`,
        tag: { text: "Popular", icon: <TrendingUp className="w-3 h-3" /> }
    },
    {
        id: "virtual-cto",
        title: "Virtual CTO Services",
        icon: <Monitor className="w-12 h-12" />,
        description: `Your tech infrastructure can't support growth or attract investors. We launch products, scale tech teams, implement AI solutions, and establish robust infrastructure for funding readiness. You get enterprise-level technology leadership at a fraction of the price.
`,
    },
    {
        id: "fractional-sdr",
        title: "Fractional SDR Services",
        icon: <Users className="w-12 h-12" />,
        description: ` Your sales pipeline is inconsistent and your team lacks proven processes. We build high-performing outbound engines from scratch with messaging, prospecting, and automation that keeps your calendar full. You get predictable revenue without hiring expensive sales directors.`,
        tag: { text: "New", icon: <Sparkles className="w-3 h-3" /> }
    },
    {
        id: "sales-consulting",
        title: "Sales Consulting & Team Training",
        icon: <PenTool className="w-12 h-12" />,
        description: ` Your team struggles with modern sales techniques and consistent closing. We train your teams on sales psychology, account-based marketing, and proven closing frameworks. You get immediate performance improvements with lasting results.`,
    },
    {
        id: "sales-automation",
        title: "Sales Automation",
        icon: <Settings className="w-12 h-12" />,
        description: `Manual processes are killing your team's productivity and growth potential. We streamline operations with intelligent workflows, CRM integrations, and AI-powered systems that save 100+ hours monthly. You get efficiency that scales with your business.`,
    },
    {
        id: "agent-as-a-service",
        title: "Agent-as-a-Service (AAS)",
        icon: <Bot className="w-12 h-12" />,
        description: `Customer support and lead qualification are eating your resources. We deploy intelligent AI agents for sales, onboarding, and support that work 24/7. You get scalable operations without expanding headcount.`,
        tag: { text: "AI Powered", icon: <Zap className="w-3 h-3" /> }
    }
];

const ServicesSection: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-300px" });
     return (
        <section ref={sectionRef} className="relative px-4 py-20 bg-secondary overflow-hidden">
            <div className="absolute inset-0 bg-secondary" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        x: isInView ? 0 : -100,
                        opacity: isInView ? 1 : 0
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: isInView ? 0 : 100,
                        opacity: isInView ? 1 : 0
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </div>
            <motion.div
                className="absolute top-5 right-0 pointer-events-none"
                initial={{ opacity: 0, y: 50 }}
                transition={
                    isInView
                        ? {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }
                        : {
                            duration: 0.8,
                        }
                }
                animate={
                    isInView
                        ? {
                            opacity: 1,
                            y: [0, -20, 0],
                        }
                        : {
                            opacity: 1,
                        }
                }
            >
                <Image
                    src="/assets/home/astronot.png"
                    alt="astronot"
                    width={700}
                    height={700}
                />
            </motion.div>
            <motion.div
                className="relative container mx-auto flex z-9999 md:flex-row flex-col justify-center  items-center mb-16 gap-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <motion.div
                        className="flex items-center justify-center space-x-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="text-4xl tracking-widest">
                            <span className="text-[16px] text-white">O U R</span>
                        </div>
                    </motion.div>
                    <motion.h1
                        className="text-6xl font-bold mt-2 font-clash"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="text-white">Services</span>
                    </motion.h1>
                    <motion.div
                        className="w-full h-0.5 bg-white mt-4"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ transformOrigin: "left" }}
                    />
                </div>
            </motion.div>
            <motion.div
                className="relative container z-99999 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="relative border border-white rounded-xl overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-primary"
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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

                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        <div className="relative p-8 h-full flex flex-col justify-between min-h-[280px]">
                            <div>
                                <div className="flex items-center justify-center mb-4">
                                    <motion.div
                                        className="p-4 bg-primary/20 rounded-full relative"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 5
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-primary">{service.icon}</div>
                                    </motion.div>
                                </div>
                                <h3 className="text-2xl font-bold text-white text-center font-manrope mb-3">
                                    {service.title}
                                </h3>
                            </div>

                            <motion.p
                                className="text-white/70 text-sm text-center font-dm-sans leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                {service.description}
                            </motion.p>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection;