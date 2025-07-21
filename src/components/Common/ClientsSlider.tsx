import React from 'react';
import Image from 'next/image';
const InfiniteLogoSlider = () => {
    const logos = [
        {
            name: "Sunbelt Rentals",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/aa.svg",
        },
        {
            name: "Compass",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/compass.svg",
        },
        {
            name: "Blanchard",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/eff.svg",
        },
        {
            name: "Kiewit",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/easypeasy.svg",
        },
        {
            name: "Temple Concrete",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cygwin.svg",
        },
        {
            name: "Arnett",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/easypeasy.svg",
        },
    ];

    const duplicatedLogos = Array.from({ length: 100 }, () => logos).flat();

    return (
        <section className="relative w-full bg-black py-8 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                    Trusted by Industry Leaders
                </h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="
            flex w-max animate-scroll
            gap-12
            items-center
          "
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={`logo-${index}`}
                                    className="
                flex-shrink-0
                w-32 sm:w-40 md:w-48
                h-16 sm:h-20 md:h-24
                flex items-center justify-center
                opacity-70 hover:opacity-100
                transition duration-300
                grayscale hover:grayscale-0
                transform hover:scale-105
              "
                                >
                                    <Image
                                        src={logo.url}
                                        alt="Client Logo"
                                        width={300}
                                        height={300}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default InfiniteLogoSlider;