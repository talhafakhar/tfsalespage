import React from 'react';
import Image from 'next/image';
type InfiniteLogoSlider = {
    title: string;
}
const InfiniteLogoSlider:React.FC<InfiniteLogoSlider> = ({title}) => {
    const logos = [
        {
            name: "Desktop",
            url: "/assets/desktopLogo.svg",
        },
        {
            name: "Mesha",
            url: "/assets/mesha.svg",
        },
        {
            name: "Musings",
            url: "/assets/musings.webp",
        },
        {
            name: "pak wheel",
            url: "/assets/pak-wheel.svg",
        },
        {
            name: "Pandora",
            url: "/assets/pandora.webp",
        },
        {
            name: "Serve Co",
            url: "/assets/serve_co_logo.webp",
        },
    ];
    const duplicatedLogos = Array.from({ length: 100 }, () => logos).flat();
    return (
        <section className="relative w-full bg-black py-8 overflow-hidden">
            <div className="container  mx-auto w-full flex flex-col md:flex-row px-4 items-center md:items-start gap-6 md:gap-0">
             <div>
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  border-b-2 md:border-b-0 md:border-r-4 text-white  text-center w-full  pb-4 md:pb-0">
                     {title}
                 </h2>
             </div>

                <div className="relative w-full md:w-4/5">
                    <div className="overflow-hidden">
                        <div
                            className="flex w-max animate-scroll gap-6 sm:gap-8 md:gap-12 items-center"
                        >
                            {duplicatedLogos.map((logo, index) => {
                                const isSvg = logo.url.endsWith('.svg');
                                return (
                                    <div
                                        key={`logo-${index}`}
                                        className="flex-shrink-0 w-20 sm:w-28 md:w-36 lg:w-40 h-10 sm:h-14 md:h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0 transform hover:scale-105"
                                    >
                                        {isSvg ? (
                                            <Image
                                                src={logo.url}
                                                alt={logo.name}
                                                className="max-w-full max-h-full object-contain"
                                                loading="lazy"
                                                width={200}
                                                height={200}
                                            />
                                        ) : (
                                            <Image
                                                src={logo.url}
                                                alt={logo.name}
                                                width={200}
                                                height={200}
                                                loading="lazy"
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default InfiniteLogoSlider;