import {ArrowRight} from "lucide-react";
import React from "react";
import Image from "next/image";

const SalesTeamSection = () => {
    const teamMembers = [
        {
            title: "Business Development Manager",
            image: "/assets/services/bdm.webp",
            description: "Oversees the entire sales infrastructure project and ensures seamless integration with your business goals.",
            responsibilities: [
                "Manage overall sales strategy and execution",
                "Coordinate team activities and timelines",
                "Ensure alignment with business objectives",
                "Oversee handoff to internal teams"
            ]
        },
        {
            title: "Research Executive",
            image: "/assets/services/researcher.webp",
            description: "Specializes in lead extraction and ICP analysis, ensuring every prospect matches your ideal customer profile.",
            responsibilities: [
                "Extract qualified leads from multiple sources",
                "Conduct deep ICP research and validation",
                "Build comprehensive prospect databases",
                "Analyze market segments and opportunities"
            ]
        },
        {
            title: "Sales Development Rep",
            image: "/assets/services/sales.webp",
            description: "Executes multi-channel campaigns and manages prospect engagement across all platforms.",
            responsibilities: [
                "Execute LinkedIn and email campaigns",
                "Manage multi-channel outreach sequences",
                "Track engagement and response metrics",
                "Qualify prospects and book meetings"
            ]
        },
        {
            title: "Account Executive",
            image: "/assets/services/account.webp",
            description: "Handles high-value prospects through strategic ABM outreach and relationship building.",
            responsibilities: [
                "Develop ABM strategies for key accounts",
                "Execute high-touch outreach campaigns",
                "Build relationships with decision makers",
                "Create account-specific sales approaches"
            ]
        }
    ];

    return (
        <section className="bg-secondary py-16  overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-10 ">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Meet Your <span className="text-primary">Sales Team</span>
                    </h2>
                    <p className="text-white max-w-4xl mx-auto">
                        Your dedicated fractional sales team works exclusively on building your sales infrastructure.
                        Each specialist focuses on their expertise while collaborating seamlessly through your existing tools and processes.
                    </p>
                </div>

                <div className="space-y-10">
                    {teamMembers.map((member, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                            >
                                <div className={`w-full lg:w-1/2 ${isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                                    <div className="relative group flex justify-center">
                                        <Image src={member.image} alt={member.title} width={400} height={400}   loading="lazy" />
                                    </div>
                                </div>
                                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                                    <div>
                                        <h3 className="text-3xl  font-bold text-white mb-4">
                                            {member.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {member.description}
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-white flex items-center">
                                            Key Responsibilities
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {member.responsibilities.map((responsibility, idx) => (
                                                <div key={idx} className="flex items-start group">
                                                    <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-primary transition-colors duration-300"></div>
                                                    <span className="text-gray-400 text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                            {responsibility}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="w-full bg-primary rounded-full h-1">
                                            <div
                                                className="bg-primary h-1 rounded-full"
                                                style={{ width: `${(index + 1) * 25}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-16 ">
                    <button
                        onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Book a Free Consultation
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SalesTeamSection;