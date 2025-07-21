import React, { useEffect, useState, useRef } from 'react';

const HeadlineSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isCounterVisible) {
                    setIsCounterVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(counterRef.current);
            }
        };
    }, [isCounterVisible]);

    useEffect(() => {
        if (isCounterVisible) {
            const increment1 = setInterval(() => {
                setCount1(prev => {
                    if (prev >= 30) {
                        clearInterval(increment1);
                        return 30;
                    }
                    return prev + 10;
                });
            }, 20);

            const increment2 = setInterval(() => {
                setCount2(prev => {
                    if (prev >= 97) {
                        clearInterval(increment2);
                        return 97;
                    }
                    return prev + 2;
                });
            }, 30);

            const increment3 = setInterval(() => {
                setCount3(prev => {
                    if (prev >= 5) {
                        clearInterval(increment3);
                        return 5;
                    }
                    return prev + 1;
                });
            }, 500);

            return () => {
                clearInterval(increment1);
                clearInterval(increment2);
                clearInterval(increment3);
            };
        }
    }, [isCounterVisible]);

    return (
        <section className="relative px-4 w-full py-16  overflow-hidden bg-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight font-clash leading-tight">
                        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block mb-2">Strategy.</span>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block text-primary mb-2">Execution.</span>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block mb-2">Results.</span>
                        </div>
                    </h1>
                </div>
                <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="mb-8">
                        <h2 className="text-lg md:text-2xl text-gray-800 leading-tight mb-4 font-manrope">Fractional C-level leaders who guide, empower, and execute within your current team.
                        </h2>
                    </div>
                </div>
                <div
                    ref={counterRef}
                    className={`transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-1 font-clash">
                                {count1}+
                            </div>
                            <div className="text-sm font-dm-sans">Startups Helped</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-1 font-clash">
                                {count2}%
                            </div>
                            <div className="text-sm font-dm-sans">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-1 font-clash">
                                {count3}x
                            </div>
                            <div className="text-sm font-dm-sans">Faster Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeadlineSection;