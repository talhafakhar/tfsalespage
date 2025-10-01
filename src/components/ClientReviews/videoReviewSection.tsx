import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
export default function TestimonialSlider() {
    const stories = [
        {
            name: "Wasim",
            company: "MEPLANET+",
            video: "/assets/home/testimonial_TF.mp4",
        },
        {
            name: "Abdullah",
            company: "Serve&Co",
            video: "/assets/home/TF_business_solutions.mp4",
        },
        {
            name: "Aisha Patel",
            company: "HealthConnect",
            video: "/assets/testimonial_1.mp4",
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4  relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Success <span className="text-primary">Stories</span>
                    </h2>
                    <p className="text-gray-600">Real entrepreneurs, real results</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl border"
                        >
                            <div className="relative mb-4">
                                <video
                                    src={story.video}
                                    className="w-full h-48 object-cover rounded-lg"
                                    controls
                                    preload="metadata"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                            <p className="text-primary ">{story.company}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="https://calendly.com/talhafakhar/discoverycall"
                        target='_blank'
                        className="group inline-flex items-center px-2 md:px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                       Get Started Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
