import {Smartphone} from "lucide-react";
import React from "react";
export default function TakeFirstStepBanner() {
    return (
        <section className="relative bg-[#54595F] font-nunito bg-[url('/assets/home/banner-background.webp')] bg-cover bg-center text-white py-16 px-4">
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-2 font-nunito leading-snug"     style={{fontWeight: 800}}>
                    Take The <span className="text-yellow-400">First Step</span>
                </h2>
                <p className="text-lg font-medium text-white mb-8">
                    If you’re prepared for this commitment, let’s embark on this journey together. Talha Fakhar’s Sales Development Consultancy – Where Commitment Meets Success.
                </p>
                <div className="flex  justify-center  items-center mt-8">
                    <button
                        onClick={() =>
                            window.open(
                                "https://calendly.com/talhafakhar/discoverycall",
                                "_blank"
                            )
                        }
                        className="relative group overflow-hidden inline-flex  items-center px-6 py-3 text-black font-semibold rounded-md bg-white shadow-md"
                    >
                                        <span
                                            className="absolute -left-5 top-0 w-[170px] h-full bg-primary skew-x-[30deg] transition-transform duration-500 ease-in-out group-hover:skew-x-[-30deg]"
                                        />

                        <span className="relative z-10 flex items-center gap-2">
        <Smartphone className="w-5 h-5"/>
        <span className="tracking-wide">Expand Your Sales Channels</span>
      </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
