import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const [isVisible, setIsVisible] = useState(false);
    const [slotsLeft, setSlotsLeft] = useState(0);
    const [weekLabel, setWeekLabel] = useState("");
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59,
    });


    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
        const today = new Date();
        const day = today.getDate();
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        const weekNumber = Math.ceil(day / 7);
        let slots = 0;
        let label = "";

        switch (weekNumber) {
            case 1:
                slots = 4;
                label = "1st week";
                break;
            case 2:
                slots = 3;
                label = "2nd week";
                break;
            case 3:
                slots = 2;
                label = "3rd week";
                break;
            case 4:
                slots = 1;
                label = "4th week";
                break;
            default:
                if (day === lastDay) {
                    slots = 0;
                    label = "Last day of the month";
                } else {
                    slots = 0;
                    label = "No slots available";
                }
        }

        setSlotsLeft(slots);
        setWeekLabel(label);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);    return (
        <nav className={`transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} ${scrolled ? 'bg-secondary backdrop-blur-md shadow-lg ' : 'bg-black backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center  group">
                        <div className="flex">
                            <div className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                <Image
                                    src="/assets/logo.webp"
                                    alt="logo"
                                    width={42}
                                    height={42}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <span className="font-logo text-lg lg:text-xl text-white text-nowrap">
    Business Solutions
  </span>
                    </Link>
                    <div>
                        <button
                            onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')}
                            className="w-full group relative py-2 px-4 sm:px-6 bg-primary text-secondary font-button font-bold rounded overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span className="tracking-wide">GET STARTED</span>
                                    <div className="relative">
                                        <svg
                                            className="w-6 h-6 transform group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500 animate-bounce-subtle"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>


                                        <svg
                                            className="absolute inset-0 w-6 h-6 opacity-0 group-hover:opacity-40 transform translate-x-1 group-hover:translate-x-4 transition-all duration-500 delay-100"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>

                    <svg
                        className="absolute inset-0 w-6 h-6 opacity-0 group-hover:opacity-20 transform translate-x-2 group-hover:translate-x-5 transition-all duration-500 delay-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-2 gap-5 flex flex-wrap justify-center items-center px-4 text-center text-xs sm:text-sm md:text-base font-medium">
      <span>
        ⚡ LIMITED TIME OFFER: {weekLabel} —{" "}
          <strong>{slotsLeft} {slotsLeft === 1 ? "slot" : "slots"} available!</strong> <br />
        Book your Discovery Call today & get a FREE Sales Audit ($297 Value)! Expires in:
      </span>

                <div className="flex flex-wrap gap-2">
                    {["hours", "minutes", "seconds"].map((unit) => (
                        <div
                            key={unit}
                            className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-center shadow-md"
                        >
            <span className="font-mono text-base sm:text-lg">
              {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, "0")}
            </span>
                            <span className="text-[10px] block uppercase tracking-widest">
              {unit.slice(0, 3)}
            </span>
                        </div>
                    ))}
                </div>
            </div>        </nav>
    );
};

export default Navbar;