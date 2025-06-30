import React from 'react';

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
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/gnome2.svg",
        },
        {
            name: "Kiewit",
            url: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/eff.svg",
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
            <section className="relative w-full bg-secondary/90 py-10 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl  font-bold text-white mb-4 tracking-tight">
                            Trusted by Industry Leaders
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex w-max animate-scroll"
                            >
                                {duplicatedLogos.map((logo, index) => (
                                    <div
                                        key={`logo-${index}`}
                                        className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center group"
                                    >
                                        <div className="relative w-full h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl ">
                                            <img
                                                src={logo.url}
                                                alt={`${logo.name} logo`}
                                                className="max-w-[80%] max-h-[60%] object-contain filter brightness-0 invert opacity-60 group-hover:opacity-90 transition-all duration-500 relative z-10"
                                                loading="lazy"
                                            />
                                        </div>
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