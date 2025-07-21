import React, { useState, useEffect, useRef } from 'react';
import { Target, Globe, BarChart3, Users, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import {motion, useInView} from "framer-motion";
import Image from "next/image";

interface SubService {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    color: string;
}

const CMOSubServicesSection: React.FC = () => {
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(sectionRef, { once: true, margin: "-300px" });
    const subServices: SubService[] = [
        {
            id: 'strategy',
            title: 'Marketing Strategy Development',
            description: 'Comprehensive strategic planning to align your marketing efforts with business objectives and market opportunities.',
            icon: <Target className="w-12 h-12" />,
            features: ['Market Analysis', 'Competitive Intelligence', 'Brand Positioning', 'Go-to-Market Strategy'],
            color: 'from-yellow-400 to-yellow-600'
        },
        {
            id: 'digital',
            title: 'Digital Marketing Leadership',
            description: 'End-to-end digital marketing management including SEO, PPC, social media, and content marketing strategies.',
            icon: <Globe className="w-12 h-12" />,
            features: ['SEO & SEM', 'Social Media Strategy', 'Content Marketing', 'Email Campaigns'],
            color: 'from-white to-gray-300'
        },
        {
            id: 'analytics',
            title: 'Marketing Analytics & ROI',
            description: 'Data-driven insights and performance tracking to optimize marketing spend and maximize return on investment.',
            icon: <BarChart3 className="w-12 h-12" />,
            features: ['Performance Tracking', 'ROI Analysis', 'Customer Insights', 'Conversion Optimization'],
            color: 'from-yellow-300 to-yellow-500'
        },
        {
            id: 'team',
            title: 'Team Building & Leadership',
            description: 'Building and leading high-performing marketing teams with the right skills and strategic direction.',
            icon: <Users className="w-12 h-12" />,
            features: ['Team Development', 'Process Optimization', 'Vendor Management', 'Training Programs'],
            color: 'from-gray-100 to-white'
        },
        {
            id: 'growth',
            title: 'Growth Marketing',
            description: 'Scalable growth strategies focusing on customer acquisition, retention, and lifetime value optimization.',
            icon: <TrendingUp className="w-12 h-12" />,
            features: ['Customer Acquisition', 'Retention Strategies', 'Funnel Optimization', 'A/B Testing'],
            color: 'from-yellow-400 to-yellow-200'
        },
        {
            id: 'automation',
            title: 'Marketing Automation',
            description: 'Implementing and optimizing marketing automation systems to streamline processes and improve efficiency.',
            icon: <Zap className="w-12 h-12" />,
            features: ['Workflow Automation', 'Lead Nurturing', 'CRM Integration', 'Performance Monitoring'],
            color: 'from-white to-yellow-100'
        }
    ];
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        setVisibleItems(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = entry.isIntersecting;
                            return newVisible;
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative px-4 py-10 bg-secondary overflow-hidden">
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
                            opacity: 10,
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
            <div className="container mx-auto px-4 relative z-10">
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
                                <span className="text-[16px] text-white">CMO</span>
                            </div>
                        </motion.div>
                        <motion.h1
                            className="text-6xl font-bold mt-2 font-clash"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <span className="text-white">Benefits</span>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {subServices.map((service, index) => (
                        <div
                            key={service.id}
                            ref={el => { itemRefs.current[index] = el; }}

                            className={`relative group transition-all duration-1000 ${
                                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className={`
                relative h-full p-8 rounded-3xl border border-white/10 
                transition-all duration-700 ease-out
                ${hoveredService === service.id
                                ? 'bg-gradient-to-br from-yellow-400/20 to-white/10 border-yellow-400/50 transform scale-105 shadow-2xl'
                                : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
                            }
              `}>
                                {/* Icon */}
                                <div className={`
                  relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} 
                  flex items-center justify-center text-black mb-6
                  transition-all duration-700 ease-out
                  ${hoveredService === service.id ? 'scale-110 rotate-6 shadow-lg' : 'scale-100 rotate-0'}
                `}>
                                    <div className={`
                    transition-all duration-500
                    ${hoveredService === service.id ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
                  `}>
                                        {service.icon}
                                    </div>

                                    {/* Animated Ring */}
                                    <div className={`
                    absolute inset-0 rounded-2xl border-2 border-white/30
                    transition-all duration-700
                    ${hoveredService === service.id ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}
                  `} />
                                </div>

                                {/* Content */}
                                <div className={`
                  transition-all duration-500
                  ${hoveredService === service.id ? 'transform translate-y-[-4px]' : 'transform translate-y-0'}
                `}>
                                    <h3 className={`
                    text-xl md:text-2xl font-bold mb-4
                    transition-all duration-300
                    ${hoveredService === service.id ? 'text-yellow-400' : 'text-white'}
                  `}>
                                        {service.title}
                                    </h3>

                                    <p className={`
                    text-gray-300 mb-6 leading-relaxed
                    transition-all duration-300
                    ${hoveredService === service.id ? 'text-white' : 'text-gray-300'}
                  `}>
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className={`
                          flex items-center space-x-3 p-2 rounded-lg
                          transition-all duration-300
                          ${hoveredService === service.id ? 'bg-white/10 transform translate-x-2' : 'bg-transparent'}
                        `}
                                                style={{ transitionDelay: `${idx * 0.1}s` }}
                                            >
                                                <div className={`
                          w-2 h-2 rounded-full transition-all duration-300
                          ${hoveredService === service.id ? 'bg-yellow-400 scale-150' : 'bg-white/50'}
                        `} />
                                                <span className={`
                          text-sm font-medium transition-colors duration-300
                          ${hoveredService === service.id ? 'text-yellow-400' : 'text-gray-400'}
                        `}>
                          {feature}
                        </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Call to Action */}
                                    <div className={`
                    inline-flex items-center space-x-2 text-base font-semibold
                    transition-all duration-300 cursor-pointer
                    ${hoveredService === service.id ? 'text-yellow-400 translate-x-2' : 'text-white'}
                  `}>
                                        <span>Learn More</span>
                                        <ArrowRight className={`
                      w-4 h-4 transition-all duration-300
                      ${hoveredService === service.id ? 'translate-x-2' : 'translate-x-0'}
                    `} />
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-transparent
                  transition-all duration-700
                  ${hoveredService === service.id ? 'opacity-100' : 'opacity-0'}
                `} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
      `}</style>
        </section>
    );
};

export default CMOSubServicesSection;