import Image from "next/image";

export default function ClientProofSection() {
    return (
        <section className="bg-[#54595F] py-16 px-4 text-white font-nunito">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-[40px]  text-center max-w-4xl mx-auto mb-10 font-nunito leading-snug"     style={{fontWeight: 800}}>
                    Proof Of Our Happy <span className="text-yellow-400">Client</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-start gap-8">
                    <div className="w-full">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src="/assets/home/image-1-1.webp"
                                alt="Client Feedback 1"
                                width={400}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src='/assets/home/Screenshot_2023-12-13_at_1.11.37_PM.webp'
                                alt='Client Feedback 4'
                                width={600}
                                height={600}
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src='/assets/home/image-2.webp'
                                alt='Client Feedback 2'
                                width={600}
                                height={600}
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src='/assets/home/image-3.webp'
                                alt='Client Feedback 3'
                                width={600}
                                height={600}
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}