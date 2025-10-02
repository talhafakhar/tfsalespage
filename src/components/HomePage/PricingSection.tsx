import { ArrowRight, Check } from "lucide-react";
import React, { useEffect, useState } from "react";

type PricingCardFeature = { text: string };

type PricingCard = {
    title: string;
    subtitle: string;
    price: string;
    billing: string;
    badge?: string;
    highlighted?: boolean;
    features: PricingCardFeature[];
    duration?: string;
};

type PricingSectionProps = {
    plans: PricingCard[];
};

const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="py-12 px-4 sm:px-6 relative lg:px-8">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-[400px] h-[200px] bg-primary/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl relative mx-auto">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-8"
                    }`}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                        Choose the Right <span className="text-primary">Growth Path</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {plans.map((plan, index) => (
                        <Card key={index} highlighted={plan.highlighted}>
                            {plan.badge && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="bg-primary text-sm px-4 py-1 rounded whitespace-nowrap">
                                        {plan.badge}
                                    </div>
                                </div>
                            )}
                            <div className="mb-8">
                                <h3
                                    className={`font-bold text-xl ${
                                        plan.highlighted ? "text-white" : ""
                                    }`}
                                >
                                    {plan.title}
                                </h3>
                                <p
                                    className={`text-sm ${
                                        plan.highlighted ? "text-gray-400" : ""
                                    }`}
                                >
                                    {plan.subtitle}
                                </p>
                                <div className="mt-6">
                  <span
                      className={`text-4xl font-semibold ${
                          plan.highlighted ? "text-white" : ""
                      }`}
                  >
                    {plan.price}
                  </span>
                                    <span
                                        className={`text-sm ml-1 ${
                                            plan.highlighted ? "text-gray-400" : ""
                                        }`}
                                    >
                    /hr
                  </span>
                                </div>
                                <div>
                  <span
                      className={`text-xs ${
                          plan.highlighted ? "text-gray-400" : ""
                      }`}
                  >
                    {plan.billing}
                  </span>
                                </div>
                            </div>
                            <FeatureList
                                features={plan.features}
                                highlighted={plan.highlighted}
                            />
                        </Card>
                    ))}
                </div>

                <div className="w-full mb-8">
                    <div className="border rounded-2xl p-6 bg-gray-50 text-center shadow-md">
                        <p className="text-xl font-medium text-gray-700">
                            Need more team members?{" "}
                            <span className="text-primary font-semibold">Bespoke package available.</span>
                        </p>
                    </div>
                </div>
                {/* CTA Button */}
                <div className="flex justify-center">
                    <MainCTA>Start with a Free Sales Audit</MainCTA>
                </div>
            </div>
        </div>
    );
};

const Card = ({
                  children,
                  highlighted = false,
              }: {
    children: React.ReactNode;
    highlighted?: boolean;
}) => (
    <div
        className={`relative border rounded-3xl p-8 shadow-xl ${
            highlighted ? "bg-secondary" : "bg-gray-100"
        }`}
    >
        {children}
    </div>
);

const MainCTA = ({ children }: { children: React.ReactNode }) => (
    <button
        onClick={() =>
            window.open("https://calendly.com/talhafakhar/discoverycall", "_blank")
        }
        className="flex items-center gap-2 px-8 py-3 bg-primary text-black rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
    >
        {children}
        <ArrowRight className="w-5" />
    </button>
);

const FeatureList = ({
                         features = [],
                         highlighted = false,
                     }: {
    features?: PricingCardFeature[];
    highlighted?: boolean;
}) => (
    <div>
        <h4
            className={`text-sm font-bold mb-4 ${
                highlighted ? "text-white" : "text-secondary"
            }`}
        >
            What&#39;s included
        </h4>
        <ul className="space-y-3">
            {features.map((feature, index) => (
                <FeatureItem key={index} text={feature.text} highlighted={highlighted} />
            ))}
        </ul>
    </div>
);

const FeatureItem = ({
                         text,
                         highlighted = false,
                     }: {
    text: string;
    highlighted?: boolean;
}) => (
    <li className="flex gap-2 items-center">
        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
        <span
            className={`text-xs ${highlighted ? "text-gray-400" : "text-black"}`}
        >
      {text}
    </span>
    </li>
);

export default PricingSection;
