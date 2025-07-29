import React, {useEffect, useState} from 'react';
import {
    ArrowRight,
    BarChart3,
    Brain,
    CheckCircle,
    Database,
    Globe,
    Mail,
    MessageSquare,
    Mic,
    PenTool,
    Phone,
    Search,
    Settings,
    Users,
    Zap
} from 'lucide-react';
const toolCategories = {
    email: {
        title: 'Email Outreach',
        icon: Mail,
        color: 'from-yellow-400 to-yellow-600',
        tools: ['Smartlead', 'Instantly', 'Woodpecker', 'Lemlist', 'Mailreach']
    },
    leads: {
        title: 'Lead Generation',
        icon: Database,
        color: 'from-yellow-300 to-yellow-500',
        tools: ['Apollo', 'ZoomInfo', 'Crunchbase', 'Seamless.ai', 'Scraper.io', 'ContactOut']
    },
    crm: {
        title: 'CRM Management',
        icon: Settings,
        color: 'from-yellow-500 to-yellow-700',
        tools: ['HubSpot', 'Pipedrive', 'Salesforce', 'ClickUp']
    },
    research: {
        title: 'Lead Research',
        icon: Search,
        color: 'from-yellow-400 to-yellow-600',
        tools: ['Clay', 'Icypeas', 'Clearbit', 'People Data Labs', 'Apify']
    },
    personalization: {
        title: 'Personalization',
        icon: MessageSquare,
        color: 'from-yellow-300 to-yellow-500',
        tools: ['Lavender', 'Regie.ai', 'Smartwriter', 'Lyne.ai']
    },
    intelligence: {
        title: 'Sales Intelligence',
        icon: Brain,
        color: 'from-yellow-500 to-yellow-700',
        tools: ['Gong', 'Chorus.ai', 'Avoma']
    },
    automation: {
        title: 'Automation',
        icon: Zap,
        color: 'from-yellow-400 to-yellow-600',
        tools: ['Make.com', 'Zapier', 'N8N', 'Bardeen']
    },
    ai: {
        title: 'AI Agents',
        icon: Mic,
        color: 'from-yellow-300 to-yellow-500',
        tools: ['ElevenLabs', 'OpenAI Whisper', 'Voiceflow', 'Tidio AI']
    },
    insights: {
        title: 'Smart Insights',
        icon: BarChart3,
        color: 'from-yellow-500 to-yellow-700',
        tools: ['HubSpot AI', 'Salesforce Einstein']
    },
    content: {
        title: 'Content Generation',
        icon: PenTool,
        color: 'from-yellow-400 to-yellow-600',
        tools: ['Jasper', 'Copy.ai', 'ChatGPT (fine-tuned)', 'Writesonic']
    },
    social: {
        title: 'Social Channels',
        icon: Users,
        color: 'from-yellow-300 to-yellow-500',
        tools: ['LinkedIn', 'Twitter', 'Reddit', 'Quora', 'Slack', 'Discord']
    },
    communication: {
        title: 'Communication',
        icon: Phone,
        color: 'from-yellow-500 to-yellow-700',
        tools: ['Zoom', 'Microsoft Teams', 'Google Meet', 'N8N (Automation)']
    }
};
const SalesToolsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [activeCategory, setActiveCategory] = useState(Object.keys(toolCategories)[0]);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            const currentCategoryIndex = Object.keys(toolCategories).indexOf(activeCategory);
            const nextCategoryIndex = (currentCategoryIndex + 1) % Object.keys(toolCategories).length;
            setActiveCategory(Object.keys(toolCategories)[nextCategoryIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeCategory]);
    
    return (
        <div className="min-h-screen bg-secondary text-white relative overflow-hidden">
            <div className={`relative py-10 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl  mb-6 text-white font-bold">
                        We Know Your{" "}
                        <span className="text-primary">
              Sales Stack
            </span>
                    </h1>
                    <p className="text-white max-w-4xl mx-auto ">
                        We work with all the tools and channels you&#39;re already using. No need to change everything-
                        we optimize what you have.
                    </p>
                    <div className="relative flex items-center justify-center min-h-[800px]">
                        <div className="relative z-10">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 backdrop-blur-sm border-2 border-yellow-400/30 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                                    <div
                                        className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"></div>
                                </div>
                                <div className="relative z-10 text-center">
                                    <Globe className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse"/>
                                    <h3 className="text-2xl font-bold text-white mb-2">Sales Stack</h3>
                                </div>
                            </div>
                        </div>

                        {Object.entries(toolCategories).map(([key, category], index) => {
                            const IconComponent = category.icon;
                            const isActive = activeCategory === key;
                            const angle = (index * 360) / Object.keys(toolCategories).length;
                            const radius = 280;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;

                            return (
                                <div key={key} className="absolute">
                                    <div
                                        className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                                            isActive ? 'bg-primary shadow-lg shadow-yellow-400/50' : 'bg-yellow-400/30'
                                        }`}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                            animation: `orbit 30s linear infinite`,
                                            animationDelay: `${index * -2.5}s`
                                        }}
                                    />

                                    <div
                                        onMouseEnter={() => setActiveCategory(key)}
                                        className={`absolute group transition-all duration-500 transform hover:scale-110 ${
                                            isActive ? 'scale-125' : 'hover:scale-105'
                                        }`}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                            animation: `orbit 30s linear infinite`,
                                            animationDelay: `${index * -2.5}s`
                                        }}
                                    >
                                        <div
                                            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-primary shadow-lg shadow-yellow-400/30'
                                                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 hover:border-yellow-400/50'
                                            }`}>
                                            <IconComponent
                                                className={`w-8 h-8 ${isActive ? 'text-black' : 'text-yellow-400'}`}
                                            />
                                        </div>

                                        <div
                                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                opacity: 1,
                                            }}
                                        >
                    <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                            isActive ? 'text-yellow-400 bg-black/80' : 'text-white bg-gray-800/80'
                        }`}>
                        {category.title}
                    </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-md px-4 py-3 border border-primary">
                            {React.createElement(toolCategories[activeCategory as keyof typeof toolCategories].icon, {
                                className: "w-10 h-10 text-yellow-400"
                            })}
                            <h3 className="text-xl font-bold text-white">
                                {toolCategories[activeCategory as keyof typeof toolCategories].title}
                            </h3>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                            {toolCategories[activeCategory as keyof typeof toolCategories].tools.map((tool, index) => (
                                <div
                                    key={tool}
                                    className="group relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-md border border-gray-600 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animation: 'float 3s ease-in-out infinite',
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-yellow-600/20 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-primary"/>
                                        </div>
                                        <span
                                            className="text-white font-medium group-hover:text-primary transition-colors duration-300">
                      {tool}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <style jsx>{`
                        @keyframes orbit {
                            from {
                                transform: translate(-50%, -50%) rotate(0deg) translateX(280px) rotate(0deg);
                            }
                            to {
                                transform: translate(-50%, -50%) rotate(360deg) translateX(280px) rotate(-360deg);
                            }
                        }

                        @keyframes counterOrbit {
                            from {
                                transform: translate(-50%, 0) rotate(0deg);
                            }
                            to {
                                transform: translate(-50%, 0) rotate(360deg);
                            }
                        }

                        @keyframes float {
                            0%, 100% {
                                transform: translateY(0px);
                            }
                            50% {
                                transform: translateY(-10px);
                            }
                        }
                    `}</style>

                    <div className="relative overflow-hidden mt-10 ">
                        <div className="relative z-10 text-center">
                            <h3 className="text-4xl md:text-5xl  italic text-white mb-6 leading-tight">
                                We don&#39;t force you to{" "}<span className="text-yellow-400"> change tools.</span>
                            </h3>
                            <p className="text-2xl italic md:text-3xl text-white mb-4">
                                &#34;We make your current stack work better.&#34;
                            </p>
                            <div className='mt-5'>
                                <button
                                    className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                                >
                                    Schedule Now
                                    <span
                                        className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                                    >
    <ArrowRight className="w-4 h-4"/>
  </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SalesToolsSection;