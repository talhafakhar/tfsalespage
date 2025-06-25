import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ExternalLink,
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const Footer: React.FC = () => {
    const footerSections: FooterSection[] = [
        {
            title: "Services",
            links: [
                { label: "Fractional CMO", href: "/fractional-cto" },
                { label: "Fractional CTO", href: "/fractional-cto" },
                { label: "Fractional SDR", href: "/fractional-sdr" },
                { label: "AAS", href: "/ass" },
                { label: "Sales Automation", href: "/sales-automation" },
                { label: "Sales Consultation", href: "/sales-consultation" },
            ]
        },
        {
            title: "Links",
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },

            ]
        },
        {
            title: "Free Consultation",
            links: [
                { label: "Book a Call", href: "#book-call" },
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: "#facebook", label: "Facebook" },
        { icon: Twitter, href: "#twitter", label: "Twitter" },
        { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
        { icon: Instagram, href: "#instagram", label: "Instagram" },
    ];

    return (
        <footer className="bg-secondary-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-primary-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* Company Info - Left Column */}
                        <div className="lg:col-span-2">
                            {/* Logo */}
                            <Link href="/" className="flex items-center mb-5 group">
                                <div className="flex">
                                    <div className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                        <Image
                                            src="/assets/logo.webp"
                                            alt="logo"
                                            width={42}
                                            height={42}
                                        />
                                    </div>
                                </div>
                                <span className="font-logo text-xl text-white">
    Business Solution
  </span>
                            </Link>

                            {/* Description */}
                            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                We help ambitious founders build scalable growth systems, break through revenue plateaus, and achieve extraordinary results with proven strategies and senior-level execution.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="font-medium">hello@tfbusinessSolution.com</p>
                                        <p className="text-sm text-slate-400">Get in touch</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                        <p className="text-sm text-slate-400">Talk to an expert</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="font-medium">San Francisco, CA</p>
                                        <p className="text-sm text-slate-400">Office</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => {
                                        const SocialIcon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                className="group w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                                aria-label={social.label}
                                            >
                                                <SocialIcon size={18} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-4 gap-8">
                                {footerSections.map((section, sectionIndex) => (
                                    <div key={sectionIndex}>
                                        <h4 className="text-lg font-semibold text-white mb-6 relative">
                                            {section.title}
                                            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
                                        </h4>
                                        <ul className="space-y-3">
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href={link.href}
                                                        className="group flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                                                    >
                                                        <span>{link.label}</span>
                                                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-white text-center md:text-left">
                            <p>&copy; 2025 TF Business Solutions. All rights reserved.</p>
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            aria-label="Back to top"
                        >
                            <ArrowRight size={20} className="text-white transform -rotate-90 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;