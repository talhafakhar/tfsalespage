import React from 'react';
import {ArrowRight, ExternalLink, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter,} from 'lucide-react';
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
                {label: "Fractional CMO", href: "/services/fractional-cto"},
                {label: "Fractional CTO", href: "/services/fractional-cto"},
                {label: "Fractional SDR", href: "/services/fractional-sdr"},
                {label: "Agent as a service (AaaS)",   href: "/services/ai-agent-as-a-service",},
                {label: "Sales Automation",  href: "/services/sales-automation-for-startups"},
                {label: "Sales Consultation", href: "/services/b2b-sales-consultation"},
                {label: "Sales Consulting", href: "/sales-consulting"},
            ]
        },
    ];
    const DiscordIcon = () => (
        <svg viewBox="0 0 48 48" width="30" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.54,34.22A47.42,47.42,0,0,1,14.68,38C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31"
                />
                <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.85,22.67a3.48,3.48,0,0,0-3.37,3.9,3.38,3.38,0,0,0,3.31,3.22,3.53,3.53,0,0,0,3.43-3.9A3.45,3.45,0,0,0,17.85,22.67Z"
                />
                <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.2,14.37a28.19,28.19,0,0,1,8.16-2.18A23.26,23.26,0,0,1,24,12a23.26,23.26,0,0,1,3.64.21,28.19,28.19,0,0,1,8.16,2.18m-7.47-2.09,1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.83,44.83,0,0,1,43.5,33S40.7,37.79,33.32,38a47.42,47.42,0,0,1-2.86-3.81m6.46-2.9a29.63,29.63,0,0,1-8.64,3.49,21.25,21.25,0,0,1-4.28.4h0a21.25,21.25,0,0,1-4.28-.4,29.63,29.63,0,0,1-8.64-3.49"
                />
                <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M30.15,22.67a3.48,3.48,0,0,1,3.37,3.9,3.38,3.38,0,0,1-3.31,3.22,3.53,3.53,0,0,1-3.43-3.9A3.45,3.45,0,0,1,30.15,22.67Z"
                />
            </g>
        </svg>
    );


    const socialLinks = [
        {icon: Facebook, href: "https://www.facebook.com/talhafakharofficial", label: "Facebook"},
        {icon: Twitter, href: "https://twitter.com/thetalhafakhar", label: "Twitter"},
        {icon: Linkedin, href: "https://pk.linkedin.com/in/talhafakhar", label: "LinkedIn"},
        {icon: Instagram, href: "https://www.instagram.com/thetalhafakhar/", label: "Instagram"},
        {icon: DiscordIcon, href: "https://lnkd.in/dwA5nG5t", label: "Discord"},
    ];

    return (
        <footer className="bg-secondary border-t text-white relative overflow-hidden">
            <div className='relative container mx-auto px-4'>
                <div className="absolute right-0 top-16 hidden md:block">
                    <Image
                        src="/assets/home/footer-bg.webp"
                        alt="astronot"
                        width={750} loading="lazy"
                        height={750}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20"/>
                <div className="relative">
                    <div className="py-16">
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center mb-5 group">
                                    <div className="flex">
                                        <div
                                            className="w-10 h-9 transform transition-all duration-300 group-hover:rotate-3">
                                            <Image
                                                src="/assets/logo.webp"
                                                alt="logo"
                                                width={42}
                                                loading="lazy"
                                                height={42}
                                            />
                                        </div>
                                    </div>
                                    <span className="font-logo text-xl text-white">
    Business Solution
  </span>
                                </Link>
                                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                    TF Business Solutions offers Fractional CMO, CTO, and SDR services for startups. We help founders scale with sales automation, AI agents, and expert-led team training without the overhead of full-time hires.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <Mail size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">hello@tfbusinesssolutions.com</p>
                                            <p className="font-medium">hello@talhafakhar.com</p>
                                            <p className="text-sm text-slate-400">Get in touch</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <Phone size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">+1 506 700 4391</p>
                                            <p className="font-medium">+92 339 8880 386</p>
                                            <p className="text-sm text-slate-400">Talk to an expert</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                        <div
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <MapPin size={18}/>
                                        </div>
                                        <div>
                                            <p className="font-medium">62-C2, Gulberg 3 , Lahore</p>
                                            <p className="text-sm text-slate-400">Office</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                              <div className="grid grid-cols-1 md:grid-cols-2 ">
                                  {footerSections.map((section, sectionIndex) => (
                                      <div key={sectionIndex}>
                                          <h4 className="text-lg font-semibold text-white mb-6 relative">
                                              {section.title}
                                              <div
                                                  className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
                                          </h4>
                                          <ul className="space-y-3">
                                              {section.links.map((link, linkIndex) => (
                                                  <li key={linkIndex}>
                                                      <a
                                                          href={link.href}
                                                          className="group flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                                                      >
                                                          <span>{link.label}</span>
                                                          <ExternalLink size={14}
                                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                                      </a>
                                                  </li>
                                              ))}
                                          </ul>
                                      </div>
                                  ))}
                                  <div>
                                      <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                                      <div className="flex gap-3">
                                          {socialLinks.map((social, index) => {
                                              const SocialIcon = social.icon;
                                              return (
                                                  <a
                                                      key={index}
                                                      target="_blank"
                                                      href={social.href}
                                                      className="group bg-white/10 px-2 py-1 rounded-lg flex items-center justify-center"
                                                      aria-label={social.label}
                                                  >
                                                      <SocialIcon size={18}
                                                                  className="text-[#afafaf] "/>
                                                  </a>
                                              );
                                          })}
                                      </div>
                                  </div>
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
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                className="group w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="Back to top"
                            >
                                <ArrowRight size={20}
                                            className="text-white transform -rotate-90 group-hover:scale-110 transition-transform duration-300"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;