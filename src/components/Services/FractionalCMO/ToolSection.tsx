import React from 'react';
import { Code, Mail, Search, TrendingUp, Smartphone, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
    {
        category: "Analytics",
        icon: TrendingUp,
        items: ["Google Analytics 4", "Mixpanel", "Hotjar", "Tableau"]
    },
    {
        category: "SEO",
        icon: Search,
        items: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console"]
    },
    {
        category: "Automation",
        icon: Code,
        items: ["Zapier", "Make.com", "HubSpot", "ActiveCampaign"]
    },
    {
        category: "Content",
        icon: PenTool,
        items: ["Figma", "Canva", "Grammarly", "SurferSEO"]
    },
    {
        category: "Advertising",
        icon: Smartphone,
        items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads"]
    },
    {
        category: "Email",
        icon: Mail,
        items: ["Mailchimp", "Klaviyo", "ConvertKit", "Lemlist"]
    }
];

const MarketingStackSection = () => {
    return (
        <section className="relative  py-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 relative">
                <h2 className=" flex font-button  gap-4 justify-center font-bold items-center text-5xl  mb-4 ">
                    <span className="text-primary ">Our{" "}</span>Marketing Stack
                </h2>
                <p className=" text-center mb-5">Tools and technologies we leverage to drive your growth</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-yellow-400 transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                                        <tool.icon className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <h3 className="text-xl font-bold">{tool.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {tool.items.map((item) => (
                                        <li key={item} className="flex items-center">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingStackSection;