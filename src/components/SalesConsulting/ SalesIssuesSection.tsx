import Image from "next/image";
import { XCircle, CheckCircle } from "lucide-react";
import React from "react";

const cards = [
    {
        title: "Sales Budget Planning",
        issue:
            "Inadequate budget planning can lead to either overspending or underfunding in crucial areas, affecting your sales team’s ability to perform effectively.",
        solution:
            "Reevaluate your budget allocation. Ensure that it aligns with your sales goals and provides enough resources for essential activities like marketing, training, and customer engagement.",
    },
    {
        title: "Operating Model & Structure",
        issue:
            "An inefficient operating model or organizational structure can lead to communication breakdowns, unclear roles, and hindered performance.",
        solution:
            "Streamline your sales operations. Ensure clear communication channels and well-defined roles to enhance team efficiency and effectiveness.",
    },
    {
        title: "Go-to-Market Strategy",
        issue:
            "A misaligned go-to-market strategy can result in targeting the wrong audience or using ineffective channels, leading to poor sales outcomes.",
        solution:
            "Reassess and realign your go-to-market strategy. Focus on understanding your target market deeply and choosing the right channels to reach them.",
    },
    {
        title: "Value Proposition Canvas",
        issue:
            "If your value proposition isn’t clear or compelling to your target audience, it can lead to a lack of interest and engagement.",
        solution:
            "Refine your value proposition. Ensure it resonates with your audience’s needs and effectively communicates the unique benefits of your product or service.",
    },
    {
        title: "Sales Process Designing",
        issue:
            "An outdated or inefficient sales process can slow down your sales cycle and reduce conversion rates.",
        solution:
            "Optimize your sales process. Focus on making it as efficient and customer-friendly as possible, utilizing the latest tools and techniques for maximum effectiveness.",
    },
];

export default function SalesIssuesSection() {
    return (
            <section className="relative font-nunito bg-[url('/assets/home/Why-You-Might-Not.webp')] bg-cover bg-center text-white py-10 px-4">

            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            <div className="max-w-4xl mx-auto text-center mb-12 relative z-99999">
                <h2 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-4 font-nunito leading-snug"     style={{fontWeight: 800}}>
                    Why You Might Not Be Achieving Your{" "}
                    <span className="text-yellow-400">Desired Sales Numbers:Key Areas To Revisit</span>
                </h2>
                <p className="mt-4">
                    Struggling to hit your sales targets can be frustrating, but often,
                    the root causes can be traced back to fundamental aspects of your
                    sales strategy. Let’s explore some critical areas that might be
                    holding you back:
                </p>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto  relative z-99999">
                    {cards.slice(0, 3).map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-black p-5 rounded-xl shadow-md flex flex-col justify-between min-h-[300px]"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                <div className="flex items-start gap-2 mb-2">
                                    <div>
                                        <p className="font-medium">
                                            <span className="font-bold">The Issue:</span> {card.issue}
                                        </p>
                                    </div>
                                    <XCircle className="text-red-500 mt-1" size={80} />
                                </div>
                                <hr className="my-3 border-black" />
                                <div className="flex items-start gap-2">
                                    <div>
                                        <p className="font-medium">
                                            <span className="font-bold">The Solution:</span> {card.solution}
                                        </p>
                                    </div>
                                    <CheckCircle className="text-green-500 mt-1" size={100} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-span-3 flex justify-center gap-6">
                        {cards.slice(3).map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-black p-5 rounded-xl shadow-md flex flex-col justify-between min-h-[300px] w-full md:w-1/3"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                    <div className="flex items-start gap-2 mb-2">
                                        <div>
                                            <p className="font-medium">
                                                <span className="font-bold">The Issue:</span> {card.issue}
                                            </p>
                                        </div>
                                        <XCircle className="text-red-500 mt-1" size={80} />
                                    </div>
                                    <hr className="my-3 border-black" />
                                    <div className="flex items-start gap-2">
                                        <div>
                                            <p className="font-medium">
                                                <span className="font-bold">The Solution:</span> {card.solution}
                                            </p>
                                        </div>
                                        <CheckCircle className="text-green-500 mt-1" size={100} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
    );
}
