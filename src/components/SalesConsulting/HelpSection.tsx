import React from "react";
import { BadgeCheck, Handshake, KeyRound } from "lucide-react";
import Image from "next/image";
const HelpSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-10 max-w-7xl mx-auto font-nunito">
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src="/assets/home/laptop.webp"
                    alt="Help Visual"
                    width={500}
                    height={500}
                    className="w-full max-w-md "
                />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    How Can I <span className="text-yellow-500">Help</span> You?
                </h2>

                <div className="space-y-6 text-gray-600">
                    <div className="flex items-start gap-4">
                        <BadgeCheck className="text-yellow-500 w-14 h-14 mt-1" />
                        <p>
                            Using my experience and research from the past half a decade I have compiled a
                            consultancy service that aims at helping individuals such as you.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <Handshake className="text-yellow-500 w-8 h-8 mt-1" />
                        <p>
                            I will provide you with hand-holding support so that your organization starts
                            rolling in clients on autopilot.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <KeyRound className="text-yellow-500 w-16 h-16 mt-1" />
                        <p>
                            The actual value you will get from this consultancy is the information and frameworks
                            we provide you in the consultancy. You can use these recurringly to make sales. It is
                            like a switch that you plug in to start making sales and close when you have had
                            enough.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
