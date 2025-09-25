import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ArrowRight, PlusCircle} from "lucide-react";

interface FAQ {
    id: number;
    question: string;
    answer: React.ReactNode;
}

interface FAQSectionProps {
    faqs: FAQ[];
    fromOurCommunityPage?:boolean
}

const FAQSection: React.FC<FAQSectionProps> = ({faqs,fromOurCommunityPage}) => {
    const [activeItems, setActiveItems] = useState<number[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const toggleItem = (id: number) => {
        if (activeItems.includes(id)) {
            setActiveItems(activeItems.filter(itemId => itemId !== id));
        } else {
            setActiveItems([...activeItems, id]);
        }
    };


    return (
        <section className='bg-secondary'>
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h2 className={`${fromOurCommunityPage ?  "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"} font-bold text-center  mb-8 text-white leading-tight`}>
                    Frequently{" "}<span className="text-primary">Asked Questions</span>
                </h2>
                <p className="text-white text-center mb-5">Your doubts, cleared in seconds</p>

                <div className="space-y-4">
                    {faqs.map((item) => (
                        <motion.div
                            key={item.id}
                            className="border-b border-gray-200 pb-4"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: item.id * 0.1}}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer py-3"
                                onClick={() => toggleItem(item.id)}
                            >
                                <h2 className={`text-xl ${activeItems.includes(item.id) ? "text-primary" : "text-white"} font-semibold`}>
                                    {item.question}</h2>
                                <motion.div
                                    animate={{rotate: activeItems.includes(item.id) ? 45 : 0}}
                                    transition={{duration: 0.2}}
                                    className="  text-xl"
                                >
                                    <PlusCircle
                                        className={activeItems.includes(item.id) ? "text-primary" : "text-white"}/>

                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeItems.includes(item.id) && (
                                    <motion.div
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.3, ease: "easeInOut"}}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 text-sm text-gray-400">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
                    <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                    }`}>
                        <a
                            href="https://calendly.com/talhafakhar/discoverycall"
                            target="_blank"
                            className="group inline-flex items-center px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 focus:outline-none"
                        >
                            Book a Free Consultation
                            <span
                                className="ml-3 inline-flex w-7 h-7 rounded-full bg-black text-white items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                            >
    <ArrowRight className="w-4 h-4"/>
  </span>
                        </a>
                    </div>
            </div>

        </section>);
};

export default FAQSection;