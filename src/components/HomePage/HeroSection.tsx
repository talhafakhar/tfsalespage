import React, {useEffect, useRef, useState} from 'react';
import Navbar from "@/components/Header/Navbar";
import Image from "next/image";
import LogoSlider from "@/components/Common/ClientsSlider";
const partnerNames: string[] = [
    "B2B SaaS Companies",
    "AI Startups",
    "HealthTech Innovators",
    "FinTech Leaders",
    "Online Marketplaces",
    "Tech-Enabled Services"
];

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const resizeCanvas = () => {
            const container = canvas.parentElement;
            if (container) {
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
            }
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            color: string;
            pulsePhase: number;
        }
        const particles: Particle[] = [];
        const particleCount = 50;
        const colors = ['#facc15', '#eab308', '#ca8a04', '#a16207'];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
        let animationId: number;
        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.02;
            particles.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
                if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
                particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                particle.y = Math.max(0, Math.min(canvas.height, particle.y));
                particle.pulsePhase += 0.02;
                const pulseOpacity = particle.opacity + Math.sin(particle.pulsePhase) * 0.2;
                ctx.save();
                ctx.globalAlpha = Math.max(0.1, pulseOpacity);
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                particles.slice(index + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.save();
                        ctx.globalAlpha = (1 - distance / 100) * 0.2;
                        ctx.strokeStyle = '#facc15';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            });

            ctx.save();
            ctx.globalAlpha = 0.1;
            ctx.strokeStyle = '#facc15';
            ctx.lineWidth = 2;
            const centerX = canvas.width * 0.7;
            const centerY = canvas.height * 0.3;
            const radius = 40;
            const rotation = time * 0.5;

            ctx.translate(centerX, centerY);
            ctx.rotate(rotation);
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = '#facc15';
            const circle1X = canvas.width * 0.8 + Math.sin(time * 0.8) * 20;
            const circle1Y = canvas.height * 0.6 + Math.cos(time * 0.6) * 15;
            ctx.beginPath();
            ctx.arc(circle1X, circle1Y, 25, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            animationId = requestAnimationFrame(animate);
        };
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="bg-black">
            <Navbar/>
            <section className="bg-gradient-to-br from-black via-secondary-950 to-secondary-900 relative overflow-hidden flex items-center">
                <div className="absolute inset-0">
                    <div
                        className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
                    <div
                        className="absolute top-40 right-20 w-24 h-24 bg-primary-400/20 rounded-lg rotate-45 animate-bounce-subtle"></div>
                    <div
                        className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-600/5 rounded-full animate-pulse delay-1000"></div>
                    <div
                        className="absolute bottom-20 right-10 w-28 h-28 bg-primary-500/15 rounded-lg animate-bounce-subtle delay-2000"></div>
                    <div
                        className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500/5 via-transparent to-primary-600/5 animate-pulse"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 pb-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">
                        <div className="text-center md:text-start ">
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h1 className="text-5xl sm:text-6xl  font-heading font-bold text-white mb-6 leading-tight">
                                    Build, Scale, and <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent flex justify-center lg:justify-start">
                    Automate
                  </span> Your Startup.
                                </h1>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-button font-bold mb-8 flex justify-center lg:justify-start items-center space-x-4 bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                                    Faster. Smarter. Leaner
                                </div>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className="text-gray-300 mb-8 max-w-xl">
                                    <span className="text-primary-400 font-semibold">Fractional CMO, CTO, and SDR services</span> tailored
                                    for founders who want
                                    <span className="text-white font-medium"> senior-level execution</span> without
                                    full-time costs or burnout.
                                </p>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start items-center mb-4">
                                    <button className="group text-sm relative p-2 bg-primary-gradient text-secondary-950 font-button font-bold rounded-md overflow-hidden transition-all duration-700 hover:animate-glow-pulse transform hover:scale-110 active:scale-95 hover:rotate-1">
                                        <div
                                            className="absolute inset-0 bg-primary-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div
                                            className="absolute inset-0 bg-primary-gradient-intense opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>

                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform animate-shimmer"></div>
                                        </div>

                                        <span className="relative z-10 flex items-center space-x-2">
                    <span className="tracking-wide">Get Expert Growth Advice Free</span>
                    <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </span>
                                    </button>

                                    {/* Secondary CTA */}
                                    <button
                                        className="group relative p-2 border bg-white/20 text-sm border-primary-500 text-primary-500 hover:text-secondary-950 font-button font-bold rounded-md overflow-hidden transition-all duration-500 transform hover:scale-105">
                                        <div
                                            className="absolute inset-0 bg-primary-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <span>See How We Scale Startups</span>
                  </span>
                                    </button>
                                </div>
                            </div>
                            <div className={`transform transition-all duration-1000 delay-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}><div className="text-center  justify-center flex gap-2 mb-4">
                                    <h3 className="text-lg font-medium  text-white tracking-wide">
                                        We Partner With
                                    </h3>
                                    <Image src="/assets/svg/downArrow.svg" alt="arrow" className='mt-3' width={24} height={24}/>
                                </div><div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                    {partnerNames.map((name, index) => (
                                        <div
                                            key={name}
                                            className={`
              group relative
              bg-gray-800/40 
              border border-primary-500/40
              rounded
              px-2 py-1
              text-center
              transition-all duration-500 ease-out
              cursor-default
              backdrop-blur-sm
              shadow-lg shadow-primary-500/10
              transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
                                            style={{
                                                transitionDelay: `${400 + (index * 100)}ms`
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                                            <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
              {name}
            </span>

                                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-400/5 to-primary-600/10 rounded-xl" />
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    ))}
                                </div></div>
                        </div>
                        <div className={`flex-1 max-w-xs sm:max-w-md md:max-w-lg w-full transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="relative">
                                <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-primary-500/20 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 backdrop-blur-sm">
                                    <canvas
                                        ref={canvasRef}
                                        className="absolute inset-0 w-full h-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="relative">
                                            <Image
                                                src="/assets/man.png"
                                                alt="Hero Image"
                                                width={384}
                                                height={384}
                                                className="object-cover rounded-2xl shadow-2xl border border-primary-500/30 animate-float"
                                            />
                                            <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Overlay Elements */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {/* Floating Icons */}
                                        <div className="absolute top-8 left-8 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center animate-bounce-subtle">
                                            <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>

                                        <div className="absolute top-20 right-12 w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center animate-pulse">
                                            <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>

                                        <div className="absolute bottom-12 left-12 w-14 h-14 bg-primary-400/15 rounded-2xl flex items-center justify-center animate-bounce-subtle delay-1000">
                                            <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                            </svg>
                                        </div>

                                        <div className="absolute bottom-20 right-8 w-11 h-11 bg-primary-600/25 rounded-xl flex items-center justify-center animate-pulse delay-500">
                                            <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-600/5 pointer-events-none"></div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500/30 rounded-full animate-ping"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400/40 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                    <hr className="max-w-xl mx-auto px-2 py-2"/>
                    <LogoSlider/>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;