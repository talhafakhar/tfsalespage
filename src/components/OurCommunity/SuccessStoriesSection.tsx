import { motion } from "framer-motion";

const SuccessStoriesSection = () => {
    const stories = [
        {
            name: "Wasim",
            company: "MEPLANET+",
            story: "Totally recommend to boost your business.",
            video: "/assets/home/testimonial_TF.mp4",
        },
        {
            name: "Abdullah",
            company: "Serve&Co",
            story: "Talha Help me solve my sales problems.",
            video: "/assets/home/TF_business_solutions.mp4",
        },
        {
            name: "Aisha Patel",
            company: "HealthConnect",
            story: "Connecting patients with healthcare providers globally",
            video: "/assets/testimonial_1.mp4",
        },
    ];

    return (
        <section className="bg-black py-20" id="success-stories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Success <span className="text-primary">Stories</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Real entrepreneurs, real results
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 rounded-xl border border-primary/30"
                        >
                            <div className="relative mb-4">
                                {/* Video instead of Image */}
                                <video
                                    src={story.video}
                                    className="w-full h-48 object-cover rounded-lg"
                                    controls
                                    preload="metadata"
                                />

                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {story.name}
                            </h3>
                            <p className="text-primary mb-3">{story.company}</p>
                            <p className="text-gray-300">{story.story}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
