import React from 'react';
import {easeOut, motion} from 'framer-motion';
import {
    Mail,
    Linkedin,
    Share2,
    Users,
    MessageCircle,
    RefreshCw,
    BookOpen,
    Network, ArrowRight
} from 'lucide-react';

const SalesChannelsSection = () => {
    const channels = [
        {
            title: "Cold Email Campaigns",
            description: "Multi-channel sequences that actually get responses",
            icon: Mail,
            iconColor: "#EA4335",
            delay: 0.1
        },
        {
            title: "LinkedIn Outreach",
            description: "Relationship building that converts to meetings",
            icon: Linkedin,
            iconColor: "#0077B5",
            delay: 0.2
        },
        {
            title: "Twitter Outreach",
            description: "Engage prospects and build relationships on X/Twitter",
            icon: "X",
            iconColor: "#FFFFFF",
            delay: 0.3
        },
        {
            title: "Social Media Selling",
            description: "Turn followers into leads across all platforms",
            icon: Share2,
            iconColor: "#1DA1F2",
            delay: 0.4
        },
        {
            title: "Inbound Lead Nurturing",
            description: "Convert website visitors into customers",
            icon: Users,
            iconColor: "#FF6B35",
            delay: 0.5
        },
        {
            title: "Community Engagement",
            description: "Generate business from forums and groups",
            icon: MessageCircle,
            iconColor: "#7289DA",
            delay: 0.6
        },
        {
            title: "Referral Systems",
            description: "Turn customers into your sales team",
            icon: RefreshCw,
            iconColor: "#00C851",
            delay: 0.7
        },
        {
            title: "Content-Based Selling",
            description: "Use your expertise to attract buyers",
            icon: BookOpen,
            iconColor: "#FF9500",
            delay: 0.8
        },
        {
            title: "Multi-Channel Sequences",
            description: "Coordinate all channels for maximum impact",
            icon: Network,
            iconColor: "#6F42C1",
            delay: 0.9
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: easeOut
            }
        }
    };

    return (
        <section className="bg-secondary py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Minimal Background Elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/2 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/1 rounded-full blur-3xl"></div>
            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                        Sales Channels {' '}
                        <span className="text-primary">
              We Optimized
            </span>
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        From stuck to scaling — real sales transformations we delivered.
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {channels.map((channel, index) => {
                        const IconComponent = channel.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative overflow-hidden cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                            >
                                  <span
                                      className="absolute top-6 left-6 z-0 w-16 h-16 rounded-xl"
                                      style={{
                                          backgroundColor: channel.iconColor,
                                      }}
                                  ></span>
                                <span
                                    className="absolute top-6 left-6 z-0 w-16 h-16 rounded-xl transition-all duration-300 group-hover:scale-[10]"
                                    style={{
                                        backgroundColor: channel.iconColor,
                                    }}
                                ></span>
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300"
                                             style={{ backgroundColor: channel.iconColor }}>
                                            {channel.icon === "X" ? (
                                                <svg
                                                    className="w-8 h-8"
                                                    viewBox="0 0 24 24"
                                                    fill="#000"
                                                >
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                                </svg>
                                            ) : (
                                                <IconComponent
                                                    className="w-8 h-8 text-white transition-all"
                                                    strokeWidth={1.5}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h3
                                            className={`text-xl font-semibold transition-colors duration-300 ${
                                                channel.icon === "X"
                                                    ? "text-white group-hover:text-black"
                                                    : "text-white"
                                            }`}
                                        >
                                            {channel.title}
                                        </h3>

                                        <p
                                            className={`text-sm leading-relaxed transition-colors duration-300 ${
                                                channel.icon === "X"
                                                    ? "text-white group-hover:text-black"
                                                    : "text-white"
                                            }`}
                                        >
                                            {channel.description}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-20 text-center"
                >
                    <button className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none">
                        Book A Free Sales Audit
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SalesChannelsSection;