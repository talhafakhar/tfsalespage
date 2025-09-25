"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, TrendingUp, Users } from "lucide-react";
function CountUpCard({
                         icon: Icon,
                         value,
                         suffix,
                         title,
                         desc,
                         delay,
                     }: {
    icon: React.ElementType;
    value: number;
    suffix?: string;
    title: string;
    desc: string;
    delay: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(counter);
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 transition-colors duration-300"
        >
            <Icon className="text-primary mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-white mb-2">
                {count}
                {suffix} {title}
            </h3>
            <p className="text-gray-300">{desc}</p>
        </motion.div>
    );
}

const CommunitySection = () => {
    const stats = [
        { icon: Users, value: 10000, suffix: "+", title: "Members", desc: "Active entrepreneurs worldwide" },
        { icon: TrendingUp, value: 500, suffix: "+", title: "Startups", desc: "Successfully launched" },
        { icon: Award, value: 50, suffix: "+", title: "Mentors", desc: "Industry experts available" },
        { icon: ExternalLink, value: 100, suffix: "+", title: "Events", desc: "Networking opportunities" },
    ];

    return (
        <section className="bg-secondary py-20" id="community">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="text-primary">Community</span>
                    </h2>
                    <p className="text-gray-300">
                        Join thousands of entrepreneurs, innovators, and industry leaders who are building the future together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <CountUpCard key={item.title} {...item} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
