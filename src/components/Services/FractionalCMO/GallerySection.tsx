import React, { useState, useEffect } from 'react';
import {
    CreditCard,
    Factory,
    Dumbbell,
    Fuel,
    UtensilsCrossed,
    Truck
} from 'lucide-react';
interface Industry {
    id: number;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    imageUrl: string;
    overlay: string;
    size: 'large' | 'medium' | 'small';
}

const industries: Industry[] = [
    {
        id: 1,
        title: "Banking & Financial Services",
        icon: CreditCard,
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        overlay: "from-purple-600/80 to-pink-600/80",
        size: "large"
    },
    {
        id: 2,
        title: "Manufacturing",
        icon: Factory,
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop",
        overlay: "from-blue-600/80 to-cyan-600/80",
        size: "medium"
    },
    {
        id: 3,
        title: "Health care & Fitness",
        icon: Dumbbell,
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        overlay: "from-teal-600/80 to-green-600/80",
        size: "medium"
    },
    {
        id: 4,
        title: "Gas & Oil Production",
        icon: Fuel,
        imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop",
        overlay: "from-blue-700/80 to-indigo-700/80",
        size: "large"
    },
    {
        id: 5,
        title: "Restaurant Order & Food Delivery",
        icon: UtensilsCrossed,
        imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop",
        overlay: "from-green-700/80 to-emerald-700/80",
        size: "large"
    },
    {
        id: 6,
        title: "Transportation and Logistics",
        icon: Truck,
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop",
        overlay: "from-orange-600/80 to-red-600/80",
        size: "medium"
    }
];

export default function IndustriesGrid() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
                        setVisibleCards(prev => [...new Set([...prev, cardId])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = document.querySelectorAll('[data-card-id]');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'col-span-2 row-span-1 h-64';
            case 'medium':
                return 'col-span-1 row-span-1 h-64';
            default:
                return 'col-span-1 row-span-1 h-48';
        }
    };

    return (
        <section className="py-10 px-4">
            <div className="container mx-auto">
                <div className={`text-center mb-16 transition-all duration-1000 ${visibleCards ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold font-button  mb-8 leading-tight">

                        <span className="text-primary">
              Industries
            </span>
                        {' '}We Work With
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        const isVisible = visibleCards.includes(industry.id);

                        return (
                            <div
                                key={industry.id}
                                data-card-id={industry.id}
                                className={`
                  relative group cursor-pointer overflow-hidden rounded-2xl
                  ${getSizeClasses(industry.size)}
                  transform transition-all duration-700 ease-out
                  ${isVisible
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-12 opacity-0 scale-95'
                                }
                  hover:scale-105 hover:shadow-2xl
                `}
                                style={{
                                    transitionDelay: `${index * 150}ms`,
                                    animationDelay: `${index * 150}ms`
                                }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${industry.imageUrl})` }}
                                />

                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${industry.overlay} transition-opacity duration-300 group-hover:opacity-90`} />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                    <div className="flex justify-between items-start">
                                        <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                                        <div className="w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold leading-tight mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">
                                            {industry.title}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-20 group-hover:bg-white" />
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}