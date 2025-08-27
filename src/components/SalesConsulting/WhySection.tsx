import { Check } from "lucide-react";

export default function WhySalesWrong() {
    return (
        <section className=" py-16 px-4 font-nunito">
            <div className="max-w-7xl mx-auto bg-white border border-black rounded-3xl shadow-2xl p-4  text-center">
                <h2 className="text-4xl md:text-[50px] text-[#424242]  text-center mb-4 font-nunito leading-snug" style={{fontWeight: 800}}>
                    Why Do Most People Get{" "}
                    <span className="text-primary">Sales Wrong?</span>
                </h2>
                <p className="text-[#424242] text- mb-6">
                    The majority of people do not even know what they are doing wrong and
                    continue to pour money down the drain with little to no effect.
                </p>
                <ul className="text-left space-y-4 text-[16px] text-[#424242]">
                    {[
                        "Service businesses often confine themselves to one sales channel and do not explore other options. Due to this they often become stale and then get out of business.",
                        "Most of the time Startups fail to generate sales due to the absence of a proper sales framework. And the worst thing about it is that they only realize it once it is too late.",
                        "A lot of the time business owners fail to create a customer persona of their buyers.",
                        "A belief that a good product is enough and they do not need sales or marketing to push their product.",
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check className="text-[#424242] mt-1" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
