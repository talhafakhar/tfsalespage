import { CheckCircle2, ArrowRight } from "lucide-react";
import React from "react";

const FinalCTA: React.FC = () => {
    return (
        <section className="bg-secondary text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 ">
                    Are You Ready to Build a{" "}
                    <span className="text-primary">
            Sales Engine That Scales?
          </span>
                </h2>
                <ul className="space-y-4 flex mb-12 text-left justify-center gap-10 flex-wrap">
                    {[
                        "Free Sales Audit",
                        "ROI-Focused Strategy",
                        "Templates & Training",
                    ].map((point, idx) => (
                        <li key={idx} className="flex  items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-green-400 drop-shadow-md flex-shrink-0" />
                            <span className="text-gray-200 text-lg">{point}</span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() =>
                        window.open("https://calendly.com/talhafakhar/discoverycall", "_blank")
                    }
                    className="px-8 py-3 bg-primary  font-bold text-black rounded text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition transform inline-flex items-center gap-2"
                >
                    Book Your Discovery Session
                    <ArrowRight className="w-6 h-6" />
                </button>

                <p className="mt-8 text-gray-400 text-base">
                    Prefer to start small?{" "}
                    <button
                        onClick={() =>
                            window.open("https://calendly.com/talhafakhar/discoverycall", "_blank")
                        }
                        className="underline underline-offset-4 font-medium hover:text-yellow-400 transition"
                    >
                        Start with a Free Sales Audit
                    </button>
                </p>
            </div>
        </section>
    );
};

export default FinalCTA;
