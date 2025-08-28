import React from 'react';
import {ArrowDown, ArrowLeft, ArrowRight, Check, Clock, Smartphone} from 'lucide-react';

const ConsultancyOffer = () => {
    return (
        <div
            className="relative bg-[#54595F]  font-nunito bg-[url('/assets/home/13662824_5295526-scaled.jpg.webp')] bg-cover bg-center text-white py-10 px-4">
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
            <div className="text-center max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-[32px]  text-center max-w-4xl mx-auto mb-4 font-nunito leading-snug"
                    style={{fontWeight: 800}}>
                    Now The Million-Dollar Question! How Much Investment{' '}
                    <span className="text-primary">Would You Need For My Consultancy</span>
                </h2>
                <p className="mb-2 text-sm md:text-base">
                    I have spent thousands of dollars to learn what I know today. Took lessons from the experts in the
                    field and normally such a consultancy alone costs a lot more than what I am about to offer you.
                </p>
                <div className="flex md:flex-row flex-col  justify-center gap-4 items-center">
                    <p className="font-bold text-xl md:border-r-2 border-white mt-4 md:px-4">
                        The Total Value Of Such Consultancy (Minimum 30 Hours) Would Amount
                    </p>
                    <div className="text-2xl font-bold text-white mt-2">$7500</div>
                </div>


            </div>
            <div className="flex justify-center mt-5 items-center w-full text-white relative z-10 animate-bounce">
                <ArrowDown size={100} className="text-white"/>

            </div>
            <div className="mt-5 flex md:flex-row flex-col items-center relative z-10 max-w-7xl mx-auto">
                <h3 className="text-xl md:text-4xl font-bold text-white md:border-r-2 border-white px-2">Value <br/>
                    <span className="text-primary">Proposition</span></h3>
                <p className="mt-2 px-3 font-semibold">
                    Normally, a consultation of such value may cost you at a rate of <span
                    className="line-through text-primary font-bold"> $250 </span> per hour. But as a new year present,
                    we are
                    offering Talha Fakhar’s Game Changing Sales Consultancy only for <span
                    className="font-bold text-yellow-500">$49</span> (Limited Time).And not only that
                    We are also offering consultancy on a phased basis. It means if you think you may need support in a
                    specific module or if you are beyond a specific stage in your sales process then we can support you
                    in the module that you need help with.
                </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-20 relative z-10 max-w-7xl mx-auto">
                {[
                    {
                        title: "Phase 1: Refinement And Research",
                        items: [
                            "Enhancing Sales and Marketing Strategies",
                            "Reputation Management",
                            "Market Trend Research",
                            "Sales Technique Development",
                            "Platform Discovery",
                        ],
                        time: "10 Hours",
                    },
                    {
                        title: "Phase 2: Education And Tool Utilization",
                        items: ["B2B Tools Training", "B2B Sales Channels", "LinkedIn Sales Navigator"],
                        time: "15 Hours – 17 Hours",
                    },
                    {
                        title: "Phase 3: Business Growth And Scaling",
                        items: ["Product Ideation", "Market Analysis", "Product Positioning"],
                        time: "10 Hours – 13 Hours",
                    },
                ].map((phase, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                        {/* Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full w-full min-h-[340px]">
                            <h4 className="font-bold text-black text-xl">{phase.title}</h4>
                            <ul className="space-y-1 mt-2 flex-1">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-black font-bold">
                                        <Check className="text-black w-5 h-5"/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className="border border-black my-2"/>
                            <div className="flex items-center mt-4 text-black">
                                <Clock className="w-4 h-4 mr-2"/> {phase.time}
                            </div>
                        </div>
                        {idx < 2 && (
                            <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 hidden md:block">
                                <ArrowRight size={60}/>
                            </div>
                        )}
                        {idx < 2 && (
                            <div className="mt-4 md:hidden">
                                <ArrowRight size={40} className="rotate-90"/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex  justify-center items-center gap-4 max-w-3xl mx-auto relative z-10">
                <ArrowRight className="text-primary mt-10 md:block hidden" size={130}/>
                <div className="mt-12 bg-white shadow p-6 rounded-lg  max-w-xl mx-auto ">
                    <div className="flex justify-start gap-2 mb-3">
                        <h4 className="font-bold text-black text-xl">Custom Consultation</h4>
                    </div>
                    <div className="gap-2 flex font-semibold text-black">
                        <Check/><p>If you have custom requirements then you can reach out to us and we will create a
                        custom
                        plan for you.</p>
                    </div>
                    <hr className="border border-black my-2"/>
                    <p className="mt-2 font-semibold text-black">On Call</p>
                </div>
                <ArrowLeft className="text-primary mt-10 md:block hidden" size={130}/>
            </div>
            <div
                className="mt-16 -mb-24 bg-white border border-black  rounded-3xl shadow-xl p-6 text-center max-w-4xl mx-auto relative z-99999">
                <h4 className="text-3xl text-[#54595F]  mb-2" style={{fontWeight: 900}}>Wait There Is <span
                    className="text-primary">More</span></h4>
                <p className="text-black mb-4">
                    If you are not satisfied with our consultancy in the initial 2 hours we will provide you with 2
                    hours of free value-filled consultancy with no questions asked.
                </p>
                <div className="flex  justify-center  items-center mb-2">
                    <button
                        onClick={() =>
                            window.open(
                                "https://calendly.com/talhafakhar/discoverycall",
                                "_blank"
                            )
                        }
                        className="relative group overflow-hidden inline-flex items-center px-6 py-3 text-black font-semibold rounded-md bg-white shadow-md"
                    >
                                        <span
                                            className="absolute -left-5 top-0 w-[150px] h-full bg-primary skew-x-[30deg] transition-transform duration-500 ease-in-out group-hover:skew-x-[-30deg]"
                                        />

                        <span className="relative z-10 flex items-center gap-2">
        <Smartphone className="w-5 h-5"/>
        <span className="tracking-wide">Yes Increase My Sales</span>
      </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsultancyOffer;
