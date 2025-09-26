import { motion } from "framer-motion";
export default function TestimonialSlider() {
    const stories = [
        {
            name: "Sarah Chen",
            company: "TechFlow",
            video: "/assets/testimonial_1.mp4",
        },
        {
            name: "Marcus Rodriguez",
            company: "GreenTech Solutions",
            video: "/assets/testimonial_1.mp4",
        },
        {
            name: "Aisha Patel",
            company: "HealthConnect",
            video: "/assets/testimonial_1.mp4",
        },
    ];
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            className="bg-white/5 p-6 rounded-xl border"
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
                            <p className="text-primary mb-3">{story.company}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
