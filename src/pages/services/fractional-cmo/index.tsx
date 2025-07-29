import HeroSection from "@/components/Services/FractionalCMO/HeroSection";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import Footer from "@/components/Footer/footer";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import Banner from "@/components/HomePage/bannerSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import SuccessSnapshots from "@/components/HomePage/SuccessSnapshotsSection";
import Testimonial from "@/components/HomePage/Testimonials";
import ContactSalesForm from "@/components/Services/FractionalCMO/contactForm";
import SkillSet from "@/components/Services/FractionalCMO/SkillSetSection";
import Difference from "@/components/Services/FractionalCMO/DifferenceSection";

export default function FractionalCMOServicePage() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <div>
                <HeroSection/>
                <Transform/>
                <BenefitsSection/>
                <SkillSet/>
                <SuccessSnapshots/>
                <Testimonial/>
                <Banner/>
                <Difference/>
                <PricingSection/>
                <FAQSection faqs={[
                        {
                            id: 1,
                            question: "How much does it cost to hire a web development company?",
                            answer: (
                                <p>
                                    The cost of hiring a custom web application development company is determined by the composition of
                                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                                    detailed estimate for your project, please reach out to us with your specific requirements.
                                </p>
                            )
                        },
                        {
                            id: 2,
                            question: "What is custom programming?",
                            answer: (
                                <p>
                                    The cost of hiring a custom web application development company is determined by the composition of
                                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                                    detailed estimate for your project, please reach out to us with your specific requirements.
                                </p>
                            )
                        },
                        {
                            id: 3,
                            question: "What are the examples of custom web apps?",
                            answer: (
                                <p>
                                    The cost of hiring a custom web application development company is determined by the composition of
                                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                                    detailed estimate for your project, please reach out to us with your specific requirements.
                                </p>
                            )
                        },
                        {
                            id: 4,
                            question: "What is custom programming?",
                            answer: (
                                <p>
                                    The cost of hiring a custom web application development company is determined by the composition of
                                    the team working on the project, but typically companies charge between $30 to $70 per hour for
                                    specialist work. A flat fee for a web app can range from $10,000 to $200,000 per project. To get a
                                    detailed estimate for your project, please reach out to us with your specific requirements.
                                </p>
                            )
                        },
                    ]}/>
                <ContactSalesForm/>
                <Footer/>
            </div>
            {show && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 sm:px-4 py-3 rounded-md shadow-md   z-[99999]">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 max-w-xl mx-auto text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <div className="border rounded-full bg-white flex-shrink-0">
                                <Image src="/assets/services/user.png" alt="avatar" width={50} height={50} />
                            </div>
                            <div className="text-xs">
                                <p className="text-sm font-semibold">Hello 👋 I&apos;m</p>
                                <section className="h-6 sm:h-[24px] rounded overflow-hidden inline-block">
                                    <div className="animate-textLoop">
                                        <div className="bg-sky-500 text-white rounded font-semibold px-3 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Carlos Córdova
                                        </div>
                                        <div className="bg-primary text-white rounded font-semibold px-3 py-1 h-[2.5rem] mb-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Web Developer
                                        </div>
                                        <div className="bg-red-700 text-white rounded font-semibold px-3 py-1 h-[2.5rem] text-[0.75rem] sm:text-xs">
                                            Software Engineer
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <button className="bg-black text-white font-button text-nowrap rounded-md px-4 py-2 text-xs sm:text-sm mt-2 sm:mt-0">
                            Book a Call
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
}
