import React, {useEffect, useRef, useState} from 'react';
import {BarChart3, Bot, Brain, Code, Target, Users} from 'lucide-react';

const ServicesCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const lastScrollTime = useRef(0);
    const services = {
        'Virtual CMO Services': {
            subtitle: 'Design and lead your Go-To-Market strategy with confidence.',
            points: [
                'Launch Minimum Viable Campaigns (MVC) to test your offer',
                'Build multi-channel demand engines on LinkedIn, Twitter, and Reddit',
                'Develop a full-funnel content and SEO strategy that drives leads',
                'Set up scalable marketing automation using proven tools',
                'Create messaging and positioning that actually converts',
                'Shape a brand story that builds trust and drives buyer action'
            ],
            color: 'from-purple-500 to-indigo-600',
            icon: BarChart3
        },
        'Virtual CTO Services': {
            subtitle: 'Turn your product vision into a scalable, investor-ready platform.',
            points: [
                'Build MVPs and POCs with speed and market alignment',
                'Manage full SaaS development from architecture to deployment',
                'Implement compliance-ready, scalable infrastructure',
                'Lead internal dev teams or assemble dedicated technical squads',
                'Integrate AI to boost product value and automation',
                'Create Agent-as-a-Service (AAS) tools for growth and efficiency'
            ],
            color: 'from-blue-500 to-cyan-600',
            icon: Code
        },
        'Fractional SDR Services': {
            subtitle: 'Fill your pipeline with qualified conversations — consistently.',
            points: [
                'Write and launch cold email campaigns that get real replies',
                'Connect and convert on LinkedIn, Twitter, and Reddit',
                'Use Smartlead, Instantly, Salesforce, and PhantomBuster effectively',
                'Automate outreach flows for volume without losing personalization',
                'Turn outbound into a measurable and scalable engine',
                'Build ICP-aligned messaging that starts meaningful conversations'
            ],
            color: 'from-green-500 to-emerald-600',
            icon: Target
        },
        'Sales Consulting & Team Training': {
            subtitle: 'Turn founder-led selling into a repeatable sales system.',
            points: [
                'Create custom ABM and inbound sales strategies',
                'Build and operationalize your Cold Outreach Engine',
                'Train your team on buyer psychology and objection handling',
                'Identify your most profitable channels and scale them',
                'Implement sales tech for pipeline tracking and automation',
                'Develop internal playbooks for consistent performance'
            ],
            color: 'from-orange-500 to-red-600',
            icon: Users
        },
        'Sales Automation': {
            subtitle: 'Work smarter with intelligent, tailored workflows.',
            points: [
                'Set up AI-powered follow-up, lead scoring, and nurture flows',
                'Automate multi-channel tasks to reduce manual workload',
                'Integrate CRMs, outreach tools, and calendar systems seamlessly',
                'Connect workflows across email, LinkedIn, Slack, Clickup, Twitter, Zoom, Salesforce, Asana, Google Workspace, and more',
                'Convert leads into booked calls effortlessly without the need for constant follow-ups',
                'Build custom automation systems for your unique sales motion'
            ],
            color: 'from-teal-500 to-blue-600',
            icon: Bot
        },
        'Agent-as-a-Service (AAS)': {
            subtitle: 'Deploy AI agents that deliver across sales, support, and ops.',
            points: [
                'Create custom AI sales agents that qualify and book leads',
                'Launch support agents that respond, guide, and escalate',
                'Automate appointment setting, onboarding, and follow-ups',
                'Build internal ops agents for reporting and CRM updates',
                'Train agents using your docs, tone, and processes',
                'Connect Slack, email, LinkedIn, CRMs, and web tools seamlessly'
            ],
            color: 'from-violet-500 to-purple-600',
            icon: Brain
        }
    };
    const entries = Object.entries(services);
    const totalCount = entries.length;
    const [rotations] = useState(() =>
        entries.map(() => (Math.random() - 0.5) * 15)
    );
    const goToNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setPreviousIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % totalCount);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const goToPrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setPreviousIndex(currentIndex);
        setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
        setTimeout(() => setIsAnimating(false), 800);
    };
    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (isAnimating) return;

            const now = Date.now();
            if (now - lastScrollTime.current < 800) return;

            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (!isInView) return;

            e.preventDefault();
            if (e.deltaY > 0) {
                goToNext();
            } else {
                goToPrevious();
            }

            lastScrollTime.current = now;
        };

        const container = containerRef.current;
        if (container) {

            container.addEventListener('wheel', handleScroll, {passive: false});
            return () => container.removeEventListener('wheel', handleScroll);
        }
    }, [currentIndex, goToNext, goToPrevious, isAnimating, totalCount]);

    const getZIndex = (itemIndex: number) => {
        return (totalCount - 1 + itemIndex - currentIndex) % totalCount;
    };

    const isTopItem = (itemIndex: number) => itemIndex === currentIndex;

    const isMovingItem = (itemIndex: number) => {
        if (!isAnimating) return false;
        return itemIndex === previousIndex || itemIndex === currentIndex;
    };

    return (
        <div ref={containerRef} className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto pt-20">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="text-4xl tracking-widest">
                                <span className="text-sm">O U R</span>
                            </div>
                        </div>
                        <h1 className="text-6xl  font-bold mt-2">
                            <span
                                className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                                Services
                            </span></h1>
                        <div className="w-16 h-0.5 bg-black mt-4"></div>
                    </div>
                    <div>
                        <p className="text-black font -bold leading-relaxed">
                            We Help Founders Go From Idea to Revenue With Fractional Growth Leadership
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-96 h-[400px]">
                            {entries.map(([serviceName, serviceData], index) => {
                                const zIndex = getZIndex(index);
                                const isTop = isTopItem(index);
                                const isMoving = isMovingItem(index);
                                const IconComponent = serviceData.icon;

                                return (
                                    <div
                                        key={serviceName}
                                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                                            isMoving ? 'animate-pulse' : ''
                                        }`}
                                        style={{
                                            zIndex: zIndex,
                                            transform: isMoving && isAnimating
                                                ? `translateX(-150%) rotate(${rotations[index]}deg)`
                                                : `rotate(${isTop ? rotations[index] : rotations[index] * 0.5}deg)`,
                                            opacity: isMoving && isAnimating ? 0.7 : 1,
                                        }}
                                    >
                                        <div
                                            className={`w-full h-full bg-gradient-to-br ${serviceData.color} rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm p-8 flex flex-col items-center justify-center text-white`}>
                                            <div className="bg-white/20 rounded-full p-6 mb-6 backdrop-blur-sm">
                                                <IconComponent size={48} className="text-white"/>
                                            </div>
                                            <h3 className="text-2xl font-bold text-center mb-4">
                                                {serviceName}
                                            </h3>
                                            <p className="text-center text-white/90 leading-relaxed">
                                                {serviceData.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex-1 space-y-8">
                        <div className="space-y-6">
                            {entries.map(([serviceName, serviceData], index) => (
                                <div
                                    key={serviceName}
                                    className={`transition-all duration-500 ${
                                        isTopItem(index)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4 absolute'
                                    }`}
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">

                                        <div className="space-y-3">
                                            {serviceData.points.map((point, pointIndex) => (
                                                <div key={pointIndex} className="flex items-start gap-3">
                                                    <div
                                                        className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-slate-700 leading-relaxed">{point}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-2 mt-8">
                            {entries.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (!isAnimating && index !== currentIndex) {
                                            setIsAnimating(true);
                                            setPreviousIndex(currentIndex);
                                            setCurrentIndex(index);
                                            setTimeout(() => setIsAnimating(false), 800);
                                        }
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        isTopItem(index)
                                            ? 'bg-primary-400 scale-125'
                                            : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to service ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;