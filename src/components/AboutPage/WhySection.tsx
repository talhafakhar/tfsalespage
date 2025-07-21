import { useEffect, useState } from "react";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

const WhySection = () => {
    const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = parseInt(entry.target.getAttribute('data-section') || '0');
                    setIsVisible(prev => ({
                        ...prev,
                        [sectionId]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center" data-section="1">
                    <div className={`transform transition-all duration-1000 delay-200 ${
                        isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {/* Header with accent */}
                        <div className="mb-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Why We Started{" "}
                                <span className="text-primary relative">
                  TF Business Solutions
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
                </span>
                            </h2>
                        </div>

                        {/* Content with better spacing */}
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                We&#39;ve been in your shoes. The late nights wondering if your marketing strategy is right.
                                The technical decisions that could make or break your platform. The sales conversations
                                that never seem to convert.
                            </p>
                            <p className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                After years of watching talented founders burn through runway hiring the wrong people
                                or struggling alone, we realized there had to be a better way. What if you could access
                                senior-level expertise exactly when you need it?
                            </p>
                            <p className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                That&#39;s why we created TF Business Solutions—to be the growth partners you can&#39;t afford
                                to hire full-time, but can&#39;t afford to go without.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <button className="group bg-primary text-black font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                                Learn More About Us
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Stats with modern cards */}
                        <div className="mt-12 grid grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <Users className="w-6 h-6 text-primary" />
                                    <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors">200+</div>
                                </div>
                                <div className="text-gray-400 font-medium">Startups Helped</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                    <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors">$50M+</div>
                                </div>
                                <div className="text-gray-400 font-medium">Revenue Generated</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image Section */}
                    <div className={`transform transition-all duration-1000 delay-400 ${
                        isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="relative">
                            {/* Main image with enhanced styling */}
                            <div className="relative overflow-hidden rounded-3xl">

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-8 -right-6 bg-primary text-black p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">5+</div>
                                    <div className="text-sm font-semibold">Years Building</div>
                                    <div className="text-sm font-semibold">Startups</div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
