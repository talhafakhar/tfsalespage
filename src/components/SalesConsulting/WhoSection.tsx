import {Lightbulb, User, Target } from "lucide-react";

export default function ConsultingSection() {
    const GrowthChartIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 6.35 6.35"
            fill="#F7CB41"
        >
            <g>
                <path d="M0.26485 5.82045a0.26458 0.26458 0 0 0-0.26563 0.26563 0.26458 0.26458 0 0 0 0.26563 0.26367h5.82031a0.26458 0.26458 0 0 0 0.26562-0.26367 0.26458 0.26458 0 0 0-0.26562-0.26563z" />
                <path d="M1.16328 3.96889c-0.34722 0-0.63476 0.28754-0.63476 0.63477v1.48242c0 0.14642 0.1192 0.26367 0.26562 0.26367h1.0586c0.14642 0 0.26367-0.11725 0.26367-0.26367v-1.48242c0-0.34723-0.28755-0.63477-0.63477-0.63477z" />
                <path d="M3.0168 3.0685c-0.34722 0-0.63477 0.28753-0.63477 0.63477v2.38281c0 0.14642 0.1192 0.26367 0.26367 0.26367h1.0586c0.14642 0 0.26367-0.11725 0.26367-0.26367v-2.38281c0-0.34724-0.28755-0.63477-0.63477-0.63477z" />
                <path d="M4.86836 2.27553c-0.34722 0-0.63477 0.28754-0.63477 0.63477v3.17578c0 0.14642 0.1192 0.26367 0.26368 0.26367h1.05859c0.14642 0 0.26563-0.11725 0.26563-0.26367v-3.17578c0-0.34723-0.2895-0.63477-0.63672-0.63477z" />
                <path d="M4.62052 0a0.26458 0.26458 0 0 0-0.26407 0.26355c0 0.14642 0.11885 0.26563 0.26407 0.26563h0.27337C3.39748 1.81595 1.83063 2.61513 0.21614 2.91429a0.26458 0.26458 0 0 0-0.21084 0.30851c0.03644 0.20807 0.28809 0.34791 0.50644 0.2139C2.05009 3.1136 3.7227 2.24981 5.29231 0.88754v0.31161c0 0.14642 0.11725 0.26367 0.26355 0.26367 0.14642 0 0.26562-0.11725 0.26562-0.26367V0.41987c0-0.22836-0.19337-0.41961-0.42173-0.41961z" />
            </g>
        </svg>
    );
    return (
        <section className="relative py-16 bg-[#54595F] text-white overflow-hidden" style={{backgroundImage: "url('/assets/home/business-consulting.webp')"}}>
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            <div className="container mx-auto px-4 relative z-99999">
                <h2 className="text-4xl md:text-[80px] max-w-3xl mx-auto text-center mb-12 font-nunito leading-snug" style={{fontWeight: 900}}>
                    Who Is This <span className="text-yellow-400">Consulting</span> For?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div className="bg-white text-black rounded-xl p-6 shadow-md border-l-4 border-yellow-400 space-y-4">
                        <div className="flex items-start gap-3">
                            <GrowthChartIcon />
                            <p className="font-medium text-[16px]">
                                Entrepreneurs who are looking for ways to increase their sales and scale their business.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" fill="#F7CB41"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>chart-downward</title><g id="Layer_2" data-name="Layer 2"><g id="invisible_box" data-name="invisible box"><rect width="48" height="48" fill="none"></rect></g><g id="icons_Q2" data-name="icons Q2"><path d="M42,40H8V16.8l10,10,5.9-5.9,11.4,11H30.1A2.1,2.1,0,0,0,28,33.7,2,2,0,0,0,30,36H40a2,2,0,0,0,2-2V24a2,2,0,0,0-2.3-2A2.1,2.1,0,0,0,38,24.1v4.8L24.1,15.1,18,21.2,8.4,11.6,8,11.3V6A2,2,0,0,0,4,6V44H42a2,2,0,0,0,0-4Z"></path></g></g></g></svg>
                            <p className="font-medium text-[16px]">Tech wizards who are great at the technical end of things but are unable to make sales even after developing a good product.</p>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-xl p-6 shadow-md border-l-4 border-yellow-400 space-y-4">
                        <div className="flex items-start gap-3">
                            <Lightbulb className="text-yellow-500 mt-1" />
                            <p className="font-medium text-[16px]">
                                Creative folks who do not know how to get clients for their services.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <User className="text-yellow-500 mt-1" />
                            <p className="font-medium text-[16px]">
                                Founders and Business owners.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Target className="text-yellow-500 mt-1" />
                            <p className="font-medium text-[16px]">
                                Salespeople who are unable to meet their targets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
