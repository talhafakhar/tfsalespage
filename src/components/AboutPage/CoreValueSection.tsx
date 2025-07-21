import { useEffect, useState } from "react";
const values = [
    {
        icon: "⚡",
        title: "Speed Over Perfection",
        description: "We believe in rapid iteration and quick wins. Launch fast, learn faster, scale smartest."
    },
    {
        icon: "🎯",
        title: "Execution Over Advice",
        description: "We don't just consult—we roll up our sleeves and build alongside you. Results speak louder than words."
    },
    {
        icon: "🤖",
        title: "AI-Native Approach",
        description: "Every solution we build leverages AI to multiply your team's impact and automate away the mundane."
    },
    {
        icon: "💡",
        title: "Founder-First Mindset",
        description: "We think like owners, not vendors. Your success is our success, and we're invested in your long-term growth."
    }
];
const CoreValueSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center mb-16"
                    data-section="2"
                >
                    <div
                        className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl lg:text-5xl  font-bold  mb-4">
                            Our Core <span className="text-primary">Values</span>
                        </h2>
                        <p className="max-w-2xl mx-auto">
                            These principles guide every decision we make and every solution we build.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            data-section="2"
                            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{transitionDelay: `${index * 200}ms`}}
                        >
                            <div
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-black">
                                <div className="text-4xl mb-4 animate-bounce-subtle">{value.icon}</div>
                                <h3 className="text-xl font-button font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValueSection;
