import React, { useState, useEffect } from 'react';
import {
    ChevronDown,
    TrendingUp,
    Rocket,
    DollarSign,
    CheckCircle,
    Target
} from 'lucide-react';

interface SuccessStory {
    id: number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    metric: string;
    achievement: string;
    timeline: string;
    solution: string;
    details: {
        challenge: string;
        approach: string;
        results: string[];
        clientType: string;
    };
}

const SuccessSnapshots: React.FC = () => {
    const [expandedItem, setExpandedItem] = useState<number | null>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const successStories: SuccessStory[] = [
        {
            id: 1,
            icon: TrendingUp,
            metric: "300%",
            achievement: "pipeline growth in 60 days",
            timeline: "60 Days",
            solution: "Cold Outreach Engine",
            details: {
                challenge: "Struggling with inconsistent lead generation and low conversion rates from cold outreach efforts.",
                approach: "Implemented our proprietary Cold Outreach Engine with personalized sequences, A/B testing, and advanced analytics.",
                results: [
                    "300% increase in qualified pipeline",
                    "65% higher response rates",
                    "40% reduction in cost per lead",
                    "Automated follow-up sequences"
                ],
                clientType: "B2B SaaS Startup"
            },
        },
        {
            id: 2,
            icon: Rocket,
            metric: "$15K MRR",
            achievement: "from MVP in 90 days",
            timeline: "90 Days",
            solution: "Fractional CTO Support",
            details: {
                challenge: "Technical founder needed expert guidance to scale MVP architecture and implement growth features.",
                approach: "Provided fractional CTO services with technical strategy, team mentoring, and hands-on development support.",
                results: [
                    "MVP to $15K MRR in 90 days",
                    "Scalable architecture implemented",
                    "Technical team productivity increased 200%",
                    "Product-market fit achieved faster"
                ],
                clientType: "Tech Startup"
            },
        },
        {
            id: 3,
            icon: DollarSign,
            metric: "$200K+",
            achievement: "saved annually with automation",
            timeline: "12 Months",
            solution: "Intelligent Sales Automation",
            details: {
                challenge: "Manual sales processes were consuming too much time and resources, limiting growth potential.",
                approach: "Designed and implemented intelligent sales automation solutions with AI-powered workflows and analytics.",
                results: [
                    "Over $200,000 in annual savings",
                    "80% reduction in manual tasks",
                    "50% faster sales cycle",
                    "Real-time performance insights"
                ],
                clientType: "Growing Enterprise"
            },
        }
    ];

    const toggleExpanded = (id: number): void => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <section className="bg-secondary   px-4">
            <div className="container mx-auto py-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                        What We&#39;ve Helped{' '}
                        <span className="text-primary">
              Founders
            </span>
                        {' '}Achieve
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Real results from real founders who transformed their businesses with our proven strategies and solutions.
                    </p>
                </div>

                {/* Success Stories Accordion */}
                <div className="space-y-6">
                    {successStories.map((story, index) => {
                        const IconComponent = story.icon;
                        const isExpanded = expandedItem === story.id;

                        return (
                            <div
                                key={story.id}
                                className={`
                  transition-all duration-700 ${
                                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                                }
                `}
                                style={{ transitionDelay: `${300 + index * 200}ms` }}
                            >
                                <div className={`
                  bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden
                  transition-all duration-500 
                  ${isExpanded ? 'bg-white/10 border-primary/50 shadow-2xl' : 'hover:shadow-xl'}
                `}>

                                    <div
                                        className="p-5 cursor-pointer"
                                        onClick={() => toggleExpanded(story.id)}
                                    >
                                        <div className="flex items-center justify-between">

                                            <div className="flex items-center gap-4">
                                                <div className={` w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg  transition-all duration-500 bg-white/10`}>
                                                    <IconComponent
                                                        size={28}
                                                        className={`transition-colors duration-300 ${
                                                            isExpanded ? 'text-white' : 'text-primary'
                                                        }`}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex items-baseline gap-3 mb-2">
                            <span className={`
                              text-4xl font-bold transition-colors duration-300 text-white
                           `}>
                              {story.metric}
                            </span>
                                                        <span className="text-gray-300">
                              {story.achievement}
                            </span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className={`
                              inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                              transition-all duration-300
                                                            bg-white/10 text-slate-300
                                                        }
                            `}>
                                                            <Target size={14} />
                                                            <span>{story.solution}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`
                        w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                        transition-all duration-300 hover:bg-white/20
                        ${isExpanded ? 'bg-primary-500/20' : ''}
                      `}>
                                                <ChevronDown
                                                    size={20}
                                                    className={`
                            text-white transition-transform duration-300
                            ${isExpanded ? 'transform rotate-180' : ''}
                          `}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                                        <div className="px-8 pb-4">
                                            <div className="border-t border-white pt-4">
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className={`
                            inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                            bg-white 
                          `}>
                                                        <CheckCircle size={16} />
                                                        <span>{story.details.clientType}</span>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">

                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                                Challenge
                                                            </h4>
                                                            <p className="text-slate-300 leading-relaxed">
                                                                {story.details.challenge}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                                Our Approach
                                                            </h4>
                                                            <p className="text-slate-300 leading-relaxed">
                                                                {story.details.approach}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                            Key Results
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {story.details.results.map((result, idx) => (
                                                                <li key={idx} className="flex items-start gap-3">
                                                                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                                                                    <span className="text-slate-300">{result}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SuccessSnapshots;