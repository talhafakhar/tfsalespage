import React from 'react';
import Image from "next/image";

const WhoIsThisFor = () => {
    return (
        <section
            className="bg-cover bg-black bg-center bg-no-repeat py-20 font-nunito"
            style={{ backgroundImage: "url('/assets/home/black-stone-texture-dark-slate-background-top-view.jpg')" }}
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Who Is This For?</h2>
                    <p className="text-lg leading-relaxed">
                        If you’re not prepared to embrace the challenges, work diligently, and persist through
                        the ups and downs, Talha Fakhar’s Sales Development Consultancy might not be the right
                        fit for you.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <Image
                            src="/assets/home/target.webp"
                            alt="Target Icon"
                            className="mx-auto"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsThisFor;
