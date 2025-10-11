import {BarChart3, Briefcase, CheckCircle} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const benefits = [
    {
        icon: <BarChart3 className="w-8 h-8 text-primary"/>,
        title: "Insight-Driven Audit",
        desc: "Our sales audit uncovers gaps so your consultation delivers real impact",
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary"/>,
        title: "Tailored Consultation",
        desc: "We craft strategies aligned with your industry, audience, and growth goals",
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary"/>,
        title: "Strategic Team Training",
        desc: "We assess your team to build a powerful, results-focused training plan",
    },

];

const WhyTFBusiness: React.FC = () => {
    return (
        <section className="py-16 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto">
                    Why <Link href="https://www.tfbusinesssolutions.com" className="text-primary">TF Business Solutions </Link> to Accelerate Your Sales?
                </h2>
                <p className="mb-12 text-gray-600">
                    Tailored Consultation: We craft strategies aligned with your industry, audience, and growth goals.</p>
                <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-1/2">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className={`
        p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white text-left
        ${benefits.length === 3 && idx === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-2/3' : ''}
      `}
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
