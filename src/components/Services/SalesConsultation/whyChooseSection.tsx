import { ArrowDownLeft } from "lucide-react";
import React from "react";
interface FeatureCardProps {
    number: string;
    title: string;
    description: string;
    colorClass: string;
}

const FeatureCard = ({ number, title, description, colorClass }: FeatureCardProps) => {
    return (
        <div className={`${colorClass} rounded-2xl p-6 h-80 flex flex-col transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer`}>
            <div className="flex-shrink-0 mb-4">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className=" font-bold text-4xl   leading-tight group-hover:text-opacity-90 transition-colors">
                            {number}
                        </h3>
                        <h3 className=" font-semibold text-lg font-logo leading-tight group-hover:text-opacity-90 transition-colors">
                            {title}
                        </h3>
                    </div>
                    <ArrowDownLeft className=" w-10 h-10 flex-shrink-0 transform transition-transform group-hover:rotate-12 group-hover:scale-110" strokeWidth={2} />
                </div>
            </div>

            <div className="flex-1 bg-white rounded-xl p-6 flex items-center group-hover:bg-opacity-95 transition-all">
                <p className=" text-black text-sm italic leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    const features = [
        {
            number: "01.",
            title: "We've Been There Too",
            description: "We understand the struggle of being great at tech but lost with sales.",
            colorClass: "bg-primary text-black",
        },
        {
            number: "02.",
            title: "Results You Can Count",
            description: "Our founders see 40% more sales within 90 days of working with us",
            colorClass: "bg-black text-white",
        },
        {
            number: "03.",
            title: "We Find What's Really Wrong",
            description: "No guessing games - we show you exactly what's not working and why",
            colorClass: "bg-primary text-black",
        },
        {
            number: "04.",
            title: "We Stick Around",
            description: "We don't just teach and leave - we make sure you succeed long-term",
            colorClass: "bg-black text-white",
        },

    ];

    return (
        <section className="py-16 px-4 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-center">
                    Why <span className="text-primary"> Choose Us?</span>
                </h2>
                <p className="text-center mb-5">
                    We know what it feels like to be great at your craft but struggle with sales.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            number={feature.number}
                            title={feature.title}
                            description={feature.description}
                            colorClass={feature.colorClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;