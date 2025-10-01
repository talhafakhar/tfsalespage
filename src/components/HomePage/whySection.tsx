import {BarChart3, BookOpen, Briefcase, CheckCircle} from "lucide-react";
import Image from "next/image";
import React from "react";

const benefits = [
    {
        icon: <BarChart3 className="w-8 h-8 text-primary"/>,
        title: "ROI-driven",
        desc: "Focused on measurable results and tangible business growth.",
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary"/>,
        title: "Cross-Industry Expertise",
        desc: "Experience across multiple sectors to tailor strategies for your niche.",
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary"/>,
        title: "Proven Track Record",
        desc: "Trusted by businesses to deliver consistent results.",
    },
    {
        icon: <BookOpen className="w-8 h-8 text-primary"/>,
        title: "Done-for-You Playbooks",
        desc: "Ready-to-implement systems that save you time and effort.",
    },
];

const WhyTFBusiness: React.FC = () => {
    return (
        <section className="py-16 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Why <span className="text-primary">TF Business Solutions?</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-1/2">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white text-left"
                            >
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src="assets/home/founder.svg"
                            alt="Founder of TF Business Solutions"
                            width={400}
                            height={400}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default WhyTFBusiness;
