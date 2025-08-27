import {TrendingUp, Target, Users2, ArrowDown} from "lucide-react";

export default function FoundersSection() {
    return (
        <section className="bg-[#54595F] text-white py-16 px-4 font-nunito">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-[40px] text-white  text-center max-w-4xl mx-auto mb-4 font-nunito leading-snug" style={{fontWeight: 800}}>
                    Why Should Founders And{" "}
                    <span className="text-primary">Business Owners</span> Know About Sales?
                </h2>
                <p className="text-white text-base md:text-[17px] mb-12 max-w-6xl mx-auto">
                    As a founder or business owner, you’re always on the lookout for that game-changing strategy,
                    the key to unlocking unparalleled growth and success. What if we told you that the most powerful
                    tool in your arsenal is something you might be overlooking? It’s Sales – the lifeblood of every successful business!
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="group relative bg-white text-black rounded-xl p-6 shadow-md text-left overflow-hidden transition-all duration-500">
                        <div className="absolute inset-0 bg-[url('/assets/home/Why-Should-Founders-2.webp')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <div className="relative z-10">
                            <TrendingUp className="w-8 h-8 mb-4 transition-colors duration-500 group-hover:text-white" />
                            <h3 className="font-bold text-[20px] mb-2 transition-colors duration-500 group-hover:text-white">
                                Sales = Survival & Success
                            </h3>
                            <p className="transition-colors duration-500 group-hover:text-white">
                                In today&#39;s cutthroat market, your ability to sell effectively isn&#39;t just an asset;
                                it&#39;s a necessity. Without sales, businesses don&#39;t just stagnate; they sink.
                            </p>
                        </div>
                    </div>

                    <div className="group relative bg-white text-black rounded-xl p-6 shadow-md text-left overflow-hidden transition-all duration-500">
                        <div className="absolute inset-0 bg-[url('/assets/home/Why-Should-Founders-4-1.webp')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <div className="relative z-10">
                            <Target className="w-8 h-8 mb-4 transition-colors duration-500 group-hover:text-white" />
                            <h3 className="font-bold text-[20px] mb-2 transition-colors duration-500 group-hover:text-white">
                                The Digital Age Demands Mastery in Sales
                            </h3>
                            <p className="transition-colors duration-500 group-hover:text-white">
                                With the digital revolution, buying behaviors have evolved. If you&#39;re not up-to-date,
                                you&#39;re leaving money on the table. Every. Single. Day.
                            </p>
                        </div>
                    </div>

                    <div className="group relative bg-white text-black rounded-xl p-6 shadow-md text-left overflow-hidden transition-all duration-500">
                        <div className="absolute inset-0 bg-[url('/assets/home/Why-Should-Founders-2.webp')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <div className="relative z-10">
                            <Users2 className="w-8 h-8 mb-4 transition-colors duration-500 group-hover:text-white" />
                            <h3 className="font-bold text-[20px] mb-2 transition-colors duration-500 group-hover:text-white">
                                Your Competitors Are Already Ahead
                            </h3>
                            <p className="transition-colors duration-500 group-hover:text-white">
                                While you&#39;re contemplating, they&#39;re capitalizing. Sales expertise isn&#39;t just an
                                advantage; it&#39;s the battleground where businesses are winning or losing.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="bg-white text-black rounded-xl px-6 py-4 max-w-4xl mx-auto shadow-md text-center -mb-3">
                    <p className="font-bold text-[17px]">
                        You might be wondering Ok Talha you have told us all these things but what should we do now?
                        Well, let me start by telling you about my journey.
                    </p>
                </div>

                <div className="flex justify-center ">
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
<ArrowDown/>
                    </div>
                </div>
            </div>
        </section>
    );
}
