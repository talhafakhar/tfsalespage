import React, { useState, useEffect } from 'react';
import {
    ChevronDown,
    TrendingUp,
    CheckCircle,
    Target, ArrowRight,
    CalendarClock, ShoppingCart, MessageCircle
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

const IndustryCaseStudy: React.FC = () => {
    const [expandedItem, setExpandedItem] = useState<number | null>(1);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const successStories: SuccessStory[] = [

        {
            id: 1,
            icon: TrendingUp,
            metric: "80%",
            achievement: "reduction in manual work ",
            timeline: "60 Days",
            solution: "Automated Bookkeeping Agent ",
            details: {
                challenge: "Manual data entry and invoice processing consuming 20+ hours weekly with frequent errors and delays.",
                approach: "Implemented custom AI agent for automated data extraction, invoice processing, and bookkeeping with real-time validation",
                results: [
                    "80% reduction in manual work",
                    "95% accuracy improvement",
                    "15 hours saved weekly",
                    "Automated financial reporting"
                ],
                clientType: "Accounting Firm"
            },
        },
        {
            id: 2,
            icon: MessageCircle,
            metric: "70%",
            achievement: "improvement via AI agent",
            timeline: "Ongoing",
            solution: "WhatsApp Lead Qualification Agent",
            details: {
                challenge: "Real estate agency was receiving 100+ WhatsApp leads daily with poor qualification and manual scoring, leading to missed opportunities.",
                approach: "Deployed voice AI agent with intelligent questioning, automated lead scoring, and CRM integration.",
                results: [
                    "70% improvement in lead quality",
                    "3x faster response time",
                    "50% increase in qualified appointments",
                    "Automated lead scoring system"
                ],
                clientType: "Real Estate Agency"
            },
        },
        {
            id: 5,
            icon: CalendarClock,
            metric: "60%",
            achievement: "increase through AI booking",
            timeline: "Ongoing",
            solution: "Sales Demo Booking Agent",
            details: {
                challenge: "Sales team at B2B SaaS startup overwhelmed with low-quality demo requests, wasting time and reducing conversion rates.",
                approach: "Built AI sales agent with qualification frameworks, calendar integration, and personalized booking sequences.",
                results: [
                    "60% increase in qualified demos",
                    "40% reduction in sales workload",
                    "25% higher conversion rate",
                    "Automated calendar management"
                ],
                clientType: "B2B SaaS Startup"
            },
        },
        {
            id: 4,
            icon: ShoppingCart,
            metric: "45%",
            achievement: "via AI order confirmation",
            timeline: "Ongoing",
            solution: "Order Confirmation Automation",
            details: {
                challenge: "E-commerce platform faced high return rates from incorrect orders and miscommunication, hurting revenue and satisfaction.",
                approach: "Built AI-powered pre-dispatch system to verify orders and automate customer communication.",
                results: [
                    "45% reduction in return orders",
                    "30% improvement in satisfaction",
                    "$50K monthly cost savings",
                    "Automated order verification"
                ],
                clientType: "E-commerce Marketplace"
            },
        }
    ];

    const toggleExpanded = (id: number): void => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <section className="bg-secondary">
            <div className="container mx-auto py-10 px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                        Real Results{' '}
                        <span className="text-primary">
              Across Industries
            </span>
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        See how we've transformed businesses with custom AI agents
                    </p>
                </div>
                <div className="space-y-6">
                    {successStories.map((story, index) => {
                        const IconComponent = story.icon;
                        const isExpanded = expandedItem === story.id;
                        return (
                            <div
                                key={story.id}
                                className={`transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                                style={{ transitionDelay: `${300 + index * 200}ms` }}
                            >
                                <div
                                    className={`
      bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 overflow-hidden
      transition-all duration-500
      ${isExpanded ? 'bg-white/10 border-primary/50 shadow-2xl' : 'hover:shadow-xl'}
    `}
                                >
                                    <div
                                        className="p-4 sm:p-5 cursor-pointer"
                                        onClick={() => toggleExpanded(story.id)}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg bg-white/10 transition-all duration-500">
                                                    <IconComponent
                                                        size={24}
                                                        className={`transition-colors duration-300 ${
                                                            isExpanded ? 'text-white' : 'text-primary'
                                                        }`}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="text-2xl sm:text-4xl font-bold text-white transition-colors duration-300">
                {story.metric}
              </span>
                                                        <span className="text-gray-300 text-sm sm:text-base">
                {story.achievement}
              </span>
                                                    </div>
                                                    <div>
                                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-slate-300">
                                                            <Target size={14} />
                                                            <span>{story.solution}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className={`
            w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center
            transition-all duration-300 hover:bg-white/20
            ${isExpanded ? 'bg-primary-500/20' : ''}
          `}
                                            >
                                                <ChevronDown
                                                    size={20}
                                                    className={`text-white transition-transform duration-300 ${
                                                        isExpanded ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                            isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="px-4 sm:px-6 pb-6">
                                            <div className="border-t border-white pt-4">
                                                <div className="flex flex-wrap justify-between items-start mb-4 sm:mb-6">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white">
                                                        <CheckCircle size={16} />
                                                        <span>{story.details.clientType}</span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                                Challenge
                                                            </h4>
                                                            <p className="text-slate-300 text-sm leading-relaxed">{story.details.challenge}</p>
                                                        </div>

                                                        <div>
                                                            <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                                Our Approach
                                                            </h4>
                                                            <p className="text-slate-300 text-sm leading-relaxed">{story.details.approach}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                            Key Results
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {story.details.results.map((result, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                                                    <CheckCircle size={16} className="text-emerald-400 mt-0.5" />
                                                                    <span>{result}</span>
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
                <div className="mt-8 text-center">
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Choose Fractional CMO Today
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

export default IndustryCaseStudy;