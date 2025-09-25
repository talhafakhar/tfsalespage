import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const SuccessStoriesSection = () => {
    const stories = [
        {
            name: "Sarah Chen",
            company: "TechFlow",
            story: "From idea to $10M valuation in 18 months",
            thumbnail: "https://via.placeholder.com/400x250.png?text=Video+Thumbnail",
        },
        {
            name: "Marcus Rodriguez",
            company: "GreenTech Solutions",
            story: "Revolutionizing renewable energy sector",
            thumbnail: "https://via.placeholder.com/400x250.png?text=Video+Thumbnail",
        },
        {
            name: "Aisha Patel",
            company: "HealthConnect",
            story: "Connecting patients with healthcare providers globally",
            thumbnail: "https://via.placeholder.com/400x250.png?text=Video+Thumbnail",
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
                            className="bg-white/5 p-6 rounded-xl  border border-primary/30  "
                        >
                            <div className="relative mb-4">
                                <Image
                                    width={300}
                                    height={200}
                                    src="/assets/home/graph.webp"
                                    alt="Video Thumbnail"
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <button className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg hover:bg-black/60 transition">
                                    <Play className="text-white" size={32} />
                                </button>
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
