import React from 'react';
import {ArrowDown} from "lucide-react";

const testimonials = [
    {
        name: 'Wasim',
        company: 'MEPLANET+',
        message: 'Totally recommend to boost your business.',
        video: '/assets/home/testimonial_TF.mp4',
    },
    {
        name: 'Abdullah',
        company: 'Serve&Co',
        message: 'Talha Help me solve my sales problems.',
        video: '/assets/home/TF_business_solutions.mp4',
    }
];

const VideoTestimonials = () => {
    return (
        <section className="py-24 px-4 text-center font-nunito max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-4  leading-snug"
                style={{fontWeight: 700}}>
                Video <span className="text-yellow-500">Testimonials</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow border border-black p-4 flex flex-col items-center"
                    >
                        <video
                            controls
                            className="rounded mb-4 w-full h-auto max-h-80 object-cover"
                        >
                            <source src={t.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="mb-1">{t.message}</p>
                        <p className="font-bold text-xl">
                            {t.name} From {t.company}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto text-center">
                <h3 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-4  leading-snug"
                    style={{fontWeight: 700}}>
                    Important Notice From Talha Fakhrr&#39;s{' '}
                    <span className="text-yellow-500">Sales Development Consultancy</span>
                </h3>
                <p className="mt-4 ">
                    Before you dive deeper into the transformative world of Talha fakhar’s Sales Development
                    Consultancy, there are a few crucial points we need to clarify:
                </p>
            </div>
            <section
                className="relative bg-white py-16"
                style={{
                    backgroundImage: "url('/images/parallax-bg.jpg')",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3  mb-12">
                        <div className="bg-primary border-l-[5px] border-black text-gray-900  shadow-md p-6">
                            <h3 className="font-bold text-start text-2xl  mb-2">No Earnings Guarantee:</h3>
                            <p className="text-start">
                                Please understand that nothing on this webpage should be interpreted as any form of
                                earnings guarantee or promise. Our consultancy is a comprehensive, personalized
                                service dedicated to supporting you in achieving your sales goals through expert
                                guidance and strategic planning.
                            </p>
                        </div>
                        <div className="relative rounded-md shadow-md  flex items-center justify-center p-4" style={{
                                backgroundImage: "url('/assets/home/question_mark.webp')",
                                backgroundAttachment: 'fixed',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                            <h3 className="font-bold text-white text-center  text-2xl  mb-2 relative z-10">
                                Understanding the Nature of Our Consultancy
                            </h3>
                        </div>
                        <div className="bg-white border-r-[5px] border-black   shadow-md p-6">
                            <h3 className="font-bold text-end text-2xl  mb-2">Real Effort, Real Commitment</h3>
                            <p className="text-end">
                                The success stories and income screenshots showcased on this page are the results of
                                exceptional dedication and hard work. These outcomes are not typical and are achieved
                                by individuals who have shown true commitment to their sales journey.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <ArrowDown className="text-primary w-14 h-14 animate-bounce" />
                    </div>
                    <div className="grid md:grid-cols-3">
                        <div className="bg-white  border-l-[5px] border-primary  shadow-md p-6">
                            <h3 className="font-bold text-start text-2xl  mb-2">NNo Magic Pills Here</h3>
                            <p className="text-start">
                                Talha Fakhar’s consultancy is not a shortcut to wealth or a ‘get-rich-quick’ scheme.
                                It’s a professional service designed to help you grow and excel as a sales executive
                                through your own effort and dedication.
                            </p>
                        </div>
                        <div
                            className="relative rounded-md shadow-md  flex items-center justify-center p-4"
                            style={{
                                backgroundImage: "url('/assets/home/question_mark.webp')",
                                backgroundAttachment: 'fixed',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                            <h3 className="font-bold text-white text-center  text-2xl  mb-2 relative z-10">
                                Setting Realistic Expectations
                            </h3>
                        </div>

                        <div className=" border-r-[5px] border-primary  text-white bg-[#54595F] shadow-md p-6">
                            <h3 className="font-bold text-end text-2xl  mb-2">The Power of Commitment</h3>
                            <p className="text-end">
                                Success in sales, as in any field, requires hard work, commitment, and perseverance.
                                Our consultancy is most effective for those who are ready to implement what they
                                learn, stay resilient, and consistently put in the effort.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default VideoTestimonials;
