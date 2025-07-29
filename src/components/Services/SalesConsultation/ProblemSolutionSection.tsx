import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    DollarSign,
    MailCheck,
    BadgeDollarSign,
    Linkedin,
    Twitter,
    UserCheck,
    Workflow,
    BarChart3,
    Zap,
    CheckCircle,
    XCircle,
    ArrowRight,
    MessageCircleWarning,
    Hourglass, MicOff, Handshake, MailWarning,
    UserX, Frown
} from 'lucide-react';

const AnimatedCanvas: React.FC<{ type: 'negative' | 'positive' }> = ({ type }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 300;
        canvas.height = 200;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            opacity: number;
        }> = [];

        // Create particles
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                color: type === 'positive' ? '#10b981' : '#ef4444',
                opacity: Math.random() * 0.8 + 0.2
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connecting lines
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const distance = Math.sqrt(
                        Math.pow(particle.x - otherParticle.x, 2) +
                        Math.pow(particle.y - otherParticle.y, 2)
                    );

                    if (distance < 80) {
                        ctx.beginPath();
                        ctx.strokeStyle = `${particle.color}${Math.round((1 - distance / 80) * 255).toString(16).padStart(2, '0')}`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Keep within bounds
                particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                particle.y = Math.max(0, Math.min(canvas.height, particle.y));

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `${particle.color}${Math.round(particle.opacity * 255).toString(16).padStart(2, '0')}`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [type]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

const ProblemsSolutionSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const inHouseData = {
        title: "Problems",
        color: "from-red-500 to-red-700",
        icon: Frown,
        canvasType: 'negative' as const,
        features: [
            {
                text: "High email open rates but no responses",
                icon: MailWarning,
                positive: false,
            },
            {
                text: "Meetings booked but deals don't close",
                icon: Handshake,
                positive: false,
            },
            {
                text: "Sales team costs money but brings no results",
                icon: DollarSign,
                positive: false,
            },
            {
                text: "LinkedIn outreach gets ignored or blocked",
                icon: UserX,
                positive: false,
            },
            {
                text: "Twitter followers but no business inquiries",
                icon: Users,
                positive: false,
            },
            {
                text: "Waiting for inbound leads that never come",
                icon: Hourglass,
                positive: false,
            },
            {
                text: "Pitches sound good but don’t convert",
                icon: MicOff,
                positive: false,
            },
            {
                text: "Confused about what messaging actually works",
                icon: MessageCircleWarning,
                positive: false,
            },

        ]
    };

    const fractionalData = {
        title: "Solutions",
        color: "from-green-500 to-green-700",
        icon: Zap,
        canvasType: 'positive' as const,
        features: [
            {
                text: "We fix your email copy and follow-up sequence",
                icon: MailCheck,
                positive: true,
            },
            {
                text: "We show you proven closing techniques that actually work",
                icon: BadgeDollarSign,
                positive: true,
            },
            {
                text: "We train your team to actually sell and close deals",
                icon: Handshake,
                positive: true,
            },
            {
                text: "We create LinkedIn strategies that build real relationships and generate leads",
                icon: Linkedin,
                positive: true,
            },
            {
                text: "We turn your Twitter presence into a lead generation machine",
                icon: Twitter,
                positive: true,
            },
            {
                text: "We build systems that attract qualified prospects to contact you first",
                icon: Users,
                positive: true,
            },
            {
                text: "We show you how to convert community connections into paying customers",
                icon: UserCheck,
                positive: true,
            },
            {
                text: "We create a multichannel approach that works together to maximize conversions",
                icon: Workflow,
                positive: true,
            },
            {
                text: "We test and build the right channels for your business",
                icon: BarChart3,
                positive: true,
            },
        ]
    };

    const ComparisonCard = ({ data, delay }: { data: typeof inHouseData | typeof fractionalData, delay: number }) => {
        const IconComponent = data.icon;
        return (
            <motion.div
                initial={{ opacity: 0, y: 100, rotateY: -30 }}
                animate={isVisible ? {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: {
                        delay,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                    }
                } : {}}
                className="relative group perspective-1000"
            >
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <AnimatedCanvas type={data.canvasType} />
                </div>
                <motion.div
                    whileHover={{
                        rotateY: 5,
                        transition: { duration: 0.3 }
                    }}
                    className="relative backdrop-blur-xl border border-white rounded-3xl p-5  shadow-2xl h-full transition-all duration-500 overflow-hidden"
                >
                    <motion.div
                        animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${data.color} rounded-full blur-xl opacity-30`}
                    />

                    <div className="text-center mb-8 relative z-10">
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${data.color} text-white mb-6 shadow-2xl relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                            <IconComponent className="w-10 h-10 relative z-10" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-3">{data.title}</h3>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: 80 } : {}}
                            transition={{ delay: delay + 0.5, duration: 0.8 }}
                            className={`h-1 bg-gradient-to-r ${data.color} mx-auto rounded-full`}
                        />
                    </div>
                    <div className="space-y-1 relative z-10 min-h-[300px]">
                        {data.canvasType === 'negative' ? (
                            <div className="relative h-80 overflow-hidden">
                                {data.features.map((feature, index) => {
                                    const StatusIcon = feature.positive ? CheckCircle : XCircle;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: -100 }}
                                            animate={isVisible ? {
                                                opacity: [0, 1, 1, 0],
                                                y: [-100, 50 + (index * 45), 50 + (index * 45), 650],
                                                transition: {
                                                    delay: delay + 0.5 + (index * 0.8),
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    repeatDelay: 2,
                                                    ease: "easeInOut"
                                                }
                                            } : {}}
                                            className="absolute left-0 right-0"
                                            style={{ top: 0 }}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-red-500/20 border border-red-500 backdrop-blur-sm rounded-full px-4 py-3 mx-auto w-fit shadow-lg"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <StatusIcon className="w-5 h-5 text-red-400" />
                                                    <span className="text-white font-medium text-sm">
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ) : (
                            data.features.map((feature, index) => {
                                const StatusIcon = feature.positive ? CheckCircle : XCircle;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isVisible ? {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                delay: delay + 0.3 + (index * 0.1),
                                                duration: 0.6,
                                                type: "spring",
                                                stiffness: 120
                                            }
                                        } : {}}
                                        whileHover={{
                                            x: 10,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex items-start space-x-4 group/item  rounded-xl p-3 transition-all duration-300"
                                    >
                                        <div className="flex items-center space-x-3 flex-shrink-0">
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <StatusIcon
                                                    className={`w-6 h-6 ${feature.positive ? 'text-green-400' : 'text-red-400'} drop-shadow-lg`}
                                                />
                                            </motion.div>
                                        </div>
                                        <span className="text-white group-hover/item:text-foreground transition-colors leading-relaxed font-medium">
                                            {feature.text}
                                        </span>
                                    </motion.div>
                                );
                            })
                        )}
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className=" bg-secondary py-8 md:py-15 px-4">
            <div className="container mx-auto  overflow-hidden">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                        Sales Problems {' '}
                        <span className="text-primary">
              We Fix
            </span>
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        From stuck to scaling — real sales transformations we delivered.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto relative">
                    <ComparisonCard data={inHouseData} delay={0.2} />
                    <ComparisonCard data={fractionalData} delay={0.4} />
                </div>
                <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                    <button
                        className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                    >
                        Book A Free Sales Audit
                        <span
                            className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProblemsSolutionSection;