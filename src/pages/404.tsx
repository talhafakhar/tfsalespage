// pages/404.tsx
import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/footer";

function Starfield() {
    const stars = useMemo(
        () =>
            Array.from({ length: 90 }).map((_, i) => ({
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() < 0.85 ? Math.random() * 1.6 + 0.6 : Math.random() * 2.2 + 1.2,
                delay: Math.random() * 2,
                duration: Math.random() * 2 + 2,
            })),
        []
    );

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {stars.map((s) => (
                <motion.span
                    key={s.id}
                    className="absolute rounded-full bg-white/80"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        boxShadow: "0 0 6px rgba(255,255,255,0.4)",
                    }}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: [0.25, 0.9, 0.25] }}
                    transition={{ delay: s.delay, duration: s.duration, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

function ProtocolDroid({
                           className,
                           armRotation = 18,
                       }: {
    className?: string;
    armRotation?: number;
}) {
    return (
        <motion.svg
            viewBox="0 0 360 360"
            className={className}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <defs>
                <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D76E" />
                    <stop offset="45%" stopColor="#E9C243" />
                    <stop offset="100%" stopColor="#A97918" />
                </linearGradient>
                <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CDAF49" />
                    <stop offset="100%" stopColor="#8C6616" />
                </linearGradient>
            </defs>

            <g>
                <ellipse cx="180" cy="80" rx="56" ry="62" fill="url(#gold)" stroke="#2b2b2b" strokeWidth="3" />
                <rect x="132" y="62" width="96" height="7" rx="3.5" fill="url(#goldDark)" opacity="0.9" />
                <motion.circle
                    cx="160"
                    cy="84"
                    r="10"
                    fill="#1F2937"
                    initial={{ r: 10 }}
                    animate={{ r: [10, 2, 10] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", times: [0, 0.05, 0.1] }}
                />
                <motion.circle
                    cx="200"
                    cy="84"
                    r="10"
                    fill="#1F2937"
                    initial={{ r: 10 }}
                    animate={{ r: [10, 10, 2, 10] }}
                    transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", times: [0, 0.6, 0.65, 0.7] }}
                />
                {/* Head seam */}
                <path d="M140,50 Q180,30 220,50" stroke="#5b4a1d" strokeWidth="3" fill="none" opacity="0.6" />
            </g>

            {/* Neck ring */}
            <rect x="160" y="130" width="40" height="16" rx="8" fill="url(#goldDark)" />

            {/* Torso */}
            <g>
                <rect x="128" y="148" width="104" height="120" rx="18" fill="url(#gold)" stroke="#2b2b2b" strokeWidth="3" />
                {/* Chest greebles */}
                <circle cx="180" cy="196" r="22" fill="url(#goldDark)" opacity="0.9" />
                <circle cx="180" cy="196" r="10" fill="#111827" />
                <rect x="142" y="232" width="76" height="10" rx="5" fill="#111827" opacity="0.6" />
            </g>

            {/* Left arm (relaxed) */}
            <g>
                <rect x="98" y="158" width="26" height="86" rx="13" fill="url(#goldDark)" />
                <circle cx="111" cy="246" r="12" fill="url(#goldDark)" />
            </g>
            <motion.g
                style={{ transformOrigin: "246px 172px" }}
                animate={{ rotate: [armRotation, armRotation - 6, armRotation] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            ><rect x="232" y="158" width="28" height="40" rx="14" fill="url(#goldDark)" />
                <rect x="256" y="170" width="66" height="18" rx="9" fill="url(#gold)" />
                <circle cx="326" cy="179" r="9" fill="#111827" />
                <rect x="318" y="173" width="18" height="6" rx="3" fill="#111827" />
            </motion.g>
            <rect x="138" y="270" width="84" height="12" rx="6" fill="url(#goldDark)" />
            <g opacity="0.8">
                <rect x="146" y="286" width="28" height="44" rx="10" fill="url(#goldDark)" />
                <rect x="186" y="286" width="28" height="44" rx="10" fill="url(#goldDark)" />
            </g>
        </motion.svg>
    );
}

export default function Custom404() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0B0C10] text-white relative overflow-hidden">
            <Navbar />
            <Starfield />
            <main className="flex-1 relative z-10 flex flex-col items-center pt-40 pb-16 px-6">
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-center mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    You’ve entered the <span className="text-primary">Empty Space</span>
                </motion.h1>

                <motion.p
                    className="text-gray-300/90 text-lg md:text-xl text-center max-w-2xl mb-12"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                >
                    Sensors register only silence and the cold vacuum. No beacons. No echoes. <span className="text-white font-semibold">Return to base at once.</span>
                </motion.p>
                <div className="relative w-[340px] h-[360px] md:w-[420px] md:h-[420px]">
                    <ProtocolDroid className="w-full h-full" />
                    <motion.div
                        className="absolute"
                        style={{
                            left: "68%",
                            top: "48%",
                            transform: "translate(-50%, -50%)",
                        }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 140, damping: 14 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold shadow-lg text-nowrap transition-transform
                         bg-primary text-black hover:scale-105"
                        >
                            Return Home
                        </Link>
                    </motion.div>

                    {/* A soft glow around the button to draw the eye */}
                    <motion.div
                        className="absolute -z-10"
                        style={{ left: "68%", top: "48%", transform: "translate(-50%, -50%)" }}
                        initial={{ opacity: 0.6, scale: 0.9 }}
                        animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.95, 1.05, 0.95] }}
                        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                    >
                        <div className="w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl" />
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
