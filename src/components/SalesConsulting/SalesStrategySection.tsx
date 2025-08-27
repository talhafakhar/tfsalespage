import Image from "next/image";
import {
    Target,
    Globe,
    TrendingUp,
    MonitorSmartphone,
    Database,
    Users2,
    Sliders,
    LineChart,
    Repeat,
} from "lucide-react";

const leftFeatures = [
    {
        icon: <Target size={40} />,
        title: "Understanding The Target Market",
        desc: "Deep insights into the target audience, including their needs, preferences, and pain points.",
    },
    {
        icon: <TrendingUp size={40} />,
        title: "Effective Sales Techniques",
        desc: "Utilizing sales techniques that are most effective for the specific niche and market trends.",
    },
    {
        icon: <MonitorSmartphone size={40} />,
        title: "Leveraging Technology",
        desc: "Using CRM, B2B tools (e.g., LinkedIn Navigator, Apollo, etc.), and digital marketing platforms.",
    },
    {
        icon: <Sliders size={40} />,
        title: "Customized Approach",
        desc: "Tailoring strategies to business needs for a more personalized and effective approach.",
    },
    {
        icon: <Repeat size={40} />,
        title: "Continuous Learning And Adaptation",
        desc: "Keeping up with the latest trends to stay ahead in the competitive landscape.",
    },
];

const rightFeatures = [
    {
        icon: <Globe size={40} />,
        title: "Strong Online Presence",
        desc: "Maintaining a presence on LinkedIn, YouTube, and Instagram for brand visibility and trust.",
    },
    {
        icon: <Database size={40} />,
        title: "Data-Driven Decision Making",
        desc: "Utilizing data and analytics to shape strategy and make better decisions.",
    },
    {
        icon: <Users2 size={40} />,
        title: "Training And Education",
        desc: "Ensuring clients are equipped with knowledge to implement and sustain strategies.",
    },
    {
        icon: <LineChart size={40} />,
        title: "Scalability And Growth Focus",
        desc: "Building frameworks that support long-term scaling and consistent performance.",
    },
];

export default function SalesStrategySection() {
    return (
        <section className="py-10 px-4 bg-white text-black font-nunito">
            <div className="text-center max-w-6xl mx-auto mb-12">
                <h2 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-4 font-nunito leading-snug"     style={{fontWeight: 800}}>
                    What Factors Are Involved In Formulation Of A
                    <span className="text-yellow-500">{" "}Successful Sales Strategy?</span>
                </h2>
                <p className="text-gray-600">
                    Let me tell you about the framework that turned my life around and enabled my agency to perform sales on almost autopilot.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                <div className="space-y-4">
                    {leftFeatures.map((item, idx) => (
                        <div key={idx} className="bg-black/85 cursor-pointer hover:bg-black transition-all duration-300 text-white p-8 rounded-md shadow-md">
                            <div className="flex items-center gap-3 mb-2 text-white">
                                {item.icon}
                            </div>
                            <h3 className="text-[23px] font-bold">{item.title}</h3>
                            <p className="font-semibold text-white">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-4">
                    {rightFeatures.map((item, idx) => (
                        <div key={idx} className="bg-black/85 cursor-pointer hover:bg-black transition-all duration-300 text-white p-8 rounded-md shadow-md">
                            <div className="flex items-center gap-3 mb-2 text-white">
                                {item.icon}
                            </div>
                            <h3 className="text-[23px] font-bold">{item.title}</h3>
                            <p className="font-semibold text-white">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Image
                        src="/assets/services/bdm.webp"
                        alt="Sales Globe"
                        width={400}
                        height={400}

                    />
                </div>
            </div>
        </section>
    );
}
