import React, {useEffect, useState} from 'react';
import {
    ArrowRight,
    BarChart3,
    Brain,
    Database,
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
import Timeline from "@/components/Common/Timeline";
const tools = [
    {
        id:'email-outreach',
        title: 'Email Outreach',
        icon: Mail,
        items: ['Smartlead', 'Instantly', 'Woodpecker', 'Lemlist', 'Mailreach']
    },
    {
        id: 'lead-generation',
        title: 'Lead Generation',
        icon: Database,
        items: ['Apollo', 'ZoomInfo', 'Crunchbase', 'Seamless.ai', 'Scraper.io', 'ContactOut']
    },
    {
        id: 'crm-management',
        title: 'CRM Management',
        icon: Settings,
        items: ['HubSpot', 'Pipedrive', 'Salesforce', 'ClickUp']
    },
    {
        id: 'lead-research',
        title: 'Lead Research',
        icon: Search,
        items: ['Clay', 'Icypeas', 'Clearbit', 'People Data Labs', 'Apify']
    },
    {
        id: 'personalization',
        title: 'Personalization',
        icon: MessageSquare,
        items: ['Lavender', 'Regie.ai', 'Smartwriter', 'Lyne.ai']
    },
    {
        id: 'sales-intelligence',
        title: 'Sales Intelligence',
        icon: Brain,
        items: ['Gong', 'Chorus.ai', 'Avoma']
    },
    {
        id: 'automation',
        title: 'Automation',
        icon: Zap,
        items: ['Make.com', 'Zapier', 'N8N', 'Bardeen']
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        icon: Mic,
        items: ['ElevenLabs', 'OpenAI Whisper', 'Voiceflow', 'Tidio AI']
    },
    {
        id: 'smart-insights',
        title: 'Smart Insights',
        icon: BarChart3,
        items: ['HubSpot AI', 'Salesforce Einstein']
    },
    {
        id: 'content-generation',
        title: 'Content Generation',
        icon: PenTool,
        items: ['Jasper', 'Copy.ai', 'ChatGPT (fine-tuned)', 'Writesonic']
    },
    {
        id: 'social-channels',
        title: 'Social Channels',
        icon: Users,
        items: ['LinkedIn', 'Twitter', 'Reddit', 'Quora', 'Slack', 'Discord']
    },
    {
        id: 'communication',
        title: 'Communication',
        icon: Phone,
        items: ['Zoom', 'Microsoft Teams', 'Google Meet', 'N8N (Automation)']
    }
];
const SalesToolsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="  relative overflow-hidden">
            <div
                className={`relative py-10 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl  mb-6  font-bold">
                        We Know Your{" "}
                        <span className="text-primary">
              Sales Stack
            </span>
                    </h1>
                    <p className=" max-w-4xl mx-auto ">
                        We work with all the tools and channels you&#39;re already using. No need to change everything-
                        we optimize what you have.
                    </p>
                  <div className='mt-4'>
                      <Timeline
                          items={tools}
                          autoProgress={true}
                          intervalMs={3500}
                      />
                  </div>

                    <div className="relative overflow-hidden mt-10 border py-6 shadow-lg rounded-md">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/assets/services/pattern-bg.webp')" }}
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        <div className="relative z-10 text-center text-white px-4 py-8">
                            <h3 className="text-4xl md:text-5xl text-white italic font-bold  mb-6 leading-tight">
                                We don&#39;t force you to{" "}<span className="text-yellow-400"> change tools.</span>
                            </h3>
                            <p className="text-2xl italic md:text-3xl font-semibold  mb-4">
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