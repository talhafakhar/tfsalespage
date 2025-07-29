
import Footer from "@/components/Footer/footer";
import HeroSection from "@/components/Services/FractionalCTO/HeroSection";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import BenefitsSection from "@/components/Services/FractionalCMO/BenefitSection";
import SkillSet from "@/components/Services/FractionalCMO/SkillSetSection";
import SuccessSnapshots from "@/components/HomePage/SuccessSnapshotsSection";
import Testimonial from "@/components/HomePage/Testimonials";
import Banner from "@/components/HomePage/bannerSection";
import Difference from "@/components/Services/FractionalCMO/DifferenceSection";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import ContactSalesForm from "@/components/Services/FractionalCMO/contactForm";
import Image from "next/image";
import React, {useEffect, useState} from "react";
export default function FractionalCTO() {
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
                <div
                    className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md"
                    style={{zIndex: "99999"}}>
                    <div className="max-w-xl mx-auto flex gap-8 items-center">
                        <div className='flex gap-2 items-center'>
                            <div className="border rounded-full bg-white">
                                <Image src="/assets/services/user.png" alt="avatar" width={50} height={50}/>
                            </div>
                            <div className="text-xs flex items-center gap-1 text-gray-600">
                                <p className="text-base font-semibold">Hello 👋 I&apos;m</p>
                                <section className="h-[24px] rounded overflow-hidden  inline-block">
                                    <div className="animate-textLoop rounded">
                                        <div className="bg-sky-500 text-white rounded font-semibold px-3 py-1 h-[2.81rem] mb-[2.81rem]">
                                            Carlos Córdova
                                        </div>
                                        <div className="bg-primary text-white rounded font-semibold px-3 py-1 h-[2.81rem] mb-[2.81rem]">
                                            Web Developer
                                        </div>
                                        <div className="bg-red-700 text-white rounded font-semibold px-3 py-1 h-[2.81rem]">
                                            Software Engineer
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <button className='bg-black text-white font-button rounded-md p-2 text-xs'>
                            Book a Call
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}