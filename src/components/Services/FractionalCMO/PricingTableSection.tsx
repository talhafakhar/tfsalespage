import {ArrowRight, Check} from 'lucide-react';
import React, {useEffect, useState} from "react";
import Image from "next/image";

const PricingSection = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <h2 className="text-5xl font-bold  mb-8 leading-tight">
                        Pricing{" "}<span className="text-primary">Plans</span>
                    </h2>
                    <p className="leading-relaxed">
                        Our pricing plans are as flexible as our marketing experts. Let an experienced CMO develop a strategy for your brand.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <Card>
                        <div className="mb-8">
                            <h3 className="font-bold">Design</h3>
                            <p className="text-sm">
                                Made for your day-to-day design needs
                            </p>
                            <div className="mt-6">
                                <span className="text-4xl font-semibold ">$4,999</span>
                                <span className="text-sm ml-1">+tax/mo</span>
                            </div>
                            <div>
                                <span className="text-xs">Paid Monthly</span>
                            </div>
                            <Button>Start Today</Button>
                        </div>
                        <FeatureList />
                    </Card>
                    <Card>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-primary text-white text-sm  px-4 py-1 rounded whitespace-nowrap">
                                Most popular
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="font-bold">Design + Dev</h3>
                            <p className="text-sm">
                                A turnkey design and development solution
                            </p>
                            <div className="mt-6">
                                <span className="text-4xl font-semibold ">$7,999</span>
                                <span className="text-sm ml-1">+tax/mo</span>
                            </div>
                            <div>
                                <span className="text-xs">Paid Monthly</span>
                            </div>
                            <Button >Start Today</Button>
                        </div>
                        <FeatureList features={2} />
                    </Card>
                    <Card highlighted>
                        <div className="mb-8">
                            <h3 className="font-bold text-white">Design + Creative</h3>
                            <p className="text-gray-400 text-sm">
                                A turnkey marketing and design solution for creative needs
                            </p>
                            <div className="mt-6">
                                <span className="text-4xl font-semibold text-white">$7,999</span>
                                <span className="text-gray-400 text-sm ml-1">+tax/mo</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">Paid Monthly</span>
                            </div>
                            <Button>Start Today </Button>
                        </div>
                        <FeatureList highlighted features={2} />
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CallToActionCard
                        highlighted
                        icon="/assets/services/phone.png"
                        title="Book a call"
                        description="Learn about how we can help you grow your business with the right design partner"
                        buttonText="Book a Call →"
                    />

                    <CallToActionCard
                        title="Refer a friend & earn"
                        icon="/assets/services/cash.svg"
                        description="Earn 10% monthly recurring commission for each referral."
                        buttonText="Join now →"
                    />
                </div>
            </div>
        </div>
    );
};
const Card = ({
                  children,
                  highlighted = false
              }: {
    children: React.ReactNode;
    highlighted?: boolean;
}) => (
    <div className={`relative border rounded-3xl p-8 shadow-xl ${highlighted
        ? 'bg-secondary'
        : 'bg-gray-100'}`}>
        {children}
    </div>
);

const Button = ({
                    children,
                }: {
    children: React.ReactNode;
}) => (
<div className="flex mt-6  rounded bg-gradient-to-tr from-primary  to-white border-primary border-2 shadow-lg mx-auto rgb-button will-change-transform">
    <div className="flex-1 font-button text-md bg-white/90 px-6 py-2 hover:scale-105 rounded hover:-translate-y-2 transition duration-500 items-center flex justify-center hover:shadow-md will-change">
        <button className="flex cursor-pointer items-center gap-1 will-change">
            <span className="will-change-transform">{children}</span>
            <ArrowRight className='w-5'/>
        </button>
    </div>
</div>

);
const FeatureList = ({features = 1, highlighted = false}: { features?: number; highlighted?: boolean; }) => (
    <div>
        <h4 className={`text-sm font-bold mb-4 ${highlighted ? 'text-gray-300' : 'text-secondary'}`}>
            What&#39;s included
        </h4>
        <ul className="space-y-3">
            <FeatureItem highlighted={highlighted} text={`${features} request${features > 1 ? 's' : ''} at a time`}/>
            <FeatureItem highlighted={highlighted} text="Unlimited brands"/>
            <FeatureItem highlighted={highlighted} text="Unlimited users" />
            <FeatureItem highlighted={highlighted} text="Unlimited revisions" />
            <FeatureItem highlighted={highlighted} text="Easy credit-card payments" />
            <FeatureItem highlighted={highlighted} text="Pause or cancel anytime" />
        </ul>
    </div>
);


const FeatureItem = ({ text , highlighted}: { text: string; highlighted?: boolean;  }) => (
    <li className="flex gap-2 items-center">
        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
        <span className={` text-xs ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{text}</span>
    </li>
);


const CallToActionCard = ({
                              title,
                              description,
                              buttonText,
                                icon,
    highlighted = false
                          }: {
    title: string;
    description: string;
    icon:string,
    buttonText: string;
    highlighted?: boolean;
}) => (
    <div className={`${highlighted ? 'bg-primary':'bg-white'} rounded-2xl p-8 shadow-xl flex justify-between gap-2 items-center`}>
       <div>
           <h3 className="text-2xl font-medium font-button text-gray-900 mb-3">{title}</h3>
           <p className=" text-xs mb-6">{description}</p>
           <button className={` ${highlighted ? "bg-secondary text-white" :" border border-secondary"} py-1 font-nav px-2  rounded-md  flex items-center`}>
               {buttonText}
           </button>
       </div>
        <div>
            <Image src={icon} alt='icon' width={100} height={100}/>
        </div>
    </div>
);

export default PricingSection;