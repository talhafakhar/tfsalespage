import { Users, TrendingUp, UserCheck, Lightbulb, Network} from 'lucide-react';
import Image from "next/image";

const FactsSection = () => {
    const stats = [
        {
            number: "Founder-Led Network",
            description:
                "A trusted space where startup founders and C-suite leaders connect, collaborate, and grow together.",
            icon: <Users className="w-5 h-5" />,
            variant: "dark" as const,
        },
        {
            number: "Startup Ecosystem Reach",
            description:
                "Bringing together early-stage and scaling ventures from diverse industries under one community.",
            icon: <Network className="w-5 h-5" />,
            variant: "yellow" as const,
        },
        {
            number: "Collaborative Growth",
            description:
                "Curated events, workshops, and meetups that inspire innovation and encourage knowledge-sharing.",
            icon: <Lightbulb className="w-5 h-5" />,
            variant: "dark" as const,
        },
        {
            number: "Expert Access",
            description:
                "Opportunities to learn directly from mentors, investors, and seasoned industry specialists.",
            icon: <UserCheck className="w-5 h-5" />,
            variant: "yellow" as const,
        },
        {
            number: "Real Impact",
            description:
                "Member startups gaining visibility, building partnerships, and accelerating their journey.",
            icon: <TrendingUp className="w-5 h-5" />,
            variant: "dark" as const,
        },
    ];
    return (
        <div className="px-4 py-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-bold  leading-tight">
                            Facts and <span className="text-primary">Figures</span>
                        </h1>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                            This slide highlights the Experian company facts and figures which include consumer
                            credit history,
                            business credit history, consumer and business information bureau, and FinTech rankings.
                        </p>
                        <div className="space-y-8 pt-14">
                            <div className="grid md:grid-cols-2 gap-8">
                                {stats.slice(0, 2).map((stat, index) => (
                                    <div key={index}>
                                        <div className="border rounded-xl p-6 flex flex-col items-start">
                                            <div className="mb-4 text-yellow-500">
                                                {stat.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">
                                                {stat.number}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-gray-600">
                                                {stat.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div>
                        <Image
                            src="/assets/fact.webp" alt="Facts and Figures" width={500} height={500}
                            className="w-full h-auto rounded-l-full border border-black max-w-md lg:max-w-lg"/>
                    </div>
                </div>
                <div className="space-y-8 pt-14">
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.slice(2,5).map((stat, index) => (
                            <div key={index}>
                                <div className="border rounded-xl p-6 flex flex-col items-start">
                                    <div className="mb-4 text-yellow-500">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        {stat.number}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-600">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};
export default FactsSection