import React from 'react';
const CanvasHeroSection: React.FC = () => {
    return (
        <section className="px-4 w-full py-10 overflow-hidden">
            <div className="flex items-center justify-center  ">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Tagline */}
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
                            <span className="block drop-shadow-sm">Faster.</span>
                            <span className="block  text-primary drop-shadow-lg">
                Smarter.
              </span>
                            <span className="block drop-shadow-sm">Leaner.</span>
                        </h1>
                    </div>

                    {/* Main Headline */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight mb-6 drop-shadow-sm">
                            We Help Founders Go From{' '}
                            <span className="text-primary drop-shadow-lg">
                Idea to Revenue
              </span>
                            <br />
                            With Fractional Growth Leadership
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto mb-12">
                        <p className="text-lg leading-relaxed drop-shadow-sm">
                            You have the vision. You are building something with real potential. But hiring full time marketing,
                            tech, and sales leadership this early can slow you down or drain your runway. That is why{' '}
                            <span className="text-primary font-semibold">TF Business Solutions</span> exists.
                            We bring you experienced CMO, CTO, and SDR leadership on demand. Quick to launch,
                            budget friendly, and designed to accelerate your business growth.
                        </p>
                    </div>

                    <div className="flex  gap-4 justify-center items-center">
                        <button className="group text-sm  p-2 bg-primary text-secondary font-button font-bold rounded-md overflow-hidden transition-all duration-700">
                                        <span className="relative z-10 flex items-center space-x-2">
                    <span className="tracking-wide">Get Growth Advice</span>
                    <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CanvasHeroSection;