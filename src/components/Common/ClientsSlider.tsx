import React from 'react';
import Image from 'next/image';
const LogoSlider = () => {
    const logos = [
        { id: 1, src: '/assets/body-factory.webp', alt: 'Client Logo 1' },
        { id: 2,  src: '/assets/dapp.webp', alt: 'Client Logo 2' },
        { id: 3,  src: '/assets/grit-coaches.webp', alt: 'Client Logo 3' },
        { id: 4, src: '/assets/maxima.webp', alt: 'Client Logo 4' },
        { id: 5, src: '/assets/pac.webp', alt: 'Client Logo 5' },
        { id: 6,  src: '/assets/redfluffy.webp', alt: 'Client Logo 6' },
        { id: 7,  src: '/assets/vasl.webp', alt: 'Client Logo 7' },
        { id: 8,  src: '/assets/xa-studios.webp', alt: 'Client Logo 8' },
    ];
    const duplicatedLogos = Array.from({ length: 100 }, () => logos).flat();

    return (
        <div className="flex items-center justify-center mt-10 max-w-5xl mx-auto ">
            <div className="w-full">
                <div className="text-center mb-5">
                    <h2 className="text-xl font-bold text-white">
                        Trusted by Industry Leader
                    </h2>
                </div>

                <div className="relative overflow-hidden rounded-xl p-2">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-black via-black/60 to-transparent" />

                    {/* Right black shadow */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-black via-black/60 to-transparent" />

                    <div className="flex items-center">
                        <div className="flex animate-scroll gap-3"> {/* smaller gap */}
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={`${logo.id}-${index}`}
                                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full overflow-hidden border border-primary-500/30 shadow-md bg-white/5 backdrop-blur" // smaller box
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={64}
                                        height={64}
                                        className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-100" // smaller image
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 700s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default LogoSlider;