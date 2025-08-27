import {Smartphone} from "lucide-react";
import React from "react";

export default function StorySection() {
    return (
        <section className="font-nunito py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-4 font-nunito leading-snug"
                    style={{fontWeight: 800}}>
                    Why Should You Believe A{" "}
                    <span className="text-primary">Single Word I Say?</span>
                </h2>
                <div className="flex md:flex-row flex-col items-center gap-8 text-[#54595F] relative">
                    <div className="space-y-5">
                        <p>
                            Because I have been where you are today. When I started my agency in 2019, I was full of
                            ambition and enthusiasm. A time when I thought that I had it all figured out. I had the best
                            team one could have asked for and every resource needed to deliver a great product to the
                            customers.
                        </p>
                        <p>
                            But one problem that plagued the rise of my agency was SALES!! They just were not enough.
                            When I started my journey back in 2019 I thought having a great product would be enough but
                            boy I was wrong, and I learnt it the hard way. Soon due to lack of funds I had to lay off my
                            employees because I would not have been able to sustain them without any future business
                            opportunity.
                        </p>
                    </div>
                    <div className="hidden md:block absolute left-[49.5%] top-1/2 h-24  bg-black w-1.5"></div>
                    <div className="space-y-5">
                        <p>
                            That day I decided that I would bounce back stronger than ever. I figured out my problem
                            with my lack of funds (It was a lack of sales ‘duh’). I set out on a mission to find a
                            solution to it. I spent a lot of sleepless nights and countless hours in my search. I was
                            determined to fix this issue, and my search led me to this framework that I learned by
                            talking to the sales leaders in my country.
                        </p>
                        <p>
                            From then on it became clear as daylight what I needed to do. I implemented the strategies I
                            learned from the sales champions who had decades of experience backing their theories.
                            Gradually, clients started rolling in and that started another marketing avenue for us known
                            as “word-of-mouth marketing”.
                        </p>
                    </div>
                </div>
                <p className="text-center font-bold mt-12 max-w-4xl mx-auto text-lg">
          <span className="font-bold text-black">
            Fast forward to today we have continued to use the same framework recurrently and it has put our sales process on almost autopilot. It is the elegance of this process that if executed rightly can generate an endless supply of clients for any business.
          </span>
                </p>

                <div className="flex  justify-center  items-center mt-8">
                    <button
                        onClick={() =>
                            window.open(
                                "https://calendly.com/talhafakhar/discoverycall",
                                "_blank"
                            )
                        }
                        className="relative group overflow-hidden inline-flex border items-center px-6 py-3 text-black font-semibold rounded-md bg-white shadow-md"
                    >
                                        <span
                                            className="absolute -left-5 top-0 w-[170px] h-full bg-primary skew-x-[30deg] transition-transform duration-500 ease-in-out group-hover:skew-x-[-30deg]"
                                        />

                        <span className="relative z-10 flex items-center gap-2">
        <Smartphone className="w-5 h-5"/>
        <span className="tracking-wide">Improve Your Sales Strategies</span>
      </span>
                    </button>
                </div>

            </div>
        </section>
    );
}
