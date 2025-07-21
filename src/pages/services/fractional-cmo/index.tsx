import HeroSection from "@/components/Services/FractionalCMO/HeroSection";
import Transform from "@/components/Services/FractionalCMO/TransformSection";
import CMOSubServicesSection from "@/components/Services/FractionalCMO/SubCategorySection";
import Footer from "@/components/Footer/footer";
import IndustriesGrid from "@/components/Services/FractionalCMO/GallerySection";
import PricingSection from "@/components/Services/FractionalCMO/PricingTableSection";
import Banner from "@/components/HomePage/bannerSection";
import FAQSection from "@/components/Services/FractionalCMO/FaqSection";
import Image from "next/image";
import {useEffect, useState} from "react";

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
                <CMOSubServicesSection/>
                <IndustriesGrid/>
                <Banner/>
                <FAQSection/>
                <PricingSection/>
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
