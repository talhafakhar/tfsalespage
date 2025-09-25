import { ShoppingCart,Users,Wifi,Globe,Smartphone} from 'lucide-react';
import Image from "next/image";

const FactsSection = () => {
    const stats = [
        {
            number: '8.05 Bn',
            description: 'World population in 2025 (UN data)',
            icon: <Users className="w-5 h-5" />,
            variant: 'dark' as const,
        },
        {
            number: '$104 Tn',
            description: 'Global GDP in 2025 (IMF projection)',
            icon: <Globe className="w-5 h-5" />,
            variant: 'yellow' as const,
        },
        {
            number: '5.44 Bn',
            description: 'Internet users worldwide in 2025',
            icon: <Wifi className="w-5 h-5" />,
            variant: 'dark' as const,
        },
        {
            number: '2.14 Bn',
            description: 'Global digital buyers expected in 2025',
            icon: <ShoppingCart className="w-5 h-5" />,
            variant: 'yellow' as const,
        },
        {
            number: '50%',
            description: 'Share of online payments made via mobile',
            icon: <Smartphone className="w-5 h-5" />,
            variant: 'dark' as const,
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