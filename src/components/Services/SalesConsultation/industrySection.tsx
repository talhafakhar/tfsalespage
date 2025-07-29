import {easeIn, motion, useInView} from "framer-motion";
import {Building2, Cpu, Globe, Settings} from "lucide-react";
import React, {useRef} from "react";
import Image from "next/image";
const IndustriesWeServe = () => {
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, { once: true, margin: "-300px" });

    const industries = [
        {
            icon: <Building2 className="w-8 h-8" strokeWidth={2}/>,
            title: "B2B SaaS",
            description: "Software companies that need steady customer growth",
            colorClass: "bg-primary animate-fade-in",
        },
        {
            icon: <Globe className="text-primary w-8 h-8" strokeWidth={2}/>,
            title: "Digital Agencies",
            description: "Marketing and web agencies wanting better client acquisition",
            colorClass: "bg-secondary animate-fade-in",
        },
        {
            icon: <Settings className=" w-8 h-8" strokeWidth={2}/>,
            title: "Tech Services",
            description: "IT and consulting firms looking to scale their business",
            colorClass: "bg-primary animate-fade-in",
        },
        {
            icon: <Cpu className="text-primary w-8 h-8" strokeWidth={2}/>,
            title: "B2B Products",
            description: "Agentic AI solutions, and micro-niche products needing sales systems",
            colorClass: "bg-secondary animate-fade-in",
        },
    ];
    const fadeInUp = {
        hidden: {opacity: 0, y: 40},
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: easeIn,
            },
        }),
    };

    return (
        <section ref={sectionRef} className="py-10 px-4  relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-bold  mb-6 relative">
                        Industries <span className='text-primary'> We Serve</span>
                    </h2>
                    <p>
                        We specialize in helping B2B companies across various industries achieve sales success through tailored strategies and proven methods.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-between  items-center gap-1'>
                    <div className="space-y-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once: true}}
                                custom={index}
                                className="group flex items-start border border-gray-200 p-4 rounded-2xl space-x-6 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className={`flex-shrink-0 p-4 rounded-full ${industry.colorClass} shadow-md`}>
                                    {industry.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                                    <p className="text-gray-600 mt-1">{industry.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                        <motion.div
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
                            src="/assets/services/cool-astronot.webp"
                            alt=''
                            width='700'
                            height='700'
                        />
                        </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-2 text-card-black/60">
                        <div className="w-8 h-0.5 bg-primary"></div>
                        <span className="text-sm font-medium">Ready to grow your business?</span>
                        <div className="w-8 h-0.5 bg-primary"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;